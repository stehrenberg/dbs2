<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 23/10/16
 * Time: 17:23
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$clubName = $formData["new-club"];

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$stmt = $dbConn->prepare('INSERT INTO Clubs(name) VALUES(:name)');
$stmt->bindParam(':name', $clubName);
$stmt->execute();

$queryResult = $dbConn->query('SELECT * FROM Clubs')->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($queryResult);
header("Content-Type: application/json");
echo $json;