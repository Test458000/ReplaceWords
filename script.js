function ped_go () {
	// body change
	let a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Россия/g, 'Педерация');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/России/g, 'Педерации');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Россией/g, 'Педерацией');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Росія/g, 'Педерація');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Росії/g, 'Педерації');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Росією/g, 'Педерацією');
	a = document.body.innerHTML;
	document.body.innerHTML = a.replace(/Росси́я/g, 'Педерация');
	a = document.body.innerHTML;
	
	// Title change
	let b = document.title;
	document.title = b.replace(/Россия/g, 'Педерация');
	b = document.title;
	document.title = b.replace(/России/g, 'Педерации');
	b = document.title;
	document.title = b.replace(/Россией/g, 'Педерацией');
	b = document.title;
	document.title = b.replace(/Росія/g, 'Педерація');
	b = document.title;
	document.title = b.replace(/Росії/g, 'Педерації');
	b = document.title;
	document.title = b.replace(/Росією/g, 'Педерацією');
}

ped_go ();