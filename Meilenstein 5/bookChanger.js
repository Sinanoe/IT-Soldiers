/**
 * Tabelle mitHorrorbuechern ein.
 * Tabelle mitRomanbuechern  aus.
 * Farbe des Horror-Tabs wird auf #3F48CC gesetzt.
 * Farbe des Roman-Tabs wird auf #00A2E8 gesetzt.
 */
function tab_horror_switcher() {
   
	
	document.getElementById('horror').style.backgroundColor="#3F48CC";
	document.getElementById('roman').style.backgroundColor="#00A2E8";
}

/**
 * Tabelle mit Romanbuechern ein.
 * Tabelle mit Horrorbuechern aus.
 * Farbe wird auf Standardwert #3F48CC gesetzt.
 * Farbe des Horror-Tabs wird auf #00A2E8 gesetzt.
 */
function tab_roman_switcher() {
 
	document.getElementById('horror').style.backgroundColor="#00A2E8";
	document.getElementById('roman').style.backgroundColor="#3F48CC";
}

/**
 * Die Tabelle wird angelegt.
 *
 */
function createTable(genre) {
	var source = "getBooks.php";
	var para = "json="+genre;
	if (genre=="") {
		document.getElementById("bookInventar").innerHTML=""; //eventuell weglassen
		return;
	} 
	if (window.XMLHttpRequest) {
		ajax=new XMLHttpRequest();
	} else {  // old browser compatibility (IE5, IE6)
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4 && ajax.status==200) {
			jsonString=ajax.responseText;
			jsonObj = JSON.parse(jsonString);
			
			jsonHTMLFormat = "<table class='bookInventory'><tr><th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th><th>Erscheinungsjahr</th><th>Auflage</th></tr>";
			for(i=0;i<jsonObj.bookdata.length;i++) {
				jsonHTMLFormat=jsonHTMLFormat + "<tr><td>"+ jsonObj.bookdata[i].autor+"</td><td>"+ jsonObj.bookdata[i].titel+"</td><td>"+ jsonObj.bookdata[i].kapitel+"</td><td>"+ jsonObj.bookdata[i].buchart+"</td><td>"+ jsonObj.bookdata[i].ISBN+"</td><td>"+ jsonObj.bookdata[i].erscheinungsjahr+"</td><td>"+ jsonObj.bookdata[i].auflage+"</td></tr>";

			}
			jsonHTMLFormat=jsonHTMLFormat + "</table>";
			document.getElementById("bookInventar").innerHTML=jsonHTMLFormat;
		


		}
	}
  

  ajax.open("GET", "getBooks.php?json="+data, true);
  ajax.setRequestHeader('Content-Type', 'application/json');
  ajax.send();
}