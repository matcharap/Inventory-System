-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 10:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `ID` int(30) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 NOT NULL,
  `price` int(30) NOT NULL,
  `description` varchar(200) CHARACTER SET utf8 NOT NULL,
  `R_Ill` int(30) NOT NULL,
  `images_path` varchar(200) CHARACTER SET utf8 NOT NULL,
  `options` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT 'ENABLE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`ID`, `name`, `price`, `description`, `R_Ill`, `images_path`, `options`) VALUES
(1, 'burjer', 123, 'pagkain to', 1, 'images/burger.jpg', 'ENABLE');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `ID` int(11) NOT NULL,
  `username` varchar(30) CHARACTER SET utf8 NOT NULL,
  `fullname` varchar(30) CHARACTER SET utf8 NOT NULL,
  `email` varchar(30) CHARACTER SET utf8 NOT NULL,
  `contact` varchar(30) CHARACTER SET utf8 NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`ID`, `username`, `fullname`, `email`, `contact`, `password`) VALUES
(1, 'musmus', 'Kristian', 'kfanuncio2@gmail.com', '09381474797', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(30) NOT NULL,
  `item_ID` int(30) NOT NULL,
  `total_price` double NOT NULL,
  `quantity` int(30) NOT NULL,
  `createdOn` date NOT NULL DEFAULT current_timestamp(),
  `customer_ID` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `item_ID`, `total_price`, `quantity`, `createdOn`, `customer_ID`) VALUES
(1, 1, 123, 1, '2022-11-26', 1),
(2, 1, 123, 2, '2022-11-26', 1),
(4, 2, 459, 3, '2022-12-11', 3),
(5, 2, 615, 5, '2022-12-11', 1),
(6, 1, 738, 6, '2022-12-11', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`ID`,`R_Ill`),
  ADD KEY `R_ID` (`R_Ill`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `F_ID` (`item_ID`,`customer_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `ID` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
