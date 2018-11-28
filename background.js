// Load a dictionary by url
	
const config = {
	dictUrl : "http://sbox.pp.ua/ext/dict.json",
	tagList : ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", 
		"datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", 
		"h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "fieldset", "li", "link", 
		"main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", 
		"q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", 
		"table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "ul", "var", "video", "wbr"
	],
};
	
let dictRes, tagN, res, dictLast;
let s = false;

chrome.extension.onMessage.addListener (function (req) {   // Get a request for run this script
   if (req == 'get me a dictionary') {
		setDict ();
	};
});  

function setDict () {                // Load and write a dictionary
	fetch (config.dictUrl)          
		.then (response => {
			let resultResp = response.json();
			return resultResp;
		})
		/*.then ( dictRes => {           // Create a new object from Request
			dictLast = checkDictWords (dictRes);
			return dictLast;	
		})*/
		.then ( dictLast => {           // Write a dictionary to chrome.storage
			chrome.storage.local.set({dictionary: dictLast});	
		return dictLast;
		})
		.then ( dictLast => {  			// Return a dictionary to the main script
			alert (dictLast);
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {answer: 'ready'});				
			});	
		});
};

function dictRead (dictRes) { 		// Read a dictionary for check in any function
	for (let i in dictRes) {
		let dictResI = dictRes[i];
		//alert(i);
		//alert(dictRes[i]);
		for (let j in dictResI) {
			alert (j);
			alert (dictResI[j]);
		}
	}		
};

function checkDictWords(dictRes){
	getDict ();
	for (let i in dictRes) {
		let dictResI = dictRes[i];
		for (let j in dictResI) {
			for (n in config.tagList) {
				if (j == config.tagList[n] || dictResI[j] == config.tagList[n]) {
					s = true;
					//alert (j);
				};
			};
			if (s == true) {
				delete dictResI[j];
				j = undefined;
				s = false;
			};	
		};
		dictRes[i] = dictResI;
	}
	//dictRead(dictRes);
	return dictRes;	
};

function getDict () {      // Get a dictionary and transfer into a script.js
	chrome.storage.local.get(dictRes, function (res) {
		dictRes = res;			
	});
	return dictRes;	
};
	
// Start this script
//setDict ();

// Temporary code


/*function checkDictWords(dictRes) { 		// Check a dictionary for bad words
	let dictResI, nJ, dictTemp, dictTempJ;
	for (let i in dictRes) {
		dictResI = dictRes[i];
		for (let j in dictResI) {
			for (n in config.tagList) {
				if (j == config.tagList[n] || dictResI[j] == config.tagList[n]) {
					s = true;
					alert (j);
				};
			};
			if (s == true) {
				delete dictResI['\"' + j +'\"'];
				j = undefined;
				s = false;
			};	
		};
		dictRes[i] = dictResI;
	};
	return dictRes;
}*/

//     	let lng = document.getElementsByTagName("html")[0].getAttribute("lang");; // Получение информации о текущем языке страницы	
//		if (langi == lng || langiTwice == lng) {	Don't work in many pages
//		let langi = '\"' + i +'\"';
//		let langiTwice = '\"' + i + '-' + i + '\"';	

/*			for (let i in dict) {
				alert(dict[i]);
				let dicti = dict[i];
				for (let j in dicti) {
					alert (dicti[j]);
					alert ([j]);
				};
			};
*/