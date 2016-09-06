<?php
require_once __DIR__.'./../CommonPHP/CloudDI/CloudStorageDI.php';
include_once "Debuglog.php";
require_once 'GX_ContentInfo.php'; 

function GX_PUB_ProcessRequest($reqid, &$respdata){
	if($reqid == '801')
	{
		$retval = GX_PUB_PutContentOnS3($respdata);
		return $retval;
	}
	else if($reqid == '802'){
		$retval = GX_GetContentFromS3($respdata);
		return $retval; 
	}
}

function GX_PUB_PutContentOnS3(&$respData){
	$S3Client = InitializeCloudStorage('S3');
	
	//get the USER Account localfolder
	$userID = $_SESSION['userid']; 
	$svgFname = $_SESSION['svg_xml_FileName']; 
	$userFolder = $_SESSION['workspacename']; 	
	
	$S3folderPath = 'published'; 
	
	//get the USEr specific Folder on S3.
	$userFolder = $S3folderPath . '/' . $userFolder; 	
	//check if it exists, 
	//if not then create one 
	$retval = CreateFolder($userFolder, $S3Client); 	
	
	//now copy the local file to S3
	$destfilePath = $userFolder . '/' . $_SESSION['current_svg_FileName']; 
	$srcFilePath = $svgFname;
	$retval = PutFile($destfilePath,$srcFilePath, 'image/svg+xml',$S3Client); 
	LogString("Line No: 38 - URL: " . $retval); 
	//get the object URL
	if($retval != NULL){
		//echo "Pubslished Successfully"; 
		$respData = $retval;		
	}		
	else{
		echo "Error While publishing";
		$respData = 0;
		return FALSE; 
	}		
	//now update the db here 
	$infoArr = array('publishedURL'=>$retval); 
	$contentID = $_SESSION['contentID'];
	GX_UpdatePublicationInfo($contentID, $infoArr); 
	return TRUE; 	
	//store it on DB	
	//return the URL result to caller app. 
}

/*
 * Later on change this to an URL 
 */
function GX_GetContentFromS3($filename){
	
	$S3Client = InitializeCloudStorage('S3');
	//LogString("InitializeCloudStorage called");
	//get the USER Account localfolder
	$userID = $_SESSION['userid'];
	$svgFname = $filename;
	$userFolder = $_SESSION['workspacename'];
	
	$S3folderPath = 'published';
	
	//get the USEr specific Folder on S3.
	$userFolder = $S3folderPath . '/' . $userFolder;
	
	$remotefilePath = $userFolder . '/' . $filename; 
	$localfilePath = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$filename;	
	//$localfilePath = 'USER_DATA/RajarVenera_2016200171529/SVG/' . $filename; 
	//LogString("localPath= " . $localfilePath . '  remotePath= ' .$remotefilePath );
	$retval = GetFileLocally($remotefilePath, $localfilePath, $S3Client); 
	//LogString("GetFileLocally called with result = " . $retval);
	//get the object URL
	if($retval == TRUE){
		//echo "Pubslished Successfully";
		$respData = 'OK';
	}
	else{
		$respData = 'FAIL'; 
		LogString("GetFileLocally failed with response = " . $respData);
		return FALSE; 
	}
	return TRUE;
	
}



/*
2.	GX_DeleteContentFromS3.
3.	GX_ListAllFilesFromUserAccount.
4.	GX_ImportContentFromS3
*/



?>