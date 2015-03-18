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

function GXRDE_MoveObjectToGroup(objectID,destparentID ){
	var reqbody = "&CURROBJECTID=" + objectID + '&DESTPARENTID='+ destparentID;
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
function GXRDE_CopyShapeObject(objectID, groupID, newID)
{
	var reqbody = "&OBJECTID=" + objectID + "&NEWOBJDID=" + newID + "&GROUPID=" + groupID ;
	var respstring = AJX_RequestWithReponseData("text", "OBJM", "308", reqbody);
	if(respstring)
		return respstring;
	else
		return 'ERROR';	
}

function GXRDE_addNewAnimationObject(animID, objectID, animType, attrArray)
{	
	var len = attrArray.length; 
	var reqbody  = "&ANIMTYPE=" + animType + "&ANIMID=" + animID + "&OBJECTID=" + objectID +
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