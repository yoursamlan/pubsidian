var l = b;
(function (c, d) {
	var k = b,
		e = c();
	while (!![]) {
		try {
			var f = -parseInt(k(0x183)) / 0x1 * (parseInt(k(0x189)) / 0x2) + parseInt(k(0x195)) / 0x3 + -parseInt(k(0x193)) / 0x4 * (parseInt(k(0x181)) / 0x5) + parseInt(k(0x188)) / 0x6 * (parseInt(k(0x1a1)) / 0x7) + parseInt(k(0x17c)) / 0x8 * (parseInt(k(0x196)) / 0x9) + -parseInt(k(0x1ab)) / 0xa * (-parseInt(k(0x19b)) / 0xb) + -parseInt(k(0x18c)) / 0xc * (parseInt(k(0x18f)) / 0xd);
			if (f === d) break;
			else e['push'](e['shift']());
		} catch (g) {
			e['push'](e['shift']());
		}
	}
}(a, 0xc4a55), darkmode());
getLS(l(0x1a6)) == 0x0 && (document['getElementById'](l(0x197))[l(0x17f)] = 'true');
showContentById(getLS('CID'));

function openNav() {
	var m = l,
		c = window['innerWidth'],
		d = window['innerHeight'],
		e = c / d;
	e < 0.75 || c < 0x168 ? (document[m(0x1a8)](m(0x1ad))['style']['padding'] = m(0x1a5), document[m(0x1a8)]('mySidebar')['style']['color'] = '#fff', document[m(0x1a8)]('mySidebar')[m(0x1a9)]['width'] = m(0x1b0), document[m(0x1a8)]('content')[m(0x1a9)]['width'] = m(0x1b0)) : (document['getElementById']('hamb')['style']['visibility'] = m(0x180), document[m(0x1a8)](m(0x18e))[m(0x1a9)]['visibility'] = 'hidden', document['getElementById'](m(0x1ad))[m(0x1a9)]['padding'] = '1em', document['getElementById'](m(0x1ad))[m(0x1a9)][m(0x18a)] = m(0x186), document['getElementById']('pagecontent')['style']['marginLeft'] = m(0x186), document[m(0x1a8)]('pagecontent')[m(0x1a9)]['transition'] = '0.5s');
}

function closeNav() {
	var n = l;
	document['getElementById']('hamb')['style']['visibility'] = n(0x191), document['getElementById'](n(0x18e))[n(0x1a9)][n(0x17b)] = 'visible', document['getElementById'](n(0x1ad))[n(0x1a9)]['padding'] = '0em', document[n(0x1a8)](n(0x1ad))['style']['width'] = '0', document['getElementById']('pagecontent')[n(0x1a9)][n(0x198)] = '0';
}

function myFunction() {
	var o = l,
		c, d, e, f, g, h;
	c = document['getElementById']('mySearch'), d = c[o(0x1a4)][o(0x1a7)](), e = document['getElementById'](o(0x1a2)), f = e['getElementsByTagName']('li');
	for (h = 0x0; h < f['length']; h++) {
		g = f[h]['getElementsByTagName']('a')[0x0], g['innerHTML'][o(0x1a7)]()['indexOf'](d) > -0x1 ? f[h][o(0x1a9)][o(0x192)] = '' : f[h]['style']['display'] = 'none';
	}
}

function getLS(c) {
	var p = l,
		d = localStorage[p(0x185)](c);
	return d !== null && d !== '' ? d : c == 'darkflag' ? (localStorage['setItem']('darkflag', '1'), '1') : (localStorage[p(0x17d)]('CID', 'x'), 'x');
}

function darkmode() {
	var q = l,
		c = getLS('darkflag'),
		d = document['querySelector'](':root');
	if (c == 0x0) d['style']['setProperty'](q(0x1aa), '#040407'), d['style'][q(0x1a0)]('--font', q(0x19d)), d['style']['setProperty']('--sidebarbg', '#111'), d[q(0x1a9)]['setProperty'](q(0x19f), '#9af'), d['style'][q(0x1a0)]('--searchfont', q(0x187)), d['style']['setProperty']('--searchbg', '#222');
	else c == 0x1 && (d['style'][q(0x1a0)]('--bg', '#eee'), d['style']['setProperty'](q(0x184), '#000'), d[q(0x1a9)]['setProperty'](q(0x18d), 'rgba(150,\x20170,\x20255,\x200.60)'), d['style'][q(0x1a0)](q(0x19f), q(0x18b)), d['style']['setProperty'](q(0x1ae), '#eee'), d['style']['setProperty']('--searchbg', '#8787f8'));
	showGraph();
}

function togdarkmode() {
	var r = l,
		c = getLS('darkflag');
	if (c == 0x0) localStorage[r(0x17d)]('darkflag', '1'), darkmode();
	else c == 0x1 && (console['log']('hi'), localStorage[r(0x17d)]('darkflag', '0'), darkmode());
}

function b(c, d) {
	var e = a();
	return b = function (f, g) {
		f = f - 0x17b;
		var h = e[f];
		if (b['eOclLL'] === undefined) {
			var i = function (m) {
				var n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
				var o = '',
					p = '';
				for (var q = 0x0, r, s, t = 0x0; s = m['charAt'](t++); ~s && (r = q % 0x4 ? r * 0x40 + s : s, q++ % 0x4) ? o += String['fromCharCode'](0xff & r >> (-0x2 * q & 0x6)) : 0x0) {
					s = n['indexOf'](s);
				}
				for (var u = 0x0, v = o['length']; u < v; u++) {
					p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);
				}
				return decodeURIComponent(p);
			};
			b['ruwDDP'] = i, c = arguments, b['eOclLL'] = !![];
		}
		var j = e[0x0],
			k = f + j,
			l = c[k];
		return !l ? (h = b['ruwDDP'](h), c[k] = h) : h = l, h;
	}, b(c, d);
}

function openGraph() {
	var s = l;
	document['getElementById']('graphbtn')[s(0x1a9)]['visibility'] = 'hidden', document[s(0x1a8)]('plotgraph')['style']['padding'] = '1em', document['getElementById']('plotgraph')['style']['width'] = '100%';
}

function closegraph() {
	var t = l;
	document['getElementById'](t(0x18e))[t(0x1a9)]['visibility'] = t(0x191), document[t(0x1a8)]('plotgraph')[t(0x1a9)][t(0x1af)] = '0em', document[t(0x1a8)](t(0x1a3))['style'][t(0x18a)] = '0', document[t(0x1a8)]('pagecontent')[t(0x1a9)]['marginRight'] = '0';
}

function loadContent(c) {
	var u = l;
	document[u(0x1a8)](u(0x182))[u(0x194)] = c + u(0x19a);
	var d = u(0x19c) + c + u(0x1ac);
	fetch(d)['then'](e => e['text']())['then'](e => {
		var v = u,
			f = e;
		document[v(0x1a8)](v(0x19e))['innerHTML'] = e;
	});
}
async function showContentById(c) {
	var w = l;
	const d = await fetch(w(0x190)),
		e = await d[w(0x17e)]();
	var f = e[w(0x199)][c];
	const g = f['id'];
	loadContent(g);
}

function callContent(c) {
	var d = c['id'];
	showContentById(d), localStorage['setItem']('CID', d);
}

function a() {
	var y = ['ls1ZAwrLyMfYyMC', 'z3jHCgHIDg4', 'mJq3swzqA0zV', 'zgf0ys5QC29U', 'DMLZAwjSzq', 'zgLZCgXHEq', 'ngHuu1Pswq', 'Aw5Uzxjive1m', 'mtm4mZyZowDwq21Uvq', 'nZm3oteYn2DJDwvwAa', 'zgjN', 'BwfYz2LUtgvMDa', 'BM9Kzxm', 'pgHYpG', 'mtCYmtu0otvQtKjqvgi', 'lI9WywDLCY8', 'i2vLzq', 'BwfPBKnVBNrLBNq', 'ls1ZAwrLyMfYzM9UDa', 'C2v0uhjVCgvYDhK', 'otmWndi2sgnryxDk', 'BxLnzw51', 'CgXVDgDYyxbO', 'DMfSDwu', 'mMvT', 'zgfYA2zSywC', 'Dg9vChbLCKnHC2u', 'z2v0rwXLBwvUDej5swq', 'C3r5Bgu', 'ls1IzW', 'mtbYExDxyum', 'lMH0BwW', 'BxLtAwrLyMfY', 'ls1ZzwfYy2HMB250', 'CgfKzgLUzW', 'mtaWjq', 'DMLZAwjPBgL0Eq', 'ofzoAwz1sG', 'C2v0sxrLBq', 'ANnVBG', 'y2HLy2TLza', 'AgLKzgvU', 'mte0odiZmhfvsevgAG', 'q29UDgvUDeHLywrPBMC', 'mwjwzeXhsG', 'ls1MB250', 'z2v0sxrLBq', 'mZyWChG', 'iZvKnZzMnW', 'mtjfrxLZsuG', 'mty3odu3nfnlwgrpDa', 'D2LKDgG', 'iZe1mtyXza', 'nZGXnJq0C0Hlq3DL'];
	a = function () {
		return y;
	};
	return a();
}
async function makelist() {
	var x = l;
	const c = await fetch('data.json'),
		d = await c['json']();
	var e = d[x(0x199)],
		f = e['length'],
		g = '';
	for (var h = 0x0; h < f; h++) {
		var j = '<li><a\x20href=\x22#\x22\x20onclick=\x22callContent(this)\x22\x20id=\x22' + String(h) + '\x22>' + e[h]['id'] + '</a></li>';
		g = g + j;
	}
	document['getElementById'](x(0x1a2))['innerHTML'] = g;
}
