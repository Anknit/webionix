
/***
 * DataHandler functions _rm 
 * THIS SECTION OF THE CODE SHOULD ALL DATA OPERATION FUNCTIONS WHEREBY THE FUNCTIONS 
 * AFTER GETTING THE DATA TO OPERATE ON OPERATES WITH THE DATA , COMMUNCATES WITH THE BACK-END 
 * SERVER TO GET DATA IF REQUIRED AND THEN PROVIDES OUTPUT OF PROCESSED DATA .
 * THESE FUNCTIONS SHOULD NOT HAVE ANYTHING TO DO WITH UI RATHER THEY SHOULD BE UI AGNOSTIC
 * IDEALLY THESE FUNCTIONS SHOULD TAKE INPUT DATA AND OUTPUT PROCESSED DATA WHICH CAN BE 
 * USED BY UIH FUNCTIONS FOR POPULATION .
 * 
 */

function DH_getNewProject(ProjectTitle)
{
	var respstring = AJX_RequestWithPureTextReponse("text", "WKSM", "102", ProjectTitle);
	if (!respstring) {

	    Debug_Message("could not get data");
	    return null;
	}
	return respstring; 
}

function DH_getWorkspaceData()
{

	var respstring = AJX_RequestWithPureTextReponse("text", "WKSM", "101", "");
	if (!respstring) {

	    Debug_Message("could not get data");
	    return null;
	}
	return respstring; 
}

function DH_getProjectData(NodeID)
{
	 var respstring  = AJX_RequestWithPureTextReponse("text", "WKSM", "104", NodeID);
     if (!respstring) {

         Debug_Message("could not get data");
         return null;
     }
     return respstring; 
}

function DH_deleteProject(ProjectID)
{
	 var respstring = AJX_RequestWithPureTextReponse("text", "WKSM", "103", ProjectID);
	 if (!respstring) {
	        Debug_Message("could not get data");
	        return null;	    
	 }
	 return respstring;     
	
}


function DH_getnewPage(PageTitle)
{
	//var PageTitle = prompt("Pl. enter the Title of the New Page", "Page1");
    var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "201", PageTitle);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
}

function DH_moveUpPage(PageID)
{
	var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "203", PageID);
	if (!respstring) {
	      Debug_Message("could not get data");
	      return null;
	}
	return respstring; 
}

function DH_moveDownPage(PageID)
{
	var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "204", PageID);
	if (!respstring) {
	      Debug_Message("could not get data");
	      return null;
	}
	return respstring; 
}

function DH_deletePage(PageID)
{
	var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "202", PageID);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
}

function DH_getPageData(PageID)
{
	
	var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "206", PageID);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
	
}
function DH_getPageHTMLData(PageID)
{
	
	 var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "205", PageID);
     if (respstring == "Error") {
	        Debug_Message("could not get data");
	        return null;
	}
     return respstring; 
 	
}
function DH_GetUniqueID(ObjectType) {
    var bUnique = false;
    var ObjID = "";    
    var retval ; 
    
    do {
        var randomNo = Math.round(Math.random() * 2000);
        ObjID = ObjectType + randomNo;
        if( (ObjectType == 'SCENE') || (ObjectType == 'LAYER') )
        {
        	retval = document.getElementById("TM_"+ObjID);
        }
        else
        {
        	 retval = document.getElementById(ObjID);
        }        
        if (!retval)
            bUnique = true; 
            
    }while (bUnique == false)

    return ObjID;
}


function DH_GetUniqueTitle(inputObjectType) {
    var bUnique = false;
    var title = "";
    var nItems = 1; //$("[type = ObjectType]").size() + 1;           
    var elemArr = $("div.TREEMENU").toArray();
   
   
    var ObjectType = inputObjectType; 
    
    if(ObjectType == 'LAYER')
    	ObjectType = 'GROUP';
    else if(ObjectType == 'SCENE')
    	ObjectType = 'SLIDE';
    
    title = ObjectType + "-" + nItems;
    var i = 0; 
    for (i = 0; i < elemArr.length; i++) {
        var str = elemArr[i].firstElementChild.nextSibling.textContent;
        if (str == title) {
            nItems++;
            title = ObjectType + "-" + nItems;
            i = 0; 
        }
    }
    
   return title;
}

function DH_AddNewObject(newObjectType, ObjectID, parentObjectID, ObjectName, dataType)
{
	var ObjParam = "OBJECTTYPE=" + newObjectType + "&OBJECTID=" + ObjectID + "&REFID=" + parentObjectID + "&TITLE=" + ObjectName + "&DATATYPE=" + dataType;
	var respstring = ""; 
	respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "301", ObjParam);

     if (!respstring) {
         Debug_Message("Item could not be added due to some error");
         return null;
     }

     if (respstring == "FAIL") {
         Debug_Message("Item Could not be Added sue to some error"); 
         return null;
     }
     var strArr = respstring.split('#'); 
     return strArr; 
	
}
function DH_getSCXMLData(PageID)
{
	var ObjParam = PageID;
	var respstr = AJX_RequestWithPureTextReponse("text", "OBJM", "300", ObjParam);
	return respstr; 
}

function DH_MoveNode(currentNode, direction) {
	
    var currNodeID = currentNode.getAttribute("dataid");   
    var currNodeType = currentNode.getAttribute("type");
    var level = currentNode.getAttribute("level");
    currNodeType = currNodeType.toUpperCase();

    if ((currNodeType != "SCENE") && (currNodeType != "LAYER")) {
        return null;  
       }

    //SEND AJAX REQUEST TO DELETE
    var reqcode; 
   var bUpDir;
   if(direction == 'UP')
   {
	   bUpDir =  true;
	   reqcode = '303'; 	   
   }
	   	  
   else 
   {
	   bUpDir =  false; 
	   reqcode = '304'; 
   }	  
    var ObjParam = "OBJECTTYPE=" + currNodeType + "&OBJECTID=" + currNodeID + "&LEVEL=" + level;
    var respstring = "";
    respstring = AJX_RequestWithPureTextReponse("text", "OBJM", reqcode, ObjParam);

    if (respstring != "OK")
        return null; 
  
    respstring = DH_getSCXMLData(gCurrentPageID); 
    return respstring;
    
}

function DH_deleteObjectNode(currentNode) {
    var currNodeID = currentNode.getAttribute("dataid");
    var currNodeType = currentNode.getAttribute("type");
    currNodeType = currNodeType.toUpperCase();

    if ((currNodeType == "PAGE") || (currNodeType == "PROJECT")) {
        return ;
    }
    var mydataOrig = currentNode.getAttribute("data-origin");
    if(mydataOrig != 'original')
    {
    	currNodeID = currentNode.getAttribute('id'); 
    }

    //SEND AJAX REQUEST TO DELETE
   //currNodeID = currNodeID.substring(3); 
    var ObjParam = "OBJECTTYPE=" + currNodeType + "&OBJECTID=" + currNodeID;
    var respstring = "";
    respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "302", ObjParam);


    //NOW DELETE IT FROM THE HTML DOM AS WELL
    if (currNodeType == "HTMLOBJECT") {
        var JQSelector = "#DIV_" + currNodeID;
        $(JQSelector).remove();
        DH_DeleteFromEditList(gEditList, "DIV_" + currNodeID);
        DH_DeleteFromEditList(gTextObjEditList, currNodeID);
        //Debug_Message("Call DH_DeleteFromEditList in DH_deleteObjectNode : ID = " +currNodeID);
    }
   
}

function DH_DeleteFromEditList(EditList, ObjectID) {

    //GET THE EDIT LIST
	var myEditList = EditList; 
    var bEoL = false;
    var indexList = [];

    if (ObjectID == 0) {       
        var len = myEditList.length;
        myEditList.splice(1, len - 1);
        len = myEditList.length;
        return myEditList;
    }
    

    for (var p = 1; p < myEditList.length; p++) {

        //LOCATE THE INDEX WHERE THE OBJECT ID IS FOUND
        if (myEditList[p][0] == ObjectID) {
           	myEditList[p][5] = "INVALID" ; 
        }       
    }
    
    if (ObjectID != 0) {

        var bUndefEntry = true;
        while (bUndefEntry == true) {
        	retval = DH_DeleteInvalidEntries(myEditList);
        	if(!retval)
        		bUndefEntry = false; 
        	else
        		myEditList = retval; 
        }
    }
    
    return myEditList; 

}
function DH_DeleteInvalidEntries(EditList) {

    var myEditList = EditList; 
	var i ;
    for (i = 1; i < myEditList.length; i++) {
        if (myEditList[i][5] == "INVALID") {
        	myEditList.splice(i, 1);
            return myEditList;   
          }
    }
    //means there are no invalid entries left in the array   
    return null; 
}

function DH_deleteLayerNode(currentNode) {

    //FIRST CHECK IF THIS INDEED LAYER NODE TYPE
    var type = currentNode.getAttribute("type");
    if (type != "LAYER")
        return;

    var childList = currentNode.childNodes;
    if (childList.length < 1)
        return;
    var childNode=0; 
    for(var p=0; p <childList.length; p++)
    {
    	childNode = childList.item(p); 
    	var nodename = childNode.nodeName.toUpperCase(); 
    	if(nodename == 'UL')
    	{
    		childList = childNode.childNodes; 
    		break;     		
    	}
    }
    	
    for (var i = 0; i < childList.length; i++) {
        //GET NEXT  CHILD
        var childNode = childList.item(i);

        var nodeType = childNode.getAttribute("type");
        if (nodeType == "HTMLOBJECT") {

            DH_deleteObjectNode(childNode);
        }
    //CALL DELETEOBJETNODE
    }
    //NOW DELETE SELF
    DH_deleteObjectNode(currentNode); 
}

function DH_deleteSceneNode(currentNode) {
	   //FIRST CHECK IF THIS INDEED LAYER NODE TYPE
	      var type = currentNode.getAttribute("type");
	      if (type != "SCENE")
	          return;

	      var childList = currentNode.childNodes;
	      if (childList.length < 1)
	          return;

	      for(var p=0; p <childList.length; p++)
	      {
	      	childNode = childList.item(p); 
	      	var nodename = childNode.nodeName.toUpperCase(); 
	      	if(nodename == 'UL')
	      	{
	      		childList = childNode.childNodes; 
	      		break;     		
	      	}
	      }
	      
	      for (var i = 0; i < childList.length; i++) {
	          //GET NEXT  CHILD
	          var childNode = childList.item(i);

	          var nodeType = childNode.getAttribute("type");
	          if (nodeType == "LAYER") {	             
	              DH_deleteLayerNode(childNode);
	          }
	      //CALL DELETEOBJETNODE
	      }

	      //NOW DELETE SELF
	      DH_deleteObjectNode(currentNode); 
	  
	  }


function DH_SaveEditList(finalEditList) {

    //get the bloody edit list and its length
  //_rm the list should be alwasy passed locally to avoid clean up while going from 
	//one tree view to other
  //  var finalEditList = UIH_getFinalEditList(gEditList); 
    var listlen = finalEditList.length;
    //follow it by body with 'length' = List length and then follow it by set of fields like
    //'objectid=value & attrname=value & attrvalue=value
    var len = 0;  //listlen ; // - 1;//
    var reqbody = "";  //= "LENGTH=" + len;

    if (listlen < 1) {
       // Debug_Message("Edit List Empty"); 
        return;
    }
   // for (var n = 0; n < listlen - 1; n++) 
    for (var n = 0; n < listlen; n++) {

        //var ObjAttr = gEditList.pop();
        var ObjAttr = finalEditList[n]; 
        //be careful about the holes
        if ((ObjAttr != "undefined") && (ObjAttr[5] == "APPLIED")) {
        	//also check if the object actually exisits or not 
        	var node = document.getElementById(ObjAttr[0]); 
        	if(node)
        	{
        		reqbody = reqbody + "&OBJECTID[]=" + ObjAttr[0] + "&OPTYPE[]=" + ObjAttr[1] + "&ATTRNAME[]=" + ObjAttr[2] + "&ATTRVALUE[]=" + ObjAttr[3];
        	}
        	else
        	{
        		
        	}
            len++; 
        }
    }
    //NOW UPDATE THE LENGTH PARAM
    reqbody = "LENGTH=" + len + reqbody; 

   // var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "305", reqbody);
    var respstring = AJX_AsyncCreateRequestPool("text", "OBJM", "305", reqbody);    
    /*if (respstring != "OK")
    {
    	
    	Debug_Message("DH_SaveEditList Error: " + reqbody);
    		return ;     	
    }
         
    else
    {
    	//Debug_Message("Edited Values Successfully Updated");
    }
    */
        
    //Edit List need to be cleaned up now
    gEditList = DH_DeleteFromEditList(gEditList, 0); 
}


function DH_getObjectContainerAttributes(DIVNode, attrname) {

    var ObjID, attrval;
    var ObjAttrArray  = [["ID", "attrname", "attrval", "status"]];
    ObjID = DIVNode.getAttribute("id");

    //Instead get the entire style attribute so for DIV only style attribute is being trapped for others 
    //it could be other attributes as well 
   // attrname = "style";

    var strlen;      
  
   // DIVNode.style.opacity = '1.0'; 
   
    
    if(attrname == 'style')
    	attrval = DIVNode.style.cssText;
    else
    	attrval = DIVNode.getAttribute(attrname); 
    
   // DIVNode.style.border = prevVal; 
    ObjAttrArray.push([ObjID, attrname, attrval, "false"]);  
    
    return ObjAttrArray;


}


function DH_AddToEditList(EditList, CurrObjAttrArr, PrevObjAttrArr) {

   var myEditList = EditList; 
    //first match the length of both the array. if different return error
   if (CurrObjAttrArr.length != PrevObjAttrArr.length)
        return 0;
   
   var arrlen  = CurrObjAttrArr.length; 
   var listlen = myEditList.length; 
    //now get one entry each in a loop
   for (var p = 0; p < arrlen; p++) {

       //check if the objectid matches . if no return error
       if (CurrObjAttrArr[p][0] != PrevObjAttrArr[p][0]) 
           return 0;

       //check if attrname  matches if no then return 
       if (CurrObjAttrArr[p][1] != PrevObjAttrArr[p][1]) 
           return 0;

       if (CurrObjAttrArr[p][2] != PrevObjAttrArr[p][2]) {
           // check if the attrvalue is different , i
           //n which case update the edit list in LILO mode update the modificaton status as Valid
           //gEditList = [["OBJECTID","OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
    	   //now here we avoid repeated entries of the same arrtibute to avoid memory increase
    	   //comapre the objIDs , the attributes of the previous index if they are same then write into the
    	   //previous index 
    	   if((listlen > 2) && (CurrObjAttrArr[p][0]== myEditList[listlen-2][0])&&(CurrObjAttrArr[p][1]==myEditList[listlen-2][2]) )
    	   {
    		   myEditList[listlen-2][3] = CurrObjAttrArr[p][2]; 
    	   }
    	   else
    	   {
    		   myEditList.push([CurrObjAttrArr[p][0], "ATTRIBUTE", CurrObjAttrArr[p][1], CurrObjAttrArr[p][2], PrevObjAttrArr[p][2], "APPLIED"]);
    	   }
    	            
       }
   } 
   
   return myEditList;
}


function DH_getPageURL()
{
	 //get the Page link from the server
    var respstring = AJX_RequestWithPureTextReponse("text", "PRJM", "207");
    if (respstring == "FAIL") {
        return null; 
    }    
    return respstring; 
}


function DH_Undo(EditList, currentObjID) {

    //GTE THE EDIT LIST AND START FROM THE LAST APPLIED STATUS.
	var myEditList = EditList; 
    var lastIndex = myEditList.length - 1;
    var bUndoCompleted = false;
    var bApplySwap = false; 
   // var ObjProperty = 0;
    if (lastIndex <= 0)
        return null ;

    var n = lastIndex;   
    do{

        if (myEditList[n][5] == "APPLIED") {

            if (currentObjID == 0)
                bApplySwap = true;
            else if (currentObjID == myEditList[n][0])
                bApplySwap = true;                   
        }          
        
        if(bApplySwap == true)
        {             
        	myEditList  = swapProperty(myEditList, "UNDO", n);
            bUndoCompleted = true;                  
        }
        n--;
        if (n <= 0)
            bUndoCompleted = true; 
    }while(bUndoCompleted == false)
    
    //SWAP THE OPERATION AND reverse the STATUS FROM APPLIED TO REVERSE
    if (bApplySwap == false) {
       
        return null;
     
    }
    return myEditList; 
    
}

function swapProperty(EditList, Optype, Index) {
	  
	var myEditList = EditList; 
    // var ObjPropArr = ObjProp;
     if (Optype == "UNDO") {
         if(myEditList[Index][5] == "REVERSED")
             return ;

         var temp = myEditList[Index][4];
         myEditList[Index][4] = myEditList[Index][3];
         myEditList[Index][3] = temp;         
         myEditList[Index][5] = "REVERSED";
         
     }
     else if (Optype == "REDO") {
         if (myEditList[Index][5] == "APPLIED")
             return myEditList[Index];

         var temp = myEditList[Index][4];
         myEditList[Index][4] = myEditList[Index][3];
         myEditList[Index][3] = temp;
         myEditList[Index][5] = "APPLIED";
     }
     var Node = document.getElementById(myEditList[Index][0]);
     if (myEditList[Index][1] == "ATTRIBUTE") {
         Node.setAttribute(myEditList[Index][2], myEditList[Index][3]);
     }
     else if (myEditList[Index][1] == "STYLE_SUB_ATTRIBUTE") {
          var expr = "Node.style." + myEditList[Index][2] + "='" + myEditList[Index][3] + "'";
          eval(expr);
     }
     
     return myEditList;
 }


function DH_Redo(EditList, currentObjID) {

	var myEditList = EditList; 
    //GTE THE EDIT LIST AND START FROM THE LAST APPLIED STATUS.
    var lastIndex = myEditList.length;
    var bApplySwap = false; 
    var bRedoCompleted = false;
    // var ObjProperty = 0;
    if (lastIndex <= 0)
        return null ;

    var n = 1;
    do {


        if (myEditList[n][5] == "REVERSED") {
            if (currentObjID == 0)
                bApplySwap = true;
            else if (currentObjID == myEditList[n][0])
                bApplySwap = true;
        }


        if (bApplySwap == true) 
        {
        	myEditList = swapProperty(myEditList, "REDO", n);
            bRedoCompleted = true;             
        }
        n++;
        if (n >= lastIndex)
            bRedoCompleted = true;
    } while (bRedoCompleted == false)

    //SWAP THE OPERATION AND reverse the STATUS FROM APPLIED TO REVERSE
    if (bApplySwap == false) {
        //Debug_Message("looks like no items left to be Redone");
        return null; 
    }
    return myEditList; 
}

function DH_setCurrentSessionState(ProjID,PageID, ObjectID)
{
	var reqbody = "&PROJECTID=" + ProjID + "&PAGEID=" + PageID + "&OBJECTID=" + ObjectID ;
	var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "308", reqbody);
    if (respstring != 'OK') {

        Debug_Message("could not set Session Data");
        return null;
    }
    return respstring; 
}

function DH_getCurrentSessionState()
{
	var arrvar; 
	var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "310");
	if(respstring == 'NOVALUE')
		respstring = ""; 
    arrvar = respstring.split('#'); 
    return arrvar; 
	
}
function DH_getCurrentEditableObjectData()
{
	var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "309");
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
}

function DH_getCurrentEditableObjectID()
{
	var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "310");
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
}

function DH_getCurrentPageID()
{
	var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "311");
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    return respstring; 
}
function DH_AddObjectPropertyToEditList(EditList, ObjectID, op_type, attribute_name, currentValue, previousValue) 
{
	var myEditList = EditList;
    if (op_type == "STYLE_SUB_ATTRIBUTE") {
        //Debug_Message("AddObject called: ID=" + ObjectID + "-" + attribute_name + "-" + currentValue);  
        myEditList.push([ObjectID, "STYLE_SUB_ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED"]);
    }
    else if(op_type == "ATTRIBUTE")
    {
    	myEditList.push([ObjectID, "ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED"]);
    }
    return myEditList; 

   // $("#tc_undo").removeAttr("disabled");

}



function Debug_Message(string) {
    alert(string);
}
//right now Pagewise but later on this will be a global function and 
//instead one should be sending the project ID if required 
function DH_updateSlideShowInfo(PageID)
{
	var respstring = AJX_AsyncCreateRequestPool("text", "PRJM", "208", "");
	/*if (respstring != 'OK') {
	      Debug_Message("could not Save Script Data");
	      return null;
	}
	return respstring;
	*/ 
}


function DH_updateHTMLObject(ObjectID, dataType, HTMLstr)
{
	 var reqbody = "&OBJECTID=" + ObjectID + "&OBJECTTYPE=" + dataType + "&HTMLSTRING=" + HTMLstr;

	 //var respstring = AJX_RequestWithPureTextReponse("text", "OBJM", "307", reqbody);
	 var respstring = AJX_AsyncCreateRequestPool("text", "OBJM", "307", reqbody);
	/* if (respstring != "OK") {
	      Debug_Message("Object Values could not be Updated");
	      return null;
	  }	
	 return respstring; 
	 */
	 
}

function DH_addLayerReference(layerID, parentID)
{
    
        //call the AJX API to post this
	//_rm in case of Ref layer the unqiueness should be searched in the tree items only 
        var newObjID = DH_GetUniqueID('TM_LAYER');
       // newObjID = "TM_" + newObjID; 
        var ObjParam = "OBJECTID=" + newObjID + "&REFERENCEID=" + layerID + "&SCENEID=" + parentID; 
        
        var respstr = AJX_RequestWithPureTextReponse("text", "OBJM", "306", ObjParam);
        if (!respstr) 
        {
            Debug_Message("Failed to Add Layer data due to some error");
            return null;
        }
        return respstr; 
}

function DH_moveObject(objectID, destParentID, objectType, objPosition )
{
	if ( (objectType !='HTMLOBJECT') &&(objectType !='LAYER') &&(objectType !='SCENE')  )
		return ; 
    var ObjParam = "OBJECTID=" + objectID + "&DESTOBJECTID=" + destParentID + "&TYPE=" + objectType 
     + "&OBJPOSITION=" + objPosition;
    var respstr = AJX_RequestWithPureTextReponse("text", "OBJM", "313", ObjParam);
    if (respstr != "OK") {
        Debug_Message("Failed to Move Layer data due to some error");
        return 'FAIL'; 
    }
        return 'OK'; 
    
}

function DH_copyObject(objectID, destParentID, objectType)
{
	var ObjParam = "OBJECTID=" + objectID + "&DESTOBJECTID=" + destParentID + "&TYPE=" + objectType;
    var respstr = AJX_RequestWithPureTextReponse("text", "OBJM", "314", ObjParam);
    if (respstr != "OK") {
        Debug_Message("Failed to Copy due to some error");
        return 'FAIL'; 
    }
        return 'OK'; 
}

function DH_getProjectDataPath()
{
	 var respstr = AJX_RequestWithPureTextReponse("text", "PRJM", "209", "");
	    if (respstr == "FAIL") {
	        Debug_Message("Failed to Get Project Data Path due to some error");
	        return 'FAIL'; 
	    }
	        return respstr; 
}

function DH_getFinalEditListEntries()
{
	var finalEditList = UIH_getFinalEditList(gEditList); 
	//var listlen = finalEditList.length;
	return finalEditList; 
}

