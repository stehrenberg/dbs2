<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 24/10/16
 * Time: 18:56
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query("SELECT * FROM Newsletter")->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($queryResult);
header("Content-Type: application/json");
echo $json;