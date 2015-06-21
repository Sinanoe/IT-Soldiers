<?php


define ( "HOST", "localhost" ); 
define ( "USER", "Timo" ); 	// Datenbank-Benutzername
define ( "PASSWORD", "1234" ); 	// Datenbank-Passwort
define ( "DATABASE", "mybooks" ); 	// Datenbankname
define ( "CAN_REGISTER", "any" );
define ( "DEFAULT_ROLE", "member" );
define ( "SECURE", FALSE );

$mysqli = new mysqli ( HOST, USER, PASSWORD, DATABASE );
?>