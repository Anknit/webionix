<?php
$fp = fopen("Config.txt", "r");
if($fp == False)return False;
$buffsize = 2000;
$configstr = fread($fp, $buffsize)	;
fclose($fp);
if($configstr ==False)
	return False ;
//parse the string in query format and populate the variables
parse_str($configstr);
$serverloc = $SERVER_LOCATION;

if($serverloc == "LOCAL")
{
	$author = 'rajarshi';
	$user = 'cdocuser'; //'cdocadmin';
	$pwd = NULL;
	$dbname = 'cdocapptestdb';
	$hostaddr = 'localhost:3306';
}
else if($serverloc == "REMOTE")
{
	$author = 'rajarshi';
	$user = '1181608_cdoc';
	$pwd = 'cdoc';
	$dbname = '1181608_cdoc';
	$hostaddr = 'fdb4.runhosting.com';
}
else
	return False;


/*
$author = 'rajarshi';
$user = 'cdoc';
$pwd = 'cdoc';
$dbname = 'cdocapptestdb';
$hostaddr = 'localhost:3306';


$author = 'rajarshi';
$user = '1181608_cdoc';
$pwd = 'cdoc';
$dbname = '1181608_cdoc';
$hostaddr = 'fdb4.runhosting.com';
*/
/* Initialisation of the database and the corresposndin tables */

//$dbhandle = mysql_connect($hostaddr, $user, $pwd);
$dbhandle = mysqli_connect($hostaddr, $user, $pwd, $dbname);
if(!$dbhandle)
{
	//echo "Database Server could not be connected </br>";
	LogString("Database could not be connected");
	return ;
}
if(!$dbhandle)
	echo "Database Server could not be connected </br>";

/*
if(!mysqli_select_db($dbname,$dbhandle))
	echo "Database  ".$dbname." could not be Used </br>";
else
	echo "Database  ".$dbname." Success!!! </br>";
*/

$usrname = "'".$_POST['txtUsername']."'";
$usrpwd = "'".md5($_POST['txtpassword'])."'";
$usrfname = "'".$_POST['txtfname']."'";
$usrlname = "'".$_POST['txtlname']."'";
$wksname = "'".$_POST['txtUsername'] ."_dir"."'"; 

//$query = "INSERT INTO userinfo VALUES(NULL, $usrname, $usrpwd,$usrfname, $usrlname)";
$query = "INSERT INTO userinfo (id, username, password, loginstatus, fname, lname, workspacename) VALUES(NULL, $usrname, $usrpwd,'N', $usrfname, $usrlname, $wksname)";
//$result = mysql_query($query);
$result = mysqli_query($dbhandle, $query);
if(!$result)
	echo "Error in Registration";
else
	echo "Registered successfully";

?>