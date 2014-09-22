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
$error = $_FILES['vidfile4Upload']["error"]; 
$resID = $_POST['vidresIDvalue'];
$vidfname = $_POST['vidFnamevalue'];
$retval = HandleVideoFileUpload($resID, $vidfname);
if($retval != true)
{
	echo "Video could not be stored on Server- ". $error ;
	return;
	 
}


//now change the associated value
$resType = $_POST['vidresTypevalue'];
$resType = strtoupper($resType);
if( ($resType == 'VIDEO') || ($resType == 'AUDIO'))
{
	//now get the image node
	$retval = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $resID, 'type', strtolower($resType)."/ogg");
	$retval = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $resID, 'src', $vidfname);
	if($retval != true)
		echo "Video source could not be set";
	else
		header("Location:CommonEditor.html");
	//then set the source node to that of the one returned by HandleFileUpload
}


function HandleVideoFileUpload($resID, &$vidFilename)
{
	$VideoFilePath = $_SESSION['projDataPath'];
	$tmpname = $_FILES['vidfile4Upload']['tmp_name'];
	if(!$tmpname)
		return false; 
	
	$VideoFilePath = $VideoFilePath .$_SESSION['pathSeparator'].$vidFilename;
	if(!move_uploaded_file($tmpname, $VideoFilePath) )
	{
		return false;
	}
	if($_SESSION['$serverloc'] == 'REMOTE')
		$vidFilename = $_SESSION['userProjectDataPath']."/".$vidFilename;
	else
		$vidFilename = $_SESSION['userProjectDataPath']."/".$vidFilename;
	
	return true;
}


?> 