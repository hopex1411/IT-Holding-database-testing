-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 16. 04 2020 kl. 09:28:32
-- Serverversion: 10.4.6-MariaDB
-- PHP-version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kitedanmark`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `cables`
--

CREATE TABLE `cables` (
  `id` int(11) NOT NULL,
  `connection_type` text NOT NULL,
  `cable_length` text NOT NULL,
  `model_number` text NOT NULL,
  `color` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `model_number` text NOT NULL,
  `pc_type` text NOT NULL,
  `ram` varchar(45) NOT NULL,
  `gpu` text NOT NULL,
  `cpu` text NOT NULL,
  `psu` text NOT NULL,
  `storage` text NOT NULL,
  `ports` text NOT NULL,
  `bluetooth` varchar(45) NOT NULL,
  `internet_connection` varchar(45) NOT NULL,
  `operating_system` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `computers`
--

INSERT INTO `computers` (`id`, `brand`, `model_number`, `pc_type`, `ram`, `gpu`, `cpu`, `psu`, `storage`, `ports`, `bluetooth`, `internet_connection`, `operating_system`) VALUES
(4, 'Lenovo', 'H30-05-90BJ', 'Desktop', '8GB DDR3', 'AMD Radeon R5 235', 'AMD A8 6410 / 2 GHz (2.4 GHz)', 'Lenovo H30-05', '1x 1TB HDD', 'x1 VGA, x1 HDMI, x2 usb 3.0, x4 usb 2.0, x2 audio port, x3 microphone port, x1 cd reader, x1 SD reader', 'Yes', 'Wi-Fi + Ethernet', 'Windows 10');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `keyboards`
--

CREATE TABLE `keyboards` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `model_number` text NOT NULL,
  `connections` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `mice`
--

CREATE TABLE `mice` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `model_number` text NOT NULL,
  `connections` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `mice`
--

INSERT INTO `mice` (`id`, `brand`, `model_number`, `connections`) VALUES
(2, 'Lenovo', 'SM-8825', 'USB 2.0');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `monitors`
--

CREATE TABLE `monitors` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `size` text NOT NULL,
  `model_number` text NOT NULL,
  `ports` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `monitors`
--

INSERT INTO `monitors` (`id`, `brand`, `size`, `model_number`, `ports`) VALUES
(3, 'Denver', '31.5\"', 'MCL-3202G', 'x1 Display Port + x1 HDMI'),
(4, 'LG', '31.5\"', '32MP58HQ', 'x1 HDMI + x1 VGA');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `product_name` text NOT NULL,
  `model_number` text NOT NULL,
  `product_link` text NOT NULL,
  `amount` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `purchases`
--

INSERT INTO `purchases` (`id`, `product_name`, `model_number`, `product_link`, `amount`) VALUES
(3, 'Lagerkasse 10 liter, (LxBxH) 40x30x12 cm', '6632358', 'https://www.lomax.dk/lager/lagerkasser-og-opbevaring/lagerkasser/euro-kasser/euro-lagerkasser/lagerkasse-10-liter-lxbxh-40x30x12-cm-6632358/', '6'),
(4, 'DYMO LabelManager 160', 'S0946310', 'https://www.lomax.dk/elektronik/labelprint-og-tape/label-og-etiketprintere/dymo-labelmanager-160-3428920/', '1'),
(5, 'Fellowes luftspray 400 ml.', '0043859499168', 'https://www.lomax.dk/elektronik/computer-og-tablet-tilbehoer/computerrens/fellowes-luftspray-400-ml-1510500/', '1'),
(6, 'a-series antistatiske rengøringsservietter', '70047700', 'https://www.lomax.dk/elektronik/computer-og-tablet-tilbehoer/computerrens/a-series-antistatiske-rengoeringsservietter-70047700/', '1'),
(7, 'Delock Burrebånd - 150 x 12 mm - Sort - 10 stk', '1ab24304-4271-4264-b802-59d6ff5d961c', 'https://www.av-cables.dk/velcrobaand-burrebaand/delock-burrebaand-150-x-12-mm-sort-10-stk.html', '3'),
(8, 'Delock Burrebånd - 200 x 12 mm - Sort - 10 stk', '1ab24304-4271-4264-b802-59d6ff5d961c', 'https://www.av-cables.dk/velcrobaand-burrebaand/delock-burrebaand-200-x-12-mm-sort-10-stk.html', '1'),
(9, 'Delock Burrebånd - 300 x 12 mm - Sort - 10 stk', '1ab24304-4271-4264-b802-59d6ff5d961c	', 'https://www.av-cables.dk/velcrobaand-burrebaand/delock-burrebaand-300-x-12-mm-sort-10-stk.html', '1'),
(10, 'Kabelmarkering med tal - 2.5 mm', '72513', 'https://www.av-cables.dk/kabelmarkering/kabelmarkering-med-tal-2-5-mm.html', '3');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `cables`
--
ALTER TABLE `cables`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `keyboards`
--
ALTER TABLE `keyboards`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `mice`
--
ALTER TABLE `mice`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `monitors`
--
ALTER TABLE `monitors`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `cables`
--
ALTER TABLE `cables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tilføj AUTO_INCREMENT i tabel `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tilføj AUTO_INCREMENT i tabel `keyboards`
--
ALTER TABLE `keyboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Tilføj AUTO_INCREMENT i tabel `mice`
--
ALTER TABLE `mice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tilføj AUTO_INCREMENT i tabel `monitors`
--
ALTER TABLE `monitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tilføj AUTO_INCREMENT i tabel `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
