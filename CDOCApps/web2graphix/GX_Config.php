<?php
$SESSION_NAME ="GXAPP";
$PATH_SEPARATOR ="/";
$SERVER_LOCATION ="REMOTE";  
//$BASE_WKSURI="http://54.165.155.215/CDOC_APPS_AWS/USER_DATA"; 
$USER_DATA_PATH="../USER_DATA";
//$SCRIPT_PATH="http://54.165.155.215/CDOC_APPS_AWS/CommonJS";
//$IMAGE_PATH="http://54.165.155.215/CDOC_APPS_AWS/CommonCSS";
$DUMMY="."; 

//$urlOrig = $_SERVER['HTTP_ORIGIN'];
$urlOrig = $_SERVER['HTTP_HOST']; 
$retval = stristr($urlOrig, 'localhost'); 
if($retval == true){	
	$DBAUTHOR = 'rajarshi';
	$DBUSER = 'cdocuser'; //'cdocadmin';
	$DBPWD = NULL;
	$DBNAME = 'cdocapptestdb';	
	$DBHOSTADDR ='localhost';
	$DBPORT = '3306';	
}
else{
	$DBAUTHOR = 'rajarshi';
	$DBUSER = 'cdocuser';
	$DBPWD = '#cdoc123';
	$DBNAME = 'cdocapptestdb';
	$DBHOSTADDR ='172.31.61.104';
	$DBPORT = '3306';
	$AWS_API_AK = 'AKIAJCQH36HXZACXCX7A';
	$AWS_API_SK = 'dSHGRrejj8fJGiT5TA3VAZnAWXx+dUMnaPpOVYyi';
	$AWS_BUCKET_NAME = 'gallery.webionix.com';  
}
	


