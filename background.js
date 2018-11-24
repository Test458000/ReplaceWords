// Load a dictionary by url
	
const config = {
	dictUrl : "http://sbox.pp.ua/ext/dict.json",
};
	
let dictRes;

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
		.then ( dictRes => {           // Create a new object from Request and write it to Chrome
			chrome.storage.local.set(dictRes, function () {
				getDict ();
				// alert(dictRes);
			});	
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  // Return a dictionary to the main script
				chrome.tabs.sendMessage(tabs[0].id, {dictRes});				
			});	
		});
};

function getDict () {      // Get a dictionary and transfer into a script.js
	chrome.storage.local.get(dictRes, function (res) {
		dictRes = res;
	});			
};
	
// Start this script
//setDict ();

// Temporary code

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