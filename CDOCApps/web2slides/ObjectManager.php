<?php
include_once "CommonAPI.php";
include_once "scenecomposer.php"; 
include_once "HTMLObjMgr.php"; 
include_once "Debuglog.php";

/* *******
 * This module is responsible for managing objects like Adding , deleting, copying etc. 
 * The module will call apropriate functions for specific object type. 
 * for manipulating the PageSC SML data OBJM should take care of it but for manipulating 
 * HTML specific data individual modules will be reponsible 
 * auth:Rm.
 */
$gEffectSep = "@"; 
function OBJM_ProcessRequest($reqid, &$respdata )
{
	
	 
	if($reqid == '301')
	{
		$retval = OBJM_AddNewObject($respdata);
		return $retval;
	}
	else if($reqid == '300')
	{
		$retval = OBJM_GetPageSCXMLData($respdata);
		return $retval;
	}
	else if($reqid == '302')
	{
		$retval = OBJM_DeleteObject($respdata); 
		return $retval;
	}
	else if($reqid == '303')
	{
		$retval = OBJM_MoveUp($respdata);		
		return $retval;
	}
	else if($reqid == '304')
	{
		$retval = OBJM_MoveDown($respdata);	
		return $retval;
	}
	else if($reqid == '305')
	{
		$retval = OBJM_SetProperty($respdata);	
		//
		return $retval;
	}
	else if($reqid == '306')
	{
		$retval = OBJM_AddLayerReference($respdata);	
		return $retval;
	}
	else if($reqid == '307')
	{
		
		$retval = OBJM_UpdateObject($respdata);
		return $retval;
	}
	else if($reqid == '308')
	{	
		$retval = OBJM_setCurrentSessionState($respdata);
		return $retval;
	}
	else if($reqid == '309')
	{	
		$retval = OBJM_getCurrentEditableObjectData($respdata); 
		return $retval;
	}
	else if($reqid == '310')
	{	
		$retval = OBJM_getCurrentSessionState($respdata); 
		return $retval;
	}
	else if ($reqid == '311')
	{
		$retval = OBJM_UpdateObjectAttributeToSCXML($respdata); 
		return $retval; 
	}
	else if ($reqid == '312')
	{
		$retval = OBJM_updateSlideShowInfo($respdata);
		return $retval; 
	}
	else if ($reqid == '313')
	{
		$retval = OBJM_moveObject($respdata);
		return $retval; 
	}
	else if ($reqid == '314')
	{
		$retval = OBJM_copyObject($respdata);
		return $retval;
	}	
	else if ($reqid == '315')
	{
		$retval = OBJM_UpdateNodeText($respdata);
		return $retval;
	}
	else if ($reqid == '316')
	{
		$retval = OBJM_updateAutoSlideShowInfo($respdata);
		return $retval;
	}		
	else if ($reqid == '317')
	{
		$retval = OBJM_updateSlideEffectInfo($respdata);
		return $retval;
	}		
}
	
/*
 *  ObjParam = "OBJECTTYPE=" + TypeValue + "&OBJECTID=" + ObjID forms basic query param. any 
 *  request should have this as basic param. in addition to these one can have additional parameters
 *  as per required.  
 */

function OBJM_AddNewObjectToSCXML($elemID, $type, $class, $level, $nodeTitle, $parentID, $dataID, $datatype, $dataOrig)
{
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false;

	$displaystring = $nodeTitle;
	global $treehandlerfnname;
	
	//
	$elemID = strtoupper($elemID); 
	$type = strtoupper($type);
	$class = strtoupper($class);
	$level = strtoupper($level); 
	$parentID = strtoupper($parentID);  
	//$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "data-origin"=>"original" , "data-srcid"=>"none", "onclick"=>$treehandlerfnname, "dataid"=>$dataID, "data-type"=>$datatype);
	$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "data-origin"=>$dataOrig , "data-srcid"=>"none", "dataid"=>$dataID, "data-type"=>$datatype, "name"=>$nodeTitle);
	$retval  = CDOC_COMMON_AddXMLElement($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'],
			"li", $displaystring, $parentID, $attrdefinition, true);
	if($retval != true)
		return  false;
	$newObj = $_SESSION['sceneCompXMLDOM']->getElementById($elemID);	 
	$retval = $_SESSION['sceneCompXMLDOM']->saveXML($newObj); 
	return $retval;
}

function OBJM_UpdateObjectAttributeToSCXML(&$respdata)
{
	parse_str($respdata) ;
	$nodeID     = $NODEID;
	$attrName  = $ATTRNAME;
	$attrValue = $ATTRVALUE; 
	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
	{
		$respdata = 'FAIL';
		return false;
	}
	$SCNodeID = $nodeID; 
	CDOC_COMMON_setAttributeValue($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'], $SCNodeID, $attrName, $attrValue);
	$respdata = 'OK'; 
	return true;  
}

function OBJM_AddNewObject(&$respData)
{

	//PARSE THE STRING AND FORM A QUERY PARAMS
	 parse_str($respData) ;	 
	
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION 
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objectIDVal   = strtoupper($OBJECTID);
	$parentIDVal   = strtoupper($REFID);
	$dataID		   = $objectIDVal; //WILL BE USED TO STORE UNIQIE ID IN HTML DATA PROVIDED FROM THE CLIENT END
	$nodeTitle	   = $TITLE;
	$dataType	   = $DATATYPE; 
	$TMObjID 	   = "TM_".$objectIDVal;
	$DIVparentID   = "DIV_".$parentIDVal; 	
	 
	$htmlCode = ""; 
	$respData = ""; 
	switch ($objectTypeVal){
		
		case "SCENE":			
			$retval = OBJM_AddNewObjectToSCXML($TMObjID, $objectTypeVal, "treemenu", "2",$nodeTitle, $parentIDVal,$dataID, $dataType, 'original');		
			if($retval != true)
			{	
				$respData = "FAIL";
				return $retval;
			} 	
			$respData = $retval; 			
			break; 
		
		case "LAYER":
			$TMparentIDVal = "TM_".$parentIDVal; 
			$retval  = OBJM_AddNewObjectToSCXML($TMObjID,$objectTypeVal,"treemenu","3", $nodeTitle, $TMparentIDVal, $dataID, $dataType, 'original');
			if($retval != true)
			{	
				$respData = "FAIL";
				return $retval;
			} 	
			$respData = $retval;
			
			break;
		
		case "HTMLOBJECT":
				$TMparentIDVal = "TM_".$parentIDVal;
				
				$retval  = OBJM_AddNewObjectToSCXML($TMObjID,$objectTypeVal,"treemenu","4", $nodeTitle, $TMparentIDVal, $dataID, $dataType, 'original');
				if($retval != true)
					return false;
				$respData = $retval;
				$layerID = $parentIDVal;
				//add the div element container  now all objects under one container
				$retval  = HTML_AddNewObject($dataType,$dataID, $nodeTitle,$layerID, "DIV_DATA_CONTAINER", $htmlCode);
				if($retval != true)
				{
					$respData = "FAIL";
					return $retval;
				}
				$respData = $respData . "#" . $htmlCode;
				break;
		case "SOURCE":
			$TMparentIDVal = "TM_".$parentIDVal;			
			$retval  = OBJM_AddNewObjectToSCXML($TMObjID,$objectTypeVal,"treemenu","5", $nodeTitle, $TMparentIDVal, $dataID, $dataType, 'original');
			if($retval != true)
				return false;
			$respData = $retval; 
		default:
			break; 
	}
	//ADD THE OBJECT ON THE PAGE SC XML DATA 
	
	
	return true;
	
	//NOW GET THE XML CODE OF THE SAME 
	
	//RETURN XML CODE BACK AS RESPONSE 
	 
	return true; 
}

function OBJM_GetPageSCXMLData(&$pageID)
{
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	$_SESSION['sceneCompXMLDOM'] =  new DOMDocument("1.0", "utf-8");
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	$root = $_SESSION['sceneCompXMLDOM']->documentElement;
	$node = $root->firstChild; 
	$retval = $_SESSION['sceneCompXMLDOM']->saveXML($node);
	$pageID =  $retval; 

	return true; 
}
/****
 * Here $respData is in form of OBJECTID and OBJECTTYPE only 
 */
function OBJM_DeleteObject($respdata)
{
	//PARSE THE STRING AND FORM A QUERY PARAMS
	parse_str($respdata) ;	
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objectIDVal   = strtoupper($OBJECTID);
	
	$respdata = 'FAIL'; 
	
	if($objectTypeVal ==  "PAGE")
		return false;  
	//GET THE TARGET OBJECT ID TO BE DELETED 
	$TMObjectID = "TM_".$objectIDVal; 
	$DIVObjectID = "DIV_".$objectIDVal; 
	
	//Before that check if the item is already referred somewhere in which case delete that first
	//get the list of nodes with tag as div 
	$tag = "li"; //later it can be li as well while using JQX
	$_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']); 
	$nodelist = $_SESSION['sceneCompXMLDOM']->getElementsByTagName($tag); 
	$arrTodelete = array(); 
	$arrIndex=0; 
	if($objectTypeVal == "LAYER")
	{
		for($i = 0; $i < $nodelist->length; $i++)
		{
			//get the node 	
			$currNode = $nodelist->item($i); 		
			//check if the nodes' type is that of Layer type
			$type = $currNode->getAttribute("type"); 
			if($type == "LAYER")
			{ 		
				/// then check if the node has data-srcid same as that of the target	
				$srcid = $currNode->getAttribute("data-srcid");
				if($srcid == $TMObjectID)	
				{
				//then get the ID of the node and call for deletion
					$nodeID = $currNode->getAttribute("id");
					$arrTodelete[$arrIndex++] = $nodeID; 			
				}
			} 			
			
		}
		
		//now delete the copied nodes from the stored IDs in the array
		foreach ($arrTodelete as $index => $arrValue)
		{
			$ID = $arrValue;
			$retval  = CDOC_COMMON_DeleteElement($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $ID, true, "type", $objectTypeVal);
		
			if($retval != true)
				return $retval;		
		}
	}
	
	
		
	//DELETE IT FROM SC SML DATA 
	$retval  = CDOC_COMMON_DeleteElement($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $TMObjectID, true, "type", $objectTypeVal);
	
	if($retval != true)
		return $retval; 
	
	//CALL APPROPRIATE OBJECT SPECIFIC FUNCTION TO DELETE IT FROM HTML DOM 
	if(!isset($_SESSION['projHTMLDOM']))
		return false; 
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	if($objectTypeVal == 'HTMLOBJECT')
	{
		$retval = CDOC_COMMON_DeleteHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $DIVObjectID);
		$respdata = 'OK';
	}
	else if($objectTypeVal == 'SOURCE')
	{
		$retval = CDOC_COMMON_DeleteHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $objectIDVal);
		$respdata = 'OK';
	}
		
	
	return $retval;  
}

function OBJM_MoveUp(&$respdata)
{
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false; 
	
	parse_str($respdata) ;
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objectIDVal   = strtoupper($OBJECTID);
	$objectLevel   = $LEVEL; 

	$TMObjectID = "TM_".$objectIDVal;
	$DIVObjectID = "DIV_".$objectIDVal;
	
	if( ($objectTypeVal == "PAGE") || ($objectTypeVal == "PROJECT"))
			return false; 
	$retval  = CDOC_COMMON_MoveXMLElementUp($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $TMObjectID, $objectLevel);
	if($retval != true)
	{
		$respdata = "FAIL";
		return true;
	} 
	//NEED TO MOVE ELEMENTS IN HTML DOM AS WELL 
	if ( ($objectTypeVal == "SCENE") || ($objectTypeVal == "LAYER") )
	{
		$respdata = "OK"; 
		return true;
	} 
	
	//MO POINT IN HAVING HTML OBJECT MOVE UP /DN AS THE POSITIONS ARE ALREADY ABSOLUTE 
	//$respdata = HTML_MoveUpObject($objectIDVal); 
	return true;
}

function OBJM_MoveDown(&$respdata)
{

	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;
	
	parse_str($respdata) ;
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objectIDVal   = strtoupper($OBJECTID);
	$objectLevel   = $LEVEL;
	
	$TMObjectID = "TM_".$objectIDVal;
	$DIVObjectID = "DIV_".$objectIDVal;
	
	if( ($objectTypeVal == "PAGE") || ($objectTypeVal == "PROJECT"))
		return false;
	$retval  = CDOC_COMMON_MoveXMLElementDown($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $TMObjectID, $objectLevel);
	
	if($retval != true){
		$respdata = "FAIL"; 
		return false; 
	}
	if ( ($objectTypeVal == "SCENE") || ($objectTypeVal == "LAYER") )
	{
		$respdata = "OK"; 
		return true;
	} 
	
	//NEED TO MOVE ELEMENTS IN HTML DOM AS WELL
	//$respdata = HTML_MoveDownObject($objectIDVal);
}
/*
function OBJM_SetProperty(&$respdata)
{
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	
	parse_str($respdata) ;
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objID         = strtoupper($OBJECTID); 
	$attrname	   = $ATTRNAME; 
	$attrval       = $ATTRVAL;   
	
	//var ObjParam = "OBJECTTYPE=" + ObjType + "&OBJECTID=" + ObjID + "&ATTRNAME=" + attrname + "&ATTRVAL=" + attrvalue;
	
	$retval = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], 
			$objID, $attrname, $attrval); 
	
	if($retval ==  true)
		$respdata = "OK"; 
	else 
		$respdata = "FAIL"; 
	
	return true; 
}
*/

function OBJM_SetProperty(&$respdata)
{
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	if(!isset($_SESSION['projHTMLFilename']))
		return false;

	parse_str($respdata) ;
	
	//GET THE LENGTH OF EDIT LIST 
	$listlen = strtoupper($LENGTH); 

	for($i = 0 ; $i < $listlen; $i++){
		$objID         = $OBJECTID[$i];
		$oprtnType     = $OPTYPE[$i];
		$attrname	   = $ATTRNAME[$i];
		$attrval       = $ATTRVALUE[$i];
		
		$hay = "\\";
		$replace = "";
		//LogString($attrval); 
		$htmlString = str_replace($hay, $replace, $attrval);
		//LogString($htmlString); 
		
		//now set attribute 
		if($oprtnType == "ATTRIBUTE")
		{
			$retval = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					$objID, $attrname, $htmlString);
			
			if($retval ==  true)
				$respdata = "OK";
			else
			{
				//it is possible that one might get a false object id 
				$respdata = "FAIL";
				//return true; 
			}
		}
		
		
	}
	

	return true;
}


function OBJM_AddLayerReference(&$respdata)
{
	
	//first get the params e.g. sourceid, newLayerId from client, parentID where Layer has to be referred to

	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if(!isset($_SESSION['sceneCompXMLDOM']))
		return false;
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;
	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
	{
		$respdata ="FAIL"; 
		return false; 
	}	
	parse_str($respdata) ;	
	$objID = 	$OBJECTID; 
	$refID = 	$REFERENCEID; 
	$parentID = $SCENEID; 
	
	//get the source node
	$refNode = $_SESSION['sceneCompXMLDOM']->getElementById($refID); 
	if(!$refNode)
		return false;	
	
	$nodeTitle = $refNode->getAttribute('name'); 
	
	$parentNode = $_SESSION['sceneCompXMLDOM']->getElementById($parentID);
	if(!$parentNode) 
		return false;  
			
	$dataID = $refNode->getAttribute("dataid"); 
	
	$nodeType = $refNode->getAttribute("type"); 
	if($nodeType != "LAYER")
	{
		$respdata = "FAIL"; 
		return false; 
	}
	
	//$TMparentIDVal = "TM_".$parentID;
	$retval  = OBJM_AddNewObjectToSCXML($objID,$nodeType,"treemenu","3", $nodeTitle, $parentID, $dataID, $nodeType, 'reference');
	if($retval == false)
	{
		$respData = "";
		return false;
	}
	//$retval = $_SESSION['sceneCompXMLDOM']->save($_SESSION['sceneCompXMLFilePath']);
	//send OK back to client 
	$respdata = $retval; 
	return true; 	
}

function OBJM_UpdateObject(&$respdata)
{
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	
	if( (!isset($_SESSION['sceneCompXMLDOM'])) || (!isset($_SESSION['sceneCompXMLFilePath'])) )
	{
				return false; 
	}
	
		
	$respdata = htmlspecialchars_decode($respdata, ENT_COMPAT); 
	
//	$hay = "&quot;";
//	$replace = "\\'";
//	$respdata = str_replace($hay, $replace, $respdata);
	
	parse_str($respdata) ;
	$objID    = $OBJECTID;
	$objType  = $OBJECTTYPE;	
	$SCNodeID = 'TM_'.$objID;	
	//if($objType != 'NVBUTTONS')
	
	CDOC_COMMON_setAttributeValue($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'], $SCNodeID, 'data-type', $objType);
	
	
	
	$params = explode ( 'HTMLSTRING=' ,$respdata, 20 ); 
	
	  $hay = "\\";
	  $replace = "";
	  $htmlString = str_replace($hay, $replace, $params[1]);		
	//LogString($params[1]);
	//LogString($htmlString); 
	$retval  = CDOC_COMMON_updateHTMLObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $objID, $htmlString);
	if($retval == true)
	{
		$respdata = "OK";
		
		//also update the parent div object container here 
		$divID = "DIV_".$objID; 
		CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $divID, 'data-type', $objType); 
	} 
	else
		$respdata = "FAIL"; 
	
	return true; 
}

function OBJM_setCurrentSessionState(&$respData)
{
	//get the ObjectID and store it in the session variable	
	parse_str($respData) ;	
	$projID  = $PROJECTID; 	
	$PageID  = $PAGEID;	
	$objID   = $OBJECTID;
	$_SESSION['currEditableObjID'] = $objID; 
	$_SESSION['currPageID'] = $PageID;	
	$_SESSION['currProjID'] = $projID;
	$respData = 'OK'; 	
}

function OBJM_getCurrentSessionState(&$respData)
{

	if( (!$_SESSION['currProjID']) || (!$_SESSION['currPageID']) )
	{
		$respData  = "NOVALUE";
		return true; 
	} 
	
	$respData = $_SESSION['currProjID'] . '#'. $_SESSION['currPageID'] . '#' .
			$_SESSION['currEditableObjID'];
	return true;  
	
}

function OBJM_getCurrentEditableObjectData(&$respData)
{
	parse_str($respData) ;
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	if(!isset($_SESSION['currEditableObjID']))
		return false;
	
	$objID = $_SESSION['currEditableObjID']	;
	$objID = 'DIV_'.$objID;
	
		
	$respData = CDOC_COMMON_getHTMLObjectData($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $objID);
	if($respData == 'FAIL')
		return false; 
	
	//$respData = "<div id='DIV_DATA_CONTAINER' style='position: absolute; display:block'>". $respData ."</div>";  
	return true; 
	
}


function OBJM_updateSlideShowInfo(&$pageID, $pagenameList, $currentPageIndex)
{
	
	$codestr = "";
	$pageSCXML = strtoupper($pageID); 
	$pageSCXML = $pageSCXML . '_SC.xml'; 
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	//generate the slide array information 
	$myslidearr;
	OBJM_getSlideArrayInfo($myslidearr); 
	OBJM_getSlideShowInfocode($codestr, $myslidearr); 	
	
	//send back return code 	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']); 
	if($retval != true)
		return false ; 
	$pageNode = $_SESSION['sceneCompXMLDOM']->getElementById($pageID); 
	$pageName = $pageNode->getAttribute('name'); 
	$_SESSION['projHTMLFilename'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html";
		
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'pagelevelCode', $codestr ); 
	

	if($retval != true)
	{
		$respdata = 'FAIL'; 
		return false; 
	}
	
	OBJM_getPageShowInfo($codestr, $pagenameList, $currentPageIndex);
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'projectlevelCode', $codestr );
	
	if($retval != true)
	{
		$respdata = 'FAIL';
		return false;
	}
	
	OBJM_getCommoncode($codestr);
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'commonCode', $codestr );
	
	if($retval != true)
	{
		$respdata = 'FAIL';
		return false;
	}
	
	OBJM_getCSScodeforButton($codestr);
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'buttonstyle', $codestr );
	
	if($retval != true)
	{
		$respdata = 'FAIL';
		return false;
	}

	//trial code to be removed l;ater _rm 
	//OBJM_updateSlideEffectInfo($pageID);
	$pageID = 'OK'; 
	return true; 
}



function OBJM_getSlideArrayInfo(&$myslidearr)
{
	$myslidearr =  array();
	if(!isset($_SESSION['sceneCompXMLDOM']) )
			return false;  
	if(!isset($_SESSION['sceneCompXMLFilePath']))
			return false; 
	$sceneArr;
	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']); 
	if($retval != true)
		return false ; 
	$parentNode = $_SESSION['sceneCompXMLDOM']->documentElement; 
	$parentNode = $parentNode->firstChild; 
	$parentNode = $parentNode->firstChild; 
	$type = $parentNode->getAttribute('type');
	if($type != 'PAGE')
		return false; 
	$pageID = $parentNode->getAttribute('id'); 
	
	$retval  = CDOC_COMMON_getChildrenList($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'],$pageID, 'data-type', 'SCENE', 'id', $sceneArr);
	if($retval != true)return false; 

	$scenearrlen = count($sceneArr); 
	if($scenearrlen <= 0 )
		return false; 
	$layerArr ; 
	for($i = 0 ; $i <$scenearrlen; $i++)
	{
		$sceneID = $sceneArr[$i]; 
		$retval  = CDOC_COMMON_getChildrenList($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'], $sceneID, 'data-type', 'LAYER','dataid',  $layerArr);
		if($retval != true)
			return false; 
		$layerCount = count($layerArr); 
	//	for($k = 0 ; $k < $layerCount; $k++ )
	//	{
			array_push($myslidearr, $layerArr); 
	//	}
	}
	
	return true ; 
	
	//$myslidarr[0] = ('LAYER842'); $myslidarr[1] = ['LAYER1289']; myslidarr[2] = ['LAYER713']; myslidarr[3] = ['LAYER670'];
}

function OBJM_getSlideShowInfocode(&$codestr, $myslidearr)
{
	//using the slide array now generate the code
	//$codestr="";
	$tempstr = "";
	$gEffectSep = $GLOBALS['gEffectSep'];
	// write the code into the script node
	$tempstr = "var slidearr = []; var gslideIndex = 0; ";
	$codestr = $codestr . $tempstr;
	$arrlen = count($myslidearr);
	$nItems = 0;
	for($j =0;  $j < $arrlen; $j++)
	{
		$tempstr = "slidearr[" . $j . "] = [";
	
		$nItems = count($myslidearr[$j]);
		for ($k = 0; $k < $nItems; $k++) {
			$tempstr = $tempstr .  "'" . $myslidearr[$j][$k] . "'";
			if ($k + 1 < $nItems) {
				$tempstr = $tempstr . ",";
			}
		}
		$tempstr = $tempstr . "] ;  ";
		$codestr = $codestr . $tempstr;
	}
	
	//	var str = "slideSel = '[data-type='NVBUTTONS']'; $(slideSel).show();"
	
	//now write the function related codes here
	//$tempstr  = "$(document).ready(function() {showSlideData(gslideIndex);});";
	$tempstr = ""; 
	$tempstr  = $tempstr .'function showSlideData(slideIndex) {
	var length = slidearr[slideIndex].length;
	var slideSel = "div.OBJECT_CONTAINER"; 
	$(slideSel).hide(); 
	slideSel = "#ALL_DATA_CONTAINER";
	var param;
	var paramstr=""; 
	if( (gSlideEffect.length > 0 ) && (gSlideEffect[slideIndex][0] != "none") )
	{
		var arrlen = gSlideEffect[slideIndex].length; 
		paramstr =\'{\';
		for(var n=3; n < arrlen; n++)
		{		
			if(gSlideEffect[slideIndex][n])
				paramstr += gSlideEffect[slideIndex][n] + \',\';
		}
		paramstr += \'}\';
		var effectParamstr ="param=" +  paramstr; ; 		
		eval(effectParamstr);	
		if(gSlideEffect[slideIndex][0] == "flip")
		{
			$(slideSel).hide();
			$(slideSel).show().flip(param);			
		}
		else
			$(slideSel).show(gSlideEffect[slideIndex][0],param, gSlideEffect[slideIndex][2]);		
	}
	else
	{
		$(slideSel).show(); 
	}	
	slideSel = "[data-type=NVBUTTONS]";
	$(slideSel).show();
	var elemArr; 
	var elem; 
	var effectVal; 
	var JQSel; 
	var effectcode; 
	var effectPropArr; 
	var effectParam; 
	
	for (var k = 0; k < length; k++) { 
		slideSel = "[data-layerid=" + slidearr[slideIndex][k] + "]";		
		elemArr = $(slideSel).toArray();
		for(var n=0; n < elemArr.length; n++)
		{
			effectVal = elemArr[n].getAttribute("data-effect"); 
			JQSel = $("#"+elemArr[n].id); 
			if((!effectVal)|| (effectVal == "null") )
				$(JQSel).show(); 
			else
			{
				effectPropArr = effectVal.split("' . $gEffectSep .'");
				effectParam = "{";
				for(var a=3; a <effectPropArr.length; a++)
				{
					if(effectPropArr[a])
						effectParam += effectPropArr[a]+\',\';
					
				}					
				effectParam += "}";				
				var str = "effectParam="+ effectParam; 
				eval(str);	
				var animtime  ; 
				var initdelay  ;
				str = \'animtime=\'+effectPropArr[2]; 
				eval(str); 
				str = \'initdelay=\'+effectPropArr[1]; 
				eval(str); 
				if(effectPropArr[0]== "flip")
				{
					$(JQSel).hide();
					$(JQSel).delay(initdelay).show().flip(effectParam); 
					
				}
				else
					$(JQSel).delay(initdelay).show(effectPropArr[0],effectParam, animtime, "");
					
							
			}			
		}
	}
	var slidelen = slidearr.length;
	if (slideIndex + 1 == slidelen) { 
		DisableButton("NEXTSLIDEBTN", true);
		} 
	else { 
		DisableButton("NEXTSLIDEBTN", false);
		} 
	JQSel = "#PREVSLIDEBTN";
	if (slideIndex - 1 < 0) { 
		DisableButton("PREVSLIDEBTN", true);
		} 
	else {
		DisableButton("PREVSLIDEBTN", false);
		}
	}'	;
	
	
	$tempstr  = $tempstr ."function showNextSlideData(event) { var node = event.target.parentNode; var bFlag = IsButtonEnabled(node); if (bFlag == false) { return; } gslideIndex++; showSlideData(gslideIndex); InitializeAutoShow(); }";
	$tempstr =  $tempstr ."function showPrevSlideData(event) { var node = event.target.parentNode; var bFlag = IsButtonEnabled(node); if (bFlag == false) { return; } gslideIndex--; showSlideData(gslideIndex); InitializeAutoShow(); }";
	$codestr  = $codestr . $tempstr;
	
}

function OBJM_getPageShowInfo(&$codestr, $pagenameArr, $currentPageIndex)
{
	//just generate the code 
	$tempstr = "";
	$codestr = ""; 
	// write the code into the script node
	$pagecount = count($pagenameArr); 
	$tempstr = "var gpagearr = [];";
	$tempstr = $tempstr . "var gcurrpageIndex = " .$currentPageIndex . ";";
	$tempstr = $tempstr . "var gnumpages =  " . $pagecount . ";"; 
	$codestr = $codestr . $tempstr;
	
	for($j =0;  $j < $pagecount; $j++)
	{
		$pageName = $pagenameArr[$j] . ".html"; 
		$tempstr = "gpagearr[" . $j . "] = ['" . $pageName . "']; ";		
		$codestr = $codestr . $tempstr;
	}
	
	//write the final code string into the script node that's it 
	$tempstr = "function showNextPageData(event) { var node = event.target.parentNode; var bFlag = IsButtonEnabled(node); if (bFlag == false) {return;} pageIndex = gcurrpageIndex + 1; var pagename = gpagearr[pageIndex]; var JQSel; myWindow = window.open(pagename, '_self', ''); myWindow.resizeTo(screen.width, screen.height); myWindow.moveTo(50, 50); myWindow.focus(); }"; 
	$codestr = $codestr . $tempstr; 
	
	$tempstr = "function showPrevPageData(event) { var node = event.target.parentNode; var bFlag = IsButtonEnabled(node); if (bFlag == false) {return;} pageIndex = gcurrpageIndex - 1; var pagename = gpagearr[pageIndex]; var JQSel; myWindow = window.open(pagename, '_self', ''); myWindow.resizeTo(screen.width, screen.height); myWindow.moveTo(50, 50); myWindow.focus(); }";
	$codestr = $codestr . $tempstr;
	
	$tempstr = "function SetButtonStates() { var pageIndex = gcurrpageIndex; if (pageIndex + 1 >= gnumpages) { DisableButton('NEXTPAGEBTN', true); } else { DisableButton('NEXTPAGEBTN', false); } if (pageIndex - 1 < 0) { DisableButton('PREVPAGEBTN', true); } else { DisableButton('PREVPAGEBTN', false); } }";
	$codestr = $codestr . $tempstr;
}

function OBJM_getCommoncode(&$codestr)
{
	$tempstr = "";
	$codestr = ""; 
	$tempstr  = "$(document).ready(function() { showSlideData(0); SetButtonStates(); });";	
	$codestr = $codestr . $tempstr;
	
	$tempstr = "function DisableButton(btnID, bFlag) { var node = document.getElementById(btnID); var childnode = node.firstChild;if (bFlag == true) { childnode.style.opacity = 0.3; node.setAttribute('disabled', 'disabled'); }else {childnode.style.opacity = 0.7; node.removeAttribute('disabled'); }}";
	$codestr = $codestr . $tempstr;
	
	$tempstr = "function IsButtonEnabled(BtnNode) {var node = BtnNode; var nodeID = node.getAttribute('id'); var JQSel = '#' + nodeID; var bDisableFlag = $(JQSel).attr('disabled'); if (!bDisableFlag) {return true; } else {return false; }}";
	$codestr = $codestr . $tempstr;
	
}

function OBJM_getCSScodeforButton(&$codestr)
{
	$tempstr = "";
	$codestr = "";
	////$tempstr =  ".IMAGE_BUTTON {	opacity:0.7;} " ; 
	//$codestr = $codestr . $tempstr;
	
	$tempstr = ".IMAGE_BUTTON:hover{border:outset thin grey;  background-color : #EEEEEE;   border-radius:5px;  box-shadow: 5px 8px 7px #888888; } ";
	$codestr = $codestr . $tempstr;
	
	$tempstr = ".SIZE_48_X_48{	width:48px;    height:48px;	}";
	$codestr = $codestr . $tempstr;
	 
	$tempstr = ".SIZE_48_X_48:active {	width:42px;    height:42px;	} "; 
	$codestr = $codestr . $tempstr;	
}

function OBJM_moveObject(&$respData)
{
	if(!isset($_SESSION['sceneCompXMLDOM']))
		return false;
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;
	
	parse_str($respData) ;	
	$objID    	= $OBJECTID;  
	$destParentID = $DESTOBJECTID; 
	$objectType = $TYPE; 
	$objPosition = $OBJPOSITION; 
	
	$TMObjID = "TM_" . $objID; 
	$TMdestParentID = "TM_".$destParentID; 
	
	$retVal = CDOC_COMMON_MOVEXMLElement($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'],
			$TMObjID, $TMdestParentID, $objPosition); 
	if($retVal != true)
	{
		$respData = "FAIL";
		return false; 
	}
	
	if($objectType == 'HTMLOBJECT')
	{
		$divObjID = "DIV_". $objID; 
		$retval  = CDOC_COMMON_setHTMLAttributeInObject($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
				$divObjID, "data-layerid", $destParentID);
		if($retval != true)
		{
			$respData = "FAIL"; 
			return false; 
		}
	}
	$respData = "OK"; 
	return true; 
}
function OBJM_copyObject(&$respData)
{
	parse_str($respData) ;	
	$objID    	= $OBJECTID;  
	$destParentID = $DESTOBJECTID; 
	$objectType = $TYPE;
	 
	$TMObjID  = "TM_". $objID; 
	$TMdestID = "TM_". $destParentID; 
	
	$respdata = "FAIL"; 
	if(!isset($_SESSION['sceneCompXMLDOM']))
		return false;
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;	
	$retval  = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval == False)
		return False;
	
	$NodeToCopy = $_SESSION['sceneCompXMLDOM']->getElementById($TMObjID); 
	if(!$NodeToCopy)
		return false; 
	$rootparentNode = $_SESSION['sceneCompXMLDOM']->getElementById($TMdestID);
	$parentNode = $rootparentNode->firstChild;	
	$parentNode = $parentNode->nextSibling;	
	if(!$parentNode)
	{
		//means no node present yet
		$ulelement = $_SESSION['sceneCompXMLDOM']->createElement('ul', "");
		$rootparentNode->appendChild($ulelement);
		$rootparentNode = $_SESSION['sceneCompXMLDOM']->getElementById($TMdestID);
		$parentNode = $rootparentNode->firstChild;
		$parentNode = $parentNode->nextSibling;
	}
	$name = strtoupper($parentNode->nodeName);
	
	$copiedNode = $NodeToCopy->cloneNode(true); 
	//$retval  =  $parentNode->appendChild($copiedNode);
	//$copiedNode = $_SESSION['sceneCompXMLDOM']->importNode($NodeToCopy, true);
	//$retval = CDOC_COMMON_AddUniqueCopyID($_SESSION['sceneCompXMLDOM'], $_SESSION['sceneCompXMLFilePath'], $copiedNode); 
	if($copiedNode)
	{
		$nodeID = $copiedNode->getAttribute('id');
		$xmlDOM = $_SESSION['sceneCompXMLDOM']; 
		$xmlFile = $_SESSION['sceneCompXMLFilePath'];
		
		//$newID = CDOC_COMMON_GeneratedUniqueCopyDataID($xmlDOM,$xmlFile ,$nodeID);
		//$copiedNode->setAttribute('id', $newID);		
		$retval  =  $parentNode->appendChild($copiedNode);
		$retval = CDOC_COMMON_AddXMLUniqueCopyID($xmlDOM, $copiedNode,$objectType, $destParentID);
		$retval  = $xmlDOM->save($xmlFile);
		$respData = "OK"; 
		return true;
	}
	return false; 
}

function OBJM_UpdateNodeText(&$respdata)
{		
	if( (!isset($_SESSION['sceneCompXMLDOM'])) || (!isset($_SESSION['sceneCompXMLFilePath'])) )
	{
		return false;
	}	
	parse_str($respdata) ;
	$SCnodeID    = $NODEID;
	$nodeText    = $NODETEXT;	
	$retval = CDOC_COMMON_updateSCNodeTitle($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'],
			 $SCnodeID, $nodeText);
	if($retval == true)
	{
		$respdata = 'OK';
		return true;
	}else
	{
		$respdata = 'FAIL';
		return false;
	}
}

function OBJM_getAutoSlideShowInfoCode(&$codestr)
{
	//first get the array of slide IDs 
	$tempstr = ""; 
	$codestr = ""; 
	if(!isset($_SESSION['sceneCompXMLDOM']) )
		return false;
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;
	
	$sceneArr;	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false ;
	$parentNode = $_SESSION['sceneCompXMLDOM']->documentElement;
	$parentNode = $parentNode->firstChild;
	$parentNode = $parentNode->firstChild;
	$type = $parentNode->getAttribute('type');
	if($type != 'PAGE')
		return false;
	$pageID = $parentNode->getAttribute('id');
	
	$retval  = CDOC_COMMON_getChildrenList($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'],$pageID, 'data-type', 'SCENE', 'id', $sceneArr);
	if($retval != true)return false;
	
	$scenearrlen = count($sceneArr);
	if($scenearrlen <= 0 )
		return false;	
	
	//then formualate the initial code 
	$tempstr = "var gSlideDuration = 0; var gAutoSlideTimer = 0; var gTimeOut = 100; var gAVPlayerObject =0; var gCurrentSlideIndex = 0; var gAVPlayerInitOffsetTime = 0; var gEndIndex = 0;"; 
	$codestr = $codestr . $tempstr;
	
	$tempstr = "sSlideInfo.prototype.id = 0; sSlideInfo.prototype.AVObjectID = 0; sSlideInfo.prototype.duration = 0; sSlideInfo.prototype.startTime = -1; function sSlideInfo() {sSlideInfo.prototype.id = 0;sSlideInfo.prototype.AVObjectID = 0;sSlideInfo.prototype.duration = 0;	sSlideInfo.prototype.startTime = -1;}"; 
	$codestr = $codestr . $tempstr;
	
	$tempstr =  "var gSlideNum =" . $scenearrlen .";"; 
	$codestr = $codestr . $tempstr;
	
	$tempstr = "var gSlideInfoList = new Array(gSlideNum); for(var i=0; i < gSlideNum; i++) {gSlideInfoList[i] = new sSlideInfo(); }";
	$codestr = $codestr . $tempstr;  
	
	//now iterate over each Scene node , get the timing params
	for($i=0; $i < $scenearrlen; $i++)
	{
		$sceneID = $sceneArr[$i];
		$node =  $_SESSION['sceneCompXMLDOM']->getElementById($sceneID); 
		$AVObjID = $node->getAttribute('data-AVObjID'); 
		$startTime = $node->getAttribute('data-startTime'); 
		$duration = $node->getAttribute('data-duration');
		
		$tempstr = " gSlideInfoList[" . $i . "].AVObjectID='" . $AVObjID. "';"; 
		$codestr =$codestr . $tempstr; 
		
		$tempstr = " gSlideInfoList[" . $i . "].duration=Number(" . $duration. ");";
		$codestr =$codestr . $tempstr;
		
		$tempstr = " gSlideInfoList[" . $i . "].startTime=Number(". $startTime . ");";
		$codestr =$codestr . $tempstr;		
	} 
	
		//$tempstr = "function InitializeAutoShow() {if(gSlideInfoList.length < 1) return ; gEndIndex = gSlideInfoList.length-1; if( (!gAVPlayerObject) && (gSlideInfoList[0].AVObjectID != 0) ) gAVPlayerObject = document.getElementById(gSlideInfoList[0].AVObjectID); else gAVPlayerObject = 0; if(gAVPlayerObject){gAVPlayerObject.pause();gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime;gAVPlayerInitOffsetTime = gAVPlayerObject.currentTime; } if(!gAutoSlideTimer){gAutoSlideTimer = setInterval(function() {AutoShowTimerHandle(); }, gTimeOut); gSlideDuration = 0; if(gAVPlayerObject) gAVPlayerObject.play(); showSlideData(gCurrentSlideIndex); } }";
		$tempstr =  " function InitializeAutoShow() {if(gSlideInfoList.length < 1) return ; gEndIndex = gSlideInfoList.length-1; if(gSlideInfoList[gslideIndex].AVObjectID != 0) {if(!gAVPlayerObject) gAVPlayerObject = document.getElementById(gSlideInfoList[gslideIndex].AVObjectID);	if(gAVPlayerObject){ gAVPlayerObject.pause(); gAVPlayerObject.currentTime = gSlideInfoList[gslideIndex].startTime; gAVPlayerInitOffsetTime = gAVPlayerObject.currentTime; }} else { if(gAVPlayerObject)	gAVPlayerObject.pause(); gAVPlayerObject = 0; } if(gAutoSlideTimer){ clearInterval(gAutoSlideTimer); gAutoSlideTimer = 0; } if(!gAutoSlideTimer){ gAutoSlideTimer = setInterval(function() {AutoShowTimerHandle(); }, gTimeOut); gSlideDuration = 0; if(gAVPlayerObject) gAVPlayerObject.play(); showSlideData(gslideIndex); }}";
		$codestr = $codestr .$tempstr;	
		
		$tempstr =  "function OnLoadMetadata(){	InitializeAutoShow();}";
		$codestr = $codestr .$tempstr;
		
		//$tempstr = "function AutoShowTimerHandle(){if(gAVPlayerObject) gSlideDuration = (gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime); else gSlideDuration += (gTimeOut/1000); if(gSlideDuration >= gSlideInfoList[gCurrentSlideIndex].duration) { gCurrentSlideIndex++; if(gCurrentSlideIndex == gEndIndex+1) { clearInterval(gAutoSlideTimer); gAutoSlideTimer = 0; if(gAVPlayerObject) { gAVPlayerObject.pause(); gAVPlayerObject = 0; } } else { if(gAVPlayerObject) { gAVPlayerInitOffsetTime = gSlideInfoList[gCurrentSlideIndex].startTime; } gSlideDuration = 0; } showSlideData(gCurrentSlideIndex); } }";
		//$tempstr = "function AutoShowTimerHandle(){if(gAVPlayerObject) gSlideDuration = (gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime); else gSlideDuration += (gTimeOut/1000); if( (gSlideDuration >= gSlideInfoList[gslideIndex].duration) && (gslideIndex < gSlideInfoList.length-1) ) {  if(gslideIndex == gEndIndex) { clearInterval(gAutoSlideTimer);  gAutoSlideTimer = 0; if(gAVPlayerObject) gAVPlayerObject.pause(); } else { gslideIndex++; if(!gSlideInfoList[gslideIndex].AVObjectID) { if( (gAVPlayerObject) && (gAVPlayerObject.paused != true)) { gAVPlayerObject.pause(); gAVPlayerObject = 0; } } else { if(!gAVPlayerObject) {  gAVPlayerObject =  document.getElementById(gSlideInfoList[gslideIndex].AVObjectID); } if( (gAVPlayerObject) && (gAVPlayerObject.paused == true)) { gAVPlayerObject.currentTime = gSlideInfoList[gslideIndex].startTime; gAVPlayerObject.play(); } if(gAVPlayerObject) { gAVPlayerInitOffsetTime = gSlideInfoList[gslideIndex].startTime; } } gSlideDuration = 0; } showSlideData(gslideIndex); } else if(gslideIndex >= gSlideInfoList.length-1) { var endTime = gSlideInfoList[gslideIndex].startTime + gSlideInfoList[gslideIndex].duration; if( (gAVPlayerObject) && (gAVPlayerObject.currentTime >= endTime) ) { clearInterval(gAutoSlideTimer); gAutoSlideTimer = 0; if(gAVPlayerObject) gAVPlayerObject.pause(); } else if( (!gAVPlayerObject) && (gSlideDuration >= gSlideInfoList[gslideIndex].duration) ) { clearInterval(gAutoSlideTimer); gAutoSlideTimer = 0; }}}" ;
		$tempstr = "function AutoShowTimerHandle(){
		if(gAVPlayerObject) 
			gSlideDuration = (gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime);
		else
			gSlideDuration += (gTimeOut/1000); 
		if( (gSlideDuration >= gSlideInfoList[gslideIndex].duration) && (gslideIndex < gSlideInfoList.length-1) ) { 
			if(gslideIndex == gEndIndex) { 
				clearInterval(gAutoSlideTimer); 
				gAutoSlideTimer = 0; 
				if(gAVPlayerObject)
					gAVPlayerObject.pause();
			} 
		else {
			gslideIndex++;
			if(!gSlideInfoList[gslideIndex].AVObjectID) {
				if( (gAVPlayerObject) && (gAVPlayerObject.paused != true)) {
					gAVPlayerObject.pause(); 
					gAVPlayerObject = 0;
					}
				}
				else {
				    if((gAVPlayerObject) && (gAVPlayerObject.id != gSlideInfoList[gslideIndex].AVObjectID)) {
				        gAVPlayerObject.pause();
				        gAVPlayerObject = 0;
				    } 		     
				if(!gAVPlayerObject) { 
					gAVPlayerObject =  document.getElementById(gSlideInfoList[gslideIndex].AVObjectID);
					} 
				if( (gAVPlayerObject) && (gAVPlayerObject.paused == true)) {
					gAVPlayerObject.currentTime = gSlideInfoList[gslideIndex].startTime;
					gAVPlayerObject.play(); 
					}
				if(gAVPlayerObject) { 
					gAVPlayerInitOffsetTime = gSlideInfoList[gslideIndex].startTime;
					}
				} 
			gSlideDuration = 0; 
			} 
		showSlideData(gslideIndex);
		}
	else if(gslideIndex >= gSlideInfoList.length-1) { 
		var endTime = gSlideInfoList[gslideIndex].startTime + gSlideInfoList[gslideIndex].duration;
		if( (gAVPlayerObject) && (gAVPlayerObject.currentTime >= endTime) ) {
			clearInterval(gAutoSlideTimer); 
			gAutoSlideTimer = 0; 
			if(gAVPlayerObject) gAVPlayerObject.pause();
			} else if( (!gAVPlayerObject) && (gSlideDuration >= gSlideInfoList[gslideIndex].duration) ) {
				clearInterval(gAutoSlideTimer);
				gAutoSlideTimer = 0; 
				}
		}
	} ";  
		$codestr = $codestr .$tempstr;
	// add to the code 
	
	//complete the code with other functions 
	
		return true; 
	//return 
}

function OBJM_updateAutoSlideShowInfo(&$respData)
{
	$pageID = $respData; 
	
	$codestr = "";
	$pageSCXML = strtoupper($pageID);
	$pageSCXML = $pageSCXML . '_SC.xml';
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	//generate the slide array information
	
	
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false ;
	$pageNode = $_SESSION['sceneCompXMLDOM']->getElementById($pageID);
	$pageName = $pageNode->getAttribute('name');
	$_SESSION['projHTMLFilename'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html";
	
	$retval = OBJM_getAutoSlideShowInfoCode($codestr);
	if($retval != true)
	{
		$respData = "FAIL";
		return false; 
	}
	
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'autoslideshow', $codestr );
	
}

function OBJM_updateSlideEffectInfo(&$respData)
{
	$pageID = $respData;
	$codestr = "";
	$pageSCXML = strtoupper($pageID);
	$pageSCXML = $pageSCXML . '_SC.xml';
	$_SESSION['sceneCompXMLFilePath'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageID."_SC.xml";
	//generate the slide array information


	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false ;
	$pageNode = $_SESSION['sceneCompXMLDOM']->getElementById($pageID);
	$pageName = $pageNode->getAttribute('name');
	$_SESSION['projHTMLFilename'] = $_SESSION['projDataPath'].$_SESSION['pathSeparator'].$pageName.".html";

	$retval = OBJM_getSlideEffectInfoCode($codestr);
	if($retval != true)
	{
		$respData = "FAIL";
		return false;
	}
	$retval  = CDOC_COMMON_replaceTextIntoNode($_SESSION['projHTMLDOM'],$_SESSION['projHTMLFilename'],
			'slideeffect', $codestr );
	$respData = 'OK'; 

}

function OBJM_getSlideEffectInfoCode(&$codestr)
{
	$tempstr = "";
	$codestr = "";
	if(!isset($_SESSION['sceneCompXMLDOM']) )
		return false;
	if(!isset($_SESSION['sceneCompXMLFilePath']))
		return false;
	
	$sceneArr;
	$retval = $_SESSION['sceneCompXMLDOM']->load($_SESSION['sceneCompXMLFilePath']);
	if($retval != true)
		return false ;
	$parentNode = $_SESSION['sceneCompXMLDOM']->documentElement;
	$parentNode = $parentNode->firstChild;
	$parentNode = $parentNode->firstChild;
	$type = $parentNode->getAttribute('type');
	if($type != 'PAGE')
		return false;
	$pageID = $parentNode->getAttribute('id');
	
	$retval  = CDOC_COMMON_getChildrenList($_SESSION['sceneCompXMLDOM'],$_SESSION['sceneCompXMLFilePath'],$pageID, 'data-type', 'SCENE', 'id', $sceneArr);
	if($retval != true)return false;
	
	$scenearrlen = count($sceneArr);
	if($scenearrlen <= 0 )
		return false;
	
	//then formualate the initial code
	$tempstr = "var gSlideEffect = [];";
	$codestr = $codestr . $tempstr;
	for($j=0; $j < $scenearrlen; $j++)
	{
		$sceneID = $sceneArr[$j];
		$node =  $_SESSION['sceneCompXMLDOM']->getElementById($sceneID);
		$effectstr = $node->getAttribute('data-slideEffect');
		if($effectstr)
		{	
			$tempstr = 'gSlideEffect['.$j.']=['; 
			$effecttokstr = strtok($effectstr, $GLOBALS['gEffectSep']);
			$tempstr = $tempstr . '\''.$effecttokstr.'\''. ',';
			
			//animtime and delay being written here 
			$effecttokstr = strtok($GLOBALS['gEffectSep']);
			$tempstr = $tempstr . $effecttokstr.',';	

			$effecttokstr = strtok($GLOBALS['gEffectSep']);
			$tempstr = $tempstr . $effecttokstr.',';
			
			$effecttokstr = strtok($GLOBALS['gEffectSep']);
			while($effecttokstr != false)
			{				
				$tempstr = $tempstr . '\''.$effecttokstr.'\''. ','; 
				$effecttokstr = strtok($GLOBALS['gEffectSep']);
			}		
			$tempstr =  $tempstr .  '];'; 			
		}
		else
		{
			$tempstr = 'gSlideEffect['.$j.']=['.'"none"'.',';			
			$tempstr = $tempstr . '' . '];' ;
		}
		$codestr = $codestr . $tempstr;
	}
	return true; 
}

?>