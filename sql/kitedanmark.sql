-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 14. 04 2020 kl. 15:16:35
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
(2, 'awdawd', '1231-bwad1', 'Desktop', '2GB DDR3', 'awdawdw aw213', '12321 wda-12', '2131 wdadaw', '212121 + 123213', 'no', 'Yes', 'Wi-Fi + Ethernet', 'windows 10');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `keyboards`
--

CREATE TABLE `keyboards` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `model_number` text NOT NULL,
  `connection` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `mice`
--

CREATE TABLE `mice` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `model_number` text NOT NULL,
  `connection` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `monitors`
--

CREATE TABLE `monitors` (
  `id` int(11) NOT NULL,
  `brand` text NOT NULL,
  `size` text NOT NULL,
  `model_number` text NOT NULL,
  `connection` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, 'admin', '$10$NV52TrHgBSeZfJ9zrOQZhONToF2x48EbjkxMEcTF17Pm4.XAaa37C');

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
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `cables`
--
ALTER TABLE `cables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Tilføj AUTO_INCREMENT i tabel `keyboards`
--
ALTER TABLE `keyboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `mice`
--
ALTER TABLE `mice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `monitors`
--
ALTER TABLE `monitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
