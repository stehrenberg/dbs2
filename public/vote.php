<?php
/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 17/10/16
 */

require_once __DIR__ . '/../backend/DatabaseConnector.php';

$formData = $_POST;
$userName = $formData["name"];
$votedClubId = $formData["clubs"];
$userEmail = $formData["email"];

$dbConnector = new DatabaseConnector();
$dbConn = $dbConnector->getConnection();

if(!doesUserExist($userEmail, $dbConn)) {
    $userId = createUser($userName, $userEmail, $dbConn);

    if(!hasUserVotedYet($userId, $dbConn)) {
        countVote($userId, $votedClubId, $dbConn);
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

function createUser($name, $email, $dbConn) {
    $stmt = $dbConn->prepare('INSERT INTO User VALUES(NULL, :name, :email)');
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $userId = findUserByEmail($email, $dbConn)[0]['user_id'];

    return $userId;
}

function hasUserVotedYet($userId, $dbConn) {
    $stmt = $dbConn->prepare('SELECT * FROM Votes WHERE Votes.user_id = :userId');
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();

    return count($stmt->fetchAll()) > 0;
}

function countVote($userId, $votedClubId, $dbConn) {
    printf("Inserting values userID: %s, clubID: %s", $userId, $votedClubId);
    $stmt = $dbConn->prepare('INSERT INTO Votes(club_id, user_id) VALUES(:clubId, :userId)');
    $stmt->bindParam(':clubId', $votedClubId);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    $queryResult = $dbConn->query("SELECT * FROM Votes")->fetchAll(PDO::FETCH_ASSOC);

    return true;
}
