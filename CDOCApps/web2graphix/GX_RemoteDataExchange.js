gAppURI = "GX_AppModule.php";

function GXRDE_addNewSVGFile(svgFname, svgTitle, callbackFn){	
	var reqbody = "&SVGFNAME=" + svgFname + "&SVGTITLE=" + svgTitle;	
	AJX_RequestWithReponseCallback("text", "WKSM", "102", reqbody, callbackFn);    
}

function GXRDE_openSVGFile(svgFname, callback)
{	
	var respstring = AJX_RequestWithReponseCallback("text", "WKSM", "103", svgFname,callback);
    if (!respstring) {

        Debug_Message("could not get data");
        return null;
    }    
    //return respstring; 
}

function GXRDE_getAssetListFromServer(assetType, callbackFn)
{
	AJX_RequestWithReponseCallback("text", "WKSM", "104", assetType, callbackFn);    
    
}
function GXRDE_deleteSVGFile(svgFname)
{	
	AJX_RequestWithNoReponseData("text", "WKSM", "105", svgFname);         
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
function GXRDE_addNewSVGObject(objectID, parentID, objectType, callbackFn)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID ;
	AJX_RequestWithReponseCallback("text", "OBJM", "301", reqbody, callbackFn);	
}

function GXRDE_addNewSVGGroupObject(objectID, parentID, objectType, name, callbackFn)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID +'&NAME=' + name;
	AJX_RequestWithReponseCallback("text", "OBJM", "301", reqbody, callbackFn);
		
}
function GXRDE_updateGroupName(groupID, groupName)
{		
	var reqbody  = "&GROUPID=" + groupID + "&NAME=" + groupName ;	
	AJX_RequestWithNoReponseData("text", "OBJM", "313", reqbody);	
}

function GXRDE_addNewSVGPolygonObject(objectID, parentID, objectType, numSides, nLength, callbackFn)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID 
	+ "&NUMSIDES="+numSides + "&CIRCRADIUS=" + nLength;
	AJX_RequestWithReponseCallback("text", "OBJM", "301", reqbody, callbackFn);
}

function GXRDE_addNewImageObject(objectID, parentID, objectType, URL, callbackFn)
{
	var reqbody = "&OBJECTTYPE=" + objectType + "&OBJECTID=" + objectID + "&REFID=" + parentID 
	+ "&URL="+URL;
	AJX_RequestWithReponseCallback("text", "OBJM", "301", reqbody, callbackFn);
}


function GXRDE_MoveZIndex(currobjID, beforeID,befParentID, callbackFn){
	var reqbody = "&CURROBJECTID=" + currobjID + "&BEFOREID=" + beforeID + '&BEFOREPARENTID='+ befParentID;
	//var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "306", reqbody);	
	AJX_RequestWithReponseCallback("text", "OBJM", "306", reqbody, callbackFn); 
}

function GXRDE_MoveObjectToGroup(groupID,objectIDArray, callbackFn ){
	
	var arrLen = objectIDArray.length; 
	var reqbody = "&GROUPID=" + groupID + '&ARRAY_LENGTH='+ arrLen;
	for(var j=0; j < arrLen; j++)
	{
		var attrstr = "&OBJECTID[]=" +  objectIDArray[j]; 
		reqbody += attrstr; 			
	}
	var respstring = AJX_RequestWithReponseCallback("text", "OBJM", "312", reqbody, callbackFn);	
}

function GXRDE_GetSVGMetaXML(svgFname, callback){	    
    AJX_RequestWithReponseCallback("text", "WKSM", "106", svgFname,callback);    
}
function GXRDE_DeleteObject(currobjID)
{
	var reqbody = "&CURROBJECTID=" + currobjID;
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "307", reqbody);	
}

function GXRDE_CopyShapeObject(objectID, groupID, newID, attrArray, callbackFn)
{
	var reqbody = "&OBJECTID=" + objectID + "&NEWOBJDID=" + newID + "&GROUPID=" + groupID ;
	var length = 0; 
	if(attrArray)
		length = attrArray.length; 		
	reqbody += "&LENGTH=" + length;	 
	
	for(var j=0; j < length; j++)
	{
		var attrstr = "&ATTRNAME[]=" +  attrArray[j][0] + "&ATTRVALUE[]="+ attrArray[j][1];
		reqbody += attrstr; 			
	}	
	AJX_RequestWithReponseCallback("text", "OBJM", "308", reqbody, callbackFn);	
}

function GXRDE_addNewAnimationObject(animID, parentID, animType, attrArray,callbackFn)
{	
	var len = attrArray.length; 
	var reqbody  = "&ANIMTYPE=" + animType + "&ANIMID=" + animID + "&PARENTID=" + parentID +
	"&ATTRLEN=" + len ; 
	for(var j=0; j < len; j++)
	{
		var attrstr = "&ATTRNAME[]=" +  attrArray[j][0] + "&ATTRVAL[]="+ attrArray[j][1];
		reqbody += attrstr; 			
	}
	//AJX_RequestWithNoReponseData("text", "OBJM", "309", reqbody);
	AJX_RequestWithReponseCallback("text", "OBJM", "309", reqbody, callbackFn);
}

function GXRDE_addMultipleAnimObjects(parentID, animType, commonAttrList, animIDList, objAttrList, callback){
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
	var respstring = AJX_RequestWithReponseCallback("text", "OBJM", "315", reqBody,callback );
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
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "316", reqBody);
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
	var respstring = AJX_RequestWithNoReponseData("text", "OBJM", "311", reqbody);	
}

function GXRDE_getPageURL(callbackFn)
{
	 //get the Page link from the server
    AJX_RequestWithReponseCallback("text", "WKSM", "107", "", callbackFn);    
}

function GXRDE_sessionEnd()
{
	var respstring = AJX_RequestWithNoReponseData("text", "SMGR", "500");
    if (respstring == "FAIL") {
        return null; 
    }    
}

function GXRDE_getUsername(callbackFn)
{
	var respstring = AJX_RequestWithReponseCallback("text", "SMGR", "501", '', callbackFn);
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

function GXRDE_downloadCurrentProject(){
	var respstring = AJX_RequestWithNoReponseData("text", "WKSM", "109", '');	
	return respstring; 	
}
function GXRDE_getProjectDataPath(callbackFn)
{
	 var respstr = AJX_RequestWithReponseData("text", "PRJM", "209", "", callbackFn);
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


function GXRDE_ExportObject(tgtObjName,tgtObjID, title, category)
{
	var reqbody = "&TARGETOBJECTNAME=" + tgtObjName + "&TARGETOBJID=" + tgtObjID + 
	"&TITLE=" + title + "&CATEGORY=" +  category;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "318", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}
function GXRDE_GetSVGImportList()
{
	var respstr = AJX_RequestWithReponseData("text", "OBJM", "319", "");
    if (respstr == "FAIL") {
        Debug_Message("Failed to Get Project Data Path due to some error");
        return 'FAIL'; 
    }
 return respstr; 
}

function GXRDE_GetPublishedList(callbackFn){
	var respstring = AJX_RequestWithReponseCallback("text", "WKSM", "110", '', callbackFn);
    if (respstring == "FAIL") {
        return null; 
    }   
    return respstring; 
}

function GXRDE_Publish(callbackFn)
{
	var respstring = AJX_RequestWithReponseCallback("text", "PUB", "801", '', callbackFn);
    if (respstring == "FAIL") {
        return null; 
    }   
    return respstring; 
}
function GXRDE_ImportPublishedContent(filename, callbackFn)
{
	var respstring = AJX_RequestWithReponseCallback("text", "PUB", "802", filename, callbackFn);
    if (respstring == "FAIL") {
        return null; 
    }   
    return respstring; 
}
