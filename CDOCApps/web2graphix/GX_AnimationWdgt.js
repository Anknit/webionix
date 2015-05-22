
var gInputHeight = '24';
var gCurrentAnimInfo=0; 
var bAnimWdgtCreated = false; 
sAnimParams.prototype.animID = 0;
sAnimParams.prototype.objectID = 0; 
sAnimParams.prototype.duration = 0;
sAnimParams.prototype.animType =''; //ANIM_ATTRIBUTE, ANIM_MOTION,ANIM_TRANSFORM
sAnimParams.prototype.attribute = ''; 
sAnimParams.prototype.startValue='';
sAnimParams.prototype.endValue='';
sAnimParams.prototype.refPathID=0;
sAnimParams.prototype.refPathType='';
sAnimParams.prototype.PathObjectOffset=0;
sAnimParams.prototype.PathStartPoint=0;
sAnimParams.prototype.visibleAnimID=0;
sAnimParams.prototype.bPathVisible=true; 
sAnimParams.prototype.originalPosition=0;
sAnimParams.prototype.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
sAnimParams.prototype.startTime=0; 
sAnimParams.prototype.UIEventType = 'M_CLICK';
sAnimParams.prototype.UIObjectID = ''; 
sAnimParams.prototype.AnimEventType='end' ;//BEGIN, END
sAnimParams.prototype.refAnimID='' ;
sAnimParams.prototype.calcMode='linear'; 
sAnimParams.prototype.restart = 'never';
sAnimParams.prototype.repeatCount = 0; 
sAnimParams.prototype.endState = 'freeze'; //FREEZE, REMOVE
sAnimParams.prototype.center = ''; 

function sAnimParams() {	
	sAnimParams.prototype.animID = 0;
	sAnimParams.prototype.objectID = 0;  
	sAnimParams.prototype.siblingID = 0; 
	sAnimParams.prototype.duration = 0;
	sAnimParams.prototype.animType =''; //ANIM_ATTRIBUTE, ANIM_MOTION,ANIM_TRANSFORM
	sAnimParams.prototype.attribute = ''; 
	sAnimParams.prototype.startValue='';
	sAnimParams.prototype.endValue='';
	sAnimParams.prototype.refPathID=0;
	sAnimParams.prototype.refPathType='';
	sAnimParams.prototype.PathObjectOffset=0;
	sAnimParams.prototype.PathStartPoint=new sPoint();
	sAnimParams.prototype.visibleAnimID=0;
	sAnimParams.prototype.bPathVisible=true; 
	sAnimParams.prototype.originalPosition=0;
	sAnimParams.prototype.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	sAnimParams.prototype.startTime=0; 
	sAnimParams.prototype.UIEventType = 'M_CLICK'; //M_CLICK, M_MOVE 
	sAnimParams.prototype.UIObjectID = ''; 
	sAnimParams.prototype.AnimEventType='end' ;//BEGIN, END
	sAnimParams.prototype.refAnimID='' ;
	sAnimParams.prototype.calcMode='linear'; 
	sAnimParams.prototype.restart = 'never';
	sAnimParams.prototype.repeatCount = 0; 
	sAnimParams.prototype.endState = 'freeze'; //FREEZE, REMOVE	
	sAnimParams.prototype.center = '';  //centre of rotation 
	sAnimParams.prototype.title = ''; 
}

var gAnimEndTimer = 400; 
var gbAnimationEnd =  true; 
var gInitAnimParam = 0; 
var gObjectList = 0; 
var gAnimList = 0; //[animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
var gCurrAttrname;
var gCurrAnimNode = 0; 
var gCurrAnimParam=0; 
var gbApplied = false; 
var gNewAnimObject =  false; 
var gLastPositionValue = 0; 
//var attrList = ['fill', 'stroke', 'fill-opacity', 'visibility', 'stroke-width','translate', 'rotate', 'skewX','skewY'];


//var attrList = ['Fill', 'Stroke', 'Opacity', 'Visibility', 'Stroke-Width', 'Move', 'Rotate', 'Horizontal Skew', 'Vertical Skew'];
var gAttrList=[]; 
gAttrList['Fill-Color'] = 'fill'; 
gAttrList['Stroke-Color'] = 'stroke'; 
gAttrList['Opacity'] = 'fill-opacity'; 
gAttrList['Visibility'] = 'visibility'; 
gAttrList['Stroke-Width'] = 'stroke-width';
gAttrList['Motion along Path'] = 'pathmotion';// 'translate';
gAttrList['Rotate'] = 'rotate';
gAttrList['Horizontal Skew'] = 'skewX';
gAttrList['Vertical Skew'] = 'skewY';
gAttrList['Scale'] = 'scale';



var gReverseAttrList =[]; 
gReverseAttrList['fill']           =  'Fill-Color'     ; 
gReverseAttrList['stroke']         =  'Stroke-Color'   ; 
gReverseAttrList['fill-opacity']   =  'Opacity'  ; 
gReverseAttrList['visibility']     =  'Visibility'  ; 
gReverseAttrList['stroke-width']   =  'Stroke-Width' ;
gReverseAttrList['pathmotion']     =  'Motion along Path'   ;
gReverseAttrList['rotate']         =  'Rotate' ;
gReverseAttrList['skewX']          =  'Horizontal Skew';
gReverseAttrList['skewY']          =  'Vertical Skew';     
gReverseAttrList['scale']          =  'Scale'; 

//var pathList = ['Line', 'Cubic Bezier','Quadratic Bezier','Elliptic']; 
var gPathTypeList = []; 
gPathTypeList['Line'] = 'LINE_PATH'; 
gPathTypeList['Cubic Bezier'] = 'CUBIC_BEZIER'; 
gPathTypeList['Quadratic Bezier'] = 'QUADRATIC_BEZIER'; 
gPathTypeList['Elliptic'] = 'ELLIPTIC'; 
gPathTypeList['Polygon'] = 'POLYGON'; 
gPathTypeList['Free Draw'] = 'FREEDRAW_PATH'; 


var gReversePathTypeList = []; 
gReversePathTypeList['LINE_PATH'] = 'Line'; 
gReversePathTypeList['CUBIC_BEZIER'] = 'Cubic Bezier'; 
gReversePathTypeList['QUADRATIC_BEZIER'] = 'Quadratic Bezier'; 
gReversePathTypeList['ELLIPTIC'] = 'Elliptic'; 
gReversePathTypeList['POLYGON'] = 'Polygon'; 
gReversePathTypeList['FREEDRAW_PATH'] = 'Free Draw'; 


var gOffsetList=[];

gOffsetList[0] = 'Top';
gOffsetList[1] = 'Center';
gOffsetList[2] = 'Bottom';

var gReverseOffsetList=[];
gReverseOffsetList['Top'] = 0;
gReverseOffsetList['Center'] = 1;
gReverseOffsetList['Bottom'] = 2;

/*
function GX_SetAnimParamOnUI(animParam) {  
      
	//first filter out the entries here 
	var objectList=[]; 
	for(var j=0; j <gObjectList.length; j++)
	{
		objectList.push(gObjectList[j][0]); 
	}	
    WAL_UpdateDropDownList('objectlistDDL', objectList);
    //update the path list 
    var pathList=[]; 
    for(var k=0; k < gObjectList.length; k++)
    {
    	if(gObjectList[k][1] == 'SVG_PATH_OBJECT')
    		pathList.push(gObjectList[k][0]); 
    }
    WAL_UpdateDropDownList('pathlistDDL', pathList);
    
    var animlist=[]; 
    for(var i =0; i <gAnimList.length; i++)
	 {
    	//if( (animParam.title  !=  gAnimList[i][5]) && (gAnimList[i][5] != 'Invisible Animation') )
    	if(animParam.title  !=  gAnimList[i][5])
    		animlist.push(gAnimList[i][5]); 
	 }
    WAL_UpdateDropDownList('animlistDDL', animlist);
    
	//modify for rotate attribute 
    if(animParam.attribute == 'rotate')
    {
    	var valarr  = animParam.startValue.split(" "); 
    	animParam.startValue = valarr[0];     	
    	valarr  = animParam.endValue.split(" "); 
    	animParam.endValue = valarr[0];     	
    }
    WAL_setTextInputValue('animIDIP', animParam.animID, false);
    // animParam.objectID = 0;
    WAL_setTextInputValue('objectIDIP', animParam.objectID, false);
    //animParam.duration = 0;
    WAL_setNumberInputValue('durationIP', animParam.duration, false);
    
    WAL_setTextInputValue('animtitleIP', animParam.title, false);

    //animParam.animType = ''; //ATTRIBUTE, MOTION,TRANSFORM
    if ((animParam.animType == 'ANIM_ATTRIBUTE') || (animParam.animType == 'ANIM_TRANSFORM')) {
        WAL_setradioButtonCheck('attrvalbtn', true); 
        //animParam.attribute = '';
        var itemvalue = gReverseAttrList[animParam.attribute]; 
        WAL_SetItemByValueInList('animAttrDDL', itemvalue, false);
        //animParam.startValue
        
      //here should be the switch statement
		switch(animParam.attribute)
		{		
		
		case 'fill-opacity':			
			WAL_setNumberInputValue('startOpacityValueIP', animParam.startValue, false);
			//WAL_setNumberInputValue('endOpacityValueIP', animParam.endValue, false);	
			//continue from here next time			
			break; 
		 
		case 'stroke-width':
			WAL_setNumberInputValue('startStrokeWidthValueIP', animParam.startValue, false); 
				
			break;		
		case 'rotate':			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);					
			break; 
		case 'skewX':
			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
			break;
		case 'skewY':
			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);		
			break;
		default:
			break; 			
		}
		 WAL_setNumberInputValue('offsetFromPathX', 0, true);
	     WAL_setNumberInputValue('offsetFromPathY',0, true); 
        
        //WAL_setTextInputValue('startColValIP', animParam.startValue, false);
        // animParam.endValue = '';
        //WAL_setTextInputValue('endColValIP', animParam.endValue, false);    
    }
    else if (animParam.animType == 'ANIM_MOTION') {
        WAL_setradioButtonCheck('motionvalbtn', true); 
        //animParam.refPathID = 0;
        WAL_SetItemByValueInList('pathlistDDL', animParam.refPathID, true);
        // animParam.bPathVisible = true;
        WAL_setCheckBoxValue('pathvisibilityCB', animParam.bPathVisible);   
        
        var mystr = animParam.PathObjectOffset; 
        var splitstring = mystr.split(',');
        WAL_setNumberInputValue('offsetFromPathX', splitstring[0], true);
        WAL_setNumberInputValue('offsetFromPathY', splitstring[1], true);         
      
    }
    else if (animParam.startType == 'ON_UIEVENT') {
        WAL_setradioButtonCheck('uieventRB', true);       
        // animParam.UIEventType = 'M_CLICK';
        var evtType;
        if (animParam.UIEventType == 'M_CLICK') {
            evtType = "Mouse Click";         
        }
        else if(animParam.UIEventType == 'M_MOVE') 
        {
            evtType = "Mouse Move"; 
        }       
        WAL_SetItemByValueInList('objectlistDDL', animParam.UIObjectID, true);             
    }
    else if (animParam.startType == 'ON_ANIMEVENT') {
        WAL_setradioButtonCheck('animeventRB', true);    
        
        WAL_SetItemByValueInList('animeventlistDDL', animParam.AnimEventType, true);
        //animParam.AnimID = 0;
        var animInfo = GX_GetAnimInfoByID(animParam.refAnimID); 
        if(!animInfo)
        	return;        
        WAL_SetItemByValueInList('animlistDDL', animInfo[5], true);   
    }
   
    
    // animParam.repeatCount = 0;
    WAL_setNumberInputValue('repeatcountIP', animParam.repeatCount, false);
    // animParam.endState = 'freeze'; //FREEZE, REMOVE
    WAL_SetItemByValueInList('endstatelistDDL', animParam.endState, true);   
}


function GX_GetAnimParamsFromUI()
{

	var animParam = new sAnimParams(); 
	//animParam.animID = 0;	
	animParam.animID = WAL_getInputValue('animIDIP');	
	animParam.title = WAL_getInputValue('animtitleIP');
	
    // animParam.objectID = 0;
	animParam.objectID = WAL_getInputValue('objectIDIP');
	
    //animParam.duration = 0;
	animParam.duration = WAL_getMaskedInputValue('durationIP');	
	

	var bRBState = WAL_getradioButtonCheckState('attrvalbtn');
	if(bRBState ==  true)
	{
	  animParam.animType = 'ANIM_ATTRIBUTE';		
	}
	bRBState = WAL_getradioButtonCheckState('motionvalbtn');
	if(bRBState ==  true)
	{
		animParam.animType = 'ANIM_MOTION';		
	}
	if(animParam.animType == 'ANIM_ATTRIBUTE')
	{
		var itemval = WAL_getDropdownListSelection('animAttrDDL');		
		itemval = gAttrList[itemval]; 
		//Debug_Message('itemval='+ itemval); 
		
		
		if( (itemval == 'translate')|| (itemval == 'scale') || (itemval == 'rotate')
				|| (itemval == 'skewX') || (itemval == 'skewY') )
		{
			animParam.animType = 'ANIM_TRANSFORM'; 
		}
		animParam.attribute = itemval;		
		
		
		//here should be the switch statement
		switch(itemval)
		{		
		
		case 'fill-opacity':
			animParam.startValue = WAL_getMaskedInputValue('startOpacityValueIP'); 
			animParam.endValue ='1.0';// WAL_getMaskedInputValue('endOpacityValueIP');
			break; 
		
		case 'stroke-width':
			animParam.startValue = WAL_getMaskedInputValue('startStrokeWidthValueIP'); 
				
			break; 
		
		case 'rotate':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');			
			break; 
		case 'skewX':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
			break;
		case 'skewY':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
			break;
		default:
			break; 			
		}		
		if(itemval == 'rotate')
		{
			var rectdim = GX_GetRectObjectDim(gCurrentObjectSelected);
			var centreX = rectdim.x + rectdim.width/2; 
			var centreY = rectdim.y + rectdim.height/2;
			animParam.center = centreX + ' ' + centreY;			
		}
	}  
    else if (animParam.animType == 'ANIM_MOTION') {       
        //animParam.refPathID = 0;
    	animParam.refPathID = WAL_getDropdownListSelection('pathlistDDL');
    	// animParam.bPathVisible = true;    	
    	animParam.bPathVisible = WAL_getCheckBoxValue('pathvisibilityCB');
    	var pos = GX_CalculateMotionAnimPathOffset(animParam.objectID, animParam.refPathID);
    	var splitArr = pos.split(';'); 
    	animParam.PathObjectOffset = splitArr[0]; 
    	animParam.originalPosition = splitArr[1];    	
    	//insert here the checks for path offset CB
    }

	//timing params 
	 
	 bRBState = WAL_getradioButtonCheckState('uieventRB');
	 if(bRBState == true)
	 {
		 animParam.startType = 'ON_UIEVENT'; 
		 var evtType = 'Mouse Click'  ; //WAL_getDropdownListSelection('uieventlistDDL');
		 if(evtType == 'Mouse Click' )
			 animParam.UIEventType = 'M_CLICK'; 
		 else  if(evtType == 'Mouse Move' )
			 animParam.UIEventType = 'M_MOVE'; 
		 animParam.UIObjectID = WAL_getDropdownListSelection('objectlistDDL');
	 }
	 bRBState = WAL_getradioButtonCheckState('animeventRB');
	 if(bRBState == true)
	 {
		 animParam.startType = 'ON_ANIMEVENT'; 
		 animParam.AnimEventType = WAL_getDropdownListSelection('animeventlistDDL');
		 var animtitle = WAL_getDropdownListSelection('animlistDDL'); 
		 var animInfo = GX_GetAnimInfoByTitle(animtitle);
		 if(!animInfo)
			 return ; 
		 animParam.refAnimID = animInfo[0]; 
	 }	
	
	
	 animParam.repeatCount = WAL_getMaskedInputValue('repeatcountIP');
	 animParam.endState = WAL_getDropdownListSelection('endstatelistDDL');	 
	 return animParam; 
}

*/

//_rm these are new Get and Set functions with new UI for animations
function GX_SetAnimParamOnUI(animParam) {      
	//first set the common properties here 	
	var itemValue = '';	 
	//now check for the animateMotion type 
	if(animParam == 'undefined'){
		Debug_Message('undefined Anim Param'); 
		return ; 
	}
	if(animParam.animType == 'ANIM_MOTION'){
		var invNode = document.getElementById(animParam.animID + '_V'); 
		var invAnimParam = GX_GetAnimParamFromNode(invNode); 
		animParam.startType = invAnimParam.startType; 
		animParam.AnimEventType = invAnimParam.AnimEventType; 
		animParam.refAnimID = invAnimParam.refAnimID;
	}
	var animlist=[];	
	for(var i =0; i < gAnimList.length; i++)
	{	    
	    if(animParam.title  !=  gAnimList[i][5]){	    	 
	    	var refAnimInfo = GX_GetBeginParamWithRefAnim(gAnimList[i]); 
	    	if( (gAnimList[i][5] != 'Invisible Animation') && (refAnimInfo[0] != gCurrentAnimInfo[0] ) )
	    		animlist.push(gAnimList[i][5]);
	    }	    	 
	}
	WAL_UpdateDropDownList('animlistDDL', animlist);	
	if(animParam.startType == 'ON_ANIMEVENT'){
		if(animParam.AnimEventType == 'end'){
			itemValue = 'After';  
		}
		else if(animParam.AnimEventType == 'begin'){
			itemValue = 'With';  
		}
		
		var refAnimInfo = GX_GetAnimInfoByID(animParam.refAnimID);		
		WAL_SetItemByValueInList('animlistDDL', refAnimInfo[5], false);
	}
	else if(animParam.startType == 'ON_CLICK'){
		itemValue = 'On Click';
	}
	else if(animParam.startType == 'ON_TIME'){
		itemValue = 'At 0th Second';
	}	
	WAL_SetItemByValueInList('startParamDDL', itemValue, false);	
	var itemvalue = gReverseAttrList[animParam.attribute]; 
	var dummyNode =  document.getElementById('animAttrDDL'); 
	GX_AnimAttrListHandler(dummyNode, animParam.attribute); 
	//WAL_disableWidget('animAttrDDL', 'data-jqxDropDownList', false, false); 
	//WAL_SetItemByValueInList('animAttrDDL', itemvalue, false); 	
	//WAL_disableWidget('animAttrDDL', 'data-jqxDropDownList', false, true);
	
	switch(animParam.attribute)
	{	
	case 'rotate':		   	
    	//var valarr  = animParam.endValue.split(" "); 
    	//var finalVal = valarr[0]; 
		WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);			
		var objNode = document.getElementById(gCurrentAnimInfo[1]);
		//extract the center coordinates 
		var valArr = animParam.center.split(' '); 
		
		//then set a grabber to this corodiantes
		var myDim = new sDimension(); 
		myDim.x = valArr[0];
		myDim.y = valArr[1]
		myDim.width = 5; 
		myDim.height = 5; 	
		///call the update markers
		GX_UpdateMarkers(myDim, true, true); 
		
		break; 		
	case 'pathmotion':	
		WAL_setCheckBoxValue('pathvisibilityCB', animParam.bPathVisible); 
		WAL_SetItemByValueInList('pathModifyDDL', gReversePathTypeList[animParam.refPathType], false);
		var offset = animParam.PathObjectOffset; 
		var temparr = offset.split(','); 
		offset = new Number(temparr[1]); 
		if(offset)
			offset = Math.round(offset / Math.abs(offset));
		offset += 1; 
		//var myoffset = 'dhdh';//+offset;
		//myoffset = offset; 
		WAL_SetItemByValueInList('offsetParamDDL', gOffsetList[offset], false);
		
		break; 
	case 'skewX':
		WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
		break; 
	case 'skewY':
		WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
		break; 
	case 'fill-opacity':
		WAL_setNumberInputValue('startOpacityValueIP', animParam.startValue, false);	
		break;
	case 'scale':
		var value = new Number(animParam.startValue); 		
		value = value*100.0; 
		value -= 100.0; 
		WAL_setNumberInputValue('startValueIP', value, false);	
		break;		
	default:
		break; 			
	}
	
	//DURATION 
	WAL_setNumberInputValue('durationIP', animParam.duration, false);
	WAL_setNumberInputValue('repeatcountIP', animParam.repeatCount, false);
    // animParam.endState = 'freeze'; //FREEZE, REMOVE
	WAL_SetItemByValueInList('endstatelistDDL', animParam.endState, true);
	
	/*var refAnimInfo = GX_GetBeginParamWithRefAnim(gCurrentAnimInfo); 
	if(refAnimInfo[5] == 'Invisible Animation')
		refAnimInfo = GX_GetBeginParamWithRefAnim(refAnimInfo); 
	if(refAnimInfo[5]){		
		WAL_SetItemByValueInList('animlistDDL', refAnimInfo[5], false); 
	}
		*/ 
	
	/*
	//modify for rotate attribute 
    if(animParam.attribute == 'rotate')
    {
    	var valarr  = animParam.startValue.split(" "); 
    	animParam.startValue = valarr[0];     	
    	valarr  = animParam.endValue.split(" "); 
    	animParam.endValue = valarr[0];     	
    }
    WAL_setTextInputValue('animIDIP', animParam.animID, false);
    // animParam.objectID = 0;
    WAL_setTextInputValue('objectIDIP', animParam.objectID, false);
    //animParam.duration = 0;
    WAL_setNumberInputValue('durationIP', animParam.duration, false);
    
    WAL_setTextInputValue('animtitleIP', animParam.title, false);

    //animParam.animType = ''; //ATTRIBUTE, MOTION,TRANSFORM
    if ((animParam.animType == 'ANIM_ATTRIBUTE') || (animParam.animType == 'ANIM_TRANSFORM')) {
        WAL_setradioButtonCheck('attrvalbtn', true); 
        //animParam.attribute = '';
        var itemvalue = gReverseAttrList[animParam.attribute]; 
        WAL_SetItemByValueInList('animAttrDDL', itemvalue, false);
        //animParam.startValue
        
      //here should be the switch statement
		switch(animParam.attribute)
		{		
		
		case 'fill-opacity':			
			WAL_setNumberInputValue('startOpacityValueIP', animParam.startValue, false);
			//WAL_setNumberInputValue('endOpacityValueIP', animParam.endValue, false);	
			//continue from here next time			
			break; 
		 
		case 'stroke-width':
			WAL_setNumberInputValue('startStrokeWidthValueIP', animParam.startValue, false); 
				
			break;		
		case 'rotate':			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);					
			break; 
		case 'skewX':
			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
			break;
		case 'skewY':
			
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);		
			break;
		default:
			break; 			
		}
		 WAL_setNumberInputValue('offsetFromPathX', 0, true);
	     WAL_setNumberInputValue('offsetFromPathY',0, true); 
        
        //WAL_setTextInputValue('startColValIP', animParam.startValue, false);
        // animParam.endValue = '';
        //WAL_setTextInputValue('endColValIP', animParam.endValue, false);    
    }
    else if (animParam.animType == 'ANIM_MOTION') {
        WAL_setradioButtonCheck('motionvalbtn', true); 
        //animParam.refPathID = 0;
        WAL_SetItemByValueInList('pathlistDDL', animParam.refPathID, true);
        // animParam.bPathVisible = true;
        WAL_setCheckBoxValue('pathvisibilityCB', animParam.bPathVisible);   
        
        var mystr = animParam.PathObjectOffset; 
        var splitstring = mystr.split(',');
        WAL_setNumberInputValue('offsetFromPathX', splitstring[0], true);
        WAL_setNumberInputValue('offsetFromPathY', splitstring[1], true);         
      
    }
    else if (animParam.startType == 'ON_UIEVENT') {
        WAL_setradioButtonCheck('uieventRB', true);       
        // animParam.UIEventType = 'M_CLICK';
        var evtType;
        if (animParam.UIEventType == 'M_CLICK') {
            evtType = "Mouse Click";         
        }
        else if(animParam.UIEventType == 'M_MOVE') 
        {
            evtType = "Mouse Move"; 
        }       
        WAL_SetItemByValueInList('objectlistDDL', animParam.UIObjectID, true);             
    }
    else if (animParam.startType == 'ON_ANIMEVENT') {
        WAL_setradioButtonCheck('animeventRB', true);    
        
        WAL_SetItemByValueInList('animeventlistDDL', animParam.AnimEventType, true);
        //animParam.AnimID = 0;
        var animInfo = GX_GetAnimInfoByID(animParam.refAnimID); 
        if(!animInfo)
        	return;        
        WAL_SetItemByValueInList('animlistDDL', animInfo[5], true);   
    }
   
    
    // animParam.repeatCount = 0;
    WAL_setNumberInputValue('repeatcountIP', animParam.repeatCount, false);
    // animParam.endState = 'freeze'; //FREEZE, REMOVE
    WAL_SetItemByValueInList('endstatelistDDL', animParam.endState, true);   
    */
	
}

function GX_CopyAnimParam(srcParam, destParam){
	
	destParam.animID = srcParam.animID; 
	destParam.objectID = srcParam.objectID;   
	destParam.siblingID = srcParam.siblingID;
	destParam.duration = srcParam.duration ;
	destParam.animType = srcParam.animType;
	destParam.attribute = srcParam.attribute;
	destParam.startValue = srcParam.startValue;
	destParam.endValue = srcParam.endValue;
	destParam.refPathID = srcParam.refPathID; 
	destParam.refPathType = srcParam.refPathType; 
	destParam.PathObjectOffset = 	srcParam.PathObjectOffset;
	destParam.PathStartPoint = srcParam.PathStartPoint;
	destParam.visibleAnimID = srcParam.visibleAnimID;
	destParam.bPathVisible = srcParam.bPathVisible;
	destParam.originalPosition = srcParam.originalPosition;
	destParam.startType =  srcParam.startType;
	destParam.startTime = srcParam.startTime;
	destParam.UIEventType = srcParam.UIEventType;
	destParam.UIObjectID  = srcParam.UIObjectID ;
	destParam.AnimEventType= srcParam.AnimEventType;
	destParam.refAnimID= srcParam.refAnimID;
	destParam.calcMode= srcParam.calcMode;
	destParam.restart = srcParam.restart;
	destParam.repeatCount= srcParam.repeatCount;
	destParam.endState = srcParam.endState;
	destParam.center = srcParam.center;
	destParam.title = srcParam.title;
}

function GX_GetAnimParamsFromUI(inputParam)
{	
	var animParams = new sAnimParams();	
	GX_CopyAnimParam(inputParam, animParams);	
	//WAL_SetItemByValueInList('startParamDDL', itemValue, false);
	var itemValue = WAL_getDropdownListSelection('startParamDDL');
	var refAnimTitle; 
	if(itemValue == 'After'){
		refAnimTitle = WAL_getDropdownListSelection('animlistDDL');		
		var refAnimInfo = GX_GetAnimInfoByTitle(refAnimTitle);
		gCurrentAnimInfo[3]= refAnimInfo[0] + '.end'; 
		animParams.startType = 'ON_ANIMEVENT'; 
		animParams.AnimEventType = 'end';
		animParams.refAnimID = refAnimInfo[0];
	}
	else if(itemValue == 'With'){
		refAnimTitle = WAL_getDropdownListSelection('animlistDDL');		
		var refAnimInfo = GX_GetAnimInfoByTitle(refAnimTitle);
		gCurrentAnimInfo[3]= refAnimInfo[0] + '.begin'; 
		animParams.startType = 'ON_ANIMEVENT'; 
		animParams.AnimEventType = 'begin'; 
		animParams.refAnimID = refAnimInfo[0];
	}
	else if(itemValue == 'At 0th Second'){				
		var refAnimInfo = GX_GetAnimInfoByTitle(refAnimTitle);
		gCurrentAnimInfo[3]= '0s'; 
		animParams.startType = 'ON_TIME'; 
		animParams.AnimEventType = '';
		animParams.startTime = 0; 
		animParams.refAnimID = '';
	}
	else if(itemValue == 'On Click'){				
		var refAnimInfo = GX_GetAnimInfoByTitle(refAnimTitle);
		gCurrentAnimInfo[3]= animParams.UIObjectID + '.click'; //SVG_876.click; 
		animParams.startType = 'ON_UIEVENT'; 
		animParams.AnimEventType = '';
		animParams.startTime = 0; 
		animParams.UIEventType = 'M_CLICK'; 
		animParams.UIObjectID = animParams.objectID;	
		animParams.refAnimID = '';
	}	
	switch(animParams.attribute)
	{	
	case 'rotate':		endAngleValueIP
		var value =  WAL_getMaskedInputValue('endAngleValueIP'); 
    	var valarr  = animParams.endValue.split(" "); 
    	animParams.endValue = value;    	
    	//get the center value 
    	var markerNode = document.getElementById('markerPoint'); 
    	var x = markerNode.getAttribute('cx'); 
    	var y = markerNode.getAttribute('cy'); 
    	animParams.center = x + ' ' + y; 
    	animParams.endValue += ' ' +animParams.center;
    	animParams.startValue += ' ' +animParams.center;
		break; 		
	case 'pathmotion':	
		animParams.bPathVisible = WAL_getCheckBoxValue('pathvisibilityCB');
		var refPathID = animParams.refPathID;
		if(refPathID)
		{
			var pathNode =  document.getElementById(refPathID); 
			 if(animParams.bPathVisible == 'false'){			
				 GX_SetObjectAttribute(pathNode, 'stroke-opacity', '0.5', true, true);
				 GX_SetObjectAttribute(pathNode, 'visibility', 'hidden', true, true);
				 var attrArray = [['visibility', 'hidden'],['stroke-opacity', '0.5']]; 
				var retval =  GXRDE_updateSVGObject(pathNode.id, attrArray); 
			 }				
			 else{	
				 GX_SetObjectAttribute(pathNode, 'stroke-opacity', '1', true, true);
				 GX_SetObjectAttribute(pathNode, 'visibility', 'visible', true, true);
				 var attrArray = [['visibility', 'visible'],['stroke-opacity', '1']]; 
				 var retval = GXRDE_updateSVGObject(pathNode.id, attrArray); 
			 }			
		}	
		var newPathType = WAL_getDropdownListSelection('pathModifyDDL');	
		newPathType = gPathTypeList[newPathType]; 
		if(newPathType != animParams.refPathType){
			animParams.refPathType = newPathType; 
			GX_ModifyPathType(newPathType); 
		}
		var pos = GX_CalculateMotionAnimPathOffset(animParams.objectID, animParams.refPathID);
    	var splitArr = pos.split(';'); 
    	animParams.PathObjectOffset = splitArr[0]; 
    	animParams.originalPosition = splitArr[1]; 
		break; 
	case 'skewX':			
		animParams.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
		break; 
	case 'skewY':			
		animParams.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
		break; 		
	case 'fill-opacity':
		animParams.startValue = WAL_getMaskedInputValue('startOpacityValueIP');	
		break;
	case 'scale':
		var value = WAL_getMaskedInputValue('startValueIP');
		value =  new Number(value); 
		value += 100.0; 
		value /= 100.0; 
		animParams.startValue = value; 
		break; 
	default:
		break; 			
	}
	
	//duration 
	animParams.duration = WAL_getMaskedInputValue('durationIP');	
	animParams.repeatCount = WAL_getMaskedInputValue('repeatcountIP');
	animParams.endState = WAL_getDropdownListSelection('endstatelistDDL');	 
	
	return animParams; 
	//GETTING START PARAMETERS 
	
	
	 
	//get the 
	//[animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
	/*
	var animParam = new sAnimParams(); 
	//animParam.animID = 0;	
	animParam.animID = WAL_getInputValue('animIDIP');	
	animParam.title = WAL_getInputValue('animtitleIP');
	
    // animParam.objectID = 0;
	animParam.objectID = WAL_getInputValue('objectIDIP');
	
    //animParam.duration = 0;
	animParam.duration = WAL_getMaskedInputValue('durationIP');	
	

	var bRBState = WAL_getradioButtonCheckState('attrvalbtn');
	if(bRBState ==  true)
	{
	  animParam.animType = 'ANIM_ATTRIBUTE';		
	}
	bRBState = WAL_getradioButtonCheckState('motionvalbtn');
	if(bRBState ==  true)
	{
		animParam.animType = 'ANIM_MOTION';		
	}
	if(animParam.animType == 'ANIM_ATTRIBUTE')
	{
		var itemval = WAL_getDropdownListSelection('animAttrDDL');		
		itemval = gAttrList[itemval]; 
		//Debug_Message('itemval='+ itemval); 
		
		
		if( (itemval == 'translate')|| (itemval == 'scale') || (itemval == 'rotate')
				|| (itemval == 'skewX') || (itemval == 'skewY') )
		{
			animParam.animType = 'ANIM_TRANSFORM'; 
		}
		animParam.attribute = itemval;		
		
		
		//here should be the switch statement
		switch(itemval)
		{		
		
		case 'fill-opacity':
			animParam.startValue = WAL_getMaskedInputValue('startOpacityValueIP'); 
			animParam.endValue ='1.0';// WAL_getMaskedInputValue('endOpacityValueIP');
			break; 
		
		case 'stroke-width':
			animParam.startValue = WAL_getMaskedInputValue('startStrokeWidthValueIP'); 
				
			break; 
		
		case 'rotate':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');			
			break; 
		case 'skewX':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
			break;
		case 'skewY':			
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
			break;
		default:
			break; 			
		}		
		if(itemval == 'rotate')
		{
			var rectdim = GX_GetRectObjectDim(gCurrentObjectSelected);
			var centreX = rectdim.x + rectdim.width/2; 
			var centreY = rectdim.y + rectdim.height/2;
			animParam.center = centreX + ' ' + centreY;			
		}
	}  
    else if (animParam.animType == 'ANIM_MOTION') {       
        //animParam.refPathID = 0;
    	//animParam.refPathID = WAL_getDropdownListSelection('pathlistDDL');
    	// animParam.bPathVisible = true;    	
    	animParam.bPathVisible = WAL_getCheckBoxValue('pathvisibilityCB');
    	var pos = GX_CalculateMotionAnimPathOffset(animParam.objectID, animParam.refPathID);
    	var splitArr = pos.split(';'); 
    	animParam.PathObjectOffset = splitArr[0]; 
    	animParam.originalPosition = splitArr[1];    	
    	//insert here the checks for path offset CB
    }

	//timing params 
	 
	 bRBState = WAL_getradioButtonCheckState('uieventRB');
	 if(bRBState == true)
	 {
		 animParam.startType = 'ON_UIEVENT'; 
		 var evtType = 'Mouse Click'  ; //WAL_getDropdownListSelection('uieventlistDDL');
		 if(evtType == 'Mouse Click' )
			 animParam.UIEventType = 'M_CLICK'; 
		 else  if(evtType == 'Mouse Move' )
			 animParam.UIEventType = 'M_MOVE'; 
		 animParam.UIObjectID = WAL_getDropdownListSelection('objectlistDDL');
	 }
	 bRBState = WAL_getradioButtonCheckState('animeventRB');
	 if(bRBState == true)
	 {
		 animParam.startType = 'ON_ANIMEVENT'; 
		 animParam.AnimEventType = WAL_getDropdownListSelection('animeventlistDDL');
		 var animtitle = WAL_getDropdownListSelection('animlistDDL'); 
		 var animInfo = GX_GetAnimInfoByTitle(animtitle);
		 if(!animInfo)
			 return ; 
		 animParam.refAnimID = animInfo[0]; 
	 }	
	
	
	 animParam.repeatCount = WAL_getMaskedInputValue('repeatcountIP');
	 animParam.endState = WAL_getDropdownListSelection('endstatelistDDL');	 
	 return animParam; 
	 */
	
}


 function GX_CreateAnimationWidget(wdgtID)
 {
	 			var attrList = ['Opacity', 'Motion along Path', 'Rotate', 'Horizontal Skew', 'Vertical Skew', 'Scale'];
	 	//create the new animation widget interface here 	 
	 			WAL_createModelessWindow('newAnimationDlg', '220', '150', 'newAnimOK', 'newAnimCancel');
	 			WAL_CreateTextInput('newAnimtitleIP', 160, 24, false, '')	 ; 			
                WAL_createDropdownList('newAnimTypeDDL', 140, gInputHeight, false, attrList, "GX_AnimAttrListHandler", 100); 			
	 				 	//creating new animationlist interface	 
	 			//WAL_createModelessWindow('animationListWidget', '380', '470', 'animOK', 'animCancel');
	 			WAL_createListBox('animationlist', '325', '275', "GX_AnimationListHandler");
	 			 
                WAL_createNumberInput("repeatcountIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, 0, 1);
                var endstatelist = ['freeze', 'remove']; 
                WAL_createDropdownList('endstatelistDDL', '80', gInputHeight, false, endstatelist, "GX_AnimAttrListHandler", '50');                
              
                WAL_createDecimalNumberInput("durationIP", '100px', gInputHeight, "GX_AnimDlgEditHdlr",true, 10.0,0.0,0.1);
                WAL_setNumberInputValue('durationIP', 2, false); 
                //var attrList = ['Fill-Color', 'Stroke-Color', 'Opacity', 'Visibility', 'Stroke-Width', 'Move', 'Rotate', 'Hor. Skew', 'Vert. Skew'];                
                              
                var pathList = ['Line', 'Cubic Bezier','Quadratic Bezier','Elliptic']; 
                WAL_createDropdownList("pathModifyDDL", '140', gInputHeight, false, pathList, "GX_PathModifyHandler", '100');
                
                attrList = ['After', 'With', 'On Click', 'At 0th Second'];                
                WAL_createDropdownList('startParamDDL', '100', gInputHeight, false, attrList, "GX_AnimAttrListHandler", '100');
                WAL_createDropdownList('animlistDDL', '130', gInputHeight, false, animlist, "GX_AnimAttrListHandler", '100');
                WAL_createDecimalNumberInput("startOpacityValueIP", '80px', gInputHeight, "GX_AnimDlgEditHdlr",true, 1.0,0.0,0.1);
                WAL_setNumberInputValue('startOpacityValueIP', 1.0, false); 
                               
                WAL_createNumberInput("startStrokeWidthValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 15, 1, 1);
                WAL_setNumberInputValue('startOpacityValueIP', 1, false); 
                //WAL_createNumberInput("endAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, 0, 1);
                WAL_createNumberInput("endAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, -360, 1);
                WAL_setNumberInputValue('endAngleValueIP', 0, false);   
                
                WAL_createNumberInput("startValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, -100, 1);
                
                WAL_createButton('playbtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
                WAL_createButton('animdeletebtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
                WAL_createButton('applybtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
                
                      
              //  WAL_createRadioButton('motionvalbtn', 'GX_AnimDlgRadioValueChangeHdlr', '130', '20', false, false);
                var pathList = ['SVG_001', 'SVG_103', 'SVG_234'];                           
                WAL_createCheckBox('pathvisibilityCB', 'GX_AnimDlgCBHdlr', '30', '24', '14', false, true);
               // WAL_setradioButtonCheck('motionvalbtn', true);
              //  WAL_setradioButtonCheck('attrvalbtn', true); 
               // WAL_createNumberInput("offsetFromPathX", '60px', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
              //  WAL_setNumberInputValue('offsetFromPathX', 0, false); 
                WAL_createNumberInput("offsetFromPathY", '60', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
                WAL_setNumberInputValue('offsetFromPathY', 0, false);            
                 
                WAL_createDropdownList('offsetParamDDL', '100', gInputHeight, false, gOffsetList, "", '100');
                
                
               /* WAL_createDecimalNumberInput("startTimeIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 10.0,0.0,0.1);
                
                WAL_createRadioButton('uieventRB', 'GX_AnimDlgRadioValueChangeHdlr', '130', '20', false, false);
               // var uieventlist = ['Mouse Click', 'Mouse Move']; 
                //WAL_createDropdownList('uieventlistDDL', '100', gInputHeight, false, uieventlist, "GX_AnimAttrListHandler", '50');
               
            	
            	var objectlist = new Array();            	
                WAL_createDropdownList('objectlistDDL', '110', gInputHeight, false, objectlist, "GX_AnimAttrListHandler", '100');
                                
                WAL_createRadioButton('animeventRB', 'GX_AnimDlgRadioValueChangeHdlr', '150', '20', false, false);
                var animeventlist = ['Begin', 'End']; 
                WAL_createDropdownList('animeventlistDDL', '70', gInputHeight, false, animeventlist, "GX_AnimAttrListHandler", '100');
                
                var animlist = new Array(); 
                for(var k=0; k < gAnimList.length; k++)
            	{
                	//if(gAnimList[k][0] != 'Invisible Animation')
                		animlist.push(gAnimList[k][0]); 
            	}
                
                
                
                            
             
                WAL_setradioButtonCheck('animeventRB', true); 
                WAL_setradioButtonCheck('uieventRB', true);               
                WAL_createColorPickerWindow("animcolorpickwidget", "animcolorpicker", '350', '250', "animokbtn", "animcancelbtn");
                
                bAnimWdgtCreated = true; 
                */
                
                               
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
		 gAnimList = new Array(); 
	 }		 
     var size = $(JQSel).size(); 
     var num = $(JQSel).size();
 	 var DOMArr = $(JQSel).toArray(); 
 	 for(var k=0; k < DOMArr.length; k++)
 	 {
 		var objID = DOMArr[k].getAttribute('id'); 	
 		var objarr = [objID, 'SVG_SHAPE_OBJECT']; 		 
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
 	 	 var DOMArr1 = $(JQSel).toArray(); 
 	 	 for(var k=0; k < DOMArr1.length; k++)
 	 	 {
 	 		var objID = DOMArr1[k].getAttribute('id'); 		
 	 		var objarr = [objID, 'SVG_PATH_OBJECT']; 		 
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
	 	 var DOMArr1 = $(JQSel).toArray(); 
	 	 for(var k=0; k < DOMArr1.length; k++)
	 	 {
	 		var objID = DOMArr1[k].getAttribute('id'); 		
	 		var objarr = [objID, 'SVG_TEXT_OBJECT']; 		 
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
/*
function GX_SortAnimListInDisplayOrder(animList){
	
	var myanimList =[]; 	
	//get the anim item which is independent. 
	//animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval];
	//place it at the top of the stack. 
	//set the ref animID to be this
	//get the animitems which are referring to this refAnimId
	//now push them on the stack one by one  
	//continue doing this till there are no animitems left referring to this animID 
}

 * var mylist=[]; 
		for(var j=0; j <  srcAnimArr.length; j++)
		{
			if ( (srcAnimArr[j][0] ==  refanimID) && (srcAnimArr[j][2]  == ''.begin'') 
				 mylist.splice(0, 0,srcAnimArr[j][0] ) ; 
			else
				 mylist.push(srcAnimArr[j][0] ); 
		}
		if( mylist.length > 0 )
			return mylist;
		else
			return 0; 


function GX_GetanimItemWithRefAnimID(animList, refAnimID){
	var myList=[]; 
	for(var j=0;  j <animList.length; j++){
		var animItem = animList[j]; 
		var dotpos =  animItem[3].indexOf('.'); 		
		var animIDRef = animItem[3].substring(0,dotpos+1); 
		var animEvent = animItem[3].substring(dotpos,animItem[3].length); 
		if(animIDRef == refAnimID){
			if(animEvent == 'begin')
				mylist.splice(0, 0,animList[j] ) ; 
			else if(animEvent == 'end')
				mylist.push(animList[j]); 
		}
	}
}
  */
function GX_RemoveObjectFromList(objectID)
{
		//first check the animIDs corresponding to the objectID 
	var animIDArr =[]; 
	for(var j=0; j < gAnimList.length; j++)
	{
		//_rm this part needs to be corrected 
		if(gAnimList[j][1] == objectID)
			animIDArr.push(gAnimList[j][0]); 
	}
	
	for(j=0; j < animIDArr.length; j++)
	{
		GX_RemoveAnimInfoFromList(animIDArr[j]); 
	}
	//when done then remove objectID from object list 
	for(var i=0; i < gObjectList.length; i++)
	{
		if(gObjectList[i][0]== objectID)
			gObjectList.splice(i,1); 
	}		
}


function GX_GetAnimTitle(animNode)
{
	
	//get the descriptor element
	var childList = animNode.childNodes;
	var descNode  = 0; 
	for(var k=0;  k < childList.length; k++ )
	{
		descNode  =  childList[k]; 
		if('DESC' == descNode.nodeName.toUpperCase())
		{
			break ; 
		}
	}
	if(!descNode)
	{
		Debug_Message("Descriptor not Found");
		return 0; 
	}
	titleval = descNode.innerHTML;
	return titleval; 
	
}
function GX_UpdateAnimInfoInList(animNode)
{
		var nodename = animNode.nodeName.toUpperCase(); 
		if((nodename == 'ANIMATE')||(nodename == 'ANIMATETRANSFORM') || (nodename == 'ANIMATEMOTION') )
		{
			if(nodename == 'ANIMATE')
			{
				var attr = animNode.getAttribute('attributeName'); 	 	 				
			}
			else if(nodename == 'ANIMATETRANSFORM')
			{
				attr = animNode.getAttribute('type');  	 	 				
			}
			else if(nodename == 'ANIMATEMOTION')
			{
				attr = 'pathmotion';  	 	 				
			}
				
			var beginval = animNode.getAttribute('begin'); 
			var endval = animNode.getAttribute('fill');
			
			var titleval = GX_GetAnimTitle(animNode); 
			var animInfo = [animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
			animNode.setAttribute('begin', ''); 
			animNode.setAttribute('fill', 'remove'); 
			
			//_rm first remove the existing entry and then add
			GX_RemoveAnimInfoFromList(animNode.id); 
			gAnimList.push(animInfo); 	
			//now check if its an existing entry or a new entry
			/*	
			 * var index = GX_GetIndexofAnimInfoFromList(animNode.id);
			if(index == -1)
			{
				gAnimList.push(animInfo); 	
			}
		 	*/				
		}
}


function GX_GetIndexofAnimInfoFromList(animID)
{
	for(var j=0; j < gAnimList.length; j++)
	{
		if(gAnimList[j][0] == animID)
			return j ;
	}
	//otherwise new entry
	return -1; 
}
function GX_GetAnimInfoByTitle(animTitle)
{
	for(var j=0; j < gAnimList.length; j++)
	{
		var animInfo = gAnimList[j]; 
		if(animInfo[5] == animTitle)
			return animInfo; 
	}		
	return 0; 
}
function GX_GetAnimInfoByID(animID)
{
	for(var j=0; j < gAnimList.length; j++)
	{
		var animInfo = gAnimList[j]; 
		if(animInfo[0] == animID)
			return animInfo; 
	}		
	return 0; 
}
function GX_GetAnimInfoListIndexByID(animID)
{
	for(var j=0; j < gAnimList.length; j++)
	{
		var animInfo = gAnimList[j]; 
		if(animInfo[0] == animID)
			return j; 
	}		
	return -1; 
}
function GX_RemoveAnimInfoFromList(animID)
{	
	var index = -1; 
	for(var j=0; j < gAnimList.length; j++)
	{
		if(gAnimList[j][0] == animID)
		{
			index = j; 
			break; 
		}
	}
	if(index  != -1)
		gAnimList.splice(index,1); 	
	//gAnimList = GX_SortAnimListInDisplayOrder(gAnimList);
	
 	
 	//now sort the list 
 	
	//WAL_UpdateDropDownList('listanimDDL', animlist);
	//WAL_SetItemInDropDownList('listanimDDL', 0, true);
	
}

 function GX_AnimTabHandler()
 {
	 
 }
 
 function GX_AnimAttrListHandler(Node, value)
 {
	 var nodeid = Node.id;
	 
	 if(nodeid == 'animAttrDDL')
	 {
		 var itemval = value ; //gAttrList[value]; 
		 var JQSel = '.ATTR_UI_GROUP'; 
		 $(JQSel).hide(); 		
		 //Debug_Message('Anim Attribute=' + value); 
		 
		 if(itemval == 'fill-opacity')
		 {
			 JQSel = '#OPACITY_UI_GROUP';			 
			 $(JQSel)[0].style.display='inline-block'; 
			WAL_setNumberInputValue('startOpacityValueIP', 0.0, false);
			//WAL_setNumberInputValue('endOpacityValueIP', 1.0, false);	
		 }
		 
		 if(itemval == 'stroke-width')
		 {			 
			 JQSel = '#STROKE_WIDTH_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';	
			WAL_setNumberInputValue('startStrokeWidthValueIP', 1, false); 
			
		 }
		
		 if( (itemval == 'rotate') || (itemval == 'skewX')||(itemval == 'skewY') )
		 {			 
			 JQSel = '#ANGLE_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';//.show();			
			WAL_setNumberInputValue('endAngleValueIP', 30, false);	
		 }
		 if(itemval == 'scale'){
			 JQSel = '#FROM_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';		
			WAL_setNumberInputValue('startValueIP', 30, false);	
		 }
		 
		 if(itemval == 'stroke-width')
		 {			 
			 JQSel = '#STROKE_WIDTH_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';	
			WAL_setNumberInputValue('startStrokeWidthValueIP', 1, false);			
		 }
		 if(itemval == 'pathmotion'){
			JQSel = '#MOTION_PATH_GROUP'; 
			$(JQSel)[0].style.display='inline-block';				 
		 }
		 if(itemval == 'fill-opacity'){
				JQSel = '#OPACITY_UI_GROUP'; 
				$(JQSel)[0].style.display='inline-block';				 
		 }
		 
	 }
	 else if(nodeid == 'startParamDDL'){
		 var JQSel = '#animlist'; 		
		 if( (value == 'After') || (value == 'With')){
			 $(JQSel).show(); 
		 }
		 else
			 $(JQSel).hide(); 			 
	 }
	 	 
 }
 
 function GX_AnimDlgRadioValueChangeHdlr(event)
 {
	var state = event.args.checked; 
	var radionode = event.target; 
	var radioID = event.target.id;
	if(radioID == 'attrvalbtn')
	{
		if(state ==  true)
		{			
			WAL_disableWidget('animAttrDDL', 'data-jqxDropDownList', false, false);
		}
		else
		{
			WAL_disableWidget('animAttrDDL', 'data-jqxDropDownList', false, true);
			
		}
	}
	else if(radioID == 'motionvalbtn')
	{
		if(state == true)
		{
			
			WAL_disableWidget('pathvisibilityCB', 'data-jqxCheckBox', false, false);			
		}
		else
		{
			WAL_disableWidget('pathlistDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('pathvisibilityCB', 'data-jqxCheckBox', false, true);			
		}
	}
	
	else if(radioID == 'uieventRB')
	{		
		if(state == true)
		{			
			//WAL_disableWidget('uieventlistDDL', 'data-jqxDropDownList', false, false);
			WAL_disableWidget('objectlistDDL', 'data-jqxDropDownList', false, false);
		}
		else
		{
			//WAL_disableWidget('uieventlistDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('objectlistDDL', 'data-jqxDropDownList', false, true);	
		}		
	}
	else if(radioID == 'animeventRB')
	{		
		if(state == true)
		{			
			WAL_disableWidget('animeventlistDDL', 'data-jqxDropDownList', false, false);
			//WAL_disableWidget('animlistDDL', 'data-jqxDropDownList', false, false);
		}
		else
		{
			WAL_disableWidget('animeventlistDDL', 'data-jqxDropDownList', false, true);
			//WAL_disableWidget('animlistDDL', 'data-jqxDropDownList', false, true);
		}		
	}
 }
 
 function GX_AnimDlgOK()
 {
	
	 if(gNewAnimObject == false)
		 return ; 
	if(gCurrAnimParam.animType == 'ANIM_MOTION')
	{		
		if(!gCurrAnimNode)
		{
			gCurrAnimNode = document.getElementById(gCurrAnimParam.animID); 
		}	
	}
 	gCurrAnimParam = 0; 
	gCurrAnimParam = GX_GetAnimParamsFromUI();	
	
	if(gInitAnimParam.animType == gCurrAnimParam.animType)
	{
		var attrArray = GX_CompareAndGetAnimParamArray(gInitAnimParam, gCurrAnimParam); 		
		//now update the array on server side 
		if( (attrArray) && (attrArray.length >0) )
		{
			var respStr = GXRDE_updateAnimationObject(gCurrAnimParam.animID, attrArray); 
			respStr = GX_UpdateAnimObjectAttribute(gCurrAnimParam.animID, attrArray); 
		}		
	}
	
	
	gbApplied = false;	
	
 } 
 
 
 function GX_AddNewAnimationObject()
 {	 
	 var JQSel = "#" + "animtitleIP";	
		var animName  = $(JQSel).val();	
		var firstchar;
		
		if ( (animName == '') || (animName[0] == " ") )
		{
			Debug_Message("Please Assign a Title to the Animation");		
			setTimeout(function(){			
				WAL_showModalWindow('animationwidget',"", "" );		
				}, 250); 
			return ; 
		} 	
		
		if(gCurrAnimParam.animType == 'ANIM_MOTION')
		{		
			if(!gCurrAnimNode)
			{
				gCurrAnimNode = document.getElementById(gCurrAnimParam.animID); 
			}
			
		}
	 	gCurrAnimParam = 0; 
		gCurrAnimParam = GX_GetAnimParamsFromUI();
	
		if(gNewAnimObject == true)
		{
			var retval = GX_AddAnimationElement(gCurrAnimParam, true);
			if(gCurrAnimParam.animType == 'ANIM_MOTION')
			{
				var retval = GXRDE_openSVGFile(gSVGFilename); 
			    var HTMLstr=""; 		 
			    var currfilename = gSVGFilename; 
			    var currObjID = gCurrAnimParam.objectID; 
			    if(retval)
			    {
				     GX_CloseSVGFile();
				   	 var dataNode = document.getElementById('objectcontainer');   	 
				   	 dataNode.innerHTML += retval;		   	
				  	 GX_InitializeDocument(currfilename);		   	
			    }	
			    var xmlstr = GXRDE_GetSVGMetaXML(currfilename);    
			    if(xmlstr)
			       GX_updateTreeWidget(xmlstr);   
			    WAL_expandAllTreeItems(gTreeNodeID, true);
			    WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+currObjID);		     
			    GX_MenuItemShow('animate', 'Animate');	
			    WAL_SetItemByValueInList('listanimDDL', gCurrAnimParam.animID, true); 
			    GX_EditAnimation(gCurrAnimParam.animID); 
			}
			
		}		
		if(gNewAnimObject == true)
			gNewAnimObject = false; 
 }
 
 function GX_AnimDlgCANCEL()
 {
	 
	 if(gbApplied == false)
		 return ; 
	 
	var JQSel = "#" + "animtitleIP";	
	var animName  = $(JQSel).val();	
	if ( (animName == '') || (animName[0] == " ") )
	{
		Debug_Message("Please Assign a Name to the Animation");		
		setTimeout(function(){			
			WAL_showModalWindow('animationwidget',"", "" );		
			}, 250); 
		return ; 
	} 	
	var tempAnimParam=0; 
	tempAnimParam = GX_GetAnimParamsFromUI();	
	if(gInitAnimParam.animType == tempAnimParam.animType)
	{
		var attrArray = GX_CompareAndGetAnimParamArray(tempAnimParam, gInitAnimParam); 		
		//now update the array on server side 
		if( (attrArray) && (attrArray.length >0) )
		{
			GXRDE_updateAnimationObject(gInitAnimParam.animID, attrArray); 
			GX_UpdateAnimObjectAttribute(gInitAnimParam.animID, attrArray);
		}		
	}
	else
	{
		GX_AddAnimationElement(gInitAnimParam, true); 
	}
	gbApplied = false;
	
	 
 }
 
 function GX_AnimDlgBtnHdlr(node)
 {
	 var nodeid =  node.id; 	 
 }
 
 
 function GX_AnimDlgCBHdlr(event)
 {
	 var CBID = event.target.id;
	 var state = event.args.checked;	
	 if (CBID == 'pathvisibilityCB')
	 {
		 var refPathID = WAL_getDropdownListSelection('pathlistDDL');
		 if(refPathID)
		 {
			 var pathNode =  document.getElementById(refPathID); 
			 if(state ==  false)
				 GX_SetObjectAttribute(pathNode, 'stroke-opacity', '0.5', true, false);
			 else
				 GX_SetObjectAttribute(pathNode, 'stroke-opacity', '1', true, false);
		 }	
		 		 
	 }
 }
 
 function GX_ApplyBtnHdlr(event){	 
	 	 
	var JQSel = "#" + "animtitleIP";	
	var animName  = $(JQSel).val();	
	if ( (animName == '') || (animName[0] == " ") )
	{
		Debug_Message("Please Assign a Title to the Animation");		
		setTimeout(function(){			
			WAL_showModalWindow('animationwidget',"", "" );		
			}, 250); 
		return ; 
	} 	
	var tempAnimParam=0; 
	tempAnimParam = GX_GetAnimParamsFromUI();	
	if(gInitAnimParam.animType == tempAnimParam.animType)
	{
		var attrArray = GX_CompareAndGetAnimParamArray(gInitAnimParam, tempAnimParam); 		
		//now update the array on server side 
		if( (attrArray) && (attrArray.length >0) )
		{
			GXRDE_updateAnimationObject(tempAnimParam.animID, attrArray); 
			GX_UpdateAnimObjectAttribute(tempAnimParam.animID, attrArray); 
		}		
	}
	else
	{
		 //create a new animation object again 
		GX_AddAnimationElement(tempAnimParam, true); 
	 }
	gbApplied = true; 
	//Debug_Message("End of Apply"); 
	                                                                                              
 }
 
 function GX_AnimDlgEditHdlr(value, node)
 {
	// Debug_Message("Value is being set for:"+  node.id); 	 
	 if ( (node.id == 'offsetFromPathX') || (node.id == 'offsetFromPathY') )
	 {
		 var diff; 		
		 diff = new Number(value); 		
		 if(!gCurrAnimParam)
		 {
			 Debug_Message("gCurrAnimParam NULL"); 
			 return; 
		 }
		
		 if(!gCurrentObjectSelected)
		 {
			 return ; 
			 //var currObjNode = document.getElementById(gInitAnimParam.objectID); 
			 //GX_SetSelection(currObjNode, true, false); 
		 }		
		 var pathNode = document.getElementById(gCurrAnimParam.refPathID); 
		 var objNode = document.getElementById(gCurrAnimParam.objectID);
		 var objDim = GX_GetRectObjectDim(objNode);
		 if (node.id == 'offsetFromPathX')
			 objDim.x = new Number(gCurrAnimParam.PathStartPoint.x -  objDim.width/2) + diff; 
		 else if (node.id == 'offsetFromPathY')
			 objDim.y = new Number(gCurrAnimParam.PathStartPoint.y - objDim.height/2) + diff; 
		// Debug_Message("objDim.y =" + objDim.y );
		 GX_SetRectObjectDim(objNode,objDim );
		 gLastPositionValue = value; 
	 }
 }
 
 function GX_AddAnimationElement(animParams, bUpdateUI)
 {
	 var animcodestr =""; 
	 var attrArray = [];
	 var attrData; 	 
	 //common 
	 attrData = ['title',animParams.title];  
	 attrArray.push(attrData);

	 attrData = ['dur',animParams.duration+'s']; 
	 attrArray.push(attrData);
	 
	 attrData = ['calcMode',animParams.calcMode];  
	 attrArray.push(attrData); 
	    
	 attrData = ['restart',animParams.restart];  
	 attrArray.push(attrData);
	    
	 attrData = ['repeatCount',animParams.repeatCount];  
	 attrArray.push(attrData);
	 
//	 attrData = ['siblingID',animParams.siblingID];  
//	 attrArray.push(attrData);
	    
	 var beginval = ''; 
	 if(animParams.startType == 'ON_TIME')
	 {
	    beginval +=  animParams.startTime + 's'; 
	 }
	 else if(animParams.startType == 'ON_UIEVENT')
	 {
		beginval += animParams.objectID + '.click';			
	 }	
	 else if(animParams.startType == 'ON_ANIMEVENT')
	 {
		//beginval += animParams.refAnimID + '.end';
		 beginval += animParams.refAnimID + '.'+ animParams.AnimEventType;		 
	 }	 
	 
	 attrData = ['fill',animParams.endState];  
	 attrArray.push(attrData);
	 attrData = ['begin',beginval];  
	 attrArray.push(attrData);
	 
	if(animParams.animType == 'ANIM_MOTION')
	{
		//INDUCE A VISIBLE ANIMATION BEFORE 
		var newAttr = []; 
		var newAnimID = animParams.animID + '_V'; 
		attrData = ['title','Invisible Animation'];  
		newAttr.push(attrData); 		 
		attrData = ['dur','0.5s'];  
		newAttr.push(attrData);		 
		attrData = ['calcMode','linear'];  
		newAttr.push(attrData);		    
	    attrData = ['restart','never'];  
		newAttr.push(attrData);		    
		attrData = ['repeatCount',0];  
		newAttr.push(attrData);
		attrData = ['fill','freeze'];  
		newAttr.push(attrData);
		attrData = ['begin',beginval];  
		newAttr.push(attrData); 
		attrData = ['from','hidden'];  
		newAttr.push(attrData); 
		attrData = ['to','visible'];  
		newAttr.push(attrData); 
		attrData = ['attributeType',"XML"];  
		newAttr.push(attrData); 		
		attrData = ['attributeName',"visibility"]; 
		newAttr.push(attrData); 
		attrData = ['from',"hidden"]; 
		newAttr.push(attrData); 
		attrData = ['to',"visible"]; 
		newAttr.push(attrData); 		
		attrData = ['onend',"GX_ChangeAnimateMotionSettings(evt.target);"]; 
		newAttr.push(attrData); 
		GX_AddNewAnimElementInDOM(newAnimID, animParams.objectID,'ANIM_ATTRIBUTE', newAttr, bUpdateUI); 		
		
		
		attrData = ['refpathid',animParams.refPathID];  
		attrArray.push(attrData);	 
		attrData = ['rotate','auto'];  
		attrArray.push(attrData);			
		
		//NOW CALCULATE THE OFFSET 
		//get the object type 
	
	//	var offset = GX_CalculateMotionAnimPathOffset(animParams.objectID, animParams.refPathID);
		attrData = ['from',animParams.PathObjectOffset];  
		attrArray.push(attrData);	
		attrData = ['to',animParams.originalPosition];  
		attrArray.push(attrData);		
		attrData = ['begin', newAnimID + '.end'];  
		attrArray.push(attrData);		
		animParams.visibleAnimID = newAnimID; 
		
	}
	else
	{
		 attrData = ['attributeType','XML'];  
		 attrArray.push(attrData); 	  
		
		 if(animParams.animType == 'ANIM_ATTRIBUTE')
		 {
			
		    attrData = ['attributeName',animParams.attribute];  
		    attrArray.push(attrData);   
		    
		    attrData = ['from',animParams.startValue];  
		    attrArray.push(attrData); 
		    
		    attrData = ['to',animParams.endValue];  
		    attrArray.push(attrData); 	    
		 }	  
		    
		 else if(animParams.animType == 'ANIM_TRANSFORM')
		 {		 
			 attrData = ['attributeName','transform'];  
			 attrArray.push(attrData);   
			 
			 attrData = ['type',animParams.attribute];  
			 attrArray.push(attrData);
			 
			 var startval = animParams.startValue;
			 var endval = animParams.endValue; 
			 if(animParams.attribute == 'rotate')
			 {
				 //startval = startval + ' ' + animParams.center; 
				 //endval = endval + ' ' + animParams.center; 	
				 startval = startval ; 
				 endval = endval ; 	
			 }		    
			 attrData = ['from',startval];  
			 attrArray.push(attrData); 
			    
			 attrData = ['to',endval];  
			 attrArray.push(attrData); 	  		 
		 }
	}	 		 
	//delete the existing node first 
	GX_AddNewAnimElementInDOM(animParams.animID, animParams.objectID,animParams.animType, attrArray, bUpdateUI); 
 }
 
 
 
 function GX_CalculateMotionAnimPathOffset(objectID, pathID)
 {	 
	var objNode =  document.getElementById(objectID); 
	var pathNode  = document.getElementById(pathID);
		//get the path dim . 
	var objDim =  GX_GetRectObjectDim(objNode); 
	var origPos =  new sPoint(); 
	var objType = objNode.classList[1]; 
	if(objType == "ELLIPSE")
	{
		origPos.x = objDim.rotCentreX;
		origPos.y = objDim.rotCentreY;
	}
	else if(objType == "RECTANGLE")
	{
		origPos.x = objDim.x;
		origPos.y = objDim.y;
	} 
	else if(objType == "TEXT")
	{
		origPos.x = objDim.x;
		origPos.y = objDim.y;
	} 	
	//temporary taken to be 0 offset but later on offset input will be takne in new GUI
	var X = 0;//WAL_getMaskedInputValue('offsetFromPathX'); 
	var Y = 0;//WAL_getMaskedInputValue('offsetFromPathY'); 
	var offsetStr = WAL_getDropdownListSelection('offsetParamDDL');
	var normalizedVal = new Number(gReverseOffsetList[offsetStr]); 
	normalizedVal -= 1; 
	var Y = (objDim.height * normalizedVal)/2;	
	var offset = X + ',' + Y;
	var origPosString = origPos.x + ',' + origPos.y; 
	offset = offset + ';' + origPosString; 
	return offset; 
 }
 
 function GX_AlignObjectWithPath(objNode, pathNode)
 {
	
		
	//GET THE RECTANGLE OBJECT DIMENSION 
	var objDim = GX_GetRectObjectDim(objNode);
	var pathStart  = GX_GetPathStartPoint(pathNode);	
	//NOW CALCULATE THE START COORDINATES OF THE OBJECT 
	objDim.x = pathStart.x - objDim.width/2; 
	objDim.y = pathStart.y - objDim.height/2; 
	
	//AND SET THE OBJECT ACCORDIGNLY 
	GX_SetRectObjectDim(objNode, objDim) ; 
	//Debug_Message('Aligning Object'); 
	 
 }
 function GX_AddNewAnimElementInDOM(animID, ObjID, animType, attrArray, bUIUpdate)
 {
	 
	 var animstr = GXRDE_addNewAnimationObject(animID, ObjID, animType, attrArray); 
	
	 var animNode = document.getElementById(animID); 
	 if(animNode)
	 {
		 var parentNode = animNode.parentNode; 
		 parentNode.removeChild(animNode); 
	 }	
 	GX_AddNewNodeFromXMLString(ObjID, animstr);	 
 	animNode = document.getElementById(animID); 	
 	if(bUIUpdate == true)
 	{
 		GX_UpdateAnimParamOnUI(animNode);
 	}
 	
 	
 }
 
 function GX_UpdateAnimParamOnUI(animNode)
 {
	 if(animNode)
	 		GX_UpdateAnimInfoInList(animNode); 
	 	var animlist=[];
	 	for(var k=0; k < gAnimList.length; k++)
	 	{
	 		//if(gAnimList[k][5] != 'Invisible Animation')
	 			animlist.push(gAnimList[k][5]); 
	 	}
	 	WAL_UpdateDropDownList('listanimDDL', animlist);
	 	var index = animlist.length-1; 
	 	WAL_SetItemInDropDownList('listanimDDL', index, true); 
 }
 
 function GX_AnimColorWidgetOK(event)
 {
	 
	 
 }
 
 function GX_GetAnimParamFromNode(animNode)
 {	
		var animID = animNode.id; 
		var animParam = new sAnimParams() ;	
		//get all the animation parameters
		//populate the data structure 
		animParam.title = GX_GetAnimTitle(animNode); 
		var value; 
		animParam.animID = animNode.id;  
		animParam.objectID = animNode.targetElement.id;
		
		value = animNode.getAttribute('dur'); 
		value = value.substring(0, value.length-1); 
		animParam.duration = value;		
		value = animNode.nodeName.toUpperCase(); 
		animParam.startValue = animNode.getAttribute('from'); 
		animParam.endValue = animNode.getAttribute('to');
		if(value == 'ANIMATE')
		{
			animParam.animType = 'ANIM_ATTRIBUTE';
			animParam.attribute = animNode.getAttribute('attributeName');
		}		
		else if(value == 'ANIMATETRANSFORM')
		{
			animParam.animType = 'ANIM_TRANSFORM';
			animParam.attribute = animNode.getAttribute('type');
			if(animParam.attribute == 'rotate'){
				//var value =  animParam.startValue; 
		    	var valarr  = animParam.startValue.split(" "); 
		    	animParam.center = valarr[1] + ' ' + valarr[2];	
		    	animParam.startValue = valarr[0];		    	
		    	//value =  animParam.endValue; 
		    	valarr  = animParam.endValue.split(" ");		    		
		    	animParam.endValue = valarr[0]; 		    	
			}
		}
			
		else if(value == 'ANIMATEMOTION')
		{
			animParam.animType = 'ANIM_MOTION';
			animParam.attribute = 'pathmotion';			
			var childList = animNode.childNodes; 
			for(var j=0; j < childList.length; j++)
			{
				var mpathNode = childList[j]; 
				if('MPATH'== mpathNode.nodeName.toUpperCase())
				{
					var refPath = mpathNode.getAttribute('xlink:href');
					refPath = refPath.substring(1,refPath.length); 
					animParam.refPathID = refPath;
				}				
			}
			//get the previous sibling which should visibility animate objct 
			var visibleAnimNode =  GX_GetAnimMotionSiblingNode(animNode);
			animParam.visibleAnimID = visibleAnimNode.id; 
			//get the pathoffset here
			var mystr = animNode.getAttribute('from'); 
			animParam.PathObjectOffset = mystr; 
			var pathNode = document.getElementById(animParam.refPathID); 
			animParam.refPathType = pathNode.classList[1]; 
			animParam.PathStartPoint = GX_GetPathStartPoint(pathNode); 
			var opacity = pathNode.getAttribute('stroke-opacity'); 
			pathNode.setAttribute('visibility','visible');
			if(opacity == '0.5'){
				animParam.bPathVisible = false;				 
			}				
			else{
				animParam.bPathVisible = true;			
			}							
		}
		
		
		
		var animInfo  = GX_GetAnimInfoByID(animID);
		//animNode.setAttribute('begin', animInfo[3]); 
		value = animInfo[3]; 
		if(value.length < 1)
		{
			//Debug_Message("Begin Value is NULL"); 
			
		}
		var index = value.indexOf('s',0); 
		if(index != -1)
		{
			animParam.startType = 'ON_TIME';			
			value = value.substring(0, index);
			animParam.startTime = value; 
		} 
		else
		{
			index = value.indexOf('.click',0); 
			if(index != -1)
			{
				animParam.startType = 'ON_UIEVENT';				
				value = value.substring(0, index);
				animParam.UIEventType = 'M_CLICK'; 
				animParam.UIObjectID = value; 
			} 
			else
			{
				index = value.indexOf('.end',0); 
				if(index != -1)
				{
					animParam.startType = 'ON_ANIMEVENT';	
					animParam.AnimEventType = 'end'; 
					value = value.substring(0, index);
					animParam.refAnimID = value;  
				} else{
					index = value.indexOf('.begin',0); 
					if(index != -1)
					{
						animParam.startType = 'ON_ANIMEVENT';	
						animParam.AnimEventType = 'begin'; 
						value = value.substring(0, index);
						animParam.refAnimID = value;  
					} 
				}
				
			}		
		}
		if(index == -1)
		{
			index = value.indexOf('.click',0);
			if(index == -1)
				index = value.indexOf('.end',0);
		}
		if(index == -1)
			return ; 
		animParam.calcMode = animNode.getAttribute('calcMode');
		animParam.restart = animNode.getAttribute('restart');
		animParam.repeatCount = animNode.getAttribute('repeatCount');
	    //animNode.setAttribute('fill', animInfo[4]); 
		value = animInfo[4];
		animParam.endState = value;	
		return animParam; 	 
 }
 
 function GX_GetAnimMotionSiblingNode(animNode)
 {
	//get the previous sibling which should visibility animate objct 
	    var node = 0; 
		var visibleAnimNode =  animNode.previousSibling;
		if('ANIMATE' == visibleAnimNode.nodeName.toUpperCase())
		{
			var attrname = visibleAnimNode.getAttribute('attributeName'); 
			if(attrname == 'visibility')
			{				
				node = document.getElementById(visibleAnimNode.id); 
			}
		}	
		return node; 
 }

 function GX_SetAnimParamToNode(animParam, animNode)
 {	
		animNode.firstElementChild.innerHTML = animParam.title; 
		var value; 
		if(animParam.animID != animNode.id)
		{
			Debug_Message("Animation ID not matching"); 
			return ; 
		}
		
		if(animParam.objectID != animNode.targetElement.id)
		{
			Debug_Message("Object ID not matching"); 
			return ; 
		}		
		var value = animParam.duration + 's';
		animNode.setAttribute('dur',value); 
		
		value = animNode.nodeName.toUpperCase(); 
		if(value == 'ANIMATE')
		{
			if(animParam.animType != 'ANIM_ATTRIBUTE')
			{
				Debug_Message("Animation Element Type mismatch"); 
				return ; 
			}			
			animNode.setAttribute('attributeName', animParam.attribute);
		}		
		else if(value == 'ANIMATETRANSFORM')
		{
			if(animParam.animType != 'ANIM_TRANSFORM')
			{
				Debug_Message("Animation Element Type mismatch"); 
				return ; 
			}
			animNode.setAttribute('type', animParam.attribute);
		}
			
		else if(value == 'ANIMATEMOTION')
		{
			if(animParam.animType != 'ANIM_MOTION')
			{
				Debug_Message("Animation Element Type mismatch"); 
				return ; 
			}
			//TBD here 
			//gInitAnimParam.refPathID = '';
			//gInitAnimParam.bPathVisible = false;
			
			return ; //from here 
		}
		animNode.setAttribute('from', animParam.startValue); 
		animNode.setAttribute('to', animParam.endValue);		
		
		if(animParam.startType == 'ON_TIME')
		{
			animNode.setAttribute('begin', animParam.startTime+'s');
		}
		else if(animParam.startType == 'ON_UIEVENT')
		{
			value = animParam.UIObjectID + '.click'; 
			animNode.setAttribute('begin', value);
		}
		else if(animParam.startType == 'ON_ANIMEVENT')
		{
			value = animParam.refAnimID + '.' + animParam.AnimEventType; 
			/*
			if(animParam.AnimEventType == 'END')
			{
				value = animParam.refAnimID + '.end'; 
			}
			else if(animParam.AnimEventType == 'BEGIN')
			{
				value = animParam.refAnimID + '.begin'; 
			}
			*/
			animNode.setAttribute('begin', value);
		}		
		
		 animNode.setAttribute('calcMode',animParam.calcMode);
		 animNode.setAttribute('restart',animParam.restart);
		 animNode.setAttribute('repeatCount',animParam.repeatCount);	   
		 return ; 	 
 }
 
 function GX_CompareAndGetAnimParamArray(AnimParam1, AnimParam2)
 {	 
	 
	 var attrArray = [];
	 var attrData; 
	 
	 if(AnimParam1.title != AnimParam2.title)
	 {
		 attrData = ['title',AnimParam2.title];  
		 attrArray.push(attrData); 	   
	 }
	 if(AnimParam1.animID != AnimParam2.animID)
	 {
		 Debug_Message("Animation ID Mistmatch");
		 return 0; 
	 }
	 if(AnimParam1.objectID != AnimParam2.objectID)
	 {
		 Debug_Message("Animation Target Element ID Mistmatch");
		 return 0; 
	 }
	 if(AnimParam1.animType != AnimParam2.animType)
	 {
		 Debug_Message("Animation Element Type Mistmatch");
		 return 0 ; 
	 }
	 if(AnimParam1.duration != AnimParam2.duration)
	 {
		 attrData = ['dur',AnimParam2.duration+'s'];  
		 attrArray.push(attrData); 	   
	 }
	 if(AnimParam1.calcMode != AnimParam2.calcMode)
	 {
		 attrData = ['calcMode',AnimParam2.calcMode];		
		 attrArray.push(attrData); 
	 }
	 if(AnimParam1.restart != AnimParam2.restart)
	 {
		 attrData = ['restart',AnimParam2.restart];  
		 attrArray.push(attrData); 
	 }
	 if(AnimParam1.repeatCount != AnimParam2.repeatCount)
	 {
		 attrData = ['repeatCount',AnimParam2.repeatCount];  
		 attrArray.push(attrData); 
	 }
	 if(AnimParam1.endState != AnimParam2.endState)
	 {
		 attrData = ['fill',AnimParam2.endState];  
		 attrArray.push(attrData); 
	 }
	
	var beginval =""; 
	if(AnimParam1.startType != AnimParam2.startType)
	{
		if(AnimParam2.startType == 'ON_UIEVENT')
		{			 
			beginval += AnimParam2.UIObjectID + '.click';				 			
		}
		else if(AnimParam2.startType == 'ON_ANIMEVENT')
		{			
			beginval += AnimParam2.refAnimID + '.' + AnimParam2.AnimEventType.toLowerCase();				
		}
		else if(AnimParam2.startType == 'ON_TIME')
		{			
			beginval += AnimParam2.startTime + 's';				
		}
		if(beginval.length > 0)
		{
			attrData = ['begin',beginval];  
			attrArray.push(attrData);		
		}	
	}
	if( (AnimParam1.startType == AnimParam2.startType) && (AnimParam2.startType == 'ON_ANIMEVENT') )
	{
		if(AnimParam1.refAnimID != AnimParam2.refAnimID)
		{
			beginval += AnimParam2.refAnimID + '.' + AnimParam2.AnimEventType.toLowerCase();	 
		}	
		else if(AnimParam1.AnimEventType != AnimParam2.AnimEventType)
		{
			beginval += AnimParam2.refAnimID + '.' + AnimParam2.AnimEventType.toLowerCase();	 
		}
		if(beginval.length > 0)
		{
			attrData = ['begin',beginval];  
			attrArray.push(attrData);		
		}	
	}
	
	 //common 	 	 
	 if(AnimParam2.animType == 'ANIM_ATTRIBUTE')
	 {
		if(AnimParam1.attribute != AnimParam2.attribute)
		{
			attrData = ['attributeName',AnimParam2.attribute];  
		    attrArray.push(attrData); 
		}
	 }
	 if(AnimParam2.animType == 'ANIM_TRANSFORM')
	 {
		if(AnimParam1.attribute != AnimParam2.attribute)
		{
			 attrData = ['attributeName','transform'];  
			 attrArray.push(attrData);  
			 
			 attrData = ['type',AnimParam2.attribute];  
			 attrArray.push(attrData);			 
		}		
	 }
	if(AnimParam2.animType == 'ANIM_MOTION')
	{
		if(AnimParam1.PathObjectOffset != AnimParam2.PathObjectOffset)
		{
			 attrData = ['from',AnimParam2.PathObjectOffset];  
			 attrArray.push(attrData);  
			 attrData = ['to',AnimParam2.originalPosition];  
			 attrArray.push(attrData); 			 
		}
		return attrArray; 
	}
	 var startval = AnimParam2.startValue;	
	 var endval = AnimParam2.endValue;	
	 if(AnimParam2.attribute == 'rotate')
	 {
		 startval = startval + ' ' + AnimParam2.center; 	
		 endval = endval + ' ' + AnimParam2.center; 
	 }		    
	 attrData = ['from',startval];  
	 attrArray.push(attrData); 			    
	 attrData = ['to',endval];  
	 attrArray.push(attrData);
	 return attrArray; 
	
 }
 
 function GX_UpdateAnimObjectAttribute(animID, attrArray)
 {
	 var animNode = document.getElementById(animID); 
	 if(!animNode)
		 return ; 
	 
	 for(var i=0; i < attrArray.length; i++)
	 {
		 if( (attrArray[i][0]=='begin') && (animNode.nodeName.toUpperCase()== 'ANIMATEMOTION')){
			 var invNode = document.getElementById(animID + '_V'); 
			 invNode.setAttribute(attrArray[i][0], attrArray[i][1]); 
			 var index = GX_GetAnimInfoListIndexByID(invNode.id); 
			 gAnimList[index][3] = attrArray[i][1]; 			
			 animNode.setAttribute('begin', animID + '_V.end');
			 var invArray=[]; 
			 invArray[0]= ['begin',attrArray[i][1]]; 
			 GXRDE_updateAnimationObject(invNode.id, invArray); 
			 attrArray[i][1] = animID + '_V.end'; 
			 continue; 
		 }
		 animNode.setAttribute(attrArray[i][0], attrArray[i][1]); 
	 }
	 //var index = GX_GetAnimInfoListIndexByID(animNode.id); 
	// gAnimList[index][3] = attrArray[i][1]; 
	 //GX_UpdateAnimInfoInList(animNode); 
	 var respStr = GXRDE_updateAnimationObject(animID, attrArray); 
 }
 

 function GX_ChangeAnimateMotionSettingsFromcode(animNode)
 {    	 	         
 	    var fromval = animNode.getAttribute("from");
 	    fromval = fromval.split(",");       
 	    var objNode = animNode.parentNode; 
 	    var objType = objNode.classList[1]; 
 	    if(objType == "ELLIPSE")
 	    {
 	  	  objNode.setAttribute("cx", fromval[0]); 
 	      objNode.setAttribute("cy", fromval[1]);   	  
 	    }
 	    else if(objType == "RECTANGLE")
 	    {
 	 	  	  objNode.setAttribute("x", fromval[0]); 
 	 	      objNode.setAttribute("y", fromval[1]);   	  
 	 	 }
 	   else if(objType == "TEXT")
	    {
	 	  	  objNode.setAttribute("x", fromval[0]); 
	 	      objNode.setAttribute("y", fromval[1]);   	  
	 	}
 }    
 
 
 
 function GX_OnAnimationEndHandler(evt)
 {	
	 
	 gCurrAnimNode = evt.target; 	 
	 setTimeout(function(){		
		 gCurrAnimNode.setAttribute('fill', 'remove');
		 GX_RestoreAnimationObject(gCurrAnimNode.id); 
		 GX_RestoreMotionObject(gCurrAnimNode);
		 gbAnimationEnd = true; 
		
		}, 
		gAnimEndTimer); 	
	 
	 
 }
 
 function GX_AnimEndTimerHandler()
 {
	 GX_RestoreMotionObject(gCurrAnimNode); 
	 Debug_Message("Timer Handler Called"); 
 }
 
 
 
 function GX_PreviewAnimation(animID)
 {	 
  	var animnode = document.getElementById(animID);
  	if(!animnode)
  		return ; 	
  	
  	//if animNode is animMotion type 
  	//get the previous Sibling 
  	//set that into animation mode 
  	if('ANIMATEMOTION' == animnode.nodeName.toUpperCase())  		
  	{
  		//ADD AN ATTRIBUTE onend='OnAnimationEndHandler(evt)'
  		 if(gbAnimationEnd == false)
  			 return ; 
  		gbAnimationEnd = false; 
  		animnode.setAttribute('onend', 'GX_OnAnimationEndHandler(evt)'); 
  		GX_ChangeAnimateMotionSettingsFromcode(animnode);  		 
  	}
  //	var animInfo = GX_GetAnimInfoByID(animID); 
  	var restartval =  animnode.getAttribute('restart');
  	animnode.setAttribute('restart', 'whenNotActive');
    animnode.setAttribute('fill', 'remove'); 
    animnode.beginElement();
     //now set it back to the original fill 
     //animnode.setAttribute('fill', animInfo[3]); 
   //  animnode.setAttribute('restart', restartval);
 }

 function GX_RestoreAnimationObject(animID)
 {
 	var animnode = document.getElementById(animID);
  	if(!animnode)
  		return ; 
  	 var name = animnode.nodeName.toUpperCase(); 
  	// if(name == 'ANIMATEMOTION')
    //	 GX_RestoreMotionObject(animnode);
  	 
     animnode.setAttribute('fill', 'remove');     
    // Debug_Message("Restor Animation Object"); 
     
 }

 function GX_RemoveAnimationObject(animID)
 {
	var RefAnimList = GX_GetanimItemWithRefAnimID(gAnimList, animID);
	var attrArray =[]; 
	var attrData = 	['begin', '0s'];	
	attrArray.push(attrData);
	var index= -1; 
	for(var k=0; k <RefAnimList.length; k++){		
		var respStr = GXRDE_updateAnimationObject(RefAnimList[k][0], attrArray); 
		//get the index of refanimID 
		index = GX_GetIndexofAnimInfoFromList(RefAnimList[k][0]); 
		if(index != -1){
			gAnimList[index][3] = attrData[1]; 
		}			
		//change the array entry here only 
		GX_UpdateAnimObjectAttribute(RefAnimList[k][0], attrArray); 
	}
	var tempAnimNode = gCurrAnimNode = document.getElementById(animID); 
	//delete the path as well 
	if(gCurrAnimNode.nodeName.toUpperCase() == 'ANIMATEMOTION'){ 	
		var pathRefNodeID = gCurrAnimNode.children[0].getAttribute('xlink:href');
		pathRefNodeID = pathRefNodeID.substring(1, pathRefNodeID.length); 
		if(pathRefNodeID == gCurrentObjectSelected.id){
			GX_SetSelection(gCurrentObjectSelected, false, false); 
		}
		GX_DeleteObject(pathRefNodeID); 
		GX_RemoveObjectFromList(pathRefNodeID);
		WAL_DeleteTreeItem(gTreeNodeID, 'TM_'+pathRefNodeID); 	
	}
	if(gCurrentObjectSelected){
		GX_SetSelection(gCurrentObjectSelected, false, false); 
	}	
 	GXRDE_DeleteObject(animID); 	
 	var parentNode = tempAnimNode.parentNode; 
 	parentNode.removeChild(tempAnimNode); 	
 	GX_RemoveAnimInfoFromList(animID); 
 	 	
 }
 

 function GX_PathListHandler(Node, value)
 {
	 var pathID = value; 
	 var pathNode = document.getElementById(pathID); 
	 GX_AlignObjectWithPath(gCurrentObjectSelected, pathNode);
	
	if(gbMultiSelection == true)
	{
		GX_DeselectObjectFromMultiMode(); 
		gbMultiSelection = false;			
	}
	 GX_SelectObjectInMultiMode(pathNode); 
	 
	 
	// Debug_Message("Path List handled"); 
 }
 
 function GX_RestoreMotionObject(animNode)
 {
	 var objNode =  animNode.parentNode; 
	 var objType = objNode.classList[1]; 
	 var origValueArr = animNode.getAttribute('to'); 
	 origValueArr = origValueArr.split(',')
	 if(objType == 'ELLIPSE')
	 {
		  objNode.setAttribute("cx", origValueArr[0]); 
	      objNode.setAttribute("cy", origValueArr[1]);  
		 //suspecting chrome is not applying fill=remove properly 
		// objNode.setAttribute("cx", '0'); 
	    // objNode.setAttribute("cy", '0');   
	 }
	 else if(objType == "RECTANGLE")
	 {
	  	  objNode.setAttribute("x", origValueArr[0]); 
	      objNode.setAttribute("y", origValueArr[1]);   	  
	 } 
	 else if(objType == "TEXT")
	 {
	  	  objNode.setAttribute("x", origValueArr[0]); 
	      objNode.setAttribute("y", origValueArr[1]);   	  
	 } 
	
 }
 
 function GX_ResetUI(animParam)
 {	 
	if(gObjectList)
	{
		var objectList=[]; 
		for(var j=0; j <gObjectList.length; j++)
		{
			objectList.push(gObjectList[j][0]); 
		}	
		WAL_UpdateDropDownList('objectlistDDL', objectList);
	}
		 
	    //update the path list 
	var pathList=[]; 
	for(var k=0; k < gObjectList.length; k++)
	{
	    	if(gObjectList[k][1] == 'SVG_PATH_OBJECT')
	    		pathList.push(gObjectList[k][0]); 
	}
	//WAL_UpdateDropDownList('pathlistDDL', pathList);
	    
	var animlist=[]; 	
	for(var i =0; i <gAnimList.length; i++)
	{
	    //if( (animParam.title  !=  gAnimList[i][5]) && (gAnimList[i][5] != 'Invisible Animation') )
	    if(animParam.title  !=  gAnimList[i][5])
	    	animlist.push(gAnimList[i][5]); 
	}
		
	//hide ahow buttons here
 }
 
 function OnBeginMotionAnim(evt)
 {
 	alert('Begin Animation from UIHandler.js'); 
 	var animNode = evt.target; 
 	animNode.endElement(0); 
 	GX_ChangeAnimateMotionSettings(animNode, 'from'); 
 	animNode.beginElement(0); 
 	//alert('End of Begin Animation'); 
// 	animNode	
 }  

 function OnEndMotionAnim(evt)
 {
 	alert('End of Animation from UIHandler.js'); 
 	var node= evt.target;
 	var motionanimNode = node; 
 	motionanimNode.endElement(0); 
 	GX_ChangeAnimateMotionSettings(motionanimNode , 'to');       
  
 }         
 
 function GX_AnimationListHandler(value){
	 
	// Debug_Message('Selected: ' + value);	
	 var arr =  value.split('-'); 
	 gbAnimationEnd = true; 
	 var animTitle = arr[0]; 
	 if(gCurrentObjectSelected)
			GX_SetSelection(gCurrentObjectSelected, false, false); 	
	 	gCurrentAnimInfo = GX_GetAnimInfoByTitle(animTitle); 
		var animNode =  document.getElementById(gCurrentAnimInfo[0]); 
		if(!animNode)
			return ;				
		
		gCurrAnimParam = GX_GetAnimParamFromNode(animNode); 
		GX_SetAnimParamOnUI(gCurrAnimParam); 		
		if(gCurrAnimParam.animType == 'ANIM_MOTION'){			
			var refPathNode = document.getElementById(gCurrAnimParam.refPathID); 
			GX_SetSelection(refPathNode, true, true);
			var objectType = refPathNode.classList[1]; 
	    	GX_ShowObjectPropertyInterface(objectType, true); 
			//var gPathDataArray = GX_ConvertPathDataToArray(refPathNode); 
			//GX_AddPathMarker(refPathNode.id, gPathDataArray, true);			
		}
		//animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
		else if(gCurrentAnimInfo[2] == 'rotate'){
			//var objNode = document.getElementById(gCurrentAnimInfo[3]);
			GX_SetSelection(animNode.targetElement, true, false);
			//objNode
			//GX_UpdateMarkers(gCurrGrabber, true, true); 
		}
		else
			GX_SetSelection(animNode.targetElement, true, false);
		
		
 }
 
 function GX_NewAnimDlgOK(){
	 //add the new animation object and do the needful 	 	
		var animName  =  WAL_getInputValue('newAnimtitleIP');
		var lastAnimID=0;
		if(gAnimList.length > 0)			
		{
			lastAnimID = gAnimList[gAnimList.length-1][0]; 
			if(gAnimList[gAnimList.length-1][5] == 'Invisible Animation')
				lastAnimID = gAnimList[gAnimList.length-2][0]; 
		}			
		var firstchar;		
		if ( (animName == '') || (animName[0] == " ") )
		{
			Debug_Message("Please Assign a Title to the Animation");		
			setTimeout(function(){	
				WAL_setTextInputValue('newAnimtitleIP', '', false);				
				WAL_showModalWindow('newAnimationDlg',"", "" );		
				}, 250); 
			return ; 
		} 	
		var attrtype =  WAL_getDropdownListSelection('newAnimTypeDDL');
		attrtype = gAttrList[attrtype]; 		
		gNewAnimObject = true; 
		var objID = gCurrentObjectSelected.id; 
		gInitAnimParam = new sAnimParams();
		gInitAnimParam.title = animName; 
	    gInitAnimParam.animID = GXRDE_GetUniqueID('ANIM_');  
	    gInitAnimParam.objectID = gCurrentObjectSelected.id; 
	     
	    gInitAnimParam.duration = 2;
	    gInitAnimParam.animType = ''; // animType; 
	    gInitAnimParam.attribute = attrtype;
	    gInitAnimParam.refPathID = '';
	    gInitAnimParam.refPathType='';
	    gInitAnimParam.bPathVisible = false;
	    if(lastAnimID != 0){
	    	gInitAnimParam.startType = 'ON_ANIMEVENT';//ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	 	    gInitAnimParam.refAnimID = lastAnimID;
	    }
	    else{
	    	gInitAnimParam.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	 	    gInitAnimParam.refAnimID = 0;
	 	}	   
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
		var animType = 'ANIM_ATTRIBUTE'; 
		if(attrtype == 'fill-opacity'){
			gInitAnimParam.startValue = '0.5';
		 	gInitAnimParam.endValue = '1';
		}
		else if(attrtype == 'rotate'){
			animType = 'ANIM_TRANSFORM';
			var rectdim = GX_GetRectObjectDim(gCurrentObjectSelected);
			var centreX = rectdim.x + rectdim.width/2; 
			var centreY = rectdim.y + rectdim.height/2;
			gInitAnimParam.center = centreX + ' ' + centreY;	
		    gInitAnimParam.startValue = '0' + ' ' + gInitAnimParam.center ;
		 	gInitAnimParam.endValue = '90'  + ' ' + gInitAnimParam.center ;			 	
		}
		else if(attrtype == 'scale'){
			animType = 'ANIM_TRANSFORM';
			gInitAnimParam.startValue = '0.5';
		 	gInitAnimParam.endValue = '1' ;			 	
		}
		else if( (attrtype == 'skewX') ||(attrtype == 'skewY')) {
			animType = 'ANIM_TRANSFORM';
			gInitAnimParam.startValue = '0';
		 	gInitAnimParam.endValue = '15' ;			 	
		}
		else if(attrtype == 'pathmotion'){
			var animType = 'ANIM_MOTION';
			//add a simple path and obtain the SVGID of that which becomes the mpath reference.
			var currObjNode =  gCurrentObjectSelected; 
			var startX, startY; 	
			var endX, endY; 
			var pathLen = 200; 
			var objectType = gCurrentObjectSelected.classList[1]; 
			if(objectType == 'ELLIPSE'){
				startX = gCurrentObjectSelected.getAttribute('cx'); 
				startY = gCurrentObjectSelected.getAttribute('cy'); 				
			}
			else if(objectType == 'RECTANGLE'){
				Debug_Message('To be done'); 
				return ; 
			}
			var MyRefPathID = GX_AddNewSVGObject('line_path','');
			gInitAnimParam.refPathID=MyRefPathID; 			
			//now selection would have changed to path 
			endX =  new Number(startX) + pathLen; 
			endY =  startY; 
			var dAttrVal = 'M' + startX + ','+ startY + ' L'+endX +',' + endY;			
			GX_SetObjectAttribute(gCurrentObjectSelected, 'd', dAttrVal, true, false); 
			var pos = GX_CalculateMotionAnimPathOffset(gInitAnimParam.objectID, gInitAnimParam.refPathID);
	    	var splitArr = pos.split(';'); 
	    	gInitAnimParam.PathObjectOffset = splitArr[0]; 
	    	gInitAnimParam.originalPosition = splitArr[1]; 
	    	gInitAnimParam.PathStartPoint = GX_GetPathStartPoint(gCurrentObjectSelected); 
	    	GX_ResetAllSelections();
			GX_SetSelection(currObjNode, true, false); 			
			//now add the motionpath anim object 
		}
		else{
			Debug_Message('Other Anim attr not supported'); 
			return ; 
		}
		gInitAnimParam.animType = animType; 	
	     
	    GX_AddAnimationElement(gInitAnimParam, false); 
	    var animNode = document.getElementById(gInitAnimParam.animID);
	    if(gInitAnimParam.animType == 'ANIM_MOTION')
		{
			var retval = GXRDE_openSVGFile(gSVGFilename); 
		    var HTMLstr=""; 		 
		    var currfilename = gSVGFilename; 
		    var currObjID = gInitAnimParam.objectID; 
		    if(retval)
		    {
			     GX_CloseSVGFile();
			   	 var dataNode = document.getElementById('objectcontainer');   	 
			   	 dataNode.innerHTML += retval;		   	
			  	 GX_InitializeDocument(currfilename);		   	
		    }	
		    var xmlstr = GXRDE_GetSVGMetaXML(currfilename);    
		    if(xmlstr)
		       GX_updateTreeWidget(xmlstr);   
		    WAL_expandAllTreeItems(gTreeNodeID, true);
		    WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+currObjID);	  
		    GX_MenuItemShow('animate', 'Animate'); 
		}
	    else{
	    	GX_UpdateAnimInfoInList(animNode);	   
	    }
	    	  
	   
	    gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 	    
	    GX_UpdateAnimationListbox(); 
	    
	 //then add it to the list 
 }
 
 function GX_UpdateAnimationListbox(){
	// gObjectList = GX_PopulateObjectList('ALL_OBJECTS');
	// gAnimList = GX_SortAnimListInDisplayOrder(gAnimList);	
	 var animlist=[]; 
	 for(var i =0; i <gAnimList.length; i++){
		 if(gAnimList[i][5] != 'Invisible Animation'){
			 var attr = gReverseAttrList[gAnimList[i][2]]; 
			 animlist.push(gAnimList[i][5] + '-<b>' + attr + '</<b>'); 
		 }
			 
	 }	 
	 WAL_ListBoxUpdateData('animationlist', animlist);
 }
 
 function GX_AnimListWidgetBtnHdlr(event){
	 var nodeid =  event.target.id; 
	// Debug_Message('BtnID = ' + nodeid); 	
	 switch(nodeid){	 
	 case 'playbtn':
		 if(gCurrentAnimInfo)
			 GX_PreviewAnimation(gCurrentAnimInfo[0]); 		
		 break; 
	 case 'animdeletebtn':		
		 if(gCurrentAnimInfo){
			 if(gCurrentAnimInfo[2] == 'pathmotion'){
				 var animVID = gCurrentAnimInfo[0] + '_V'; 
				 GX_RemoveAnimationObject(animVID);				 
			 }
			 GX_RemoveAnimationObject(gCurrentAnimInfo[0]); 
			 gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 	 
			 GX_UpdateAnimationListbox(); 		    
		 }
		 break;
	 case 'applybtn':
		// gInitAnimParam = gCurrAnimParam; 
		 var tempAnimParam = GX_GetAnimParamsFromUI(gCurrAnimParam); 
		 var attrArray = GX_CompareAndGetAnimParamArray(gCurrAnimParam, tempAnimParam); 		
		//now update the array on server side 
		if( (attrArray) && (attrArray.length >0) )
		{
			var respStr = GX_UpdateAnimObjectAttribute(gCurrAnimParam.animID, attrArray);
			//respStr = GXRDE_updateAnimationObject(gCurrAnimParam.animID, attrArray); 
			
		}	
		gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 	 
		GX_UpdateAnimationListbox();
		 break; 
	default:
		break; 
	 }
 }
 function GX_GetanimItemWithRefAnimID(animList, refAnimID){
		var mylist=[]; 
		for(var j=0;  j <animList.length; j++){
			var animItem = animList[j]; 
			var dotpos =  animItem[3].indexOf('.'); 		
			if(dotpos == -1)
				continue; 
			var animIDRef = animItem[3].substring(0,dotpos); 
			var animEvent = animItem[3].substring(dotpos+1,animItem[3].length); 
			if(animIDRef == refAnimID){
				if(animEvent == 'begin')
					mylist.splice(0, 0,animList[j] ) ; 
				else if(animEvent == 'end')
					mylist.push(animList[j]); 
			}
		}
		if(mylist.length > 0)
			return mylist;
		else
			return 0; 
}
 
 function GX_GetBeginParamWithRefAnim(animInfo){
	 	var animItem = animInfo; 
		var dotpos =  animItem[3].indexOf('.'); 		
		if(dotpos == -1)
			return 0;  
		var animIDRef = animItem[3].substring(0,dotpos); 			
		var animEvent = animItem[3].substring(dotpos+1,animItem[3].length); 
		if( (animEvent == 'begin')|| (animEvent == 'end') ){
			var refAnimInfo = GX_GetAnimInfoByID(animIDRef);			
			if(refAnimInfo)
				return refAnimInfo; 
		}
		//var animEvent = animItem[3].substring(dotpos+1,animItem[3].length); 
		return 0;		
 }
 
 function GX_SortAnimListInDisplayOrder(animList){		
		var sortedList = [];
		var animlistlength = animList.length; 
		var sortArrIndex = -1; 
		//find all entries which are independent in nature 
		for(var k=0; k < animlistlength; k++){
			var animItem = animList[k];
			var dotpos =  animItem[3].indexOf('.'); 		
			if(dotpos == -1){
				sortedList.push(animItem); 
				continue; 
			}			
			var animIDRef = animItem[3].substring(0,dotpos);		
			var animEvent = animItem[3].substring(dotpos+1,animItem[3].length); 
			if(animEvent == 'click'){
				sortedList.push(animItem); 
				continue; 
			}			
		}//for 
		sortArrIndex = -1; 
		while(1){
			sortArrIndex++; 
			if (sortArrIndex >= animlistlength) 
				break; 
			var  refanimID =  sortedList[sortArrIndex][0]; 
			var referredAnimList = GX_GetanimItemWithRefAnimID(animList, refanimID);   
			for(var k=0; k < referredAnimList.length; k++)
			{
				sortedList.splice(sortArrIndex+1+k, 0,  referredAnimList[k]); 
			}			
		}		
		return sortedList; 
}
 
function GX_PathModifyHandler(Node, Value){	
	//get the path array data 	
	
	
}

function GX_ModifyPathType(pathType){
	
	var refPathNode =  gCurrentObjectSelected; 
	var pathArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
	GX_SetSelection(gCurrentObjectSelected, false, false);
	var startPoint = new sPoint(); 
	var endPoint =  new sPoint(); 
	startPoint.x = new Number(pathArray[0][1]);
	startPoint.y = new Number(pathArray[0][2]); 
	
	endPoint.x = new Number(pathArray[pathArray.length-1][1]); 
	endPoint.y = new Number(pathArray[pathArray.length-1][2]); 
	/*gReversePathTypeList['LINE_PATH'] = 'Line'; 
	gReversePathTypeList['CUBIC_BEZIER'] = 'Cubic Bezier'; 
	gReversePathTypeList['QUADRATIC_BEZIER'] = 'Quadratic Bezier'; 
	gReversePathTypeList['ELLIPTIC'] = 'Elliptic'; 
	gReversePathTypeList['POLYGON'] = 'Polygon'; 
	gReversePathTypeList['FREEDRAW_PATH'] = 'Free Draw';
	*/
	
	
	//var pathList = ['Line', 'Cubic Bezier','Quadratic Bezier','Elliptic']; 
	//now depending upon the value generate the intermediate points and the corresponding path data
	switch(pathType){
	
	case  'CUBIC_BEZIER':
		var Point1 =  new sPoint(); 
		var Point2 =  new sPoint(); 
		Point1.x = Math.round((startPoint.x + endPoint.x)/3); 
		Point1.y = Math.round((startPoint.y + endPoint.y)/8); 		
		Point2.x = 2 * Point1.x ;  
		Point2.y = Point1.y; 		
		var pathValues = 'M' + startPoint.x + ',' + startPoint.y + ' C'+ Point1.x + ',' + Point1.y 
		 + ' ' + Point2.x + ',' + Point2.y + ' ' + endPoint.x + ',' + endPoint.y ; 
		var classValue = 'SVG_PATH_OBJECT CUBIC_BEZIER ROTATE,0' ; 
		GX_SetSelection(refPathNode, true, true) ;
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', pathValues, true, false) ; 
		GX_SetObjectAttribute(gCurrentObjectSelected, 'class', classValue, true, false) ; 
		var gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected) ; 
		GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true) ;		
		break;
	case  'LINE_PATH':
		var pathValues = 'M' + startPoint.x + ',' + startPoint.y +  ' L' + endPoint.x + ',' + endPoint.y ; 
		var classValue = 'SVG_PATH_OBJECT LINE_PATH ROTATE,0'; 
		GX_SetSelection(refPathNode, true, true);
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', pathValues, true, false); 
		GX_SetObjectAttribute(gCurrentObjectSelected, 'class', classValue, true, false); 
		var gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true);		
		break; 
	case  'QUADRATIC_BEZIER':
		var Point1 =  new sPoint(); 
		var Point2 =  new sPoint(); 
		Point1.x = Math.round((startPoint.x + endPoint.x)/3); 
		Point1.y = Math.round((startPoint.y + endPoint.y)/8); 		
				
		var pathValues = 'M' + startPoint.x + ',' + startPoint.y + ' Q'+ Point1.x + ',' + Point1.y 
		 + ' ' + endPoint.x + ',' + endPoint.y + ' '; 
		var classValue = 'SVG_PATH_OBJECT QUADRATIC_BEZIER ROTATE,0' ; 
		GX_SetSelection(refPathNode, true, true) ;
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', pathValues, true, false) ; 
		GX_SetObjectAttribute(gCurrentObjectSelected, 'class', classValue, true, false) ; 
		var gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected) ; 
		GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true) ;		
		break;
	case 'ELLIPTIC':
		var Point1 =  new sPoint(); 
		var Point2 =  new sPoint(); 
		Point1.x = Math.round((startPoint.x + endPoint.x)/3); 
		Point1.y = Math.round((startPoint.y + endPoint.y)/8); 		
		Point2.x = 2 * Point1.x ;  
		Point2.y = Point1.y; 		
		var pathValues = 'M' + startPoint.x + ',' + startPoint.y + ' A25,25 0 0 1 ' + endPoint.x + ','+ endPoint.y; 
		var classValue = 'SVG_PATH_OBJECT ELLIPTIC ROTATE,0' ; 
		GX_SetSelection(refPathNode, true, true) ;
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', pathValues, true, false) ; 
		GX_SetObjectAttribute(gCurrentObjectSelected, 'class', classValue, true, false) ; 
		var gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected) ; 
		GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true) ;	
		
		//M-10,-10 A100,120 0 0 1 -5,-5
		break; 
	case 'POLYGON':
		break; 
	default:
		break; 
	}
	GX_SetSelection(gCurrentObjectSelected, false, false);
	refPathNode = document.getElementById(refPathNode.id); 
	GX_SetSelection(refPathNode, true, true) ;
	//update the same to editor as well as to the remote server 
}

function GX_SelectAnimationObject(objNode){
	
}
 