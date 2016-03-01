<?php
require_once 'GX_Config.php';



$author = $DBAUTHOR;
$user = $DBUSER; //'cdocadmin';
$pwd = $DBPWD;
$dbname = $DBNAME;
$hostaddr = $DBHOSTADDR; //p for persistence

/* Initialisation of the database and the corresposndin tables */

$dbhandle = mysql_connect($hostaddr, $user, $pwd);
if(!$dbhandle)
	echo "Database Server could not be connected </br>";


if(!mysql_select_db($dbname,$dbhandle))
	echo "Database  ".$dbname." could not be Used </br>";
else
	echo "Database  ".$dbname." Success!!! </br>";

$usrname = "'".$_POST['txtUsername']."'";


$_POST['hidStatus'] = 'FAIL'; 

$query = "SELECT id, username, password FROM userinfo WHERE username = $usrname " ;
$resultSet = mysql_query($query);
if(!$resultSet)
{
	echo "Error in User Authentication";

}
$nrow = mysql_num_rows($resultSet);
if($nrow > 0)
{
	$row = mysql_fetch_object($resultSet);
	$dbusrId   = $row->id;
	$dbusrname = $row->username;
	$dbusrpwd  = $row->password;

	$ipusrname = $_POST['txtUsername'];
	$ipusrpwd = $_POST['txtpassword'];

	if($dbusrpwd == md5($ipusrpwd))
	{
		//header("location:Login.php");
		//	echo "User successfully authenticated </br>";
			
		//now set the cookie here
		setcookie('CDOC[username]', $dbusrname,0,'/');
		setcookie('CDOC[sessionID]', $dbusrpwd ,0,'/');
		setcookie('CDOC[userid]', $dbusrId ,0,'/');
		$_POST['hidStatus'] = 'SUCCESS';
		echo "User successfully authenticated";
		//header("location:main.php");
	}
	else
		echo "Password Not Valid";
	/*
		echo "UserID=".$dbusrId."</br>";
	echo "UserName=".$dbusrname."</br>";
	echo "UserPassword=".$dbusrpwd."</br>";
	*/

}
else
{
	header("location:Registration.php");
	//echo "User does not exist";
}

return;



?>