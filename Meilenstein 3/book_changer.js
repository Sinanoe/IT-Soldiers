/**
 * Tabelle mitHorrorbuechern ein.
 * Tabelle mitRomanbuechern  aus.
 * Farbe des Horror-Tabs wird auf #3F48CC gesetzt.
 * Farbe des Roman-Tabs wird auf #00A2E8 gesetzt.
 */
function tab_horror_switcher() {
    document.getElementById('tab_horror').style.display="";
	document.getElementById('tab_roman').style.display="none";
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
    document.getElementById('tab_horror').style.display="none";
	document.getElementById('tab_roman').style.display="";
	document.getElementById('horror').style.backgroundColor="#00A2E8";
	document.getElementById('roman').style.backgroundColor="#3F48CC";
}

/**
 * Die Tabelle wird angelegt.
 *
 */
function json_load(json_obj) {
	var i = 0;
	document.writeln("<table border='2'><tr>");
	document.writeln("<th>Autor</th><th>Titel</th><th>Kapitel</th><th>Art des Buches</th><th>ISBN</th><th>Erscheinungsjahr</th><th>Auflage</th></tr>");
	
	for(i=0;i<json_obj.bookdata.length;i++)
	{	
		
		document.writeln("<tr><td>"+ json_obj.bookdata[i].autor+"</td><td>"+ json_obj.bookdata[i].titel+"</td>");
		document.writeln("<td>"+ json_obj.bookdata[i].kapitel+"</td><td>"+ json_obj.bookdata[i].buchart+"</td>");
		document.writeln("<td>"+ json_obj.bookdata[i].ISBN+"</td><td>"+ json_obj.bookdata[i].erscheinungsjahr+"</td>");
		document.writeln("<td>"+ json_obj.bookdata[i].auflage+"</td></tr>");
		
	}
	document.writeln("</table>");
	
}