-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 16. Okt 2016 um 04:23
-- Server-Version: 10.1.16-MariaDB
-- PHP-Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `soccer_clubs`
--
CREATE DATABASE IF NOT EXISTS `soccer_clubs` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `soccer_clubs`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Clubs`
--

CREATE TABLE `Clubs` (
  `club_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELATIONEN DER TABELLE `Clubs`:
--

--
-- Daten für Tabelle `Clubs`
--

INSERT INTO `Clubs` (`club_id`, `name`) VALUES
(7, 'Alemannia Aachen'),
(2, 'Bayer Leverkusen'),
(1, 'Bayern München'),
(4, 'Borussia Dortmund'),
(5, 'Dynamo Dresden'),
(6, 'Energie Cottbus'),
(3, 'Schalke 04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User`
--

CREATE TABLE `User` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELATIONEN DER TABELLE `User`:
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Votes`
--

CREATE TABLE `Votes` (
  `club_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `vote_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELATIONEN DER TABELLE `Votes`:
--   `club_id`
--       `Clubs` -> `club_id`
--   `user_id`
--       `User` -> `user_id`
--

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Clubs`
--
ALTER TABLE `Clubs`
  ADD PRIMARY KEY (`club_id`),
  ADD KEY `clubname` (`name`);

--
-- Indizes für die Tabelle `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`email`),
  ADD KEY `username` (`name`);

--
-- Indizes für die Tabelle `Votes`
--
ALTER TABLE `Votes`
  ADD PRIMARY KEY (`club_id`,`user_id`),
  ADD KEY `vote_date` (`vote_date`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Clubs`
--
ALTER TABLE `Clubs`
  MODIFY `club_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT für Tabelle `User`
--
ALTER TABLE `User`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Votes`
--
ALTER TABLE `Votes`
  ADD CONSTRAINT `club_id` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
