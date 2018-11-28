// Load a dictionary by url
	
const config = {
	dictUrl : "http://sbox.pp.ua/ext/dict.json",
	};
// Load and write a dictionary
function setDict () {
	fetch (config.dictUrl)          
		.then (response => {response.json()})
		.then ( dict => {
			// Write a dictionary to chrome.storage
			alert ('set dict');
			chrome.storage.local.set({dictionary: dict});
		})
};

function checkDict () {
	// Check is a dicionary exist
    chrome.storage.local.get (['dictionary'], function (res) {
        if (!res.dictionary) {setDict ()}
    });
};

// Extension functions - not for use in general code

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