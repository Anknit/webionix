-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2016 at 10:40 AM
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
-- Table structure for table `contentinfo`
--

CREATE TABLE IF NOT EXISTS `contentinfo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'content ID',
  `userID` int(11) NOT NULL COMMENT 'User ID owning',
  `filename` varchar(30) NOT NULL COMMENT 'SVg file name',
  `title` text NOT NULL COMMENT 'title of content',
  `descr` text NOT NULL COMMENT 'description',
  `modifydate` datetime NOT NULL COMMENT 'last modify date',
  `publishedURL` text COMMENT 'published URL',
  `pubdate` timestamp NULL DEFAULT NULL COMMENT 'last Pub date',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=94 ;

--
-- Dumping data for table `contentinfo`
--

INSERT INTO `contentinfo` (`ID`, `userID`, `filename`, `title`, `descr`, `modifydate`, `publishedURL`, `pubdate`) VALUES
(6, 218, 'Anuradhafile.svg', 'New Title', 'Heavy acid rain will cause it to defer', '2016-08-28 11:28:59', 'http//gallery.webionix.com/published/RajarVenera_2016200171529/MynewtryPAM.svg', '2016-08-28 05:58:59'),
(18, 218, 'Demonanim2.svg', 'Default Title', 'Defualt Description', '2016-10-22 10:59:31', 'http://gallery.webionix.com/published/rogerDemonanim2.svg', '2016-09-01 10:08:06'),
(20, 218, 'Demonanim3.svg', 'Default Title', 'Defualt Description', '2016-10-21 23:22:52', 'http://gallery.webionix.com/published/rogerDemonanim3.svg', '2016-09-01 10:12:11'),
(25, 218, 'SVGLogo.svg', 'Default Title', 'Defualt Description', '2016-10-21 23:22:23', NULL, NULL),
(26, 218, 'VisibleAnim.svg', 'Default Title', 'Defualt Description', '2016-10-15 23:21:11', NULL, NULL),
(27, 218, 'DemoAnim.svg', 'Default Title', 'Defualt Description', '2016-10-22 11:01:44', 'http://gallery.webionix.com/published/rogerDemoAnim.svg', '2016-09-02 05:22:54'),
(29, 218, 'hflkahf.svg', 'Default Title', 'Defualt Description', '2016-09-24 11:55:29', NULL, NULL),
(45, 228, 'OPWZ.svg', 'PRITHISH THE GREAT', 'Default Desciption', '2016-09-24 15:19:48', NULL, NULL),
(46, 218, 'anim.svg', 'myanim1', 'Default Desciption', '2016-09-24 12:04:10', NULL, NULL),
(47, 228, 'file1.svg', 'myfile', 'Default Desciption', '2016-09-24 12:36:26', NULL, NULL),
(48, 228, 'animation.svg', 'car', 'Default Desciption', '2016-09-24 16:47:46', NULL, NULL),
(49, 229, 'myfile.svg', 'svg', 'Default Desciption', '2016-09-24 15:30:08', NULL, NULL),
(82, 218, 'TextPath.svg', '', 'Default Desciption', '2016-10-23 10:27:05', NULL, NULL),
(83, 218, 'TextPath - Copy.svg', 'Default Title', 'Defualt Description', '2016-10-14 21:16:36', NULL, NULL),
(84, 218, 'AlignCheck1.svg', '', 'Default Desciption', '2016-10-21 22:52:57', NULL, NULL),
(85, 218, 'trialfile.svg', '', 'Default Desciption', '2016-10-18 08:45:07', NULL, NULL),
(86, 218, 'Animtryfile.svg', '', 'Default Desciption', '2016-10-26 10:36:35', NULL, NULL),
(87, 218, 'Myfilters.svg', '', 'Default Desciption', '2016-10-22 11:00:54', NULL, NULL),
(88, 218, 'asffafa.svg', 'ff ', 'Default Desciption', '2016-10-21 22:43:13', NULL, NULL),
(89, 218, 'merabeta.svg', '', 'Default Desciption', '2016-10-21 22:49:16', NULL, NULL),
(90, 218, 'rogerfile.svg', '', 'Default Desciption', '2016-10-22 16:35:20', NULL, NULL),
(91, 218, 'TryFreedraw.svg', '', 'Default Desciption', '2016-10-23 16:23:28', NULL, NULL),
(92, 218, 'mydemo.svg', 'zffasf ', 'Default Desciption', '2016-10-25 11:38:14', NULL, NULL),
(93, 218, 'kjgkjg.svg', 'kjj', 'Default Desciption', '2016-10-25 11:59:57', NULL, NULL);

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
-- Table structure for table `feedbackinfo`
--

CREATE TABLE IF NOT EXISTS `feedbackinfo` (
  `feedbackId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`feedbackId`),
  UNIQUE KEY `feedbackId_UNIQUE` (`feedbackId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `feedbackinfo`
--

INSERT INTO `feedbackinfo` (`feedbackId`, `userId`, `title`, `description`, `status`) VALUES
(3, 12, 'The UI should be better', 'You should be designing it better than what it is now', 1),
(4, 12, 'Try this feedback', 'Try out feebdack now', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=230 ;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userid`, `username`, `firstname`, `lastname`, `password`, `workspacename`, `status`, `emailid`, `reset_key`, `sessionid`, `verification_key`, `age`, `location`, `phone`, `user_image`, `usertype`, `regAuthorityId`, `sso_ott`) VALUES
(102, 'vaibhav', '', '', NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 'bf0512593e1cffba50d0920ac9e5beeff11d83ff'),
(120, 'ccccc ccccc', '', '', '310a87565a48526e9d096f917007dbfe', '', 'verified', 'vaibhav.singhal@veneratech.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, '63dc533eae934feee0a76a57ba551123275b9d2a'),
(185, 'Ranjan Shrivastava', 'Ranjan', 'Shrivastava', NULL, '_2016183204456', 'verified', 'ranjanhyd@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, '705e7ee2fce7a4c6eefc2454dc10d3496b210ff2'),
(209, 'Mala Mukhopadhyay', 'Mala', 'Mukhopadhyay', NULL, 'Mala_201620011339', 'verified', 'mala.mukhopadhyay@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, 'c94da7bf8cb81b892a9af838fef00902c93c9fc9'),
(218, 'Roger Venera', 'Roger', 'Venera', 'bbf6dd883bfa9eaddb0ad6aba2d17aa5', 'Roger_201620313321', 'verified', 'rajarshi@veneratech.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, '442a63b4d75e04558c3dd089fbcfcd73168b0aa3'),
(219, 'Rajarshi Mukhopadhyay', 'Rajarshi', 'Mukhopadhyay', NULL, 'Rajarshi_2016203133554', 'verified', 'rajarshi.m2010@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'normal', 0, '57a3218a349d86008aeb4161cc847e19d64812c7'),
(227, 'rajayahoo kumar', 'rajayahoo', 'kumar', 'bbf6dd883bfa9eaddb0ad6aba2d17aa5', 'rajayahoo_201624811353', 'verified', 'rajarshi_m@yahoo.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, 'ddc11ca54919ac4237aa92bbec9a386e7a096f72'),
(228, 'Prithish Kumar Yadav', 'Prithish', 'Kumar Yadav', '3a0b11647a44f1ab46ab481c3a718255', 'Prithish_2016267111321', 'verified', 'prithish4@yahoo.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, 'c30a7cc434d403592bcc99645e495de824e24635'),
(229, 'Ritwik mukhopadhyay', 'Ritwik', 'mukhopadhyay', '368ceb195cce94745f4080fdba98257e', 'Ritwik_2016267152156', 'verified', 'ritwik1998@yahoo.com', NULL, NULL, NULL, 23, NULL, NULL, NULL, 'normal', 0, '929c0dccc1f6ed03860fbffcd7fec80a0be9ed72');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `verify_link`
--

INSERT INTO `verify_link` (`id`, `emailid`, `verify_key`) VALUES
(1, 'prithish4@yahoo.com', 'ce3f5a61fc071f9daeea76013da1e4f10adb89ab319b6e8633df751252085f5c'),
(2, 'ritwik1998@yahoo.com', '05f1e783750a2c1d71894becb32ccf46aa978c2934d0b93482b900d4c08a73c6');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
