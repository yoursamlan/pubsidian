darkmode()
if (getLS("darkflag") == 0) {
	document.getElementById("dbg").checked = "true";
}
showContentById(getLS("CID"));

function openNav() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	var aspectRatio = w / h;
	if ((aspectRatio < 0.75) || w < 360) {
		document.getElementById("mySidebar").style.padding = "2em";
		document.getElementById("mySidebar").style.color = "#fff";
		document.getElementById("mySidebar").style.width = "100%";
		document.getElementById("content").style.width = "100%";
		//document.getElementById("pagecontent").style.marginLeft = "100%";

	} else {
		document.getElementById("hamb").style.visibility = "hidden";
		document.getElementById("graphbtn").style.visibility = "hidden";
		document.getElementById("mySidebar").style.padding = "1em";
		document.getElementById("mySidebar").style.width = "360px";
		document.getElementById("pagecontent").style.marginLeft = "360px";
		//document.getElementById("title").style.marginLeft = "20px";
		document.getElementById("pagecontent").style.transition = "0.5s";
	}
}

function closeNav() {
	document.getElementById("hamb").style.visibility = "visible";
	document.getElementById("graphbtn").style.visibility = "visible";
	document.getElementById("mySidebar").style.padding = "0em";
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("pagecontent").style.marginLeft = "0";
}

function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("mySearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myMenu");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}


/*function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
				document.cookie = "darkflag = 1";
			}
		}
		return "1";
	}

*/
function getLS(cname) {
	var val = localStorage.getItem(cname);
	if (val !== null && val !== '') {
		return val;
	} else {
		if (cname == "darkflag") {
			localStorage.setItem("darkflag", "1");
			return "1";
		} else {
			localStorage.setItem("CID", "x");
			return "x";
		}
	}
}





function darkmode() {

	var darkflag = (getLS('darkflag'));
	var r = document.querySelector(':root');
	if (darkflag == 0) {
		r.style.setProperty('--bg', '#040407');
		r.style.setProperty('--font', '#eee');
		r.style.setProperty('--sidebarbg', '#111');
		r.style.setProperty('--sidebarfont', '#9af');
		r.style.setProperty('--searchfont', '#5d76f7');
		r.style.setProperty('--searchbg', '#222');
		r.style.setProperty('--graphbg', '#040407');

	} else if (darkflag == 1) {
		r.style.setProperty('--bg', '#eee');
		r.style.setProperty('--font', '#000');
		r.style.setProperty('--sidebarbg', 'rgba(150, 170, 255, 0.60)');
		r.style.setProperty('--sidebarfont', '#15161d');
		r.style.setProperty('--searchfont', '#eee');
		r.style.setProperty('--searchbg', '#8787f8');
		r.style.setProperty('--graphbg', '#9af');
	}

	showGraph();
}



function togdarkmode() {
	var darkflag = (getLS('darkflag'));
	if (darkflag == 0) {
		localStorage.setItem("darkflag", "1");
		darkmode();
	} else if (darkflag == 1) {
		console.log("hi");
		localStorage.setItem("darkflag", "0");
		darkmode();
	}
}




function openGraph() {

	/*
		var w = window.innerWidth;
		var h = window.innerHeight;
		var aspectRatio = w / h;
		console.log(aspectRatio)
		console.log(w)
		if ((aspectRatio < 1) || w < 1200) {*/
	document.getElementById("graphbtn").style.visibility = "hidden";
	document.getElementById("plotgraph").style.padding = "1em";
	document.getElementById("plotgraph").style.width = "100%";
	//document.getElementById("pagecontent").style.marginLeft = "100%";

}
/*else {
		document.getElementById("mySidebar").style.padding = "0em";
		document.getElementById("mySidebar").style.width = "0";
		document.getElementById("pagecontent").style.marginLeft = "0";
		document.getElementById("graphbtn").style.visibility = "hidden";
		document.getElementById("plotgraph").style.padding = "1em";
		document.getElementById("plotgraph").style.width = "800px";
		document.getElementById("pagecontent").style.marginRight = "700px";
		document.getElementById("pagecontent").style.transition = "0.5s";
	}
}*/

function closegraph() {
	document.getElementById("graphbtn").style.visibility = "visible";
	document.getElementById("plotgraph").style.padding = "0em";
	document.getElementById("plotgraph").style.width = "0";
	document.getElementById("pagecontent").style.marginRight = "0";
}



/* Loading Content into Div*/


function loadContent(fname) {
	document.getElementById("ContentHeading").innerHTML = fname + "<hr>";
	var fpath = "./pages/" + fname + ".html";
	fetch(fpath)
		.then(response => response.text())
		.then(data => {
			var t = data;
			//console.log(data);
			document.getElementById("mainContent").innerHTML = data;
		});
}


async function showContentById(nodeid) {
	const response = await fetch('data.json');
	//console.log(response);
	const data = await response.json();
	var nodedata = data.nodes[nodeid];
	//console.log(nodedata);
	const fname = nodedata.id;
	loadContent(fname);
}


function callContent(x) {
	var conid = x.id;
	showContentById(conid);
	localStorage.setItem("CID", conid);
}

async function makelist() {
	const response = await fetch('data.json');
	//console.log(response);
	const data = await response.json();
	var nodedata = data.nodes;
	var n = nodedata.length;
	var liele = "";
	for (var i = 0; i < n; i++) {
		var line = '<li><a href="#" onclick="callContent(this)" id="' + String(i) + '">' + nodedata[i].id + '</a></li>';
		liele = liele + line;
	}

	document.getElementById("myMenu").innerHTML = liele;
}
