<?php
include_once ("connect.php");
include_once ("buchanlegen.php");
// JSON Header

 /*
  *Hier wird geprüft, dass die Variablen nicht leer sind und aus mind. 4 Zeichen bestehen,
  *sodass die dazugehörigen Einträge gefunden werden. 
*/

if (isset ( $_GET["json"] ) AND strlen($_GET["json"])>3) {
	$json=$_GET["json"]."%";
	if ($statemt = $mysqli->prepare("SELECT autor, titel, kapitel, art, isbn, erscheinungsjahr, auflage FROM books WHERE genre LIKE ?")) {
 		$statement->bind_param("s", $json);
        	$statement->execute();
        	$result = $statement->get_result();
		$statement->close(); 	// Statement schließen
		mysqli_close($mysqli); 	// Datenbankverbindung trennen
		
		echo getJsonStructure($result);
    	}
}
?>