<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 17/10/16
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$votedClubId = $formData["clubs"];
$userEmail = $formData["email"];

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();

$stmt = $dbConn->prepare('SELECT * FROM user where email = :email');
$stmt->bindParam(':email', $userEmail);
$stmt->execute();

if (count($stmt->fetchAll()) == 0) {
    printf("User %s does not exist!", $userEmail);
}

echo "bla";

//$queryResult = $dbConn->query("INSERT INTO votes VALUES($votedClubId, $user)");
