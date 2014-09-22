<?php
include_once "GX_CommonAPI.php"; 
include_once "../CommonPHP/fileexplorer.php";
function GX_WKS_ProcessRequest($ReqID, &$responseData)
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
		$retval = GX_WKS_CreateSVGFile($responseData);
		if($retval == true)
			return $responseData; 
		else
			return ""; 
		
		return $retval;
	}
	else if($ReqID == '103')
	{
		$retval = GX_WKS_OpenSVGFile($responseData);			
		return $retval;
	}
	else if($ReqID == '104')
	{
		$retval = GX_WKS_getListofSVGFile($responseData);
		if($retval == false)
			return false;
		else
			return true;
	}
	else if($ReqID == '105')
	{
		$retval = GX_WKS_deleteSVGFile($responseData);
		return $retval;
	}
	else if($ReqID == '106')
	{
		$retval = GX_WKS_GetSVGXMLMetaData($responseData);
		return $retval;
	}
	
	
	/*else if($ReqID == '103')
	{
		$retval = CDOC_WKS_DeleteProject($responseData);
		if($retval == true)
		{
			$retval  = CDOC_WKS_GetWorkspaceStringData($responseData);
		}
		return $retval;
	}*/
	
	

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

function GX_WKS_Initialize($wksname)
{
	//$basedir = "C:\Program Files\wamp\www";
	$basedir = getcwd();	
	$basedir = rtrim($basedir, 'web2graphix'); 
	$_SESSION['wksdir']  = $_SESSION['pathSeparator']."USER_DATA". $_SESSION['pathSeparator'].$wksname;
	$_SESSION['wksdir']  = $basedir.$_SESSION['wksdir'];
	
	$_SESSION['projDataPath'] = $_SESSION['wksdir'].$_SESSION['pathSeparator'].'SVG';
	
	//$_SESSION['wksdir']  = $_SESSION['user_data_path'].$_SESSION['pathSeparator'].$wksname; ;
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
		$retval = GX_COMMON_AddXMLElement($_SESSION['wksXMLDOM'], $_SESSION['wksXMLfilename'], "li", $wksname, "0", $attrdefinition, true);
		//now create the workspace directire sibling		
		return $retval;
	}//file_exisit
	
	$retval = $_SESSION['wksXMLDOM']->load($_SESSION['wksXMLfilename']);
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


function GX_WKS_CreateSVGFile(&$respData)
{
	// check if the Project folder already exists
	$svgFileName = $respData; 
	$Projdir = $_SESSION['wksdir'].$_SESSION['pathSeparator'].'SVG';	
	//if yes then just return
	$retval = is_dir($Projdir);
	if($retval == false)
	{
		$retval = mkdir($Projdir);
		if($retval == false)
			return $retval;
		$basedir = getcwd();
		$basedir = rtrim($basedir, 'web2graphix');
		$dtdSrcpath  = $basedir.$_SESSION['pathSeparator']."USER_DATA" .$_SESSION['pathSeparator'].'svg11.dtd' ; 
		$dtdDestpath = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].'svg11.dtd'; 
		if (!copy($dtdSrcpath, $dtdDestpath)) {
			return false; 
		}
			
		/*
		 * $file = 'example.txt';
		$newfile = 'example.txt.bak';

		if (!copy($file, $newfile)) {
    		echo "failed to copy $file...\n";
}
		 */
	}

	$_SESSION['svg_xml_dom'] = new DOMDocument("1.0", "utf-8");
	$_SESSION['svg_xml_FileName'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$svgFileName;
	
	if(file_exists($_SESSION['svg_xml_FileName']))
	{
		$respData = "ALREADY_EXISTS";
		return true; 
	}
	if(!file_exists($_SESSION['svg_xml_FileName']))
	{
		//CREATE THE FILE
		$fh = fopen($_SESSION['svg_xml_FileName'],'x+');
		if($fh == false)
		{
			return false;
		}
		$prologstr = '<?xml version="1.0"?><!DOCTYPE svg SYSTEM "svg11.dtd">';
		$prologstr = $prologstr . '
		<svg id="SVGOBJECTCONTAINER"  x="0px" y="0px" width="800px" height="800px" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
		      <title>New SVG File</title><defs id="SVGDEFINITION"> </defs>
		       <script type="application/ecmascript">
			          <![CDATA[
			                   
			                   function ChangeAnimateMotionSettings(node)
			                   {    	
				               	    var motionanimNode = node.nextElementSibling;       
				               	    var fromval = motionanimNode.getAttribute("from");
				               	    fromval = fromval.split(",");       
				               	    var objNode = node.parentNode; 
				               	    var objType = objNode.classList[1]; 
				               	    if(objType == "ELLIPSE")
				               	    {
				               	  	  objNode.setAttribute("cx", fromval[0]); 
				               	      objNode.setAttribute("cy", fromval[1]);   	  
				               	    }
				               	    else if(objType == "RECTANGLE")
				               	    {
				               	  	  objNode.setAttribute("x", fromval[0]); 
				               	      objNode.setAttribute("y", fromval[1]);   	  
				               	    }
				               	    			
			                   }                 
							
					  ]]>
	          </script>
		<g id="BASELAYER" class="LAYER" transform="translate(0,0) scale(1,1) rotate(0 0,0)"></g></svg>' ; 
		$retval = fwrite($fh, $prologstr);

		if($retval == false){
			return false;
		}
		//CLOSE THE FILE
		fclose($fh);
		$parentID = "0";// $_SESSION['workspacename'];	
	}
	$retval = $_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if (!$_SESSION['svg_xml_dom']->validate()) {	
		return false; 	
	}
	
	$root = $_SESSION['svg_xml_dom']->documentElement; //->getElementById('workspace');
	$root = $root->firstChild;	
	$svgNode = $_SESSION['svg_xml_dom']->getElementById('SVGOBJECTCONTAINER'); 	
	$respData = "";	
	
	
	
	$respData = $_SESSION['svg_xml_dom']->save($_SESSION['svg_xml_FileName']);
	$respData = $_SESSION['svg_xml_dom']->saveXML($svgNode);
	
	return true;
}


function GX_WKS_getListofSVGFile(&$responseData)
{
	$dirpath = $_SESSION['projDataPath'];
	$assettype = $responseData;
	$responseData = getassetfilelist($dirpath, $assettype);
	return true;
}

function GX_WKS_OpenSVGFile(&$respData)
{
	$svgFileName = $respData; 
	$_SESSION['svg_xml_dom'] = new DOMDocument("1.0", "utf-8");
	$_SESSION['svg_xml_FileName'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$respData;

	if(!file_exists($_SESSION['svg_xml_FileName']))
	{
		$respData = "";
		return false;
	}	
	$respData = ""; 
	$retval = $_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if($retval != true)
	{
		return false; 
	}
	if (!$_SESSION['svg_xml_dom']->validate()) {
		return false;
	}
	$root = $_SESSION['svg_xml_dom']->documentElement; //->getElementById('workspace');
	$root = $root->firstChild;
	$svgNode = $_SESSION['svg_xml_dom']->getElementById('SVGOBJECTCONTAINER');	
	if(!$svgNode)
		return false; 
	
	$respData = $_SESSION['svg_xml_dom']->saveXML($svgNode);
	return true;
}


function GX_WKS_deleteSVGFile(&$respdata)
{
	$fname = $respdata;
	$fpath = $_SESSION['projDataPath'] . $_SESSION['pathSeparator'].$fname;	
	deleteassetfile($fpath);
	
	$xmlfname = rtrim($fname, 'svg');
	$xmlfname = $xmlfname . 'xml';
	$fpath = $_SESSION['projDataPath'] . $_SESSION['pathSeparator'].$xmlfname;
	deleteassetfile($fpath);
	$respdata = 'OK';
	return true;
}

function GX_WKS_GetSVGXMLMetaData(&$respData)
{
	//first check if SVG file exist or valid 
	$svgFileName = $respData;
	$_SESSION['svg_xml_dom'] = new DOMDocument("1.0", "utf-8");
	$_SESSION['svg_xml_FileName'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$respData;	
	if(!file_exists($_SESSION['svg_xml_FileName']))
	{
		$respData = "";
		return false;
	}
	$respData = "";
	$retval = $_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if($retval != true)
	{
		return false;
	}
	if (!$_SESSION['svg_xml_dom']->validate()) {
		return false;
	}
	$root = $_SESSION['svg_xml_dom']->documentElement; //->getElementById('workspace');
	$root = $root->firstChild;
	$svgNode = $_SESSION['svg_xml_dom']->getElementById('SVGOBJECTCONTAINER');
	if(!$svgNode)
		return false;
	//****************************************************************
	//now start creating the new XML file 
	$xmlfilename = rtrim($_SESSION['svg_xml_FileName'], 'svg'); 
	$xmlfilename = $xmlfilename . 'xml'; 	
	//CREATE THE FILE
	$fh = fopen($xmlfilename,'w+');
	if($fh == false)
	{
		return false;
	}
	$prologstr = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><!DOCTYPE SVGINFO [<!ELEMENT SVGINFO ANY><!ELEMENT li ANY><!ELEMENT ul ANY><!ATTLIST li id ID #REQUIRED><!ATTLIST li name CDATA #IMPLIED><!ATTLIST li type CDATA #IMPLIED><!ATTLIST li class CDATA #IMPLIED><!ATTLIST li level CDATA #IMPLIED><!ATTLIST li dataid CDATA #IMPLIED><!ATTLIST li onclick CDATA #IMPLIED>]><SVGINFO></SVGINFO>';
	$retval = fwrite($fh, $prologstr);	
	if($retval == false){
		return false;
	}
	//CLOSE THE FILE
	fclose($fh);	
	$parentID = "0";// $_SESSION['workspacename'];
	
	$XMLMetaDOM = new DOMDocument("1.0", "utf-8");
	if(!$XMLMetaDOM->load($xmlfilename) )
		return false; 
	//first get the root node from SVg file 
	$svgNode = $_SESSION['svg_xml_dom']->getElementById('SVGOBJECTCONTAINER');
	$parentID = $svgNode->getAttribute('id');
	
	$type = 'SVGROOT'; 
	$class= "TREEMENU" ;
	$level="1";
	$dataid="SVGOBJECTCONTAINER"; 
	$id = 'TM_' . $dataid; 
	$datatype="SVGROOT" ; 
	$name=$svgFileName;
	$nodetitle =$svgFileName; 
	$attrdefinition = array("id"=>$id, "type"=>$type,"class"=>$class,"level"=>$level, "dataid"=>$dataid, "data-type"=>$datatype, "name"=>$name);
	$retval  = GX_COMMON_AddXMLElement($XMLMetaDOM, $xmlfilename, "li", $nodetitle, 0, $attrdefinition, true);
	if($retval != true)
		return  false;
	
	//end code here to return the string 
	$rootNode = $XMLMetaDOM->getElementById($id);
	if(!$rootNode)
		return false; 
	
	
	//level-2 nodes
	$SVGparentNode = $svgNode; 	
	$nodeList = $SVGparentNode->childNodes; 
	$len = $nodeList->length; 
	$childNode = 0;	
	$parentID = 0; 
	for($i=0; $i < $len; $i++)
	{
		$parentID = $SVGparentNode->getAttribute('id');  
		$childNode = $nodeList->item($i);
		$nodeName = $childNode->nodeName; 
		if($nodeName == 'g')
		{
			$type = 'LAYER';
			$class= "TREEMENU" ;
			$level="2";
			$dataid=$childNode->getAttribute('id');
			$id = 'TM_' . $dataid;
			$datatype="LAYER" ;
			$name=$dataid;
			$nodetitle = 'Layer:'. $name;			
			$attrdefinition = array("id"=>$id, "type"=>$type,"class"=>$class,"level"=>$level, "dataid"=>$dataid, "data-type"=>$datatype, "name"=>$name);
			$retval  = GX_COMMON_AddXMLElement($XMLMetaDOM, $xmlfilename, "li", $nodetitle, 'TM_'.$parentID, $attrdefinition, true);
			if($retval != true)
				return  false;
			
			$childnodeList = $childNode->childNodes; 
			$childlen = $childnodeList->length;
			$childNode = 0;
			$parentID = $id;
			for($j=0; $j < $childlen; $j++)
			{				
				$childNode = $childnodeList->item($j);
				$nodeName = $childNode->nodeName;
				$nodeName = strtoupper($nodeName); 
				if($nodeName != '#TEXT')
				{
					$type = 'OBJECT';
					$class= "TREEMENU" ;
					$level="3";
					$dataid=$childNode->getAttribute('id');
					$id = 'TM_' . $dataid;
					$datatype=$nodeName ;
					$name=$nodeName;
					$nodetitle = $datatype .'(ID=' .$dataid. ')';			
					$attrdefinition = array("id"=>$id, "type"=>$type,"class"=>$class,"level"=>$level, "dataid"=>$dataid, "data-type"=>$datatype, "name"=>$name);
					$retval  = GX_COMMON_AddXMLElement($XMLMetaDOM, $xmlfilename, "li", $nodetitle, $parentID, $attrdefinition, true);
					if($retval != true)
						return  false;
				}
			}
		}
	}	
	$rootID = $SVGparentNode->getAttribute('id'); 
	$rootNode = 0; 
	$rootNode = $XMLMetaDOM->getElementById('TM_'. $rootID);
	if(!$rootNode)
		return false;
	$rootNode = $XMLMetaDOM->documentElement;
	$rootNode = $rootNode->firstChild; 
	$respData = $XMLMetaDOM->saveXML($rootNode);
	
	return true; 
}