function load() {
		viewJson('horror');
}

/**
 * Horrorbücher ein 
 * Farbänderung des Horror-Tabs auf #3F48CC
 * Farbänderung des Roman-Tabs auf #00A2E8
 */
function tab_horror_switcher() {
   
	
	document.getElementById('horror').style.backgroundColor="#3F48CC";
	document.getElementById('roman').style.backgroundColor="#00A2E8";
	viewJson('horror');
}
/**
 * Romanbücher ein
 * Farbänderung des Horror-Tabs auf #3F48CC
 * Farbänderung des Roman-Tabs auf #00A2E8
 */
function tab_roman_switcher() {
 
	document.getElementById('horror').style.backgroundColor="#00A2E8";
	document.getElementById('roman').style.backgroundColor="#3F48CC";
	viewJson('roman');
}



/**
 * Die Tabelle wird angelegt.
 *
 */
function viewJson(genre) {
	var source = "getBooks.php";
	var para = "json="+genre;
	if (genre=="") {
		document.getElementById("bookInventar").innerHTML=""; //eventuell weglassen
		return;
	} 
	if (window.XMLHttpRequest) {
		ajax=new XMLHttpRequest();
	} else {  
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
		//  Browser Kompatibilität 
	}
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4 && ajax.status==200) {
			jsonString=ajax.responseText;
			jsonHTML = "<table class='bookInventory'><tr><th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th><th>Erscheinungsjahr</th><th>Auflage</th></tr>";
			if (jsonString != '' && jsonString.search("titel") != -1) {
				jsonObj = JSON.parse(jsonString);
			
				for(i=0;i<jsonObj.bookdata.length;i++) {
					jsonHTML=jsonHTML + "<tr><td>" + jsonObj.bookdata[i].autor + "</td><td>" + jsonObj.bookdata[i].titel + "</td><td>" + jsonObj.bookdata[i].kapitel + "</td><td>" + jsonObj.bookdata[i].buchart + "</td><td>" + jsonObj.bookdata[i].isbn + "</td><td>" + jsonObj.bookdata[i].erscheinungsjahr + "</td><td>" + jsonObj.bookdata[i].auflage + "</td></tr>";
				}
			} else {
				jsonHTML=jsonHTML + "<tr><td colspan='7'>Zu dieser Genre sind keine B&uuml;cher vorhanden oder die Genre ist ungültig.</td></tr>";
			} 
			
			jsonHTML=jsonHTML + "</table>";
			document.getElementById("bookInventar").innerHTML=jsonHTML;

		}
	}
  

  ajax.open("GET", "getBooks.php?json="+data, true);
  ajax.setRequestHeader('Content-Type', 'application/json');
  ajax.send();
}
