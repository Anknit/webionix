<?php
/*
 * Author: Aditya
* date: 08-Aug-2014
* Description: Name is self explanatory
*/

function ErrorLogging($message) {
	//if(isset($_SESSION['HTTP_ROOT'])){
		//$filename	=	$_SESSION['HTTP_ROOT'].'/widget_factory/temp/Errors.txt';
	//}
	//else {
		$filename	=	__DIR__.'/log/Errors.txt';		
	//}
	
	if(!file_exists($filename))
		file_put_contents($filename, "\n");
		
	file_put_contents($filename, date("M-j-Y/H:i:s").':'.' Client IP: '.$_SERVER['REMOTE_ADDR'].' :Error: '.$message."\r\n" , FILE_APPEND);
}
?>