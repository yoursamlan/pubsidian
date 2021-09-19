import markdown,re,os,pyimgur,tkinter,eel
import tkinter.filedialog as filedialog
from markdown import markdown
from markdown.extensions.wikilinks import WikiLinkExtension
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import codecs
types_of_encoding = ["utf8", "cp1252"]

def links(findex):
    linktext = ""
    for i in range(len(findex)):
        fpath="./OUTPUT/pages/"+findex[i]+".html"
        with open(fpath, 'r+') as f:
            contents = f.read()
            soup = BeautifulSoup(contents, "html.parser")
            link = soup.find_all("a")
            for tag in link:
                try:
                    target = (findex.index(tag.text.strip()))
                    linktext += '\n\t{"source": '+str(i)+', "target": '+str(target)+'},'
                except Exception as e:
                    print(e)
                    continue

            pattern =r'<(a|/a).*?>'
            result = re.sub(pattern , "", soup.decode('utf-8'))
            f.truncate(0)
            f.write(str(result))
            
    return(linktext[:-1])
                
   
def createJSON(findex):
    f= open("./OUTPUT/data.json","w+")
    f.write('{\n  "graph": [],\n  "links": ['+links(findex)+'\n],\n  "nodes": [\n')
    for i in range(len(findex)):
        if i==(len(findex)-1):
            f.write('\t{"sl":'+str(i)+', "size": 10, "score": 0.5, "id": "'+findex[i]+'", "type":"circle"}\n')
        else:
            f.write('\t{"sl":'+str(i)+', "size": 10, "score": 0.5, "id": "'+findex[i]+'", "type":"circle"},\n')
             
    f.write('],\n  "directed": false,\n  "multigraph": false\n}')
    f.close()
    print("\ndata.json has been created successfully.")
    eel.addText("<b style='color:green;'>data.json has been created successfully.</b>")

def createIndex(uname):
    path = "./OUTPUT/index.html"
    with open(path, mode='wb') as f:
        f.write(("<html><head><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' type='image/png' href='https://github.com/yoursamlan/pubsidian/blob/main/CDN/favicon.png?raw=true' /><title>pubsidian</title><link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'><link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'><a href='https://github.com/yoursamlan' target='_blank' pubsidian id='init'></a><link rel='stylesheet' href='https://rawcdn.githack.com/yoursamlan/pubsidian/d380fd11ac87a9d58b325f1fa85892d0cdaacfc2/CDN/style.css' type='text/css'><script type='text/x-mathjax-config'>MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script></head><body><div id='wrapper'><div id='mySidebar' class='sidebar'><a href='javascript:void()' class='closebtn' onclick='closeNav()'>×</a><div id='content'><div id='sideheader'><h4 id='headtext'>MENU </h4></div><input type='text' id='mySearch' onkeyup='myFunction()' placeholder='Search..' title='Type in a category'><ul id='myMenu'></ul><div class='debugdiv'><h4>Dark mode</h4><div id='dbgbtn'><label class='switch'><input type='checkbox' id='dbg'><span class='slider' onclick='togdarkmode()'></span></label></div></div></div></div><div id='pagecontent'><div id='heading'><button class='openbtn' id='hamb' onclick='openNav()'>☰</button><div id='title'><h5>"+uname+"'s notebook"+"</h5></div><button class='openbtn' id='graphbtn' onclick='openGraph();setTimeout(showGraph(), 400);'>&#128376;</button></div><div id='main'><h1 id='ContentHeading'>Welcome to Pubsidian<hr></h1><div id='mainContent'><img src='https://raw.githubusercontent.com/yoursamlan/pubsidian/main/CDN/pubsidian.png' alt='logo' style='height:10%; width:auto; display:block; margin-right:auto;float:none !important;'><p>Version: 3.2.0-beta <br>Developed by: <a href='https://github.com/yoursamlan' target='_blank' style='color: red'>Amlan Saha Kundu</a></p><h3>Help</h3><ul><li>Click ☰ on top left to open the MENU.</li><li>Click on your desired note to open.</li><li>To search a note, enter the name of the note in the search-bar</li><li>Click &#128376; on top right to open the Graph.</li><li>On 'Menu', toggle the switch to enable/ disable dark mode.</li></ul></div></div></div><div id='plotgraph'><a href='javascript:void()' id='closegraphbtn' onclick='closegraph(); setTimeout(location.reload.bind(location), 200);'>×</a><div id='GraphView'></div></div></div><img src='https://leancoding.co/DOYB8A' style='width:1px !important;'><script src='https://d3js.org/d3.v3.min.js'></script><script src='https://rawcdn.githack.com/yoursamlan/pubsidian/a7da9546987b84dfc80c52178f802e212d0a6ea8/CDN/network.js' type='text/javascript'></script><script src='https://rawcdn.githack.com/yoursamlan/pubsidian/a7da9546987b84dfc80c52178f802e212d0a6ea8/CDN/script.js' type='text/javascript'></script><script src='https://rawcdn.githack.com/yoursamlan/pubsidian/a7da9546987b84dfc80c52178f802e212d0a6ea8/CDN/data.js' type='text/javascript'></script><script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script></body></html>").encode('utf-8'))
        f.close()
        
def UpImgur(PATH):
    CLIENT_ID = "399d1bb9475998b" #can be used for multiple users
    im = pyimgur.Imgur(CLIENT_ID)
    uploaded_image = im.upload_image(PATH, title=PATH)
    print("Successfully uploaded to: "+str(uploaded_image.link))
    eel.addText("Successfully uploaded to: "+str(uploaded_image.link))
    return(uploaded_image.link)

def strip(text,sep):
    return text.split(sep, 1)[0]

def highlight(text):
    n = text.count("==")//2
    t = text
    for i in range(0,n):
        t = t.replace("==","<mark>",1)
        t = t.replace("==","</mark>",1)
    return t

   
def md2html(fname):
    inp = fname+'.md'
    outp = "./OUTPUT/pages/"+fname+'.html'
    with open('attachment.tmp', 'r') as atp:
        base_attachment = atp.read()
        atp.close()
    with open(inp, 'r') as f:
        text = f.read()
        p = re.compile(r'!\[\[(.+?)\]\]')
        text = re.sub(p, r'![\1](\1)', text)
        text = markdown(text, extensions=[WikiLinkExtension(base_url='./', end_url='.html'),'markdown.extensions.tables'])
        text = strip(text,"See more")
        html = markdown(text)
        html = highlight(html)
        soup = BeautifulSoup(html,"html.parser")
        for h in soup.select('h1'):
            h.extract()
        for hr in soup.select('hr'):
            hr.extract()
        for img in soup.findAll('img'):
            urlInfo = urlparse(img['src'])
            impath = base_attachment + urlInfo.path
            print("Ready to upload "+impath)
            eel.addText("Ready to upload "+impath)
            imgurl = UpImgur(impath)
            img['src'] = imgurl
        html = str(soup)
        
    with open(outp, 'w') as f:
        f.write(html)
        
def convert(uname):
    directory = r'./'
    #directory = 'C:/Users/amlan/Desktop/obsidian/FRIENDS/'
    if not os.path.isdir(directory+"OUTPUT"):
        os.mkdir("OUTPUT")
    if not os.path.isdir(directory+"OUTPUT/pages"):
        os.mkdir("OUTPUT/pages")
    selectFolder()
    findex = []
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            try:
                md2html(filename[:-3])
                findex.append(filename[:-3])
                print("Converting -> "+filename)
                eel.addText("Converting -> "+filename)
            except Exception as e:
                print(e)
                continue
        else:
            continue
        
    if len(findex)>0:
        createJSON(findex)
        createIndex(uname)
        print("Conversion SUCCESSFUL.")
        eel.addText("<b style='color:green;'>Conversion SUCCESSFUL.</b>")
    else:
        print("Nothing to convert in "+str(os.path.abspath(os.getcwd()))+". Please make sure the directory has .md files.")
        eel.addText("Nothing to convert in "+str(os.path.abspath(os.getcwd()))+". Please make sure the directory has .md files.")


eel.init('web')

@eel.expose
def selectFolder():
    root = tkinter.Tk()
    root.title(string='Choose Obsidian Attachment Directory')
    root.attributes("-topmost", True)
    root.withdraw()
    directory_path = filedialog.askdirectory()+"/"
    with open('attachment.tmp', 'w') as x:
        x.write(directory_path)
        x.close()
    #print(directory_path)
    #return directory_path

@eel.expose   
def tf(name):
    convert(name)
eel.start('app.html', size=(800, 800))



