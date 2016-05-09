<?php
include_once "GX_SessionMgr.php" ;
include_once "Debuglog.php"; 
include_once "GX_CommonAPI.php"; 

    $retval = CDOC_Session_Validate();
	if($retval == False)
	{
		//echo "Session could not be validated";
		return ;
	}
	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;	
	$resID = $_POST['resIDvalue']; 
	$imgfname = $_POST['imgFnamevalue']; 
	echo 'resID= ' . $_POST['resIDvalue'] . 'imgfname= ' . $_POST['imgFnamevalue'] . 'resTypevalue=' . $_POST['resTypevalue'];
	$retval = HandleImageFileUpload($resID, $imgfname); 
	if($retval != true)
		echo "Image could not be stored on Server"; 
	
	
	//now change the associated value 
	$resType = $_POST['resTypevalue'];
	$resType = strtoupper($resType);
	if($resType == 'IMAGE')
	{		
		//then set the source node to that of the one returned by HandleFileUpload
		$attrArr['xlink:href'] =  $imgfname; 
		$retval = GX_COMMON_UpdateSVGAttributes($_SESSION['svg_xml_dom'], $_SESSION['svg_xml_FileName'], $resID, $attrArr);
		header("Location:GX_Editor.html");
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