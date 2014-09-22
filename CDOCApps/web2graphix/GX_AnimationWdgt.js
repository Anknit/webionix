
var gInputHeight = '24';
var bAnimWdgtCreated = false; 
sAnimParams.prototype.animID = 0;
sAnimParams.prototype.objectID = 0; 
sAnimParams.prototype.duration = 0;
sAnimParams.prototype.animType =''; //ANIM_ATTRIBUTE, ANIM_MOTION,ANIM_TRANSFORM
sAnimParams.prototype.attribute = ''; 
sAnimParams.prototype.startValue='';
sAnimParams.prototype.endValue='';
sAnimParams.prototype.refPathID=0;
sAnimParams.prototype.PathObjectOffset=0;
sAnimParams.prototype.PathStartPoint=0;
sAnimParams.prototype.visibleAnimID=0;
sAnimParams.prototype.bPathVisible=true; 
sAnimParams.prototype.originalPosition=0;
sAnimParams.prototype.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
sAnimParams.prototype.startTime=0; 
sAnimParams.prototype.UIEventType = 'M_CLICK';
sAnimParams.prototype.UIObjectID = ''; 
sAnimParams.prototype.AnimEventType='END' ;//BEGIN, END
sAnimParams.prototype.refAnimID='' ;
sAnimParams.prototype.calcMode='linear'; 
sAnimParams.prototype.restart = 'never';
sAnimParams.prototype.repeatCount = 0; 
sAnimParams.prototype.endState = 'freeze'; //FREEZE, REMOVE
sAnimParams.prototype.center = ''; 

function sAnimParams() {	
	sAnimParams.prototype.animID = 0;
	sAnimParams.prototype.objectID = 0; 
	sAnimParams.prototype.duration = 0;
	sAnimParams.prototype.animType =''; //ANIM_ATTRIBUTE, ANIM_MOTION,ANIM_TRANSFORM
	sAnimParams.prototype.attribute = ''; 
	sAnimParams.prototype.startValue='';
	sAnimParams.prototype.endValue='';
	sAnimParams.prototype.refPathID=0;
	sAnimParams.prototype.PathObjectOffset=0;
	sAnimParams.prototype.PathStartPoint=new sPoint();
	sAnimParams.prototype.visibleAnimID=0;
	sAnimParams.prototype.bPathVisible=true; 
	sAnimParams.prototype.originalPosition=0;
	sAnimParams.prototype.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
	sAnimParams.prototype.startTime=0; 
	sAnimParams.prototype.UIEventType = 'M_CLICK'; //M_CLICK, M_MOVE 
	sAnimParams.prototype.UIObjectID = ''; 
	sAnimParams.prototype.AnimEventType='END' ;//BEGIN, END
	sAnimParams.prototype.refAnimID='' ;
	sAnimParams.prototype.calcMode='linear'; 
	sAnimParams.prototype.restart = 'never';
	sAnimParams.prototype.repeatCount = 0; 
	sAnimParams.prototype.endState = 'freeze'; //FREEZE, REMOVE	
	sAnimParams.prototype.center = '';  //centre of rotation 
	sAnimParams.prototype.title = ''; 
}

var gAnimEndTimer = 100; 
var gbAnimationEnd =  true; 
var gInitAnimParam = 0; 
var gObjectList = 0; 
var gAnimList = 0; 
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
gAttrList['Move'] = 'translate';
gAttrList['Rotate'] = 'rotate';
gAttrList['Hor. Skew'] = 'skewX';
gAttrList['Vert. Skew'] = 'skewY';

var gReverseAttrList =[]; 
gReverseAttrList['fill']           =  'Fill-Color'     ; 
gReverseAttrList['stroke']         =  'Stroke-Color'   ; 
gReverseAttrList['fill-opacity']   =  'Opacity'  ; 
gReverseAttrList['visibility']     =  'Visibility'  ; 
gReverseAttrList['stroke-width']   =  'Stroke-Width' ;
gReverseAttrList['translate']      =  'Move'   ;
gReverseAttrList['rotate']         =  'Rotate' ;
gReverseAttrList['skewX']          =  'Hor. Skew';
gReverseAttrList['skewY']          =  'Vert. Skew';        

function GX_SetAnimParamOnUI(animParam) {

  /*  gInitAnimParam = new sAnimParams();
    gInitAnimParam.animID = animParam.animID;
    gInitAnimParam.objectID = animParam.objectID;
    gInitAnimParam.duration = animParam.duration;
    gInitAnimParam.animType = animParam.animType;
    gInitAnimParam.attribute = animParam.attribute;
    gInitAnimParam.startValue = animParam.startValue;
    gInitAnimParam.endValue = animParam.endValue;
    gInitAnimParam.refPathID = animParam.refPathID;
    gInitAnimParam.bPathVisible = animParam.bPathVisible;
    gInitAnimParam.startType = animParam.startType;
    gInitAnimParam.startTime = animParam.startTime;
    gInitAnimParam.UIEventType = animParam.UIEventType;
    gInitAnimParam.UIObjectID = animParam.UIObjectID;
    gInitAnimParam.AnimEventType = animParam.AnimEventType;
    gInitAnimParam.refAnimID= animParam.refAnimID;
    gInitAnimParam.calcMode = animParam.calcMode;
    gInitAnimParam.restart = animParam.restart;
    gInitAnimParam.repeatCount = animParam.repeatCount;
    gInitAnimParam.endState = animParam.endState;  
    gInitAnimParam.title = animParam.title;
    */
      
	
    WAL_UpdateDropDownList('objectlistDDL', gObjectList);
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
        WAL_SetItemByValueInList('animAttrDDL', itemvalue, true);
        //animParam.startValue
        
      //here should be the switch statement
		switch(animParam.attribute)
		{		
		case 'fill':
		case 'stroke':		
			WAL_setTextInputValue('startColValIP', animParam.startValue, false);
			WAL_setTextInputValue('endColValIP', animParam.endValue, false);							
			break;
		case 'fill-opacity':			
			WAL_setNumberInputValue('startOpacityValueIP', animParam.startValue, false);
			WAL_setNumberInputValue('endOpacityValueIP', animParam.endValue, false);	
			//continue from here next time			
			break; 
		case 'visibility':
			WAL_SetItemByValueInList('startVisibilityValueDDL',animParam.startValue, true ); 
			WAL_SetItemByValueInList('endVisibilityValueDDL',animParam.endValue, true );					
			break; 
		case 'stroke-width':
			WAL_setNumberInputValue('startStrokeWidthValueIP', animParam.startValue, false); 
			WAL_setNumberInputValue('endStrokeWidthValueIP', animParam.endtValue, false);				
			break; 
		case 'translate':			
			var valarr  = animParam.startValue.split(" "); 
			WAL_setNumberInputValue('startPosXIP', valarr[0], false); 
			WAL_setNumberInputValue('startPosYIP', valarr[1], false);			
			valarr  = animParam.endValue.split(" "); 
			WAL_setNumberInputValue('endPosXIP', valarr[0], false); 
			WAL_setNumberInputValue('endPosYIP', valarr[1], false);			
			break; 
		case 'rotate':
			WAL_setNumberInputValue('startAngleValueIP', animParam.startValue, false); 
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);					
			break; 
		case 'skewX':
			WAL_setNumberInputValue('startAngleValueIP', animParam.startValue, false); 
			WAL_setNumberInputValue('endAngleValueIP', animParam.endValue, false);	
			break;
		case 'skewY':
			WAL_setNumberInputValue('startAngleValueIP', animParam.startValue, false); 
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

    // animParam.startType = 'ON_TIME'; //ON_TIME, ON_UIEVENT, ON_ANIMEVENT
    if (animParam.startType == 'ON_TIME') {
        WAL_setradioButtonCheck('timeRB', true);         
        //animParam.startTime = 0;
        WAL_setNumberInputValue('startTimeIP', animParam.startTime, false);
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
        //animParam.AnimEventType = 'END'; //BEGIN, END
        WAL_SetItemByValueInList('animeventlistDDL', animParam.AnimEventType, true);
        //animParam.AnimID = 0;
        var animInfo = GX_GetAnimInfoByID(animParam.refAnimID); 
        if(!animInfo)
        	return;        
        WAL_SetItemByValueInList('animlistDDL', animInfo[5], true);   
    }
    // animParam.calcMode = 'linear';
    WAL_SetItemByValueInList('calcmodelistDDL', animParam.calcMode, true);
    //animParam.restart = 'never';
    WAL_SetItemByValueInList('restartlistDDL', animParam.restart, true);
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
		//animParam.startValue = WAL_getInputValue('startColValIP');
		//animParam.endValue = WAL_getInputValue('endColValIP');
		
		//here should be the switch statement
		switch(itemval)
		{		
		case 'fill':
		case 'stroke':
			animParam.startValue = WAL_getInputValue('startColValIP');
			animParam.endValue = WAL_getInputValue('endColValIP');					
			break;
		case 'fill-opacity':
			animParam.startValue = WAL_getMaskedInputValue('startOpacityValueIP'); 
			animParam.endValue = WAL_getMaskedInputValue('endOpacityValueIP');
			break; 
		case 'visibility':
			animParam.startValue = WAL_getDropdownListSelection('startVisibilityValueDDL');
			animParam.endValue = WAL_getDropdownListSelection('endVisibilityValueDDL');			
			break; 
		case 'stroke-width':
			animParam.startValue = WAL_getMaskedInputValue('startStrokeWidthValueIP'); 
			animParam.endValue = WAL_getMaskedInputValue('endStrokeWidthValueIP');			
			break; 
		case 'translate':
			var value = WAL_getMaskedInputValue('startPosXIP') + ' ' + WAL_getMaskedInputValue('startPosYIP');;
			animParam.startValue =  value; 
			
			var value = WAL_getMaskedInputValue('endPosXIP') + ' ' + WAL_getMaskedInputValue('endPosYIP');;
			animParam.endValue =  value;
			break; 
		case 'rotate':
			animParam.startValue = WAL_getMaskedInputValue('startAngleValueIP'); 
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');			
			break; 
		case 'skewX':
			animParam.startValue = WAL_getMaskedInputValue('startAngleValueIP'); 
			animParam.endValue = WAL_getMaskedInputValue('endAngleValueIP');	
			break;
		case 'skewY':
			animParam.startValue = WAL_getMaskedInputValue('startAngleValueIP'); 
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
	 bRBState = WAL_getradioButtonCheckState('timeRB');
	 if(bRBState == true)
	 {
		 animParam.startType = 'ON_TIME'; 
		 animParam.startTime = WAL_getMaskedInputValue('startTimeIP');	
	 }
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
	 animParam.calcMode = WAL_getDropdownListSelection('calcmodelistDDL'); 
	 animParam.restart = WAL_getDropdownListSelection('restartlistDDL');
	 animParam.repeatCount = WAL_getMaskedInputValue('repeatcountIP');
	 animParam.endState = WAL_getDropdownListSelection('endstatelistDDL');	 
	 return animParam; 
}

 function GX_CreateAnimationWidget(wdgtID)
 {
                WAL_createModelessWindow(wdgtID, '380', '565', 'myOK', 'myCancel');
                WAL_CreateTextInput('animIDIP', '100', gInputHeight,true, ''); 
               
                WAL_CreateTextInput('objectIDIP', '100', gInputHeight,true, ''); 
                
                WAL_CreateTextInput('animtitleIP', '100', gInputHeight,false, '');
                WAL_setTextInputValue('animtitleIP', 'Default', true);
                
                //WAL_createNumberInput('durationIP', '100', gInputHeight, 'GX_AnimDlgEditHdlr', true, 100, 1, 1);
                
                WAL_createDecimalNumberInput("durationIP", '100px', gInputHeight, "GX_AnimDlgEditHdlr",true, 10.0,0.0,0.1);
                WAL_setNumberInputValue('durationIP', 2, false); 
                
                WAL_createTab('animTabContent', '380', 'GX_AnimTabHandler');
                WAL_createRadioButton('attrvalbtn', 'GX_AnimDlgRadioValueChangeHdlr', '140', '20', false, false);
               
              /*  var attrList = ['fill', 'stroke', 'fill-opacity', 'visibility', 'stroke-width','translate', 'rotate', 'skewX','skewY'];
                                */
                
                var attrList = ['Fill-Color', 'Stroke-Color', 'Opacity', 'Visibility', 'Stroke-Width', 'Move', 'Rotate', 'Hor. Skew', 'Vert. Skew']; 
                
                WAL_createDropdownList('animAttrDDL', '120', gInputHeight, false, attrList, "GX_AnimAttrListHandler", '100');
                
                WAL_CreateTextInput('startColValIP', '80', gInputHeight,false, 'GX_AnimDlgEditHdlr');
                WAL_setTextInputValue('startColValIP', '', true);
                
                WAL_CreateTextInput('endColValIP', '80', gInputHeight,false, 'GX_AnimDlgEditHdlr');
                WAL_setTextInputValue('endColValIP', '', true);
                
                WAL_createButton('startanimcolbtn', 'GX_AnimDlgBtnHdlr', '50', 24, true);          
                WAL_createButton('endanimcolbtn', 'GX_AnimDlgBtnHdlr', '50', 24, true); 
                
                WAL_createDecimalNumberInput("startOpacityValueIP", '80px', gInputHeight, "GX_AnimDlgEditHdlr",true, 1.0,0.0,0.1);
                WAL_setNumberInputValue('startOpacityValueIP', 1.0, false); 
                WAL_createDecimalNumberInput("endOpacityValueIP", '80px', gInputHeight, "GX_AnimDlgEditHdlr",true, 1.0,0.0,0.1);
                WAL_setNumberInputValue('endOpacityValueIP', 1.0, false); 
                
                var valuelist = ['visible', 'hidden']; 
                WAL_createDropdownList('startVisibilityValueDDL', '120', gInputHeight, false, valuelist, "GX_AnimAttrListHandler", '50');
                WAL_createDropdownList('endVisibilityValueDDL', '120', gInputHeight, false, valuelist, "GX_AnimAttrListHandler", '50');
                               
                WAL_createNumberInput("startStrokeWidthValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 15, 1, 1);
                WAL_setNumberInputValue('startOpacityValueIP', 1, false); 
                
                WAL_createNumberInput("endStrokeWidthValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 15, 1, 1);
                WAL_setNumberInputValue('endStrokeWidthValueIP', 1, false); 
                
                WAL_createNumberInput("startPosXIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 500, -500, 1);
                WAL_setNumberInputValue('startPosXIP', 1, false); 
                
                WAL_createNumberInput("startPosYIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 500, -500, 1);
                WAL_setNumberInputValue('startPosYIP', 1, false); 
                
                WAL_createNumberInput("endPosXIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 500, -500, 1);
                WAL_setNumberInputValue('endPosXIP', 1, false); 
                
                WAL_createNumberInput("endPosYIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 500, -500, 1);
                WAL_setNumberInputValue('endPosYIP', 1, false); 
                
                WAL_createNumberInput("startAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, 0, 1);
                WAL_setNumberInputValue('startAngleValueIP', 0, false);
                
                WAL_createNumberInput("endAngleValueIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 360, 0, 1);
                WAL_setNumberInputValue('endAngleValueIP', 0, false);                
                      
                WAL_createRadioButton('motionvalbtn', 'GX_AnimDlgRadioValueChangeHdlr', '130', '20', false, false);
                var pathList = ['SVG_001', 'SVG_103', 'SVG_234']; 
                WAL_createDropdownList('pathlistDDL', '120', gInputHeight, false, pathList, "GX_PathListHandler", '50');          
                WAL_createCheckBox('pathvisibilityCB', 'GX_AnimDlgCBHdlr', '30', '24', '14', false, true);
                WAL_setradioButtonCheck('motionvalbtn', true);
                WAL_setradioButtonCheck('attrvalbtn', true); 
                WAL_createNumberInput("offsetFromPathX", '60px', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
                WAL_setNumberInputValue('offsetFromPathX', 0, false); 
                WAL_createNumberInput("offsetFromPathY", '60', gInputHeight, "GX_AnimDlgEditHdlr",true, 50,-50,1);
                WAL_setNumberInputValue('offsetFromPathY', 0, false); 
                
                
                WAL_createButton('previewbtn', 'GX_AnimDlgBtnHdlr', '58', 24, true);
                WAL_createButton('showlistbtn', 'GX_AnimDlgBtnHdlr', '70', 24, true);
                
                WAL_createRadioButton('timeRB', 'GX_AnimDlgRadioValueChangeHdlr', '110', '20', false, false);
                WAL_createDecimalNumberInput("startTimeIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 10.0,0.0,0.1);
                
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
                	animlist.push(gAnimList[k][0]); 
            	}
                
                WAL_createDropdownList('animlistDDL', '135', gInputHeight, false, animlist, "GX_AnimAttrListHandler", '50');
                
                var calclist = ['linear', 'spline', 'discrete']; 
                WAL_createDropdownList('calcmodelistDDL', '100', gInputHeight, false, calclist, "GX_AnimAttrListHandler", '50');       
                
                var restartlist = ['never', 'always', 'whenNotActive']; 
                WAL_createDropdownList('restartlistDDL', '130', gInputHeight, false, restartlist, "GX_AnimAttrListHandler", '50');
                
                WAL_createNumberInput("repeatcountIP", '58px', gInputHeight, "GX_AnimDlgEditHdlr",true, 100, 0, 1);
                
                var endstatelist = ['freeze', 'remove']; 
                WAL_createDropdownList('endstatelistDDL', '80', gInputHeight, false, endstatelist, "GX_AnimAttrListHandler", '50');            
             
                WAL_setradioButtonCheck('animeventRB', true); 
                WAL_setradioButtonCheck('uieventRB', true); 
                WAL_setradioButtonCheck('timeRB', true); 
                
                WAL_createColorPickerWindow("animcolorpickwidget", "animcolorpicker", '350', '250', "animokbtn", "animcancelbtn");
                
                bAnimWdgtCreated = true; 
                               
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
 	} 		
 	return ObjectList;  	
 	
 }
 
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
				attr = 'MOTION';  	 	 				
			}
				
			var beginval = animNode.getAttribute('begin'); 
			var endval = animNode.getAttribute('fill');
			
			var titleval = GX_GetAnimTitle(animNode); 
			var animInfo = [animNode.id,animNode.targetElement.id, attr, beginval, endval, titleval]; 
			animNode.setAttribute('begin', ''); 
			animNode.setAttribute('fill', 'remove'); 
			
			//now check if its an existing entry or a new entry
			var index = GX_GetIndexofAnimInfoFromList(animNode.id);
			if(index == -1)
			{
				gAnimList.push(animInfo); 	
			}					
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
	var animlist=[];
 	for(var k=0; k < gAnimList.length; k++)
 	{
 		animlist.push(gAnimList[k][5]); 
 	}
 	
	WAL_UpdateDropDownList('listanimDDL', animlist);
	WAL_SetItemInDropDownList('listanimDDL', 0, true);
	
}

 function GX_AnimTabHandler()
 {
	 
 }
 
 function GX_AnimAttrListHandler(Node, value)
 {
	 var nodeid = Node.id;
	 if(nodeid == 'animAttrDDL')
	 {
		 var itemval = gAttrList[value]; 
		 var JQSel = '.ATTR_UI_GROUP'; 
		 $(JQSel).hide(); 		
		 if( (itemval == 'fill') || (itemval == 'stroke') )
		 {
			 JQSel = '#COLORATTR_UI_GROUP'; 
			 $(JQSel).show(); 
			 WAL_disableWidget('startanimcolbtn', 'data-jqxButton', false, false);
			 gCurrAttrname = itemval;
			 WAL_disableWidget('endanimcolbtn', 'data-jqxButton', false, false);			 
			WAL_setTextInputValue('startColValIP','', false);
			WAL_setTextInputValue('endColValIP', '', false);		
			 
		 }
		 if(itemval == 'fill-opacity')
		 {
			 JQSel = '#OPACITY_UI_GROUP'; 
			 $(JQSel).show(); 
			WAL_setNumberInputValue('startOpacityValueIP', 0.0, false);
			WAL_setNumberInputValue('endOpacityValueIP', 1.0, false);	
		 }
		 if(itemval == 'visibility')
		 {
			 JQSel = '#VISIBLE_UI_GROUP';
			 $(JQSel).show();		
			WAL_SetItemByValueInList('startVisibilityValueDDL','hidden', true ); 
			WAL_SetItemByValueInList('endVisibilityValueDDL','visible' , true);	
		 }
		 if(itemval == 'stroke-width')
		 {			 
			 JQSel = '#STROKE_WIDTH_UI_GROUP';
			 $(JQSel).show();		
			WAL_setNumberInputValue('startStrokeWidthValueIP', 1, false); 
			WAL_setNumberInputValue('endStrokeWidthValueIP', 8, false);	
		 }
		 if(itemval == 'translate')
		 {			 
			 JQSel = '#TRANSLATE_UI_GROUP';
			 $(JQSel).show();	
			 WAL_setNumberInputValue('startPosXIP', 0, false); 
			 WAL_setNumberInputValue('startPosYIP', 0, false);			
			 WAL_setNumberInputValue('endPosXIP', 100, false); 
			 WAL_setNumberInputValue('endPosYIP', 0, false);	
		 }
		 if( (itemval == 'rotate') || (itemval == 'skewX')||(itemval == 'skewY') )
		 {			 
			 JQSel = '#ANGLE_UI_GROUP';
			 $(JQSel).show();		
			WAL_setNumberInputValue('startAngleValueIP', 0, false); 
			WAL_setNumberInputValue('endAngleValueIP', 30, false);	
		 }
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
			WAL_disableWidget('startColValIP', 'data-jqxInput', false, false);
			WAL_disableWidget('endColValIP', 'data-jqxInput', false, false);	
			WAL_disableWidget('startanimcolbtn', 'data-jqxButton', false, true);
			WAL_disableWidget('endanimcolbtn', 'data-jqxButton', false, true);
		}
		else
		{
			WAL_disableWidget('animAttrDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('startColValIP', 'data-jqxInput', false, true);
			WAL_disableWidget('endColValIP', 'data-jqxInput', false, true);
			WAL_disableWidget('startanimcolbtn', 'data-jqxButton', false, true);
			WAL_disableWidget('endanimcolbtn', 'data-jqxButton', false, true);
			
		}
	}
	else if(radioID == 'motionvalbtn')
	{
		if(state == true)
		{
			WAL_disableWidget('pathlistDDL', 'data-jqxDropDownList', false, false);
			WAL_disableWidget('pathvisibilityCB', 'data-jqxCheckBox', false, false);			
		}
		else
		{
			WAL_disableWidget('pathlistDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('pathvisibilityCB', 'data-jqxCheckBox', false, true);			
		}
	}
	else if(radioID == 'timeRB')
	{
		if(state == true)
		{			
			WAL_disableWidget('startTimeIP', 'data-jqxNumberInput', false, false);					
		}
		else
		{
			WAL_disableWidget('startTimeIP','data-jqxNumberInput', false, true);		
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
			WAL_disableWidget('animlistDDL', 'data-jqxDropDownList', false, false);
		}
		else
		{
			WAL_disableWidget('animeventlistDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('animlistDDL', 'data-jqxDropDownList', false, true);
		}		
	}
 }
 
 function GX_AnimDlgOK()
 {
	var JQSel = "#" + "animtitleIP";	
	var animName  = $(JQSel).val();	
	if(animName == 'Default')
	{
		Debug_Message("Please Assign a Name to the Animation");		
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
		//GX_RestoreMotionObject(gCurrAnimNode);
		//gCurrAnimNode=0;
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
	else
	 {
		 //create a new animation object again 
		GX_AddAnimationElement(gCurrAnimParam); 
	 }
	if(gNewAnimObject == true)
	{
		if(gCurrAnimParam.animType == 'ANIM_MOTION')
		{
			var retval = GXRDE_openSVGFile(gSVGFilename); 
		    var HTMLstr=""; 
		   // var dataNode = document.getElementById('objectcontainer');   	 
		    //dataNode.innerHTML = ''; 
		    var currfilename = gSVGFilename; 
		    var currObjID = gCurrAnimParam.objectID; 
		    if(retval)
		    {
		     GX_CloseSVGFile();
		   	 var dataNode = document.getElementById('objectcontainer');   	 
		   	 dataNode.innerHTML += retval;		   	
		  	 GX_InitializeDocument(currfilename);
		   	// Debug_Message("File Reloaded"); 
		    }	
		    var xmlstr = GXRDE_GetSVGMetaXML(currfilename);    
		    if(xmlstr)
		       GX_updateTreeWidget(xmlstr);   
		    WAL_expandAllTreeItems(gTreeNodeID, true);
		    WAL_setTreeItemSelection(gTreeNodeID, 'TM_'+currObjID);		     
		    GX_MenuItemShow('animate', 'Animate');
		    
		}
	}
	
	if(gNewAnimObject == true)
		gNewAnimObject = false; 
	gbApplied = false;	
	
 } 
 
 
 function GX_AnimDlgCANCEL()
 {
	 
	 if(gbApplied == false)
		 return ; 
	 
	var JQSel = "#" + "animtitleIP";	
	var animName  = $(JQSel).val();	
	if(animName == 'Default')
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
		GX_AddAnimationElement(gInitAnimParam); 
	}
	gbApplied = false;
	
	 
 }
 
 function GX_AnimDlgBtnHdlr(node)
 {
	 var nodeid =  node.id; 
	 if(nodeid == 'startanimcolbtn')
	 {
		    WAL_hideWidget('animcolorpickwidget', true); 
		    if(!gInitAnimParam)
		    	return ; 
			
			if( (gCurrAttrname == 'fill') || (gCurrAttrname == 'stroke') )
			{
				var initColVal = gCurrentObjectSelected.getAttribute(gCurrAttrname); 		
				WAL_showColorPickerWidget('animcolorpickwidget', '', 'startanimcolbtn','value', initColVal, 'startColValIP');				
			}			
	 }
	 else if(nodeid == 'endanimcolbtn')
	 {
		    WAL_hideWidget('animcolorpickwidget', true); 
		    if(!gInitAnimParam)
		    	return ; 
			
			if( (gCurrAttrname == 'fill') || (gCurrAttrname == 'stroke') )
			{
				var initColVal = gCurrentObjectSelected.getAttribute(gCurrAttrname); 		
				WAL_showColorPickerWidget('animcolorpickwidget', '', 'endanimcolbtn','value', initColVal, 'endColValIP');				
			}			
	 }
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
			 gPrevAttributeList = []; 
				 gPrevAttributeList = EL_getObjectAttributes(pathNode);
				 if(state ==  false)
					 GX_SetObjectAttribute(pathNode, 'visibility', 'hidden', true, false);
				 else
					 GX_SetObjectAttribute(pathNode, 'visibility', 'visible', true, false);
		 }		
	 }
 }
 
 function GX_ApplyBtnHdlr(event){	 
	 	 
	var JQSel = "#" + "animtitleIP";	
	var animName  = $(JQSel).val();	
	if(animName == 'Default')
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
		GX_AddAnimationElement(tempAnimParam); 
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
		
		 if(!gInitAnimParam)
		 {
			 Debug_Message("gInitAnimParam NULL"); 
			 return; 
		 }
		
		 if(!gCurrentObjectSelected)
		 {
			 var currObjNode = document.getElementById(gInitAnimParam.objectID); 
			 GX_SetSelection(currObjNode, true); 
		 }		
		 var objDim = GX_GetRectObjectDim(gCurrentObjectSelected);
		 if (node.id == 'offsetFromPathX')
			 objDim.x = new Number(gInitAnimParam.PathStartPoint.x -  objDim.width/2) + diff; 
		 else if (node.id == 'offsetFromPathY')
			 objDim.y = new Number(gInitAnimParam.PathStartPoint.y - objDim.height/2) + diff; 
		// Debug_Message("objDim.y =" + objDim.y );
		 GX_SetRectObjectDim(gCurrentObjectSelected,objDim );
		 gLastPositionValue = value; 
	 }
 }
 
 function GX_AddAnimationElement(animParams)
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
		beginval += animParams.refAnimID + '.end';			
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
		attrData = ['onend',"ChangeAnimateMotionSettings(evt.target);"]; 
		newAttr.push(attrData); 
		GX_AddNewAnimElementInDOM(newAnimID, animParams.objectID,'ANIM_ATTRIBUTE', newAttr); 		
		
		
		attrData = ['refpathid',animParams.refPathID];  
		attrArray.push(attrData);	 
		attrData = ['rotate','auto'];  
		attrArray.push(attrData);			
		
		//NOW CALCULATE THE OFFSET 
		//get the object type 
	/*	var objNode =  document.getElementById(animParams.objectID); 
		var pathNode  = document.getElementById(animParams.refPathID);
		//get the path dim . 
		var objDim =  GX_GetRectObjectDim(objNode); 
		var pathDim = GX_GetPathDimension(pathNode); 
		//calculate the difference of the dimenion points 
		var xoffset, yoffset; 
		xoffset = objDim.x -  pathDim.x; 
		yoffset = objDim.y - pathDim.y + objDim.height/2;
		//put if
		var offset = xoffset + ',' + yoffset;
		*/
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
		/* attrData = ['fill',animParams.endState];  
		 attrArray.push(attrData);
		 attrData = ['begin',beginval];  
		  attrArray.push(attrData);
		  */
		 if(animParams.animType == 'ANIM_ATTRIBUTE')
		 {
			// animcodestr = '<animate id="' + animParams.animID +'" attributeName="'+ animParams.attribute + '" attributeType="XML" calcMode="'+ animParams.calcMode;
			 //animcodestr += '" dur="' + animParams.duration + 's"  from="' + animParams.startValue + '" to="' + animParams.endValue + '"  fill="' +  animParams.endState+ '" restart="'+ animParams.restart+ '" ';
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
				 startval = startval + ' ' + animParams.center; 
				 endval = endval + ' ' + animParams.center; 			 
			 }		    
			 attrData = ['from',startval];  
			 attrArray.push(attrData); 
			    
			 attrData = ['to',endval];  
			 attrArray.push(attrData); 	  		 
		 }
	}	 	
//	 var animstr = GXRDE_addNewAnimationObject(animParams.animID, animParams.objectID, 
//			 animParams.animType, attrArray);	 
	 
	//delete the existing node first 
	GX_AddNewAnimElementInDOM(animParams.animID, animParams.objectID,animParams.animType, attrArray); 
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
	var X = WAL_getMaskedInputValue('offsetFromPathX'); 
	var Y = WAL_getMaskedInputValue('offsetFromPathY'); 
	//var pathDim = GX_GetPathDimension(pathNode); 
		//calculate the difference of the dimenion points 
	/*var xoffset, yoffset; 
	xoffset = origPos.x -  pathDim.x; 
	yoffset = origPos.y - pathDim.y ; // + objDim.height/2;
	//put if
	var offset = xoffset + ',' + yoffset;
	*/	
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
	Debug_Message('Aligning Object'); 
	 
 }
 function GX_AddNewAnimElementInDOM(animID, ObjID, animType, attrArray)
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
 	
 	//gObjectList = GX_PopulateObjectList('ALL_OBJECTS');
 	if(animNode)
 		GX_UpdateAnimInfoInList(animNode); 
 	var animlist=[];
 	for(var k=0; k < gAnimList.length; k++)
 	{
 		animlist.push(gAnimList[k][5]); 
 	}
 	WAL_UpdateDropDownList('listanimDDL', animlist);
 	var index = animlist.length-1; 
 	WAL_SetItemInDropDownList('listanimDDL', index, true); 
			 
 }
 
 function GX_AnimColorWidgetOK(event)
 {
	 var refID = WAL_getColorPickerRefID('animcolorpickwidget');
	 if(refID == 'startanimcolbtn')
	 {
		 var value = WAL_getColorPickerValue('animcolorpickwidget'); 
		 WAL_setTextInputValue('startColValIP', value, false); 
	 }	
	 else if(refID == 'endanimcolbtn')
	 {
		 var value = WAL_getColorPickerValue('animcolorpickwidget'); 
		 WAL_setTextInputValue('endColValIP', value, false); 
	 }	
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
		if(value == 'ANIMATE')
		{
			animParam.animType = 'ANIM_ATTRIBUTE';
			animParam.attribute = animNode.getAttribute('attributeName');
		}		
		else if(value == 'ANIMATETRANSFORM')
		{
			animParam.animType = 'ANIM_TRANSFORM';
			animParam.attribute = animNode.getAttribute('type');
		}
			
		else if(value == 'ANIMATEMOTION')
		{
			animParam.animType = 'ANIM_MOTION';
			//TBD here 
			//gInitAnimParam.refPathID = '';
			//get the mpath link 
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
			animParam.PathStartPoint = GX_GetPathStartPoint(pathNode); 
					
		}
		animParam.startValue = animNode.getAttribute('from'); 
		animParam.endValue = animNode.getAttribute('to');
		
		
		var animInfo  = GX_GetAnimInfoByID(animID);
		//animNode.setAttribute('begin', animInfo[3]); 
		value = animInfo[3]; 
		if(value.length < 1)
		{
			Debug_Message("Begin Value is NULL"); 
			
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
					animParam.AnimEventType = 'END'; 
					value = value.substring(0, index);
					animParam.refAnimID = value;  
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
			if(animParam.AnimEventType == 'END')
			{
				value = animParam.refAnimID + '.end'; 
			}
			else if(animParam.AnimEventType == 'BEGIN')
			{
				value = animParam.refAnimID + '.begin'; 
			}
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
	if(AnimParam2.startType == 'ON_UIEVENT')
	{
		 if(AnimParam1.UIObjectID != AnimParam2.UIObjectID)
		 {
			  beginval += AnimParam2.UIObjectID + '.click';	 
		 }			
	}
	else if(AnimParam2.startType == 'ON_ANIMEVENT')
	{
		if(AnimParam1.refAnimID != AnimParam2.refAnimID)
		{
			beginval += AnimParam2.refAnimID + '.' + AnimParam2.AnimEventType.toLowerCase();	 
		}	
	}
	else if(AnimParam2.startType == 'ON_TIME')
	{
		if(AnimParam1.startTime != AnimParam2.startTime)
		{
			beginval += AnimParam2.startTime + 's';	 
		}	
	}
	if(beginval.length > 0)
	{
		attrData = ['begin',beginval];  
		attrArray.push(attrData);		
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
		 animNode.setAttribute(attrArray[i][0], attrArray[i][1]); 
	 }
	 GX_UpdateAnimInfoInList(animNode); 
 }
 

 function GX_ChangeAnimateMotionSettings(animNode)
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
 }    
 
 
 
 function GX_OnAnimationEndHandler(evt)
 {
	/* var animNode = evt.target; 
	 var objNode =  animNode.parentNode; 
	 var objType = objNode.classList[1]; 
	 var origValueArr = animNode.getAttribute('to'); 
	 origValueArr = origValueArr.split(',')
	 if(objType == 'ELLIPSE')
	 {
		  objNode.setAttribute("cx", origValueArr[0]); 
	      objNode.setAttribute("cy", origValueArr[1]);   
	 }	 
	 animNode.removeAttribute('onend'); 
	 */
	 gCurrAnimNode = evt.target; 
	/* var animTimer = setInterval(function() {
		 GX_AnimEndTimerHandler(); 
     }, gAnimEndTimer); 
	 */
	 
	 
	 setTimeout(function(){			
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
 	//gInitAnimParam = GX_GetAnimParamsFromUI();	
  	//GX_AddAnimationElement(gInitAnimParam); 
	
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
  		GX_ChangeAnimateMotionSettings(animnode);  		 
  	}
  	var animInfo = GX_GetAnimInfoByID(animID); 
  	var restartval =  animnode.getAttribute('restart');
  	animnode.setAttribute('restart', 'whenNotActive');
     animnode.setAttribute('fill', 'freeze'); 
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
 	gCurrAnimNode = document.getElementById(animID); 
 	GXRDE_DeleteObject(animID);	
 	var parentNode = gCurrAnimNode.parentNode; 
 	parentNode.removeChild(gCurrAnimNode); 	
 	GX_RemoveAnimInfoFromList(animID); 
 	gCurrAnimNode = 0; 
 	
 	//now update the lists 
 	
 }
 
 function GX_PreviewBtnHdlr(event)
 {	 
	if(gInitAnimParam)
	{
		 var animID = gInitAnimParam.animID; 
		 GX_PreviewAnimation(animID); 		 
	}
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
	 }
	 else if(objType == "RECTANGLE")
	 {
	  	  objNode.setAttribute("x", origValueArr[0]); 
	      objNode.setAttribute("y", origValueArr[1]);   	  
	 } 
	
 }
 
 function GX_ResetUI(animParam)
 {	 
	 if(gObjectList)
		 WAL_UpdateDropDownList('objectlistDDL', gObjectList);
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
	    if(animParam.title  !=  gAnimList[i][5])
	    	animlist.push(gAnimList[i][5]); 
	}
	WAL_UpdateDropDownList('animlistDDL', animlist);
	WAL_setTextInputValue('animIDIP', animParam.animID, false);
	    // animParam.objectID = 0;
	WAL_setTextInputValue('objectIDIP', animParam.objectID, false);
	    //animParam.duration = 0;
	WAL_setNumberInputValue('durationIP', animParam.duration, false);	    
	WAL_setTextInputValue('animtitleIP', animParam.title, false);	
	WAL_setradioButtonCheck('attrvalbtn', true); 	        
	var itemvalue = gReverseAttrList[animParam.attribute]; 
	WAL_SetItemByValueInList('animAttrDDL', itemvalue, true); 	     
	WAL_setradioButtonCheck('motionvalbtn', false); 
	        //animParam.refPathID = 0;
	WAL_SetItemByValueInList('pathlistDDL', animParam.refPathID, true);
	        // animParam.bPathVisible = true;
	WAL_setCheckBoxValue('pathvisibilityCB', false);	        
	WAL_setNumberInputValue('offsetFromPathX', 0, true);
	WAL_setNumberInputValue('offsetFromPathY', 0, true); 	   
	WAL_setradioButtonCheck('timeRB', true);  	        
	WAL_setNumberInputValue('startTimeIP',0, false);   
	WAL_setradioButtonCheck('uieventRB', false);       
	WAL_setradioButtonCheck('animeventRB', false); 
	   
	    // animParam.calcMode = 'linear';
	WAL_SetItemByValueInList('calcmodelistDDL', animParam.calcMode, true);
	    //animParam.restart = 'never';
	WAL_SetItemByValueInList('restartlistDDL', animParam.restart, true);
	    // animParam.repeatCount = 0;
	WAL_setNumberInputValue('repeatcountIP', animParam.repeatCount, false);
	    // animParam.endState = 'freeze'; //FREEZE, REMOVE
	WAL_SetItemByValueInList('endstatelistDDL', animParam.endState, true);  
 }