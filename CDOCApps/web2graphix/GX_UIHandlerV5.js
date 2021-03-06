
var gAppVersion = "1.0"; 
sDimension.prototype.x = new Number(0);
sDimension.prototype.y = new Number(0);
sDimension.prototype.width = new Number(0);
sDimension.prototype.height = new Number(0);
sDimension.prototype.centerX =  new Number(0); 
sDimension.prototype.centerY =  new Number(0); 

sDimension.prototype.minXIndex = -1; 
sDimension.prototype.minYIndex = -1;
sDimension.prototype.maxYIndex  = -1;
sDimension.prototype.maxXIndex = -1; 
//added to tap in the rotation params as well 
sDimension.prototype.rotate = 0; 
sDimension.prototype.rotCentreX = 0; 
sDimension.prototype.rotCentreY = 0;
//scaling param incase of transform property
sDimension.prototype.scaleX = 0; 
sDimension.prototype.scaleY = 0; 
sDimension.prototype.radius = 0;
function sDimension() {
    sDimension.prototype.x = new Number(0);
    sDimension.prototype.y = new Number(0);
    sDimension.prototype.width = new Number(0);
    sDimension.prototype.height = new Number(0);
    
    //to take account of path specific nuances adding these indices
    sDimension.prototype.minXIndex = -1; 
    sDimension.prototype.minYIndex = -1;
    sDimension.prototype.maxYIndex  = -1;
    sDimension.prototype.maxXIndex = -1; 
    
    sDimension.prototype.rotate = 0; 
    sDimension.prototype.rotCentreX = 0; 
    sDimension.prototype.rotCentreY = 0;     
    sDimension.prototype.centerX =  new Number(0); 
    sDimension.prototype.centerY =  new Number(0);       
    sDimension.prototype.scaleX = 0; 
    sDimension.prototype.scaleY = 0; 
    sDimension.prototype.radius = 0; //for rectangles corner  
}
var gTreeWidgetID = 'node_panel'; 
var gTreeNodeID = 'node_container'; 
var gSVGFileOpenDlg = "svgfileopendlg"; 
var gSVGFileNameDlgID = 'newSVGFileNameDlg'; 
var gSVGExportDlgID = 'exportDlg'; 
var gSVGImportListDlgID = 'importListDlg'; 
var gSVGImportList = 0; 
var gSVGGroupNameDlgID ='newGroupNameDlg'; 
//var gSVGFileDeleteDlg = "svgfiledeletedlg"; 
var gSVGDimensionDlg = 'svgdimensiondlg'; 
var gImageNameDlgID = "newImageDlg"; 
var gCanvasNode = 0; 
var gImportShapeFileName = ""; 
var gPolyInputDlg = 'polygonipdlg';
var gFileNameTitleNode = 0;
var gInitTitle = "Web2.0 Graphics Editor: "; 
var gSVGContainerNode = 0; 
var gFileNameHolder = 0; 
var gSVGDimInfoHolder=0; 
var gResizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];
var gpathSegIndex = -1;
var gZoomFactor = new Number(1.0); 
var gInvZoomFactor = new Number(1.0); 
var gOriginalCanvasDim =  new sDimension(); 
var gCurrentCanvasDim = 0; 
var gPanX = new Number(0); 
var gPanY = new Number(0); 
var gPanDelta = new Number(20); 
var gCurrentObjectSelected=0; 
var gCurrentObjectType = 0; 
var gCurrSelectedObjectDim = new sDimension();
var gGrabberDim = new sDimension(); 
var gRegionLimit = new sDimension(); 
var gOrigMousePosX, gOrigMousePosY;
var gsvgRootNode = 0;
var gCursorXOffset = 0;//8;
var gCursorYOffset = 0;// 5;
var bMove = false;
var bDraw = false;
var gCurrGrabber = 0;
var gCurrGripperSel = '#sel_gripper'; 
var gGripperTextSpanNode =''; 
var bResize = false;
var bMarkerMove = false; 
var gIndicatorPath = []; 
var gIndicatorPathNode =0; 
var gFreeDrawPathData=""; 
var gFreeDrawStarted = false; 
var gErasedPointArray = [];
var bEraseMode = false; 
var bEraseStarted = false; 
var gPrevX ; //to be used for free hand drawing 
var gPrevY;
var gEraseObject1 =0; 
var gEraseObject2 =0; 
var gEraseStartIndex = -1; 
var gEraseEndIndex = -1; 
var bEraseMultiple =  false;
var gCurrentObjectDim ; 
var gMouseMoveCounter=0; 
var bMarkerSelected=false; 
var gCurrentMarkerNode= 0;
var gTextEditorNode = 0;  
var gGradientList = [];
var gInitMousePoint = 0;
var bGradPointMove = false;
var gLineNode = 0;
var gInitLinePoint = 0;
var gInitMarkerPoint = 0;
var gMarkerNode;
var gGradSVGNode = 0;
var gGradWidth, gGradHeight; 
var gInitialRadius = 0;
var gCircleNode = 0; 
var gCenterNode = 0; 
var gFocusNode=0; 
var gInitFocusPoint=0; 
var gWidgetHeight = '22'; 
var gInitFillColor = 0; 
var gInitFillValue = 0; 
var bNewObjectAdding = false; 
var bFileLoaded =  false; 
var gControlKey = false; 
var gttHeight = 30; 
var gTooltipOffset = new sPoint(-5, -30 ); 
var gCurrTooltipPos = new sPoint(); 
var gTooltipTheme = 'black'; 
var gTooltipSrc=0; 
var bScrollPrevent = false; 
var gSVGContainerbordercol = '#222222';
var gUsername = ''; 
var gShowTooltip =  false; 
var gOrigPointerPos = new sPoint();
var gShowGrid =  true; 
var bPointerMove = false; 
var gOrigFreedrawPathVal = 0; 
//var gImageDlg 	= 'imageLoadDlg';
var gCurrentMarkerNode = 0; 
var gObjectList = 0; 
var gObjectListInRoI = 0; 
var gCurrentTabIndex = 0; 
var gBaseMarkerNode = 0; 
var gFreeDrawMode = 0; //DRAW_MODE,ERASE_MODE
var gbAlignDimension = true; 
var gCurrfName = 0; 
var gCurrObjID = 0; 
var nAutoSaveMsg = 9; 
var MAX_AUTO_SAVE_MSG =  5; 

sAttributeStructure.prototype.strokewidth = "";
function sAttributeStructure() {
	sAttributeStructure.prototype.strokewidth = "";
}
var gOrigAttributeStruct = new sAttributeStructure(); 

//var resizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];
var gCurrDirection = 'NONE'; 

var gnPolygonSides = 5;
var gPolygonLength = 50; 
var gNewObjectID =-1; 

var gPrevAttributeList = []; 
var gCurrAttributeList =[]; 
//var gObjectEditList = [];
var gObjectEditList = [];
var gCompactEditList = []; 
var gSVGFilename = 0; 
var gClientYOffset = 0;
var gClientXOffset = 0; 
var gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
var gPreviousTreeNode =0; 
var gCurrentTreeNode = 0;
var gPrevTreeItemSel = 0;
var gCurrentTreeItemSel=0; 
var gOpacityUnSelect = '0.2';
var gCurrLayerID=0; 
var gCurrLayerNode=0; 
var gCurrLayerTranslateValues = 0;
var gButtonWidth = '24'; 
var gButtonHeight='20'; 
var gDDLHeight = '20' ; //'26px'

var gEditWidth = "35";
var gObjectEditMode = 'OBJECT_MODE';//'PROPERTIES_MODE';
var gViewMode = 'EDITOR_MODE' ; //PREVIEW_MODE
var gSnapToGrid =  false; 
var gSnapRes = new Number(10);
var gbMultiSelection = false; 
var gEnableMultiSelection = false; 
var gMultiNodeArray = []; 
var gMultiSelColor1 = 'red'; 
var gMultiSelColor2 = 'green'; 
var gObjectIDToCopy = 0; 
var gObjectTolerance = new Number(20); 
var gPathDataArray =[]; 
var gTransfArray=[]; 
var gClosePath = false; 

var gTE_ButtonWidth = '20'; 
var gTE_ButtonHeight='18'; 
var gTE_DDLHeight = '24' ; //'26px'
var gTE_EditWidth = "35"
var gGroupList=[]; 
var gbNewGradObject =  false; 
var gDivPathMarkerSel = 0; 
//marker related 
var gMarkerType = []; 
 gMarkerType['Start'] = 'marker-start'; 
 gMarkerType['Middle'] = 'marker-mid'; 
 gMarkerType['End'] = 'marker-end'; 
 
 var gTiptextArr = []; 
 gTiptextArr['PATH_SELECTION_TEXT'] = 'Click on the <b>Edit Points</b> button <br> to edit path'; 
 gTiptextArr['OBJECT_SELECTION_TEXT'] = 'Go to <b>Properties</b> tab <br>to modify Object properties'; 
 gTiptextArr['REDRAW_TEXT'] = 'Click on <b>Redraw</b> button to draw again'; 
 gTiptextArr['ERASE_TEXT'] = 'Click here to quit Erase mode'; 
 gTiptextArr['ADDPOINT_TEXT'] = 'To add more points </br>' + 
	  '<ul><li>Select a point</li><li>Click on <b>Add Point</b> button</li> </ul> '; 
/*var ClientX = new Number(0);
var ClientY = new Number(0);
var newObjDim = new sDimension();
*/
//gradient related stuff 
var gGradientObj = 0;
sPoint.prototype.x = 0; 
sPoint.prototype.y = 0;
function sPoint (){
    sPoint.prototype.x = 0; 
    sPoint.prototype.y = 0;
}

sGradAnimProp.prototype.bAnimate =  false; 
sGradAnimProp.prototype.fromValue = 0; 
sGradAnimProp.prototype.toValue = 0; 
sGradAnimProp.prototype.duration = 0; 

function sGradAnimProp(){	
	sGradAnimProp.prototype.bAnimate =  false; 
	sGradAnimProp.prototype.fromValue = 0; 
	sGradAnimProp.prototype.toValue = 0; 
	sGradAnimProp.prototype.duration = 0; 
}

sStopProp.prototype.bFlag = false; 
sStopProp.prototype.offset = 0; 
sStopProp.prototype.color = 0;
function sStopProp() {
    sStopProp.prototype.bFlag = false; 
    sStopProp.prototype.offset = 0; 
    sStopProp.prototype.color = 0; 
}

sGradientProp.prototype.GradMode = 'none';        
sGradientProp.prototype.LGGradStart=0; 
sGradientProp.prototype.LGGradStop=0; 
sGradientProp.prototype.spreadMethod = 'pad'; 
sGradientProp.prototype.numStops = 0;
sGradientProp.prototype.StopParam = [];
sGradientProp.prototype.Title = 'Default';  

sGradientProp.prototype.center =  new sPoint(); 
sGradientProp.prototype.radius =  '100%';
sGradientProp.prototype.focus =  new sPoint(); 
sGradientProp.prototype.gradAnimList = [];//  new sGradAnimProp(); 

function sGradientProp(){
    sGradientProp.prototype.GradMode = 'none';            
    sGradientProp.prototype.LGGradStart = new sPoint(); 
    sGradientProp.prototype.LGGradStop  = new sPoint(); 
    sGradientProp.prototype.spreadMethod = 'pad';
    sGradientProp.prototype.StopParam = [];
    sGradientProp.prototype.Title = 'Default';  
    
    sGradientProp.prototype.center =  new sPoint(); 
    sGradientProp.prototype.radius =  '100%';
    sGradientProp.prototype.focus =  new sPoint(); 
    
    //pre-defined list of animation attributes with index as attribute names 
    sGradientProp.prototype.gradAnimList['x1'] = new sGradAnimProp(); 
    sGradientProp.prototype.gradAnimList['y1'] = new sGradAnimProp();  
    sGradientProp.prototype.gradAnimList['x2'] = new sGradAnimProp(); 
    sGradientProp.prototype.gradAnimList['y2'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['stop-color0'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['stop-color1'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['stop-color2'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['stop-color3'] = new sGradAnimProp();
    
    sGradientProp.prototype.gradAnimList['cx'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['cy'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['r'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['fx'] = new sGradAnimProp();
    sGradientProp.prototype.gradAnimList['fy'] = new sGradAnimProp();
    
}        
sGradientWidget.prototype.GradResourceID = 0;
sGradientWidget.prototype.GradResourceNode=0;      
sGradientWidget.prototype.GradParam=0;
sGradientWidget.prototype.GradWidgetID=0;

sGradientWidget.prototype.OnGradEditBoxHdlr = function(value, wdgtNode) {
    var wdgtID = wdgtNode.id;            
    if (!this.GradResourceNode)
        return;

     switch (wdgtID) {       
        case "stop0_offset_slider":
            var stopnodeid = this.GradResourceNode.id + '_STOP0';
            var stopnode = document.getElementById(stopnodeid);
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;
        case "stop1_offset_slider":
            var stopnodeid = this.GradResourceNode.id + '_STOP1';
            var stopnode = document.getElementById(stopnodeid);
            //get the minimum value from other slider 
            var minValue  = WAL_getSliderValue('stop0_offset_slider'); 
            if(minValue >  value){
            	WAL_setSliderValue('stop0_offset_slider', minValue); 
            	Debug_Message('Color-2 offset should be more than Color-1 offset');
            	return ; 
            }            
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;
        
        
        default:
            break;

    }

};

sGradientWidget.prototype.UpdateUI = function(gradProp) {

	 var rectNode = document.getElementById('LINEAR_GRAD_PREVIEW_RECTANGLE');
     
     var prevNode;  
     if (gradProp.GradMode == 'LINEAR') {   
    	prevNode = document.getElementById('LINEAR_GRAD_PREVIEW_RECTANGLE');
    	gGradWidth = new Number(rectNode.getAttribute('width'));
        gGradHeight = new Number(rectNode.getAttribute('height'));
        var objProp =  gradProp.gradAnimList['x1']; 
        //linear specific indicator UIs\
        var indNode = document.getElementById('LG_INDICATOR_LINE');
        var markerNode = document.getElementById('LG_START_POINT');
        var value = gradProp.LGGradStart.x; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradWidth)/100); 
       
        indNode.setAttribute('x1',value );         
        var x = new Number(value); 
       
        //markerNode.setAttribute('cx',value+5 );
        
        value = gradProp.LGGradStart.y; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradHeight)/100);        
        var y = new Number(value);      
        indNode.setAttribute('y1',value ); 
       // markerNode.setAttribute('cy',value+5 );
        var JQSel = '#LG_START_POINT'; 
       // $(JQSel).css({left: x +'px', top: y + 'px'}); 
        //END_POINT
        this.SetGradMarkerPosition('LG_START_POINT', x,y);
       
        //markerNode = document.getElementById('END_POINT');
        var value = gradProp.LGGradStop.x; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradWidth)/100); 
       
        indNode.setAttribute('x2',value ); 
        var x2 =  new Number(value); 
       // markerNode.setAttribute('cx',(value-5) );
        
        value = gradProp.LGGradStop.y; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradHeight)/100); 
       // indNode.setAttribute('y2',value+'' ); 
       // markerNode.setAttribute('cy',(value-5)+'' ); 
        indNode.setAttribute('y2',value ); 
        var y2 = new Number(value); 
        var JQSel = '#LG_END_POINT'; 
       // $(JQSel).css({left: x2 +'px', top: y2 + 'px'});
        this.SetGradMarkerPosition('LG_END_POINT', x2,y2);
      
       // markerNode.setAttribute('cy',(value-5) );
        
    }
    else if (gradProp.GradMode == 'RADIAL') {
    	prevNode = document.getElementById('RG_CIRCLE');
    	//var myDim = prevNode.getBBox();
    	var width = prevNode.getAttribute('r');  
    	width = new Number(width*2) ; 
    	var height = width;    	
    	gGradWidth = width;
        gGradHeight = height;
        var focusPt = new sPoint();
        focusPt.x =  new Number (gradProp.focus.x.substring(0,gradProp.focus.x.length-1 )); 
        focusPt.y =  new Number (gradProp.focus.y.substring(0,gradProp.focus.y.length-1 )); 
        with(Math){
        	focusPt.x = round((focusPt.x * gGradWidth)/100); 
        	focusPt.y = round((focusPt.y * gGradHeight)/100); 
        }       
        this.SetGradMarkerPosition('RG_FOCUS_POINT', focusPt.x, focusPt.y);
        
    }    
        
       // var titlenode = document.getElementById('gradTitleIP'); 
    	//titlenode.setAttribute('value',gradProp.Title); 
    	var JQSel = "#" + 'gradTitleIP';    
    	/*if(gbNewGradObject == false)
    		$(JQSel).val(gradProp.Title);
    	else
    		$(JQSel).val('');
    		*/
    	$(JQSel).val(gradProp.Title);
        var index = -1;
        var spreadValueDisplay = ['pad', 'reflect', 'repeat'];
        for (var j = 0; j < 3; j++) {
            if (gradProp.spreadMethod == spreadValueDisplay[j]) {
                index = j;
                break;
            }
        }        
        var gradurl = 'url(#' + this.GradResourceID + ')';
        prevNode.setAttribute('fill', gradurl);

        for (var j = 0; j <2; j++) {
            var index = j;
            var stopnodeid = this.GradResourceNode.id + '_STOP' + index;
            var stopNode = document.getElementById(stopnodeid);
            if (gradProp.StopParam[j].bFlag == true) {
                var btnID = 'stop' + index + '_color';
                var btnNode = document.getElementById(btnID);
                btnNode.style.backgroundColor = gradProp.StopParam[j].color;
                WAL_disableWidget(btnID, 'button', false, false);
                
                btnID = 'stop' + index + '_offset_slider';
                var offset = gradProp.StopParam[j].offset;
                offset = offset.substring(0, offset.length - 1);
                WAL_setSliderValue(btnID, offset);               
            }
            
            //now get the stopanimation param here 
            objProp =  gradProp.gradAnimList['stop-color'+index]; 
           /* if(objProp)
            {
            	WAL_setCheckBoxValue('animateStop_col', objProp.bAnimate);             	
            	var durIPID= 'durStopColIP'; 
                WAL_setNumberInputValue(durIPID, objProp.duration, false);
            }          
            else
            	WAL_setCheckBoxValue('animateStop_col', false);
            	*/
            
        }
    
};

sGradientWidget.prototype.SetGradMarkerPosition =  function(ID, x, y){
	 
	var newX = new Number(x); 	
	var newY =  new Number(y); 	
	var pos = $('#LinearGradpreview').position();	
	var left = new Number(pos.left); 
	var top  = new Number(pos.top); 
	//newX += left; 
	//newY += top; 
	var markerDim = $('#' + ID).width(); //assume this will be a square;
	markerDim = new Number(markerDim/2); 
	if(ID == 'LG_START_POINT'){
		var JQSel = '#LG_START_POINT'; 
		var xOff = new Number(0) ; 
		var yOff = new Number(0);		
		newX = newX + left - xOff - markerDim  ; 
		newY = newY + top  - yOff - markerDim  ;
		$(JQSel).css({left: newX + 'px', top: newY + 'px'}); 
	}
	else if(ID == 'LG_END_POINT'){
		var JQSel = '#LG_END_POINT'; 
		var xOff = new Number(2) ; 
		var yOff = new Number(2); 
		newX = newX + left - xOff - markerDim  ; 
		newY = newY + top  - yOff - markerDim  ;
		$(JQSel).css({left: newX + 'px', top: newY + 'px'}); 
	}
	else if(ID == 'RG_FOCUS_POINT'){
		pos = $('#RadialGradPreview').position(); 
		with(Math){
			left = pos.left; 
			top = pos.top; 
			newX += left; 
			newY += top;
		}
		var xOff = new Number(0) ; 
		var yOff = new Number(0); 
		newX += xOff; 
		newY += yOff; 
		JQSel = '#RG_FOCUS_POINT';
		$(JQSel).css({left: newX + 'px', top: newY + 'px'}); 
	}
}

sGradientWidget.prototype.OnGradCheckBoxHdlr = function(event) {

    var CBID = event.target.id;
    var state = event.args.checked;
    var index;
    var stopnodeid;
    
   
   
   /*  
    if(CBID == 'animateStop_col')
    {
    	if(state ==  true)
    	{
    		WAL_disableWidget('durStopColIP', 'data-jqxNumberInput', false, false);
    		WAL_setNumberInputValue("durStopColIP", 0.5, false);
    	}    		
    	else
    	{
    		WAL_disableWidget('durStopColIP', 'data-jqxNumberInput', false, true);
    		WAL_setNumberInputValue("durStopColIP", 0.0, false);
    	}    		
    }  
    */        
    
     if (state == true) {
        stopnodeid = this.GradResourceNode.id + '_STOP' + index;
        var stopNode = document.getElementById(stopnodeid);
        stopNode.setAttribute('offset', '100%');
        stopNode.setAttribute('stop-color', 'black');
        GX_SetObjectAttribute(stopNode, 'offset', '100%', true, false); 
        GX_SetObjectAttribute(stopNode, 'stop-color', 'black', true, false); 
        
        //update the button color
        var btnID = 'stop' + index + '_color';
        var btnNode = document.getElementById(btnID);
        btnNode.style.backgroundColor = 'black';
        WAL_disableWidget(btnID, 'button', false, false);
        btnID = 'stop' + index + '_Offset';
        WAL_disableWidget(btnID, 'data-jqxNumberInput', false, false);
        WAL_setNumberInputValue(btnID, '100', false); 
    }
   
};

sGradientWidget.prototype.OnGradSpreadDDLHandler = function(Node, value) {

    var nodeid = Node.id;
    if (nodeid == 'gradSpreadDDL') {
        GX_SetObjectAttribute(this.GradResourceNode, 'spreadMethod', value, true, false);
    }
};

sGradientWidget.prototype.OnGradColorButtonHandler = function(event) {

    var btnID = event.target.id;
    var stopnodeid='';
   var attrName = 'stop-color'; 
   var bStopAnimColor = false; 
   var initColVal; 
    switch(btnID)
    {    
    case 'stop0_color':
    	stopnodeid = this.GradResourceNode.id + '_STOP' + '0';
    	break;
    case 'stop1_color':
    	stopnodeid = this.GradResourceNode.id + '_STOP' + '1';
    	break;
       	
      	    	
    default:
    	return ; 
    	break;     	
    }   
    var pos = $('#gradientDlg').position();   	 
	var width = $('#gradientDlg').width(); 
	pos.left -= (width+80); 
    if(stopnodeid)   
    {
    	 var tgtNode = document.getElementById(stopnodeid);    
    	 initColVal = tgtNode.getAttribute('stop-color');
    	 if (initColVal == 'none')
    	     initColVal = 'grey'; 
    	 gPrevAttributeList = EL_getObjectAttributes(tgtNode);   	 
    	 WAL_showColorPickerWidgetAtPos('gradcolorpickwidget', '',btnID,  pos.left,pos.top, attrName, initColVal, tgtNode.id);    	
    	 
    }
   else if(bStopAnimColor == true)
    {
	   	 var tgtNode = document.getElementById(btnID);    
	   	 initColVal = tgtNode.style.backgroundColor;
	   	 if (initColVal == 'none')
	   	     initColVal = 'grey'; 
	   	// gPrevAttributeList = EL_getObjectAttributes(tgtNode);
	   	
	   	WAL_showColorPickerWidgetAtPos('gradcolorpickwidget', '',btnID, pos.left,pos.top, attrName, initColVal, tgtNode.id);
    }
   
   
};



sGradientWidget.prototype.getGradientAnimNode = function(gradType, attributeName)
{
	//generate proper ID 
	var animID = 0; 
	var gradID =  this.GradResourceNode.id;
	if(gradType == 'LG')
	{		
		animID = gradID + '_' + attributeName.toUpperCase(); 	
	}
	else if(gradType == 'RG')
	{
		animID = gradID + '_' + attributeName.toUpperCase(); 	
	}
	else if( (gradType == 'STOP0') || (gradType == 'STOP1') || (gradType == 'STOP2') || (gradType == 'STOP3') )
	{
		var attrStr = attributeName.replace('-', '_'); 
		animID = gradID + '_' + gradType + '_' + attrStr.toUpperCase();		 		
	}
		
		var animnode = document.getElementById(animID ); 
		if(!animnode)
			return 0; 		
		//if found then populate the from, to attribute values 
		var gradAnimProp =  new sGradAnimProp(); 
		gradAnimProp.bAnimate =  true; 
		gradAnimProp.fromValue = animnode.getAttribute('from'); 
		gradAnimProp.toValue = animnode.getAttribute('to'); 
		gradAnimProp.duration = animnode.getAttribute('dur');
		gradAnimProp.duration = gradAnimProp.duration.substring(0, gradAnimProp.duration.length-1); 
		
		return gradAnimProp; 		
}

sGradientWidget.prototype.getGradientProperty = function() {
    var gradProp = new sGradientProp();
    if (!this.GradResourceNode)
        return;
    var Currnode = this.GradResourceNode;
    var nodename = Currnode.nodeName.toUpperCase();
    var gradanimProp = 0; 
    if (nodename == 'LINEARGRADIENT') {
        
        gradProp.GradMode = 'LINEAR';
        gradProp.LGGradStart.x = Currnode.getAttribute('x1');
        gradanimProp = this.getGradientAnimNode('LG','x1');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['x1'] = gradanimProp; 
        }
        gradProp.LGGradStart.y = Currnode.getAttribute('y1');
        gradanimProp = this.getGradientAnimNode('LG','y1');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['y1'] = gradanimProp; 
        }
        gradProp.LGGradStop.x = Currnode.getAttribute('x2');
        gradanimProp = this.getGradientAnimNode('LG','x2');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['x2'] = gradanimProp; 
        }
        gradProp.LGGradStop.y = Currnode.getAttribute('y2');
        gradanimProp = this.getGradientAnimNode('LG','y2');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['y2'] = gradanimProp; 
        }
        
        gradProp.LGGradStart.y = Currnode.getAttribute('y1');
        gradProp.LGGradStop.x = Currnode.getAttribute('x2');
        gradProp.LGGradStop.y = Currnode.getAttribute('y2');
        gradProp.spreadMethod = Currnode.getAttribute('spreadMethod');
       
    }
    else if (nodename == 'RADIALGRADIENT') {
    	gradProp.GradMode = 'RADIAL';
    	gradProp.center.x = Currnode.getAttribute('cx');
    	gradanimProp = this.getGradientAnimNode('RG','cx');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['cx'] = gradanimProp; 
        }        
    	gradProp.center.y = Currnode.getAttribute('cy');
    	gradanimProp = this.getGradientAnimNode('RG','cy');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['cy'] = gradanimProp; 
        }
        
    	gradProp.radius = Currnode.getAttribute('r');
    	gradanimProp = this.getGradientAnimNode('RG','r');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['r'] = gradanimProp; 
        }
    	
    	gradProp.focus.x = Currnode.getAttribute('fx');
    	gradanimProp = this.getGradientAnimNode('RG','fx');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['fx'] = gradanimProp; 
        }
        
    	gradProp.focus.y = Currnode.getAttribute('fy');   
    	gradanimProp = this.getGradientAnimNode('RG','fy');
        if(gradanimProp)
        {
        	gradProp.gradAnimList['fy'] = gradanimProp; 
        }
    }
        //common code 
        var JQSel = '#gradTitleIP';
        var value = Currnode.classList[2]; 
        gradProp.Title = value;
        for (var k = 0; k < 2; k++) {
            var stopnodeid = Currnode.id + '_STOP' + k;
            var stopNode = document.getElementById(stopnodeid);
            if (stopNode) {
                var stopvalue = new sStopProp();
                stopvalue.offset = stopNode.getAttribute('offset');

                stopvalue.color = stopNode.getAttribute('stop-color');
                if (stopvalue.color != 'none')
                    stopvalue.bFlag = true;
                else
                    stopvalue.bFlag = false;
                gradProp.StopParam[k] = stopvalue;               
                gradanimProp = this.getGradientAnimNode('STOP'+ k,'stop-color');               
                gradProp.gradAnimList['stop-color'+k] = gradanimProp; 
            }
        }  
    
    return gradProp;
};

sGradientWidget.prototype.setGradientProperty = function(gradProp) {

    if (!this.GradResourceNode)
        return;
    var Currnode = this.GradResourceNode;
    var nodename = Currnode.nodeName.toUpperCase();
    if ((nodename == 'LINEARGRADIENT') && (gradProp.GradMode == 'LINEAR')) {
        
        Currnode.setAttribute('x1', gradProp.LGGradStart.x + '');
        Currnode.setAttribute('y1', gradProp.LGGradStart.y + '');
        Currnode.setAttribute('x2', gradProp.LGGradStop.x + '');
        Currnode.setAttribute('y2', gradProp.LGGradStop.y + '');
    }
    else if ( (nodename == 'RADIALGRADIENT') && (gradProp.GradMode == 'RADIAL') ){
    	Currnode.setAttribute('cx', gradProp.center.x + '');
    	Currnode.setAttribute('cy', gradProp.center.y + '');
    	Currnode.setAttribute('r', gradProp.radius + '');
    	Currnode.setAttribute('fx', gradProp.focus.x + '');
    	Currnode.setAttribute('fy', gradProp.focus.y + '');
    }
    Currnode.setAttribute('title', gradProp.Title);
    Currnode.setAttribute('spreadMethod', gradProp.spreadMethod);
        // gradProp.StopParam = [];
        for (var k = 0; k < 2; k++) {
            var stopnodeid = Currnode.id + '_STOP' + k;
            var stopNode = document.getElementById(stopnodeid);
            if (stopNode) {
                var stopvalue = gradProp.StopParam[k];
                if (stopvalue.bFlag == true) {
                    stopNode.setAttribute('offset', stopvalue.offset);
                    stopNode.setAttribute('stop-color', stopvalue.color);
                }
                else {
                    stopNode.setAttribute('offset', '100%');
                    stopNode.setAttribute('stop-color', 'none');
                }
            }
        }
};

function sGradientWidget(WdgtID, GradResID) {
   if(this.bInitialize ==  true)
   {
         return;                       
   }            
   
   this.GradWidgetID = WdgtID;       
   this.GradResourceID = GradResID; 
   this.GradResourceNode = document.getElementById(GradResID);  
   if(!this.GradResourceNode)
        return 0;
  
   
    //now get the gradient property
    this.GradParam = this.getGradientProperty();
    //update the UI
   // this.UpdateUI(this.GradParam);
    this.bInitialize = true;
};

function GX_GradientEditBoxValueChange(value, wdgtNode) {
    gGradientObj.OnGradEditBoxHdlr(value, wdgtNode); 
}


function GX_GradientCheckValueChange(event) {
    gGradientObj.OnGradCheckBoxHdlr(event);
}
function GX_SpreadDDLHandler(Node, value) {   
    gGradientObj.OnGradSpreadDDLHandler(Node, value);
}

function GX_GradColorButtonHandler(event) {
	//Debug_Message("Calling Button"); 	
	$('.GRAD_DLG_ELEM').addClass('disabledState'); 
    gGradientObj.OnGradColorButtonHandler(event); 
}

function GX_SetContainmentForGradPreview(ID){
	var x1, y1, x2, y2;
	if( (ID == 'LG_START_POINT') || (ID == 'LG_END_POINT') ){
		var sel = '#LinearGradpreview'; 
	    var pos = $(sel).position(); 
	    var left = new Number(pos.left);
	    var top = new Number(pos.top); 
		    with(Math){    	
		    	x1 = round(left); 
		    	y1 = round(top ); 
		    	x2 = round(x1 + 150) ; 
		    	y2 = round(y1 + 150); 		    
		    }        
		    //var region = [60, 101, 210, 351]; 
		   // var region = ['60', '101', '210', '351']; 
		    JQSel = '#' + ID; 
		    $(JQSel).draggable( "option", "containment", '#LinearGradpreviewContainer');	
	}
	if(ID == 'RG_FOCUS_POINT'){
		 JQSel = '#' + ID; 
		// $(JQSel).draggable( "option", "containment", '#RadialGradPreviewContainer');
		 $(JQSel).draggable( "option", "containment", '#RadialGradPreview');
		 
	}
        
}

function GX_CreateGradientWidget(wdgtID)
{
        WAL_createModelessWindow(wdgtID, '270', '400', 'myOK', 'myCancel');
        //WAL_createButton('animTotalPreviewBtn', '', '60', 25, true);
        WAL_CreateTextInput('gradTitleIP', '110', gInputHeight,false, '');
   	    var spreadValueDisplay = ['pad', 'reflect', 'repeat'];
        WAL_createDropdownList('gradSpreadDDL', '110', '22', false, spreadValueDisplay, "GX_SpreadDDLHandler", '80', 0);
       
       // WAL_createNumberInput("stop0_Offset", '45px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);       
        
        //WAL_createNumberInput("stop1_Offset", '45px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        WAL_createSlider('stop0_offset_slider', '110px', '15px', false, 0, 100,1, 25, false, false, 'GX_GradientEditBoxValueChange', false, '');
        WAL_createSlider('stop1_offset_slider', '110px', '15px', false, 0, 100,1, 25, false, false, 'GX_GradientEditBoxValueChange', false, '');
        
       // WAL_createCheckBox('animateStop_col', 'GX_GradientCheckValueChange', '70', gWidgetHeight, '13', false, false);
        //WAL_createDecimalNumberInput("durStopColIP", '50px', '24', "GX_GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        //WAL_createButton('apply_Stop_Col', '', '55', 25, true);
        //WAL_createButton('animPreviewStop', '', '70', 25, true);  
        
       
	    
        var JQSel = '#LG_START_POINT'; 
        $(JQSel).draggable({ cursor: "move" });
        $(JQSel).on( "drag", function( event, ui ) {
        	OnGradMouseMove(event, ui); 		
    	});
        $(JQSel).on( "dragstart", function( event, ui ) {
        	OnGradDragStart(event, ui); 		
    	});
        $(JQSel).on( "dragstop", function( event, ui ) {
        	OnGradDragStop(event, ui); 		
    	});
        GX_SetContainmentForGradPreview('LG_START_POINT'); 
        $(JQSel).hide();         
        
        var JQSel = '#LG_END_POINT'; 
        $(JQSel).draggable({ cursor: "move" });
        $(JQSel).on( "drag", function( event, ui ) {
        	OnGradMouseMove(event, ui); 		
    	});
        $(JQSel).on( "dragstart", function( event, ui ) {
        	OnGradDragStart(event, ui); 		
    	});
        $(JQSel).on( "dragstop", function( event, ui ) {
        	OnGradDragStop(event, ui); 		
    	}); 
        GX_SetContainmentForGradPreview('LG_END_POINT');
        $(JQSel).hide();
        
        var JQSel = '#RG_FOCUS_POINT'; 
        $(JQSel).draggable({cursor: "move" }); 
       // $(JQSel).draggable({cursorAt:{left: '5px',top:'5px'}});
        $(JQSel).on( "drag", function( event, ui ) {
        	OnGradMouseMove(event, ui); 		
    	});
        $(JQSel).on( "dragstart", function( event, ui ) {
        	OnGradDragStart(event, ui); 		
    	});
        $(JQSel).on( "dragstop", function( event, ui ) {
        	OnGradDragStop(event, ui); 		
    	});
        GX_SetContainmentForGradPreview('RG_FOCUS_POINT');
       
        WAL_createColorPickerWindow("gradcolorpickwidget", "gradcolorpicker", '350', '250', "gradokbtn", "gradcancelbtn");
      
}

function GX_GradColorWidgetCANCEL(event) {
   
    var colWdgt = document.getElementById('gradcolorpickwidget');
    if (!colWdgt)
        return;
    var colAttrName = colWdgt.getAttribute('data-attrName');
    var initcolAttrValue = colWdgt.getAttribute('data-attrValue');
    var ID;
    var ID = colWdgt.getAttribute('data-refID');
    var refBtn = document.getElementById(ID);
    refBtn.style.backgroundColor = initcolAttrValue;

    ID = colWdgt.getAttribute('data-targetObjID');
    var tgtObj = document.getElementById(ID);
    if(tgtObj)
    	GX_SetObjectAttribute(tgtObj, colAttrName, initcolAttrValue, true, false);
    
    $('.GRAD_DLG_ELEM').removeClass('disabledState'); 
}

function GX_GradColorWidgetOK(event) {            
    var colWdgt = document.getElementById('gradcolorpickwidget');
    if (!colWdgt)
        return;
    var colAttrName = colWdgt.getAttribute('data-attrName');
    var colorval = WAL_getColorPickerValue('gradcolorpickwidget');
    var ID = colWdgt.getAttribute('data-refID');
    var refBtn = document.getElementById(ID);
    refBtn.style.backgroundColor = colorval;
   //_rm needs to be complted in main branch code 
    ID = colWdgt.getAttribute('data-targetObjID');
    var tgtObj = document.getElementById(ID);
    if(tgtObj)
    	GX_SetObjectAttribute(tgtObj, "", "", true, false);
    
    $('.GRAD_DLG_ELEM').removeClass('disabledState'); 
}

function GX_GradDlgOK() {
  //  alert("OK"); ///dont know what to do here as all the propert have been already changed	
		var JQSel = "#" + 'gradTitleIP';    
        gradTitle = $(JQSel).val();
        var JQSel = "#" + "animtitleIP";	
    	var grad  = $(JQSel).val();	
    	if ( (gradTitle == 'Default:Linear') || (gradTitle == 'Default:Radial')
    			|| (gradTitle == '') || (gradTitle[0] == " "))
    	{
    		var JQSel = "#" + 'gradTitleIP';    
	        $(JQSel).val('');
    		Debug_Message("Please Assign a Title to the Gradient");		
    		setTimeout(function(){			
    			WAL_showModalWindow('gradientDlg', "GX_GradDlgOK", "");	
    			}, 250); 
    		return ; 
    	} 	
        var classvalue = gGradientObj.GradResourceNode.classList[0]+' '+gGradientObj.GradResourceNode.classList[1]+' '
        + gradTitle;
        //gGradientObj.GradResourceNode.setAttribute('class', classvalue);   
        GX_SetObjectAttribute(gGradientObj.GradResourceNode, "class", classvalue, true, false);
        //now update the gradient List 
        var currGradID = gGradientObj.GradResourceNode.id;         
        var gradInfo = GX_GetGradInfoByID(currGradID); 
       
        if(gradInfo[1] == currGradID)
        {
        	for(var i=0; i < gGradientList.length; i++)
            {
            	if(currGradID == gGradientList[i][1])
            	{
            		gGradientList[i][0] = gradTitle; 
            	}
            }
        }
        else
        {//_rm this means a new gradient object is being added here 
        	//now check if it is unique:
        	var retVal = GX_GetGradInfoByTitle(gradTitle); 
        	if(retVal){           	
        			GX_RemoveGradient(currGradID, gradTitle); 
        			var JQSel = "#" + 'gradTitleIP';    
        	        $(JQSel).val('');
            		Debug_Message("Title already Exists");		
            		setTimeout(function(){			
            			WAL_showModalWindow('gradientDlg', "GX_GradDlgOK", "");	
            			}, 250); 
            		return ;             		
        	}        	
        	var gradInfo = [gradTitle, currGradID, gGradientObj.GradResourceNode.classList[1] ]; 
        	gGradientList.push(gradInfo); 
        }        
        GX_UpdateGradientList(gGradientList); 
        WAL_SetItemByValueInList('gradlistDDL', gradTitle, 'true');
       
        var fillurl = 'url(#' + currGradID + ')';
        GX_UpdatePropertyForMultipleObjects('fill',fillurl); 
        WAL_hideWidget('gradcolorpickwidget', true); 
}
function GX_GradDlgCancel() {
    //alert("Cancel");
	if(gbNewGradObject == true){
		GX_SetObjectAttribute(gCurrentObjectSelected, "fill", 'none', true, false);
		var gradID = gGradientObj.GradResourceID;
		var gradTitle = gGradientObj.GradParam.Title; 
		GX_RemoveGradient(gradID, gradTitle);
	}	
   // gGradientObj.setGradientProperty(gGradientObj.GradParam); 
    WAL_hideWidget('gradcolorpickwidget', true); 
    //GradParam
}
function OnEditBoxFocusOut(event) {
	
	/*
    var nodeid = event.target.id;
    var gradTitle = "";
    var JQSel = "#" + nodeid;
    if (nodeid == 'gradTitleIP') {
        gradTitle = $(JQSel).val();
        var classvalue = gGradientObj.GradResourceNode.classList[0]+' '+gGradientObj.GradResourceNode.classList[1]+' '
        + gradTitle;
        gGradientObj.GradResourceNode.setAttribute('class', classvalue);        
        //now update the gradient List 
        var currGradID = gGradientObj.GradResourceNode.id; 
        for(var i=0; i < gGradientList.length; i++)
        {
        	if(currGradID == gGradientList[i][1])
        	{
        		gGradientList[i][0] = gradTitle; 
        	}
        }
        GX_UpdateGradientList(gGradientList); 
        //populate the list 
        
        //get the gradient Index corresponding to this IS 
        //change the Title and
        //now update the List Box as well 
    }   
    */
		
}
function GX_Initialize()
{
	  WAL_Initialize();
	  var retval = WAL_DetermineBrowserType();
	  if(retval != true)
	  {
		Debug_Message("Unable To Determine Browser Type");   
	  }
	  
	 // Debug_Message('Welcome:' +gUsername ); 
		
  //  WAL_createMenu("mainMenu", '450px', '25px', 'horizontal', "UIH_MenuItemClick", "actionText");  
    //set the version number here 
	  var NodeList = document.getElementsByTagName('title');
	  var titleNode = NodeList[0]; 
	  titleNode.innerHTML +=  gAppVersion; 
    //create the splitter 
    var winHeight = window.outerHeight*1.5 + 'px'; 
    var winWidth = window.outerWidth + 'px';
  
    //creeating the panels here 
    var topheight = $('#topcontainer').height(); 
    gClientYOffset = topheight; 
	var height = window.innerHeight - topheight -15; //480; //window.outerHeight; 
	var width = window.outerWidth ;
	WAL_createTab('rightTabs',  height, 'GX_RightTabHandler'); 
	WAL_createTab('editorTabs',  height, 'GX_EditorTabHandler'); 
	GX_SetCanvasDimension(600,400);  
    
    WAL_createListBox('svgfileopenlistbox', '270', '250', "GX_LBItemsSelectHandler");
 	 	
    WAL_createButton('SVGFO_LB_deletebtn', '', '70', '24', false); 
    WAL_createWindow(gSVGFileOpenDlg,"Asset List", true, '282', '350', false,	true, false, false, false, "", 'SVGFO_LB_okbtn', 'SVGFO_LB_cancelbtn');
    WAL_createModalWindow(gSVGFileNameDlgID, '210', '145', 'pageOK', 'pageCancel', true);
    WAL_createModalWindow(gSVGExportDlgID, '320', '180', 'exportOK', 'exportCancel', false);
    WAL_createModalWindow(gImageNameDlgID, '350', '100', 'imageOK', 'imageCancel', true);
    
    WAL_createModalWindow(gSVGImportListDlgID, '430', '580', 'importOK', 'importCancel', true);    
    var imagerenderer = function (row, datafield, value) {
        return '<img style="margin-left: 5px; margin-top:5px; margin-bottom:5px" height="40" width="40" src="../USER_DATA/shared/shapes/' + value + '"/>';
    }   
    var colArray = [
					{ text: 'Image', datafield: 'filename', width: 70, cellsrenderer: imagerenderer, groupable:false},
					{text: '�ategory', datafield:'category', width:120, groupable:true},
					{text: 'Description', datafield:'title', groupable:false}
           		]; 
    WAL_createGrid('importlistgrid', 420, 500, 'OnGridRowSelection', 50, true, 10, colArray, 'category'); 
    //create group name dialogcolArray
    WAL_createModalWindow(gSVGGroupNameDlgID, '180', '100', 'groupOK', 'groupCancel', true);   
 	
   
    
    gFileNameTitleNode = document.getElementById('filename'); 
    gFileNameHolder = document.getElementById('fname');
    gSVGDimInfoHolder = document.getElementById('diminfo'); 
    
    GX_InitializeToolbar(); 
    GX_InitializePropertyTab(); 
    GX_InitializeAnimationTab(); 
    
    WAL_createNumberInput("svgwidthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 1000, 0,1);
    WAL_createNumberInput("svgheightIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 1000, 0,1);
    WAL_createModalWindow(gSVGDimensionDlg, '250', '100', 'svgDimOK', 'svgDimCancel', true);
    
    WAL_createNumberInput("polynSidesIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 20, 3,1);
    WAL_createNumberInput("polyLengthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 500, 10,10);
    WAL_createModalWindow(gPolyInputDlg, '250', '110', 'polynSidesOK', 'polyLengthCancel', true);
    WAL_setNumberInputValue("polynSidesIP", '3', false);
    WAL_setNumberInputValue("polyLengthIP", '50', false);
    //fill color interface
    WAL_createButton('fillcolAnimAddBtn', 'GX_FillBtnHandler', '60', 24, true);
    WAL_createButton('fillcolAnimPreviewBtn', 'GX_FillBtnHandler', '60', 24, true);
    WAL_createCheckBox('animateFillColor', 'GX_FillColorAnimCheckValueChange', '50', gWidgetHeight, '13', false, false);
    WAL_createModelessWindow('fillcolorDlg', '250', '150', 'fillcolOK', 'fillcolCancel');
    
    //WAL_createModalWindow(gImageDlg, '250', '150', 'imageOK', 'imageCancel', false);
    WAL_createModalWindow('deleteConfirmDlg', '250', '120', 'deleteOK', 'deleteCancel', true);

    
    //right menu 
    WAL_createContextMenu('objectContextmenu','mybody',  'GX_ContextMenuClick', 140, 'auto');    
    var groupList = ['group1', 'group2', 'group3']; 
    WAL_createDropdownList('grouptoDDL', '140', '22', false, groupList, "GX_DDLHandler", '80', 0);
    WAL_createModalWindow('movetoGroupDlg', '250', '125', 'grouptoOK', 'grouptoCancel', false);
    
    
    //creating published list grid here 
    WAL_createModalWindow('publishedListDlg', '525', '350', 'pubOK', 'pubCancel', true);    
   /* var imagerenderer = function (row, datafield, value) {
        return '<img style="margin-left: 5px; margin-top:5px; margin-bottom:5px" height="40" width="40" src="../USER_DATA/shared/shapes/' + value + '"/>';
    }*/   
    var colArray = [					
					{ text: 'ID', datafield: 'ID', width: 25, groupable:false},
					{ text: 'Date', datafield: 'pubdate', width: 80, groupable:false},
					{ text: 'Title', datafield:'title', width:170, groupable:false},														
					{ text: 'URL', datafield: 'publishedURL', width: 'auto', groupable:false,
						cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
			              // Debug_Message("Value=" + value);
							var filename = value.split('/'); 
							filename = filename[filename.length-1]; 
			               var str='<a data-href=' + value + ' class="URLCELL" + onclick="OnGridURLClick(event)">' + filename + '</a>'; 
			               return str;
			            } //function					
					}					
           		]; 
    /*
     * { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
      cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
                if (value < 20) {
                    return '' + value + '';
                }
                else {
                    return '' + value + '';
                }
            }   
}
     */
    WAL_createGrid('publistgrid', '520', '280', 'OnGridRowSelection', 50, true, 10, colArray, 'file'); 
    //create the draggable drawing pen  here 
   	var JQSel = "#drawingpen" ;
	$(JQSel).draggable({ cursor: "crosshair", cursorAt:{top: 2, left: 2} });	
	//$(JQSel).css({left:'100px', top:'200px', visibility:'visible' });	
	$(JQSel).on( "drag", function( event, ui ) {
		OnFreeDrawDrag(event, ui); 
	});
	$(JQSel).on( "dragstart", function( event, ui ) {
		OnFreeDrawDragStart(event, ui); 		
	});
	$(JQSel).on( "dragstop", function( event, ui ) {
		OnFreeDrawDragEnd(event, ui); 		
	});
	
	JQSel = '#sel_gripper'; 
	//create the selection gripper here 
	$(gCurrGripperSel).draggable({ cursor: "move" });	
	$(gCurrGripperSel).resizable({handles: "all"});	
	
	$(gCurrGripperSel).on( "resizestop", function( event, ui ) {
		OnObjectResizeStop(event, ui); 		
	});
	
	$(gCurrGripperSel).on( "resize", function( event, ui ) {
		OnObjectResizing(event, ui); 		
	});
	
	$(gCurrGripperSel).on( "resizestart", function( event, ui ) {
		OnObjectResizeStart(event, ui); 		
	});
	
	
	
	
	//gGripperTextSpanNode = $(gCurrGripperSel)[0].firstElementChild; 
	
	$(gCurrGripperSel).on( "dragstart", function( event, ui ) {
		OnObjectDragStart(event,ui);
	});
	
	$(gCurrGripperSel).on( "dragstop", function( event, ui ) {
		OnObjectDragStop(event,ui); 
	});
	
	$(gCurrGripperSel).on( "drag", function( event, ui ) {
		OnObjectDrag(event,ui); 
	});
	
	//$(gCurrGripperSel).css({visibility:'hidden'}); 
	$(gCurrGripperSel).hide(); 
	
	//path marker related 
	/*
	gDivPathMarkerSel = '#DivPathMarker'; 
	$(gDivPathMarkerSel).draggable({ cursor: "move" });
	$(gDivPathMarkerSel).on( "dragstop", function( event, ui ) {
		OnDivPathMarkerDragStop(event, ui); 
	});
	$(gDivPathMarkerSel).on( "drag", function( event, ui ) {
		OnDivPathMarkerDrag(event, ui); 		
	});
	*/ 
	gSnapToGrid =  false; 
	var JQSel = '#markerPoint'; 
	$(JQSel).draggable({ cursor: "move" });
	$(JQSel).on( "dragstop", function( event, ui ) {
		OnPointMarkerDragStop(event, ui); 
	});
	
	gClientYOffset = $('#topcontainer').height() + 12 ;//- 40; 
   
	GXRDE_getUsername('usernameCallback'); 
    usernameCallback = function(respStr){
	    if(!respStr){
	    	  Debug_Message('Valid user name not found'); 
	    	  return; 
	    }
        var usernameNode = document.getElementById('welcomeMsg'); 
        gUsername = respStr; 
        usernameNode.innerHTML = gUsername; 
    }
    
    WAL_createModelessWindow('helpDlg', '450', '550', 'helpOK', 'helpCancel');    
    WAL_CreateNotification('messageNotification', 10000, 'auto')  ; 
    
    //now reload the page 
    if(bFileLoaded == false){
    	//get the URL
    	var url = window.location.href; 
    	
    	//extract the file name 
    	arr = url.split('?'); 
    	var filename = arr[arr.length-1]; 
    	var index = filename.indexOf('.svg'); 
    	if(index != -1){
    		GX_OpenFile(filename);
    		bFileLoaded = true; 
    	}   	
    	
    	
    }
}

function GX_MenuDisable(bFlag)
{
	WAL_DisableMenuItem('GXmenu', 'edit', bFlag);
	WAL_DisableMenuItem('GXmenu', 'object', bFlag);
	WAL_DisableMenuItem('GXmenu', 'properties', bFlag);
	WAL_DisableMenuItem('GXmenu', 'markers', bFlag);
	WAL_DisableMenuItem('GXmenu', 'layout', bFlag);
	WAL_DisableMenuItem('GXmenu', 'animate', bFlag);
	WAL_DisableMenuItem('GXmenu', 'filters', bFlag);
	WAL_DisableMenuItem('GXmenu', 'preview', bFlag);
}

function GX_InitializeDocument(svgFileName)
{
	//update the container SVg dimension 
	//var svgdatanode = document.getElementById('SVGOBJECTCONTAINER');
	
	var svgcontainer = document.getElementById('objectcontainer'); 	
	var svgassetnode = document.getElementById('editingassets_orig'); 
	if(!svgassetnode)
	{
		Debug_Message("Null SVG aseet node"); 
		return ; 
	}
	//var parentassetnode = svgassetnode.parentNode; 
	var svgassetcopynode  = document.getElementById('editingassets'); 	
	if(!svgassetcopynode)
	{
		var clonednode = svgassetnode.cloneNode(true); 
		clonednode = svgcontainer.appendChild(clonednode); 
		var id = clonednode.getAttribute('id'); 
		if(id)
		{
			id = id.substring(0, id.length-5); 
			clonednode.setAttribute('id', id); 
		}	
		var Childlist = clonednode.childNodes;
		var len = Childlist.length; 
		var childnode; 
		for(var j=0; j < len; j++)
		{
			childnode = Childlist.item(j); 	
			var nodename = childnode.nodeName.toUpperCase();		
			if(nodename !='#TEXT')
			{
				var id = childnode.getAttribute('id'); 
				if(id)
				{
					id = id.substring(0, id.length-5); 
					childnode.setAttribute('id', id); 
					var nodeclass = childnode.getAttribute('class'); 
					if(nodeclass == 'CUSTOM_MARKER_ORIG')
					{
						nodeclass = nodeclass.substring(0, nodeclass.length-5); 
						childnode.setAttribute('class', nodeclass); 
					}
				}		
			}
			
		}		
	}
	var svgdatanode = document.getElementById('SVGOBJECTCONTAINER');
	if(!svgdatanode)
		return ; 	
	var canvasNode = document.getElementById('canvas'); 
	
	var attrvalue; 
	attrvalue = svgdatanode.getAttribute('width'); 
	attrvalue = attrvalue.substring(0, attrvalue.length-2); 	
	//svgcontainer.setAttribute('width',attrvalue );
	var canvasWidth = attrvalue; 
	
	attrvalue = svgdatanode.getAttribute('height'); 
	attrvalue = attrvalue.substring(0, attrvalue.length-2); 
	var canvasHeight = attrvalue; 
	//svgcontainer.setAttribute('height',attrvalue ); 	
	
	var svgcontainerNode =  document.getElementById('SVGContainer'); 
	var viewboxStr = '0 0 ' + canvasWidth + ' ' + canvasHeight; 
	svgcontainerNode.setAttribute('viewBox', viewboxStr); 
	gOriginalCanvasDim = new sDimension(); 
	gOriginalCanvasDim.width = canvasWidth; 
	gOriginalCanvasDim.height = canvasHeight; 
	GX_SetCanvasDimension(canvasWidth, canvasHeight); 
	attrvalue = svgdatanode.getAttribute('viewBox'); 	
	if(svgFileName)
	{
		gFileNameTitleNode.innerHTML = gInitTitle + svgFileName; 
		var spanNode = document.getElementById('fname'); 
		gFileNameHolder.innerHTML = svgFileName;
		gSVGFilename = svgFileName; 		
	}
	gSVGDimInfoHolder.innerHTML = canvasWidth + ' x ' + canvasHeight; 
	
	GX_updateEditAttributes(); 
	
	gZoomFactor = new Number(1.0); 
	WAL_SetItemInDropDownList('zoomDDL', 0, false);
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
	
	 //gObjectList = 0;	
	 
	 if(!gObjectList)
	 {
		 //GX_UpdateAnimationListbox();
		 //reset this here 
		 gRefAnimListDDL = 0; 
		 GX_PopulateAnimationList(); 
		 gObjectList = GX_PopulateObjectList('ALL_OBJECTS');
		 gAnimList = GX_SortAnimListInDisplayOrder(gAnimList);	
		 /*var animlist = new Array(); 
		 for(var i =0; i <gAnimList.length; i++){
			 var attr = gReverseAttrList[gAnimList[i][2]]; 
			 animlist.push(gAnimList[i][5] + '-<b>' + attr + '</<b>'); 
		 }		 
		WAL_ListBoxUpdateData('animationlist', animlist);
		*/ 		 
	 }	
	 //update the gradient list 
	gGradientList = GX_GetGradientList(); 
	GX_UpdateGradientList(gGradientList);
//	WAL_setCheckBoxValue('snaptogrid', false);
	 //_rm temp code to be brought back later
	//GX_showEditorInterface('OBJECT_MODE'); 
	gIndicatorPathNode = document.getElementById('indicatorpath'); 
	// reset all variables to default state 
	nAutoSaveMsg = 9; 
	//GX_InitializeAnimationTab(); 
}

function GX_MenuItemShow(menuid, itemText)
{
	//var args =  event.args;
	//var itemtext = $(args).text();
  //  var menuid = args.getAttribute("id");
  //  var spannode = document.getElementById('itemtextinfo'); 
   // spannode.innerHTML = itemText;
	var objectType = 0; 
    if(gCurrentObjectSelected)
    	objectType =  gCurrentObjectSelected.classList[0];  
    //SVG_TEXT_OBJECT 
    var retval;
	switch(menuid)
	{
	
	 case 'object':
		 GX_showEditorInterface('OBJECT_MODE'); 
		 break; 
	 case 'layout':
		 GX_showEditorInterface('LAYOUT_MODE'); 
		 break; 
	 case 'properties':
		// if((objectType) && (objectType == 'SVG_TEXT_OBJECT'))
		// {
			// GX_showEditorInterface('MODIFY_TEXT_MODE');
			/// GX_MakeTextEditable(gCurrentObjectSelected); 
		// }			  
		// else
			  GX_showEditorInterface('PROPERTIES_MODE');		
		 break; 
	 case 'markers':
			GX_showEditorInterface('MARKER_MODE');		
			break; 
	 case 'animate':
		 GX_showEditorInterface('ANIM_MODE'); 
		 GX_UpdateAnimationListbox(); 
		
		 break;
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
		 
		 JQSel = "#" + "titleIP";	
		 $(JQSel).val("");		 
		 WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );				
		 break; 
	 case 'open':			 
		 GX_menu_open_svgfrom_remote();
		 
		 break; 
	 //case 'delete':	
	 case "deletefile":
		 GX_menu_delete_svgfrom_remote();
		 break;
	 case 'import':		 	
		 //GX_ImportObject(); 
		 if(!gSVGImportList){		 
				 gSVGImportList = GXRDE_GetSVGImportList();
			 if(!gSVGImportList){
				 Debug_Message('No Data Available'); 
				 return; 
			 }
			 var source =
		     {
		         datatype: "json",
		         datafields: [
		             { name: 'id', type: 'string' },
		             { name: 'category', type: 'string' },
		             { name: 'filename', type: 'string' },
		             { name: 'title', type: 'string'}
		         ],
		         id: 'id',
		         localdata : gSVGImportList	         
		     };		      
		     WAL_setSourceColumn('importlistgrid', source);
		}//if(!gSVGImportList)
		 WAL_ClearGridSelection('importlistgrid'); 
	     WAL_showModalWindow(gSVGImportListDlgID, "GX_ImportShapedlgOK", "" );	
		 break; 	
	 case 'export':
		 WAL_showModalWindow(gSVGExportDlgID, "GX_ExportObject()", "" );			 
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
	 
		 
	 case 'removenode':		 
		 WAL_showModalWindow('deleteConfirmDlg','', ''); 
		// GX_RemoveObject(gCurrentObjectSelected); 
		 //WAL_expandAllTreeItems(gTreeNodeID, true);
		 break; 
	
	/* case 'copy':
		 GX_CopyObject(gCurrentObjectSelected); 
		 break; 
	 case 'paste':
		 GX_PasteObject(); 
		 break;
		 */
		 
	 case 'zoom':
		 GX_showEditorInterface('ZOOMPAN_MODE'); 
		 break; 
	 
	 case 'stroke':
		  GX_showEditorInterface('STROKE_MODE'); 
		  break; 
	 case 'fill':
		  GX_showEditorInterface('FILL_MODE'); 
		  break;
	 
	 case 'fontproperty':
		 if(objectType == 'SVG_TEXT_OBJECT')
			 GX_showEditorInterface('FONT_STYLE_MODE');
		 else
			 Debug_Message('Select a Text Object'); 
		 break; 
	 case 'preview':
		 var URLstr = GXRDE_getPageURL();
		if(!URLstr)
			return;			
		    //open a new window with page title
		  var myWindow = window.open(URLstr, '', '');
		  myWindow.resizeTo(screen.width, screen.height);
		  myWindow.moveTo(50, 50);
		  myWindow.focus(); 
		 break;
	 default:
		 break; 
	 }
	
	//now scroll to rest 
	/*var horScroll = 0 - window.pageXOffset;
	var vertScroll = 0 - window.pageYOffset;	
	if( (horScroll != 0) || (vertScroll != 0) )
		window.scrollTo(horScroll, vertScroll);
	else
		Debug_Message("Zero Scrolling");
		*/
	
}

function GX_MenuItemHandler(event)
{
	var args =  event.args;
	var itemtext = event.target.textContent;
    var menuid = event.target.id;
    GX_MenuItemShow(menuid, itemtext); 
	
}
function GX_menu_open_svgfrom_remote()
{
	 var newsource = GXRDE_getAssetListFromServer('SVG', 'AssetListFn'); 	 
	 AssetListFn = function(respStr){		
		 var listarr = respStr.split('#'); 
		 WAL_ListBoxUpdateData('svgfileopenlistbox', listarr);
		 WAL_showWindow(gSVGFileOpenDlg, true, 'open_icon');		
	 }
	 
	
	// WAL_showWindow(gSVGFileOpenDlg, true, 'topcontainer');
}

function GX_menu_delete_svgfrom_remote()
{	
	GX_LBDeleteItem();
}

function GX_LBDeleteItem()
{  	
     var myitem = WAL_ListBoxGetSelectedItem('svgfileopenlistbox'); 
     if(!myitem){
    	 Debug_Message("No File Selected"); 
    	 return ; 
     }
    	
     var fname = myitem.label; 
     var fnamearr = fname.split('('); 
     fname = fnamearr[0];
     GXRDE_deleteSVGFile(fname);
     WAL_ListBoxDeleteItem('svgfileopenlistbox', myitem.index);    
}

function GX_LBItemsSelectHandler(Index)
{
	//Debug_Message("Index=" + Index); 
	
}

function GX_SVGFileDlgNameOK()
{
	var JQSel = "#" + "pageNameIP";	
	var svgfname  = $(JQSel).val();
	
	JQSel = "#" + "titleIP";	
	var svgtitle  = $(JQSel).val();
	
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
    GX_SetSelection(gCurrentObjectSelected, false, true);
	gCurrfName =  svgfname; 
	gCurrObjID = 0;    	
	GXRDE_addNewSVGFile(svgfname,svgtitle, 'NewFileCallback');
}

function NewFileCallback(respStr){   		
		
	var index =  respStr.indexOf("ALREADY_EXISTS");
		if(index != -1){	   		
	   		//WAL_ShowNotification('messageNotification','info', "This File already exists, Please try another name", 3000);
			
		/*	setTimeout(function(){		    	
				WAL_ShowNotification('messageNotification','error', "This File already exists, Please try another name",5000,
						0, -550, 'bottom-left', false);			 
			 			}, 
			 	200);
			 	*/
			GX_Notify('error', "This File already exists, Please try another name", 0);
	   		var JQSel = '#pageNameIP'; 
	   		$(JQSel).val("");
	    	WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );	    	
	   	}
		else{
			//WAL_ShowNotification('messageNotification','info', "Your New Project has been created Successfully</br>You can now Add Shapes/Images/Text to your project", 3000);
			
			GX_OpenFile(gCurrfName); 
			//OpenfileCallback(respStr); 
			GX_ManageUIState('NEW_FILE_CREATED');
			
		}
		
}

function GX_LBOKHandler(){
	 var myitem = WAL_ListBoxGetSelectedItem('svgfileopenlistbox'); 
     if(!myitem)
    	 return ; 
     var fname = myitem.label; 
     var fnamearr = fname.split('('); 
     fname = fnamearr[0];
     GX_SetSelection(gCurrentObjectSelected, false, true);
     GX_OpenFile(fname);
         
    
}

function GX_OpenFile(fname){
	gCurrfName =  fname; 
	gCurrObjID = 0; 
	GXRDE_openSVGFile(gCurrfName, 'OpenfileCallback'); 	 	
}

function OpenfileCallback(respStr){
	// Debug_Message("Callback on return") ;
	var HTMLstr="";	 
    if(respStr){
	   	 GX_CloseSVGFile(); 
	   	 gObjectList = 0; 
	   	 var dataNode = document.getElementById('objectcontainer');   	 
	   	 dataNode.innerHTML += respStr; 
	   	 GX_InitializeDocument(gCurrfName);     	 
    }	   
    var xmlstr = GXRDE_GetSVGMetaXML(gCurrfName, 'xmlFileCallback'); 
    GX_ManageUIState('FILE_OPENED'); 
}

function  xmlFileCallback(xmlstr){
  	 if(xmlstr)
      	 GX_updateTreeWidget(xmlstr);   
     WAL_expandAllTreeItems(gTreeNodeID, true);	    
     if(gCurrObjID)
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+gCurrObjID);
	 else
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_BASEGROUP');   
     
     //set the tab order here 
     setTimeout(function(){		    	
 		WAL_SetTabIndex('rightTabs', gCurrentTabIndex);	 		
 			}, 1000);
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
	if(!objNode)
		return ; 
	var parentNode = document.getElementById(parentID); 
	var retVal = GX_AddNodes(objNode, parentNode);
	if(retVal == false)
		return ;
	
	
	
	/*
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
	var rootElem = parentNode.appendChild(elem);
	*/
	
	//now add child if any 
	/*
	var childlist = objNode.children;
	var childObjNode; 
	for(var j=0; j < childlist.length; j++)
	{
		childObjNode = childlist[j];		
		attrLen = childObjNode.attributes.length; 
		nodeName = childObjNode.nodeName; 
		elem = document.createElementNS("http://www.w3.org/2000/svg", nodeName);
		for (var i=0; i < attrLen; i++)
		{
			elem.setAttribute(childObjNode.attributes[i].nodeName, childObjNode.attributes[i].nodeValue);
		}	
		elem = rootElem.appendChild(elem);
	}
	*/
	
	return true;
}

function GX_AddNodes(CurrentNode, parentNode)
{
	var nodeName = CurrentNode.nodeName; 
	if(nodeName != '#text')
	{
		var attrLen = CurrentNode.attributes.length; 
		nodeName = CurrentNode.nodeName;	
		var elem = document.createElementNS("http://www.w3.org/2000/svg", nodeName);
		if(!elem)
			return false;  
		for (var i=0; i < attrLen; i++)
		{
			elem.setAttribute(CurrentNode.attributes[i].nodeName, CurrentNode.attributes[i].nodeValue);
		}	
	}
	else
	{
		var elem = document.createTextNode(CurrentNode.wholeText);
		elem = parentNode.appendChild(elem);
		return ; 
	}	
	elem = parentNode.appendChild(elem);	
	var nodeName = elem.nodeName.toUpperCase(); 
	/*if ((nodeName == 'ANIMATE') || (nodeName == 'ANIMATEMOTION') )
	{
		elem.endElement(0); 
		Debug_Message('Ending Animation'); 
	}*/
	
	var childlist = CurrentNode.childNodes;
	for(var j=0; j < childlist.length; j++)
	{
		childObjNode = childlist[j];		
		GX_AddNodes(childObjNode, elem); 		
	}
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
function NewGradObjectDefaultFn(respStr){
	GX_AddNewNodeFromXMLString(gNewParentID, respStr); 	
	GX_ShowGradWindow(gNewObjectID, gNewObjType); 
	//GX_ShowGradWindow(gNewObjectID, 'LINEAR_GRAD');		
	if(!gNewObjectID){
			Debug_Message("Grad title not Found");
			return; 
	}
	//add it to the list items
	var fillurl = 'url(#' + gNewObjectID + ')';
	if(gbMultiSelection == true){						
			GX_ApplyPropertyToMultipleObjects('fill', fillurl);
	}
	else if(gCurrentObjectSelected){
		var objectType = gCurrentObjectSelected.classList[0]; 
		if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGEOBJECT') || (objectType == 'SVG_PATH_OBJECT') || (objectType == 'SVG_TEXT_OBJECT'))
		{
			var fillurl = 'url(#' + gNewObjectID + ')';				
			GX_SetObjectAttribute(gCurrentObjectSelected, "fill", fillurl, true, false);				
		}			
	}
}		

function NewMarkerDefaultCallbackFn(respStr){
	GX_AddNewNodeFromXMLString(gNewParentID, respStr); 
	gCurrentObjectSelected.setAttribute(gNewName, 'url(#' +gNewObjectID + ')' ); 
	
	return ; 
}


function GX_AddNewSVGObject(Type, name, callbackFn)
{
	//generate a unique ID 
/*	if((!callbackFn) || (callbackFn.length < 1)){
		Debug_Message("Callback function missing"); 
		return; 
	}
	*/ 
	var parentID; 
	//WAL_SetTabIndex('rightTabs', 0);
	var ObjID =  GXRDE_GetUniqueID('SVG_'); 
	var objectType = Type.toUpperCase(); 
	gNewObjectID = ObjID;
	gNewObjType = objectType; 
	bNewObjectAdding =  true; 
	var retval; 
	//send out the request and get the XML from server
	if ( (objectType == 'LINEAR_GRADIENT')|| (objectType == 'RADIAL_GRADIENT') )
	{
		parentID = 'SVGDEFINITION'; 
		gNewParentID = parentID; 
		GXRDE_addNewSVGObject(ObjID, parentID, objectType, callbackFn);
		return; 		
	}
	if( (objectType == 'MARKER_TRIANGLE') || (objectType == 'MARKER_SQUARE') || (objectType == 'MARKER_CIRCLE')
			|| (objectType == 'MARKER_STAR') || (objectType == 'MARKER_CURVEDTRIANGLE')|| (objectType == 'MARKER_CROSS') ){
		
		if(!gCurrentObjectSelected){
			Debug_Message('Select a Path Object to Add Markers'); 
			return ; 
		}
		var currObjType = gCurrentObjectSelected.classList[0]; 
		if(currObjType != 'SVG_PATH_OBJECT'){
			Debug_Message('Select a Path Object to Add Markers'); 
			return ; 
		}
		ObjID = gCurrentObjectSelected.id + '_' + name; 
		ObjID = ObjID.toUpperCase(); 
		parentID = 'MARKER_GROUP'; 
		GX_DeleteObject(ObjID);	
		gNewObjectID = ObjID; 
		gNewParentID = parentID; 
		gNewName = name; 
		GXRDE_addNewSVGObject(ObjID, parentID, objectType, callbackFn);
		return; 
		
	}	
	//change the tab only when SVG_shape/path/image objects being added as the object need to be added to the tree
	WAL_SetTabIndex('rightTabs', 0);
	
	var currNodeType = gCurrentTreeNode.getAttribute('type');
	if ( (Type != 'GROUP') && (currNodeType != 'GROUP')){
	//	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+gCurrLayerNode.id); 
	//	currNodeType = gCurrentTreeNode.getAttribute('type');
	}	
	
	if(objectType == 'GROUP')
	{
		parentID = 'SVGOBJECTCONTAINER'; 
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+parentID);
	}
	else{
		//_rm directly sets the parent here 
		//unselect any item selected now 
		if(gCurrentObjectSelected)
			GX_SetSelection(gCurrentObjectSelected, false, false); 
		if(gCurrLayerNode){
			parentID = gCurrLayerNode.id;
		}else{
			Debug_Message("Group node not set"); 
			return ; 
		}
	}	
	
	gNewObjectID = ObjID; 
	gNewObjType = objectType;
	gNewParentID = parentID; 	
	if(objectType == 'POLYGON')
		retval = GXRDE_addNewSVGPolygonObject(ObjID, parentID, objectType, gnPolygonSides, gPolygonLength, callbackFn); 
	else if(objectType == 'GROUP'){
		retval = GXRDE_addNewSVGGroupObject(ObjID, parentID, objectType, name, callbackFn); 		
	}
	else if(objectType == 'IMAGE'){
		var url = name; 
		GXRDE_addNewImageObject(ObjID, parentID, objectType, url, callbackFn); 
	}
	else{
		//change the cursor to cell here 
		//gsvgRootNode.setAttribute("cursor", "cell");
		retval = GXRDE_addNewSVGObject(ObjID, parentID, objectType, callbackFn);	
	}
}

var gNewObjType = 0;
var gNewParentID = 0; 
var gNewName = 0; 
function callbackSVGAddDefualtFn(retval){
	
	var objectType = gNewObjType;
	var parentID = gNewParentID; 
	var ObjID = gNewObjectID; 	
	//if(objectType ==  'IMAGE')
	//	return; 
	var myobjType; 
	 var nodeTitle; 
	if(retval != 'ERROR')
	{		//rm star jere 
		 GX_AddNewNodeFromXMLString(parentID, retval); 
		 var newNode = document.getElementById(ObjID);
		 if(!newNode)
			 return ; 
		  var nodename  = newNode.nodeName.toUpperCase(); 
		  var parentTreeID = 0;//gCurrLayerNode.id;
		  if(objectType == 'GROUP')
		  {
			  myobjType = 'GROUP';
			  var classval = newNode.getAttribute('class'); 
			  nodeTitle = classval.split(' '); 
			  nodeTitle = 'Group:' + nodeTitle[1];  
			  parentTreeID =  'SVGOBJECTCONTAINER';
		  }			  
		  else
		  {
			  myobjType = 'OBJECT';
			  nodeTitle = nodename; 
			  var classval = newNode.getAttribute('class'); 
			  nodeTitle = classval.split(' '); 
			  nodeTitle = nodeTitle[1]; 
			  parentTreeID = gCurrLayerNode.id;
		  }	 
		 var newXMLStr = '<li id="TM_'+ ObjID + '"  type="' + myobjType+ '" class="TREEMENU" level="3" dataid="' +ObjID + '"  data-type="' + nodename +'"  name="'+ nodeTitle+'"></li>';
		 var groupID; 
		 var groupItem = WAL_getTreeItem(gTreeNodeID, 'TM_'+ parentTreeID); 
		 WAL_AddTreeItem(gTreeWidgetID, newXMLStr, groupItem, "", true);	
		 //WAL_AddTreeItem(gTreeWidgetID, newXMLStr, gCurrentTreeNode, "", true);		 
	}	
	if(gSVGFilename)
	{		
		GX_InitializeDocument(gSVGFilename);
		if(gObjectList)
		{
			//this is because gObjectList should be populated only at the begining 
			//hence in between while new object is createdthe list should not be recreated
			var objNode = document.getElementById(ObjID); 
			var objType = objNode.classList[0]; 
			if( (objType == 'SVG_SHAPE_OBJECT') || (objType == 'SVG_IMAGEOBJECT') || (objType == 'SVG_PATH_OBJECT' ) || (objType == 'SVG_TEXT_OBJECT' ) )
				gObjectList.push([ObjID, objType]); 
		}
	}
	if(objType == 'SVG_TEXT_OBJECT'){
		//WAL_SetMenuItem('GXmenu', 'properties');
		//GX_showEditorInterface('PROPERTIES_MODE');
	}
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+ObjID);		
	if( (objectType != 'GROUP') && (objectType != 'POLYGON') && (objType != 'SVG_TEXT_OBJECT')&& (objType != 'IMAGE') ){
		GX_StartFreeDraw('DRAW_MODE');	
	}
	else{
		if(objectType != 'GROUP')
			GX_ManageUIState('NEW_OBJECT_ADDED'); 
	}
	
	//best is to reload the entire file 
	//if(objectType == 'GROUP')
	//	GX_ReloadSVG(ObjID, true); 			
}


function GX_CloseSVGFile()
{
	var dataNode = document.getElementById('objectcontainer');     	
	var svgObjNode = document.getElementById('SVGOBJECTCONTAINER');
	var svgassetnode = document.getElementById('editingassets');
	var rootNode = document.getElementById('SVGContainer'); 
	//var copyNode = svgassetnode.cloneNode(true); 
	
	//var rectBorderNode = document.getElementById('svgborder');
	if(!svgObjNode)
		return ; 	
	EL_SaveEditList(gCompactEditList, true);
	var nodelist = dataNode.childNodes; 
	var length = nodelist.length; 
	var childnode; 
	var bHasChild = dataNode.hasChildNodes(); 
	while(bHasChild == true)
	{
		childnode = dataNode.firstChild; 
		if(childnode)
			dataNode.removeChild(childnode); 
		bHasChild = dataNode.hasChildNodes();
	}	
	
	gObjectList = 0; 	
	gFileNameTitleNode.innerHTML = gInitTitle + ""; 
	gFileNameHolder.innerHTML = "";
	gSVGDimInfoHolder.innerHTML =""; 
	gSVGFilename = "";
	//$(gCurrGripperSel).css({visibility: "hidden"});
	$(gCurrGripperSel).hide(); 
	//GX_UpdateMarkers(0, false, false); 
	GX_HidePathMarker(); 
	WAL_ClearTreeItem(gTreeWidgetID); 
	
}

//all event handlers should start with On 
function OnShapeObjectSelection(evt){    
    var node = evt.target;
    if(bMove == true)
    	return ; 
   
    if(evt.ctrlKey){
    	GX_SelectObjectInMultiMode(node); 
    	return ; 
    }
    if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node))   
    {
    	 //GX_SetSelection(node, true);
    	if(bTreeWidgetDisplay == true)
    		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+node.id);
    	else{
    			GX_SetSelection(gCurrentObjectSelected, false, true);
    			GX_SetSelection(node, true, true);
    	}
    }
    //_rm this is to force repeate selection in case of free drawing mode 
    else if(gCurrentObjectSelected == node)
    	GX_SetSelection(node,true, true);    	
         return;                        
 }
var gCurrentGroup = 0; 

function GX_SetSelection(objNode, bFlag, bShowMarkers) {
	if(!objNode)
		return ; 
    var node = objNode; 
    if(!gCurrGrabber)
    	gCurrGrabber = document.getElementById("sel_gripper");
    var x, y, w, h;
    var num;
    var initPoint;   
    var nodeClass = objNode.classList[0];  
    //play around witth the opacity of objects 
    if( (nodeClass == 'SVG_SHAPE_OBJECT')  || (nodeClass == 'SVG_IMAGE_OBJECT') || (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT') )
    {
    	gCurrLayerNode = objNode.parentNode;    	
    	gCurrLayerID = gCurrLayerNode.id; 
    	gCurrLayerTranslateValues = GX_GetTransformProperty(gCurrLayerNode, 'translate'); 
    	WAL_expandTreeItem(gTreeNodeID,'TM_'+gCurrLayerID, true); 
    	//incase text editor is opened 
    	if(nodeClass == 'SVG_TEXT_OBJECT')
    		GX_HideandUpdateTextData(); 
    }
    if (!gsvgRootNode)
    {
    	 gsvgRootNode = document.getElementById('SVGContainer');  
    }
    if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node)) {  
	   	if(gCurrentObjectSelected)
	   	{
	   		if(nodeClass == 'GROUP')
	   		{
	   			gCurrLayerNode = node; //i.e. l;ayer node is set here 
	   			GX_UpdateLayerChildElements(gCurrentObjectSelected); 
	   			
	   		}		   		
	   	}    	
    }
    if(bFlag == false)
    {
    	if(nodeClass == 'GROUP'){
    		GX_UpdateLayerChildElements(gCurrentObjectSelected);
    	}
    	//hide popover if any 
    	WAL_ShowPopover('sel_popup', false); 
    	//$(gCurrGripperSel).css({visibility:"hidden"});
    	$(gCurrGripperSel).hide(); 
    	objNode.setAttribute('pointer-events', 'visible');    	
    	if(objNode != gCurrentObjectSelected)
    		return ;      	 
       $('.CUSTOM_MARKER').hide(); 
    	//GX_UpdateMarkers(0, false, true);
    	GX_HidePathMarker(); 
    	$(gCurrGripperSel).css({opacity:'1.0'});
    	if(nodeClass == 'SVG_PATH_OBJECT')
    	{
    		GX_UpdatePathMarker(node.id, gPathDataArray, false);
    		GX_SetEraseEditAttributes(node, false);
    	}
    	GX_SetObjectAttribute(node, "", "", true, false);
    	GX_SaveObjectProperties(node, true);  
    	var objectType = gCurrentObjectSelected.classList[1]; 
    	if( (gObjectEditMode == 'PROPERTIES_MODE') || (objectType == 'FREEDRAW_PATH') )
    		GX_ShowObjectPropertyInterface(objectType, false); 
    	
    	gCurrentObjectSelected = 0; 
    	bMove = false;
    	bResize = false; 
    	JQSel = '#' + gCurrentObjectSelected.id; 
    	
    	if(gCurrAnimNode)
    	{    			
    		GX_RestoreAnimationObject(gCurrAnimNode.id);  
    		gCurrAnimNode=0;
    	}
    	gIndicatorPathNode.setAttribute('visibility', 'hidden'); 
    	 
    	// Debug_Message('Tooltip Closed');
    	 gOrigFreedrawPathVal = 0;     
    	 GX_SetDefaultPropOnUI(); 
    	 if(nAutoSaveMsg > MAX_AUTO_SAVE_MSG){
    		 GX_Notify('time', 'Changes Saved successfully', 3000);  
    		 nAutoSaveMsg = 0; 
    	 }
    	 else
    		 nAutoSaveMsg++; 
    	 
    	return ; 
    }
    //$(gCurrGripperSel).css({visibility:"visible"});
   
    /*
    if(gObjectEditMode == 'LAYOUT_MODE')
    	gCurrGrabber.setAttribute("pointer-events", "visible");
    else
    	gCurrGrabber.setAttribute("pointer-events", "visible");
    */
    
    //gCurrGrabber.setAttribute("stroke-opacity", "1.0");
    var x,y, w, h; 
    x = y = w = h = 0;
    if(nodeClass == 'GROUP'){
    	$('#sel_gripper')[0].style.border = '2px dashed #333';
    	
    }else{
    	$('#sel_gripper')[0].style.border = '2px solid #EF4D02';    	
    }
    
    GX_ManageUIState('SELECT_OBJECT');
    
    if( (nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_IMAGE_OBJECT') ||  (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT'))
    {
    	 gCurrSelectedObjectDim = GX_GetObjectAttribute(node, 'DIMENSION');
    	 if(gCurrSelectedObjectDim)
    	 {
    		 x = gCurrSelectedObjectDim.x; 
        	 y = gCurrSelectedObjectDim.y; 
        	 w = gCurrSelectedObjectDim.width;
        	 h = gCurrSelectedObjectDim.height; 
        	 x = x  + gCurrLayerTranslateValues.x;
         	 y = y  + gCurrLayerTranslateValues.y;
         	 if(gSnapToGrid == true){
         		gCurrSelectedObjectDim.x = GX_ConvertToMultipleOf(gCurrSelectedObjectDim.x, 10) ; 
         		gCurrSelectedObjectDim.y = GX_ConvertToMultipleOf(gCurrSelectedObjectDim.y, 10) ; 
         		if(nodeClass != 'SVG_PATH_OBJECT')
         		  GX_SetRectObjectDim(node, gCurrSelectedObjectDim); 
         	 }
    	 }
    	  var JQSel = '.SVG_SHAPE_OBJECT'; 
    	 
    	    
    	  JQSel = '.SVG_PATH_OBJECT';
    	 
    	  
    	  var JQSel = '.SVG_TEXT_OBJECT'; 
    	 
    	   
    	 JQSel = '#' + node.id; 
    	  	
    }
    else if(nodeClass == 'GROUP')
    {
    	/*var layerDim = GX_GetLayerDimension(node.id);
    	x = layerDim.x; 
   	 	y = layerDim.y; 
   	 	w = layerDim.width;
   	 	h = layerDim.height;
   	 	*/  
   	 	gCurrSelectedObjectDim = GX_GetLayerDimension(node.id);
    }    
    
    if(gSnapToGrid == true){		
		$(gCurrGripperSel).draggable( "option", "grid",[10,10]);
		$(gCurrGripperSel).resizable( "option", "grid",[10,10]);
	}
	else{
		$(gCurrGripperSel).draggable( "option", "grid",[1,1]);
		$(gCurrGripperSel).resizable( "option", "grid",[1,1]);
	}    
    if(gCurrentObjectSelected != node)   	
    	gPrevAttributeList = EL_getObjectAttributes(node);
   
    gCurrentObjectSelected = node;   
    gGrabberDim = new sDimension(); 
    gGrabberDim.x = gCurrSelectedObjectDim.x;// - Math.round(scrollLeft/gZoomFactor); 
    gGrabberDim.y = gCurrSelectedObjectDim.y;// - Math.round(scrollTop/gZoomFactor); 
    gGrabberDim.width = gCurrSelectedObjectDim.width; 
    gGrabberDim.height = gCurrSelectedObjectDim.height; 
    GX_SetRectObjectDim(gCurrGrabber, gGrabberDim);
    var newX = (gGrabberDim.x +50); 
    var newY = (gGrabberDim.y +120); 
    //$(gCurrGripperSel).show(200); 
    $(gCurrGripperSel).show();
    //gGripperTextSpanNode.innerHTML = 'X-Pos: '+ gCurrSelectedObjectDim.x + 'px Y-Pos: ' + gCurrSelectedObjectDim.y + 'px'; 
   
   
     
    //now restrict the region of containtment 
    var svgNode = document.getElementById('SVGOBJECTCONTAINER'); 
    var svgDim = GX_GetRectObjectDim(svgNode);
    var x1, y1, x2, y2;
    with(Math){    	
    	x1 = round(gCurrentCanvasDim.x - 10); 
    	y1 = round(gCurrentCanvasDim.y + gClientYOffset -7); 
    	x2 = round(x1 + gCurrentCanvasDim.width - gGrabberDim.width) ; 
    	y2 = round(y1 + gCurrentCanvasDim.height - gGrabberDim.height); 
        
        //x2 = round((svgDim.x + svgDim.width -5 - gGrabberDim.width)*gInvZoomFactor); 
        //y2 = round((y1 + svgDim.height - 5 - gGrabberDim.height)*gInvZoomFactor); 	
    }        
    var region = [x1, y1, x2, y2]; 
    //$(gCurrGripperSel).draggable( "option", "containment", region );
    $(gCurrGripperSel).draggable( "option", "containment", "parent" );
    
    
   // WAL_ShowTooltip(gSelectorTooltipID, false)f; 
    //set the tooltip here
      
    
    //this is to ensure while a new object is being added with 0 Dim. doesnt show up 
    if( (gCurrSelectedObjectDim.width == 0) && (gCurrSelectedObjectDim.height == 0) )
    	$(gCurrGripperSel).hide(); 
    	//$(gCurrGripperSel).css({visibility:'hidden'});
    
    $(gCurrGripperSel).resizable( "enable" );
    $(gCurrGripperSel).resizable( "option", "containment", "parent" );    
    if( (nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_IMAGE_OBJECT')){
    	//set the maxDimension here 
    	var maxdim = GX_GetObjectMaxDimensionToResize(gGrabberDim); 
    	$(gCurrGripperSel).resizable( "option", "maxWidth", maxdim.width );
    	$(gCurrGripperSel).resizable( "option", "maxHeight", maxdim.height );
    	$(gCurrGripperSel).resizable("option", "handles", "all");    	
    }
    if(nodeClass == 'SVG_PATH_OBJECT')
    {    	
    	var pathType = node.classList[1]; 
    	/*if((bShowMarkers ==  true)  || (gObjectEditMode == 'PROPERTIES_MODE') )		  
    		GX_AddPathMarker(node.id, gPathDataArray, true); 
    	*/ 
    	if(gObjectEditMode == 'MARKER_MODE'){
    		if(node.classList[1] == 'POLYGON')
    			WAL_enableDropdownListItem('markerTypeListDDL', 1); 
    		else
    			WAL_disableDropdownListItem('markerTypeListDDL', 1); 
    			
    		GX_UpdatePathMarker(node.id, gPathDataArray, false); 
    	}
    	///$('[data-toggle="tooltip"]').tooltip({html:true, trigger:'hover', title:"Click on the <b>Edit Point</b>button to edit the path" });
    	//$('[data-toggle="tooltip"]').tooltip('show');
    	//var tipText = 'Click on the <b>Edit Points</b> button <br> in <b>Properties</b> tab to edit path'; 
    	        	
    }
    if( (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'GROUP') || (nodeClass == 'SVG_TEXT_OBJECT')){
    	//$(gCurrGripperSel).resizable( "disable" );    	
    	//$(gCurrGripperSel).resizable( "option", "cancel", ".cancel" );    	
    	$(gCurrGripperSel).resizable( "option", "maxWidth",  $(gCurrGripperSel).width() );
    	$(gCurrGripperSel).resizable( "option", "maxHeight",  $(gCurrGripperSel).height() );
    	$(gCurrGripperSel).css({opacity:'1'});
    } 		
  
    //_rm trying out if an object can be selected even from a group selection
    //gCurrentObjectSelected.setAttribute('pointer-events', 'none'); 
    GX_SetPropertyonUI(gCurrentObjectSelected); 
    if(gCurrentTabIndex == 0 )
    	GX_ShowPopupTips(gTiptextArr['OBJECT_SELECTION_TEXT']);
    else if(gCurrentTabIndex == 1){
    	if(nodeClass == 'SVG_PATH_OBJECT'){
    		GX_ShowPopupTips(gTiptextArr['PATH_SELECTION_TEXT']);
    	}
    }
    
    //Opacity control code here 
    $('.GROUP').attr('opacity', gOpacityUnSelect);   
    if(gCurrentObjectSelected.classList[0] == 'GROUP')
    	gCurrentGroup = gCurrentObjectSelected;
    else{
    	gCurrentGroup = gCurrentObjectSelected.parentNode; 
    }
    $('#'+gCurrentGroup.id).attr('opacity', '1');  
     
    //set the tooltip here 
    /*
    if(nodeClass == 'SVG_TEXT_OBJECT')
	{    	
		var fontsize = gCurrentObjectSelected.getAttribute('font-size'); 
	 	GX_UpdatePropertyOnUI('FONT_SIZE', fontsize);
	 	var fontname = gCurrentObjectSelected.getAttribute('font-family');
	 	GX_UpdatePropertyOnUI('FONT_NAME', fontname); 	
	 	var pointpos =  new sPoint(); 
	 	pointpos.x = gCurrentObjectSelected.getAttribute('x'); 
	 	pointpos.y = gCurrentObjectSelected.getAttribute('y'); 
	 	GX_UpdatePropertyOnUI('POSITION', pointpos);
	 	var dim =  new sDimension(); 
	 	dim = GX_GetRectObjectDim(gCurrentObjectSelected);
	 	GX_UpdatePropertyOnUI('HEIGHT', dim.height);
	 	GX_UpdatePropertyOnUI('WIDTH', dim.width);
	}
	*/ 
    return;
    
}
function GX_updateEditAttributes()
{
	var JQSel = ".SVG_SHAPE_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 		
	$(JQSel).attr('pointer-events','visible' ); 
	
	JQSel = ".SVG_PATH_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 		
	$(JQSel).attr('pointer-events','all' );
	
	JQSel = ".SVG_TEXT_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 		
	$(JQSel).attr('pointer-events','visible' ); 
	
	JQSel = ".SVG_IMAGE_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 		
	$(JQSel).attr('pointer-events','visible' ); 
	
}
function OnSVGParentClick(evt)
{
	var node = evt.target;
	var ID = node.id; 
	if(ID!= 'gridpattern')
		return ;	
	if(gCurrentObjectSelected){
		var nodeclass = gCurrentObjectSelected.classList[0] ;//('class'); 
		var parentNode = gCurrentObjectSelected.parentNode; 
	}
	
	//if it is text node then do the needful 
	//if( (gCurrentObjectSelected) && (gCurrentObjectSelected.nodeName.toUpperCase() == 'TEXT') && (gObjectEditMode == 'MODIFY_TEXT_MODE') )
		//GX_SaveText(gCurrentObjectSelected); 
	
	if(gFreeDrawMode)
		GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, gFreeDrawMode, false);
	
	if(!gCurrGrabber)
		return; 
	var status = gCurrGrabber.style.visibility ; //getAttribute('visibility'); 
	if(status == 'visible')
	{
		var dim = GX_GetRectObjectDim(gCurrGrabber); 
		
		var X = new Number(evt.clientX - gClientXOffset); 
		var Y =  new Number(evt.clientY- gClientYOffset);		
		X = Math.round((X + window.pageXOffset)*gZoomFactor); 
		Y = Math.round((Y + window.pageYOffset)*gZoomFactor);	
		X += gPanX;
		Y += gPanY; 
		if( (X > dim.x) && (X < (dim.x+dim.width)) )
			if( (Y > dim.y) && (Y < (dim.y+dim.height)) )
			{
				//Debug_Message("Inside Grabber");
				return ; 
			}
		
	}
	
	var selItemID ; 
	
	GX_ResetAllSelections();
	//WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+selItemID); 
	selItemID = 'SVGOBJECTCONTAINER'; 
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+selItemID); 	
	
	
}

function GX_ResetAllSelections()
{
	 var JQSel = '.GROUP'; 
	 
	//restore the animation object
	 $(JQSel).attr('opacity', '1'); 
	 gControlKey = false; 
	if(gCurrentObjectSelected)
	{
		var nodeclass = gCurrentObjectSelected.classList[0] ;//('class'); 
    	if(nodeclass == 'GROUP')
    		GX_UpdateLayerChildElements(gCurrentObjectSelected); 
    	
		GX_SetSelection(gCurrentObjectSelected, false, true);	 
		gCurrDirection = 'NONE'; 
		gsvgRootNode.setAttribute("cursor", "auto");  	  
		
		gIndicatorPath = []; 
		var pathNode = document.getElementById('indicatorpath'); 
		pathNode.setAttribute('d', ''); 		
		bMarkerMove = false;  
		GX_SetMarkerNodeSelection(gCurrentMarkerNode, false);   
	}
	$(gDivPathMarkerSel).css({visibility:'hidden'});
	if(gbMultiSelection == true)
	{
		EL_SaveEditList(gCompactEditList, true); 
		GX_DeselectObjectFromMultiMode(); 
		gbMultiSelection = false;		
	}
	if(gEnableMultiSelection == true){
		$('#gripper').attr('visibility', 'hidden'); 
		gEnableMultiSelection = false; 
	}
	var JQSel = '.SVG_SHAPE_OBJECT'; 
	
	JQSel = '.SVG_PATH_OBJECT';
	
	JQSel = '.SVG_TEXT_OBJECT'; 
	
	
	//resetting the alignbuttons 
	gbAlignDimension =  true;
	WAL_disableWidget('alignwidth_icon', 'data-customButton', false, false);
	WAL_disableWidget('alignheight_icon', 'data-customButton', false, false);
	
	GX_HideandUpdateTextData(); 
	GX_ResetAnimSelection(); 	
	GX_ManageUIState('UNSELECT_OBJECT'); 
	
}
//incase of pointmarker only the x,y corodinate of GrabberDim should be used 

///*

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
	  if(gObjectEditMode == 'ANIMATION_EDIT_MODE')
			return; 
	gsvgRootNode.setAttribute("cursor", gCurrDirection);
	if(gObjectEditMode == 'PROPERTIES_MODE')
		gCurrGrabber.setAttribute('pointer-events', 'visible');
	else
		gCurrGrabber.setAttribute('pointer-events', 'none');
	
    if(bResize == false) {
        bResize = true;
        gOrigMousePosX = ClientX;
        gOrigMousePosY = ClientY;
        //trap the init dimension of grabber and object
      
        var dim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
        gCurrSelObjOrigWidth = dim.width;
        gCurrSelObjOrigHeight = dim.height;
        
      
        dim = GX_GetObjectAttribute(gCurrGrabber, 'DIMENSION');
        if (gCurrDirection == "e-resize") {
            gGrabberDim.width = dim.width+gObjectTolerance;
            gGrabberDim.height = dim.height;
        }
        else if (gCurrDirection == "w-resize") {
      	  gGrabberDim.x =gGrabberDim.x - gObjectTolerance; 
            gGrabberDim.width = dim.width + gObjectTolerance;
            gGrabberDim.height = dim.height ;
        }
        else if (gCurrDirection == "n-resize") {
      	  gGrabberDim.y =gGrabberDim.y - gObjectTolerance;  
            gGrabberDim.width = dim.width;                 
            gGrabberDim.height = dim.height + gObjectTolerance;                                 
        }
        else if (gCurrDirection == "s-resize") {
            gGrabberDim.width = dim.width;
            gGrabberDim.height = dim.height + gObjectTolerance;
        }
        else if (gCurrDirection == "se-resize") {
            gGrabberDim.width = dim.width+gObjectTolerance;
            gGrabberDim.height = dim.height + gObjectTolerance;
        }
        else if (gCurrDirection == "sw-resize") {
      	  gGrabberDim.x -= gObjectTolerance;            	  
            gGrabberDim.width = dim.width+gObjectTolerance;
            gGrabberDim.height = dim.height + gObjectTolerance;
        }
        else if (gCurrDirection == "ne-resize") {
      	  gGrabberDim.y -= gObjectTolerance;
            gGrabberDim.width = dim.width+gObjectTolerance;
            gGrabberDim.height = dim.height + gObjectTolerance;
        }
        else if (gCurrDirection == "nw-resize") {
      	  gGrabberDim.x -= gObjectTolerance;
      	  gGrabberDim.y -= gObjectTolerance;
            gGrabberDim.width = dim.width + gObjectTolerance;
            gGrabberDim.height = dim.height + gObjectTolerance;
        }
       
       // gCurrGrabber.setAttribute("stroke-opacity", gOpacityUnSelect);
       // GX_SetRectObjectDim(gCurrGrabber, gGrabberDim);           
       // gCurrGrabber.setAttribute("pointer-events", "all");           
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
//GX_UpdateObjectProperties
function GX_SaveObjectProperties(objNode, bAsync)
{
	if(!objNode)
		return ;
	
	EL_SaveEditList(gCompactEditList, bAsync); 
	//EL_SaveEditList(gCompactEditList, true);
	
	//update the properties on the head end side 
}


function OnObjectMouseDown(evt,ui) {	
	  
	if(!gCurrentObjectSelected)
		return ;
	//Debug_Message('Object Mouse Down'); 
	//if(gObjectEditMode == 'ANIMATION_EDIT_MODE')
	//	return; 
	var objectType; 
	if(gbContextMenuShow == true)
		return; 
	objectType =  gCurrentObjectSelected.classList[0];  	
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
    //if it is not resize mode then check for 
	
	gGrabberDim = GX_GetObjectAttribute(gCurrGrabber, 'DIMENSION');
	
	//Debug_Message("x=" + gGrabberDim.x + "y=" +gGrabberDim.y); 
	if((objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') ) 
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
	else if(objectType == 'SVG_TEXT_OBJECT')
	{
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
		//_rm to override the boundary box dimension 
		gCurrSelectedObjectDim.x = gCurrentObjectSelected.getAttribute('x'); 
		gCurrSelectedObjectDim.y = gCurrentObjectSelected.getAttribute('y');		
	}
	else if(objectType == 'GROUP')
	{
		gCurrSelectedObjectDim = GX_GetTransformProperty(gCurrentObjectSelected, 'translate'); 
		//Debug_Message("CurrX=" +gCurrSelectedObjectDim.x +"CuerrY=" +  gCurrSelectedObjectDim.y); 
	}    
	else if(objectType == 'SVG_PATH_OBJECT')
	{
		GX_UpdatePathData(gCurrentObjectSelected); 
		GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, false); 		
	}
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
          /*  if(objectType == 'SVG_PATH_OBJECT')
            	GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
            	*/ 
            GX_SetSelection(gCurrentObjectSelected, true, true);
        }            
    }
    else
    {
    	gsvgRootNode.setAttribute("cursor", "auto");
        evt.target.setAttribute("pointer-events", "visible");
        bResize = false;
        gCurrDirection = 'none';     
        if(gObjectEditMode == 'PROPERTIES_MODE')
    		gCurrGrabber.setAttribute('pointer-events', 'none');
        GX_SetSelection(gCurrentObjectSelected, true); 
    }
    
    
    
}



/*
function OnObjectMove(evt) {

	//trap new coordiantes and store the relative mouse coordinaes
    var relX, relY;
    var retVal;
   // var ClientX, ClientY; 
    ClientX = (evt.clientX - gClientXOffset); 
    ClientY = (evt.clientY - gClientYOffset); 
    if (bMove == true){
    	if (!gCurrentObjectSelected)
            return;
        if ((gOrigMousePosX == -1) || (gOrigMousePosY == -1)) {
            gOrigMousePosX = ClientX ;//evt.clientX;
            gOrigMousePosY = ClientY ; //evt.clientY;                
        }
       
        relX = ClientX;
        relY = ClientY;
        relX = relX - gOrigMousePosX;
        relY = relY - gOrigMousePosY;
        newObjDim.x = gGrabberDim.x + relX;
        newObjDim.y = gGrabberDim.y + relY;   
        newObjDim.width = gGrabberDim.width; 
        newObjDim.height = gGrabberDim.height;                  
        retVal = GX_SetRectObjectDim(gCurrGrabber,newObjDim); 
        if(retVal == false)
        	return ; 
        
       // UpdateMarkers(newObjDim, true); 

      
        
        newObjDim.x = newObjDim.x+5; 
        newObjDim.y = newObjDim.y+5 
        newObjDim.width = newObjDim.width-5 ;
        newObjDim.height = newObjDim.height-5;                 
        retVal = GX_SetRectObjectDim(gCurrentObjectSelected,newObjDim);
        if(retVal == false)
        	return ; 
    }
}

*/


var gLastPosX = 0;
var gLastPosY = 0;
var gMaxPos = new Number(50); 

function OnObjectMove(evt,ui) {

    //trap new coordiantes and store the relative mouse coordinaes
    var relX, relY;
    var retVal=true;
    if(gCurrentObjectSelected)
    	var objectType = gCurrentObjectSelected.classList[0];
   if(gbContextMenuShow == true){
	   bMove = false;
   }
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
        relX = (relX - gOrigMousePosX)*gZoomFactor;
        relY = (relY - gOrigMousePosY)*gZoomFactor;
        newObjDim.x = gGrabberDim.x + relX;
        newObjDim.y = gGrabberDim.y + relY;   
        newObjDim.width = gGrabberDim.width; 
        newObjDim.height = gGrabberDim.height; 
        
       // retVal = GX_SetRectObjectDim(gCurrGrabber,newObjDim); 
      //  retVal =  GX_SetObjectAttribute(gCurrGrabber, "DIMENSION", newObjDim, false, false);
      //  Debug_Message("New x=" + newObjDim.x + "New y=" +newObjDim.y); 
        if(retVal == false)
        	return ; 
       // if(objectType == 'SVG_SHAPE_OBJECT')	
        //	GX_UpdateMarkers(newObjDim, true, false); 
         
        if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') || (objectType == 'SVG_TEXT_OBJECT') )
        {
        	newObjDim.x = gCurrSelectedObjectDim.x + relX; 
            newObjDim.y = gCurrSelectedObjectDim.y + relY; 
            newObjDim.width = gCurrSelectedObjectDim.width; 
            newObjDim.height =  gCurrSelectedObjectDim.height; 
            newObjDim.rotate = gCurrSelectedObjectDim.rotate;          
            newObjDim.rotCentreX = Math.round(newObjDim.x + newObjDim.width/2);
            newObjDim.rotCentreY = Math.round(newObjDim.y + newObjDim.height/2);
            if(gCurrentObjectSelected.classList[1]== 'ELLIPSE')
            {
            	newObjDim.x = newObjDim.rotCentreX;
                newObjDim.y = newObjDim.rotCentreY; 
            } 
            else if(gCurrentObjectSelected.classList[1]== 'CIRCLE')
            {
            	newObjDim.x = newObjDim.rotCentreX;
                newObjDim.y = newObjDim.rotCentreY; 
            }  
            retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", newObjDim, false, false);
                      
        }        	
    	else if(objectType == 'GROUP')
    	{    		
    		newObjDim.x = gCurrSelectedObjectDim.x+relX; 
            newObjDim.y = gCurrSelectedObjectDim.y+relY;       
           // Debug_Message("NewX="+newObjDim.x + "NewY="+ newObjDim.y +"gCurrSelectedObjectDim.x=" + gCurrSelectedObjectDim.x + "relX=" + relX);
    		GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
    		//GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", newObjDim, false, false);
    		
    	}   
    	else if(objectType == 'SVG_PATH_OBJECT')
    	{
    		newObjDim.x = relX ;//gCurrSelectedObjectDim.x+relX;
    		newObjDim.y = relY ;// gCurrSelectedObjectDim.y+relY;          
    		GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
    	}
        if((objectType == 'SVG_SHAPE_OBJECT')|| (objectType == 'SVG_IMAGE_OBJECT') )
        	GX_UpdatePropertyOnUI('DIMENSION', newObjDim); 
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
			relX = relX * gZoomFactor;
			relY = relY * gZoomFactor; 
			var newGrabberDim =  new sDimension(); 
			var newObjDim = new sDimension(); 
			
            if (gCurrDirection == 'e-resize') {
                //resize the grabber first
                newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width + relX;
                newGrabberDim.height = gGrabberDim.height; 
                
                newObjDim.x = gCurrSelectedObjectDim.x; 
                newObjDim.y = gCurrSelectedObjectDim.y; 
                newObjDim.width = gCurrSelectedObjectDim.width + relX;
                newObjDim.height = gCurrSelectedObjectDim.height; 
                
            }
            else if (gCurrDirection == 'w-resize') {
                    //resize the grabber first
                    newGrabberDim.x = gGrabberDim.x+relX; 
                    newGrabberDim.y = gGrabberDim.y; 
                    newGrabberDim.width = gGrabberDim.width - relX;
                    newGrabberDim.height = gGrabberDim.height; 
                    
                    newObjDim.x = gCurrSelectedObjectDim.x+relX; 
                    newObjDim.y = gCurrSelectedObjectDim.y; 
                    newObjDim.width = gCurrSelectedObjectDim.width - relX;
                    newObjDim.height = gCurrSelectedObjectDim.height;
                    
                    
            }
            else if (gCurrDirection == 'n-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y+relY; 
                newGrabberDim.width = gGrabberDim.width ;      
                newGrabberDim.height = gGrabberDim.height - relY;  
                
                newObjDim.x = gCurrSelectedObjectDim.x; 
                newObjDim.y = gCurrSelectedObjectDim.y+relY; 
                newObjDim.width = gCurrSelectedObjectDim.width ;      
                newObjDim.height = gCurrSelectedObjectDim.height - relY; 
            }
            else if (gCurrDirection == 's-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width ;      
                newGrabberDim.height = gGrabberDim.height + relY;  
                
                newObjDim.x = gCurrSelectedObjectDim.x; 
                newObjDim.y = gCurrSelectedObjectDim.y; 
                newObjDim.width = gCurrSelectedObjectDim.width ;      
                newObjDim.height = gCurrSelectedObjectDim.height + relY;  
            }
            else if (gCurrDirection == 'se-resize') {
            	newGrabberDim.x = gGrabberDim.x; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width + relX;      
                newGrabberDim.height = gGrabberDim.height +  relY; 
                
                newObjDim.x = gCurrSelectedObjectDim.x; 
                newObjDim.y = gCurrSelectedObjectDim.y; 
                newObjDim.width = gCurrSelectedObjectDim.width + relX;      
                newObjDim.height = gCurrSelectedObjectDim.height +  relY; 
            }
            else if (gCurrDirection == 'sw-resize') {
            	newGrabberDim.x = gGrabberDim.x +relX; 
                newGrabberDim.y = gGrabberDim.y; 
                newGrabberDim.width = gGrabberDim.width - relX;      
                newGrabberDim.height = gGrabberDim.height +  relY;  
                
                newObjDim.x = gCurrSelectedObjectDim.x +relX; 
                newObjDim.y = gCurrSelectedObjectDim.y; 
                newObjDim.width = gCurrSelectedObjectDim.width - relX;      
                newObjDim.height = gCurrSelectedObjectDim.height +  relY; 
            }
            else if (gCurrDirection == 'ne-resize') {
            	newGrabberDim.x = gGrabberDim.x ; 
                newGrabberDim.y = gGrabberDim.y +relY; 
                newGrabberDim.width = gGrabberDim.width + relX;      
                newGrabberDim.height = gGrabberDim.height -  relY;  
                
                newObjDim.x = gCurrSelectedObjectDim.x ; 
                newObjDim.y = gCurrSelectedObjectDim.y +relY; 
                newObjDim.width = gCurrSelectedObjectDim.width + relX;      
                newObjDim.height = gCurrSelectedObjectDim.height -  relY;  
            }
            else if (gCurrDirection == 'nw-resize') {
            	newGrabberDim.x = gGrabberDim.x +relX; 
                newGrabberDim.y = gGrabberDim.y +relY; 
                newGrabberDim.width = gGrabberDim.width - relX;      
                newGrabberDim.height = gGrabberDim.height -  relY; 
                
                newObjDim.x = gCurrSelectedObjectDim.x +relX; 
                newObjDim.y = gCurrSelectedObjectDim.y +relY; 
                newObjDim.width = gCurrSelectedObjectDim.width - relX;      
                newObjDim.height = gCurrSelectedObjectDim.height -  relY; 
            }
				if(gCurrDirection != 'none')
				{
					/*newObjDim.x = newGrabberDim.x; 
                    newObjDim.y = newGrabberDim.y ; 
                    newObjDim.width = newGrabberDim.width ;
                    newObjDim.height = newGrabberDim.height;
                    */
					                    
					retVal = GX_SetRectObjectDim(gCurrGrabber,newGrabberDim);   
					//retVal = GX_SetObjectAttribute(gCurrGrabber, "DIMENSION", newObjDim, false, false);
					
					if(retVal == false)
	                	return ; 
                   // GX_UpdateMarkers(newGrabberDim, true, false);           
                    retVal =GX_SetRectObjectDim(gCurrentObjectSelected,newObjDim);
                   // retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "DIMENSION", newObjDim, false, true);
                    if(retVal == false)
                    	return ; 
                    if((objectType == 'SVG_SHAPE_OBJECT')|| (objectType == 'SVG_IMAGE_OBJECT') )
                    	GX_UpdatePropertyOnUI('DIMENSION', newObjDim); 
			}
            
        }
    }   
}

var gbDragStarted =  false; 
function OnObjectDragStart(evt, ui){
	
	if(!gCurrentObjectSelected)
		return ;
	//Debug_Message('Object Mouse Down'); 
	//if(gObjectEditMode == 'ANIMATION_EDIT_MODE')
	//	return; 
	 var relX = new Number(ui.position.left - ui.originalPosition.left);
	 var relY = new Number(ui.position.top - ui.originalPosition.top);
	 gbDragStarted = false; 
	 if( (relX > 0 ) || (relY > 0)){
		 if(relX > 0)
			 Debug_Message("rel x  = " + relX);
		 if(relY > 0)
			 Debug_Message("rel y  = " + relY);
	 }
	var objectType; 
	if(gbContextMenuShow == true)
		return; 
	objectType =  gCurrentObjectSelected.classList[0];  	
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
    //if it is not resize mode then check for 
	
	//gGrabberDim = GX_GetObjectAttribute(gCurrGrabber, 'DIMENSION');
	
	//Debug_Message("x=" + gGrabberDim.x + "y=" +gGrabberDim.y); 
	if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') ) 
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
	else if(objectType == 'SVG_TEXT_OBJECT')
	{
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
		//_rm to override the boundary box dimension 
		gCurrSelectedObjectDim.x = gCurrentObjectSelected.getAttribute('x'); 
		gCurrSelectedObjectDim.y = gCurrentObjectSelected.getAttribute('y');
		if(gCurrentTabIndex == 1)
			GX_HideandUpdateTextData();
	}
	else if(objectType == 'GROUP')
	{
		gCurrSelectedObjectDim = GX_GetTransformProperty(gCurrentObjectSelected, 'translate'); 
		//Debug_Message("CurrX=" +gCurrSelectedObjectDim.x +"CuerrY=" +  gCurrSelectedObjectDim.y); 
	}    
	else if(objectType == 'SVG_PATH_OBJECT')
	{		
		GX_UpdatePathData(gCurrentObjectSelected); 
		GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, false); 		
	}
	//var currdim = GX_GetRectObjectDim(gCurrentObjectSelected);
	WAL_ShowPopover('sel_popup', false); 
}

var gMaxFalseOffset = new Number(5); 

function OnObjectDrag(evt, ui){
	
	    var relX, relY;
	    var retVal=true;
	    if (!gCurrentObjectSelected)
            return;
	    if(gCurrentObjectSelected)
	    	var objectType = gCurrentObjectSelected.classList[0];
	   if(gbContextMenuShow == true){
		   bMove = false;
	   }	   
	    var newObjDim = new sDimension(); 	   
	        
	    relX = new Number(ui.position.left - ui.originalPosition.left);
	    relY = new Number(ui.position.top - ui.originalPosition.top);	
	    var maxValue = Math.max(relX, relY); 
	    if((gbDragStarted == false) && (maxValue >  gMaxFalseOffset) ){
	    	GX_ResetAllSelections(); 	    	
	    	selItemID = 'SVGOBJECTCONTAINER'; 
	    	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+selItemID); 
	    	//Debug_Message('Rel Value exceeds:' +  relX); 
	    	return ; 
	    }
	    gbDragStarted = true; 		
	    
	    relX = Math.round(relX / gZoomFactor); 
	    relY = Math.round(relY / gZoomFactor);	   
	    newObjDim.x = relX ;//gCurrSelectedObjectDim.x+relX;
	    newObjDim.y = relY ;// gCurrSelectedObjectDim.y+relY;  
	    newObjDim.rotate = gCurrSelectedObjectDim.rotate;//.
	    newObjDim.rotCentreX = gCurrSelectedObjectDim.rotCentreX +relX ;
	    newObjDim.rotCentreY = gCurrSelectedObjectDim.rotCentreY + relY; 
	    newObjDim.radius = gCurrSelectedObjectDim.radius;
    	GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
    	/*if(gCurrSelectedObjectDim.rotate != 0){
    		newObjDim.rotate = gCurrSelectedObjectDim.rotate;          
            newObjDim.rotCentreX = Math.round(newObjDim.x + gCurrSelectedObjectDim.width/2);
            newObjDim.rotCentreY = Math.round(newObjDim.y + gCurrSelectedObjectDim.height/2);
            GX_SetTransformProperty(gCurrentObjectSelected, 'rotate',newObjDim);
    	}*/
    	 
    		/*
	        if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_TEXT_OBJECT') )
	        {
	        	newObjDim.x = gCurrSelectedObjectDim.x + relX; 
	            newObjDim.y = gCurrSelectedObjectDim.y + relY; 
	            newObjDim.width = gCurrSelectedObjectDim.width; 
	            newObjDim.height =  gCurrSelectedObjectDim.height; 
	            newObjDim.rotate = gCurrSelectedObjectDim.rotate;          
	            newObjDim.rotCentreX = Math.round(newObjDim.x + newObjDim.width/2);
	            newObjDim.rotCentreY = Math.round(newObjDim.y + newObjDim.height/2);
	            var tipText = 'X-Pos: '+ newObjDim.x + 'px Y-Pos: ' + newObjDim.y + 'px'; 
	            if(gCurrentObjectSelected.classList[1]== 'ELLIPSE')
	            {
	            	newObjDim.x = newObjDim.rotCentreX;
	                newObjDim.y = newObjDim.rotCentreY; 
	            } 
	            else if(gCurrentObjectSelected.classList[1]== 'CIRCLE')
	            {
	            	newObjDim.x = newObjDim.rotCentreX;
	                newObjDim.y = newObjDim.rotCentreY; 
	            }            
	            GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
	        }        	
	    	else if(objectType == 'GROUP')
	    	{    		
	    		newObjDim.x = gCurrSelectedObjectDim.x+relX; 
	            newObjDim.y = gCurrSelectedObjectDim.y+relY;       
	           // Debug_Message("NewX="+newObjDim.x + "NewY="+ newObjDim.y +"gCurrSelectedObjectDim.x=" + gCurrSelectedObjectDim.x + "relX=" + relX);
	            var tipText = 'X-Pos: '+ newObjDim.x + 'px Y-Pos: ' + newObjDim.y + 'px'; 
	    		GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
	    		//GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", newObjDim, false, false);
	    		
	    	}   
	    	else if(objectType == 'SVG_PATH_OBJECT')
	    	{
	    		newObjDim.x = relX ;//gCurrSelectedObjectDim.x+relX;
	    		newObjDim.y = relY ;// gCurrSelectedObjectDim.y+relY;          
	    		var tipText = 'X-Pos: '+ newObjDim.x + 'px Y-Pos: ' + newObjDim.y + 'px'; 
	    		GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
	    	}
	    	*/
    		
	        
	        
	       
}
function OnObjectDragStop(evt,ui){	 
	   
    var retVal=true;
    if (!gCurrentObjectSelected)
        return;   
   if(gbContextMenuShow == true){
	   bMove = false;  
	 }
   
    gbDragStarted = false; 
    relX = new Number(ui.position.left - ui.originalPosition.left);
    relY = new Number(ui.position.top - ui.originalPosition.top);
    relX = Math.round(relX / gZoomFactor); 
    relY = Math.round(relY /gZoomFactor);
    //GX_MoveSelectedObject(relX, relY);    
    if(gCurrentObjectSelected.classList[0] == 'GROUP'){
    	GX_UpdateLayerChildElements(gCurrentObjectSelected);
    	return ; 
    }    
    GX_UpdatePosFromTranslation(gCurrentObjectSelected); 
    gCurrSelectedObjectDim =  GX_GetRectObjectDim(gCurrentObjectSelected);
    GX_UpdatePropertyOnUI('POSITION', gCurrSelectedObjectDim);
    if(gCurrentObjectSelected.classList[0] == 'SVG_TEXT_OBJECT'){
    	//set the bounading rectange     	    	 
    	GX_SetRectObjectDim(gCurrGrabber, gCurrSelectedObjectDim);
    	if(gCurrentTabIndex == 1)
    		WAL_TriggerEvent('click', 'editTextBtn');
    	//GX_MakeTextEditable(gCurrentObjectSelected);
    }
    if(gCurrentObjectSelected.classList[0] == 'SVG_PATH_OBJECT')
    {
    	var JQSel = ".PATH_MARKER";       
		$(JQSel).show();
		GX_UpdatePathData(gCurrentObjectSelected); 
		GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, false); 
    }
}

function OnObjectResizing(event, ui){
	var relW, relH; 
	var relLeft, relTop; 
	var objectType = gCurrentObjectSelected.classList[0]; 
	var newObjDim = new sDimension(); 
	if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') || (objectType == 'SVG_TEXT_OBJECT') ){
		relW = new Number(ui.size.width - ui.originalSize.width);
		relH = new Number(ui.size.height - ui.originalSize.height);		
		relW = Math.round(relW / gZoomFactor);
		relH = Math.round(relH /gZoomFactor);
		
		relLeft = new Number(ui.position.left - ui.originalPosition.left);	
		relTop = new Number(ui.position.top - ui.originalPosition.top);		
		relLeft = Math.round(relLeft / gZoomFactor); 
		relTop = Math.round(relTop /gZoomFactor);
		
		newObjDim.x = gCurrSelectedObjectDim.x + relLeft; 
	    newObjDim.y = gCurrSelectedObjectDim.y + relTop; 
	    newObjDim.width = gCurrSelectedObjectDim.width + relW; 
	    newObjDim.height =  gCurrSelectedObjectDim.height + relH; 	
	    newObjDim.radius = gCurrSelectedObjectDim.radius; 
		GX_SetRectObjectDim(gCurrentObjectSelected,newObjDim);
	}
	else{
			ui.element.width(ui.originalSize.width);
	        ui.element.height(ui.originalSize.height);
		
	}
}
function OnObjectResizeStop(event, ui){
	var relW, relH; 
	var relLeft, relTop; 
	var objectType = gCurrentObjectSelected.classList[0]; 
	var newObjDim = new sDimension(); 
	
	if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') || (objectType == 'SVG_TEXT_OBJECT') ){
		relW = new Number(ui.size.width - ui.originalSize.width); 
		relH = new Number(ui.size.height - ui.originalSize.height); 
		relW = Math.round(relW / gZoomFactor); 
		relH = Math.round(relH /gZoomFactor);
		
		relLeft = new Number(ui.position.left - ui.originalPosition.left);	
		relTop = new Number(ui.position.top - ui.originalPosition.top);		
		relLeft = Math.round(relLeft / gZoomFactor); 
		relTop = Math.round(relTop /gZoomFactor);
		newObjDim.x = gCurrSelectedObjectDim.x + relLeft; 
	    newObjDim.y = gCurrSelectedObjectDim.y + relTop;		
	    newObjDim.width = gCurrSelectedObjectDim.width + relW; 
	    newObjDim.height =  gCurrSelectedObjectDim.height + relH; 
	    newObjDim.radius = gCurrSelectedObjectDim.radius; 
	    if(gSnapToGrid == true){
        	newObjDim.width = GX_ConvertToMultipleOf(newObjDim.width, 10); 
        	newObjDim.height = GX_ConvertToMultipleOf(newObjDim.height, 10); 
        }
		GX_SetRectObjectDim(gCurrentObjectSelected,newObjDim);
		gCurrSelectedObjectDim = GX_GetRectObjectDim(gCurrentObjectSelected);		
		GX_SetRectObjectDim(gCurrGrabber,gCurrSelectedObjectDim);
		gGrabberDim = GX_GetRectObjectDim(gCurrGrabber); 
		GX_UpdatePropertyOnUI('DIMENSION', gCurrSelectedObjectDim);
	}
	else{	
			ui.element.width(ui.originalSize.width);
	        ui.element.height(ui.originalSize.height);
		
	}
	
}


function OnObjectResizeStart(event, ui){	
	relW = new Number(ui.size.width - ui.originalSize.width); 
	relH = new Number(ui.size.height - ui.originalSize.height);
	var nodeclass = gCurrentObjectSelected.classList[0]; 
	if(nodeclass == 'SVG_PATH_OBJECT'){
		ui.element.width(ui.originalSize.width);
        ui.element.height(ui.originalSize.height);
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
			GX_SetSelection(gCurrentObjectSelected, true, true);
	}
	else if(actionType == 'REDO')
	{
		retVal = EL_Redo(gObjectEditList, objID, gCompactEditList);	
		if(retVal)
			GX_SetSelection(gCurrentObjectSelected, true, true);
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
		if(!objNode.nextSibling.nextSibling)
			beforeNode =0 ; 
		else if(!objNode.nextSibling)
			return;
		else if(objNode.nextSibling.nextSibling)
			beforeNode = objNode.nextSibling.nextSibling;	
		prevNode = objNode.nextSibling; 
	}
	else if(Direction == 'TOP')
	{
		beforeNode = 0; 	
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
	else if(Direction == 'BOTTOM')
	{
		beforeNode = parentNode.firstElementChild; 	
		if(beforeNode == objNode)
			return; 
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
	GX_SetSelection(objNode, false, true);
	EL_AddToEditList(gObjectEditList, gCompactEditList, objParam);
	GX_MoveObjectNode(objNode.id, objParam.currValue, parentNode.id); 	
	objNode = document.getElementById(objNode.id);
	GX_SetSelection(objNode, true, true);
	
}

function GX_MoveObjectNode(currobjID, beforeID, beforeParentID)
{
	var currNode, beforeNode; 
	currNode = document.getElementById(currobjID);
	if(!currNode)
	{
		Debug_Message("Curr Node Null");  
		return ; 
	}
	var srcparentNode = currNode.parentNode;
	var clonedNode = currNode.cloneNode(true);
	
	beforeNode = document.getElementById(beforeID);
	var destparentNode = document.getElementById(beforeParentID); 
	
	srcparentNode.removeChild(currNode); 
	if(beforeID)
		var retNode = destparentNode.insertBefore(clonedNode, beforeNode);	
	else
		retNode = destparentNode.appendChild(clonedNode);
	
	GXRDE_MoveZIndex(currobjID, beforeID, beforeParentID, 'GX_UpdateTreeWidgetFromServer');
	gCurrObjID = currobjID; 
	//GX_UpdateTreeWidgetFromServer();
	//GX_SetSelection(retNode, true);
	
}

function GX_MoveObjectToGroup(objectID, destparentID){
	
	var currNode, beforeNode; 
	var destParentNode = document.getElementById(destparentID); 
	currNode = document.getElementById(objectID);
	if(!currNode)
	{
		Debug_Message("Curr Node Null"); 
		return ; 
	}
	var srcparentNode = currNode.parentNode;
	var clonedNode = currNode.cloneNode(true);
	if(srcparentNode == destparentNode)
		return; 
	var destparentNode = document.getElementById(destparentID); 	
	srcparentNode.removeChild(currNode); 
	var retNode = destparentNode.appendChild(clonedNode);		
	GX_SetSelection(retNode, true, true);
	var objectIDArr = [];
	objectIDArr.push(objectID); 
	//GXRDE_MoveObjectToGroup(destparentID, objectIDArr);
}

function GX_updateTreeWidget(string)
{
	var currTabIndex = gCurrentTabIndex; 
	WAL_SetTabIndex('rightTabs', 0);
	var newresptr = "<div id='node_container' style='overflow:auto; width:inherit; height:inherit; border:none; font-style:italic'>"+string+"</div>";
	WAL_updateTree(gTreeWidgetID,  'auto', 'auto', newresptr, "GX_TreeItemClick", false, "GX_TreeHandlerDragStart", "GX_TreeHandlerDragEnd");
	
	//UIH_InsertImagesInTreeWidget(); 
	
	//var treeNode = document.getElementById(gTreeWidgetID); 
   // treeNode.style.backgroundColor = 'pink'; 
	var JQSel;	
	JQSel = "#"+gTreeNodeID; 
	//$(JQSel).css('background-image', ' -moz-linear-gradient(top, #fcd95f, #fef2cb)');
	//$(JQSel).css('background-image', 'linear-gradient(0deg, #eeeeee , #efefef )');
	$(JQSel).css('background-image', 'linear-gradient(0deg, #e8e8e8 , #e8e8e8)');
	//$(JQSel).css('background-color', '#e8e8e8');
	//background-image: linear-gradient(0deg, #eeeeee 80%,  #efefef 100%)
	//$(JQSel).css('font-size','small'); 
	
	JQSel = "#"+gTreeNodeID + " .jqx-widget-content"; 
     $(JQSel).css('background-color', 'transparent');	
  //   gPreviousTreeInfoType = gCurrentTreeInfoType; 
     gCurrentTabIndex =  currTabIndex; 
          
}

function GX_TreeItemClick(selectedItem)
{	
	var nodelabel = selectedItem.label;
	var nodeID  = selectedItem.id; 
	var parentNodeID = selectedItem.parentId; 
	var selNode = selectedItem.element;	
	
	gPreviousTreeNode = gCurrentTreeNode; 
	gPrevTreeItemSel = gCurrentTreeItemSel; 
	var nodeType = selNode.getAttribute('type'); 
	var prevNodeType =0; 
	if(gPreviousTreeNode)
		prevNodeType = gPreviousTreeNode.getAttribute('type');	
	gCurrentTreeNode = selNode;
	gCurrentTreeItemSel = selectedItem; 
	var nodeDataID = gCurrentTreeNode.getAttribute('dataid'); 	
	if(gControlKey == true)
    {
		var currnode = document.getElementById(nodeDataID); 
    	GX_SelectObjectInMultiMode(currnode); 
    	return ; 
    }
    
	
	GX_SetSelection(gCurrentObjectSelected, false, true); 
	switch(nodeType)
	{
	case 'SVGROOT':
		GX_ShowSVGRootInterface(nodeDataID); 
		break;
	case 'GROUP':
		GX_ShowLayerInterface(nodeDataID); 
		var itemElemt = WAL_getTreeItemSelection(gTreeNodeID, false);
		WAL_expandTreeItem(gTreeNodeID,'TM_'+nodeDataID, true);
		break; 
	case 'OBJECT':
		GX_ShowObjectInterface(nodeDataID); 
		break; 
	default:
		break; 
	}
	//Debug_Message("Curr Node="+ gCurrentTreeNode.id + "Type=" + gCurrentTreeNode.getAttribute('type')); 
}
function GX_TreeHandlerDragStart(item)
{	  
	//return false;   
}

function GX_TreeHandlerDragEnd(item, dropItem, args, dropPosition, tree)
{
	 var srcNode = item.element; 
	 var nodeID = item.id; 
	 var dropNode = dropItem.element;
	 var dropType = dropNode.getAttribute('type'); 
	 var objectID, destParentID, objectType;
	 objectID = srcNode.getAttribute('dataid'); 
	 var dropNodeID = dropNode.getAttribute('dataid'); 
	 objectType = srcNode.getAttribute('type'); 
	 var objPosition  = dropPosition; 	
	 if(objectType != 'OBJECT')
		 return; 
	 
	 srcNode = document.getElementById(objectID);
	 var destParentNode = document.getElementById(dropNodeID);	
	 if(dropPosition == 'after')
	 {
		if(dropType == 'OBJECT')
		{
			destParentNode = destParentNode.parentNode; 
			var currType = destParentNode.getAttribute('type'); 
			if(currType != 'GROUP')
				return ; 		
		}		
	 }
	 else if(dropPosition == 'inside'){
		if(dropType == 'OBJECT')
		{
				destParentNode = destParentNode.parentNode; 
				var currType = destParentNode.getAttribute('type'); 
				if(currType != 'GROUP')
					return ; 		
		}			 
	 }
	 GX_MoveObjectToGroup(objectID, destParentNode.id);
	 var objArr = []; 
	 objArr.push(objectID); 
	 gGroupID =  destParentNode.id; 
	 GXRDE_MoveObjectToGroup(destParentNode.id, objArr, 'callbackFnForMoveObject');
	 /*GX_UpdateTreeWidget();  
     retval  = GX_setTreeItemSelection(nodeID);	
	 if(dropPosition != 'inside'){
		 
		 return ;
	 }
	 */ 
	
	 //GX_MoveObjectNode(objectID,destID, destParentNode.id); 
	
	// WAL_expandTreeItem(gTreeNodeID,dropItem.id, true); 
	 
	//Debug_Message("Cleared and then created"); 
	 
	 return true; 
}

function GX_setTreeItemSelection(itemID)
{
	var node = document.getElementById(gTreeWidgetID); 
	node = node.firstElementChild; 
	var childnodeID = node.getAttribute('id'); 
	WAL_setTreeItemSelection(childnodeID, itemID); 	
}

function GX_ShowLayerInterface(layerID)
{
	var JQSel = '.GROUP'; 
	
	JQSel = '#' +  layerID; 
		
	//var layerDim = GX_GetLayerDimension(layerID);
	var layerNode = document.getElementById(layerID);	
	gCurrLayerNode = layerNode; 
	GX_SetSelection(layerNode, true, true); 
    	
}

function GX_ShowObjectInterface(objectID)
{
	var currObjNode = document.getElementById(objectID); 
	
	//get the parent Layer 
	var layerNode = currObjNode.parentNode; 
	var layerID = layerNode.id; 
	//reduce the opacity of all layers 
	var JQSel = '.GROUP';
	
	//set the opacity of current layer 
	JQSel= '#' + layerID; 
	
	
	//set the selection to current object 
	GX_SetSelection(gCurrentObjectSelected,false, false); 
	GX_SetSelection(currObjNode,true, true); 
	
}
function GX_ShowSVGRootInterface(ID)
{
	GX_ResetAllSelections();
}
function GX_GetLayerDimension(layerID)
{
	var layerDim =  new sDimension(); 
	var minX =  new Number(10000);
	var minY = new Number(10000); 
	var maxX =  new Number(0); 
	var maxY = new Number(0);
	var newX, newY; 
	var objDim; 	
	var layerNode = document.getElementById(layerID);	
	var childNodeList = layerNode.childNodes; 
	var childlength = childNodeList.length;
	var childNode = 0;
	var objClass; 
	layerDim = GX_GetTransformProperty(layerNode, 'translate'); 
	for(var k=0; k < childlength; k++)
	{
		childNode = childNodeList.item(k);
		objClass = childNode.classList[0]; 
		
		
		if ( (objClass == 'SVG_SHAPE_OBJECT')|| (objClass == 'SVG_IMAGE_OBJECT') || (objClass == 'SVG_PATH_OBJECT') || (objClass == 'SVG_TEXT_OBJECT') )
		{
			 
			objDim = GX_GetObjectAttribute(childNode, 'DIMENSION');			
			if(objDim.x < minX)
				minX = objDim.x; 			
			if(objDim.y < minY)
				minY = objDim.y; 
			newX = objDim.x + objDim.width; 
			newY = objDim.y + objDim.height; 
			if(newX > maxX)
				maxX =  newX; 
			if(newY > maxY)
				maxY =  newY; 			
		}		
	}	
	layerDim.x = layerDim.x + minX; 
	layerDim.y = layerDim.y + minY;
	layerDim.width = maxX - minX;
	layerDim.height = maxY - minY; 
	layerDim.centerX = Math.round(layerDim.x + layerDim.width/2);
	layerDim.centerY= Math.round(layerDim.y + layerDim.height/2);
	//Debug_Message("LayerX = " + layerDim.x + "LayerY=" + layerDim.y+ "Width="+ layerDim.width); 
	return layerDim; 
}

function GX_PutDefaultTransformValue(gNode){
	gNode.setAttribute('transform', 'translate(0 0) scale(1 1) rotate(0 0 0)'); 
}
function GX_ValidateTransformValue(gNode){
	var transfDim =  new sDimension(); 
	var str = gNode.getAttribute('transform'); 
	//validate the transform string parameter
	var arr = str.split(" "); 
	var subarr; 
	var innerArr; 
	var	delimiter = ' '; //_rm this can be , or ' ' because of chrome issue it is now ' '	
	if(arr.length != 7){
		//then put in proper values and return
		GX_PutDefaultTransformValue(gNode); 
		return ; 
	}
	else if((arr[0].indexOf('translate')== -1) || (arr[2].indexOf('scale')== -1) || (arr[4].indexOf('rotate')== -1) ){
		GX_PutDefaultTransformValue(gNode);  
		return ; 
	}
	//translate param
	x = arr[0].split('(')[1]; 
	y = arr[1].substring(0,arr[1].length-1); 
	if( (isNaN(x) == true) || (isNaN(y) == true) ){
		GX_PutDefaultTransformValue(gNode); 
		return; 
	}	
	//scale param 
	x = arr[2].split('(')[1]; 
	y = arr[3].substring(0,arr[3].length-1); 
	if( (isNaN(x) == true) || (isNaN(y) == true) ){
		GX_PutDefaultTransformValue(gNode); 
		return; 
	}	
	
	//rotate param 
	var rot = arr[4].split('(')[1];	
	var rotX = arr[5] ;//x.substring(0, x.length-1);
	var rotY = arr[6].substring(0, arr[6].length-1);
	if( (isNaN(rot) == true) || (isNaN(rotX) == true) || (isNaN(rotY) == true) ){
		GX_PutDefaultTransformValue(gNode); 
		return; 
	}
}


function GX_GetTransformProperty(gNode, transfType)
{
	GX_ValidateTransformValue(gNode); 
	var transfDim =  new sDimension(); 
	var str = gNode.getAttribute('transform'); 
	if(!str)
		return transfDim;
	
	//validate the transform string parameter
	var arr = str.split(" "); 
	var subarr; 
	var innerArr; 
	var	delimiter = ' '; //_rm this can be , or ' ' because of chrome issue it is now ' '
	
	var x, y; 	
	//translate param
	x = arr[0].split('(')[1]; 
	y = arr[1].substring(0,arr[1].length-1); 
	transfDim.x = new Number(x); 
	transfDim.y = new Number(y);	
	
	//scale param 
	x = arr[2].split('(')[1]; 
	y = arr[3].substring(0,arr[3].length-1); 
	transfDim.scaleX = new Number(x); 
	transfDim.scaleY = new Number(y);
	
	//rotate param 
	var rot = arr[4].split('(')[1];	
	var rotX = arr[5] ;//x.substring(0, x.length-1);
	var rotY = arr[6].substring(0, arr[6].length-1);
	transfDim.rotate = new Number(rot);
	transfDim.rotCentreX = new Number(rotX); 
	transfDim.rotCentreY = new Number(rotY);
	return transfDim; 	
}
function GX_SetTransformProperty(gNode, transfType, transfDim)
{
	//var transfDim =  new sDimension(); 
	GX_ValidateTransformValue(gNode);
	var Transfstr = gNode.getAttribute('transform'); 
	if(!Transfstr)
		Transfstr = "";
	gTransfArray = Transfstr.split(" "); 
	var Transflength = gTransfArray.length; 
/*	if(gTransfArray.length <1){
		Debug_Message("GX_SetTransformProperty : Transform String is : " +Transfstr ); 
		return ; 
	}
	*/
	//if transform string not proper then set it to default value and move on _rm
	//override everything because of Chrome's way of behaving 
	if(transfType == 'all'){		
		Transfstr =''; 
		Transfstr += 'translate(' + transfDim.x + ' ' + transfDim.y + ') '; 
		Transfstr += 'scale(' + transfDim.scaleX + ' ' + transfDim.scaleY + ') '; 
		Transfstr += 'rotate(' + transfDim.rotate + ' ' + transfDim.rotCentreX + ' ' + transfDim.rotCentreY + ')';	
		gNode.setAttribute('transform', Transfstr); 
		return ; 
	}
	
	var str=""; 
	var objectType = gNode.classList[0]; 
	var shapeType = gNode.classList[1]; 
	var delimiter = ' '; 
	var translateStr;
	var scaleStr ;
	var rotStr; 
	translateStr = gTransfArray[0] + ' ' + gTransfArray[1]; 
	scaleStr	 = gTransfArray[2] + ' ' + gTransfArray[3];
	rotStr 		 = gTransfArray[4] + ' ' + gTransfArray[5] + ' ' + gTransfArray[6]; 
	if(transfType == 'translate')
	{
		if(gSnapToGrid == true){
			transfDim.x = GX_ConvertToMultipleOf(transfDim.x, 10);
			transfDim.y = GX_ConvertToMultipleOf(transfDim.y, 10); 
		}
		if( (objectType == 'SVG_PATH_OBJECT')|| (objectType == 'SVG_IMAGE_OBJECT') || (objectType == 'GROUP') || (objectType == 'SVG_SHAPE_OBJECT') 
				|| (objectType == 'SVG_TEXT_OBJECT')){
			//str = 'translate(' + transfDim.x + delimiter + transfDim.y +')'; 
			gTransfArray[0] = 'translate(' + transfDim.x; 
			gTransfArray[1] =  transfDim.y + ')'; 
			translateStr =  gTransfArray[0] +  ' ' + gTransfArray[1]; 			
			//also update the Rotation center 			
		/*	if(transfDim.rotate != 0 ){
				var rotX = new Number(transfDim.rotCentreX) ;
				var rotY = new Number(transfDim.rotCentreY);
				rotX += transfDim.x; 
				rotY += transfDim.y; 
				rotStr  = gTransfArray[4] + ' ' + rotX + ' ' + rotY + ')';
			}
			*/			
		}
		
	}
	else if(transfType == 'scale')
	{
		//str = 'scale(' + transfDim.x + delimiter + transfDim.y +')';		
		gTransfArray[2] = 'scale(' + transfDim.x; 
		gTransfArray[3] = transfDim.y + ')';
		scaleStr	 = gTransfArray[2] + ' ' + gTransfArray[3];
	}
	else if(transfType == 'rotate'){
		gTransfArray[4] = 'rotate(' + transfDim.rotate; 
		gTransfArray[5] = transfDim.rotCentreX; 
		gTransfArray[6] = transfDim.rotCentreY + ')';		
		rotStr = gTransfArray[4] + " " + gTransfArray[5] + " " + gTransfArray[6]; 
	}	
	Transfstr = ''; 	
	Transfstr = translateStr + ' ' + scaleStr + ' ' + rotStr; 
			
	gNode.setAttribute('transform', Transfstr); 	
}

function GX_UpdateLayerChildElements(layerNode)
{
	//get layer node
	var transprop = GX_GetTransformProperty(layerNode,'translate'); //get transform property for translation 
	  	//get child nodes of type SVCG_shape_object
	var childnodes = layerNode.childNodes; 
	var childnodelen = childnodes.length;
	var nodeclass; 
	var node; 
	var nodeDim; 
	var prevList, currList; 
	var retval; 
	
	// update the position dimension of each of the child  
	for(var j=0; j < childnodelen; j++)
	{
		node = childnodes.item(j);	
		var nodeclass = node.classList[0];		
		//if( (nodeclass == 'SVG_SHAPE_OBJECT')  || (nodeclass == 'SVG_TEXT_OBJECT') )
		if( (nodeclass == 'SVG_SHAPE_OBJECT')|| (nodeclass == 'SVG_IMAGE_OBJECT'))
		{	
			nodeDim = GX_GetObjectAttribute(node, 'DIMENSION');
			nodeDim.x = nodeDim.x + transprop.x; 
			nodeDim.y = nodeDim.y + transprop.y; 
			//GX_SetRectObjectDim(node, nodeDim); 
			retVal = GX_SetObjectAttribute(node, "DIMENSION", nodeDim, true);			
		}
		else if (nodeclass == 'SVG_TEXT_OBJECT')
		{
			//this is done as a special case since getBBox returns coord different form x,y attribute
			nodeDim = new sDimension(); 
			nodeDim.x  = new Number(node.getAttribute('x')); 
			//nodeDim.x = node.getAttribute('x');
			nodeDim.y  = new Number(node.getAttribute('y'));			
			nodeDim.x = nodeDim.x + transprop.x; 
			nodeDim.y = nodeDim.y + transprop.y;			
			retVal = GX_SetObjectAttribute(node, "DIMENSION", nodeDim, true);
		}
		else if(nodeclass = 'SVG_PATH_OBJECT')
		{
			if(node){
				GX_GetPathDimension(node);
				var x, y; 
				if(gPathDataArray)
				{
					for(var k=0; k < gPathDataArray.length; k++)
					{
						if( (gPathDataArray[k][3] == 'POINT') || (gPathDataArray[k][3] == 'START_POINT')|| (gPathDataArray[k][3] == 'END_POINT') )
						{
							x = new Number(gPathDataArray[k][1]) ; //''+ transprop.x;
							y = new Number(gPathDataArray[k][2]);
							x += transprop.x;
							y += transprop.y;					
							gPathDataArray[k][1] = Math.round(x) ;//transprop.x; 
							gPathDataArray[k][2] = Math.round(y); //transprop.y;					
						}
					}
					GX_SetObjectAttribute(node, 'PATH_DATA', gPathDataArray, true, false);
				}
			}
		}
	}
	//now reset the layernode translate property
	
	transprop.x = 0; 
	transprop.y = 0; 
	//GX_SetTransformProperty(layerNode, 'translate', transprop); 	
	GX_SetObjectAttribute(layerNode, "TRANSLATE", transprop, false);
}

//update the translation values in all the data points
function GX_UpdatePathData(pathNode)
{
	//get layer node
	var transprop = GX_GetTransformProperty(pathNode,'translate'); //get transform property for translation	
	  	//get child nodes of type SVCG_shape_object
	var nodeclass; 
	var node; 
	var nodeDim; 
	var prevList, currList; 
	
	for(var j=0; j < gPathDataArray.length; j++)
	{
		var entry = gPathDataArray[j]; 
		var pointvalue;
		if( (entry[3] == 'POINT') || (entry[3] == 'START_POINT') || (entry[3] == 'END_POINT'))
		{
			pointvalue = new Number(entry[1])
			pointvalue += transprop.x; 
			gPathDataArray[j][1] = Math.round(pointvalue); 
			
			pointvalue = new Number(entry[2])
			pointvalue += transprop.y; 
			gPathDataArray[j][2] = Math.round(pointvalue); 			
		}
	}
	//now reset the layernode translate property
	if(pathNode.classList[1] == 'POLYGON')
	{
		var center = GX_GetPolygonParam(pathNode); 
		center.x += transprop.x;
		center.y += transprop.y;		
		GX_SetObjectAttribute(pathNode, "POLYGON_CENTER", center,true, false);
	}
		
	transprop.x = 0; 
	transprop.y = 0; 
	//GX_SetTransformProperty(layerNode, 'translate', transprop); 	
	GX_SetObjectAttribute(pathNode, 'PATH_DATA', gPathDataArray, true, false); 
	GX_SetObjectAttribute(pathNode, "TRANSLATE", transprop,true, false);	
}

//awlways work on tightest enclosing rectangle for REAd/WRITe 

//_Rm this function will map translate from transform property of translation to co-ordinates
function GX_UpdatePosFromTranslation(objNode){
	//get the translate co-ordinates 
	var transprop = GX_GetTransformProperty(objNode,'translate');
	//if 0 then dont waste time return 
	if( (transprop.x == 0) && (transprop.y == 0 )){
		return ; 
	}	
	var objType = objNode.classList[0]; 
	if(objType == 'SVG_PATH_OBJECT'){
		GX_UpdatePathData(objNode); 
		return ; 
	}	
	//do it for group / image and text objects as well 
	var newObjDim = new sDimension(); 
	if(objType == 'SVG_TEXT_OBJECT'){
		gCurrSelectedObjectDim =  new sDimension(); 
		
		//get the original dimension rather than bounding box dimension 
		gCurrSelectedObjectDim.x = new Number(objNode.getAttribute('x')); 
		gCurrSelectedObjectDim.y = new Number(objNode.getAttribute('y')); 
	}else
		gCurrSelectedObjectDim = GX_GetObjectAttribute(objNode, 'DIMENSION'); //GX_GetRectObjectDim(ObjNode);
	
	newObjDim.x = gCurrSelectedObjectDim.x + transprop.x; 
    newObjDim.y = gCurrSelectedObjectDim.y + transprop.y; 
    newObjDim.width = gCurrSelectedObjectDim.width; 
    newObjDim.height =  gCurrSelectedObjectDim.height; 
    newObjDim.rotate = gCurrSelectedObjectDim.rotate;          
    newObjDim.rotCentreX = Math.round(newObjDim.x + newObjDim.width/2);
    newObjDim.rotCentreY = Math.round(newObjDim.y + newObjDim.height/2); 
    newObjDim.radius = gCurrSelectedObjectDim.radius; 
    /*
    if(objNode.classList[1]== 'ELLIPSE')
    {
    	newObjDim.x = newObjDim.rotCentreX;
        newObjDim.y = newObjDim.rotCentreY; 
    } 
    else if(objNode.classList[1]== 'CIRCLE')
    {
    	newObjDim.x = newObjDim.rotCentreX;
        newObjDim.y = newObjDim.rotCentreY; 
    } 
    */
    
   // GX_SetTransformProperty(objNode, 'translate',newObjDim);
    GX_SetObjectAttribute(objNode, 'DIMENSION', newObjDim, true, false); 
    if(newObjDim.rotate != 0)
    	GX_SetTransformProperty(objNode, 'rotate', newObjDim);
	// set the translate property to 0 
	transprop.x = 0; 
	transprop.y = 0; 
	GX_SetObjectAttribute(objNode, "TRANSLATE", transprop,true, false);	
	
}
function GX_GetRectObjectDim(ObjNode)
{
	 	var mypoint = new sDimension();
	    var objClass = ObjNode.classList[0] ;//'class'); 
	    var x, y, width, height; 
	    //get the parent layer node
	    //get the dimension of the same 
	    var nodename = ObjNode.nodeName.toLowerCase(); 
	    if( (nodename == 'rect') || (nodename == 'image') ) {
	    	 mypoint.x = new Number(ObjNode.getAttribute('x')); 
		     mypoint.y = new Number(ObjNode.getAttribute('y'));
		     mypoint.width = new Number(ObjNode.getAttribute('width')); 
		     mypoint.width += 0 ; 
		     mypoint.height = new Number(ObjNode.getAttribute('height'));	
		     mypoint.height += 0; 
		     mypoint.centerX = mypoint.x + mypoint.width /2; 
		     mypoint.centerY = mypoint.y + mypoint.height /2; 	
		     if(nodename == 'rect')
		    	 mypoint.radius =  new Number(ObjNode.getAttribute('rx')); 
	    }	
	    else if(nodename == 'svg'){
	    	mypoint.x =  ObjNode.getAttribute('x');
	    	mypoint.x = new Number( mypoint.x.substring(0, mypoint.x.length-2 )); 
	    	
	    	mypoint.y =  ObjNode.getAttribute('y');
	    	mypoint.y = new Number(mypoint.y.substring(0, mypoint.y.length-2 ));  
	    	
	    	mypoint.width =  ObjNode.getAttribute('width');
	    	mypoint.width = new Number(mypoint.width.substring(0, mypoint.width.length-2 ));
	    	
	    	mypoint.height =  ObjNode.getAttribute('height');
	    	mypoint.height = new Number (mypoint.height.substring(0, mypoint.height.length-2 ));
	    }
	    else if(nodename == 'ellipse') {	        
	    	mypoint.centerX = mypoint.x = new Number(ObjNode.getAttribute('cx')); 
	    	mypoint.centerY = mypoint.y = new Number(ObjNode.getAttribute('cy'));
	        mypoint.width = new Number(ObjNode.getAttribute('rx')); 
	        mypoint.height = new Number(ObjNode.getAttribute('ry'));
	        mypoint.x -=  mypoint.width; 
	        mypoint.y -=  mypoint.height;   
	        mypoint.width = 2*mypoint.width; 
	        mypoint.height = 2* mypoint.height; 	        
	    }  
	    else if(nodename == 'circle') {	        
	    	mypoint.centerX = mypoint.x = new Number(ObjNode.getAttribute('cx')); 
	    	mypoint.centerY = mypoint.y = new Number(ObjNode.getAttribute('cy'));
	        mypoint.width = new Number(ObjNode.getAttribute('r'));	       
	        mypoint.x -=  mypoint.width; 
	        mypoint.y -=  mypoint.width;   
	        mypoint.width = 2*mypoint.width; 
	        mypoint.height = mypoint.width; 
	        
	    }  
	    else if(nodename == 'text')
	    {
	    	mypoint = ObjNode.getBBox(); 
	    	var y = ObjNode.getAttribute('y');	    	 
	    	//mypoint.x = ObjNode.getAttribute('x');
	    	//mypoint.y = ObjNode.getAttribute('y');
	    }
	    else if(nodename == 'g')
	    {
	    	//_rm replacing this with proper one for the time being lets'see if this has some repurcussion
	    //	var tempDim = GX_GetTransformProperty(ObjNode, 'translate'); 
	    	//return tempDim;
	    	return GX_GetLayerDimension(ObjNode.id);
	    }	 
	    
	    else if(nodename == 'div'){
	    	var JQSel = '#' + ObjNode.id; 
	    	var pos = $(JQSel).position(); 
	    	mypoint.x =  pos.left; 
	    	mypoint.y = pos.top - gClientYOffset; 
	    	mypoint.width = $(JQSel).width();
	    	mypoint.height = $(JQSel).height();
	    	mypoint.centerX = mypoint.x +  mypoint.width/2; 
	    	mypoint.centerY = mypoint.y +  mypoint.height/2; 
	    }
	    else if(objClass = 'SVG_PATH_OBJECT')
	    {
	    	if(ObjNode){
	    		mypoint = GX_GetPathDimension(ObjNode);
		    	mypoint.centerX = mypoint.x +  mypoint.width/2; 
		    	mypoint.centerY = mypoint.y +  mypoint.height/2; 
	    	}
	    		    	
	    }
	    
	    var rotParam = ObjNode.classList[2]; 
	    if(rotParam)
	    {
	    	var rotArr = rotParam.split(','); 
	 	    if(rotArr[0] == 'ROTATE')
	 	    {
	 	    	mypoint.rotate = new Number(rotArr[1]); 
	 	    	mypoint.rotCentreX = Math.round(mypoint.x + mypoint.width/2); 
	 	    	mypoint.rotCentreY = Math.round(mypoint.y + mypoint.height/2);
	 	    }
	    }
	   
	    mypoint.x = Math.abs(mypoint.x); 
	    mypoint.y = Math.abs(mypoint.y); 
	    
	     return mypoint;
}

function GX_SetRectObjectDim(ObjNode, newDim) 
{   
    var rightLimit, bottomLimit; 
    var x, y, width, height; 
    //check the limits 
    if(!ObjNode)
    	return ; 
    var modDim = new sDimension() ; //newDim; 
    modDim.x = Math.round(newDim.x);
    modDim.x =  Math.abs(modDim.x);
    
    modDim.y = Math.round(newDim.y);
    modDim.y =  Math.abs(modDim.y);
    
    modDim.radius = newDim.radius; 
    modDim.width = Math.round(newDim.width);
    modDim.height = Math.round(newDim.height);    
    var objectType = ObjNode.classList[1];        
    var nodeclass = ObjNode.classList[0]; 
    var currObjectType = 0; 
    if(gCurrentObjectSelected)
    	currObjectType =  gCurrentObjectSelected.classList[0]; 
   
     /* _rm should we not remove this.... 
    we dont resize the dimension to grid snap by default. if need to be done do it from outside however 
    * for positioning do it from here
    * */  
    if(gSnapToGrid == true){
    	modDim.x = GX_ConvertToMultipleOf(modDim.x, 10); 
    	modDim.y = GX_ConvertToMultipleOf(modDim.y, 10);
    }
    
    
    var myheight = modDim.height + 0; 
    rightLimit = modDim.x + modDim.width; 
    bottomLimit = modDim.y + modDim.height;
    /*
    if(modDim.x < gMaxLeft )
    {
    	//gCurrSelectedObjectDim.x
    	//gGrabberDim.x
   	// alert("Left Boundary: modDimX=" + modDim.x + "gCurrSelectedObjectDim.x="+gCurrSelectedObjectDim.x+ "gGrabberDim.x"+ gGrabberDim.x); 
   	 return false;
    }
    if(modDim.y < gMaxTop )
    {
   	// alert("Top Boundary"); 
   	 return false ;
    }
    
    if(rightLimit > gMaxRight)
    {
   	 //alert("Right Boundary"); 
   	 return false;
    }
    if(bottomLimit > gMaxBottom)
    {
   	 //alert("Bottom Boundary"); 
   	 return false ;
    }
    */
    var nodename = ObjNode.nodeName.toLowerCase(); 
    if((nodename == 'rect') || (nodename == 'image') ) {
            ObjNode.setAttribute('x', modDim.x);
            ObjNode.setAttribute('y', modDim.y);
            ObjNode.setAttribute('width', modDim.width);
            ObjNode.setAttribute('height', myheight);  
            if(nodename == 'rect'){
            	ObjNode.setAttribute('rx', modDim.radius);  
            	ObjNode.setAttribute('ry', modDim.radius);  
            }
            	
    }  
    else if(nodename == 'svg'){    		
    		var viewBoxstr = ObjNode.getAttribute('viewBox'); 
    		viewBoxstr = modDim.x + ' ' +  modDim.y + ' ' + modDim.width + ' ' +  modDim.height;
    		ObjNode.setAttribute('viewBox',viewBoxstr );
    		ObjNode.setAttribute('x' ,modDim.x + 'px' ); 
    		ObjNode.setAttribute('y' ,modDim.y + 'px' ); 
    		ObjNode.setAttribute('width' ,modDim.width + 'px' ); 
    		ObjNode.setAttribute('height' ,modDim.height + 'px' ); 
    }
    else if (nodename == 'text') {
        ObjNode.setAttribute('x', modDim.x);      
        ObjNode.setAttribute('y', modDim.y);                   
    }       
       //assuming that a container rectangle dim is passed  
    else if(nodename == 'ellipse') {
      	 var cx = modDim.x; 
      	 var cy = modDim.y; 
      	 var rx = modDim.width/2;
      	 var ry = modDim.height/2; 
      	 cx += rx; 
      	 cy += ry
        ObjNode.setAttribute('cx', cx);
        ObjNode.setAttribute('cy',cy);
        ObjNode.setAttribute('rx', rx);
        ObjNode.setAttribute('ry', ry);
    }  
    else if(nodename == 'circle') {
     	 var cx = modDim.x; 
     	 var cy = modDim.y; 
     	 var r = Math.min(modDim.width, modDim.height); 
     	 var r = Math.round(r/2);
     	// var ry = modDim.height/2; 
     	 cx += r; 
     	 cy += r
       ObjNode.setAttribute('cx', cx);
       ObjNode.setAttribute('cy',cy);
       ObjNode.setAttribute('r', r);       
   }    
    else if(nodename == 'div'){    
    	with (Math) {    
    		var tolerance = 5; 
    		var YOffset =  0;// round(gCurrentCanvasDim.y +  gClientYOffset - tolerance) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
    		var XOffset = 0 ; //round(gCurrentCanvasDim.x - 10); 
    		//_rm looks like we dont need it anymore
    		//var scrollLeft = $('#editor_div').scrollLeft(); 
    		//var scrollTop = $('#editor_div').scrollTop(); 
    		//modDim.x = round(modDim.x - (scrollLeft/gZoomFactor)); 
    		//modDim.y = round(modDim.y - (scrollTop/gZoomFactor));   
    		var tolerance = new Number(5);//round(10 * gInvZoomFactor); 
    		//modDim.x = round((modDim.x + gPanX) * gInvZoomFactor + XOffset); 
    		//modDim.y = round( (modDim.y + gPanY) * gInvZoomFactor + YOffset);
    		modDim.x = round((modDim.x ) * gInvZoomFactor + XOffset); 
    		modDim.y = round( (modDim.y) * gInvZoomFactor + YOffset);
    		  	    
    		modDim.width = round(modDim.width * gInvZoomFactor );
    		modDim.height = round(modDim.height * gInvZoomFactor);
    		if(ObjNode.id == 'sel_gripper'){
    		/*if( (currObjectType == 'SVG_SHAPE_OBJECT') || (currObjectType == 'SVG_TEXT_OBJECT')|| (currObjectType == 'GROUP') ){
        		modDim.x = modDim.x;// -tolerance; 
        	    modDim.y = modDim.y;//- tolerance;   
        	   // modDim.width += (tolerance); 
        	   // modDim.height += (tolerance); 
        	}
        	else if(currObjectType == 'SVG_PATH_OBJECT'){
        		with (Math){        			
            		modDim.x = modDim.x;//  + tolerance; 
            	    modDim.y = modDim.y ;//+ tolerance;   
            	  //  modDim.width -= (tolerance); 
            	  // modDim.height -= (tolerance);
        		} 
        		*/ 
    			
        		modDim.x = modDim.x - tolerance; // -tolerance; 
        	    modDim.y = modDim.y -tolerance;
        		modDim.height += 2*tolerance;
        		modDim.width += 2*tolerance;
        		
        	
    	}
    		else if((nodeclass == 'PATH_MARKER')|| (nodeclass == 'CUSTOM_MARKER')){
    			modDim.x = modDim.x - modDim.width/2; 
    			modDim.y = modDim.y - modDim.height/2;
    		}
    	else{
    		modDim.x = modDim.x + round(tolerance/2); 
    	    modDim.y = new Number(modDim.y + round(tolerance/2) );   	    
    	}  
    }//Math
    	var JQSel = '#' + ObjNode.id;    	
    	$(JQSel).css({left:modDim.x +'px', top:modDim.y + 'px', width: modDim.width + 'px', height:modDim.height + 'px'}); 
    }
    else if(nodeclass == 'SVG_PATH_OBJECT')
    {
    	if(objectType == 'CUBIC_BEZIER')
    	{
    		gPathDataArray[0][1] = modDim.x;
    		gPathDataArray[0][2] = modDim.y;
    		
    		gPathDataArray[1][1] = Math.round(modDim.x + (modDim.width/2) - 6) ;
    		gPathDataArray[1][2] = modDim.y + modDim.height;
    		
    		gPathDataArray[2][1] = Math.round(modDim.x + (modDim.width/2) + 6) ;
    		gPathDataArray[2][2] = modDim.y + modDim.height;
    		
    		gPathDataArray[3][1] = modDim.x + modDim.width ;
    		gPathDataArray[3][2] = modDim.y;    		
    	}
    	else if(objectType == 'QUADRATIC_BEZIER')
    	{
    		gPathDataArray[0][1] = modDim.x;
    		gPathDataArray[0][2]=  modDim.y;
    		
    		gPathDataArray[1][1] = Math.round(modDim.x + (modDim.width/2)) ;
    		gPathDataArray[1][2] = modDim.y + modDim.height;
    		
    		gPathDataArray[2][1] = modDim.x + modDim.width ;
    		gPathDataArray[2][2] = modDim.y;    		
    	}
    	else if(objectType == 'ELLIPTIC')
    	{
    		gPathDataArray[0][1] = modDim.x;
    		gPathDataArray[0][2]=  modDim.y;   		
    		gPathDataArray[5][1] = modDim.x + modDim.width ;
    		gPathDataArray[5][2] = modDim.y + modDim.height;    		
    	}
    	else if(objectType == 'LINE_PATH')
    	{
    		gPathDataArray[0][1] = modDim.x;
    		gPathDataArray[0][2]=  modDim.y;   		
    		gPathDataArray[1][1] = modDim.x + modDim.width ;
    		gPathDataArray[1][2] = modDim.y + modDim.height;    		
    	}
    	else
    	{
    		//get the path dimension which will also return the indices 
        	var pathDim = GX_GetPathDimension(ObjNode); 
        	if(!pathDim)
        		return ; 
        	//then one will change the min, max indices of gPathDataArray
        	if(pathDim.minXIndex == -1)
        		return ; 
        	gPathDataArray[pathDim.minXIndex][1] =  modDim.x; 
        	gPathDataArray[pathDim.minYIndex][2] =  modDim.y;
        	gPathDataArray[pathDim.maxXIndex][1] =  modDim.x +  modDim.width;
        	gPathDataArray[pathDim.maxYIndex][2] =  modDim.y +  modDim.height;       	
    	}
    	GX_ConvertArrayToPathData(ObjNode.id, gPathDataArray);     	
    }
     return true; 
}
function GX_RemoveObject(objNode)
{
	//remove the objet node from SVG
	if(objNode.id == 'BASELAYER')
	{
		Debug_Message("Base Layer cannot be Deleted"); 
		return; 
	}
	GXRDE_DeleteObject(objNode.id);
	GX_SetSelection(objNode, false, true); 
	GX_RemoveObjectFromList(objNode.id);
	
	var parentNode = objNode.parentNode; 
	parentNode.removeChild(objNode); 
	
	//remove the treenode item from tree widget 
	var selItem = WAL_getTreeItemSelection(gTreeNodeID, false);
	selItemID = 'SVGOBJECTCONTAINER'; 
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+selItemID); 
	//WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+parentNode.id); 
	WAL_DeleteTreeItem(gTreeNodeID, selItem); 
	//Debug_Message("node Removed"); 
	
	//remove from object list
	
	//post the request for delete on the server side 
}

//does a local delete as well as remote server delete 
function GX_DeleteObject(objectID)
{
	var objNode = document.querySelector('#' +objectID ); 
	if(!objNode)
		return ; 
	var parentNode = objNode.parentNode; 
	parentNode.removeChild(objNode); 
	GXRDE_DeleteObject(objNode.id);
}

function GX_InitializeToolbar()
{
	//INITALIZING LAYOUT INTERFACE
	//second row item layout_interface
	//WAL_createTooltip('widgettooltip', 'div', 1000); 	
	WAL_createCustomButton('object_icon', 'GX_ToolbarHandler');
	WAL_createCustomButton('text_icon', 'GX_ToolbarHandler');   
    WAL_createCustomButton('image_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('publish_icon', 'GX_ToolbarHandler');
    
    WAL_createCustomButton('grid_icon', 'GX_ToolbarHandler');
    
    WAL_createCustomButton('multiselect_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('align_icon', 'GX_ToolbarHandler');
    //zoompan interface 
    var zoomeValueDisplay = ['Normal','1.25x','1.5x','2.0x', '2.25x', '2.5x', '3.0x'];    
    WAL_createDropdownList('zoomDDL', '100', '24', false, zoomeValueDisplay, "GX_DDLHandler", '80', 0);
   
    WAL_createCustomButton('file_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('delete_icon', 'GX_ToolbarHandler');	
    WAL_createCustomButton('group_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('circle_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('ellipse_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('square_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('polygon_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('freehand_icon', 'GX_ToolbarHandler');    
    WAL_CreatePopOver('shapes_popup', 'object_icon_div', 'Objects', false, 'auto', 'auto', true, true);
    var lineTypes = ['Horizontal','Vertical','Normal']; 
    WAL_createDropdownListwithButton("lineDDL", '0','0',lineTypes, "GX_DDLHandler", '140', '80','line_icon', gButtonWidth, gButtonHeight);
    
    var curveTypes = ['Cubic Bezier','Quadratic Bezier','Elliptic']; 
    WAL_createDropdownListwithButton("curveDDL", '0','0',curveTypes, "GX_DDLHandler", '140', '80','curve_icon', gButtonWidth, gButtonHeight);
    
    WAL_createCustomButton('new_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('open_icon', 'GX_ToolbarHandler');  
    WAL_createCustomButton('close_icon', 'GX_ToolbarHandler'); 
    
    WAL_CreatePopOver('project_popup', 'file_icon_div','Projects', false, 'auto', 'auto', true, false);
    
    WAL_CreatePopOver('align_popup', 'align_icon_div','Alignment', false, '90', 'auto', false, true);
    WAL_createCustomButton('alignwidth_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignheight_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignleft_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('aligntop_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignright_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignbottom_icon', 'GX_ToolbarHandler');
  
    WAL_createCustomButton('alignhorcenter_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignvertcenter_icon', 'GX_ToolbarHandler'); 
    
    WAL_createCustomButton('download_icon', 'GX_ToolbarHandler');  
    WAL_CreatePopOver('sel_popup', 'sel_gripper', 'Tips', false, 'auto', 'auto', true, false);
    WAL_SetPopoverPosition('sel_popup', 'top'); 
    GX_ManageUIState('APP_LAUNCHED'); 
}
//rm Manage the UI state through this function so that this function can be resued 
//a multiple places 
function GX_ManageUIState(stateType){
	
	
	switch(stateType){
	//here the app is launched but no project is opened yet 
	case 'APP_LAUNCHED':
		var JQSel = '.TOOLBAR'; 
		$(JQSel).addClass('disabledState'); 
		JQSel = '#file_icon_div'; 
		$(JQSel).removeClass('disabledState');
		$("#rightTabs").addClass("disabledState");
		$('#editorTabs').addClass('disabledState');		
		$('#statusinfo').addClass('disabledState');
		
		$('#DivPathMarker').hide();
		$('#drawingpen').css({visibility:'hidden' });
		WAL_SetPopoverAutoClose('project_popup', false); 
		WAL_ShowPopover('project_popup', true); 
		break;
		//here a project file is opened whetehr new or old 
	case 'FILE_OPENED':
		var JQSel = '.TOOLBAR'; 
		$(JQSel).removeClass('disabledState');
		$("#rightTabs").removeClass("disabledState");
		$('#editorTabs').removeClass('disabledState');
		$('#statusinfo').removeClass('disabledState');
		WAL_SetPopoverAutoClose('project_popup', true); 
		WAL_ShowPopover('project_popup', false); 
		break; 
	case 'NEW_OBJECT_ADDED':
		 setTimeout(function(){		    	
			 WAL_SetTabIndex('rightTabs', 1); 			 
		 			}, 
		 	500);		
		break; 
	case 'NEW_FILE_CREATED':
		var JQSel = '.TOOLBAR'; 
		$(JQSel).removeClass('disabledState');
		$("#rightTabs").removeClass("disabledState");
		$('#editorTabs').removeClass('disabledState');
		$('#statusinfo').removeClass('disabledState');
		WAL_ShowPopover('shapes_popup', true); 
		WAL_SetPopoverAutoClose('project_popup', true); 
		WAL_ShowPopover('project_popup', false); 
		/*setTimeout(function(){		    	
			WAL_ShowNotification('messageNotification','info', "Your New Project has been created Successfully</br>You can now Add Shapes/Images/Text to your project",10000,
					0, -550, 'bottom-left', false);			 
		 			}, 
		 	500);
		 	*/	
		GX_Notify('info', "SVG File has been created successfully</br>You can now Add Shapes/Images/Text to your file", 0);
		break; 		
	case 'UNSELECT_OBJECT':
		var JQSel = '#propertyTab'; 
		$(JQSel).addClass('disabledState');
		break; 
	case 'SELECT_OBJECT':
		var JQSel = '#propertyTab'; 
		$(JQSel).removeClass('disabledState');
		break; 
	case 'PREVIEW_MODE':
		$("#myNavbar").addClass("disabledState");
		$("#rightTabs").addClass("disabledState");
		$("#statusinfo").addClass("disabledState");	
		break; 
	case 'EDITOR_MODE':
		$("#myNavbar").removeClass("disabledState");
		$("#rightTabs").removeClass("disabledState");
		$("#statusinfo").removeClass("disabledState");	
		break; 
	default:
		break; 		
	}		
}

function GX_EditBoxValueChange(value, widgetnode)
{
	var DimValue; 
	var retVal; 
	if((!gCurrentObjectSelected) && (gbMultiSelection == false))
		return ; 	
	if(gCurrentObjectSelected){
		var nodeClass =  gCurrentObjectSelected.classList[0]; //('class');	
		var wdgtType = widgetnode.getAttribute('type'); 
		DimValue = GX_GetRectObjectDim(gCurrentObjectSelected); 
		if(nodeClass == 'SVG_TEXT_OBJECT' )
		{
			DimValue.x = gCurrentObjectSelected.getAttribute('x'); 
			DimValue.y = gCurrentObjectSelected.getAttribute('y'); 
		}	
	
		var currnodeSel = gCurrentObjectSelected;	
	}
	var objectType = gCurrentObjectSelected.classList[1]; 
	//nodeClass = 'MULTIOBJECTS'; 
	if(nodeClass == 'SVG_TEXT_OBJECT')
	{
		switch(widgetnode.id)
		{
			case 'fontSizeIP':
				GX_SetObjectAttribute(gCurrentObjectSelected, "font-size", value, true, false);
				return; 
				break; 
			default:
				break; 
		}
	}
	if( (nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_IMAGE_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT') || (nodeClass == 'SVG_PATH_OBJECT') )
	{
		if(wdgtType == 'DIMENSION')
		{
			var relX =  new Number(0);
			var relY =  new Number(0); 
			value = new Number(value);
			switch(widgetnode.id)
			{
				
			case 'lposIP':					
				var relX = Math.round(value - DimValue.x); 
				GX_MoveSelectedObject(relX, relY); 
				break; 
			case 'tposIP':
				var relY = Math.round(value - DimValue.y); 
				GX_MoveSelectedObject(relX, relY); 
				break;
			case 'widthIP':
				DimValue.width = new Number(value);					
				if( (nodeClass == 'SVG_SHAPE_OBJECT') || (nodeClass == 'SVG_IMAGE_OBJECT') ){
					if(objectType == 'CIRCLE'){
						DimValue.height = new Number(value);	
						retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
						GX_SetRectObjectDim(gCurrGrabber,DimValue);
						var height = DimValue.height+""; 
						WAL_setNumberInputValue("heightIP", height, false);
					}else{
						retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
						GX_SetRectObjectDim(gCurrGrabber,DimValue);
					}
					
				}
				break; 
			case 'heightIP':
				DimValue.height = new Number(value);		
				if( (nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_IMAGE_OBJECT') ){
					if(objectType == 'CIRCLE'){
						DimValue.width = new Number(value);	
						retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
						GX_SetRectObjectDim(gCurrGrabber,DimValue);
						var width = DimValue.width+""; 
						WAL_setNumberInputValue("widthIP", width, false);
					}else{
						retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
						GX_SetRectObjectDim(gCurrGrabber,DimValue);
					}
					
				}
				break;
			case 'radiusIP':
				DimValue.radius = value; 
				retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
				break; 
			default:
				break; 
			}
			//if(nodeClass == 'SVG_TEXT_OBJECT'){
				//retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", DimValue, true, false);				
		   // }				
			return ; 			
		}//if(wdgtType == 'DIMENSION')				
	} //(nodeClass == 'SVG_SHAPE_OBJECT')
	if(currnodeSel)
		var objType = currnodeSel.classList[1]; 
	
	if( (nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_IMAGE_OBJECT') || (nodeClass == 'SVG_PATH_OBJECT')|| (nodeClass == 'SVG_TEXT_OBJECT') || (nodeClass == 'MULTIOBJECTS' ) )
	{
		if(nodeClass == 'SVG_PATH_OBJECT'){
			if(widgetnode.id == 'marker_strokeWeightIP'){
				gCurrentMarkerNode = GX_GetCurrentMarkerSelection(); 
				if(!gCurrentMarkerNode)
					return ; 
				GX_SetObjectAttribute(gCurrentMarkerNode, 'stroke-width', value, true, false);
			}
		}
		if(widgetnode.id == 'strokeWeightIP')
		{
			if(gbMultiSelection == true){
				GX_ApplyPropertyToMultipleObjects('stroke-width', value); 
				GX_UpdatePropertyForMultipleObjects('stroke-width', value); 
			}
			else{
				GX_SetObjectAttribute(gCurrentObjectSelected, 'stroke-width', value, true, false);
			}
			return; 
		}
			
		if(objType == 'FREEDRAW_PATH')
		{
			Debug_Message("not Supported for Free Hand Drawing"); 
			return ; 
		}
			
		if(widgetnode.id == 'rotateIP')
		{
			//var angleDiff = new Number(value);
			//angleDiff = angleDiff - gCurrSelectedObjectDim.rotate;			
			DimValue.rotCentreX = Math.round(DimValue.x + DimValue.width/2); 
			DimValue.rotCentreY = Math.round(DimValue.y + DimValue.height/2); 
			DimValue.rotate = new Number(value); 
			GX_SetObjectAttribute(currnodeSel, "ROTATE", DimValue, true, false);
			
			return ; 
		}		
		else if(widgetnode.id == 'radiusXIP')
		{
			if(objType = 'ELLIPTIC')
			{
				gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
				gPathDataArray[1][1] = value;			
				GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);
			}
			 
		}
		else if(widgetnode.id == 'radiusYIP')
		{
			if(objType = 'ELLIPTIC')
			{
				gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
				gPathDataArray[1][2] = value;			
				GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);
			}			 
		}
		else if(widgetnode.id == 'lengthIP')
		{
			if(objType = 'POLYGON')
			{
				gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
				var nSides; 
				if(gPathDataArray[gPathDataArray.length-1][0] == 'z')
					nSides = gPathDataArray.length-1; 
				else
					nSides = gPathDataArray.length; 
				
				var centerPt = GX_GetPolygonParam(gCurrentObjectSelected); 
				GX_DrawPolygon(gCurrentObjectSelected, centerPt.x+'',centerPt.y+'', nSides, value); 
			}			 
		}	
		
	}
	
	
			
	//Debug_Message("End of GX_EditBoxValueChange");
}
function GX_ToolbarHandler(event)
{
	var Node = event.target; 
	var btnID = Node.id;
	if(gCurrentObjectSelected)
		var objectType = gCurrentObjectSelected.classList[0];
	
	switch(btnID)
	{
	case 'new_icon':		 
		 var JQSel = "#" + "pageNameIP";	
		 $(JQSel).val("");	
		 JQSel = "#" + "titleIP";	
		 $(JQSel).val("");	
		 gCurrentTabIndex = 0;  
		 WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );				
		 break; 
	 case 'open_icon':	
		 gCurrentTabIndex = 0;
		 GX_CloseSVGFile();
		 GX_menu_open_svgfrom_remote();		 
		 break; 	
	 case 'close_icon':
		 gCurrentTabIndex = 0;
		 GX_CloseSVGFile(); 
		 WAL_SetTabIndex('rightTabs', gCurrentTabIndex); 
		 GX_ManageUIState('APP_LAUNCHED'); 
		 break;	 
	 case 'diminfo':		 
		 var svgdatanode = document.getElementById('SVGOBJECTCONTAINER'); 
		 var width = svgdatanode.getAttribute('width'); 
		 WAL_setNumberInputValue("svgwidthIP", width, false);		
		 var height = svgdatanode.getAttribute('height');	
		 WAL_setNumberInputValue("svgheightIP", height, false);		
		 WAL_showModalWindow(gSVGDimensionDlg,"GX_SVGDimensionDlgOK", "" );		 
		 break; 
	 case 'delete_icon':
		 WAL_showModalWindow('deleteConfirmDlg','', ''); 
	 	break; 
	case 'alignwidth_icon':
		GX_AlignDimension('WIDTH'); 
		break;
	case 'alignheight_icon':
		GX_AlignDimension('HEIGHT'); 
		break;
	case 'alignleft_icon':
		GX_AlignDimension('LEFT'); 
		break;
	case 'aligntop_icon':
		GX_AlignDimension('TOP'); 
		break;
	case 'alignright_icon':
		GX_AlignDimension('RIGHT'); 
		break;
	case 'alignbottom_icon':
		GX_AlignDimension('BOTTOM'); 
		break;
	case 'alignhorcenter_icon':
		GX_AlignDimension('MIDDLE_HOR'); 
		break;
	case 'alignvertcenter_icon':
		GX_AlignDimension('MIDDLE_VERT'); 
		break;	
	case 'SVGFO_LB_deletebtn':
		//Debug_Message("File Delete called"); 
		 GX_menu_delete_svgfrom_remote();
		break; 
	case 'panleft_icon':
		GX_ApplyPan(true, 50); 
		break;
	case 'panright_icon':
		GX_ApplyPan(true, -50); 
		break; 	
	case 'panup_icon':
		GX_ApplyPan(false, 50); 
		break;
	case 'pandown_icon':
		GX_ApplyPan(false, -50); 
		break;
	case 'multiselect_icon':
		if(gCurrentObjectSelected)
			GX_SetSelection(gCurrentObjectSelected, false, true); 
		gObjectList = GX_PopulateObjectList('ALL_OBJECTS');
		var gripperNode =  document.getElementById('gripper'); 
		gripperNode.setAttribute('x', '0'); 
		gripperNode.setAttribute('y', '0');
		gripperNode.setAttribute('width', '0');
		gripperNode.setAttribute('height', '0');
		gripperNode.setAttribute('visibility', 'visible'); 
		GX_SetSelection(gCurrentObjectSelected, true, false); 
		gNewObjectID = 'gripper'; 
		GX_StartFreeDraw('DRAW_MODE');		 
		gEnableMultiSelection = true; 
		break; 
	case 'svgdim_icon':
		var svgdatanode = document.getElementById('SVGOBJECTCONTAINER'); 
		var width = svgdatanode.getAttribute('width'); 
		WAL_setNumberInputValue("svgwidthIP", width, false);		
		var height = svgdatanode.getAttribute('height');	
		WAL_setNumberInputValue("svgheightIP", height, false);		
		WAL_showModalWindow(gSVGDimensionDlg,"GX_SVGDimensionDlgOK", "" );
		break; 	 
	case 'eraseBtn':
		GX_StartErase(); 
		break;
	case 'redrawBtn':
		GX_ShowPopupTips('REDRAW_TEXT'); 
		GX_Modify();
		break; 
	case 'addpointBtn':
		GX_AddPoint(); 
		break;
	case 'deletepointBtn':
		GX_DeletePoint(); 
		break; 
	case 'smoothBtn':
		GX_Smoothen(); 
		break; 
	case 'patheditBtn':
		//Debug_Message('Edit clicked');
		if(objectType == 'SVG_PATH_OBJECT'){
			// $(gCurrGripperSel).css({visibility:"hidden"});
			//$(gCurrGripperSel).hide(); 
			$(gCurrGripperSel).css({opacity:'0.3'}); 
			$('#DivPathMarker').show(); 
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
			GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true); 
		}
		//$('#addpointBtn').css({display:'none'}); 
		//$('#deletepointBtn').css({display:'none'}); 
		$('.polypointEditProperty').hide(); 
		if(gCurrentObjectSelected.classList[1] == 'POLYGON'){
			//$('#addpointBtn').css({display:'inline-block'}); 
			//$('#deletepointBtn').css({display:'inline-block'}); 
			$('.polypointEditProperty').show(); 
			//now show up the popover
			setTimeout(function(){			
				GX_ShowPopupTips(gTiptextArr['ADDPOINT_TEXT']); 		 
			 			},
			 	500);
			
			
		}
		else if(gCurrentObjectSelected.classList[1] == 'FREEDRAW_PATH'){
			$('.freedrawProp').show(); 			
		}		
		break; 
	case 'reloadPreviewBtn':
		GX_ReloadPreview(); 
		break; 
	case 'reloadBtn':
		GX_ReloadWorkspace(); 
		break; 
	case 'stroke_color_icon':
		WAL_hideWidget('colorpickwidget', true); 
		var initColVal = '#ffffff'; 
		if(gbMultiSelection == true){
			if(gMultiNodeArray.length < 1)
				return ; 				
			WAL_showColorPickerWidget('colorpickwidget', 'GX_ApplyPropertyToMultipleObjects', 'stroke_color_icon','stroke', initColVal, 0);
			return ; 
		}
		
		if(!gCurrentObjectSelected)
			return ; 
		initColVal = gCurrentObjectSelected.getAttribute('stroke');		
		//WAL_showColorPickerWidget('colorpickwidget', '', 'stroke_color_icon','stroke', initColVal, gCurrentObjectSelected.id);
		var pos = $('#rightpanel').position(); 
		var fillpos = $('#stroke_color_icon').position(); 
		pos.top = pos.top + fillpos.top; 		
		WAL_showColorPickerWidgetAtPos('colorpickwidget', '','',  pos.left,pos.top, 'stroke', initColVal, gCurrentObjectSelected.id);
		break;		
	case 'edit_grad_btn':
		var currgradTitle = WAL_getDropdownListSelection('gradlistDDL');
		var gradInfo = GX_GetGradInfoByTitle(currgradTitle); 
		if(gradInfo)
		{
			
	        gbNewGradObject = false; 
			GX_ShowGradWindow(gradInfo[1], gradInfo[2]);			
		}		
		break; 
	case 'edit_animpath_btn':
		//select the animpath as current selected object		
		var refPathNode  = document.getElementById(gCurrAnimParam.refPathID); 
		if(refPathNode){
			GX_SetSelection(refPathNode, true, false);		
			//change tab to Properties
			WAL_SetTabIndex('rightTabs', 1); 
		}
		break; 
	case 'download_icon':
		GX_DownloadCurrentProject(); 
		break;  
	case 'group_icon':
		//GX_AddNewSVGObject('GROUP'); 
		var JQSel = "#" + "groupNameIP";	
		/*if( (gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'GROUP')
				&&(gCurrentObjectSelected.id !='BASEGROUP') )
		{
			var name = gCurrentObjectSelected.classList[1]; 
			$(JQSel).val(name);
		}
		else
		*/ 
			$(JQSel).val("");				
		 WAL_showModalWindow(gSVGGroupNameDlgID,"GX_SVGGroupDlgNameOK", "" );	
		break;
	case 'text_icon':
		GX_AddNewSVGObject('text','', 'callbackSVGAddDefualtFn'); 
		break; 
	case 'circle_icon':
		 GX_AddNewSVGObject('circle','','callbackSVGAddDefualtFn'); 		 
		break; 
	case 'ellipse_icon':
		GX_AddNewSVGObject('ellipse','', 'callbackSVGAddDefualtFn'); 		
		break; 
	case 'square_icon':
		 GX_AddNewSVGObject('rectangle','', 'callbackSVGAddDefualtFn'); 
		// GX_StartFreeDraw('DRAW_MODE');
		break;	
	case 'polygon_icon':
		WAL_setNumberInputValue("polynSidesIP", '3', false);
	    WAL_setNumberInputValue("polyLengthIP", '50', false);
		WAL_showModalWindow(gPolyInputDlg,"GX_PolyInputDlgOK", "" );
		break; 	
	case 'freehand_icon':
		GX_AddNewSVGObject('freedraw_path','', 'callbackSVGAddDefualtFn'); 		
		break; 
	case 'image_icon':
		 var JQSel = "#" + "imageURLIP";	
		 $(JQSel).val("");				
		 WAL_showModalWindow(gImageNameDlgID,"GX_ImageDlgOK", "" );			
		break; 
	case 'apply_urlBtn':
		if( (gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'SVG_IMAGE_OBJECT')){
			var urlStr = $('#imgURLValueIP').val(); 
			gCurrentObjectSelected.setAttribute('xlink:href', urlStr); 
		}
		break; 
	case 'boldBtn':
		 var Prop = gCurrentObjectSelected.getAttribute('font-weight'); 
		 if(Prop == 'bold')
			 Prop = 'normal'; 
		 else
			 Prop = 'bold'; 
		GX_SetObjectAttribute(gCurrentObjectSelected, "font-weight", Prop, true, false);
		 break;
	 case 'italicBtn':
		 var Prop = gCurrentObjectSelected.getAttribute('font-style'); 
		 if(Prop == 'italic')
			 Prop = 'normal'; 
		 else
			 Prop = 'italic'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "font-style", Prop, true, false);
		 break;
	 case 'underlineBtn':
		 var Prop = gCurrentObjectSelected.getAttribute('text-decoration'); 
		 if(Prop == 'underline')
			 Prop = 'normal'; 
		 else
			 Prop = 'underline'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "text-decoration", Prop, true, false);
		 break;
	 case 'strikethroughBtn':
		 var Prop = gCurrentObjectSelected.getAttribute('text-decoration'); 
		 if(Prop == 'line-through')
			 Prop = 'normal'; 
		 else
			 Prop = 'line-through'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "text-decoration", Prop, true, false);
		 break;
	 case 'smallcapsBtn':
		 var Prop = gCurrentObjectSelected.getAttribute('font-variant'); 
		 if(Prop == 'small-caps')
			 Prop = 'normal'; 
		 else
			 Prop = 'small-caps'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "font-variant", Prop, true, false);
		 break; 
	 case 'editTextBtn':
		 GX_MakeTextEditable(gCurrentObjectSelected);
		 break; 
	case 'add_marker_btn':
		var markerType = WAL_getDropdownListSelection('markerTypeListDDL');
		markerType = gMarkerType[markerType]; 		
		var markerShape = WAL_getDropdownListSelection('markerShapeListDDL');
		markerShape = markerShape.toUpperCase();			
		GX_AddNewSVGObject('MARKER_' + markerShape, markerType, 'NewMarkerDefaultCallbackFn'); 
		break; 
	case 'delete_marker_btn':
		if(!gCurrentObjectSelected)
			return ; 
		if(gCurrentObjectSelected.classList[0] != 'SVG_PATH_OBJECT')
			return ; 
		var markerType = WAL_getDropdownListSelection('markerTypeListDDL');
		markerType = gMarkerType[markerType]; 	
		GX_DeleteMarkerObject(gCurrentObjectSelected.id,markerType ); 
		break; 
	case 'marker_stroke_color_btn':
		WAL_hideWidget('marker_colorpickwidget', true); 
		if(!gCurrentObjectSelected)
			return ; 
		//var markerType = WAL_getDropdownListSelection('markerTypeListDDL');
		//markerType = gMarkerType[markerType].toUpperCase();	
		gCurrentMarkerNode = GX_GetCurrentMarkerSelection();		
		if(!gCurrentMarkerNode)
			return ; 
	    
		var initColVal = gCurrentMarkerNode.getAttribute('stroke'); 	
		var pos = $('#rightpanel').position(); 
		var fillpos = $('#marker_stroke_color_btn').position(); 
		pos.top = pos.top + fillpos.top -100; 		
		WAL_showColorPickerWidgetAtPos('marker_colorpickwidget', '','',  pos.left,pos.top, 'stroke', initColVal, gCurrentMarkerNode.id);
		//WAL_showColorPickerWidgetAtPos('marker_colorpickwidget', '', 'marker_stroke_color_btn','stroke', initColVal, gCurrentMarkerNode.id);
		break; 
	case 'marker_fill_color_btn':
		WAL_hideWidget('marker_colorpickwidget', true); 
		if(!gCurrentObjectSelected)
			return ; 					
		gCurrentMarkerNode = GX_GetCurrentMarkerSelection();	
		if(!gCurrentMarkerNode)
			return ; 
		
		var initColVal = gCurrentMarkerNode.getAttribute('fill'); 	
		var pos = $('#rightpanel').position(); 
		var fillpos = $('#marker_fill_color_btn').position(); 
		pos.top = pos.top + fillpos.top - 100; 		
		WAL_showColorPickerWidgetAtPos('marker_colorpickwidget', '','',  pos.left,pos.top, 'fill', initColVal, gCurrentMarkerNode.id);
		//WAL_showColorPickerWidget('marker_colorpickwidget', '', 'marker_fill_color_btn','fill', initColVal, gCurrentMarkerNode.id);
		break;		
	case 'delete_grad_btn':
		var currgradTitle = WAL_getDropdownListSelection('gradlistDDL');
		var gradInfo = GX_GetGradInfoByTitle(currgradTitle); 
		GX_RemoveGradient(gradInfo[1], currgradTitle);
		break;	
	 case 'anim_edit_icon':
		 gLastPositionValue = 0; 
		 var animTitle = WAL_getDropdownListSelection('listanimDDL');
		 var animInfo = GX_GetAnimInfoByTitle(animTitle);
		 if(!animInfo)
			 return ; 
		 var animID = animInfo[0]; 
		 if(gCurrAnimNode)
			 GX_RestoreAnimationObject(gCurrAnimNode.id); 
		 
		if(animID)
		{
			gCurrAnimNode = document.getElementById(animID); 	
			if(!gCurrAnimNode)
				return ; 
			//GX_EditAnimation(animID); 
		}			
		 break; 
	 case 'anim_preview_icon':
		 var animTitle = WAL_getDropdownListSelection('listanimDDL'); 
		 var animInfo = GX_GetAnimInfoByTitle(animTitle);
		 if(!animInfo)
			 return ; 
		 var animID = animInfo[0]; 
		 if(gCurrAnimNode)
			 GX_RestoreAnimationObject(gCurrAnimNode.id); 
		 if(animID)
		 {			 
			 gCurrAnimNode = document.getElementById(animID); 	
				if(!gCurrAnimNode)
					return ; 
			GX_PreviewAnimation(animID);
		 }			 
		 break; 
	 case 'anim_delete_icon':
		 var animTitle = WAL_getDropdownListSelection('listanimDDL'); 
		 var animInfo = GX_GetAnimInfoByTitle(animTitle);
		 if(animInfo)
			 GX_RemoveAnimationObject(animInfo[0]); 		 
		 break; 	 
	 
	 case 'grid_icon':	
		var gridNode = document.getElementById('gridpattern'); 	
		var bigGridNode =  document.getElementById('bigrectpattern');
		 if(gShowGrid == false){
			    gShowGrid = true; 
				bigGridNode.setAttribute('visibility', 'visible'); 
				gridNode.setAttribute('visibility', 'visible'); 
			}			
			else{
				gShowGrid = false; 
				bigGridNode.setAttribute('visibility', 'hidden'); 
				gridNode.setAttribute('visibility', 'hidden'); 
			}
		 
		 break; 
		
	 case 'publish_icon':
		 GX_PublishFile(); 
		 
		 var filename = 'MynewtryPAM.svg'; 
		 //GXRDE_ImportPublishedContent(filename, 'fnImport'); 
		 break; 
	 default:
		break; 		
	}
}

function fnPublish(respStr){
	//Debug_Message("URL: " +respStr ); 
	 var myWindow = window.open(respStr, '', '');
}

function fnImport(respStr){
	Debug_Message(respStr); 
}
function GX_showEditorInterface(Mode)
{
	$('.PROPERTY_INTERFACE').hide(); 
	//GX_ResetAllSelections();
	
	var currObjectNode = gCurrentObjectSelected; 
	GX_SetSelection(currObjectNode, false, true); 
	var JQSel = '#animationListWidget'; 
	$(JQSel).hide(); 
	JQSel = '#treepanel'; 
	$(JQSel).show(); 
	switch(Mode)
	{
	case 'LAYOUT_MODE':
		
		WAL_hideWidget('multiselect_inteface', false);
		WAL_hideWidget('zoompan_interface', false); 
		var width = $('#zoompan_interface').width(); 
		var left = $('#zoompan_interface').position().left; 
		
		var node = document.getElementById('layout_interface');		
		left += width + 5; 
		node.style.left = left+'px' ;		 
		WAL_hideWidget('layout_interface', false); 		
		gObjectEditMode = 'LAYOUT_MODE';
		break;
	case 'ZOOMPAN_MODE':
		WAL_hideWidget('zoompan_interface', false); 
		//gObjectEditMode = 'ZOOMPAN_MODE';
		break;	
	case 'OBJECT_MODE':
		WAL_hideWidget('zoompan_interface', false); 
		var width = $('#zoompan_interface').width(); 
		var left = $('#zoompan_interface').position().left; 
		
		var node = document.getElementById('object_interface');		
		left += width + 5; 
		node.style.left = left+'px' ;		 
		WAL_hideWidget('object_interface', false); 				
		gObjectEditMode = 'OBJECT_MODE';
		break;		
	case 'PROPERTIES_MODE':		
		gObjectEditMode = 'PROPERTIES_MODE';
		gGradientList = GX_GetGradientList(); 
		GX_UpdateGradientList(gGradientList);
		WAL_hideWidget('multiselect_inteface', false);
		WAL_hideWidget('common_property_interface', false); 				
		break;			
	case 'STROKE_MODE':
		WAL_hideWidget('zoompan_interface', false);
		WAL_hideWidget('stroke_interface', false); 			
		break; 
	case 'FILL_MODE':		
		WAL_hideWidget('zoompan_interface', false);
		WAL_hideWidget('fill_interface', false); 	
		break;
	case 'ANIM_MODE':
		WAL_hideWidget('animate_interface', false); 		
		gObjectEditMode = 'ANIMATION_EDIT_MODE';	
		var JQSel = '#treepanel'; 
		$(JQSel).hide(); 
		 setTimeout(function(){			
			 //WAL_showModalWindow('animationListWidget',"", "" );			 
			 JQSel = '#animationListWidget'; 
			 $(JQSel).show(); 			 
		}, 250); 
		
		break;
	/*case 'MODIFY_TEXT_MODE':
		gObjectEditMode = 'MODIFY_TEXT_MODE';		
		break;
		*/ 
	case 'FONT_STYLE_MODE':
		gObjectEditMode = 'FONT_STYLE_MODE'; 
		WAL_hideWidget('texteditinterface', false); 
		var fontsize = currObjectNode.getAttribute('font-size'); 
		GX_UpdatePropertyOnUI('FONT_SIZE', fontsize);
		var fontname = currObjectNode.getAttribute('font-family');
		GX_UpdatePropertyOnUI('FONT_NAME', fontname);
		break; 
	case 'MARKER_MODE':
		WAL_hideWidget('marker_interface', false);		
		gObjectEditMode = 'MARKER_MODE'; 
		if( (gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'SVG_PATH-OBJECT') )
			GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, false); 
		break; 
	default:
		break; 	
	}	
	GX_SetSelection(currObjectNode, true, true); 
}

function GX_GetGradientList()
{
	var gradList = []; 
	var JQSel = '.SVG_GRAD_OBJECT'; 
	var num = $(JQSel).size();
	var DOMArr = $(JQSel).toArray(); 
	for(var k=0; k < DOMArr.length; k++)
	{
		var gradID = DOMArr[k].getAttribute('id');
		var gradTitle = DOMArr[k].classList[2]; 
		var gradType = DOMArr[k].classList[1];
		var gradInfo = [gradTitle,gradID,gradType]; 		 
		gradList.push(gradInfo); 
	}
	return gradList; 
}

function GX_UpdateGradientList(gradList)
{	
	WAL_clearAllFromDropdownList('gradlistDDL'); 
	
	// { label: 'Text' value: 'Id'}
	var listItem =[]; 
	var group1 = '--- Default Fill ---'; 
	var group2 = '--- Custom Fill ---'
	listItem.push({ label: 'None', value: 'None', group: group1 }); 
	listItem.push({ label: 'Solid', value: 'Solid', group:group1 });
	listItem.push({ label: 'Linear Gradient', value: 'Linear Gradient', group:group1 });
	listItem.push({ label: 'Radial Gradient', value: 'Radial Gradient', group:group1 });
	
	//now add the custom ones here 
	for(var j=0; j < gradList.length; j++)
	{		
		listItem.push({ label: gradList[j][0], value: gradList[j][0], group:group2 });
	}
	WAL_UpdateDropDownList('gradlistDDL', listItem); 
	
	/*WAL_AddItemsToList('gradlistDDL', { label: 'None', value: '0', group:'Default' }); 
	WAL_AddItemsToList('gradlistDDL', { label: 'Solid', value: '1', group:'Default' }); 
	WAL_AddItemsToList('gradlistDDL', { label: 'Linear Gradient', value: '2', group:'Custom' }); 
	WAL_AddItemsToList('gradlistDDL', { label: 'Radial Gradient', value: '3', group:'Custom' });
	*/ 
	
	
}
function GX_CheckValueChange(event)
{
	var CBID = event.target.id;
	var state = event.args.checked; 
	var JQSel; 
	var node; 		
	if( (CBID != 'snaptogrid')&&(CBID != 'tooltipBtn') ) {
		if(!gCurrentObjectSelected){
			Debug_Message('No Object Selected'); 
			return ; 
		}
		var objectType = gCurrentObjectSelected.classList[1];
	}
		
	
	switch(CBID)
	{
	case 'snaptogrid':
		gSnapToGrid = state; 
		break; 
	case 'pathclose':
		gClosePath = state;
		GX_SetClosePath(gCurrentObjectSelected, gClosePath); 		
		break; 
	case 'tooltipBtn':
		if(gShowTooltip == true){
			GX_ShowTooltip(false); 
			gShowTooltip = false; 
		}
		else{
			GX_ShowTooltip(true); 
			gShowTooltip = true; 
		}
		break; 
		
	case 'largearcCheckBox':
		if(objectType== 'ELLIPTIC')
		{
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
			if(state == true)
				gPathDataArray[3][0] = 1; 
			else
				gPathDataArray[3][0] = 0; 
			GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false); 
		}		
		break; 
	case 'sweepCheckBox':
		if(objectType== 'ELLIPTIC')
		{
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
			if(state == true)
				gPathDataArray[4][0] = 1; 
			else
				gPathDataArray[4][0] = 0; 
			GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false); 
		}		
		break; 
	}
}

function GX_SetObjectAttribute(ObjNode, AttrName, AttrValue, bListStore, bUpdateUI)
{
	var nodeClass = ObjNode.classList[0]; 
	var retVal=true;
	var prevList, currList; 
	var nodename = ObjNode.nodeName.toUpperCase(); 
	var objectType = ObjNode.classList[0]; 
	var pathType = ObjNode.classList[1]; 
	var classvalue=""; 
	//first apply the attribute based on the values
	if(bListStore == true)
		prevList = EL_getObjectAttributes(ObjNode);	
	if(AttrName)
	{
		switch(AttrName)
		{
		case 'DIMENSION':
			retVal = GX_SetRectObjectDim(ObjNode, AttrValue); 
			if(bUpdateUI ==  true)
				GX_UpdatePropertyOnUI('DIMENSION', AttrValue); 
			break; 
		case 'TRANSLATE':
			//if(nodeClass != 'GROUP')
				//return false ; 
			retVal = GX_SetTransformProperty(ObjNode, 'translate',AttrValue);
			break;
		case 'ROTATE':
			if(objectType == 'SVG_PATH_OBJECT')
			{
				gPathDataArray = GX_ConvertPathDataToArray(ObjNode);
				if(pathType == 'ELLIPTIC')
				{
					gPathDataArray[2][0] = AttrValue.rotate  + ''; 
					gCurrSelectedObjectDim.rotate = AttrValue.rotate ; 
				}
				else
				{
					var angleDiff = new Number(AttrValue.rotate); 
					angleDiff =  angleDiff - gCurrSelectedObjectDim.rotate; 
					AttrValue.rotate = angleDiff; 						
					gPathDataArray = GX_SetRotationToPoints(AttrValue, gPathDataArray); 
					gCurrSelectedObjectDim.rotate += angleDiff; 
				}
				
				retVal = GX_ConvertArrayToPathData(ObjNode.id, gPathDataArray);				
				//also updtae the classList values 
				var rotatestr = 'ROTATE,'+gCurrSelectedObjectDim.rotate; 	
				var classvalue=""; 
				if(pathType == 'POLYGON')
					classvalue = ObjNode.classList[0] +' ' +ObjNode.classList[1] +' '+rotatestr + ' '+ObjNode.classList[3];
				else
					classvalue = ObjNode.classList[0] +' ' +ObjNode.classList[1] +' '+rotatestr ;
				
				ObjNode.setAttribute('class', classvalue); 
				//GX_UpdatePathMarker(ObjNode.id, gPathDataArray, true);				
			}
			else if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') )
			{
				retVal = GX_SetTransformProperty(ObjNode, 'rotate',AttrValue);
				gCurrSelectedObjectDim.rotate = AttrValue.rotate; 
				var rotatestr = 'ROTATE,'+gCurrSelectedObjectDim.rotate; 			
				var classvalue = ObjNode.classList[0] +' ' +ObjNode.classList[1] +' '+rotatestr ;
				ObjNode.setAttribute('class', classvalue); 
			}
			break; 			
		case 'PATH_DATA':		
			retVal = GX_ConvertArrayToPathData(ObjNode.id, AttrValue); 			
			break;
		case 'POLYGON_CENTER':
			if(pathType == 'POLYGON')
			{
				var lengthStr = 'CENTRE,'+ AttrValue.x +',' + AttrValue.y + ',' +  AttrValue.width;			
				classvalue = ObjNode.classList[0] +' ' +ObjNode.classList[1] +' '+ ObjNode.classList[2] + ' ' + lengthStr;
				ObjNode.setAttribute('class', classvalue); 
				//Debug_Message("Polygon centre at End"); 
			}	
			break; 
		default:
			ObjNode.setAttribute(AttrName,AttrValue); 
		    if(bUpdateUI ==  true)
		    	GX_UpdatePropertyOnUI(AttrName, AttrValue); 
			break; 	
		}			
		if( bListStore == true)
		//if( (retVal == true) && (bListStore == true) )
		{
			currList = EL_getObjectAttributes(ObjNode);
			EL_CompareAndAddtoList(prevList, currList, gObjectEditList, gCompactEditList);			
		}
		return retVal; 
	}	
	if(bListStore == true)
	{		
		gCurrAttributeList = EL_getObjectAttributes(ObjNode);         
        EL_CompareAndAddtoList(gPrevAttributeList, gCurrAttributeList, gObjectEditList, gCompactEditList);    
	}	
	return retVal; 	
	//if bListStore true then get currentList and call EditManager functions to store in the list 
}

function GX_ConvertArrayToPathData(pathID, inputpathParam) {
	
    var pathNode = document.getElementById(pathID);
    var pathParam = "";  
    var pathType = pathNode.classList[1];
    
    if( (pathType == 'LINE_PATH') || (pathType == 'POLYGON') || (pathType == 'FREEDRAW_PATH')||(pathType == 'CUBIC_BEZIER') 
    		|| (pathType == 'QUADRATIC_BEZIER'))
    {
    	  	
    	for (var k = 0; k < inputpathParam.length; k++) {
    		if( (inputpathParam[k][3] == 'POINT') || (inputpathParam[k][3] == 'START_POINT')||(inputpathParam[k][3] == 'END_POINT'))
    		{
    			pathParam += (inputpathParam[k][0] + inputpathParam[k][1] + "," + inputpathParam[k][2] + " ");
    		}               
         }   
    	if(inputpathParam[inputpathParam.length-1][0] == 'z')
    		pathParam += "z";
        /*if(pathType == 'POLYGON')
        {
        	pathParam += "z";
        		
        } */  		
    }
    
 else if (pathType == 'ELLIPTIC') {
     pathParam += ("M" + inputpathParam[0][1] + "," + inputpathParam[0][2] + " ");
     pathParam += ("A" + inputpathParam[1][1] + "," + inputpathParam[1][2] + " ");
     pathParam += inputpathParam[2][0]+ " " +inputpathParam[3][0]+ " "+inputpathParam[4][0]+ " ";
     pathParam += inputpathParam[5][1] + "," +inputpathParam[5][2]+ " ";    
     if(inputpathParam[inputpathParam.length-1][0] == 'z')
 		pathParam += "z";
 }     //M10,10 a25,50 -30 0,1 50,70
 else if (pathType == 'HOR_LINE_PATH'){
	 pathParam += ("M" + inputpathParam[0][1] + "," + inputpathParam[0][2] + " ");
	 pathParam += ("H" + inputpathParam[1][1]);
 }
 else if (pathType == 'VERT_LINE_PATH'){
	 pathParam += ("M" + inputpathParam[0][1] + "," + inputpathParam[0][2] + " ");
	 pathParam += ("V" + inputpathParam[1][2]);
 }
	 
    pathNode.setAttribute("d", pathParam);
    return true; 
    
    //alert("Path updated successfully"); 
}

function GX_GetObjectAttribute(ObjNode, AttrName)
{
		
    var nodeClass = ObjNode.classList[0]; 
	var retVal=0; 
	//first apply the attribute based on the values
	switch(AttrName)
	{
	case 'DIMENSION':	   
		   retVal = GX_GetRectObjectDim(ObjNode);
		break; 
	case 'TRANSLATE':
		if(nodeClass != 'GROUP')
			return false ; 
		retVal = GX_GetTransformProperty(ObjNode, 'translate');
		break;

	default:
		retVal = ObjNode.getAttribute(AttrName); 
		break; 	
	}	
	//var str = "x=" + retVal.x + " y=" +  retVal.y  + "width=" + retVal.width; + "  height=" + retVal.height; 
	//Debug_Message(str); 
	return retVal; 
}


function GX_GetPathDimension(pathNode)
{
	var pathnodeName = pathNode.nodeName.toUpperCase();	
	var patharra1 ; 
	if(!pathNode)
		return ; 
	//frist convert parameters into an array 
	var dvalue = pathNode.getAttribute('d');
	if(!dvalue)
		return 0; 
	//gPathDataArray.splice(0,gPathDataArray.length); 
	gPathDataArray = GX_ConvertPathDataToArray(pathNode);
	if(!gPathDataArray)
		return 0; 
	var newDim = GX_GetDimensionOfPath(gPathDataArray); 
	var transValue = GX_GetTransformProperty(pathNode, 'translate'); 
	newDim.x += transValue.x;
	newDim.y += transValue.y; 
	//run the minimax logic to find the dimension 
	return newDim; 
}


function GX_ConvertPathDataToArray(pathNode)
{
	if(!pathNode)
		return 0; 
	
	var pathType = pathNode.classList[1]; 
	var newArr = []; 
	var dvalue = pathNode.getAttribute('d');
	if(!dvalue)
		return 0; 
	var array1 = dvalue.split(" ");	
	var item2;
	var newentry; 
	
	for(var j=0; j < array1.length; j++)		
	{
		if(pathType == 'ELLIPTIC')
		{
			if( (j > 1) && (j < 5 ) )
			{
				newentry =[array1[j],"", "", 'NONE'];
				newArr.push(newentry); 
			}
			else
			{
				if(array1[j][0])
				{
					if(array1[j][0] != 'z') 
					{
						var entryArr = array1[j].split(",");				
						var item1 = entryArr[0].substring(0,1); 
						if( (item1 >= 0) && (item1 <= 9) )
						{
							item1 = ""; 
							item2 = entryArr[0]; 
						}
						else
						{				
							item2 = entryArr[0].substring(1); 
						}			 
						var item3 = entryArr[1]; 
						newentry = [item1, item2, item3, "NONE"]; 
						newArr.push(newentry); 
					}
					else
					{
						newentry = ['z', "", "", "NONE"]; 
						newArr.push(newentry); 
					}					
				}			
			}			
		}
		else if(pathType == 'HOR_LINE_PATH'){
			
			var entryArr = array1[j].split(",");				
			var item1 = entryArr[0].substring(0,1); 
			if( (item1 >= 0) && (item1 <= 9) )
			{
				item1 = ""; 
				item2 = entryArr[0]; 
			}
			else
			{				
				item2 = entryArr[0].substring(1); 
			}	
			if(item1 != 'H')
				var item3 = entryArr[1];
			else
				var item3 = newArr[0][2];
			var newentry = [item1, item2, item3, "NONE"]; 
			newArr.push(newentry); 
		}//(pathType == 'HOR_LINE_PATH')
		else if(pathType == 'VERT_LINE_PATH'){
			
			var entryArr = array1[j].split(",");				
			var item1 = entryArr[0].substring(0,1); 
			if( (item1 >= 0) && (item1 <= 9) )
			{
				item1 = ""; 
				item2 = entryArr[0]; 
			}
			else
			{				
				item2 = entryArr[0].substring(1); 
			}	
			if(item1 != 'V')
				var item3 = entryArr[1];
			else
				var item3 = newArr[0][1];
			//this is hack so that one can get corrct rectngular dimension later on 
			//need a counter hack on the ArraytoPath data conversion.
			if(item1 == 'V')
				var newentry = [item1, item3, item2, "NONE"]; 
			else
				var newentry = [item1, item2, item3, "NONE"]; 
			newArr.push(newentry); 
		}//(pathType == 'VERT_LINE_PATH')
		else
		{
			if(array1[j][0])
			{
				if(array1[j][0] != 'z')
				{
					var entryArr = array1[j].split(",");				
					var item1 = entryArr[0].substring(0,1); 
					if( (item1 >= 0) && (item1 <= 9) )
					{
						item1 = ""; 
						item2 = entryArr[0]; 
					}
					else
					{				
						item2 = entryArr[0].substring(1); 
					}			 
					var item3 = entryArr[1]; 
					var newentry = [item1, item2, item3, "NONE"]; 
					newArr.push(newentry); 
				}
				else
				{
					newentry = ['z', "", "", "NONE"]; 
					newArr.push(newentry); 
				}				
			}			
		}		
	}
	var lastIndexPoint = -1; 
	for(var j=0; j < newArr.length; j++)
	{
		if(newArr[j][0] != 'z')
		{
			if(j==0)
				newArr[j][3] = 'START_POINT';
			else
				newArr[j][3] = 'POINT'; 
			lastIndexPoint++; 
		}
	}				
	newArr[lastIndexPoint][3]= 'END_POINT'; 
	
	if(pathType == 'ELLIPTIC')
	{
		newArr[1][3] = 'NONE'; 
		newArr[2][3] = 'NONE'; 
		newArr[3][3] = 'NONE'; 
		newArr[4][3] = 'NONE'; 
	}
	return newArr; 
}

function GX_GetDimensionOfPath(pathArray)
{
	var minX = 100000;
	var minY=100000;
	var maxX=0;
	var maxY=0;
	var pathDim =  new sDimension(); 
	for(var j=0; j <pathArray.length; j++)
	{
		var entry = pathArray[j]; 
		if( (entry[3] == 'POINT') || (entry[3] == 'START_POINT')||(entry[3] == 'END_POINT') )
		{
			if(entry[1] <  minX)
				pathDim.minXIndex = j; 
			minX = Math.min(minX, entry[1]);					

			if(entry[2] <  minY)
				pathDim.minYIndex = j;		
			//if(entry[0] != 'H')
				minY = Math.min(minY, entry[2]);
			
			if(entry[1] >= maxX)
				pathDim.maxXIndex = j;	
			maxX = Math.max(maxX, entry[1]);
			
			if(entry[2] >= maxY)
				pathDim.maxYIndex = j;
			maxY = Math.max(maxY, entry[2]);			
		}
	}	
	pathDim.x = new Number(minX); 
	pathDim.y = new Number(minY);
	pathDim.width  = new Number(maxX); 
	pathDim.width = maxX - minX; 
	pathDim.height = new Number(maxY); 
	pathDim.height =  maxY - minY;		
	return pathDim; 
}


function GX_GetPathStartPoint(pathNode)
{
	var pathnodeName = pathNode.nodeName.toUpperCase();	
	var patharra1 ; 
	
	//frist convert parameters into an array 
	var dvalue = pathNode.getAttribute('d');
	if(!dvalue)
		return 0; 
	//gPathDataArray.splice(0,gPathDataArray.length); 
	gPathDataArray = GX_ConvertPathDataToArray(pathNode);
	if(!gPathDataArray)
		return 0; 
	var newPoint = new sPoint(); 
	if(gPathDataArray[0][3] == 'START_POINT')
	{
		newPoint.x = gPathDataArray[0][1];
		newPoint.y = gPathDataArray[0][2];
		return newPoint; 
	}
	
}
function GX_UpdatePropertyOnUI(AttrName, AttrVal)
{
//_rm temporary code to be be done later properly 
	
	switch(AttrName)
	{
	case 'POSITION':
		var x = AttrVal.x+" "; 
		var y = AttrVal.y+ " "; 
		WAL_setNumberInputValue("lposIP", x, false);
		WAL_setNumberInputValue("tposIP", y, false);		
		break; 
	case 'WIDTH':
		var width = AttrVal+" "; 
		WAL_setNumberInputValue("widthIP", width, false);
		break; 
	case 'HEIGHT':
		var height = AttrVal+" "; 
		WAL_setNumberInputValue("heightIP", height, false);
		break;		
	case 'DIMENSION':
		var x,y,w,h;
		x = AttrVal.x + ""; 
		y = AttrVal.y + ""; 
		w = AttrVal.width + "";
		h = AttrVal.height + ""; 
		WAL_setNumberInputValue("lposIP", x, false);
		WAL_setNumberInputValue("tposIP", y, false);	
		WAL_setNumberInputValue("widthIP", w, false);
		WAL_setNumberInputValue("heightIP", h, false);
		
	case 'GRADIENT':
		//get the fill url 
		if( !gCurrentObjectSelected)
			return ; 		
		var fillstr = gCurrentObjectSelected.getAttribute('fill'); 
		if(!fillstr)
			return ; 
		if(fillstr == 'none')
		{
			WAL_SetItemByValueInList('gradlistDDL', 'none', 'true'); 
			return ; 
		}
		var index = fillstr.indexOf('url(#');
		if(index < 0)
			 return ; 
		fillstr = fillstr.substring(5, fillstr.length-1); 
		var info = GX_GetGradInfoByID(fillstr);
		if(info[0])
			WAL_SetItemByValueInList('gradlistDDL', info[0], 'true'); 
		return ; 
		//if none then none 
		//look for url(# string if found then get the 
		break; 
	case 'FONT_SIZE':
		WAL_setNumberInputValue('fontSizeIP', AttrVal, false);
		break; 
	case 'FONT_NAME':
		WAL_SetItemByValueInList('fontNameDDL', AttrVal, true);
		break; 
	case 'RADIUS':
		var radius = AttrVal+" "; 
		WAL_setNumberInputValue("radiusIP", radius, false);
		break; 
	default: 
		break; 
	}
}

function GX_SelectObjectInMultiMode(Node)
{
	//deselect anything prior to this 
	if(gCurrentObjectSelected)
		GX_SetSelection(gCurrentObjectSelected, false, true); 
	var svgcontainer = document.getElementById('objectcontainer');
	//check if the node is SCG_SHAPE_OBJECT TYPE 
	var nodeClass= Node.classList[0];
	var multiNodeArrLen = gMultiNodeArray.length; 
	if(! ((nodeClass == 'SVG_SHAPE_OBJECT') || (nodeClass == 'SVG_IMAGE_OBJECT')|| (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT')) )
		return ; 
	
	var objDim = GX_GetRectObjectDim(Node); 
	
		//get the Rect Object DIm 
	
	//create a clone from gripper
	
	//if(gEnableMultiSelection == false)
	{
		var gripperNode = document.getElementById('gripper'); 	
		gripperNode.removeAttribute('stroke-opacity'); 
		var gripParentNode = gripperNode.parentNode;
		var gripClonenode = gripperNode.cloneNode(true); 
		gripClonenode.setAttribute('id', Node.id + 'GRIPPER'); 
		gripClonenode.setAttribute('class', 'CLONED_GRIPPERS'); 
		gripClonenode.setAttribute('visibility', 'visible'); 
		
		if(multiNodeArrLen < 1)
			gripClonenode.setAttribute('stroke', gMultiSelColor1); 
		else
			gripClonenode.setAttribute('stroke', gMultiSelColor2);	
		gripClonenode = gripParentNode.appendChild(gripClonenode); 
		
		objDim.x -= 5;
		objDim.y -= 5; 
		objDim.width += 10; 
		objDim.height += 10; 		
		GX_SetRectObjectDim(gripClonenode, objDim); 
	}
	
	gbMultiSelection = true; 
	gMultiNodeArray.push(Node.id); 
	if( (Node.classList[0] == 'SVG_PATH_OBJECT') || (Node.classList[0] == 'SVG_TEXT_OBJECT')){
		gbAlignDimension =  false;
		WAL_disableWidget('alignwidth_icon', 'data-customButton', false, true);
		WAL_disableWidget('alignheight_icon', 'data-customButton', false, true);		
	}
	if(gbMultiSelection == true){
		//WAL_disableWidget('objectContextmenu', 'data-jqxMenu', false, true);
		GX_DisableRightContextMenu(true); 
	}		
	
		
	//add iD woith ObjectID + 'gripper'
	//add a class = 'CLONE_GRIPPER' 
	
	//add it to the DOM 
	
	//set the broder value of the gripper to some color 
	
	//add the objectNode ID to an multilist array after checking in the array if the Object already exists. 
	
	
}


function GX_DisableRightContextMenu(bFlag){
	WAL_DisableMenuItem('objectContextmenu', 'copymenu', bFlag); 
	WAL_DisableMenuItem('objectContextmenu', 'pastemenu', bFlag); 
	WAL_DisableMenuItem('objectContextmenu', 'move_fwd', bFlag); 
	WAL_DisableMenuItem('objectContextmenu', 'move_top', bFlag); 
	WAL_DisableMenuItem('objectContextmenu', 'move_bwd', bFlag); 
	WAL_DisableMenuItem('objectContextmenu', 'move_bottom', bFlag); 
}
function GX_DeselectObjectFromMultiMode()
{
	var JQSel = '.CLONED_GRIPPERS'; 
	$(JQSel).remove(); 
	for(var j=0; j < gMultiNodeArray.length; j++){
		var objNode = $('#' + gMultiNodeArray[j])[0]; 
		GX_SetObjectAttribute(objNode, '', '', true, false); 		
	}
	
	gMultiNodeArray.splice(0, gMultiNodeArray.length); 
	//WAL_disableWidget('objectContextmenu', 'data-jqxMenu', false, false); 
	GX_DisableRightContextMenu(false); 
}

function GX_AlignDimension(alignType)
{
	var nodeArrLen = gMultiNodeArray.length; 
	if(nodeArrLen < 2)
	{
		Debug_Message("Choose at least TWO Objects to Align");
		return ; 
	}	
	//get the refNode and refdimension
	var refNode = document.getElementById(gMultiNodeArray[0]);
	var refNodedim = GX_GetRectObjectDim(refNode); 
	var refrightMargin =  refNodedim.x+refNodedim.width; 
	var refbottomMargin = refNodedim.y + refNodedim.height;
	var refMiddleHor = refNodedim.x + refNodedim.width/2;
	var refMiddleVert = refNodedim.y + refNodedim.height/2;
	var deltaX, deltaY; 
	var nextNode; 
	var nextNodedim;
	var gripperDim; 
	var gripperNode; 
	var nextRightMargin, nextBottomMargin; 
	var nextMidHor, nextMidVert; 
	var offset = new sDimension(); 
	//loop around remaining nodes 
	for(var k=1 ; k < nodeArrLen; k++)
	{
		//get nextNode and nextNodedim
		nextNode = document.getElementById(gMultiNodeArray[k]);
		nextNodedim = GX_GetRectObjectDim(nextNode);		
		// = new sDimension(); 
		var objType = nextNode.classList[0]; 
		//set the nextnodeDim to refdim
		if(alignType == 'WIDTH')
			nextNodedim.width = refNodedim.width; 	
		else if(alignType == 'HEIGHT')
			nextNodedim.height = refNodedim.height;
		else if(alignType == 'LEFT')
			offset.x = refNodedim.x - nextNodedim.x;
		else if(alignType == 'TOP')
			offset.y = new Number(refNodedim.y - nextNodedim.y);
		else if(alignType == 'RIGHT')
		{
			nextRightMargin = nextNodedim.x + nextNodedim.width; 
			deltaX = refrightMargin -  nextRightMargin;			
			offset.x = deltaX ; //refNodedim.x - nextNodedim.x;
		}	
		else if(alignType == 'BOTTOM')
		{
			nextBottomMargin = nextNodedim.y + nextNodedim.height; 
			deltaY = refbottomMargin -  nextBottomMargin; 
			nextNodedim.y = nextNodedim.y - deltaY;			
			offset.y =  deltaY ;//refNodedim.y - nextNodedim.y;
		}	
		else if(alignType == 'MIDDLE_HOR')
		{
			nextMidHor = nextNodedim.x + nextNodedim.width/2; 
			deltaX = refMiddleHor - nextMidHor; 
			offset.x = deltaX; 
			/*
			nextNodedim.x = nextNodedim.x - deltaX; 	
			if(nextNodedim.x < 0)
				nextNodedim.x = 0; 
			offset.x = refNodedim.x - nextNodedim.x;
			*/
		}
		else if(alignType == 'MIDDLE_VERT')
		{
			nextMidVert = nextNodedim.y + nextNodedim.height/2; 
			deltaY = refMiddleVert - nextMidVert; 
			offset.y = deltaY; 			
		}
		
		if( (alignType == 'WIDTH') || (alignType == 'HEIGHT')){				
				GX_SetObjectAttribute(nextNode, 'DIMENSION', nextNodedim, true, false); 
		}
		else {
			GX_SetObjectAttribute(nextNode, 'TRANSLATE', offset, true, false); 
			GX_UpdatePosFromTranslation(nextNode);
			//if(objType == 'SVG_PATH_OBJECT')
			//	GX_UpdatePathData(nextNode); 
		}		
		/*
		gripperDim = nextNodedim; 
		gripperDim.x -= 5; 
		gripperDim.y -= 5;
		gripperDim.width += 10;
		gripperDim.height += 10; 
		gripperNode =  document.getElementById(nextNode.id + 'GRIPPER'); 
		GX_SetRectObjectDim(gripperNode, gripperDim);	
		*/
		
		//set attribute 
	}	
	 //EL_SaveEditList(gCompactEditList, true); 
	//reset all selections
	GX_ResetAllSelections();
}

function GX_CopyObject(objNode)
{
	var nodeclass = objNode.classList[0]; 
	if(! ((nodeclass == 'SVG_SHAPE_OBJECT')|| (nodeclass == 'SVG_IMAGE_OBJECT') || (nodeclass == 'SVG_PATH_OBJECT') || (nodeclass == 'SVG_TEXT_OBJECT')) )
	{
		Debug_Message("Select an Object to Copy"); 
		return ; 
	}
	gObjectIDToCopy = objNode.id; 		
}

function GX_PasteObject()
{
	//determine the current Layer selected
	/*if( (!gCurrentObjectSelected) || (gCurrentObjectSelected.classList[0] != 'GROUP')){
		Debug_Message("Choose a Group to Paste the object"); 
		return ; 
	}*/
	
	gCurrLayerID = gCurrLayerNode.id;	
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+gCurrLayerID);
	//check if the object exist
	var objNodeToCopy =  document.getElementById(gObjectIDToCopy); 
	if(!objNodeToCopy)
	{
		Debug_Message("Object to copy does not exist anymore"); 
		return ; 
	}	
	var objectShapeType = objNodeToCopy.classList[1]; 
	//generate an Unique Id 
	var newObjID =  GXRDE_GetUniqueID('SVG_');
	var attrArray = 0; 
	var offsetPos = $('#canvas').offset(); 
	var newX = new Number(gCMLeftPos - offsetPos.left); 
	var newY = new Number(gCMTopPos - offsetPos.top); 
	var oldDim = GX_GetRectObjectDim(objNodeToCopy); 
	var transX = new Number(newX - oldDim.x); 
	var transY = new Number(newY - oldDim.y);  
	transX = transX/gZoomFactor;
	transY = transY/gZoomFactor;
	if (objectShapeType == 'IMAGE' ) {		
		var newX = new Number(gCMLeftPos - offsetPos.left); 
		var newY = new Number(gCMTopPos - offsetPos.top); 
		var attrArray = [['x', newX],['y',newY]]; 
	}
	/*
	if ( (objectShapeType == 'IMAGE') || (objectShapeType == 'RECTANGLE') || (objectShapeType == 'TEXT') ) {		
		var newX = new Number(gCMLeftPos - offsetPos.left); 
		var newY = new Number(gCMTopPos - offsetPos.top); 
		var attrArray = [['x', newX],['y',newY]]; 
	}	
	else if( (objectShapeType == 'ELLIPSE')|| (objectShapeType == 'CIRCLE') ) {		
		var newX = new Number(gCMLeftPos - offsetPos.left); 
		var newY = new Number(gCMTopPos - offsetPos.top); 
		var attrArray = [['cx', newX],['cy',newY]]; 
	}
	*/ 	
	GXRDE_CopyShapeObject(gObjectIDToCopy, gCurrLayerID, newObjID, attrArray, 'copyCallbackFn');	
	copyCallbackFn = function(retVal){
		if(objectShapeType == 'IMAGE'){
			GX_ReloadSVG(newObjID, true); 
			return ; 
		}
		 GX_AddNewNodeFromXMLString(gCurrLayerID, retVal); 
		 var newNode = document.getElementById(newObjID);
		 var newdim = GX_GetRectObjectDim(newNode); 
		 newdim.x = transX; 
		 newdim.y = transY; 		 
		 newdim.rotCentreX = newdim.rotCentreX +transX ;
		 newdim.rotCentreY = newdim.rotCentreY + transY; 
		 var objecttype = newNode.classList[0]; 
		 if( (objecttype == 'SVG_PATH_OBJECT') || (objecttype == 'SVG_IMAGE_OBJECT') || (objecttype == 'SVG_SHAPE_OBJECT') || (objecttype == 'SVG_TEXT_OBJECT') )
			 GX_SetTransformProperty(newNode, 'translate',newdim);
			// GX_SetObjectAttribute(newNode, 'DIMENSION', newdim, false, true);		 
		 if(!newNode)
			 return ; 
		 GX_UpdatePosFromTranslation(newNode); 
		  var nodename  = newNode.nodeName.toUpperCase(); 
		  myobjType = 'OBJECT';
		  nodeTitle = nodename; 
		  var JQSel = '#'+newObjID; 
		  $(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 
		 var newXMLStr = '<li id="TM_'+ newObjID + '"  type="' + myobjType+ '" class="TREEMENU" level="3" dataid="' +newObjID + '"  data-type="' + nodename +'"  name="'+ nodeTitle+'"></li>';
		 WAL_AddTreeItem(gTreeWidgetID, newXMLStr, gCurrentTreeNode, "", true);
		 WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+newObjID);
	}
	
}

function GX_ApplyZoom(zoomFactor)
{	
	//new code _rm can be removed later 
	var canvasNode =  document.getElementById('canvas'); 
	var canWidth = gOriginalCanvasDim.width;// = canvasWidth;  canvasNode.style.width;	
	var canHeight = gOriginalCanvasDim.height ;//= canvasWidth; //canvasNode.style.height;
	canWidth = canWidth * zoomFactor; 
	canHeight = canHeight * zoomFactor; 
	//canvasNode.style.width = canWidth +'px'; 
	//canvasNode.style.height = canHeight +'px'; 
	GX_SetCanvasDimension(canWidth, canHeight);
	return ; 
		
	//get the root SVg node and change the view Box
	if(!gsvgRootNode)
		gsvgRootNode = document.getElementById('SVGContainer'); 
	
	GX_ResetAllSelections();  
	
	var widthVal = gsvgRootNode.getAttribute('width');	
	widthVal = widthVal.substring(0, widthVal.length-2);
	
	var val = new Number(widthVal);
	val = val *  zoomFactor; 
	widthVal = '' + Math.round(val); 
	
	var heightVal = gsvgRootNode.getAttribute('height');
	heightVal = heightVal.substring(0, heightVal.length-2);
	var val = new Number(heightVal);
	val = val *  zoomFactor; 
	heightVal = '' + Math.round(val); 
	
	var viewboxval = '0 ' + '0 ' + widthVal+' '+  heightVal ; 
	gsvgRootNode.setAttribute('viewBox', viewboxval); 
}

function GX_DDLHandler(Node, value)
{
	var wdgtId  = Node.id; 
	
	//var objectType = gCurrentObjectSelected.classList[0]; 
	if(gCurrentObjectSelected)
		var objectType =  gCurrentObjectSelected.classList[0];
	//animation related 
	if(wdgtId == 'zoomDDL')
	{
		//_rm temo code return for now	
		if(value == 'Normal')
			value = '1x'; 
		value = value.substring(0, value.length-1); 		
		var zoomval = new Number(value); 
		//_rm dont use the zoomfactor value now 
		gZoomFactor = zoomval; 
		gInvZoomFactor =  zoomval; 
		GX_ApplyZoom(gZoomFactor); 		
	}
	else if(wdgtId == 'curveDDL')
	{
		if(value =='Cubic Bezier' )
			var drawType = 'cbezier_path'
		else if(value =='Quadratic Bezier' )
			var drawType = 'QBEZIER_PATH';
		else if(value =='Elliptic' )
			var drawType = 'ELLIPTIC_PATH';	
		GX_AddNewSVGObject(drawType,'', 'callbackSVGAddDefualtFn'); 		
		return; 		
	}
	else if(wdgtId == 'lineDDL')
	{
		if(value =='Horizontal' )
			var drawType = 'HOR_LINE_PATH'
		else if(value =='Vertical' )
			var drawType = 'VERT_LINE_PATH';
		else if(value =='Normal' )
			var drawType = 'LINE_PATH';	
		GX_AddNewSVGObject(drawType,'', 'callbackSVGAddDefualtFn');		
		return; 		
	}
	//marker highlighter 
	if(wdgtId == 'markerTypeListDDL'){
		value = value.toUpperCase(); 
		if(value =='NONE')
			return; 
		
		//highlight the path node start point 
		if((gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0]== 'SVG_PATH_OBJECT')){
			GX_HighlightMarker(value, gCurrentObjectSelected, true); 			
		}
	}
	
	if(wdgtId == 'listanimDDL')
	{
		if(gCurrentObjectSelected)
			GX_SetSelection(gCurrentObjectSelected, false, true); 	
		var animInfo = GX_GetAnimInfoByTitle(value); 
		var animNode =  document.getElementById(animInfo[0]); 
		if(!animNode)
			return ;				
		GX_SetSelection(animNode.targetElement, true, true);		
		return ; 	
	}
	
	if( (!gCurrentObjectSelected) && (gbMultiSelection == false) ) 
		return ; 
	
	if(wdgtId == 'strokedashDDL')
	{
		if(gbMultiSelection == true){
			GX_ApplyPropertyToMultipleObjects('stroke-dasharray', value); 
			GX_UpdatePropertyForMultipleObjects('stroke-dasharray', value); 
		}
		else{
			GX_SetObjectAttribute(gCurrentObjectSelected, "stroke-dasharray", value, true, false);
		}
		
	}
	else if(wdgtId == 'strokeLinejoinDDL')
	{
		//GX_SetObjectAttribute(gCurren, AttrName, AttrValue, bListStore, bUpdateUI)
		GX_SetObjectAttribute(gCurrentObjectSelected, "stroke-linejoin", value, true, false);
	}
	else if(wdgtId == 'gradlistDDL')
	{
		var value = value.toLowerCase(); 
		if(value == 'solid'){			
			if(gbMultiSelection == true){
				gInitFillValue = 'none'; 
			}
			else{
				 gInitFillValue = gCurrentObjectSelected.getAttribute('fill');
			}
		
		 if(gInitFillValue == 'none')
			 gInitFillValue = '#aaaaaa';
		 
		 var str = gInitFillValue.substring(0,3); 
			 if(str != 'url')
			 {
				 gInitFillColor = gInitFillValue;			 
			 }
			 else
			 {
				 gInitFillColor = '#aaaaaa'; 
			 }
			 GX_ShowFillColorWidget();
			 return; 
		}//solid 
		else if(value == 'linear gradient'){
			gbNewGradObject =  true; 			 
			 GX_AddNewSVGObject('LINEAR_GRADIENT', '',  'NewGradObjectDefaultFn');	
			 return; 			
		}
		else if(value == 'radial gradient'){
			gbNewGradObject =  true; 
			GX_AddNewSVGObject('RADIAL_GRADIENT', '',  'NewGradObjectDefaultFn');
			return; 
		}		
		else if(value == 'none')
		{	
			if(gbMultiSelection == true){
				GX_ApplyPropertyToMultipleObjects("fill", 'none'); 
				GX_UpdatePropertyForMultipleObjects("fill", 'none'); 
			}
			else if(gCurrentObjectSelected){
				GX_SetObjectAttribute(gCurrentObjectSelected, "fill", 'none', true, false);
			} 				
			return; 
		}		
		else
		{
			var info = GX_GetGradInfoByTitle(value); 
			if(info)
				gradID = info[1]; 
			else
				gradID = 0; 
		}			
		if(!gradID)
		{
			Debug_Message("Grad title not Found");
			return; 
		}
		//add it to the list items	
		var fillurl = 'url(#' + gradID + ')';	
		if(gbMultiSelection == true){
			GX_ApplyPropertyToMultipleObjects("fill", fillurl); 
			GX_UpdatePropertyForMultipleObjects("fill", fillurl); 
		}
		if(gCurrentObjectSelected) 
		{		
			if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT') || (objectType == 'SVG_PATH_OBJECT') || (objectType == 'SVG_TEXT_OBJECT'))
			{							
				GX_SetObjectAttribute(gCurrentObjectSelected, "fill", fillurl, true, false);				
			}			
		}		
	}
	else if(wdgtId == 'fontNameDDL')
	{
		if(objectType == 'SVG_TEXT_OBJECT')
			GX_SetObjectAttribute(gCurrentObjectSelected, "font-family", value, true, false);
	}
	else if(wdgtId == 'fontboldDDL')
	{
		if(objectType == 'SVG_TEXT_OBJECT')
			GX_SetObjectAttribute(gCurrentObjectSelected, "font-weight", value, true, false);
	}

	
	
}

function GX_GetGradInfoByTitle(gradTitle){
	var ID = 0; 
	var gradinfo; 
	var title = gradTitle.toLowerCase(); 
	for(var j=0; j < gGradientList.length; j++){
		if(gGradientList[j][0] != undefined){
			if(title == gGradientList[j][0].toLowerCase() ){
				gradinfo = gGradientList[j]; 
				return gradinfo; 
			}
		}
		
	}
	return 0; 
}

//function GX_GetGradTitle(gradID)
function GX_GetGradInfoByID(gradID)
{
	var info = 0; 
	for(var j=0; j < gGradientList.length; j++)
	{
		if(gradID == gGradientList[j][1] )
		{
			info = gGradientList[j]; 
			return info; 
		}
	}
	return 0; 
}


function GX_RemoveGradFromList(gradTitle, gradList)
{
	var index = -1; 
	for(var j=0; j < gradList.length; j++)
	{
		if(gradTitle == gradList[j][0] )
		{
			index = j; 
			break; 			
		}
	}
	gradList = gradList.splice(index,1); 	
}

function GX_ApplyPan(bHorizontal, panDelta)
{
	GX_ResetAllSelections(); 
	var node = document.getElementById('objectcontainer'); 
	var viewbox = node.getAttribute('viewBox'); 
	var viewboxarr = viewbox.split(' '); 
	gPanX = new Number(viewboxarr[0]);
	gPanY = new Number(viewboxarr[1]);
	if(bHorizontal == true)
	{
		gPanX += panDelta; 		
		viewboxarr[0] = ''+gPanX; 
	}
	else 
	{
		gPanY += panDelta; 
		viewboxarr[1] = ''+gPanY; 
	}
	viewbox = viewboxarr[0]+ ' ' + viewboxarr[1] + ' ' + viewboxarr[2] + ' ' + viewboxarr[3];
	node.setAttribute('viewBox', viewbox); 
	
}

function GX_SVGDimensionDlgOK()
{
	//get the masked input from the edit boxes 
	var width  = WAL_getMaskedInputValue('svgwidthIP'); 
	var height = WAL_getMaskedInputValue('svgheightIP');
	
	//now apply them to the current Svg object node 
	var svgNode = document.getElementById('SVGOBJECTCONTAINER'); 
	GX_SetObjectAttribute(svgNode, 'width', width+'px', true, false); 
	GX_SetObjectAttribute(svgNode, 'height', height+'px', true, false); 
	var viewBoxval = '0 0 '+width + ' ' + height; 
	GX_SetObjectAttribute(svgNode, 'viewBox', viewBoxval, true, false);	
	//post the request to server as well 
	GX_SaveObjectProperties(svgNode, true);
	//intialize the document 
	//GX_InitializeDocument("");
	GX_ResetAllSelections(); 
	GX_OpenFile(gSVGFilename); 
}

function OnDivPathMarkerMouseMove(event) {
    
    //now get the relative X, Y
    var relX, relY;
    var markerNode = event.target;
    
    var ClientX = new Number(event.clientX - gClientXOffset); 
	var ClientY =  new Number(event.clientY- gClientYOffset); 
	 
	if(bMarkerMove == false)
	{
		$('#' + markerNode.id).css({width:'20px', height:'20px', borderRadius:'10px', cursor:'move'});			   
	}       //call the update path and add markers. could be a major overhead
    
}

function OnDivPathMarkerMouseDown(event){
	var markerNode = event.target;
	if(gCurrentObjectSelected.classList[1] == 'POLYGON'){
		GX_SetCurrentMarker(markerNode, true); 
	}
	else 
		gCurrentMarkerNode = 0; 
}
function GX_SetCurrentMarker(markerNode, bFlag){
	if(bFlag == true){
		if(gCurrentMarkerNode)
			GX_SetCurrentMarker(gCurrentMarkerNode, false);		
		gCurrentMarkerNode = markerNode;
		$('#' + markerNode.id).css({width:'20px', height:'20px', borderRadius:'10px'});
	}
	else{
		gCurrentMarkerNode = 0;
		$('#' + markerNode.id).css({width:'10px', height:'10px', borderRadius:'5px', cursor:'auto'});
	}
	
}
function OnDivPathMarkerMouseOut(event) {
	   
    var markerNode = event.target; 
    //if(bMarkerSelected == false)
    //if(markerNode != gCurrentMarkerNode)
    if(gCurrentMarkerNode)
    	return ; 
    if(bMarkerMove == false)
    {
    	$('#' + markerNode.id).css({width:'10px', height:'10px', borderRadius:'5px', cursor:'auto'});
    }   
   // alert("Mouse Out"); 
}
function GX_SetIndicatorPath(markerNode){
	var pathNode = document.getElementById("indicatorpath");    
    var currentPos;   
    var markerNode = markerNode;     
    var index = markerNode.getAttribute("data-index");
    if (!index)
        return;
    var arrLen = new Number(gPathDataArray.length); 
    gpathSegIndex = new Number(index); 
    
    
    //gOrigMousePosX = ClientX;
   // gOrigMousePosY = ClientY;
    var posStr = markerNode.getAttribute('data-position'); 
    var arr = posStr.split(',');     
    gCurrSelectedObjectDim.x = new Number(arr[0]);
    gCurrSelectedObjectDim.y = new Number(arr[1]);
    gIndicatorPath = []; 	
    var indicaPathX,  indicaPathY;
    var nextSegIndex; 
    var bValidPoint = false ; 
    
    if ((gpathSegIndex > 0) && (gpathSegIndex < arrLen-1)) {
    	nextSegIndex = gpathSegIndex - 1;
    	bValidPoint = false ; 
    	while(bValidPoint == false)
    	{        		
    		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
    			return ; 
    		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
    			nextSegIndex--; 
    		else
    			bValidPoint = true; 
    	}       	
    	 currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
         gIndicatorPath.push(currentPos); 	
        
         currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanX, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
         gIndicatorPath.push(currentPos); 	
         
         nextSegIndex = gpathSegIndex + 1;
         bValidPoint = false ; 
     	 while(bValidPoint == false)
     	 {        		
     		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
     			return ; 
     	if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
     			nextSegIndex--; 
     		else
     			bValidPoint = true; 
     	}       	
         currentPos = ["L", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
         gIndicatorPath.push(currentPos);          
    }
    else if (gpathSegIndex == 0){
        //this isstored in such a way that in mouse move only Index=1 is updated no matter which vertex user chooses
    	nextSegIndex = gpathSegIndex+1;
    	bValidPoint = false ; 
    	while(bValidPoint == false)
    	{        		
    		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
    			return ; 
    		//if(gPathDataArray[nextSegIndex][3] != 'POINT')
    		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
    			nextSegIndex++; 
    		else
    			bValidPoint = true; 
    	}       	
        currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
        gIndicatorPath.push(currentPos);
        currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanX, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
        gIndicatorPath.push(currentPos);            
    }
    else if (gpathSegIndex == arrLen-1) {
    	nextSegIndex = gpathSegIndex - 1;
    	bValidPoint = false ; 
    	while(bValidPoint == false)
    	{        		
    		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
    			return ; 
    		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
    			nextSegIndex--; 
    		else
    			bValidPoint = true; 
    	}       	
    	currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
        gIndicatorPath.push(currentPos);
        currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanY, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
        gIndicatorPath.push(currentPos);                  
    }
        
    GX_ConvertArrayToPathData('indicatorpath', gIndicatorPath);        
    pathNode.setAttribute("visibility", "visible");   
}
 

function OnPathMarkerMouseDown(node) {		
    var pathNode = document.getElementById("indicatorpath");    
    var currentPos;
    var arrLen = new Number(gPathDataArray.length); 
    var markerNode = node;     
    if(gCurrentMarkerNode != markerNode)
    {
    	//reset the current selected marker node       
    	if(gCurrentMarkerNode)
    	{
    		GX_SetMarkerNodeSelection(gCurrentMarkerNode, false);    
    	}
    	
    	gCurrentMarkerNode = markerNode; 
    	GX_SetMarkerNodeSelection(gCurrentMarkerNode, true);    	 
    	//return ; 
    	//then assign the new marker node here 
    	//change the color 
    }
    
    var ClientX = new Number(evt.clientX - gClientXOffset); 
	var ClientY =  new Number(evt.clientY- gClientYOffset); 
	gMouseMoveCounter = 0; 
	if(gSnapToGrid == true)
    {
		 ClientX = ClientX/10; 
		 ClientX = Math.round(ClientX); 
		 ClientX *= 10; 
		 
		 ClientY = ClientY/10; 
		 ClientY = Math.round(ClientY); 
		 ClientY *= 10; 
    }
    if (bMarkerMove == false) {
        gsvgRootNode.setAttribute("cursor", "pointer");
        bMarkerMove = true;          
      //  markerNode.setAttribute('r', '12'); 
	  
        var index = markerNode.getAttribute("data-index");
        if (!index)
            return;
        gpathSegIndex = new Number(index); 
         
        gOrigMousePosX = ClientX;
        gOrigMousePosY = ClientY;
        gCurrSelectedObjectDim.x = markerNode.getAttribute("cx");
        gCurrSelectedObjectDim.y = markerNode.getAttribute("cy");
        gIndicatorPath = []; 	
        var indicaPathX,  indicaPathY;
        var nextSegIndex; 
        var bValidPoint = false ; 
        
        if ((gpathSegIndex > 0) && (gpathSegIndex < arrLen-1)) {
        	nextSegIndex = gpathSegIndex - 1;
        	bValidPoint = false ; 
        	while(bValidPoint == false)
        	{        		
        		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
        			return ; 
        		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
        			nextSegIndex--; 
        		else
        			bValidPoint = true; 
        	}       	
        	 currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
             gIndicatorPath.push(currentPos); 	
            
             currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanX, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
             gIndicatorPath.push(currentPos); 	
             
             nextSegIndex = gpathSegIndex + 1;
             bValidPoint = false ; 
         	while(bValidPoint == false)
         	{        		
         		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
         			return ; 
         	if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
         			nextSegIndex--; 
         		else
         			bValidPoint = true; 
         	}       	
             currentPos = ["L", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
             gIndicatorPath.push(currentPos);          
        }
        else if (gpathSegIndex == 0) {
            //this isstored in such a way that in mouse move only Index=1 is updated no matter which vertex user chooses
        	nextSegIndex = gpathSegIndex+1;
        	bValidPoint = false ; 
        	while(bValidPoint == false)
        	{        		
        		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
        			return ; 
        		//if(gPathDataArray[nextSegIndex][3] != 'POINT')
        		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
        			nextSegIndex++; 
        		else
        			bValidPoint = true; 
        	}       	
            currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
            gIndicatorPath.push(currentPos);
            currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanX, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
            gIndicatorPath.push(currentPos);            
        }
        else if (gpathSegIndex == arrLen-1) {
        	nextSegIndex = gpathSegIndex - 1;
        	bValidPoint = false ; 
        	while(bValidPoint == false)
        	{        		
        		if( (nextSegIndex < 0) || (nextSegIndex > arrLen-1))
        			return ; 
        		if(! ((gPathDataArray[nextSegIndex][3] == 'POINT')||(gPathDataArray[nextSegIndex][3] == 'START_POINT') ||(gPathDataArray[nextSegIndex][3] == 'END_POINT')))
        			nextSegIndex--; 
        		else
        			bValidPoint = true; 
        	}       	
        	currentPos = ["M", gPathDataArray[nextSegIndex][1]-gPanX, gPathDataArray[nextSegIndex][2]-gPanY, 'POINT'];
            gIndicatorPath.push(currentPos);
            currentPos = ["L", gPathDataArray[gpathSegIndex][1]-gPanY, gPathDataArray[gpathSegIndex][2]-gPanY, 'POINT'];
            gIndicatorPath.push(currentPos);                  
        }
            
        GX_ConvertArrayToPathData('indicatorpath', gIndicatorPath);        
        pathNode.setAttribute("visibility", "visible");
       
    }
    else {
        var relX = new Number(ClientX - gOrigMousePosX)*gZoomFactor;            
        var relY = new Number(ClientY - gOrigMousePosY)*gZoomFactor;
        relX = Math.round(relX); 
        relY = Math.round(relY); 
        bMarkerMove = false;
        gsvgRootNode.setAttribute("cursor", "auto");
        //now set the new path here 
        var newpathvalue = new Number(gPathDataArray[gpathSegIndex][1]); 
        newpathvalue += relX; 
        if(gSnapToGrid == true)
        {
        	newpathvalue = newpathvalue/10; 
        	newpathvalue = Math.round(newpathvalue); 
        	newpathvalue *= 10; 
        }
        gPathDataArray[gpathSegIndex][1] = newpathvalue;
        
        newpathvalue = new Number(gPathDataArray[gpathSegIndex][2]);
        newpathvalue += relY;
        if(gSnapToGrid == true)
        {
        	newpathvalue = newpathvalue/10; 
        	newpathvalue = Math.round(newpathvalue); 
        	newpathvalue *= 10; 
        }
        gPathDataArray[gpathSegIndex][2] = newpathvalue; 	    
        GX_UpdatePathData(gCurrentObjectSelected); 
       // GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);       
        pathNode.setAttribute("visibility", "hidden");
        gIndicatorPath = []; 
        GX_SetSelection(gCurrentObjectSelected, true, true); 
        markerNode.setAttribute('r', '5'); 
	    markerNode.setAttribute('opacity', '0.5');         
    }                     
}

function GX_HidePathMarker(){
	$('.PATH_MARKER').hide(); 
}

function GX_SetPointMarker(dim, bShow){
	var markerNode = $('#markerPoint')[0]; 
	if(bShow == true){
		GX_SetRectObjectDim(markerNode, dim); 
		$('#markerPoint').show(); 
	}
	else{
		$('#markerPoint').hide(); 
	}		
}

function GX_UpdatePathMarker(pathID, pathParam, bShow)
{
	var JQSel = ".PATH_MARKER";  
	bMarkerSelected = false; 
	gCurrentMarkerNode = 0; 
    if( (bShow == false) || (gObjectEditMode == 'MARKER_MODE') )
    {
    	$(JQSel).css({'visibility':'hidden'}); 
    	 return ;
    }
    
    //if(gObjectEditMode != 'PROPERTIES_MODE')
	//	  return ; 
    var pathNode = document.getElementById(pathID);  
    var pathType = pathNode.classList[1]; 
    if(pathType == 'FREEDRAW_PATH')
    	return ; 
    
    $(JQSel).attr('visibility', 'visible'); 
    var markerNode;
    usenode = document.getElementById('pathmarker');    	
    var JQSel = ".PATH_MARKER";
    var svgcontentnode = document.getElementById("editingassets");    
    for (var k = 0; k < pathParam.length; k++) {
    		if( (pathParam[k][3] == 'POINT')|| (pathParam[k][3] == 'START_POINT') ||(pathParam[k][3] == 'END_POINT') )
        	{
        		markerNode = document.getElementById('marker_'+k);
        		if(!markerNode)
        		{
        			Debug_Message("Marker Node not Found"); 
        			return ; 
        		}            
                markerNode.setAttribute("cx", pathParam[k][1]);
                markerNode.setAttribute("cy", pathParam[k][2]);                
        	}     
     }    
}
/*
function GX_AddPathMarker(pathID, pathParam) {
    var pathNode = document.getElementById(pathID); 
    var pathType = pathNode.classList[1]; 
    //if(pathType == 'FREEDRAW_PATH')
    //	return ; 

    if(pathParam.length < 1)
    	return ;
    var copynode;
    usenode = document.getElementById('pathmarker');    	
    var JQSel = ".markerclass";
    var svgcontentnode = document.getElementById("editingassets");
    
	$(JQSel).remove();
	if(pathType == 'FREEDRAW_PATH')
	{
		if(pathParam[0][3] == 'START_POINT')
    	{
    			copynode = usenode.cloneNode(true);
                copynode.setAttribute("id", 'marker_'+ 0);
                copynode.setAttribute("cx", pathParam[0][1]);
                copynode.setAttribute("cy", pathParam[0][2]);
                copynode.setAttribute("visibility", "visible");
                copynode.setAttribute("data-index", 0);
                copynode.setAttribute("class", "markerclass START");
                copynode.setAttribute("fill", "green");          
                copynode.setAttribute("pointer-events", "none");     
                svgcontentnode.appendChild(copynode);
    	}  	
		if(pathParam[pathParam.length-1][3] == 'END_POINT')
    	{
    			copynode = usenode.cloneNode(true);
                copynode.setAttribute("id", 'marker_'+ pathParam.length-1);
                copynode.setAttribute("cx", pathParam[pathParam.length-1][1]);
                copynode.setAttribute("cy", pathParam[pathParam.length-1][2]);
                copynode.setAttribute("visibility", "visible");
                copynode.setAttribute("data-index", pathParam.length-1);
                copynode.setAttribute("class", "markerclass END");
                copynode.setAttribute("fill", "red");          
                copynode.setAttribute("pointer-events", "none");     
                svgcontentnode.appendChild(copynode);
    	}  	
		return ; 		
	}
    
    for (var k = 0; k < pathParam.length; k++) {
    	if( (pathParam[k][3] == 'POINT') || (pathParam[k][3] == 'START_POINT') || (pathParam[k][3] == 'END_POINT') )
    	{
    			copynode = usenode.cloneNode(true);
                copynode.setAttribute("id", 'marker_'+ k);
                copynode.setAttribute("cx", pathParam[k][1]);
                copynode.setAttribute("cy", pathParam[k][2]);
                copynode.setAttribute("visibility", "visible");
                copynode.setAttribute("data-index", k);
                copynode.setAttribute("class", "markerclass MIDDLE");
                if(pathParam[k][3] == 'START_POINT')
                {
                	copynode.setAttribute("fill", "green");
                	copynode.setAttribute("class", "markerclass START");
                }
                	
                
                if(pathParam[k][3] == 'END_POINT')
                {
                	copynode.setAttribute("fill", "red");   
                	copynode.setAttribute("class", "markerclass END");
                }
                	
                
                svgcontentnode.appendChild(copynode);
    	}            
     } 
}
*/
var gMarkerContainerNode = 0; 
function GX_SetPathMarkers(id, index, pos, type){
	if(!gBaseMarkerNode)
		gBaseMarkerNode = document.getElementById('DivPathMarker');
	if(!gMarkerContainerNode){
		gMarkerContainerNode = document.getElementById("canvas");
	}
		
	copynode = gBaseMarkerNode.cloneNode(true);
    copynode.setAttribute("id", id);
    copynode = gMarkerContainerNode.appendChild(copynode); 
    var currDim = new sDimension();         		
	currDim.x = pos.x; 
	currDim.y = pos.y; 
	currDim.width = 10; 
	currDim.height = 10; 	 
	copynode.setAttribute("class", "PATH_MARKER " +  type);
	copynode.setAttribute("data-index", index);
	copynode.setAttribute("data-position", pos.x + ',' +  pos.y);
	GX_SetRectObjectDim(copynode, currDim); 
	if(type == 'START_POINT')
		color = '#4f4'; 
	else  if(type == 'END_POINT')
		color = '#f44'; 
	else if(type == 'POINT')
		color = '#444';
    $('#'+ id).css({visibility:"visible", backgroundColor:color, opacity:'0.6'});     
    //setting the draggbale option here 
    gPathMarkerSel = '#' +  id; 
	$(gPathMarkerSel).draggable({ cursor: "move" });
	$(gPathMarkerSel).draggable("option", "containment", "parent");
	$(gPathMarkerSel).on( "dragstop", function( event, ui ) {
		OnDivPathMarkerDragStop(event, ui); 
	});
	$(gPathMarkerSel).on( "drag", function( event, ui ) {
		OnDivPathMarkerDrag(event, ui); 		
	});
	$(gPathMarkerSel).on( "dragstart", function( event, ui ) {
		OnDivPathMarkerDragStart(event, ui); 	
	});
	
}
//just highligh one marker in case of middle markers dont need to highlight all as this is an indicator to user 
//which marker is being modified 
function GX_HighlightMarker(type, pathNode, bShow){
	
	if(pathNode.classList[0] != 'SVG_PATH_OBJECT')
		return ; 
	var markerSelector = document.getElementById('MarkerHighlighter');
	if(bShow == false){
		$('#MarkerHighlighter').hide(); 
		return ; 
	}
	//getting path parama here 
	GX_UpdatePathData(pathNode); 
	 var currDim = new sDimension();	
	if(type == 'START'){
		if(gPathDataArray[0][3] != 'START_POINT')
			return ; 
		currDim.x =  new Number(gPathDataArray[0][1]); 
		currDim.y =  new Number(gPathDataArray[0][2]); 		
	}
	else if(type == 'MIDDLE'){
		
		if(gPathDataArray[1][3] != 'POINT')
			return ; 
		currDim.x =  new Number(gPathDataArray[1][1]); 
		currDim.y =  new Number(gPathDataArray[1][2]); 
	}
	else if(type == 'END'){
		
		if(gPathDataArray[gPathDataArray.length-1][3] != 'END_POINT')
			return ; 
		currDim.x =  new Number(gPathDataArray[gPathDataArray.length-1][1]); 
		currDim.y =  new Number(gPathDataArray[gPathDataArray.length-1][2]); 
	}
	var weight = new Number(gCurrentObjectSelected.getAttribute('stroke-width')); 
	var factor = 6; 
	currDim.width = weight*factor; 
	currDim.height = weight*factor; 
	var radius = Math.round(currDim.width/2); 
	$('#MarkerHighlighter')[0].style.borderRadius = radius + 'px'; 
	GX_SetRectObjectDim(markerSelector, currDim);
	$('#MarkerHighlighter').show(); 
}

//Rm changing to the div path markers here 
function GX_AddPathMarker(pathID, pathParam) {
    var pathNode = document.getElementById(pathID); 
    var pathType = pathNode.classList[1];     
    if(pathParam.length < 1)
    	return ;
    var copynode;
    var pos = new sPoint(); 
    //remove the earlier pathmarkers
    var JQSel = ".PATH_MARKER";       
	$(JQSel).remove();
	if(pathType == 'FREEDRAW_PATH')
	{
		if(pathParam[0][3] == 'START_POINT')
    	{
    			//copynode = usenode.cloneNode(true);
                //copynode.setAttribute("id", 'marker_'+ 0);                    		
                pos.x = new Number(pathParam[0][1]); 
                pos.y = new Number(pathParam[0][2]); 
                GX_SetPathMarkers('marker_'+ 0, 0, pos, 'START_POINT');         		
               
    	}  	
		if(pathParam[pathParam.length-1][3] == 'END_POINT')
    	{
    			
                pos.x = new Number(pathParam[pathParam.length-1][1]); 
                pos.y = new Number(pathParam[pathParam.length-1][2]);
                GX_SetPathMarkers('marker_'+ pathParam.length-1, pathParam.length-1, pos, 'END_POINT');
    	}		
		return ; 		
	}
    
    for (var k = 0; k < pathParam.length; k++) {
    	if( (pathParam[k][3] == 'POINT') || (pathParam[k][3] == 'START_POINT') || (pathParam[k][3] == 'END_POINT') )
    	{    			
                pos.x = new Number(pathParam[k][1]); 
                pos.y = new Number(pathParam[k][2]); 
                GX_SetPathMarkers('marker_'+ k, k, pos, pathParam[k][3]);                
    	}            
     } 
}


function GX_PolyInputDlgOK()
{
	var nSides  = WAL_getMaskedInputValue('polynSidesIP'); 
	var Length = WAL_getMaskedInputValue('polyLengthIP');
	gnPolygonSides = nSides;
	gPolygonLength = Length; 
	GX_AddNewSVGObject('POLYGON','', 'callbackSVGAddDefualtFn'); 
}

function GX_StartFreeDraw(mode)
{
	//hide current grabber
	//anything selected now should be unselected 
	
	if(gCurrentObjectSelected)
		GX_SetSelection(gCurrentObjectSelected, false, false); 
	
	
	gFreeDrawMode = mode; 
	gCurrentObjectSelected =  document.getElementById(gNewObjectID); 	
	var pathType = gCurrentObjectSelected.classList[1]; 	
	GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, gFreeDrawMode, true); 	
	gPrevAttributeList = EL_getObjectAttributes(gCurrentObjectSelected);
	
}


function GX_SetFreeDrawEditAttributes(ObjNode, mode, bFlag)
{

	var SVGNode = document.getElementById('SVGOBJECTCONTAINER');	
	if(bFlag == true)
	{
		var freedrawNode = document.getElementById('freedraw'); 
		freedrawNode.setAttribute('visibility', 'visible'); 
		freedrawNode.setAttribute('pointer-events', 'visible'); 
		//gCurrGrabber.setAttribute('pointer-events', 'none'); 
		if( (mode == 'DRAW_MODE') || (mode == 'REDRAW_MODE')){
			bDraw = false; 
			
			var SVGBdry = new sDimension(); //gsvgRootNode
			var str = SVGNode.getAttribute('x');
			str = str.substring(0, str.length-2); 
			SVGBdry.x = new Number(str); 
			
			str = SVGNode.getAttribute('y');
			str = str.substring(0, str.length-2); 
			SVGBdry.y = new Number(str);
			
			str = SVGNode.getAttribute('width');
			str = str.substring(0, str.length-2); 
			SVGBdry.width = new Number(str);
			
			str = SVGNode.getAttribute('height');
			str = str.substring(0, str.length-2);
			SVGBdry.height = new Number(str);		
			freedrawNode.setAttribute("x", SVGBdry.x+5); 
			freedrawNode.setAttribute("width", SVGBdry.width - 10); 
			freedrawNode.setAttribute("y", SVGBdry.y + 5); 
			freedrawNode.setAttribute("height", SVGBdry.height - 10); 	
			var svgNode = document.getElementById('SVGOBJECTCONTAINER'); 
		    var svgDim = GX_GetRectObjectDim(svgNode);		    
		   
		    var x1, y1, x2, y2;
		    with(Math){    	
		    	x1 = round(gCurrentCanvasDim.x + 5); 
		    	y1 = round(gCurrentCanvasDim.y + gClientYOffset +5 ); 
		    	x2 = round(x1 + gCurrentCanvasDim.width -30) ; 
		    	y2 = round(y1 + gCurrentCanvasDim.height - 20); 		    
		    }        
		    var region = [x1, y1, x2, y2]; 
		    var JQSel = '#drawingpen'; 			
		    $(JQSel).draggable( "option", "containment", region );
		    $(JQSel).css({'visibility':'visible', 'cursor':'cross-hair'}); 
		}
		else if(mode == 'ERASE_MODE'){
			bErase = false; 
			var JQSel = '#eraserpen'; 
			$(JQSel).css({'visibility':'visible', 'cursor':'cross-hair'}); 
			freedrawNode.setAttribute("x", gCurrSelectedObjectDim.x-20); 
			freedrawNode.setAttribute("width", gCurrSelectedObjectDim.width + 40); 
			freedrawNode.setAttribute("y", gCurrSelectedObjectDim.y-20); 
			freedrawNode.setAttribute("height", gCurrSelectedObjectDim.height + 40); 
		}		
	}
	else
	{
		var freedrawNode = document.getElementById('freedraw'); 
		freedrawNode.setAttribute('visibility', 'hidden');	
		if(mode == 'DRAW_MODE'){
			var JQSel = '#drawingpen';
			$(JQSel).css('visibility', 'hidden');
		}
		else if(mode == 'ERASE_MODE'){
			var JQSel = '#eraserpen';
			$(JQSel).css('visibility', 'hidden');
		}
		if(mode == 'REDRAW_MODE'){
			$('.freedrawProp').hide(); 
		}
		gFreeDrawMode = 0; 
		
		
		//gCurrGrabber.setAttribute('pointer-events', 'visible'); 
		
	}
}

function OnEraseClick(evt)
{
	var nodeid = evt.target.id; 
	//alert("my nodeid =" +  nodeid); 
	var node = evt.target;
	var pathType = gCurrentObjectSelected.classList[1]; 
	if(pathType != 'FREEDRAW_PATH')
		return ; 
	var YOffset = Math.round(gCurrentCanvasDim.y +  gClientYOffset) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
 	var XOffset = Math.round(gCurrentCanvasDim.x - 10);
    var ClientX = new Number(evt.clientX - XOffset); 
	var ClientY =  new Number(evt.clientY- YOffset); 	
    var X = new Number(ClientX);
    var Y = new Number(ClientY);
    X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	X += gPanX;
	Y += gPanY; 
	
	X -= 1;
	Y += 1; 
	if(evt.ctrlKey)
	{
		if(gEraseEndIndex != -1)
			return ; 
		if(bEraseMultiple == false)
		{
			bEraseMultiple = true;
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 			
		}
		if(gEraseStartIndex == -1)
		{
			gEraseStartIndex = GX_FindAnchorPointIndex(gPathDataArray, 20, X, Y,0);		
			gEraseObject1.setAttribute('stroke', 'brown'); 
		}
			
		else if(gEraseEndIndex == -1)
		{
			gEraseEndIndex = GX_FindAnchorPointIndex(gPathDataArray, 20, X, Y,0);
			gEraseObject2.setAttribute('stroke', 'brown'); 				
			GX_EraseMultiplePathSegment(gCurrentObjectSelected, gEraseStartIndex, gEraseEndIndex); 
		}
				
		return ; 
			
	}
	if(bEraseMultiple == true)
	{
		gEraseStartIndex = -1; 
		gEraseEndIndex = -1; 
		bEraseMultiple = false; 
		gEraseObject1.setAttribute("visibility",'hidden');
		gEraseObject1.setAttribute('stroke', 'red'); 
		gEraseObject2.setAttribute("visibility",'hidden'); 
		gEraseObject2.setAttribute('stroke', 'red'); 
		return ;
	}
		 
	GX_ErasePathSegment(gCurrentObjectSelected, 100, X, Y); 
	return ; 
}

function OnEraserPenClick(event){		
	var nodeid = event.target.id; 
	var node = event.target;
	if(!gCurrentObjectSelected)
		return ; 
	var pathType = gCurrentObjectSelected.classList[1]; 
	if(pathType != 'FREEDRAW_PATH')
		return ; 	
	var YOffset = Math.round(gCurrentCanvasDim.y +  gClientYOffset) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
 	var XOffset = Math.round(gCurrentCanvasDim.x - 10);
    var ClientX = new Number(event.clientX - XOffset); 
	var ClientY =  new Number(event.clientY- YOffset); 	
    var X = new Number(ClientX);
    var Y = new Number(ClientY);
    X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	X += gPanX;
	Y += gPanY; 
	
	X -= 1;
	Y += 1; 
	
	if( (X < gCurrSelectedObjectDim.x-5) || (X > gCurrSelectedObjectDim.x + gCurrSelectedObjectDim.width +  10) || (Y < gCurrSelectedObjectDim.y - 5) || (Y > gCurrSelectedObjectDim.y + gCurrSelectedObjectDim.height + 10) ){
		GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, 'ERASE_MODE', false); 
		GX_SetSelection(gCurrentObjectSelected, false, false); 
		//Debug_Message('Setting EraseMode False'); 
	}
	if(event.ctrlKey)
	{
		if(gEraseEndIndex != -1)
			return ; 
		if(bEraseMultiple == false)
		{
			bEraseMultiple = true;
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 			
		}
		if(gEraseStartIndex == -1)
		{
			gEraseStartIndex = GX_FindAnchorPointIndex(gPathDataArray, 20, X, Y,0);		
			gEraseObject1.setAttribute('stroke', 'brown'); 
		}
			
		else if(gEraseEndIndex == -1)
		{
			gEraseEndIndex = GX_FindAnchorPointIndex(gPathDataArray, 20, X, Y,0);
			gEraseObject2.setAttribute('stroke', 'brown'); 				
			GX_EraseMultiplePathSegment(gCurrentObjectSelected, gEraseStartIndex, gEraseEndIndex); 
		}
				
		return ; 
			
	}
	if(bEraseMultiple == true)
	{
		gEraseStartIndex = -1; 
		gEraseEndIndex = -1; 
		bEraseMultiple = false; 
		gEraseObject1.setAttribute("visibility",'hidden');
		gEraseObject1.setAttribute('stroke', 'red'); 
		gEraseObject2.setAttribute("visibility",'hidden'); 
		gEraseObject2.setAttribute('stroke', 'red'); 
		return ;
	}		 
	GX_ErasePathSegment(gCurrentObjectSelected, 100, X, Y); 
	return ; 
	
	
}
function OnFreeDrawClick(evt)
{
	if(bDraw == false)
	{
		//gFreeDrawStarted = false; 
		//bDraw = true; 
		//now move the drawing pen here 
		var JQSel = '#drawingpen'; 
		$(JQSel).css({left: evt.clientX +'px', top: evt.clientY + 'px', visibility:'visible'} ); 
		var JQSel = 'freedraw'; 
		$(JQSel).attr('pointer-events', 'none'); 
	}
	else{
		var objectType = gCurrentObjectSelected.classList[1]; 
		gsvgRootNode.setAttribute("cursor", "auto");		
		GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, 'DRAW_MODE', false);
		if(objectType == 'FREEDRAW_PATH')
		{
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
			GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);
		}
		else if( (objectType == 'RECTANGLE')|| (objectType == 'IMAGE') || (objectType == 'ELLIPSE')|| (objectType == 'CIRCLE') || (objectType == 'LINE_PATH')|| (objectType == 'HOR_LINE_PATH')|| (objectType == 'VERT_LINE_PATH') || (objectType == 'CUBIC_BEZIER')
				|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC'))
		{
			GX_SetObjectAttribute(gCurrentObjectSelected, 'DIMENSION', gCurrSelectedObjectDim, true, false);
			
		}		
		 gFreeDrawStarted = false; 
		 GX_SetSelection(gCurrentObjectSelected, true, true); 
	}
	
}


function OnFreeDrawMouseMove(event){
	if( (gFreeDrawMode == 'DRAW_MODE') || (gFreeDrawMode == 'REDRAW_MODE') ){
		var JQSel = '#drawingpen'; 
		$(JQSel).css({left: event.clientX +'px', top: event.clientY + 'px'} ); 
	}
	else if(gFreeDrawMode == 'ERASE_MODE'){
		var JQSel = '#eraserpen'; 
		$(JQSel).css({left: event.clientX +'px', top: event.clientY + 'px'} ); 
	}		
}

var gOrigPoint = new sPoint(); 
function OnFreeDrawDragStart(evt, ui){
	if(!gCurrentObjectSelected){
		Debug_Message('Object not selected');
		return ; 	
	}	
	GX_ShowTooltip(false); 
	
	
	var nodeid = evt.target.id; 
	//alert("my nodeid =" +  nodeid); 
	var node = evt.target; 
	var pathType = gCurrentObjectSelected.classList[1]; 
	//if(pathType != 'FREEDRAW_PATH')
		//return ; 
    //var ClientX = new Number(evt.clientX - gClientXOffset); 
	//var ClientY =  new Number(evt.clientY- gClientYOffset); 
	var YOffset =  Math.round(gCurrentCanvasDim.y +  gClientYOffset) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
	var XOffset = Math.round(gCurrentCanvasDim.x - 13); 
	var ClientX = evt.clientX - XOffset; 
	var ClientY = evt.clientY - YOffset; 
	 var X = new Number(ClientX);
     var Y = new Number(ClientY);
    // gCursorXOffset = 10; 
     X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	 Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	 X += gPanX;
	 Y += gPanY; 
	var objectType = gCurrentObjectSelected.classList[1]; 
	if(gEnableMultiSelection == true)
		objectType = 'RECTANGLE'; 
	if(bDraw == false)
	{
		gFreeDrawStarted = false; 
		bDraw = true; 
		//now move the drawing pen here 
		//var JQSel = '#drawingpen'; 
		//$(JQSel).css({left: evt.clientX +'px', top: evt.clientY + 'px'} ); 	
		if(objectType == 'FREEDRAW_PATH')
		{
			gFreeDrawPathData = gCurrentObjectSelected.getAttribute('d'); 		
			//change cursor to cross-hair 
			
			gsvgRootNode.setAttribute("cursor", "pointer");			   
		    gPrevX = 10000; 
		    gPrevY = 10000;
		}
		else if( (objectType == 'RECTANGLE') || (objectType == 'ELLIPSE') || (objectType == 'CIRCLE') || (objectType == 'LINE_PATH')|| (objectType == 'HOR_LINE_PATH') || (objectType == 'VERT_LINE_PATH') ||
				(objectType == 'CUBIC_BEZIER') || (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC') || (objectType == 'IMAGE') )
		{
			gCurrSelectedObjectDim = new sDimension(); 
			gOrigPoint.x = gCurrSelectedObjectDim.x = X; 
			gOrigPoint.y = gCurrSelectedObjectDim.y = Y; 
			gCurrSelectedObjectDim.width = 0; 
			gCurrSelectedObjectDim.height = 0;
			gsvgRootNode.setAttribute("cursor", "crosshair");		
			
			if((objectType == 'CUBIC_BEZIER')|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC') )
				gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		}		
		//GX_UpdateMarkers(gCurrGrabber, false, false); 
		GX_HidePathMarker(); 
	}
	else
	{
		gsvgRootNode.setAttribute("cursor", "auto");		
		GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, 'DRAW_MODE', false);
		if(objectType == 'FREEDRAW_PATH')
		{
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
			GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);
		}
		else if( (objectType == 'RECTANGLE')|| (objectType == 'IMAGE') || (objectType == 'ELLIPSE')|| (objectType == 'CIRCLE') || (objectType == 'LINE_PATH')|| (objectType == 'HOR_LINE_PATH')|| (objectType == 'VERT_LINE_PATH') || (objectType == 'CUBIC_BEZIER')
				|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC'))
		{
			GX_SetObjectAttribute(gCurrentObjectSelected, 'DIMENSION', gCurrSelectedObjectDim, true, false);
			
		}		
		 gFreeDrawStarted = false; 
		 GX_SetSelection(gCurrentObjectSelected, true, true); 
		//GX_SetSelection(gCurrentObjectSelected, false);
	}		
}

function OnFreeDrawDragEnd(evt, ui){	
	
	var objectType = gCurrentObjectSelected.classList[1]; 
	var shapeType = gCurrentObjectSelected.classList[0]; 
	var objectID = gCurrentObjectSelected.id; 
	if(gEnableMultiSelection == true)
		objectType = 'RECTANGLE'; 
	gsvgRootNode.setAttribute("cursor", "auto");	
	var redrawEndState = false; 
	
	if(gFreeDrawMode =='REDRAW_MODE'){
		 redrawEndState = true; 		 
	 }
	GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, gFreeDrawMode, false);
	if(objectType == 'FREEDRAW_PATH')
	{
		gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
		GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);		
	}
	else if( (objectType == 'RECTANGLE')|| (objectType == 'IMAGE') || (objectType == 'ELLIPSE')|| (objectType == 'CIRCLE') || (objectType == 'LINE_PATH')|| (objectType == 'HOR_LINE_PATH')|| (objectType == 'VERT_LINE_PATH') || (objectType == 'CUBIC_BEZIER')
			|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC'))
	{
		gCurrSelectedObjectDim = GX_GetRectObjectDim(gCurrentObjectSelected); 
		if((shapeType != 'SVG_PATH_OBJECT')){
			GX_SetObjectAttribute(gCurrentObjectSelected, 'DIMENSION', gCurrSelectedObjectDim, false, false);
		}
			
		if(objectID != 'gripper'){
			GX_SetObjectAttribute(gCurrentObjectSelected, '', '', true, false);
	    	GX_SaveObjectProperties(gCurrentObjectSelected, true);	
		}			
	}		
	 gFreeDrawStarted = false; 
	 //GX_SetSelection(gCurrentObjectSelected, true, true);
	 var JQSel = '#drawingpen'; 
	 $(JQSel).css('visibility', 'hidden'); 
	 var JQSel = 'freedraw'; 
	 $(JQSel).attr('pointer-events', 'visible');
	 if(gEnableMultiSelection == true){
		 var RoIDim = GX_GetRectObjectDim(gCurrentObjectSelected);		
		 RoIDim = GX_GetObjectsWithinRoI(RoIDim, gObjectList);
		 var gripperSel = '#gripper'; 
		/* $(gripperSel)[0].setAttribute('x',RoIDim.x); 
		 $(gripperSel)[0].setAttribute('y',RoIDim.y); 
		 $(gripperSel)[0].setAttribute('width',RoIDim.width); 
		 $(gripperSel)[0].setAttribute('height',RoIDim.height);	
		 */
		 
		$(gripperSel).attr('visibility', 'hidden'); 
		gEnableMultiSelection = false; 
			
		 return ; 
	 }	
	 GX_SetSelection(gCurrentObjectSelected, true, true);
	 GX_ShowPopupTips(gTiptextArr['REDRAW_TEXT']); 
	 GX_ShowTooltip(true); 
	 GX_ManageUIState('NEW_OBJECT_ADDED'); 
	 
	if(redrawEndState == true){
		$('.freedrawProp').show(); 
		$('.freedrawBtn').hide(); 
		$('#redrawBtn').show(); 
	}
	
	 
	 
	// Debug_Message('Drag End'); 
}

function OnFreeDrawDrag(evt, ui)
{
	//now grab the points and add it to indicaotr path 
	 if (bDraw != true)
         return; 
	 var objType = gCurrentObjectSelected.classList[1];
	 var shapeType = gCurrentObjectSelected.classList[0];
	 if(gEnableMultiSelection == true)
		 objType = 'RECTANGLE'; 
     var node = evt.target;
     var YOffset =  Math.round(gCurrentCanvasDim.y +  gClientYOffset) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
 	 var XOffset = Math.round(gCurrentCanvasDim.x - 10); 
     //var ClientX = new Number(evt.clientX - XOffset); 
 	 //var ClientY =  new Number(evt.clientY- YOffset); 
 	 
 	 var ClientX = new Number(ui.position.left - XOffset); 
 	 var ClientY =  new Number(ui.position.top - YOffset); 
 	 //_rm trial code 
 	 var newWidth = new Number(ui.position.left - ui.originalPosition.left);
 	 var newHeight = new Number(ui.position.top - ui.originalPosition.top);     
     var X = new Number(ClientX);
     var Y = new Number(ClientY);
     X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	 Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	 X += gPanX;
	 Y += gPanY; 	
	 if(gSnapToGrid == true)
	 {
			 X = X/10; 
			 X = Math.round(X); 
			 X *= 10; 			 
			 Y = Y/10; 
			 Y = Math.round(Y); 
			 Y *= 10; 
	 }
	if(objType ==  'FREEDRAW_PATH')
	{
		//ensures there are only distinct points in the path 
		if((X == gPrevX) && (gPrevY == Y))
	    	 return; 
		if(gFreeDrawStarted == false)
		{
			 gFreeDrawPathData += "M" + X + "," + Y + " ";
			 gFreeDrawStarted = true;
		}
		else
			gFreeDrawPathData += X + "," + Y + " ";		
	     gCurrentObjectSelected.setAttribute("d", gFreeDrawPathData);
	     gPrevX = X;
	     gPrevY = Y; 
	     return ; 
	}
	else if((objType ==  'RECTANGLE') || (objType == 'IMAGE') || (objType ==  'ELLIPSE')|| (objType == 'CIRCLE') || (objType == 'LINE_PATH')||(objType == 'HOR_LINE_PATH') || (objType == 'VERT_LINE_PATH') || (objType == 'CUBIC_BEZIER')
			|| (objType == 'QUADRATIC_BEZIER')|| (objType == 'ELLIPTIC'))
	{
		//gCurrSelectedObjectDim.width = X - gCurrSelectedObjectDim.x; 
		//gCurrSelectedObjectDim.height = Y - gCurrSelectedObjectDim.y;
		gCurrSelectedObjectDim.width = newWidth; 
		gCurrSelectedObjectDim.height = newHeight;
		
		if(shapeType == 'SVG_PATH_OBJECT'){
			GX_SetRectObjectDim(gCurrentObjectSelected, gCurrSelectedObjectDim); 
		}
		else {
			if( newWidth < 0 ){
				newWidth = Math.abs(newWidth); 
				gCurrSelectedObjectDim.x = gOrigPoint.x - newWidth; 
			}
			if( newHeight < 0 ){
				newHeight = Math.abs(newHeight); 
				gCurrSelectedObjectDim.y = gOrigPoint.y - newHeight; 
			}
			gCurrSelectedObjectDim.width = newWidth; 
			gCurrSelectedObjectDim.height = newHeight; 
			//if((gCurrSelectedObjectDim.width > 0) && (gCurrSelectedObjectDim.height >0 ) )
			GX_SetRectObjectDim(gCurrentObjectSelected, gCurrSelectedObjectDim); 
		}
			
		return ;		
	}
	 
}

function GX_Modify()
{
	if(!gCurrentObjectSelected)
	{		
		return ;		
	}
	var objectType = gCurrentObjectSelected.classList[1]; 
	if(objectType == 'FREEDRAW_PATH')
	{
		gNewObjectID = gCurrentObjectSelected.id; 		
		GX_StartFreeDraw('REDRAW_MODE'); 
	}	
}


function GX_StartErase()
{
	var pathType = gCurrentObjectSelected.classList[1]; 
	if(pathType != 'FREEDRAW_PATH')
		return;	
	gEraseObject1 = 0; 
	gEraseObject2 = 0; 
	gFreeDrawMode = 'ERASE_MODE'; 
	GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, gFreeDrawMode, true); 
	//GX_SetEraseEditAttributes(gCurrentObjectSelected, true); 
	//gCurrGrabber.setAttribute('pointer-events', 'none'); 
	
}

function GX_SetEraseEditAttributes(ObjNode, bFlag)
{

	var nodeType = ObjNode.classList[1]; 
	if(nodeType != 'FREEDRAW_PATH')
		return ; 
	if(!gEraseObject1)
		gEraseObject1 = document.getElementById('eraser1'); 
	
	if(!gEraseObject2)
		gEraseObject2 = document.getElementById('eraser2'); 
	var svgNode =  document.getElementById('SVGOBJECTCONTAINER'); 
	if(bFlag == true)
	{	
		
		//ObjNode.setAttribute('onmousemove', 'OnEraseMove(evt)'); 
		svgNode.setAttribute('onmousemove', 'OnEraseMove(evt)'); 
		ObjNode.setAttribute('onclick', 'OnEraseClick(evt)');
		//ObjNode.setAttribute('onmouseout', 'OnEraseMouseOut(evt)');
		svgNode.setAttribute('onmouseout', 'OnEraseMouseOut(evt)');
		gEraseObject1.setAttribute('visibility', 'visible');
		var swidth = ObjNode.getAttribute('stroke-width');		
		gOrigAttributeStruct.strokewidth = swidth;		
		//ObjNode.setAttribute('stroke-width', "2"); 		
		ObjNode.setAttribute('pointer-events', 'visibleStroke');		
		var freedrawNode = document.getElementById('freedraw'); 
		freedrawNode.setAttribute('visibility', 'hidden'); 
		//freedrawNode.setAttribute('pointer-events', 'none'); 
		bEraseMode = true; 
		gCurrGrabber.setAttribute('pointer-events', 'none');		
		gEraseStartIndex = gEraseEndIndex = -1; 
	}
	else
	{
		//ObjNode.removeAttribute('onmousemove'); 	 
		//ObjNode.removeAttribute('onmouseout');
		svgNode.removeAttribute('onmousemove'); 	 
		svgNode.removeAttribute('onmouseout');
		
		ObjNode.setAttribute('onclick', 'OnShapeObjectSelection(evt)');
		//set it to old values
		//ObjNode.setAttribute('stroke-width', gOrigAttributeStruct.strokewidth); 		
		ObjNode.setAttribute('pointer-events', 'visible');		
		//freedrawNode.setAttribute('pointer-events', 'none'); 
		bEraseMode = false; 
		gEraseObject1.setAttribute('visibility', 'hidden');
		gEraseObject2.setAttribute('visibility', 'hidden'); 
		gCurrGrabber.setAttribute('pointer-events', 'visible');		
	}
}

function OnEraseMove(evt)
{
//	Debug_Message("Erase mouse move ON"); 
	if(bEraseMode != true)
		return; 
	var YOffset = Math.round(gCurrentCanvasDim.y +  gClientYOffset) ;//gCanvround(gClientYOffset);// * gInvZoomFactor);     		
 	var XOffset = Math.round(gCurrentCanvasDim.x - 10);
	var ClientX = new Number(evt.clientX - XOffset); 
	var ClientY =  new Number(evt.clientY- YOffset); 	
	var X = new Number(ClientX);
	var Y = new Number(ClientY);
	X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	X += gPanX;
	Y += gPanY; 
	X -= 5;
	Y -= 5; 
	 
	
	if(bEraseMultiple == true)
	{
		if(gEraseStartIndex ==  -1)
		{
			gEraseObject1.setAttribute('x', X);
			gEraseObject1.setAttribute('y', Y);	
			gEraseObject1.setAttribute('visibility', 'visible'); 
		}
		else if(gEraseEndIndex ==  -1)
		{
			gEraseObject2.setAttribute('x', X);
			gEraseObject2.setAttribute('y', Y);	
			gEraseObject2.setAttribute('visibility', 'visible'); 
		}
	}
	else
	{
		gEraseObject1.setAttribute('x', X);
		gEraseObject1.setAttribute('y', Y);	
		gEraseObject1.setAttribute('visibility', 'visible');
	}
	//gsvgRootNode.setAttribute('cursor', 'pointer');
	return ; 	
}

function OnEraseMouseOut(evt)
{
	if(bEraseMultiple == true)
	{
		if(gEraseStartIndex == -1)
			gEraseObject1.setAttribute('visibility', 'hidden'); 
		else if(gEraseEndIndex == -1)
			gEraseObject2.setAttribute('visibility', 'hidden');
		return true; 			
	}
	
	if(bEraseMode == true)
	{
		//gEraseObject1.setAttribute('visibility', 'hidden'); 
		
		//gsvgRootNode.setAttribute('cursor', 'auto'); 
	}
		
}
function GX_EraseMultiplePathSegment(pathNode, ipstartIndex, ipendIndex)
{
	var arrPtx, arrPtY; 
	var dist = 0; 
	var startIndex, endIndex; 
	if(ipstartIndex > ipendIndex)
	{
		startIndex = ipendIndex;
		endIndex = ipstartIndex; 
	}
	else
	{
		startIndex = ipstartIndex; 
		endIndex = ipendIndex; 
	}
	if( ( startIndex == -1) || (endIndex ==-1))
			return ; 
	for(var k= startIndex; k < endIndex; k++)
	{
		arrPtX = new Number(gPathDataArray[k][1]); 
		arrPtY =  new Number(gPathDataArray[k][2]);		
		gPathDataArray[k][3] = 'NONE';			
	}	
	gPathDataArray[endIndex][0] = 'M'; 
	GX_SetEraseEditAttributes(pathNode, false); 
	GX_SetObjectAttribute(pathNode, 'PATH_DATA', gPathDataArray, true, false);
	GX_SetEraseEditAttributes(pathNode, true);
}

function GX_ErasePathSegment(pathNode, boundary, pointX, pointY)
{
	//get the pathdataarray 
	gPathDataArray = GX_ConvertPathDataToArray(pathNode);	
	var dist = 0; 
	var srcPtX = new Number(pointX); 
	var srcPtY = new Number(pointY); 
	var anchPtX, anchPtY; 
	var IndexAnch = 0;	
	IndexAnch = GX_FindAnchorPointIndex(gPathDataArray, boundary, pointX, pointY,0);
		 
	if(IndexAnch == -1)
		return ; 
	anchPtX =  new Number(gPathDataArray[IndexAnch][1]);
	anchPtY =  new Number(gPathDataArray[IndexAnch][2]);	
	
	//with anchor point found above now find the end point and start point 
	//to find end point
	var indexEnd = IndexAnch; 
	var indexStart, indexEnd;
	var arrPtX, arrPtY;  
	
	for(var k= indexEnd; k < gPathDataArray.length; k++)
	{
		arrPtX = new Number(gPathDataArray[k][1]); 
		arrPtY =  new Number(gPathDataArray[k][2]); 
		dist = (arrPtX - anchPtX)*(arrPtX - anchPtX) +(arrPtY - anchPtY)*(arrPtY - anchPtY) ;
		if(dist < boundary)
		{
			gPathDataArray[k][3] = 'NONE'; 
		}
		else
		{
			indexEnd = k-1; 
			gPathDataArray[k][0] = 'M'; 
			break; 
		}			
	}
	//GX_SetEraseEditAttributes(pathNode, false); 
	GX_SetObjectAttribute(pathNode, 'PATH_DATA', gPathDataArray, true, false);
	//GX_SetEraseEditAttributes(pathNode, true);
	//GX_ConvertArrayToPathData(pathNode.id, gPathDataArray); 
	//index =  indexC + 1 and loop till distance is found to be greater than 2
	//else remove the points from the array for which distance is less than 2 
	
	//ditto for the start point 
	
	//now at the end point add moveto command 
}

function GX_FindAnchorPointIndex(pathArray, boundary, pointX, pointY, startIndex)
{
	var bAnchorPointFound = false; 
	var dist = 0; 
	var srcPtX = new Number(pointX); 
	var srcPtY = new Number(pointY); 
	var anchPtX, anchPtY; 
	var IndexAnch = -1;	
	for(var j=startIndex; j < pathArray.length; j++)
	{
		//find anchor point in patharray 
		anchPtX =  new Number(pathArray[j][1]);
		anchPtY =  new Number(pathArray[j][2]);		
		dist = (srcPtX - anchPtX)*(srcPtX - anchPtX) +(srcPtY - anchPtY)*(srcPtY - anchPtY) ;
		if(dist <= boundary)
		{
			bAnchorPointFound = true; 
			IndexAnch = j; 
			break; 
		}		
		// while closes point not found loop
		//find distance square between pointX and pointY 
		//if distance is less than 2 then the point has been found 
	}
	return IndexAnch; 
}


function OnWindowScroll(event)
{	
	
	var windowID = event.currentTarget.id; 
	if(windowID == 'editor_div'){
		gPanX = event.currentTarget.scrollLeft 
		gPanY = event.currentTarget.scrollTop;
		//Debug_Message('X=' +  gPanX + 'Y=' +  gPanY); 
		return; 
	}
	if( (bNewObjectAdding ==  true) || (bMoveObject == true)  || (bScrollPrevent == true) )
	{
		if( (window.pageXOffset != 0) || (window.pageYOffset != 0 ))
		{
			var horScroll = 0 - window.pageXOffset;
			var vertScroll = 0 - window.pageYOffset;	
			if( (horScroll != 0) || (vertScroll != 0) )
				window.scrollTo(horScroll, vertScroll);
		}
		bNewObjectAdding = false; 
		bScrollPrevent = false; 
		//Debug_Message("Scrolling stopped"); 
	}
	
}

function GX_SetClosePath(pathNode, bCloseFlag)
{
	//get the path array 
	gPathDataArray = GX_ConvertPathDataToArray(pathNode); 
	
	//check if z is already there
	var bzFlag; 
	if(gPathDataArray[gPathDataArray.length-1][0] == 'z')
		bzFlag = true; 
	else 
		bzFlag = false; 
	var item; 
	//now depending upon the flag either append or replace with blank
	if( (bCloseFlag == true) && (bzFlag == false) )
	{
		item = ['z','', '', '']; 
		gPathDataArray.push(item);		
	}
	else if( (bCloseFlag == false) && (bzFlag == true) )
	{
		item = gPathDataArray[gPathDataArray.length-1]; 
		if(item[0]!= 'z')
			return ; 
		gPathDataArray[gPathDataArray.length-1][0] = ""; 
		gPathDataArray[gPathDataArray.length-1][1] = ""; 
		gPathDataArray[gPathDataArray.length-1][2] = ""; 
		gPathDataArray[gPathDataArray.length-1][3] = ""; 		
	}
	//get new path array before returnging 
	GX_ConvertArrayToPathData(pathNode.id, gPathDataArray); 
	gPathDataArray = GX_ConvertPathDataToArray(pathNode); 
}

function GX_IsPathClose(pathNode)
{
	gPathDataArray = GX_ConvertPathDataToArray(pathNode); 
	if( (gPathDataArray) && (gPathDataArray.length > 1 ) )
	{
		if(gPathDataArray[gPathDataArray.length-1][0] == 'z')
			return true;
		else
			return false; 
	}
	
}

function GX_SetRotattion(ObjNode, value)
{
	var transfdim =  new sDimension(); 
	transfdim.x = value; 
	GX_SetTransformProperty(ObjNode, 'rotation', transfDim);	
}

function GX_SetRotationToPoints(ObjDim, pointArray) //theta, pointArray, centreRot)
{
	var X, Y;
	var Xn, Yn; 
	var angle = (Math.PI * ObjDim.rotate)/180; 
	
	
	for(var j=0; j < pointArray.length; j++)
	{
		X = new Number(pointArray[j][1]);
		Y = new Number(pointArray[j][2]); 
		//var Xd = X - centreRot.x + ''; 
	  // var Yd = Y - centreRot.y + '';
		var Xd = new Number(X - ObjDim.rotCentreX); 
		var Yd = new Number(Y - ObjDim.rotCentreY); 
		Xn = Xd*Math.cos(angle) - Yd*Math.sin(angle); 
		Yn = Xd*Math.sin(angle) + Yd*Math.cos(angle); ;

		pointArray[j][1] = Math.round(Xn + ObjDim.rotCentreX); 
		pointArray[j][2] = Math.round(Yn + ObjDim.rotCentreY);
	}
	return pointArray; 
}

function GX_AddPoint()
{
	var objType = gCurrentObjectSelected.classList[1]; 
	var bClosePath = false; 
	if(!gCurrentMarkerNode)
		return ; 
	var pathIndex = gCurrentMarkerNode.getAttribute('data-index'); 
	pathIndex =  new Number(pathIndex); 
	if( (objType == 'LINE_PATH') || (objType == 'POLYGON') )
	{
		gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		var searchindex = pathIndex+1; 
		var array1 = gPathDataArray.slice(0,searchindex);
		var array2 = gPathDataArray.slice(searchindex); 		
		var newX, newY; 
		var pt1X, pt1Y, pt2X, pt2Y; 
		var lastIndex; 
		lastIndex = pathIndex; 
		if(gPathDataArray[lastIndex][0]== 'z')
		{
			bClosePath = true;	
			lastIndex--; 
		}			
		pt1X = new Number(gPathDataArray[lastIndex][1]);		
		pt1Y = new Number(gPathDataArray[lastIndex][2]);
		
		if(lastIndex+1 < gPathDataArray.length)
		{
			pt2X = new Number(gPathDataArray[lastIndex+1][1]);
			pt2Y = new Number(gPathDataArray[lastIndex+1][2]);
		}
		else
		{
			pt2X = new Number(gPathDataArray[0][1]);
			pt2Y = new Number(gPathDataArray[0][2]);
		}
		
		newX = Math.round((pt1X +pt2X)/2); 
		newY = Math.round((pt1Y +pt2Y)/2); 
		
		//if(bClosePath == true)
		//	gPathDataArray = gPathDataArray.splice(0, gPathDataArray.length-1); 
		
		var item = ['L', newX+'', newY+'','POINT' ]; 		
		array1.push(item); 
		gPathDataArray = array1.concat(array2); 
		if(bClosePath == true)
		{
			item = ['z', ' ',' ',' ']; 
			gPathDataArray.push(item); 
		}		
		GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false); 
	}
	else
		return ;
	//gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
	GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
	//GX_SetSelection(gCurrentObjectSelected, true, true); 
}

function GX_SetMarkerNodeSelection(markerNode, bFlag)
{
	if(!markerNode)
		return ; 
	var markerType = markerNode.classList[1]; 
	var colorCode = ""; 
	if(bFlag== false)
	{
		if(markerType == 'START')
			colorCode ='green'; 
		else if(markerType == 'END')
			colorCode ='red';
		else if(markerType == 'MIDDLE')
			colorCode ='blue';
		else 
			return; 
		/*
		markerNode.setAttribute('fill', colorCode); 
		markerNode.setAttribute('r', '5');	        	
		markerNode.setAttribute('stroke-width', '2');
		markerNode.removeAttribute('stroke-dasharray');
		*/
		$(gDivPathMarkerSel).css({visibility:'hidden'});
		markerNode.setAttribute('r', '5');
		markerNode.setAttribute('visibility', 'visible');	 
		GX_UpdatePathData(gCurrentObjectSelected); 
		//GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
		bMarkerSelected = false ; 
	}
	else
	{		
		//make the divmarker node visible here 
		//$(gCurrGripperSel).css({visibility: 'hidden'});
		$(gCurrGripperSel).hide(); 
		$(gDivPathMarkerSel).show(); 
		var currDim = GX_GetRectObjectDim(markerNode); 
		GX_SetRectObjectDim($(gDivPathMarkerSel)[0], currDim); 
		markerNode.setAttribute('visibility', 'hidden'); 
		$(gDivPathMarkerSel).css({visibility:'visible'}); 		
		bMarkerSelected = true; 
	}	    
}

function GX_DeletePoint()
{
	var objType = gCurrentObjectSelected.classList[1]; 
	var bClosePath = false; 
	if(!gCurrentMarkerNode)
		return ; 
	var pathIndex = gCurrentMarkerNode.getAttribute('data-index'); 
	pathIndex =  new Number(pathIndex); 
	if( (objType == 'LINE_PATH') || (objType == 'POLYGON') )
	{
		gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		var searchindex = pathIndex+1; 
		var array1 = gPathDataArray.slice(0,searchindex);
		var array2 = gPathDataArray.slice(searchindex);		
		var lastIndex; 
		lastIndex = pathIndex; 
		if(gPathDataArray[lastIndex][0]== 'z')
		{
			bClosePath = true;	
			lastIndex--; 
		}				
		array1.pop(); 
		gPathDataArray = array1.concat(array2); 
		if(bClosePath == true)
		{
			item = ['z', ' ',' ',' ']; 
			gPathDataArray.push(item); 
		}		
		GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false); 
	}
	else
		return ;
	GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
	//GX_SetSelection(gCurrentObjectSelected, true, true); 
}


function GX_UpdatePathParamOnUI(ObjNode)
{
	var objType = ObjNode.classList[1]; 
	gPathDataArray = GX_ConvertPathDataToArray(ObjNode); 	
	if(!gPathDataArray)
		return ; 
	var bClosePath = false; 
	if(gPathDataArray[gPathDataArray.length-1][0] == 'z'){
		bClosePath = true; 
	}
	WAL_setCheckBoxValue('pathclose', bClosePath); 	
	if(objType == 'ELLIPTIC')
	{

		WAL_setNumberInputValue('radiusXIP', gPathDataArray[1][1], false);
		WAL_setNumberInputValue('radiusYIP', gPathDataArray[1][2], false);
		
		var state; 
		if(gPathDataArray[3][0]== 1)
			state = true;
		else
			state = false; 	
		WAL_setCheckBoxValue('largearcCheckBox', state); 
		
		if(gPathDataArray[4][0]== 1)
			state = true; 
		else
			state = false; 	
		WAL_setCheckBoxValue('sweepCheckBox', state); 
	}
	else if(objType == 'POLYGON')
	{
		var centerPt = GX_GetPolygonParam(ObjNode); 
		WAL_setNumberInputValue('lengthIP', ''+centerPt.width, false);		
	}
	
	
}

function GX_DrawPolygon(ObjNode, x, y, nSides, length) {
    var gnInternalAngle = 2 * Math.PI / nSides;
    var startAngle = Math.PI / nSides;
    var radius = new Number(length);
    radius = Math.round(radius / (2 * Math.sin(gnInternalAngle / 2)));
    //  alert("Int Angle=" + gnInternalAngle) ;
    //var nPointArray = [];
    gPathDataArray = []; 
    var currPoint = new sDimension();
    currPoint.x = x;
    currPoint.y = y;
    var currAngle;
    var cx = new Number(x);
    var cy = new Number(y);
    var newPoint = ["M", currPoint.x, currPoint.y];
    
    for (var k = 0; k < nSides; k++) {

        currAngle = startAngle + (k * gnInternalAngle);
        currPoint.x = Math.round(cx + radius * Math.cos(currAngle));
        currPoint.y = Math.round(cy - radius * Math.sin(currAngle));
        if(k==0)
        	newPoint = ["M", currPoint.x, currPoint.y, 'START_POINT'];
        else
        	newPoint = ["L", currPoint.x, currPoint.y, 'POINT'];
        gPathDataArray.push(newPoint);
    }
    gPathDataArray[nSides-1][3] ='END_POINT'; 
    newPoint = ['z','','','NONE']; 
    gPathDataArray.push(newPoint);    
    GX_SetObjectAttribute(ObjNode, 'PATH_DATA', gPathDataArray, true, false);
    currPoint.x = cx; 
    currPoint.y = cy; 
    currPoint.width = length; 
    GX_SetObjectAttribute(ObjNode, 'POLYGON_CENTER', currPoint, true, false);
    GX_SetSelection(ObjNode, true, true); 
}

function GX_GetPolygonParam(ObjNode)
{

	if(ObjNode.classList[1] != 'POLYGON')
		return ; 
	var center = new sDimension(); 
	var centerParam = ObjNode.classList[3]; 
	var paramArr = centerParam.split(',');
	if(!paramArr)
		return; 
	center.x = new Number(paramArr[1]);
	center.y = new Number(paramArr[2]);	
	center.width = new Number(paramArr[3]);	
	return center; 
	
}

function GX_ColorWidgetCANCEL(event)
{
	if(!gCurrentObjectSelected)
		return ;
	var colWdgt = document.getElementById('colorpickwidget'); 
	if(!colWdgt)
		return ;
	var colAttrName = colWdgt.getAttribute('data-attrName');
	var initcolAttrValue = colWdgt.getAttribute('data-attrValue');
	//restoring the original color 
	gCurrentObjectSelected.setAttribute(colAttrName, initcolAttrValue );
}

function GX_ColorWidgetOK(event){	
	var colWdgt = document.getElementById('colorpickwidget'); 
	if(!colWdgt)
	 return ;
	var colAttrName = colWdgt.getAttribute('data-attrName');
	var colorval = WAL_getColorPickerValue('colorpickwidget');
	
	var objectAttr =  new sObjAttrParam();	
	if(gbMultiSelection == true){
		//for(var j=0; j < gMultiNodeArray.length; j++){			
		GX_UpdatePropertyForMultipleObjects(colAttrName,colorval ); 
		//}
		return ; 
	}
	if(!gCurrentObjectSelected)
		return ;
	GX_SetObjectAttribute(gCurrentObjectSelected, colAttrName, colorval, true, false); 
}
/*
 *  compactList[indexToWrite].ID = attributeParams.ID;		
	compactList[indexToWrite].type = attributeParams.type; 
	compactList[indexToWrite].name =  attributeParams.name; 
	compactList[indexToWrite].currValue = attributeParams.currValue;
	compactList[indexToWrite].prevValue = ""; 
	compactList[indexToWrite].Status = 'PENDING';	
	
	EL_UpdateCompactList(attributeParams, compactList)
 */
function GX_StrokeColorHandler(attrName, value)
{
	if(!gCurrentObjectSelected)
		return ;	
	gCurrentObjectSelected.setAttribute(attrName,value );
}

function OnGradPointClick(evt) {
    var node = evt.target;
	
    if (bGradPointMove == false) {
        if (!gGradSVGNode)
        {
        	if(gCurrentGradientType == 'LINEAR_GRADIENT' )
        		gGradSVGNode = document.getElementById('LINEAR_GRAD_PREVIEW_RECTANGLE');
        	else if(gCurrentGradientType == 'RADIAL_GRADIENT' )
        		gGradSVGNode = document.getElementById('RG_CIRCLE');
        }
                      
       // node.setAttribute("cursor", "move");
        gInitMousePoint = new sPoint();
        gInitMousePoint.x = new Number(evt.clientX);
        gInitMousePoint.y = new Number(evt.clientY);
        gInitMarkerPoint = new sPoint();
        gInitMarkerPoint.x = new Number(node.getAttribute('cx'));
        gInitMarkerPoint.y = new Number(node.getAttribute('cy'));
        gInitLinePoint = new sPoint(); 
        gInitFocusPoint = new sPoint(); 
        
       // gLineNode = document.getElementById('RG_RADIUS_LINE');
        gCircleNode = document.getElementById('RG_CIRCLE');
       // gMarkerNode = document.getElementById('RG_RADIUS_END_POINT');
        gFocusNode = document.getElementById('RG_FOCUS_POINT');
        //gInitFocusPoint.x = new Number(gFocusNode.getAttribute('cx')); 
       // gInitFocusPoint.y = new Number(gFocusNode.getAttribute('cy')); 
        var pos = $('#RG_FOCUS_POINT').position(); 
        gInitFocusPoint.x = pos.left; 
        gInitFocusPoint.y = pos.top; 
        if(node.id == 'RG_CIRCLE')
        {
        	 gCenterNode = document.getElementById('RG_CENTER');         	 
        }        
        else
        {
        	gLineNode = document.getElementById('LG_INDICATOR_LINE');                   
            if (node.id == 'LG_START_POINT') {
                gInitLinePoint.x = new Number(gLineNode.getAttribute('x1'));
                gInitLinePoint.y = new Number(gLineNode.getAttribute('y1'));
            }
            else if (node.id == 'LG_END_POINT') {
                gInitLinePoint.x = new Number(gLineNode.getAttribute('x2'));
                gInitLinePoint.y = new Number(gLineNode.getAttribute('y2'));
            }
        }                
        bGradPointMove = true;                	
        return;
    }
    if (bGradPointMove == true) {
        bGradPointMove = false;
        node.setAttribute("cursor", "auto");	
        gCircleNode.setAttribute('pointer-events', 'visible'); 
        gGradSVGNode = 0; 
    }       
}

function OnGradDragStart(evt, ui){		
	    var node = evt.target;	
	   
	    if (bGradPointMove == false) {
	        if (!gGradSVGNode)
	        {
	        	if(gCurrentGradientType == 'LINEAR_GRADIENT' )
	        		gGradSVGNode = document.getElementById('LINEAR_GRAD_PREVIEW_RECTANGLE');
	        	else if(gCurrentGradientType == 'RADIAL_GRADIENT' )
	        		gGradSVGNode = document.getElementById('RG_CIRCLE');
	        }	       
	        gInitMousePoint = new sPoint();
	        gInitMousePoint.x = new Number(evt.clientX);
	        gInitMousePoint.y = new Number(evt.clientY);
	        gInitMarkerPoint = new sPoint();
	       
	       
	        gInitLinePoint = new sPoint(); 
	        gInitFocusPoint = new sPoint(); 	        
	      
	        gCircleNode = document.getElementById('RG_CIRCLE');	       
	        gFocusNode = document.getElementById('RG_FOCUS_POINT');
	        //gInitFocusPoint.x = new Number(gFocusNode.getAttribute('cx')); 
	        //gInitFocusPoint.y = new Number(gFocusNode.getAttribute('cy')); 
	        
	        
	        if(node.id == 'RG_FOCUS_POINT')
	        {
	        	 var pos = $('#RG_FOCUS_POINT').position(); 
	        	 gInitMarkerPoint.x = pos.left; 
	        	 gInitMarkerPoint.y = pos.top;
	        }        
	        else
	        {
	        	gLineNode = document.getElementById('LG_INDICATOR_LINE');                   
	            if (node.id == 'LG_START_POINT') {
	                gInitLinePoint.x = new Number(gLineNode.getAttribute('x1'));
	                gInitLinePoint.y = new Number(gLineNode.getAttribute('y1'));
	              
	             	
	            }
	            else if (node.id == 'LG_END_POINT') {
	                gInitLinePoint.x = new Number(gLineNode.getAttribute('x2'));
	                gInitLinePoint.y = new Number(gLineNode.getAttribute('y2'));
	                
	            }
	        }                
	        bGradPointMove = true;                	
	        return;
	    }	         

}

function OnGradDragStop(evt, ui){	
	if (bGradPointMove == true) {
        bGradPointMove = false;       
        gCircleNode.setAttribute('pointer-events', 'visible'); 
        gGradSVGNode = 0; 
    }    
}

function OnGradMouseMove(evt, ui) {
    var node = evt.target;
    var relPosition = new sPoint();
   // relPosition.x = new Number(evt.clientX);
    //relPosition.y = new Number(evt.clientY); 
    
    relPosition.x = new Number(ui.position.left - ui.originalPosition.left);
    relPosition.y = new Number(ui.position.top - ui.originalPosition.top);
    if(!gGradSVGNode)
    	return ; 
    /*if (!gGradSVGNode)
        gGradSVGNode = document.getElementById('LINEAR_GRAD_PREVIEW_RECTANGLE');
    */
   
    if (bGradPointMove == false) {
    	if(node.id != 'RG_CIRCLE')
    	{
    		node.setAttribute('r', '14');
    		node.setAttribute("cursor", "move");
    	}
        return; 
       
    }
    var newX, newY;      
    
    if (bGradPointMove == true) {
        
           // relPosition.x = relPosition.x - gInitMousePoint.x;
           // relPosition.y = relPosition.y - gInitMousePoint.y;

            newX = gInitLinePoint.x + relPosition.x;
            newY = gInitLinePoint.y + relPosition.y;
            if (node.id == 'LG_START_POINT') {
                
                var gradX1 = Math.round((newX * 100) / gGradWidth);
                if(gradX1 < 0)
                	gradX1 = 0; 
                if(gradX1 > 100)
                	gradX1 = 100; 
                		
               /* if( (gradX1 < 0) || (gradX1 > 100) )
                	return ;
                	*/
                
                var gradY1 = Math.round((newY * 100) / gGradHeight);
                if(gradY1 < 0)
                	gradX1 = 0; 
                if(gradY1 > 100)
                	gradY1 = 100; 
                
                /*if( (gradY1 < 0) || (gradY1 > 100) )
                	return ;*/ 
                gLineNode.setAttribute('x1', newX + '');
                gLineNode.setAttribute('y1', newY + '');
                GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'x1', gradX1 + '%', true, false);
                GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'y1', gradY1 + '%', true, false);
                $('#spX1').html( gradX1 + '%');
                $('#spY1').html( gradY1 + '%');
            }
            else if(node.id == 'LG_END_POINT') {              
                var gradX2 = Math.round((newX * 100) / gGradWidth);
                if( (gradX2 < 0) || (gradX2 > 100) )
                	return ; 
                var gradY2 = Math.round((newY * 100) / gGradHeight);
                if( (gradY2 < 0) || (gradY2 > 100) )
                	return ; 
                gLineNode.setAttribute('x2', newX + '');
                gLineNode.setAttribute('y2', newY + ''); 
                GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'x2', gradX2 + '%', true, false);
                GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'y2', gradY2 + '%', true, false);
                
                $('#spX2').html( gradX2 + '%');
                $('#spY2').html( gradY2 + '%');
            }
            
            else if(node.id == 'RG_CIRCLE')
            {
            	 newX = gInitMarkerPoint.x + relPosition.x;
                 newY = gInitMarkerPoint.y + relPosition.y;
                 if( (newX < 190) && (newY < 190)) 
                 {                        	 
                	 node.setAttribute('cx', newX+'');
                     node.setAttribute('cy', newY+'');
                     gCenterNode.setAttribute('cx', newX+'');
                     gCenterNode.setAttribute('cy', newY+'');
                     var cx1 = Math.round((newX * 100) / gGradWidth); 
             		 var cx2 = Math.round((newY * 100) / gGradHeight); 
                    
             		 GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'cx', value + '%', true, false);
             		 
             		 
                     gLineNode.setAttribute('x1', newX+''); 
                     gLineNode.setAttribute('y1', newY+''); 
                     var radius = new Number(gCircleNode.getAttribute('r')); 
                     newX = newX + radius;
                     gLineNode.setAttribute('x2', newX+''); 
                     gLineNode.setAttribute('y2', newY+''); 
                     gMarkerNode.setAttribute('cx', newX+''); 
                     gMarkerNode.setAttribute('cy', newY+''); 
                     newX = gInitFocusPoint.x + relPosition.x; 
                     newY = gInitFocusPoint.y + relPosition.y; 
                     gFocusNode.setAttribute('cx', newX+''); 
                     gFocusNode.setAttribute('cy', newY+'');                      
                 }                         
                 return; 
            }
            else if(node.id == 'RG_FOCUS_POINT')
            {
            	newX = gInitMarkerPoint.x + relPosition.x;
                newY = gInitMarkerPoint.y + relPosition.y;
                var gradX1 = Math.round((newX * 100) / gGradWidth);
                if( (gradX1 < 0) || (gradX1 > 100) )
                	return ; 
                var gradY1 = Math.round((newY * 100) / gGradHeight);
                if( (gradY1 < 0) || (gradY1 > 100) )
                	return ; 
                
                node.setAttribute('cx', newX);
                node.setAttribute('cy', newY);
                var cx1 = Math.round((newX * 100) / gGradWidth); 
        		var cx2 = Math.round((newY * 100) / gGradHeight);    
        		GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'fx', cx1 + '%', true, false);
        		GX_SetObjectAttribute(gGradientObj.GradResourceNode, 'fy', cx2 + '%', true, false);
                return; 
            }

            newX = gInitMarkerPoint.x + relPosition.x;
            newY = gInitMarkerPoint.y + relPosition.y;
            node.setAttribute('cx', newX);
            node.setAttribute('cy', newY);              
    }
}
function OnGradMouseOut(evt) {
     var node = evt.target;
     if (bGradPointMove == false) {
    	 if(node.id != 'RG_CIRCLE')
          	node.setAttribute('r', '14');          
        	node.setAttribute("cursor", "auto");
     }
}

function GX_GetUniqueGradientName(){	
	var i =0 ; 
	var name = 'Gradient-'; 
	var defaultName=''; 
	var bFound =  false; 
	for(var i=0; i < 20; i++){
		defaultName = name + i;
		bFound = false; 
		//find if this name already exist 
		var gradlistlen = gGradientList.length; 
		for(var k=0; k < gradlistlen; k++ ){
			if(gGradientList[k][0] != undefined){
				if(defaultName.toLowerCase() == gGradientList[k][0].toLowerCase() ){
					bFound = true; 
					break; 
				}		
			}
				
		}	//for k 	
		if(bFound == false)
			return defaultName; 
	}//for i	
	
	return defaultName; 
}

var gCurrentGradientType = 0; 
function GX_ShowGradWindow(gradID, gradType)
{	    
     var JQSel = '#gradientDlg';  
     gCurrentGradientType = gradType; 
     
     var rgnode = document.getElementById('RGSpecific'); 
 	 var lgnode = document.getElementById('LGSpecific');
 	 gGradientObj = new sGradientWidget('gradientWidget', gradID);
 	 if(gbNewGradObject == false){
 		var JQSel = "#" + 'gradTitleIP';        
      //  WAL_disableWidget('gradTitleIP', 'data-jqxInput', false, true);
        //$('#gradcontainer').removeClass('disabledState');  
        
 	 }
 	 else{
 		 //get a unique gradient name here 
 		 var name = GX_GetUniqueGradientName(); 
 		var JQSel = "#" + 'gradTitleIP';
 		gGradientObj.GradParam.Title = name;  	
 		
       // WAL_disableWidget('gradTitleIP', 'data-jqxInput', false, false);
       // $('#gradcontainer').addClass('disabledState');        
 	 }
     if(gradType == 'LINEAR_GRADIENT')
     {
    	 JQSel = '#gradientDlg'; 
    	 $(JQSel).jqxWindow('setTitle', 'Linear Gradient Settings');    	
    	 
     	 rgnode.style.display = 'none'; 
     	 lgnode.style.display = 'block';            	
     	 JQSel = '.RG_MARKERS';
     	 $(JQSel).hide();         	            
     	 JQSel = '.LG_MARKERS'; 
     	 $(JQSel).show();
     	 JQSel = '#LinearGradpreview'; 
    	 var pos  = $(JQSel).position();
     	 var width = new Number(150) ;//$('#LinearGradpreview').width();
     	 var height = new Number(150) ;//$('#LinearGradpreview').height();
     	 var x1 =  new Number(pos.left); 
     	 var y1 =  new Number(pos.top);      	 
     	 x2 = 150; 
     	 y2 = 150;     	 
     	 
     	JQSel = '#LG_START_POINT'; 
     	$(JQSel).show(); 
     	
     	JQSel = '#LG_END_POINT'; 
     	$(JQSel).show(); 
     	
     	
     }
     else if(gradType == 'RADIAL_GRADIENT')
     {
    	 JQSel = '#gradientDlg'; 
    	 $(JQSel).jqxWindow('setTitle', 'Radial Gradient Settings');    	 
     	 rgnode.style.display = 'block'; 
     	 lgnode.style.display = 'none';            	
     	 JQSel = '.RG_MARKERS';
     	 $(JQSel).show();         	
     	 JQSel = '.LG_MARKERS'; 
     	 $(JQSel).hide();   
     	JQSel = '#RG_FOCUS_POINT'; 
     	$(JQSel).show();
     	 
     } 	 
     
     //gGradientObj.UpdateUI(gGradientObj.GradParam);
     var pos = $('#rightpanel').position(); 
     var width = $('#rightpanel').width(); 
     var childWidth = $('#gradientDlg').width();
     var fillpos = $('#gradlistDDL').position(); 
 	 pos.top = pos.top + fillpos.top; 
 	// pos.left = pos.left - 50 + Math.round(width/2); 
 	 pos.left = pos.left + Math.round(width) - childWidth; 
     WAL_setWindowAtPos('gradientDlg', pos.left, pos.top); 
     WAL_showModalWindow('gradientDlg', "GX_GradDlgOK", "");    
     gGradientObj.UpdateUI(gGradientObj.GradParam);
     
  /*   JQSel = '#LinearGradpreview'; 
	 var pos  = $(JQSel).position();
 	 var width = new Number(150) ;//$('#LinearGradpreview').width();
 	 var height = new Number(150) ;//$('#LinearGradpreview').height();
 	 var x1 =  new Number(pos.left); 
 	 var y1 =  new Number(pos.top); 
     gGradientObj.SetGradMarkerPosition('START_POINT', x1,y1);      	 
 	 $('#START_POINT').show();
 	 
 	JQSel = '#END_POINT'; 
 	gGradientObj.SetGradMarkerPosition('END_POINT', x2,y2); 
	$(JQSel).show();
	*/ 
}

function GX_AddNewAnimation()
{
	
	if(!gCurrentObjectSelected)
		return ;
	gNewAnimObject = true; 
	var objID = gCurrentObjectSelected.id; 
	gInitAnimParam = new sAnimParams();
    gInitAnimParam.animID = GXRDE_GetUniqueID('ANIM_');  
    gInitAnimParam.objectID = gCurrentObjectSelected.id;  
    gInitAnimParam.duration = 2;
    gInitAnimParam.animType = ''; 
    gInitAnimParam.attribute = 'fill';
    gInitAnimParam.startValue = '#00ff00';
    gInitAnimParam.endValue = '#ffff33';
    gInitAnimParam.refPathID = '';
    gInitAnimParam.bPathVisible = false;
    gInitAnimParam.bRolling = true; 
    gInitAnimParam.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
    gInitAnimParam.startTime = 0;
    gInitAnimParam.UIEventType = 'M_MOVE'; //M_CLICK, M_MOVE
    gInitAnimParam.UIObjectID = gInitAnimParam.objectID; 
    gInitAnimParam.AnimEventType = 'end'; //BEGIN, END
    gInitAnimParam.AnimID = 0;
    gInitAnimParam.calcMode = 'linear';
    gInitAnimParam.restart = 'never';
    gInitAnimParam.repeatCount = 0;
    gInitAnimParam.endState = 'freeze'; //FREEZE, REMOVE
    gInitAnimParam.PathObjectOffset=0;
    gInitAnimParam.PathStartPoint=new sPoint();
    gInitAnimParam.center = '';  //centre of rotation       
    gInitAnimParam.title = '';   
    GX_ResetUI(gInitAnimParam); 
   // GX_SetAnimParamOnUI(gInitAnimParam);         
    
   
  //  WAL_hideWidget('previewbtn', true); 
    WAL_setTextInputValue('newAnimtitleIP', '', false);	
    GX_HideNewAnimPreview(true); 
    WAL_SetItemInDropDownList('newAnimTypeDDL', -1, true);
    //Update the DropDown list before showing up 
    var bFlag = false; 
    if(gCurrentObjectSelected.classList[1] == 'POLYGON')
    	bFlag = true; 
    GX_InitializeAnimationListItems(gCurrentObjectSelected.classList[0], bFlag);
	WAL_showModalWindow('newAnimationDlg',"", "" );
}


function GX_EditAnimation(animID)
{	
	var animNode = document.getElementById(animID); 
	gCurrAnimNode = animNode; 
	if(!animNode)
		return; 
	gInitAnimParam = 0; 
	gInitAnimParam = GX_GetAnimParamFromNode(gCurrAnimNode);
	
    GX_SetAnimParamOnUI(gInitAnimParam);   
	
    gbApplied = false;
   
   // WAL_hideWidget('previewbtn', false);
   
    
	WAL_showModalWindow('animationwidget',"", "" );
	
	//cal show window 
	
}

function GX_AddGradientAnimation(gradID, animID, attribute, start, end, duration)
{
	//get the first chld of the gradient object 
	var GradientResID=0; 
	 var node = document.querySelector('#' +gradID); 
	 if(!node)
	   	return; 
	if(attribute == 'stop-color')
	{
		if('STOP' != node.nodeName.toUpperCase() ){
			return ; 
		}			
		node =  node.parentNode; 	
		
	}   
	GradientResID = node.id; 
   var childnode = node.firstElementChild; 
    if(!childnode)
    	return; 
    var nodename = childnode.nodeName.toUpperCase(); 
    if(nodename != 'ANIMATE')
    {
    	Debug_Message("top animation node not found"); 
    	return; 
    }
    var topAnimNodeID =  childnode.id; 
    
	gNewAnimObject = true; 
	var objID = gradID; 
	gInitAnimParam = new sAnimParams();
    gInitAnimParam.animID = animID ;//GXRDE_GetUniqueID('ANIM_');  
    gInitAnimParam.objectID = objID;  
    gInitAnimParam.duration = duration;
    gInitAnimParam.animType = 'ANIM_ATTRIBUTE'; //ATTRIBUTE, MOTION,TRANSFORM
    gInitAnimParam.attribute = attribute;
    gInitAnimParam.startValue = start;
    gInitAnimParam.endValue = end;
    gInitAnimParam.refPathID = '';
    gInitAnimParam.bPathVisible = false;
    gInitAnimParam.startType = 'ON_ANIMEVENT'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
    gInitAnimParam.startTime = gInitAnimParam.objectID + '_TOP_GRAD_ANIM';
    gInitAnimParam.UIEventType = 'M_MOVE'; //M_CLICK, M_MOVE
    gInitAnimParam.UIObjectID = gInitAnimParam.objectID; 
    gInitAnimParam.AnimEventType = 'end'; //BEGIN, END
    gInitAnimParam.AnimID = 0;
    gInitAnimParam.calcMode = 'linear';
    gInitAnimParam.restart = 'never';
    gInitAnimParam.repeatCount = 0;
    gInitAnimParam.endState = 'freeze'; //FREEZE, REMOVE
    gInitAnimParam.PathObjectOffset=0;
    gInitAnimParam.PathStartPoint = new sPoint();
    gInitAnimParam.center = '';  //centre of rotation 
    gInitAnimParam.title = 'none';   
    gInitAnimParam.siblingID = 0;
    gInitAnimParam.refAnimID = topAnimNodeID;     
    
    if( (gInitAnimParam.attribute == 'x1') || (gInitAnimParam.attribute == 'y1') ||
    		 (gInitAnimParam.attribute == 'x2') || (gInitAnimParam.attribute == 'y2') )
    {
    	
    	gInitAnimParam.siblingID =  gInitAnimParam.objectID + '_STOP0';
    	switch(gInitAnimParam.attribute)
    	{
    	case 'x1':  
    	  break; 
    	case 'x2':
    	case 'y2':
    		var refAnimX = gInitAnimParam.objectID + '_X1'; 
    		var animNodeX1 = document.getElementById(refAnimX); 
    		if(!animNodeX1) 
    		{
    			var refAnimX = gInitAnimParam.objectID + '_Y1';
    			animNodeX1 = document.getElementById(refAnimX); 
    		}    					
    		if(animNodeX1)
    			gInitAnimParam.refAnimID = refAnimX; 
    		break;    	
    	}
    }  
    else if( (gInitAnimParam.attribute == 'cx') || (gInitAnimParam.attribute == 'cy') || (gInitAnimParam.attribute == 'r') 
    		|| (gInitAnimParam.attribute == 'fx') || (gInitAnimParam.attribute == 'fy') )
    {    	
    	gInitAnimParam.siblingID =  gInitAnimParam.objectID + '_STOP0';
    	switch(gInitAnimParam.attribute)
    	{    	
    	case 'r':    	
    		var refAnimX = gInitAnimParam.objectID + '_CY'; 
    		var animNodeX1 = document.getElementById(refAnimX);     		  					
    		if(animNodeX1)
    			gInitAnimParam.refAnimID = refAnimX; 
    		break;    	
    	case 'fx':
    	case 'fy':
    		var refAnimX = gInitAnimParam.objectID + '_R'; 
    		var animNodeX1 = document.getElementById(refAnimX);  
    		if(!animNodeX1)
    		{
    			refAnimX = gInitAnimParam.objectID + '_CY'; 
    			animNodeX1 = document.getElementById(refAnimX);  
    		}
    			
    		if(animNodeX1)
    			gInitAnimParam.refAnimID = refAnimX;
    		break; 
    	default:
    		break; 
    	}
    }  
    else if(gInitAnimParam.attribute == 'stop-color')
    {
    	var stopnodeid = gradID.substr(gradID.length-5,5 ); 
    	switch(stopnodeid)
    	{
    		case 'STOP1':
    			//get the previous sibling node 
    			var tgtNode= document.getElementById(objID); 
    			tgtNode = tgtNode.previousSibling; 
    			if('STOP' != tgtNode.nodeName.toUpperCase() )
    				return ; 
    			tgtNode = tgtNode.firstElementChild; 
    			if( (tgtNode) && ('ANIMATE' == tgtNode.nodeName.toUpperCase()) )
    			{
    				//deduce the child animation object 
    				gInitAnimParam.refAnimID = tgtNode.id;         		
    			}   		        		
    			break; 
    		default:
    			break; 
    	}
    	
    }
    
    GX_AddAnimationElement(gInitAnimParam, false);
}

function GX_UpdateGradAnimAttribute(bFlag, gradResID, attrName, from, to, duration)
{
	var animIDStr = attrName.replace('-', '_'); 
	var animNodeID = gradResID + '_' +  animIDStr.toUpperCase(); //'_X1';
	var animNode = document.querySelector('#'+animNodeID); 
	if(animNode)
	{
		if(bFlag == true)
		{
			GX_SetObjectAttribute(animNode, 'from', from , true, false);
    		GX_SetObjectAttribute(animNode, 'to', to , true, false);
    		GX_SetObjectAttribute(animNode, 'dur', duration+'s' , true, false);
		}
		else
		{
			GX_DeleteObject(animNodeID);			//GXRDE_DeleteObject(animNodeID); 
		}  		
	}
	else
	{
		if(bFlag == true)
		{
			GX_AddGradientAnimation(gradResID,animNodeID, attrName, from,to, duration ); 
			//Debug_Message("Reached Here"); 
		}    			
	 }    	
 }	
/*
function GX_GradAnimApplyBtnHdlr(event)
{
	var btnID = event.target.id; 
	if(btnID == 'apply_Stop_Col')
	{
		var node = document.getElementById('stop0_color') ;  
		var fromcolval = node.style.backgroundColor; 
		
		node = document.getElementById('stop1_color') ;  
		var tocolval = node.style.backgroundColor;
			
	}
	
}

function GX_GradAnimPreviewBtnHdlr(event){
		//get the resource ID and then the top anim Id 
	var nodeID = event.target.id; 
	var resID = gGradientObj.GradResourceNode.id; 
	
	
	if(nodeID == 'animPreviewStopBtn')
	{
		animID = resID + '_X2'; 
		GX_PreviewAnimation(animID);
		animID = resID + '_Y2'; 
		GX_PreviewAnimation(animID);
	}	
	else if(nodeID == 'animPreviewStop')
	{
		animID = resID + '_STOP1_STOP_COLOR';		
		GX_PreviewAnimation(animID);
	}
		
	
	
	
	
	
}
*/ 

function GX_RemoveGradient(gradID, gradTitle)
{
	GX_DeleteObject(gradID); 
	gGradientList = GX_RemoveGradFromList(gradTitle, gGradientList);
	gGradientList = GX_GetGradientList(); 
	GX_UpdateGradientList(gGradientList);
}


function GX_FillColorDlgOK()
{
	//Debug_Message("Fill Color Dialog"); 
}
function GX_FillColorDlgCancel()
{
	gCurrentObjectSelected.setAttribute('fill', gInitFillValue); 
	
}
function GX_FillColorHandler(event)
{
	var btnID =  event.target.id; 
	var attrName = 'fill';
	if(!gCurrentObjectSelected)
		return ; 
	var tgtNode = gCurrentObjectSelected;    
	gPrevAttributeList = EL_getObjectAttributes(tgtNode);
	 WAL_showColorPickerWidget('gradcolorpickwidget', '', btnID, attrName, gInitFillColor, tgtNode.id);
}

function GX_ShowFillColorWidget()
{
	//var btnID =  event.target.id; 
	var attrName = 'fill';
	var initColVal = '#ffffff'; 
	if(gbMultiSelection == true){
		if(gMultiNodeArray.length < 1)
			return ; 				
		//WAL_showColorPickerWidget('colorpickwidget', 'GX_ApplyPropertyToMultipleObjects', 'fill_color_icon','fill', initColVal, 0);
		WAL_showColorPickerWidgetAtPos('colorpickwidget', 'GX_ApplyPropertyToMultipleObjects','',  pos.left,pos.top, attrName, gInitFillColor, tgtNode.id);
		return ; 
	}
	if(!gCurrentObjectSelected)
		return ; 
	var tgtNode = gCurrentObjectSelected;    
	gPrevAttributeList = EL_getObjectAttributes(tgtNode);
	var pos = $('#rightpanel').position(); 
	var fillpos = $('#gradlistDDL').position(); 
	pos.top = pos.top + fillpos.top; 
	WAL_showColorPickerWidgetAtPos('colorpickwidget', '','',  pos.left,pos.top, attrName, gInitFillColor, tgtNode.id);
	
}
function GX_FillColorAnimCheckValueChange(event)
{
	 var CBID = event.target.id;
	 var state = event.args.checked;
	 if(CBID == 'animateFillColor')
	 {
		if(state == true)
		{
			 
		}
		else
		{
			//remove the animation 
		}
	 }
}

function GX_FillBtnHandler(event)
{
	var btnID = event.target.id; 
	
	if(btnID == 'fillcolAnimAddBtn')
	{
		if(!gCurrentObjectSelected)
			return ;
		//first the animation structure here 
		gInitAnimParam = new sAnimParams(); 		
	//	gNewAnimObject = true; 
		var objID = gCurrentObjectSelected.id; 		
	    gInitAnimParam.animID = GXRDE_GetUniqueID('ANIM_');  
	    gInitAnimParam.objectID = gCurrentObjectSelected.id;  
	    gInitAnimParam.duration = 1;
	    gInitAnimParam.animType = 'ANIM_ATTRIBUTE'; //ATTRIBUTE, MOTION,TRANSFORM
	    gInitAnimParam.attribute = 'fill';
	    gInitAnimParam.startValue = '#000000'
	    gInitAnimParam.endValue = gCurrentObjectSelected.getAttribute('fill');;
	    gInitAnimParam.refPathID = '';
	    gInitAnimParam.bPathVisible = false;
	    gInitAnimParam.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	    gInitAnimParam.startTime = 0;
	    gInitAnimParam.UIEventType = 'M_MOVE'; //M_CLICK, M_MOVE
	    gInitAnimParam.UIObjectID = gInitAnimParam.objectID; 
	    gInitAnimParam.AnimEventType = 'end'; //BEGIN, END
	    gInitAnimParam.AnimID = 0;
	    gInitAnimParam.calcMode = 'linear';
	    gInitAnimParam.restart = 'never';
	    gInitAnimParam.repeatCount = 0;
	    gInitAnimParam.endState = 'freeze'; //FREEZE, REMOVE
	    gInitAnimParam.PathObjectOffset=0;
	    gInitAnimParam.PathStartPoint=new sPoint();
	    gInitAnimParam.center = '';  //centre of rotation 
	    
	    gInitAnimParam.title = '';
		
		//then call for add animation 
	    GX_AddAnimationElement(gInitAnimParam, false); 
	}
	else if(btnID == 'fillcolAnimPreviewBtn')
	{
		var animnode = gCurrentObjectSelected.firstElementChild; 
		if('ANIMATE' == animnode.nodeName.toUpperCase())
		{
			GX_PreviewAnimation(animnode.id);
		}		
	}	
}

/*
function GX_MakeTextEditable(srcTextNode)
{	
	var editSVGNode  = document.getElementById('texteditablesvg');		 
	var dim = srcTextNode.getBBox();	
	//now hide the original text node 
	var srcTexNodeattr =  EL_getObjectAttributes(srcTextNode); 
	
	var temptextNode = document.getElementById('tempText');	
	var str = srcTextNode.firstChild.data;	
	temptextNode.firstChild.data = str; 	
	var divNode = document.getElementById('texteditableDiv'); 
	divNode.setAttribute('contenteditable', 'true'); 	
	divNode.style.left = dim.x + 'px'; 
	divNode.style.top = dim.y + 'px'; 
	//divNode.style.height = dim.height + 'px'; 
	//divNode.style.width = 'auto';
	divNode.style.display = 'block';
	srcTextNode.setAttribute('visibility', 'hidden'); 	
	for(var j= 0;  j < srcTexNodeattr.length; j++)
	{
		if( (srcTexNodeattr[j][1] != 'id') && (srcTexNodeattr[j][1] != 'x') && (srcTexNodeattr[j][1] != 'y'))
			temptextNode.setAttribute(srcTexNodeattr[j][1], srcTexNodeattr[j][2]); 
	}
	temptextNode.setAttribute('opacity', '1.0'); 
}
*/
function GX_MakeTextEditable(srcTextNode)
{
	var node = srcTextNode;
	var dim = node.getBBox(); 
	//var editornode = document.getElementById('texteditor');
	if(!gTextEditorNode)
		gTextEditorNode = document.getElementById('texteditor');
	
	var editJQSel = '#texteditor'; 
	var editorParentNode = gTextEditorNode.parentNode; 
	var str = node.firstChild.data; 	
	gTextEditorNode.value = str; 
	editorParentNode.style.position = 'absolute'; 
	editorParentNode.style.left = Math.round(dim.x ) + 'px';	
	var toppos=  new Number();
	toppos = Math.round(dim.y); 
	toppos += Math.round(dim.height); 
	editorParentNode.style.top = toppos + 'px';	
	gTextEditorNode.style.width = Math.round(dim.width) + 'px'; 
	gTextEditorNode.style.height = Math.round(3*dim.height) + 'px'; 
	gTextEditorNode.style.fontFamily = node.getAttribute('font-family');
	
	//_rm dont know why it is not working 
	var fontsize = node.getAttribute('font-size');
	//$(editJQSel).prop('font-size', '35');	//$x.prop("color","FF0000");editornode.style.fontSize = "34" ;//+fontsize; 
	//editornode.style.color = node.getAttribute('fill');
	editorParentNode.style.display = 'block';  
	//_rm bug due to the opacity settings here
	
}


function GX_UpdateTextEditorPos(x, y){
	
}
function GX_SaveText(editedTextNode)
{
	var temptextNode = document.getElementById('tempText');	
	var str = temptextNode.firstChild.data;	
	if(str == undefined)
	{
		str = 'Default Text'; 
		Debug_Message('Undefined String'); 		
	}
		
	//temptextNode.innerHTML = str; 
	//editedTextNode.innerHTML = str;
	temptextNode.firstChild.data = str; 
	editedTextNode.firstChild.data = str; 
	var divNode = document.getElementById('texteditableDiv');   		  		
	divNode.style.display = 'none';
	editedTextNode.setAttribute('visibility', 'visible'); 		
	//reset the dit mode to layout mode 
	GX_showEditorInterface('None'); 	
	GXRDE_updateTextObjectData(editedTextNode.id, editedTextNode.firstChild.data); 
}


function OnTextEditKeyPress(event)
{		
	var str = gTextEditorNode.value ;
	gCurrentObjectSelected.firstChild.data  = str; 
}

function OnTextEditFocusOut(event)
{	
	GX_HideandUpdateTextData(); 	
	
}

function GX_HideandUpdateTextData(){
	if(!gTextEditorNode)
		return ; 
	var str = gTextEditorNode.value ;
	if(str.length  == 0)
		return ; 	
	gTextEditorNode.parentNode.style.display = 'none'; 
	if((gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'SVG_TEXT_OBJECT'))
	{
		gCurrentObjectSelected.firstChild.data  = str;    
		var dim = gCurrentObjectSelected.getBBox(); 
		gCurrGrabber.setAttribute('width', dim.width); 		
		GXRDE_updateTextObjectData(gCurrentObjectSelected.id, gCurrentObjectSelected.firstChild.data);
		gTextEditorNode.value = ''; 
	}	
}

function OnLogoutButton(event)
{
	var nodeid = event.target.id; 	
	if(nodeid == 'logout')
	{
		GXRDE_sessionEnd();
		var url = '../web2graphix/WNX_Home.php' ;
		window.open(url, '_self', ''); 
	}
	else if(nodeid == 'about')
	{
		Debug_Message('About'); 
	}
	
}

function GX_ShowObjectPropertyInterface(objectType, bShow)
{
		var JQSel = '.' + objectType + '_PROPERTY';	
		if(bShow == true)
			$(JQSel).css('display','inline-block'); 
		else
			$(JQSel).css('display','none');
	//}	
		if(objectType == 'TEXT') 
		{
			if(bShow == true){
				WAL_hideWidget('texteditinterface', false); 
				var fontsize = gCurrentObjectSelected.getAttribute('font-size'); 
				GX_UpdatePropertyOnUI('FONT_SIZE', fontsize);
				var fontname = gCurrentObjectSelected.getAttribute('font-family');
				GX_UpdatePropertyOnUI('FONT_NAME', fontname);
				GX_MakeTextEditable(gCurrentObjectSelected); 
			}
			else{
				gTextEditorNode.parentNode.style.display = 'none'; 
				WAL_hideWidget('texteditinterface', true); 
			}			
		}	
		else if(objectType =='FREEDRAW_PATH'){	
			if(bShow == false){
				$('.freedrawBtn').show(); 
				$('.freedrawProp').hide(); 
			}			
		}
}

function OnTooltipButton(event){
	
	var nodeID = event.target.id;
	if(nodeID = 'selectortooltip')
	{
		gShowTooltip = false; 
	}	
}

function OnMenuCBChange(event){
	
	var CBID = event.target.id;
	var bChecked = event.target.checked;	 
	switch(CBID)
	{
	case 'buttontooltip_cb':
		gContextTooltip = bChecked
		break; 
	case 'editortooltip_cb':
		gShowTooltip = bChecked; 
		break; 
	case 'showgrid_cb':
		var gridNode = document.getElementById('gridpattern'); 	
		var bigGridNode =  document.getElementById('bigrectpattern'); 		
		gShowGrid = bChecked; 
		if(gShowGrid == true){
			bigGridNode.setAttribute('visibility', 'visible'); 
			gridNode.setAttribute('visibility', 'visible'); 
		}			
		else{
			bigGridNode.setAttribute('visibility', 'hidden'); 
			gridNode.setAttribute('visibility', 'hidden'); 
		}
			
		break;
	default:
		break; 
	}	
}

function GX_SVGGroupDlgNameOK()
{
	var JQSel = "#" + "groupNameIP";	
	var svgGroupname  = $(JQSel).val();
    if(!svgGroupname)
    {
    	Debug_Message("Please Enter a Valid Name ");
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGGroupNameDlgID,"GX_SVGGroupDlgNameOK", "" );
    	return; 
    }
    var bretval = IsNameValid(svgGroupname); 
    if(bretval == false)
    {
    	Debug_Message("Enter a Name without any Blank"); 
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGGroupNameDlgID,"GX_SVGGroupDlgNameOK", "" );
    	return;     	
    }
    if( (gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'GROUP')
    		&& (gCurrentObjectSelected.id != 'BASEGROUP') ){
    	
    	GX_UpdateTreeWidgetFromServer(''); 
         var nodeID = 'TM_' + gCurrentObjectSelected.id; 
         retval  = GX_setTreeItemSelection(nodeID);	 
    }
    else
    	GX_AddNewSVGObject('GROUP', svgGroupname, 'callbackSVGAddDefualtFn'); 
}

function GX_ContextMenuClick(menuID){
	
	var menuItemID = menuID ; //event.target.id;	
	switch(menuItemID)
	{
	case 'groupmenu':
		//if(gbMultiSelection != true)
		{	
			WAL_SetTabIndex('rightTabs', 0);
			GX_UpdateGroupList();
			var mygrpList = GX_GetGroupList('NAME'); 
			if(gGroupList.length > 0){
				WAL_UpdateDropDownList('grouptoDDL', mygrpList);
				$('#newgroupNameIP').val(''); 
				WAL_showModalWindow('movetoGroupDlg',"GX_MovetoGroupDlgOK", "" );	
			}			
		}		
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
	 case 'copymenu':
		 if(gCurrentObjectSelected)
			 GX_CopyObject(gCurrentObjectSelected); 
		 break; 
	 case 'pastemenu':
		 GX_PasteObject();
		 break; 
	default:
		break; 
	}
}
var gGroupID = 0; 
function GX_MovetoGroupDlgOK(){	
	
	//if new group selected 
	/*var groupName = $('#newgroupNameIP').val(); 
	if(groupName.length > 0){
		//needs to be handled properly 
		GX_AddNewSVGObject('GROUP', groupName, 'newSVGGroupCallback'); 
		newSVGGroupCallback =  function(respStr){
			callbackSVGAddDefualtFn(respStr);
			GX_UpdateGroupList(); 
			var groupID = GX_GetGroupIDfromList(groupName); 
			for(var i=0; i <gMultiNodeArray.length; i++)
				 GX_MoveObjectToGroup(gMultiNodeArray[i], groupID);
			GXRDE_MoveObjectToGroup(groupID,gMultiNodeArray);
			GX_UpdateTreeWidgetFromServer();	
			return ; 
		}		
	}
	else*/
	{
		groupName = WAL_getDropdownListSelection('grouptoDDL'); 
		//gMultiNodeArray = []; 
		if( (gMultiNodeArray.length < 1) && (gCurrentObjectSelected))
				gMultiNodeArray.push(gCurrentObjectSelected.id);
		
		var groupID = GX_GetGroupIDfromList(groupName); 
		/*for(var i=0; i <gMultiNodeArray.length; i++)
			 GX_MoveObjectToGroup(gMultiNodeArray[i], groupID);
			 */
		gGroupID =  groupID; 
		GXRDE_MoveObjectToGroup(gGroupID,gMultiNodeArray, 'callbackFnForMoveObject');
		
		//GX_UpdateTreeWidget();	
	}
	
}


function callbackFnForMoveObject(respstr){
	GX_ReloadSVG(gGroupID, true); 
	
}
function GX_UpdateGroupList(){
	
	gGroupList=[]; 
	var JQSel = '.GROUP'; 
	var size = $(JQSel).size(); 
    var num = $(JQSel).size();
 	var DOMArr = $(JQSel).toArray(); 
 	for(var j=0; j <DOMArr.length; j++){
 		var groupInfo = [DOMArr[j].id, DOMArr[j].classList[1]]; 
 		gGroupList.push(groupInfo); 
 	}
 	//return groupList;
}

function GX_GetGroupList(byAttribute){
	var grouplist=[]; 
	if(byAttribute == 'NAME'){
		for(var j=0; j< gGroupList.length; j++){
			grouplist.push(gGroupList[j][1]); 
		}
	}
	else if(byAttribute == 'ID'){
		for(var j=0; j< gGroupList.length; j++){
			grouplist.push(gGroupList[j][0]); 
		}
	}	
	return grouplist;
}

function GX_GetGroupIDfromList(name){
	for(var j=0; j <gGroupList.length; j++){
		if(name == gGroupList[j][1])
			return gGroupList[j][0]; 
	}
	return 0; 
}

function GX_UpdateTreeWidgetFromServer(str){	
	var xmlstr = GXRDE_GetSVGMetaXML(gSVGFilename,'xmlFileCallback');   	
}

function GX_CreateFillWidget(){
	 WAL_createModelessWindow('fillwidget', '480', '480', 'fillOK', 'fillCancel');
	 
	 WAL_createTab('fillTabContent', '310', 'GX_GradTabHandler');
	 
}

function GX_GradTabHandler(tabIndex){
	
	//Debug_Message('You clicked Tab=' + tabIndex); 
	switch(tabIndex)
	{
	case 0:
		 $('#gradparam').hide(); 
		break; 
	case 1: 
		$('#gradparam').show(); 
		break;
	case 2:
		$('#gradparam').show(); 
		break;
	default:
		break; 
		
	}
	
}

function GX_HandlerForGradSliderChange(value){
	
}


function OnPointerMarkerMouseMove(evt)
{
	  var markerNode = evt.target;	
	  gsvgRootNode.setAttribute("cursor", 'pointer');  	   
	  if(bPointerMove != true)
		  return ; 	  
	  markerNode.setAttribute('r', '10');
	  var newObjDim = new sDimension();
	  var ClientX, ClientY; 
	  ClientX = new Number(evt.clientX - gClientXOffset); 
	  ClientY = new Number(evt.clientY- gClientYOffset);
	 
	  relX = new Number(ClientX);
      relY = new Number(ClientY);
      relX = (relX - gOrigMousePosX)*gZoomFactor;
      relY = (relY - gOrigMousePosY)*gZoomFactor;
      
      newObjDim.x = gOrigPointerPos.x + relX;
      newObjDim.y = gOrigPointerPos.y + relY;   
      newObjDim.width = 10; 
      newObjDim.height = 10;  
     // GX_UpdateMarkers(newObjDim, true, true);
      if(gMoveIndicatorPath == true){
    	  gIndicatorPath[1][1] = newObjDim.x;
          gIndicatorPath[1][2] = newObjDim.y;
          gIndicatorPath[1][3] = 'POINT'; 
      	GX_ConvertArrayToPathData('indicatorpath', gIndicatorPath);    	  
      }
}
 
function OnPointerMarkerMouseDown(evt)
{
	  var markerNode = evt.target; 
	  var ClientX = new Number(evt.clientX - gClientXOffset); 
	  var ClientY =  new Number(evt.clientY- gClientYOffset); 	 
	  if(gObjectEditMode != 'ANIMATION_EDIT_MODE')
			return; 
	gsvgRootNode.setAttribute("cursor", 'pointer');
	if(bPointerMove == false){
		bPointerMove = true; 
		gMoveIndicatorPath =  true; 
		gOrigMousePosX = ClientX;
        gOrigMousePosY = ClientY;
        var x = markerNode.getAttribute('cx');
        var y = markerNode.getAttribute('cy');
        gOrigPointerPos.x =  new Number(x);
        gOrigPointerPos.y =  new Number(y);        
	} 
	else{
		bPointerMove= false; 
		markerNode.setAttribute('r', '6'); 
		gMoveIndicatorPath = false; 
	}
		
}


function OnPointerMarkerMouseOut(evt)
{
	var markerNode = evt.target;
	 gsvgRootNode.setAttribute("cursor", 'auto');  
	 markerNode.setAttribute('r', '6');
	  
}

function GX_Smoothen(){
	
	
	//get the current selected object 
	if(!gCurrentObjectSelected) return ; 
	
	var objType = gCurrentObjectSelected.classList[1];
	if(objType !=  'FREEDRAW_PATH')
		return ; 
	
	//now get the path data values
	if(gOrigFreedrawPathVal){
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', gOrigFreedrawPathVal, true, false); 
		gOrigFreedrawPathVal = 0;
	}		
	else
		{
			gOrigFreedrawPathVal = gCurrentObjectSelected.getAttribute('d'); 
		//smoothen the points
			var dval = Smoothen(gOrigFreedrawPathVal);	
			if(!dval)
				return; 
		//now set the path data point of the current object
			GX_SetObjectAttribute(gCurrentObjectSelected, 'd', dval, true, false);
		}
	 
}

function Smoothen(Points){
	
	//get all the points and convert into array of x y separated by ','
	var srcArr = Points.split(' ');
	var dstArr=[]; 
	var dstStr = ''; 
	var newX, newY, srcPoint; 
	var avgX, avgY; 
	var firstPoint = srcArr.splice(0,1);    
	dstStr = firstPoint+' '; 
	var numPts = new Number(10); 
	
	with(Math){
		for(var i= numPts; i < srcArr.length-1; i++){
			//now start from 5th index onwwards 
			avgX = avgY = 0; 
			if(i < srcArr.length - numPts){
				for(var j = 0-numPts; j < numPts; j++){
					srcPoint = srcArr[i + j].split(','); 
					var checkM = srcArr[i + j].substring(0,1);
					checkM =  checkM.toUpperCase(); 
					if(checkM == 'M'){
						Debug_Message("Smoothening cannot be applied as the Path seems to be broken"); 
						return 0;  
					}
					avgX += new Number(srcPoint[0]); 
					avgY += new Number(srcPoint[1]); 
				}
				//avgX /= 10; 
				//avgY /= 10;
				avgX = round(avgX / (2*numPts));
				avgY = round(avgY / (2*numPts));
				dstStr += avgX + ',' +  avgY + ' '; 
			}//if(i < srcArr.length - numPts)
			else{
				srcPoint = srcArr[i].split(',')
				dstStr += srcPoint[0] + ',' + srcPoint[1] + ' '; 
			}		
		}
	}
	return dstStr; 
	
	
	//once done then conbvert into a string and return the valeue
	
	
}
var gImageObjID = 0; 
function GX_AddNewImageSVG(URL){		
	GX_AddNewSVGObject('image', URL,'newImageCallbackFn'); 
	newImageCallbackFn = function(respStr){
		//WAL_showModalWindow(gImageDlg,"GX_ImageLoadOK", "" );	
		GX_ReloadSVG(gNewObjectID, true); 
		BlockUIinAjax(true);	 
		setTimeout(function(){		
			$('#gripper').hide(); 
			BlockUIinAjax(false); 		
	 			}, 10000);
		
	}
	//BlockUIinAjax(true);	 
}

function GX_ImageLoadOK(){
	var nodename = 'IMAGE'; 
	var objectID = gImageObjID; 
	var currNodeID = 0; 	
	BlockUIinAjax(true);
	if(nodename == 'IMAGE')
	{
		currNodeID = objectID; 
		node = document.getElementById("resID");
		node.setAttribute('value',currNodeID ); 
		node = document.getElementById("resType");
		node.setAttribute('value','IMAGE');	
		//now first remove the data-background and then save it before doing anything else 
		node = document.getElementById("imgFname");
		var fname = node.getAttribute('value'); 	
		Debug_Message('File name:' +  fname); 
		var itemname = "Image:(" + fname + ")";		
		node = document.getElementById("imgFile");
		var filename = node.getAttribute('value');		
		document.getElementById("imgForm").submit();	
		//BlockUIinAjax(false);
		//return ; 
	}
	//BlockUIinAjax(false);	
}
function GX_updateImageFilename(filename)
{
	node = document.getElementById("imgFname");
	var fakepathlen = 12; 
	var str = filename.substring(0,12 ); 
	var fakestr = "C:\\fakepath\\"; //typically Chrome/IE specific issue
	////Debug_Message("Fake str = " + fakestr); 
	//Debug_Message("str = " + str); 
	if(str ==fakestr )
	{
		//Debug_Message("Need to Remove fakepath");
		str = filename.substring(fakestr.length, filename.length); 
		//Debug_Message("str = " + str); 
		node.setAttribute("value", str); 
	}
	else
		node.setAttribute("value", filename); 
	//Debug_Message("UIH_updateFilename:Filname = " + node.getAttribute('value'));
	
}

function OnDivPathMarkerDragStart(event, ui){
	bMarkerMove = true;	
	GX_SetIndicatorPath(event.target); 
}
function OnDivPathMarkerDrag(event, ui){
	
	 if (bMarkerMove == true) {
	        //now also set the parameters corresponding to the marker index
	        relX = new Number(ui.position.left - ui.originalPosition.left);
	        relY = new Number(ui.position.top - ui.originalPosition.top);	
	        relX *= gZoomFactor; 
	        relY *= gZoomFactor;
	        var newcX, newcY;
	        newcX = gCurrSelectedObjectDim.x;
	        newcY = gCurrSelectedObjectDim.y;
	        var num = new Number(newcX);
	        num += relX;
	       // markerNode.setAttribute("cx", num);
	        newcX = num; 
	        
	        var num = new Number(newcY);
	        num += relY;
	       // markerNode.setAttribute("cy", num);
	        newcY = num;              
	        
	        //_rm is this the cause of unpredicatble mousedown event  ?? 
	        if(gMouseMoveCounter >= 10)
	        {       
	        	gIndicatorPath[1][1] = newcX-gPanX;
	            gIndicatorPath[1][2] = newcY-gPanY;
	            gIndicatorPath[1][3] = 'POINT'; 
	        	GX_ConvertArrayToPathData('indicatorpath', gIndicatorPath);
	        	gMouseMoveCounter = 0; 
	        }
	        else
	        	gMouseMoveCounter++;      
	        //call the update path and add markers. could be a major overhead
	    }//bMarkerMove
}

function OnDivPathMarkerDragStop(event, ui){
	 var pathNode = document.getElementById("indicatorpath");    
	 var currentPos;
	 var arrLen = new Number(gPathDataArray.length); 	    
	relX = new Number(ui.position.left - ui.originalPosition.left);
    relY = new Number(ui.position.top - ui.originalPosition.top);
    relX = Math.round(relX * gZoomFactor); 
   
    var markerNode = event.target; 
    relY = Math.round(relY * gZoomFactor); 
    bMarkerMove = false;
    gsvgRootNode.setAttribute("cursor", "auto");
    //now set the new path here 
    var newpathvalue = new Number(gPathDataArray[gpathSegIndex][1]); 
    newpathvalue += relX; 
    if(gSnapToGrid == true){
    	newpathvalue =  GX_ConvertToMultipleOf(newpathvalue, 10);    	
    }
    gPathDataArray[gpathSegIndex][1] = newpathvalue;
    
    newpathvalue = new Number(gPathDataArray[gpathSegIndex][2]);
    newpathvalue += relY;
    if(gSnapToGrid == true)
    {
    	newpathvalue =  GX_ConvertToMultipleOf(newpathvalue, 10);
    }
    gPathDataArray[gpathSegIndex][2] = newpathvalue; 
    markerNode.setAttribute('data-position',gPathDataArray[gpathSegIndex][1] + ',' + gPathDataArray[gpathSegIndex][2] ); 
    GX_SetMarkerNodeSelection(gCurrentMarkerNode, false);
    GX_UpdatePathData(gCurrentObjectSelected); 
    //GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);       
    pathNode.setAttribute("visibility", "hidden");
    gIndicatorPath = []; 
    //GX_SetSelection(gCurrentObjectSelected, true, true); 
   
}



function GX_ConvertToMultipleOf(val, multiple){
	var result; 
	with (Math){
		result = round(val / 10);
		result *= 10; 
		return result; 
	}
}

function GX_DeleteMarkerObject(objectID, markerType){	
	//create the appropriate ID for the marker to be removed
	var markerID = objectID + '_' + markerType.toUpperCase(); 
	
	//remove the marker from the Remote 
	GX_DeleteObject(markerID);	

	//change the markertype attribute on the target object 
	var objNode = document.getElementById(objectID); 
	objNode.setAttribute(markerType, ''); 	
}

function GX_Marker_ColorWidgetOK(event){
	if(gCurrentMarkerNode){		
		var colWdgt = document.getElementById('marker_colorpickwidget'); 
		if(!colWdgt)
		 return ;		
		var colAttrName = colWdgt.getAttribute('data-attrName');
		var colorval = WAL_getColorPickerValue('marker_colorpickwidget');
		GX_SetObjectAttribute(gCurrentMarkerNode, colAttrName, colorval, true, false);
		GX_SetObjectAttribute(gCurrentMarkerNode, "", "", true, false);
		
	}
}

function GX_Marker_ColorWidgetCANCEL(event){
	if(!gCurrentMarkerNode)
		return ;
	var colWdgt = document.getElementById('marker_colorpickwidget'); 
	if(!colWdgt)
		return ;
	var colAttrName = colWdgt.getAttribute('data-attrName');
	var initcolAttrValue = colWdgt.getAttribute('data-attrValue');
	//restoring the original color 
	gCurrentMarkerNode.setAttribute(colAttrName, initcolAttrValue );
}

function GX_GetCurrentMarkerSelection(){	
	if(! ((gCurrentObjectSelected)&&(gCurrentObjectSelected.classList[0] == 'SVG_PATH_OBJECT')) )
		return ;	
	var markerType = WAL_getDropdownListSelection('markerTypeListDDL');
	if(markerType == 'None')
		return 0; 
	markerType = gMarkerType[markerType].toUpperCase();		
	var markerID = gCurrentObjectSelected.id + '_' + markerType;		
	var MarkerNode = document.getElementById(markerID);
	if(MarkerNode){
		gPrevAttributeList = EL_getObjectAttributes(MarkerNode);
		return MarkerNode;
	}		
	 return 0; 
}
var bMoveObject = false; 
function OnKeyDown(event){
	
	//alert('Key ID = ' +  event.keyIdentifier);
	var myKey = String.fromCharCode(event.keyCode);
	if((gTooltipSrc) && (myKey == 'H')){		
		GX_OpenHelp(gTooltipSrc); 
		return ; 
	}		
		
	gControlKey = false; 
	if(event.ctrlKey == true){
		gControlKey = true; 
	}
	if(!gCurrentObjectSelected)
		return ; 
	var pos = $(gCurrGripperSel).position(); 
	var left = new Number(pos.left); 
	var top =  new Number(pos.top); 
	//var keyID = event.keyIdentifier.toUpperCase(); 
	var keyID = event.key.toUpperCase(); 
	
	bMoveObject = false; 
	var relX = new Number(0);
	var relY = new Number(0);  
	switch(keyID){
	case 'ARROWLEFT':
		relX = -1; 
		bMoveObject = true;  
		break;
	case 'ARROWRIGHT':
		relX = 1; 
		bMoveObject = true; 
		break; 
	case 'ARROWUP':
		relY = -1; 
		bMoveObject = true; 
		break; 
	case 'ARROWDOWN':
		relY = 1; 
		bMoveObject = true; 
		break;
		//rM removing the Key baord delete option as it popsup with text editing
	/*case 'U+007F':
		 WAL_showModalWindow('deleteConfirmDlg','', ''); 
		break;
		*/ 
	default:
		break; 
	}
	if(bMoveObject == true){
		left = left + relX; 
		top = top + relY; 
		$(gCurrGripperSel).css({left : left +'px', top : top + 'px'}); 
		GX_MoveSelectedObject(relX, relY); 
		GX_UpdatePropertyOnUI('POSITION', gCurrSelectedObjectDim);
	}
	event.stopPropagation(); 
}

function GX_MoveSelectedObject(relX, relY){
	
	var objectType =  gCurrentObjectSelected.classList[0];
    var newObjDim = new sDimension();   
    if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_IMAGE_OBJECT'))
    {
    	
    	
    	newObjDim.x = gCurrSelectedObjectDim.x + relX; 
        newObjDim.y = gCurrSelectedObjectDim.y + relY;   	
        if(gSnapToGrid == true){
        	newObjDim.x = GX_ConvertToMultipleOf(newObjDim.x, 10); 
        	newObjDim.y = GX_ConvertToMultipleOf(newObjDim.y, 10); 
        }
        newObjDim.width = gCurrSelectedObjectDim.width; 
        newObjDim.height =  gCurrSelectedObjectDim.height; 
        newObjDim.rotate = gCurrSelectedObjectDim.rotate;          
        newObjDim.rotCentreX = Math.round(newObjDim.x + newObjDim.width/2);
        newObjDim.rotCentreY = Math.round(newObjDim.y + newObjDim.height/2);
        newObjDim.radius = gCurrSelectedObjectDim.radius;   
        if(gCurrentObjectSelected.classList[1]== 'ELLIPSE')
        {
        	//newObjDim.x = newObjDim.rotCentreX;
           // newObjDim.y = newObjDim.rotCentreY; 
        } 
        else if(gCurrentObjectSelected.classList[1]== 'CIRCLE')
        {
        	//newObjDim.x = newObjDim.rotCentreX;
           // newObjDim.y = newObjDim.rotCentreY; 
        }  
        if(objectType == 'SVG_TEXT_OBJECT'){
        	GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
        }
        else
        	retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "DIMENSION", newObjDim, false, false);
        if(newObjDim.rotate != 0)
        	GX_SetTransformProperty(gCurrentObjectSelected, 'rotate', newObjDim);
        	
    }  
    else if(objectType == 'SVG_TEXT_OBJECT'){    		
            newObjDim.x = relX ;//gCurrSelectedObjectDim.x+relX;
    	    newObjDim.y = relY ;// gCurrSelectedObjectDim.y+relY;  
    	    newObjDim.rotate = gCurrSelectedObjectDim.rotate;//.
    	    newObjDim.rotCentreX = gCurrSelectedObjectDim.rotCentreX +relX ;
    	    newObjDim.rotCentreY = gCurrSelectedObjectDim.rotCentreY + relY; 
        	GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
        	GX_UpdatePosFromTranslation(gCurrentObjectSelected);
    }    
	else if(objectType == 'GROUP'){    		
		newObjDim.x = gCurrSelectedObjectDim.x+relX; 
        newObjDim.y = gCurrSelectedObjectDim.y+relY;  
        if(gSnapToGrid == true){
        	newObjDim.x = GX_ConvertToMultipleOf(newObjDim.x, 10); 
        	newObjDim.y = GX_ConvertToMultipleOf(newObjDim.y, 10); 
        }
       // Debug_Message("NewX="+newObjDim.x + "NewY="+ newObjDim.y +"gCurrSelectedObjectDim.x=" + gCurrSelectedObjectDim.x + "relX=" + relX);
		GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);
		//GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", newObjDim, false, false);
		
	}   
	else if(objectType == 'SVG_PATH_OBJECT')
	{		
    	newObjDim.x = relX ;//gCurrSelectedObjectDim.x+relX;
    	newObjDim.y = relY ;// gCurrSelectedObjectDim.y+relY;          
    	GX_SetTransformProperty(gCurrentObjectSelected, 'translate',newObjDim);    	
		GX_UpdatePathData(gCurrentObjectSelected); 
		//GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
	}
   // if(objectType == 'SVG_SHAPE_OBJECT')
    //	GX_UpdatePropertyOnUI('DIMENSION', newObjDim); 
    //positiong the editor accoridng to new text position 
    if(objectType == 'SVG_TEXT_OBJECT')
    	GX_MakeTextEditable(gCurrentObjectSelected); 

    gCurrSelectedObjectDim = GX_GetRectObjectDim(gCurrentObjectSelected);
    GX_SetRectObjectDim(gCurrGrabber,gCurrSelectedObjectDim);
    gGrabberDim = GX_GetRectObjectDim(gCurrGrabber);
   
}

function GX_DeleteConfirmDlgOK(){
	
	if(gEnableMultiSelection == true){
		for(var k=0; k < gMultiNodeArray.length; k++){
			var objNode =  document.getElementById(gMultiNodeArray[k]);
			GX_RemoveObject(objNode); 
		}
		WAL_expandAllTreeItems(gTreeNodeID, true);
		var gripperSel = '#gripper'; 
		$(gripperSel)[0].setAttribute('visibility', 'hidden'); 
		return ; 
		
	}
	if(!gCurrentObjectSelected)
		return ; 
	 GX_RemoveObject(gCurrentObjectSelected); 
	 WAL_expandAllTreeItems(gTreeNodeID, true);
}

function GX_PopulateObjectList(ObjectType)
{
	 var ObjectList = new Array(); 
	 var animInfo; 
	 var JQSel = '';
	 if(ObjectType == 'SHAPE_OBJECT')
		 JQSel = '.SVG_SHAPE_OBJECT'; 
	 else  if(ObjectType == 'PATH_OBJECT')
		 JQSel = '.SVG_PATH_OBJECT'; 
	 else if(ObjectType == 'ALL_OBJECTS')
	 {
		 JQSel = '.SVG_SHAPE_OBJECT';	 
		// gAnimList = new Array(); 
	 }		 
    var size = $(JQSel).size(); 
    var num = $(JQSel).size();
    $(JQSel).attr('visibility', 'visible'); 
    var visiValue = ''; 
	 var DOMArr = $(JQSel).toArray(); 
	 for(var k=0; k < DOMArr.length; k++)
	 {
		var objID = DOMArr[k].getAttribute('id'); 			
		var objDim = GX_GetRectObjectDim($('#'+objID)[0]);
		var left = new Number(objDim.x); 
		var top = new Number(objDim.y); 
		var right = new Number(left + objDim.width); 
		var bottom = new Number(top + objDim.height); 
		
		var objarr = [objID, 'SVG_SHAPE_OBJECT', left, top, right, bottom ]; 	
		ObjectList.push(objarr); 
		
		//now find animation object child 
		var childNode = DOMArr[k].firstElementChild;  		
		while(childNode)
		{
			GX_UpdateAnimInfoInList(childNode);	
			childNode = childNode.nextSibling; 
			
		} 	//while		
	 }
	if(ObjectType == 'ALL_OBJECTS')
	{
		 JQSel = '.SVG_PATH_OBJECT'; 
	 	 var size = $(JQSel).size(); 
	     var num = $(JQSel).size();
	     $(JQSel).attr('visibility', 'visible'); 
	 	 var DOMArr1 = $(JQSel).toArray(); 
	 	 for(var k=0; k < DOMArr1.length; k++)
	 	 {
	 		var objID = DOMArr1[k].getAttribute('id'); 	
	 		var objDim = GX_GetRectObjectDim($('#'+objID)[0]);
			var left = new Number(objDim.x); 
			var top = new Number(objDim.y); 
			var right = new Number(left + objDim.width); 
			var bottom = new Number(top + objDim.height); 
	 		var objarr = [objID, 'SVG_PATH_OBJECT', left, top, right, bottom]; 		 
	 		ObjectList.push(objarr); 
	 		
	 		var childNode = DOMArr1[k].firstElementChild;  		
	 		while(childNode)
	 		{
	 			GX_UpdateAnimInfoInList(childNode);	
	 			childNode = childNode.nextSibling; 
	 			
	 		} 	//while
	 	 } 	 	
	 	 
	 	 //text object 
	 	 JQSel = '.SVG_TEXT_OBJECT'; 
	 	 var size = $(JQSel).size(); 
	     var num = $(JQSel).size();
	     $(JQSel).attr('visibility', 'visible'); 
	 	 var DOMArr1 = $(JQSel).toArray(); 
	 	 for(var k=0; k < DOMArr1.length; k++)
	 	 {
	 		var objID = DOMArr1[k].getAttribute('id'); 	
	 		var objDim = GX_GetRectObjectDim($('#'+objID)[0]);
			var left = new Number(objDim.x); 
			var top = new Number(objDim.y); 
			var right = new Number(left + objDim.width); 
			var bottom = new Number(top + objDim.height); 
			
	 		var objarr = [objID, 'SVG_TEXT_OBJECT', left, top, right, bottom]; 		 
	 		ObjectList.push(objarr); 
	 		
	 		var childNode = DOMArr1[k].firstElementChild;  		
	 		while(childNode)
	 		{
	 			GX_UpdateAnimInfoInList(childNode);	
	 			childNode = childNode.nextSibling; 
	 			
	 		} 	//while
	 	 } 	 
	 	 
	 	 
	 	 //image object 
	 	 JQSel = '.SVG_IMAGE_OBJECT'; 
	 	 var size = $(JQSel).size(); 
	     var num = $(JQSel).size();
	     $(JQSel).attr('visibility', 'visible'); 
	 	 var DOMArr1 = $(JQSel).toArray(); 
	 	 for(var k=0; k < DOMArr1.length; k++)
	 	 {
	 		var objID = DOMArr1[k].getAttribute('id'); 	
	 		var objDim = GX_GetRectObjectDim($('#'+objID)[0]);
			var left = new Number(objDim.x); 
			var top = new Number(objDim.y); 
			var right = new Number(left + objDim.width); 
			var bottom = new Number(top + objDim.height); 
			
	 		var objarr = [objID, 'SVG_IMAGE_OBJECT', left, top, right, bottom]; 		 
	 		ObjectList.push(objarr); 
	 		
	 		var childNode = DOMArr1[k].firstElementChild;  		
	 		while(childNode)
	 		{
	 			GX_UpdateAnimInfoInList(childNode);	
	 			childNode = childNode.nextSibling; 
	 			
	 		} 	//while
	 	 }
	} 		
	
	return ObjectList;  	 	
}


function GX_IsWithinROI(ObjLeft, ObjTop, ObjRight, ObjBottom, RoILeft, RoITop, RoIRight, RoIBottom){
	var bRetVal = false; 
	with (Math){
		var deltaLeft  = ObjLeft - RoILeft; 
		var deltaRight = RoIRight - ObjRight;
		var deltaTop  = ObjTop - RoITop; 
		var deltaBottom  = RoIBottom - ObjBottom; 
	}
	if( (deltaLeft < 0) || (deltaRight < 0) || (deltaTop < 0) || (deltaBottom < 0) )
		bRetVal = false; 
	else
		bRetVal = true; 	
	return bRetVal;	
}
var minLeft, minTop, maxRight, maxBottom ; 
function GX_GetObjectsWithinRoI(RoIDim, objectList){
	//run a loop around list objectList
	gObjectListInRoI = new Array(); 	
	var RoILeft = new Number(RoIDim.x); 
	var RoITop  = new Number(RoIDim.y); 
	var RoIRight = new Number(RoIDim.x + RoIDim.width); 
	var RoIBottom = new Number(RoIDim.y + RoIDim.height); 
	
	var ObjLeft, ObjTop, ObjRight, ObjBottom; 
	var objItem ; 
	var bObjectinRoI = false; 
	var newItem ; 
	var objNode;
	//check if target object is within the RoI 
	minLeft = minTop = new Number(5000); 
	maxRight = maxBottom = new Number(0); 	
	for(var j = 0; j < gObjectList.length; j++){		 
		objItem = gObjectList[j]; 
		ObjLeft = new Number(objItem[2]);
		ObjTop = new Number(objItem[3]);
		ObjRight = new Number(objItem[4]); 
		ObjBottom = new Number(objItem[5]);
		bObjectinRoI = GX_IsWithinROI(ObjLeft, ObjTop, ObjRight, ObjBottom, RoILeft, RoITop, RoIRight, RoIBottom);
		if(bObjectinRoI == true){
			objNode =  document.getElementById(objItem[0]); 
			GX_SelectObjectInMultiMode(objNode); 
			minLeft = Math.min(ObjLeft, minLeft); 
			minTop = Math.min(ObjTop, minTop); 
			maxRight  = Math.max(ObjRight, maxRight); 
			maxBottom = Math.max(ObjBottom, maxBottom); 
		}
	}	
	//if yes then put into a new array
	//now set the dimension of the RoI to the tightest fitting rectangle 
	var offset = new Number(10); 
	RoIDim.x = minLeft - offset; 
	RoIDim.y = minTop - offset; 
	RoIDim.width = new Number(maxRight - minLeft + offset);
	RoIDim.height = new Number(maxBottom - minTop + offset); 
	return RoIDim; 	
}


function GX_ApplyPropertyToMultipleObjects(attrName, value){
	
	if(gEnableMultiSelection != true)
		return ;
	
	var objNode = 0; 	
	
	for(var i=0; i < gMultiNodeArray.length; i++){
		$('#' +gMultiNodeArray[i])[0].setAttribute(attrName, value);		
	}
}


function GX_UpdatePropertyForMultipleObjects(attrName, attrValue){
	if(gbMultiSelection == true){
		var objectAttr =  new sObjAttrParam();	
		for(var j=0; j < gMultiNodeArray.length; j++){			
			objectAttr.ID = gMultiNodeArray[j]; 
			objectAttr.name = attrName; 
			objectAttr.currValue = attrValue; 
			objectAttr.prevValue = ''; 
			EL_UpdateCompactList(objectAttr, gCompactEditList); 
		}
	}
}

function GX_ImportObject(srcFileName){	
	var srcID = srcFileName.substring(0,srcFileName.length-4); 
	var newObjID = GXRDE_GetUniqueID('SVG_'); 
	var retVal = GXRDE_ImportObject(srcFileName,srcID, newObjID); 	
	if(retVal != 'ERROR')
	{		
		parentID = 'SVGOBJECTCONTAINER'; 
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+parentID);	
		var svgFname = gSVGFilename; 
		GX_CloseSVGFile();
	   	 var dataNode = document.getElementById('objectcontainer');   	 
	   	 dataNode.innerHTML += retVal;		   	
	  	 GX_InitializeDocument(svgFname);
	  	 gCurrObjID = newObjID; 
	  	var xmlstr = GXRDE_GetSVGMetaXML(svgFname, 'xmlFileCallback');    
	    
	}
	//WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+newObjID);		
	//return newObjID; 
}

function GX_ExportObject(){	
		
	var JQSel = "#" + "objectNameIP";	
	var objName  = $(JQSel).val();
    if(!objName)
    {
    	Debug_Message("Please Enter a Valid Name ");
    	$(JQSel).val("");
    	
    	WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );
    	return; 
    }
    var bretval = IsNameValid(objName); 
    if(bretval == false)
    {
    	Debug_Message("Enter a Name without any Blank"); 
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGExportDlgID, "GX_ExportObject()", "" );	
    	return;     	
    }  
    JQSel = '#objecttitleIP'; 
    var Title = $(JQSel).val();
    if(!Title)
    {
    	Debug_Message("Title Field cannot be Empty");
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGExportDlgID, "GX_ExportObject()", "" );
    	return; 
    }
    JQSel = '#categoryIP'; 
    var category = $(JQSel).val();
    if(!category)
    {
    	Debug_Message("Category Field cannot be Empty");
    	$(JQSel).val("");
    	WAL_showModalWindow(gSVGExportDlgID, "GX_ExportObject()", "" );
    	return; 
    }
    
    var tgtObjID; 
    if( (gCurrentObjectSelected) && (gCurrentObjectSelected.classList[0] == 'GROUP'))
    	tgtObjID = gCurrentObjectSelected.id; 
    else
    	tgtObjID = 'BASEGROUP'; 	
	var retVal = GXRDE_ExportObject(objName,tgtObjID, Title, category) ;    
   	if(retval == "ALREADY_EXISTS")
   	{
   		Debug_Message("This File Name Already Exists");
   		$(JQSel).val("");
   		WAL_showModalWindow(gSVGExportDlgID, "GX_ExportObject()", "" );
    	return; 
   	}   	
}

function OnGridRowSelection(obj){
	if(obj){
		gImportShapeFileName = obj.filename; 		
	}	
}

function GX_ImportShapedlgOK(){
	var rowindex = WAL_getCurrentGridRowSelection('importlistgrid');
	var data = WAL_getGridRowData('importlistgrid', rowindex);
	gImportShapeFileName = data.filename; 
	if(gImportShapeFileName)
		GX_ImportObject(gImportShapeFileName); 
}

var gEditorWidth =0; 
var gEditorHeight= 0 ; 
function GX_SetCanvasDimension(width, height){
	  
	  //setting the new dimension
	  $('#canvas').width(width); 
	  $('#canvas').height(height); 
	  //updating the previewcanvas as well 
	  $('#previewcanvas').width(width); 
	  $('#previewcanvas').height(height); 	  
	  gEditorWidth= $('#editor_div').width(); 
	  gEditorHeight = $('#editor_div').height();
	  
	  var canvasWidth = $('#canvas').width(); 
	  var canvasHeight = $('#canvas').height(); 
	  var canvLeft = Math.round((gEditorWidth - canvasWidth)/2 + 15); 
	  if(canvLeft < 0)
		  canvLeft = 15; 
	  
	  var canvTop = Math.round((gEditorHeight - canvasHeight)/4 +15) ;
	  if(canvTop < 0)
		  canvTop = 15; 
	  $('#canvas')[0].style.left = canvLeft +'px'; 
	  $('#canvas')[0].style.top = canvTop + 'px'; 
	  $('#previewcanvas')[0].style.left = canvLeft +'px'; 
	  $('#previewcanvas')[0].style.top = canvTop + 'px'; 
	  gCurrentCanvasDim = GX_GetCanvasDimension(); 
	  GX_UpdateCanvasLimits(gCurrentCanvasDim); 
}

function GX_GetCanvasDimension(){
	gCanvasNode = document.getElementById('canvas');
	var JQSel = '#canvas'; 
	var canvasPos = $(JQSel).position();
	var canvasWidth = $(JQSel).width(); 
	var canvasHeight = $(JQSel).height(); 
	CanvasDim = new sDimension(); 
	CanvasDim.x  = canvasPos.left; 
	CanvasDim.y   = canvasPos.top;
	CanvasDim.width = canvasWidth;
	CanvasDim.height = canvasHeight;
	return CanvasDim; 
}
function GX_UpdateCanvasLimits(canvDim){	
	 var freedrawNode = document.getElementById('freedraw'); 
	 
	 gMaxLeft = new Number(canvDim.x);
	 gMaxTop = new Number(canvDim.y); 
	 gMaxRight = gMaxLeft + canvDim.width;   
	 gMaxBottom = gMaxTop + canvDim.height; 
	 if(freedrawNode){
		 freedrawNode.setAttribute('width', canvDim.width * 0.9); 
		 freedrawNode.setAttribute('height', canvDim.height * 0.9);	
	 }	 	 
}

function GX_InitializePropertyTab(){
	
	 WAL_createNumberInput("lposIP", '80px', gDDLHeight,  "GX_EditBoxValueChange", true, 1280, 0,1);
	 WAL_createNumberInput("tposIP", '80px', gDDLHeight, "GX_EditBoxValueChange", true, 1000, 0,1);
	 WAL_createNumberInput("radiusIP", '80px', gDDLHeight,  "GX_EditBoxValueChange", true, 50, 0,1);
	 
	 WAL_createNumberInput("widthIP", '80px', gDDLHeight, "GX_EditBoxValueChange",true, 1280, 0,1);
	 WAL_createNumberInput("heightIP", '80px', gDDLHeight, "GX_EditBoxValueChange", true, 1000, 0,1); 	  
	
	 
	 WAL_createNumberInput("rotateIP", '80px', gDDLHeight, "GX_EditBoxValueChange",true, 180, -180,1);	   
	
	 var gradList = ['none', 'item2', '�tem3'];
	 WAL_createDropdownList('gradlistDDL', '140', gDDLHeight, false, gradList, "GX_DDLHandler", '250', '150');
	 
	 //stroke interface
	 WAL_createCustomButton('stroke_color_icon', 'GX_ToolbarHandler');
	 WAL_createNumberInput("strokeWeightIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 100,0,1);
	 WAL_setNumberInputValue('strokeWeightIP', 1, false);
	// var listBoxSrc = []; 
	    var listBoxSrc = new Array();
	    var image=""; 
	    var dashValue; 
	    for (i = 0; i < 9; i++) {
	       image = 'dash' + i + '.svg';          
	        var html = "<div style='padding: 0px; margin: 0px; height: 20px; float: left;'><img width='auto' style='float: left; margin-top: 1px; margin-right: 2px;' src='../USER_DATA/shared/Stroke_Dash/" + image + "'/></div>";
	        switch(i)
	        {
	        case 0:
	        	dashValue = ""; 
	        	break; 
	        case 1:
	        	dashValue = "1,1"; 
	        	break ; 
	        case 2:
	        	dashValue = "3,3"; 
	        	break ; 
	        case 3:
	        	dashValue = "5,5"; 
	        	break ; 
	        case 4:
	        	dashValue = "6,3"; 
	        	break ; 
	        case 5:
	        	dashValue = "10,4"; 
	        	break ;	
	        case 6:
	        	dashValue = "14,4"; 
	        	break ;	
	        case 7:
	        	dashValue = "14,4,4,4"; 
	        	break ;	
	        case 8:
	        	dashValue = "20,4,6,4"; 
	        	break ;	       	
	        default:
	        	break;	        	
	        }
	        listBoxSrc[i] = { html: html, value:dashValue};
	    }	        
	 WAL_createDropdownList('strokedashDDL', '80', gDDLHeight, false, listBoxSrc, "GX_DDLHandler", '100', '120');    
	 WAL_createSlider('opacitySlider', '130px','12px', true, 0, 100, 1,25, true, false ,'GX_OpacitySliderHandler', false, '');
	 WAL_setSliderValue('opacitySlider', '100'); 	
	
	 WAL_createCheckBox('pathclose', 'GX_CheckValueChange', '25', '20' , '13', false, false);
	 WAL_createNumberInput("radiusXIP", '50px', gDDLHeight, "GX_EditBoxValueChange",true,300,0,1);
	 WAL_createNumberInput("radiusYIP", '50px', gDDLHeight, "GX_EditBoxValueChange",true, 300,0, 1);
	 WAL_createCheckBox('largearcCheckBox', 'GX_CheckValueChange', '30', '20' , '13', false, false);
	 WAL_createCheckBox('sweepCheckBox', 'GX_CheckValueChange', '30', '20' , '13', false, false);	 
	 WAL_createNumberInput("lengthIP", '80px', gDDLHeight, "GX_EditBoxValueChange",true, 500,0,1);
	 
	 WAL_createColorPickerWindow("colorpickwidget", "colorpicker", '350', '250', "okbtn", "cancelbtn");
	 GX_CreateGradientWidget('gradientDlg');
	 
	 //font element creation
	 var fontFamilyValue = ['default','Georgia','Palatino Linotype','Book Antiqua','Palatino','Times New Roman','Times','Arial','Helvetica','Arial Black','Gadget','Comic Sans MS','Cursive','Impact','Charcoal', 'Lucida Sans Unicode','Lucida Grande','Tahoma','Geneva','Trebuchet MS','Verdana' ,'Courier New' ,'Lucida Console'];
	 var fontFamilyDisplay =["Default", 
	                            "<span style='font-family:Georgia'>Georgia</span>",
	                            "<span style='font-family:\"Palatino Linotype\", serif'>Palatino Linotype</span>",
	                            "<span style='font-family:\"Book Antiqua\", serif' >Book Antiqua</span>",
	                            "<span style='font-family:Palatino, serif'>Palatino</span>",
	                            "<span style='font-family:\"Times New Roman\",serif'>Times New Roman</span>",
	                            "<span style='font-family:Times, serif'>Times</span>",
	                            "<span style='font-family:Arial, sans-serif'>Arial</span>",
	                            "<span style='font-family:Helvetica, sans-serif'>Helvetica</span>",
	                            "<span style='font-family:\"Arial Black\", sans-serif'>Arial Black</span>",                              
	                            "<span style='font-family:Gadget, sans-serif'>Gadget</span>",
	                            "<span style='font-family:\"Comic Sans MS\", sans-serif'>Comic Sans MS</span>",
	                            "<span style='font-family:cursive'>Cursive</span>",
	                            "<span style='font-family:Impact'>Impact</span>",
	                            "<span style='font-family:Charcoal, sans-serif'>Charcoal</span>",
	                            "<span style='font-family:\"Lucida Sans Unicode\", sans-serif'>Lucida Sans Unicode</span>",
	                            "<span style='font-family:\"Lucida Grande\", sans-serif'>Lucida Grande</span>",
	                            "<span style='font-family:Tahoma, sans-serif'>Tahoma</span>",
	                            "<span style='font-family:Geneva, sans-serif'>Geneva</span>",
	                            "<span style='font-family:\"Trebuchet MS\", sans-serif'>Trebuchet MS</span>",
	                            "<span style='font-family:Verdana, Geneva, sans-serif'>Verdana</span>",
	                            "<span style='font-family:\"Courier New\", Courier, monospace'>Courier New</span>",
	                            "<span style='font-family:\"Lucida Console\", Monaco, monospace'>Lucida Console</span>",
	                            ]; 
	 WAL_createDropdownListWithItemStyle("fontNameDDL", '170px', gDDLHeight, false, "GX_DDLHandler", '140',fontFamilyValue, 'fontFamilyValue',fontFamilyDisplay, 'fontFamilyDisplay');
	 
	 WAL_createNumberInput("fontSizeIP", '80px', gDDLHeight, "GX_EditBoxValueChange",true, 100,8,1);
	 WAL_setNumberInputValue('fontSizeIP', 18, false);
	 WAL_createCustomButton('bold_icon', 'GX_ToolbarHandler');
	 WAL_createCustomButton('italic_icon', 'GX_ToolbarHandler');
	 WAL_createCustomButton('underline_icon', 'GX_ToolbarHandler');
	 WAL_createCustomButton('strikethrough_icon', 'GX_ToolbarHandler');
	 WAL_createCustomButton('smallcaps_icon', 'GX_ToolbarHandler');
	 
	 WAL_createCheckBox('snaptogrid', 'GX_CheckValueChange', '110', '20' , '13', false, false);
	 WAL_setCheckBoxValue('snaptogrid', false);
	 
	 WAL_createCheckBox('tooltipBtn', 'GX_CheckValueChange', '75', '20' , '13', false, false);
	 WAL_setCheckBoxValue('tooltipBtn', true);
	 
	 
	 //marker interface
	 var typelist = ['None','Start', 'Middle', 'End']; 
	 WAL_createDropdownList('markerTypeListDDL', '60', gDDLHeight, false, typelist, "GX_DDLHandler", '100', '70');
	 WAL_SetItemInDropDownList('markerTypeListDDL', 0, false);
	 
	 var listBoxSrc = new Array();
	    var image=""; 
	    var markerValue;
	    var numMarkers = 6; 
	    for (i = 0; i < numMarkers; i++) {
	       image = 'marker' + i + '.svg';          
	        var html = "<div style='padding: 0px; margin: 0px; height: 20px; float: left;'><img width='auto' height='24px' style='float: left; margin-top: 1px; margin-right: 2px;' src='../USER_DATA/shared/Markers/" + image + "'/></div>";        
	        switch(i)
	        {
	        case 0:
	        	markerValue = "Circle"; 
	        	break; 
	        case 1:
	        	markerValue = "Square"; 
	        	break;         
	        case 2:
	        	markerValue = "Triangle"; 
	        	break;         
	        case 3:
	        	markerValue = "Star"; 
	        	break;         
	        case 4:
	        	markerValue = "CurvedTriangle"; 
	        	break;         
	        case 5:
	        	markerValue = "Cross"; 
	        	break;         
	        default:
	        	break;        	
	        }
	        listBoxSrc[i] = { html: html, value:markerValue};
	    }	    
	    WAL_createDropdownList('markerShapeListDDL', '40', gDDLHeight, false, listBoxSrc, "", '120', '60');
	 //sets the default values 
	    WAL_createColorPickerWindow("marker_colorpickwidget", "marker_colorpicker", '350', '250', "marker_okbtn", "marker_cancelbtn");
	    GX_SetDefaultPropOnUI(); 
}



function GX_SetDefaultPropOnUI(){
	
	WAL_setNumberInputValue("lposIP", 0, false);
	WAL_setNumberInputValue("tposIP", 0, false);
	WAL_setNumberInputValue("widthIP", 0, false);
	WAL_setNumberInputValue("heightIP", 0, false);
	WAL_setNumberInputValue("rotateIP", 0, false);
	
	WAL_setNumberInputValue('strokeWeightIP', 1, false);
	WAL_setNumberInputValue("radiusIP", 0, false);
	$('#fillopacityValue')[0].innerHTML = '100'; 
	
	WAL_setSliderValue('opacitySlider', 100); 	
	$('.pathProperty').hide();
	$('.fontProperty').hide(); 	
	$('.markerProperty').hide(); 
	$('.imageProperty').hide(); 
	WAL_SetItemInDropDownList('markerTypeListDDL', 0, false);
}

function GX_SetPropertyonUI(objNode){
	//first get the objectNode type 
	var objectType = objNode.classList[1]; 
	var shapeType = objNode.classList[0]; 
	//first extract the common properties and set the UI
	//first the dimension related properies 
	var dim = GX_GetRectObjectDim(objNode);
	WAL_setNumberInputValue("lposIP", dim.x, false);
	WAL_setNumberInputValue("tposIP", dim.y, false);
	WAL_setNumberInputValue("widthIP", dim.width, false);
	WAL_setNumberInputValue("heightIP", dim.height, false);
	WAL_setNumberInputValue("radiusIP", dim.radius, false);
	WAL_hideWidget('roundRadProp', true); 
	if( (objectType == 'RECTANGLE')|| (objectType == 'ELLIPSE') || (objectType == 'IMAGE') || (objectType == 'CIRCLE') ) {		
		WAL_disableWidget('widthIP', 'data-jqxNumberInput', false, false); 
		WAL_disableWidget('heightIP', 'data-jqxNumberInput', false, false); 
		WAL_disableWidget('heightIP', 'data-jqxNumberInput', false, false); 
		if(objectType == 'RECTANGLE')
			WAL_hideWidget('roundRadProp', false); 
		
	}
	else{
		WAL_disableWidget('widthIP', 'data-jqxNumberInput', false, true); 
		WAL_disableWidget('heightIP', 'data-jqxNumberInput', false, true); 
		
	}	
	WAL_setNumberInputValue('rotateIP', dim.rotate, false); 
	if( (objectType == 'VERT_LINE_PATH')|| (objectType == 'HOR_LINE_PATH') 
			|| (objectType == 'FREEDRAW_PATH') || (objectType == 'CIRCLE') || (objectType == 'TEXT')){
		WAL_disableWidget('rotateIP', 'data-jqxNumberInput', false, true); 
	}
	else
		WAL_disableWidget('rotateIP', 'data-jqxNumberInput', false, false); 
	//updating the gradient values 
	
	//now based on specific object type extract those property and set the UI. also show them as we proceed 
	var strokewidth = objNode.getAttribute('stroke-width'); 
	WAL_setNumberInputValue('strokeWeightIP', strokewidth, false);    
	
	var fillopacity = objNode.getAttribute('opacity');
	if(!fillopacity)
		fillopacity = 1.0; 
	fillopacity = new Number(fillopacity);
	fillopacity = Math.round(fillopacity*100); 	
	$('#fillopacityValue')[0].innerHTML = fillopacity; 
	WAL_setSliderValue('opacitySlider', fillopacity); 
	//updating the gradient values 
	var fillstr = objNode.getAttribute('fill');	
	if(fillstr){
		if( (fillstr == 'none') || (fillstr == ''))
		{
			//WAL_SetItemByValueInList('gradlistDDL', 'none', 'true'); 
			WAL_SetItemInDropDownList('gradlistDDL', 0, 'true');
			
		}
		else{
			var index = fillstr.indexOf('url(#');
			
			if(index >= 0){
				fillstr = fillstr.substring(5, fillstr.length-1); 
				var info = GX_GetGradInfoByID(fillstr);
				if(info[0])
					WAL_SetItemByValueInList('gradlistDDL', info[0], 'true'); 
				
			}
			else{				
				WAL_SetItemByValueInList('gradlistDDL', 'Solid', 'true'); 
			}		
		}
	}
	
	var strokedashvalue = objNode.getAttribute('stroke-dasharray');
	if(strokedashvalue == 'none')
		strokedashvalue = ""; 
	WAL_SetItemByValueInList('strokedashDDL', strokedashvalue, false);	
	//now path type objects 
	$('#dimProp').show(); 
	if(shapeType == 'SVG_PATH_OBJECT'){		
		//$('#pathcloseProp')[0].style.display = 'block'; 
		$('.markerProperty').show();
		$('#editbtnProp')[0].style.display = 'block'; 	
		//$('#addpointBtn').css({display:'none'}); 
		//$('#deletepointBtn').css({display:'none'}); 
		$('.polypointEditProperty').hide(); 
		$('#dimProp').hide(); 
		if(objectType == 'ELLIPTIC'){
			$('.ellipticProp').show(); 
		}
		if(objectType == 'POLYGON'){
			$('#polygonProp')[0].style.display = 'block';			
		}
		
		GX_UpdatePathParamOnUI(objNode); 		
		
	}	
	else if(shapeType == 'SVG_TEXT_OBJECT'){
		$('.fontProperty').show(); 
		$('#dimProp').hide(); 		
		var fontsize = gCurrentObjectSelected.getAttribute('font-size'); 
		GX_UpdatePropertyOnUI('FONT_SIZE', fontsize);
		var fontname = gCurrentObjectSelected.getAttribute('font-family');
		GX_UpdatePropertyOnUI('FONT_NAME', fontname); 	
		if(gCurrentTabIndex == 1)
			WAL_TriggerEvent('click', 'editTextBtn'); 
	}
	else if(shapeType == 'SVG_IMAGE_OBJECT'){
		$('.imageProperty').show(); 
		var urlStr = objNode.getAttribute('xlink:href');
		$('#imgURLValueIP').val(urlStr); 		
	}
	
}

function GX_RightTabHandler(tabIndex){
	gCurrentTabIndex = tabIndex; 
	if(tabIndex == 0){
		bTreeWidgetDisplay = true;
		setTimeout(function(){			
			//WAL_setTreeItemSelection(gTreeNodeID, 'TM_BASEGROUP');
			}, 250); 		
	}
	else if(tabIndex == 1){
		bTreeWidgetDisplay = false; 
		var objectType = 0;
		var objectClass = 0; 
		if(gCurrentObjectSelected){
			objectType = gCurrentObjectSelected.classList[1]; 
			objectClass = gCurrentObjectSelected.classList[0]; 
		}		
		 if(objectType == 'TEXT'){
			 WAL_TriggerEvent('click', 'editTextBtn'); 		
		 }
		 if(objectClass = 'SVG_PATH_OBJECT'){
			 WAL_TriggerEvent('click', 'patheditBtn'); 	
		 }
		 
	}
		
	else if(tabIndex == 2){
	//	if(gCurrentObjectSelected)
		//	GX_SetSelection(gCurrentObjectSelected, false, false); 
		//now populate the anim data here
		setTimeout(function(){			
			GX_UpdateAnimUIGrid(); 	
			}, 250); 
		
		
		//get the list of animation
		//refresh  the grid data here 
	}

}

function GX_EditorTabHandler(tabIndex){
	if(tabIndex == 0){
		gViewMode = 'EDITOR_MODE';
		GX_ShowEditor(); 
	}		
	else{
		gViewMode = 'PREVIEW_MODE';	
		GX_ShowPreview(); 
	} 
	GX_ManageUIState(gViewMode); 
}


function GX_OpacitySliderHandler(value, widgtNode){
	if(!gCurrentObjectSelected)
		return ; 
	var opacity = new Number(value);
	opacity = opacity * .01; 
	if(gbMultiSelection == true){
		GX_ApplyPropertyToMultipleObjects('opacity', opacity); 
		GX_UpdatePropertyForMultipleObjects('opacity', opacity); 
	}
	else{
		GX_SetObjectAttribute(gCurrentObjectSelected, 'opacity', opacity, true, false);
	}	
	
	$('#fillopacityValue')[0].innerHTML = value; 
}

function GX_GetObjectMaxDimensionToResize(objDim){	
	//get the canvas dimenson 		
	//now max width 
	with (Math){
		var maxDim = new sDimension(); 
		maxDim.width = gOriginalCanvasDim.width - objDim.width - objDim.x; 
		maxDim.height = gOriginalCanvasDim.height - objDim.height - objDim.y; 
		maxDim.width = max(0, maxDim.width); 
		maxDim.height = max(0, maxDim.height); 
		maxDim.width  += objDim.width; 
		maxDim.height  += objDim.height;
		
	}
	return maxDim; 	
}
var gPreviewSVGStr = 0; 
function GX_ShowPreview(){	
		 var previewiFrame =  document.getElementById('svgpreview_iframe');
		 var previewiFrame =  document.getElementById('svgpreview_iframe');	
		 previewiFrame.setAttribute('src',"");
		  GXRDE_getPageURL('appURLCallback');
		 appURLCallback = function(URLstr){
			 var t = new Date(); 
			 var sec = t.getUTCSeconds(); 
			 URLstr += '?t=' + sec; 
			 gPreviewSVGStr = URLstr; 
			 previewiFrame.setAttribute('src',gPreviewSVGStr );
		 }
		 
	 //}
}

function OnPointMarkerDragStop(event, ui){
	relX = new Number(ui.position.left - ui.originalPosition.left);
    relY = new Number(ui.position.top - ui.originalPosition.top);
    relX = Math.round(relX / gZoomFactor); 
    relY = Math.round(relY /gZoomFactor);
    gMarkerPosition.centerX += relX; 
    gMarkerPosition.centerY += relY;
    
    gPathDataArray = GX_ConvertPathDataToArray(gIndicatorPathNode);
    if(!gPathDataArray){
    	//Debug_Message("Indicator Path Data Array s Empty"); 
    	//_rm this can happen while center of rotation is being set 
    	return ; 
    }
   // var pathvalue = 'M' + objPos.centerX + ' ' + objPos.centerY + ' l' + endValue; 
    var endX = new Number(gPathDataArray[1][1]); 
    endX  += relX;
    endY = new Number(gPathDataArray[1][2]);
    endY += relY; 
    var pathValue = 'M' + gPathDataArray[0][1] + ',' + gPathDataArray[0][2] + ' l' +  endX + ',' +  endY + ' ';
	gIndicatorPathNode.setAttribute('d', pathValue);    
}

function GX_ShowEditor(){
	var fname  = gSVGFilename; 
	GX_ResetAllSelections(); 
	if(gEditorWidth){
		$('#editor_div').width(gEditorWidth);
		$('#editor_div').height(gEditorHeight);
	}	
}
function GX_ReloadPreview(){
	
	 var previewiFrame =  document.getElementById('svgpreview_iframe');	
	 previewiFrame.setAttribute('src',"");
	 //var URLstr = GXRDE_getPageURL();		
	 previewiFrame.setAttribute('src',gPreviewSVGStr );	
	
	 
}

function GX_ReloadSVG(ObjID, bUpdateTree){
	gCurrfName =  gSVGFilename; 
	gCurrObjID = ObjID; 
	gControlKey = false;
	GXRDE_openSVGFile(gCurrfName, 'OpenfileCallback'); 	
	/*
	 var currfilename = gSVGFilename; 
	 GX_CloseSVGFile();	 
	 var retval = GXRDE_openSVGFile(currfilename); 
	 var HTMLstr=""; 		 	 
	 var currObjID = ObjID; 
	 if(retval){
		    // GX_CloseSVGFile();
		   	 var dataNode = document.getElementById('objectcontainer');   	 
		   	 dataNode.innerHTML += retval;		   	
		  	 GX_InitializeDocument(currfilename);		   	
	}	
	if(bUpdateTree == true){
		var xmlstr = GXRDE_GetSVGMetaXML(currfilename);    
		if(xmlstr)
		     GX_updateTreeWidget(xmlstr);   
		WAL_expandAllTreeItems(gTreeNodeID, true);
		
		
		if(currObjID)
			WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+currObjID);
		else
			WAL_setTreeItemSelection(gTreeNodeID, 'TM_BASEGROUP');
	}	
	*/
}

 

function GX_ReloadNode(nodeID){
	var Node = document.getElementById(nodeID);
	var copyNode = Node.cloneNode(true);
	var parentNode = Node.parentNode; 
	parentNode.removeChild(Node); 
	parentNode.appendChild(copyNode); 
}


function GX_OBJ_GetPolygonParams(x,y, nSides, length) {
	var gnInternalAngle = 2 * Math.PI / nSides;
	var startAngle = Math.PI / nSides;
	var radius = length;
	with (Math){
		radius = round(radius / (2 * sin(gnInternalAngle / 2)));	
	}	
	var currX = 0;
	var currY = 0; 
	var currAngle;   
	pathParam = '';
	var cx = x;
	var cy = y;
	//now find the offset by which each point should be move so as to align the object at start point
	currAngle = startAngle;
	var offset = new sPoint(); 
	with (Math){
		currX = round(cx + radius * cos(currAngle)); 
		currY = round(cy - radius * sin(currAngle)); 
		offset.x = currX - x; 
		offset.y = currY - y; 
	}
	
	//$newPoint = "M". $cx . ',' . $cy;
//	$pathParam = $pathParam . $newPoint . ' ';     
	for (k = 0; k < nSides; k++) {  
		with(Math){
			currAngle = startAngle + (k * gnInternalAngle);
			currX = round(cx + radius * cos(currAngle)); 
			currY = round(cy - radius * sin(currAngle)); 
			currX -= offset.x; 
			currY -= offset.y; 
		}		 
		if(k == 0)
			newPoint = "M" + currX + ',' + currY + ' ';  
		else
			newPoint = "L" + currX + ',' + currY + ' ';
		pathParam = pathParam + newPoint;  		
	}	
	pathParam = pathParam + 'z'; 
	return pathParam;
}

function GX_OnLoadSVG(evt){
	
}

function GX_ImageDlgOK(){
	var JQSel = "#imageURLIP";	
	var url = $(JQSel).val();
	GX_AddNewImageSVG(url); 
	//Debug_Message("Image OK"); 
}

function GX_OpenHelp(URL){
	//Debug_Message("Clicked on Help"); 
	$('#helpFrame').attr('src', URL); 
	bScrollPrevent = true; 
	 WAL_showModalWindow('helpDlg',"", "" );	
	//$("#helpModal").modal(); 
}

function GX_ShowTooltip(bFlag){
	if(bFlag == true){
		$('[data-toggle="tooltip"]').tooltip({html:true, trigger:'hover', delay: {show: 500, hide: 100}
		}); 
		  $("[data-toggle='tooltip']").on('shown.bs.tooltip', function(){
			var mytext = $(".tooltip-inner").html(); 
			if(mytext){
				var textarr = mytext.split('='); 
				textarr = textarr[1].split('>'); 
				var ref = textarr[0];
				ref = ref.substring(1, ref.length-1);			
				gTooltipSrc = ref; 
			}									
		});	
		  $("[data-toggle='tooltip']").on(' hidden.bs.tooltip', function(){
			  gTooltipSrc = 0; 
			});	
		 
	}
	else{
		$('[data-toggle="tooltip"]').tooltip('destroy'); 
	}
	 
}


function GX_DownloadCurrentProject(){
	GXRDE_downloadCurrentProject(); 
}

function GX_ReloadWorkspace(){
	var urlStr = 'GX_Editor.html?'+ gSVGFilename; 
	window.open(urlStr, '_self',''); 	
}

function OnEditBoxChange(event){
	
	var nodeID = event.target.id; 
	if(nodeID == 'gradTitleIP'){
		var JQSel = '#gradTitleIP'; 
		var value = $(JQSel).val(); 
		if(value.length > 0 ){
			//if(value[0] != ' ')
				$('#gradcontainer').removeClass('disabledState'); 
		}
			
		else		
			$('#gradcontainer').addClass('disabledState'); 

	}
}

function GX_PublishFile(){
	//_rm for local testing purpose	
	GXRDE_Publish('fnPublish'); 
}

function OnPubWindowShow(event){	
	GXRDE_GetPublishedList('fnPublishedCallback');	 
}


function fnPublishedCallback(respstr){
	if(!respstr){
		 Debug_Message('No Data Available'); 
		 return; 
	}		
	gSVGImportList = respstr; 	
	var source =
	    {
	        datatype: "json",
	        datafields: [
	            { name: 'ID', type: 'string' },
	            { name: 'pubdate', type: 'string'},
	            { name: 'title', type: 'string' },           
	            { name: 'publishedURL', type: 'string'}
	        ],
	        id: 'ID',
	        localdata : gSVGImportList	         
	    };		      
	    WAL_setSourceColumn('publistgrid', source);
	WAL_ClearGridSelection('publistgrid'); 
	WAL_showModalWindow('publishedListDlg', "", "" );	
	
}

function OnGridURLClick(event){
	var aNode = event.target;
	var URL = aNode.getAttribute('data-href'); 	
	window.open(URL); 
}

function GX_Notify(type, str, dur){
	var timeout = 6000; 
	if(dur != 0)
		timeout = dur; 
	setTimeout(function(){		    	
		WAL_ShowNotification('messageNotification',type, str,timeout,0, -550, 'bottom-left', false);			 
	 			},
	 	200);
}

var gTimeoutPopover = 10000; 
function GX_ShowPopupTips(tipText){
	if(gShowTooltip == true){
		var JQSel = '#sel_popup'; 
		$(JQSel).jqxPopover({width: 'auto'}); 
		$('#objectTips')[0].innerHTML = tipText; 
		WAL_ShowPopover('sel_popup', true); 		
	}	
	setTimeout(function(){		    	
		WAL_ShowPopover('sel_popup', false); 			 
	 			},
	 	gTimeoutPopover);
	
}
	
function OnSelGripperClick(event){	
	$('#objectTips')[0].innerHTML = "";
	var JQSel = '#sel_popup'; 
	$(JQSel).jqxPopover({width: 0}); 
	setTimeout(function(){			
		WAL_ShowPopover('sel_popup', false); 			 
	 			},
	 	300);
	
	
}