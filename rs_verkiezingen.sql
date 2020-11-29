-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 29 nov 2020 om 02:56
-- Serverversie: 10.4.11-MariaDB
-- PHP-versie: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rs_verkiezingen`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `burgers`
--

CREATE TABLE `burgers` (
  `ID_nummer` varchar(30) NOT NULL,
  `geboortedatum` date NOT NULL,
  `ID_district` int(11) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `gestemd` varchar(30) DEFAULT 'Nee'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `burgers`
--

INSERT INTO `burgers` (`ID_nummer`, `geboortedatum`, `ID_district`, `pwd`, `gestemd`) VALUES
('FT000001', '1998-11-11', 1, '$2y$10$iI5Hjrt/.1CLcEEEpOxpJeOphbeNA.qrWU3kQOEvNXLFdvwe68aqS', 'Ja');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `district`
--

CREATE TABLE `district` (
  `ID_district` int(11) NOT NULL,
  `districtnaam` varchar(60) NOT NULL,
  `aantalstemmen` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `district`
--

INSERT INTO `district` (`ID_district`, `districtnaam`, `aantalstemmen`) VALUES
(1, 'Paramaribo', 1),
(2, 'Wanica', 0),
(3, 'Nickerie', 0),
(4, 'Coronie', 0),
(5, 'Saramacca', 0),
(6, 'Commewijne', 0),
(7, 'Marowijne', 0),
(8, 'Para', 0),
(9, 'Brokopondo', 0),
(10, 'Sipaliwini', 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gebruikers`
--

CREATE TABLE `gebruikers` (
  `ID` int(11) NOT NULL,
  `usernaam` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `gebruikers`
--

INSERT INTO `gebruikers` (`ID`, `usernaam`, `password`, `rol`) VALUES
(1, 'admin', '123', 'Superadmin');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `kandidaten`
--

CREATE TABLE `kandidaten` (
  `ID_kandidaten` int(11) NOT NULL,
  `achternaam` varchar(30) NOT NULL,
  `voornaam` varchar(30) NOT NULL,
  `img` varchar(100) NOT NULL,
  `ID_partij` int(11) NOT NULL,
  `ID_district` int(11) NOT NULL,
  `aantalstemmen` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `kandidaten`
--

INSERT INTO `kandidaten` (`ID_kandidaten`, `achternaam`, `voornaam`, `img`, `ID_partij`, `ID_district`, `aantalstemmen`) VALUES
(1, 'Smith', 'James ', '855457images (3).jpg', 1, 1, 0),
(2, 'Smith', 'Mary', '852367images (2).jpg', 1, 2, 0),
(4, 'David', 'John', '250428download (8).jpg', 2, 1, 1),
(5, 'Chris ', 'Maria', '41757images (1).jpg', 2, 4, 0),
(7, 'Paul', 'Daniel ', '560827download (3).jpg', 3, 6, 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `partij`
--

CREATE TABLE `partij` (
  `ID_partij` int(11) NOT NULL,
  `Partijnaam` varchar(255) NOT NULL,
  `Partijafkorting` varchar(255) NOT NULL,
  `aantalstemmen` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `partij`
--

INSERT INTO `partij` (`ID_partij`, `Partijnaam`, `Partijafkorting`, `aantalstemmen`) VALUES
(1, 'Vooruitstrevende Hervormings partij', 'VHP', 0),
(2, 'Nationale Democratische Partij', 'NDP', 1),
(3, 'Pertjajah Luhur', 'PL', 0),
(4, 'Algemene Bevrijdings en Ontwikkelingspartij', 'ABOP', 0),
(5, 'Nationale Partij Suriname', 'NPS', 0),
(6, 'Broederschap en Eenheid in de Politiek', 'BEP', 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `res_per_district`
--

CREATE TABLE `res_per_district` (
  `ID_resultaat` int(11) NOT NULL,
  `ID_district` int(11) DEFAULT NULL,
  `ID_partij` int(11) DEFAULT NULL,
  `aantalstemmen` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `res_per_district`
--

INSERT INTO `res_per_district` (`ID_resultaat`, `ID_district`, `ID_partij`, `aantalstemmen`) VALUES
(1, 1, 2, 1);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `burgers`
--
ALTER TABLE `burgers`
  ADD PRIMARY KEY (`ID_nummer`),
  ADD KEY `ID_district` (`ID_district`);

--
-- Indexen voor tabel `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`ID_district`),
  ADD UNIQUE KEY `districtnaam` (`districtnaam`);

--
-- Indexen voor tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `usernaam` (`usernaam`);

--
-- Indexen voor tabel `kandidaten`
--
ALTER TABLE `kandidaten`
  ADD PRIMARY KEY (`ID_kandidaten`),
  ADD KEY `ID_partij` (`ID_partij`),
  ADD KEY `ID_district` (`ID_district`);

--
-- Indexen voor tabel `partij`
--
ALTER TABLE `partij`
  ADD PRIMARY KEY (`ID_partij`),
  ADD UNIQUE KEY `Partijnaam` (`Partijnaam`),
  ADD UNIQUE KEY `Partijafkorting` (`Partijafkorting`);

--
-- Indexen voor tabel `res_per_district`
--
ALTER TABLE `res_per_district`
  ADD PRIMARY KEY (`ID_resultaat`),
  ADD KEY `ID_district` (`ID_district`),
  ADD KEY `ID_partij` (`ID_partij`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `district`
--
ALTER TABLE `district`
  MODIFY `ID_district` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT voor een tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `kandidaten`
--
ALTER TABLE `kandidaten`
  MODIFY `ID_kandidaten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT voor een tabel `partij`
--
ALTER TABLE `partij`
  MODIFY `ID_partij` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT voor een tabel `res_per_district`
--
ALTER TABLE `res_per_district`
  MODIFY `ID_resultaat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `burgers`
--
ALTER TABLE `burgers`
  ADD CONSTRAINT `burgers_ibfk_1` FOREIGN KEY (`ID_district`) REFERENCES `district` (`ID_district`);

--
-- Beperkingen voor tabel `kandidaten`
--
ALTER TABLE `kandidaten`
  ADD CONSTRAINT `kandidaten_ibfk_1` FOREIGN KEY (`ID_partij`) REFERENCES `partij` (`ID_partij`),
  ADD CONSTRAINT `kandidaten_ibfk_2` FOREIGN KEY (`ID_district`) REFERENCES `district` (`ID_district`);

--
-- Beperkingen voor tabel `res_per_district`
--
ALTER TABLE `res_per_district`
  ADD CONSTRAINT `res_per_district_ibfk_1` FOREIGN KEY (`ID_district`) REFERENCES `district` (`ID_district`),
  ADD CONSTRAINT `res_per_district_ibfk_2` FOREIGN KEY (`ID_partij`) REFERENCES `partij` (`ID_partij`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
