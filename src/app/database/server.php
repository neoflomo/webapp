<?php
$data = json_decode(file_get_contents("php://input"));
$nameSchulung = mysql_real_escape_string($data->nameSchulung);
$datum_von = mysql_real_escape_string($data->datum_von);
$datum_bis = mysql_real_escape_string($data->datum_bis);
$ort = mysql_real_escape_string($data->ort);
$kosten = mysql_real_escape_string($data->kosten);
mysql_connect("localhost","user","pw");
mysql_select_db("DATENBANKNAME");
mysql_query("INSERT INTO tabellenname('nameSchulung','datum_von','datum_bis','ort','kosten',)
VALUES('".$nameSchulung"','".$datum_von"','".$datum_bis"','".$ort"','".$kosten"',)");
?>