<?php
include_once "GX_CommonAPI.php";
include_once "Debuglog.php";
Include_once "GX_AssetManager.php"; 
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
	else if($reqid == '311')
	{
		$retval = GX_TEXT_OBJ_UpdateData($respdata);
		return $retval;
	}
	else if($reqid == '312')
	{
		$retval = GX_OBJ_MoveToGroup($respdata);
		return $retval;
	}
	else if($reqid == '313')
	{
		$retval = GX_UpdateGroupName($respdata);
		return $retval;
	}
	else if($reqid == '314')
	{
		$retval = GX_OBJ_RemoveSVGAttribute($respdata);
		return $retval;
	}	
	else if($reqid == '315')
	{
		$retval = GX_OBJ_AddMultipleSVGAnimation($respdata);
		return $retval;		
	}
	else if($reqid == '316')
	{
		$retval = GX_OBJ_UpdateMultipleSVGAnimation($respdata);
		return $retval;
	}
	else if($reqid == '317')
	{
		$retval = GX_ImportObject($respdata);
		return $retval;
	}
	else if($reqid == '318')
	{
		$retval = GX_Export($respdata);
		return $retval;
	}
	else if($reqid == '319'){
		$retval = GX_GetSVGImportList($respdata);
		return $retval;	
	}
	
	
	
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
	
	if($parentIDVal == 'MARKER_GROUP'){
		GX_OBJ_DeleteSVGElement($objectIDVal);
	}
	
	if($OBJECTTYPE == 'POLYGON')
	{
		$nSides = $NUMSIDES;
		$length = $CIRCRADIUS;
	}
	if($OBJECTTYPE == 'GROUP')
	{
		$groupName = $NAME; 
	}
	if($OBJECTTYPE == 'IMAGE'){
		$imageURL = $URL; 
	}
	
	if($OBJECTTYPE == 'ANIM_GROUP'){
		$groupName = $NAME;
		/*$animTypeVal = strtoupper($ANIMTYPE);
		$animTitle   = $ANIMTITLE; 
		$classValue = 'ANIM_GROUP ' . $animTypeVal. ' '. $animTitle;
		*/
		 
	}
	
	//create the new Node here 
	//then add it to the SVG file at the appropriate parent 
	//$attrdefinition = array("id"=>$elemID, "type"=>$type,"class"=>$class,"level"=>$level, "data-origin"=>$dataOrig , "data-srcid"=>"none");
	
	$SVGDom = $_SESSION['svg_xml_dom']; 
	$SVGFileName = $_SESSION['svg_xml_FileName']; 
	switch($objectTypeVal)
	{
		case 'RECTANGLE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT RECTANGLE ROTATE,0', 'x'=> '10','y'=>'10', 'width'=>'0', 'height'=>'0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'fill'=>'none', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none', 'stroke-linejoin'=>'miter','stroke-opacity'=>'1', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'rect',$objectIDVal,0, $parentIDVal, $attrdefinition,''); 
			break; 
		case 'IMAGE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT IMAGE ROTATE,0', 'x'=> '20','y'=>'20', 'width'=>'100', 'height'=>'100', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'xlink:href'=>$imageURL, 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none', 'stroke-linejoin'=>'miter','stroke-opacity'=>'1', 'opacity'=>'1.0', 'fill'=>'none');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'image',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'ELLIPSE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT ELLIPSE ROTATE,0', 'cx'=> '0','cy'=>'0', 'rx'=>'0', 'ry'=>'0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'fill'=>'none', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'ellipse',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'CIRCLE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT CIRCLE ROTATE,0', 'cx'=> '0','cy'=>'0','r'=>'0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'fill'=>'none', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'stroke-opacity'=>'1', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'circle',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'IMAGE':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'SVG_SHAPE_OBJECT IMAGE ROTATE,0', 'x'=> '20','y'=>'20', 'width'=>'100', 'height'=>'100', 'xlink:href'=>'', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'image',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'GROUP':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'GROUP '. $groupName, 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'opacity'=>'1.0');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'g',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;	
		case 'ANIM_GROUP':
			$attrdefinition = array("id"=>$objectIDVal, "class"=>'ANIM_GROUP '. $groupName);
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'g',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;				
		case 'LINE_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT ' . $objectTypeVal . ' ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M0,0 L5,5', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'opacity'=>'1.0', 'fill'=>'none','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'HOR_LINE_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT ' . $objectTypeVal . ' ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M0,0 H5', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'opacity'=>'1', 'fill'=>'none','visibility'=>'visible', 
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'VERT_LINE_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT ' . $objectTypeVal . ' ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M0,0 V5', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'opacity'=>'1', 'fill'=>'none','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break; 
		case  'CBEZIER_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT CUBIC_BEZIER ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M0,0 C10,10 20,10 20,0', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'opacity'=>'1', 'fill'=>'none','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'QBEZIER_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT QUADRATIC_BEZIER ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M0,0 Q5,5 10,10', 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','opacity'=>'1',  'fill'=>'none','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, 0, $parentIDVal, $attrdefinition,'');
			break; 
		case 'ELLIPTIC_PATH':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT ELLIPTIC ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'M-10,-10 A100,120 0 0 1 -5,-5', 'stroke'=>'black', 'stroke-width'=>'3','stroke-dasharray'=>'none','stroke-linejoin'=>'miter', 'opacity'=>'1',  'fill'=>'none','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break;
		case 'TEXT';
		//<text id='text1' font-family="Verdana" font-size="45" fill="blue" x='40' y='100' >
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_TEXT_OBJECT TEXT ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'font-family'=>"Verdana", 'font-size'=>"20", 'fill'=>'none', 'font-weight'=>'normal',
				'font-style'=>'normal', 'font-variant'=>'normal', 'text-decoration'=>'normal', 'x'=>'5', 'y'=>'25', 'stroke'=>'black', 'stroke-width'=>'1', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','opacity'=>'1',  'fill'=>'none','visibility'=>'visible');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'text',$objectIDVal, 0, $parentIDVal, $attrdefinition,'Enter Your Text Here      ');
			break; 
		case 'POLYGON':
			$x = 150;
			$y = 150;			
			$dvalue = GX_OBJ_GetPolygonParams($x, $y, $nSides, $length); 
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT POLYGON ROTATE,0 CENTRE,'. $x . ','. $y .',' . $length, 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>$dvalue, 'stroke'=>'black', 'stroke-width'=>'3', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','opacity'=>'1',  'fill'=>'none','visibility'=>'visible',
					'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal,0, $parentIDVal, $attrdefinition,'');
			break; 
		case 'FREEDRAW_PATH':
			//$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT FREEDRAW_PATH', 'transform'=>'translate(0,0)', 'd'=>'', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'green', 'fill-opacity'=>'0.6', 'onmousemove'=>'OnEraseMove(evt)');
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_PATH_OBJECT FREEDRAW_PATH ROTATE,0', 'transform'=>'translate(0 0) scale(1 1) rotate(0 0 0)', 'd'=>'', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'none', 'stroke-dasharray'=>'none','stroke-linejoin'=>'miter','opacity'=>'1','visibility'=>'visible',
			'marker-start'=>'', 'marker-mid'=>'', 'marker-end'=>'');
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'path',$objectIDVal, 0, $parentIDVal, $attrdefinition,'');
			break;
		case 'LINEAR_GRADIENT':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_GRAD_OBJECT LINEAR_GRADIENT Default:Linear', 'x1'=>'0%','y1'=>'0%', 'x2'=>'100%'
			, 'y2'=>'100%', 'spreadMethod'=>'pad');		
			$tagval = " "; 
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'linearGradient',$objectIDVal,0, $parentIDVal, $attrdefinition,$tagval);
			if(!$respData)
				return ; 
			//<stop id="MyGradient_stop0" offset="5%" stop-color="#F60000"/>
			//now adding grad animation as topmost node 
			$topnodeid = $objectIDVal . '_TOP_GRAD_ANIM'; 			
			$attrdefinition = array('id'=>$topnodeid, 'dur'=>'0.2s', 'calcMode'=>"linear", 'restart'=>'never','repeatCount'=>"0", 'fill'=>"freeze", 'begin'=>"0s", 'attributeType'=>"XML", 
				'attributeName'=>"x1", 'from'=>"0%", 'to'=>"1%");
			//_removing animation effect from here instead it should be put under animation section
			//$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animate',$topnodeid, 0, $objectIDVal, $attrdefinition,'');
			
			for($i=0; $i < 4; $i++)
			{
				$stopid = $objectIDVal . '_STOP' . $i; 
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
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'stop',$stopid, 0, $objectIDVal, $attrdefinition,'');				
			}
			$objNode = $SVGDom->getElementById($objectIDVal);
			$respData = $SVGDom->saveXML($objNode);
			break;			
			case 'RADIAL_GRADIENT':
				$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_GRAD_OBJECT RADIAL_GRADIENT Default:Radial', 'cx'=>'50%','cy'=>'50%', 'r'=>'100%'
				, 'fx'=>'50%','fy'=>'50%', 'spreadMethod'=>'pad');				
				$tagval = " ";
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'radialGradient',$objectIDVal,0, $parentIDVal, $attrdefinition,$tagval);
				if(!$respData)
					return ;
				/*
				 * //_removing animation effect from here instead it should be put under animation section
				$topnodeid = $objectIDVal . '_TOP_GRAD_ANIM';
				$attrdefinition = array('id'=>$topnodeid, 'dur'=>'0.2s', 'calcMode'=>"linear", 'restart'=>'never','repeatCount'=>"0", 'fill'=>"freeze", 'begin'=>"0s", 'attributeType'=>"XML",
						'attributeName'=>"cx", 'from'=>"0%", 'to'=>"1%");
				
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animate',$topnodeid, 0, $objectIDVal, $attrdefinition,'');
				*/
				
				for($i=0; $i < 4; $i++)
				{
					$stopid = $objectIDVal . '_STOP' . $i;
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
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'stop',$stopid, 0, $objectIDVal,$attrdefinition,'');
			}
			$objNode = $SVGDom->getElementById($objectIDVal);
			$respData = $SVGDom->saveXML($objNode);
			break;
		case 'MARKER_TRIANGLE': 
			//first add the marker node			
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_TRIANGLE', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
			'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
			$childAttrDefn = array('d' => 'M 0 0 L 100 50 L 0 100 z'); 	
			//$childAttrDefn = array('d' => 'm10,80 l40,-60 l30,60z');			
			$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
					'path', $childAttrDefn, '');			
			break; 
		case 'MARKER_CIRCLE':
				//first add the marker node			
				$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_CIRCLE', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
				'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
				$childAttrDefn = array('cx' =>'50', 'cy' =>'50', 'r' =>'25' );
				$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
						'circle', $childAttrDefn, '');
				break;	
		case 'MARKER_SQUARE':
					//first add the marker node		
				$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_SQUARE', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
				'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
				$childAttrDefn = array('d' =>'m20,20 l0,60 l60,0 l0,-60 l-60,0z');					
				$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
				'path', $childAttrDefn, '');
			break;
		case 'MARKER_STAR':			
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_SQUARE', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
					'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
			$childAttrDefn = array('d' =>'m10,30 l80,0 l-70,60 l30,-80 l30,80 z');
			$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
					'path', $childAttrDefn, '');
			break; 
		case 'MARKER_CURVEDTRIANGLE':			
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_SQUARE', 'stroke'=>'black', 'stroke-width'=>'2', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
			'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
			$childAttrDefn = array('d' =>'m100,50l-100,40l30,-40l-30,-40z');
			$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
					'path', $childAttrDefn, '');
			break;
		case 'MARKER_CROSS':
			$attrdefinition = array('id'=>$objectIDVal, 'class'=>'SVG_MARKER_OBJECT MARKER_SQUARE', 'stroke'=>'black', 'stroke-width'=>'6', 'fill'=>'black', 'stroke-dasharray'=>'none','fill-opacity'=>'1',
			'viewBox'=>"0 0 100 100", 'refX'=>"50", 'refY'=>"50", 'markerUnits'=>"strokeWidth",'markerWidth'=>"5", 'markerHeight'=>"5", 'orient'=>"auto" );
			$childAttrDefn = array('d' =>'m20,80 l60,-60 m0,60 l-60,-60');
			$respData = GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFileName, 'marker', $objectIDVal, $parentIDVal, $attrdefinition,
					'path', $childAttrDefn, '');
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
		
	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $currNode->cloneNode(true);

	//INSETBEFORE PREVIOUS SIBLING NODE
	$srcparentNode = $currNode->parentNode; //$XMLDOM->documentElement;
	if(!$srcparentNode)
		return false; 
	//incase before Node is null which will be incase of last node 
	$beforeNode =  $_SESSION['svg_xml_dom']->getElementById($beforId);
	$destparentNode = 	$_SESSION['svg_xml_dom']->getElementById($beforeParentID);
	if($beforeNode)
		$retNode = $destparentNode->insertBefore($cloneCurrNode,$beforeNode);
	else
		$retNode = $destparentNode->appendChild($cloneCurrNode);
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

function GX_OBJ_MoveToGroup(&$respdata)
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
	$groupId = $GROUPID;	
	$arrLen= $ARRAY_LENGTH;

	for($k=0; $k < $arrLen; $k++){		
		
		//$objID = $OBJECTID[$k];		
		$currNode = $_SESSION['svg_xml_dom']->getElementById($OBJECTID[$k]);
		if(!$currNode)
		{
			$respdata = 'FAIL';
			return false;
		}

		//NOW CLONE THE CURRENT NODE
		$cloneCurrNode = $currNode->cloneNode(true);
	
		//INSETBEFORE PREVIOUS SIBLING NODE
		$srcparentNode = $currNode->parentNode; //$XMLDOM->documentElement;
		if(!$srcparentNode)
			return false;
		//incase before Node is null which will be incase of last node
	
		$destparentNode = 	$_SESSION['svg_xml_dom']->getElementById($groupId);
		$retNode = $destparentNode->appendChild($cloneCurrNode);
		if(!$retNode)
		{
			$respdata = 'FAIL';
			return false;	
		}
		//REMOVE CURRENT NODE
		$srcparentNode->removeChild($currNode);
	}
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
	$layerID 	  =	$GROUPID;	
	
	$listlen = strtoupper($LENGTH);	
	/*for($i = 0 ; $i < $listlen; $i++){		
		$attrname	   = $ATTRNAME[$i];
		$attrval       = $ATTRVALUE[$i];
	}*/ 
	
	$left = 
	$respData =''; 
	$ObjNode = $_SESSION['svg_xml_dom']->getElementById($objIDToCopy);
	if(!$ObjNode)
		return false;
	$clonednode = $ObjNode->cloneNode(true); 
	if(!$clonednode)
		return false;
	$clonednode->setAttribute('id',$newObjId );
	for($i = 0 ; $i < $listlen; $i++){
		$clonednode->setAttribute($ATTRNAME[$i],$ATTRVALUE[$i]);
	} 	
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
	$parentIDVal = strtoupper($PARENTID);
	$attrlen     = strtoupper($ATTRLEN);	
	$beginVal = 0; 
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];	
	GX_OBJ_DeleteSVGElement($animIDVal);	
	$siblingID=0; 
	switch($animTypeVal)
	{
	case 'ANIM_ATTRIBUTE':
			$attrdefinition = array("id"=>$animIDVal);
			for($i=1; $i < $attrlen; $i++){				
				$attrname	   = $ATTRNAME[$i];
				$attrval       = $ATTRVAL[$i];
				if($attrname == 'siblingID')
				{
					$siblingID = $attrval; 
				}
				else
				{
					$attrdefinition[$attrname]= $attrval;
				}
				if($attrname == 'begin'){
					$beginVal = $attrval; 
				}
			}			
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animate',$animIDVal, $siblingID, $parentIDVal, $attrdefinition,'');
		break;
		
	case 'ANIM_TRANSFORM':
			$attrdefinition = array("id"=>$animIDVal);
			for($i=1; $i < $attrlen; $i++){
				$attrname	   = $ATTRNAME[$i];
				$attrval       = $ATTRVAL[$i];
				$attrdefinition[$attrname]= $attrval;
				if($attrname == 'begin'){
					$beginVal = $attrval;
				}
			}
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animateTransform',$animIDVal,0, $parentIDVal, $attrdefinition,'');
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
			if($attrname == 'begin'){
				$beginVal = $attrval;
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
	$attrdefinition = array('id'=>$descID, "class"=>$beginVal);
	if($ATTRVAL[0] != 'none')
		$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'desc',$descID, 0, $animIDVal, $attrdefinition,$ATTRVAL[0]);
	
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
	$beginVal = 0; 
	for($i=0; $i < $attrlen; $i++){
		$attrname	   = $ATTRNAME[$i];
		$attrval       = $ATTRVAL[$i];
		$attrdefinition[$attrname]= $attrval;
		if($attrname == 'begin')
			$beginVal = $attrval; 
	}
	//then get the XML string and pass it back to the client
	$retval = GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFileName, $animIDVal, $attrdefinition);
	if($beginVal){
		$descAtrDef['class'] = $beginVal; 
		GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFileName, 'DESC_' . $animIDVal, $descAtrDef);		
	}
	if($retval == true)
		$respData = 'OK';
	else
		$respData = 'FAILS'; 	
	return true; 
}
//
function GX_OBJ_RemoveSVGAttribute(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$elemIDVal   = strtoupper($ELEMENTID);	
	$attrName     = $ATTRNAME;

	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];		
	//then get the XML string and pass it back to the client
	$retval = GX_COMMON_RemoveSVGAttributes($SVGDom, $SVGFileName, $elemIDVal, $attrName);
	if($retval == true)
		$respData = 'OK';
	else
		$respData = 'FAILS'; 	
	return true; 
}


function GX_TEXT_OBJ_UpdateData(&$respdata)
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
	$objID       = $OBJECTID;
	$dataValue   = $DATA;
	$Node = $_SESSION['svg_xml_dom']->getElementById($objID);
	if(!$Node)
		return False;
	$name = strtoupper($Node->nodeName); 
	if($name =='TEXT')
	{
		$Node->firstChild->data = $dataValue; 
	}
	$retval = $_SESSION['svg_xml_dom']->save($_SESSION['svg_xml_FileName']);
	$respdata = 'OK';
	return true; 
}


function GX_UpdateGroupName(&$respData){
	parse_str($respData);	
	$groupID   = strtoupper($GROUPID);
	$name     = $NAME;
	
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];	
	
	$attrname	   = 'class';
	$attrval       = 'GROUP '.$name;
	$attrdefinition[$attrname]= $attrval;
	
	$retval = GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFileName, $groupID, $attrdefinition);
	if($retval == true)
		$respData = 'OK';
	else
		$respData = 'FAILS';
	
}


/*
 * var reqBody = '&ANIMTYPE=' + animType + '&PARENTID=' + parentID  + '&COMMONATTRLEN=' + commonAttrList.length; 
	for(var j=0; j < commonAttrList.length; j++){
		attrstr = "&ATTRNAME[]=" +  commonAttrList[j][0] + "&ATTRVAL[]="+ commonAttrList[j][1];
		reqBody += attrstr; 
	}
	//now add the Object specific Atributes
	reqBody += '&OBJATTRLEN=' +  animIDList.length; 
	for(var i=0; i < animIDList.length; i++ ){
		attrstr = '&ANIMID[]=' + animIDList[i] + '&NAMEVALUEPAIR[]=' + objAttrList[i]; 
		reqBody += attrstr; 
	}
	sample namevalue pair
	attr1=9892;attr2=776;attr4=1123;attr5=113456
 */
function GX_OBJ_AddMultipleSVGAnimation(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);
	$beginVal = 0; 
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$animTypeVal = strtoupper($ANIMTYPE);
	$parentIDVal   = strtoupper($PARENTID);
	$commonattrlen     = $COMMONATTRLEN;
	$objectLength = $OBJATTRLEN; 
	$commonAttrDefn = array(); 
	for($j=0; $j < $commonattrlen; $j++){
		$attrname	   = $ATTRNAME[$j];
		$attrval       = $ATTRVAL[$j];
		$commonAttrDefn[$attrname] = $attrval; 
		
	}
	$objInfoArray = array(); 
	for($i=0;  $i < $objectLength; $i++){
		$animID = $ANIMID[$i];
		$objInfoArray[$animID] = $NAMEVALUEPAIR[$i]; 
	}
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];	
	$numOfObj =  count($objInfoArray); 
	$firstElem = false; 
	if(($animTypeVal = 'ANIMATE_PATH') || ($animTypeVal = 'ANIMATE_ZOOM') ){
		foreach ($objInfoArray as $animID => $namevalue){
			$myanimID = $animID;
			$namevalue = $objInfoArray[$animID];
			$objspecAttrArray = explode('#', $namevalue);
			$attrdefinition = array('id'=>$myanimID);
			$len = count($objspecAttrArray); 
			for($k=0; $k <$len; $k++){
				$temapArr = explode('=' , $objspecAttrArray[$k]);
				$attrdefinition[$temapArr[0]] = $temapArr[1];
				if((!$beginVal) && ($temapArr[0] == 'begin')){
					$beginVal = $temapArr[1];
				}
			}
			foreach ($commonAttrDefn as $attrname => $attrval){
				$attrdefinition[$attrname] = $attrval;
			}
			$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'animate',$myanimID, 0, $parentIDVal, $attrdefinition,'');
			$descID = 'DESC_'.$myanimID;
			$descattrdefinition = array('id'=>$descID, "class"=>$beginVal);
			if($firstElem == false){
				$respData = GX_COMMON_AddSVGElement($SVGDom, $SVGFileName, 'desc',$descID, 0, $myanimID, $descattrdefinition,$animTypeVal);
				$firstElem = true; 
			}				
		
		}//foreach ($objInfoArray as $animID => $namevalue)
	}
	
	$respData = 'OK'; 
	return true; 
}


function GX_OBJ_UpdateMultipleSVGAnimation(&$respData)
{
	//$elemID, $type, $class, $parentID
	parse_str($respData);
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	
	$objectLength = $OBJATTRLEN;
	$objInfoArray = array();
	for($i=0;  $i < $objectLength; $i++){
		$animID = $ANIMID[$i];
		$objInfoArray[$animID] = $NAMEVALUEPAIR[$i];
	}
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];
	$numOfObj =  count($objInfoArray);// ->length;
	foreach ($objInfoArray as $animID => $namevalue){
		$attrdefinition = 0; 
		$myanimID = $animID;
		$namevalue = $objInfoArray[$animID];
		$objspecAttrArray = explode('#', $namevalue);
		$attrdefinition = array('id'=>$myanimID);
		$len = count($objspecAttrArray);
		for($k=0; $k <$len; $k++){
			$temapArr = explode('=' , $objspecAttrArray[$k]);
			$attrdefinition[$temapArr[0]] = $temapArr[1];
		}		
		$retval = GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFileName, $myanimID, $attrdefinition);
	
	}//foreach ($

	
	$respData = 'OK';
	return true;
}

function GX_GetSVGImportList(&$respData){
	$respData = GX_ImportMetaData(); 
}
function GX_ImportObject(&$respData){
	//create the source XML dom by reading from the source XML file. 
	parse_str($respData);
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$srcFileName = $SRCFILENAME;
	$srcobjectID   = $SRCOBJID;
	$newObjID = strtoupper($OBJECTID);	
	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];
	//get the target node. 
	//now import into the current DOM and then save
	//needs to be chnaged later on to give the shared folder path 
	$srcFileName = $_SESSION['shareddir'].$_SESSION['pathSeparator'].$srcFileName; 
	$respData = GX_COMMON_ImportSVGElement($SVGDom, $SVGFileName, $srcFileName, $srcobjectID, $newObjID); 
}

function GX_Export(&$respData){
	parse_str($respData);
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$tgtObjectName = $TARGETOBJECTNAME;
	$tgtobjectID   = strtoupper($TARGETOBJID);
	$origFilename = $tgtFileName = $tgtObjectName . '.svg';
	$title = $TITLE;
	$category = $CATEGORY; 
	//$newObjID = strtoupper($OBJECTID);

	$SVGDom = $_SESSION['svg_xml_dom'];
	$SVGFileName = $_SESSION['svg_xml_FileName'];
	//get the target node.
	//now import into the current DOM and then save
	//needs to be chnaged later on to give the shared folder path
	$tgtFileName = $_SESSION['shareddir'].$tgtFileName;
	$retVal = GX_COMMON_ExportSVGElement($SVGDom, $SVGFileName, $tgtFileName, $tgtobjectID, $title, $tgtObjectName );
	if($retVal == true)
		$respData = 'OK';
	else
		$respData = 'FAIL';
	$retval = GX_ExportMetaData($origFilename, $title, $category);
}

?>