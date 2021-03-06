/* ***********
Author: Rajarshi
Creation Date: 29-NOV-2012
Summary : The JS file contains widget abstraction layer (WAL) for CDOC application usage.
Version: Uses the JQXWidget Ver:3.0.4 plus. 
*************************/

/************************************************
createToggleButton(buttonID, handlerFnName) :
--creates a Toggle button.
buttonID : ID of the button 
handlerFnName: name of handler function 

***********************************************/
/*
 * 
 */
var gWidgetType = [];
//the index and the value are same as the widget function names which can be efficiently used for common type of functions
gWidgetType['jqxToggleButton'] = 'data-jqxToggleButton';
gWidgetType['jqxButton']       = 'data-jqxButton';
gWidgetType['jqxCheckBox']     = 'data-jqxCheckBox';
gWidgetType['jqxRadioButton']  = 'data-jqxRadioButton';
gWidgetType['jqxDropDownList'] = 'data-jqxDropDownList';
gWidgetType['jqxTree']         = 'data-jqxTree';
gWidgetType['jqxSplitter']     = 'data-jqxSplitter';
gWidgetType['jqxTooltip']      = 'data-jqxTooltip';
gWidgetType['jqxWindow']       = 'data-jqxWindow';
gWidgetType['jqxColorPicker']  = 'data-jqxColorPicker';
gWidgetType['jqxMenu']         = 'data-jqxMenu';
gWidgetType['jqxSlider']       = 'data-jqxSlider';
gWidgetType['jqxNumberInput']  = 'data-jqxNumberInput';
gWidgetType['resizable']       = 'data-resizable';
gWidgetType['draggable']       = 'data-draggable';
gWidgetType['jqxButtonGroup']  = 'data-jqxButtonGroup';
gWidgetType['customButton']    = 'data-customButton';
gWidgetType['jqxInput']        = 'data-jqxInput';

var bTreeWidgetDisplay = true; 

var gDummyNode = 0; 

var gTheme = 0;
var gInitialized = false; 
var gLastClickedButtonNodeID = 0; 
var gUIBlock = false; 
var gInitColorValue = 0; 
var gTargetColorObj = 0; 
var gTargetAttrname = 0;
var gLastSelected = 0; 
var gMenuSelectionCol = '#c6d600'; //#c6d6ec
var gTooltipHideDelay = 2000; 
var gCurrentTooltipOwnerID = 0; 
var gCurrTooltipID = 0; 
var gContextTooltip =  true; 
var gbContextMenuShow = false; 
var gCMLeftPos = 0; 
var gCMTopPos = 0; 
function WAL_Initialize() {
    if(!gTheme)
      gTheme = getTheme();   
    gTheme = 'mygrey' ;//'bootstrap';     
    gInitialized = true;
}


function WAL_resetEventHandler(elementID, eventName) {

    var JQSel = "#"+elementID;

    if (eventName == "ALL") {
        $(JQSel).off();
    }
    else {
        $(JQSel).off(eventName); 
    }
    
      
}

function WAL_IsWidgetCreated(ID, widgetType) {
    var bExist;
    //if the creation has alresdy happened then dont bother to create again. this way any multiple creation can be avoided
    var JQSel = "#" + ID;
    bExist = $(JQSel).attr(widgetType);
    if (bExist == "true")
        return true;
        
    return false;
}

function WAL_hideWidget(ID, bFlag) {
   var JQSel = "#" + ID;   
   if(bFlag == true)
   {
	   $(JQSel).attr('data-visible','false') ;
	   $(JQSel).hide(); 
    }
   else
   {
	   $(JQSel).attr('data-visible','true') ;
	   $(JQSel).show();  
   }
  
}

function WAL_IsWidgetVisible(ID)
{
	var JQSel = "#" + ID;
	var bFlag = $(JQSel).attr('data-visible'); 
	if(bFlag == 'true')
		return true;
	else
		return false; 
	
}


function WAL_IsWidgetDisabled(ID, WidgetType)
{
	var JQSel;	
   	JQSel = "#"+ID;
   	var state; 
   	switch (WidgetType) {
    case 'data-jqxToggleButton':
       // $(JQSel).jqxToggleButton('toggle');
    	state = $(JQSel).jqxToggleButton('disabled');
        break;
    case 'data-jqxButton':           
    	state = $(JQSel).jqxButton('disabled');
        break;
    case 'data-jqxButtonGroup':           
    	state = $(JQSel).jqxButtonGroup('disabled');
        break;
    case 'data-jqxCheckBox':           
    	state = $(JQSel).jqxCheckBox('disabled');
        break;
    case 'data-jqxRadioButton':
    	state = $(JQSel).jqxRadioButton('disabled');
        break;
    case 'data-jqxDropDownList':
    	state = $(JQSel).jqxDropDownList('disabled');
        break;
    case 'data-jqxTree':
    	state = $(JQSel).jqxTree('disabled');
        break;
    case 'data-jqxSplitter':
    	state = $(JQSel).jqxSplitter('disabled');
        break;
    case 'data-jqxWindow':
    	state = $(JQSel).jqxWindow('disabled');
        break;
    case 'data-jqxMenu':
    	state = $(JQSel).jqxMenu('disabled');
    	//$(JQSel).attr('disabled', 'disabled'); 
        break;
    case 'data-jqxSlider':
    	state = $(JQSel).jqxSlider('disabled');
        break;
    case 'data-jqxNumberInput':
    	state = $(JQSel).jqxNumberInput('disabled');
        break;
    case 'data-jqxInput':
    	state = $(JQSel).jqxInput('disabled');
    	break;
    case 'data-resizable':
    	state = $(JQSel).resizable('disabled');
        break;
    case 'data-draggable':
        state = $(JQSel).draggable('disabled');
        break;           
        
    case 'data-customButton':
    	 var bDisableFlag = $(JQSel).attr('disabled');
         if (bDisableFlag)
             return true;
         else 
        	 return false;
        break; 
    default:
    	var bDisableFlag = $(JQSel).attr('disabled');
    	if (bDisableFlag)
    		return true;
    	else 
    		return false;     
        break;
   }
   	
   	return state ; 
}
function WAL_disableWidget(ID, WidgetType, bGroup, bFlag) {
	var JQSel; 
	if(bGroup ==  true)
		JQSel = "."+ID;
   	 //JQSel = "div."+ID;
    else
   	 JQSel = "#"+ID;	
	
	var divNode =  null; 
	if(bGroup != true)
		var divNode = document.getElementById(ID)
	//check if the diabling is already there to avoid multiple operations issues
	//var state = WAL_IsWidgetDisabled(ID, WidgetType);			
   
    switch (WidgetType) {
        case 'data-jqxToggleButton':
           // $(JQSel).jqxToggleButton('toggle');
            $(JQSel).jqxToggleButton({ 'disabled': bFlag });
            break;
        case 'data-jqxButton':           
            $(JQSel).jqxButton('disabled', bFlag);
            break;
        case 'data-jqxCheckBox':           
            $(JQSel).jqxCheckBox('disabled', bFlag);
            break;
        case 'data-jqxRadioButton':
            $(JQSel).jqxRadioButton('disabled', bFlag);
            break;
        case 'data-jqxDropDownList':
            $(JQSel).jqxDropDownList({ 'disabled': bFlag });
            break;
        case 'data-jqxTree':
            $(JQSel).jqxTree({ 'disabled': bFlag });
            break;
        case 'data-jqxSplitter':
            $(JQSel).jqxSplitter({ 'disabled': bFlag });
            break;
        case 'data-jqxWindow':
            $(JQSel).jqxWindow({ 'disabled': bFlag });
            break;
        case 'data-jqxMenu':
            $(JQSel).jqxMenu({ 'disabled': bFlag });
        	//$(JQSel).attr('disabled', 'disabled'); 
            break;
        case 'data-jqxSlider':
            $(JQSel).jqxSlider({ 'disabled': bFlag });
            break;
        case 'data-jqxNumberInput':
            $(JQSel).jqxNumberInput({ 'disabled': bFlag });
            break;
        case 'data-jqxInput':
            $(JQSel).jqxInput({ 'disabled': bFlag });
            break;        
        case 'data-resizable':
            $(JQSel).resizable({disabled: bFlag});
            if(divNode)
            	divNode.style.opacity = '1.0';  
            break;
        case 'data-draggable':
            $(JQSel).draggable({disabled: bFlag});
            if(divNode)
            	divNode.style.opacity = '1.0';     
            break;    
        case 'data-jqxButtonGroup':        
        	$(JQSel).jqxButtonGroup({disabled: bFlag});
        	break; 
        case 'data-customButton':
        	if(bGroup ==  false)
        		DisableCustomButton(ID, bFlag);
        	break; 
        case 'data-jqxSlider':
        	$(JQSel).jqxSlider({disabled: bFlag});
        	break; 
        default:
            if (bFlag == true)
                $(JQSel).attr("disabled", "disabled");
            else
                $(JQSel).removeAttr("disabled");
        	
            break;
    }
}

function WAL_DisableItemInButtonGroup(btnGrpID, btnID, bDisable)
{
	return ; 

	//first get the Index of the button within group 
	var Node = document.getElementById(btnID); 
	var parentNode = Node.parentNode;
	var type = parentNode.getAttribute('data-type');
	if(type != 'buttonGroup')
		return ; 
	var nodeList = parentNode.childNodes;
	var indexOffset = 0; 
	for (var i = 0; i < nodeList.length; i++) {

        //IF NODE IS OF TYPE TEXTCONTENT THEN ADD IT TO LENGTH
		var childNode = nodeList.item(i);
		var nodename = childNode.nodeName.toUpperCase(); 
		if(nodename == 'INPUT')
		{
			 var nodeID = childNode.getAttribute('id');
		     if(nodeID == btnID)
		       	break; 
		     indexOffset++; 
		}
               
	}
	var JQSel = "#"+btnGrpID ; 
	if(bDisable ==  true)
		$(JQSel).jqxButtonGroup('disableAt', indexOffset);
	else
		$(JQSel).jqxButtonGroup('enableAt', indexOffset);
	//now traverse the node list 
}

function WAL_enableWidget(ID, WidgetType) {
    var JQSel = "#" + ID;
    if (WidgetType == 'data-jqxToggleButton') {
       $(JQSel).jqxToggleButton('disabled', false);        
    }
    
    //$(JQSel).removeAttr("disable");
}

function WAL_createToggleButton(buttonID, handlerFnName, Width, Height, RCFlag) {

    if(gInitialized != true)
     return;

    var widgetType = gWidgetType['jqxToggleButton'];    
    var JQSel = "#" + buttonID;
    var retval = WAL_IsWidgetCreated(buttonID, widgetType);
    if (retval == true)
        return;

    $(JQSel).jqxToggleButton({ width: Width, height: Height, toggled: true, theme: gTheme });
    $(JQSel).attr(widgetType, "true");

   
    
    expr = handlerFnName + "()";
    $(JQSel).on('click', function() {
        if (handlerFnName) {
            var expr = handlerFnName + "()";
            eval(expr);
        }
    });
}
function WAL_createButton(buttonID, handlerFnName, Width, Height, RCFlag) {

    if (gInitialized != true)
        return;

    var widgetType = gWidgetType['jqxButton']; 
    var JQSel = "#" + buttonID;
    var retval = WAL_IsWidgetCreated(buttonID, widgetType);
    if (retval == true)
        return;

    $(JQSel).jqxButton({ width: Width, height: Height, theme: gTheme });
    $(JQSel).attr(widgetType, "true");


   

    expr = handlerFnName + "()";

    $(JQSel).on('click', function(event) {
        if (handlerFnName) {
        	var node = event.target; 
            var expr = handlerFnName + "(node)";
            eval(expr);
        }
    });
    
   
}

function WAL_createButtonGroupDefault(buttonGrpID, handlerFnName) {

    if (gInitialized != true)
        return;

    var widgetType = gWidgetType['jqxButtonGroup']; 
    var JQSel = "#" + buttonGrpID;
    var retval = WAL_IsWidgetCreated(buttonGrpID, widgetType);
    if (retval == true)
        return;

    $(JQSel).jqxButtonGroup({ theme: gTheme, mode : 'default', enableHover: true });
    $(JQSel).attr(widgetType, "true");
    

    $(JQSel).on('buttonclick', function(event) {    	
    		if (handlerFnName) {
    			var node = event.args.button; 
            	node = node[0];   
            	var expr = handlerFnName + "(node)";
            	eval(expr);     
            }
    	
        
    });    
   
}

function WAL_createButtonGroupSelectable(buttonGrpID, selectMode, handlerFnNameSelect, handlerFnNameUnSelect) {

    if (gInitialized != true)
        return;

    var widgetType = gWidgetType['jqxButtonGroup']; 
    var JQSel = "#" + buttonGrpID;
    var retval = WAL_IsWidgetCreated(buttonGrpID, widgetType);
    if (retval == true)
        return;

    $(JQSel).jqxButtonGroup({ theme: gTheme, mode : selectMode, enableHover: true });
    $(JQSel).attr(widgetType, "true");
    

    $(JQSel).on('selected', function(event) {
        if (handlerFnNameSelect) {
        	var node = event.args.button; 
        	node = node[0]; 
            var expr = handlerFnNameSelect + "(node)";
            eval(expr);
        }
    });    
    
    $(JQSel).on('unselected', function(event) {
        if (handlerFnNameUnSelect) {
        	var node = event.args.button; 
        	node = node[0]; 
            var expr = handlerFnNameUnSelect + "(node)";
            eval(expr);
        }
    }); 
   
}



function WAL_createCheckBox(buttonID, handlerFnName, Width, Height, boxSize, disabled, checked) {

    if (gInitialized != true)
        return;
    var widgetType = gWidgetType['jqxCheckBox']; 
    var JQSel = "#" + buttonID;
    var retval = WAL_IsWidgetCreated(buttonID, widgetType);
    if (retval == true)
        return;
    $(JQSel).jqxCheckBox({ width: Width, height: Height, theme: gTheme, boxSize: boxSize, disabled: disabled, animationShowDelay: 10, animationHideDelay: 10, checked: checked});
    $(JQSel).attr(widgetType, "true");
    $(JQSel).attr("data-cbvalue", checked);
    
    $(JQSel).on('change', function(event) {
        var state = event.args.checked;
        $(this).attr("data-cbvalue", state);
        if (handlerFnName) {
            var expr = handlerFnName + "(event)";
            eval(expr);
        }
    });
    
   
    return;


}

/**********************

groupNumber provides the Radio groups 
*************************/
function WAL_createRadioButton(buttonID, handlerFnName, Width, Height, disabled, checked) {

    if (gInitialized != true)
        return;

    var widgetType = gWidgetType['jqxRadioButton']; 
    var JQSel = "#" + buttonID;
    var retval = WAL_IsWidgetCreated(buttonID, widgetType);
    if (retval == true)
        return;

    var node = document.getElementById(buttonID);
    node = node.parentNode;

    var groupName = node.getAttribute("id");
    node.setAttribute("data-type", "radiogroup");
    
    
    $(JQSel).jqxRadioButton({groupName: groupName,  width: Width, height: Height, theme: gTheme, disabled: disabled, animationShowDelay: 10, animationHideDelay: 10, checked: checked });
    $(JQSel).attr(widgetType, "true");
    $(JQSel).attr("data-cbvalue", checked);
    if (checked == true) {
        WAL_setradioValueOnGroup(buttonID); 
    }

    $(JQSel).on('change', function(event) {
        var state = event.args.checked;
        $(this).attr("data-cbvalue", state);
        if (state == true)
            WAL_setradioValueOnGroup(buttonID);     
        if (handlerFnName) {
            var expr = handlerFnName + "(event)";
            eval(expr);
        }
    });
    return;
}

function WAL_setradioValueOnGroup(radioNodeID) {

    var radioNode = document.getElementById(radioNodeID); 
    var state = radioNode.getAttribute("data-cbvalue");
    if (state != "true")
        return; 
        
    var grpnode = radioNode.parentNode;
    var type = grpnode.getAttribute("data-type");
    if (type != "radiogroup") {
        alert("Parent is not radio group");
        return;
    }
    var value = radioNode.textContent;
    grpnode.setAttribute("data-value", value);     
}


function WAL_setradioButtonCheck(radioID, bFlag)
{
	var JQSel = "#" + radioID; 
	if(bFlag ==  true)
		$(JQSel).jqxRadioButton('check'); 
	else
		$(JQSel).jqxRadioButton('uncheck'); 
}
function WAL_getradioButtonCheckState(radioID)
{
	var JQSel = "#" + radioID; 
	var bFlag = $(JQSel).jqxRadioButton('checked'); 
	return bFlag;
}

function WAL_getradioValueFromGroup(groupID) {
    var JQSel = "#" + groupID;
    var value = $(JQSel).attr("data-value");
    return value; 
}

function WAL_getCheckBoxValue(buttonID) {
    var JQSel = "#" + buttonID;
    var state = $(JQSel).attr("data-cbvalue");
    if(state == 'true')
    	state = true; 
    else
    	state = false; 
    return state;
}

function WAL_setCheckBoxValue(buttonID, value) {
    var JQSel = "#" + buttonID;
    $(JQSel).jqxCheckBox({ checked: value }); 
    var state = $(JQSel).attr("data-cbvalue", value);
    return state;
}


function WAL_createDropdownList(ID, Width, Height, AutoOpen, DataSource, handlerFnName, DDLdropDownHeight, dropDownWidth) {
 if (gInitialized != true)
        return;
    var widgetType = gWidgetType['jqxDropDownList']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return;
    if(dropDownWidth == 0)
    	var DDLdropDownWidth = Width; 
    else
    	DDLdropDownWidth = dropDownWidth; 
    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: AutoOpen, source: DataSource,  animationType: 'slide', openDelay:256, autoDropDownHeight:false,incrementalSearch : true, selectedIndex:1,
    	  dropDownHeight: DDLdropDownHeight, dropDownWidth: DDLdropDownWidth });
    $(JQSel).attr(widgetType, "true");
    $(JQSel).attr('data-internalevent', 'false');
    $(JQSel).on('select', function(event) {
    	 var flag = $(JQSel).attr('data-internalevent');
	     if(flag ==  'true')
	     {
	    	 $(JQSel).attr('data-internalevent', 'false');
	    	 return ;  
	     }   
        var item = $(this).jqxDropDownList('getSelectedItem');
        var value = item.value; 
        var Node = event.currentTarget; 
        //alert(" Closing Item=" + item.label);
        if (handlerFnName) {
            // alert("Outside Handler"); 
            var expr = handlerFnName + "(Node, value)";
            eval(expr);
        }
    });
    
    $(JQSel).on('open', function(event) {
    	//alert("Close Event"); 
    	$(this).jqxDropDownList('clearSelection'); 
       // var itemIndex = $(this).jqxDropDownList('getSelectedIndex');
      //  $(this).jqxDropDownList('unselectIndex', itemIndex ); 
        //alert("Unselected now");         
    });

   
    
    return;
}

function WAL_createDropdownListWithCheckbox(ID, Width, Height, AutoOpen, DataSource, handlerFnName, DDLdropDownHeight) {
	 if (gInitialized != true)
	        return;
	    var widgetType = gWidgetType['jqxDropDownList']; 
	    var JQSel = "#" + ID;
	    var retval = WAL_IsWidgetCreated(ID, widgetType);
	    if (retval == true)
	        return;
	    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: AutoOpen, source: DataSource,  animationType: 'slide', openDelay:256, autoDropDownHeight:false,incrementalSearch : true, selectedIndex:1,
	    	  dropDownHeight: DDLdropDownHeight, checkboxes:true});
	    $(JQSel).attr(widgetType, "true");
	    $(JQSel).attr('data-internalevent', 'false');
	    $(JQSel).on('checkChange', function(event) {
	    	alert('Check change event called'); 
	    	 var flag = $(JQSel).attr('data-internalevent');
		     if(flag ==  'true')
		     {
		    	 $(JQSel).attr('data-internalevent', 'false');
		    	 return ;  
		     }   
	        var item = $(this).jqxDropDownList('getSelectedItem');
	        var value = item.value; 
	        var Node = event.currentTarget; 
	        var checkedstate = item.checked; 
	        //alert(" Closing Item=" + item.label);
	        if (handlerFnName) {
	            // alert("Outside Handler"); 
	            var expr = handlerFnName + "(Node, value, checkedstate)";
	            eval(expr);
	        }
	    });
	    
	    $(JQSel).on('open', function(event) {
	    	//alert("Close Event"); 
	    	$(this).jqxDropDownList('clearSelection'); 
	       // var itemIndex = $(this).jqxDropDownList('getSelectedIndex');
	      //  $(this).jqxDropDownList('unselectIndex', itemIndex ); 
	        //alert("Unselected now");         
	    });

	   
	    
	    return;
}

function WAL_createDropdownListwithButton(ID, dispwidth, dispheight,DataSource,  handlerFnName, DDLdropDownWidth, DDLdropDownHeight, buttonID, buttonwidth, buttonheight) {
	 if (gInitialized != true)
	        return;
	    var widgetType = gWidgetType['jqxDropDownList']; 
	    var JQSel = "#" + ID;
	    var retval = WAL_IsWidgetCreated(ID, widgetType);
	    if (retval == true)
	        return;
	    var Width, Height;
	    if ( (dispwidth == 0 ) || (dispheight == 0) )
	    {
	    	Width = buttonwidth/4 ; 
		    Height = buttonheight/4;
	    }
	    else
	    {
	    	Width = dispwidth-2;
	    	Height = dispheight-3; 
	    }
	    
	    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: false, source: DataSource,  animationType: 'slide', openDelay:256, incrementalSearch : true, selectedIndex:1,
	    	  dropDownHeight: DDLdropDownHeight, dropDownWidth: DDLdropDownWidth });
	    $(JQSel).attr(widgetType, "true");

	    var btnJQSel = "#"+buttonID; 
	    WAL_createCustomButton(buttonID, ""); 
	    $(btnJQSel).on('click', function(){
	    	
	    	
	    	var node =  document.getElementById(ID); 
	    	node = node.parentNode; 
	    	var pos = $(btnJQSel).position(); 
	    	node.style.left = pos.left + 'px'; 
	    	$(JQSel).show(); 
	    	$(JQSel).jqxDropDownList('open'); 
	    });
	   
	    var btnPos = $(btnJQSel).position();	    
	    var editNode = document.getElementById(ID); 
	    editNode = editNode.parentNode; 
	    editNode.style.position = "absolute"; 
	    editNode.style.left = btnPos.left + 'px';
	    editNode.style.top = btnPos.top + 5 + 'px'; 
	    $(JQSel).hide(); 
	    
	    $(JQSel).on('select', function(event) {
	        var item = $(this).jqxDropDownList('getSelectedItem');
	        var value = item.value; 
	        var Node = event.currentTarget; 
	        //alert(" Closing Item=" + item.label);
	        if (handlerFnName) {
	            // alert("Outside Handler"); 
	            var expr = handlerFnName + "(Node, value)";
	            eval(expr);
	        }
	    });
	    
	    $(JQSel).on('open', function(event) {
	    	//alert("Close Event"); 
	    	$(this).jqxDropDownList('clearSelection'); 
	           
	    });
	    
	    $(JQSel).on('close', function(event) {
	    	$(JQSel).hide();            
	    });
	    
	   
	    

	  
	    
	    return;
	}


function WAL_createDropdownListWithItemStyle(ID, Width, Height, AutoOpen, handlerFnName, DDLdropDownHeight, ValueNameVar,ValueNameString, 
		DisplayNameVar,DisplayNameString ) {
	 if (gInitialized != true)
	        return;
	    var widgetType = gWidgetType['jqxDropDownList']; 
	    var JQSel = "#" + ID;
	    var retval = WAL_IsWidgetCreated(ID, widgetType);
	    if (retval == true)
	        return;
	    
	    var Data = new Array(); 
	    var k = 0; 
	    for (var i = 0; i < ValueNameVar.length; i++) {

            var row = {};
            row[ValueNameString] = ValueNameVar[k];
            row[DisplayNameString] = DisplayNameVar[k];
            Data[i] = row;
            k++;
        }

        var source =
        {
        	localdata: Data,
            datatype: "array"
        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        
	    
	  //  $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: AutoOpen, source: dataAdapter,  animationType: 'slide', openDelay:256, autodropDownHeight:false,incrementalSearch : true, selectedIndex:1,
	   //	  dropDownHeight: DDLdropDownHeight, displayMember: DisplayNameString, valueMember:ValueNameString });
	    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: AutoOpen, source: dataAdapter,  animationType: 'slide', openDelay:256,incrementalSearch : true, selectedIndex:1,
	    	  dropDownHeight: DDLdropDownHeight, displayMember: DisplayNameString, valueMember:ValueNameString });
	    $(JQSel).attr(widgetType, "true");

	   

	    $(JQSel).on('select', function(event) {
	        var item = $(this).jqxDropDownList('getSelectedItem');
	        var value = item.value; 
	        var Node = event.currentTarget; 
	        //alert(" Closing Item=" + item.label);
	        if (handlerFnName) {
	            // alert("Outside Handler"); 
	            var expr = handlerFnName + "(Node, value)";
	            eval(expr);
	        }
	    });
	    
	    $(JQSel).on('open', function(event) {
	    	//alert("Close Event"); 
	    	$(this).jqxDropDownList('clearSelection'); 
	       // var itemIndex = $(this).jqxDropDownList('getSelectedIndex');
	      //  $(this).jqxDropDownList('unselectIndex', itemIndex ); 
	        //alert("Unselected now");         
	    });

	   
	    
	    return;
}

function WAL_createDropdownListWithItemStyleButton(ID, handlerFnName, ValueNameVar,ValueNameString,DisplayNameVar,DisplayNameString,
		DDLdropDownWidth, DDLdropDownHeight, buttonID, buttonwidth, buttonheight)
{
	 if (gInitialized != true)
	        return;
	    var widgetType = gWidgetType['jqxDropDownList']; 
	    var JQSel = "#" + ID;
	    var retval = WAL_IsWidgetCreated(ID, widgetType);
	    if (retval == true)
	        return;
	    
	    var Data = new Array(); 
	    var k = 0; 
	    for (var i = 0; i < ValueNameVar.length; i++) {

            var row = {};
            row[ValueNameString] = ValueNameVar[k];
            row[DisplayNameString] = DisplayNameVar[k];
            Data[i] = row;
            k++;
        }

        var source =
        {
        	localdata: Data,
            datatype: "array"
        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        
	    var Width, Height;
	    Width = buttonwidth - 5; 
	    Height = buttonheight - 5; 
	    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: false, source: dataAdapter,  animationType: 'slide', openDelay:256, autodropDownHeight:false,incrementalSearch : true, selectedIndex:1,
	    	  dropDownHeight: DDLdropDownHeight, dropdownWidth: DDLdropDownWidth,  displayMember: DisplayNameString, valueMember:ValueNameString });
	    $(JQSel).attr(widgetType, "true");

	    /*
	     *  $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: false, source: DataSource,  animationType: 'slide', openDelay:256, autodropDownHeight:false,incrementalSearch : true, selectedIndex:1,
	    	  dropDownHeight: DDLdropDownHeight, dropDownWidth: DDLdropDownWidth });
	     * 
	     */
	   

	    $(JQSel).on('select', function(event) {
	        var item = $(this).jqxDropDownList('getSelectedItem');
	        var value = item.value; 
	        var Node = event.currentTarget; 
	        //alert(" Closing Item=" + item.label);
	        if (handlerFnName) {
	            // alert("Outside Handler"); 
	            var expr = handlerFnName + "(Node, value)";
	            eval(expr);
	        }
	    });
	    
	    $(JQSel).on('open', function(event) {
	    	//alert("Close Event"); 
	    	$(this).jqxDropDownList('clearSelection'); 
	       // var itemIndex = $(this).jqxDropDownList('getSelectedIndex');
	      //  $(this).jqxDropDownList('unselectIndex', itemIndex ); 
	        //alert("Unselected now");         
	    });

	    var btnJQSel = "#"+buttonID; 
	    WAL_createButton(buttonID, "", buttonwidth, buttonheight, false); 
	    $(btnJQSel).on('click', function(){
	    	$(JQSel).jqxDropDownList('open'); 
	    });
	    
	    return;
}


function WAL_createDropdownListWithIcons(ID, Width, Height, AutoOpen, DataSource, ImageSource, ImageWidth, ImageHeight, handlerFnName) {
    if (gInitialized != true)
        return;

    var widgetType = gWidgetType['jqxDropDownList']; 
   

    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return;
    $(JQSel).jqxDropDownList({ width: Width, height: Height, theme: gTheme, autoOpen: AutoOpen, source: DataSource, animationType: 'slide', openDelay: 256,  incrementalSearch: true, selectedIndex: 1, 
     renderer:function(index, label, value) {
               // var imgurl = label + '.png';
                var img = '<img src="' + ImageSource[index] + '"  width='+ ImageWidth + 'height='+ ImageHeight+ '/>';
     //var img = '<img height="15" width="25" src="' + imgurl + '"/>';
                var table = '<table style="min-width:'+ Width + 'px";><tr><td style="width:' + ImageWidth + 'px";rowspan="1">' + img
                 + '</td><td>' + label + '</td></tr></table>';
           //     var table = '<table style="min-width: 120px;"><tr><td style="width: 25px;" rowspan="1">' + img + '</td><td>' + label //+ '</td></tr></table>';
                return table;
            }
            });

    $(JQSel).attr(widgetType, "true");
   
    $(JQSel).on('select', function(event) {
        var item = $(this).jqxDropDownList('getSelectedItem');
        //alert(" Closing Item=" + item.label);
        if (handlerFnName) {
            // alert("Outside Handler"); 
            var expr = handlerFnName + "(event)";
            eval(expr);
        }
    });

    return;
}

function WAL_getDropdownListSelection(ID) {
    if (gInitialized != true)
        return;

    var JQSel = "#" + ID;
    
    var item = $(JQSel).jqxDropDownList('getSelectedItem');
    if(!item)
    	return null; 
    
    return item.label;
}

function WAL_disableDropdownListItem(ID, itemIndex) {

    if (gInitialized != true)
        return;

    var JQSel = "#" + ID;
    var item = $(JQSel).jqxDropDownList('disableAt', itemIndex);
}

function WAL_disableDropDownListItemByValue(ID, value){
	var JQSel = '#' + ID;	
	var item = $(JQSel).jqxDropDownList('getItemByValue', value);
	if(item){
		var index = item.index;
		var item = $(JQSel).jqxDropDownList('disableAt', index);
	}	
}
function WAL_enableDropDownListItemByValue(ID, value){
	var JQSel = '#' + ID;	
	var item = $(JQSel).jqxDropDownList('getItemByValue', value);
	if(item){
		var index = item.index;
		var item = $(JQSel).jqxDropDownList('enableAt', index);
	}	
}
function WAL_enableDropdownListItem(ID, itemIndex) {

    if (gInitialized != true)
        return;

    var JQSel = "#" + ID;
    var item = $(JQSel).jqxDropDownList('enableAt', itemIndex);
}

function WAL_clearAllFromDropdownList(ID) {

    if (gInitialized != true)
        return;

    var JQSel = "#" + ID;
    var item = $(JQSel).jqxDropDownList('clear');
}

function WAL_UpdateDropDownList(ID, listItem)
{
	 if (gInitialized != true)
	    return;
	 var JQSel = "#" + ID;
	 var item = $(JQSel).jqxDropDownList('clear');
	 $(JQSel).jqxDropDownList({source: listItem}); 
}

function WAL_AddItemsToList(ID, item)
{
	 if (gInitialized != true)
	        return;
	 var JQSel = "#" + ID;
	 $(JQSel).jqxDropDownList('addItem', item);
}
/*  
Works OK for normal DDL but when autoopen set to true then 
on disabling , the DDL still opens though selection is not possible 
Toggling of autoopen is not a veru good options as multiple handlers are 
added . God knows why . 
*/


//now this become specific to SVG remember because of the drag type hardcoded here 
 function WAL_createTreeObject(ID, Width, Height, selHandlerFn, bDragDrop, fnDragHandler, fnDropHandler) {

     if (gInitialized != true)
         return;
     var widgetType = gWidgetType['jqxTree']; 
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return;
     var bAllowDragDrop = bDragDrop;
     if(bAllowDragDrop ==  true)
     {
    	 $(JQSel).jqxTree({ width: Width, height: Height, theme: gTheme, allowDrag: true, allowDrop: true,enableHover: true,
    	        dragStart: function(item) {
    	        	var node = item.element; 
    	        	var type  =  node.getAttribute('type');     	        	
    	        	if ( (type !='OBJECT')&& (type !='LAYER'))
	        		{    	        		
	        			return false; 
	        		} 
    	        }, dragEnd: function(item, dropItem, args, dropPosition, tree) {    	        	
    	        		var srcnode = item.element;
    	        		var destnode = dropItem.element; 
    	        		var srcType = srcnode.getAttribute('type');
    	        		var destType = destnode.getAttribute('type');     
    	        		/*if(dropPosition != 'inside'){
    	        			Debug_Message('Not Inside');
    	        			return ; 
    	        		}*/
    	        		
    	        		  	        		
    	        		setTimeout(function(){
    	        			var expr = fnDropHandler + "(item, dropItem, args, dropPosition, tree)";
    	        			eval(expr);
    	                }, 800);   	        		
    	        		//Debug_Message("Cleared and then created"); 
    	        		 return true; 
    	        		
    	            if (fnDropHandler) {
    	                // alert("Outside Handler");
    	                var expr = fnDropHandler + "(item, dropItem, args, dropPosition, tree)";
    	                eval(expr);
    	            }
    	        }
    	    });
    	 
     }
     else
     {
    	 $(JQSel).jqxTree({ width: Width, height: Height, theme: gTheme, allowDrag: bAllowDragDrop, allowDrop: bAllowDragDrop });
     }
     
     
     
     $(JQSel).attr(widgetType, "true");
     //$(JQSel).jqxTree('expandAll');

     $(JQSel).on('select', function(event) {
         var item = $(this).jqxTree('getSelectedItem');
         //alert(" Closing Item=" + item.label);
         if (selHandlerFn) {
             // alert("Outside Handler"); 
             var expr = selHandlerFn + "(item)";
             eval(expr);
         }
     });

     
     return;        
 }
 
 
 function WAL_getTreeItemSelection(ID, bItem)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
    var JQSel = "#"+ID; 
    var item = $(JQSel).jqxTree('getSelectedItem'); 
    if(!item)
    	return null; 
    if(bItem ==  true)
    	return item;
    else
    	return item.element;
}
 
 function WAL_setTreeItemSelection(ID, itemID)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+ID; 
	// WAL_expandTreeItem(ID,itemID, true);
	 var selNode = document.getElementById(itemID); 
	 if(selNode)
		 $(JQSel).jqxTree('selectItem', selNode);
 }
 
 function WAL_getTreeItem(treeID, itemID)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+treeID;	
	 var tgtNode = document.getElementById(itemID);	 
	 var item = $(JQSel).jqxTree('getItem', tgtNode);
	 return item; 
 }
 
 function WAL_getTreeParentItem(treeID, itemID){
	 var JQSel = "#"+treeID;
	 var item = WAL_getTreeItem(treeID, itemID); 
	 var parentItem = $(JQSel).jqxTree('getItem', item.parentElement);
	 return parentItem; 
 }
 
 function WAL_getTreeItemType(treeID, itemID){
	 var JQSel = "#"+treeID;
	 var item = WAL_getTreeItem(treeID, itemID); 
	 var type = item.getAttribute('type');
	 return type;	
 }
 
 function WAL_setTreeItemText(treeID, ItemID, string)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+treeID;	
	 var tgtNode = document.getElementById(ItemID);	 
	 var item = $(JQSel).jqxTree('getItem', tgtNode);	 
	 
	 var childList = tgtNode.childNodes; 
	 var childNode; 
	 var nodename;
	 for(var i = 0; i < childList.length; i++)
	 {
		 childNode = childList.item(i); 
		 nodename = childNode.nodeName.toUpperCase(); 
		 if(nodename == 'DIV')
		 {
			 childList = childNode.childNodes; 
			 for(var k = 0; k < childList.length; k++)
			 {
				 childNode = childList.item(k); 
				 nodename = childNode.nodeName.toUpperCase(); 
				 if(nodename == 'SPAN')
				 {
					 childNode.innerHTML = string; 
				 }
			 }
		 }
	 }
	
	 
 }
 
 function WAL_getTreeItemText(treeID, ItemID)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+treeID;	
	 var tgtNode = document.getElementById(ItemID);	 
	 var item = $(JQSel).jqxTree('getItem', tgtNode);
	 if(!item)
		 return ; 
	 return item.label; 
	 
	
	 
 }
 
 function WAL_setTreeItemStyle(treeID, ItemID, styleValue)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+treeID;	
	 var tgtNode = document.getElementById(ItemID);	 
	 var item = $(JQSel).jqxTree('getItem', tgtNode);
	 var childList = tgtNode.childNodes; 
	 var childNode; 
	 var nodename;
	 var parentNode = item.parentElement; 
	 
	 for(var i = 0; i < childList.length; i++)
	 {
		 childNode = childList.item(i); 
		 nodename = childNode.nodeName.toUpperCase(); 
		 if(nodename == 'DIV')
		 {
			 childList = childNode.childNodes; 
			 for(var k = 0; k < childList.length; k++)
			 {
				 childNode = childList.item(k); 
				 nodename = childNode.nodeName.toUpperCase(); 
				 if(nodename == 'SPAN')
				 {
					 childNode.setAttribute('style',styleValue) ; 
					 return ; 
				 }
			 }
		 }
	 }
	 return ; 
 }
 
function WAL_disableTreeItem(ID, itemID, bFlag)
{
	 var JQSel = "#"+ID;	
	 var selNode = document.getElementById(itemID);
	 if(bFlag == true)
     {
		 $(JQSel).jqxTree('disableItem', selNode);
     }
	 else
	 {
		 $(JQSel).jqxTree('enableItem', selNode);
	 }     
}
 
function WAL_disableTreeItemForAttributes(ID, attributeName, attributeVal, bFlag)
{
	var JQSel = "#"+ID; 	 
	//$(JQSel).jqxTree('expandAll'); 
	
	var itemarr = $(JQSel).jqxTree('getItems');	 	
	var itemNode; 
	var attrVal; 
     for (var i = 0; i < itemarr.length; i++) {
    	 itemNode = itemarr[i].element;
    	 attrVal = itemNode.getAttribute(attributeName);
    	 if(attrVal == attributeVal)
    	 {
    		 if(bFlag == true)
    	     {
    			 $(JQSel).jqxTree('disableItem', itemNode);
    	     }
    		 else
    		 {
    			 $(JQSel).jqxTree('enableItem', itemNode);
    		 }     
    	 }       
     }
}
 function WAL_getTreeNodeList(ID)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var nodeList = [] ; 
	 var JQSel = "#"+ID; 
	 $(JQSel).jqxTree('expandAll');
	 
	 var itemarr = $(JQSel).jqxTree('getItems');	 
	// return itemarr; 	 
     for (var i = 0; i < itemarr.length; i++) {
        nodeList.push(itemarr[i].element);
     }
     $(JQSel).jqxTree('collapseAll');
     return nodeList;
    
	 
 }
 
 function WAL_expandAllTreeItems(ID, bFlag)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+ID; 
	 if(bFlag == true)
	 {
		 $(JQSel).jqxTree('expandAll');
	 }
	 else
	{
		 $(JQSel).jqxTree('collapseAll');
	}
 }
 
 function WAL_getItemFromTree(treeID, itemNode)
{
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+treeID; 	 
	 var item = $(JQSel).jqxTree('getItem', itemNode);
	 return item; 
}

 
 function WAL_expandTreeItem(ID,itemID, bFlag)
 {
	 if(bTreeWidgetDisplay != true)
		 return; 
	 var JQSel = "#"+ID; 
	// $(JQSel).jqxTree('expandAll');
//	 var itemarr = $(JQSel).jqxTree('getItems');	 
	// var itemNode; 
	 $(JQSel).jqxTree('collapseAll');
	 
	 itemNode = document.getElementById(itemID); 
	 
	 if(bFlag == true)
		{
		// $(JQSel).jqxTree('expandItem', itemNode);
		 var itemSel = '#'+itemID; 
		 $(JQSel).jqxTree('expandItem', $(itemSel)[0]);
		}
	 else
	 {
		 $(JQSel).jqxTree('collapseItem', itemNode);
		 
	 }
		// return itemarr; 	 
	 
 }
/*
 function WAL_expandTreeItem(ID,itemNode, bFlag)
 {
	 var JQSel = "#"+ID; 
	// $(JQSel).jqxTree('expandAll');
//	 var itemarr = $(JQSel).jqxTree('getItems');	 
	// var itemNode; 
	 $(JQSel).jqxTree('collapseAll');	 
	 if(bFlag == true)
	 {
		 $(JQSel).jqxTree('expandItem', itemNode);		
	 }
	 else
	 {
		 $(JQSel).jqxTree('collapseItem', itemNode);		 
	 }
		// return itemarr; 	 
	 
 }
 */
 
 
 function WAL_expandTreeItemLevelWise(ID, rootLevel, lastLevel)
 {
	 //first expand all items 
	 
	 //get the item list
	 
	 //collapse all level 
	 
	 //get 
 }
 
function WAL_createDragDropTree(ID, Width, Height, fnSelectionHandler, fnDragHandler, fnDropHandler) {

	 if (gInitialized != true)
         return;
     var widgetType = gWidgetType['jqxTree']; 
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return;
     $(JQSel).jqxTree({ width: Width, height: Height, theme: gTheme, allowDrag: true, allowDrop: true });
     $(JQSel).attr(widgetType, "true");
     $(JQSel).jqxTree('expandAll');

     $(JQSel).on('select', function(event) {
         var item = $(this).jqxTree('getSelectedItem');
         //alert(" Closing Item=" + item.label);
         if (fnSelectionHandler) {
             // alert("Outside Handler"); 
             var expr = fnSelectionHandler + "(item)";
             eval(expr);
         }
     });

   
    //now attach the handler functions here
    $(JQSel).on('dragStart', function(item) {
        var expr = fnDragHandler + "(event)";
        eval(expr);
    });

    $(JQSel).on('dragEnd', function(item, dropItem, args, dropPosition, tree) {
    var expr = fnDropHandler + "(item, dropItem, args, dropPosition, tree)";
    eval(expr);
    });
}


function WAL_updateTree(containerID,  Width, Height, HTMLdata, selFnHandler, bDragDrop, fnDragstart, fnDragStop) {

	 if(bTreeWidgetDisplay != true)
		 return; 
    var widgetType = gWidgetType['jqxTree'];
    var parentSel = "#" + containerID;
    var Node = document.getElementById(containerID);
    Node = Node.firstElementChild;
    var childID;
    if(Node) {
        childID = Node.getAttribute('id');   
        var JQSel = "#" + childID;
        //first remove the element
        $(JQSel).remove();
    }
    $(parentSel).html(HTMLdata);
    Node = $(parentSel).get(0);
    Node = Node.firstElementChild;
    childID = Node.getAttribute('id');

    WAL_createTreeObject(childID, Width, Height, selFnHandler, true, fnDragstart, fnDragStop); 
    
}


function WAL_createListBox(ID, Width, Height, fnSelectHandler)
{
	var JQSel = "#"+ID; 
	var mysource = []; 
	
	$(JQSel).jqxListBox({source: mysource, width: Width, height: Height, theme: gTheme});
	
	$(JQSel).bind('select', function(event) { 
		if(fnSelectHandler)
		{
			var args = event.args;
		    if (args) {
		        //var index = args.index;
		        var item = args.item;		       
		        var label = item.label;
		       // var value = item.value;
		    }		        
			//var expr = fnSelectHandler + '(' + label + ')'; 
			var expr = fnSelectHandler + "(label)";
			eval(expr);  
		}		       
    });
}

function WAL_ListBoxUpdateData(ID, source)
{
	var JQSel = "#"+ID; 
	$(JQSel).jqxListBox('clear'); 
	$(JQSel).jqxListBox({'source':source}); 
}

function WAL_ListBoxDeleteItem(ID, Index)
{
	var JQSel = "#"+ID; 
	$(JQSel).jqxListBox('removeAt', Index);
}

function WAL_ListBoxGetSelectedItemIndex(ID)
{
	var JQSel = "#"+ID; 
	var Index = $(JQSel).jqxListBox('getSelectedIndex');
	return Index; 
}

function WAL_ListBoxGetSelectedItem(ID)
{
	var JQSel = "#"+ID; 
	var Item = $(JQSel).jqxListBox('getSelectedItem');
	return Item; 
}

function WAL_ListBoxGetItemByIndex(ID, Index)
{
	if(Index  < 0) 
		return ; 
	var JQSel = "#"+ID; 
	var item = $(JQSel).jqxListBox('getItem', Index); 
	return item ; 
}

function WAL_ListBoxItemArray(ID)
{	
	var itemList = [] ; 
	var JQSel = "#"+ID; 	 
	var itemarr = $(JQSel).jqxListBox('getItems');	 
	// return itemarr; 	 
    for (var i = 0; i < itemarr.length; i++) {
    	itemList.push(itemarr[i].label);
    }
    	
    return itemList; 
}

function WAL_ListBoxMoveItem(ID, bUpFlag)
{
	var JQSel = "#"+ID; 
	//get the selected item
    var item = $(JQSel).jqxListBox('getSelectedItem');
    //then also get the selected index
    var selIndex = $(JQSel).jqxListBox('getSelectedIndex'); 
    
    if( (selIndex == 0) && (bUpFlag == true) )
    	return ; 
    //now remove the item
    $(JQSel).jqxListBox('removeAt', selIndex);
    
    if(bUpFlag == true)
    	selIndex = selIndex - 1;
    else
    	selIndex = selIndex + 1;
    
    //and now insert at sel index
    $(JQSel).jqxListBox('insertAt', item.label, selIndex);
    $(JQSel).jqxListBox('selectIndex', selIndex);
}
function WAL_updateDragDropTree(containerID,  Width, Height, HTMLdata, selFnHandler, dragStartFnHandle,dragEndFnHandle) {

	 if(bTreeWidgetDisplay != true)
		 return; 
	var widgetType = gWidgetType['jqxTree'];
    var parentSel = "#" + containerID;
    var Node = document.getElementById(containerID);
    Node = Node.firstElementChild;
    var childID;
    if(Node) {
        childID = Node.getAttribute('id');   
        var JQSel = "#" + childID;
        //first remove the element
        $(JQSel).remove();
    }
    $(parentSel).html(HTMLdata);
    Node = $(parentSel).get(0);
    Node = Node.firstElementChild;
    childID = Node.getAttribute('id');

    //WAL_createTreeObject(childID, Width, Height, selFnHandler);
    WAL_createDragDropTree(childID, Width, Height, selFnHandler, "", "");
   
}

/*
function WAL_createSplitter(ID, Width, Height, Orientation, arrPanel) {

    if (gInitialized != true)
        return;
    var widgetType = gWidgetType['jqxSplitter']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return;
    
    $(JQSel).jqxSplitter({ height: Height, width: Width, orientation: Orientation, theme: gTheme, panels: arrPanel,
        splitBarSize: '2px', resizable:false});
    $(JQSel).attr(widgetType, "true");
}
*/

function WAL_createSplitter(ID, Width, Height, Orientation, bshowSplitBar, bresizable, panelSize1, panelSize2, bCollapsible, minSize)
{
	 if (gInitialized != true)
	        return false ;
	    var widgetType = gWidgetType['jqxSplitter']; 
	    var JQSel = "#" + ID;
	    var retval = WAL_IsWidgetCreated(ID, widgetType);
	    if (retval == true)
	        return false ;
	    var panel =[{ size: panelSize1}, {size: panelSize2}, {collapsible: bCollapsible}, {min: minSize}];
	    //var panel =[{size: panelSize1}, {size: panelSize2}];
	    //var panel =[{size: '10%'}, {size: '90%'}];
	    $(JQSel).jqxSplitter({ height: Height, width: Width, orientation: Orientation, theme: gTheme, showSplitBar:bshowSplitBar,
	        splitBarSize: '3px', resizable:bresizable, panels: panel});
	    return true; 
}
/*
function WAL_createTooltip(ID, tipText, hideDelay, height) {
	
    var JQSel = "#" + ID;
    var delay; 
    if(hideDelay == 0)
    	delay =gTooltipHideDelay; 
    var newHeight='auto'; 
    if(height != 0 )
    	newHeight =  height; 
    var mytheme = 'black'; 
    $(JQSel).jqxTooltip({ content: tipText, position:'bottom', theme: gTooltipTheme, name: 'tooltip' + ID, autoHide:true, 
     	autoHideDelay:delay, closeOnClick: true, showArrow: true, height: newHeight});
    newHeight = $(JQSel).jqxTooltip('height');
    $(JQSel).jqxTooltip('close'); 
    $(JQSel).attr('data-close', 'true'); 
    
    $(JQSel).on('close', function(event){
    	$(JQSel).attr('data-close', 'true'); 
    }); 
    $(JQSel).on('open', function(event){
    	$(JQSel).attr('data-close', 'false'); 
    });
   
}
*/

function WAL_IsTooltipOpen(ID)
{
	var JQSel = "#" + ID;
	var bflag = $(JQSel).attr('data-close'); 
	if(bflag == 'true')
		return true;
	else
		return false; 
}

function WAL_ShowTooltip(ID, bShowFlag)
{
	var JQSel = "#" + ID; 
	if(bShowFlag == true){
		//var bFlag = WAL_IsTooltipOpen(ID); 
		//if(bFlag == true)
			$(JQSel).jqxTooltip('open');			
		//else
		//	$(JQSel).jqxTooltip('refresh');			
	}else{
		$(JQSel).jqxTooltip('close'); 
	}
}

function WAL_UpdateTooltipText(ID, tipText){
	var JQSel = "#" + ID; 
	$(JQSel).jqxTooltip({ content: tipText});	
}

function WAL_SetTooltipPosition(ID, position, x, y)
{
	var JQSel = "#" + ID; 
	if(position == 'absolute')
	{
		$(JQSel).jqxTooltip({position:'absolute', absolutePositionX:x, absolutePositionY:y });		
	}
	else
	{
		$(JQSel).jqxTooltip({position:position});
	}
}

function WAL_createWindow(ID,titleID, bTitleBar, Width, Height, Resizable, Draggable, Modal, Collapsable, showClose,  HandlerFnClose, OKButtonID, CancelButtonID ) {
    if (gInitialized != true)
        return;
    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return;
        
     var resizable = Resizable;
     var draggable = Draggable; 
        
   var Maxscalefactor = 1.25; 
   var Minscalefactor = 0.25; 
   var MaxWidth,MaxHeight, MinWidth, MinHeight;
   if(resizable == true)
    {
        MaxWidth = Width * Maxscalefactor ;
        MaxHeight = Height * Maxscalefactor ;
        MinWidth = Width * Minscalefactor ;
        MinHeight = Height * Minscalefactor ; 
    } 
    else{
        MaxWidth = Width ; 
        MaxHeight = Height ;  
        MinWidth = Width ; 
        MinHeight = Height ; 
        
    }
    if(Modal == true)
    {
       resizable = false; 
    }
   
    var OKBtnID, CancelBtnID;
    var buttonWidth = '65'; 
    var buttonGap = 5; 
    var buttonHeight = '24';
    
    if(OKButtonID)
    {
    	 OKBtnID =  '#' + OKButtonID;    
    	WAL_createButton(OKButtonID, '', buttonWidth, buttonHeight, true);
    }
    else
    	OKBtnID ="";
    	
    if(CancelButtonID)
    {
    	CancelBtnID = '#' + CancelButtonID;
    	WAL_createButton(CancelButtonID, '', buttonWidth, buttonHeight, true);
    }
    else
    	CancelBtnID="";
    	
    
   
    

    var myWidth = Width + 'px'; 
    var myHeight = Height + 'px';    
    
    $(JQSel).jqxWindow({width :myWidth, height:myHeight, maxWidth: MaxWidth,  minWidth: MinWidth, maxHeight: MaxHeight,
    minHeight: MinHeight, theme: gTheme, showCollapseButton: Collapsable, isModal: Modal, autoOpen: false, draggable: Draggable, resizable: resizable, closeButtonAction: 'hide', okButton: $(OKBtnID), cancelButton: $(CancelBtnID), showCloseButton: showClose,
    position: { x: '10', y: '10'}
    });
    $(JQSel)[0].style.zIndex = 18000; 
    $(JQSel).attr(widgetType, "true");

    if (bTitleBar == false) {
        var TLSeq = "#" + titleID;
        $(TLSeq).hide(); 
    }
    $(JQSel).attr("data-show", "false"); 
    
    if(HandlerFnClose)
    {
        $(JQSel).on('close', function(event) {
            var bOK = $(JQSel).jqxWindow('okButton');
           // alert("bOK= " + bOK); 
            var expr = HandlerFnClose + "(event)";
            eval(expr);
        }); 
     }
 }

/*
 function WAL_createModalWindow(ID, Width, Height, HandlerFnClose, OKButtonID, CancelButtonID) {
     if (gInitialized != true)
         return false;
     var widgetType = gWidgetType['jqxWindow']; 
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;

     var resizable = false;
     var draggable = false;
     var OKBtnID, CancelBtnID;

     if (OKButtonID) {
         OKBtnID = '#' + OKButtonID;
         WAL_createButton(OKButtonID, '', 'auto', 'auto', true);
     }
     if (CancelButtonID) {
         CancelBtnID = '#' + CancelButtonID;
         WAL_createButton(CancelButtonID, '', 'auto', 'auto', true);
     }
     var myWidth = Width + 'px';
     var myHeight = Height + 'px';

     $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: true,           autoOpen: false, draggable: false, resizable: false, closeButtonAction: 'hide', okButton: $(OKBtnID), 
     cancelButton: $(CancelBtnID), showCloseButton: true });

     $(JQSel).attr(widgetType, "true");     

     if (HandlerFnClose) {
         $(JQSel).on('close', function(event) {
             var bOK = $(JQSel).jqxWindow('okButton');
             
             alert("bOK= " + bOK); 
             var expr = HandlerFnClose + "(event)";
             eval(expr);
         });
     }
     return true; 
 }

*/


function WAL_createModelessWindow(ID, myWidth, myHeight, myOKID, myCANCELID) {
    if (gInitialized != true)
        return false;

    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return false;


//getting the title div node and setting its UID 
    var divNode = $(JQSel).get(0);
    divNode = divNode.firstElementChild;
    var nodename = divNode.nodeName.toUpperCase();
    if (nodename != "DIV") {
      
        return;
    }
    var headerID = ID + "header";
    divNode.setAttribute("id", headerID);  
    var buttonWidth = '65'; 
    var buttonGap = 5; 

    var buttonHeight = '24'; 
    if( (myOKID) && (myCANCELID)){
    	WAL_createButton(myOKID, '', buttonWidth, buttonHeight, true);
        WAL_createButton(myCANCELID, '', buttonWidth, buttonHeight, true);
    }
    var OKID = "#" + myOKID; 
    var CANCELID = "#"+ myCANCELID; 
    if( (myOKID) && (myCANCELID)){
    	 $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: false, autoOpen: false, draggable: true, 
    		 resizable: false, closeButtonAction: 'hide', showCloseButton: true , okButton: $(OKID), cancelButton: $(CANCELID), position:'center'});  

    	    $(JQSel).attr(widgetType, "true");
    	    $(JQSel).attr('data-okID', myOKID);   
    	    $(JQSel).attr('data-cancelID',myCANCELID); 
    }
    else{    
    	 $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: false, autoOpen: false, draggable: true, 
    		 resizable: false, closeButtonAction: 'hide', showCloseButton: true , position:'center'});  
    }
    

   
   //this will toggle the open and closing of the window from the button

       return true;
}



function WAL_createModalWindow(ID, myWidth, myHeight, myOKID, myCANCELID, bClose) {
    if (gInitialized != true)
        return false;

    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return false;

//getting the title div node and setting its UID 
    var divNode = $(JQSel).get(0);
    divNode = divNode.firstElementChild;
    var nodename = divNode.nodeName.toUpperCase();
    if (nodename != "DIV") {      
        return;
    }
    var headerID = ID + "header";
    divNode.setAttribute("id", headerID);  
    var buttonWidth = '65'; 
    var buttonGap = 5; 

    var buttonHeight = '24'; 
    WAL_createButton(myOKID, '', buttonWidth, buttonHeight, true);
    WAL_createButton(myCANCELID, '', buttonWidth, buttonHeight, true);
    

    var OKID = "#" + myOKID; 
    var CANCELID = "#"+ myCANCELID;
    
    	
    $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: true, autoOpen: false, draggable: true, 
	 resizable: false, closeButtonAction: 'hide', showCloseButton: bClose , okButton: $(OKID), cancelButton: $(CANCELID), position:'center'});  

    $(JQSel).attr(widgetType, "true");
    $(JQSel).attr('data-okID', myOKID);
    $(JQSel).attr('data-cancelID',myCANCELID); 
   
   //this will toggle the open and closing of the window from the button

       return true;
}



function WAL_createModalInfoDialog(ID, myWidth, myHeight) {
    if (gInitialized != true)
        return false;

    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return false;


//getting the title div node and setting its UID 
   
 $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: true, autoOpen: false, draggable: false, 
	 resizable: false, closeButtonAction: 'hide', showCloseButton: true , position:'center'});  

    $(JQSel).attr(widgetType, "true");
       return true;
}

function WAL_showModalWindow(windowID, handlerFnOK, handlerFnCancel)
{
	var JQSel = "#"+windowID; 
	//get the OKId 
	var okbtnID =  $(JQSel).attr('data-okID');
	if(!okbtnID)
		return ; 
	
	var cancelbtnID =  $(JQSel).attr('data-cancelID');
	if(!cancelbtnID)
		return ; 
	
	//associate click event with handler function 
	
   // var CANCELID = "#"+ myCANCELID; 
	var btnsel = "#"+okbtnID; 
	$(btnsel).off('click'); 
	$(btnsel).on('click', function(){
		$(JQSel).jqxWindow('close'); 
		if(handlerFnOK)
		{
			var expr = handlerFnOK +"()";
			eval(expr); 
		}		
	});
	
	 btnsel = "#"+cancelbtnID; 
	$(btnsel).off('click'); 
	$(btnsel).on('click', function(){
		
		if(handlerFnCancel)
		{
			var expr = handlerFnCancel +"()";
			eval(expr); 
		}	
		$(JQSel).jqxWindow('close'); 
		
	});
	$(JQSel).slideDown();
	$(JQSel).jqxWindow('open'); 
}
function WAL_createWaitPromptWindow(ID, wndWidth, wndHeight)
{
	if (gInitialized != true)
        return false;

    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return false;


//getting the title div node and setting its UID 
   /*width: wndWidth, height: wndHeight,*/ 
 $(JQSel).jqxWindow({  theme: gTheme, showCollapseButton: false, isModal: true, modalOpacity: 0.3, autoOpen: false, draggable: false, 
	 resizable: false, showCloseButton: false , position:'center', collapsed:true});  

    $(JQSel).attr(widgetType, "true");
       return true;
}

function WAL_showWaitPromptWindow(ID, bFlag)
{
	var JQSel = "#"+ID;
	if(bFlag == false)
	{
		$(JQSel).jqxWindow('close');
		return; 
	}
	if(bFlag == true)
	{
		$(JQSel).jqxWindow('open');
		document.body.style.cursor = "wait"; 
		setTimeout(function(){	
			$(JQSel).jqxWindow('close');
			document.body.style.cursor = "auto"; 
		
		}, 2000); 
	}		
	else
		$(JQSel).jqxWindow('close');
}
function WAL_showWindow(windowID, bFlag, refID)
{
	var JQSel = "#"+windowID;
	if(bFlag == false)
	{
		$(JQSel).jqxWindow('close');
		return; 
	}
	if(refID == 'none')
	{
		$(JQSel).jqxWindow('open');
		return; 
	}
		
	var refnode = document.getElementById(refID); 
	JQSel = "#" + refID; 
	var refPos = $(JQSel).position();
	var refWidth, refHeight;
	refWidth = $(JQSel).width(); 
	refHeight = $(JQSel).height(); 
	var CPWdgtPosLeft, CPWdgtPosTop; 
	
	CPWdgtPosLeft = refPos.left + 5;
	CPWdgtPosTop  = refPos.top + refHeight + 48 + 5; 
	//alert("Top = " +refPos.top  + "Left= " + refPos.left ); 
	JQSel = "#"+windowID;
	
	$(JQSel).jqxWindow({ position: { x: CPWdgtPosLeft, y: CPWdgtPosTop }}); 	 
	//$(JQSel).slideDown(); //_rm buggy the close btn is offset because of this 	
	//$(JQSel)[0].style.zIndex = 18000; 
	//$(JQSel).jqxWindow({ modalZIndex: 18000}); 
	$(JQSel).jqxWindow('open'); 
	
	
	
}

function WAL_setWindowAtPos(windowID, left, top){
	var JQSel = "#"+windowID;
	CPWdgtPosLeft = left; //left+ 5;
	CPWdgtPosTop  = top;//top+ 24; 
	
	JQSel = "#"+windowID;	
	$(JQSel).jqxWindow({ position: { x: CPWdgtPosLeft, y: CPWdgtPosTop }}); 
}
function WAL_showWindowAtPos(windowID, bFlag, left, top)
{
	var JQSel = "#"+windowID;
	var bIsShowing = $(JQSel).attr('data-show');
	if(!bIsShowing)
		return ; 
	if( (bFlag == true) && (bIsShowing == 'true'))
			return ;  
			
	if( (bFlag == false) && (bIsShowing == 'true') )
	{
		$(JQSel).jqxWindow('close');
		$(JQSel).attr("data-show", "false"); 
		return; 
	}	
	refWidth = $(JQSel).width(); 
	refHeight = $(JQSel).height(); 
	var CPWdgtPosLeft, CPWdgtPosTop; 
	
	CPWdgtPosLeft = left; //left+ 5;
	CPWdgtPosTop  = top;//top+ 24; 
	//alert("Top = " +refPos.top  + "Left= " + refPos.left ); 
	JQSel = "#"+windowID;
	
	$(JQSel).jqxWindow({ position: { x: CPWdgtPosLeft, y: CPWdgtPosTop }}); 	 
	$(JQSel).slideDown(); //_rm buggy the close btn is offset because of this
	$(JQSel).attr("data-show", "true"); 
	$(JQSel).jqxWindow('open'); 
}

function WAL_createMoveablePopUpWindow(ID, Width, Height, HandlerFnClose)
{
     if (gInitialized != true)
         return false;
     var widgetType = gWidgetType['jqxWindow']; 
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false; 

     var resizable = false;
     var draggable = false;
     var OKBtnID, CancelBtnID;
     
     var myWidth = Width + 'px';
     var myHeight = Height + 'px';

     $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: false, autoOpen: false, draggable: true, resizable: false, closeButtonAction: 'hide', showCloseButton: true });

     $(JQSel).attr(widgetType, "true");

     $(JQSel).on('close', function(event) {
       if (HandlerFnClose) {
             var expr = HandlerFnClose + "(event)";
             eval(expr);
         }
     });
    
     return true;
 }


 function WAL_createbuttonWindow(ID, buttonID, Width, Height, HandlerFnClose) {
     if (gInitialized != true)
         return false;

     var widgetType = gWidgetType['jqxWindow']; 
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;


//getting the title div node and setting its UID 
     var divNode = $(JQSel).get(0);
     divNode = divNode.firstElementChild;
     var nodename = divNode.nodeName.toUpperCase();
     if (nodename != "DIV") {
         alert("Node name = " + nodename);
         return;
     }
     var headerID = ID + "header";
     divNode.setAttribute("id", headerID);      

//now getting the button position w.r.t. which the window will be shown 
     var btnsel = "#" + buttonID;
     var pos = $(btnsel).offset();
     var height = $(btnsel).height();
     var left, top;
     left = pos.left;
     top = pos.top + height + 5;
     
     var myWidth = Width + 'px';
     var myHeight = Height + 'px';

  $(JQSel).jqxWindow({ width: myWidth, height: myHeight, theme: gTheme, showCollapseButton: false, isModal: false, autoOpen: false, draggable: false, resizable: false, closeButtonAction: 'hide', showCloseButton: false,
     position: { x: left, y : top }
     });
   
     
     
    
     $(JQSel).attr(widgetType, "true");
     $(JQSel).attr("data-open", "false");
     
     var hdrsel = "#"+headerID;
     $(hdrsel).hide(); 

     $(JQSel).on('close', function(event) {
    	 $(JQSel).attr("data-open", "false");
         if (HandlerFnClose) {
        	 Debug_Message("Close handled");
             var expr = HandlerFnClose + "(event)";
             eval(expr);
         }
     });
    
    //this will toggle the open and closing of the window from the button

     $(btnsel).on('click', function() {

         var state = $(JQSel).attr("data-open");
         if (state == "true") {
        	 $(JQSel).attr("data-open", "false");
             $(JQSel).jqxWindow('close');
             
         }
         else {
        	 $(JQSel).attr("data-open", "true");
             $(JQSel).jqxWindow('open');
             
         }

     });      

     return true;
 }

 function WAL_createColorPickerWindow(windowID, colorPickerID, Width, Height, OKButtonID, CancelButtonID) {

     WAL_createButton(OKButtonID, '', 'auto', 'auto', true);
     WAL_createButton(CancelButtonID, '', 'auto', 'auto', true);
     var widgetType = gWidgetType['jqxWindow'];
     var retval = WAL_IsWidgetCreated(windowID, widgetType);
     if (retval == true)
         return false;
         
     var JQSel = "#" + colorPickerID;
     var colWidth, colHeight;

     colWidth = Width - 10;
     colHeight = Height - 60;
     $(JQSel).jqxColorPicker({ width: colWidth, height: colHeight, theme: gTheme, showTransparent: false });
     //now create the pop-up window
     //WAL_createWindow(ID,titleID, bTitleBar, Width, Height, Resizable, Draggable, Modal, Collapsable, showClose,  HandlerFnClose, OKButtonID, CancelButtonID )
     //WAL_createWindow(windowID,"", false, Width, Height, false, true, true, false, false, "", OKButtonID, CancelButtonID);
     WAL_createWindow(windowID,"", false, Width, Height, false, true, true, false, false, "", OKButtonID, CancelButtonID);
     JQSel = "#"+windowID;
     $(JQSel).attr('data-colorpickerID',colorPickerID); 
 }

 function WAL_showColorPickerWidget(widgetID, callbackFn, refID, attrName, initAttrVal, targetObjID)
 {
	 var JQSel = "#"+widgetID; 
	 
	 //first get the colorpicker ID 
	 var CPID = $(JQSel).attr('data-colorpickerID'); 
	 if(!CPID)
		 return; 
	 $(JQSel).attr('data-refID', refID); 
	 $(JQSel).attr('data-attrName', attrName);
	 $(JQSel).attr('data-attrValue', initAttrVal);
	 gTargetAttrname = attrName;  
	 
	 $(JQSel).attr('data-targetObjID', targetObjID);
	 if(targetObjID)
		 gTargetColorObj = document.getElementById(targetObjID); 
	 else
		 gTargetColorObj = 0; 
	 
	 //then remove any regsitered call back earlier. 
	 JQSel = "#"+CPID; 
	 $(JQSel).off('colorchange'); 
	 var color; 
	 var bConvertToHex; 
	 var colstr = initAttrVal.substring(0, 3); 
	 if(colstr == 'rgb')
		 bConvertToHex =  true; 
	 else
		 bConvertToHex = false; 	
	 if(bConvertToHex == false)
		 $(JQSel).jqxColorPicker('setColor', initAttrVal);
	 else
	 {
		 color = RGBToHex(initAttrVal); 
		 $(JQSel).jqxColorPicker('setColor', color);
	 }
	 
	 //now register the new callback 
	 $(JQSel).on('colorchange',function(event)
		{
		  var value  = event.args.color.hex; 
		  if(value != undefined)
		  {
			value = "#"+value; 
			if(gTargetColorObj)
			{				
				gTargetColorObj.setAttribute(gTargetAttrname, value);				
			}			
			 if(callbackFn)
			 {
				  var expr = callbackFn + "(attrName, value)"; 
				  eval(expr); 	 
			 }
			  
		  }
		 	  
		}
	 ); 
	 //show up the widget
	var refnode = document.getElementById(refID); 
	JQSel = "#" + refID; 
	var refPos = $(JQSel).position();
	var refWidth, refHeight;
	refWidth = $(JQSel).width(); 
	refHeight = $(JQSel).height(); 
	var CPWdgtPosLeft, CPWdgtPosTop; 
	
	CPWdgtPosLeft = refPos.left + 5;
	CPWdgtPosTop  = refPos.top + refHeight + 48 + 5; 
	//alert("Top = " +refPos.top  + "Left= " + refPos.left ); 
	JQSel = "#"+widgetID;	
	$(JQSel).jqxWindow({ position: { x: CPWdgtPosLeft, y: CPWdgtPosTop }}); 	 
	$(JQSel).slideDown(); 
	
	
	//WAL_hideWidget(widgetID, false); 
	 
 }
 //this will display the widget at specified position from the caller 
 function WAL_showColorPickerWidgetAtPos(widgetID, callbackFn,refID, left, top, attrName, initAttrVal, targetObjID)
 {
	 var JQSel = "#"+widgetID; 
	 
	 //first get the colorpicker ID 
	 var CPID = $(JQSel).attr('data-colorpickerID'); 
	 if(!CPID)
		 return; 
	 var refBtnID = refID; 
	 var refNode = document.getElementById(refBtnID); 
	 $(JQSel).attr('data-refID', refBtnID); 
	 $(JQSel).attr('data-attrName', attrName);
	 $(JQSel).attr('data-attrValue', initAttrVal);
	 gTargetAttrname = attrName;  
	 
	 $(JQSel).attr('data-targetObjID', targetObjID);
	 if(targetObjID)
		 gTargetColorObj = document.getElementById(targetObjID); 
	 else
		 gTargetColorObj = 0; 
	 
	 //then remove any regsitered call back earlier. 
	 JQSel = "#"+CPID; 
	 $(JQSel).off('colorchange'); 
	 var color; 
	 var bConvertToHex; 
	 var colstr = initAttrVal.substring(0, 3); 
	 if(colstr == 'rgb')
		 bConvertToHex =  true; 
	 else
		 bConvertToHex = false; 	
	 if(bConvertToHex == false)
		 $(JQSel).jqxColorPicker('setColor', initAttrVal);
	 else
	 {
		 color = RGBToHex(initAttrVal); 
		 $(JQSel).jqxColorPicker('setColor', color);
	 }
	 
	 //now register the new callback 
	 $(JQSel).on('colorchange',function(event)
		{
		  var value  = event.args.color.hex; 
		  if(value != undefined)
		  {
			value = "#"+value; 
			if(refNode)
				refNode.style.backgroundColor = value; 
			if(gTargetColorObj)
			{				
				gTargetColorObj.setAttribute(gTargetAttrname, value);				
			}			
			 if(callbackFn)
			 {
				  var expr = callbackFn + "(attrName, value)"; 
				  eval(expr); 	 
			 }
			  
		  }
		 	  
		}
	 ); 
	 
	var CPWdgtPosLeft, CPWdgtPosTop; 	
	CPWdgtPosLeft = left;
	CPWdgtPosTop  = top; 	
	JQSel = "#"+widgetID;	
	$(JQSel).jqxWindow({ position: { x: CPWdgtPosLeft, y: CPWdgtPosTop }}); 	 
	$(JQSel).slideDown(); 
 }
 
 
 function WAL_getColorPickerAttributeName(widgetID)
 {
	 var JQSel = "#"+widgetID;	 
	 var attrname = $(JQSel).attr('data-attrName'); 
	 return attrname; 
 }
 
 function WAL_setColorPickerAttributeName(widgetID, attrVal)
 {
	 var JQSel = "#"+widgetID;	 
	 var attrname = $(JQSel).attr('data-attrName', attrVal);	 
 }
 
 function WAL_getColorPickerRefID(widgetID)
 {
	 var JQSel = "#"+widgetID;	 
	 var refID = $(JQSel).attr('data-refID'); 
	 return refID; 
 }
 function WAL_setColorPickerRefID(widgetID, refID)
 {
	 var JQSel = "#"+widgetID;	 
	 $(JQSel).attr('data-refID',refID);	  
 }
 
 
 function WAL_getColorPickerValue(widgetID)
 {
	 var JQSel = "#" + widgetID; 
	 var CPID = $(JQSel).attr('data-colorpickerID'); 
	 if(!CPID)
		 return; 
	 JQSel = "#" + CPID; 
	 var color = $(JQSel).jqxColorPicker('getColor');
	 color = "#" + color.hex; 
	 return color; 
	 
 }
 
 function WAL_setColorPickerValue(widgetID, coloval)
 {
	 var JQSel = "#" + widgetID; 
	 var CPID = $(JQSel).attr('data-colorpickerID'); 
	 if(!CPID)
		 return; 
	 JQSel = "#" + CPID;
	 var color; 
	 var colstr = coloval.substring(0, 3); 
	 if(colstr == 'rgb')
		 bConvertToHex =  true; 
	 else
		 bConvertToHex = false; 
	 
	 if(bConvertToHex == false)
		 $(JQSel).jqxColorPicker('setColor', coloval);
	 else
	 {
		 color = RGBToHex(coloval); 
		 $(JQSel).jqxColorPicker('setColor', color);
	 }
 }
 
 function RGBToHex(rgbcolVal)
 {
     var rgbstr = rgbcolVal.substring(4,rgbcolVal.length-1);
     var rgbarr = rgbstr.split(",");
     var r = parseInt(rgbarr[0]); 
     	 if(r < 16)
     		 r = "0" + r.toString(16);
     	 else
     		r = r.toString(16);         
     var g = parseInt(rgbarr[1]);
	     if(g < 16)
	 		 g = "0" + g.toString(16);
	 	 else
	 		g = g.toString(16);
     var b = parseInt(rgbarr[2]);
	     if(b < 16)
	 		 b = "0" + b.toString(16);
	 	 else
	 		b = b.toString(16);
     return '#' + r + g + b;
}
 

 
 function WAL_createMenu(ID, Width, Height, Mode, HandlerMenuItemClick, itemclickstatusdisplayID) {

     if (gInitialized != true)
         return;

     var widgetType = gWidgetType['jqxMenu'];
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;

     $(JQSel).jqxMenu({ width: Width, height: Height, theme: gTheme, mode: Mode, showTopLevelArrows: true,
    	 easing: 'easeInOutSine', animationShowDuration: 500 });
     $(JQSel).attr(widgetType, "true");
     $(JQSel).css('visibility', 'visible');

     var statusdisp; 
     if(itemclickstatusdisplayID)
    	  statusdisp = "#"+itemclickstatusdisplayID;
     else
    	 statusdisp = ""; 
     
     $(JQSel).on('itemclick', function(event) {
         var args = event.args;
         var itemtext = $(args).text();
         var menuid = args.getAttribute("id");
         var nodesel = "#" + menuid;

         var state = $(nodesel).hasClass('jqx-menu-disabled');
         if(statusdisp)
        	 $(statusdisp).html(itemtext); 
         
         //new trial code 
         // get the clicked LI element.
         var element = event.args;
         if (gLastSelected) {
        	 gLastSelected.css("background-color", "inherit");
         };
         gLastSelected = $("#" + element.id);
         gLastSelected.css("background-color", gMenuSelectionCol);         
         if (state == true)
             return;
         if (HandlerMenuItemClick) {
             var expr = HandlerMenuItemClick + "(event)";
             eval(expr);
         }
     });
     
     $(JQSel).on('shown', function(event){    	 
    	 
     });
    
 }

//one will need to assign ID to the menu items which needs to be toogeld between hide and show 
 function WAL_hideMenu(menuItemID, bFlag) {
     var JQSel = "#" + menuItemID;
     if (bFlag == true)
         $(JQSel).hide(); 
     else
         $(JQSel).show(); 
 }
 
 function WAL_createSlider(ID, Width, Height, bDiscrete, MinValue, MaxValue, Step,tickFreq, bShowTicks, bButtonShow ,HandlerSliderChange, bRangeSlider, HandlerForSlideEnd) {
     if (gInitialized != true)
         return;

     var widgetType = gWidgetType['jqxSlider'];
     var JQSel = "#" + ID;
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;

     var Mode;
     if (bDiscrete == true)
         Mode = 'fixed';
     else
         Mode = 'default';

     $(JQSel).jqxSlider({ width: Width, height: Height, theme: gTheme, mode: Mode, min: MinValue, 
     max: MaxValue, step:Step, ticksFrequency:tickFreq ,ticksPosition:'bottom' , showTicks: bShowTicks, tooltip:true, showButtons:bButtonShow, rangeSlider: bRangeSlider});
     $(JQSel).attr(widgetType, "true");

     $(JQSel).on('change', function(event) {

    	 var flag = $(JQSel).attr('data-internalevent');
         if(flag ==  true)
         {
        	 $(JQSel).attr('data-internalevent', false);
        	 return ;  
         }   	
         var value = $(this).jqxSlider('getValue');
         if(bRangeSlider != true)
        	 value = Math.floor(value);   
         else
         {
        	 value.rangeStart = Math.floor(value.rangeStart);  
        	 value.rangeEnd = Math.floor(value.rangeEnd);  
         }
         if (HandlerSliderChange) {   
        	 var node =  event.target; 
        	 
             var expr = HandlerSliderChange + "(value,node )";
             eval(expr);
         }
     }); 
     $(JQSel).on('slideEnd', function() {

         var value = $(this).jqxSlider('getValue');
         if(bRangeSlider != true)
        	 value = Math.floor(value);
         else
         {
        	 value.rangeStart = Math.floor(value.rangeStart);  
        	 value.rangeEnd = Math.floor(value.rangeEnd);  
         }
         if (HandlerForSlideEnd) {                        
             var expr = HandlerForSlideEnd + "(value)";
             eval(expr);
         }
     }); 
     
 }
 
 function WAL_createNumberInput(ID, Width, Height, HandlerFnForValueChange, bSpinButton, maxValue, minValue, stepValue) {

     var JQSel = "#" + ID;
     var widgetType = gWidgetType['jqxNumberInput'];
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;


     //$(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: false,inputMode: 'simple', decimalDigits: 0, digits: 4 });
     var mode;
     var mySpinBtn = bSpinButton; 
     if(mySpinBtn == true)
    	 mode = 'simple';
     else
    	 mode = 'none'; 
     
    // $(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: bSpinButton,  spinMode: mode, inputMode: 'simple', decimalDigits: 0, digits: 4 });
     
     $(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: mySpinBtn,  spinMode: mode, 
    	 spinButtonsWidth: 20, inputMode: 'simple', decimalDigits: 0, digits: 4, max:maxValue, min: minValue, spinButtonsStep: stepValue});     
   
     
     $(JQSel).attr(widgetType, "true");
     
   //  $(JQSel).on('valuechanged', function(event) {
    //$(JQSel).on('textchanged', function(event){
    $(JQSel).on('change', function(event)		 {
     var flag = $(JQSel).attr('data-internalevent');
     if(flag ==  true)
     {
    	 $(JQSel).attr('data-internalevent', false);
    	 return ;  
     }   	
    
     var value = event.args.value ;//$(this).jqxNumberInput('val'); 
     var node = event.target;    
     if(HandlerFnForValueChange)   
     {
    	 if(value >maxValue ){
    		 Debug_Message('Exceeds Max Value'); 
    	}
         var expr = HandlerFnForValueChange + "(value, node)";         
             eval(expr);
     }     
     }); }
 
 function WAL_createDecimalNumberInput(ID, Width, Height, HandlerFnForValueChange, bSpinButton, maxValue, minValue, stepValue) {

     var JQSel = "#" + ID;
     var widgetType = gWidgetType['jqxNumberInput'];
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;


     //$(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: false,inputMode: 'simple', decimalDigits: 0, digits: 4 });
     var mode;
     var mySpinBtn = bSpinButton; 
     if(mySpinBtn == true)
    	 mode = 'simple';
     else
    	 mode = 'none'; 
     
    // $(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: bSpinButton,  spinMode: mode, inputMode: 'simple', decimalDigits: 0, digits: 4 });
     
   /*  $(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: mySpinBtn,  spinMode: mode, 
    	 spinButtonsWidth: 20, inputMode: 'simple', decimal:3, decimalDigits:1, digits: 3, max:maxValue, min: minValue, spinButtonsStep: stepValue});
    	 */
     $(JQSel).jqxNumberInput({ width: Width, height: Height, theme: gTheme, spinButtons: mySpinBtn,  spinMode: mode, 
    	 spinButtonsWidth: 20, inputMode: 'simple',decimalDigits:1,  max:maxValue, min: minValue, spinButtonsStep: stepValue});
    	        
     $(JQSel).attr(widgetType, "true");
     
    // $(JQSel).on('valuechanged', function(event) {
    //$(JQSel).on('textchanged', function(event){
     //in version 3.7 'valuechanged does not work 
    $(JQSel).on('change', function(event)		 {
     var flag = $(JQSel).attr('data-internalevent');
     if(flag ==  'true')
     {
    	 $(JQSel).attr('data-internalevent', false);
    	 return ;  
     }   	
     var value = event.args.value ; //$(this).jqxNumberInput('val'); 
     var node = event.target;    
     if(HandlerFnForValueChange)     
     {
    	if(value >maxValue )
     	{
     		 Debug_Message('Exceeds Max Value'); 
     	}
         var expr = HandlerFnForValueChange + "(value, node)";
             eval(expr);
     }
     
     });   
 }
 
 
 function WAL_setNumberInputValue(ID, value, bHandlerflag)
 {
	 
	 var JQSel = "#" + ID;
     var widgetType = gWidgetType['jqxNumberInput'];
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == false)
         return false;
     if(bHandlerflag == false)
    	 $(JQSel).attr('data-internalevent', true); 
     else
    	 $(JQSel).attr('data-internalevent', false);
     //$(JQSel).jqxMaskedInput({'value': null});
     //to ensure a string is passed to the function 
     value = '' + value;
     $(JQSel).jqxNumberInput('val', value);
     
 }

 function WAL_getMaskedInputValue(ID)
 {
	 
	 var JQSel = "#" + ID;
     var widgetType = gWidgetType['jqxNumberInput'];
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == false)
         return false;
    var value =  $(JQSel).jqxNumberInput('val');
    return value; 
 }
 
 function WAL_createResizable(ID, HandlerFnForResizeStart,HandlerFnForResizeStop, HandlerForClick,  bGroup, HandlerForResizing) {

     var JQSel; 
     if(bGroup ==  true)
    	 JQSel = "div."+ID;
     else
    	 JQSel = "#"+ID; 
     
     var widgetType = gWidgetType['resizable'];
   /*  var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;

    */
     
     $(JQSel).resizable({animate: true, ghost: true, helper: "resizable-helper", autoHide: true });
     
   //  $(JQSel).resizable({animate: true, ghost: true, autoHide: true });
     $(JQSel).attr(widgetType, "true");
     
     $(JQSel).on('resizestop', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ; 
         var origSize, origHeight;
         origSize = ui.originalSize;
         var currSize = ui.size;
         var node = event.target; 
         if (HandlerFnForResizeStop) {
             var expr = HandlerFnForResizeStop + "(origSize, currSize, node)";
             eval(expr);
         }
     });
     
     $(JQSel).on('resizestart', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ; 
    	 
         var origSize, origHeight;
         origSize = ui.originalSize;
         var currSize = ui.size;
         var node = event.target; 
         if (HandlerFnForResizeStart) {
             var expr = HandlerFnForResizeStart + "(origSize, currSize, node)";
             eval(expr);
         }
     });
     
     
     $(JQSel).on('resize', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ;     	 
         var currSize = ui.size;
         var node = event.target; 
         if (HandlerForResizing) {
             var expr = HandlerForResizing + "(currSize, node)";
             eval(expr);
         }
     });
     
     
     
     if(HandlerForClick)
    {
    	 var str = HandlerForClick + "(event)"; 
         //$(JQSel).attr('onmouseup', str); 
    	 $(JQSel).attr('onclick', str); 
    }
    
     
    
 }

 function WAL_destroyJQryWidget(ID, inwidgetType, bGroup) {
	 var JQSel; 
     if(bGroup ==  true)
    	 JQSel = "div."+ID;
     else
    	 JQSel = "#"+ID; 
     
   /*  var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == false)
         return false;
        */
     var widgetType = gWidgetType[inwidgetType]; 
      $(JQSel).removeAttr(widgetType); 
      
     if (widgetType == 'data-resizable')
    {
    	 $(JQSel).removeAttr('onmouseup');
    	 $(JQSel).resizable('destroy');     
    }
    	         
     else if(widgetType == 'data-draggable')
         $(JQSel).draggable('destroy'); 
      
     
    
 }

 function WAL_createDraggable(ID, HandlerFnForDragStart, HandlerFnForDragEnd, bGroup, HandlerForDragging) {

	 var JQSel; 
     if(bGroup ==  true)
    	 JQSel = "div."+ID;
     else
    	 JQSel = "#"+ID; 
     
     
     var widgetType = gWidgetType['draggable']; 
     
    $(JQSel).draggable({ cursor: "move",containment: "parent"});
    // $(JQSel).draggable({ cursor: "move",containment: "window"});
  /*   var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;

*/
     
     $(JQSel).attr(widgetType, "true");
     $(JQSel).on('dragstop', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ; 
     var currNode = event.target;
     var left = currNode.style.left;
     var top = currNode.style.top;
     var strlen = left.length; 
     left = left.substring(0, strlen - 2);
     strlen = top.length; 
     top = top.substring(0, strlen - 2);
    // alert("Left=" + left + "top="+ top);
     if(left < 0)
     {
    	 currNode.style.left = '1px'; 
     }
     if(top < 0)
     {
    	 currNode.style.top = '1px'; 
     }  	   
     
     
         if (HandlerFnForDragEnd) {
             var expr = HandlerFnForDragEnd + "(left, top, currNode)";
             eval(expr);
         }
     });

     $(JQSel).on('dragstart', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ; 
    	 
         var currNode = event.target;
         var left = currNode.style.left;
         var top = currNode.style.top;
         left  = left.substring(0, left.length-2); 
         top  = top.substring(0, top.length-2); 
         
             if (HandlerFnForDragStart) {
                 var expr = HandlerFnForDragStart + "(left, top, currNode)";
                 eval(expr);
             }
         });
    
     $(JQSel).on('drag', function(event, ui) {
    	 if(event.target != event.currentTarget)
    		 return ; 
    	 
         var currNode = event.target;
         var left = currNode.style.left;
         var top = currNode.style.top;
         left  = left.substring(0, left.length-2); 
         top  = top.substring(0, top.length-2); 
         
             if (HandlerForDragging) {
                 var expr = HandlerForDragging + "(left, top, currNode)";
                 eval(expr);
             }
         });    
 }
//_rm buggy code 
 function setCSSBorder(ID, bFlag) {

     var Node = document.getElementById(ID); 
     if (bFlag == false) {
         Node.style.border = 'none'; 
     }
     else {
         Node.style.border = 'dotted medium green';          
     }
 }


function WAL_DisableMenuItem(MenuID, ItemID, bFlag)
{
	 JQSel = "#"+MenuID;
	 $(JQSel).jqxMenu('disable', ItemID, bFlag); 
}
  /*
    $("#div_selection").resizable({
	    animate: true, ghost: true, helper: "resizable-helper", autoHide: true
	    });
  
  */

function WAL_createBorderWidget(windowID, Width, Height) {

    WAL_createButton('okbtn', '', 'auto', 'auto', true);
    WAL_createButton('cancelbtn', '', 'auto', 'auto', true);
    var widgetType = gWidgetType['jqxWindow'];
    var retval = WAL_IsWidgetCreated(windowID, widgetType);
    if (retval == true)
        return false;        
    
    WAL_createWindow(windowID,"", true, Width, Height,    false, true, false, false, true, "", "", "");
   
}
//WAL_createWindow(ID,titleID, bTitleBar, Width, Height, Resizable, Draggable, Modal, Collapsable, showClose,  HandlerFnClose, OKButtonID, CancelButtonID )
/*
 * This is as per 3.0.4 version of JqxWidget. The previous version didnt have updateItem type
 * APIs hence it was pretty complex to update and add items
 */
function WAL_AddTreeItem(TreeWidgetID, treeElementHTMLStr,parentElement)
{
	var widgetType = gWidgetType['jqxTree'];
    var parentSel = "#" + TreeWidgetID;
    var Node = document.getElementById(TreeWidgetID);
    Node = Node.firstElementChild;    
    var childID;
    if ( (Node) && ('DIV' == Node.nodeName.toUpperCase() )) {
        childID = Node.getAttribute('id');        
    }
    else 
    	return ;     
   gDummyNode = document.getElementById('dummyNode');   
    var JQSel;
    JQSel = "#dummyNode" ;
    $(JQSel).html(treeElementHTMLStr);   
    var newNode = gDummyNode.firstElementChild.cloneNode(false); //this is li node
    gDummyNode.removeChild(gDummyNode.firstElementChild); 
    
    JQSel = "#" + childID;    
    //parentElement.setAttribute('item-expanded', 'true'); 
    newNode.removeAttribute('class'); 
    var parentItem = $(JQSel).jqxTree('getItem', parentElement);  
    $(JQSel).jqxTree('addTo', newNode, parentElement);
    
    var newitem = $(JQSel).jqxTree('getItem', newNode);
    var itemNode = newitem.element; 
   // $(JQSel).jqxTree('selectItem', newNode);
    var attrList = newNode.attributes; 
    for(var i = 0; i <attrList.length; i++ )
    {
    	attrItem = attrList.item(i); 
    	itemNode.setAttribute(attrItem.name, attrItem.value);     	
    }
    
    var nodeLabel = newNode.getAttribute('name'); 
    var ID = newNode.getAttribute('dataid');
    nodeLabel = nodeLabel + '(ID=' + ID + ')'; 
    $(JQSel).jqxTree('updateItem', newNode, {label: nodeLabel});    
    return ; 
  
  
    
}

function WAL_DeleteTreeItem(TreeID, element)
{
	var widgetType = gWidgetType['jqxTree'];
  /*  var parentSel = "#" + TreeWidgetID;
    var Node = document.getElementById(TreeWidgetID);
    Node = Node.firstElementChild;   
    var childID;
    if ( (Node) && ('DIV' == Node.nodeName.toUpperCase() )) {
        childID = Node.getAttribute('id');        
    }
    else 
    	return ; 
    	 */
    var JQSel = "#" + TreeID;        
    $(JQSel).jqxTree('removeItem', element);    
}
function WAL_ClearTreeItem(TreeWidgetID)
{
	var widgetType = gWidgetType['jqxTree'];
    var parentSel = "#" + TreeWidgetID;
    var Node = document.getElementById(TreeWidgetID);
    Node = Node.firstElementChild;
    
    var childID;
    if ( (Node) && ('DIV' == Node.nodeName.toUpperCase() )) {
        childID = Node.getAttribute('id');        
    }
    else 
    	return ; 
    var JQSel = "#" + childID;        
    $(JQSel).jqxTree('clear');    
}
function WAL_SetItemInDropDownList(ID, itemIndex, bInternalEvent)
{
	var JQSel = '#' + ID; 		
	$(JQSel).attr('data-internalevent', bInternalEvent);     
	$(JQSel).jqxDropDownList({selectedIndex: itemIndex });
}

function WAL_SetItemByValueInList(ID, value, bInternalEvent)
{
	var JQSel = '#' + ID;
	
	var item = $(JQSel).jqxDropDownList('getItemByValue', value);
	if(item)
	{
		var index = item.index;
		$(JQSel).attr('data-internalevent', bInternalEvent); 
		$(JQSel).jqxDropDownList({selectedIndex: index });
		if(bInternalEvent == 'true')
			$(JQSel).attr('data-internalevent', 'false');
	}
}
function WAL_createCustomButton(buttonID, clickHandler)
{

    if (gInitialized != true)
        return;
    var widgetType = gWidgetType['customButton']; 
    var JQSel = "#" + buttonID;
    var retval = WAL_IsWidgetCreated(buttonID, widgetType);
    if (retval == true)
        return;
    
	 var btnNode = document.getElementById(buttonID);
    // var attrVal = clickHandler + '(node)';
     var JQSel = "#" + buttonID;     
    // $(JQSel).attr('data-clickhandler', attrVal);
     $(JQSel).addClass('IMG_BTN_ACTIVE');
     $(JQSel).addClass('IMAGE_BUTTON'); 
   /* if(tooltipID != 0)
    {
    	 $(JQSel).attr('data-tooltipID', tooltipID);
    	
    }*/     
     $(JQSel).on('click', function(event) { 	 
         if (clickHandler) {
         	var node = event.target; 
         	
         	//changed due to bootstrap buttons
             var expr = clickHandler + "(event)";
             gLastClickedButtonNode = node; 
             if(gLastClickedButtonNodeID)
            	 $('#'+gLastClickedButtonNodeID).removeAttr('style'); 
             gLastClickedButtonNodeID = node.id;              
             eval(expr);
             
             
           //  $('.IMAGE_BUTTON').removeAttr('style'); 
             //node.style.border = 'ridge 2px #e0e9f5';      
            // node.style.bordeRadius = '5px'; 
            // node.style.boxShadow = '5px 8px 7px #888888';            
             
         }
     });
     
  
}

var gShowDelay = 3000; 
/*
function WAL_createWidgetTooltip(ID)
{
	//var node = document.getElementById(ID); 
	var JQSel = '#' + ID; 
	
	
	 $(JQSel).on('mousemove', function(event){
		 if(gContextTooltip == false)
			 return ; 
	    	var node = event.target; 
	    	var nodeSel = '#'+ node.id; 
	    	var tooltipID = $(nodeSel).attr('data-tooltipID'); 
	     	if(!tooltipID)
	     		return ;    
	     	 gCurrTooltipID = tooltipID; 
	     	 var tooltipSel = '#' + gCurrTooltipID; 
	     	//$(tooltipSel).jqxTooltip('destroy'); 
	     	var tiptext = node.getAttribute('data-tooltiptext'); 
	     	if(!tiptext)
	     		return ; 
	     	gCurrentTooltipOwnerID = node.id; 
	     	var tooltipsrc = '<p><b>'+tiptext + '</b><span class="LINK_TYPES" onclick="OnHelpButton(event)" style="color:#ffff88; font-weight:bold">  Help..</span>' + '</p>';
	     	
	     	var pos = $(nodeSel).offset();  
	     	var height =  new Number($(nodeSel).outerHeight()); 
	     	var top =  new Number(pos.top + height + 6); //   new Number(node.offsetTop + node.offsetHeight +  6); 
	     	var left =  new Number(pos.left + 6);  //new Number(node.offsetLeft + 6);      	
	     	var tipSel = '#' + tooltipID; 	     	
	     	$(tipSel).jqxTooltip({content: tooltipsrc, theme:gTooltipTheme, position:'absolute', showArrow:true,  absolutePositionX:left, absolutePositionY:top, showDelay:gShowDelay});
	     	$(tipSel).jqxTooltip('open');//open(); 
	     	//$(tipSel).jqxTooltip('refresh');
	     });     
}
*/

function OnHelpButton(event){
	 
	// alert('Clicked on me'); 
	 var tooltipSel = '#'+ gCurrTooltipID; 
	 var tooltipOwnerNode = document.getElementById(gCurrentTooltipOwnerID); 
	 $(tooltipSel).jqxTooltip('destroy');  
	 var nodeSel = '#' +gCurrentTooltipOwnerID;  
	 var pos = $(nodeSel).offset();  
  	 var height =  new Number($(nodeSel).outerHeight()); 
  	 var top =  new Number(pos.top + height + 6); //   new Number(node.offsetTop + node.offsetHeight +  6); 
  	 var left =  new Number(pos.left + 6);	
	 
  	 var ttsummary = tooltipOwnerNode.getAttribute('data-tooltiptext'); 
  	 var tthelp = tooltipOwnerNode.getAttribute('data-helptext'); 
	 var tiptext = '<p><b>' + ttsummary + '</b></p>' +  '<p>' + tthelp + '</p>'; // tooltipOwnerNode.getAttribute('data-helptext'); 
	 $(tooltipSel).jqxTooltip({ content: tiptext, position: 'absolute', theme: gTooltipTheme, name: 'movieTooltip', autoHide:true, 
	     	autoHideDelay:10000, closeOnClick: true, showArrow: true, animationShowDelay: 1000,absolutePositionX:left, absolutePositionY:top});
	 $(tooltipSel).jqxTooltip('open'); 

	 
}


function DisableCustomButton(btnID, bFlag) {
    var node = document.getElementById(btnID);
    var JQSel = "#" + btnID; 
    
    if (bFlag == true) {
    	if(gLastClickedButtonNodeID == btnID)
    	{
    		$(JQSel).removeAttr('style'); 
    		gLastClickedButtonNodeID = 0; 
    	}    		
        node.style.opacity = 0.3;
        node.setAttribute('disabled', 'disabled');
        node.removeAttribute('onclick');
        $(JQSel).removeClass('IMG_BTN_ACTIVE'); 
    } else {
        node.style.opacity = 1.0;
        node.removeAttribute('disabled');
        var val = node.getAttribute('data-clickhandler');
        node.setAttribute('onclick', val);
        $(JQSel).addClass('IMG_BTN_ACTIVE'); 
    }
}

function WAL_setSliderValue(ID, value, bHandlerflag)
{
	 var JQSel = "#" + ID; 
	 if(bHandlerflag == false)
    	 $(JQSel).attr('data-internalevent', true); 
     else
    	 $(JQSel).attr('data-internalevent', false);
	$(JQSel).jqxSlider('setValue', value);
}

function WAL_setSliderRangeValues(ID, start, end)
{
	 var JQSel = "#" + ID; 
	 var valueArr = []; 
	 var val1 = new Number(start); 
	 var val2 = new Number(end); 
	 valueArr.push(val1); 
	 valueArr.push(val2); 
	 
	$(JQSel).jqxSlider({values: valueArr});
}

function WAL_setSliderMaxMinValues(ID, Min, Max)
{
	var JQSel = "#" + ID;             
    $(JQSel).jqxSlider({ min: Min }); 
    $(JQSel).jqxSlider({ max: Max }); 
}

function WAL_getSliderValue(ID)
{
	var JQSel = "#" + ID; 
	var value = $(JQSel).jqxSlider('getValue');
	return Math.floor(value);  
}

function WAL_getSliderRangeValues(ID)
{
	var JQSel = "#" + ID; 
	var value = $(JQSel).jqxSlider('getValue');
	value.rangeStart = Math.floor(value.rangeStart);
	value.rangeEnd = Math.floor(value.rangeEnd);
	
	return value;   
}

function WAL_createKeypadButton(Id, HandlerFn)
{

    if (gInitialized != true)
        return;
    var btnNode = document.getElementById(Id);
    var JQSel = "#" + Id;
    $(JQSel).addClass('KEY_PAD');        
    var origWidth, origHeight;
    origWidth = 24; 
    origHeight= 24; 
    $(JQSel).on('mousedown', function(event) {

        if (HandlerFn) {
            var node = event.currentTarget;
            //alert("Target ID=" + event.target.id);
            var nodeclass = node.getAttribute('KEY_CONTAINER');
            if (nodeclass == 'KEY_CONTAINER')
                node = node.firstElementChild;

            if (!node.id)
                return;
            var JQSel = '#' + node.id;
            var bFlag = $(JQSel).hasClass('KEY_PAD');
            if (bFlag != true)
                return;
            
            node.style.borderStyle = 'inset';
            node.style.width = origWidth * 0.9 + 'px';
            node.style.height = origHeight * 0.9 + 'px';

        }
    });

    $(JQSel).on('mouseup', function(event) { 
    var node = event.currentTarget;
    var nodeclass = node.getAttribute('KEY_CONTAINER');
    if (nodeclass == 'KEY_CONTAINER')
        node = node.firstElementChild;

    if (!node.id)
        return;
    var JQSel = '#' + node.id;
    var bFlag = $(JQSel).hasClass('KEY_PAD');
    if (bFlag != true)
        return;
    node.style.width = origWidth + 'px';
    node.style.height = origHeight + 'px';
    node.style.border =''; 
    //node.style.borderStyle = 'none'; 
    var expr = HandlerFn + "(node)";
    eval(expr);
        
    });
}
function WAL_createMenuWindow(ID,titleID, bTitleBar, Width, Height, parentControlID ) {
    if (gInitialized != true)
        return;
   
    var widgetType = gWidgetType['jqxWindow']; 
    var JQSel = "#" + ID;
    var retval = WAL_IsWidgetCreated(ID, widgetType);
    if (retval == true)
        return;
    var prntSel = '#'+parentControlID; 
    var offset = $(prntSel).offset(); 
    offset.top = offset.top+ 24;        
   var Maxscalefactor = 1.25; 
   var Minscalefactor = 0.25; 
   var MaxWidth,MaxHeight, MinWidth, MinHeight;
   
   MaxWidth = Width ; 
   MaxHeight = Height ;  
   MinWidth = Width ; 
   MinHeight = Height ;       
  
    
    var myWidth = Width + 'px'; 
    var myHeight = Height + 'px'; 
   
    
   /* $(JQSel).jqxWindow({width :myWidth, height:myHeight, maxWidth: MaxWidth,  minWidth: MinWidth, maxHeight: MaxHeight,
    minHeight: MinHeight, theme: gTheme, showCollapseButton: Collapsable, isModal: Modal, autoOpen: false, draggable: Draggable, resizable: resizable, closeButtonAction: 'hide', okButton: $(OKBtnID), cancelButton: $(CancelBtnID), showCloseButton: showClose,
    position: { x: offset.left, y: offset.top} });*/
    $(JQSel).jqxWindow({width :myWidth, height:myHeight, maxWidth: MaxWidth,  minWidth: MinWidth, maxHeight: MaxHeight,
        minHeight: MinHeight, theme: gTheme, showCollapseButton: false, isModal: false, autoOpen: false, draggable: false, resizable: false, closeButtonAction: 'hide', showCloseButton: false, position: { x: offset.left, y: offset.top} });

    $(JQSel).attr(widgetType, "true");

    if (bTitleBar == false) {
        var TLSeq = "#" + titleID;
        $(TLSeq).hide(); 
    }
    $(JQSel).attr("data-show", "false");     
 }

function WAL_DetermineBrowserType(){        

    var chrmpattern = new RegExp("firefox", "i");
    var bretval = chrmpattern.test(navigator.userAgent);
    if (bretval == true) {
        browserType = 'FIREFOX';
        gBrowserPrefix = "-moz-";       
        return true;            
    }
    chrmpattern = new RegExp("chrome", "i");
    bretval = chrmpattern.test(navigator.userAgent);
    if (bretval == true) {
        browserType = 'CHROME';        
        gBrowserPrefix = "-webkit-";       
        return true;       
    }
    chrmpattern = new RegExp("msie", "i");
    bretval = chrmpattern.test(navigator.userAgent);
    if (bretval == true) {
        browserType = 'MSIE';        
        gBrowserPrefix = "-msie-";       
        return true;      
    }
    gBrowserPrefix = ""; 
    return false; 
    
}


function WAL_createTab(ID,  Height, fnSelectHandler)
{
	var JQSel = "#"+ID; 	
	
	$(JQSel).jqxTabs({ width: '98%', height: Height, position: 'top', theme: gTheme, animationType: 'fade',
        selectionTracker: true, enableDropAnimation: false, keyboardNavigation: false });

    $(JQSel).on('selected', function(event) {
    	if(fnSelectHandler)
    	{
    		var selectedTabIndex  = event.args.item;
    		var expr = fnSelectHandler + '(' + selectedTabIndex + ')'; 
    		eval(expr);  
    	}	
        
    });
    
    

}

function WAL_SetTabIndex(ID, index)
{
	var JQSel = "#"+ID; 	
	$(JQSel).jqxTabs('select', index); 
}

function WAL_CreateTextInput(ID, Width, Height, bDisabled, HandlerFnForValueChange)
{
	 var JQSel = "#" + ID;
     var widgetType = gWidgetType['jqxInput'];
     var retval = WAL_IsWidgetCreated(ID, widgetType);
     if (retval == true)
         return false;     
    $(JQSel).jqxInput({ width: Width, height: Height, theme: gTheme, disabled: bDisabled });     
     $(JQSel).attr(widgetType, "true");
     
     $(JQSel).on('change', function(event) {   	 
	     var flag = $(JQSel).attr('data-internalevent');
	     if(flag ==  'true')
	     {
	    	 $(JQSel).attr('data-internalevent', false);
	    	 return ;  
	     }   	
	     var value = $(this).jqxInput('val'); 
	     var node = event.target;    
	     if(HandlerFnForValueChange)     
	     {
	         var expr = HandlerFnForValueChange + "(value, node)";
	         eval(expr);
	     }     
     });
}
     
function WAL_getInputValue(ID)
{    	 
    	 var JQSel = "#" + ID;
         var widgetType = gWidgetType['jqxInput'];
         var retval = WAL_IsWidgetCreated(ID, widgetType);
         if (retval == false)
             return false;
        var value =  $(JQSel).jqxInput('val');
        return value; 
}

function WAL_setTextInputValue(ID, text, bHandlerflag)
{    	 
    	 var JQSel = "#" + ID;
         var widgetType = gWidgetType['jqxInput'];
         var retval = WAL_IsWidgetCreated(ID, widgetType);
         if (retval == false)
             return false;
         if(bHandlerflag == false)
        	 $(JQSel).attr('data-internalevent', true); 
         else
        	 $(JQSel).attr('data-internalevent', false);      
        
         $(JQSel).jqxInput('val', text);        
}

function WAL_SetMenuItem(menuID, itemID)
{
	var JQSel = '#' + menuID; 		
	$(JQSel).jqxMenu('openItem', itemID);	
}

function WAL_createContextMenu(ID, containerID,  HandlerMenuItemClick, width, height)
{
	   var JQSel = '#'+ID; 
	   var contextMenu = $(JQSel).jqxMenu({ width: width, height:height, autoOpenPopup: false, mode: 'popup',theme: gTheme});
    // open the context menu when the user presses the mouse right button.
    var menuNode =  document.getElementById(ID); 
    //var parSel = '#' + menuNode.parentNode.parentNode.id; //'#' + menuNode.parentNode.previousElementSibling.id;            
    var parSel = '#' + containerID;
    $(parSel).on('mousedown', function (event) {
        var rightClick = isRightClick(event) || $.jqx.mobile.isTouchDevice();
        if (rightClick) {
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            gCMLeftPos = parseInt(event.clientX) + 5 + scrollLeft; 
            gCMTopPos  = parseInt(event.clientY) + 5 + scrollTop; 
            contextMenu.jqxMenu('open', gCMLeftPos, gCMTopPos);
            gbContextMenuShow = true; 
            return false;
        }              
    }); 
    
    $(document).on('contextmenu', function (e) {
        return false;
    });    
   
    
    $(JQSel).on('itemclick', function(event) {
        var args = event.args;
        var itemtext = $(args).text();
        var menuid = args.getAttribute("id");
        var nodesel = "#" + menuid;
        gbContextMenuShow = false; 
        var state = $(nodesel).hasClass('jqx-menu-disabled');            
        if (state == true)
            return;
        if (HandlerMenuItemClick) {
            var expr = HandlerMenuItemClick + "(menuid)";
            eval(expr);
        }
    });
}

function isRightClick(event) {
    var rightclick;
    if (!event) var event = window.event;
    if (event.which) rightclick = (event.which == 3);
    else if (event.button) rightclick = (event.button == 2);
    return rightclick;
}

function WAL_createGrid(ID, Width, Height, handlerFnName, rowHeight, bPageable, pageSize, colArray, Group){
	
	var JQSel = '#'+ID; 
	var bGroupable = false; 
	 var groupname = ''; 
	 if(Group.length > 1){
		 bGroupable = true; 
		 groupname = [ '' +  Group + '' ]  ;//[ "category" ] 
	 }
	//var dataAdapter = new $.jqx.dataAdapter(DataSource);
	/*$(JQSel).jqxGrid(
		{
			width: Width, height: Height, theme: gTheme, columnsresize: true, enabletooltips:true, pageable: bPageable, pagesize: pageSize, rowsheight: rowHeight, groupable: bGroupable, groups: groupname,
			columnsmenu: true, columns: colArray
		}); 
	*/
	$(JQSel).jqxGrid(
			{
				width: Width, height: Height, theme: gTheme, columnsresize: true, enabletooltips:true, pageable: bPageable, pagesize: pageSize, rowsheight: rowHeight, groupable: bGroupable, groups: groupname,
				columnsmenu: true, columns: colArray, enabletooltips: true, showgroupsheader: false
			}); 
		
	$(JQSel).on('rowselect', function (event) 
	{
			    var args = event.args; 
			    var row = args.rowindex;
			    var selectedObj = args.row; 
			    if(handlerFnName){
			    	var str = handlerFnName + '(selectedObj)' ; 
			    	eval(str); 
			    }			   
	});
}

function WAL_setSourceColumn(ID, source){
	var JQSel = '#'+ID; 
	 
	var dataAdapter = new $.jqx.dataAdapter(source);
	$(JQSel).jqxGrid({
		source: dataAdapter				
	}); 
}

function WAL_ClearGridSelection(ID){
	var JQSel = '#'+ID; 
	$(JQSel).jqxGrid('clearselection');
}

function WAL_getCurrentGridRowSelection(ID){
	var JQSel = '#'+ID; 
	var rowindex = $(JQSel).jqxGrid('getselectedrowindex');
	return rowindex; 
}

function WAL_setCurrentGridRowSelection(ID, rowIndex){
	var JQSel = '#'+ID; 
	$(JQSel).jqxGrid('selectrow', rowIndex);
}

function WAL_getGridRowData(ID, index){
	var JQSel = '#'+ID; 
	var data = $(JQSel).jqxGrid('getrowdata', index);
	return data; 
}

function WAL_getGridSelectedRowData(ID){
	var JQSel = '#'+ID; 
	var rowindex = $(JQSel).jqxGrid('getselectedrowindex');	
	if(rowindex >= 0)
		var data = $(JQSel).jqxGrid('getrowdata', rowindex);
	else
		data = 0; 	
	return data; 
}


/*
$("#jqxgrid").jqxGrid(
		 {
		 width: 200,
        source: dataAdapter,
        columnsresize: true,
        columns: [
			{ text: 'Image', datafield: 'filename', width: 70, cellsrenderer: imagerenderer }	,
			{text: '�ategory', datafield:'category', width:120}
           ], 
                 
         enabletooltips:true,
         sortable: false,
         editable: false,
         editmode: 'click',
         pageable:true,
         pagesize : 5,
         rowsheight : 50
});
*/

function WAL_CreatePopOver(ID, refID, title, bModal, Width, Height, bCloseBtn){
	
	//popover 
	var JQSel = '#' + ID; 	
    $(JQSel).jqxPopover({
  	     theme: gTheme,
         width: Width,
         height: Height,
         showArrow: true,
         showCloseButton: bCloseBtn,
         arrowOffsetValue: 0,
         selector: $('#'+refID) , 
         title:title,
         isModal: bModal, 
         animationType: 'fade'
     });	
}

function WAL_CreateNotification(ID, timeOut, Width){
	var JQSel = '#' + ID; 	
	var msgNodeID = $(JQSel)[0].firstElementChild.id; 
	$(JQSel).attr('data-msgnodeid',msgNodeID ); 
	$(JQSel).jqxNotification({width: Width, position: "top-left", opacity: 0.9, autoOpen: false, animationOpenDelay: 400, autoClose: true, autoCloseDelay: timeOut,
		template: "info", animationCloseDelay: 10, theme: gTheme});
	
}
/*
 * type == 'info' , 'warning', 'success' , 'error', 'mail', 'time'
 */
/*
 * 'top-left' 'top-right', 'bottom-left' , 'bottom-right'
 */
function WAL_ShowNotification(ID,type, msgString, timeout, refID, offset, Position, bBlink){
	var JQSel = '#' + ID; 	
	$(JQSel).jqxNotification('closeAll');
	var id = $(JQSel).attr('data-msgnodeid');
	var msgNode = document.getElementById(id); 
	msgNode.innerHTML = msgString; 
	var appendContanerID = ''; 
	var displayTime = 3000; 
	if(refID)
		appendContanerID = '#'+refID; 
	if(timeout)
		displayTime = timeout; 
	var dispOffset = 0; 
	if(offset)
		dispOffset = offset; 	
	var dispPos = 'top-left'; 
	if(Position)
		dispPos = Position; 
	
	var bBlinkVal = true; 
	if(bBlink)
		bBlinkVal = bBlink;
	$(JQSel).jqxNotification({template: type, autoCloseDelay: timeout, appendContainer: appendContanerID,
		position: dispPos, notificationOffset: dispOffset, blink: bBlinkVal, animationOpenDelay:500, animationCloseDelay: 1000}); 
	
	/*if(type)
		$(JQSel).jqxNotification({template: type, }); 
	if(timeout)
		$(JQSel).jqxNotification({autoCloseDelay: timeout});
		*/
	
	$(JQSel).jqxNotification('refresh');
	$(JQSel).jqxNotification('open'); 
}

function WAL_HideNotification(ID){
	$(JQSel).jqxNotification('closeAll'); 
}


function WAL_ShowPopover(ID, bFlag){
	
	var JQSel = '#' + ID;
	if(bFlag == true)
		$(JQSel).jqxPopover('open'); 
	else
		$(JQSel).jqxPopover('close'); 
}

var gClickEvent = 0; 
function WAL_TriggerEvent(eventType, ID){
	var currentEventToTrigger = 0; 
	if(eventType == 'click'){
		if(!gClickEvent){
			gClickEvent = new MouseEvent(eventType, {
			    'view': window,
			    'bubbles': true,
			    'cancelable': true
			  });
		}
		currentEventToTrigger = gClickEvent; 
	}
	
	$('#' + ID)[0].dispatchEvent(currentEventToTrigger); 
	
}