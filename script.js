function ped_go () {
	
	const dictRu = {
		//Rus
		'Россия' : 'Педерация',
		'России' : 'Педерации',
		'Россией' : 'Педерацией',
		'Росси́я' : 'Педерация',
		'Россию' : 'Педерацию',
	};
	const dictUa = {
		//Ukrainian
		'Росія' : 'Педерація',
		'Росії' : 'Педерації',
		'Росією' : 'Педерацією',
		'Росію' : 'Педерацію',
		'Росі́я' : 'Педерація',
	};
	
	let lng = document.getElementsByTagName("html")[0].getAttribute("lang");;

	if (lng === "ru"){
		dict = dictRu;
	}
	else if (lng === "uk"){
		dict = dictUa;
	}
	else return;
	
	// body change	
	let b = document.body.innerHTML;	
	for (let i in dict) {
		b = b.replace(new RegExp(i,"g"), dict[i]);
	}
	document.body.innerHTML = b;
	
	// Title change
	let t = document.title;
	for (let i in dict) {
		t = t.replace(new RegExp(i,"g"), dict[i]);
	}
	document.title = t;
}

ped_go ();
