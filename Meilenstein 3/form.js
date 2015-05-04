function check(form, vorname, nachname, buchautor, buchtitel, isbn, erscheinungsjahr, auflage) {
  
	recheck = /^[\sa-z�A-Z������]+$/;
	// �berpr�fe eingegebenen Vorname auf G�ltigkeit
	if(!recheck.test(form.vorname.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.vorname.focus();
		return false;
	}
	// �berpr�fe eingegebenen Nachname auf G�ltigkeit
	if(!recheck.test(form.nachname.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.nachname.focus();
		return false;
	}
	// �berpr�fe eingegebenen Buchautor auf G�ltigkeit
	if(!recheck.test(form.buchautor.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.buchautor.focus();
		return false;
	}
	// �berpr�fe eingegebenen Buchtitel auf G�ltigkeit
	if(form.buchtitel.value == '') {
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.buchtitel.focus();
		return false;
	
	}

	recheck = /^(97(8|9))?\d{9}(\d|X)$/;
	
	if(!recheck.test(form.isbn.value)) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.isbn.focus();
		return false;
		
	}

	recheck = /^[0-9]+$/;

	if(!recheck.test(form.erscheinungsjahr.value) || form.erscheinungsjahr.value < 1000 || form.erscheinungsjahr.value >= 2015) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.erscheinungsjahr.focus();
		return false;
		
	}

	
	recheck = /^[0-9]+$/;

	if(!recheck.test(form.auflage.value)) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte �berpr�fen Sie ihre Eingaben");
		form.auflage.focus();
		return false;
		
	}
	
	
	

	



}