
var gAppVersion = "1.0"; 
sDimension.prototype.x = new Number(0);
sDimension.prototype.y = new Number(0);
sDimension.prototype.width = new Number(0);
sDimension.prototype.height = new Number(0);

function sDimension() {
    sDimension.prototype.x = new Number(0);
    sDimension.prototype.y = new Number(0);
    sDimension.prototype.width = new Number(0);
    sDimension.prototype.height = new Number(0);
}

var gSVGFileOpenDlg = "svgfileopendlg"; 
var gSVGFileNameDlgID = 'newSVGFileNameDlg'; 
var gSVGFileDeleteDlg = "svgfiledeletedlg"; 
var gFileNameTitleNode = 0;
var gInitTitle = "Web2.0 Graphics Editor: "; 
var gSVGContainerNode = 0; 
var gFileNameHolder = 0; 
var gResizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];

var gZoomFactor = new Number(1.0); 
var gCurrentObjectSelected=0; 
var gCurrSelectedObjectDim = new sDimension();
var gGrabberDim = new sDimension(); 
var gOrigMousePosX, gOrigMousePosY;
var gsvgRootNode = 0;
var bMove = false;
var gCurrGrabber = 0;
var bResize = false;
//var resizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];
var gCurrDirection = 'NONE'; 

var gPrevAttributeList = []; 
var gCurrAttributeList =[]; 
//var gObjectEditList = [];
var gObjectEditList = [];
var gCompactEditList = []; 
var gSVGFilename = 0; 
var gClientYOffset = 100;
var gClientXOffset = 0; 
var gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
function GX_Initialize()
{
	  WAL_Initialize();
	  var retval = WAL_DetermineBrowserType();
	  if(retval != true)
	  {
		Debug_Message("Unable To Determine Browser Type");   
	  }
  //  WAL_createMenu("mainMenu", '450px', '25px', 'horizontal', "UIH_MenuItemClick", "actionText");  
    //set the version number here 
	  var NodeList = document.getElementsByTagName('title');
	  var titleNode = NodeList[0]; 
	  titleNode.innerHTML +=  gAppVersion; 
    //create the splitter 
    var winHeight = window.outerHeight*1.2 + 'px'; 
   
    
   // var panel1 = [{ size: '10%', resizable: false, collapsible: false}];
    var panel1 = [{ size: '80px', resizable: false, collapsible: false, expandible:false}];
    WAL_createSplitter('splitterContainer', '100%', winHeight, 'horizontal', panel1);
    var panel2 = [{ size: '35%', collapsible: false}];
    WAL_createSplitter('dataContainerSplitter', '100%', '100%', "vertical", panel2);
    var panel3 = [{ size: '80%'}];
    WAL_createSplitter('metadataContainerSplitter', '100%', '100%', "horizontal", panel3);
    
    
    
    $('#splitterContainer').jqxSplitter('hideCollapseButtonAt', 0);
    $('#dataContainerSplitter').jqxSplitter('hideCollapseButtonAt', 0);
    $('#metadataContainerSplitter').jqxSplitter('hideCollapseButtonAt', 0);     
    
    //now create the menu here 
    WAL_createMenu("GXmenu", '800px', '30px', "horizontal", "GX_MenuItemHandler", 'actionText');
    WAL_createListBox('svgfileopenlistbox', '270', '250', "GX_LBItemsSelectHandler");
 	 	
    WAL_createWindow(gSVGFileOpenDlg,"Asset List", true, '282', '350', false,	true, false, false, false, "", 'SVGFO_LB_okbtn', 'SVGFO_LB_cancelbtn');
    WAL_createModalWindow(gSVGFileNameDlgID, '250', '150', 'pageOK', 'pageCancel');
    
    WAL_createListBox('svgfiledeletelistbox', '270', '250', "GX_LBItemsSelectHandler");
 	WAL_createButton('SVGFO_LB_deletebtn', '', '60', '24', true); 	
    WAL_createWindow(gSVGFileDeleteDlg,"Asset List", true, '282', '350', false,	true, false, false, false, "", '', 'SVGFD_LB_cancelbtn');
    
    gFileNameTitleNode = document.getElementById('filename'); 
    gFileNameHolder = document.getElementById('fname');
    //Debug_Message("DBM Initialized Successfully"); 
    
}

function GX_InitializeDocument(svgFileName)
{
	//set the file name to title etc. 
	gFileNameTitleNode.innerHTML = gInitTitle + svgFileName; 
	var spanNode = document.getElementById('fname'); 
	gFileNameHolder.innerHTML = svgFileName;
	gSVGFilename = svgFileName; 
	GX_updateEditAttributes(); 
	
	gZoomFactor = new Number(1.0); 
	gCurrentObjectSelected=0; 
	gCurrSelectedObjectDim = new sDimension();
	gGrabberDim = new sDimension(); 
	gOrigMousePosX, gOrigMousePosY;
	gsvgRootNode = 0;
	bMove = false;
	gCurrGrabber = 0;
	bResize = false;
	
	gCurrDirection = 'NONE'; 
	gPrevAttributeList = []; 
	gCurrAttributeList =[]; 
	gObjectEditList = []; 
	gCompactEditList = []; 
	// reset all variables to default state 
}

function GX_MenuItemHandler(event)
{
	var args =  event.args;
	var itemtext = $(args).text();
    var menuid = args.getAttribute("id");
    var retval;
	switch(menuid)
	{
	 case 'grid':
		 var menuname =  WAL_getMenuItemText(args); 
		 menuname = menuname.toUpperCase(); 
		 if(menuname == "SHOW GRID")
			 WAL_setMenuItemText(args, "Hide Grid"); 
		 else
			 WAL_setMenuItemText(args, "Show Grid"); 
		 break;
	 case 'new':
		 
		 var JQSel = "#" + "pageNameIP";	
		 $(JQSel).val("");		
		/* if(gCurrentObjectSelected)
			 GX_UpdateObjectProperties(gCurrentObjectSelected, false);*/
		 WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );				
		 break; 
	 case 'open':	
		 /*if(gCurrentObjectSelected)
			 GX_UpdateObjectProperties(gCurrentObjectSelected, false);*/
		 GX_menu_open_svgfrom_remote();
		 break; 
	 case 'delete':		 
		 GX_menu_delete_svgfrom_remote();
		 break;
	 case 'rectangle':
	 case 'ellipse':
		 GX_AddNewSVGObject(menuid); 
		 break; 	
	 case 'save':
		 EL_SaveEditList(gCompactEditList, true); 
		 break; 
	 case 'close':
		 GX_CloseSVGFile(); 
		 break; 
	 case 'undo':
		 GX_MenuChangeEditAction('UNDO');
		 break; 
	 case 'redo':
		 GX_MenuChangeEditAction('REDO');
		 break; 
	 case 'move_fwd':
		 GX_MoveObjectZIndex(gCurrentObjectSelected, 'FORWARD'); 
		 break; 
	 case 'move_bwd':
		 GX_MoveObjectZIndex(gCurrentObjectSelected, 'BACKWARD'); 
		 break; 
	 case 'move_top':
		 GX_MoveObjectZIndex(gCurrentObjectSelected, 'TOP'); 
		 break;
	 case 'move_bottom':
		 GX_MoveObjectZIndex(gCurrentObjectSelected, 'BOTTOM'); 
		 break;
	 default:
		 break; 
	 }
}
function GX_menu_open_svgfrom_remote()
{
	 var newsource = GXRDE_getAssetListFromServer('SVG');  
	 WAL_ListBoxUpdateData('svgfileopenlistbox', newsource);
	 WAL_showWindow(gSVGFileOpenDlg, true, 'open');
}

function GX_menu_delete_svgfrom_remote()
{
	 var newsource = GXRDE_getAssetListFromServer('SVG');  
	 WAL_ListBoxUpdateData('svgfiledeletelistbox', newsource);
	 WAL_showWindow(gSVGFileDeleteDlg, true, 'open');
}

function GX_LBDeleteItem()
{    
     var myitem = WAL_ListBoxGetSelectedItem('svgfiledeletelistbox'); 
     if(!myitem)
    	 return ; 
     var fname = myitem.label; 
     var fnamearr = fname.split('('); 
     fname = fnamearr[0];    
     //Debug_Message("Fname=" +  fname);    
     GXRDE_deleteSVGFile(fname);
     WAL_ListBoxDeleteItem('svgfiledeletelistbox', myitem.index);
}

function GX_LBItemsSelectHandler(Index)
{
	//Debug_Message("Index=" + Index); 
}

function GX_SVGFileDlgNameOK()
{
	var JQSel = "#" + "pageNameIP";	
	var svgfname  = $(JQSel).val();
    if(!svgfname)
    {
    	Debug_Message("Please Enter a Valid Name ");
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );
    	return; 
    }
    var bretval = IsNameValid(svgfname); 
    if(bretval == false)
    {
    	Debug_Message("Enter a Name without any Blank"); 
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );
    	return;     	
    }
   
    svgfname += ".svg"; 
    GX_SetSelection(gCurrentObjectSelected, false);
   	retval = GXRDE_addNewSVGFile(svgfname);	
   	if(retval == "ALREADY_EXISTS")
   	{
   		Debug_Message("This File Name Already Exists");
   		$(JQSel).val("");
    	WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );
    	return; 
   	}
   	GX_CloseSVGFile(); 
	var dataNode = document.getElementById('objectcontainer');
	dataNode.innerHTML += retval;
	
	GX_InitializeDocument(svgfname); 
	
	/*gFileNameTitleNode.innerHTML = gInitTitle + svgfname;  
	gFileNameHolder.innerHTML = svgfname;
	GX_updateEditAttributes();*/  
}

function GX_LBOKHandler(){
	 var myitem = WAL_ListBoxGetSelectedItem('svgfileopenlistbox'); 
     if(!myitem)
    	 return ; 
     var fname = myitem.label; 
     var fnamearr = fname.split('('); 
     fname = fnamearr[0];
     GX_SetSelection(gCurrentObjectSelected, false);
     var retval = GXRDE_openSVGFile(fname); 
     var HTMLstr=""; 
     if(retval)
     {
    	 GX_CloseSVGFile(); 
    	 var dataNode = document.getElementById('objectcontainer');
    	// var gripperNode =  document.getElementById('gripper'); 
    	// GX_AddNewSVGNodeFromXMLString(retval); 
    	 dataNode.innerHTML += retval; 
    	 GX_InitializeDocument(fname);     	 
     }	
    
}


function IsNameValid(strname)
{
	var len = strname.length; 
	var blankIndex = strname.indexOf(" ");
	if( (blankIndex >= 0) && (blankIndex < len) )
		return false; 	
	else
		return true; 	
}


function GX_creatShape(Type,elemID, parentID, objXMLStr)
{
	var parentNode = document.getElementById(parentID);
	 
	if(Type == 'RECTANGLE')
	{
		var elem = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
		elem.setAttribute('id', elemID);
		elem.setAttribute('class', 'SVG_SHAPE_OBJECT');
		elem.setAttribute('x', '10px');
		elem.setAttribute('y', '10px');
		elem.setAttribute('width', '100');
		elem.setAttribute('height', '100');
		elem.setAttribute('fill', 'none');
		elem.setAttribute('stroke', 'red');
		elem.setAttribute('stroke-width', '3');
		elem = parentNode.appendChild(elem); 	
	}
	var trialstr = '<rect id="RECT1002" class="SVG_SHAPE_OBJECT" x="10px" y="10px" width="100" height="100" fill="none" stroke="black" stroke-width="3"></rect>';
	var XMLDoc =  loadXMLString(trialstr);
	var objNode = XMLDoc.firstChild; 
	objNode = document.importNode(objNode, true);
	 //objNode = document.adoptNode(objNode);	 
	parentNode.replaceChild(objNode, elem);
	return true; 
	//<rect id="RECT1001" class="SVG_SHAPE_OBJECT" x="10px" y="10px" width="100" height="100"
//fill="none" stroke="black" stroke-width="3"/>
}

function loadXMLString(txt)  
{
	if (window.DOMParser)
	{
	  parser=new DOMParser();
	  xmlDoc=parser.parseFromString(txt,"text/xml");
	}
	else // Internet Explorer
	{
	  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	  xmlDoc.async=false;
	  xmlDoc.loadXML(txt); 
	}
	return xmlDoc;
}//function loadXMLString ends


function GX_AddNewNodeFromXMLString(parentID, objXMLStr)
{
	var XMLDoc =  loadXMLString(objXMLStr);
	var objNode = XMLDoc.firstChild; 
	var attrLen = objNode.attributes.length; 
	var nodeName = objNode.nodeName; 
	var parentNode = document.getElementById(parentID); 
	var elem = document.createElementNS("http://www.w3.org/2000/svg", nodeName);
	if(!elem)
		return false;  
	for (var i=0; i < attrLen; i++)
	{
		elem.setAttribute(objNode.attributes[i].nodeName, objNode.attributes[i].nodeValue);
	}	
	elem = parentNode.appendChild(elem);
	return true;
}
function GX_AddNewSVGNodeFromXMLString(objXMLStr)
{
	var XMLDoc =  loadXMLString(objXMLStr);
	var objNode = XMLDoc.firstChild; 
	var attrLen = objNode.attributes.length; 
	var nodeName = objNode.nodeName; 
	var parentNode = document.getElementById('objectcontainer'); 
	var elem = document.createElementNS("http://www.w3.org/2000/svg", nodeName);
	if(!elem)
		return false;  
	for (var i=0; i < attrLen; i++)
	{
		elem.setAttribute(objNode.attributes[i].nodeName, objNode.attributes[i].nodeValue);
	}	
	var refNode = document.getElementById('editingassets'); 
	elem = parentNode.insertBefore(elem,refNode);
	return true;
}

function GX_AddNewSVGObject(Type)
{
	//generate a unique ID 
	var ObjID =  GXRDE_GetUniqueID('SVG_'); 
	var objectType = Type.toUpperCase(); 
	//send out the request and get the XML from server
	retval = GXRDE_addNewSVGShapeObject(ObjID, 'BASELAYER', objectType);
	if(retval != 'ERROR')
	{		
		 GX_AddNewNodeFromXMLString('BASELAYER', retval); 
	}	
	if(gSVGFilename)
		GX_InitializeDocument(gSVGFilename);
}

function GX_CloseSVGFile()
{
	var dataNode = document.getElementById('objectcontainer');     	
	var svgObjNode = document.getElementById('SVGOBJECTCONTAINER');
	if(!svgObjNode)
		return ; 	
	dataNode.removeChild(svgObjNode);  
	gFileNameTitleNode.innerHTML = gInitTitle + ""; 
	gFileNameHolder.innerHTML = "";
	gSVGFilename = "";
	gCurrGrabber.setAttribute("visibility", "hidden");
	GX_UpdateMarkers(0, false); 
}

//all event handlers should start with On 
function OnShapeObjectSelection(evt) {
    
    var node = evt.target;
    if(bMove == true)
    	return ; 
  
     if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node)) {  
    	 if(gCurrentObjectSelected)
    	 {
    		 gCurrAttributeList = EL_getObjectAttributes(gCurrentObjectSelected);         
             EL_CompareAndAddtoList(gPrevAttributeList, gCurrAttributeList, gObjectEditList, gCompactEditList);    	 
        	 GX_UpdateObjectProperties(gCurrentObjectSelected, true);
    	 }    	
    	 GX_SetSelection(node, true);
    	 gPrevAttributeList = EL_getObjectAttributes(gCurrentObjectSelected);
    	/* var JQSel =  ".SVG_SHAPE_OBJECT";
    	 $(JQSel).attr("opacity", '0.4');
    	 JQSel = "#" + node.id; 
    	 $(JQSel).attr("opacity", '1.0');*/
    	// evt.stopPropagation(); 
         return;
     }                     
 }
/*
function GX_SetObjectSelection(objNode, bFlag) {
	
	if(!objNode)
		return; 
    var node = objNode; 
    if(!gCurrGrabber)
    	gCurrGrabber = document.getElementById("gripper");
    var x, y, w, h;
    var num;
    var initPoint;   
    
    if(bFlag == false)
    {    	
    	gCurrGrabber.setAttribute("visibility", "hidden");    	
    	gCurrentObjectSelected = 0; 
    	return; 
    }
    if (!gsvgRootNode)
        gsvgRootNode = document.getElementById('SVGContainer');
    gCurrGrabber.setAttribute("visibility", "visible");

    if (node.nodeName == "rect") {
        gCurrSelectedObjectDim = GX_getObjectDim(node);
        num = gCurrSelectedObjectDim.x;                
        num -= 5;
        x = num;

        y = gCurrSelectedObjectDim.y;
        num = gCurrSelectedObjectDim.y;                
        num -= 5;
        y = num;

        w = gCurrSelectedObjectDim.width; 
        num = new Number(w);
        num += 10;
        w = num;

        h = gCurrSelectedObjectDim.height;
        num = new Number(h);
        num += 10;
        h = num;
    }
   else if (node.nodeName == "ellipse") {
    //need to do the same for ellipse as well
        gCurrSelectedObjectDim = GX_getObjectDim(node);
        x = gCurrSelectedObjectDim.x;
        num = new Number(x);
        x = num;


        y = gCurrSelectedObjectDim.y;
        num = new Number(y);
        y = num;


        w = gCurrSelectedObjectDim.width;
        num = new Number(w);
        w = num;

        h = gCurrSelectedObjectDim.height;
        num = new Number(h);
        h = num;

        x = x - w - 5;
        y = y - h - 5;
        w = 2 * w + 10;
        h = 2 * h + 10;              
    }   
    
        gCurrentObjectSelected = node;
        gCurrGrabber.setAttribute("x", x);
        gCurrGrabber.setAttribute("y", y);
        gCurrGrabber.setAttribute("width", w);
        gCurrGrabber.setAttribute("height", h);
        gGrabberDim = GX_getObjectDim(gCurrGrabber);
       
        
        return;
    
}

*/

function GX_SetSelection(objNode, bFlag) {
    var node = objNode; 
    gCurrGrabber = document.getElementById("gripper");
    var x, y, w, h;
    var num;
    var initPoint; 
    if (!gsvgRootNode)
    {
    	 gsvgRootNode = document.getElementById('SVGContainer');
    	 num = gsvgRootNode.getAttribute('x'); 
    	 num = num.substring(0, num.length-2); 
    	 gMaxLeft = new Number(num); 
    	 
    	 num = gsvgRootNode.getAttribute('y'); 
    	 num = num.substring(0, num.length-2); 
    	 gMaxTop = new Number(num);             	 
    	 
    	 num = gsvgRootNode.getAttribute('width'); 
    	 num = num.substring(0, num.length-2); 
    	 gMaxRight = new Number(num);
    	 gMaxRight = gMaxLeft + gMaxRight;             	 
    	 
    	 num = gsvgRootNode.getAttribute('height'); 
    	 num = num.substring(0, num.length-2); 
    	 gMaxBottom = new Number(num);
    	 gMaxBottom = gMaxBottom + gMaxTop;
    	 //gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
    }
       
    
    if(bFlag == false)
    {
    	gCurrGrabber.setAttribute("visibility", "hidden");
    	gCurrGrabber.setAttribute("pointer-events", "none"); 
    	gCurrentObjectSelected = 0; 
    	GX_UpdateMarkers(0, false); 
    	bMove = false;
    	bResize = false; 
    	return ; 
    }
    gCurrGrabber.setAttribute("visibility", "visible");
    gCurrGrabber.setAttribute("pointer-events", "visible"); 
    if (node.nodeName == "rect") {
        gCurrSelectedObjectDim = GX_getObjectDim(node);
        num = gCurrSelectedObjectDim.x;                
        num -= 5;
        x = num;

        y = gCurrSelectedObjectDim.y;
        num = gCurrSelectedObjectDim.y;                
        num -= 5;
        y = num;

        w = gCurrSelectedObjectDim.width; 
        num = new Number(w);
        num += 10;
        w = num;

        h = gCurrSelectedObjectDim.height;
        num = new Number(h);
        num += 10;
        h = num;
    }
   else if (node.nodeName == "ellipse") {
    //need to do the same for ellipse as well
        gCurrSelectedObjectDim = GX_getObjectDim(node);
        x = gCurrSelectedObjectDim.x;
        num = new Number(x);
        x = num;


        y = gCurrSelectedObjectDim.y;
        num = new Number(y);
        y = num;


        w = gCurrSelectedObjectDim.width;
        num = new Number(w);
        w = num;

        h = gCurrSelectedObjectDim.height;
        num = new Number(h);
        h = num;

        x = x - w - 5;
        y = y - h - 5;
        w = 2 * w + 10;
        h = 2 * h + 10;

                  
    }
    
        gCurrentObjectSelected = node;
        gCurrGrabber.setAttribute("x", x);
        gCurrGrabber.setAttribute("y", y);
        gCurrGrabber.setAttribute("width", w);
        gCurrGrabber.setAttribute("height", h);
        gGrabberDim = GX_getObjectDim(gCurrGrabber); 
        gCurrSelectedObjectDim = GX_getObjectDim(gCurrentObjectSelected);
        GX_UpdateMarkers(gGrabberDim, true);
        return;
    
}
/*
function GX_getInitObjDim(ObjNode) {

    var mypoint = new sDimension();
    var x, y, width, height; 
    if (ObjNode.nodeName == 'rect') {
        x = ObjNode.getAttribute('x');
        y = ObjNode.getAttribute('y');
        width = ObjNode.getAttribute('width');
        height = ObjNode.getAttribute('height'); 
        
    }
    else if(ObjNode.nodeName == 'ellipse') {
        x = ObjNode.getAttribute('cx');
        y = ObjNode.getAttribute('cy');
        width = ObjNode.getAttribute('rx');
        height = ObjNode.getAttribute('ry');
    }         
     mypoint.x = new Number(x);
     mypoint.y = new Number(y);
     mypoint.width = new Number(width);
     mypoint.height = new Number(height); 
     return mypoint;
 }
 */

function GX_getObjectDim(ObjNode) {

    var mypoint = new sDimension();
    var x, y, width, height; 
    if (ObjNode.nodeName == 'rect') {
        x = ObjNode.getAttribute('x');
        y = ObjNode.getAttribute('y');
        width = ObjNode.getAttribute('width');
        height = ObjNode.getAttribute('height'); 
        
    }
    else if(ObjNode.nodeName == 'ellipse') {
        x = ObjNode.getAttribute('cx');
        y = ObjNode.getAttribute('cy');
        width = ObjNode.getAttribute('rx');
        height = ObjNode.getAttribute('ry');
    }         
     mypoint.x = new Number(x);
     mypoint.y = new Number(y);
     mypoint.width = new Number(width);
     mypoint.height = new Number(height); 
     return mypoint;
 }

function GX_setObjectDim(ObjNode, newDim) {

    var myheight = newDim.height + 0; 
    var rightLimit, bottomLimit; 
    var x, y, width, height; 
    //check the limits 
    rightLimit = newDim.x + newDim.width; 
    bottomLimit = newDim.y + newDim.height;
    if(newDim.x <= gMaxLeft )
    {
   	 //alert("Left Boundary"); 
   	 return false;
    }
    if(newDim.y <= gMaxTop )
    {
   	 //alert("Top Boundary"); 
   	 return false ;
    }
    
    if(rightLimit >= gMaxRight)
    {
   	 //alert("Right Boundary"); 
   	 return false;
    }
    if(bottomLimit >= gMaxBottom)
    {
   	// alert("Bottom Boundary"); 
   	 return false ;
    }
    if (ObjNode.nodeName == 'rect') {
         ObjNode.setAttribute('x', newDim.x);
         ObjNode.setAttribute('y', newDim.y);
         ObjNode.setAttribute('width', newDim.width);
         ObjNode.setAttribute('height', myheight);              
    }       
    else if(ObjNode.nodeName == 'ellipse') {
   	 var cx = newDim.x; 
   	 var cy = newDim.y; 
   	 var rx = newDim.width/2;
   	 var ry = newDim.height/2; 
   	 cx += rx; 
   	 cy += ry
        ObjNode.setAttribute('cx', cx);
        ObjNode.setAttribute('cy',cy);
        ObjNode.setAttribute('rx', rx);
        ObjNode.setAttribute('ry', ry);
    }
     return true; 
 }


function GX_updateEditAttributes()
{
	var JQSel = ".SVG_SHAPE_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 
		
	$(JQSel).attr('pointer-events','all' ); 
}
function OnSVGParentClick(evt)
{
	var node = evt.target;
	var ID = node.id; 
	if(ID!= 'gridpattern')
		return ; 
	if(gCurrentObjectSelected)
	{
		gCurrAttributeList = EL_getObjectAttributes(gCurrentObjectSelected);         
        EL_CompareAndAddtoList(gPrevAttributeList, gCurrAttributeList, gObjectEditList, gCompactEditList);         
		GX_UpdateObjectProperties(gCurrentObjectSelected, true);
		GX_SetSelection(gCurrentObjectSelected, false);	 
		gCurrDirection = 'NONE'; 
		gsvgRootNode.setAttribute("cursor", "auto");
		var JQSel =  ".SVG_SHAPE_OBJECT";
   	    $(JQSel).attr("opacity", '1.0');
	}
}

function GX_UpdateMarkers(GrabberDim, bShow)
{
	  var markX, markY; 
	  var JQSel = ".CUSTOM_MARKER"; 
	  if(bShow == false)
	  {
		  $(JQSel).attr("visibility", "hidden");
		  return ; 
	  }    		  
	  $(JQSel).attr("visibility", "visible"); 
	  
	 //get the top left coordinate of grabber
	  var origMarkX = new Number(GrabberDim.x); 
	  var origMarkY = new Number(GrabberDim.y); 
	 markX = origMarkX; 
	 markY = origMarkY; 
	 JQSel = "#markerTL";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY); 
	 
	 markX = origMarkX+(GrabberDim.width/2); 
	 markY = origMarkY; 
	 JQSel = "#markerTM";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY); 
	 
	 markX = origMarkX+(GrabberDim.width); 
	 markY = origMarkY; 
	 JQSel = "#markerTR";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY); 
	 
	 markX = origMarkX+(GrabberDim.width); 
	 markY = origMarkY + (GrabberDim.height/2); 
	 JQSel = "#markerMR";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY);
	 
	 markX = origMarkX+(GrabberDim.width); 
	 markY = origMarkY + (GrabberDim.height); 
	 JQSel = "#markerBR";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY);
	 
	 markX = origMarkX+(GrabberDim.width/2); 
	 markY = origMarkY + (GrabberDim.height); 
	 JQSel = "#markerBM";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY);
	 
	 markX = origMarkX; 
	 markY = origMarkY + (GrabberDim.height); 
	 JQSel = "#markerBL";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY);
	 
	 markX = origMarkX; 
	 markY = origMarkY + (GrabberDim.height/2); 
	 JQSel = "#markerML";
	 $(JQSel).attr("cx", markX); 
	 $(JQSel).attr("cy", markY);
	 
	// $(JQSel).attr("visibility", "visible");
}
function OnMarkerMouseMove(evt)
{
	  var markerNode = evt.target; 	  
	  gCurrDirection = markerNode.getAttribute('data-direction'); 
	  if(!gCurrDirection)
		  return ; 
	  gsvgRootNode.setAttribute("cursor", gCurrDirection);     
	  var dim;
}

function OnMarkerMouseDown(evt)
{
	  var markerNode = evt.target; 
	  var ClientX = new Number(evt.clientX - gClientXOffset); 
	  var ClientY =  new Number(evt.clientY- gClientYOffset); 
	  gCurrDirection = markerNode.getAttribute('data-direction'); 
	  if(!gCurrDirection)
		  return ; 
	  gsvgRootNode.setAttribute("cursor", gCurrDirection);    
	
    if(bResize == false) {
        bResize = true;
        gOrigMousePosX = ClientX;
        gOrigMousePosY = ClientY;
        //trap the init dimension of grabber and object
        var dim = GX_getObjectDim(gCurrentObjectSelected);
        gCurrSelObjOrigWidth = dim.width;
        gCurrSelObjOrigHeight = dim.height;

        dim = GX_getObjectDim(gCurrGrabber);
        if (gCurrDirection == "e-resize") {
            gGrabberDim.width = dim.width+20;
            gGrabberDim.height = dim.height;
        }
        else if (gCurrDirection == "w-resize") {
      	  gGrabberDim.x =gGrabberDim.x - 20; 
            gGrabberDim.width = dim.width + 20;
            gGrabberDim.height = dim.height ;
        }
        else if (gCurrDirection == "n-resize") {
      	  gGrabberDim.y =gGrabberDim.y - 20;  
            gGrabberDim.width = dim.width;                 
            gGrabberDim.height = dim.height + 20;                                 
        }
        else if (gCurrDirection == "s-resize") {
            gGrabberDim.width = dim.width;
            gGrabberDim.height = dim.height + 20;
        }
        else if (gCurrDirection == "se-resize") {
            gGrabberDim.width = dim.width+20;
            gGrabberDim.height = dim.height + 20;
        }
        else if (gCurrDirection == "sw-resize") {
      	  gGrabberDim.x -= 20;            	  
            gGrabberDim.width = dim.width+20;
            gGrabberDim.height = dim.height + 20;
        }
        else if (gCurrDirection == "ne-resize") {
      	  gGrabberDim.y -= 20;
            gGrabberDim.width = dim.width+20;
            gGrabberDim.height = dim.height + 20;
        }
        else if (gCurrDirection == "nw-resize") {
      	  gGrabberDim.x -= 20;
      	  gGrabberDim.y -= 20;
            gGrabberDim.width = dim.width + 20;
            gGrabberDim.height = dim.height + 20;
        }
        
        gCurrGrabber.setAttribute("stroke-opacity", "0.4");
        GX_setObjectDim(gCurrGrabber, gGrabberDim);      
        
        gCurrGrabber.setAttribute("pointer-events", "all");   
        
    }       
}

function OnMarkerMouseOut(evt)
{
	 if(bResize == false)
	 {
		  gCurrDirection = 'none'; 
  	  gsvgRootNode.setAttribute("cursor", 'auto');  
	 }
	  
}
function GX_UpdateObjectProperties(objNode, bAsync)
{
	if(!objNode)
		return ;
	
	EL_SaveEditList(gCompactEditList, bAsync); 
	//EL_SaveEditList(gCompactEditList, true);
	
	//update the properties on the head end side 
}


function OnObjectMouseDown(evt) {	
	  
	if(!gCurrentObjectSelected)
		return ;
    //if it is not resize mode then check for 
	gGrabberDim = GX_getObjectDim(gCurrGrabber); 
    gCurrSelectedObjectDim = GX_getObjectDim(gCurrentObjectSelected);
    
    if(bResize == false)
    {
    	if (bMove == false) {
            gsvgRootNode.setAttribute("cursor", "move");           
            gOrigMousePosX = -1;
            gOrigMousePosY = -1;                
            bMove = true;    
         
        }
        else {
            gsvgRootNode.setAttribute("cursor", "auto");
            bMove = false;                 
        }            
    }
    else
    {
    	gsvgRootNode.setAttribute("cursor", "auto");
        evt.target.setAttribute("pointer-events", "all");
        bResize = false;
        gCurrDirection = 'none';
        SetSelection(gCurrentObjectSelected, true);
        gCurrGrabber.setAttribute("stroke-opacity", "1.0");    
       
    }
    
}


/*
function OnObjectMove(evt) {

    //trap new coordiantes and store the relative mouse coordinaes
    var newX, newY;
    if (bMove != true) {
        return;
    }
    if (!gCurrentObjectSelected)
        return;
    if ((gOrigMousePosX == -1) || (gOrigMousePosY == -1)) {
        gOrigMousePosX = evt.clientX;
        gOrigMousePosY = evt.clientY;                
    }
    newX = new Number(evt.clientX);
    newY = new Number(evt.clientY);
    newX = newX - gOrigMousePosX;
    newY = newY - gOrigMousePosY;   

  
    var newGrabX = gGrabberDim.x + newX;
    var newGrabY = gGrabberDim.y + newY;            
    GX_MoveObject(gCurrGrabber, newGrabX, newGrabY);
  
    var newObjX = gCurrSelectedObjectDim.x + newX;
    var newObjY = gCurrSelectedObjectDim.y + newY;
    GX_MoveObject(gCurrentObjectSelected, newObjX, newObjY);
    //now move the object and the grabber by that much
}

*/

function OnObjectMove(evt) {

    //trap new coordiantes and store the relative mouse coordinaes
    var relX, relY;
    var retVal;
    var ClientX, ClientY; 
    ClientX = new Number(evt.clientX - gClientXOffset); 
    ClientY = new Number(evt.clientY- gClientYOffset);
    var newObjDim = new sDimension(); 
    if (bMove == true){
    	if (!gCurrentObjectSelected)
            return;
        if ((gOrigMousePosX == -1) || (gOrigMousePosY == -1)) {
            gOrigMousePosX = ClientX;
            gOrigMousePosY = ClientY;                
        }
        relX = new Number(ClientX);
        relY = new Number(ClientY);
        relX = relX - gOrigMousePosX;
        relY = relY - gOrigMousePosY;
        newObjDim.x = gGrabberDim.x + relX;
        newObjDim.y = gGrabberDim.y + relY;   
        newObjDim.width = gGrabberDim.width; 
        newObjDim.height = gGrabberDim.height;                  
        retVal = GX_setObjectDim(gCurrGrabber,newObjDim); 
        if(retVal == false)
        	return ; 
       
        GX_UpdateMarkers(newObjDim, true);       
        newObjDim.x = newObjDim.x+5; 
        newObjDim.y = newObjDim.y+5 
        newObjDim.width = newObjDim.width-5 ;
        newObjDim.height = newObjDim.height-5;                 
        retVal = GX_setObjectDim(gCurrentObjectSelected,newObjDim);
        if(retVal == false)
        	return ;                     	
    }
    else
    {
    	var newDim; 
    	if (bResize == true) {
            //node.setAttribute("pointer-events", "all");
            gsvgRootNode.setAttribute("cursor", gCurrDirection);
            var relX, relY;
            relX = new Number(ClientX - gOrigMousePosX);
            relY = new Number(ClientY - gOrigMousePosY);
			
			var newGrabberDim =  new sDimension(); 
			var newObjDim = new sDimension(); 
			
            if (gCurrDirection == 'e-resize') {
                //resize the grabber first
                newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width + relX;
                newGrabberDim.height = gGrabberDim.height; 
            }
            else if (gCurrDirection == 'w-resize') {
                    //resize the grabber first
                    newGrabberDim.x = gGrabberDim.x+relX; 
                    newGrabberDim.y = gGrabberDim.y; 
                    newGrabberDim.width = gGrabberDim.width - relX;
                    newGrabberDim.height = gGrabberDim.height; 
            }
            else if (gCurrDirection == 'n-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y+relY; 
                newGrabberDim.width = gGrabberDim.width ;      
                newGrabberDim.height = gGrabberDim.height - relY;       
            }
            else if (gCurrDirection == 's-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width ;      
                newGrabberDim.height = gGrabberDim.height + relY;       
            }
            else if (gCurrDirection == 'se-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width + relX;      
                newGrabberDim.height = gGrabberDim.height +  relY;  
            }
            else if (gCurrDirection == 'sw-resize') {
            	newGrabberDim.x = gGrabberDim.x +relX; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width - relX;      
                newGrabberDim.height = gGrabberDim.height +  relY;  
            }
            else if (gCurrDirection == 'ne-resize') {
            	newGrabberDim.x = gGrabberDim.x ; 
                newGrabberDim.y = gGrabberDim.y +relY; 
                newGrabberDim.width = gGrabberDim.width + relX;      
                newGrabberDim.height = gGrabberDim.height -  relY;  
            }
            else if (gCurrDirection == 'nw-resize') {
            	newGrabberDim.x = gGrabberDim.x +relX; 
                newGrabberDim.y = gGrabberDim.y +relY; 
                newGrabberDim.width = gGrabberDim.width - relX;      
                newGrabberDim.height = gGrabberDim.height -  relY;  
            }
				if(gCurrDirection != 'none')
				{
					newObjDim.x = newGrabberDim.x+5; 
                    newObjDim.y = newGrabberDim.y+5 
                    newObjDim.width = newGrabberDim.width-5 ;
                    newObjDim.height = newGrabberDim.height-5; 
                    
					retVal = GX_setObjectDim(gCurrGrabber,newGrabberDim);   
					if(retVal == false)
	                	return ; 
                    GX_UpdateMarkers(newGrabberDim, true);           
                    retVal =GX_setObjectDim(gCurrentObjectSelected,newObjDim);
                    if(retVal == false)
                    	return ; 
			}
            
        }
    }
    
}

function OnObjectMouseOut(evt)
{
	if(bResize == true)
		gsvgRootNode.setAttribute("cursor", "auto");
}
function GX_MenuChangeEditAction(actionType)
{
	//if some object selected then apply undo/redo with object id else
	 //apply with no filter 
	var objID = 0;
	var retVal; 
	if(gCurrentObjectSelected)
		objID = gCurrentObjectSelected.id;	
	if(actionType == 'UNDO')
	{
		retVal = EL_Undo(gObjectEditList, objID, gCompactEditList);
		if(retVal)
			GX_SetSelection(gCurrentObjectSelected, true);
	}
	else if(actionType == 'REDO')
	{
		retVal = EL_Redo(gObjectEditList, objID, gCompactEditList);	
		if(retVal)
			GX_SetSelection(gCurrentObjectSelected, true);
	}
}

function GX_MoveObjectZIndex(objNode, Direction)
{
	var cloneNode;
	var currNode; 
	var beforeNode; 
	var parentNode = objNode.parentNode;
	var prevNode; 
	
	//the current node needs to be moved down 
	if(Direction == 'FORWARD')
	{
		beforeNode = objNode.nextSibling.nextSibling;	
		prevNode = objNode.nextSibling; 
	}
	else if(Direction == 'BACKWARD')
	{
		beforeNode = objNode.previousSibling;
		if(!beforeNode)
			return; 
		prevNode = objNode.nextSibling; 
		//means this is a case of first node in the DOM		
	}		
	else if(Direction == 'TOP')
	{
		beforeNode = 0; 	
		prevNode = objNode.nextSibling; 
	}
	else if(Direction == 'BOTTOM')
	{
		beforeNode = parentNode.firstElementChild; 	
		prevNode = objNode.nextSibling; 
	}
	var objParam =  new sObjAttrParam();	
	objParam.ID = objNode.id;
	objParam.type = 'NODEMOVE'; 
	objParam.name = 'BEFORE';
	if(beforeNode)
		objParam.currValue = beforeNode.id; 
	else
		objParam.currValue = 0; 
	
	if(prevNode)
		objParam.prevValue = prevNode.id;
	else
		objParam.prevValue = 0; 		
		
	EL_AddToEditList(gObjectEditList, gCompactEditList, objParam);
	GX_MoveObjectNode(objNode.id, objParam.currValue); 	
	
}

function GX_MoveObjectNode(currobjID, beforeID)
{
	var currNode, beforeNode; 
	currNode = document.getElementById(currobjID);
	if(!currNode)
	{
		Debug_Message("Curr Node Null"); 
		return ; 
	}
	var parentNode = currNode.parentNode;
	var clonedNode = currNode.cloneNode(true);	
	beforeNode = document.getElementById(beforeID);
	
	parentNode.removeChild(currNode); 
	var retNode = parentNode.insertBefore(clonedNode, beforeNode);		
	GX_SetSelection(retNode, true);
	GXRDE_MoveZIndex(currobjID, beforeID);
}
