<?php
include_once "GX_CommonAPI.php";
include_once "Debuglog.php";

/* *******
 * This module is responsible for managing objects like Adding , deleting, copying etc. 
 * The module will call apropriate functions for specific object type. 
 * for manipulating the PageSC SML data OBJM should take care of it but for manipulating 
 * HTML specific data individual modules will be reponsible 
 * auth:Rm.
 */
$gEffectSep = "@"; 
function GX_OBJ_ProcessRequest($reqid, &$respdata )
{	 
	if($reqid == '301')
	{
		$retval = GX_OBJ_AddNewSVGObject($respdata);
		return $retval;
	}
	else if($reqid == '305')
	{
		$retval = GX_OBJ_SetProperty($respdata);		
		return $retval;
	}
	else if($reqid == '306')
	{
		$retval = GX_OBJ_MoveZIndex($respdata);
		return $retval;
	}
	else if($reqid == '307')
	{
		$retval = GX_OBJ_DeleteObjectx($respdata);
		return $retval;
	}
	else if($reqid == '308')
	{
		$retval = GX_OBJ_CopyObject($respdata);
		return $retval;
	}
	else if($reqid == '309')
	{
		$retval = GX_OBJ_AddNewSVGAnimation($respdata);
		return $retval;
	}
	else if($reqid == '310')
	{
		$retval = GX_OBJ_UpdateSVGAnimation($respdata);
		return $retval;
	}
	
	
	
	/*
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
	*/ 
}
	
/*
 *  ObjParam = "OBJECTTYPE=" + TypeValue + "&OBJECTID=" + ObjID forms basic query param. any 
 *  request should have this as basic param. in addition to these one can have additional parameters
 *  as per required.  
 */
function GX_OBJ_AddNewSVGObject(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);
	
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$objectTypeVal = strtoupper($OBJECTTYPE);
	$objectIDVal   = strtoupper($OBJECTID);
	$parentIDVal   = strtoupper($REFID);
	if($OBJECTTYPE == 'POLYGON_PATH')
	{
		$nSides = $NUMSIDES;
		$length = $CIRCRADIUS;
	}
	
	
	//create the new Node here 
	//then add it to the SVG file at the appropriate parent 
	//$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "data-origin"=>$dataOrig , "data-srcid"=>"none");
	
	$SVGDom = $_SESSION['svg_xml_dom']; 
	$SVGFileName = $_SESSION['svg_xml_FileName']; 
	switch($objectTypeVal)
	{
		case 'RECTANGLE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT RECTANGLE ROTATE,0', 'x'=> '10','y'=>'10', 'width'=>'0', 'height'=>'0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'fill'=>'none', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none', 'stroke-linejoin'=>'miter','stroke-opacity'=>'1', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'rect',$objectIDVal, $parentIDVal, $attrdefinition,''); 
			break; 
		case 'ELLIPSE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT ELLIPSE ROTATE,0', 'cx'=> '0','cy'=>'0', 'rx'=>'0', 'ry'=>'0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'fill'=>'none', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'ellipse',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break;
		case 'LAYER':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'LAYER', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'g',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break;		
		case 'LINE_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT LINE_PATH ROTATE,0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>'M0,0 L5,5', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1', 'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break; 
		case  'CBEZIER_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT CUBIC_BEZIER ROTATE,0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>'M0,0 C10,10 20,10 20,0', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1', 'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break;
		case 'QBEZIER_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT QUADRATIC_BEZIER ROTATE,0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>'M0,0 Q5,5 10,10', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','stroke-opacity'=>'1',  'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break; 
		case 'ELLIPTIC_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT ELLIPTIC ROTATE,0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>'M-10,-10 A100,120 0 0 1 -5,-5', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1',  'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break;
		case 'POLYGON_PATH':
			$x = 150;
			$y = 150;			
			$dvalue = GX_OBJ_GetPolygonParams($x, $y, $nSides, $length); 
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT POLYGON ROTATE,0 CENTRE,'. $x . ','. $y .',' . $length, 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>$dvalue, 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','stroke-opacity'=>'1',  'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break; 
		case 'FREEDRAW_PATH':
			//$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT FREEDRAW_PATH', 'transform'=>'translate(0,0)', 'd'=>'', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'green', 'fill-opacity'=>'0.6', 'onmousemove'=>'OnEraseMove(evt)');
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT FREEDRAW_PATH ROTATE,0', 'transform'=>'translate(0,0) scale(1,1) rotate(0 0,0)', 'd'=>'', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'none', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','stroke-opacity'=>'1',  'fill-opacity'=>'1','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, $parentIDVal, $attrdefinition,'');
			break;
		case 'LINEAR_GRADIENT':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_GRAD_OBJECT LINEAR_GRAD Default:Linear', 'x1'=>'0%','y1'=>'0%', 'x2'=>'100%'
			, 'y2'=>'100%', 'spreadMethod'=>'pad');		
			$tagval = " "; 
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'linearGradient',$objectIDVal, $parentIDVal, $attrdefinition,$tagval);
			if(!$respData)
				return ; 
			//<stop id="MyGradient_stop0" offset="5%" stop-color="#F60000"/>
			for($i=0; $i < 4; $i++)
			{
				$stopid = $objectIDVal . '_stop' . $i; 
				if($i == 0) 
				{
					$offset = '0%'; 
					$stopcolor = 'red'; 
				}
				else if($i == 1) 
				{
					$offset = '100%'; 
					$stopcolor = 'green'; 
				}
				else if($i == 2)
				{
					$offset = '100%';
					$stopcolor = 'none';
				}
				else if($i == 3)
				{
					$offset = '100%';
					$stopcolor = 'none';
				}
				$attrdefinition = array('id'=>$stopid, 'class'=>'SVG_STOP_OBJECT', 'offset'=>$offset, 'stop-color'=>$stopcolor);
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'stop',$stopid, $objectIDVal, $attrdefinition,'');				
			}
			$objNode = $SVGDom->getElementById($objectIDVal);
			$respData = $SVGDom->saveXML($objNode);
			break;			
			case 'RADIAL_GRADIENT':
				$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_GRAD_OBJECT RADIAL_GRAD Default:Radial', 'cx'=>'50%','cy'=>'50%', 'r'=>'100%'
				, 'fx'=>'50%','fy'=>'50%', 'spreadMethod'=>'pad');				
				$tagval = " ";
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'radialGradient',$objectIDVal, $parentIDVal, $attrdefinition,$tagval);
				if(!$respData)
					return ;
				//<stop id="MyGradient_stop0" offset="5%" stop-color="#F60000"/>
				for($i=0; $i < 4; $i++)
				{
					$stopid = $objectIDVal . '_stop' . $i;
					if($i == 0)
						{
						$offset = '0%';
						$stopcolor = 'red';
				}
				else if($i == 1)
				{
					$offset = '100%';
					$stopcolor = 'green';
			}
					else if($i == 2)
					{
					$offset = '100%';
					$stopcolor = 'none';
					}
					else if($i == 3)
					{
					$offset = '100%';
					$stopcolor = 'none';
			}
			$attrdefinition = array('id'=>$stopid, 'class'=>'SVG_STOP_OBJECT', 'offset'=>$offset, 'stop-color'=>$stopcolor);
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'stop',$stopid, $objectIDVal, $attrdefinition,'');
			}
			$objNode = $SVGDom->getElementById($objectIDVal);
			$respData = $SVGDom->saveXML($objNode);
			break;		
		default:
			 break; 
	}
	/* a25,50 -30 0,1 50,-25   
	*/
	
	//then get the XML string and pass it back to the client 
	if(!$respData)
		return false; 
	else
		return true; 
}


function GX_OBJ_SetProperty(&$respdata)
{
	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;

	$retval = $_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if(!$retval)
	{
		$respdata = 'FAIL: LoadXML';
		return false;
	}
	if (!$_SESSION['svg_xml_dom']->validate())
	{
		$respdata = 'FAIL: validate';
		return false;
	}		
	
	parse_str($respdata) ;

	//GET THE LENGTH OF EDIT LIST
	$listlen = strtoupper($LENGTH);

	for($i = 0 ; $i < $listlen; $i++){
		$objID         = $OBJECTID[$i];
		$oprtnType     = $OPTYPE[$i];
		$attrname	   = $ATTRNAME[$i];
		$attrval       = $ATTRVALUE[$i];

		//now set attribute
		if($oprtnType == "ATTRIBUTE")
		{			
			$retval = GX_COMMON_setAttributeValue($_SESSION['svg_xml_dom'],$_SESSION['svg_xml_FileName'], $objID, $attrname, $attrval, true);
			if($retval ==  true)
				$respdata = "OK";
			else
			{
				//it is possible that one might get a false object id
				$respdata = "FAIL:setAttribute";
				//return true;
			}
		}
	}
	return true;
}

function GX_OBJ_MoveZIndex(&$respdata)
{
	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;

	$_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if (!$_SESSION['svg_xml_dom']->validate())
	{
		$respdata = 'FAIL'; 
		return false;
	}
		

	parse_str($respdata) ;
	$objId = $CURROBJECTID; 
	$beforId = $BEFOREID; 
	$beforeParentID = $BEFOREPARENTID; 
	
	$currNode = $_SESSION['svg_xml_dom']->getElementById($objId);
	if(!$currNode)
	{
		$respdata = 'FAIL';
		return false;
	}
		

	//GET THE BEFORE NODE WHERE CURRENT WILL BE INSERTED
	

	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $currNode->cloneNode(true);

	//INSETBEFORE PREVIOUS SIBLING NODE
	$srcparentNode = $currNode->parentNode; //$XMLDOM->documentElement;
	if(!$srcparentNode)
		return false; 
	//incase before Node is null which will be incase of last node 
	$beforeNode =  $_SESSION['svg_xml_dom']->getElementById($beforId);
	$destparentNode = 	$_SESSION['svg_xml_dom']->getElementById($beforeParentID);
	$retNode = $destparentNode->insertBefore($cloneCurrNode,$beforeNode);
	if(!$retNode)
	{
		$respdata = 'FAIL';
		return false;
	}
		
	//REMOVE CURRENT NODE
	$srcparentNode->removeChild($currNode);

	//SAVE THE CURRENT STATE
	$retval = $_SESSION['svg_xml_dom']->save($_SESSION['svg_xml_FileName']);
	$respdata = "OK"; 
	return $retval; 
}
function GX_OBJ_DeleteObjectx(&$respdata)
{
/*	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;

	$_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if (!$_SESSION['svg_xml_dom']->validate())
	{
		$respdata = 'FAIL';
		return false;
	}
	*/
	
	parse_str($respdata) ;
	$objId = $CURROBJECTID;
	$retval = GX_OBJ_DeleteSVGElement($objId);
	if($retval == true)
		$respdata = "OK";
	else
		$respdata = "FAIL";
	return true; 
}


function GX_OBJ_DeleteSVGElement($objID)
{
	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;
	
	$_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if (!$_SESSION['svg_xml_dom']->validate())
	{
		$respdata = 'FAIL';
		return false;
	}
	$ObjNode = $_SESSION['svg_xml_dom']->getElementById($objID);
	if(!$ObjNode)
		return false;
	$parentNode = $ObjNode->parentNode;
	$parentNode->removeChild($ObjNode);
	$retval = $_SESSION['svg_xml_dom']->save($_SESSION['svg_xml_FileName']);
	return true; 
}
function GX_OBJ_CopyObject(&$respData)
{
	
	if(!isset($_SESSION['svg_xml_dom']))
		return false;
	if(!isset($_SESSION['svg_xml_FileName']))
		return false;
	
	$_SESSION['svg_xml_dom']->load($_SESSION['svg_xml_FileName']);
	if (!$_SESSION['svg_xml_dom']->validate())
	{
		$respData = 'FAIL';
		return false;
	}
	parse_str($respData) ;
	$objIDToCopy  = $OBJECTID; 
	$newObjId	  = $NEWOBJDID; 
	$layerID 	  =	$LAYERID;

	$respData =''; 
	$ObjNode = $_SESSION['svg_xml_dom']->getElementById($objIDToCopy);
	if(!$ObjNode)
		return false;
	$clonednode = $ObjNode->cloneNode(true); 
	if(!$clonednode)
		return false;
	$clonednode->setAttribute('id',$newObjId ); 
	$layerNode = $_SESSION['svg_xml_dom']->getElementById($layerID);
	if(!$layerNode)
		return false; 
	
	$clonednode = $layerNode->appendChild($clonednode); 
	$respData = $_SESSION['svg_xml_dom']->saveXML($clonednode); 
	$_SESSION['svg_xml_dom']->save($_SESSION['svg_xml_FileName']);
	return true; 	
}

function GX_OBJ_GetPolygonParams($x, $y, $nSides, $length) {
	$gnInternalAngle = 2 * pi() / $nSides;
	$startAngle = pi() / $nSides;
	$radius = $length;
	$radius = round($radius / (2*sin($gnInternalAngle / 2)));	
	$currX = 0;
	$currY = 0; 
	$currAngle;
	$pathParam = '';
	$cx =$x;
	$cy = $y;
	//$newPoint = "M". $cx . ',' . $cy;
//	$pathParam = $pathParam . $newPoint . ' ';     
	for ($k = 0; $k < $nSides; $k++) {
		$currAngle = $startAngle + ($k * $gnInternalAngle);
		$currX = round($cx + $radius * cos($currAngle));
		$currY = round($cy - $radius * sin($currAngle));
		if($k == 0)
			$newPoint = "M" . $currX . ',' . $currY . ' ';
		else
			$newPoint = "L" . $currX . ',' . $currY . ' ';
		$pathParam = $pathParam . $newPoint;  		
	}	
	$pathParam = $pathParam . 'z'; 
	return $pathParam;

}

function GX_OBJ_AddNewSVGAnimation(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);	
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$animTypeVal = strtoupper($ANIMTYPE);
	$animIDVal   = strtoupper($ANIMID);
	$parentIDVal = strtoupper($OBJECTID);
	$attrlen     = strtoupper($ATTRLEN);	
	
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];	
	GX_OBJ_DeleteSVGElement($animIDVal);	
	switch($animTypeVal)
	{
	case 'ANIM_ATTRIBUTE':
			$attrdefinition = array("id"=>$animIDVal);
			for($i=1; $i < $attrlen; $i++){				
				$attrname	   = $ATTRNAME[$i];
				$attrval       = $ATTRVAL[$i];
				$attrdefinition[$attrname]= $attrval; 								
			}			
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animate',$animIDVal, $parentIDVal, $attrdefinition,'');
		break;
		
	case 'ANIM_TRANSFORM':
			$attrdefinition = array("id"=>$animIDVal);
			for($i=1; $i < $attrlen; $i++){
				$attrname	   = $ATTRNAME[$i];
				$attrval       = $ATTRVAL[$i];
				$attrdefinition[$attrname]= $attrval;
			}
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animateTransform',$animIDVal, $parentIDVal, $attrdefinition,'');
			break;
	case 'ANIM_MOTION':
		$attrdefinition = array("id"=>$animIDVal);
		for($i=1; $i < $attrlen; $i++){
			if($ATTRNAME[$i] == 'refpathid')
			{
				$mpathID = '#' . $ATTRVAL[$i];
				
			}
			else
			{
				$attrname	   = $ATTRNAME[$i];
				$attrval       = $ATTRVAL[$i];
				$attrdefinition[$attrname]= $attrval;
			}			
		}	
		$attrdefinition['xmlns:xlink']=  "http://www.w3.org/1999/xlink";		
		$childAttrdefn = array("xlink:href"=>$mpathID); 
		GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'animateMotion',$animIDVal, $parentIDVal, $attrdefinition,'mpath', $childAttrdefn,'');			
		break; 		
	default:
		break;
	}
	
	//now add the title of the animation 
	$descID = 'DESC_'.$animIDVal; 
	$attrdefinition = array('id'=>$descID, "class"=>$animTypeVal);
	$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'desc',$descID, $animIDVal, $attrdefinition,$ATTRVAL[0]);
	
	$retVal = $SVGDom->load($SVGFileName);
	if($retVal != true)
		return 0;
	if (!$SVGDom->validate()) {
		return false;
	}
	$animNode = $SVGDom->getElementById($animIDVal);
	if($animNode)
		$respData = $SVGDom->saveXML($animNode);
	
	//then get the XML string and pass it back to the client
	if(!$respData)
		return false;
	else
		return true;
}


function GX_OBJ_UpdateSVGAnimation(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$animIDVal   = strtoupper($ANIMID);	
	$attrlen     = strtoupper($ATTRLEN);

	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];	
	
	for($i=0; $i < $attrlen; $i++){
		$attrname	   = $ATTRNAME[$i];
		$attrval       = $ATTRVAL[$i];
		$attrdefinition[$attrname]= $attrval;
	}
	//then get the XML string and pass it back to the client
	$retval = GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFileName, $animIDVal, $attrdefinition);
	if($retval == true)
		$respData = 'OK';
	else
		$respData = 'FAILS'; 
	
	return true; 
}


?>