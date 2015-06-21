<?php

include_once ("connect.php");


 //Erstellung einer json-parsingfaehige Buchdatei
 
function getJsonStructure($topic)
{
	$jsonString = '{ "bookdata": [ ';
        while ($row = $topic->fetch_assoc()) {
		$jsonString=$jsonString.'{ "buchautor": "'.$row["buchautor"].'", "buchtitel": "'.$row["buchtitel"].'", "kapitel": '.$row["kapitel"].', "buchart": "'.$row["buchart"].'", "isbn": '.$row["isbn"].', "erscheinungsjahr": '.$row["erscheinungsjahr"].', "auflage": '.$row["auflage"].' }, ';
        }
	$jsonString = substr($jsonString, 0, -2);
	$jsonString = $jsonString.' ] }';
	$jsonString = utf8_encode( $jsonString );
	return $jsonString;
}

// Speicherung und Filterung der eingegebenen Daten
$vorname = 	utf8_decode(filter_input ( INPUT_POST, 'vorname' ));
$nachname = 	utf8_decode(filter_input ( INPUT_POST, 'nachname' ));
$autor = 	utf8_decode(filter_input ( INPUT_POST, 'buchautor' ));
$titel = 	utf8_decode(filter_input ( INPUT_POST, 'buchtitel' ));
$kapitel = 		    filter_input ( INPUT_POST, 'kapitel' );
$art = 		utf8_decode(filter_input ( INPUT_POST, 'art' ));
$isbn = 		    filter_input ( INPUT_POST, 'isbn' );
$jahr = 		    filter_input ( INPUT_POST, 'erscheinungsjahr' );
$auflage = 		    filter_input ( INPUT_POST, 'auflage' );
$genre = 	utf8_decode(filter_input ( INPUT_POST, 'genre' ));

if (isset ( $_POST["filmfavorit"] )) {
	$favorit = 'JA';
} else {
	$favorit = 'NEIN';
}
$reg = '/^[a-zA-ZäöüÄÖÜß ]+$/';

// Überpruefe Vorname auf korrekte Syntax
if (!preg_match($reg, $vorname) || $vorname=="") {
	$vorname="";
}
// Überpruefe Nachname auf korrekte Syntax
if (!preg_match($reg, $nachname) || $nachname=="") {
	$nachname="";
}
// Überpruefe Autor auf korrekte Syntax
if (!preg_match($reg, $autor) || $autor=="") {
	$autor="";
}
$reg = '/^[0-9]+$/';
// Überpruefe ISBN-Nummer auf korrekte Syntax
if (!preg_match($reg, $isbn) || strlen($isbn)!=13 || $isbn=="") {
	$isbn = "";
}
	// Überpruefe Jahr auf korrekte Syntax
if (!preg_match($reg, $jahr) || strlen($jahr)!=4 || $jahr<1000 || $jahr > date("Y") || $jahr=="") {
	$jahr="";
}
// Überpruefe  Auflage auf korrekte Syntax
if (!preg_match($reg, $auflage) || $auflage{0} == 0 || $jahr=="") {
	$auflage="";
}
// Benutzer neu anlegen, wenn er noch nicht existiert

$prep_stmt = "SELECT userID FROM user WHERE (Vorname = ? AND Nachname = ?) LIMIT 1";
$stmt = $mysqli->prepare ( $prep_stmt );
$stmt->bind_param ( 'ss', $vorname, $nachname );
$stmt->execute ();
$stmt->store_result ();
if ($stmt->num_rows == 1) {
	$stmt->bind_result($user_id);
	$stmt->fetch();
	$stmt->close();
} else {
	$insert_stmt = $mysqli->prepare ( "INSERT INTO user (Vorname, Nachname) VALUES (?, ?)" );
	$insert_stmt->bind_param ( 'ss', $vorname, $nachname);
	$insert_stmt->execute ();
	$insert_stmt->close();
	$stmt = $mysqli->prepare ( $prep_stmt );
	$stmt->bind_param ( 'ss', $vorname, $nachname );
	$stmt->execute ();
	$stmt->store_result ();
	if ($stmt->num_rows == 1) {
		$stmt->bind_result($user_id);
		$stmt->fetch();
	}
	$stmt->close();
}
// Es wird überprüft ob der User dieses Buch bereits angelegt hat, der Favoritenstatus wird aktualisiert falls nötig

$prep_stmt = "SELECT bookID FROM hasbook WHERE (userID = ? AND bookID = ?) LIMIT 1";
$stmt = $mysqli->prepare ( $prep_stmt );
$stmt->bind_param ( 'ss', $user_id, $isbn );
$stmt->execute ();
$stmt->store_result ();
if($stmt->num_rows == 1) {
	$update_stmt = $mysqli->prepare ( "UPDATE hasbook SET favorit = ? WHERE (userID = ? AND bookID = ?)" );
	$update_stmt->bind_param ( 'sss', $favorit, $user_id, $isbn);
	$update_stmt->execute ();
	$update_stmt->close();
} else {
	
	$insert_stmt = $mysqli->prepare ( "INSERT INTO books (autor, titel, kapitel, art, isbn, erscheinungsjahr, auflage, genre) VALUES (?, ?, ?, ?, ?, ?, ?, ?)" );
	$insert_stmt->bind_param ( 'ssssssss', $autor, $titel, $kapitel, $art, $isbn, $jahr, $auflage, $genre);
	$insert_stmt->execute ();
	$insert_stmt = $mysqli->prepare ( "INSERT INTO hasbook (userID, bookID, favorit) VALUES (?, ?, ?)" );
	$insert_stmt->bind_param ( 'sss', $user_id, $isbn, $favorit);
	$insert_stmt->execute ();
	$insert_stmt->close();
}
mysqli_close($mysqli);
?>
