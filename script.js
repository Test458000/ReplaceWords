chrome.storage.local.get (['dictionary'], function (res) {
    if (res.dictionary) {
        let dict = res.dictionary;
        //alert (dict);
        replaceWords(dict);
	} //else {chrome.extension.sendMessage('get me a dictionary');}
});

function replaceWords (dict) {
	// Replace words on a page from dictionary
		//alert (dict);
		let bodyPage = document.body.innerHTML; //body change
		let titlePage = document.title;	 //title change
		for (let i in dict) {
			let dictI = dict[i];
			//alert (i);
			for (let j in dictI) {
				bodyPage = bodyPage.replace(new RegExp(j,"g"), dictI[j]);
				titlePage = titlePage.replace(new RegExp(j,"g"), dictI[j]);
			}
		}
		document.body.innerHTML = bodyPage;
		document.title = titlePage;		
};


// Extension functions - not for use in general code

function dictRead(dictRes) { 		// Read a dictionary for check in any function
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