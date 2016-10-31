<?php
/**
 * Created by PhpStorm.
 * User: Betina
 * Date: 30/10/16
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$userName = $formData["name"];
$userEmail = $formData["email"];
$newsletterIds = (isset($formData["news"])? $formData["news"] : null);
$userIsMember = isset($formData["is-club-member"]);

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();


if(!doesUserExist($userEmail, $dbConn)) {
    $userId = createUser($userName, $userEmail, $userIsMember, $dbConn);

    if(!hasUserSubscribedYet($userId, $dbConn)) {
        subscribeNews($userId, $newsletterIds, $dbConn);
        setcookie("hasVoted", "true", time() + 3600);
    }
}

function doesUserExist($email, $dbConn) {
    return count(findUserByEmail($email, $dbConn)) > 0;
}

function findUserByEmail($email, $dbConn) {
    $stmt = $dbConn->prepare('SELECT * FROM User WHERE email = :email');
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function createUser($name, $email, $isMember, $dbConn) {
    $stmt = $dbConn->prepare('INSERT INTO User VALUES(NULL, :name, :email, :isMember)');
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':isMember', $isMember);
    $stmt->execute();
    $userId = findUserByEmail($email, $dbConn)[0]['user_id'];

    return $userId;
}

function hasUserSubscribedYet($userId, $dbConn) {
    $stmt = $dbConn->prepare('SELECT * FROM Newsletter_votes WHERE Newsletter_votes.user_id = :userId');
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();

    return count($stmt->fetchAll()) > 0;
}

function subscribeNews($userId, $newsletterIds, $dbConn) {

    foreach((array)$newsletterIds as $newsletterId) {
        printf("Inserting values userID: %s, newsletterIDs: %s", $userId, $newsletterId);
        $stmt = $dbConn->prepare('INSERT INTO Newsletter_votes(newsletter_id, user_id) VALUES(:newsletterId, :userId)');
        $stmt->bindParam(':newsletterId', $newsletterId);
        $stmt->bindParam(':userId', $userId);
        $stmt->execute();
    }
    return true;
}
