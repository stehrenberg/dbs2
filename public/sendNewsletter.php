<?php

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$mailSubject = $formData["mail-subject"];
$mailText = $formData["mailtext"];
$newsCategories = isset($formData["news"]) ? $formData["news"] : null;
$newsCatsAsString = implode(', ', $newsCategories);
$onlyClubmembers = isset($formData["for-club-member"]);


$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();

$stmt = $dbConn->prepare("
    SELECT name, email, News.newsletter_id 
    FROM User, Newsletter_votes AS News 
    WHERE User.user_id = News.user_id 
    AND News.newsletter_id IN (:newsCats)
    AND is_member = :isMember;
");
$stmt->bindParam(':newsCats', $newsCatsAsString);
$stmt->bindParam(':isMember', $onlyClubmembers);
$stmt->execute();

$queryResult = $stmt->fetchAll(PDO::FETCH_ASSOC);

$emailData = [
    "subject" => $mailSubject,
    "text" => $mailText,
    "recipientData" => $queryResult
];

$json = json_encode($emailData);
header("Content-Type: application/json");
echo $json;