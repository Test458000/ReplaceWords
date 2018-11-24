let dict;
checkDict ();

function checkDict () {             // Check is a dicionary exist
	if (!dict) {
		chrome.extension.sendMessage('get me a dictionary');
	} 
	else replaceWords();
};

chrome.runtime.onMessage.addListener( 			 //Get a dictionary from a background page
  function(request, sender, sendResponse) {
    if (request.dictRes){
		dict = request.dictRes;
		replaceWords ();
	};
  });	

function replaceWords () {     	 // Replace words on a page from dictionary
		let bodyPage = document.body.innerHTML; 		//body change
		let titlePage = document.title;			 //title change
		for (let i in dict) {
			let dicti = dict[i];
//			alert (i);
			for (let j in dicti) {
				bodyPage = bodyPage.replace(new RegExp(j,"g"), dicti[j]);
				titlePage = titlePage.replace(new RegExp(j,"g"), dicti[j]);
			}
		}
		document.body.innerHTML = bodyPage;
		document.title = titlePage;		
};

// Temporary code

//     	let lng = document.getElementsByTagName("html")[0].getAttribute("lang");; // Получение информации о текущем языке страницы	
//		if (langi == lng || langiTwice == lng) {	Don't work in many pages
//		let langi = '\"' + i +'\"';
//		let langiTwice = '\"' + i + '-' + i + '\"';	

