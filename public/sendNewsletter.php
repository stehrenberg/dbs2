<?php

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$mailSubject = $formData["mail-subject"];
$mailText = $formData["mailtext"];
$onlyClubmembers = isset($formData["for-club-member"]);

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();
$queryResult = $dbConn->query("SELECT name, email FROM User")->fetchAll(PDO::FETCH_ASSOC);
$emailData = [
    "subject" => $mailSubject,
    "text" => $mailText,
    "recipientData" => $queryResult
];

$json = json_encode($emailData);
header("Content-Type: application/json");
echo $json;