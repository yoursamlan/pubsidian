An [Obsidian-Publish](https://obsidian.md/publish) alternative but it's FREE

![](https://img.shields.io/badge/Initial%20Build-Success-brightgreen) ![](https://img.shields.io/badge/Final%20Release-Work%20in%20Progress-yellowgreen) ![](https://img.shields.io/badge/Demo-Active-brightgreen)

For demo, [Click Here](https://yoursamlan.github.io/pubsidian)

---
## Screenshots

![Lightmode](https://user-images.githubusercontent.com/33586885/127748655-8621a2cd-ee11-4834-8431-98ae413543a2.png)

![DarkMode](https://user-images.githubusercontent.com/33586885/127748617-77223cdf-d3d2-43db-aaa7-618e824d1c22.png)

![GraphView](https://user-images.githubusercontent.com/33586885/127748717-7c65dd5e-5ced-4d41-96dc-e9b10c0d4975.png)

---

## Features
- Completely FREE
- Fully Responsive Notes.
- Graph View for Understanding Correlation BETTER and EASIER.
- Load where you left off.
- Search your note from a larger database.

## Dependency
- Only [d3.js](https://d3js.org) for generating the Graph. Apart from that, written completely in vanilla JS. No other JS library is used.

## Why this project?
- For the last couple of months, I'm using OBSIDIAN.md, a fantastic note-taking app, for tracking my studies and boosting productivity and **I LOVE IT**. But, after using for a while, yesterday, when I was about to present couple of notes to my friend, I had faced some serious challenges, publishing my notes.
- Browsing into the forum, I've come to know about Obsidian-Publish and some other alternatives. While [Obsidian publish](https://obsidian.md/publish) costs **8$ per month and works flawlessly** (which is btw a lot for the students like me with zero income😢), I have faced a hard time understanding its free alternatives. Also, all free alternatives lack the most interesting feature of OBSIDIAN, a.k.a the **Graph View**.
- That's why after 20+ hours of code and 6 cups of coffee, here's [my version](https://yoursamlan.github.io/pubsidian) of the free Obsidian Publish with **Graph View**🥳🥳...

## Quick-start guide
This project is currently under development. I'm trying to create a one-click deployment as soon as possible.

Meanwhile, if you want to host your own notes using pubsidian, you have to follow the steps below.
1. First of all you have to convert your obsidian notes from .md to .html format. You can either manually do that, or you can perform the following steps.
    0.  **Make sure, you have installed Python 3.5 or later.**
    a.  Now, **fork and download** [this repository](https://github.com/yoursamlan/pubsidian) to your local machine.
    b. After downloading the repository, go to the ```tools``` directory.
    c. Now open command prompt/ terminal and run
        ``` pip install requirements.txt ```
    d. After installing the libraries successfully, copy ```md2html.py``` from the tools directory to the obsidian directory, [i.e where your notes (.md) are stored.]
    e. Now open the command prompt again and run
    ``` python md2html.py```
    
    After running successfully, you'll see something like this...
    
![image](https://user-images.githubusercontent.com/33586885/128258717-dfb04e85-2ea0-478c-bbc9-8f002865f8b4.png)

- Your .md notes now have been converted to .html successfully. These .html notes will be stored in the ```pages``` directory. Also, you will see another ```data.json``` in your main directory.
    
2. Now copy and replace your generated ```data.json``` and ```pages``` directory in the forked directory and push it to the github.
3. Now enable github-pages from the setting.

And Voila, your notes are online. :)

## Changelogs
### What's new in version 2.0:
- From now on, internal navigation will be auto-generated from ```data.json``` . No more manual deployment is required.  
- Cleaner and fresher look. Removing the sponsorship button (a.k.a [buy me a coffee](https://www.buymeacoffee.com/yoursamlan)) from the website (Because, none has sponsored so far 🥺 ).
- Minor UI tweaks.

## Roadmap for future versions...
- [ ] Making the process fully automatic. So that, you can convert your whole vault with just one click.
- [ ] Adding content search.
- [ ] Introduce tags.
- [ ] Adding page navigation to the Graph View, so that you can move quickly from one age to another just by using GraphView.
- [ ] Theme supports and other customization.

---

If you have any idea/ suggestion, please put it in the issues.

If you love my work, you can [buy me a coffee](https://www.buymeacoffee.com/yoursamlan).

Thank you :)
