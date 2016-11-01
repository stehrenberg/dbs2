-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 29. Okt 2016 um 22:35
-- Server-Version: 10.1.10-MariaDB
-- PHP-Version: 5.6.19

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
-- Tabellenstruktur für Tabelle `Newsletter`
--

CREATE TABLE `Newsletter` (
  `newsletter_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `Newsletter`
--

INSERT INTO `Newsletter` (`newsletter_id`, `name`) VALUES
(1, '1.Liga'),
(2, '2.Liga'),
(3, '3.Liga'),
(6, 'Deutsche Nationalmannschaft'),
(4, 'Regionalliga Bayern'),
(5, 'WM 2018');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Newsletter_Abos`
--

CREATE TABLE `Newsletter_Abos` (
  `user_id` int(11) NOT NULL,
  `newsletter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `User`
--

CREATE TABLE `User` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(20) NOT NULL,
  `is_member` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Votes`
--

CREATE TABLE `Votes` (
  `club_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indizes für die Tabelle `Newsletter`
--
ALTER TABLE `Newsletter`
  ADD PRIMARY KEY (`newsletter_id`),
  ADD KEY `name` (`name`);

--
-- Indizes für die Tabelle `Newsletter_Abos`
--
ALTER TABLE `Newsletter_Abos`
  ADD PRIMARY KEY (`user_id`,`newsletter_id`),
  ADD KEY `newsletter_id` (`newsletter_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`email`),
  ADD KEY `username` (`name`),
  ADD KEY `is_member` (`is_member`);

--
-- Indizes für die Tabelle `Votes`
--
ALTER TABLE `Votes`
  ADD PRIMARY KEY (`user_id`) USING BTREE,
  ADD KEY `club_id` (`club_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Clubs`
--
ALTER TABLE `Clubs`
  MODIFY `club_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT für Tabelle `Newsletter`
--
ALTER TABLE `Newsletter`
  MODIFY `newsletter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT für Tabelle `User`
--
ALTER TABLE `User`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `Newsletter_Abos`
--
ALTER TABLE `Newsletter_Abos`
  ADD CONSTRAINT `newsletter_id` FOREIGN KEY (`newsletter_id`) REFERENCES `Newsletter` (`newsletter_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_id_newsletter` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

--
-- Constraints der Tabelle `Votes`
--
ALTER TABLE `Votes`
  ADD CONSTRAINT `club_id` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
