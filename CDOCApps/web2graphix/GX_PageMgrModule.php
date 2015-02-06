<?php
include_once "GX_scenecomposer.php"; 
include_once "GX_CommonAPI.php";
include_once "GX_ObjectManager.php"; 
//include_once "GX_fileexplorer.php"; 
function CDOC_PRJ_ProcessRequest($reqid, &$respdata )
{
	if($reqid == '201')
	{
		$retval = CDOC_PRJ_AddPage($respdata);
		//if($retval == true)
		{
			$retval  = CDOC_PRJ_GetPageXMLData($respdata);
			return true; 
		}
		
		return $retval;
	}
	else if($reqid == '202')
	{
		$retval = CDOC_PRJ_DeletePage($respdata);
		//if($retval == true)
		{
			$retval  = CDOC_PRJ_GetPageXMLData($respdata);
			return true;
		}
	}
	else if($reqid == '203')
	{
		$retval = CDOC_COMMON_MoveXMLElementUp($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'],
				 $respdata, "1");
		//if($retval == true)
		{
			$retval  = CDOC_PRJ_GetPageXMLData($respdata);
			return true;
		}
	}
	else if($reqid == '204')
	{		
		$retval = CDOC_COMMON_MoveXMLElementDown($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'],
				 $respdata, "1"); 
		//if($retval == true)
		{
			$retval  = CDOC_PRJ_GetPageXMLData($respdata);
			return true;
		}
	}
	else if ($reqid == '205')
	{
		$retval = CDOC_PRJ_OpenHTMLPage($respdata); 
		if($retval == False)
		{
			$respdata = "Error"; 
			return False;
		}
		return True; 
	}
	else if($reqid == '206')
	{
		$retval = CDOC_PRJ_OpenPage($respdata);
		return $retval; 
		
	}
	else if($reqid == '207')
	{
		$retval = CDOC_PRJ_GetPageLink($respdata); 
		return $retval; 		
	}
	else if ($reqid == '208')
	{		
		$retval = CDOC_PROJ_updateProjectShowInfo($respdata);
		return $retval;
	}
	else if ($reqid == '209')
	{
		$retval = CDOC_PRJ_GetProjectDataPath($respdata);
		return $retval;
	}
	else if($reqid == '210')
	{
		$retval = CDOC_PROJ_getAssetList($respdata);
		return $retval;
	}
	else if($reqid == '211')
	{
		$retval = CDOC_PROJ_deleteAssetFile($respdata);
		return $retval;
	}

	
}

function CDOC_PRJ_AddPage($pageName)
{
	//get the new Page ID 
	//NOW ,LOAD THE XML FILE
	$retval = $_SESSION['projXMLDOM']->load($_SESSION['projXMLfilename']);
	if($retval ==  false)
	{
		return false;
	}
	$title = $pageName ;//$pageID; 
	$retval = CDOC_PRJ_CreateHTMLPage($pageName,$title);
	if($retval != true)
	{
		return false;
	}
	global $treehandlerfnname; 
	$pageID = strtoupper($pageName);  
	
	//$attrdefinition = array("id"=>$pageID, "name"=>$pageName, "level"=>"1", "class"=>"TREEMENU","type"=>"PAGE" , "onclick"=>$treehandlerfnname);
	$attrdefinition = array("id"=>$pageID, "name"=>$pageName, "level"=>"1", "class"=>"TREEMENU","type"=>"PAGE","nchild"=>"0");

	$parentID = $_SESSION['ProjectName']; 	
	$retval  = CDOC_COMMON_AddXMLElement($_SESSION['projXMLDOM'], $_SESSION['projXMLfilename'], "li", $pageName, $parentID, $attrdefinition, true);
	if($retval != true)
		return  false; 
	$projID = strtoupper($_SESSION['ProjectName']);
	CDOC_COMMON_updateChildValue($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'], $projID, true);
	
	return true;
	
}

function CDOC_PRJ_DeletePage($pageID)
{
	$pageName = CDOC_COMMON_getAttributeValue($_SESSION['projXMLDOM'], $_SESSION['projXMLfilename'], $pageID, "name");
	if($pageName == False)return False;
	
	$retval = CDOC_COMMON_DeleteElement($_SESSION['projXMLDOM'], $_SESSION['projXMLfilename'], $pageID, true, "level", "1");
	
	$projID = strtoupper($_SESSION['ProjectName']);
	CDOC_COMMON_updateChildValue($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'],$projID, false);
	
	CDOC_PRJ_DeleteHTMLPage($pageName); 
	CDOC_SCM_DeleteSceneCompXMLFile($pageID);
	
	return true; 
}

function  CDOC_PRJ_GetPageXMLData(&$respData)
{
	if( (!isset($_SESSION['projXMLfilename'])) || (!isset($_SESSION['projXMLDOM'])) )
	{
		$dataType = "error";
		$respData = NULL;
		return False;
	}
	
	//now load the wksXMLFile onto the $responsedata
	$retval = $_SESSION['projXMLDOM']->load($_SESSION['projXMLfilename']);
	if($retval == False)
	{
		$dataType = "error";
		$respData = NULL;
		return False;
	}
	
	$root = $_SESSION['projXMLDOM']->documentElement; //->getElementById('workspace');
	$node = $root->firstChild; 
	$respData = $_SESSION['projXMLDOM']->saveXML($node);
}

function CDOC_PRJ_CreateHTMLPage($pageName, $pageTitle)
{
	if(!isset($_SESSION['projDataPath']))
		return false; 
	

	$HTMLFile = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html"; 
	$_SESSION['projHTMLFilename'] = $HTMLFile;
	
	//ALSO CREATE A JS FILE 
	$JSfile = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".js";
	$fh = fopen($JSfile,'x+');
	if($fh == false)
	{
		return false;
	}
	
	//WRITE INITIAL JS PROLOG DATA INTO THE FILE
	$prologstr = "/*".$pageName.".js File created at run time dont' modify!!*/";
	
	//<html><head><title>New Page</title><script type=\"text/javascript\" src=\"http://localhost/ECLIPSE_WORKSPACE/PROTO/Login/init.js\"></script></head><body><div id=\"para1\" onmouseover=\"OnParaMouseOver()\">This is Para1</div></body></html>";
	$retval = fwrite($fh, $prologstr);
	if($retval == false){
		return false;
	}
	//_rm test code need to remove it 
	$trystr = "function Onbodyload(){alert(\"Loading successfully\");}";  
	$retval  = fwrite($fh, $trystr);
	
	fclose($fh);
	
	
	//NOW CREATE THE HTML DOM HERE TO ADD OTHER NODES  
	
	$_SESSION['projHTMLDOM'] =  new DOMDocument("1.0");
	$doc->formatOutput = true;

	
	//NOW ADD THE HTML, HEAD, BODY , SCRIPT TAGS 
	// root as HTML
	$root = $_SESSION['projHTMLDOM']->createElement("html", "");
	$root = $_SESSION['projHTMLDOM']->appendChild($root);
	$retval = $_SESSION['projHTMLDOM']->saveHTMLFile($HTMLFile); 
	
	//ADDING HEAD
	//$attrdefinition = array("bod)
	$attrdefinition =  array("id"=>"HEAD"); 
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "head", "", "0", $attrdefinition, false);
	if($retval != true)
		return false;
	
	//ADDING TITLE ELEMENT
	$attrdefinition =  array("id"=>"TITLE");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "title", $pageTitle, "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	//adding style node here 
	$attrdefinition =  array('id'=>'buttonstyle');
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "style", "x;", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	//adding script element 
	//$JSpagename = $pageName.".js";
	//$JSpagename  = 'http://cdoc.scienceontheweb.net/CDOC_ASSETS/script/jquery-1.8.3.js'; 
	$JSpagename = $_SESSION['script_path'] .'/MathJax/MathJax.js?config=AM_HTMLorMML';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'] .'/jquery-1.8.3.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-blind.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-bounce.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-clip.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-drop.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-explode.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-fade.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-fold.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-highlight.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-pulsate.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-scale.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-shake.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.ui.effect-slide.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$JSpagename = $_SESSION['script_path'].'/jquery.flip.js';
	$attrdefinition =  array("type"=>"text/javascript", "src"=>$JSpagename);
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	//hereby the script codes are segrated based on page level, project level and common which can be excuted 
	//at all levels like document ready function 
	
	
	$attrdefinition =  array('id'=>'pagelevelCode',  "type"=>"text/javascript");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "var x;", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$attrdefinition =  array('id'=>'projectlevelCode',  "type"=>"text/javascript");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "var x;", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$attrdefinition =  array('id'=>'commonCode',  "type"=>"text/javascript");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "var x;", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
		
	$attrdefinition =  array('id'=>'autoslideshow',  "type"=>"text/javascript");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "var x;", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$attrdefinition =  array('id'=>'slideeffect',  "type"=>"text/javascript");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "script", "var gSlideEffect = [];", "HEAD", $attrdefinition, false);
	if($retval != true)
		return false;
	
	//ADDING BODY ELEMENT 
	$attrdefinition = array("id"=>"BODY");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "body", "", "0", $attrdefinition, false);
	if($retval != true)
		return false;
	
	//NOW ADDING THE DATA CONTAINER  
	$attrdefinition = array("id"=>"ALL_DATA_CONTAINER", "style"=>"position: relative; display:block; left:5px; top:5px; width:680px; height:500px;",'class'=>'OBJECT_CONTAINER');
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "div", "", "BODY", $attrdefinition, false);
	if($retval != true)
		return false;
	
	$attrdefinition = array("id"=>"DIV_DATA_CONTAINER", "style"=>"width:inherit; height:inherit; border: solid 2px grey");
	$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $HTMLFile, "div", "", "ALL_DATA_CONTAINER", $attrdefinition, false);
	if($retval != true)
		return false;
	
	//updating SC XML file 
	$pageID = strtoupper($pageName); 
	$retval = CDOC_SCM_CreateSceneCompXMLFile($pageID);
	if($retval != true)
		return false;
	$projID = $_SESSION['ProjectName'];
	$projID = strtoupper($projID); 
	
/*	_rm removing the Project Info as the root, now onwards it will b ePage which will be root so that it 
 * becomes logical hierarchy to user 
 * $retval  = OBJM_AddNewObjectToSCXML($projID,"project","treemenu","0", $_SESSION['ProjectName'], "0","0","PROJECT");
	if($retval != true)
		return false;
	*/
	
	$pageID = strtoupper($pageID); 
	$retval  = OBJM_AddNewObjectToSCXML($pageID,"page","treemenu","1", $pageName,"0", $pageID, "PAGE", 'original');
	if($retval != true)
		return false;	
	
	return true; 
}

function CDOC_PRJ_DeleteHTMLPage($pageName)
{
	//DELETE THE HTML DATA PAGE	
	if(!isset($_SESSION['projDataPath']))
		return false;	
	
	$HTMLfile = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html";
	
	$retval = file_exists($HTMLfile);
	if($retval == true){
		$retval = unlink($HTMLfile);
		
	}
	
	$JSFile = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".js";
	$retval = file_exists($JSFile);
	if($retval == true){
		$retval = unlink($JSFile);
		
	}	
	//CDOC_SCM_DeleteSceneCompXMLFile($pageID);

	
	return true; 
}



function CDOC_PRJ_OpenPage(&$respData)
{
	//NOW ,LOAD THE XML FILE
	$retval = $_SESSION['projXMLDOM']->load($_SESSION['projXMLfilename']);
	if($retval ==  false)
	{
		return false;
	}
	OBJM_GetPageSCXMLData($respData); 
	//$respData = CDOC_SCM_OpenScene($respData);
	return true; 
	
}

function CDOC_PRJ_OpenHTMLPage(&$PageID)
{
	$pageName = CDOC_COMMON_getAttributeValue($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'], $PageID, "name"); 
	$_SESSION['projHTMLDOM'] =  new DOMDocument("1.0");
	$_SESSION['projHTMLFilename'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html";
	$doc->formatOutput = true;	
	//$HTMLfile = $_SESSION['userProjectDataPath']."//".$pageName.".html";	
	if($_SESSION['$serverloc'] == 'REMOTE')
		$HTMLfile = $_SESSION['userProjectDataPath']."/".$pageName.".html";
	else
		$HTMLfile = $_SESSION['userProjectDataPath']."/".$pageName.".html";
	$PageID = $HTMLfile;
	$_SESSION['pathHTMLFile'] = $HTMLfile; 
	
	$HTMLDOM = $_SESSION['projHTMLDOM'];
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $_SESSION['projHTMLDOM']->loadHTMLFile($_SESSION['projHTMLFilename']);
	libxml_clear_errors();
	if($retval != true)
		return false; 
	
	
	$rootNode = $HTMLDOM->getElementById("ALL_DATA_CONTAINER");
	if($rootNode)
		$PageID = $HTMLDOM->saveHTML($rootNode);
	else
		$PageID = "";  
	return true; 
	 
		
}

function  CDOC_PRJ_GetPageLink(&$respData)
{

	if(!isset($_SESSION['pathHTMLFile']))
	{
	  $respData = "FAIL"; 
	  return False; 
	}
	$respData = $_SESSION['pathHTMLFile']; 
	return true; 
}

function CDOC_PROJ_updateProjectShowInfo(&$respdata)
{
	$respdata = ""; 
	// first load the proj XML file into the DOM 
	if(!isset($_SESSION['projXMLfilename']))
		return false; 
	
	$retval  = $_SESSION['projXMLDOM']->load($_SESSION['projXMLfilename']);
	if($retval != true)return false;  
	
	//iterate thru the children to ascertain number of pages and get the page IDs as well 
	$parentNode = $_SESSION['projXMLDOM']->documentElement;
	$parentNode = $parentNode->firstChild;
	$parentNode = $parentNode->firstChild;
	$type = $parentNode->getAttribute('type');
	if($type != 'PROJECT')
		return false;
	$projID = $parentNode->getAttribute('id');
	$pageIDArr ; 
	$retval  = CDOC_COMMON_getChildrenList($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'],$projID, 'type', 'PAGE', 'id', $pageIDArr);
	if($retval != true)return false;	
	$pagecount = count($pageIDArr);
	
	$pagenameArr;
	$retval  = CDOC_COMMON_getChildrenList($_SESSION['projXMLDOM'],$_SESSION['projXMLfilename'],$projID, 'type', 'PAGE', 'name', $pagenameArr);
	if($retval != true)return false;
	
	if($pagecount < 1)
		return false; 
	
	//now loop through the page ids and call OBJM_slideshowinfo 
	for($i=0; $i < $pagecount; $i++)
	{
		//get the page ids 
		$pageID = $pageIDArr[$i]; 
		//call the OBJM_updateSlideShowInfo function 
		$retval  = OBJM_updateSlideShowInfo($pageID, $pagenameArr, $i); 
		
		if($retval != true)return false; 
		//now call the function to generate Page specific code 
	}
	
	$respdata =  'OK'; 	
	return true; 
}

function CDOC_PRJ_GetProjectDataPath(&$respdata)
{
	if(!isset($_SESSION['userProjectDataPath']))
	{
		$respdata = "FAIL";
		return false; 
	}
	$respdata = $_SESSION['userProjectDataPath'];
	return true; 
}

function CDOC_PROJ_getAssetList(&$respdata)
{
	$dirpath = $_SESSION['projDataPath'];
	$assettype = $respdata; 
	$respdata = getassetfilelist($dirpath, $assettype); 
	return true; 
}
function CDOC_PROJ_deleteAssetFile(&$respdata)
{
	$fname = $respdata; 
	$fpath = $_SESSION['projDataPath'] . $_SESSION['pathSeparator'].$fname; 	
	deleteassetfile($fpath); 
	$respdata = 'OK'; 
	return true; 
}
?>