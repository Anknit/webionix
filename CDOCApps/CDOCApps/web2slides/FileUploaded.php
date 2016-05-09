<?php
include_once "SessionMgr.php" ;
include_once "Debuglog.php"; 
include_once "CommonAPI.php"; 

    $retval = CDOC_Session_Validate();
	if($retval == False)
	{
		//echo "Session could not be validated";
		return ;
	}
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	
	$resID = $_POST['resIDvalue']; 
	$imgfname = $_POST['imgFnamevalue']; 
	$retval = HandleImageFileUpload($resID, $imgfname); 
	if($retval != true)
		echo "Image could not be stored on Server"; 
	
	
	//now change the associated value 
	$resType = $_POST['resTypevalue'];
	$resType = strtoupper($resType);
	if($resType == 'IMAGE')
	{
		//now get the image node 
		$retval = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $resID, 'src', $imgfname);
		if($retval != true)
			echo "Image source could not be set"; 
		else
			header("Location:CommonEditor.html");
		//then set the source node to that of the one returned by HandleFileUpload
	}
	else if($resType == 'BKGRND_IMAGE')
	{
		//now get the image node 
		header("Location:CommonEditor.html");
		//then set the source node to that of the one returned by HandleFileUpload
	}

	return ; 
	
function HandleImageFileUpload($resID, &$imgFilename)
{
	$ImageFilePath = $_SESSION['projDataPath'];
	$tmpname = $_FILES['file4Upload']['tmp_name'];
	$bImage = exif_imagetype ($tmpname);
	$ext = ""; 
	switch ($bImage)
	{
		case IMAGETYPE_BMP:
			$ext = '.bmp';
			break; 
		case IMAGETYPE_JPEG:
			$ext = '.jpg';
			break; 
		case IMAGETYPE_PNG:
			$ext = '.png';
			break; 
		default:
			$ext = '.svg';
			break;			
	}
	if(!$imgFilename)
	{
		$imgFilename = $resID.$ext;
	}
	
	$ImageFilePath = $ImageFilePath .$_SESSION['pathSeparator'].$imgFilename;
	if(!move_uploaded_file($tmpname, $ImageFilePath) )
	{
		return false;
	}	
	
	
	if($_SESSION['$serverloc'] == 'REMOTE')
		$imgFilename = $_SESSION['userProjectDataPath']."/".$imgFilename;
	else
		$imgFilename = $_SESSION['userProjectDataPath']."/".$imgFilename;
	
	
	return true; 
}

/*  IMAGETYPE_GIF
2 	IMAGETYPE_JPEG
3 	IMAGETYPE_PNG
4 	IMAGETYPE_SWF
5 	IMAGETYPE_PSD
6 	IMAGETYPE_BMP
*/


?>