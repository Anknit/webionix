gAppURI = "GX_AppModule.php";

function GXRDE_addNewSVGFile(svgFname)
{
	
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "102", svgFname);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    
    return respstring; 
}
function GXRDE_openSVGFile(svgFname)
{	
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "103", svgFname);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }    
    return respstring; 
}

function GXRDE_getAssetListFromServer(assetType)
{
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "104", assetType);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }
    var listarr = respstring.split('#'); 
    return listarr; 
}
function GXRDE_deleteSVGFile(svgFname)
{	
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "105", svgFname);
    if (respstring != 'OK') {

        Debug_Message("Can't Delete the file");
        return null;
    }       
}

function GXRDE_GetUniqueID(ObjectType) {
    var bUnique = false;
    var ObjID = "";    
    var retval ; 
    
    do {
        var randomNo = Math.round(Math.random() * 2000);
        ObjID = ObjectType + randomNo;
        retval = document.getElementById(ObjID);               
        if (!retval)
            bUnique = true; 
            
    }while (bUnique == false)
    return ObjID;
}
function GXRDE_addNewSVGObject(objectID, parentID, objectType)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID ;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "301", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}
function GXRDE_addNewSVGGroupObject(objectID, parentID, objectType, name)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID +'&NAME=' + name;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "301", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}
function GXRDE_updateGroupName(groupID, groupName)
{		
	var reqbody  = "&GROUPID=" + groupID + "&NAME=" + groupName ;	
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "313", reqbody);	
}

function GXRDE_addNewSVGPolygonObject(objectID, parentID, objectType, numSides, nLength)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID 
	+ "&NUMSIDES="+numSides + "&CIRCRADIUS=" + nLength;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "301", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';
	
}
function GXRDE_MoveZIndex(currobjID, beforeID,befParentID)
{
	var reqbody = "&CURROBJECTID=" + currobjID + "&BEFOREID=" + beforeID + '&BEFOREPARENTID='+ befParentID;
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "306", reqbody);	
}

function GXRDE_MoveObjectToGroup(groupID,objectIDArray ){
	
	var arrLen = objectIDArray.length; 
	var reqbody = "&GROUPID=" + groupID + '&ARRAY_LENGTH='+ arrLen;
	for(var j=0; j < arrLen; j++)
	{
		var attrstr = "&OBJECTID[]=" +  objectIDArray[j]; 
		reqbody += attrstr; 			
	}
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "312", reqbody);	
}

function GXRDE_GetSVGMetaXML(svgFname)
{	
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "106", svgFname);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }    
    return respstring; 
}
function GXRDE_DeleteObject(currobjID)
{
	var reqbody = "&CURROBJECTID=" + currobjID;
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "307", reqbody);	
}

function GXRDE_getCurrentSessionFileName()
{
	var reqbody = "";
	var respstring = AJX_RequestWithReponseData("text", "WKSM", "108", "");	
	return respstring; 
}

function GXRDE_CopyShapeObject(objectID, groupID, newID)
{
	var reqbody = "&OBJECTID=" + objectID + "&NEWOBJDID=" + newID + "&GROUPID=" + groupID ;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "308", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}

function GXRDE_addNewAnimationObject(animID, parentID, animType, attrArray)
{	
	var len = attrArray.length; 
	var reqbody  = "&ANIMTYPE=" + animType + "&ANIMID=" + animID + "&PARENTID=" + parentID +
	"&ATTRLEN=" + len ; 
	for(var j=0; j < len; j++)
	{
		var attrstr = "&ATTRNAME[]=" +  attrArray[j][0] + "&ATTRVAL[]="+ attrArray[j][1];
		reqbody += attrstr; 			
	}
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "309", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';
}

function GXRDE_addMultipleAnimObjects(parentID, animType, commonAttrList, animIDList, objAttrList){
	var len = commonAttrList.length; 
	var attrstr = ''; 
	var reqBody = '&ANIMTYPE=' + animType + '&PARENTID=' + parentID  + '&COMMONATTRLEN=' + commonAttrList.length; 
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
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "315", reqBody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';
}
function GXRDE_updateMultipleAnimObjects(animIDList, objAttrList){
	
	var attrstr = ''; 
	var reqBody = ''; 
	
	//now add the Object specific Atributes
	reqBody += '&OBJATTRLEN=' +  animIDList.length; 
	for(var i=0; i < animIDList.length; i++ ){
		attrstr = '&ANIMID[]=' + animIDList[i] + '&NAMEVALUEPAIR[]=' + objAttrList[i]; 
		reqBody += attrstr; 
	}
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "316", reqBody);
	//Debug_Message(respstring); 
	if(respstring)
		return respstring;
	else
		return 'ERROR';
}

function GXRDE_updateAnimationObject(animID, attrArray)
{	
	var len = attrArray.length; 
	var reqbody  = "&ANIMID=" + animID + "&ATTRLEN=" + len ; 
	for(var j=0; j < len; j++)
	{
		var attrstr = "&ATTRNAME[]=" +  attrArray[j][0] + "&ATTRVAL[]="+ attrArray[j][1];
		reqbody += attrstr; 			
	}	
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "310", reqbody);	
}


function GXRDE_updateTextObjectData(objID, string)
{	
	
	var reqbody  = "&OBJECTID=" + objID + "&DATA=" + string;	
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "311", reqbody);	
}

function GXRDE_getPageURL()
{
	 //get the Page link from the server
    var respstring = AJX_RequestWithReponseData("text", "WKSM", "107");
    if (respstring == "FAIL") {
        return null; 
    }    
    return respstring; 
}

function GXRDE_sessionEnd()
{
	var respstring = AJX_RequestWithReponseData("text", "SMGR", "500");
    if (respstring == "FAIL") {
        return null; 
    }    
}

function GXRDE_getUsername()
{
	var respstring = AJX_RequestWithReponseData("text", "SMGR", "501");
    if (respstring == "FAIL") {
        return null; 
    }   
    return respstring; 
}
function GXRDE_updateSVGObject(objID, attrArray)
{	
	var len = attrArray.length; 
	var reqbody = "&LENGTH=" + attrArray.length;	 
	for(var j=0; j < len; j++)
	{
		var attrstr = "&OBJECTID[]=" + objID + "&OPTYPE[]=ATTRIBUTE" + 
			"&ATTRNAME[]=" +  attrArray[j][0] + "&ATTRVALUE[]="+ attrArray[j][1];
		reqbody += attrstr; 			
	}	
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "305", reqbody);	
	return respstring; 
}

function GXRDE_removeAttribute(elemtID, attrname){
	
	
	var reqbody = '&ELEMENTID=' + elemtID + '&ATTRNAME='+attrname; 
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "314", reqbody);	
	return respstring; 	
}

function GXRDE_getProjectDataPath()
{
	 var respstr = AJX_RequestWithReponseData("text", "PRJM", "209", "");
	    if (respstr == "FAIL") {
	        Debug_Message("Failed to Get Project Data Path due to some error");
	        return 'FAIL'; 
	    }
	 return respstr; 
}

function GXRDE_ImportObject(srcFilename,srcObjID, newobjectID)
{
	var reqbody = "&SRCFILENAME=" + srcFilename + "&SRCOBJID=" + srcObjID + "&OBJECTID=" + newobjectID ;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "317", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}


function GXRDE_ExportObject(tgtObjName,tgtObjID, title)
{
	var reqbody = "&TARGETOBJECTNAME=" + tgtObjName + "&TARGETOBJID=" + tgtObjID + 
	"&TITLE=" + title;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "318", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}


