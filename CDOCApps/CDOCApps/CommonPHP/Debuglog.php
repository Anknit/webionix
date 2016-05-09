<?php
function LogString($str)
{
	//first open the file if not already open
	$filename = "C:\Program Files\MYPROGRAMS\wamp\www\CDOCApps\CommonPHP\logdetails.txt";
	date_default_timezone_set('UTC');
	$fp = fopen($filename, 'a');
	//write into the file
	$retval  = fwrite($fp, "\n--------------------\n");
	$fmtstr = $_SESSION['username']."-"; 
	$fmtstr .= date(DATE_RFC822);
	$fmtstr = $fmtstr . " : " . $str;	
	$retval  = fwrite($fp, $fmtstr);
	$retval  = fwrite($fp, "\n--------------------\n");
	//close the file
	fclose($fp);
}
?>

