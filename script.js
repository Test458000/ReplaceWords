function ped_go () {
	
/*	const dictRu = {
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
*/
	
	// Загрузка и обработка словарей по ссылке 
	
	function get_dict(lng_res) {
		let temp;
		fetch ("http://sbox.pp.ua/ext/dict.json", {method: 'GET'}) // Запрос на сервер
			.then (response => {
				let dict_res = response.json();
				return  dict_res;
			})
			.then ( function (dict_res) {  // Создание нового массива из объекта Request 
				let lng_res = {};	
				for (let i in dict_res) {
					let n = 0;
					lng_res.n = i;
					temp = dict_res[i];			
				};	
				alert (temp);
				return temp;
			});
		alert (temp);
		return  lng_res;
	};
	
	const dict_all = get_dict();
	alert (dict_all);
	
	let lng = document.getElementsByTagName("html")[0].getAttribute("lang");; // Получение информации о текущем языке страницы

	// Замена слов на странице
	
//	let lang_i = '\"'+i+'\"';
	
	if (lng === "ru"){
		dict = dictRu;
	}
	else if (lng === "uk"){
		dict = dictUa;
	}
	else return;
	
	let b = document.body.innerHTML; //body change
	let t = document.title;	 //title change
	for (let i in dict) {
		b = b.replace(new RegExp(i,"g"), dict[i]);
		t = t.replace(new RegExp(i,"g"), dict[i]);
	}
	document.body.innerHTML = b;
	document.title = t;
}

ped_go ();
