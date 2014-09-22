<?php

function HTML_AddNewObject($dataType, $ObjectID,$ObjecttagValue, $layerID, $parentID, &$HTMLCode)
{
	if(!isset($_SESSION['projHTMLFilename']))
		return false; 
	
	if(!isset($_SESSION['projHTMLDOM']))
		return false; 
	
	$divObjID = "DIV_".$ObjectID; 
	
	$defaultText = $ObjecttagValue; 
	$styleval = 'width:inherit; height:inherit; text-align: center;';
	$imgpath = $_SESSION['image_path'].'/icons/Version1/'; 
	switch ($dataType)
	{
		case "HTMLOBJECT":
			
			if($divObjID == 'DIV_NEXTSLIDEBTN')
				$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>"HTMLOBJECT", "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:353px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none");
			else if($divObjID == 'DIV_PREVSLIDEBTN' )
				$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>"HTMLOBJECT", "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:301px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none");
			else if ($divObjID == 'DIV_NEXTPAGEBTN')
				$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>"HTMLOBJECT", "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:404px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none");
			else if ($divObjID == 'DIV_PREVPAGEBTN')
				$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>"HTMLOBJECT", "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:249px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none");
			else
				$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>"HTMLOBJECT", "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 1px; left:4px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );

			$attrdefinition = array("id"=>$ObjectID, ' class'=>'HTMLOBJECT');
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. 'class="rootcontainer">' . defaultText . '</span>';
			//$htmltagval = htmlspecialchars ($htmltagval);			
			//$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],"p", "Default Text", $divObjID, $attrdefinition);
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],"p", $htmltagval, $divObjID, $attrdefinition, true);
			
			break; 
		case "PARAGRAPH": //needs to be removed as all codes to be generated at JS side
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 300px; height: 200px", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			//$defaultText = "Paragraph: Please Double Click here to Edit the Text"; 
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT');
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';			
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"p", $htmltagval, $divObjID, $attrdefinition, true);
			break; 
		case "HEADING1":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 180px; height: 60px", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			//$defaultText = "Heading-1: Double Click To Edit"; 
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'style'=>$styleval);
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';			
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"h1", $htmltagval, $divObjID, $attrdefinition, true);
			break; 
		case "HEADING2":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 150px; height: 50px", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			//$defaultText = "Heading-2: Double Click To Edit";
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'style'=>$styleval);
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
				"h2", $htmltagval, $divObjID, $attrdefinition, true);
				break;
		case "HEADING3":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 130px; height: 40px'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			//$defaultText = "Heading-3: Double Click To Edit";
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'style'=>$styleval);
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
				"h3", $htmltagval, $divObjID, $attrdefinition, true);
					break;
		case "NEXT SLIDE BUTTON":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:353px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'BUTTON');
			//$imgpath = $_SESSION['projectServerPath'].'style/icons/Version1/'. 'nextslide.png';
			$imgpath = $imgpath. 'nextslide.png';			
			$htmltagval = '<img id="imagenextslidebtn"  class="IMAGE_BUTTON  SIZE_48_X_48" src='.$imgpath. '  onclick="showNextSlideData(event)" title="Next Slide"/>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"div", $htmltagval, $divObjID, $attrdefinition, true);
			break; 	
		case "PREVIOUS SLIDE BUTTON":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:301px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'BUTTON');
			$imgpath = $imgpath. 'prevslide.png';
			$htmltagval = '<img id="imageprevslidebtn"  class="IMAGE_BUTTON  SIZE_48_X_48" src='.$imgpath. '  onclick="showPrevSlideData(event)" title="Previous Slide"/>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
						"div", $htmltagval, $divObjID, $attrdefinition, true);
			break;
				
		case "NEXT PAGE BUTTON":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:404px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'BUTTON');
			$imgpath = $imgpath. 'nextpage.png';
			$htmltagval = '<img id="imagenextpagebtn"  class="IMAGE_BUTTON  SIZE_48_X_48" src='.$imgpath. '  onclick="showNextPageData(event)" title="Next Page"/>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"div", $htmltagval, $divObjID, $attrdefinition, true);
			break; 	
		case "PREVIOUS PAGE BUTTON":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 417px; left:249px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'BUTTON');
			$imgpath = $imgpath. 'prevpage.png';
			$htmltagval = '<img id="imageprevpagebtn"  class="IMAGE_BUTTON  SIZE_48_X_48" src='.$imgpath. '  onclick="showPrevPageData(event)" title="Previous Page"/>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"div", $htmltagval, $divObjID, $attrdefinition, true);
				break;
		case "SLIDE TITLE":			
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 1px; left:1px; width: 95%; height: 10%", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			//$defaultText = "Slide Title";
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'style'=>$styleval);
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"h1", $htmltagval, $divObjID, $attrdefinition, true);			
			break; 
		case "SLIDE NUMBER":
		case "FOOTER":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 16px; height: 16px", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			//$defaultText = "Footer: Double Click to Edit";
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'style'=>$styleval);
			//$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer">' . $defaultText . '</span>';
			$htmltagval = '<span id ="SPAN_' . $ObjectID . '"'. ' class="rootcontainer" style="border: medium none; font-style: italic; font-size: small; color: rgb(48, 48, 48);">' . $defaultText . '</span>';
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"footer", $htmltagval, $divObjID, $attrdefinition, true);			
			break; 
		case "IMAGE":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 'auto'; height: 'auto'", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			
			
			//$imgpath = $_SESSION['projectServerPath'].'style/icons/Version1/'. 'DefaultImage.jpg';
			$imgpath = $imgpath. 'DefaultImage.jpg';
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'IMAGE', 'src'=>$imgpath);			
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"img", "", $divObjID, $attrdefinition, false);
			break; 			
		case "VIDEO":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 320px; height: 240px;", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );			
			
			
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT', 'type'=>'VIDEO',  'width'=>'320px', 'height'=>'240px', 'controls'=>'true', 'style'=>'background-color: rgb(0, 0, 0); border-color:grey; border-style: ridge; border-width: 3px; border-radius: 13px 13px 13px 13px',
					 "onloadedmetadata"=>"OnLoadMetadata()");
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"video", "", $divObjID, $attrdefinition, false);
			break;
		case "AUDIO":
			$attrdefinition = array("id"=>$divObjID, "class"=>"OBJECT_CONTAINER", "data-type"=>$dataType, "data-layerID"=>$layerID, "data-modify"=>"false","style"=>"position: absolute; top: 10px; left:14px; width: 32px; height: 32px; display:block; background-image:url('audiobkgrnd.png'); background-repeat:no-repeat", "data-setborder"=>"false", "data-border"=>"none" );
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],  "div", "", $parentID, $attrdefinition, false );
			$attrdefinition = array("id"=>$ObjectID, 'class'=>'HTMLOBJECT','type'=>'AUDIO', "onloadedmetadata"=>"OnLoadMetadata()");
			$retval  = CDOC_COMMON_AddHTMLElement($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'],
					"audio", "", $divObjID, $attrdefinition, false);
			break;
		default:
			break; 
	}
/*
 * else if(type == 'FOOTER') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Default Footer"; 
		HTMLstr = '<footer id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer style="border: medium none; font-style: italic; font-size: small; color: rgb(48, 48, 48);" >' +
		defaultText + '</span></footer>'; 
	}
	else if(type == 'SLIDE NUMBER') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Slide Number"; 
		HTMLstr = '<footer id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer style="border: medium none; font-style: italic; font-size: small; color: rgb(48, 48, 48);" >' +
		defaultText + '</span></footer>'; 
	}
	else if(type == 'SLIDE TITLE') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Slide Title"; 
		
		HTMLstr = '<h1 id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' +
		defaultText + '</span></h1>';	
	}
 */
	if($retval != true)
		return $retval; 
	
	//NOW GET THE HTML CODE  
	$node = $_SESSION['projHTMLDOM']->getElementById($divObjID); 
	$HTMLCode = $_SESSION['projHTMLDOM']->saveHTML($node); 
	return true; 
}

function HTML_MoveUpObject($elemID)
{
	if(!isset($_SESSION['projHTMLFilename']))
		return false;
	
	if(!isset($_SESSION['projHTMLDOM']))
		return false;
	
	$DIVObjID = "DIV_".$elemID; 
	$retval  = CDOC_COMMON_MoveHTMLElementUp($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $DIVObjID); 
	if($retval ==  true)
		$retval = "OK";
	else
		$retval = "FAIL"; 
	return $retval; 
}
function HTML_MoveDownObject($elemID)
{
	if(!isset($_SESSION['projHTMLFilename']))
		return false;

	if(!isset($_SESSION['projHTMLDOM']))
		return false;

	$DIVObjID = "DIV_".$elemID;
	$retval  = CDOC_COMMON_MoveHTMLElementDown($_SESSION['projHTMLDOM'], $_SESSION['projHTMLFilename'], $DIVObjID);
	if($retval ==  true)
		$retval = "OK";
	else
		$retval = "FAIL";
	return $retval;
}
?>