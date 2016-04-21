
var gInputHeight = '20';
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
sAnimParams.prototype.bPathVisible= true; 
sAnimParams.prototype.bRolling = false; 
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
//sAnimParams.prototype.containerRefID = '';
sAnimParams.prototype.containerID = 0; //ID of the container if any '' if no g involved
sAnimParams.prototype.refContainerID = 0;
sAnimParams.prototype.autoReverse = false;
sAnimParams.prototype.pace = 0; //0=uniform, 1=fastToslow 2=slowTofats
sAnimParams.prototype.startPos = 0; 
sAnimParams.prototype.endPos = 0; 
sAnimParams.prototype.values=0; 
sAnimParams.prototype.keytimes=0; 
sAnimParams.prototype.numChildAnims = 0; 

function sAnimParams() {	
	sAnimParams.prototype.animID = 0;
	sAnimParams.prototype.objectID = 0;
	sAnimParams.prototype.objectType = 0;
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
	sAnimParams.prototype.bRolling = false; 
	sAnimParams.prototype.originalPosition=0;
	sAnimParams.prototype.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	sAnimParams.prototype.startTime=0; 
	sAnimParams.prototype.UIEventType = 'M_CLICK'; //M_CLICK, M_MOVE 
	sAnimParams.prototype.UIObjectID = ''; 
	sAnimParams.prototype.AnimEventType='end';//BEGIN, END
	sAnimParams.prototype.refAnimID='' ;
	sAnimParams.prototype.calcMode='linear'; 
	sAnimParams.prototype.restart = 'never';
	sAnimParams.prototype.repeatCount = 0; 
	sAnimParams.prototype.endState = 'freeze'; //FREEZE, REMOVE	
	sAnimParams.prototype.center = '';  //centre of rotation 
	sAnimParams.prototype.title = ''; 
	//sAnimParams.prototype.containerRefID = ''; //incase of group this ID will be different from the actual ID
	sAnimParams.prototype.containerID = 0; //ID of the container if any '' if no g involved
	sAnimParams.prototype.refContainerID = 0;  //ID of the refanimation if any ''
	sAnimParams.prototype.autoReverse = false;
	sAnimParams.prototype.pace = 0; //0=uniform, 1=accelerate 
	sAnimParams.prototype.startPos=0; 
	sAnimParams.prototype.endPos=0; 
	sAnimParams.prototype.values=0; 
	sAnimParams.prototype.keytimes=0; 
	sAnimParams.prototype.numChildAnims = 0; 
}

//will be used in the animinfo table population
sAnimInfo.prototype.id = ""; 
sAnimInfo.prototype.title = "";
sAnimInfo.prototype.type = "";
sAnimInfo.prototype.trigger = "";
sAnimInfo.prototype.refanimID = "";
sAnimInfo.prototype.duration = 0;

function sAnimInfo(){
	sAnimInfo.prototype.id = ""; 
	sAnimInfo.prototype.title = "";
	sAnimInfo.prototype.type = "";
	sAnimInfo.prototype.trigger = "";
	sAnimInfo.prototype.refanimID = "";
	sAnimInfo.prototype.duration = 0;
}
var gAnimInfoTableSource = "";
var gAnimInfoList = []; 
var gTriggerList = 0; 
var gRefAnimListDDL = 0; 
var gRevTriggerList =[]; 
 gRevTriggerList['time']  = 'At 0th Second'; 
 gRevTriggerList['click'] = 'On Click';
 gRevTriggerList['begin'] = 'With';
 gRevTriggerList['end']   = 'After';
var gAnimEndTimer = 400; 
var gbAnimationEnd =  true; 
var gInitAnimParam = 0; 

var gAnimList = 0; //[animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval, refAnimID, refContainerID, duration, duration, beginParams.AnimEvent]; 
var gCurrAttrname;
var gCurrAnimNode = 0; 
var gLastItemDisabled = 0; 
var gCurrAnimParam=0; 
var gbApplied = false; 
var gNewAnimObject =  false; 
var gLastPositionValue = 0; 
var gDefaultRollingDuration = new Number(1); 
var gMarkerPosition = 0; 
//var attrList = ['fill', 'stroke', 'fill-opacity', 'visibility', 'stroke-width','translate', 'rotate', 'skewX','skewY'];
var gMoveIndicatorPath = false; 

//var attrList = ['Fill', 'Stroke', 'Opacity', 'Visibility', 'Stroke-Width', 'Move', 'Rotate', 'Horizontal Skew', 'Vertical Skew'];
var gAttrList=[]; 
gAttrList['Fill-Color'] = 'fill'; 
gAttrList['Stroke-Color'] = 'stroke'; 
gAttrList['Opacity'] = 'opacity'; 
gAttrList['Visibility'] = 'visibility'; 
gAttrList['Stroke-Width'] = 'stroke-width';
gAttrList['Path Aligned Motion'] = 'pathmotion';// 'translate';
gAttrList['Rotate'] = 'rotate';
gAttrList['Horizontal Skew'] = 'skewX';
gAttrList['Vertical Skew'] = 'skewY';
gAttrList['Fly-In'] = 'scale';
gAttrList['Linear Motion'] = 'translate';
gAttrList['Animate Polygon'] = 'ANIMATE_PATH';
gAttrList['Zoom'] = 'ANIMATE_ZOOM'; 




var gReverseAttrList =[]; 
gReverseAttrList['fill']           =  'Fill-Color'     ; 
gReverseAttrList['stroke']         =  'Stroke-Color'   ; 
gReverseAttrList['opacity']   	   =  'Opacity'  ; 
gReverseAttrList['visibility']     =  'Visibility'  ; 
gReverseAttrList['stroke-width']   =  'Stroke-Width' ;
gReverseAttrList['pathmotion']     =  'Path Aligned Motion'   ;
gReverseAttrList['rotate']         =  'Rotate' ;
gReverseAttrList['skewX']          =  'Horizontal Skew';
gReverseAttrList['skewY']          =  'Vertical Skew';     
gReverseAttrList['scale']          =  'Fly-In'; 
gReverseAttrList['translate']      =  'Linear Motion'; 
gReverseAttrList['ANIMATE_PATH']   =  'Animate Polygon'; 
gReverseAttrList['ANIMATE_ZOOM']   =  'Zoom'; 

/*
 *  'Animate Path', -- ONLY FOR pOLY
	'Fly-In', --ALL
	'Linear Motion', --ALL
 	'Path Aligned Motion', --SHAPE
	'Opacity', --ALL
	'Rotate', --ALL
	'Horizontal Skew', ALL
 	'Vertical Skew',-ALL
	'Zoom'; --SHAPE 

 */
gAnimItemDisabledList = []; 
gAnimItemDisabledList['SVG_SHAPE_OBJECT'] = [0];
gAnimItemDisabledList['SVG_PATH_OBJECT'] = [0,3,8];
gAnimItemDisabledList['GROUP'] = [0,3,8];
//NEED TO CHECK FURTEHR FOR TEXT AND IMAGES 
gAnimItemDisabledList['SVG_TEXT_OBJECT'] = [0,3,8];
var gCurrDisabledAnimItemArr = 0; 
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

var gRotAnimTransfValue = 0; 
var gRotAnimObjectNode = 0; 

var gMaxKeytimesInterval = new Number(10); 
var gKeytimesValues ='0;.1;.2;.3;.4;.5;.6;.7;.8;.9;1'; 

sBeginParams.prototype.refAnimID = 0;
sBeginParams.prototype.AnimEvent = 0;
//sBeginParams.prototype.containerID = 0;
sBeginParams.prototype.refContainerID = 0; 

function sBeginParams(){
	sBeginParams.prototype.refAnimID = 0;
	sBeginParams.prototype.AnimEvent = 0;
	//sBeginParams.prototype.containerID = 0;
	sBeginParams.prototype.refContainerID = 0; 
}
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
	if(animParam == undefined){
		Debug_Message('undefined Anim Param'); 
		return ; 
	}
	
	// reset the property UI
	$('.animpropertyRow').hide();
	
	//showin common property first
	$('#commonAnim').show();// = 'table-row'; 
	WAL_setNumberInputValue('repeatcountIP', animParam.repeatCount, false);    
	WAL_SetItemByValueInList('endstatelistDDL', animParam.endState, false);
	
	switch(animParam.attribute)
	{	
	case 'rotate':		   	
    	
		$('.RotateProperty').show(); 
		WAL_setCheckBoxValue('autoRotateReverseCB', animParam.autoReverse );
		WAL_setNumberInputValue('endRotationValueIP', animParam.endValue, false);
		WAL_setNumberInputValue('initRotationValueIP', animParam.startValue, false);
		var objNode = document.getElementById(gCurrentAnimInfo[1]);
		//extract the center coordinates 
		var valArr = animParam.center.split(','); 
		with(Math){
			//then set a grabber to this corodiantes
			var myDim = new sDimension(); 
			myDim.x = new Number(valArr[0]);
			myDim.y = new Number(valArr[1]); 
			myDim.width = new Number(10); 
			myDim.height = new Number(10); 	
			///call the update markers
			//GX_UpdateMarkers(myDim, true, true); 
			gMarkerPosition = new sDimension(); 
			gMarkerPosition.centerX =  myDim.x; 
			gMarkerPosition.centerY =  myDim.y; 
			gMarkerPosition.x = gMarkerPosition.centerX + gMarkerPosition.width/2;
			gMarkerPosition.y = gMarkerPosition.centerY + gMarkerPosition.height/2;
		}
		
		GX_SetPointMarker(myDim, true);
		
		break; 		
	case 'pathmotion':				
		$('.MotionPathProperty').show();		
		WAL_setCheckBoxValue('pathvisibilityCB', animParam.bPathVisible); 
		if( (animParam.objectType == 'ELLIPSE') || (animParam.objectType == 'CIRCLE') )  
			WAL_disableWidget('rollingmotionCB', 'data-jqxCheckBox', false, false);
		else
			WAL_disableWidget('rollingmotionCB', 'data-jqxCheckBox', false, true);		
		WAL_setCheckBoxValue('rollingmotionCB', animParam.bRolling); 		
		WAL_SetItemByValueInList('pathModifyDDL', gReversePathTypeList[animParam.refPathType], false);
		var offset = animParam.PathObjectOffset; 
		var temparr = offset.split(','); 
		offset = new Number(temparr[1]); 
		if(offset)
			offset = Math.round(offset / Math.abs(offset));
		offset += 1;		
		WAL_SetItemByValueInList('offsetParamDDL', gOffsetList[offset], false);		
		break; 
	case 'skewX':
		$('.SkewAnimProperty').show(); 
		WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
		break; 
	case 'skewY':
		$('.SkewAnimProperty').show(); 
		WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
		break; 
	case 'opacity':
		$('.OpacityAnimProperty').show(); 
		WAL_setNumberInputValue('startOpacityValueIP', animParam.startValue, false);	
		break;
	case 'scale':
		$('.ValueProperty').show();
		var value = new Number(animParam.startValue); 		
		value = value*100.0; 
		value -= 100.0; 
		WAL_setNumberInputValue('startValueIP', value, false);	
		break;	
	case 'ANIMATE_ZOOM':
		$('.ValueProperty').show(); 
		var value = animParam.startValue; 			
		WAL_setNumberInputValue('startValueIP', value, false);	
		break;
    case 'translate':
		//get the currentobject selected 		
		//get he center   
    	$('.MoveProperty').show();
    	WAL_setCheckBoxValue('autoReverseCB', animParam.autoReverse );
		var objPos = GX_GetRectObjectDim(gCurrentObjectSelected); 
		if(animParam.pace == 0)
			WAL_SetItemByValueInList('paceValueDDL', 'Uniform', false);
		else
			WAL_SetItemByValueInList('paceValueDDL', 'Accelerate', false);		
		//get the animParam end value 
		//var endValue = animParam.endValue; 
		var endArr = animParam.endValue.split(' ');
		//var indicatorPath = document.getElementById('indicatorpath'); 
		gIndicatorPath = [];         
		var pathvalue = 'M' + objPos.centerX + ',' + objPos.centerY + ' l' + endArr[0] + ',' + endArr[1] + " "; 
		
		//d="M277,53 L490,43 "
		gIndicatorPathNode.setAttribute('d', pathvalue); 
		gIndicatorPathNode.setAttribute('visibility', 'visible');
		
		
		var startArr = animParam.startValue.split(' ');
		with(Math){
			var endX, endY;
			endX = new Number(objPos.centerX); 
			endY = new Number(objPos.centerY); 
			endX += new Number(endArr[0]); 
			endY += new Number(endArr[1]); 
			var markerdim = new sDimension(); 
			markerdim.x = endX; 
			markerdim.y = endY; 
			markerdim.width = 10; 
			markerdim.height = 10; 
		//GX_UpdateMarkers(markerdim, true, true);		
			gMarkerPosition = new sDimension();		
			gMarkerPosition.centerX =  markerdim.x ; //gMarkerPosition.x + markerdim.width/2;
			gMarkerPosition.centerY =  markerdim.y ; //gMarkerPosition.y + markerdim.height/2;
			gMarkerPosition.x = gMarkerPosition.centerX - markerdim.width/2; 
			gMarkerPosition.y = gMarkerPosition.centerY - markerdim.height/2; 
		}
		
		GX_SetPointMarker(markerdim, true);
		
    	gMoveIndicatorPath =  true; 
    	var currentPos = ["M", objPos.centerX, objPos.centerY, 'POINT'];
        gIndicatorPath.push(currentPos);        
        var currentPos = ["L", endX, endY, 'END_POINT'];
        gIndicatorPath.push(currentPos);		
		break; 
	default:
		break; 			
	}
	
}

function GX_CopyAnimParam(srcParam, destParam){
	
	destParam.animID = srcParam.animID; 
	destParam.objectID = srcParam.objectID; 
	destParam.objectType = srcParam.objectType; 
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
	destParam.bRolling =  srcParam.bRolling; 
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
	
	destParam.autoReverse = srcParam.autoReverse;
	destParam.pace = srcParam.pace; //0=uniform, 1=fastToslow 2=slowTofats
	destParam.startPos=srcParam.startPos; 
	destParam.endPos = srcParam.endPos; 	
	destParam.values = srcParam.values;
}

function GX_GetAnimParamsFromUI(inputParam)
{	
	var animParams = new sAnimParams();	
	GX_CopyAnimParam(inputParam, animParams);
	
	//get the grid data first 
	var  gridrowData = WAL_getGridSelectedRowData('jqxAnimgrid');
	if(!gridrowData)
		return ; 
	var itemValue = gridrowData.trigger;
	var refAnimTitle = gridrowData.refanimID;
	if((refAnimTitle) && (refAnimTitle.length > 0) )
		var refAnimInfo = GX_GetAnimInfoByTitle(refAnimTitle);	
	if(itemValue == 'After'){		
		if(refAnimInfo){
			var refID = GX_GetProperReferenceAnim(refAnimInfo[0]); 
			gCurrentAnimInfo[3]= refID + '.end'; 
		}		
		animParams.startType = 'ON_ANIMEVENT'; 
		animParams.AnimEventType = 'end';	
	}
	else if(itemValue == 'With'){		
		if(refAnimInfo){
			var refID = GX_GetProperReferenceAnim(refAnimInfo[0]); 
			gCurrentAnimInfo[3]= refID + '.begin'; 
		}		
		animParams.startType = 'ON_ANIMEVENT'; 
		animParams.AnimEventType = 'begin';		
	}
	else if(itemValue == 'At 0th Second'){	
		gCurrentAnimInfo[3]= '0s'; 
		animParams.startType = 'ON_TIME'; 
		animParams.AnimEventType = '';
		animParams.startTime = 0; 
		animParams.refAnimID = '';
	}
	else if(itemValue == 'On Click'){	
		gCurrentAnimInfo[3]= animParams.UIObjectID + '.click'; //SVG_876.click; 
		animParams.startType = 'ON_CLICK'; 
		animParams.AnimEventType = '';
		animParams.startTime = 0; 
		animParams.UIEventType = 'M_CLICK'; 
		animParams.UIObjectID = animParams.objectID;	
		animParams.refAnimID = '';
	}	
	var beginParam = GX_GetAnimBeginParameters(gCurrentAnimInfo[3]); 
	animParams.refAnimID = beginParam.refAnimID; 
	animParams.refContainerID = beginParam.refContainerID; 
	
	//getting the duration
	animParams.duration = gridrowData.duration; 
	switch(animParams.attribute)
	{	
	case 'rotate':		
		var value =  WAL_getMaskedInputValue('endRotationValueIP'); 
    	animParams.endValue = value;      	
    	value =  WAL_getMaskedInputValue('initRotationValueIP'); 
    	animParams.startValue = value;     	
    	animParams.autoReverse = WAL_getCheckBoxValue('autoRotateReverseCB');    	
    	animParams.center = gMarkerPosition.centerX + ',' + gMarkerPosition.centerY; 
    	//animParams.endValue += ' ' +animParams.center;
    	//animParams.startValue += ' ' +animParams.center;
		break; 		
	case 'translate':
		//var markerNode = document.getElementById('markerPoint'); 
		//var markDim = GX_GetRectObjectDim(markerNode);
    	var endX = new Number(gMarkerPosition.centerX); 
    	var endY = new Number(gMarkerPosition.centerY);
    	var startArr = animParams.center.split(' '); 
    	var startX =new Number(startArr[0]);
    	var startY =new Number(startArr[1]); 
    	animParams.endValue = (endX - startX) + ' ' + (endY - startY);  
    	var prevautoRev = animParams.autoReverse; 
    	animParams.autoReverse = WAL_getCheckBoxValue('autoReverseCB');
    	var value = WAL_getDropdownListSelection('paceValueDDL'); 
    	if(value == 'Uniform')
    		animParams.pace = 0; 
    	else
    		animParams.pace = 1;     	
		break; 
	case 'pathmotion':	     
		animParams.bPathVisible = WAL_getCheckBoxValue('pathvisibilityCB');
		animParams.bRolling = WAL_getCheckBoxValue('rollingmotionCB');
		var refPathID = animParams.refPathID;
		if(refPathID)
		{
			var pathNode =  document.getElementById(refPathID); 
			 if(animParams.bPathVisible == false){			
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
	case 'opacity':
		animParams.startValue = WAL_getMaskedInputValue('startOpacityValueIP');	
		break;
	case 'scale':
		var value = WAL_getMaskedInputValue('startValueIP');
		value =  new Number(value); 
		value += 100.0; 
		value /= 100.0; 
		animParams.startValue = value; 
		break; 
	case 'ANIMATE_ZOOM':
		var value = WAL_getMaskedInputValue('startValueIP');
		animParams.startValue = new Number(value);		
		var objNode = document.getElementById(animParams.objectID); 
		var objDim =  GX_GetRectObjectDim(objNode);
		if(animParams.objectType == 'RECTANGLE'){
			var origVal =  objDim.width; 
			var startVal = Math.round((origVal * animParams.startValue)/100); 
			animParams.values = '' ; 
			animParams.values += startVal + ';' + origVal; 
			
			//now height
			 origVal =  objDim.height; 
			 startVal = Math.round((origVal * animParams.startValue)/100); 
			 animParams.values += '#' + startVal + ';' + origVal ;
			 
			// x attribute
			 var centerArr = animParams.center.split(','); 
			 origVal =  objNode.getAttribute('x');		 
			 startVal = objDim.centerX; 
			 animParams.values += '#' + startVal + ';' + origVal ;			 
			 
			// y attribute
			 var centerArr = animParams.center.split(','); 
			 origVal =  objNode.getAttribute('y');		 
			 startVal =  objDim.centerY; 
			 animParams.values += '#' + startVal + ';' + origVal ;			 
		}
		else if (animParams.objectType == 'ELLIPSE'){
			var origVal =  objDim.width/2; 
			var startVal = Math.round((origVal * animParams.startValue)/100); 
			animParams.values = '' ; 
			animParams.values += startVal + ';' + origVal; 
			
			//now height
			 origVal =  objDim.height/2; 
			 startVal = Math.round((origVal * animParams.startValue)/100); 
			 animParams.values += '#' + startVal + ';' + origVal ;
		}
		else if (animParams.objectType == 'CIRCLE'){
			var origVal =  objDim.width/2; 
			var startVal = Math.round((origVal * animParams.startValue)/100); 
			animParams.values = '' ; 
			animParams.values += startVal + ';' + origVal;		
		}
		
		break; 
	case 'ANIMATE_PATH':
		var objNode = document.getElementById(animParams.objectID); 
		animParams.values = objNode.getAttribute('d'); 
		break; 
	default:
		break; 			
	}
	
	//duration 
	//animParams.duration = WAL_getMaskedInputValue('durationIP');	
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


function GX_InitializeAnimationTab(){
	
 	//create the new animation widget interface here 	 
	
 	//WAL_createModalWindow(gSVGDimensionDlg, '250', '150', 'svgDimOK', 'svgDimCancel', false);
 	WAL_CreateTextInput('newAnimtitleIP', 160, 24, false, '') ; 		
 	//var attrList = ['Opacity', 'Motion along Path', 'Rotate', 'Horizontal Skew', 'Vertical Skew', 'Fly-In', 'Move', 'Animate Path', 'Zoom'];
 	//alphabetical order
 	var attrList = ['Animate Polygon','Fly-In','Linear Motion', 'Path Aligned Motion','Opacity', 'Rotate', 'Horizontal Skew', 'Vertical Skew','Zoom'];
    WAL_createDropdownList('newAnimTypeDDL', 140, gInputHeight, false, attrList, "GX_AnimAttrListHandler", 160, 165);
    WAL_createButton('newAnimPreview', '', '75', '24', true);
    WAL_createModalWindow('newAnimationDlg', '230', '280', 'newAnimOK', 'newAnimCancel', true);
	
    //creatingthe grid 
   /* sAnimInfo.prototype.id = ""; 
	sAnimInfo.prototype.title = "";
	sAnimInfo.prototype.type = "";
	sAnimInfo.prototype.trigger = "";
	sAnimInfo.prototype.refanimID = "";
	sAnimInfo.prototype.duration = 0;
	*/
    gAnimInfoList =  GX_GetAnimInfoList();
    gAnimInfoTableSource =
    {
        datatype: "array",
        datafields: [           
            
            { name: 'title', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'trigger', type: 'string' },
            { name: 'refanimID', type: 'string' },
            { name: 'duration', type: 'string' }
        ], 
        id: 'id',
        localdata : gAnimInfoList
    }
        
    var dataAdapter = new $.jqx.dataAdapter(gAnimInfoTableSource);  
   /* var customcellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
               return '<span style="font-size: 12px; color:blue; float: ' + columnproperties.cellsalign + ';">' + value + '</span>';
           }
           */
    var rowHeight = 20; 
    $("#jqxAnimgrid").jqxGrid(
   		 {
   		 width: '100%',
   		 height : 200, 
   		 theme: gTheme, 
         source: dataAdapter,
         enabletooltips:true,
         sortable: false,
         editable: true,             
         pageable:false,              
         rowsheight : rowHeight, 
         columnsresize: true,
         columns: [
             
		{ text: 'Name', datafield:'title', width:'25%',editable: false},
		{ text: 'Type', datafield:'type', width:'15%',editable: false },
		{ text: 'Starts', datafield:'trigger',width:'15%',editable: true, columntype:'dropdownlist', 
			validation: function (cell, value) {
				 			return true; 	                         
            },                     
                     createeditor: function (row, cellvalue, editor) { 
                    	 gTriggerList = editor[0]; 
                    	 attrList = ['After', 'With', 'On Click', 'At 0th Second'];                      
                    	 editor.jqxDropDownList({ source: attrList, selectedIndex: 1, width: '60', height: rowHeight,
                    		 dropDownHeight: 100, dropDownWidth: 150});
                     }					   				
		},
				
		{text: 'Reference', datafield:'refanimID',width:'25%',columntype:'dropdownlist',  editable: true,
			validation: function (cell, value) {
	 			return true; 	                         
				},                     
         createeditor: function (row, cellvalue, editor) { 
        	 gRefAnimListDDL = editor[0];         	
           // var source =["anim2", "anim3", "anim4"]; 
        	gAnimInfoList = GX_GetAnimInfoList();
        	var animList =[]; 
            for(var j=0; j < gAnimInfoList.length; j++){
        		animList.push(gAnimInfoList[j].title); 
        	}
			editor.jqxDropDownList({ source: animList, selectedIndex: 1, width: '100', height: rowHeight,  dropDownHeight: 100, dropDownWidth: 150}); 
         	}
		},
		
		{ text: 'Duration(s)', datafield: 'duration',width:'20%',columntype:'numberinput',editable:true, 
			validation: function (cell, value) {                      
                      return true;
                  },
                  createeditor: function (row, cellvalue, editor) {
                      editor.jqxNumberInput({ decimalDigits: 1, digits: 3 });
                  }				
		}
		
      ],     
	});  	
    $("#jqxAnimgrid").on("cellclick", function (event){       	
    	if(gRefAnimListDDL){
    		if(gLastItemDisabled)
    			WAL_enableDropDownListItemByValue(gRefAnimListDDL.id, gLastItemDisabled);
    		gLastItemDisabled = event.args.row.bounddata.title; 
    		WAL_disableDropDownListItemByValue(gRefAnimListDDL.id, gLastItemDisabled); 
    	}    		
    });     
    
    $("#jqxAnimgrid").on('rowselect', function (event){
    	var animName = event.args.row.title;
    	GX_UpdateAnimInfoOnUI(animName); 
    }); 
    
    //other controls
    var pathList = ['Line', 'Cubic Bezier','Quadratic Bezier','Elliptic', 'Polygon']; 
    WAL_createDropdownList("pathModifyDDL", '100', gInputHeight, false, pathList, "GX_PathModifyHandler", '140', '140');
    WAL_createCheckBox('pathvisibilityCB', 'GX_AnimDlgCBHdlr', gInputHeight, gInputHeight, '14', false, true);
    WAL_createCheckBox('rollingmotionCB', 'GX_AnimDlgCBHdlr', gInputHeight, gInputHeight, '14', false, true);             
   // WAL_createNumberInput("offsetFromPathY", '60', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
  //  WAL_setNumberInputValue('offsetFromPathY', 0, false);      
    WAL_createDropdownList('offsetParamDDL', '100', gInputHeight, false, gOffsetList, "", '100', 0);
    
    WAL_createNumberInput("repeatcountIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, 0, 1);
    var endstatelist = ['freeze', 'remove']; 
    WAL_createDropdownList('endstatelistDDL', '80', gInputHeight, false, endstatelist, "GX_AnimAttrListHandler", '50', '80');
    
    WAL_createCheckBox('autoReverseCB', 'GX_AnimDlgCBHdlr', gInputHeight, gInputHeight, '14', false, true);
    var paceList = ['Uniform', 'Accelerate']; 
    WAL_createDropdownList("paceValueDDL", '100', gInputHeight, false, paceList, "GX_PathModifyHandler", '50','100');
    
    WAL_createNumberInput("initRotationValueIP", '54px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, -360, 1);
    WAL_setNumberInputValue('initRotationValueIP', 0, false);
    WAL_createNumberInput("endRotationValueIP", '54px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, -360, 1);
    WAL_setNumberInputValue('endRotationValueIP', 90, false);
    
    WAL_createNumberInput("startValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, -100, 1);
    WAL_createNumberInput("endValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, -100, 1);
    WAL_createCheckBox('autoRotateReverseCB', 'GX_AnimDlgCBHdlr', gInputHeight, gInputHeight, '14', false, true);
    
    WAL_createDecimalNumberInput("startOpacityValueIP", '80px', gInputHeight, "",true, 1.0,0.0,0.1);
    WAL_setNumberInputValue('startOpacityValueIP', 1.0, false); 
    
    WAL_createNumberInput("endAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, -360, 1);
    WAL_setNumberInputValue('endAngleValueIP', 0, false);  
}
 function GX_CreateAnimationWidget(wdgtID)
 {
	 			/*var attrList = ['Opacity', 'Motion along Path', 'Rotate', 'Horizontal Skew', 'Vertical Skew', 'Fly-In', 'Move', 'Animate Path', 'Zoom'];
	 	//create the new animation widget interface here 	 
	 			WAL_createModelessWindow('newAnimationDlg', '220', '150', 'newAnimOK', 'newAnimCancel');
	 			WAL_CreateTextInput('newAnimtitleIP', 160, 24, false, '') ; 			
                WAL_createDropdownList('newAnimTypeDDL', 140, gInputHeight, false, attrList, "GX_AnimAttrListHandler", 100);
                */
	 
	 				 	//creating new animationlist interface	 
	 			//WAL_createModelessWindow('animationListWidget', '380', '470', 'animOK', 'animCancel');
	 			WAL_createListBox('animationlist', '325', '275', "GX_AnimationListHandler");
	 			 
                            
              
                WAL_createDecimalNumberInput("durationIP", '100px', gInputHeight, "GX_AnimDlgEditHdlr",true, 10.0,0.0,0.1);
                WAL_setNumberInputValue('durationIP', 2, false); 
                //var attrList = ['Fill-Color', 'Stroke-Color', 'Opacity', 'Visibility', 'Stroke-Width', 'Move', 'Rotate', 'Hor. Skew', 'Vert. Skew'];                
                              
                var pathList = ['Line', 'Cubic Bezier','Quadratic Bezier','Elliptic']; 
                WAL_createDropdownList("pathModifyDDL", '140', gInputHeight, false, pathList, "GX_PathModifyHandler", '100');
                
                
                WAL_createDropdownList('animlistDDL', '130', gInputHeight, false, animlist, "GX_AnimAttrListHandler", '100');
                
                               
                WAL_createNumberInput("startStrokeWidthValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 15, 1, 1);
                WAL_setNumberInputValue('startOpacityValueIP', 1, false); 
                //WAL_createNumberInput("endAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, 0, 1);
                
                
               
                
              //  WAL_createButton('playbtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
              //  WAL_createButton('animdeletebtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
              //  WAL_createButton('applybtn', 'GX_AnimListWidgetBtnHdlr(event)', '58','24', true);
                
                      
              //  WAL_createRadioButton('motionvalbtn', 'GX_AnimDlgRadioValueChangeHdlr', '130', '20', false, false);
                var pathList = ['SVG_001', 'SVG_103', 'SVG_234'];                           
              //  WAL_createCheckBox('pathvisibilityCB', 'GX_AnimDlgCBHdlr', '30', '24', '14', false, true);
               // WAL_createCheckBox('rollingmotionCB', 'GX_AnimDlgCBHdlr', '30', '24', '14', false, true);
                
               // WAL_setradioButtonCheck('motionvalbtn', true);
              //  WAL_setradioButtonCheck('attrvalbtn', true); 
               // WAL_createNumberInput("offsetFromPathX", '60px', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
              //  WAL_setNumberInputValue('offsetFromPathX', 0, false); 
             //   WAL_createNumberInput("offsetFromPathY", '60', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
             //   WAL_setNumberInputValue('offsetFromPathY', 0, false);            
                 
               // WAL_createDropdownList('offsetParamDDL', '100', gInputHeight, false, gOffsetList, "", '100');
				
                
                //rotation UI 
                //WAL_createCheckBox('autoRotateReverseCB', 'GX_AnimDlgCBHdlr', '30', '24', '14', false, true);
                          
                
                
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
 
 /*
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
 */
 
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


function GX_GetAnimItemWithRefAnimID(animList, refAnimID){
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
		if((nodename == 'ANIMATE')||(nodename == 'ANIMATETRANSFORM') )
		{
			if(nodename == 'ANIMATE')
			{
				var attr = animNode.getAttribute('attributeName'); 	 	 				
			}
			else if(nodename == 'ANIMATETRANSFORM')
			{
				attr = animNode.getAttribute('type');  	 	 				
			}
			/*
			else if(nodename == 'ANIMATEMOTION')
			{
				attr = 'pathmotion';  	 	 				
			}
			*/
			//
			var beginval = GX_GetBeginValue(animNode); 
			var beginParam = GX_GetAnimBeginParameters(beginval);			
						
			//if there is a reference node then check if the reference node is a group animation type of node 
			//in which case add the group id as the reference ID. 
			var endval = animNode.getAttribute('fill');			
			var titleval = GX_GetAnimTitle(animNode); 
			var duration = animNode.getAttribute('dur');
			duration = duration.substring(0,duration.length-1); 
			var animInfo = [animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval, beginParam.refAnimID,
			                beginParam.refContainerID, duration,beginParam.AnimEvent];
			animNode.setAttribute('begin', ''); 			
			animNode.setAttribute('fill', 'remove'); 	
			animNode.setAttribute('onend', 'GX_OnAnimationEndHandler(evt)'); 			
			//_rm first remove the existing entry and then add
			GX_RemoveAnimInfoFromList(animNode.id); 
			gAnimList.push(animInfo); 	
						
		}
		else if (nodename == 'G'){
			var animType = animNode.classList[1]; 
			if(animType == 'PATH_MOTION'){
				var visibleAnimNode = animNode.childNodes[0]; 
				var motionAnimNode = animNode.childNodes[1]; 
				attr = 'pathmotion';  
				var beginval = GX_GetBeginValue(visibleAnimNode); 				
				//var beginval = visibleAnimNode.getAttribute('begin');
				var beginParams  = GX_GetAnimBeginParameters(beginval);				
				var endval = motionAnimNode.getAttribute('fill');			
				var titleval = animNode.classList[2]; 
				var duration = motionAnimNode.getAttribute('dur');
				duration = duration.substring(0,duration.length-1);
				var animInfo = [animNode.id, motionAnimNode.targetElement.id, attr, beginval, endval, titleval, beginParams.refAnimID, 
				                beginParams.refContainerID, duration,beginParams.AnimEvent];
				//visibleAnimNode.setAttribute('begin', '');
				motionAnimNode.setAttribute('begin', '');
				
				motionAnimNode.setAttribute('fill', 'remove'); 	
				GX_RemoveAnimInfoFromList(animNode.id); 
				gAnimList.push(animInfo);
			}
			else if(animType == 'ANIMATE_PATH'){				
				var nodelist = animNode.childNodes; 
				var numAnim = nodelist.length; 
				var animNode1 = animNode.childNodes[0];
				//var beginval = animNode1.getAttribute('begin'); 
				var beginval = GX_GetBeginValue(animNode1);
				animNode1.setAttribute('begin', ''); 
				var beginParams  = GX_GetAnimBeginParameters(beginval);
				var endval = 'freeze';
				var duration = animNode1.getAttribute('dur');
				duration = duration.substring(0,duration.length-1);
				with (Math){
					duration = round(duration * nodelist.length); 
				}				
				var titleval = animNode.classList[2]; 
				var animInfo = [animNode.id, animNode1.targetElement.id, 'ANIMATE_PATH', beginval, endval, titleval, beginParams.refAnimID,
				                beginParams.refContainerID, duration, beginParams.AnimEvent];
				GX_RemoveAnimInfoFromList(animNode.id); 
				gAnimList.push(animInfo);
			}
			else if(animType == 'ANIMATE_ZOOM'){				
				var nodelist = animNode.childNodes; 
				var numAnim = nodelist.length; 
				var animNode1 = animNode.childNodes[0];
				//var beginval = animNode1.getAttribute('begin');
				var beginval = GX_GetBeginValue(animNode1);
				animNode1.setAttribute('begin', ''); 
				var beginParams  = GX_GetAnimBeginParameters(beginval);
				var endval = 'freeze';				
				var titleval = animNode.classList[2]; 
				var duration = animNode1.getAttribute('dur');
				duration = duration.substring(0,duration.length-1);				
				var animInfo = [animNode.id, animNode1.targetElement.id, 'ANIMATE_ZOOM', beginval, endval, titleval, 
				                beginParams.refAnimID, beginParams.refContainerID, duration, beginParams.AnimEvent];
				GX_RemoveAnimInfoFromList(animNode.id); 
				gAnimList.push(animInfo);
			}		
		}
		
}



function GX_GetProperReferenceAnim(nodeID){
	
	var refAnimID = 0; 
	var animNode = document.getElementById(nodeID); 
	if(animNode.nodeName == 'g'){
		var animType = animNode.classList[1]; 
		if(animType == 'PATH_MOTION'){
			var refNode = animNode.childNodes[1]; 
			refAnimID = refNode.id; 
		}
		else if( (animType == 'ANIMATE_ZOOM') || (animType == 'ANIMATE_PATH') ){
			var refNode = animNode.childNodes[animNode.childNodes.length-1]; 
			refAnimID = refNode.id; 
		}
	}
	else
		refAnimID = nodeID;	
	return refAnimID; 
	
	
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
		 
		 if(itemval == 'opacity')
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
		
		 if( (itemval == 'skewX')||(itemval == 'skewY') )
		 {			 
			 JQSel = '#ANGLE_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';//.show();			
			WAL_setNumberInputValue('endAngleValueIP', 30, false);	
		 }
		 if(itemval == 'rotate'){
			 JQSel = '#ROTATE_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';//.show();
		 }
		 if( (itemval == 'scale')|| (itemval == 'ANIMATE_ZOOM') ){
			 JQSel = '#FROM_UI_GROUP';
			 $(JQSel)[0].style.display='inline-block';		
			WAL_setNumberInputValue('startValueIP', 30, false);	
		 }
		 
		 if(itemval == 'translate'){
			 JQSel = '#MOVE_GROUP';
			 $(JQSel)[0].style.display='inline-block';		
			//WAL_setNumberInputValue('startValueIP', 30, false);	
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
		 if(itemval == 'opacity'){
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
			if(gCurrAnimParam.animType == 'ANIM_MOTION'){
				GX_ReloadSVG(gCurrAnimParam.objectID, true);		   
				setTimeout(function(){			
					WAL_SetTabIndex('rightTabs', 2);					
					}, 500);
				
			}
			
		}		
		if(gNewAnimObject == true)
			gNewAnimObject = false; 
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
	 var titleIndex; 
	 
	 var containerGroupID = 'ANIMATION_GROUP';  
	 if(animParams.animType != 'ANIMATE_PATH'){
		 attrData = ['title',animParams.title];  
		 attrArray.push(attrData);
	 }
	 else{
		 attrData = ['title','none'];  
		 attrArray.push(attrData);
	 }
	 titleIndex = attrArray.length-1; 
	 
	 attrData = ['dur',animParams.duration+'s']; 
	 attrArray.push(attrData);
	 
	 attrData = ['calcMode',animParams.calcMode];  
	 attrArray.push(attrData); 
	    
	 attrData = ['restart',animParams.restart];  
	 attrArray.push(attrData);
	    
	 attrData = ['repeatCount',animParams.repeatCount];  
	 attrArray.push(attrData);
	 
	 attrData = ['xmlns:xlink',"http://www.w3.org/1999/xlink"]; 
	 attrArray.push(attrData); 
	 attrData = ['xlink:href',"#"+animParams.objectID]; 
	 attrArray.push(attrData);
	 
//	 attrData = ['siblingID',animParams.siblingID];  
//	 attrArray.push(attrData);
	    
	 var beginval = ''; 
	 if(animParams.startType == 'ON_TIME')
	 {
	    beginval +=  animParams.startTime + 's'; 
	 }
	 else if(animParams.startType == 'ON_CLICK')
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
	 var beginIndex = attrArray.length-1; 
	 
	if(animParams.animType == 'ANIM_MOTION')
	{
		//INDUCE A VISIBLE ANIMATION BEFORE 
		//GX_AddNewAnimElementInDOM(newAnimID, 'ANIMATION_GROUP','ANIM_ATTRIBUTE', newAttr, bUpdateUI);
		var classvalue = 'PATH_MOTION ' + animParams.title ; 
		var retval = GXRDE_addNewSVGGroupObject(animParams.animID, containerGroupID, 'ANIM_GROUP', classvalue, 0); 
		groupCallback = function(respStr){
			//do nothing 
		}
		containerGroupID = animParams.animID ; 
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
		
		attrData = ['xmlns:xlink',"http://www.w3.org/1999/xlink"]; 
		newAttr.push(attrData); 
		attrData = ['xlink:href',"#"+animParams.objectID]; 
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
		
		var animstr = GXRDE_addNewAnimationObject(newAnimID, containerGroupID, 'ANIM_ATTRIBUTE', newAttr);
		//GX_AddNewAnimElementInDOM(newAnimID, containerGroupID,'ANIM_ATTRIBUTE', newAttr, bUpdateUI); 
		
		animParams.animID = animParams.animID + '_ANIM_MOTION'; 
		attrData = ['refpathid',animParams.refPathID];  
		attrArray.push(attrData);	 
		attrData = ['rotate','auto'];  
		attrArray.push(attrData);			
		attrData = ['from',animParams.PathObjectOffset];  
		attrArray.push(attrData);	
		attrData = ['to',animParams.originalPosition];  
		attrArray.push(attrData);		
		attrData = ['begin', newAnimID + '.end'];  
		attrArray.push(attrData);		
		animParams.visibleAnimID = newAnimID;		
		var animstr = GXRDE_addNewAnimationObject(animParams.animID, containerGroupID, 'ANIM_MOTION', attrArray);
		
		//now adding rolling motion 
		attrArray = []; 
		animParams.animID = containerGroupID + '_ROLLING_MOTION'; 
		attrData = ['xmlns:xlink', 'http://www.w3.org/1999/xlink'];  
		attrArray.push(attrData);
		attrData = ['attributeType','XML'];  		
		attrArray.push(attrData);
		attrData = ['attributeName','transform'];  
	    attrArray.push(attrData); 
	    attrData = ['type','rotate'];  
	    attrArray.push(attrData);	    
	    attrData = ['xlink:href','#'+animParams.objectID];  
	    attrArray.push(attrData);
	    attrData = ['dur','1s'];  
	    attrArray.push(attrData);		 
		attrData = ['calcMode','linear'];  
		attrArray.push(attrData);		    
	    attrData = ['restart','never'];  
	    attrArray.push(attrData);		    
		attrData = ['repeatCount',2];  		
		attrArray.push(attrData);
		//attrData = ['fill','remove'];  	
		attrData = ['fill','freeze'];  	
		attrArray.push(attrData);
		//attrData = ['begin',containerGroupID + '_ANIM_MOTION.begin'];  	
		attrData = ['begin',''];  	
		attrArray.push(attrData);				
		attrData = ['from','0 0 0'];  
		attrArray.push(attrData);	
		attrData = ['to','360 0 0'];  
		attrArray.push(attrData);		
		attrData = ['additive', 'sum'];  
		attrArray.push(attrData);					
		var animstr = GXRDE_addNewAnimationObject(animParams.animID, containerGroupID, 'ANIM_TRANSFORM', attrArray);
		
		return ; 
	}
	else if (animParams.animType == 'ANIMATE_PATH'){
		//var dvalue = animParams.values; 
		var valueArr = animParams.values.split(' ');
		var valstr =''; 
		for(var j= 0; j < valueArr.length; j++){
			if(j < valueArr.length-1 )
				valstr += valueArr[j] + '#'; 
			else
				valstr += valueArr[j]; 
		}
		var classvalue = 'ANIMATE_PATH ' + animParams.title + ' ' + valstr; 
		var retval = GXRDE_addNewSVGGroupObject(animParams.animID, containerGroupID, 'ANIM_GROUP', classvalue, 0); 
		containerGroupID = animParams.animID ;
		var newAttr = []; 	
		    
	    attrData = ['restart',animParams.restart];  
		newAttr.push(attrData);		    
		attrData = ['repeatCount',0];  		
		newAttr.push(attrData);				
		attrData = ['fill','remove'];  
		newAttr.push(attrData);
		
		attrData = ['attributeType',"XML"];  
		newAttr.push(attrData); 
		attrData = ['xmlns:xlink', 'http://www.w3.org/1999/xlink'];  
		newAttr.push(attrData);
		attrData = ['xlink:href','#'+animParams.objectID];  
		newAttr.push(attrData);
		attrData = ['attributeName',"d"];  
		newAttr.push(attrData);
		var dvalArr = GX_GetPathValuesForAnimation(animParams.values); 
		animParams.numChildAnims = dvalArr.length; 
		var subduration  = 	animParams.duration/animParams.numChildAnims;
		subduration = '' + subduration + ''; 
		var decimalIndex = subduration.indexOf('.'); 
		subduration =  subduration.substring(0,decimalIndex+2);		
		attrData = ['dur',subduration+'s'];  
		newAttr.push(attrData);
		var animID = ''; 
		
		var arrLen = newAttr.length; 
		var IDList = []; 
		var objspecAttrList =[]; 
		var rowentry = ''; 
		for(var j=0; j < animParams.numChildAnims; j++ ){			
			animID = animParams.animID + '_' + j; 
			IDList.push(animID); 
			rowentry = 'values=' + dvalArr[j]; 
			//objspecAttrList.push('values=' + dvalArr[j]);
			if( j==0)
				rowentry += '#'+ 'begin=' + beginval; 
				//				objspecAttrList.push('begin=0s');	
			else {
				var prevAnimID = IDList[j-1];
				rowentry += '#' + 'begin=' + prevAnimID + '.end' ; 
				if(j == animParams.numChildAnims-1){
					rowentry += '#' + 'onend=' + 'GX_OnAnimationEndHandler(evt)'; 
				}
				//objspecAttrList.push('begin=' + prevAnimID + '.end' );	
			}
			objspecAttrList.push(rowentry); 
		}				
		GXRDE_addMultipleAnimObjects(containerGroupID, 'ANIMATE_PATH', newAttr, IDList, objspecAttrList); 
		return ; 
	}
	else if(animParams.animType == 'ANIM_MOVE'){
		var classvalue = 'ANIM_MOVE ' + animParams.title + '  0;0' ; 
		var retval = GXRDE_addNewSVGGroupObject(animParams.animID, containerGroupID, 'ANIM_GROUP', classvalue,0); 
		containerGroupID = animParams.animID ; 
		var myarrS = animParams.startPos.split(','); 
	    var myarrE = animParams.endPos.split(',');
	    var attributenameIndex, fromIndex, toIndex; 
		if(animParams.objectType == 'RECTANGLE'){			
			attrData = ['attributeName','x'];  
		    attrArray.push(attrData);	
		    attributenameIndex = attrArray.length -1; 
		   }
			attrData = ['from', myarrS[0]];  			
			attrArray.push(attrData);		
			fromIndex = attrArray.length -1; 
			
			attrData = ['to', myarrE[0]];  			
			attrArray.push(attrData);
			toIndex = attrArray.length-1; 
			
			attrData = ['title', 'MoveX']; 
			attrArray[titleIndex] = attrData; 
			var animstr = GXRDE_addNewAnimationObject(animParams.animID + '_MOVE_X', containerGroupID, 'ANIM_ATTRIBUTE', attrArray);
			
			if(animParams.objectType == 'RECTANGLE'){			
				attrData = ['attributeName','y'];  
			    attrArray[attributenameIndex] = attrData;		    
			   }
			attrData = ['from', myarrS[1]];  			
			attrArray[fromIndex] = attrData;			
			attrData = ['to', myarrE[1]];  			
			attrArray[toIndex] = attrData;		
			attrData = ['title', 'MoveY']; 
			attrArray[titleIndex] = attrData; 
			attrData = ['begin', animParams.animID + '_MOVE_X.begin']; 
			attrArray[beginIndex] = attrData; 
			var animstr = GXRDE_addNewAnimationObject(animParams.animID + '_MOVE_Y', containerGroupID, 'ANIM_ATTRIBUTE', attrArray);
			return; 
	}
	else if (animParams.animType == 'ANIMATE_ZOOM'){
		//var dvalue = animParams.values; 
		
		var classvalue = 'ANIMATE_ZOOM ' + animParams.title;		
		var retval = GXRDE_addNewSVGGroupObject(animParams.animID, containerGroupID, 'ANIM_GROUP', classvalue,0); 
		containerGroupID = animParams.animID ;
		var newAttr = []; 	
		    
	    attrData = ['restart',animParams.restart];  
		newAttr.push(attrData);		    
		attrData = ['repeatCount',0];  		
		newAttr.push(attrData);				
		attrData = ['fill',animParams.endState];  
		newAttr.push(attrData);
		
		attrData = ['attributeType',"XML"];  
		newAttr.push(attrData); 
		attrData = ['xmlns:xlink', 'http://www.w3.org/1999/xlink'];  
		newAttr.push(attrData);
		attrData = ['xlink:href','#'+animParams.objectID];  
		newAttr.push(attrData);		
		
		var subduration  = 	animParams.duration/animParams.numChildAnims;
		subduration = '' + subduration + ''; 
		var decimalIndex = subduration.indexOf('.'); 
		subduration =  subduration.substring(0,decimalIndex+2);		
		attrData = ['dur',subduration+'s'];  
		newAttr.push(attrData);
		
		var animID = ''; 
		
		var arrLen = newAttr.length; 
		var IDList = []; 
		var objspecAttrList =[]; 
		var rowentry = ''; 
		var objspecAttrList = []; 
		
		for(var j=0; j < animParams.numChildAnims; j++ ){			
			animID = animParams.animID + '_' + j; 
			IDList.push(animID);			
		}	
		var objNode = document.getElementById(animParams.objectID); 
		if(animParams.objectType == 'RECTANGLE'){
			var origVal =  objNode.getAttribute('width'); 
			var startVal = Math.round((origVal * animParams.startValue)/100 ); 
			var valuestr = 'attributeName=width' ; 
			valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + beginval; 
			objspecAttrList.push(valuestr);
			
			//now height
			 origVal =  objNode.getAttribute('height'); 
			 startVal = Math.round((origVal * animParams.startValue)/100 ); 
			 valuestr = 'attributeName=height' ; 
			 valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + IDList[0] + '.begin' ;
			 objspecAttrList.push(valuestr);
			
			// x attribute
			 var centerArr = animParams.center.split(','); 
			 origVal =  objNode.getAttribute('x');		 
			 startVal = centerArr[0]; 
			 valuestr = 'attributeName=x' ; 
			 valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + IDList[0] + '.begin';
			 objspecAttrList.push(valuestr);
			 
			// y attribute
			 var centerArr = animParams.center.split(','); 
			 origVal =  objNode.getAttribute('y');		 
			 startVal = centerArr[1]; 
			 valuestr = 'attributeName=y' ; 
			 valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + IDList[0] + '.begin';
			 objspecAttrList.push(valuestr);
		}//if(animParams.objectType == 'RECTANGLE')		
		else if(animParams.objectType == 'ELLIPSE'){
			var origVal =  objNode.getAttribute('rx'); 
			var startVal = Math.round((origVal * animParams.startValue)/100 ); 
			var valuestr = 'attributeName=rx' ; 
			valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + beginval; 
			objspecAttrList.push(valuestr);
			
			//now height
			 origVal =  objNode.getAttribute('ry'); 
			 startVal = Math.round((origVal * animParams.startValue)/100 ); 
			 valuestr = 'attributeName=ry' ; 
			 valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + IDList[0] + '.begin' ;
			 objspecAttrList.push(valuestr);		
		}//if(animParams.objectType == 'RECTANGLE')	
		else if(animParams.objectType == 'CIRCLE'){
			var origVal =  objNode.getAttribute('r'); 
			var startVal = Math.round((origVal * animParams.startValue)/100 ); 
			var valuestr = 'attributeName=r' ; 
			valuestr += '#' + 'values=' +  startVal + ';' + origVal + '#' + 'begin=' + beginval; 
			objspecAttrList.push(valuestr);				
		}//if(animParams.objectType == 'RECTANGLE')		
							
		GXRDE_addMultipleAnimObjects(containerGroupID, 'ANIMATE_ZOOM', newAttr, IDList, objspecAttrList); 
		return ; 
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
			 if((animParams.attribute == 'rotate') || (animParams.attribute == 'translate')){
				 attrData = ['values',startval + ';' + endval];  
				 attrArray.push(attrData);
				 
				 attrData = ['keyTimes','0;1'];  
				 attrArray.push(attrData);
			 }
			 else if( (animParams.attribute == 'scale') || (animParams.attribute == 'skewX')
					 || (animParams.attribute == 'skewY') ){
				 attrData = ['from',animParams.startValue];  
				 attrArray.push(attrData); 
				    
				 attrData = ['to',animParams.endValue];  
				 attrArray.push(attrData);
			 }
		 }
	}	 		 
	//delete the existing node first 
	GX_AddNewAnimElementInDOM(animParams.animID, containerGroupID,animParams.animType, attrArray, bUpdateUI); 
 }
 
 
 
 function GX_CalculateMotionAnimPathOffset(objectID, pathID)
 {	 
	var objNode =  document.getElementById(objectID); 
	var pathNode  = document.getElementById(pathID);
		//get the path dim . 
	var objDim =  GX_GetRectObjectDim(objNode); 
	var origPos =  new sPoint();	
	var objType = objNode.classList[1]; 
	if( (objType == "ELLIPSE") || (objType == "CIRCLE") )
	{
		origPos.x = objDim.centerX;
		origPos.y = objDim.centerY;
	}
	else if(objType == "RECTANGLE")
	{
		////origPos.x = objDim.centerX;
		////origPos.y = objDim.centerY;
		origPos.x = objDim.x;
		origPos.y = objDim.y;
	} 
	else if(objType == "TEXT")
	{
		origPos.x = objDim.centerX;
		origPos.y = objDim.centerY;
	} 	
	//temporary taken to be 0 offset but later on offset input will be takne in new GUI
	var X = 0;//WAL_getMaskedInputValue('offsetFromPathX'); 
	var Y = 0;//WAL_getMaskedInputValue('offsetFromPathY'); 
	var offsetStr = WAL_getDropdownListSelection('offsetParamDDL');
	var normalizedVal = new Number(gReverseOffsetList[offsetStr]); 
	if( (objType == 'ELLIPSE') || (objType == "CIRCLE"))
		normalizedVal -= 1;
	else if(objType == 'RECTANGLE')
		normalizedVal -= 2;
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
 function GX_AddNewAnimElementInDOM(animID, parentID, animType, attrArray, bUIUpdate)
 {
	 
	 var animstr = GXRDE_addNewAnimationObject(animID, parentID, animType, attrArray); 
	
	 var animNode = document.getElementById(animID); 
	 if(animNode)
	 {
		 var parentNode = animNode.parentNode; 
		 parentNode.removeChild(animNode); 
	 }	
 	GX_AddNewNodeFromXMLString(parentID, animstr);	 
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
 }
 
 function GX_AnimColorWidgetOK(event)
 {
	 
	 
 }
 
 function GX_GetAnimParamFromNode(curranimNode)
 {			
		var animNode =  curranimNode; 
		var animID = animNode.id; 
		var animParam = new sAnimParams() ;	
		var numAnim = 0; 
		animParam.animID = animNode.id;  	
		//get all the animation parameters
		//populate the data structure 
		if(animNode.nodeName == 'g'){
			animParam.title = animNode.classList[2];
			var animType = animNode.classList[1]; 			
			if(animType == 'PATH_MOTION'){				
				var rollingNode = animNode.childNodes[2]; 
				var beginval = rollingNode.getAttribute('begin'); 
				if(beginval === '')
					animParam.bRolling  = false; 
				else
					animParam.bRolling  = true;
				
				animNode = animNode.childNodes[1]; 
				//animParam.title = GX_GetAnimTitle(animNode);
			}
			else if(animType == 'ANIMATE_PATH'){
				//get the 'd' values 
				animParam.animType = 'ANIMATE_PATH'; 
				animParam.attribute = 'ANIMATE_PATH'; 
				var tempArr = animNode.classList[3].split('#');
				animParam.values = ''; 
				for(var i=0; i < tempArr.length; i++){
					 if(i < tempArr.length-1 )
						 animParam.values += tempArr[i] +' ';
					 else
						 animParam.values += tempArr[i]; 
				 }				
				var animNode1 = animNode.childNodes[0]; 
				numAnim = animNode.childNodes.length; 
				//get the duration values 
				var subDur = new Number(animNode1.getAttribute('dur')); 
				var duration  =  Math.round(subDur * numAnim); 
				animParam.duration = duration; 
				animNode = animNode1;
				//get anim begin values 
			}
			else if(animType == 'ANIMATE_ZOOM'){
				//get the 'd' values 
				animParam.animType = 'ANIMATE_ZOOM'; 
				animParam.attribute = 'ANIMATE_ZOOM'; 
				animParam.values =  animNode.classList[3]; 				
				var animNode1 = animNode.childNodes[0]; 
				numAnim = animParam.numChildAnims = animNode.childNodes.length; 
				//get the duration values 
				var tempStr = animNode.childNodes[0].getAttribute('values').split(';'); 
				var startVal = new Number(tempStr[0]) ;
				var endVal = new Number(tempStr[1]) ; 
				startVal = Math.round(startVal *100/endVal); //in terms of % 
				animParam.startValue = startVal;				
				//now get the values from each child node 
				var valStr = ''; 				
				for(var j=0; j < animParam.numChildAnims; j++){					
					valStr += animNode.childNodes[j].getAttribute('values'); 
					if(j < animParam.numChildAnims - 1)
							valStr += '#';					
				}						
				//get anim begin values 
				animParam.values = valStr; 
				animNode = animNode1;
			}
		}
		else
			animParam.title = GX_GetAnimTitle(animNode); 		
		
		var value;			
		animParam.objectID = animNode.targetElement.id;		
		var object = document.getElementById(animParam.objectID); 
		animParam.objectType = object.classList[1]; 		
		value = animNode.getAttribute('dur'); 
		value = value.substring(0, value.length-1); 
		animParam.duration = value;
		if((animType == 'ANIMATE_PATH') ||(animType == 'ANIMATE_ZOOM')) {
			var subDur = new Number(value); 
			if(numAnim > 0)
				animParam.duration = Math.round(subDur * numAnim); 	
		}
		value = animNode.nodeName.toUpperCase(); 
		if( (animType != 'ANIMATE_PATH') && (animType != 'ANIMATE_ZOOM') ){
			animParam.startValue = animNode.getAttribute('from'); 
			animParam.endValue = animNode.getAttribute('to');
		}		
		if((value == 'ANIMATE') && (animType != 'ANIMATE_PATH') && (animType != 'ANIMATE_ZOOM'))
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
				var valuestr = animNode.getAttribute('values');
				GX_GetRotationAnimParamValues(valuestr, animParam);     	
			}
			else if(animParam.attribute == 'translate'){				
				animParam.startValue = animNode.getAttribute('from'); 
				animParam.endValue = animNode.getAttribute('to');	
				var objNode =  document.getElementById(animParam.objectID);
				var objPos = GX_GetRectObjectDim(objNode); 
				animParam.center = objPos.centerX + ' ' + objPos.centerY; 
				
				animParam.pace = 0; 
				var valuestr = animNode.getAttribute('values');
				GX_GetTranslateAnimParamValues(valuestr, animParam); 			
			}
			if(animParam.attribute == 'scale'){
				animParam.startValue = animNode.getAttribute('from'); 
				animParam.endValue = animNode.getAttribute('to');
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
		value = animInfo[3]; 
		var beginParams = GX_GetAnimBeginParameters(value); 		
		animParam.refAnimID = beginParams.refAnimID; 
		animParam.AnimEventType  = beginParams.AnimEvent; 
		animParam.refContainerID = beginParams.refContainerID; 
		
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
				animParam.startType = 'ON_CLICK';				
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
		else if(animParam.startType == 'ON_CLICK')
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
		if(AnimParam2.startType == 'ON_CLICK')
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
		if(AnimParam1.originalPosition != AnimParam2.originalPosition)
		{			   
			 attrData = ['to',AnimParam2.originalPosition];  
			 attrArray.push(attrData); 		
		}		
		if(AnimParam1.bRolling != AnimParam2.bRolling){
			 attrData = ['rolling',AnimParam2.bRolling];  
			 attrArray.push(attrData);
		}
		return attrArray; 
	}
	 var startval = AnimParam2.startValue;	
	 var endval = AnimParam2.endValue;	
	 if( (AnimParam2.attribute == 'ANIMATE_PATH')|| (AnimParam2.attribute == 'ANIMATE_ZOOM') ){
		 if(AnimParam2.values !=  AnimParam1.values){
			 attrData = ['values',AnimParam2.values];  
			 attrArray.push(attrData);
			 //Debug_Message('Values Different'); 
		 }
	 }
	 
	 if(AnimParam2.attribute == 'rotate')
	 {
		 startval = startval + ' ' + AnimParam2.center; 	
		 endval = endval + ' ' + AnimParam2.center; 
		 if((AnimParam2.startValue != AnimParam1.startValue) || (AnimParam2.endValue != AnimParam1.endValue) || (AnimParam2.autoReverse != AnimParam1.autoReverse)
				|| (AnimParam2.center != AnimParam1.center) ){
			 var newval  = AnimParam2.startValue + ' ' + AnimParam2.center + ';' + AnimParam2.endValue + ' ' + AnimParam2.center;
			 var keytimeval = '0;1'; 
			 if(AnimParam2.autoReverse == true){
				 newval += ';' + AnimParam2.startValue + ' ' + AnimParam2.center; 
				 keytimeval = '0;.5;1'; 
			 }
			 attrData = ['values',newval];  
			 attrArray.push(attrData); 			 
			 attrData = ['keyTimes',keytimeval];  
			 attrArray.push(attrData); 
		 }
	 }		    
	 if(AnimParam2.attribute == 'translate'){
		 if( (AnimParam2.autoReverse != AnimParam1.autoReverse) || (AnimParam2.pace != AnimParam1.pace) || (AnimParam2.endValue != AnimParam1.endValue)
				|| (AnimParam2.duration != AnimParam1.duration) ){
			 var keyValArr = GX_GetAcceleratedValues(AnimParam2.endValue, AnimParam2.duration, AnimParam2.pace, AnimParam2.autoReverse);			 
			 attrData = ['values',keyValArr[0]];  
			 attrArray.push(attrData); 					 
			 attrData = ['keyTimes', keyValArr[1]]; 
			 attrArray.push(attrData);
		 }		 
	 }
	 if(AnimParam2.startValue != AnimParam1.startValue){
		 attrData = ['from',startval];  
		 attrArray.push(attrData); 
	 }
	 if(AnimParam2.endValue != AnimParam1.endValue){
		 attrData = ['to',endval];  
		 attrArray.push(attrData);		
	 }	    
	 
	 return attrArray; 
	
 }
 
 function GX_UpdateAnimObjectAttribute(curranimID, attrArray)
 {
	 var animID = curranimID; 
	 var animNode = document.getElementById(animID); 	 
	 if(!animNode)
		 return ;
	 var visibleNodeAttr = []; 
	 var motionNodeAttr  = [];
	 var rollAttrArr = []; 
	 for(var i=0; i < attrArray.length; i++)
	 {
		 if(animNode.nodeName =='g'){
			 var animtype = animNode.classList[1];			 
			 var removeIndex = []; 			 
			 if(animtype =='PATH_MOTION'){
				 var visibleNode = animNode.childNodes[0]; 
				 var motionNode = animNode.childNodes[1];
				 var rollingnode = animNode.childNodes[2];				 
				 if(attrArray[i][0] == 'begin'){					
					 var prevValue = visibleNode.getAttribute('begin'); 
					 visibleNode.setAttribute(attrArray[i][0], attrArray[i][1]);
					 GX_UpdateAnimInfoInList(animNode); 					 
					 //now verify if there are unreferred indep anim node 
					 var bretVal = GX_IsIndependentAnimationsUnreferred(gAnimList);
					 if(bretVal == true){
						 visibleNode.setAttribute('begin', '0s');
						 GX_UpdateAnimInfoInList(animNode); 						  
						 return ; 
					 }
					 visibleNodeAttr.push(attrArray[i]);
					 removeIndex.push(i);
					// GXRDE_updateAnimationObject(visibleNode.id, visibleNodeAttr);						 
				 }
				 else if(attrArray[i][0] == 'rolling'){
					 var bRolling = attrArray[i][1];					
					 var begVal = ''; 
					 if(bRolling ==  true){		
						 begVal = motionNode.id + '.begin'; 							 
					 }
					 else{
						 begVal = ''; 
					 }
					 rollAttrArr.push(['begin', begVal]); 
					 //var respStr = GXRDE_updateAnimationObject(rollingnode.id, attr);
					 rollingnode.setAttribute('begin', begVal); 
					 //attrArray.splice(i,1); 
				 }else{
					 motionNodeAttr.push(attrArray[i]);
					 motionNode.setAttribute(attrArray[i][0], attrArray[i][1]);					 
					 removeIndex.push(i);	
					 if(attrArray[i][0] == 'from'){
						 var fromVal = '0 ' + attrArray[i][1]; 
						 var toVal = '360 ' + attrArray[i][1]; 
						 rollingnode.setAttribute('from', fromVal); 
						 rollingnode.setAttribute('to', toVal);						 
						 rollAttrArr.push(['from',fromVal ]); 
						 rollAttrArr.push(['to',toVal ]); 
						// var respStr = GXRDE_updateAnimationObject(rollingnode.id, rollAttrArr);
					 }
					 if(attrArray[i][0] == 'dur'){
						 var durValue = attrArray[i][1].substring(0,attrArray[i][1].length-1); 
						 durValue = new Number(durValue); 
						 var repeatCountVal = durValue / gDefaultRollingDuration; 
						 if(repeatCountVal < 1)
							 repeatCountVal = 1; 
						 var rollAttrArr = []; 
						 rollAttrArr.push(['repeatCount',repeatCountVal ]); 
						// var respStr = GXRDE_updateAnimationObject(rollingnode.id, rollAttrArr);
						 rollingnode.setAttribute('repeatCount', repeatCountVal); 
					 }					 
						 
			 }	
				 if(i == attrArray.length-1){
					 if(motionNodeAttr.length > 0)
						 var respStr = GXRDE_updateAnimationObject(motionNode.id, motionNodeAttr);
					 
					 if(rollAttrArr.length > 0)
						 var respStr = GXRDE_updateAnimationObject(rollingnode.id, rollAttrArr);
					 
					 if(visibleNodeAttr.length > 0 )
						 var respStr = GXRDE_updateAnimationObject(visibleNode.id, visibleNodeAttr);
					
					 return; 																 
				 }				
			 }//(animtype =='PATH_MOTION')	
			 else if(animtype == 'ANIMATE_PATH'){
				 //update the d values if changed
				 durattrArray = []; 	
				 valattrArray = []; 
				 var IDList =[]; 
				 var parentAnimNode = document.getElementById(curranimID); 
				 var numChild = parentAnimNode.childNodes.length; 
				 var durvalue = 0; 
				 //get all the ID list 
				 for(var k= 0 ; k < numChild; k++)
					 IDList.push(parentAnimNode.childNodes[k].id); 
				//update the duration value if changed 
				 if(attrArray[i][0] == 'dur'){
					 var durationvalue = attrArray[i][1].substring(0, attrArray[i][1].length-1); 
					var subduration  = 	new Number(durationvalue / numChild);
					subduration = '' + subduration + ''; 
					var decimalIndex = subduration.indexOf('.'); 
					subduration =  subduration.substring(0,decimalIndex+2);	
					durvalue = subduration+'s';	
					
					for(var j=0; j < numChild; j++){
						 valuestr =''; 
						 valuestr = 'dur=' + durvalue;						 
						 durattrArray.push(valuestr);  						 
						 parentAnimNode.childNodes[j].setAttribute('dur',durvalue ); 
					 }//for 				 
					 GXRDE_updateMultipleAnimObjects(IDList, durattrArray); 
				 }// if(attrArray[i][0] == 'dur'		
				 
				 else if(attrArray[i][0] == 'values'){
					 //get the array of d values generated for the child nodes 		
					 var dvalArr = GX_GetPathValuesForAnimation(attrArray[i][1]);	
					 var valuestr =''; 
					 for(var j=0; j < numChild; j++){
						 valuestr ='';						 
						 valuestr = 'values=' + dvalArr[j];					 
						 valattrArray.push(valuestr); 
						 parentAnimNode.childNodes[j].setAttribute('values',dvalArr[j]); 					 
					 }//for 
					    GXRDE_updateMultipleAnimObjects(IDList, valattrArray); 
					 	var valueArr = attrArray[i][1].split(' ');
						var valstr =''; 
						for(var j= 0; j < valueArr.length; j++){
							if(j < valueArr.length-1 )
								valstr += valueArr[j] + '#'; 
							else
								valstr += valueArr[j]; 
						}
						//var classvalue = 'ANIMATE_PATH ' + animParams.title + ' ' + valstr; 
						var classvalue  = parentAnimNode.classList[0] + ' ' + parentAnimNode.classList[1] + ' ' + 
						parentAnimNode.classList[2] + ' ' +valstr;
						var myarr = []; 
						myarr.push(['class', classvalue]); 				
						GXRDE_updateSVGObject(parentAnimNode.id, myarr); 
						parentAnimNode.setAttribute('class', classvalue);					 
				 }
				 else if(attrArray[i][0] == 'begin'){					 
					 //set attribute of local animNode
					 var animNode1 = parentAnimNode.childNodes[0]; 
					 animNode1.setAttribute(attrArray[i][0], attrArray[i][1]); 
					 GX_UpdateAnimInfoInList(parentAnimNode);
					 var attrList1=[]; 
					 attrList1.push([attrArray[i][0], attrArray[i][1]]); 
					 GXRDE_updateAnimationObject(animNode1.id, attrList1); 
					 //then set the remote attribute 
					 //update the GX_UpdateAnimInfoList
					 //add it to the list f attr to update 
					 
				 }//if(animtype == 'ANIMATE_PATH')
				 if(i == attrArray.length-1)
					 return ; 
			 }
			 else if(animtype == 'ANIMATE_ZOOM'){
				 //update the d values if changed
				 durattrArray = []; 	
				 valattrArray = []; 
				 var IDList =[]; 
				 var parentAnimNode = document.getElementById(curranimID); 
				 var numChild = parentAnimNode.childNodes.length; 
				 var durvalue = 0; 
				 //get all the ID list 
				 for(var k= 0 ; k < numChild; k++)
					 IDList.push(parentAnimNode.childNodes[k].id); 
				//update the duration value if changed 
				 if(attrArray[i][0] == 'dur'){
					 var durationvalue = attrArray[i][1].substring(0, attrArray[i][1].length-1); 
					var subduration  = 	new Number(durationvalue / numChild);
					subduration = '' + subduration + ''; 
					var decimalIndex = subduration.indexOf('.'); 
					subduration =  subduration.substring(0,decimalIndex+2);	
					durvalue = subduration+'s';	
					
					for(var j=0; j < numChild; j++){
						 valuestr =''; 
						 valuestr = 'dur=' + durvalue;						 
						 durattrArray.push(valuestr);  						 
						 parentAnimNode.childNodes[j].setAttribute('dur',durvalue ); 
					 }//for 				 
					 GXRDE_updateMultipleAnimObjects(IDList, durattrArray); 
				 }// if(attrArray[i][0] == 'dur'					 
				 else if(attrArray[i][0] == 'values'){
					 //get the array of d values generated for the child nodes 		
					 var dvalArr = attrArray[i][1].split('#');	
					 var valuestr =''; 
					 for(var j=0; j < numChild; j++){
						 valuestr ='';						 
						 valuestr = 'values=' + dvalArr[j];					 
						 valattrArray.push(valuestr); 
						 if(j == 0)
							 parentAnimNode.childNodes[j].setAttribute('values',dvalArr[j]); 
						 if(j == 1)
							 parentAnimNode.childNodes[j].setAttribute('values',dvalArr[j]);
						 if(j == 2)
							 parentAnimNode.childNodes[j].setAttribute('values',dvalArr[j]);
						 if(j == 3)
							 parentAnimNode.childNodes[j].setAttribute('values',dvalArr[j]);
					 }//for 
					    GXRDE_updateMultipleAnimObjects(IDList, valattrArray); 									 
				 }//if(attrArray[i][0] == 'values')
				 else if(attrArray[i][0] == 'begin'){					 
					 //set attribute of local animNode
					 var animNode1 = parentAnimNode.childNodes[0]; 
					 animNode1.setAttribute(attrArray[i][0], attrArray[i][1]); 
					 GX_UpdateAnimInfoInList(parentAnimNode);
					 var attrList1=[]; 
					 attrList1.push([attrArray[i][0], attrArray[i][1]]); 
					 GXRDE_updateAnimationObject(animNode1.id, attrList1); 
					 //then set the remote attribute 
					 //update the GX_UpdateAnimInfoList
					 //add it to the list f attr to update 
					 
				 }
				 if(i == attrArray.length-1)
					 return ; 
			}//if(animtype == 'ANIMATE_ZOOM')
		 }//if(animNode.nodeName =='g'
		 else{
			
			 if(attrArray[i][0] == 'begin'){
				 var prevValue = animNode.getAttribute('begin');
				 animNode.setAttribute(attrArray[i][0], attrArray[i][1]); 
				 GX_UpdateAnimInfoInList(animNode); 
				 //now verify if there are unreferred indep anim node 
				 var bretVal = GX_IsIndependentAnimationsUnreferred(gAnimList);
				 if(bretVal == true){
					 animNode.setAttribute('begin', '0s');
					 GX_UpdateAnimInfoInList(animNode); 						  
					 return ; 
				 }
			 }
			 else
				 animNode.setAttribute(attrArray[i][0], attrArray[i][1]);
		 	}
		 //updating the local list here 
		 if(attrArray[i][0]== 'fill'){
			 //get the animlist index 
			 var index = GX_GetAnimInfoListIndexByID(animID);
			 gAnimList[index][4] = attrArray[i][1];			 
		 }
		 
		 
	 }//for loop 
		 if(attrArray.length > 0)
			 	var respStr = GXRDE_updateAnimationObject(animID, attrArray); 
		 
		
 }
 

 function GX_ChangeAnimateMotionSettingsFromcode(animNode)
 {    	 	         
 	    var fromval = animNode.getAttribute("from");
 	    fromval = fromval.split(",");
 	    var objRef =  animNode.getAttribute("xlink:href"); 
  	    objRef = objRef.substring(1,objRef.length); 				               	       
  	    var objNode = document.getElementById(objRef);  	    
 	    var objType = objNode.classList[1]; 
 	    if( (objType == "ELLIPSE")|| (objType == "CIRCLE") ) 
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
 
 
 
 
 
 function GX_AnimEndTimerHandler()
 {
	 GX_RestoreMotionObject(gCurrAnimNode); 
	 Debug_Message("Timer Handler Called"); 
 }
 
 
 var gPathValue = 0; 
 var gPolypathNode = 0; 
 function GX_PreviewAnimation(animID, objectID, animType)
 {	 
  	var animnode = document.getElementById(animID);
  	if(!animnode)
  		return ; 	
  	
  	//if animNode is animMotion type 
  	//get the previous Sibling 
  	//set that into animation mode 
  	if(animnode.nodeName == 'g'){
  		var animType = animnode.classList[1]; 
  		if(animType == 'PATH_MOTION'){
  			if(gbAnimationEnd == false)
  	  			 return ; 
  	  		gbAnimationEnd = false;   	  		
  			var visibleAnimNode = animnode.childNodes[0]; 
			var motionAnimNode = animnode.childNodes[1]; 
			motionAnimNode.setAttribute('onend', 'GX_OnAnimationEndHandler(evt)'); 
	  		GX_ChangeAnimateMotionSettingsFromcode(motionAnimNode);  
	  		motionAnimNode.setAttribute('restart', 'whenNotActive');
	  		motionAnimNode.setAttribute('fill', 'remove'); 
	  		//visibleAnimNode.beginElement();
	  		motionAnimNode.beginElement();
	  		
	  		//animnode.setAttribute('restart', 'whenNotActive');
	  	    //animnode.setAttribute('fill', 'remove'); 
	  	    //animnode.beginElement();
	  	    
	  		return; 
  		}
  		else if(animType == 'ANIMATE_PATH'){
  			var animNode1 = animnode.childNodes[0];
  			animNode1.setAttribute('restart', 'whenNotActive');
  			animNode1.setAttribute('fill', 'remove'); 
  			var objID = animNode1.getAttribute('xlink:href');
  			objID = objID.substring(1,objID.length); 
  			gPolypathNode = document.getElementById(objID);
  			gPathValue = gPolypathNode.getAttribute('d'); 
  			animNode1.beginElement();  			
  			return;   			
  		}
  		else if(animType == 'ANIMATE_ZOOM'){
  			var animNode1 = animnode.childNodes[0];
  			animNode1.setAttribute('restart', 'whenNotActive');
  			animNode1.setAttribute('fill', 'remove'); 
  			animNode1.beginElement();  			
  			return;   			
  		}
  	}
  	
  //	var animInfo = GX_GetAnimInfoByID(animID); 
  	if(animType.toUpperCase()== 'ROTATE'){  		
  		gRotAnimObjectNode = document.getElementById(objectID); 
  		gRotAnimTransfValue = gRotAnimObjectNode.getAttribute('transform'); 
  	}
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
 }

 function GX_RemoveAnimationObject(animID)
 {
	var RefAnimList = GX_GetAnimItemWithRefAnimID(gAnimList, animID);
	var attrArray =[]; 
	var attrData = 	['begin', '0s'];	
	attrArray.push(attrData);
	var index= -1; 
	for(var k=0; k < RefAnimList.length; k++){		
		//var respStr = GXRDE_updateAnimationObject(RefAnimList[k][0], attrArray); 
		//get the index of refanimID 
		index = GX_GetIndexofAnimInfoFromList(RefAnimList[k][0]); 
		if(index != -1){
			gAnimList[index][3] = attrData[1]; 
		}			
		//change the array entry here only 
		GX_UpdateAnimObjectAttribute(RefAnimList[k][0], attrArray); 
	} //for 
	var tempAnimNode = gCurrAnimNode = document.getElementById(animID); 
	
	//delete the path as well	
	if(gCurrAnimNode.nodeName == 'g'){
		var animType = gCurrAnimNode.classList[1]; 
		if(animType == 'PATH_MOTION'){
			var motionNode = gCurrAnimNode.childNodes[1]; 
			var pathRefNodeID = motionNode.childNodes[0].getAttribute('xlink:href');
			pathRefNodeID = pathRefNodeID.substring(1, pathRefNodeID.length); 
			if(pathRefNodeID == gCurrentObjectSelected.id){
				GX_SetSelection(gCurrentObjectSelected, false, false); 
				
			GX_DeleteObject(pathRefNodeID); 
			GX_RemoveObjectFromList(pathRefNodeID);
			WAL_DeleteTreeItem(gTreeNodeID, 'TM_'+pathRefNodeID); 
		  }
		}
		else if(animType == 'ANIMATE_PATH'){
			
		}
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
	 var objRef = animNode.getAttribute('xlink:href'); 
	 objRef =  objRef.substring(1, objRef.length); 
	 var objNode =  document.getElementById(objRef); //animNode.parentNode; 
	 var objType = objNode.classList[1];
	 var nodename = animNode.nodeName.toUpperCase(); 	 
	 if(nodename == 'ANIMATEMOTION'){
		 var origValueArr = animNode.getAttribute('to'); 
		 origValueArr = origValueArr.split(','); 		 
		 if( (objType == 'ELLIPSE') || (objType == "CIRCLE") )
		 {
			  objNode.setAttribute("cx", origValueArr[0]); 
		      objNode.setAttribute("cy", origValueArr[1]);  			
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
	 else if(nodename == 'ANIMATE'){
		 var parentNode = animNode.parentNode; 
		 if(parentNode.nodeName == 'g'){
			 
			 var tempArr = parentNode.classList[3].split('#'); 
			 var origval =''; 
			 for(var i=0; i < tempArr.length; i++){
				 if(i < tempArr.length-1 )
					 origval += tempArr[i] +' ';
				 else
					 origval += tempArr[i]; 
			 }
			// objNode.setAttribute('d',origval ); 
			 GX_SetObjectAttribute(objNode, 'd', origval, true, false); 
			 //Debug_Message('Setting Orig Value=' +origval ); 			 
		 }		 
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
	 if(gCurrentObjectSelected){
		 GX_SetSelection(gCurrentObjectSelected, false, false);		
	 }
			
	 	gCurrentAnimInfo = GX_GetAnimInfoByTitle(animTitle); 
		var animNode =  document.getElementById(gCurrentAnimInfo[0]); 
		if(!animNode)
			return ;				
		
		gCurrAnimParam = GX_GetAnimParamFromNode(animNode); 
		//GX_SetAnimParamOnUI(gCurrAnimParam); 		
		if(gCurrAnimParam.animType == 'ANIM_MOTION'){			
			var refPathNode = document.getElementById(gCurrAnimParam.refPathID); 
			GX_SetSelection(refPathNode, true, true);
			var objectType = refPathNode.classList[1]; 
	    	GX_ShowObjectPropertyInterface(objectType, true);				
		}
		//animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
		else if(gCurrentAnimInfo[2] == 'rotate'){
			//var objNode = document.getElementById(gCurrentAnimInfo[3]);
			GX_SetSelection(animNode.targetElement, true, false);		
		}
		else
			GX_SetSelection(animNode.targetElement, true, false);		
		GX_SetAnimParamOnUI(gCurrAnimParam); 	
 }
 
 
 function GX_UpdateAnimInfoOnUI(animName){
	 gbAnimationEnd = true; 
	 var animTitle = animName; 
	 if(gCurrentObjectSelected){
		 GX_SetSelection(gCurrentObjectSelected, false, false);		
	 }
			
	gCurrentAnimInfo = GX_GetAnimInfoByTitle(animTitle); 
	var animNode =  document.getElementById(gCurrentAnimInfo[0]); 
	if(!animNode)
		return ;				
		
	gCurrAnimParam = GX_GetAnimParamFromNode(animNode); 
		//GX_SetAnimParamOnUI(gCurrAnimParam); 		
	if(gCurrAnimParam.animType == 'ANIM_MOTION'){			
		var refPathNode = document.getElementById(gCurrAnimParam.refPathID); 
		GX_SetSelection(refPathNode, true, true);
		var objectType = refPathNode.classList[1]; 
	   	GX_ShowObjectPropertyInterface(objectType, true);				
	}
		//animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
	else if(gCurrentAnimInfo[2] == 'rotate'){
			//var objNode = document.getElementById(gCurrentAnimInfo[3]);
		GX_SetSelection(animNode.targetElement, true, false);		
	}
	else 		
		GX_SetSelection(animNode.targetElement, true, false);
	//rm to be done later 
	GX_SetAnimParamOnUI(gCurrAnimParam); 	
 }
 
 function GX_NewAnimDlgOK(){
	 //add the new animation object and do the needful 
	 var bReload = true; 
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
	    if(gCurrentObjectSelected.nodeName == 'g')
	    	gInitAnimParam.objectType = 'GROUP';
		else
			gInitAnimParam.objectType = gCurrentObjectSelected.classList[1]; 	   	   
	    gInitAnimParam.duration = 2;
	    gInitAnimParam.animType = ''; // animType; 
	    gInitAnimParam.attribute = attrtype;
	    gInitAnimParam.refPathID = '';
	    gInitAnimParam.refPathType='';
	    gInitAnimParam.bPathVisible = false;
	    gInitAnimParam.bRolling = false; 
	    if(lastAnimID != 0){
	    	gInitAnimParam.startType = 'ON_ANIMEVENT';//ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT	    	
	    	var node = document.getElementById(lastAnimID); 
	    	if(node.nodeName == 'g'){
	    		var animtype = node.classList[1]; 
	    		if(animtype ==  'PATH_MOTION'){
	    			gInitAnimParam.refAnimID = node.childNodes[1].id; 
	    		}
	    		else if(animtype ==  'ANIMATE_PATH'){
	    			gInitAnimParam.refAnimID = node.childNodes[node.childNodes.length-1].id; 
	    		}
	    		else if(animtype ==  'ANIMATE_ZOOM'){
	    			gInitAnimParam.refAnimID = node.childNodes[node.childNodes.length-1].id; 
	    		}
	    	}
	    	else
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
		if(attrtype == 'opacity'){
			gInitAnimParam.startValue = '0.3';
		 	gInitAnimParam.endValue = '1';
		}
		else if(attrtype == 'rotate'){
			animType = 'ANIM_TRANSFORM';
			var rectdim = GX_GetRectObjectDim(gCurrentObjectSelected);
			var centreX = rectdim.x + rectdim.width/2; 
			var centreY = rectdim.y + rectdim.height/2;
			gInitAnimParam.center = centreX + ',' + centreY;	
		    gInitAnimParam.startValue = '0' + ' ' + gInitAnimParam.center ;
		 	gInitAnimParam.endValue = '90'  + ' ' + gInitAnimParam.center ;			 	
		}
		else if(attrtype == 'translate'){
			animType = 'ANIM_TRANSFORM';
			var rectdim = GX_GetRectObjectDim(gCurrentObjectSelected);
			var startX = 0;//new Number(rectdim.x + rectdim.width/2); 
			var startY = 0;//new Number(rectdim.y + rectdim.height/2);
			var endX = startX +  200; 
			var endY = startY +  200; 
			//gInitAnimParam.center = centreX + ' ' + centreY;	
		    gInitAnimParam.startValue = startX + ' ' + startY ;
		 	gInitAnimParam.endValue = endX + ' ' + endY ;			 	
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
			var objectType =  gInitAnimParam.objectType; 
			if( (objectType == 'ELLIPSE') || (objectType == "CIRCLE") ){ 
				var objDim =  GX_GetRectObjectDim(gCurrentObjectSelected);
				startX = objDim.centerX; 
				startY = objDim.centerY; 				
			}
			else if(objectType == 'CIRCLE'){
				var objDim =  GX_GetRectObjectDim(gCurrentObjectSelected);
				startX = objDim.centerX; 
				startY = objDim.centerY; 				
			}
			else if(objectType == 'RECTANGLE'){
				var objDim =  GX_GetRectObjectDim(gCurrentObjectSelected); 
				startX = objDim.centerX; 
				startY = objDim.centerY; 		
			}
			else if(objectType == 'GROUP'){
				var objDim =  GX_GetRectObjectDim(gCurrentObjectSelected); 
				startX = objDim.centerX; 
				startY = objDim.centerY; 		
			}
			bReload = false; 
			var MyRefPathID = GX_AddNewSVGObject('line_path','','mynewcallback' );
			mynewcallback = function(respStr){
				callbackSVGAddDefualtFn(respStr);
				gInitAnimParam.refPathID = gNewObjectID; 
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
				
				gInitAnimParam.animType = animType; 		     
			    GX_AddAnimationElement(gInitAnimParam, false); 
			    var animNode = document.getElementById(gInitAnimParam.animID);			  
			    GX_ReloadSVG(gInitAnimParam.objectID, true);	
			    gCurrentTabIndex = 2; 
			    gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 
			    return ; 
			}
		}//if(attrtype == 'pathmotion')
		else if(attrtype == 'move'){
			//object type is stored 
			animType = 'ANIM_MOVE'; 
			gInitAnimParam.autoReverse = false; 
			gInitAnimParam.pace = 0; 
			var startPoint =  new sPoint();
			var endPoint = new sPoint(); 
			if((gInitAnimParam.objectType == 'RECTANGLE') || (gInitAnimParam.objectType == 'IMAGE') ){
				startPoint.x = new Number(gCurrentObjectSelected.getAttribute('x')); 
				startPoint.y = new Number(gCurrentObjectSelected.getAttribute('y')); 				
			}
			gInitAnimParam.startPos = startPoint.x + ',' + startPoint.y; 
			endPoint.x = startPoint.x + 200; 
			endPoint.y = startPoint.y + 200; 
			gInitAnimParam.endPos = endPoint.x + ',' + endPoint.y;
			//animtype is move 
		}
		else if(attrtype == 'ANIMATE_PATH'){
			animType = 'ANIMATE_PATH'; 
			var objNode = document.getElementById(gInitAnimParam.UIObjectID); 			
			if(objNode.classList[1] != 'POLYGON'){
				Debug_Message('Animation Not applicable to Shape type Objects'); 
				return; 
			}
			gInitAnimParam.duration = new Number(8); 
			gInitAnimParam.values = objNode.getAttribute('d'); 
			gInitAnimParam.restart = 'whenNotActive'; 
			var valueArr = gInitAnimParam.values.split(' '); 
			if(valueArr.length > 1)
				gInitAnimParam.numChildAnims = valueArr.length-1; 
		}
		else if(attrtype == 'ANIMATE_ZOOM'){
			animType = 'ANIMATE_ZOOM'; 
			var objNode = document.getElementById(gInitAnimParam.UIObjectID); 			
			if(objNode.classList[0] != 'SVG_SHAPE_OBJECT'){
				Debug_Message('Animation Not applicable to Shape type Objects'); 
				return; 
			}
			gInitAnimParam.duration = new Number(4); 
			//gInitAnimParam.values = objNode.getAttribute('d'); 
			var objType = objNode.classList[1];
			if( (objType == 'RECTANGLE') || (objType == 'IMAGE') ){
				
				gInitAnimParam.numChildAnims = new Number(4); 
			}	
			else if (objType == 'ELLIPSE')
				gInitAnimParam.numChildAnims = new Number(2);
			else if (objType == 'CIRCLE')
				gInitAnimParam.numChildAnims = new Number(1);
			//gInitAnimParam.values = dimVal; 			
			var objDim =  GX_GetRectObjectDim(objNode);
			var startX = objDim.centerX; 
			var startY = objDim.centerY;
			gInitAnimParam.center = startX + ',' + startY; 
			gInitAnimParam.restart = 'whenNotActive';	
			gInitAnimParam.startValue = 40; // in terms of % of the dimension
		}
		else{
			Debug_Message('Other Anim attr not supported'); 
			return ; 
		}
		if(bReload == true){
			gInitAnimParam.animType = animType; 		     
		    GX_AddAnimationElement(gInitAnimParam, false); 
		    var animNode = document.getElementById(gInitAnimParam.animID);
		    //if(gInitAnimParam.animType == 'ANIM_MOTION')
		    	gAnimList = GX_SortAnimListInDisplayOrder(gAnimList);	
		    	GX_ReloadSVG(gInitAnimParam.objectID, true);	    
		    	
		    	/*setTimeout(function(){			
						WAL_SetTabIndex('rightTabs', 2); 				
						}, 500);*/	   		    
		}
			    
	   
	    
	 //then add it to the list 
 }
 /*
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
	// WAL_ListBoxUpdateData('animationlist', animlist);
 }
 */
 
 function GX_AnimListWidgetBtnHdlr(event){
	 var nodeid =  event.target.id; 
	// Debug_Message('BtnID = ' + nodeid); 	
	 switch(nodeid){	 
	 case 'play_anim_btn':
		 if(gCurrentAnimInfo)
			 GX_PreviewAnimation(gCurrentAnimInfo[0], gCurrentAnimInfo[1], gCurrentAnimInfo[2]); 		
		 break; 
	 case 'delete_anim_btn':		
		 if(gCurrentAnimInfo){		 
			 GX_RemoveAnimationObject(gCurrentAnimInfo[0]); 
			 GX_UpdateAnimUIGrid();
			 GX_ReloadSVG(0, true);
			 setTimeout(function(){			
					WAL_SetTabIndex('rightTabs', 2); 	
					 
					}, 500);
		    /*	
			 gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 	 
			 GX_UpdateAnimationListbox();
			 */ 		    
		 }
		 break;
	 case 'apply_anim_btn':	
		 var tempAnimParam = GX_GetAnimParamsFromUI(gCurrAnimParam); 
		 var attrArray = GX_CompareAndGetAnimParamArray(gCurrAnimParam, tempAnimParam); 		
		//now update the array on server side 
		if( (attrArray) && (attrArray.length >0) )
		{
			var respStr = GX_UpdateAnimObjectAttribute(gCurrAnimParam.animID, attrArray);
			if(gCurrAnimParam.animType == 'ANIM_MOTION'){
				var id =  gCurrAnimParam.animID; 
				GX_ReloadNode(id); 
				
				
			//	GX_ReloadSVG(gCurrAnimParam.objectID);
			//	WAL_SetTabIndex('rightTabs', 2);
				/*setTimeout(function(){			
					WAL_SetTabIndex('rightTabs', 2);		
	    			}, 350);
	    			*/ 
				//	  
			}
		}		
		gAnimList = GX_SortAnimListInDisplayOrder(gAnimList); 	 
		//GX_UpdateAnimationListbox();
		//WAL_ClearGridSelection('jqxAnimgrid'); 
		 break;
	 case 'add_anim_btn':
		 gLastPositionValue = 0;
		 GX_AddNewAnimation();
		 break;	 
	default:
		break; 
	 }
 }
 function GX_GetAnimItemWithRefAnimID(animList, refAnimID){
		var mylist=[]; 
		/*
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
		*/
		for(var j=0;  j <animList.length; j++){
			var animItem = animList[j];
			var refAnimContainerID = animItem[7]; 
			if(refAnimContainerID == refAnimID){
				var beginParam = GX_GetAnimBeginParameters(animItem[3]);
				if(beginParam.AnimEvent == 'begin')
					mylist.splice(0, 0,animList[j] ); 
				else if(beginParam.AnimEvent == 'end')
					mylist.push(animList[j]);
			}
		}
		if(mylist.length > 0)
			return mylist;
		else
			return 0; 
}
 
 
 function GX_IsIndependentAnimationsUnreferred(animList){
	 
	 var bUnreferred = true; 
	 var animItem = 0; 	
	 var indepIndex=0; 
	 // find out list of all animtion i tems which are independent
	 for(var k=0 ;  k < animList.length; k++){
		 animItem = animList[k]; 
		 var refList=0;
		 if(animItem[6] == ''){
			 ++indepIndex; 
			 refList = GX_GetAnimItemWithRefAnimID(animList, animItem[0]); 
			 if(refList){
				 return false; 
			 }
		}			 
	 }	 
	 //means all are independent 
	 if(indepIndex == animList.length )
		 return false; 
	 
	 Debug_Message('At Least One Independent Animations needs to be Referred');
	 return true; 
 }
 
 function GX_GetBeginParamWithRefAnim(animInfo){
	 	var animItem = animInfo;	 		
	 	var beginParams = GX_GetAnimBeginParameters(animItem[3]); 
	 	
		/*var dotpos =  animItem[3].indexOf('.'); 		
		if(dotpos == -1)
			return 0;  
		var animIDRef = animItem[3].substring(0,dotpos); 			
		var animEvent = animItem[3].substring(dotpos+1,animItem[3].length); 
		if( (animEvent == 'begin')|| (animEvent == 'end') ){
			var refAnimInfo = GX_GetAnimInfoByID(animIDRef);			
			if(refAnimInfo)
				return refAnimInfo; 
		}
		*/
	 	if(beginParams.refAnimID){
	 		var refAnimInfo = GX_GetAnimInfoByID(beginParams.refAnimID);			
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
			/*
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
			*/
			var animItem = animList[k];
			if(animItem[6] == ''){
				sortedList.push(animItem);
			}
		}//for 
		sortArrIndex = -1; 
		//check here is any of the independent animations are referred or not 
		while(1){
			sortArrIndex++; 
			if (sortArrIndex >= animlistlength) 
				break; 
			if(sortArrIndex == sortedList.length){
				Debug_Message('There seems to be one or more Animation which is unreferred');
				return animList;				
			}
			var  refanimID =  sortedList[sortArrIndex][0]; 
			var referredAnimList = GX_GetAnimItemWithRefAnimID(animList, refanimID);   
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
		var pathValues =  GX_OBJ_GetPolygonParams(startPoint.x,startPoint.y, 5, 50); 		
		var classValue = 'SVG_PATH_OBJECT POLYGON ROTATE,0 CENTRE'; 
		GX_SetSelection(refPathNode, true, true);
		GX_SetObjectAttribute(gCurrentObjectSelected, 'd', pathValues, true, false); 
		GX_SetObjectAttribute(gCurrentObjectSelected, 'class', classValue, true, false); 
		var gPathDataArray = GX_ConvertPathDataToArray(gCurrentObjectSelected); 
		GX_AddPathMarker(gCurrentObjectSelected.id, gPathDataArray, true);	
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
 

function GX_PopulateAnimationList(){
	
	var animListNode =  document.getElementById('ANIMATION_GROUP'); 
	 gAnimList = new Array(); 
	//get all the child nodes 
	// Debug_Message("Animation Info Being  Updated :Before "); 
	var nodeList = animListNode.childNodes; 
	for(var j= 0 ; j <nodeList.length; j++){
		var childNode = nodeList[j];
		//take care of group element later on		
		GX_UpdateAnimInfoInList(childNode);	
	}
	// Debug_Message("Animation Info Being  Updated: after"); 
	//check if the node type is group in which case look into the class to determine animation type
	//for each animation type look for appropriate animation element 
	
}


function GX_GetAnimBeginParameters(beginValue){	
	var beginParam =  new sBeginParams(); 
	var dotpos =  beginValue.indexOf('.'); 		
	if(dotpos == -1){
		beginParam.AnimEvent = 'time'; 
		beginParam.refAnimID = ''; 
		beginParam.refContainerID = ''; 
		return beginParam; 
	}				
	var animIDRef = beginValue.substring(0,dotpos);		
	var animEvent = beginValue.substring(dotpos+1,beginValue.length); 
	if(animEvent == 'click'){
		beginParam.AnimEvent = animEvent; 
		beginParam.refAnimID = '';
		beginParam.refContainerID = ''; 
		return beginParam; 
	}	
	beginParam.AnimEvent = animEvent; 
	beginParam.refAnimID = animIDRef;
	var refNode = document.getElementById(beginParam.refAnimID);
	if( (refNode.parentNode.nodeName == 'g') && (refNode.parentNode.id == 'ANIMATION_GROUP') )
		beginParam.refContainerID = beginParam.refAnimID; 
	else
		beginParam.refContainerID = refNode.parentNode.id; 
		
	return beginParam; 
}


function GX_GetAcceleratedValues(distance, duration,bPace, bAutoRev){
	var distArr='';	
	var keyValues ='';
	var keyValueArr =[]; 
	var distX, distY; 
	var arr = distance.split(' '); 
	distX = arr[0];
	distY = arr[1]; 
	var maxInterval = gMaxKeytimesInterval; 
	var firstHalfKeyIntervals, secondHalfKeyIntervals; 	
	if(bPace == false) {
		if(bAutoRev == false){
			distArr += '0 0;' + distX + ' ' + distY; 
			keyValues += '0;1'; 
			keyValueArr.push(distArr); 
			keyValueArr.push(keyValues); 
			return keyValueArr; 
		}
		else{
			distArr += '0 0;' + distX + ' ' + distY + ';0 0'; 
			keyValues += '0;.5;1'; 
			keyValueArr.push(distArr); 
			keyValueArr.push(keyValues); 
			return keyValueArr;
			
		}
			
	}
	with(Math){	
		if(bAutoRev == true){
			firstHalfKeyIntervals  = gMaxKeytimesInterval/2; 
			secondHalfKeyIntervals = firstHalfKeyIntervals; 
		}
		else
			firstHalfKeyIntervals = gMaxKeytimesInterval ; 
		
		var Sx = new Number(distX);
		var Sy =  new Number(distY); 
		var T = new Number(duration); 
		var interval =  duration / firstHalfKeyIntervals;
		var time=0; 
		var accX = (2*Sx)/(T*T); 
		var accY = (2*Sy)/(T*T); 
		var X, Y; 
		for(var j=0; j < firstHalfKeyIntervals+1; j++){
			X = round(0.5*accX*time*time); 
			Y = round(0.5*accY*time*time); 
			distArr += X + ' ' + Y ; 
			time += interval ; 
			if(j < firstHalfKeyIntervals)
				distArr += ';'; 
		}
		if(bAutoRev == true){
			var valArr = distArr.split(';'); 
			distArr += ';'; 
			for(var j=valArr.length-2; j >= 0; j--){
				distArr += valArr[j]  ; 
				if(j > 0)
					distArr += ';'; 	
			}
		}
		keyValues += '0;.1;.2;.3;.4;.5;.6;.7;.8;.9;1'; 
	}	
	keyValueArr.push(distArr); 
	keyValueArr.push(keyValues); 
	return keyValueArr;	
}

function GX_GetTranslateAnimParamValues(valueStr, animParams){
	
	var valueArray = valueStr.split(';'); 
	if(valueArray.length < 1)
		return 0; 
	if(valueArray.length == 2){
		//uniform + noAutoReverse
		animParams.pace = 0; 
		animParams.autoReverse =  false;
		animParams.startValue = valueArray[0]; 
		animParams.endValue = valueArray[valueArray.length-1];
		return ; 
	}
	if(valueArray.length == 3){
		//uniform + autoReverse
		animParams.pace = 0; 
		animParams.autoReverse =  true;
		animParams.startValue = valueArray[0]; 
		animParams.endValue = valueArray[valueArray.length-2];
		return ;
	}
	if(valueArray.length > 3){
		//uniform + autoReverse
		animParams.pace = 1; 
		animParams.startValue = valueArray[0]; 
		if(valueArray[0] == valueArray[valueArray.length-1]){
			animParams.autoReverse =  true;
			var midIndex = (valueArray.length-1)/2; 
			animParams.endValue = valueArray[midIndex];
			return ; 
		}
		else{
			animParams.autoReverse =  false;			
			animParams.endValue = valueArray[valueArray.length-1];
			return ; 
		}	
	}	
}

function GX_GetRotationAnimParamValues(valuestr, animParam){
	//values="0 175,132;90 175,132; 0 175,132
	//get valuearray
	var valueArr = valuestr.split(';'); 
	if(valueArr.length < 1)
		return false; 
	//get the autoreverse flag 
	if( (valueArr.length == 3) && (valueArr[0] == valueArr[2]) ){
		animParam.autoReverse = true; 
	}
	else
		animParam.autoReverse = false; 
	//now get startArr and endArr 
	var startValArr, endValArr; 
	startValArr = valueArr[0].split(' '); 
	endValArr = valueArr[1].split(' '); 
	//now from startArr get initAngle, center
	animParam.startValue = startValArr[0]; 
	animParam.endValue = endValArr[0]; 
	animParam.center = startValArr[1]; 
	//from endArr get finalAngle 
	//if length of valuearr ==3 and startArr[0] == startArr[1] then autoreverse = true 
}
function GX_GetPathValuesForAnimation(dvalue){
	var newdValArr =[]; 
	var dvalArr; 
	
	//split the dvalue into array
	dvalArr = dvalue.split(' '); 
	var part1, part2; 
	//get rid of alphabets from each entry
	for(var k=0; k < dvalArr.length; k++){
		if(dvalArr[k] == 'z')
			dvalArr[k] = dvalArr[0]; 
		else
			dvalArr[k] = dvalArr[k].substring(1,dvalArr[k].length); 		
	}
	//create an array of davlues storing the string of new d values
	//now loop around no. of array elements to generate new d values 
	var startVal, endVal; 
	startVal = 'M' + dvalArr[0]; 
	for(var m=0; m < dvalArr.length-1; m++){
		part1 = startVal + ' L' + dvalArr[m]; 
		part2 = startVal + ' L' + dvalArr[m+1]; 
		newdValArr.push(part1 + ';' + part2); 
		startVal = part2; 
	}
	return newdValArr; 	
}


//var animInfo = [animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval, beginParam.refAnimID, beginParam.refContainerID];
function GX_GetAnimInfoList(){	
	var animInfoList=[]; 
	for(var i =0; i < gAnimList.length; i++){	   	   
			var animInfo = new sAnimInfo();			
	    	if(gAnimList[i][5] != 'Invisible Animation'){
	    		animInfo.id = gAnimList[i][0]; 
	    		animInfo.title = gAnimList[i][5]; 
	    		animInfo.type = gReverseAttrList[gAnimList[i][2]];
	    		animInfo.trigger = gRevTriggerList[gAnimList[i][9]];
	    		animInfo.duration = gAnimList[i][8];
	    		if(gAnimList[i][6]){
	    			var info  = GX_GetAnimInfoByID(gAnimList[i][6]);
	    			animInfo.refanimID = info[5];
	    		}	    			
	    		else
	    			animInfo.refanimID = ""
	    		animInfoList.push(animInfo); 
	    	}	    		
	    }		
	
	return animInfoList; 
}


function GX_UpdateAnimUIGrid(){
	gLastItemDisabled = 0; 
	$('#jqxAnimgrid').jqxGrid('clear');
	gAnimInfoList = GX_GetAnimInfoList(); 
	if(gAnimInfoList.length > 0){
		gAnimInfoTableSource.localdata = gAnimInfoList; 
		$('#jqxAnimgrid').jqxGrid('updatebounddata', 'cells');
	}	
	//also update the refanimation list
	/*
	var animList =[]; 
	for(j=0; j < gAnimInfoList.length; j++){
		animList.push(gAnimInfoList[j].title); 
	}
	*/
	 var animList =[];
	 for(var j=0; j < gAnimInfoList.length; j++){
 		animList.push(gAnimInfoList[j].title); 
 	}	
	if(gRefAnimListDDL)
		WAL_UpdateDropDownList(gRefAnimListDDL.id, animList);
		
	
	//gRefAnimListDDL.gRefAnimListDDL
	
}


/*
function GX_OnAnimationEndHandler(evt){	
	 gCurrAnimNode = evt.target; 	 
	 setTimeout(function(){		
		 gCurrAnimNode.setAttribute('fill', 'remove');
		 GX_RestoreAnimationObject(gCurrAnimNode.id); 
		 GX_RestoreMotionObject(gCurrAnimNode);
		 gbAnimationEnd = true; 		
		}, 
		gAnimEndTimer); 
}
*/

function GX_OnAnimationEndHandler(evt)
{	
	// Debug_Message('Énd of Animation Path'); 
	 gCurrAnimNode = evt.target; 	 
	 setTimeout(function(){		
		 gCurrAnimNode.setAttribute('fill', 'remove');
		 GX_RestoreAnimationObject(gCurrAnimNode.id); 
		 GX_RestoreMotionObject(gCurrAnimNode);
		 if(gRotAnimTransfValue){
			 gRotAnimObjectNode.setAttribute('transform', gRotAnimTransfValue); 
			 gRotAnimTransfValue =0; 
			 gRotAnimObjectNode = 0; 
		 }
		 gbAnimationEnd = true; 		
		}, 
		gAnimEndTimer); 
}

function GX_ResetAnimSelection(){
	WAL_ClearGridSelection('jqxAnimgrid');
	gCurrentAnimInfo = 0; 
}

function GX_HideNewAnimPreview(bFlag){
	
	//hide all the svg elements 
	if(bFlag == true){
		$('.SVG_PATH_OBJECT_PREVIEW').hide(); 
		$('.SVG_SHAPE_OBJECT_PREVIEW').hide(); 
	}
	else{
		$('.SVG_PATH_OBJECT_PREVIEW').show(); 
		$('.SVG_SHAPE_OBJECT_PREVIEW').show(); 
	}
		
}

function GX_NewAnimPreview(event){
	//get the animtype 
	GX_HideNewAnimPreview(true); 
	var animType =  WAL_getDropdownListSelection('newAnimTypeDDL');
	animType = gAttrList[animType];
	var animID = 0; 
	var objID = 0; 
	animID = 'ANIM_' + animType; 
	var animNode = document.getElementById(animID); 
	//now get to the appropriate animation object 
	switch(animType){
	
	case 'rotate':
		//form proper animation id 		
		objID = animNode.getAttribute('xlink:href'); 
		objID = objID.substring(1, objID.length); 		
		$('#' + objID).show(); 
		//now call the 		
		break; 
	case 'pathmotion':
		var animNode1 = animNode.childNodes[0];
		objID = animNode1.getAttribute('xlink:href'); 
		objID = objID.substring(1, objID.length); 		
		$('#' + objID).show(); 
		$('#SVG_1059').show(); 
		break; 
	case 'ANIMATE_PATH':
		var animNode1 = animNode.childNodes[0];
		objID = animNode1.getAttribute('xlink:href'); 
		objID = objID.substring(1, objID.length); 		
		$('#' + objID).show();		
		break;	
	case 'opacity':
	case 'skewX':
	case 'skewY':
	case 'scale':
	case 'translate':
		objID = animNode.getAttribute('xlink:href'); 
		objID = objID.substring(1, objID.length); 		
		$('#' + objID).show(); 
		break;	
	case 'ANIMATE_ZOOM':
		var animNode1 = animNode.childNodes[0];
		objID = animNode1.getAttribute('xlink:href'); 
		objID = objID.substring(1, objID.length); 		
		$('#' + objID).show();		
		break; 
	default:
		break; 
	}
	GX_PreviewAnimation(animID); 
	//get the reference object ID 
	//make it visible 
	//call the begin element and animate 
}


function GX_InitializeAnimationListItems(selectionType, bPolygonFlag){
	
	if( (gCurrDisabledAnimItemArr) && (gCurrDisabledAnimItemArr.length > 0)){
		//first of all check enable the previously disabled items 
		for(var i=0; i < gCurrDisabledAnimItemArr.length; i++){
			WAL_enableDropdownListItem('newAnimTypeDDL',gCurrDisabledAnimItemArr[i]); 
		}
	}
	gCurrDisabledAnimItemArr = gAnimItemDisabledList[selectionType];
	if(!gCurrDisabledAnimItemArr)
		return; 
	for(var i=0; i < gCurrDisabledAnimItemArr.length; i++){
		WAL_disableDropdownListItem('newAnimTypeDDL',gCurrDisabledAnimItemArr[i]); 
	}
		//then disable new items 
		
		if(bPolygonFlag == true){
			WAL_enableDropdownListItem('newAnimTypeDDL', 0); 
		}
	
}

function GX_GetBeginValue(animNode){
	var descAnimID = 'DESC_' + animNode.id; 
	var descNode = document.getElementById(descAnimID);	
	if(descNode)
		var beginval = descNode.classList[0];
	else
		var beginval = "0s"; 
	return beginval; 
}