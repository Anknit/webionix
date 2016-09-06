<?php
//require 'CloudStorageDI.php';
//require_once __DIR__ . '/CommonPHP/CloudDI/CloudStorageDI.php';
require_once __DIR__.'./../CommonPHP/CloudDI/CloudStorageDI.php';

$client = InitializeCloudStorage('S3'); 
//var_dump($client); 
//var_dump($client); 
/*
$result = ListAllObjects("S3", $client);
if($result == NULL)
	echo "some Error"; 
var_dump($result) ; 
$result = ListAllBuckets("S3", $client);
if($result == NULL)
	echo "some Error";
*/
$folderPath = 'published'; 

/*
$result = CreateFolder($folderPath, $client); 
if($result == TRUE)
	echo $folderPath . " Created"; 
else
	echo $folderPath . " Not Created";
	
$result = IsFolderPresent($folderPath, $client); 
if($result == NULL)
	echo $folderPath . " not created"; 
else
	echo $folderPath . " created successfully";
	*/

/*
$result = DeleteFolder($folderPath, $client); 
if($result == TRUE)
	echo $folderPath . ' Deleted Successfully'; 
else
	echo $folderPath . ' Could not be deleted';
*/

//echo $result; 
//var_dump($result);  
//ListAllBuckets("S3"); /var/www/html/USER_DATA/RajarVenera_2016200171529/SVG

/*
$destfilePath =  $folderPath . '/jonakitry.svg'; 
$srcfilePath = '../USER_DATA/RajarVenera_2016200171529/SVG/mytry.svg'; 
$contentType = 'image/svg+xml'; 
$result = PutFile($destfilePath,$srcfilePath, $contentType,$client);
*/
/*
for($i= 0;  $i < 5; $i++){
	$destfilePath =  $folderPath . '/dump_' . $i.'.svg';
	$result = PutFile($destfilePath,$srcfilePath, $contentType,$client);
	if($result != NULL)
		echo "File copied successfully at :" . $result;
	else
		echo "copying error";
}
*/

/*
$result = PutFile($destfilePath,$srcfilePath, $contentType,$client);
if($result != NULL)
	echo "File copied successfully at :" . $result;
else
	echo "copying error";
*/

//listing of files 
/*
$folderPath .= '/';   
$result = ListObjectsInFolder($folderPath, $client);
var_dump($result);
*/

$localfilePath = '../USER_DATA/RajarVenera_2016200171529/SVG/MynewtryPAM.svg'; 
$remotefilePath = 'published/RajarVenera_2016200171529/MynewtryPAM.svg'; 
$result = GetFileLocally($remotefilePath, $localfilePath, $client);

/*$destfilePath, $localfilePath, $handle
$destfilePath = 'soma/Armaan/dump_1.svg';
$srcfilePath = 'USER_DATA/RajarVenera_2016200171529/SVG/dump_1_locally.svg';
$result = GetFileLocally($destfilePath, $srcfilePath, $client);

*/ 
var_dump($result);  

//$objectpath = 'soma/Armaan/jonakitry.svg'; 
//$result = DeleteObject($objectpath, $client);
//echo $result;  

?>