An [Obsidian-Publish](https://obsidian.md/publish) alternative but it's FREE

![](https://img.shields.io/badge/Initial%20Build-Success-brightgreen) ![](https://img.shields.io/badge/Final%20Release-Work%20in%20Progress-yellowgreen) ![](https://img.shields.io/badge/Demo-Active-brightgreen)

For demo, [Click Here](https://yoursamlan.github.io/pubsidian)

---
## Screenshots

<!--(![Lightmode](https://user-images.githubusercontent.com/33586885/127748655-8621a2cd-ee11-4834-8431-98ae413543a2.png))-->
![Lightmode2.0](https://user-images.githubusercontent.com/33586885/128595527-d8799497-271a-4dab-9019-90b8346c9d61.png)

<!--(![DarkMode](https://user-images.githubusercontent.com/33586885/127748617-77223cdf-d3d2-43db-aaa7-618e824d1c22.png))-->
![Darkmode2.0](https://user-images.githubusercontent.com/33586885/128595491-f812a105-63ba-4e77-858f-c68aa81d1d21.png)


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

---

## Quick-start guide
This project is currently under development. I've added a single-click-convertor for pubsidian notes. Now, you can generate a web version of your obsidian notes just with a single script. Video tutorial is coming soon.

- STEP-1: CONVERSION:
    -  **Make sure, you have installed Python 3.5 or later.**
    -  Now, **fork and download** [yoursamlan/pubsidian](https://github.com/yoursamlan/pubsidian) to your local machine.
    -  After downloading the repository, go to the ```tools``` directory.
    -  Now open command prompt/ terminal and run
        ``` pip install requirements.txt ```
    -  After installing the libraries successfully, copy ```convert2web.py``` from the tools directory to the obsidian directory, [i.e where your notes (.md) are stored.]
    -  Now open the command prompt again and run
    ``` python convert2web.py```
    -  Enter your name. It will be reflected as ```***'S NOTEBOOK``` in your pubsidian website.
    After running successfully, you'll get an ```OUTPUT``` directory, containing three elements: ```index.html```,```data.json``` and ```pages``` directory.

- STEP-2: HOSTING:
    -  Drag and drop your ```OUTPUT``` directory in [netlify]("https://app.netlify.com/drop")

Voila!! 🥳🥳 your site is online.

---

## Changelogs
### What's new in version 2.0:
- From now on, internal navigation will be auto-generated from ```data.json``` . No more manual deployment is required.  
- Cleaner and fresher look. Removing the sponsorship button (a.k.a [buy me a coffee](https://www.buymeacoffee.com/yoursamlan)) from the website (Because, none has sponsored so far 🥺 ).
- Minor UI tweaks.

### What's new in version 3.0:
- Created convert2web.py for converting your obsidian-notes to a website with just a single click.
- Minor bug fixes.

## Roadmap for future updates
- [x] ~~Auto-generated internal navigation.~~ (ver 2.0)
- [x] ~~One-click convert - convert and host your obsidian notes just with a click.~~ (ver 3.0)
- [ ] Adding content search.
- [ ] Introduce tags.
- [ ] Adding page navigation to the Graph View, so that you can move quickly from one age to another just by using GraphView.
- [ ] Theme supports and other customization.

---

If you have any idea/ suggestion, please put it in the issues.

If you love my work, you can [buy me a coffee](https://www.buymeacoffee.com/yoursamlan).

Thank you :)
