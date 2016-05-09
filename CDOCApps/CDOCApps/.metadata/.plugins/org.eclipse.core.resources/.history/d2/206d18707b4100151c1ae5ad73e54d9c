/*
sObjAttrParam.prototype.ID = 0;
sObjAttrParam.prototype.type = 'ATTRIBUTE ';//can be sub-attribute as well 
sObjAttrParam.prototype.name = '';
sObjAttrParam.prototype.currValue = '';
sObjAttrParam.prototype.prevValue = '';
sObjAttrParam.prototype.Status = '';
*/
sObjAttrParam.prototype.ID = 0;
sObjAttrParam.prototype.type = 'ATTRIBUTE ';//can be sub-attribute as well 
sObjAttrParam.prototype.name = '';
sObjAttrParam.prototype.currValue = '';
sObjAttrParam.prototype.prevValue = '';
sObjAttrParam.prototype.Status = '';

function sObjAttrParam() {
	sObjAttrParam.prototype.ID = 0;
	sObjAttrParam.prototype.type = 'ATTRIBUTE ';//can be sub-attribute as well 
	sObjAttrParam.prototype.name = '';
	sObjAttrParam.prototype.currValue = '';
	sObjAttrParam.prototype.prevValue = '';
	sObjAttrParam.prototype.Status = '';
}

function EL_AddObjectPropertyToEditList(EditList, ObjectID, op_type, attribute_name, currentValue, previousValue) 
{
	var myEditList = EditList;
    if (op_type == "STYLE_SUB_ATTRIBUTE") {
        //Debug_Message("AddObject called: ID=" + ObjectID + "-" + attribute_name + "-" + currentValue);  
        myEditList.push([ObjectID, "STYLE_SUB_ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED","PENDING"]);
    }
    else if(op_type == "ATTRIBUTE")
    {
    	myEditList.push([ObjectID, "ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED","PENDING"]);
    }
    return myEditList; 

   // $("#tc_undo").removeAttr("disabled");

}

function EL_DeleteFromEditList(EditList, ObjectID) {

    //GET THE EDIT LIST
	var myEditList = EditList; 
    var bEoL = false;
    var indexList = [];

    if (ObjectID == 0) {       
        var len = myEditList.length;
        myEditList.splice(0, len);
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
        	retval = EL_DeleteInvalidEntries(myEditList);
        	if(!retval)
        		bUndefEntry = false; 
        	else
        		myEditList = retval; 
        }
    }
    
    return myEditList; 

}
function EL_DeleteInvalidEntries(EditList) {

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


function EL_SaveEditList(finalEditList, bAsyncMode) {

	// Debug_Message("Start of Saving Object"); 
    var listlen = finalEditList.length;
    if(listlen < 1)
    	return; 
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

       
        //be careful about the holes
        if (finalEditList[n].Status = 'PENDING') {
        	if(finalEditList[n].type == 'ATTRIBUTE')
        	{
        		var node = document.getElementById(finalEditList[n].ID); 
            	if(node)
            	{
            		reqbody = reqbody + "&OBJECTID[]=" + finalEditList[n].ID + "&OPTYPE[]=" + finalEditList[n].type + "&ATTRNAME[]=" + finalEditList[n].name 
            		+ "&ATTRVALUE[]=" + finalEditList[n].currValue;
            	}       
            	len++; 
        	}  	
        	/*else if(finalEditList[n].type == 'NODEMOVE')
        	{
        		GXRDE_MoveZIndex(finalEditList[n].ID, finalEditList[n].currValue);
        	}*/        	
            
          //the entry is marked as saved , will be changed to applied only when 
           
        }        
    }
    
    //NOW UPDATE THE LENGTH PARAM
    if(len > 0)
    {
    	reqbody = "LENGTH=" + len + reqbody; 
        if(bAsyncMode == true)
        {
        	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "305", reqbody);
            if (respstring != "OK")
            {            	
            	Debug_Message("EL_SaveEditList Error: " + reqbody);
            		return ;     	
            }    
        }
        else    
        {
        	var respstring = AJX_RequestWithReponseData("text", "OBJM", "305", reqbody);
            if (respstring != "OK")
            {            	
            	Debug_Message("EL_SaveEditList Error: " + reqbody);
            		return ;     	
            }          	
        }
    }  
   // Debug_Message("End of Saving Object"); 
    finalEditList = EL_DeleteFromEditList(finalEditList, 0); 
}


function EL_Undo(EditList, currentObjID, compactList) {

    //GTE THE EDIT LIST AND START FROM THE LAST APPLIED STATUS.
	var myEditList = EditList; 
    var lastIndex = myEditList.length - 1;
    var bUndoCompleted = false;
    var bApplySwap = false; 
    var ObjEditParam ;//= new sObjAttrParam(); 
   // var ObjProperty = 0;
    if (lastIndex < 0)
        return 0 ;

    var n = lastIndex;   
    do{
    	//ObjEditParam = myEditList[n]; 
        if (myEditList[n].Status == "APPLIED") {

            if (currentObjID == 0)
                bApplySwap = true;
            else if (currentObjID ==myEditList[n].ID)
                bApplySwap = true;                   
        }          
        
        if(bApplySwap == true)
        {             
        	swapProperty(myEditList, "UNDO", n, compactList);
            bUndoCompleted = true;                  
        }
        n--;
        if (n < 0)
            bUndoCompleted = true; 
    }while(bUndoCompleted == false)
    
    //SWAP THE OPERATION AND reverse the STATUS FROM APPLIED TO REVERSE
    if (bApplySwap == false) {
       
        return 0;
     
    }
    return "OK"; //do same for redo as well 
    
}

function swapProperty(EditList, Optype, Index, compactList) {
	  
	var myEditList = EditList; 
	var myObjParam; 
    // var ObjPropArr = ObjProp;
     if (Optype == "UNDO") {
         if(myEditList[Index].Status == "REVERSED")
             return ;

         var temp = myEditList[Index].prevValue;
         myEditList[Index].prevValue = myEditList[Index].currValue;
         myEditList[Index].currValue = temp;         
         myEditList[Index].Status = "REVERSED";         
     }
     else if (Optype == "REDO") {
         if (myEditList[Index].Status == "APPLIED")
             return ;       
         var temp = myEditList[Index].prevValue;
         myEditList[Index].prevValue = myEditList[Index].currValue;
         myEditList[Index].currValue = temp;
         myEditList[Index].Status = "APPLIED";
     }
     var Node = document.getElementById(myEditList[Index].ID);
     if (myEditList[Index].type == "ATTRIBUTE") {
         Node.setAttribute(myEditList[Index].name, myEditList[Index].currValue);
         myObjParam =  new sObjAttrParam(); 
         myObjParam.ID = myEditList[Index].ID; 
         myObjParam.name = myEditList[Index].name;
         myObjParam.currValue = myEditList[Index].currValue;
         myObjParam.type = myEditList[Index].type;          
         EL_UpdateCompactList(myObjParam, compactList); 
     }
     else if (myEditList[Index].type == "STYLE_SUB_ATTRIBUTE") {
          var expr = "Node.style." + myEditList[Index].name + "='" + myEditList[Index].currValue + "'";
          eval(expr);
     }
     if (myEditList[Index].type == "NODEMOVE") {                
         GX_MoveObjectNode(myEditList[Index].ID, myEditList[Index].currValue); 
     }
     
     return ;
 }


function EL_Redo(EditList, currentObjID, compactList) {

	var myEditList = EditList; 
    //GTE THE EDIT LIST AND START FROM THE LAST APPLIED STATUS.
    var lastIndex = myEditList.length;
    var bApplySwap = false; 
    var bRedoCompleted = false;
    // var ObjProperty = 0;
    if (lastIndex <= 0)
        return 0 ;

    var n = 1;
    do {


        if (myEditList[n].Status == "REVERSED") {
            if (currentObjID == 0)
                bApplySwap = true;
            else if (currentObjID == myEditList[n].ID)
                bApplySwap = true;
        }
        if (bApplySwap == true) 
        {
        	myEditList = swapProperty(myEditList, "REDO", n, compactList);
            bRedoCompleted = true;             
        }
        n++;
        if (n > lastIndex)
            bRedoCompleted = true;
    } while (bRedoCompleted == false)

    //SWAP THE OPERATION AND reverse the STATUS FROM APPLIED TO REVERSE
    if (bApplySwap == false) {
        //Debug_Message("looks like no items left to be Redone");
        return 0; 
    }
    return "OK"; 
}

/*
 * This function gets all atributes and stoe it in an array which can be later on referenced
 * to see if tehre is any difference , if there is then stroe it in edit list 
 * this is a generic function and does not care about object type 
 * attrList. -- each entry of the list contains, objectId, attrname, attrvalue
 */
function EL_getObjectAttributes(objNode)
{
	if(!objNode)
		return; 
	var attrList = []; 
	var attribute =[]; 
	var attrlen = objNode.attributes.length; 
	for(var j=0; j < attrlen; j++)
	{
		attribute = [objNode.id, objNode.attributes[j].nodeName, objNode.attributes[j].nodeValue, 'ATTRIBUTE'];
		attrList.push(attribute); 
	}
	return attrList; 
}

function EL_CompareAndAddtoList(prevAttrList, currAttrList, editList, compactList)
{
	var myEditList = editList; 
	var myObjParam =  0; 
	
	if(prevAttrList.length !=currAttrList.length)
	{
		//Debug_Message("List Length mismatch in Previous and Current List"); 
		return;
	}
	if(prevAttrList[0][0] != currAttrList[0][0])
	{
		Debug_Message("Object IDs mismatch in Previous and Current List"); 
		return;
	}	
	// compare the difference , if diff then add it to the list 
	for(var k=0; k < prevAttrList.length; k++)
	{
		if(prevAttrList[k][1] != currAttrList[k][1])
		{
			Debug_Message("Attribute name Mismatch"); 
			return ; 
		}		
		if(prevAttrList[k][2] != currAttrList[k][2])
		{
			myObjParam = new sObjAttrParam(); 
			myObjParam.ID = currAttrList[k][0]; 
			myObjParam.type = currAttrList[k][3]; 
			myObjParam.name =  currAttrList[k][1]; 
			myObjParam.currValue = currAttrList[k][2];
			myObjParam.prevValue = prevAttrList[k][2]; 
			myObjParam.Status = 'APPLIED'; 
			myEditList.push(myObjParam);	
			EL_UpdateCompactList(myObjParam, compactList); 	
			 
		}
	}
	 
	return; 
}
/*
 * attributeParams = [ID, attrType, attrname, attrvalue, post status]
 */
function EL_UpdateCompactList(attributeParams, compactList)
{
	var compactlistlen = compactList.length; 
	var attritem; 
	var bEntryNotFound =  true; 
	//start from bottom up
	var indexToWrite = -1; //compactList.length;
	
	for(var j=0; j < compactList.length; j++)
	{
		if( (compactList[j].ID == attributeParams.ID) && (compactList[j].name == attributeParams.name))
		{
			indexToWrite = j; 
			break; 
		}
	}	
	if(indexToWrite < 0 )
	{
		var nAttrItem =  new sObjAttrParam(); 		
		compactList.push(nAttrItem); 	
		indexToWrite = 	compactList.length-1; 			
	}
	compactList[indexToWrite].ID = attributeParams.ID;		
	compactList[indexToWrite].type = attributeParams.type; 
	compactList[indexToWrite].name =  attributeParams.name; 
	compactList[indexToWrite].currValue = attributeParams.currValue;
	compactList[indexToWrite].prevValue = ""; 
	compactList[indexToWrite].Status = 'PENDING';	
		
	//Debug_Message("Added to Compacct List Length=" + compactList.length); 
	return indexToWrite; 
	//get item 
	
	//check if the input object ID matches with that of item 
	
	//then check the action status i.e. applied or reveresed take only if applied  
	
	// check if pending or saved 
}
/*
 * var myEditList = EditList;
    if (op_type == "STYLE_SUB_ATTRIBUTE") {
        //Debug_Message("AddObject called: ID=" + ObjectID + "-" + attribute_name + "-" + currentValue);  
        myEditList.push([ObjectID, "STYLE_SUB_ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED"]);
    }
    else if(op_type == "ATTRIBUTE")
    {
    	myEditList.push([ObjectID, "ATTRIBUTE", attribute_name, currentValue, previousValue, "APPLIED"]);
    }
    return myEditList;
 * */


function EL_AddToEditList(editList,compactList, objParam)
{
	var myObjParam = new sObjAttrParam(); 
	myObjParam.ID = objParam.ID; 
	myObjParam.type = objParam.type; 
	myObjParam.name =  objParam.name; 
	myObjParam.currValue = objParam.currValue;
	myObjParam.prevValue = objParam.prevValue; 
	myObjParam.Status = 'APPLIED'; 
	editList.push(myObjParam);	
	//EL_UpdateCompactList(myObjParam, compactList);
}