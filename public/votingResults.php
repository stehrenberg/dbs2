<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 23/10/16
 * Time: 04:12
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$queryString = 'SELECT 0 AS rank, clubs.name, COUNT(user_id) AS voteCount, 0 as votesPercent FROM Votes, Clubs WHERE votes.club_id = Clubs.club_id GROUP BY votes.club_id ORDER BY voteCount DESC';

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query($queryString)->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($queryResult);
header("Content-Type: application/json");
echo $json;