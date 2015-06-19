<?php

 // Eingaben werden in der Textdatei books.txt gespeichert
if (isset ( $_POST ['autor'], $_POST ['titel'], $_POST ['kapitel'], $_POST ['art'], $_POST ['isbn'], $_POST ['jahr'], $_POST ['auflage'] )) {
	
	$datei = 'books.txt';
	
	// Speicherung und Filterung der Formulardaten, '' fallen weg
	$autor = 	filter_input ( INPUT_POST, 'autor' );
	$titel = 	filter_input ( INPUT_POST, 'titel' );
	$kapitel = 	filter_input ( INPUT_POST, 'kapitel' );
	$art = 		filter_input ( INPUT_POST, 'art' );
	$isbn = 	filter_input ( INPUT_POST, 'isbn' );
	$jahr = 	filter_input ( INPUT_POST, 'jahr' );
	$auflage = 	filter_input ( INPUT_POST, 'auflage' );
	
	// Speichere alle Variablen
	$inhalt = $autor.', '.$titel.', '.$kapitel.' Kapitel, '.$art.', '.$isbn.', '.$jahr.', '.$auflage.'. Auflage';
	$inhalt .= ";\r\n\r\n"; 
	file_put_contents($datei, $inhalt, FILE_APPEND);
	echo "Das Buch wurde erfolgreich hinzugef&uuml;gt. <a href='book_entry.html'>Zur&uuml;ck zur vorherigen Seite.</a>";
}
?>