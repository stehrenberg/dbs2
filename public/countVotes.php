<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 23/10/16
 * Time: 04:12
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query("SELECT COUNT('user_id') FROM votes")->fetch(PDO::FETCH_NUM);
$json = json_encode($queryResult[0]);
header("Content-Type: application/json");
echo $json;