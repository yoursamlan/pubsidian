#md2html bulk converter for pubsidian
#ver 0.1-beta
#author: Amlan Saha Kundu, 2021
#notes: This converter is modified according to my own need. Please modify the code (eg. folders, outputs etc.) accordingly.
#       Stable release will be coming soon.
#==============================================================================================================================

import markdown, re,os
#from markdown.treeprocessors import Treeprocessor
from markdown import markdown
from markdown.extensions.wikilinks import WikiLinkExtension
from urllib.parse import urlparse
from bs4 import BeautifulSoup

HOSTNAME="./Image/"

def find_md_links(md):
    #Return dict of links in markdown
    INLINE_LINK_RE = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
    FOOTNOTE_LINK_TEXT_RE = re.compile(r'\[([^\]]+)\]\[(\d+)\]')
    FOOTNOTE_LINK_URL_RE = re.compile(r'\[(\d+)\]:\s+(\S+)')
                    
    links = list(INLINE_LINK_RE.findall(md))
    footnote_links = dict(FOOTNOTE_LINK_TEXT_RE.findall(md))
    footnote_urls = dict(FOOTNOTE_LINK_URL_RE.findall(md))

    for key in footnote_links.keys():
        links.append((footnote_links[key], footnote_urls[footnote_links[key]]))

    return links

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
    outp = "./pages/"+fname+'.html'
    with open(inp, 'r') as f:
        text = f.read()
        text = markdown(text, extensions=[WikiLinkExtension(base_url='./pages/', end_url='.html')])
        text = strip(text,"See more")
        #print(find_md_links(text))
        html = markdown(text)
        html = highlight(html)
        soup = BeautifulSoup(html,"html.parser")
        for img in soup.findAll('img'):
            urlInfo = urlparse(img['src'])
            img['src'] = HOSTNAME + urlInfo.path
        html = str(soup)

    with open(outp, 'w') as f:
        f.write(html)

def convert():       
    directory = r'./'
    if not os.path.isdir(directory+"pages"):
        os.mkdir("pages") 
    findex = []
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            try:
                md2html(filename[:-3])
                findex.append(filename[:-3])
                print("Converting "+filename)
            except:
                continue
        else:
            continue

    f= open("data.json","w+")
    f.write('{\n  "graph": [],\n  "links": [],\n  "nodes": [\n')
    for i in range(len(findex)):
        if i==(len(findex)-1):
            f.write('\t{"sl":'+str(i)+', "size": 10, "score": 0.5, "id": "'+findex[i]+'", "type":"circle"}\n')
        else:
            f.write('\t{"sl":'+str(i)+', "size": 10, "score": 0.5, "id": "'+findex[i]+'", "type":"circle"},\n')
             
    f.write('],\n  "directed": false,\n  "multigraph": false\n}')
    f.close()
    print("\ndata.json has been created successfully.")

if __name__ == "__main__":
    convert()
