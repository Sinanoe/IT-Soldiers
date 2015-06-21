function check(form, vorname, nachname, buchautor, buchtitel, isbn, erscheinungsjahr, auflage) {
  
	recheck = /^[\sa-zßA-ZäöüÄÖÜ]+$/;
	// Überprüfe eingegebenen Buchtitel auf Gültigkeit
	if(form.buchtitel.value == '') {
		form.buchtitel.style.border = "1px solid #FF0000";
		form.buchtitel.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
	
	}

	else {
		form.buchtitel.style.border = "";
		

	}
	

	
	// Überprüfe eingegebenen Buchautor auf Gültigkeit
	if(!recheck.test(form.buchautor.value)) {
		form.buchautor.style.border = "1px solid #FF0000";
		form.buchautor.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
	}

	else {
		form.buchautor.style.border = "";
		

	}
	
	recheck = /^\d{12}(\d|X)$/;
	
	if(!recheck.test(form.isbn.value)) {
		form.isbn.style.border = "1px solid #FF0000";
		form.isbn.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
		
	}

	else {
		form.isbn.style.border = "";
		

	}
	recheck = /^[0-9]+$/;

	if(!recheck.test(form.erscheinungsjahr.value) || form.erscheinungsjahr.value < 1000 || form.erscheinungsjahr.value >= 2015) {
		form.erscheinungsjahr.style.border = "1px solid #FF0000";
		form.erscheinungsjahr.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
		
	}

	else {
		form.erscheinungsjahr.style.border = "";
		

	}	
	recheck = /^[0-9]+$/;

	if(!recheck.test(form.auflage.value)) {
		form.auflage.style.border = "1px solid #FF0000";
		form.auflage.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
		
	}

	else {
		form.auflage.style.border = "";
		

	}
	recheck = /^[\sa-zßA-ZäöüÄÖÜ]+$/;
	// Überprüfe eingegebenen Vorname auf Gültigkeit
	if(!recheck.test(form.vorname.value)) {
		form.vorname.style.border = "1px solid #FF0000";
		form.vorname.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
	}

	else {
		form.vorname.style.border = "";
		

	}
	
	// Überprüfe eingegebenen Nachname auf Gültigkeit
	if(!recheck.test(form.nachname.value)) {
		form.nachname.style.border = "1px solid #FF0000";
		form.nachname.focus();
		alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
		return false;
	}

	else {
		form.nachname.style.border = "";
		

	}
	



}