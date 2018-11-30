// Load a dictionary by url
	
const config = {
	dictUrl : "http://sbox.pp.ua/ext/dict.json",
	};

// Load and write a dictionary
function setDict () {
	fetch (config.dictUrl)          
		.then (response => {
			let dictRes = response.json();
			return dictRes;
		}).then ( dictRes => {
			// Write a dictionary to chrome.storage
			let dict = dictRes;
			chrome.storage.local.set({dictionary: dict});
		});
};

function checkDict () {
	// Check is a dictionary exist
    chrome.storage.local.get (['dictionary'], function (res) {
        if (!res.dictionary) {setDict ()}
    });
};

checkDict ();

// Extension functions - not for use in general code

// Read a dictionary for check in any function
function dictRead (dictRes) { 		
	for (let i in dictRes) {
		let dictResI = dictRes[i];
		//console.logalert(i);
		//console.logalert(dictRes[i]);
		for (let j in dictResI) {
            console.log (j);
            console.log (dictResI[j]);
		}
	}
}