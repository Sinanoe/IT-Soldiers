<?php

 // Eingaben werden in der Textdatei books.txt gespeichert
if (isset ( $_POST ['buchautor'], $_POST ['buchtitel'], $_POST ['kapitel'], $_POST ['art'],$_POST ['genre'], $_POST ['isbn'], $_POST ['erscheinungsjahr'], $_POST ['auflage'] )) {
	
	$datei = 'books.txt';
	
	// Speicherung und Filterung der Formulardaten, '' fallen weg
	$autor = 	filter_input ( INPUT_POST, 'buchautor' );
	$titel = 	filter_input ( INPUT_POST, 'buchtitel' );
	$kapitel = 	filter_input ( INPUT_POST, 'kapitel' );
	$art = 		filter_input ( INPUT_POST, 'art' );
	$genre= 	filter_input ( INPUT_POST, 'genre' );
	$isbn = 	filter_input ( INPUT_POST, 'isbn' );
	$jahr = 	filter_input ( INPUT_POST, 'erscheinungsjahr' );
	$auflage = 	filter_input ( INPUT_POST, 'auflage' );
	
	
	// Speichere alle Variablen
	$inhalt = $autor.', '.$titel.', '.$kapitel.' Kapitel, '.$art.','.$genre.', '.$isbn.', '.$jahr.', '.$auflage.'. Auflage';
	$inhalt .= ";\r\n\r\n"; 
	file_put_contents($datei, $inhalt, FILE_APPEND);
	echo "Das Buch wurde erfolgreich hinzugef&uuml;gt. <a href='book_entry3.html'>Zur&uuml;ck zur vorherigen Seite.</a>";
	
}
?>