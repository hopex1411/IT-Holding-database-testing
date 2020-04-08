-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 27. 09 2019 kl. 14:32:53
-- Serverversion: 10.1.35-MariaDB
-- PHP-version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boligstjernen`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `bolig`
--

CREATE TABLE `bolig` (
  `id` int(11) NOT NULL,
  `sagsnummer` int(11) NOT NULL,
  `boligtype` varchar(45) NOT NULL,
  `boligsize` int(11) NOT NULL,
  `grunareal` int(11) NOT NULL,
  `pris` int(11) NOT NULL,
  `brutto` int(11) NOT NULL,
  `netto` int(11) NOT NULL,
  `boligtitle` text NOT NULL,
  `boligtext` text NOT NULL,
  `postnr` int(11) NOT NULL,
  `by` text NOT NULL,
  `vej` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `bolig`
--

INSERT INTO `bolig` (`id`, `sagsnummer`, `boligtype`, `boligsize`, `grunareal`, `pris`, `brutto`, `netto`, `boligtitle`, `boligtext`, `postnr`, `by`, `vej`, `image`) VALUES
(6, 108072, 'Rækkehus', 128, 182, 2895000, 17976, 16137, 'Indflytningsklar luksusejendom nær skov og strand.', 'I byggeriet er der lagt vægt på enkle materialer. Det sker for at opnå et æstetisk rent udtryk, der danner en moderne kontrast til det naturskønne område. ', 4000, 'Roskilde', 'Rabalderstræde', '2a.jpg'),
(7, 180702, 'Lejlighed', 128, 128, 1795000, 12854, 9873, 'Nydelig og funktionelt indrettet høj stuelejlighed.', 'Lejligheden er beliggende i en hyggelig, stille sidegade med mange smukke, gamle ejendomme og masser miljø. Lejligheden ligger i gåafstand til et spændende udvalg af indkøbsmuligheder, caféer, specialbutikker samt restauranter. Der er ligeledes få minutters gang til offentligt transport. Lejligheden indeholder entre/gang, nyt stort HTH køkken med mulighed for spiseplads, stort lyst soveværelse, stort pænt badeværelse samt 2 store og dejlige lyse stuer en suite. Lejligheden er indflytningsklar, meget lys og har nye flotte plankegulve. Ejendommen, der er opført i 1920, er istandsat med respekt for de mange detaljer denne ejendom byder på. Tag og facader er nyistandsat med nye termovinduer med lavenergiglas. Til lejligheden hører kælderrum, fælles vaskekælder samt hyggeligt nyrenoveret gårdmiljø.', 2791, 'Dragør', 'Nøragermindesvej', '3a.jpg'),
(8, 172708, 'Villa', 212, 2046, 4795000, 29229, 25120, 'Arkitektonisk perle tæt på centrum.', 'Herskabelig og nyistandsat villa med en meget attraktiv beliggenhed i det bedste kvartér. Den charmerende villa, der er opført i 1910 og er beliggende direkte ned til åen.	 ', 2300, 'København', 'Kong. Valdemarsgade', '4a.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `front_image`
--

CREATE TABLE `front_image` (
  `id` int(11) NOT NULL,
  `path` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `front_image`
--

INSERT INTO `front_image` (`id`, `path`) VALUES
(1, 'forside.jpg');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `path` varchar(128) NOT NULL,
  `main_img` int(11) NOT NULL,
  `fk_bolig` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `img`
--

INSERT INTO `img` (`id`, `path`, `main_img`, `fk_bolig`) VALUES
(1, '1a.jpg', 1, 0),
(2, '1b.jpg', 0, 0),
(3, '1c.jpg', 0, 0),
(4, '1d.jpg', 0, 0),
(8, '2a.jpg', 1, 0),
(9, '2b.jpg', 0, 0),
(10, '2c.jpg', 0, 0),
(11, '2d.jpg', 0, 0),
(12, '3a.jpg', 1, 0),
(13, '3b.jpg', 0, 0),
(14, '3c.jpg', 0, 0),
(15, '3d.jpg', 0, 0),
(16, '4a.jpg', 1, 0),
(17, '4b.jpg', 0, 0),
(18, '4c.jpg', 0, 0),
(19, '4d.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontakt`
--

CREATE TABLE `kontakt` (
  `id` int(11) NOT NULL,
  `navn` text NOT NULL,
  `adresse` text NOT NULL,
  `telefon` int(11) NOT NULL,
  `email` text NOT NULL,
  `kommentar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `kontakt`
--

INSERT INTO `kontakt` (`id`, `navn`, `adresse`, `telefon`, `email`, `kommentar`) VALUES
(2, 'chat', 'ya yeet alle 42', 1298312098, 'dlkjawdlkaw@dwadaw.dawdaw', 'wadawdawdwa');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontaktoplysninger`
--

CREATE TABLE `kontaktoplysninger` (
  `id` int(11) NOT NULL,
  `navn` text NOT NULL,
  `adresse` text NOT NULL,
  `telefon` text NOT NULL,
  `fax` text NOT NULL,
  `email` text NOT NULL,
  `postnr` text NOT NULL,
  `city` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `kontaktoplysninger`
--

INSERT INTO `kontaktoplysninger` (`id`, `navn`, `adresse`, `telefon`, `fax`, `email`, `postnr`, `city`) VALUES
(1, 'Boligstjernen A/S ', 'Park Allé 355', '6391 2801', '6391 2811', 'info@boligstjernen.dk', '2100', 'København Ø');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `nyheder`
--

CREATE TABLE `nyheder` (
  `id` int(11) NOT NULL,
  `dato` datetime NOT NULL,
  `overskrift` text NOT NULL,
  `tekst` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `nyheder`
--

INSERT INTO `nyheder` (`id`, `dato`, `overskrift`, `tekst`) VALUES
(3, '2019-09-01 00:00:00', 'nononon', 'daawdwa'),
(4, '2019-09-28 00:00:00', 'wdwadwa', 'dwadwdwdwa');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `openhours`
--

CREATE TABLE `openhours` (
  `id` int(11) NOT NULL,
  `day` text NOT NULL,
  `time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `openhours`
--

INSERT INTO `openhours` (`id`, `day`, `time`) VALUES
(1, 'Mandag', 'Lukket'),
(2, 'Tirsdag', '9.30 - 17.30'),
(3, 'Onsdag', '9.30 - 17.30'),
(4, 'Torsdag', '9.30 - 17.30'),
(5, 'Fredag', '9.30 - 17.30'),
(6, 'Lørdag', '9.30 - 13.00'),
(7, 'Søndag', '10.00 - 15.00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(2, 'admin', '$2a$10$NV52TrHgBSeZfJ9zrOQZhONToF2x48EbjkxMEcTF17Pm4.XAaa37C'),
(3, 'admin2', '1234');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `bolig`
--
ALTER TABLE `bolig`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `front_image`
--
ALTER TABLE `front_image`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontakt`
--
ALTER TABLE `kontakt`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontaktoplysninger`
--
ALTER TABLE `kontaktoplysninger`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `nyheder`
--
ALTER TABLE `nyheder`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `openhours`
--
ALTER TABLE `openhours`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `bolig`
--
ALTER TABLE `bolig`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Tilføj AUTO_INCREMENT i tabel `front_image`
--
ALTER TABLE `front_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tilføj AUTO_INCREMENT i tabel `kontakt`
--
ALTER TABLE `kontakt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tilføj AUTO_INCREMENT i tabel `kontaktoplysninger`
--
ALTER TABLE `kontaktoplysninger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tilføj AUTO_INCREMENT i tabel `nyheder`
--
ALTER TABLE `nyheder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tilføj AUTO_INCREMENT i tabel `openhours`
--
ALTER TABLE `openhours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
