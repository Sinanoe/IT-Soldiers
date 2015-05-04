function check(form, vorname, nachname, buchautor, buchtitel, isbn, erscheinungsjahr, auflage) {
  
	recheck = /^[\sa-zßA-ZäöüÄÖÜ]+$/;
	// Überprüfe eingegebenen Vorname auf Gültigkeit
	if(!recheck.test(form.vorname.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.vorname.focus();
		return false;
	}
	// Überprüfe eingegebenen Nachname auf Gültigkeit
	if(!recheck.test(form.nachname.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.nachname.focus();
		return false;
	}
	// Überprüfe eingegebenen Buchautor auf Gültigkeit
	if(!recheck.test(form.buchautor.value)) {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.buchautor.focus();
		return false;
	}
	// Überprüfe eingegebenen Buchtitel auf Gültigkeit
	if(form.buchtitel.value == '') {
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.buchtitel.focus();
		return false;
	
	}

	recheck = /^(97(8|9))?\d{9}(\d|X)$/;
	
	if(!recheck.test(form.isbn.value)) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.isbn.focus();
		return false;
		
	}

	recheck = /^[0-9]+$/;

	if(!recheck.test(form.erscheinungsjahr.value) || form.erscheinungsjahr.value < 1000 || form.erscheinungsjahr.value >= 2015) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.erscheinungsjahr.focus();
		return false;
		
	}

	
	recheck = /^[0-9]+$/;

	if(!recheck.test(form.auflage.value)) {
	
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		form.auflage.focus();
		return false;
		
	}
	
	
	

	



}