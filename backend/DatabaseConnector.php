<?php

/**
 * Created by PhpStorm.
 * User: Steff
 * Date: 16/10/16
 */
class DatabaseConnector
{
    private $servername;
    private $username;
    private $password;
    private $connection;

    /**
     * DatabaseConnector constructor.
     */
    public function __construct(){
        $this->servername = "localhost";
        $this->username = "soccerclubs";
        $this->password = "123abc";
    }

    /**
     * @return PDO
     */
    public function getConnection() {
        if(!$this->connection) {
            $this->createConnection();
        }
        return $this->connection;
    }

    private function createConnection() {
        try {
            $conn = new PDO(
                "mysql:host=$this->servername; dbname=soccer_clubs;charset=utf8", $this->username, $this->password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection = $conn;
        }
        catch(PDOException $e) {
            echo("Connection failed: " . $e->getMessage());
        }
    }

}