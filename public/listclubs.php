<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 17/10/16
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query("SELECT * FROM clubs")->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($queryResult);
header("Content-Type: application/json");
echo $json;