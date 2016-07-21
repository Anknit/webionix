-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2016 at 04:20 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cdocapptestdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `audiometainfo`
--

CREATE TABLE IF NOT EXISTS `audiometainfo` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Audio ID',
  `URL` varchar(200) DEFAULT NULL COMMENT 'URL',
  `title` varchar(50) NOT NULL COMMENT 'title of audio',
  `summary` varchar(200) NOT NULL COMMENT 'summary of audio',
  `chapter` varchar(500) NOT NULL COMMENT 'chapter info',
  `bookmark` varchar(500) NOT NULL COMMENT 'bookmark info',
  `author` varchar(40) NOT NULL COMMENT 'author info',
  `ImageURL` varchar(1000) NOT NULL COMMENT 'Image URL',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `audiometainfo`
--

INSERT INTO `audiometainfo` (`ID`, `URL`, `title`, `summary`, `chapter`, `bookmark`, `author`, `ImageURL`) VALUES
(1, 'http://localhost/Audio/aristo.mp3', 'Aristotle', 'This is a translation of original work of Aristotle', 'Chapter 1#0;Chapter 2#100;Chapter #200;Chapter#400', 'My Old bookmarks for Aristo#5;Advice part of th ebookmakr#707', 'Ingram', 'http://localhost/Images/aesop.jpg'),
(2, 'http://localhost/Audio/holmes.mp3', 'Sherlock Holmes', 'This is about Holmes introduction to the world', 'Chapter1#0;Chapter 2#200;Chapter 3#400;Chapter 4#600;Chapter 5#800', 'My First Bookmakr looks #18;There is a long chase here #514;Critical part of the story#802', 'Sir Arthur Conan Doyle', 'http://localhost/Images/holmes.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `exportedassetinfo`
--

CREATE TABLE IF NOT EXISTS `exportedassetinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id value of asset',
  `filename` varchar(50) NOT NULL COMMENT 'image filename',
  `title` varchar(150) NOT NULL COMMENT 'Title of the asser',
  `category` varchar(40) NOT NULL COMMENT 'Category of the asset to which it belongs to ',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `exportedassetinfo`
--

INSERT INTO `exportedassetinfo` (`id`, `filename`, `title`, `category`) VALUES
(20, 'myhexagon.svg', 'New fhsfhs Hexagon', 'Simple'),
(21, 'Rectangle.svg', 'My rectangle shape', 'Simple'),
(22, 'damroo.svg', 'My polygon shape', 'Simple'),
(23, 'neoCircle.svg', 'fssafaaf fasfaf', 'Simple'),
(24, 'myface.svg', 'this is sad face ', 'Science'),
(25, 'myface.svg', 'this is sad face ', 'Science'),
(26, 'pureface.svg', 'my new sad face', 'Science'),
(28, 'Myface.svg', 'My smiing face', 'Science'),
(29, 'mydesign.svg', 'Testing new entry', 'Science'),
(30, 'mydesign.svg', 'Testing new entry', 'Science'),
(31, 'surety.svg', 'Another Entry into DB', 'NewDBCategory');

-- --------------------------------------------------------

--
-- Table structure for table `reset_link`
--

CREATE TABLE IF NOT EXISTS `reset_link` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `emailid` varchar(50) DEFAULT NULL,
  `reset_key` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` longtext,
  `firstname` varchar(30) NOT NULL COMMENT 'first name',
  `lastname` varchar(45) NOT NULL COMMENT 'last name',
  `password` varchar(100) DEFAULT NULL,
  `workspacename` varchar(25) NOT NULL,
  `status` varchar(20) NOT NULL,
  `emailid` varchar(50) NOT NULL,
  `reset_key` varchar(200) DEFAULT NULL,
  `sessionid` int(11) DEFAULT NULL,
  `verification_key` varchar(200) DEFAULT NULL,
  `age` smallint(6) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `user_image` varchar(300) DEFAULT NULL,
  `usertype` varchar(20) NOT NULL,
  `regAuthorityId` int(11) DEFAULT NULL,
  `sso_ott` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=217 ;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userid`, `username`, `firstname`, `lastname`, `password`, `workspacename`, `status`, `emailid`, `reset_key`, `sessionid`, `verification_key`, `age`, `location`, `phone`, `user_image`, `usertype`, `regAuthorityId`, `sso_ott`) VALUES
(102, 'vaibhav', '', '', NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 'bf0512593e1cffba50d0920ac9e5beeff11d83ff'),
(120, 'ccccc ccccc', '', '', '310a87565a48526e9d096f917007dbfe', '', 'verified', 'vaibhav.singhal@veneratech.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, '63dc533eae934feee0a76a57ba551123275b9d2a'),
(184, 'rajaryahoo mukhejee', 'rajaryahoo', 'mukhejee', 'bbf6dd883bfa9eaddb0ad6aba2d17aa5', 'rajaryahoo_201620124915', 'verified', 'rajarshi_m@yahoo.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, '434211600fc6c352f67943b9dbdb61d77ae30a0e'),
(185, 'Ranjan Shrivastava', 'Ranjan', 'Shrivastava', NULL, '_2016183204456', 'verified', 'ranjanhyd@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, '705e7ee2fce7a4c6eefc2454dc10d3496b210ff2'),
(208, 'Rajarshi Mukhopadhyay', 'Rajarshi', 'Mukhopadhyay', NULL, 'Rajarshi_201620011017', 'verified', 'rajarshi.m2010@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, '9764d03907bb7dcf43c3ac9cfab1dd3a1ee44b9e'),
(209, 'Mala Mukhopadhyay', 'Mala', 'Mukhopadhyay', NULL, 'Mala_201620011339', 'verified', 'mala.mukhopadhyay@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, 'c94da7bf8cb81b892a9af838fef00902c93c9fc9'),
(216, NULL, '', '', NULL, '', 'unverified', 'rajarshi@veneratech.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `verify_link`
--

CREATE TABLE IF NOT EXISTS `verify_link` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `emailid` varchar(50) DEFAULT NULL,
  `verify_key` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `verify_link`
--

INSERT INTO `verify_link` (`id`, `emailid`, `verify_key`) VALUES
(20, 'rajarshi@veneratech.com', 'c6be243d5b5e6429663ef1b7d3ceaa845a1ca6d028a9892d556bc2a77b326332'),
(21, 'rajarshi@veneratech.com', 'a990bdca91353768f2df872f2a3a7576aecfa28301cd68a7f674689454d1b89c'),
(22, 'rajarshi@veneratech.com', 'cb8bc2d470d1af7c70cb0a51d594fb360e176acdd27b7203250173b572268eab'),
(23, 'rajarshi@veneratech.com', '45e7ffddf43f1c5c266d06e484d0f7237544a30782e45e4b08cd5237a5f7fc1e');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
