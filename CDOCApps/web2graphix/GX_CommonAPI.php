<?php
include_once "Debuglog.php";
//function GX_COMMON_AddSVGElement($tagname, $elemID, $parentID, $attrdefinition)
function GX_COMMON_AddSVGElement($SVGDom, $SVGFilename, $tagname, $elemID, $beforeID, $parentID,$attrdefinition, $tagvalue)
{
	//libxml_use_internal_errors(true);
	//libxml_clear_errors();
	
	$retVal = $SVGDom->load($SVGFilename);
	if($retVal != true)
		return 0; 
	if (!$SVGDom->validate()) {
		return false;
	}
	
	libxml_clear_errors();	
	$element = 0;

	//$element = $SVGDOM->createElementNS('http://www.w3.org/2000/svg', $tagname);
	if($tagvalue)
	{
		$mytagval = $tagvalue; //htmlspecialchars($tagvalue); 
		$element = $SVGDom->createElement($tagname,$mytagval);
	}
			
	else
		$element = $SVGDom->createElement($tagname);
	if(!$element)
		return 0;

	//NOW CREATE THE ATTRIBUTE NODES HERE
	foreach ($attrdefinition as $attrname => $attrvalue)
	{
		//$retval = GX_COMMON_createAttributeInElement($SVGDom, $element,$attrname, $attrvalue);
		$attr = $element->setAttribute($attrname,$attrvalue);
		if($attr == false) 
			return false; 
	}

	$parentNode = $SVGDom->getElementById($parentID);
	if(!$parentNode)
		return 0;
	$beforenode = $SVGDom->getElementById($beforeID);
	if($beforeID)
	{
		$beforenode = $SVGDom->getElementById($beforeID);
		if(!$beforenode)
			return 0;
		$retval = $parentNode->insertBefore($element, $beforenode);		
	}
	else
	{
		$retval = $parentNode->appendChild($element);
	}
 
	
	$SVGDom->save($_SESSION['svg_xml_FileName']);
	$objNode = $SVGDom->getElementById($elemID);
	//$objNode = $SVGDom->getElementById($parentID);	
	$retval = $SVGDom->saveXML($objNode);
	return $retval;

}

function GX_COMMON_AddSVGElementWithChild($SVGDom, $SVGFilename, $tagname, $elemID, $parentID, $attrdefinition,
		$childtagname, $childattrdefinition, $childtagvalue)
{
	//libxml_use_internal_errors(true);
	//libxml_clear_errors();

	$retVal = $SVGDom->load($SVGFilename);
	if($retVal != true)
		return 0;
	if (!$SVGDom->validate()) {
		return false;
	}

	libxml_clear_errors();
	$element = 0;
	
	//NO tag is expected here as the child element will be part of it
	$element = $SVGDom->createElement($tagname);
	if(!$element)
		return 0;

	//NOW CREATE THE ATTRIBUTE NODES HERE
	foreach ($attrdefinition as $attrname => $attrvalue)
	{
		//$retval = GX_COMMON_createAttributeInElement($SVGDom, $element,$attrname, $attrvalue);
		$attr = $element->setAttribute($attrname,$attrvalue);
		if($attr == false)
			return false;
	}
	
	//add the child element here 
	if($childtagvalue)
	{
		$mytagval = htmlspecialchars($childtagvalue);
		$childelement = $SVGDom->createElement($childtagname,$mytagval);
	}

	else
		$childelement = $SVGDom->createElement($childtagname);
	
	foreach ($childattrdefinition as $attrname => $attrvalue)
	{
		
		$attr = $childelement->setAttribute($attrname,$attrvalue);
		if($attr == false)
			return false;
	}
	
	
	$parentNode = $SVGDom->getElementById($parentID);
	if(!$parentNode)
		return 0;
	$element = $parentNode->appendChild($element);
	
	if($element == NULL)
		return "error"; 
	
	$element = $element->appendChild($childelement);
	if($element == NULL)
		return "error";
	//NOW ADD THE CHILD NODE HERE 
	
	$SVGDom->save($_SESSION['svg_xml_FileName']);
	$objNode = $SVGDom->getElementById($elemID);
	//$objNode = $SVGDom->getElementById($parentID);
	$retval = $SVGDom->saveXML($objNode);
	return $retval;

}


function GX_COMMON_UpdateSVGAttributes($SVGDom, $SVGFilename, $elemID, $attrArr)
{
	//libxml_use_internal_errors(true);
	//libxml_clear_errors();

	$retVal = $SVGDom->load($SVGFilename);
	if($retVal != true)
		return 0;
	if (!$SVGDom->validate()) {
		return false;
	}

	libxml_clear_errors();
	$element = 0;
	$element = $SVGDom->getElementById($elemID); 
	if(!$element)
		return 0;

	//NOW CREATE THE ATTRIBUTE NODES HERE
	foreach ($attrArr as $attrname => $attrvalue)
	{		
		$attr = $element->setAttribute($attrname,$attrvalue);
		if($attr == false)
			return false;
	}
	$retval = $SVGDom->save($SVGFilename);	
	return $retval;

}


function GX_COMMON_MoveXMLElementUp($XMLDOM, $XMLFile, $elemID)
{
	//GET THE CURRENT NODE CORR TO PAGEID
	$retval = $XMLDOM->load($XMLFile);
	if($retval == false)
		return false;
	if (!$XMLDOM->validate()) 
		return false;

	$currNode = $XMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;

	//GET THE PREVIOUS SIBLING
	$prevSibling =  $currNode->previousSibling;
	if(!$prevSibling )
		return false;

	

	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $currNode->cloneNode(true);

	//INSETBEFORE PREVIOUS SIBLING NODE
	$root = $currNode->parentNode; //$XMLDOM->documentElement;
	$retNode = $root->insertBefore($cloneCurrNode,$prevSibling);
	if(!$retNode)
		return false;
	//REMOVE CURRENT NODE
	$root->removeChild($currNode);

	//SAVE THE CURRENT STATE
	$XMLDOM->save($XMLFile);

	return true;

}
function GX_COMMON_MoveXMLElementDown($XMLDOM, $XMLFile, $elemID)
{
	//GET THE CURRENT NODE CORR TO PAGEID
		
	$retval = $XMLDOM->load($XMLFile);
	if($retval == false)
		return false;
	if (!$XMLDOM->validate()) 
		return false;
		
	$currNode = $XMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;
	

	//GET THE NEXT SIBLING
	$nextSibling =  $currNode->nextSibling;
	if(!$nextSibling)
		return false;

	
	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $nextSibling->cloneNode(true);

	//INSETBEFORE PREVIOUS SIBLING NODE
	$root = $currNode->parentNode;
	$retNode = $root->insertBefore($cloneCurrNode,$currNode);
	if(!$retNode)
		return false;
	//REMOVE CURRENT NODE
	$root->removeChild($nextSibling);
	//SAVE THE CURRENT STATE
	$XMLDOM->save($XMLFile);
	return true;
}
/*
 * Should we also do a validation check against some crtieria to make the deletion robust _rm 
 * The validationcould be against some user defined attributes-value pairs 
 */

function GX_COMMON_MoveHTMLElementUp($HTMLDOM, $HTMLFile, $elemID)
{
	//GET THE CURRENT NODE CORR TO PAGEID
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors(); 
	if($retval == false)
		return false;
	
	$currNode = $HTMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;
	
	//GET THE PREVIOUS SIBLING
	$prevSibling =  $currNode->previousSibling;
	if(!$prevSibling )
		return false;	
	
	
	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $currNode->cloneNode(true);
	
	//INSETBEFORE PREVIOUS SIBLING NODE
	$root = $currNode->parentNode; //$XMLDOM->documentElement;
	$retNode = $root->insertBefore($cloneCurrNode,$prevSibling);
	if(!$retNode)
		return false;
	//REMOVE CURRENT NODE
	$root->removeChild($currNode);	
	//SAVE THE CURRENT STATE
	$HTMLDOM->saveHTMLFile($HTMLFile);
	
	return true;
	
	
}
function GX_COMMON_MoveHTMLElementDown($HTMLDOM, $HTMLFile, $elemID)
{
	//GET THE CURRENT NODE CORR TO PAGEID
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval == False)
		return False;

	$currNode = $HTMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;

	//GET THE PREVIOUS SIBLING
	$nextSibling =  $currNode->nextSibling;
	if(!$nextSibling )
		return False;


	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $nextSibling->cloneNode(true);

	//INSETBEFORE PREVIOUS SIBLING NODE
	$root = $currNode->parentNode; //$XMLDOM->documentElement;
	$retNode = $root->insertBefore($cloneCurrNode,$currNode);
	if(!$retNode)
		return false;
	//REMOVE CURRENT NODE
	$root->removeChild($nextSibling);
	//SAVE THE CURRENT STATE
	$HTMLDOM->saveHTMLFile($HTMLFile);

	return true;

}

function GX_COMMON_AddXMLElement($XMLDOM, $XMLFile, $tagname, $tagvalue, $parentID, $attrdefinition, $bSpanInsert)
{
	$retval = $XMLDOM->load($XMLFile);
	if($retval != true)return false;
		
	
	$parentID = strtoupper($parentID); 
	if($bSpanInsert == true)
	{
		$element = $XMLDOM->createElement($tagname, "");
		if(!$element)
			return false;
		//creating collapsable span node 
	/*	$spanelement1 = $XMLDOM->createElement("span", " - ");
		GX_COMMON_createAttributeInElement($XMLDOM, $spanelement1,"class", "collapsable"); 
		GX_COMMON_createAttributeInElement($XMLDOM, $spanelement1,"onclick", "OnClickCollapsable(event)");
		GX_COMMON_createAttributeInElement($XMLDOM, $spanelement1,"value", "hide");
		*/
		
		
		//now create the menu text element here 	
		$spanelement2 = $XMLDOM->createElement("span", $tagvalue);
		GX_COMMON_createAttributeInElement($XMLDOM, $spanelement2,"item-title", "true");
	}
	else
	{
		$element = $XMLDOM->createElement($tagname, $tagvalue);
		if(!$element)
			return false;
	}

	
	
	//NOW CREATE THE ATTRIBUTE NODES HERE 
	foreach ($attrdefinition as $attrname => $attrvalue)
	{
				
		$retval = GX_COMMON_createAttributeInElement($XMLDOM, $element,$attrname, $attrvalue);
	}
	if($bSpanInsert == true){
		//$element->appendChild($spanelement1);
		$element->appendChild($spanelement2);
	}
	
	$ulelement = $XMLDOM->createElement('ul', ""); 
	
	if($parentID == "0")
	{
		
	  $root =  $XMLDOM->documentElement;
	  $ulnode = $root->appendChild($ulelement);
	  if($ulnode)
	  	$retval = $ulnode->appendChild($element);
	}
	else
	{		
	    $parentNode = $XMLDOM->getElementById($parentID);
	    $firstChildNode = $parentNode->firstChild;
	    $nodename = strtoupper($firstChildNode->nodeName); 
	    if($nodename != 'SPAN')
	    	return false; 
	    $ulchild = $firstChildNode->nextSibling;	   
	    if(!$ulchild)
	    {
	    	$parentNode = $parentNode->appendChild($ulelement);
	    }
	    else 
	    {
	    	$nodename = strtoupper($ulchild->nodeName); 
	    	if($nodename != 'UL')
	    		return false;   
	    	$parentNode = $ulchild;
	    } 
	    
		$retval = $parentNode->appendChild($element);		
	}
	$XMLDOM->save($XMLFile);
	return true; 
	
	
}
/*
function GX_COMMON_AddHTMLElement($HTMLDOM, $HTMLFile, $tagname, $tagvalue, $parentID, $attrdefinition, $btagvalIsHTML=false)
{
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval != true)return false;

	$element = $HTMLDOM->createElement($tagname, $tagvalue);
	if(!$element)
		return false;

	//NOW CREATE THE ATTRIBUTE NODES HERE
	foreach ($attrdefinition as $attrname => $attrvalue)
	{
		$retval = GX_COMMON_createAttributeInElement($HTMLDOM, $element,$attrname, $attrvalue);
	}

	if($parentID == "0")
	{
		$root =  $HTMLDOM->documentElement;
		$retval = $root->appendChild($element);
	}
	else
	{
		$parentNode = $HTMLDOM->getElementById($parentID);
		if(!$parentNode)
			return false;
		$retval = $parentNode->appendChild($element);
	}
	$HTMLDOM->saveHTMLFile($HTMLFile);
	return true;


}
*/
//function GX_COMMON_AddSVGElement($SVGDOM, $SVGFile, $tagname, $tagvalue, $parentID, $attrdefinition)


function GX_COMMON_DeleteHTMLElement($HTMLDOM, $HTMLFile, $elemID)
{
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval == False)
		return False;
	
	$currNode = $HTMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;
	
		
	$parentNode = $currNode->parentNode;
	if(!$parentNode)
		return False;
	
	$retval = $parentNode->removeChild($currNode);
	if(!$retval)
		return False;
	
	$retval = $HTMLDOM->saveHTMLFile($HTMLFile);
	
	return $retval;
}

function GX_COMMON_DeleteElement($XMLDOM, $XMLFile, $elemID, $bCheck, $attrname, $attrvalue)
{

	$retval = $XMLDOM->load($XMLFile);
	if($retval == False)
		return False;
	
	$currNode = $XMLDOM->getElementById($elemID);
	if(!$currNode)
		return false;
	
	//do a validation 
	if($bCheck == true){
		$retval = $currNode->getAttribute($attrname); 
		if($retval != $attrvalue)
			return false; 
	}
		
	$parentNode = $currNode->parentNode; 
	if(!$parentNode)
		return False; 
	
	$retval = $parentNode->removeChild($currNode); 
	if(!$retval)
		return False; 
	
	$retval = $XMLDOM->save($XMLFile);
	
	return $retval; 
}

function GX_COMMON_createAttributeInElement($XMLDOM, &$element, $attrname, $attrvalue)
{
	$attr = $XMLDOM->createAttribute($attrname);
	if(!$attr)
		return False;

	$attr->value = $attrvalue;
	$oldattr = $element->setAttributeNode($attr);
	

	if($attrname == "id")
	{
		$element->setIdAttribute($attrname, true);
		return true;
	}

	if($attrname != "id")
	{
		return true;
	}

	return true;
}

function GX_COMMON_setHTMLAttributeInObject($HTMLDOM, $HTMLFile, $ObjID, $attrname, $attrvalue)
{
	
	if(!isset($HTMLDOM))
		return false; 
	if(!isset($HTMLFile))
		return false; 
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile); 
	libxml_clear_errors();
	if($retval != true)
		return false;
	
	$objNode = $HTMLDOM->getElementById($ObjID); 
	if(!$objNode)
		return false; 
	
	$objNode->setAttribute($attrname, $attrvalue);
	
	$retval  = $HTMLDOM->saveHTMLFile($HTMLFile); 	
	
	return true; 
}

function GX_COMMON_updateHTMLObject($HTMLDOM, $HTMLFile, $ObjID, $HTMLString)
{
	// now load main HTML DOM with HTML file
	if(!isset($HTMLDOM))
		return false;
	if(!isset($HTMLFile))
		return false;
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval != true)
	{		
		return false;
	}
	
	//get the parent of the Object to be updated 
	$currObj = $HTMLDOM->getElementById($ObjID);
	if(!$currObj)
	{
		return false;
	} 
		
	//get the style attribute now 
	//$stylevalue = $currObj->getAttribute('style'); 
	
	$divID = "DIV_".$ObjID; 
	$parentObj = $currObj->parentNode; 
	if(!$parentObj)
	{		
		return false;
	} 
	//create a  temporary DOM and load HTML string onto it 
	$tempdoc = new DOMDocument();
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval  = $tempdoc->loadHTML($HTMLString);
	libxml_clear_errors();
	if($retval != true)
    {     	       
		return false;	
    }
     
	//get the node to be imported from temp DOM 
	$importNode = $tempdoc->getElementById($ObjID); 
	if(!$importNode)
	{		
		return false;
	} 
	
	//now import the node into HTMLDOM 
	$importNode = $HTMLDOM->importNode($importNode, true); 
	if(!$importNode)
	{		
		return false;
	} 
	
	//remove the already existing Object from the main DOM 
	$retval  = $parentObj->replaceChild($importNode, $currObj);
	if(!$retval)
	{		
		return false;
	}  
	
	// now append the child to the parent 
	$htmldata = $HTMLDOM->saveHTML($importNode);
	
	//$htmldata = $HTMLDOM->saveHTML(); 
	
	$retval  = $HTMLDOM->saveHTMLFile($HTMLFile);
	if($retval == FALSE)
	{
		
		return false;
	} 
	
	return true; 

}
function GX_COMMON_getAttributeValue($XMLDOM,$XMLFile, $NodeID, $attribute)
{
	//GET THE NODE 
	$XMLDOM->load($XMLFile); 
	$Node = $XMLDOM->getElementById($NodeID);
	if(!$Node)
		return False;
	
	//THEN GET THE VALUE OF  ATTRIBUTE
	$value = $Node->getAttribute($attribute);
	return $value;  
	 
}
/*
 * If DOM already loaded no need to load again to opitmize file loading overheads This will work 
 * when the function gets called as part of the same request. Use it carefully when not sure then better pass FALSE 
 */
function GX_COMMON_setAttributeValue($XMLDOM,$XMLFile, $NodeID, $attribute, $attrval, $bDOMLoaded)
{
	//GET THE NODE
	if($bDOMLoaded == false)
	{
		$XMLDOM->load($XMLFile);
		if (!$XMLDOM->validate()) 
			return false;	
	}
	$Node = $XMLDOM->getElementById($NodeID);
	if(!$Node)
		return False;

	//THEN GET THE VALUE OF  ATTRIBUTE
	$Node->setAttribute($attribute, $attrval);
	$XMLDOM->save($XMLFile);
	return true;

}

function GX_COMMON_getHTMLObjectData($HTMLDOM, $HTMLFile, $ObjID)
{
	if(!isset($HTMLDOM))
		return false;
	if(!isset($HTMLFile))
		return false;
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval != true)
		return false;

	$objNode = $HTMLDOM->getElementById($ObjID);
	if(!$objNode)
		return false;	

	$retval  = $HTMLDOM->saveHTML($objNode);

	return $retval;
}

function GX_COMMON_updateChildValue($XMLDOM,$XMLFile, $NodeID, $incrFlag)
{
	$XMLDOM->load($XMLFile);
	$Node = $XMLDOM->getElementById($NodeID);
	if(!$Node)
		return False;
	
	$nchildval = $Node->getAttribute('nchild');
	
	if($incrFlag == true)
		$nchildval++;
	else
		$nchildval--;
	$Node->setAttribute('nchild',$nchildval );	
	
	$XMLDOM->save($XMLFile);
}

function GX_COMMON_getChildrenList($XMLDOM,$XMLFile, $parentID,$dataType,  $dataTypeVal,$attrTypeToStore, &$nodeArr)
{
	 //
	$retval = $XMLDOM->load($XMLFile);
	if($retval != true)
		return $retval; 
	
	$node = $XMLDOM->getElementById($parentID); 
	if(!$node)
		return false; 
	$node = $node->firstChild; 
	if(!$node)
		return true; 
	$nodename = strtoupper($node->nodeName);
	if($nodename != 'SPAN')
		return false; 
	$node = $node->nextSibling; 
	if(!$node)
		return true;
	$nodename = strtoupper($node->nodeName);
	if($nodename != 'UL')
		return false;
	
	$nodeList = $node->childNodes; 
	$childNode = 0; 
	$nodeArr = array(); 
	
	for($i=0; $i < $nodeList->length; $i++)
	{
		$childNode = $nodeList->item($i); 
		$type = $childNode->getAttribute($dataType);
		//should take care of cases where slides dont have any group defined yet
		if($type == $dataTypeVal)
		{
			$attrval = $childNode->getAttribute($attrTypeToStore);
			array_push($nodeArr,$attrval);
		}
			
		
	}
	return true; 	
	
}


function GX_COMMON_replaceTextIntoNode($HTMLDom, $HTMLFile, $nodeID, $nodestr) 
{
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDom->loadHTMLFile($HTMLFile);	
	libxml_clear_errors();
	if($retval != true)
	{
		return false;
	}
	$textnode = $HTMLDom->createTextNode ($nodestr);
	//get the parent of the Object to be updated
	$currObj = $HTMLDom->getElementById($nodeID);
	if(!$currObj)
	{
		return false;
	}
	$oldNode = $currObj->firstChild;
	if($oldNode)
		$retval = $currObj->replaceChild($textnode, $oldNode);
	else
		$retval = $currObj->appendChild($textnode);
	$retval = $HTMLDom->saveHTMLFile($HTMLFile);
	return true; 
}

function GX_COMMON_MOVEXMLElement($XMLDOM, $XMLFile, $srcNodeID, $destNodeID, $position)
{
	//GET THE CURRENT NODE CORR TO PAGEID
	$retval = $XMLDOM->load($XMLFile);
	if($retval == False)
		return False;
	
	$currNode = $XMLDOM->getElementById($srcNodeID);
	if(!$currNode)
		return false;
		
	//NOW CLONE THE CURRENT NODE
	$cloneCurrNode = $currNode->cloneNode(true);
	
	//NOW GET THE DEST PARENT NODE WHERE THE CLONENODE WILL BE APPENDED 
	$destNode = $XMLDOM->getElementById($destNodeID); 	
	$srcparentNode = $currNode->parentNode;
	$nodeName = strtoupper($srcparentNode->nodeName);
	if($nodeName != 'UL')
		return false;
	
	$srcparentNode->removeChild($currNode);
	
	if($position == 'inside')
	{
		$destNode = $destNode->firstChild;
		$destNode = $destNode->nextSibling;
		$nodeName = $destNode->nodeName;
		$nodeName = strtoupper($nodeName);		
		//check if its UL
		if($nodeName != 'UL')
		{
			return false;
		}
		$destNode->appendChild($cloneCurrNode);
	}
	else if($position == 'before')
	{
		$srcparentNode->insertBefore($cloneCurrNode,$destNode ); 
	}
	
	
	//SAVE THE CURRENT STATE
	$XMLDOM->save($XMLFile);	
	return true;	
}

function GX_COMMON_AddXMLUniqueCopyID(&$XMLDOM, &$Node, $NodeTypeToCopy, $destParentID)
{
	//check if it has child otherwise just return
	//$retval = $XMLDOM->load($XMLFile);
	//if($retval == False)
	//	return False;
	
	$bChild = $Node->hasChildNodes();
	$childList= 0; 
	$childnode = 0; 
	if($bChild== true)
	{
		$childList = $Node->childNodes; 
		$length = $childList->length; 
		for($i = 0; $i < $length; $i++)
		{
			$childnode = $childList->item($i); 
			GX_COMMON_AddXMLUniqueCopyID($XMLDOM, $childnode, $NodeTypeToCopy, $destParentID); 
		}
	}		
	// get the child list of the node
	$nodeType = strtoupper($Node->nodeName); 	 
	if($nodeType != '#TEXT')
	{
		$nodedataID = $Node->getAttribute('dataid');
		$nodetype = $Node->getAttribute('type'); 
		if($nodedataID)
		{			 
			$newNodeID = GX_COMMON_GeneratedUniqueCopyXMLDataID($XMLDOM, $nodedataID);			
			$Node->setAttribute('dataid', $newNodeID);
			$TMNodeID = "TM_" . $newNodeID;			
			$Node->setAttribute('id', $TMNodeID);
			if( ($NodeTypeToCopy == 'LAYER') || ($NodeTypeToCopy == 'SCENE') )
			{
				if($nodetype == 'HTMLOBJECT')
				{
					$parentNode = $Node->parentNode;
					$nodeName = strtoupper($parentNode->nodeName);
					if($nodeName != 'UL')
						return false;
					$parentNode = $parentNode->parentNode;
					$nodeType = $parentNode->getAttribute('type');
					$nodeType = strtoupper($nodeType);
					if($nodeType != 'LAYER')
						return false;
					$layerID = $parentNode->getAttribute('dataid');
					$newLayerID = GX_COMMON_GeneratedUniqueCopyXMLDataID($XMLDOM, $layerID);
					$retval =  GX_COMMON_copyHTMLObject($newNodeID, $nodedataID, $newLayerID);				
				}				
			}
			else if($NodeTypeToCopy == 'HTMLOBJECT')
			{
				if($nodetype == 'HTMLOBJECT')
				{
					$newObjID  = GX_COMMON_copyHTMLObject($newNodeID, $nodedataID,$destParentID);
				}
			}
			
		}
	}
	
	
	return true; 
}

function GX_COMMON_GeneratedUniqueCopyHTMLDataID($HTMLDOM, $seedID)
{
///	$retval = $XMLDOM->load($XMLFile);
//	if($retval == False)
//		return 0;
	
	$i = 1; 
	//$newID = $seedID . "_C_" . $i;
	$bExist =  true;
	$newdataID = 0; 
	do{ 		
		$newdataID = $seedID . "_C_" . $i;
		$node = $HTMLDOM->getElementById($newdataID);
		if(!$node)
		{
			return $newdataID; 
		}
		$i++; 	
	}while($bExist == true);	
}

function GX_COMMON_GeneratedUniqueCopyXMLDataID($XMLDOM, $seedID)
{
///	$retval = $XMLDOM->load($XMLFile);
//	if($retval == False)
//		return 0;
	
	$i = 1; 
	//$newID = $seedID . "_C_" . $i;
	$bExist =  true;
	$newdataID = 0; 
	do{ 		
		$newdataID = $seedID . "_C_" . $i;
		$node = $XMLDOM->getElementById("TM_". $newdataID);
		if(!$node)
		{
			return $newdataID; 
		}
		$i++; 	
	}while($bExist == true);	
}

function GX_COMMON_copyHTMLObject($newObjID, $oldObjID, $newLayerID)
{
	
	$HTMLDOM = $_SESSION['projHTMLDOM'];
	$HTMLFile = $_SESSION['projHTMLFilename'];
	
	if(!isset($HTMLDOM))
		return false;
	if(!isset($HTMLFile))
		return false;
	
	libxml_use_internal_errors(true);
	//libxml_clear_errors();
	$retval = $HTMLDOM->loadHTMLFile($HTMLFile);
	libxml_clear_errors();
	if($retval != true)
	{
		return false;
	}
	// set divObjectID 
	$divObjectID = "DIV_". $oldObjID; 
	
	//get the divObjcontainer and HTMLObject
	$divNode = $HTMLDOM->getElementById($divObjectID); 
	if(!$divNode)
		return false ; 
	
	//clone the node
	$divNodeCopy = $divNode->cloneNode(true); 
	 
	//set the ID to the new one for both divObject container as well as Object
	$divObjectID = "DIV_" .$newObjID; 
	$divNodeCopy->setAttribute('id', $divObjectID); 
	//set the data layerID to the new layer Id
	$divNodeCopy->setAttribute('data-layerid',$newLayerID);
	$childList = $divNodeCopy->childNodes; 
	 
	for($i= 0; $i <$childList->length; $i++)
	{
		$childNode = $childList->item($i);
		$name = strtoupper($childNode->nodeName); 
		if($name != "#TEXT")
		{
			$nodeID = $childNode->getAttribute('id'); 
			if($nodeID)
			{
				$retval  = GX_COMMON_AddHTMLUniqueCopyID($HTMLDOM, $childNode); 
				if($retval != true)return false; 
				
				//$childNode->setAttribute('id', $newObjID); 
				break; 
			}
		}
	}	
	
	$root = $HTMLDOM->getElementById('ALL_DATA_CONTAINER'); 
	$root->appendChild($divNodeCopy); 
	$retval  = $HTMLDOM->saveHTMLFile($HTMLFile);
	//now traverse the Node from Object Node onwards down and generate unqiue IDs and set 
	//them may be have a separate function to do this 
	
	return true; 
	
}

function GX_COMMON_AddHTMLUniqueCopyID(&$HTMLDOM, &$Node)
{
	$bChild = $Node->hasChildNodes();
	$childList= 0;
	$childnode = 0;
	if($bChild== true)
	{
		$childList = $Node->childNodes;
		$length = $childList->length;
		for($i = 0; $i < $length; $i++)
		{
			$childnode = $childList->item($i);
			GX_COMMON_AddHTMLUniqueCopyID($HTMLDOM, $childnode);
		}
	}
		// get the child list of the node
		$nodeType = strtoupper($Node->nodeName);
		if($nodeType != '#TEXT')
		{
			$nodeID = $Node->getAttribute('id');
			//$nodetype = $Node->getAttribute('type');
			if($nodeID)
			{
				$newNodeID = GX_COMMON_GeneratedUniqueCopyHTMLDataID($HTMLDOM, $nodeID);
				$Node->setAttribute('id', $newNodeID);		
			}
		}
return true;
}
function GX_COMMON_LoadTMLFile($HTMLDOM, $HTMLFile)
{
	libxml_use_internal_errors(true);
	$retval  = $HTMLDOM->loadHTML($HTMLFile);
	libxml_clear_errors();
	return $retval; 
	
}

function GX_COMMON_updateSCNodeTitle($XMLDOM,$XMLFile, $NodeID, $nodetitle)
{
	$retval  = $XMLDOM->load($XMLFile);
	if($retval != true)return false;
	$Node = $XMLDOM->getElementById($NodeID);
	if(!$Node)
		return False;
	$spanNode = $Node->firstChild;
	$nodename = strtoupper($spanNode->nodeName);
	if($nodename == 'SPAN')
	{
		$oldtextNode = $spanNode->firstChild;
		$nodename = strtoupper($oldtextNode->nodeName);
		if($nodename != '#TEXT')
			return false;
		$newtextNode = $XMLDOM->createTextNode($nodetitle);
		if(!$newtextNode)
			return false;
		$spanNode->replaceChild($newtextNode,$oldtextNode);
		$XMLDOM->save($XMLFile);
		return true;
		break;
	}
	return false; 
	//get all child nodes 
	/*$childList = $Node->childNodes;
	for($i=0; $i <$childList->length; $i++ )
	{
		$spanNode = $Node->firstChild;
		$nodename = strtoupper($spanNode->nodeName);
		if($nodename == 'SPAN')
		{
			$oldtextNode = $spanNode->firstChild;
			$nodename = strtoupper($oldtextNode->nodeName);
			if($nodename != '#TEXT')
				return false;
			$newtextNode = $XMLDOM->createTextNode($nodetitle);
			if(!$newtextNode)
				return false;
			$spanNode->replaceChild($newtextNode,$oldtextNode);
			$XMLDOM->save($XMLFile);
			return true;
			break;
		}		
	}*/
	
	
	return false; 
	
	
}