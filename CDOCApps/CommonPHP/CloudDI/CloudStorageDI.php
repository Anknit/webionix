<?php
require __DIR__ . './../../vendor/autoload.php';
require_once __DIR__ . './../../web2graphix/GX_Config.php';
require_once __DIR__ . './../../web2graphix/Debuglog.php';
use Aws\S3\S3Client;
use Aws\Exception\AwsException;
use Aws\S3\Exception\S3Exception;

/*
 * 1.	Determine the cloud type and calls the appropriate initialization routine. 
2.	check in the session data if Access credentials and bucket name available. 
3.	if so then retrieve and then call PHP SDK routine to connect. 
4.	if session data is empty then dump the credentials and bucket name. 
5.	if error then then return 0. 
6.	if OK then return the client handle.
 */
$gClient; 
$gBucketName; 

$bInitialized = false; 
function getS3Options(){
	$options = [
	'region'            => 'us-east-1',
	'version'           => '2006-03-01',
	'signature_version' => 'v4',
	'credentials' => [
	'key'    => $GLOBALS['AWS_API_AK'],
	'secret' => $GLOBALS['AWS_API_SK'],
	        ]
	];
	//var_dump($options); 
	return $options; 
}

function InitializeCloudStorage($type){
	
	//for type == S3
	global $bInitialized, $gBucketName; 
	if($type == 'S3'){
		//retrieve the credentials
		$gBucketName = $GLOBALS['AWS_BUCKET_NAME'];
		$options = getS3Options();
		$client = InitAWS_S3($options);
		$bInitialized = true; 	
		return $client; 	
		//retrieve the bucketname
		//pass it onto the InitAWS_S3 function
	}
}

function InitAWS_S3($options){
	//form the options here
	//then create s3client
	//tap into the result and return appropriate error code if error else return the object	
	$client = new S3Client($options);
	return $client;
	//var_dump($client);
	//return $client;
}

function ListAllObjects($type, $handle){
	global $gBucketName;
	global $bInitialized; 
	if($type == 'S3'){
		//Debug_Dump($handle); 
		if( ($bInitialized == true) && ($handle))	{
			try{
				$result = $handle->listObjects([
					'Bucket' => $gBucketName
					]);
			} catch(S3Exception $e){
				return NULL;
			}		
			return $result;
		}	
		else{
			//Debug_Dump($bInitialized);
			//echo '</br>'; 
			//Debug_Dump($handle);
			return NULL;
		}
			
	}	
}

function ListAllBuckets($type, $handle){	
	global $bInitialized;
	if($type == 'S3'){
		if( ($bInitialized == true) && ($handle)){
			try{
				$result = $handle->listBuckets([]);				
			} catch(S3Exception $e){
				return NULL; 
			}			
			return $result;
		}
		else
			return NULL; 
	}	
}
/*
 * here the folder path is relative to the bucket 
 * Check if the folder or file path actually exists
 */

function IsFolderPresent($folderPath, $handle){
	global $gBucketName;
	$objectPath = $folderPath . '/'; 
	$result = IsObjectPresent($objectPath, $handle); 
	return $result; 	
}

/*
 * This will handle all files as well as folders 
 */
function IsObjectPresent($objectPath, $handle){
	global $gBucketName;	
	try {
		$result = $handle->getObjectAcl([
				'Bucket' => $gBucketName,
				'Key' => $objectPath
				]);
	
	} catch(S3Exception $e){
		//echo "Key does not exist";
		return NULL;
	}
	return TRUE;
}

function CreateFolder($folderPath, $handle){
	global $gBucketName;
	$myFolderPath = $folderPath . '/'; 	 
	//first create a folder path 
	
	//check if such folder exists in which case return error
	$result = IsObjectPresent($myFolderPath, $handle); 
	if($result)
		return FALSE; 
	
	//else create the folder path  and return status 
	try {
		$result = $handle->putObject([
				'ACL' => 'public-read',
				'Bucket' => $gBucketName,
				'Body' => '',
				'Key' => $myFolderPath
				]);
		
		
	}catch(S3Exception $e){		
		echo "putObject exception"; 
		return FALSE; 
	}
	$handle->waitUntil('ObjectExists', array(
			'Bucket' => $gBucketName,
			'Key' => $myFolderPath,
			'waiter.interval'     => 10,
			'waiter.max_attempts' => 3
			));	
	return TRUE; 
	
}

function DeleteFolder($folderPath, $handle){
	$myfolderPath = $folderPath . "/"; 
	$result = DeleteObject($myfolderPath, $handle);
	return $result;  
}

function DeleteObject($objectpath, $handle){
	global $gBucketName;
	try {
		$result = $handle->deleteObject([
			'Bucket' => $gBucketName,
			'Key' => $objectpath
			]);	
	}catch(S3Exception $e){
		//echo "putObject exception";
		return FALSE;
	}
	Debug_Dump($result); 
	return TRUE; 	
}
/*
 * here the source file path is assumed to be w.r.t. to the root path i.e. USEr_DATA path
 */
function PutFile($destfilePath,$srcfilepath, $contentType,$handle){
	global $gBucketName;
	//$localfilePath = '../../' . $srcfilepath;
	$localfilePath = $srcfilepath;
	//check if there is any problem with the file path 
	$retval =  file_exists ($localfilePath); 
	if($retval == FALSE)
		return NULL; 
	try{
		$result = $handle->putObject([
				'ACL' => 'public-read',
				'Bucket' => $gBucketName,
				'Body' => '',
				'Key' => $destfilePath,
				'ContentType' => $contentType , //'image/svg+xml',
				'SourceFile' => $localfilePath,
				'StorageClass' => 'STANDARD',
				'ContentDisposition' => 'inline'
				]);
		
	}catch(S3Exception $e){
		//echo "putObject exception";
		return NULL;
	}
	$handle->waitUntil('ObjectExists', array(
			'Bucket' => $gBucketName,
			'Key' => $destfilePath,
			'waiter.interval'     => 10,
			'waiter.max_attempts' => 3
	));
	//Debug_Dump($result); 
	$url = $result['ObjectURL'];
	$url = str_replace('s://s3.amazonaws.com/' , '://' , $url );	
	return $url; 	
}

function ListObjectsInFolder($folderPath, $handle){
	global $gBucketName; 
	
	try {
		$result = $handle->listObjects([
				'Bucket' => $gBucketName, // REQUIRED
				'Delimiter' => '#',
				/*'EncodingType' => 'url',*/
				/*'Marker' => '<string>',*/
				'MaxKeys' => 20,
				'Prefix' =>$folderPath
				]);
	}catch(S3Exception $e){
		//echo "putObject exception";
		return NULL;
	}
	return $result; 	
}


function GetFileLocally($destfilePath, $localfilePath, $handle){
	global $gBucketName;
	//LogString("GetFileLocally entered") ; 
	try {
		$result = $handle->getObject([
			'Bucket' => $gBucketName, // REQUIRED
			'Key' => $destfilePath, // REQUIRED
			'SaveAs' => $localfilePath
			]);
		//Debug_Dump($result); 
	}catch(S3Exception $e){		
		LogString("exception= " . $e->getMessage())  ;
		//echo "Exception: " . $e->getMessage(); 
		//var_dump($result);
		return FALSE;
	}
	return TRUE; 	
}
function Debug_Dump($var){
	var_dump($var); 
}
function Debug_Message($msg){
	echo 'Debug: ' . $msg; 
}
?>
