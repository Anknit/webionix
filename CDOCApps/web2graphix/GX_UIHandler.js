
var gAppVersion = "1.0"; 
sDimension.prototype.x = new Number(0);
sDimension.prototype.y = new Number(0);
sDimension.prototype.width = new Number(0);
sDimension.prototype.height = new Number(0);

sDimension.prototype.minXIndex = -1; 
sDimension.prototype.minYIndex = -1;
sDimension.prototype.maxYIndex  = -1;
sDimension.prototype.maxXIndex = -1; 
//added to tap in the rotation params as well 
sDimension.prototype.rotate = 0; 
sDimension.prototype.rotCentreX = 0; 
sDimension.prototype.rotCentreY = 0; 
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
    
}
var gTreeWidgetID = 'node_panel'; 
var gTreeNodeID = 'node_container'; 
var gSVGFileOpenDlg = "svgfileopendlg"; 
var gSVGFileNameDlgID = 'newSVGFileNameDlg'; 
var gSVGFileDeleteDlg = "svgfiledeletedlg"; 
var gSVGDimensionDlg = 'svgdimensiondlg'; 
var gPolyInputDlg = 'polygonipdlg';
var gFileNameTitleNode = 0;
var gInitTitle = "Web2.0 Graphics Editor: "; 
var gSVGContainerNode = 0; 
var gFileNameHolder = 0; 
var gResizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];
var gpathSegIndex = -1;
var gZoomFactor = new Number(1.0); 
var gPanX = new Number(0); 
var gPanY = new Number(0); 
var gPanDelta = new Number(20); 
var gCurrentObjectSelected=0; 
var gCurrSelectedObjectDim = new sDimension();
var gGrabberDim = new sDimension(); 
var gOrigMousePosX, gOrigMousePosY;
var gsvgRootNode = 0;
var gCursorXOffset = 8;
var gCursorYOffset = 5;
var bMove = false;
var bDraw = false;
var gCurrGrabber = 0;
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
var gClientYOffset = 100;
var gClientXOffset = 0; 
var gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
var gPreviousTreeNode =0; 
var gCurrentTreeNode = 0;
var gPrevTreeItemSel = 0;
var gCurrentTreeItemSel=0; 
var gOpacityUnSelect = '0.3';
var gCurrLayerID=0; 
var gCurrLayerNode=0; 
var gCurrLayerTranslateValues = 0;
var gButtonWidth = '24'; 
var gButtonHeight='24'; 
var gDDLHeight = '24' ; //'26px'

var gEditWidth = "35";
var gObjectEditMode = 'MODIFY_SHAPE_MODE';
var gSnapToGrid =  false; 
var gSnapRes = new Number(10);
var gbMultiSelection = false; 
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
        case "GradStartXIP":
            GX_SetObjectAttribute(this.GradResourceNode, 'x1', value + '%', true, false);
            break;
        case "GradStartYIP":
            GX_SetObjectAttribute(this.GradResourceNode, 'y1', value + '%', true, false);
            break;
        case "GradStopXIP":
            GX_SetObjectAttribute(this.GradResourceNode, 'x2', value + '%', true, false);
            break;
        case "GradStopYIP":
            GX_SetObjectAttribute(this.GradResourceNode, 'y2', value + '%', true, false);
            break;
        case "centerXIP":
        	GX_SetObjectAttribute(this.GradResourceNode, 'cx', value + '%', true, false);
        	break; 
        case "centerYIP":
        	GX_SetObjectAttribute(this.GradResourceNode, 'cy', value + '%', true, false);
        	break; 
        case "radiusIP":
        	GX_SetObjectAttribute(this.GradResourceNode, 'r', value + '%', true, false);
        	break; 
        case "focusXIP":
        	GX_SetObjectAttribute(this.GradResourceNode, 'fx', value + '%', true, false);
        	break; 
        case "focusYIP":
        	GX_SetObjectAttribute(this.GradResourceNode, 'fy', value + '%', true, false);
        	break; 
        case "stop0_Offset":
            var stopnodeid = this.GradResourceNode.id + '_STOP0';
            var stopnode = document.getElementById(stopnodeid);
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;
        case "stop1_Offset":
            var stopnodeid = this.GradResourceNode.id + '_STOP1';
            var stopnode = document.getElementById(stopnodeid);
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;
        case "stop2_Offset":
            var stopnodeid = this.GradResourceNode.id + '_STOP2';
            var stopnode = document.getElementById(stopnodeid);
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;
        case "stop3_Offset":
            var stopnodeid = this.GradResourceNode.id + '_STOP3';
            var stopnode = document.getElementById(stopnodeid);
            GX_SetObjectAttribute(stopnode, 'offset', value + '%', true, false);
            break;    
        
        default:
            break;

    }

};

sGradientWidget.prototype.UpdateUI = function(gradProp) {

	 var rectNode = document.getElementById('GRAD_PREVIEW_RECTANGLE');
     gGradWidth = new Number(rectNode.getAttribute('width'));
     gGradHeight = new Number(rectNode.getAttribute('height'));
    if (gradProp.GradMode == 'LINEAR') {
        //update the title here     	
        WAL_setNumberInputValue("GradStartXIP", gradProp.LGGradStart.x, false);
      // if(gradProp.gradAnimList['x1'].bAnimate == true)
        var objProp =  gradProp.gradAnimList['x1']; 
    	WAL_setCheckBoxValue('animateStartPos', objProp.bAnimate);   	    	
    	//WAL_setNumberInputValue("StartfromXPosIP",objProp.fromValue, false);
    	//WAL_setNumberInputValue("StarttoXPosIP", objProp.toValue, false);
    	WAL_setNumberInputValue("durStartPosIP", objProp.duration, false);
    	
    	
    	
        WAL_setNumberInputValue("GradStartYIP", gradProp.LGGradStart.y, false);
       
    	
    	
        WAL_setNumberInputValue("GradStopXIP", gradProp.LGGradStop.x, false);
        objProp =  gradProp.gradAnimList['x2']; 
        WAL_setCheckBoxValue('animateStopPos', objProp.bAnimate);   
    	WAL_setNumberInputValue("durStopPosIP", objProp.duration, false);
    	
        WAL_setNumberInputValue("GradStopYIP", gradProp.LGGradStop.y, false);      
        
        //linear specific indicator UIs\
        var indNode = document.getElementById('LG_INDICATOR_LINE');
        var markerNode = document.getElementById('START_POINT');
        var value = gradProp.LGGradStart.x; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradWidth)/100); 
        indNode.setAttribute('x1',value+'' ); 
        markerNode.setAttribute('cx',value+5+'' ); 
        
        value = gradProp.LGGradStart.y; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradHeight)/100); 
        indNode.setAttribute('y1',value+'' ); 
        markerNode.setAttribute('cy',value+5+'' ); 
        
        //END_POINT
       
        markerNode = document.getElementById('END_POINT');
        var value = gradProp.LGGradStop.x; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradWidth)/100); 
        indNode.setAttribute('x2',value+'' ); 
        markerNode.setAttribute('cx',(value-5)+'' ); 
        
        value = gradProp.LGGradStop.y; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradHeight)/100); 
        indNode.setAttribute('y2',value+'' ); 
        markerNode.setAttribute('cy',(value-5)+'' ); 
        
    }
    else if (gradProp.GradMode == 'RADIAL') {
        
        WAL_setNumberInputValue("centerXIP", gradProp.center.x, false);
        objProp =  gradProp.gradAnimList['cx']; 
    	WAL_setCheckBoxValue('animatecenterPos', objProp.bAnimate);   	    	
    	//WAL_setNumberInputValue("centerFromIP",objProp.fromValue, false);
    	//WAL_setNumberInputValue("centerToIP", objProp.toValue, false);
    	WAL_setNumberInputValue("durCenterIP", objProp.duration, false); 	
    	
        WAL_setNumberInputValue("centerYIP", gradProp.center.y, false);       
        
        WAL_setNumberInputValue("radiusIP", gradProp.radius, false);
        objProp =  gradProp.gradAnimList['r']; 
    	WAL_setCheckBoxValue('animateRadius', objProp.bAnimate);   	    	
    //	WAL_setNumberInputValue("radiusFromIP",objProp.fromValue, false);
    //	WAL_setNumberInputValue("radiusToIP", objProp.toValue, false);
    	WAL_setNumberInputValue("durRadiusIP", objProp.duration, false); 
    	
    	objProp =  gradProp.gradAnimList['fx']; 
        WAL_setNumberInputValue("focusXIP", gradProp.focus.x, false);
        WAL_setNumberInputValue("focusYIP", gradProp.focus.y, false);
        WAL_setCheckBoxValue('animateFocus', objProp.bAnimate);   	    	
    	//WAL_setNumberInputValue("focusFromIP",objProp.fromValue, false);
    //	WAL_setNumberInputValue("focusToIP", objProp.toValue, false);
    	WAL_setNumberInputValue("durFocusIP", objProp.duration, false); 
    	
        
        var circNode =  document.getElementById('RG_CIRCLE'); 
        var centerNode = document.getElementById('RG_CENTER');
        var radlineNode = document.getElementById("RG_RADIUS_LINE");
        
        var value = gradProp.center.x; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradWidth)/100); 
        circNode.setAttribute('cx', value);        
        centerNode.setAttribute('cx', value);
        radlineNode.setAttribute('x1', value); 
        
        
        var radius =  gradProp.radius; 
        radius = radius.substring(0, radius.length-1); 
        radius = new Number(radius); 
        
        value = gradProp.center.y; 
        value = value.substring(0, value.length-1); 
        value = new Number(value); 
        value = Math.round((value * gGradHeight)/100); 
        circNode.setAttribute('cy', value);        
        centerNode.setAttribute('cy', value);
        radlineNode.setAttribute('y1', value); 
        
        
                
          
       // 'RG_RADIUS_END_POINT'
       // 'RG_FOCUS_POINT'  
        
    }
    
        
       // var titlenode = document.getElementById('gradTitleIP'); 
    	//titlenode.setAttribute('value',gradProp.Title); 
    	var JQSel = "#" + 'gradTitleIP';    
        $(JQSel).val(gradProp.Title);
        
        var index = -1;
        var spreadValueDisplay = ['pad', 'reflect', 'repeat'];
        for (var j = 0; j < 3; j++) {
            if (gradProp.spreadMethod == spreadValueDisplay[j]) {
                index = j;
                break;
            }
        }
        
        var prevNode = document.getElementById('GRAD_PREVIEW_RECTANGLE');
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
                btnID = 'stop' + index + '_Offset';
                var offset = gradProp.StopParam[j].offset;
                offset = offset.substring(0, offset.length - 1);
                WAL_setNumberInputValue(btnID, offset, false);
                WAL_disableWidget(btnID, 'data-jqxNumberInput', false, false);
               
            }
            else {
                var btnID = 'stop' + index + '_color';
                var btnNode = document.getElementById(btnID);
                btnNode.style.backgroundColor = 'grey';
                WAL_disableWidget(btnID, 'button', false, true);
                btnID = 'stop' + index + '_Offset';
                WAL_setNumberInputValue(btnID, '100', false);
                WAL_disableWidget(btnID, 'data-jqxNumberInput', false, true);
            }
            //now get the stopanimation param here 
            objProp =  gradProp.gradAnimList['stop-color'+index]; 
            if(objProp)
            {
            	WAL_setCheckBoxValue('animateStop_col', objProp.bAnimate);   
            	//var btnNode =  document.getElementById('stop_color_from' + index); 
            	//btnNode.style.backgroundColor = objProp.fromValue;
            	//btnNode =  document.getElementById('stop_color_to' + index); 
            	//btnNode.style.backgroundColor = objProp.toValue;
            	var durIPID= 'durStopColIP'; 
                WAL_setNumberInputValue(durIPID, objProp.duration, false);
            }            
        }
    
};

sGradientWidget.prototype.OnGradCheckBoxHdlr = function(event) {

    var CBID = event.target.id;
    var state = event.args.checked;
    var index;
    var stopnodeid;
    if (CBID == 'animateStartPos')
    {
    	//Debug_Message('Anim start X handled ');    	
    	if(state ==  true)
    	{    		
             WAL_disableWidget('durStartPosIP', 'data-jqxNumberInput', false, false); 
             WAL_setNumberInputValue("durStartPosIP", 0.5, false);
             
    	}
    	else
    	{
            WAL_disableWidget('durStartPosIP', 'data-jqxNumberInput', false, true); 
            WAL_setNumberInputValue("durStartPosIP", 0.0, false);
    	}
    	
    	return ; 
    }     	
    else if (CBID == 'animateStopPos')
    {
    	//Debug_Message('Anim start X handled ');    	
    	if(state ==  true)
    	{
             WAL_disableWidget('durStopPosIP', 'data-jqxNumberInput', false, false);
             WAL_setNumberInputValue("durStopPosIP", 0.5, false);    
    	}
    	else
    	{           
    		WAL_disableWidget('durStopPosIP', 'data-jqxNumberInput', false, true); 
    		 WAL_setNumberInputValue("durStopPosIP", 0.0, false);  
    	}
    	
    	return ; 
    }
    
    else if(CBID == 'animatecenterPos')
    {
    	if(state ==  true)
    	{
    		WAL_disableWidget('durCenterIP', 'data-jqxNumberInput', false, false);
    		WAL_setNumberInputValue("durCenterIP", 0.5, false); 
    	}    		
    	else
    	{
    		WAL_disableWidget('durCenterIP', 'data-jqxNumberInput', false, true);
    		WAL_setNumberInputValue("durCenterIP", 0.0, false); 
    	}
    		
    }
    else if(CBID == 'animateRadius')
    {
    	if(state ==  true)
    	{
    		WAL_disableWidget('durRadiusIP', 'data-jqxNumberInput', false, false);
    		WAL_setNumberInputValue("durRadiusIP", 0.5, false);
    	}    		
    	else
    	{
    		WAL_disableWidget('durRadiusIP', 'data-jqxNumberInput', false, true);
    		WAL_setNumberInputValue("durRadiusIP", 0.0, false);
    	}    		
    }   
    else if(CBID == 'animateFocus')
    {
    	if(state ==  true)
    	{
    		WAL_disableWidget('durFocusIP', 'data-jqxNumberInput', false, false);
    		WAL_setNumberInputValue("durFocusIP", 0.5, false);
    	}    		
    	else
    	{
    		WAL_disableWidget('durFocusIP', 'data-jqxNumberInput', false, true);
    		WAL_setNumberInputValue("durFocusIP", 0.0, false);
    	}    		
    }  
    else if(CBID == 'animateStop_col')
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
        
    if (CBID == 'stop2_CB')
        index = 2;
    else if (CBID == 'stop3_CB')
        index = 3;
    if (state == false) {
        stopnodeid = this.GradResourceNode.id + '_STOP' + index;
        var stopNode = document.getElementById(stopnodeid);
        GX_SetObjectAttribute(stopNode, 'offset', '100%', true, false); 
        GX_SetObjectAttribute(stopNode, 'stop-color', 'none', true, false);       
        //update the button color
        var btnID = 'stop' + index + '_color';
        var btnNode = document.getElementById(btnID);
        btnNode.style.backgroundColor = 'grey';
        WAL_disableWidget(btnID, 'button', false, true);
        btnID = 'stop' + index + '_Offset';
        WAL_disableWidget(btnID, 'data-jqxNumberInput', false, true);
        WAL_setNumberInputValue(btnID, '100', false); 
        
        

    }
    else if (state == true) {
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
    if (nodeid == 'LinearSpreadDDL') {
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
    case 'stop2_color':
    	stopnodeid = this.GradResourceNode.id + '_STOP' + '2';
    	break;
    case 'stop3_color':
    	stopnodeid = this.GradResourceNode.id + '_STOP' + '3';
    	break;       	
   /* case 'stop_color_from0': 
    case 'stop_color_from1': 
    case 'stop_color_to0': 
    case 'stop_color_to1': 
    	attrName = '' ; //'background-color';
    	var Node = document.getElementById(btnID); 
    	initColVal = Node.style.backgroundColor; //('background-color');
    	bStopAnimColor = true; 
    	break;
    */    	    	    	
    default:
    	return ; 
    	break;     	
    }   

    if(stopnodeid)   
    {
    	 var tgtNode = document.getElementById(stopnodeid);    
    	 initColVal = tgtNode.getAttribute('stop-color');
    	 if (initColVal == 'none')
    	     initColVal = 'grey'; 
    	 gPrevAttributeList = EL_getObjectAttributes(tgtNode);
    	 WAL_showColorPickerWidget('gradcolorpickwidget', '', btnID, attrName, initColVal, tgtNode.id);
    }
   else if(bStopAnimColor == true)
    {
	   	 var tgtNode = document.getElementById(btnID);    
	   	 initColVal = tgtNode.style.backgroundColor;
	   	 if (initColVal == 'none')
	   	     initColVal = 'grey'; 
	   	// gPrevAttributeList = EL_getObjectAttributes(tgtNode);
	   	 WAL_showColorPickerWidget('gradcolorpickwidget', '', btnID, attrName, initColVal, tgtNode.id);
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
        for (var k = 0; k < 4; k++) {
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
                
    //get stopanimnode related data here gradanimProp = this.getGradientAnimNode('LG','y2');
                
                gradanimProp = this.getGradientAnimNode('STOP'+ k,'stop-color');
               /// if(gradanimProp)
               // {
                gradProp.gradAnimList['stop-color'+k] = gradanimProp; 
               // }
                
                
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
        for (var k = 0; k < 4; k++) {
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

function GradientEditBoxValueChange(value, wdgtNode) {
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
    gGradientObj.OnGradColorButtonHandler(event); 
}

function GX_CreateGradientWidget(wdgtID)
{
        WAL_createModelessWindow(wdgtID, '590', '530', 'myOK', 'myCancel');
        WAL_createButton('animTotalPreviewBtn', '', '60', 25, true);
        
      //  WAL_createTab('gradTabsContent', '425', 'TabSelectHandler');
        WAL_createNumberInput("GradStartXIP", '40px', gWidgetHeight, "GradientEditBoxValueChange", true, 99, 0, 1);
      //  WAL_createNumberInput("StartfromXPosIP", '40px', gWidgetHeight, "GradientEditBoxValueChange", true, 99, 0, 1);
        WAL_createDecimalNumberInput("durStartPosIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
             
        WAL_createCheckBox('animateStartPos', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);        
      //  WAL_createNumberInput("StarttoXPosIP", '40px', gWidgetHeight, "GradientEditBoxValueChange", true, 99, 0, 1);
        WAL_createButton('apply_StartPos', '', '50', 25, true);
        WAL_createButton('animPreviewStartBtn', '', '60', 25, true);
        
      //  WAL_disableWidget('StartfromXPosIP', 'data-jqxNumberInput', false, true); 
      //  WAL_disableWidget('StarttoXPosIP', 'data-jqxNumberInput', false, true);        
        WAL_disableWidget('durStartPosIP', 'data-jqxNumberInput', false, true); 
    //    WAL_disableWidget('apply_StartXPos', 'data-jqxButton', false, true); 
        
        
        
        WAL_createNumberInput("GradStartYIP", '40px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);
        
        
        
        WAL_createNumberInput("GradStopXIP", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);      
        WAL_createCheckBox('animateStopPos', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);       
        WAL_createDecimalNumberInput("durStopPosIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        
        WAL_createButton('apply_StopPos', '', '50', 25, true);
        WAL_createButton('animPreviewStopBtn', '', '60', 25, true);
        
        //WAL_disableWidget('StopfromXPosIP', 'data-jqxNumberInput', false, true); 
        //WAL_disableWidget('StoptoXPosIP', 'data-jqxNumberInput', false, true); 
      //  WAL_disableWidget('apply_StopXPos', 'data-jqxButton', false, true); 
        
        
        
        WAL_createNumberInput("GradStopYIP", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        var spreadValueDisplay = ['pad', 'reflect', 'repeat'];
        WAL_createDropdownList('LinearSpreadDDL', '110', '24', false, spreadValueDisplay, "GX_SpreadDDLHandler", '50');
        
        //radial specific 
        WAL_createNumberInput("centerXIP", '58px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        WAL_createCheckBox('animatecenterPos', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);        
       // WAL_createNumberInput("centerFromIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);
       // WAL_createNumberInput("centerToIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);        
        WAL_createDecimalNumberInput("durCenterIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        WAL_createButton('apply_CenterPos', '', '50', 25, true);
        WAL_createButton('animPreviewCenterBtn', '', '60', 25, true);               
       // WAL_setCheckBoxValue('animatecenterPos', false);
            
        WAL_createNumberInput("centerYIP", '58px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        
        WAL_createNumberInput("radiusIP", '58px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        WAL_createCheckBox('animateRadius', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);        
       // WAL_createNumberInput("radiusFromIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);
       // WAL_createNumberInput("radiusToIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);        
        WAL_createDecimalNumberInput("durRadiusIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        WAL_createButton('apply_Radius', '', '50', 25, true);
        WAL_createButton('animPreviewRadiusBtn', '', '60', 25, true);      
        
       
        
        WAL_createNumberInput("focusXIP", '58px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        WAL_createNumberInput("focusYIP", '58px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        
        WAL_createCheckBox('animateFocus', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);        
       // WAL_createNumberInput("focusFromIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);
      //  WAL_createNumberInput("focusToIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 100, 0, 1);        
        WAL_createDecimalNumberInput("durFocusIP", '50px', gWidgetHeight, "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        WAL_createButton('apply_Focus', '', '50', 25, true);
        WAL_createButton('animPreviewFocusBtn', '', '60', 25, true);
        
        WAL_createCheckBox('stop0_CB', 'GX_GradientCheckValueChange', '50', '20', '13', false, false);
        WAL_createNumberInput("stop0_Offset", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
      //  WAL_createCheckBox('animateStop_col0', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);
      //  WAL_createDecimalNumberInput("durStopColIP0", '50px', '24', "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        
              
        
        WAL_createCheckBox('stop1_CB', 'GX_GradientCheckValueChange', '50', '20', '13', false, false);
        WAL_createNumberInput("stop1_Offset", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
        WAL_createCheckBox('animateStop_col', 'GX_GradientCheckValueChange', '50', gWidgetHeight, '13', false, false);
        WAL_createDecimalNumberInput("durStopColIP", '50px', '24', "GradientEditBoxValueChange", true, 5.0, 0.0, 0.1);
        WAL_createButton('apply_Stop_Col', '', '50', 25, true);
        WAL_createButton('animPreviewStop', '', '60', 25, true);  
        
        WAL_createCheckBox('stop2_CB', 'GX_GradientCheckValueChange', '50', '20', '13', false, false);
        WAL_createNumberInput("stop2_Offset", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);
       
        
        
        WAL_createCheckBox('stop3_CB', 'GX_GradientCheckValueChange', '50', '20', '13', false, false);
        WAL_createNumberInput("stop3_Offset", '40px', '24', "GradientEditBoxValueChange", true, 100, 0, 1);

        

        WAL_setCheckBoxValue('stop0_CB', true);
        WAL_disableWidget('stop0_CB', 'data-jqxCheckBox', false, true);
        WAL_setCheckBoxValue('stop1_CB', true);
        WAL_disableWidget('stop1_CB', 'data-jqxCheckBox', false, true);
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
}

function GX_GradDlgOK() {
  //  alert("OK"); ///dont know what to do here as all the propert have been already changed
	
	
		var JQSel = "#" + 'gradTitleIP';    
        gradTitle = $(JQSel).val();
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
        {
        	var gradInfo = [gradTitle, currGradID, gGradientObj.GradResourceNode.classList[2] ]; 
        	gGradientList.push(gradInfo); 
        }        
        GX_UpdateGradientList(gGradientList); 
        WAL_SetItemByValueInList('gradlistDDL', gradTitle, 'true'); 
}
function GX_GradDlgCancel() {
    //alert("Cancel");
    gGradientObj.setGradientProperty(gGradientObj.GradParam); 
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
  //  WAL_createMenu("mainMenu", '450px', '25px', 'horizontal', "UIH_MenuItemClick", "actionText");  
    //set the version number here 
	  var NodeList = document.getElementsByTagName('title');
	  var titleNode = NodeList[0]; 
	  titleNode.innerHTML +=  gAppVersion; 
    //create the splitter 
    var winHeight = window.outerHeight*1.5 + 'px'; 
    var winWidth = window.outerWidth + 'px';
  //  Debug_Message("width="+winWidth + "height="+winHeight); 
   
 //   $('#splitterContainer').jqxSplitter({ height: winHeight, width: '100%', orientation: 'horizontal', theme: gTheme, panels: [{ size: '10%' }] });
 //   $('#dataContainerSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical', theme: gTheme, panels: [{ size: '30%' }] });
   //WAL_createSplitter(ID, Width, Height, Orientation, bshowSplitBar, bresizable, panelSize1, panelSize2, bCollaplible, minSize) 
    var retval = WAL_createSplitter('splitterContainer', winWidth, winHeight, 'horizontal', false, false, '8%', '92%', false, '8%');
    var retval = WAL_createSplitter('dataContainerSplitter', winWidth, '80%', 'vertical', true, false, '80%', '20%', true, '0');
    if(retval != true)
    {
    	Debug_Message("Unable to create Splitter");
    	return ;
    }
   
    //now create the menu here 
    WAL_createMenu("GXmenu", '900px', '30px', "horizontal", "GX_MenuItemHandler", 'actionText');
    WAL_createListBox('svgfileopenlistbox', '270', '250', "GX_LBItemsSelectHandler");
 	 	
    WAL_createWindow(gSVGFileOpenDlg,"Asset List", true, '282', '350', false,	true, false, false, false, "", 'SVGFO_LB_okbtn', 'SVGFO_LB_cancelbtn');
    WAL_createModalWindow(gSVGFileNameDlgID, '250', '150', 'pageOK', 'pageCancel');
    
    WAL_createListBox('svgfiledeletelistbox', '270', '250', "GX_LBItemsSelectHandler");
 	WAL_createButton('SVGFO_LB_deletebtn', '', '60', '24', true); 	
    WAL_createWindow(gSVGFileDeleteDlg,"Asset List", true, '282', '350', false,	true, false, false, false, "", '', 'SVGFD_LB_cancelbtn');
    
    gFileNameTitleNode = document.getElementById('filename'); 
    gFileNameHolder = document.getElementById('fname');
    
    GX_InitializeToolbar(); 
    
    WAL_createNumberInput("svgwidthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 1000, 0,1);
    WAL_createNumberInput("svgheightIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 1000, 0,1);
    WAL_createModalWindow(gSVGDimensionDlg, '250', '150', 'svgDimOK', 'svgDimCancel');
    
    WAL_createNumberInput("polynSidesIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 20, 3,1);
    WAL_createNumberInput("polyLengthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 500, 10,10);
    WAL_createModalWindow(gPolyInputDlg, '250', '150', 'polynSidesOK', 'polyLengthCancel');
    WAL_setNumberInputValue("polynSidesIP", '3', false);
    WAL_setNumberInputValue("polyLengthIP", '50', false);
    
    
    //fill color interface
    WAL_createButton('fillcolAnimAddBtn', 'GX_FillBtnHandler', '60', 24, true);
    WAL_createButton('fillcolAnimPreviewBtn', 'GX_FillBtnHandler', '60', 24, true);
    WAL_createCheckBox('animateFillColor', 'GX_FillColorAnimCheckValueChange', '50', gWidgetHeight, '13', false, false);
    WAL_createModelessWindow('fillcolorDlg', '250', '150', 'fillcolOK', 'fillcolCancel');
   
    
   // Debug_Message("DBM Initialized Successfully"); 
   
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
	var attrvalue; 
	attrvalue = svgdatanode.getAttribute('width'); 
	attrvalue = attrvalue.substring(0, attrvalue.length-2); 	
	svgcontainer.setAttribute('width',attrvalue ); 
	
	attrvalue = svgdatanode.getAttribute('height'); 
	attrvalue = attrvalue.substring(0, attrvalue.length-2); 
	svgcontainer.setAttribute('height',attrvalue ); 
	
	attrvalue = svgdatanode.getAttribute('viewBox'); 
	svgcontainer.setAttribute('viewBox',attrvalue ); 
	
	var rectBorderNode =  document.getElementById('svgborder'); 
	if(!rectBorderNode)
	{
		var rectBorder = '<rect id="svgborder" x="0" y="0" width="100%" height="100%" stroke="red" stroke-width="6" fill="none" visibility="visible"/>';
		GX_AddNewNodeFromXMLString('objectcontainer', rectBorder);		
	}
	WAL_SetItemInDropDownList('zoomDDL', 0, true);
	//set the file name to title etc. 
	if(svgFileName)
	{
		gFileNameTitleNode.innerHTML = gInitTitle + svgFileName; 
		var spanNode = document.getElementById('fname'); 
		gFileNameHolder.innerHTML = svgFileName;
		gSVGFilename = svgFileName; 
	}
	
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
	
	 //gObjectList = 0;	
	 
	 if(!gObjectList)
	 {
		 gObjectList = GX_PopulateObjectList('ALL_OBJECTS');
		 var animlist = new Array(); 
		 for(var i =0; i <gAnimList.length; i++)
		 {
			 //if(gAnimList[i][5] != 'Invisible Animation')
				 animlist.push(gAnimList[i][5]); 
		 }
		 WAL_UpdateDropDownList('listanimDDL', animlist);
	 }
	 
	
	 
//	WAL_setCheckBoxValue('snaptogrid', false); 
	GX_showEditorInterface('MODIFY_SHAPE_MODE'); 
	
	// reset all variables to default state 
}

function GX_MenuItemShow(menuid, itemText)
{
	//var args =  event.args;
	//var itemtext = $(args).text();
  //  var menuid = args.getAttribute("id");
    var spannode = document.getElementById('itemtextinfo'); 
    spannode.innerHTML = itemText;
    if(gCurrentObjectSelected)
    	objectType =  gCurrentObjectSelected.classList[0];  
    //SVG_TEXT_OBJECT 
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
		
		 WAL_showModalWindow(gSVGFileNameDlgID,"GX_SVGFileDlgNameOK", "" );				
		 break; 
	 case 'open':			 
		 GX_menu_open_svgfrom_remote();
		 
		 break; 
	 case 'delete':		 
		 GX_menu_delete_svgfrom_remote();
		 break;
	 case 'rectangle':
	 case 'ellipse':
	 case 'line_path':
	 case 'cbezier_path':
	 case 'qbezier_path':	
	 case 'elliptic_path':	
	
		 GX_AddNewSVGObject(menuid); 
		 GX_StartFreeDraw();
		 break;	
	 case 'polygon_path':
		 WAL_showModalWindow(gPolyInputDlg,"GX_PolyInputDlgOK", "" );
		 break; 
	 case 'freedraw_path':
		 GX_AddNewSVGObject(menuid); 
		 GX_StartFreeDraw();
		 break;
	 case 'text':
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
	 case 'layer':
		 GX_AddNewSVGObject('LAYER'); 
		 break; 
	 case 'removenode':
		 GX_RemoveObject(gCurrentObjectSelected); 
		 break; 
	 case 'layout':
		 GX_showEditorInterface('LAYOUT_MODE'); 
		 break; 
	 case 'copy':
		 GX_CopyObject(gCurrentObjectSelected); 
		 break; 
	 case 'paste':
		 GX_PasteObject(); 
		 break;
	 case 'zoom':
		 GX_showEditorInterface('ZOOMPAN_MODE'); 
		 break; 
	 case 'modify':
		 if(objectType == 'SVG_TEXT_OBJECT')
		 {
			 GX_showEditorInterface('MODIFY_TEXT_MODE');
			 GX_MakeTextEditable(gCurrentObjectSelected); 
		 }			  
		 else
			  GX_showEditorInterface('MODIFY_SHAPE_MODE');		
		 break; 
	 case 'stroke':
		  GX_showEditorInterface('STROKE_MODE'); 
		  break; 
	 case 'fill':
		  GX_showEditorInterface('FILL_MODE'); 
		  break;
	 case 'animate':
		 GX_showEditorInterface('ANIM_MODE'); 
		 break;
	 case 'fontproperty':
		 if(objectType == 'SVG_TEXT_OBJECT')
			 GX_showEditorInterface('FONT_STYLE_MODE');
		 else
			 Debug_Message('Select a Text Object'); 
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
	var itemtext = $(args).text();
    var menuid = args.getAttribute("id");
    GX_MenuItemShow(menuid, itemtext); 
	
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
	 var xmlstr = GXRDE_GetSVGMetaXML(svgfname);    
     if(xmlstr)
      	 GX_updateTreeWidget(xmlstr);  
	GX_InitializeDocument(svgfname); 
	WAL_expandAllTreeItems(gTreeNodeID, true);
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_BASELAYER'); 
	
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
    	 dataNode.innerHTML += retval; 
    	 GX_InitializeDocument(fname);     	 
     }	
    
   
     var xmlstr = GXRDE_GetSVGMetaXML(fname);    
     if(xmlstr)
      	 GX_updateTreeWidget(xmlstr);   
     WAL_expandAllTreeItems(gTreeNodeID, true);
     WAL_setTreeItemSelection(gTreeNodeID, 'TM_BASELAYER');
    
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

function GX_AddNewSVGObject(Type)
{
	//generate a unique ID 
	var parentID; 
	var ObjID =  GXRDE_GetUniqueID('SVG_'); 
	var objectType = Type.toUpperCase(); 
	gNewObjectID = ObjID;
	var retval; 
	//send out the request and get the XML from server
	if ( (objectType == 'LINEAR_GRADIENT')|| (objectType == 'RADIAL_GRADIENT') )
	{
		parentID = 'SVGDEFINITION'; 
		retval = GXRDE_addNewSVGObject(ObjID, parentID, objectType);
		GX_AddNewNodeFromXMLString(parentID, retval); 
		//var gradinfo = ['Default:Linear', ObjID]; 
		//gGradientList.push(gradinfo); 
		return ObjID;
		
	}
	
	var currNodeType = gCurrentTreeNode.getAttribute('type');
	if ( (Type != 'LAYER') && (currNodeType != 'LAYER') )
	{
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+gCurrLayerNode.id); 
		currNodeType = gCurrentTreeNode.getAttribute('type');
	}	
	
	
	if(objectType == 'LAYER')
	{
		parentID = 'SVGOBJECTCONTAINER'; 
		WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+parentID);
	}
	else
		parentID = gCurrentTreeNode.getAttribute('dataid');
	
	if(objectType == 'POLYGON_PATH')
		retval = GXRDE_addNewSVGPolygonObject(ObjID, parentID, objectType, gnPolygonSides, gPolygonLength); 
	else
		retval = GXRDE_addNewSVGObject(ObjID, parentID, objectType);
	
	var myobjType; 
	 var nodeTitle; 
	if(retval != 'ERROR')
	{		
		 GX_AddNewNodeFromXMLString(parentID, retval); 
		 var newNode = document.getElementById(ObjID);
		 if(!newNode)
			 return ; 
		  var nodename  = newNode.nodeName.toUpperCase(); 
		  if(objectType == 'LAYER')
		  {
			  myobjType = 'LAYER';
			  nodeTitle = 'Layer'; 
		  }			  
		  else
		  {
			  myobjType = 'OBJECT';
			  nodeTitle = nodename; 
		  }	 
		 var newXMLStr = '<li id="TM_'+ ObjID + '"  type="' + myobjType+ '" class="TREEMENU" level="3" dataid="' +ObjID + '"  data-type="' + nodename +'"  name="'+ nodeTitle+'"></li>';
		 WAL_AddTreeItem(gTreeWidgetID, newXMLStr, gCurrentTreeNode, "", true);
		// WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+ObjID);
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
			if( (objType == 'SVG_SHAPE_OBJECT') || (objType == 'SVG_PATH_OBJECT' ) || (objType == 'SVG_TEXT_OBJECT' ) )
				gObjectList.push([ObjID, objType]); 
		}
		
		
	}
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+ObjID);
		
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
	gSVGFilename = "";
	gCurrGrabber.setAttribute("visibility", "hidden");
	GX_UpdateMarkers(0, false); 
	WAL_ClearTreeItem(gTreeWidgetID); 
	
}

//all event handlers should start with On 
function OnShapeObjectSelection(evt) {
    
    var node = evt.target;
    if(bMove == true)
    	return ; 
  
    if(evt.ctrlKey)
    {
    	GX_SelectObjectInMultiMode(node); 
    	return ; 
    }
    if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node))   
    {
    	 //GX_SetSelection(node, true);
    	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+node.id); 
    }
    //_rm this is to force repeate selection in case of free drawing mode 
    else if(gCurrentObjectSelected == node)
    	GX_SetSelection(node,true); 
    	
   
    	
         return;
                          
 }


function GX_SetSelection(objNode, bFlag) {
	if(!objNode)
		return ; 
    var node = objNode; 
    if(!gCurrGrabber)
    	gCurrGrabber = document.getElementById("gripper");
    var x, y, w, h;
    var num;
    var initPoint;   
    var nodeClass = objNode.classList[0];  
    //play around witth the opacity of objects 
  
    
    if( (nodeClass == 'SVG_SHAPE_OBJECT')  || (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT') )
    {
    	gCurrLayerNode = objNode.parentNode;    	
    	gCurrLayerID = gCurrLayerNode.id; 
    	gCurrLayerTranslateValues = GX_GetTransformProperty(gCurrLayerNode, 'translate'); 
    	WAL_expandTreeItem(gTreeNodeID,'TM_'+gCurrLayerID, true); 
    }
    if (!gsvgRootNode)
    {
    	 gsvgRootNode = document.getElementById('SVGContainer');
    	 var freedrawNode = document.getElementById('freedraw'); 
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
    	 freedrawNode.setAttribute('width', num); 
    	 
    	 num = gsvgRootNode.getAttribute('height'); 
    	 num = num.substring(0, num.length-2); 
    	 gMaxBottom = new Number(num);
    	 gMaxBottom = gMaxBottom + gMaxTop;
    	 freedrawNode.setAttribute('height', num);	
    		
    	 //gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
    }
    if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node)) {  
	   	if(gCurrentObjectSelected)
	   	{
	   		if(nodeClass == 'LAYER')
	   		{
	   			gCurrLayerNode = node; //i.e. l;ayer node is set here 
	   			GX_UpdateLayerChildElements(gCurrentObjectSelected); 
	   			gCurrentObjectSelected.removeAttribute('opacity'); 
	   		}		   		
	   	}    	
    }
    if(bFlag == false)
    {
    	gCurrGrabber.setAttribute("visibility", "hidden");
    	objNode.setAttribute('pointer-events', 'visible'); 
    	//gCurrGrabber.setAttribute("pointer-events", "none");
    	if(objNode != gCurrentObjectSelected)
    		return ;      	 
         	    	
    	GX_UpdateMarkers(0, false); 
    	if(nodeClass == 'SVG_PATH_OBJECT')
    	{
    		GX_UpdatePathMarker(node.id, gPathDataArray, false);
    		GX_SetEraseEditAttributes(node, false);
    	}
    	GX_SetObjectAttribute(node, "", "", true, false);
    	GX_SaveObjectProperties(node, true);  
    	gCurrentObjectSelected = 0; 
    	bMove = false;
    	bResize = false; 
    	JQSel = '#' + gCurrentObjectSelected.id; 
    	
    	if(gCurrAnimNode)
    	{
    			
    		GX_RestoreAnimationObject(gCurrAnimNode.id);  
    		gCurrAnimNode=0;
    	}
      
    	return ; 
    }
    gCurrGrabber.setAttribute("visibility", "visible");
    if(gObjectEditMode == 'LAYOUT_MODE')
    	gCurrGrabber.setAttribute("pointer-events", "visible");
    else
    	gCurrGrabber.setAttribute("pointer-events", "visible");
    
    gCurrGrabber.setAttribute("stroke-opacity", "1.0");
    var x,y, w, h; 
    x = y = w = h = 0;
    
    if( (nodeClass == 'SVG_SHAPE_OBJECT') || (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT'))
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
    	 }
    	  var JQSel = '.SVG_SHAPE_OBJECT'; 
    	  $(JQSel).attr('opacity', gOpacityUnSelect); 
    	    
    	  JQSel = '.SVG_PATH_OBJECT';
    	  $(JQSel).attr('opacity', gOpacityUnSelect); 
    	  
    	  var JQSel = '.SVG_TEXT_OBJECT'; 
    	  $(JQSel).attr('opacity', gOpacityUnSelect); 
    	   
    	 JQSel = '#' + node.id; 
    	 $(JQSel).removeAttr('opacity');   
    	 
    	
    	
    }
    else if(nodeClass == 'LAYER')
    {
    	var layerDim = GX_GetLayerDimension(node.id);
    	x = layerDim.x; 
   	 	y = layerDim.y; 
   	 	w = layerDim.width;
   	 	h = layerDim.height; 
    }      
   
    
    if(gCurrentObjectSelected != node)   	
    	gPrevAttributeList = EL_getObjectAttributes(node);
    
    gCurrentObjectSelected = node;   
    gCurrGrabber.setAttribute("x", x-5);
    gCurrGrabber.setAttribute("y", y-6);
    gCurrGrabber.setAttribute("width", w+10);
    gCurrGrabber.setAttribute("height", h+10);
    
  
    //this is to ensure while a new object is being added with 0 Dim. doesnt show up 
    if( (w == 0) && (h == 0) )
    	gCurrGrabber.setAttribute('visibility', 'hidden'); 
    
    gGrabberDim = GX_GetRectObjectDim(gCurrGrabber); 
   
    if(nodeClass == 'SVG_SHAPE_OBJECT')
       	GX_UpdateMarkers(gGrabberDim, true);     
    if(nodeClass == 'SVG_PATH_OBJECT')
    {    	
    	var pathType = node.classList[1]; 
    	GX_AddPathMarker(node.id, gPathDataArray, true);  
    	var bClose = GX_IsPathClose(node); 
    	WAL_setCheckBoxValue('pathclose', bClose);    	
    	GX_UpdateEllipticParam(gCurrentObjectSelected);     	
    }
    	
    	
    
    if(nodeClass == 'LAYER')
    {    	
    	GX_UpdatePropertyOnUI('DIMENSION',layerDim );    	
    }    	  
    else if(nodeClass == 'SVG_SHAPE_OBJECT')
    {    	
    	GX_UpdatePropertyOnUI('DIMENSION',gCurrSelectedObjectDim);      	
    }
   //update the UI if valid 
    if( (nodeClass == 'SVG_SHAPE_OBJECT') || (nodeClass == 'SVG_PATH_OBJECT'))
    {
    	var rotateparam = node.classList[2]; 
    	var rotatearr = rotateparam.split(','); 
    	gCurrSelectedObjectDim.rotate = new Number(rotatearr[1]); 
    	WAL_setNumberInputValue('rotateIP', gCurrSelectedObjectDim.rotate+'', false); 
    	
    	var strokewidth = gCurrentObjectSelected.getAttribute('stroke-width'); 
    	WAL_setNumberInputValue('strokeWeightIP', strokewidth, false); 
    	
    	var strokeopacity = gCurrentObjectSelected.getAttribute('stroke-opacity'); 
    	strokeopacity = Math.round(strokeopacity * 100);
    	WAL_setNumberInputValue('strokeOpacityIP', strokeopacity, false); 
    	
    	//var colorval = gCurrentObjectSelected.getAttribute('stroke-opacity'); 
    	//WAL_setColorPickerValue('colorpickwidget', colorval); 
    	//update the Gradient Values 
    	GX_UpdatePropertyOnUI('GRADIENT', ""); 
    }
    gCurrentObjectSelected.setAttribute('pointer-events', 'none'); 
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
	
	var JQSel = ".SVG_TEXT_OBJECT"; 
	$(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 		
	$(JQSel).attr('pointer-events','visible' ); 
	
}
function OnSVGParentClick(evt)
{
	var node = evt.target;
	var ID = node.id; 
	if(ID!= 'gridpattern')
		return ;
	
	//if it is text node then do the needful 
	//if( (gCurrentObjectSelected) && (gCurrentObjectSelected.nodeName.toUpperCase() == 'TEXT') && (gObjectEditMode == 'MODIFY_TEXT_MODE') )
		//GX_SaveText(gCurrentObjectSelected); 
	//check if the click is outside the gripper rectangle only then act
	var status = gCurrGrabber.getAttribute('visibility'); 
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
	//if(gObjectEditMode == 'MODIFY_SHAPE_MODE')
	//	return; 
	GX_ResetAllSelections();
	/*if(gCurrLayerNode)
		selItemID = gCurrLayerNode.id; 
	else
	*/
	selItemID = 'SVGOBJECTCONTAINER'; 
	WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+selItemID); 	
	
	
}

function GX_ResetAllSelections()
{
	 var JQSel = '.LAYER'; 
	 $(JQSel).removeAttr('opacity'); 
	//restore the animation object
	 
	if(gCurrentObjectSelected)
	{
		var nodeclass = gCurrentObjectSelected.classList[0] ;//('class'); 
    	if(nodeclass == 'LAYER')
    		GX_UpdateLayerChildElements(gCurrentObjectSelected); 
    	
		GX_SetSelection(gCurrentObjectSelected, false);	 
		gCurrDirection = 'NONE'; 
		gsvgRootNode.setAttribute("cursor", "auto");  	  
		
		gIndicatorPath = []; 
		var pathNode = document.getElementById('indicatorpath'); 
		pathNode.setAttribute('d', ''); 		
		  bMarkerMove = false;  
		GX_SetMarkerNodeSelection(gCurrentMarkerNode, false);   
	}
	
	if(gbMultiSelection == true)
	{
		GX_DeselectObjectFromMultiMode(); 
		gbMultiSelection = false;
		
	}
	var JQSel = '.SVG_SHAPE_OBJECT'; 
	$(JQSel).removeAttr('opacity');   
	JQSel = '.SVG_PATH_OBJECT';
	$(JQSel).removeAttr('opacity');   
	JQSel = '.SVG_TEXT_OBJECT'; 
	$(JQSel).removeAttr('opacity');		
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
	  if( (GrabberDim.width == 0) || (GrabberDim.height == 0))
		  return; 
	  //if(gObjectEditMode != 'MODIFY_SHAPE_MODE')
	//	  return ; 
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
	if(gObjectEditMode == 'MODIFY_SHAPE_MODE')
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
        GX_SetObjectAttribute(gCurrGrabber, "stroke-opacity", gOpacityUnSelect, false, false); 
        GX_SetObjectAttribute(gCurrGrabber, "DIMENSION", gGrabberDim, false, false);
        GX_SetObjectAttribute(gCurrGrabber, "pointer-events", "visible", false, false);
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


function OnObjectMouseDown(evt) {	
	  
	if(!gCurrentObjectSelected)
		return ;
	var objectType; 
	
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
	if(objectType == 'SVG_SHAPE_OBJECT') 
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
	else if(objectType == 'SVG_TEXT_OBJECT')
	{
		gCurrSelectedObjectDim = GX_GetObjectAttribute(gCurrentObjectSelected, 'DIMENSION');
		//_rm to override the boundary box dimension 
		gCurrSelectedObjectDim.x = gCurrentObjectSelected.getAttribute('x'); 
		gCurrSelectedObjectDim.y = gCurrentObjectSelected.getAttribute('y');		
	}
	else if(objectType == 'LAYER')
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
            if(objectType == 'SVG_PATH_OBJECT')
            	GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);
            GX_SetSelection(gCurrentObjectSelected, true);
        }            
    }
    else
    {
    	gsvgRootNode.setAttribute("cursor", "auto");
        evt.target.setAttribute("pointer-events", "visible");
        bResize = false;
        gCurrDirection = 'none';     
        if(gObjectEditMode == 'MODIFY_SHAPE_MODE')
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

function OnObjectMove(evt) {

    //trap new coordiantes and store the relative mouse coordinaes
    var relX, relY;
    var retVal=true;
    if(gCurrentObjectSelected)
    	var objectType = gCurrentObjectSelected.classList[0];
   
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
        retVal = GX_SetRectObjectDim(gCurrGrabber,newObjDim); 
      //  retVal =  GX_SetObjectAttribute(gCurrGrabber, "DIMENSION", newObjDim, false, false);
      //  Debug_Message("New x=" + newObjDim.x + "New y=" +newObjDim.y); 
        if(retVal == false)
        	return ; 
        if(objectType == 'SVG_SHAPE_OBJECT')	
        	GX_UpdateMarkers(newObjDim, true); 
         
        if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_TEXT_OBJECT') )
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
            retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", newObjDim, false, false);
                      
        }        	
    	else if(objectType == 'LAYER')
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
        if(objectType == 'SVG_SHAPE_OBJECT')
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
                    GX_UpdateMarkers(newGrabberDim, true);           
                    retVal =GX_SetRectObjectDim(gCurrentObjectSelected,newObjDim);
                   // retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "DIMENSION", newObjDim, false, true);
                    if(retVal == false)
                    	return ; 
                    if(objectType == 'SVG_SHAPE_OBJECT')
                    	GX_UpdatePropertyOnUI('DIMENSION', newObjDim); 
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
	var destparentNode =document.getElementById(beforeParentID); 
	
	srcparentNode.removeChild(currNode); 
	var retNode = destparentNode.insertBefore(clonedNode, beforeNode);		
	GX_SetSelection(retNode, true);
	GXRDE_MoveZIndex(currobjID, beforeID, beforeParentID);
}

function GX_updateTreeWidget(string)
{
	var newresptr = "<div id='node_container' style='overflow:auto; width:inherit; height:inherit; border:none; font-style:italic'>"+string+"</div>";
	WAL_updateTree(gTreeWidgetID,  'auto', 'auto', newresptr, "GX_TreeItemClick", true, "GX_TreeHandlerDragStart", "GX_TreeHandlerDragEnd");
	
	//UIH_InsertImagesInTreeWidget(); 
	
	//var treeNode = document.getElementById(gTreeWidgetID); 
   // treeNode.style.backgroundColor = 'pink'; 
	var JQSel;	
	JQSel = "#"+gTreeNodeID; 
	//$(JQSel).css('background-image', ' -moz-linear-gradient(top, #fcd95f, #fef2cb)');
	$(JQSel).css('background-image', 'linear-gradient(0deg, #eeeeee , #efefef )');
	//background-image: linear-gradient(0deg, #eeeeee 80%,  #efefef 100%)
	//$(JQSel).css('font-size','small'); 
	
	JQSel = "#"+gTreeNodeID + " .jqx-widget-content"; 
     $(JQSel).css('background-color', 'transparent');	
  //   gPreviousTreeInfoType = gCurrentTreeInfoType; 
          
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
	GX_SetSelection(gCurrentObjectSelected, false); 
	switch(nodeType)
	{
	case 'SVGROOT':
		GX_ShowSVGRootInterface(nodeDataID); 
		break;
	case 'LAYER':
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
	 var objectID, destParentID, objectType;
	 objectID = srcNode.getAttribute('dataid'); 
	 destID = dropNode.getAttribute('dataid'); 
	 objectType = srcNode.getAttribute('type'); 
	 var objPosition  = dropPosition; 	
	 if(objectType != 'OBJECT')
		 return; 
	 
	 srcNode = document.getElementById(objectID);
	 destNode = document.getElementById(destID);
	 var destParentNode = destNode.parentNode; 
	 if(dropPosition == 'after')
	 {
		destNode = destNode.nextSibling; 
		if(!destNode)
			destID = 0; 
		else
			destID = destNode.id;	
	 }
	
	 GX_MoveObjectNode(objectID,destID, destParentNode.id); 
	 WAL_expandTreeItem(gTreeNodeID,dropItem.id, true); 
	 retval  = GX_setTreeItemSelection(nodeID);	 
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
	var JQSel = '.LAYER'; 
	$(JQSel).attr('opacity', gOpacityUnSelect); 
	JQSel = '#' +  layerID; 
	$(JQSel).removeAttr('opacity'); 	
	//var layerDim = GX_GetLayerDimension(layerID);
	var layerNode = document.getElementById(layerID);	
	gCurrLayerNode = layerNode; 
	GX_SetSelection(layerNode, true); 
    	
}

function GX_ShowObjectInterface(objectID)
{
	var currObjNode = document.getElementById(objectID); 
	
	//get the parent Layer 
	var layerNode = currObjNode.parentNode; 
	var layerID = layerNode.id; 
	//reduce the opacity of all layers 
	var JQSel = '.LAYER';
	$(JQSel).attr('opacity', gOpacityUnSelect); 
	//set the opacity of current layer 
	JQSel= '#' + layerID; 
	$(JQSel).removeAttr('opacity'); 
	
	//set the selection to current object 
	GX_SetSelection(currObjNode,true); 
	
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
		
		
		if ( (objClass == 'SVG_SHAPE_OBJECT')|| (objClass == 'SVG_PATH_OBJECT') || (objClass == 'SVG_TEXT_OBJECT') )
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
	//Debug_Message("LayerX = " + layerDim.x + "LayerY=" + layerDim.y+ "Width="+ layerDim.width); 
	return layerDim; 
}

function GX_GetTransformProperty(gNode, transfType)
{
	var transfDim =  new sDimension(); 
	var str = gNode.getAttribute('transform'); 
	if(!str)
		return transfDim;
	
	var arr = str.split(" "); 
	var subarr; 
	var innerArr; 
	for(var j =0; j < arr.length; j++)
	{
		arr[j] = arr[j].substring(0, arr[j].length-1); 
		subarr = arr[j].split("("); 
		if( (transfType == 'translate') && (subarr[0] == 'translate') )
		{
			innerArr = subarr[1].split(","); 
			transfDim.x = new Number(innerArr[0]); 
			transfDim.y = new Number(innerArr[1]);	
			return transfDim; 
		}
		else if( (transfType == 'scale') && (subarr[0] == 'scale') )
		{
			//here the assumption is scale will always have two values for sx, sy
			innerArr = subarr[1].split(","); 
			transfDim.x = new Number(innerArr[0]); 
			transfDim.y = new Number(innerArr[1]);		
			return transfDim; 
		}
		else if((transfType == 'rotate') && (subarr[0] == 'rotate'))
		{
			//here the assumption is rotate will always have ONE values for angle NO cx, cy
			transfDim.x = new Number(subarr[1]);	//using the width dimension for angle 
			return transfDim; 
		}
	}
}
function GX_SetTransformProperty(gNode, transfType, transfDim)
{
	//var transfDim =  new sDimension(); 
	var Transfstr = gNode.getAttribute('transform'); 
	if(!Transfstr)
		Transfstr = "";
	gTransfArray = Transfstr.split(" "); 
	var str=""; 
	var objectType = gNode.classList[0]; 
	var shapeType = gNode.classList[1]; 
	if(transfType == 'translate')
	{
		if( (objectType == 'SVG_PATH_OBJECT') || (objectType == 'LAYER') )
		{
			str = 'translate(' + transfDim.x + ','+ transfDim.y +')'; 
			gTransfArray[0] = str; 
		}
		else if(objectType == 'SVG_SHAPE_OBJECT')
		{
			if(shapeType == 'RECTANGLE')
			{
				gNode.setAttribute('x',transfDim.x); 
				gNode.setAttribute('y',transfDim.y); 
			}
			else if(shapeType == 'ELLIPSE')
			{
				gNode.setAttribute('cx',transfDim.x); 
				gNode.setAttribute('cy',transfDim.y); 
			}
			
			str = 'rotate(' + transfDim.rotate;		
			gTransfArray[2]= str;		
			str = transfDim.rotCentreX +',' + transfDim.rotCentreY + ')';
			gTransfArray[3]= str;
		}	
		else if(objectType == 'SVG_TEXT_OBJECT')
		{
			gNode.setAttribute('x',transfDim.x); 
			gNode.setAttribute('y',transfDim.y); 
		}
		/*
		if((transfDim.x == 0) || (transfDim.y ==0) )
		{
			break; 
		}
		else
		{		
			str = transfDim.x +',' + transfDim.y + ')';
			gTransfArray[3]= str;
		}	
		*/	
	}
	else if(transfType == 'scale')
	{
		str = 'scale(' + transfDim.x + ','+ transfDim.y +')';		
		gTransfArray[1] = str; 		
	}
	else if(transfType == 'rotate')
	{
		str = 'rotate(' + transfDim.rotate;		
		gTransfArray[2]= str;		
		str = transfDim.rotCentreX +',' + transfDim.rotCentreY + ')';
		gTransfArray[3]= str;		
		/*gPathDataArray = GX_ConvertPathDataToArray(gNode); 	
		centreRotation = GX_GetRectObjectDim(gNode); 
		centreRotation.x = Math.round(centreRotation.x + centreRotation.width/2); 
		centreRotation.y = Math.round(centreRotation.y + centreRotation.height/2); 
		GX_SetRotationToPoints(transfDim.width, gPathDataArray, centreRotation);
		GX_SetObjectAttribute(gNode, 'PATH_DATA', gPathDataArray, true, false); 
		*/
	}	
	Transfstr = gTransfArray[0] + ' ' + gTransfArray[1] + ' '+ gTransfArray[2] + ' '+ gTransfArray[3];	
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
		if(nodeclass == 'SVG_SHAPE_OBJECT')
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
function GX_GetRectObjectDim(ObjNode)
{
	 	var mypoint = new sDimension();
	    var objClass = ObjNode.classList[0] ;//'class'); 
	    var x, y, width, height; 
	    //get the parent layer node
	    //get the dimension of the same 
	    if (ObjNode.nodeName == 'rect') {
	    	 mypoint.x = new Number(ObjNode.getAttribute('x')); 
		     mypoint.y = new Number(ObjNode.getAttribute('y'));
		     mypoint.width = new Number(ObjNode.getAttribute('width')); 
		     mypoint.height = new Number(ObjNode.getAttribute('height'));		            
	    }
	    else if(ObjNode.nodeName == 'ellipse') {	        
	        mypoint.x = new Number(ObjNode.getAttribute('cx')); 
	        mypoint.y = new Number(ObjNode.getAttribute('cy'));
	        mypoint.width = new Number(ObjNode.getAttribute('rx')); 
	        mypoint.height = new Number(ObjNode.getAttribute('ry'));
	        mypoint.x -=  mypoint.width; 
	        mypoint.y -=  mypoint.height;   
	        mypoint.width = 2*mypoint.width; 
	        mypoint.height = 2* mypoint.height; 
	    }  
	    else if(ObjNode.nodeName == 'text')
	    {
	    	mypoint = ObjNode.getBBox(); 
	    	var y = ObjNode.getAttribute('y');	    	 
	    	//mypoint.x = ObjNode.getAttribute('x');
	    	//mypoint.y = ObjNode.getAttribute('y');
	    }
	    else if(ObjNode.nodeName == 'g')
	    {
	    	var tempDim = GX_GetTransformProperty(ObjNode, 'translate'); 
	    	return tempDim; 
	    }	  
	    else if(objClass = 'SVG_PATH_OBJECT')
	    {
	    	mypoint = GX_GetPathDimension(ObjNode);
	    }
	    var rotParam = ObjNode.classList[2]; 
	    if(rotParam)
	    {
	    	var rotArr = rotParam.split(','); 
	 	    if(rotArr[0] == 'ROTATE')
	 	    {
	 	    	mypoint.rotate = rotArr[1]; 
	 	    	mypoint.rotCentreX = Math.round(mypoint.x + mypoint.width/2); 
	 	    	mypoint.rotCentreY = Math.round(mypoint.y + mypoint.height/2);
	 	    }
	    }
	   
	     return mypoint;
}

function GX_SetRectObjectDim(ObjNode, newDim) 
{
   
    var rightLimit, bottomLimit; 
    var x, y, width, height; 
    //check the limits 
    var modDim = newDim; 
    modDim.x = Math.round(modDim.x);
    modDim.y = Math.round(modDim.y);
    modDim.width = Math.round(modDim.width);
    modDim.height = Math.round(modDim.height);
    
    var objectType = ObjNode.classList[1]; 
       
    var nodeclass = ObjNode.classList[0]; 
    if(gSnapToGrid == true)
    {
    	modDim.x = modDim.x / 10; 
    	modDim.x = Math.round(modDim.x); 
    	modDim.x *= 10; 
    	
    	modDim.y = modDim.y / 10; 
    	modDim.y = Math.round(modDim.y); 
    	modDim.y *= 10; 
    	
    	modDim.width = modDim.width / 10; 
    	modDim.width = Math.round(modDim.width); 
    	modDim.width *= 10; 
    	
    	modDim.height = modDim.height / 10; 
    	modDim.height = Math.round(modDim.height); 
    	modDim.height *= 10;
    	
    }
    var myheight = modDim.height + 0; 
    rightLimit = modDim.x + modDim.width; 
    bottomLimit = modDim.y + modDim.height;
    if(modDim.x <= gMaxLeft )
    {
    	//gCurrSelectedObjectDim.x
    	//gGrabberDim.x
   	// alert("Left Boundary: modDimX=" + modDim.x + "gCurrSelectedObjectDim.x="+gCurrSelectedObjectDim.x+ "gGrabberDim.x"+ gGrabberDim.x); 
   	 return false;
    }
    if(modDim.y <= gMaxTop )
    {
   	// alert("Top Boundary"); 
   	 return false ;
    }
    
    if(rightLimit >= gMaxRight)
    {
   	 //alert("Right Boundary"); 
   	 return false;
    }
    if(bottomLimit >= gMaxBottom)
    {
   	 //alert("Bottom Boundary"); 
   	 return false ;
    }
    
    if (ObjNode.nodeName == 'rect') {
            ObjNode.setAttribute('x', modDim.x);
            ObjNode.setAttribute('y', modDim.y);
            ObjNode.setAttribute('width', modDim.width);
            ObjNode.setAttribute('height', myheight);              
    }      
    else if (ObjNode.nodeName == 'text') {
        ObjNode.setAttribute('x', modDim.x);      
        ObjNode.setAttribute('y', modDim.y);                   
    }       
       //assuming that a container rectangle dim is passed  
    else if(ObjNode.nodeName == 'ellipse') {
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
	GX_SetSelection(objNode, false); 
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
	
	WAL_createCustomButton('svgdim_icon', 'GX_ToolbarHandler');
	WAL_createCheckBox('snaptogrid', 'GX_CheckValueChange', '110', '20' , '13', false, false);
		
	WAL_createNumberInput("widthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 1280, 0,1);
    WAL_createNumberInput("heightIP", '58px', gDDLHeight, "GX_EditBoxValueChange", true, 1000, 0,1);     
    WAL_createCustomButton('alignwidth_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignheight_icon', 'GX_ToolbarHandler');    
    
    //position group 
    WAL_createNumberInput("lposIP", '58px', gDDLHeight,  "GX_EditBoxValueChange", true, 1280, 0,1);
    WAL_createNumberInput("tposIP", '58px', gDDLHeight, "GX_EditBoxValueChange", true, 1000, 0,1); 
    WAL_createCustomButton('alignleft_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('aligntop_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignright_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignbottom_icon', 'GX_ToolbarHandler');
  
    WAL_createCustomButton('alignhorcenter_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('alignvertcenter_icon', 'GX_ToolbarHandler');  
    
    
    //zoompan interface 
    var zoomeValueDisplay = ['1','1.25','1.5','2.0', '2.25', '2.5', '3.0']; 
    WAL_createDropdownListwithButton("zoomDDL", '0','0',zoomeValueDisplay, "GX_DDLHandler", '80', '80','zoom_icon', gButtonWidth, gButtonHeight);
    WAL_createCustomButton('panright_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('panleft_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('panup_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('pandown_icon', 'GX_ToolbarHandler');
    
    
    //modify interface 
    WAL_createCustomButton('erase_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('modify_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('addpoint_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('deletepoint_icon', 'GX_ToolbarHandler');
    
    
    WAL_createCheckBox('pathclose', 'GX_CheckValueChange', '110', '20' , '13', false, false);
    WAL_createNumberInput("rotateIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 180, -180,5);    
    //WAL_createNumberInput("rotateIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 180, -180,5);
    WAL_setNumberInputValue('rotateIP', 0, false);
    WAL_createNumberInput("lengthIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 500,0,1);
    WAL_createNumberInput("radiusXIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true,300,0,1);
    
    WAL_createNumberInput("radiusYIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 300,0, 1);
    WAL_createCheckBox('largearcCheckBox', 'GX_CheckValueChange', '90', '20' , '13', false, false);
    WAL_createCheckBox('sweepCheckBox', 'GX_CheckValueChange', '110', '20' , '13', false, false);   
    
    
    //STROKE INTERFACE 
    WAL_createNumberInput("strokeWeightIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 100,1,1);
    WAL_setNumberInputValue('strokeWeightIP', 1, false);
    WAL_createCustomButton('stroke_dash_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('stroke_color_icon', 'GX_ToolbarHandler');
    WAL_createColorPickerWindow("colorpickwidget", "colorpicker", '350', '250', "okbtn", "cancelbtn");
    
    
    WAL_createCustomButton('stroke_linjoin_icon', 'GX_ToolbarHandler');
    var linecapValues = ['round','miter', 'bevel']; 
    WAL_createDropdownListwithButton("strokeLinejoinDDL", '0','0',linecapValues, "GX_DDLHandler", '80', '80','stroke_linjoin_icon', gButtonWidth, gButtonHeight);
    
    
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
    //WAL_createDropdownListwithButton(ID, dispwidth, dispheight,DataSource,  handlerFnName, DDLdropDownWidth, DDLdropDownHeight, buttonID, buttonwidth, buttonheight)
    WAL_createDropdownListwithButton("strokedashDDL", '0','0',listBoxSrc, "GX_DDLHandler", '140', '80','stroke_dash_icon', gButtonWidth, gButtonHeight);
      
    WAL_createNumberInput("strokeOpacityIP", '58px', gDDLHeight, "GX_EditBoxValueChange",true, 100,1,1);
    WAL_setNumberInputValue('strokeOpacityIP', 100, false);
    
    //fill interface 
   // var gradList = ['New:Linear', 'New:Radial']; 
    var gradList = ['none'];
    
    WAL_createDropdownList('gradlistDDL', '160', '24', false, gradList, "GX_DDLHandler", '50');
    WAL_createCustomButton('edit_grad_icon', 'GX_ToolbarHandler');  
    WAL_createCustomButton('fill_color_icon', 'GX_ToolbarHandler'); 
    WAL_createCustomButton('linear_grad_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('radial_grad_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('delete_grad_icon', 'GX_ToolbarHandler');    
    GX_CreateGradientWidget('gradientDlg');
    
   // 
    WAL_createCustomButton('anim_new_icon', 'GX_ToolbarHandler');   
    var animlist = []; 
    WAL_createDropdownList('listanimDDL', '160', '24', false, animlist, "GX_DDLHandler", '50');
    WAL_createCustomButton('anim_edit_icon', 'GX_ToolbarHandler'); 
    WAL_createCustomButton('anim_preview_icon', 'GX_ToolbarHandler'); 
    WAL_createCustomButton('anim_delete_icon', 'GX_ToolbarHandler'); 
   // WAL_createCustomButton('anim_copy_icon', 'GX_ToolbarHandler');  
    
    //TEXT OBJECT INTERFACE 
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
    
    WAL_createDropdownListWithItemStyle("fontNameDDL", '170px', '24', false, "GX_DDLHandler", '200',fontFamilyValue, 'fontFamilyValue',fontFamilyDisplay, 'fontFamilyDisplay');
    
    //var fontSizeValue = ['xx-small','x-small','small','medium','large','x-large','xx-large'];    
   // WAL_createDropdownListwithButton("fontsizeDDL", '0','0',fontSizeValue,  "GX_DDLHandler", '100', '100', 'fontsize_icon', gTE_ButtonWidth, gTE_ButtonHeight);
    
    WAL_createNumberInput("fontSizeIP", '58px', '24', "GX_EditBoxValueChange",true, 100,8,1);
    WAL_setNumberInputValue('fontSizeIP', 18, false);
    WAL_createCustomButton('bold_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('italic_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('underline_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('strikethrough_icon', 'GX_ToolbarHandler');
    WAL_createCustomButton('smallcaps_icon', 'GX_ToolbarHandler');
    
    //WAL_createCustomButton('blink_icon', 'GX_ToolbarHandler');
   
    
}

function GX_EditBoxValueChange(value, widgetnode)
{
	var DimValue; 
	var retVal; 
	if(!gCurrentObjectSelected)
		return ; 	
	var nodeClass =  gCurrentObjectSelected.classList[0]; //('class');	
	var wdgtType = widgetnode.getAttribute('type'); 
	DimValue = GX_GetRectObjectDim(gCurrentObjectSelected); 
	if(nodeClass == 'SVG_TEXT_OBJECT' )
	{
		DimValue.x = gCurrentObjectSelected.getAttribute('x'); 
		DimValue.y = gCurrentObjectSelected.getAttribute('y'); 
	}
		
	var currnodeSel = gCurrentObjectSelected; 
	
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
	if( (nodeClass == 'SVG_SHAPE_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT') )
	{
		if(wdgtType == 'DIMENSION')
		{
			switch(widgetnode.id)
			{
			case 'lposIP':		
				DimValue.x = new Number(value);							
				break; 
			case 'tposIP':
				DimValue.y = new Number(value);			
				break;
			case 'widthIP':
				DimValue.width = new Number(value);				
				break; 
			case 'heightIP':
				DimValue.height = new Number(value);				
				break;
			default:
				break; 
			}
			if(nodeClass == 'SVG_SHAPE_OBJECT')
				retVal = GX_SetObjectAttribute(currnodeSel, "DIMENSION", DimValue, true, false);
			else (nodeClass == 'SVG_TEXT_OBJECT')	
		    {
				//here we want to shift the text hence querying on the x,y attribute 
				//var newValue = 
				
				retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "TRANSLATE", DimValue, true, false);
				//retVal = GX_SetObjectAttribute(gCurrentObjectSelected, "DIMENSION", DimValue, true, false);
		    }
				
			return ; 			
		}//if(wdgtType == 'DIMENSION')				
	} //(nodeClass == 'SVG_SHAPE_OBJECT')
	var objType = currnodeSel.classList[1]; 
	if( (nodeClass == 'SVG_SHAPE_OBJECT')||(nodeClass == 'SVG_PATH_OBJECT')|| (nodeClass == 'SVG_TEXT_OBJECT') )
	{
		if(widgetnode.id == 'strokeWeightIP')
		{
			GX_SetObjectAttribute(gCurrentObjectSelected, 'stroke-width', value, true, false);
			return; 
		}
		else if(widgetnode.id == 'strokeOpacityIP')
		{
			var opacity = value/100; 
			GX_SetObjectAttribute(gCurrentObjectSelected, 'stroke-opacity', opacity, true, false);
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
function GX_ToolbarHandler(Node)
{
	var btnID = Node.id;
	if(gCurrentObjectSelected)
		var objectType = gCurrentObjectSelected.classList[0];
	
	switch(btnID)
	{
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
	case 'svgdim_icon':
		var svgdatanode = document.getElementById('SVGOBJECTCONTAINER'); 
		var width = svgdatanode.getAttribute('width'); 
		WAL_setNumberInputValue("svgwidthIP", width, false);
		
		var height = svgdatanode.getAttribute('height');	
		WAL_setNumberInputValue("svgheightIP", height, false);
		
		WAL_showModalWindow(gSVGDimensionDlg,"GX_SVGDimensionDlgOK", "" );
		break; 
	case 'erase_icon':
		GX_StartErase(); 
		break;
	case 'modify_icon':
		GX_Modify();
		break; 
	case 'addpoint_icon':
		GX_AddPoint(); 
		break;
	case 'deletepoint_icon':
		GX_DeletePoint(); 
		break; 
	case 'stroke_color_icon':
		WAL_hideWidget('colorpickwidget', true); 
		if(!gCurrentObjectSelected)
			return ; 
		var initColVal = gCurrentObjectSelected.getAttribute('stroke'); 		
		WAL_showColorPickerWidget('colorpickwidget', '', 'stroke_color_icon','stroke', initColVal, gCurrentObjectSelected.id);
		break; 
	case 'edit_grad_icon':
		var currgradTitle = WAL_getDropdownListSelection('gradlistDDL');
		var gradInfo = GX_GetGradInfoByTitle(currgradTitle); 
		if(gradInfo)
		{
			GX_ShowGradWindow(gradInfo[1], gradInfo[2]);			
		}
		
		break; 
	case 'linear_grad_icon':
	{
		 var gradID = GX_AddNewSVGObject('LINEAR_GRADIENT');		
		 GX_ShowGradWindow(gradID, 'LINEAR_GRAD');		
		if(!gradID)
		{
			Debug_Message("Grad title not Found");
			return; 
		}
		//add it to the list items		
		if(gCurrentObjectSelected) 
		{
			var objectType = gCurrentObjectSelected.classList[0]; 
			if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_PATH_OBJECT') || (objectType == 'SVG_TEXT_OBJECT'))
			{
				var fillurl = 'url(#' + gradID + ')';				
				GX_SetObjectAttribute(gCurrentObjectSelected, "fill", fillurl, true, false);				
			}			
		}		
	}
		break; 
	case 'radial_grad_icon':
	{
		var gradID = GX_AddNewSVGObject('RADIAL_GRADIENT');		
		 GX_ShowGradWindow(gradID, 'RADIAL_GRAD');		
		if(!gradID)
		{
			Debug_Message("Grad title not Found");
			return; 
		}
		//add it to the list items		
		if(gCurrentObjectSelected) 
		{
			var objectType = gCurrentObjectSelected.classList[0]; 
			if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_PATH_OBJECT') || (objectType == 'SVG_TEXT_OBJECT'))
			{
				var fillurl = 'url(#' + gradID + ')';				
				GX_SetObjectAttribute(gCurrentObjectSelected, "fill", fillurl, true, false);				
			}			
		}		
	}
		break;		
	case 'delete_grad_icon':
		var currgradTitle = WAL_getDropdownListSelection('gradlistDDL');
		var gradInfo = GX_GetGradInfoByTitle(currgradTitle); 
		GX_RemoveGradient(gradInfo[1], currgradTitle);
		break; 
	 case 'anim_new_icon':
		 gLastPositionValue = 0;
		 GX_AddNewAnimation();
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
			GX_EditAnimation(animID); 
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
	 //case 'anim_copy_icon':
	//	 break; 
		 
	 case 'fill_color_icon':
		 if(!gCurrentObjectSelected)
				return ; 
		 gInitFillValue = gCurrentObjectSelected.getAttribute('fill');
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
		 /*
		 var btnNode = document.getElementById('fill_colorbtn'); 
		 gInitFillValue = gCurrentObjectSelected.getAttribute('fill');
		 var str = gInitFillValue.substring(0,3); 
		 if(str != 'url')
		 {
			 gInitFillColor = gInitFillValue;			 
		 }
		 else
		 {
			 gInitFillColor = 'grey'; 
		 }
		 btnNode.style.backgroundColor = gInitFillColor;
		 WAL_showModalWindow('fillcolorDlg','GX_FillColorDlgOK', 'GX_FillColorDlgCancel');
		 */ 
		 break; 
		 
	 case 'bold_icon':
		 var Prop = gCurrentObjectSelected.getAttribute('font-weight'); 
		 if(Prop == 'bold')
			 Prop = 'normal'; 
		 else
			 Prop = 'bold'; 
		GX_SetObjectAttribute(gCurrentObjectSelected, "font-weight", Prop, true, false);
		 break;
	 case 'italic_icon':
		 var Prop = gCurrentObjectSelected.getAttribute('font-style'); 
		 if(Prop == 'italic')
			 Prop = 'normal'; 
		 else
			 Prop = 'italic'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "font-style", Prop, true, false);
		 break;
	 case 'underline_icon':
		 var Prop = gCurrentObjectSelected.getAttribute('text-decoration'); 
		 if(Prop == 'underline')
			 Prop = 'normal'; 
		 else
			 Prop = 'underline'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "text-decoration", Prop, true, false);
		 break;
	 case 'strikethrough_icon':
		 var Prop = gCurrentObjectSelected.getAttribute('text-decoration'); 
		 if(Prop == 'line-through')
			 Prop = 'normal'; 
		 else
			 Prop = 'line-through'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "text-decoration", Prop, true, false);
		 break;
	 case 'smallcaps_icon':
		 var Prop = gCurrentObjectSelected.getAttribute('font-variant'); 
		 if(Prop == 'small-caps')
			 Prop = 'normal'; 
		 else
			 Prop = 'small-caps'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "font-variant", Prop, true, false);
		 break; 
		 //not supported yet
	/* case 'blink_icon':	 
		 var Prop = gCurrentObjectSelected.getAttribute('text-decoration'); 
		 if(Prop == 'blink')
			 Prop = 'normal'; 
		 else
			 Prop = 'blink'; 
		 GX_SetObjectAttribute(gCurrentObjectSelected, "text-decoration", Prop, true, false);
		 break;
		 */
		 
	 default:
		break; 
		
	}
}

function GX_showEditorInterface(Mode)
{
	$('.PROPERTY_INTERFACE').hide(); 
	//GX_ResetAllSelections();
	
	var currObjectNode = gCurrentObjectSelected; 
	GX_SetSelection(currObjectNode, false); 
	switch(Mode)
	{
	case 'LAYOUT_MODE':
		WAL_hideWidget('layout_interface', false); 
		gObjectEditMode = 'LAYOUT_MODE';
		break;
	case 'ZOOMPAN_MODE':
		WAL_hideWidget('zoompan_interface', false); 
		//gObjectEditMode = 'ZOOMPAN_MODE';
		break;	
	case 'MODIFY_SHAPE_MODE':		
		gObjectEditMode = 'MODIFY_SHAPE_MODE';
		WAL_hideWidget('zoompan_interface', false);
		WAL_hideWidget('modify_interface', false); 				
		break;			
	case 'STROKE_MODE':
		WAL_hideWidget('zoompan_interface', false);
		WAL_hideWidget('stroke_interface', false); 			
		break; 
	case 'FILL_MODE':
		gGradientList = GX_GetGradientList(); 
		GX_UpdateGradientList(gGradientList);
		WAL_hideWidget('zoompan_interface', false);
		WAL_hideWidget('fill_interface', false); 	
		break;
	case 'ANIM_MODE':
		WAL_hideWidget('animate_interface', false); 		
		gObjectEditMode = 'ANIMATION_EDIT_MODE';		
		break;
	case 'MODIFY_TEXT_MODE':
		gObjectEditMode = 'MODIFY_TEXT_MODE';		
		break; 
	case 'FONT_STYLE_MODE':
		gObjectEditMode = 'FONT_STYLE_MODE'; 
		WAL_hideWidget('texteditinterface', false); 
		var fontsize = currObjectNode.getAttribute('font-size'); 
		GX_UpdatePropertyOnUI('FONT_SIZE', fontsize);
		var fontname = currObjectNode.getAttribute('font-family');
		GX_UpdatePropertyOnUI('FONT_NAME', fontname);
		
		
		break; 
	default:
		break; 	
	}	
	GX_SetSelection(currObjectNode, true); 
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
	WAL_AddItemsToList('gradlistDDL', 'none'); 
	//WAL_AddItemsToList('gradlistDDL', 'New:Linear'); 
	//WAL_AddItemsToList('gradlistDDL', 'New:Radial'); 
	for(var j=0; j < gradList.length; j++)
	{
		WAL_AddItemsToList('gradlistDDL', gradList[j][0]); 
	}
	
	
}
function GX_CheckValueChange(event)
{
	var CBID = event.target.id;
	var state = event.args.checked; 
	var JQSel; 
	var node; 		
	var objectType = gCurrentObjectSelected.classList[1]; 
	
	switch(CBID)
	{
	case 'snaptogrid':
		gSnapToGrid = state; 
		break; 
	case 'pathclose':
		gClosePath = state;
		GX_SetClosePath(gCurrentObjectSelected, gClosePath); 		
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
			//if(nodeClass != 'LAYER')
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
				GX_UpdatePathMarker(ObjNode.id, gPathDataArray, true);				
			}
			else if(objectType == 'SVG_SHAPE_OBJECT')
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
		if(nodeClass != 'LAYER')
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
	
	//frist convert parameters into an array 
	var dvalue = pathNode.getAttribute('d');
	if(!dvalue)
		return 0; 
	gPathDataArray.splice(0,gPathDataArray.length); 
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
			minY = Math.min(minY, entry[2]);
			
			if(entry[1] > maxX)
				pathDim.maxXIndex = j;	
			maxX = Math.max(maxX, entry[1]);
			
			if(entry[2] > maxY)
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
	default: 
		break; 
	}
}

function GX_SelectObjectInMultiMode(Node)
{
	//deselect anything prior to this 
	if(gCurrentObjectSelected)
		GX_SetSelection(gCurrentObjectSelected, false); 
	var svgcontainer = document.getElementById('objectcontainer');
	//check if the node is SCG_SHAPE_OBJECT TYPE 
	var nodeClass= Node.classList[0];
	var multiNodeArrLen = gMultiNodeArray.length; 
	if(! ((nodeClass == 'SVG_SHAPE_OBJECT')|| (nodeClass == 'SVG_PATH_OBJECT') || (nodeClass == 'SVG_TEXT_OBJECT')) )
		return ; 
	
	var objDim = GX_GetRectObjectDim(Node); 
	
		//get the Rect Object DIm 
	
	//create a clone from gripper
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
	gbMultiSelection = true; 
	gMultiNodeArray.push(Node.id); 
	//add iD woith ObjectID + 'gripper'
	//add a class = 'CLONE_GRIPPER' 
	
	//add it to the DOM 
	
	//set the broder value of the gripper to some color 
	
	//add the objectNode ID to an multilist array after checking in the array if the Object already exists. 
	
	
}

function GX_DeselectObjectFromMultiMode()
{
	var JQSel = '.CLONED_GRIPPERS'; 
	$(JQSel).remove(); 	
	gMultiNodeArray.splice(0, gMultiNodeArray.length); 
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
	//loop around remaining nodes 
	for(var k=1 ; k < nodeArrLen; k++)
	{
		//get nextNode and nextNodedim
		nextNode = document.getElementById(gMultiNodeArray[k]);
		nextNodedim = GX_GetRectObjectDim(nextNode); 		
		//set the nextnodeDim to refdim
		if(alignType == 'WIDTH')
			nextNodedim.width = refNodedim.width; 	
		else if(alignType == 'HEIGHT')
			nextNodedim.height = refNodedim.height;
		else if(alignType == 'LEFT')
			nextNodedim.x = refNodedim.x;
		else if(alignType == 'TOP')
			nextNodedim.y = refNodedim.y;
		else if(alignType == 'RIGHT')
		{
			nextRightMargin = nextNodedim.x + nextNodedim.width; 
			deltaX = nextRightMargin - refrightMargin; 
			nextNodedim.x = nextNodedim.x - deltaX; 	
			if(nextNodedim.x < 0)
				nextNodedim.x = 0; 
		}	
		else if(alignType == 'BOTTOM')
		{
			nextBottomMargin = nextNodedim.y + nextNodedim.height; 
			deltaY = nextBottomMargin - refbottomMargin; 
			nextNodedim.y = nextNodedim.y - deltaY; 	
			if(nextNodedim.y < 0)
				nextNodedim.y = 0; 
		}	
		else if(alignType == 'MIDDLE_HOR')
		{
			nextMidHor = nextNodedim.x + nextNodedim.width/2; 
			deltaX = nextMidHor - refMiddleHor; 
			nextNodedim.x = nextNodedim.x - deltaX; 	
			if(nextNodedim.x < 0)
				nextNodedim.x = 0; 
		}
		else if(alignType == 'MIDDLE_VERT')
		{
			nextMidVert = nextNodedim.y + nextNodedim.height/2; 
			deltaY = nextMidVert - refMiddleVert; 
			nextNodedim.y = nextNodedim.y - deltaY; 	
			if(nextNodedim.y < 0)
				nextNodedim.y = 0; 
		}
		GX_SetObjectAttribute(nextNode, 'DIMENSION', nextNodedim, true, false); 
		gripperDim = nextNodedim; 
		gripperDim.x -= 5; 
		gripperDim.y -= 5;
		gripperDim.width += 10;
		gripperDim.height += 10; 
		gripperNode =  document.getElementById(nextNode.id + 'GRIPPER'); 
		GX_SetRectObjectDim(gripperNode, gripperDim);		
		//set attribute 
	}	
}

function GX_CopyObject(objNode)
{
	var nodeclass = objNode.classList[0]; 
	if(! ((nodeclass == 'SVG_SHAPE_OBJECT')||(nodeclass == 'SVG_PATH_OBJECT') || (nodeclass == 'SVG_TEXT_OBJECT')) )
	{
		Debug_Message("Select an Object to Copy"); 
		return ; 
	}
	gObjectIDToCopy = objNode.id; 		
}

function GX_PasteObject()
{
	//determine the current Layer selected
	if(!gCurrLayerNode)
		return ; 
	gCurrLayerID = gCurrLayerNode.id;
	
	//check if the object exist
	var objNodeToCopy =  document.getElementById(gObjectIDToCopy); 
	if(!objNodeToCopy)
	{
		Debug_Message("Object to copy does not exist anymore"); 
		return ; 
	}	
	
	//generate an Unique Id 
	var newObjID =  GXRDE_GetUniqueID('SVG_');
	var retVal = GXRDE_CopyShapeObject(gObjectIDToCopy, gCurrLayerID, newObjID);	
	if(retVal != 'ERROR')
	{		
		 GX_AddNewNodeFromXMLString(gCurrLayerID, retVal); 
		 var newNode = document.getElementById(newObjID);
		 var newdim = GX_GetRectObjectDim(newNode); 
		 newdim.x += 10; 
		 newdim.y += 20; 
		 var objecttype = newNode.classList[0]; 
		 if(objecttype == 'SVG_PATH_OBJECT')
			  GX_SetTransformProperty(newNode, 'translate',newdim);
		 else if(objecttype == 'SVG_SHAPE_OBJECT')
			 GX_SetObjectAttribute(newNode, 'DIMENSION', newdim, false, true); 
		 else if(objecttype == 'SVG_TEXT_OBJECT')
			 GX_SetObjectAttribute(newNode, 'DIMENSION', newdim, false, true); 
		 if(!newNode)
			 return ; 
		  var nodename  = newNode.nodeName.toUpperCase(); 
		  myobjType = 'OBJECT';
		  nodeTitle = nodename; 
		  var JQSel = '#'+newObjID; 
		  $(JQSel).attr('onclick','OnShapeObjectSelection(evt)' ); 
		 var newXMLStr = '<li id="TM_'+ newObjID + '"  type="' + myobjType+ '" class="TREEMENU" level="3" dataid="' +newObjID + '"  data-type="' + nodename +'"  name="'+ nodeTitle+'"></li>';
		 WAL_AddTreeItem(gTreeWidgetID, newXMLStr, gCurrentTreeNode, "", true);
		 WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+newObjID);
	}	
	
	//Debug_Message("End if Function Paste"); 
	
	
	//post request to server to copy the object with corresponding layer node 
}

function GX_ApplyZoom(zoomFactor)
{
		
	//get the root SVg node and change the view Box
	if(!gsvgRootNode)
		gsvgRootNode = document.getElementById('SVGContainer'); 
	
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
	if(wdgtId == 'listanimDDL')
	{
		if(gCurrentObjectSelected)
			GX_SetSelection(gCurrentObjectSelected, false); 	
		var animInfo = GX_GetAnimInfoByTitle(value); 
		var animNode =  document.getElementById(animInfo[0]); 
		if(!animNode)
			return ;				
		GX_SetSelection(animNode.targetElement, true);		
		return ; 
	}
	if(!gCurrentObjectSelected)
		return ; 
	
	
	if(wdgtId == 'zoomDDL')
	{
		var zoomval = new Number(value); 
		gZoomFactor = 1.0/zoomval; 
		GX_ApplyZoom(gZoomFactor); 		
	}
	else if(wdgtId == 'strokedashDDL')
	{
		//GX_SetObjectAttribute(gCurren, AttrName, AttrValue, bListStore, bUpdateUI)
		GX_SetObjectAttribute(gCurrentObjectSelected, "stroke-dasharray", value, true, false);
	}
	else if(wdgtId == 'strokeLinejoinDDL')
	{
		//GX_SetObjectAttribute(gCurren, AttrName, AttrValue, bListStore, bUpdateUI)
		GX_SetObjectAttribute(gCurrentObjectSelected, "stroke-linejoin", value, true, false);
	}
	else if(wdgtId == 'gradlistDDL')
	{
		if(value == 'none')
		{	if(gCurrentObjectSelected) 
				GX_SetObjectAttribute(gCurrentObjectSelected, "fill", 'none', true, false);
			return; 
		}
		else if(value == 'New:Linear')
		{
		  //  var gradID = GX_AddNewSVGObject('LINEAR_GRADIENT');		
		   // GX_ShowGradWindow(gradID, 'LINEAR_GRAD'); 	        
		}
		else if(value == 'New:Radial')
		{
		  var gradID = GX_AddNewSVGObject('RADIAL_GRADIENT');	
		  GX_ShowGradWindow(gradID, 'RADIAL_GRAD'); 		 
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
		if(gCurrentObjectSelected) 
		{
			 
			if( (objectType == 'SVG_SHAPE_OBJECT') || (objectType == 'SVG_PATH_OBJECT') || (objectType == 'SVG_TEXT_OBJECT'))
			{
				var fillurl = 'url(#' + gradID + ')';				
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

function GX_GetGradInfoByTitle(gradTitle)
{
	var ID = 0; 
	var gradinfo; 
	for(var j=0; j < gGradientList.length; j++)
	{
		if(gradTitle == gGradientList[j][0] )
		{
			gradinfo = gGradientList[j]; 
			return gradinfo; 
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
	
	/*svgNode.setAttribute('width', width+'px'); 
	svgNode.setAttribute('height', height+'px'); 
	var viewBoxval = '0 0 '+width + ' ' + height; 
	svgNode.setAttribute('viewBox', viewBoxval);
	*/
	
	//post the request to server as well 
	GX_SaveObjectProperties(svgNode, true);
	//intialize the document 
	GX_InitializeDocument(""); 
}

function OnPathMarkerMouseMove(evt) {
    
    //now get the relative X, Y
    var relX, relY;
    var markerNode = evt.target; 
    var ClientX = new Number(evt.clientX - gClientXOffset); 
	var ClientY =  new Number(evt.clientY- gClientYOffset); 
	 if(gSnapToGrid == true)
     {
		 ClientX = ClientX/10; 
		 ClientX = Math.round(ClientX); 
		 ClientX *= 10; 
		 
		 ClientY = ClientY/10; 
		 ClientY = Math.round(ClientY); 
		 ClientY *= 10; 
     }
	if(bMarkerMove == false)
	{
		markerNode.setAttribute('r', '8'); 	   
	}
 
	 
    if (bMarkerMove == true) {
        //now also set the parameters corresponding to the marker index
        relX = new Number(ClientX - gOrigMousePosX)*gZoomFactor;
        relY = new Number(ClientY - gOrigMousePosY)*gZoomFactor;
        var newcX, newcY;
        newcX = gCurrSelectedObjectDim.x;
        newcY = gCurrSelectedObjectDim.y;
        var num = new Number(newcX);
        num += relX;
        markerNode.setAttribute("cx", num);
        newcX = num; 
        
        var num = new Number(newcY);
        num += relY;
        markerNode.setAttribute("cy", num);
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
    }
}

function OnPathMarkerMouseDown(evt) {
	
	
    var pathNode = document.getElementById("indicatorpath");
    
    var currentPos;
    var arrLen = new Number(gPathDataArray.length); 
    var markerNode = evt.target;  
   
    if(gCurrentMarkerNode != markerNode)
    {
    	//reset the current selected marker node 
    	if(gCurrentMarkerNode)
    	{
    		GX_SetMarkerNodeSelection(gCurrentMarkerNode, false);    
    	}
    	
    	gCurrentMarkerNode = markerNode; 
    	GX_SetMarkerNodeSelection(gCurrentMarkerNode, true);    	 
    	return ; 
    	
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
        markerNode.setAttribute('r', '12'); 
	    markerNode.setAttribute('opacity', '1'); 
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
        GX_UpdatePathMarker(gCurrentObjectSelected.id, gPathDataArray, true);       
        pathNode.setAttribute("visibility", "hidden");
        gIndicatorPath = []; 
        GX_SetSelection(gCurrentObjectSelected, true); 
        markerNode.setAttribute('r', '5'); 
	    markerNode.setAttribute('opacity', '0.5');         
    }                     
}

function OnPathMarkerMouseOut(evt) {
   
    var markerNode = evt.target; 
    //if(bMarkerSelected == false)
    if(markerNode != gCurrentMarkerNode)
    {
  	   markerNode.setAttribute('r', '5');    	 
       gsvgRootNode.setAttribute("cursor", "auto");
    }
   
   // alert("Mouse Out"); 
}
function GX_UpdatePathMarker(pathID, pathParam, bShow)
{
	var JQSel = ".markerclass";  
	bMarkerSelected = false; 
	gCurrentMarkerNode = 0; 
    if(bShow == false)
    {
    	$(JQSel).attr('visibility', 'hidden'); 
    	 return ;
    }
    if(gObjectEditMode != 'MODIFY_SHAPE_MODE')
		  return ; 
    var pathNode = document.getElementById(pathID);  
    var pathType = pathNode.classList[1]; 
    if(pathType == 'FREEDRAW_PATH')
    	return ; 
    
    $(JQSel).attr('visibility', 'visible'); 
    var markerNode;
    usenode = document.getElementById('pathmarker');    	
    var JQSel = ".markerclass";
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

function GX_AddPathMarker(pathID, pathParam) {
    var pathNode = document.getElementById(pathID); 
    var pathType = pathNode.classList[1]; 
    //if(pathType == 'FREEDRAW_PATH')
    //	return ; 
    if(gObjectEditMode != 'MODIFY_SHAPE_MODE')
		  return ; 
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
    /*
    //get the end point here 
    var lastIndex = pathParam.length-1; 
    if(pathParam[lastIndex][0] == 'z')
    {
    	lastIndex--;    	
    }
    if(pathParam[lastIndex][3] == 'POINT')
    {
    	var markernode = document.getElementById('marker_'+lastIndex);
    	if(!markernode)
    		return ; 
    	markernode.setAttribute('fill', 'red'); 
    }*/
    
    	
}

function GX_PolyInputDlgOK()
{
	var nSides  = WAL_getMaskedInputValue('polynSidesIP'); 
	var Length = WAL_getMaskedInputValue('polyLengthIP');
	gnPolygonSides = nSides;
	gPolygonLength = Length; 
	GX_AddNewSVGObject('polygon_path'); 
}

function GX_StartFreeDraw()
{
	//hide current grabber
	if(!gCurrentObjectSelected)
		return;
	
	var pathType = gCurrentObjectSelected.classList[1]; 
	//if(pathType != 'FREEDRAW_PATH')
		//return ; 		
	//make free draw visible 
	
	GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, true); 	
}


function GX_SetFreeDrawEditAttributes(ObjNode, bFlag)
{

	if(bFlag == true)
	{
		var freedrawNode = document.getElementById('freedraw'); 
		freedrawNode.setAttribute('visibility', 'visible'); 
		freedrawNode.setAttribute('pointer-events', 'visible'); 
		gCurrGrabber.setAttribute('pointer-events', 'none'); 
		bDraw = false; 
	}
	else
	{
		var freedrawNode = document.getElementById('freedraw'); 
		freedrawNode.setAttribute('visibility', 'hidden');		
		gCurrGrabber.setAttribute('pointer-events', 'visible'); 
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
    var ClientX = new Number(evt.clientX - gClientXOffset); 
	var ClientY =  new Number(evt.clientY- gClientYOffset); 	
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
function OnFreeDrawClick(evt)
{
	var nodeid = evt.target.id; 
	//alert("my nodeid =" +  nodeid); 
	var node = evt.target;
	 var ClientX = new Number(evt.clientX - gClientXOffset); 
 	 var ClientY =  new Number(evt.clientY- gClientYOffset); 	
     var X = new Number(ClientX);
     var Y = new Number(ClientY);
     X = Math.round((X + window.pageXOffset - gCursorXOffset)*gZoomFactor); 
	 Y = Math.round((Y + window.pageYOffset - gCursorYOffset)*gZoomFactor);	
	 X += gPanX;
	 Y += gPanY; 
	 
	var pathType = gCurrentObjectSelected.classList[1]; 
	//if(pathType != 'FREEDRAW_PATH')
		//return ; 
    var ClientX = new Number(evt.clientX - gClientXOffset); 
	var ClientY =  new Number(evt.clientY- gClientYOffset); 
	var objectType = gCurrentObjectSelected.classList[1]; 
	
	if(bDraw == false)
	{
		gFreeDrawStarted = false; 
		bDraw = true; 
		if(objectType == 'FREEDRAW_PATH')
		{
			gFreeDrawPathData = gCurrentObjectSelected.getAttribute('d'); 		
			//change cursor to cross-hair 
			
			gsvgRootNode.setAttribute("cursor", "pointer");			   
		    gPrevX = 10000; 
		    gPrevY = 10000;
		}
		else if( (objectType == 'RECTANGLE') || (objectType == 'ELLIPSE')|| (objectType == 'LINE_PATH')||
				(objectType == 'CUBIC_BEZIER') || (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC') )
		{
			gCurrSelectedObjectDim = new sDimension(); 
			gCurrSelectedObjectDim.x = X; 
			gCurrSelectedObjectDim.y = Y; 
			gCurrSelectedObjectDim.width = 0; 
			gCurrSelectedObjectDim.height = 0;
			gsvgRootNode.setAttribute("cursor", "crosshair");		
			
			if((objectType == 'CUBIC_BEZIER')|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC') )
				gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		}		
		GX_UpdateMarkers(gCurrGrabber, false); 
	}
	else
	{
		gsvgRootNode.setAttribute("cursor", "auto");		
		GX_SetFreeDrawEditAttributes(gCurrentObjectSelected, false);
		if(objectType == 'FREEDRAW_PATH')
		{
			gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected);
			GX_SetObjectAttribute(gCurrentObjectSelected, 'PATH_DATA', gPathDataArray, true, false);
		}
		else if( (objectType == 'RECTANGLE')|| (objectType == 'ELLIPSE')|| (objectType == 'LINE_PATH')||(objectType == 'CUBIC_BEZIER')
				|| (objectType == 'QUADRATIC_BEZIER')|| (objectType == 'ELLIPTIC'))
		{
			GX_SetObjectAttribute(gCurrentObjectSelected, 'DIMENSION', gCurrSelectedObjectDim, true, false);
			
		}		
		 gFreeDrawStarted = false; 
		 GX_SetSelection(gCurrentObjectSelected, true); 
		//GX_SetSelection(gCurrentObjectSelected, false);
	}		
}

function OnFreeDraw(evt)
{
	//now grab the points and add it to indicaotr path 
	 if (bDraw != true)
         return; 
	 var objType = gCurrentObjectSelected.classList[1];
     var node = evt.target;
     var ClientX = new Number(evt.clientX - gClientXOffset); 
 	 var ClientY =  new Number(evt.clientY- gClientYOffset); 	
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
	else if((objType ==  'RECTANGLE') || (objType ==  'ELLIPSE')|| (objType == 'LINE_PATH')||(objType == 'CUBIC_BEZIER')
			|| (objType == 'QUADRATIC_BEZIER')|| (objType == 'ELLIPTIC'))
	{
		gCurrSelectedObjectDim.width = X - gCurrSelectedObjectDim.x; 
		gCurrSelectedObjectDim.height = Y - gCurrSelectedObjectDim.y;
		GX_SetRectObjectDim(gCurrentObjectSelected, gCurrSelectedObjectDim); 
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
		GX_StartFreeDraw(); 
	}	
}


function GX_StartErase()
{
	var pathType = gCurrentObjectSelected.classList[1]; 
	if(pathType != 'FREEDRAW_PATH')
		return;	
	gEraseObject1 = 0; 
	gEraseObject2 = 0; 
	GX_SetEraseEditAttributes(gCurrentObjectSelected, true); 
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
	
	if(bFlag == true)
	{			
		ObjNode.setAttribute('onmousemove', 'OnEraseMove(evt)'); 
		ObjNode.setAttribute('onclick', 'OnEraseClick(evt)');
		ObjNode.setAttribute('onmouseout', 'OnEraseMouseOut(evt)');
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
		ObjNode.removeAttribute('onmousemove'); 	 
		ObjNode.removeAttribute('onmouseout');
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
	var ClientX = new Number(evt.clientX - gClientXOffset); 
	var ClientY =  new Number(evt.clientY- gClientYOffset); 	
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
		gEraseObject1.setAttribute('visibility', 'hidden'); 
		
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
	GX_SetEraseEditAttributes(pathNode, false); 
	GX_SetObjectAttribute(pathNode, 'PATH_DATA', gPathDataArray, true, false);
	GX_SetEraseEditAttributes(pathNode, true);
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


function OnWindowScroll()
{	
	if( (window.pageXOffset != 0) || (window.pageYOffset != 0 ))
	{
		var horScroll = 0 - window.pageXOffset;
		var vertScroll = 0 - window.pageYOffset;	
		if( (horScroll != 0) || (vertScroll != 0) )
			window.scrollTo(horScroll, vertScroll);
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
	
	GX_SetSelection(gCurrentObjectSelected, true); 
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
		markerNode.setAttribute('fill', colorCode); 
		markerNode.setAttribute('r', '5');	        	
		markerNode.setAttribute('stroke-width', '2');
		markerNode.removeAttribute('stroke-dasharray');
		bMarkerSelected = false ; 
	}
	else
	{		
		var colorCode = "yellow";     	
		markerNode.setAttribute('fill', colorCode); 
		markerNode.setAttribute('r', '8');
		markerNode.setAttribute('stroke-width', '4');
		markerNode.setAttribute('stroke-dasharray', "1 1");  
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
	
	GX_SetSelection(gCurrentObjectSelected, true); 
}


function GX_UpdateEllipticParam(ObjNode)
{
	var objType = ObjNode.classList[1]; 
	gPathDataArray = GX_ConvertPathDataToArray(ObjNode); 	
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
    GX_SetSelection(ObjNode, true); 
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

function GX_ColorWidgetOK(event)
{

	if(!gCurrentObjectSelected)
		return ;
	var colWdgt = document.getElementById('colorpickwidget'); 
	if(!colWdgt)
	 return ;
	var colAttrName = colWdgt.getAttribute('data-attrName');
	var colorval = WAL_getColorPickerValue('colorpickwidget');
	GX_SetObjectAttribute(gCurrentObjectSelected, colAttrName, colorval, true, false); 
}

function GX_StrokeColorHandler(attrName, value)
{
	if(!gCurrentObjectSelected)
		return ;
	
	gCurrentObjectSelected.setAttribute(attrName,value );
	//UIH_ApplyStyleProperty(gCurrentObjContainerNode, "ALL_BORDER_COLOR", value, false);
	//gCurrentObjContainerNode.style.borderColor =  value; 
}

function OnGradPointClick(evt) {
    var node = evt.target;
	
    if (bGradPointMove == false) {
        if (!gGradSVGNode)
            gGradSVGNode = document.getElementById('GRAD_PREVIEW_RECTANGLE');
       // gGradSVGNode.setAttribute("cursor", "move");       
        node.setAttribute("cursor", "move");
        gInitMousePoint = new sPoint();
        gInitMousePoint.x = new Number(evt.clientX);
        gInitMousePoint.y = new Number(evt.clientY);
        gInitMarkerPoint = new sPoint();
        gInitMarkerPoint.x = new Number(node.getAttribute('cx'));
        gInitMarkerPoint.y = new Number(node.getAttribute('cy'));
        gInitLinePoint = new sPoint(); 
        gInitFocusPoint = new sPoint(); 
        
        gLineNode = document.getElementById('RG_RADIUS_LINE');
        gCircleNode = document.getElementById('RG_CIRCLE');
        gMarkerNode = document.getElementById('RG_RADIUS_END_POINT');
        gFocusNode = document.getElementById('RG_FOCUS_POINT');
        gInitFocusPoint.x = new Number(gFocusNode.getAttribute('cx')); 
        gInitFocusPoint.y = new Number(gFocusNode.getAttribute('cy')); 
        if(node.id == 'RG_RADIUS_END_POINT')
        {                	
        	gInitLinePoint.x =  new Number(gLineNode.getAttribute('x2'));                 	
        	gInitialRadius = new Number(gCircleNode.getAttribute('r')); 
        	gCircleNode.setAttribute('pointer-events', 'none'); 
        }
        else if(node.id == 'RG_CIRCLE')
        {
        	 gCenterNode = document.getElementById('RG_CENTER'); 
        	 
        }
        
        else
        {
        	gLineNode = document.getElementById('LG_INDICATOR_LINE');                   
            if (node.id == 'START_POINT') {
                gInitLinePoint.x = new Number(gLineNode.getAttribute('x1'));
                gInitLinePoint.y = new Number(gLineNode.getAttribute('y1'));
            }
            else if (node.id == 'END_POINT') {
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
    }       
}


function OnGradMouseMove(evt) {
    var node = evt.target;
    var relPosition = new sPoint();
    relPosition.x = new Number(evt.clientX);
    relPosition.y = new Number(evt.clientY); 
    if (!gGradSVGNode)
        gGradSVGNode = document.getElementById('GRAD_PREVIEW_RECTANGLE');
    
    if (bGradPointMove == false) {
    	if(node.id != 'RG_CIRCLE')
    	{
    		node.setAttribute('r', '10');
    		node.setAttribute("cursor", "move");
    	}
        
      //  if(gGradSVGNode)
       // 	gGradSVGNode.setAttribute("cursor", "move");
        return; 
       // node.setAttribute('fill-opacity', '1.0');
    }
    var newX, newY;      
    
    if (bGradPointMove == true) {
        
            relPosition.x = relPosition.x - gInitMousePoint.x;
            relPosition.y = relPosition.y - gInitMousePoint.y;

            newX = gInitLinePoint.x + relPosition.x;
            newY = gInitLinePoint.y + relPosition.y;
            if (node.id == 'START_POINT') {
                //gLineNode.setAttribute('x1', newX + '');
                //gLineNode.setAttribute('y1', newY + '');
                var gradX1 = Math.round((newX * 100) / gGradWidth);
                if( (gradX1 < 0) || (gradX1 > 100) )
                	return ; 
                var gradY1 = Math.round((newY * 100) / gGradHeight);
                if( (gradY1 < 0) || (gradY1 > 100) )
                	return ; 
                gLineNode.setAttribute('x1', newX + '');
                gLineNode.setAttribute('y1', newY + '');
                WAL_setNumberInputValue("GradStartXIP", gradX1 + '', true);
                WAL_setNumberInputValue("GradStartYIP", gradY1 + '', true);                
            }
            else if(node.id == 'END_POINT') {
               // gLineNode.setAttribute('x2', newX + '');
                //gLineNode.setAttribute('y2', newY + '');
                var gradX2 = Math.round((newX * 100) / gGradWidth);
                if( (gradX2 < 0) || (gradX2 > 100) )
                	return ; 
                var gradY2 = Math.round((newY * 100) / gGradHeight);
                if( (gradY2 < 0) || (gradY2 > 100) )
                	return ; 
                gLineNode.setAttribute('x2', newX + '');
                gLineNode.setAttribute('y2', newY + '');
                WAL_setNumberInputValue("GradStopXIP", gradX2 + '', true);
                WAL_setNumberInputValue("GradStopYIP", gradY2 + '', true); 
            }
            else if(node.id == 'RG_RADIUS_END_POINT')
            {
            	newX = gInitMarkerPoint.x + relPosition.x; 
            	if ( (newX >= 95) && (newX <= 190) )
            	{
            		
            		node.setAttribute('cx', newX+'');
            		newX = gInitLinePoint.x + relPosition.x; 
            		gLineNode.setAttribute('x2', newX+'');
            		newX = gInitialRadius + relPosition.x; 
            		if( (newX > 0) && (newX < gGradWidth/2 ) )
            		{
            			gCircleNode.setAttribute('r',newX);        
            			newX = Math.round((newX * 100) / gGradWidth);
            			WAL_setNumberInputValue("radiusIP", newX + '', true);
            		}
            			
            	}
            		
            	return; 
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
                     WAL_setNumberInputValue("centerXIP", cx1+ '', true);
                     WAL_setNumberInputValue("centerYIP", cx2 + '', true);
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
                node.setAttribute('cx', newX+'');
                node.setAttribute('cy', newY+'');
                var cx1 = Math.round((newX * 100) / gGradWidth); 
        		var cx2 = Math.round((newY * 100) / gGradHeight); 
                WAL_setNumberInputValue("focusXIP", cx1+ '', true);
                WAL_setNumberInputValue("focusYIP", cx2+ '', true);
                return; 
            }

            newX = gInitMarkerPoint.x + relPosition.x;
            newY = gInitMarkerPoint.y + relPosition.y;
            node.setAttribute('cx', newX+'');
            node.setAttribute('cy', newY+'');              
    }
}
function OnGradMouseOut(evt) {
     var node = evt.target;
     if (bGradPointMove == false) {
    	 if(node.id != 'RG_CIRCLE')
          	node.setAttribute('r', '5');          
        	node.setAttribute("cursor", "auto");
     }
}

function GX_ShowGradWindow(gradID, gradType)
{	    
     var JQSel = '#gradientDlg';   
     var rgnode = document.getElementById('RGSpecific'); 
 	 var lgnode = document.getElementById('LGSpecific');
     if(gradType == 'LINEAR_GRAD')
     {
    	 $(JQSel).jqxWindow('setTitle', 'Linear Gradient Settings');    	 
     	 rgnode.style.display = 'none'; 
     	 lgnode.style.display = 'block';            	
     	 JQSel = '.RG_MARKERS';
     	 $(JQSel).hide();         	
     	 JQSel = '.LG_MARKERS'; 
     	 $(JQSel).show();        	
     }
     else if(gradType == 'RADIAL_GRAD')
     {
    	 $(JQSel).jqxWindow('setTitle', 'Radial Gradient Settings');    	 
     	 rgnode.style.display = 'block'; 
     	 lgnode.style.display = 'none';            	
     	 JQSel = '.RG_MARKERS';
     	 $(JQSel).show();         	
     	 JQSel = '.LG_MARKERS'; 
     	 $(JQSel).hide();        	
     } 	 
     gGradientObj = new sGradientWidget('gradientWidget', gradID);
     gGradientObj.UpdateUI(gGradientObj.GradParam);
     WAL_showModalWindow('gradientDlg', "OnclickInputOK", "");     
    
}

function GX_AddNewAnimation()
{
	if(bAnimWdgtCreated != true)
    	GX_CreateAnimationWidget('animationwidget'); 
	if(!gCurrentObjectSelected)
		return ;
	gNewAnimObject = true; 
	var objID = gCurrentObjectSelected.id; 
	gInitAnimParam = new sAnimParams();
    gInitAnimParam.animID = GXRDE_GetUniqueID('ANIM_');  
    gInitAnimParam.objectID = gCurrentObjectSelected.id;  
    gInitAnimParam.duration = 2;
    gInitAnimParam.animType = ''; //ATTRIBUTE, MOTION,TRANSFORM
    gInitAnimParam.attribute = 'fill';
    gInitAnimParam.startValue = '#00ff00';
    gInitAnimParam.endValue = '#ffff33';
    gInitAnimParam.refPathID = '';
    gInitAnimParam.bPathVisible = false;
    gInitAnimParam.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
    gInitAnimParam.startTime = 0;
    gInitAnimParam.UIEventType = 'M_MOVE'; //M_CLICK, M_MOVE
    gInitAnimParam.UIObjectID = gInitAnimParam.objectID; 
    gInitAnimParam.AnimEventType = 'END'; //BEGIN, END
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
    
    WAL_hideWidget('newanimAddBtn', false); 
    WAL_hideWidget('showlistbtn', true);
    WAL_hideWidget('previewbtn', true);    
	WAL_showModalWindow('animationwidget',"", "" );
}


function GX_EditAnimation(animID)
{
	//get the animnode 
	if(bAnimWdgtCreated != true)
    	GX_CreateAnimationWidget('animationwidget'); 
	
	var animNode = document.getElementById(animID); 
	gCurrAnimNode = animNode; 
	if(!animNode)
		return; 
	gInitAnimParam = 0; 
	gInitAnimParam = GX_GetAnimParamFromNode(gCurrAnimNode);
	
    GX_SetAnimParamOnUI(gInitAnimParam);   
	
    gbApplied = false;
    WAL_hideWidget('newanimAddBtn', true); 
    WAL_hideWidget('showlistbtn', false);
    WAL_hideWidget('previewbtn', false);
   
    
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
    gInitAnimParam.AnimEventType = 'END'; //BEGIN, END
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
		if(bFlag == 'true')
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
		if(bFlag == 'true')
		{
			GX_AddGradientAnimation(gradResID,animNodeID, attrName, from,to, duration ); 
			//Debug_Message("Reached Here"); 
		}    			
	 }    	
 }	

function GX_GradAnimApplyBtnHdlr(event)
{
	var btnID = event.target.id; 
	if(btnID == 'apply_StartPos')
	{	
		var bState = WAL_getCheckBoxValue('animateStartPos'); 
		var X = WAL_getMaskedInputValue('GradStartXIP'); 
		var Y = WAL_getMaskedInputValue('GradStartYIP'); 	
		var dur = WAL_getMaskedInputValue('durStartPosIP');		
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'x1', '0%', X +'%', dur); 
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'y1', '0%', Y +'%', dur);
	 }		
	else if(btnID == 'apply_StopPos')
	{	
		var X = WAL_getMaskedInputValue('GradStopXIP'); 
		var Y = WAL_getMaskedInputValue('GradStopXIP');		
		var bState = WAL_getCheckBoxValue('animateStopPos'); 
		var dur = WAL_getMaskedInputValue('durStopPosIP');
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'x2', '0%', X+'%', dur); 
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'Y2', '0%', Y+'%', dur); 
	}
	else if(btnID == 'apply_Stop_Col')
	{
		var node = document.getElementById('stop0_color') ;  
		var fromcolval = node.style.backgroundColor; 
		
		node = document.getElementById('stop1_color') ;  
		var tocolval = node.style.backgroundColor;
		
		var bState = WAL_getCheckBoxValue('animateStop_col'); 
		var stopNodeid = gGradientObj.GradResourceID + '_STOP1'; 
		var dur = WAL_getMaskedInputValue('durStopColIP');		
		GX_UpdateGradAnimAttribute(bState, stopNodeid, 'stop-color', fromcolval, tocolval, dur);		
	}
	else if(btnID == 'apply_CenterPos')
	{
		var X = WAL_getMaskedInputValue('centerXIP'); 
		var Y = WAL_getMaskedInputValue('centerYIP'); 	
		var bState = WAL_getCheckBoxValue('animatecenterPos'); 
		var dur = WAL_getMaskedInputValue('durCenterIP');
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'cx',  '0' + '%',  X+'%', dur);
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'cy',  '0' + '%', Y+'%', dur);
	}
	else if(btnID == 'apply_Radius')
	{
		var to = WAL_getMaskedInputValue('radiusIP'); 	
		var bState = WAL_getCheckBoxValue('animateRadius'); 
		var dur = WAL_getMaskedInputValue('durRadiusIP');
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'r',   '0%', to+'%', dur);		
	}
	else if(btnID == 'apply_Focus')
	{
		var X = WAL_getMaskedInputValue('focusXIP'); 
		var Y = WAL_getMaskedInputValue('focusYIP'); 	
		var bState = WAL_getCheckBoxValue('animateFocus'); 
		var dur = WAL_getMaskedInputValue('durFocusIP');
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'fx', '0%', X+'%', dur);
		GX_UpdateGradAnimAttribute(bState, gGradientObj.GradResourceID, 'fy', '0%', Y+'%', dur);
	}	
}

function GX_GradAnimPreviewBtnHdlr(event){
		//get the resource ID and then the top anim Id 
	var nodeID = event.target.id; 
	var resID = gGradientObj.GradResourceNode.id; 
	if(nodeID == 'animPreviewStartBtn')
	{
		animID = resID + '_X1'; 
		GX_PreviewAnimation(animID);
		animID = resID + '_Y1'; 
		GX_PreviewAnimation(animID);
	}
	
	else if(nodeID == 'animPreviewStopBtn')
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
	else if(nodeID == 'animPreviewCenterBtn')
	{
		animID = resID + '_CX';		
		GX_PreviewAnimation(animID);
		animID = resID + '_CY';		
		GX_PreviewAnimation(animID);
	}
	else if(nodeID == 'animPreviewRadiusBtn')
	{
		animID = resID + '_R';		
		GX_PreviewAnimation(animID);
	}
	else if(nodeID == 'animPreviewFocusBtn')
	{
		animID = resID + '_FY';		
		GX_PreviewAnimation(animID);
	}	
	else if(nodeID == 'animTotalPreviewBtn')
	{
		animID = resID + '_TOP_GRAD_ANIM';		
		GX_PreviewAnimation(animID);
		//hide thenode and then display again 				
	}
	
	
	
	/*
	var resID = gGradientObj.GradResourceNode.id; 
	var animID = resID + '_TOP_GRAD_ANIM'; 
	//var animNode = document.querySelector('#' + animID);
	//animNode.setAttribute('begin', ''); 
	//animNode.setAttribute('fill', 'remove'); 	
	GX_PreviewAnimation(animID);
	*/
	
	//Debug_Message('Animating Gradient'); 
	//set the anim begin value and
}

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
	if(!gCurrentObjectSelected)
		return ; 
	var tgtNode = gCurrentObjectSelected;    
	gPrevAttributeList = EL_getObjectAttributes(tgtNode);		
	WAL_showColorPickerWidget('gradcolorpickwidget', '', 'fill_color_icon', attrName, gInitFillColor, tgtNode.id);
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
	    gInitAnimParam.AnimEventType = 'END'; //BEGIN, END
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
	gTextEditorNode.style.height = Math.round(dim.height) + 'px'; 
	gTextEditorNode.style.fontFamily = node.getAttribute('font-family');
	
	//_rm dont know why it is not working 
	var fontsize = node.getAttribute('font-size');
	//$(editJQSel).prop('font-size', '35');	//$x.prop("color","FF0000");editornode.style.fontSize = "34" ;//+fontsize; 
	//editornode.style.color = node.getAttribute('fill');
	editorParentNode.style.display = 'block';  
	node.setAttribute('opacity', '0.3'); 
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
	var str = gTextEditorNode.value ;
	gCurrentObjectSelected.firstChild.data  = str;    
	//node.style.display = 'block';
	gTextEditorNode.parentNode.style.display = 'none'; 
	gCurrGrabber
	
	var dim = gCurrentObjectSelected.getBBox(); 
	gCurrGrabber.setAttribute('width', dim.width); 
	gCurrentObjectSelected.setAttribute('opacity', '1.0');
	GXRDE_updateTextObjectData(gCurrentObjectSelected.id, gCurrentObjectSelected.firstChild.data);
}