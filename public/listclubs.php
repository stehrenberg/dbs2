<?php

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query("SELECT * FROM Clubs")->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($queryResult);
header("Content-Type: application/json");
echo $json;