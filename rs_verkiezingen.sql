-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 27 nov 2020 om 00:55
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
('', '0000-00-00', 3, '$2y$10$ImxrCxoNZcTo5.IX3lJGXOjZ4JnpSE.xhtcA35auoLCxP2dUiUlR.', 'Nee'),
('123', '2020-11-10', 3, '', 'Nee'),
('1230000', '2020-11-09', 3, '$2y$10$iyRgF3DOFMVjWqRv8OwLSeuSL1l.NYqG3YLmLYt7nRUIZTFmGsCJi', 'Nee'),
('12312', '0000-00-00', 3, '$2y$10$puOJvNAtLQGHX91bhBj3oeN/eTgdkFPdGlK1fTgmFELCYGfm2Nn5u', 'Nee'),
('123122', '0000-00-00', 1, '$2y$10$z01VTVok.yK.YACfDl24RO.W7M4b.vXTHwyQDkfE2wlhbC4Vyt76q', 'Nee'),
('123124124135123', '2020-11-03', 1, '$2y$10$MpNHBRdrNRUtvrn1nIR5/eY5YwR8l9djiBbFVAOxmr1LwXZ4UdOy6', 'Nee'),
('12344', '0000-00-00', 3, '1234', 'Nee'),
('123441', '0000-00-00', 3, '$2y$10$.iEMppV5ZnyRk4QOOsfBjuu8lV.o7qaHtMh1roefNp3xRzXfp6lK.', 'Nee'),
('12344121312', '2020-11-03', 3, '$2y$10$u7ikyAm/NZwYHvnpih.j5OX02GZCou5qixsV7XlPI5lkZCxDmvtsq', 'Nee'),
('123445', '0000-00-00', 3, '$2y$10$OVINk8iymDaa/dMV7IKlGevMJQp.Hjh5c/9yfNz/JPOrsMeXd58XK', 'Nee'),
('123456DE', '2020-11-09', 1, '$2y$10$rMvt3R66932KAsTyWjVvM.51Oc54ZX/UDRQGYrLcn0UISvrMSM1m2', 'Nee'),
('123456dx', '2020-11-02', 3, '$2y$10$C4hqCOz/eYI/jnuDy22nM.ABC9tToEDg0s/aYz9DkVfjn/noZnb3q', 'Nee'),
('123456ef', '2020-11-10', 3, '$2y$10$Dmm7n0tBH1mMOqkNez/jXeRRnjt6FSkz6p.UBfE6B0B0wAAbfiCFe', 'Nee'),
('123456es', '2020-11-12', 1, '$2y$10$vfO8JxHjsCaktFfwbGXyNOGq6WXrs9halkgH3N3Tlco0WolqZRiB.', 'Ja'),
('123456qw', '2020-11-08', 21, '$2y$10$7GFOdSFK2ijufbpVHD6LmufkyulPvBJXjIrFmSCajWqP8viIzuZFK', 'Nee'),
('12345@7e', '2020-11-10', 3, '$2y$10$WjUqHkcAkl8OJI5407.TK.xTeZQ2nOd4diC1tpQDMPVktB71am6Du', 'Nee'),
('12345de', '2020-11-11', 1, '$2y$10$QVKrwNAluevi91FlnM0dIOkmDDqVDacArodO/vTHOENUZJKw8YY0m', 'Nee'),
('12345dee', '2020-11-11', 1, '$2y$10$ZZZzLFkiJB.UATNORiPVMuX0xiYZkpDC5WGl.ji8iB/ai7ay9IlEe', 'Nee'),
('12345dee3', '2020-11-11', 1, '$2y$10$f8gmY9Sh3OOceKGBwOEhGerbtX9bbd8h2BDa8eMbpn5Lb7wxSnIKO', 'Nee'),
('12345dee332', '2020-11-11', 1, '$2y$10$EbkFq6vgbJwxvQntNxMN8./qv0ZFYear7I8LexWYrDjfA7Guq5NHC', 'Nee'),
('123534535434524', '2020-11-02', 1, '$2y$10$Xxp5OHnZYQipI39ZtVeH0e11nfZr4k.w7i5FW1M6qu7N8Ld.JWehe', 'Nee'),
('12399999', '2020-11-03', 3, '$2y$10$s.2RYWdCOFOCTknzGWdoluqqEK44QLZPlN7ccKCMW7ZZzRPWhChGW', 'Nee'),
('12412413412', '2000-07-16', 1, '', 'Nee'),
('1D34T678', '2020-11-02', 3, '$2y$10$km11jf9YduQIvDAGjdeny.3uh2GZEmhQ1fFNixxnjoAg/fdWuR4z.', 'Nee'),
('33213123', '2020-11-18', 1, '$2y$10$I5wPPwrs35O2J9rffOGfMutNlslB1qbyw9xko0aP.6bcWrWHkMK/2', 'Nee'),
('3453123', '0000-00-00', 1, '$2y$10$ecNQyhwru60MTKde4Xbbwe3MzzNrWq4E.YbyBMCERbVHvQhG9.1Pa', 'Nee'),
('34531232', '0000-00-00', 1, '$2y$10$ffkbsWpuOTDJH.U16vGTceOwj0m6N1cNSEqoMAVaeH9RcIGkbFyOa', 'Nee'),
('346356245135135', '2020-11-17', 3, '$2y$10$5y2Otppgzlc4Nz8buEZXauKlXaWVgNNCbt20.3aRRkoTG49z1EFWq', 'Nee'),
('4444444444444', '2020-11-23', 1, '$2y$10$dbGJ/Ck2IJ4cBzlwM/2X/uA6U4iiPD/QEbP71/j1npmo65rStMDe2', 'Nee'),
('45674674674', '2020-11-24', 3, '$2y$10$5Gw9ekMO1zv2xXkcYbXF2.XaTpIbj/VQ70I84x3Z8nanoBxzlFrs2', 'Nee'),
('45742473562357', '2020-11-16', 3, '$2y$10$L2ehN52b18PDyCqF51lPUOmUzZPBaBmWoxw8adLbD05abAGMdGir.', 'Nee'),
('457456743567', '2020-11-24', 3, '$2y$10$KXD6rxC/PcnvWz3.gDYI.OWAxXfigEj.lhAOhQd3RMntMfTqPPSi.', 'Nee'),
('465758674567846', '2020-11-10', 1, '$2y$10$nypQbFg6jg.IZylcoGXdoOhBH8sNWvNIq4KaPDsPRQRs9aheMVfKG', 'Nee'),
('50505050', '2020-11-17', 1, '$2y$10$BOqUjfk8.Ho6Wxy0YF.8Su3yeovV82h3OvBDmb/Rp1k6Z3.7xJHWS', 'Nee'),
('5050505050', '2020-11-17', 1, '$2y$10$lJzHWpYUfHydm7qSFaHDH.bm9ucCSAX9R6Ffc4ecaECIKOV9a5.zK', 'Nee'),
('5050505050505', '2020-11-17', 1, '$2y$10$M8cU3Vfpbd4/lrWmzTgmTOA/iE4ekSbLsR4U8z4WD4iZHaI3kZTim', 'Nee'),
('5675567', '0000-00-00', 3, '$2y$10$Z5yqlb8.7I/upHTl8fsvquyEOGHzYAktEUg2VAAf4wu.zcAWKIPOG', 'Nee'),
('5675672423', '2020-11-17', 3, '$2y$10$GBZePshSDo81K2lKfqFS3.uI/ZlAilFEiyKVak.3wFuPL3gO/bZki', 'Nee'),
('57646747', '2020-11-10', 1, '$2y$10$DnIbtacer3PTF97Y/4kqgO0Nbq8g0ApB4OoD.aJXv3SsvViL2JzR.', 'Nee'),
('6666', '0000-00-00', 3, '123', 'Nee'),
('676678678678', '2020-11-17', 1, '$2y$10$soYl6orlVmyBPPY.I8wZL.6UWjG4jayqfuzwTkzQz/ri7/7D..8l2', 'Nee'),
('67867868', '0000-00-00', 3, '$2y$10$1GZFEvT2kzVMhoD7TRO99.vR6nzXiGzmDSZE6YoMcDY87HKMiAUkG', 'Nee'),
('678678689999999', '0000-00-00', 3, '$2y$10$z8efPcIB6Zg7CAEtfMlLk.FLNBvfx3i7Dhp25BC8ot762yPWZMoF2', 'Nee'),
('67868699', '0000-00-00', 3, '$2y$10$h28a4/AWnaELdN/9dRqKl./6euY/u3rnIBIDBrf2xIMvW0O1I2jTW', 'Nee'),
('678967967968', '2020-11-03', 1, '$2y$10$n1Jc6Au28S/5sLeDbsa7LuCu0ewLUWSVyflw4GlY2NEmykBpq4.aW', 'Nee'),
('684573757', '2020-11-02', 1, '$2y$10$ggzpS20jvMXMJ6X3NDpKiOgYxVO16tJdR.PQkKyHKVQobVOtF2RlO', 'Nee'),
('7878787878', '2020-11-10', 3, '$2y$10$mFEKHHhbSpTEZZvt1h.F/uFcJ83c5.UJN1/Utm9Y6VCOes.YNy79C', 'Nee'),
('808080000000', '0000-00-00', 3, '$2y$10$djLVbi4lq/aWVocs.eDGYei.R6bvfy6sNK8XF/zsGh1qykEYSqL2e', 'Nee'),
('80808080', '0000-00-00', 1, '$2y$10$RjTSZ2wMYftZfoO73uuWsOO2oEKgh4mVedD6DiEZkcwgscHmaVcVy', 'Nee'),
('8796578578', '2020-11-09', 1, '$2y$10$ZLLy7vTywPHW.ctqhNbPhORdoSdrV.rxaH.BkKlBVVYMNJc4XftSu', 'Nee'),
('8908507905', '2020-11-18', 1, '$2y$10$ACBCKQMGe2T9YD3tn0nBkOIkiVHfqX3zMmH9gVcGVX21kKGHW8YX2', 'Nee'),
('8998989898', '2020-11-18', 1, '$2y$10$WfPqindsJWzRlRf.HxZCoumkMIqD0fsy7S3m7hVgJ0JlzPd.oNnB.', 'Nee'),
('9078900890', '2020-11-11', 3, '$2y$10$EEQZSnzalHI.R04M6gDqWeR.8q/Wp7yUcagZ/eniGBWGfQjPbpDFu', 'Nee'),
('90907907', '2020-11-24', 1, '$2y$10$ePrVhj66sui1H5M/szvUdOKr5bfFetv1l5gSIPyB/P8zYrGRsbIjy', 'Nee'),
('909090', '0000-00-00', 1, '$2y$10$oYyaiG2y0PbPZ.7yUJPVxeXRy68rSOyGKZDIfOYuxltaSfrZQA7Yu', 'Nee'),
('909090787878', '2020-11-10', 1, '$2y$10$XJUSSn0mfr2rSyvX3GRQiuh1uLTPYkhYpqRsd4FcYYlWaD3nfI9ue', 'Nee'),
('954569579595', '2020-11-10', 3, '$2y$10$RL48qth4HkjhOoY.rxilLONWGxjf7MnTt5CB4edM6jNFkm.QqCenu', 'Nee'),
('958975789', '2020-11-11', 1, '$2y$10$TZrwu7wnwKEDN51S.q4Y4.LEb18rOYpbF5uEkrWXA25NeMQYbchj2', 'Nee'),
('999', '0000-00-00', 3, '$2y$10$ROCFQtGOQhthYfNqQgeyVOkQLetIHyEufJJKSb8pfJGMTZpvEpZ3u', 'Nee'),
('d2e34567', '2020-10-26', 3, '$2y$10$ycxrbvnWQqfTJ3IVv4j8UussmU/1VmEPPM2ZbHmDX8GDGY.od7vmm', 'Nee'),
('de345678', '2020-10-27', 3, '$2y$10$97d.iQtjR/axe9b0rhJ2YON5tU2zAb7oD6ktJdnIxlGGJrjkVh.z6', 'Nee'),
('ft000001', '1995-12-12', 1, '$2y$10$n6xS2ZrnfQVCA0VV9/.1sOV7sNGwTfG3U0UEi3er7o7r3MGjQdewu', 'Ja'),
('ft000002', '1988-11-27', 1, '$2y$10$eP1oM0Coh7DtnXp1neQc9OqJQ/TBdGebsOFYqNC5cbvGXUIxl1ZHC', 'Ja'),
('ft000111', '2004-11-15', 1, '$2y$10$EFFdw.Q.AlKgVYtdAjD0HeVf17IDgPIzVcj00fnhHvhEYQmS4TksK', 'Ja'),
('ft000123', '2020-11-15', 1, '$2y$10$Nq43/K7eQHwrrYqnMGUkh.63yvvikXg.uzw/eCRvo1gLo4u1qWM7G', 'Nee'),
('FT000222', '2020-11-11', 1, '$2y$10$LVGeA69ZDwRqSe9tJjoN8eXGaJzmSV6BsRv5F.IdAxb5p61GAbInG', 'Ja'),
('ft000321', '2020-11-19', 1, '$2y$10$e6j6eAEYJv82XVGvh2dUke5rrPXMnfT0vIuBL3bGSCWQSUKKETACq', 'Ja'),
('ft000333', '2020-11-22', 1, '$2y$10$tAdjCDvnPKwX.EdIdrWlc.B8AwLDBCrnnA9r2GYXYudxaNEkHF.XK', 'Ja'),
('ft000345', '1980-11-18', 1, '$2y$10$THZ1oabZutlK8P33X7D2CuE3iNmxORELTwBPKLBz.XswtQwZpxlua', 'Ja'),
('ft000444', '2020-11-16', 1, '$2y$10$tkNjQnWM4zAupruP4HWi1O9nENyuSTjGAPG7O4xiHQnz67OhG.FW6', 'Ja'),
('ft000456', '2020-11-09', 6, '$2y$10$gP2GZmWWlS3fsXosahvI4OD2xGSxeDLzZQpMx7r0tvlMWmw0D6vQu', 'Nee'),
('ft000457', '2020-11-09', 1, '$2y$10$HhxcaQ26VW4BN5h.cY0M6eNr3yAYdMcgVKiXucthYSjQoZUHkwBrW', 'Nee'),
('ft000555', '1996-11-18', 1, '$2y$10$tL5WFxQ2SF4FOWKQTRLcOu2MqPfx.h9pDQxkIbWY/4cu8iRy2S7.m', 'Ja'),
('ft000656', '2020-11-17', 1, '$2y$10$FhBKju7OOdKGPwb9Be9Agupctj8PpZtYZiqAQG4na50gnoUCS6fyu', 'Ja'),
('ft000678', '2000-08-15', 1, '$2y$10$RUEUYKftO6zM4LYwQCuAw.8ycg5TcXqt7G3IEe6haGw0LAkjgwtMC', 'Nee'),
('ft000777', '2000-11-14', 1, '$2y$10$5EQbqFar17TWrQUcAU0TSu4oGpFc.KBFbvhVJOuMCDyPkNkGlN0GC', 'Ja'),
('FT000888', '2001-05-21', 1, '$2y$10$vIakP9uiVH49.VLY1s757uakSkr7tY1ewfuQIHZhJJJf/6PIL2U/m', 'Ja'),
('ft000987', '2020-11-23', 1, '$2y$10$Tv5BCGZQuYVL16t7R7y/Oeu77h62xlwLJbg74mQA65SjtL1NLA5gS', 'Ja'),
('FT000999', '2001-11-12', 1, '$2y$10$A/rpOYOxpnPUEs/7/31AS.eNY3k9qnnmUD0FNH14wpPUK28LZkq/a', 'Ja'),
('ft001234', '1990-11-11', 1, '$2y$10$yb9HyRDLpS6pZBtUkSuiSur3TdXAIkyQwMidmujWuYSaAzZprre1G', 'Nee'),
('ft002345', '2016-02-22', 1, '$2y$10$zxhfstfaIjr3WwbzeSLZLewEYtoLld34oBJhuuIKR3qS/pYh52C/W', 'Ja'),
('ft987654', '2020-11-19', 1, '$2y$10$vGHGpcRamiiGeibzFtFy8.3WBvsnnonbG/3hCHgmtzbp.n83BT60m', 'Ja');

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
(1, 'Paramaribo', 8),
(3, 'Brokopondo', 0),
(6, 'para', 0),
(21, 'coroni', 0),
(28, 'testoo', 0),
(29, 'sipaliwini', 0);

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
(1, 'admin', '123', 'Super Admin');

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
(1, 'fgh', 'jkl', '', 45, 1, 91),
(2, 'qwerty', 'qwe', '', 43, 21, 67),
(3, 'tyu', 'op', '', 45, 21, 7),
(4, 'bhj', 'dfg', '', 43, 21, 65),
(5, 'hjk', 'dfg', '', 45, 21, 23),
(6, 'tyui', 'iuy', '', 43, 21, 5),
(7, 'zoom', 'zoomqwer', '', 45, 1, 9),
(20, 'fdbtb', 'gfnfn', '', 43, 1, 1),
(21, 'hjk', 'tyu', '', 43, 21, 67);

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
(43, 'BI BI BA', 'BBB', 10),
(44, 'WA WA WA', 'WWW', 9),
(45, 'aweawe ', 'AS', 10),
(46, 'wawa', 'WA', 9),
(48, 'wawaa', 'aweq', 9);

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
(1, 1, 45, 2),
(2, 1, 43, 1);

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
  MODIFY `ID_district` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT voor een tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `kandidaten`
--
ALTER TABLE `kandidaten`
  MODIFY `ID_kandidaten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT voor een tabel `partij`
--
ALTER TABLE `partij`
  MODIFY `ID_partij` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT voor een tabel `res_per_district`
--
ALTER TABLE `res_per_district`
  MODIFY `ID_resultaat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
