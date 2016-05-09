<?php
$author = 'rajarshi';
$user = 'cdoc';
$pwd = 'cdoc';
$dbname = 'cdocapptestdb';
$hostaddr = 'localhost:3306';


/* Initialisation of the database and the corresposndin tables */

$dbhandle = mysql_connect($hostaddr, $user, $pwd);
if(!$dbhandle)
	echo "Database Server could not be connected </br>";


if(!mysql_select_db($dbname,$dbhandle))
	echo "Database  ".$dbname." could not be Used </br>";
else
	echo "Database  ".$dbname." Success!!! </br>";

$usrname = "'".$_POST['txtUsername']."'";
$usrpwd = "'".md5($_POST['txtpassword'])."'";
$usrfname = "'".$_POST['txtfname']."'";
$usrlname = "'".$_POST['txtlname']."'";
$wksname = "'".$_POST['txtUsername'] ."_dir"."'"; 

//$query = "INSERT INTO userinfo VALUES(NULL, $usrname, $usrpwd,$usrfname, $usrlname)";
$query = "INSERT INTO userinfo (id, username, password, loginstatus, fname, lname, workspacename) VALUES(NULL, $usrname, $usrpwd,'N', $usrfname, $usrlname, $wksname)";
$result = mysql_query($query);
if(!$result)
	echo "Error in Registration";
else
	echo "Registered successfully";

?>