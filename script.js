chrome.storage.local.get (['dictionary'], function (res) {
    if (res.dictionary) {
        replaceWords(res.dictionary);
    }
});

function replaceWords (dict) {
	// Replace words on a page from dictionary
	let textReplace = [];
	let bodyPage = document.body.innerHTML; //body change
    let titlePage = document.title;	 //title change
    let textArr = bodyPage.match(/>(.*?)</g);
	// Loops for language
    for (let i in dict) {
        let dictI = dict[i];
        // Loops for replace words for this language
        for (let j in dictI) {
            // Loops each text for replace words and replace text
            for (let n = 0; n < textArr.length; n++) {
                if (textArr[n].indexOf(j) !== -1) {
                    textReplace[n] = textArr[n].replace(new RegExp(j, "g"), dictI[j]);
                    titlePage = titlePage.replace(new RegExp(j, "g"), dictI[j]);
                    bodyPage = bodyPage.replace(textArr[n], textReplace[n]);
                }
            }
        }
    }
	document.body.innerHTML = bodyPage;
	document.title = titlePage;
}

// Extension functions - not for use in general code

// Read a dictionary for check in any function
function dictRead(dictRes) { 		
	for (let i in dictRes) {
		let dictResI = dictRes[i];
		//console.log(i);
		//console.log(dictRes[i]);
		for (let j in dictResI) {
			alert (j);
			alert (dictResI[j]);
		}
	}		
}