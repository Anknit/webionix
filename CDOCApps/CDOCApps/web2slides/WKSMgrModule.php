<?php
include_once "CommonAPI.php"; 
$treehandlerfnname = "OnTreeMenuHandler(event)";

function CDOC_WKS_ProcessRequest($ReqID, &$responseData)
{

	if($ReqID == '100')
	{
		$retval = CDOC_WKS_GetWorkspaceXMLData($responseData);
		return $retval;
	}
	else if($ReqID == '101')
	{
		$retval = CDOC_WKS_GetWorkspaceStringData($responseData);
		return $retval;
	}
	else if($ReqID == '102')
	{
		$retval = CDOC_WKS_CreateProject($responseData);
		if($retval == true)
		{
			$retval  = CDOC_WKS_GetWorkspaceStringData($responseData);
		}
		return $retval;
	}
	else if($ReqID == '103')
	{
		$retval = CDOC_WKS_DeleteProject($responseData);
		if($retval == true)
		{
			$retval  = CDOC_WKS_GetWorkspaceStringData($responseData);
		}
		return $retval;
	}
	else if($ReqID == '104')
	{
		$responseData = CDOC_WKS_OpenProject($responseData); 
		if($responseData == false)
			return false; 
		else
			return true;		
	}

}

function CDOC_WKS_GetWorkspaceXMLData(&$responseData)
{
	if( (!isset($_SESSION['wksXMLfilename'])) || (!isset($_SESSION['wksXMLDOM'])) )
	{
		$dataType = "error";
		$responseData = NULL;
		return False;
	}

	//now load the wksXMLFile onto the $responsedata
	$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
	if($retval == False)
	{
		$dataType = "error";
		$responseData = NULL;
		return False;
	}

	
	$rootNode = $_SESSION['wksXMLDOM']->documentElement; 
	$rootNode = $rootNode->firstChild; 
	$responseData = $_SESSION['wksXMLDOM']->saveXML($rootNode);

	return True;
}

function CDOC_WKS_GetWorkspaceStringData(&$responseData)
{
	if( (!isset($_SESSION['wksXMLfilename'])) || (!isset($_SESSION['wksXMLDOM'])) )
	{
		$dataType = "error";
		$responseData = NULL;
		return False;
	}

	//now load the wksXMLFile onto the $responsedata
	$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
	if($retval == False)
	{
		$dataType = "error";
		$responseData = NULL;
		return False;
	}

	$root = $_SESSION['wksXMLDOM']->documentElement; //->getElementById('workspace');
	$root = $root->firstChild; 
	//$nodelist = $_SESSION['wksXMLDOM']->getElementsByTagName('div');
	$responseData = "";
	/*for($i = 0; $i < $nodelist->length; $i++)
	{
		$nodestr = $_SESSION['wksXMLDOM']->saveXML($nodelist->item($i));
		$responseData  = $responseData.$nodestr;
	}
	*/ 
	$responseData = $_SESSION['wksXMLDOM']->saveXML($root);

	return True;
}

function CDOC_WKS_Initialize($wksname)
{
	//$basedir = "C:\Program Files\wamp\www";
	//$basedir = getcwd();
	
	//$_SESSION['wksdir']  = $_SESSION['pathSeparator'].$wksname;
	$_SESSION['wksdir']  = $_SESSION['user_data_path'].$_SESSION['pathSeparator'].$wksname; ;
	$_SESSION['baseWKSURI'] = $_SESSION['baseWKSURI']."/".$wksname; 

	//checks whether the director already exists
	$retval = 0;
	if(!is_dir($_SESSION['wksdir']))
	{
		$retval = mkdir($_SESSION['wksdir']);
		if($retval == False)
			return False;
	}
	//create the DOM Object here
	$_SESSION['wksXMLDOM'] = new DOMDocument("1.0", "utf-8");

	//now check if the wksXMLfile aready exisits in the directory
	$_SESSION['wksXMLfilename'] = $_SESSION['wksdir'].$_SESSION['pathSeparator']."wksdata".".xml";

	//assumes that the file wksdata.xml always exists as PHP does not provide full support for
	//DTD hence a template XML will be used , hence the file wil always exist
	if(!file_exists($_SESSION['wksXMLfilename']))
	{

		//CREATE THE FILE
		$fh = fopen($_SESSION['wksXMLfilename'],'x+');
		if($fh == false)
		{
			return false;
		}
		//WRITE INITIAL XML PROLOG DATA INTO THE FILE
		$prologstr = "<?xml version='1.0' encoding='utf-8' standalone='yes'?><!DOCTYPE WKSINFO [<!ELEMENT WKSINFO ANY><!ELEMENT li ANY><!ELEMENT ul ANY><!ATTLIST li id ID #REQUIRED><!ATTLIST li name CDATA #IMPLIED><!ATTLIST li level CDATA #IMPLIED><!ATTLIST li nchild CDATA #IMPLIED><!ATTLIST li class CDATA #IMPLIED><!ATTLIST li onclick CDATA #IMPLIED>]><WKSINFO></WKSINFO>";
		$retval = fwrite($fh, $prologstr);
		if($retval == false){
			return false;
		}
		//CLOSE THE FILE
		fclose($fh);

		//LOAD THE FILE FOR FURTHER WRITING
		$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
		if($retval ==  false)
		{
			return false;
		}
		global $treehandlerfnname;
		
		$wksnamecap = strtoupper($wksname); 
		//$attrdefinition =  array("name"=>$wksname,"id"=>$wksnamecap,"level"=>"0","class"=>"TREEMENU", "type"=>"WORKSPACE", "onclick"=>$treehandlerfnname); 
		$attrdefinition =  array("name"=>$wksname,"id"=>$wksnamecap,"level"=>"0","class"=>"TREEMENU", "type"=>"WORKSPACE", "nchild"=>"0");
		$retval = CDOC_COMMON_AddXMLElement($_SESSION['wksXMLDOM'], $_SESSION['wksXMLfilename'], "li", $wksname, "0", $attrdefinition, true);
		//now create the workspace directire sibling		
		return $retval;
	}//file_exisit
	
	$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
	return true; 
}

function CDOC_WKS_CreateProject($ProjName)
{
	// check if the Project folder already exists
	$Projdir = $_SESSION['wksdir'];
	
	//$Projdir = $_SESSION['wksdir'];
	$Projdir = $Projdir.$_SESSION['pathSeparator'].$ProjName;
	//if yes then just return
	if(is_file($Projdir))
		return True;

	//create a Project folder inside the workspace folder
	$retval = mkdir($Projdir);
	if($retval == false)
		return $retval;

	//update the wksXMLMData file by adding the Project name
	//create the DOM Object here
	$_SESSION['projXMLDOM'] = new DOMDocument("1.0", "utf-8");

	//now check if the wksXMLfile aready exisits in the directory
	$_SESSION['projXMLfilename'] = $Projdir.$_SESSION['pathSeparator']."Project.xml";
	$_SESSION['projDataPath'] = $Projdir.$_SESSION['pathSeparator']."Data"; 
	if(!file_exists($_SESSION['projXMLfilename']))
	{		
		//CREATE THE DATA FOLDER CONTAINING THE AUTHORED DATA 
		if(!is_file($_SESSION['projDataPath']))
		{
			//create a Project folder inside the workspace folder
			$retval = mkdir($_SESSION['projDataPath']);
			if($retval == false)
				return $retval;
		}
				
		//CREATE THE FILE
		$fh = fopen($_SESSION['projXMLfilename'],'x+');
		if($fh == false)
		{
			return false;
		}
		
		//WRITE INITIAL XML PROLOG DATA INTO THE FILE		
				
		//$retval = fwrite($fh, $prologstr);
		
		$prologstr = "<?xml version='1.0' encoding='utf-8' standalone='yes'?><!DOCTYPE PROJECTINFO [<!ELEMENT PROJECTINFO ANY><!ELEMENT li ANY><!ELEMENT ul ANY><!ATTLIST li id ID #REQUIRED><!ATTLIST li name CDATA #IMPLIED><!ATTLIST li level CDATA #IMPLIED><!ATTLIST li class CDATA #IMPLIED><!ATTLIST li nchild CDATA #IMPLIED><!ATTLIST li onclick CDATA #IMPLIED>]><PROJECTINFO></PROJECTINFO>";
		$retval = fwrite($fh, $prologstr);
		
		if($retval == false){
			return false;
		}		
		//CLOSE THE FILE
		fclose($fh);
		global $treehandlerfnname;
		
		$parentID = "0";// $_SESSION['workspacename']; 
		$ProjNamecap = strtoupper($ProjName);
		
		//$attrdefinition =  array("name"=>$ProjName,"id"=>$ProjNamecap,"level"=>"0","class"=>"TREEMENU","type"=>"PROJECT", "onclick"=>$treehandlerfnname);
		$attrdefinition =  array("name"=>$ProjName,"id"=>$ProjNamecap,"level"=>"0","class"=>"TREEMENU","type"=>"PROJECT", "nchild"=>"0");
		$retval = CDOC_COMMON_AddXMLElement($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'], "li", $ProjName, $parentID, $attrdefinition, true);
		if($retval != true)
			return false; 
		
			
		//update the Workspace XML data with new ProjectName
		$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
		if($retval == False)
			return False;
		
		//$attrdefinition =  array("name"=>$ProjName,"id"=>$ProjNamecap,"level"=>"1","class"=>"TREEMENU","type"=>"PROJECT", "onclick"=>$treehandlerfnname);
		$attrdefinition =  array("name"=>$ProjName,"id"=>$ProjNamecap,"level"=>"1","class"=>"TREEMENU","type"=>"PROJECT");
		$retval = CDOC_COMMON_AddXMLElement($_SESSION['wksXMLDOM'],$_SESSION['wksXMLfilename'], "li", $ProjName,$_SESSION['workspacename'], $attrdefinition, true);
		if($retval != true)
			return false;			
		
		//now update the nchild attribute here 
		$wksname = strtoupper($_SESSION['workspacename']);		 
		CDOC_COMMON_updateChildValue($_SESSION['wksXMLDOM'],$_SESSION['wksXMLfilename'], $wksname, true);
		
	}

	return true;
}

function CDOC_WKS_DeleteProject($ProjID)
{
	// check if the Project folder already exists
	$Projdir = $_SESSION['wksdir'];	

	//update the workspace XML data
	//update the Workspace XML data with new ProjectName
	
	$ProjName = CDOC_COMMON_getAttributeValue($_SESSION['wksXMLDOM'],$_SESSION['wksXMLfilename'], $ProjID, "name");
	if($ProjName == False)
		return False;
	
	$Projdir = $Projdir.$_SESSION['pathSeparator'].$ProjName;

	

	//getting the root node
	//$rootNode = $_SESSION['wksXMLDOM']->documentElement;
	//$targetNode = $_SESSION['wksXMLDOM']->getElementById($ProjName); $ProjID
	$targetNode = $_SESSION['wksXMLDOM']->getElementById($ProjID);
	if(!$targetNode)
		return false;

	CDOC_COMMON_DeleteElement($_SESSION['wksXMLDOM'], $_SESSION['wksXMLfilename'], $ProjID, true, "level", "1");
/*	$leveltype = $targetNode->getAttribute("level");
	if($leveltype != "1")
		return false;

	$myparentNode = $targetNode->parentNode;
	$myparentNode->removeChild($targetNode);
	*/
	$wksname = strtoupper($_SESSION['workspacename']);
	CDOC_COMMON_updateChildValue($_SESSION['wksXMLDOM'],$_SESSION['wksXMLfilename'], $wksname, false);
	
	$retval = $_SESSION['wksXMLDOM']->save($_SESSION['wksXMLfilename']);


	if(!file_exists($Projdir))
		return true;
	//delete the Project folder inside the workspace folder
	$retval = DeleteFolder($Projdir);
	return true;


}


function CDOC_WKS_OpenProject($projid)
{

	//loads the project.xml file from the folder with projID name 
	$Projdir = $_SESSION['wksdir'];	
	
	$ProjName = CDOC_COMMON_getAttributeValue($_SESSION['wksXMLDOM'],$_SESSION['wksXMLfilename'], $projid, "name");
	if($ProjName == False)
		return False;
	
	$Projdir = $Projdir.$_SESSION['pathSeparator'].$ProjName;
	
	$_SESSION['ProjectName'] = $ProjName; 
	
	 
	$_SESSION['userProjectDataPath'] = $_SESSION['baseWKSURI']."/".$ProjName."/Data";
	
	//if the folder does not exists then return error string
	if(!file_exists($Projdir))
		return false;
		
	//return the XML string of the elements within the Project.xml containing Page IDs.
	$_SESSION['projXMLDOM'] = new DOMDocument("1.0", "utf-8");	
	//now check if the wksXMLfile aready exisits in the directory
	$_SESSION['projXMLfilename'] = $Projdir.$_SESSION['pathSeparator']."Project.xml";
	$_SESSION['projDataPath'] = $Projdir.$_SESSION['pathSeparator']."Data";
	
	if(!file_exists($_SESSION['projDataPath']))
		return false;
	
	if(!file_exists($_SESSION['projXMLfilename']))
		return false;
	
	
	//NOW ,LOAD THE XML FILE 
	$retval = $_SESSION['projXMLDOM']->load($_SESSION['projXMLfilename']);
	if($retval ==  false)
	{
		return false;
	}
	
	$root = $_SESSION['projXMLDOM']->documentElement; 
	$retval = $_SESSION['projXMLDOM']->saveXML($root); 	
	return $retval; 
	
}

function DeleteFolder($foldername)
{
	// open the directory handle
	$oldcwd = getcwd();

	$dirhandle = opendir($foldername);
	if($dirhandle == False)
		return False;
	chdir($foldername);
	//read entries in a loop
	$entries = 0;

	while(false != ($entries = readdir($dirhandle)))
	{

		//if the entry is a file then unlink  it

		if( ($entries != ".") && ($entries != "..") )
		{
			if(True == ($retval = is_file($entries)) )
			{
				unlink($entries);
			}//if entry is directory then call DeleteFolder again
			else if(True == ($retval = is_dir($entries)) )
			{
				$entries = $foldername.$_SESSION['pathSeparator'].$entries;
				DeleteFolder($entries);
			}
		}
	}//while

	//if entry is false then closecurrent hanlde, call rmdir and then return
	$retval = closedir($dirhandle);
	$retval = rmdir($foldername);

	//restore the old cwd now
	chdir($oldcwd);

	return True;
}


