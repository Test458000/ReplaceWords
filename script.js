let dict, dictLast;

checkDict ();

function checkDict () {             // Check is a dicionary exist
	if (!dict) {
		chrome.extension.sendMessage('get me a dictionary');
	} 
	else {replaceWords()}	
};

chrome.runtime.onMessage.addListener( 			 //Check is a dictionary ready from chrome.storage.local
	function(request, sender, sendResponse) {
		if (request.answer == 'ready') {
			//alert (request.answer);
			chrome.storage.local.get(['dictionary'], function (res) {
				dict = res.dictionary;
				alert (dict);
				replaceWords();
			});
		};	
	});

function getDict () {
	chrome.storage.local.get(['dictionary'], function (res) {
	dict = res.dictionary;
	//alert (dict);
	});
}

/*function textParcing () {
	let textP;
	str.split(
};*/

function replaceWords () {      // Replace words on a page from dictionary
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

// Temporary code

/*  

	let bodyPage = document.body.getElementsByTagName('*'); 		//body change
	//alert(bodyPage);
	let titlePage = document.title;			 //title change
		
	for (let n = 0; n < bodyPage.length; n++) {    // Look over HTML-collection
		//let bodyPageN = bodyPage[n].innerText;
		//alert(bodyPageN);
		//alert(bodyPage[n].tagName);
		//let index = items.indexOf(bodyPage[n]);
		//alert(index);
		for (let i in dict) {
			let dictI = dict[i];
			//alert (i);
			for (let j in dictI) {
				//alert(dictI[j]);
				//alert (j);					
				bodyPage[n].textContent = bodyPage[n].textContent.replace(new RegExp(j,"g"),dictI[j]);
				//bodyPage.item(n) = bodyPageN;
				//alert(bodyPageN);
				titlePage = titlePage.replace(new RegExp(j,"g"), dictI[j]);
			}
		}
	}   
	
	alert(bodyPage);
	//document.body.getElementsByTagName('*') = bodyPage;
	//document.body.innerHTML = bodyPage;
	document.title = titlePage;		
};


function replaceWords () {      // Replace words on a page from dictionary
			let bodyPage = document.body.textContent; //body change
			let titlePage = document.title;	 //title change
			for (let i in dict) {
				let dicti = dict[i];
				alert (i);
				for (let j in dicti) {
					bodyPage = bodyPage.replace(new RegExp(j,"g"), dicti[j]);
					titlePage = titlePage.replace(new RegExp(j,"g"), dicti[j]);
				}
			}
			document.body.textContent = bodyPage;
			document.title = titlePage;				
};
*/

//     	let lng = document.getElementsByTagName("html")[0].getAttribute("lang");; // Получение информации о текущем языке страницы	
//		if (langi == lng || langiTwice == lng) {	Don't work in many pages
//		let langi = '\"' + i +'\"';
//		let langiTwice = '\"' + i + '-' + i + '\"';	

