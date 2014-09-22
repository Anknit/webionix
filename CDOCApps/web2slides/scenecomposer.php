<?php
include_once "CommonAPI.php"; 

function CDOC_SCM_CreateSceneCompXMLFile($pageID)
{
	if(!isset($_SESSION['projDataPath']))
		return false;


	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	$_SESSION['sceneCompXMLDOM'] =  new DOMDocument("1.0", "utf-8");

	///WRITING THE PROLOG DATA
	$prologstr = "<?xml version='1.0' encoding='utf-8' standalone='yes'?><!DOCTYPE SCINFO [<!ELEMENT SCINFO ANY><!ELEMENT li ANY><!ELEMENT ul ANY><!ATTLIST li id ID #REQUIRED><!ATTLIST li name CDATA #IMPLIED><!ATTLIST li type CDATA #IMPLIED><!ATTLIST li class CDATA #IMPLIED><!ATTLIST li level CDATA #IMPLIED><!ATTLIST li nchild CDATA #IMPLIED><!ATTLIST li dataid CDATA #IMPLIED><!ATTLIST li data-origin CDATA #IMPLIED><!ATTLIST li data-srcid CDATA #IMPLIED><!ATTLIST li onclick CDATA #IMPLIED>]><SCINFO></SCINFO>";
	$fh = fopen($_SESSION['sceneCompXMLFilePath'],'x+');
	if($fh == false)
	{
		return false;
	}
	$retval = fwrite($fh, $prologstr);
	if($retval == false){
		return false;
	}
	//CLOSE THE FILE
	fclose($fh);
	
	return true; 

}

function CDOC_SCM_DeleteSceneCompXMLFile($pageID)
{
	if(!isset($_SESSION['projDataPath']))
		return false;
	
	
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	$retval = file_exists($_SESSION['sceneCompXMLFilePath']);
	if($retval == true){
		$retval = unlink($_SESSION['sceneCompXMLFilePath']);	
	}
	return true; 
}

function CDOC_SCM_OpenScene($pageID)
{
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	$_SESSION['sceneCompXMLDOM'] =  new DOMDocument("1.0", "utf-8");
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	$root = $_SESSION['sceneCompXMLDOM']->documentElement;
	$retval = $_SESSION['sceneCompXMLDOM']->saveXML($root);
	return $retval; 
}

function CDOC_SCM_AddSceneElement($elemID, $type, $class, $level, $parentID, $name)
{
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false; 
	
	$displaystring = $type."-".$elemID; 
	global $treehandlerfnname; 

	$elemID = strtoupper($elemID); 
	$type = strtoupper($type);
	$class = strtoupper(($class));
	$level = strtoupper($level);  
	
	//	
	//$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "onclick"=>$treehandlerfnname);
	$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "name"=>$name);
	$retval  = CDOC_COMMON_AddXMLElement($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'],
			 "li", $displaystring, $parentID, $attrdefinition, true);
	if($retval != true)
		return  false;
		
	return true; 
}

function CDOC_SCM_DeleteSceneElement($elemID)
{
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false;	
		
	
}

//moves only the Scene element up or down and not other child elements 
function CDOC_SCM_MoveSceneElementUp($sceneID)
{
		
	CDOC_COMMON_MoveXMLElementUp($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $sceneID, "1"); 
	
}

function CDOC_SCM_MoveSceneElementDown($sceneID)
{
	CDOC_COMMON_MoveXMLElementDown($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $sceneID, "1");
}

?>