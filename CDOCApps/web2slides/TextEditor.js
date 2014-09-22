/*********************************
Application Handler Functions written here 

for example. Th ehandler should not be part of HTML
because then CDOCWAL APIs will fail
* TextEditor functions _rm 
 * THIS SECTION OF THE CODE SHOULD BE ALL HANDLER FUNCTIONS RELATED TO UI EVENTS WHICH IN TURN WILL 
 * CALL THE BACKEND FUNCTIONS FOR DATA OPERATIONS 
 * THE FUNCTION NAMING CONVENTION IS TE_UIItemID()

*********************************/

// ALL GLOBAL VARIABLES DECLARED HERE 

/*
var myAjaxObj = 0; 
var wksNode=0;
var gCurrentTreeNode = 0;
var gPreviousTreeNode = 0; 
var gTimeOut = 5000; //milisec

var gWKSInfoString = "";
var gProjInfoString = "";

var gCurrentPageID = 0;
var gTreeWidgetID = 'node_panel'; 
var gTreeNodeID = 'node_container'; 
//STYLE_SUB_ATTRIBUTE OR ATTRIBUTE as op_type 

var gEditList = [["OBJECTID","OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
var gObjectContainerProperty = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
var gObjectPropertyEditList = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
//var bObjectPropertyEdit = false;
var bObjectContainerEdit = false; 

var gCurrentObjContainerNode = 0;
var gPrevObjContainerNode = 0; 
var gCurrentDivObjID = 0;
var gCurrentObjectID = 0;
var gObjContainerStylechange = false;
var gPreviousObjAttrList;
var gCurrentObjAttrList;
//var gEditList;
var gScaleFactorX = 1.0;
var gScaleFactorY = 1.0;
var gSourceObjectIDToCopy = 0;  //will store only the Treenode ID
var gbPageLoaded = false;
var gbObjectEditMode = false;
var gSpanList = [["id", "start", "end"]];
var gTextSelectionObject = 0;
var gCurrSpanNode = 0;
var gCurrentTextBorderType = 0;
var gHTMLObjectType = "none"; 
var gStyleAttribute = 0; 
var gWorkspaceMessage = "<div id='msg_container'><div class='MESSAGE'  style='border:dashed thin grey; position: relative; top: 60px; left: 10px; height: 40px'><b><u>To Open a Project:</u></b> Select a Project from Left Tree Window and choose the option<i><b> Home->Open Project</b></i> from the Menu</div>" +
		                  "<div  class='MESSAGE' style='border:dashed thin grey; position: relative; top: 70px; left: 10px; height: 40px'><b><u>To Create a Project:</u></b>Choose the option<i><b> Home->New Project</b></i> from the Menu</div></div>"; 

var gPageInfoMessage = "<div style='border:dashed thin grey; position: relative; top: 60px; left: 10px; height: 40px'><b><u>To Modify a Page:</u></b> Select a Page from Left Tree Window and choose the option<i><b> Edit->Modify</b></i> from the Menu</div>" +
"<div style='border:dashed thin grey; position: relative; top: 70px; left: 10px; height: 40px'><b><u>To Insert a Page:</u></b>Choose the option<i><b> Insert->Page</b></i> from the Menu</div>"; 
var gCurrentTreeInfoType = 0;  //will keep track of what info type is being shown currently 
// ALL FUNCTIONS DEFINED HERE 
var gCurrentProjectID = 0; 
var gbMultiSelection = false; 
var gMultiSelNodeList = []; 
 
// these denote different possible views depnding on which the handler function 
//can handle data. So one may avoid writing multiple handlders
var gbDocumentView = 0 ; //WORKSPACE, PROJECT, PAGE, TEXT_EDITOR
*/
/***
 
 */
var bObjectContainerEdit = false; 
var gCurrentEditableDIVObjectID = 0;
var gCurrentEditableObjectID = 0; 
var gCurrSpanNode = 0;
var gTextSelectionObject = 0;
var gTextObjEditList = [["OBJECTID","OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
var gObjectPropertyEditList = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
var gObjectContainerProperty = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
var gSpanList = [["id", "start", "end"]];

var gStyleAttribute = 0;

var gTE_ButtonWidth = '20'; 
var gTE_ButtonHeight='18'; 
var gTE_DDLHeight = '24' ; //'26px'
var gTE_EditWidth = "35"

var gCurrMathNode = 0;

var gCurrentTextBorderType = 0;
var gRootNode = 0; 
var gCommonAncestorNode = 0; 
var gPrevColor = null; 
var gFirstTimeColor = true; 
var gLastSpanID = 0; 
var gTESaveDlgID = 'txtpromptSaveDlg'; 
var gTEOverrideDlgID = 'txtpromptOverrideDlg'; 
var gIntermediateNodes = []; 
var gfontFamily = []; 

gfontFamily['Georgia']            =    'Georgia, serif'    ;                                 
gfontFamily['Palatino Linotype']  =    '\"Palatino Linotype\", serif'  ;       
gfontFamily['Book Antiqua']       =    '\"Book Antiqua\", serif'  ;            
gfontFamily['Palatino']           =    'Palatino, serif'      ;                
gfontFamily['Times New Roman']    =    '\"Times New Roman\",serif'     ;       
gfontFamily['Times']              =    'Times, serif'      ;                   
gfontFamily['Arial']              =    'Arial, sans-serif'    ;                
gfontFamily['Helvetica']          =    'Helvetica, sans-serif'   ;             
gfontFamily['Arial Black']        =    '\"Arial Black\", sans-serif'      ;    
gfontFamily['Gadget']             =    'Gadget, sans-serif'     ;              
gfontFamily['Comic Sans MS']      =    '\"Comic Sans MS\", sans-serif'    ;    
gfontFamily['Cursive']            =    'cursive, sans-serif';                  
gfontFamily['Impact']             =    'Impact, sans-serif';                  
gfontFamily['Charcoal']           =    'Charcoal, sans-serif'  ;               
gfontFamily['Lucida Sans Unicode']=    '\"Lucida Sans Unicode\", sans-serif';  
gfontFamily['Lucida Grande']      =    '\"Lucida Grande\", sans-serif';        
gfontFamily['Tahoma']             =    'Tahoma, sans-serif' ;                  
gfontFamily['Geneva']             =    'Geneva, sans-serif' ;                  
gfontFamily['Trebuchet MS']       =    '\"Trebuchet MS\", sans-serif' ;        
gfontFamily['Verdana']            =    'Verdana, Geneva, sans-serif';          
gfontFamily['Courier New']        =    '\"Courier New\", Courier, monospace' ; 
gfontFamily['Lucida Console']     =    '\"Lucida Console\", Monaco, monospace';


var Preview = {
        delay: 250,        // delay after keystroke before updating

        preview: null,     // filled in by Init below
        buffer: null,      // filled in by Init below

        timeout: null,     // store setTimout id
        mjRunning: false,  // true when MathJax is processing
        oldText: null,     // used to check if an update is needed

        //
        //  Get the preview and buffer DIV's
        //
        Init: function() {
            this.preview = document.getElementById("MathPreview");
            //this.buffer = document.getElementById("MathBuffer");
        },

        //
        //  Switch the buffer and preview, and display the right one.
        //  (We use visibility:hidden rather than display:none since
        //  the results of running MathJax are more accurate that way.)
        //
        SwapBuffers: function() {
            var buffer = this.preview, preview = this.buffer;
            this.buffer = buffer; this.preview = preview;
            buffer.style.visibility = "hidden"; buffer.style.position = "absolute";
            preview.style.position = ""; preview.style.visibility = "";
        },

        //
        //  This gets called when a key is pressed in the textarea.
        //  We check if there is already a pending update and clear it if so.
        //  Then set up an update to occur after a small delay (so if more keys
        //    are pressed, the update won't occur until after there has been 
        //    a pause in the typing).
        //  The callback function is set up below, after the Preview object is set up.
        //
        Update: function() {
            if (this.timeout) { clearTimeout(this.timeout) }
            this.timeout = setTimeout(this.callback, this.delay);
        },

        //
        //  Creates the preview and runs MathJax on it.
        //  If MathJax is already trying to render the code, return
        //  If the text hasn't changed, return
        //  Otherwise, indicate that MathJax is running, and start the
        //    typesetting.  After it is done, call PreviewDone.
        //  
        CreatePreview: function() {
            Preview.timeout = null;
            if (this.mjRunning) return;
            var text = document.getElementById("MathInput").value;
            if (text === this.oldtext) return;
            var textareastr = '`' + text + '`';
            this.preview.innerHTML = this.oldtext = textareastr;
            this.mjRunning = true;
            MathJax.Hub.Queue(
      ["Typeset", MathJax.Hub, this.buffer],
      ["PreviewDone", this]
    );
        },

        //
        //  Indicate that MathJax is no longer running,
        //  and swap the buffers to show the results.
        //
        PreviewDone: function() {
            this.mjRunning = false;
            //this.SwapBuffers();
        }

    };

//
//  Cache a callback to the CreatePreview action
//
Preview.callback = MathJax.Callback(["CreatePreview",Preview]);
Preview.callback.autoReset = true;  // make sure it can run more than once





function TE_Initialize()
{
	  WAL_Initialize();	
     /* WAL_createMenu("txtEditMenu", '450px', '25px', 'horizontal', "TE_MenuItemClick", "actionText");*/
	  
	 
      
      var panel1 = [{ size: '15%', resizable: false, collapsible: false}];
      WAL_createSplitter('splitterContainer', '100%', '600px', 'horizontal', panel1);
      $('#splitterContainer').jqxSplitter('hideCollapseButtonAt', 0);
     
      var JQSel = ".PROPERTY_UI";
      $(JQSel).hide(); 
      
      TE_InitializeToolbar(); 
      TE_InitializeTextObjectForEdit();
      
      
}


function ButtonHandler(event) {
    alert("Ha ! Ha ! you clicked my arse"); 
}
function TE_MenuItemClick(itemID)
{
	var URI = gAppURI; //?modid=WKSM&reqid=100&type=XML";
	//alert("You clicked" + itemID); 
	var newObjectType; 
	switch(itemID)
	{
	case 'back_icon':
		TE_menu_close(); 
		break;	
	case 'save_icon':
		TE_menu_save(); 
		break; 
	case 'TE_menu_copy':
		TE_menu_copy(); 
		break; 
	case 'TE_menu_paste':	
		TE_menu_paste(); 
		break; 
	case 'TE_menu_undo':	
		TE_menu_undo(); 
		break; 
	case 'TE_menu_redo':	
		TE_menu_redo(); 
		break; 
	case 'TE_menu_font':	
		TE_menu_font(); 
		break; 
	case 'TE_menu_text':	
		TE_menu_text(); 
		break; 
	case 'TE_menu_outliner':	
		TE_menu_outliner(); 
		break; 
	case 'TE_menu_preview':	
		TE_menu_preview(); 
		break; 
	case 'TE_menu_help':	
		TE_menu_help(); 
		break; 
		
	
		
	}
	
}

function TE_menu_close()
{

	var listlen  = gTextObjEditList.length; 
	if(listlen > 1)
		WAL_showModalWindow(gTESaveDlgID,"TE_save_yes_handler", "TE_save_no_handler");
	else
		TE_save_no_handler(); 
	
}
//_rm a trial code to check para adding 
       
function TE_save_yes_handler()
{
	TE_menu_save(); 
	TE_save_no_handler(); 
	
}

function TE_save_no_handler()
{
	myWindow = window.open('CommonEditor.html', '_self', '');
    myWindow.resizeTo(screen.width, screen.height);
    myWindow.moveTo(50, 50);
    myWindow.focus();
}
function TE_menu_import()
{
	
}       		

function TE_menu_export()
{
	alert('TE_menu_export');
} 		

function TE_menu_save()
{
	TE_SaveObjectData(gCurrentEditableObjectID); 	
	TE_InitializeTextObjectForEdit(); 

} 		

function TE_menu_copy()
{
	alert('TE_menu_copy');
} 		
 
function TE_menu_paste()
{
	alert('TE_menu_paste');
} 		
 
function TE_menu_undo()
{	
	var retval = DH_Undo(gTextObjEditList, 0); 
    if(retval)
    	gTextObjEditList = retval; 
    
    if (retval == null) {    	
    	WAL_DisableMenuItem('txtEditMenu', 'TE_menu_undo', true);    	 
    }
    else {    	 
    	WAL_DisableMenuItem('txtEditMenu', 'TE_menu_redo', false);
    }
	
} 		
 
function TE_menu_redo()
{
	//DH_Redo(gTextObjEditList, 0); 
	
	var retval = DH_Redo(gTextObjEditList, 0); 
    if(retval)
    	gTextObjEditList = retval; 
    
    if (retval == null) {    	
    	WAL_DisableMenuItem('txtEditMenu', 'TE_menu_redo', true);    	 
    }
    else {    	 
    	WAL_DisableMenuItem('txtEditMenu', 'TE_menu_undo', false);
    }
} 		
 
function TE_menu_font()
{
	
	var JQSel = ".PROPERTY_UI"; 
	$(JQSel).hide(); 
	JQSel = "#font_properties";
	$(JQSel).show(); 
} 		
 
function TE_menu_text()
{
	var JQSel = ".PROPERTY_UI"; 
	$(JQSel).hide(); 
	JQSel = "#text_properties";
	$(JQSel).show(); 
} 		
 
function TE_menu_outliner()
{
	var JQSel = ".PROPERTY_UI"; 
	$(JQSel).hide(); 
	JQSel = "#text_color_properties"; 
	$(JQSel).show(); 
} 		
 
function TE_menu_preview()
{
	var URLstr = DH_getPageURL();
	if(!URLstr)
		return;
	
    //open a new window with page title
    var myWindow = window.open(URLstr, '', '');
    myWindow.resizeTo(screen.width, screen.height);
    myWindow.moveTo(50, 50);
    myWindow.focus(); 
} 		
 
function TE_menu_help()
{
	alert('TE_menu_help');
} 		

function TE_UpdateDataPanel(string)
{
	var dataNode = document.getElementById('objectdata_panel'); 
	dataNode.innerHTML = string; 
	
}

function TE_InitializeTextObjectForEdit() {

	
	if(!gCurrentEditableDIVObjectID)
		return ;    
    gCurrentEditableObjectID = gCurrentEditableDIVObjectID.substring(4); 
  /*  var type = node.getAttribute('data-type');
   
    if(type == 'HTMLOBJECT')
    {
    	var str = "<p id='p44234'> Choose a HTML Text Object using <img src='style/icons/Version1/texthelp.png'  style='display:inline-block; height:16px'/> button above </p>";
    	node.innerHTML = str; 
    }
    */
    
    var JQSel = "#" + gCurrentEditableDIVObjectID;

    var paranode = document.getElementById(gCurrentEditableObjectID);
    if(!paranode)
	   return ; 
   
    TE_AddTextEditingAttributes(gCurrentEditableObjectID);
    //NOW SHOW THE PARA OBJECT
    
   
    
    
}


function TE_AddTextEditingAttributes(ObjectID) {

    var divObjectID = "DIV_" + ObjectID;
    
    var divNode = document.getElementById(divObjectID);
    gCurrSpanNode = divNode.firstElementChild.firstElementChild;    
    var JQObjSel = "#" + ObjectID;
    $(JQObjSel).attr("contenteditable", "true");
    
  //  WAL_createResizable(divObjectID, '', '','',false);
    
    
     var JQSel = "#" + divObjectID;
    
     $(JQSel).attr("ondblclick", "TE_OnDivDblClick(event)");
     //$(JQSel).attr("contenteditable", "true");
        
    
    JQSel = "span.textproperty";
    $(JQSel).attr("onclick", "TE_OnSpanSelection(event)");

    $(JQSel).hover(function() {
        $(this).css("border", "dashed thin red");
    }, function() {
        if (gCurrSpanNode != this)
            $(this).css("border", "none");        
    }
    ); 
    
    
    //_rm temporary code to check div node outerHTMl
   
   
    
}

function TE_OnDivDblClick(event) {

	var Node =  event.target;	
	var id = Node.getAttribute('id');
	var JQSel = "#"+id; 
	if(true != $(JQSel).hasClass('OBJECT_CONTAINER'))
		return ; 
	
	var rootNode = Node.firstElementChild.firstElementChild;  
    TE_ClearSpanBorder();
    gCurrSpanNode = rootNode; 
}

function TE_ClearSpanBorder() {
    if (gCurrSpanNode) {

        gCurrSpanNode.style.border = "none";
        gCurrSpanNode = 0;
        //clear the border if any 
    }
}

function TE_OnSpanSelection(event) {

    var node = event.target;
    var startNode = node;  //document.getElementById("span123");
   
    
    TE_SelectSpan(node); 
    event.stopImmediatePropagation();
 /*   gTextSelectionObject = document.getSelection();
    gTextSelectionObject.selectAllChildren(gCurrSpanNode);
    */
    
}

function TE_SelectSpan(Node)
{
	 if (gCurrSpanNode) {
	        gCurrSpanNode.style.border = "";
	    }
	    gCurrSpanNode = Node;
	    gCurrSpanNode.style.border = "dotted thin red";
	    
	 //   gTextSelectionObject = document.getSelection();
	   // gTextSelectionObject.selectAllChildren(gCurrSpanNode);   
	    
}

function TE_FontPropertyDDLHandler(event, value)
{
	var type;
	var node = event.target;
	var subattrname = node.getAttribute('type');
	var subattrval = value;
	
	//if(type == 'fontFamily')
	//	subattrval = gfontFamily[subattrval]; 
	TE_setFontStyle(subattrname, subattrval); 

	 
		
}

function TE_setFontStyle(subattrname, insubattrval, defaultAttrVal)
{
	var subattrval  = insubattrval; 
	
   if(subattrname == 'textAlign')
   {
	   TE_InsertStyleInElement(gCurrentEditableObjectID,  true, subattrname, subattrval, true);
	   return ; 
   }
	
	
  if (gCurrSpanNode) {
        //set the span style                  
   var spanID = gCurrSpanNode.getAttribute("id");
   var currAttrval; 
  
	  //to toggle the values between default and real 
	  var expr = "gCurrSpanNode.style." + subattrname;
	  currAttrval = eval(expr);
	 if(currAttrval == subattrval)
	 {
		 if(defaultAttrVal)
			 subattrval = 	defaultAttrVal;		 
	 }
	 	 
  TE_InsertStyleInElement(spanID,  true, subattrname, subattrval, true);
  return;
}                    
             
TE_FormatText(subattrname,subattrval, true);
}

function TE_InsertStyleInElement(ElementId, bsubAttribute, AttrName, AttrVal, bStoreInEditList) {

    var prevValue;    
    var elemNode = document.getElementById(ElementId);
    var EditPropertyflag; 
    if(bsubAttribute == true)
	{
    	var expr = "elemNode.style." + AttrName;
	    prevValue = eval(expr);
	    expr = "elemNode.style." + AttrName + "='" + AttrVal + "'";
	    eval(expr);
	    EditPropertyflag = "STYLE_SUB_ATTRIBUTE";
	}
    else
	{
    	prevValue = elemNode.getAttribute(AttrName); 
    	elemNode.setAttribute(AttrName,AttrVal ); 
    	EditPropertyflag = "ATTRIBUTE";
	}   
    if(bStoreInEditList ==  true)
    	DH_AddObjectPropertyToEditList(gTextObjEditList, ElementId, EditPropertyflag, AttrName, AttrVal, prevValue); 
}


function TE_FormatText(subAttrName, subAttrVal, bStoreInEditList) 
{

    var spanID = DH_GetUniqueID("span");
    gLastSpanID = spanID; 

   // Debug_Message("Format is being called"); 
    TE_getSelection();
    var midSpanlist = gIntermediateNodes; 
   // Debug_Message("Span list len = " + midSpanlist.length); 
    
    if (gTextSelectionObject.anchorNode == gTextSelectionObject.focusNode)    	
    {
    	var name = gTextSelectionObject.anchorNode.nodeName.toUpperCase(); 
    	if (name == '#TEXT')
    	{
    		spanID = TE_InsertSpanInText(gTextSelectionObject.anchorNode, gTextSelectionObject.anchorOffset, gTextSelectionObject.focusOffset);
    		var spanNode =  document.getElementById(spanID);     		
    		TE_SelectSpan(spanNode); 
            
            if(subAttrName != "style")
            	 TE_InsertStyleInElement(spanID, true, subAttrName, subAttrVal, bStoreInEditList);
            else
            	TE_InsertStyleInElement(spanID, false, subAttrName, subAttrVal, bStoreInEditList);
    	}
    	else
    	{
    		var elemID = gTextSelectionObject.anchorNode.getAttribute('id'); 
    		if(subAttrName != "style")
           	 TE_InsertStyleInElement(elemID, true, subAttrName, subAttrVal, bStoreInEditList);
           else
           	TE_InsertStyleInElement(elemID, false, subAttrName, subAttrVal, bStoreInEditList);
    	}
        
       
    }
    else {
      /*  var start, end;       
        start = gTextSelectionObject.anchorOffset;
        end = gTextSelectionObject.anchorNode.length;
        spanID = TE_InsertSpanInText(gTextSelectionObject.anchorNode, start, end);
        if(subAttrName != "style")
       	 TE_InsertStyleInElement(spanID, true, subAttrName, subAttrVal, bStoreInEditList);
       else
    	   TE_InsertStyleInElement(spanID, false, subAttrName, subAttrVal, bStoreInEditList);
       */
    	

        //now format the intermediate span list 
        var length = midSpanlist.length;  
        var arrVal = []; 
        for(var k = 0 ; k < length; k ++)
        {        	
        	arrVal = midSpanlist[k]; 
        	if(arrVal[0] == 'SPAN')
        		TE_InsertStyleInElement(arrVal[1], true, subAttrName, subAttrVal, bStoreInEditList);
        	else if(arrVal[0] == 'TEXT')
        	{        		
        		spanID = TE_InsertSpanInText(arrVal[1], arrVal[2], arrVal[3]);
        		if(subAttrName != "style")
                	TE_InsertStyleInElement(spanID, true, subAttrName, subAttrVal, bStoreInEditList);
                else
            	   TE_InsertStyleInElement(spanID, false, subAttrName, subAttrVal, bStoreInEditList);
        	}
        }
        
        
        //also format the  
        
     /*   start = 0;
        end = gTextSelectionObject.focusOffset;
        spanID = TE_InsertSpanInText(gTextSelectionObject.focusNode, start, end);
        if(subAttrName != "style")
        	TE_InsertStyleInElement(spanID, true, subAttrName, subAttrVal, bStoreInEditList);
        else
    	   TE_InsertStyleInElement(spanID, false, subAttrName, subAttrVal, bStoreInEditList);
    	  */
        
    }
}

function TE_IsTextSelected()
{
	gTextSelectionObject = document.getSelection();	
	if(gTextSelectionObject.anchorNode ==gTextSelectionObject.focusNode )
	{
		if(gTextSelectionObject.anchorOffset != gTextSelectionObject.focusOffset)
			return true;
		else
			return false; 
	}
}

function TE_getSelection()
{
	gTextSelectionObject = document.getSelection();	
	var selrange = gTextSelectionObject.getRangeAt(0);
	

	gRootNode = 0;
	var node; 
	node = gTextSelectionObject.anchorNode.parentNode;
	while(!gRootNode)
	{		
		var className = node.getAttribute('class');
		className = className.toUpperCase(); 
		
		if(className == 'ROOTCONTAINER')
		{
			gRootNode =  node; 
			break; 
		}
		//node = gTextSelectionObject.anchorNode.parentNode;
		node = node.parentNode; 
	}
	
	var name = gTextSelectionObject.anchorNode.nodeName.toUpperCase(); 
	if(name != "#TEXT")
	{
		Debug_Message("Node Selected is" + name); 
		return ; 
	}
	var length = gIntermediateNodes.length;
    if (length > 1) {
    	gIntermediateNodes.splice(1, length - 1); 
    }
    
	//var startSpanNode = gTextSelectionObject.anchorNode.parentNode;
    
    if(gTextSelectionObject.anchorNode == gTextSelectionObject.focusNode)
    	return; 
    
	var iteratorNode = gTextSelectionObject.anchorNode;	
	var bEnd  = false; 
	gCommonAncestorNode = selrange.commonAncestorContainer; 
	
	do{
		if(iteratorNode.parentNode == gCommonAncestorNode)
		{
			break; 
		}
		else if(!iteratorNode.parentNode )
		{
			return; 
		}
		else
		{
			iteratorNode = iteratorNode.parentNode; 
		}
	}while(1); 	
	//by now we have got the start node; 
	var bStartFound = false;
	var bEndFound =  false; 
	while(bEndFound == false)
	{
		if(bStartFound ==  false)
		{
			bStartFound = TE_FindStartNodes(iteratorNode, gTextSelectionObject.anchorNode,gTextSelectionObject.anchorOffset);
		}
		else if( (bStartFound == true) && (bEndFound == false) )
		{
			bEndFound = TE_FindEndNodes(iteratorNode, gTextSelectionObject.focusNode,gTextSelectionObject.focusOffset); 
		}
		iteratorNode = iteratorNode.nextSibling; 
		
		if(!iteratorNode)
		{
			return; 
		}
	}	
	
	 
}

/*
 * •	ChildList = spanNode.childNodes;
For(i= 0 ; I < ChildList.length; i++)
{
	childNode= ChildList[i]; 
	if(childNode.nodeName == “TEXT”)
	{
		If(childNode == termNode)
			Return;
	      Else
		  AddtoList(spanNode); 		
   }
	Else if(childNode.nodeName == “SPAN”)
	{
			FindIntermediateNodes(childNode, termNode)

	}

}

 * 
 */
//assuming that the iteration always begins with a Span node a parent of anchorNode 

function TE_FindEndNodes(targetNode, endSelNode, endSelOffset)
{
	var bretval  = false; 
	//now we have only span nodes 
	var childList = targetNode.childNodes; 
	var childNode;
	var nodeName; 
	var spanID; 
	
	nodeName = targetNode.nodeName.toUpperCase(); 
	if(nodeName == "#TEXT")
	{
		if(targetNode ==  endSelNode)
		{
			bretval = true;
			//spanID = TE_InsertSpanInText(targetNode, 0, endSelOffset); 
			gIntermediateNodes.push(["TEXT", targetNode, 0, endSelOffset]); 
			return bretval; 
		}
		else
		{
			var parentNode = targetNode.parentNode;
			var nodeclass = parentNode.getAttribute('class');
			nodeclass = nodeclass.toUpperCase(); 
			if( (parentNode == gCommonAncestorNode) && (targetNode.length > 0 ) )
			{
				//spanID = TE_InsertSpanInText(targetNode, 0, targetNode.length); 
				gIntermediateNodes.push(["TEXT", targetNode, 0,targetNode.length ]); 				
			}			
			return bretval; 
		}
	}
	else if(nodeName == 'SPAN')
	{
		spanID = targetNode.getAttribute('id'); 
		gIntermediateNodes.push(['SPAN', spanID, 0, 0]); 
		
		for(var i = 0; i <childList.length; i++)
		{
			childNode = childList.item(i);
			nodeName = childNode.nodeName.toUpperCase(); 
			if ((nodeName == '#TEXT') || (nodeName == 'SPAN') )
			{
				bretval  = TE_FindEndNodes(childNode, endSelNode, endSelOffset);
				if(bretval ==  true)
				{
					return bretval; 
				}
			}			
		}	
		
	}			
	
	return bretval; 
}



function TE_FindStartNodes(targetNode, startSelNode, startSelOffset)
{
	var bretval  = false; 
	var childList = targetNode.childNodes; 
	var childNode;
	var nodeName; 
	var spanID; 
	var bStartNodeFound =  false; 
	
	nodeName = targetNode.nodeName.toUpperCase(); 
	if(nodeName == "#TEXT")
	{
		if(targetNode ==  startSelNode)
		{
			bStartNodeFound = true;
			//spanID = TE_InsertSpanInText(targetNode, startSelOffset, startSelNode.length);
			gIntermediateNodes.push(['TEXT', targetNode, startSelOffset, startSelNode.length]); 
			return bStartNodeFound; 
		}
		else
		{
			return bStartNodeFound; 
		}
	}	
	else if(nodeName == "SPAN")
	{
		for(var i = 0; i <childList.length; i++)
		{
			childNode = childList.item(i);
			nodeName = childNode.nodeName.toUpperCase(); 
			if ( (nodeName == '#TEXT') || (nodeName == 'SPAN') )
			{
				bretval  = TE_FindStartNodes(childNode, startSelNode, startSelOffset);
				if(bretval ==  true)
				{
					//return bretval;
					bStartNodeFound = bretval; 
				}
				
				
			}			
		}	
	}		
	return bStartNodeFound; 
}


function TE_getSelection_OLD(ObjectID) {

	    //var mysel = 0;
	var range = 0;
	var intermediateSpanList = []; 
	gTextSelectionObject = document.getSelection();	
	var bRootFound = false;
	
	var selrange = gTextSelectionObject.getRangeAt(0); 
	var parentofRoot = gTextSelectionObject.anchorNode.parentNode;
	
	while (bRootFound == false) {
		 var name = parentofRoot.nodeName.toUpperCase();
		 if ((name == "#TEXT") || (name == "SPAN")) {
		     //then contine the iteration
		     parentofRoot = parentofRoot.parentNode;
		 }
		 else {
		     bRootFound = true;
		     gRootNode = parentofRoot.firstElementChild;  //assumes even in case of list there will be only one SPAN root child right after 'li'
		     
		 }	     
	}

	var bFound = false; 
	var spanID = 0; 
	var strlen; 
	var node =  gTextSelectionObject.anchorNode; 
	while(bFound ==  false)
	{
		var name = node.nodeName.toUpperCase();
		if(name == "#TEXT")
		{
			if(node == gTextSelectionObject.focusNode)
			{
				bFound = true;
				break; 
			}
			else
			{
				strlen = node.textContent.length;
				if(strlen > 0 )
				{
					intermediateSpanList.push(['TEXT', node]); 
				}					
				else
				{
					Debug_Message("Text empty, hence not put into list"); 
				}
			}
				
		}
		else if(name == "SPAN")
		{
			
			var childnode = node.firstElementChild; 
			name = childnode.nodeName.toUpperCase();
			if(name == "#TEXT")
			{
				if(childnode == gTextSelectionObject.focusNode)
				{
					bFound = true;
					break; 
				}
			}			
			spanID = node.getAttribute('id'); 
			intermediateSpanList.push(['SPAN', spanID]); 
		}
		else
		{
			//return null; 
		}
		//always ensure that the sibling is being looked for w.r.t. root node 
		while(node.parentNode != gRootNode)
		{
			node = node.parentNode; 
		}
			
		node = node.nextSibling; 
		if(!node)
			bFound =  true; 
	}
	
	return intermediateSpanList; 
}

function TE_InsertSpanInText(currTextNode, origstartIndex, origendIndex) {

	var spanID = DH_GetUniqueID("span");
	gLastSpanID = spanID; 
	
	var startIndex, endIndex; 
	
	if(origstartIndex > origendIndex)
	{
		startIndex = origendIndex;
		endIndex = origstartIndex; 
	}
	else
	{
		startIndex = origstartIndex; //;
		endIndex = origendIndex; 
	}
    //SPLIT THE TEXT NODE INTO 2 NODES
    var parentNode = currTextNode.parentNode;             
    var secondPart = currTextNode.splitText(startIndex);
    
    //NOW SPLIT NEW NODE INTO 2 PARTS
    var thirdPart = secondPart.splitText(endIndex - startIndex);

    //GET THE FIRST PART OF SPLIT OF NEW NODE
    var spanNode = document.createElement("SPAN");
    spanNode.setAttribute("id", spanID);
   // spanNode.setAttribute("style", spanStyle);            
    //these need to be move to showpara function
    spanNode.setAttribute("class", "textproperty");  
              
  
    var JQSel = "#" + spanID;
  
    
    var spantext = document.createTextNode(secondPart.textContent);
    spanNode.appendChild(spantext); 
    
    //NOW CREATE A SPAN WITH SOME ID AND STYLE
    //NOW ADD THE text EXTRACT INTO SPAN

    //REPLACE THE FIRST PART OF NEW NODE WITH A SPAN NODE
    parentNode.replaceChild(spanNode, secondPart);
    var objID = gCurrentEditableObjectID;  
    divID = "DIV_" + objID;
    TE_AddTextEditingAttributes(objID);             
    TE_GenerateSpanList(gRootNode);
    
  
    
    return spanID; 
   
}

function TE_GenerateSpanList(Node) {

    var length = gSpanList.length;
    if (length > 1) {
        gSpanList.splice(1, length - 1); 
    }
    TE_getLength(Node, 0, true);

    //now clean up the list a little bit

    // iterate over the list and find out if startoffset == endoffset
    for (var k = 0; k < gSpanList.length; k++) {
        //if yes then delete the corresponding node
        if (gSpanList[k][1] == gSpanList[k][2]) {
            var JQSel = "#" + gSpanList[k][0];
            $(JQSel).remove();
        }

    }
    //finally again call getlength function to generate new list
    length = gSpanList.length;
    if (length > 1) {
        gSpanList.splice(1, length - 1);
    }            
    TE_getLength(Node, 0, true);    
  
}


function TE_getLength(Node, startOffset, bupdateList) {

	var nodeLen = 0;
	
	var nextnodeStartoffset = startOffset; 
	//GET THE NUMBER OF CHILDREN
	var NodeList = Node.childNodes;
	
	//LOOP AROUND
	for (var i = 0; i < NodeList.length; i++) {

	    //IF NODE IS OF TYPE TEXTCONTENT THEN ADD IT TO LENGTH
	    var childNode = NodeList.item(i);
	    var nodeName = childNode.nodeName.toUpperCase();
	   
	    if (nodeName == "#TEXT") {
	        nodeLen += childNode.length;
	        nextnodeStartoffset += childNode.length; //nodeLen; 
	    }
	    else if (nodeName == "SPAN") {
	    //IF NODE IS OF TYPE SPAN THEN CALL getLength(childNode)
	    var childNodeLen = TE_getLength(childNode, nextnodeStartoffset, true);
	    nodeLen += childNodeLen;
	    nextnodeStartoffset += childNodeLen; 
	    }
	}

	//UPDATE THE SpanList with following #ID, StartOffset, EndOffset
	var ID = Node.getAttribute("id");
	var endOffset = startOffset + nodeLen;
	var styleattr = Node.getAttribute("style"); 
	if(bupdateList == true)
	    gSpanList.push([ID, startOffset, endOffset]);
	
	return nodeLen;
}

function TE_SaveObjectData(ObjectID, bAsync) {

    //get the html object
	var Obj = document.getElementById(ObjectID);
	if(!Obj)
	{
		//Debug_Message("TE_SaveObjectData: Object Null"); 
		return ; 
	}
	
    //get the child of the div assuming there is only one child
	var mathspanNodes = $(".MATH_EQUATION").filter(":visible"); 
	
	//list out all visible span math equation
	var bMathFlag; 
	if(mathspanNodes.length > 0)
		bMathFlag = true; 
	
	//copy the data-value into inner Html 
	for(var j=0; j < mathspanNodes.length; j++){
		mathspanNodes[j].innerHTML = mathspanNodes[j].getAttribute('data-value');
	}
	//set a flag if the math equation 
		
    var DivID = "DIV_" + ObjectID;
    var JQSel = "#"+DivID; 

    TE_CleanupTextObject(ObjectID);   
  
    //get the outerHTML of the child
    // Obj.removeAttribute('style'); 
    var HTMLstr = "<html><body>";
    HTMLstr += Obj.outerHTML;
    // HTMLstr += Obj.innerHTML;
    HTMLstr += "</body></html>";   

    var dataType = $(JQSel).attr('data-type'); 
    // then make an AJAX request back to server to save the data
    // var reqbody = "&OBJECTID=" + ObjectID + "&OBJECTTYPE=" + dataType + "&HTMLSTRING=" + HTMLstr;
    reqbody = DH_updateHTMLObject(ObjectID, dataType, HTMLstr, bAsync);
    if(reqbody == 'OK')
    {
    	gTextObjEditList = DH_DeleteFromEditList(gTextObjEditList, 0); 
    }    
    // if math equation Flag is true then call math update 
    if(bMathFlag == true)
    {
    	MathJax.Hub.Queue(["Typeset",MathJax.Hub,ObjectID]);
    }
    	
}


function TE_CleanupTextObject(ObjectID) {

	
    if (gCurrSpanNode) {
        gCurrSpanNode.style.border = "none";
        gCurrSpanNode = 0; 
    }

    var JQObjSel = "#" + ObjectID;
    $(JQObjSel).removeAttr("contenteditable");
    $(JQObjSel).removeAttr("ondblclick");
    var objType = $(JQObjSel).attr('type');
    if((objType == 'VIDEO') || (objType == 'AUDIO'))
    	$(JQObjSel).removeAttr("src");
    //$(JQObjSel).removeAttr("ondblclick");
    
    var divObjectID = "DIV_" + ObjectID; 
   
    //first remove attribute from div object
    var JQSel = "#" + divObjectID;
   
   // $(JQSel).attr("contenteditable", "false");
    $(JQSel).removeAttr("aria-disabled");
    if(objType != 'AUDIO')
    		$(JQSel).removeAttr("ondblclick");             
   // $(JQSel).unbind("focusout", "OnSpanFocusOut");
    
    //then remove attributes from children
    JQSel = "span.textproperty";
    $(JQSel).removeAttr("onclick");
    $(JQSel).unbind("hover");
        
    var divNode = document.getElementById(divObjectID);
    var bEdit = divNode.getAttribute("contenteditable");
    //Debug_Message("Editable=" + bEdit); 
}

function TE_OnColorButtonHandler(Node)
{
	var node = Node;
	var nodeID = node.getAttribute('id'); 
	var handlerFn =""; 
	var attrName = node.getAttribute('data-attrName');	
	WAL_showColorPickerWidget('txtcolorpickercontainer', 'TE_ColorHandler', nodeID,attrName); 
}

function TE_ColorHandler(attrname, value)
{
	  
      var subattrname, subattrval; 
      var bEditStore; 
     
     if(gFirstTimeColor == false)
      {
    	  bEditStore =  false; 
      }
      else if(gFirstTimeColor ==  true)
      {
    	  bEditStore =  true;
    	  gFirstTimeColor =  false; 
      }
      subattrname = attrname;
      if(!subattrname)
      {
    	  Debug_Message("Attribute Name not set"); 
    	  return ; 
      }
    	 
      subattrval  = value ; 
      if (gCurrSpanNode) {
          //set the span style        
          var spanID = gCurrSpanNode.getAttribute("id");
          TE_InsertStyleInElement(spanID,  true, subattrname, subattrval, bEditStore);
          return;
     }       
      
      TE_FormatText(subattrname, subattrval, bEditStore); 
      gCurrSpanNode =  document.getElementById(gLastSpanID); 
      
}

function TE_OnColorPickerOKHandler(event)
{
	gFirstTimeColor =  true; 		
	//based on the nodeID call appropriate function to handle 
	var attrName = WAL_getColorPickerAttributeName('txtcolorpickercontainer'); 
	var colorval = WAL_getColorPickerValue('txtcolorpickercontainer'); 
	TE_ColorHandler(attrName, colorval);
	
	gFirstTimeColor =  true; 	
	
	//var refID = WAL_getColorPickerRefID('colorpickercontainer');  
	
	//var btnNode = document.getElementById(refID);
	//btnNode.style.backgroundColor = colorval; 
    
	
}

function TE_OnColorPickerCancelHandler(event)
{
	gFirstTimeColor =  true; 
	DH_Undo(gTextObjEditList, 0); 
}

function TE_InitializeToolbar()
{
	//WAL_createButtonGroupDefault('closegroup', "TE_ToolbarHandler");	
	
	
	var objectTypeValues = ['none','Paragraph', 'Heading1' , 'Heading2', 'Heading3', 'Navigation Buttons','Next Slide'];
	
	//WAL_createDropdownList("objectTypeDDL", '110', gDDLHeight, true, objectTypeValues, "", '110');
	//WAL_createCustomButton('objecttype_icon', 'TE_ToolbarHandler');
	
	
	
	//WAL_createButtonGroupDefault('editgroup', "TE_ToolbarHandler");
//	WAL_createButtonGroupDefault('helpgroup', "TE_ToolbarHandler");
	
    
    
    var fontFamilyValue = ['default','Georgia','Palatino Linotype','Book Antiqua','Palatino','Times New Roman','Times','Arial','Helvetica','Arial Black','Gadget','Comic Sans MS','Cursive','Impact','Charcoal', 'Lucida Sans Unicode','Lucida Grande','Tahoma','Geneva','Trebuchet MS','Verdana' ,'Courier New' ,'Lucida Console'];
    //var fontFamilyValue = ['default', 'George','Palatino Linotype','Book Antiqua', 'Palatino','Times New Roman',
       //                    'Times', 'Arial','Helvetica', 'Arial Black' ]; 
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
    
    WAL_createDropdownListWithItemStyle("fontNameDDL", '170px', gDDLHeight, true, "TE_DDLHandler", '200',fontFamilyValue, 'fontFamilyValue',fontFamilyDisplay, 'fontFamilyDisplay');
    
   
    //WAL_createButtonGroupSelectable('fontstylegroup', 'checkbox', "TE_ToolbarHandler", "TE_ToolbarUnselectHandler");
    //WAL_createButtonGroupDefault('fontstylegroup', "TE_ToolbarHandler");
    WAL_createCustomButton('bold_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('italic_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('underline_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('strikethrough_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('blink_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('matheqn_icon', 'TE_ToolbarHandler');
    
    
    
    
   // WAL_createButtonGroupSelectable('fontdecorationegroup', 'radio', "TE_ToolbarHandler", "");
    WAL_createCustomButton('uppercase_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('lowercase_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('capitalize_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('fontcolor_icon', 'TE_OnColorButtonHandler');
    WAL_createCustomButton('fillcolor_icon', 'TE_OnColorButtonHandler');   
    
    
   // WAL_createButtonGroupSelectable('textformatgroup', 'radio', "TE_ToolbarHandler", "");
    WAL_createCustomButton('formatleft_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('formatcenter_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('formatright_icon', 'TE_ToolbarHandler');
    WAL_createCustomButton('formatjustify_icon', 'TE_ToolbarHandler');
    
    
    
    
    
    var letterSpaceValue = ['normal', '0.1em','0.2em','0.3em','0.4em','0.5em']; 
    var letterSpaceValueDisplay = ['normal', '1','2','3','4','5'];   
    WAL_createDropdownListwithButton("letterspaceDDL", '0','0', letterSpaceValueDisplay, "TE_DDLHandler", '80', '100','letterpace_icon', gTE_ButtonWidth, gTE_ButtonHeight );
       
    var wordSpaceValue = ['normal', '1px','2px','3px','4px','5px']; 
    var wordSpaceValueDisplay = ['normal', '1','2','3','4','5']; 
    WAL_createDropdownListwithButton("wordspaceDDL", '0','0',wordSpaceValueDisplay, "TE_DDLHandler", '80', '100','wordspace_icon', gTE_ButtonWidth, gTE_ButtonHeight );
    
    
    WAL_createCustomButton('outlinecolor_icon', 'TE_OnColorButtonHandler');
    var outlineStyleValues = ['none','dashed', 'dotted' , 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
    WAL_createDropdownListwithButton("outlinestyleDDL",'0','0', outlineStyleValues, "TE_DDLHandler", '100', '100', 'outlinestyle_icon',  gTE_ButtonWidth, gTE_ButtonHeight);
    
    var outlineWidthValues = ['none', 'thin',  'medium', 'thick'];
    WAL_createDropdownListwithButton("outlinethicknessDDL", '0','0', outlineWidthValues, "TE_DDLHandler", '100', '100', 'outlinethickness_icon', gTE_ButtonWidth, gTE_ButtonHeight);
    
    
    var fontSizeValue = ['xx-small','x-small','small','medium','large','x-large','xx-large'];    
    WAL_createDropdownListwithButton("fontsizeDDL", '0','0',fontSizeValue,  "TE_DDLHandler", '100', '100', 'fontsize_icon', gTE_ButtonWidth, gTE_ButtonHeight);
   
    
    
    //code temporaririly commented out as it clashes with commoneditor because same id. need to be sorted out later on 
    //_rm infact we dont need to create another one since one is already created. 
    WAL_createColorPickerWindow("txtcolorpickercontainer", "TEcolorpicker", '350', '250', "TEokbtn", "TEcancelbtn");
    WAL_createModalWindow(gTESaveDlgID, '250', '150', 'TEsaveyesbtn', 'TEsavenobtn');
    WAL_createModalWindow(gTEOverrideDlgID, '250', '150', 'TEoveryesbtn', 'TEovernobtn');    
    
    WAL_createWindow('keypaddlg', "KeyPad", true, '520', '400', false, true, false, false, true, "TE_MathWdgtCloseHandler", 'Math_OKBtn', 'MathCancelBtn');    
    //WAL_createWindow(ID,titleID, bTitleBar, Width, Height, Resizable, Draggable, Modal, Collapsable, showClose,  HandlerFnClose, OKButtonID, CancelButtonID )
    
    //'basic_operators_dlg'
    WAL_createKeypadButton('basic_oprt_icon', '');   
    WAL_createMenuWindow('basic_operators_dlg', "basic_operators_title", false, '300', '50', 'basic_oprt_icon');
    WAL_createKeypadButton('equal_icon', 'TE_MathKeyHandler');
    WAL_createKeypadButton('plus_icon' , 'TE_MathKeyHandler');      
    WAL_createKeypadButton('minus_icon' , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('multiply_icon' , 'TE_MathKeyHandler');  
    WAL_createKeypadButton('divide_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('plus_minus_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('dot_icon'  , 'TE_MathKeyHandler');      
    WAL_createKeypadButton('star_icon'  , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('fslash_icon' , 'TE_MathKeyHandler');    
    WAL_createKeypadButton('bslash_icon'  , 'TE_MathKeyHandler');   
    
    //second_operators_dlg
    WAL_createKeypadButton('second_operators_icon', '');    
    WAL_createMenuWindow('second_operators_dlg', "second_operators_title", false, '204', '50', 'second_operators_icon');
    
    WAL_createKeypadButton('spdot_icon', 'TE_MathKeyHandler');     
    WAL_createKeypadButton('sp_sum_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('sp_mul_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('sp_prod_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('sum_icon' , 'TE_MathKeyHandler');          
    WAL_createKeypadButton('prod_icon' , 'TE_MathKeyHandler');          
   

    //relations_dlg
    WAL_createKeypadButton('second_operators_icon', '');    
    WAL_createMenuWindow('relations_dlg', "relations_title", false, '280', '50', 'second_operators_icon');

    WAL_createKeypadButton('equal_icon', 'TE_MathKeyHandler');          
    WAL_createKeypadButton('not_equal_icon' , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('lessthan_icon' , 'TE_MathKeyHandler');      
    WAL_createKeypadButton('greaterthan_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('less_equal_icon', 'TE_MathKeyHandler');     
    WAL_createKeypadButton('greater_equal_icon', 'TE_MathKeyHandler');  
    WAL_createKeypadButton('sp_less_icon', 'TE_MathKeyHandler');        
    WAL_createKeypadButton('sp_greater_icon', 'TE_MathKeyHandler');  
    

    //relations_more_dlg
    WAL_createKeypadButton('relations_icon', '');    
    WAL_createMenuWindow('relations_more_dlg', "relations_more_title", false, '340', '50', 'relations_icon');   
    WAL_createKeypadButton('equiv_icon', 'TE_MathKeyHandler');          
    WAL_createKeypadButton('sp_equiv_icon', 'TE_MathKeyHandler');  
    WAL_createKeypadButton('special_icon1', 'TE_MathKeyHandler');  
    WAL_createKeypadButton('Prop_icon', 'TE_MathKeyHandler');      
    WAL_createKeypadButton('larr_icon', 'TE_MathKeyHandler');      
    WAL_createKeypadButton('rarr_icon', 'TE_MathKeyHandler');      
    WAL_createKeypadButton('rarr_icon', 'TE_MathKeyHandler');      
    WAL_createKeypadButton('lArr_icon' , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('rArr_icon' , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('hArr_icon', 'TE_MathKeyHandler');     

//set_symbols_dlg
    WAL_createKeypadButton('set_symbols_icon', '');    
    WAL_createMenuWindow('set_symbols_dlg', "set_symbols_title", false, '340', '50', 'set_symbols_icon');   
	
    WAL_createKeypadButton('in_icon', 'TE_MathKeyHandler');           
    WAL_createKeypadButton('not_in_icon', 'TE_MathKeyHandler');        
    WAL_createKeypadButton('intersection_icon', 'TE_MathKeyHandler');  
    WAL_createKeypadButton('union_icon', 'TE_MathKeyHandler');         
    WAL_createKeypadButton('subset_icon' , 'TE_MathKeyHandler');             
    WAL_createKeypadButton('supset_icon', 'TE_MathKeyHandler');             
    WAL_createKeypadButton('sub_equal_icon', 'TE_MathKeyHandler');              
    WAL_createKeypadButton('sup_equal_icon' , 'TE_MathKeyHandler');             
    WAL_createKeypadButton('empty_icon'   , 'TE_MathKeyHandler');      
    WAL_createKeypadButton('aleph_icon' , 'TE_MathKeyHandler');           

//number_symbol_dlg
    WAL_createKeypadButton('number_symbols_icon', '');    
    WAL_createMenuWindow('number_symbol_dlg', "number_symbol_title", false, '170', '50', 'number_symbols_icon');
    
    WAL_createKeypadButton('cc_icon' , 'TE_MathKeyHandler');  
    WAL_createKeypadButton('nn_icon' , 'TE_MathKeyHandler');  
    WAL_createKeypadButton('qq_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('rr_icon' , 'TE_MathKeyHandler');  
    WAL_createKeypadButton('zz_icon' , 'TE_MathKeyHandler');  

//calculus_symbol_dlg    
    WAL_createKeypadButton('calculus_symbols_icon', '');    
    WAL_createMenuWindow('calculus_symbol_dlg', "calculus_symbol_title", false, '170', '50', 'calculus_symbols_icon');
    WAL_createKeypadButton('int_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('oint_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('deba_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('deriv_icon' , 'TE_MathKeyHandler');  
    WAL_createKeypadButton('grad_icon' , 'TE_MathKeyHandler');   
    WAL_createKeypadButton('lim_icon' , 'TE_MathKeyHandler');   
    
    
    
    //misc_symbol_dlg
    WAL_createKeypadButton('misc_symbol_icon', ''); 
    WAL_createMenuWindow('misc_symbol_dlg', "misc_symbol_title", false, '140', '50', 'misc_symbol_icon');
    WAL_createKeypadButton('pi_icon' , 'TE_MathKeyHandler');     
    WAL_createKeypadButton('inf_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('angle_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('right_angle_icon' , 'TE_MathKeyHandler');   
    
    //superscript_dlg
    WAL_createKeypadButton('script_icon', ''); 
    WAL_createMenuWindow('superscript_dlg', "superscript_title", false, '110', '50', 'script_icon');
   
    WAL_createKeypadButton('superscript_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('subscript_icon' , 'TE_MathKeyHandler');    
    WAL_createKeypadButton('root_icon' , 'TE_MathKeyHandler');         

    
    //trignofn_dlg
    WAL_createKeypadButton('trignofn_icon', ''); 
    WAL_createMenuWindow('trignofn_dlg', "trignofn_title", false, '310', '50', 'trignofn_icon');
    WAL_createKeypadButton('sin_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('cos_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('tan_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('csc_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('sec_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('cot_icon' , 'TE_MathKeyHandler');
    WAL_createKeypadButton('sinh_icon', 'TE_MathKeyHandler');
    WAL_createKeypadButton('cosh_icon', 'TE_MathKeyHandler');
    WAL_createKeypadButton('tanh_icon', 'TE_MathKeyHandler');
    
    //accent _dlg
    WAL_createKeypadButton('accent_icon', ''); 
    WAL_createMenuWindow('accent_dlg', "accent_title", false, '208', '50', 'accent_icon');
    WAL_createKeypadButton('hat_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('bar_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('ul_icon', 'TE_MathKeyHandler');    
    WAL_createKeypadButton('vector_icon', 'TE_MathKeyHandler');
    WAL_createKeypadButton('dot_icon', 'TE_MathKeyHandler');   
    WAL_createKeypadButton('ddot_icon' , 'TE_MathKeyHandler'); 

    //matrix 
    WAL_createKeypadButton('matrix_icon' , 'TE_MathKeyHandler'); 
    
    WAL_createKeypadButton('text_icon' , 'TE_MathKeyHandler'); 
    
    //functions_dlg
    WAL_createKeypadButton('functions_icon', ''); 
    WAL_createMenuWindow('functions_dlg', "functions_title", false, '310', '50', 'functions_icon');
    
    WAL_createKeypadButton('log_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('ln_icon' , 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('det_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('mod_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('gcd_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('lcm_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('min_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('max_icon', 'TE_MathKeyHandler'); 
    WAL_createKeypadButton('abs_icon', 'TE_MathKeyHandler'); 

    
    
    //greek_symbols_dlkg
    
    WAL_createKeypadButton('greek_symbols_icon', ''); 
    WAL_createMenuWindow('greek_symbols_dlg', "greek_symbols_title", false, '600', '100', 'greek_symbols_icon');
    WAL_createKeypadButton('alpha_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('beta_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('chi_icon'        ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('delta_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Delta_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('epsilon_icon'    ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('varepsilon_icon' ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('eta_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('gamma_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Gamma_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('iota_icon'        ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('kappa_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('lambda_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Lambda_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('mu_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('nu_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('omega_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Omega_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('phi_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('varphi_icon'      ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Phi_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('pi_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Pi_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('psi_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Psi_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('rho_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('sigma_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Sigma_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('tau_icon'         ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('theta_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('vartheta_icon'    ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Theta_icon'       ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('upsilon_icon'     ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('xi_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('Xi_icon'          ,  'TE_MathKeyHandler'); 
    WAL_createKeypadButton('zeta_icon'        ,  'TE_MathKeyHandler'); 
    
    WAL_hideWidget('texteditinterface', true); 
    //WAL_hideWidget('texteditinterface', false); 
}

function TE_ToolbarHandler(Node)
{
	var itemID = Node.getAttribute('id'); 
	
	var bTextSelect = TE_IsTextSelected();
	if(bTextSelect ==  true)
		TE_ClearSpanBorder(); 
	switch(itemID)
	{
	case 'close_icon':
		TE_menu_close(); 
		break;	
	case 'save_icon':
		TE_menu_save(); 
		break; 	
	case 'undo_icon':	
		TE_menu_undo(); 
		break; 
	case 'redo_icon':	
		TE_menu_redo(); 
		break;	
	case 'preview_icon':	
		TE_menu_preview(); 
		break;
	case 'bold_icon':
		
		TE_setFontStyle('fontWeight', 'bold', 'normal'); 
		break; 
	case 'italic_icon':
		TE_setFontStyle('fontStyle', 'italic', 'normal'); 
		break; 
	case 'underline_icon':
		TE_setFontStyle('textDecoration', 'underline', 'none'); 
		break; 
	case 'strikethrough_icon':
		TE_setFontStyle('textDecoration', 'line-through', 'none'); 
		break; 
	case 'blink_icon':
		TE_setFontStyle('textDecoration', 'blink', 'none'); 
		break; 	
	case 'uppercase_icon':
		TE_setFontStyle('textTransform', 'uppercase', 'none'); 
		break; 	
	case 'lowercase_icon':
		TE_setFontStyle('textTransform', 'lowercase', 'none'); 
		break; 
	case 'capitalize_icon':
		TE_setFontStyle('textTransform', 'capitalize', 'none'); 
		break; 
	case 'formatleft_icon':
		TE_setFontStyle('textAlign', 'left', 'left'); 		
		break; 
	case 'formatcenter_icon':
		TE_setFontStyle('textAlign', 'center', 'left'); 	
		break; 
	case 'formatright_icon':
		TE_setFontStyle('textAlign', 'right', 'left'); 	
		break;
	case 'formatjustify_icon':
		TE_setFontStyle('textAlign', 'justify', 'left'); 	
		break; 		
	case 'objecttype_icon':
		WAL_showModalWindow(gTEOverrideDlgID,"TE_ObjTypeYesHandler", "");
		break; 
	case 'matheqn_icon':
		TE_InsertMathExpression();
		break; 
	default:
		Debug_Message("Not supported yet!"); 
		break; 
		
	}
	
	
}

function TE_ObjTypeYesHandler(){
	
	var subattrval = WAL_getDropdownListSelection('objectTypeDDL');
	if(subattrval != 'none')
	{
		//subattrval = subattrval.toUpperCase(); 
		TE_AddHTMLObject(subattrval); 
	}
}



function TE_DDLHandler(Node, value)
{
	var Type = Node.getAttribute('type');	
	var subattrval = value;  
	//Debug_Message("Type= " + Type + "Value="+value); 
	switch (Type)
	{
	case 'OBJECTTYPE':
		//subattrval = subattrval.toUpperCase(); 
		//TE_AddHTMLObject(subattrval); 
		break;
		
	case 'fontFamily':
		//subattrval = gfontFamily[subattrval]; 
		TE_setFontStyle('fontFamily', subattrval, 'Default');		
		break; 
	case 'fontSize':
		TE_setFontStyle('fontSize', subattrval, '');		
		break; 
	case 'letterSpacing':
		if(subattrval != 'normal')
		{
			subattrval = '0.'+subattrval+'em'; 
		}
			
		TE_setFontStyle('letterSpacing', subattrval, '');	
		break; 
	case 'wordSpacing':
		if(subattrval != 'normal')
		{
			subattrval = subattrval+'px'; 
		}
			
		TE_setFontStyle('wordSpacing', subattrval, '');	
		break; 
	case 'outlineStyle':
		TE_setFontStyle('outlineStyle', subattrval, '');	
		break; 
	case 'outlineWidth':
		TE_setFontStyle('outlineWidth', subattrval, '');	
		break;		
		
	default:
		break; 
		
	}
}

function TE_AddHTMLObject(divObjID, ObjID, inputObjecttype, textString)
{
	var defaultText; 
	var type = inputObjecttype.toUpperCase(); 
	var HTMLstr; 
	var spanID = "span_" + ObjID; 
	if(type == 'PARAGRAPH')
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "New Paragraph: Start Editing by clicking on the Text" ; 
		//var spanID = "span_" + gCurrentEditableObjectID; 
		HTMLstr = '<p id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' + 
		defaultText + '</span></p>'; 			
	}	
	else if(type == 'HEADING1') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Heading-1"; 
		HTMLstr = '<h1 id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' +
		defaultText + '</span></h1>'; 
	}
	else if(type == 'HEADING2') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Heading-2"; 
		HTMLstr = '<h2 id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' +
		defaultText + '</span></h2>'; 
	}
	else if(type == 'HEADING3') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Heading-3"; 
		HTMLstr = '<h3 id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' + 
		defaultText + '</span></h3>'; 
	}
	else if(type == 'NAVIGATION BUTTONS') 
	{		
		type = 'NVBUTTONS'; 
		HTMLstr = "<div id = " + ObjID + "><button id='prevPageBtn' onclick='showPrevPageData()' class = HTMLOBJECT style='width:100px'>Prev Page</button><button id='prevbtn' onclick='showPreviousSlideData()' style='width:100px'>Previous</button><button id='nextbtn' onclick='showNextSlideData()' style='width:100px'>Next</button><button id='nextPageBtn' onclick='showNextPageData()' style='width:100px'>Next Page</button></div>"; 
	}
	else if(type == 'NEXT SLIDE')
	{		
		type = 'NVBUTTONS'; 
		//gCurrentEditableObjectID = 'NEXTSLIDEBTN'; 
		HTMLstr = "<div id = " + ObjID + "><img type='imagenextslidebtn' id='img1' class='IMAGE_BUTTON  HTMLOBJECT SIZE_48_X_48' src='http://localhost/ECLIPSE_WORKSPACE/APPLICATION/CDOC_App/style/icons/Version1/nextslide.png' onclick='showNextSlideData(event)' title='Next Slide'/></div>";
	}
	else if(type == 'FOOTER') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Default Footer"; 
		HTMLstr = '<footer id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer style="border: medium none; font-style: italic; font-size: small; color: rgb(48, 48, 48);" >' +
		defaultText + '</span></footer>'; 
	}
	else if(type == 'SLIDE NUMBER') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Slide Number"; 
		HTMLstr = '<footer id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer style="border: medium none; font-style: italic; font-size: small; color: rgb(48, 48, 48);" >' +
		defaultText + '</span></footer>'; 
	}
	else if(type == 'SLIDE TITLE') 
	{
		if(textString)
			defaultText = textString; 
		else
			defaultText = "Slide Title"; 
		
		HTMLstr = '<h1 id=' + ObjID + ' class = HTMLOBJECT><span id = ' + spanID + ' class=rootcontainer>' +
		defaultText + '</span></h1>';	
	}
	else if(type == 'IMAGE')
	{
		///HTMLstr = "<img type='imagenextslidebtn' id='img1' class='IMAGE_BUTTON  HTMLOBJECT SIZE_48_X_48' src='http://localhost/ECLIPSE_WORKSPACE/APPLICATION/CDOC_App/style/icons/Version1/nextslide.png' onclick='showNextSlideData(event)' title='Next Slide'/>";
		HTMLstr = "<img id=" + ObjID + "  class=HTMLOBJECT  src='http://localhost/ECLIPSE_WORKSPACE/APPLICATION_OPT_V1/CDOCProject/DefaultImage.jpg'/>"; 
	}
	else
	{
		Debug_Message("Unsupported Type=" + type); 
		return ; 
	}
/*	
	$dom = new DOMDocument;
	libxml_use_internal_errors(true);
	$dom->loadHTML('...');
	libxml_clear_errors();
*/
	
	
	
	if(type != 'NVBUTTONS')
	{
		TE_CleanupTextObject(ObjID); 
	}
		
	var divNode = document.getElementById(divObjID);
	//var newNode = document.createElement(''); 
	//first remove the first child of div ,
	var childNode = divNode.firstElementChild; 
	var childID = childNode.getAttribute('id'); 
	var JQSel = "#"+childID; 
	
	//divNode.removeChild(childNode); 
	var divSel = "#"+divObjID; 

	$(HTMLstr).insertAfter($(JQSel));
	divNode.removeChild(childNode); 
	
	//divNode.innerHTML = HTMLstr;
	divNode.setAttribute('data-type', inputObjecttype);		
	if(type == 'SLIDE NUMBER')
	{
		UIH_AlignWithContainer(divObjID, 'BOTTOM');
		UIH_AlignWithContainer(divObjID, 'HOR_CENTER');
		
	}
	else if(type == 'FOOTER') 
	{
		UIH_AlignWithContainer(divObjID, 'BOTTOM');
		UIH_AlignWithContainer(divObjID, 'LEFT');
	}
	else (type == 'SLIDE TITLE') 
	{
		UIH_AlignWithContainer(divObjID, 'TOP');
		UIH_AlignWithContainer(divObjID, 'HOR_CENTER');
	}
	
	//TE_AddTextEditingAttributes(gCurrentEditableObjectID);	
}

function TE_OKHandler(event)
{	
	var itemsel = WAL_getDropdownListSelection('objectTypeDDL');
	//var subattrval = itemsel.toUpperCase(); 
	TE_AddHTMLObject(subattrval);
	
}

function TE_CancelHandler(event)
{
	Debug_Message("Cancel");
}

function TE_InsertMathExpression()
{
	//get the selection 
	var targetNode; 	
	gTextSelectionObject = document.getSelection();
	var nodename = gTextSelectionObject.anchorNode.nodeName.toUpperCase();
	var offset = gTextSelectionObject.anchorOffset; 
	if(nodename == '#TEXT')
	{
		targetNode = gTextSelectionObject.anchorNode; 
		nodename = targetNode.nodeName.toUpperCase(); 
		if(nodename != '#TEXT')
			return ; 
	}
	
	//get the parent node which should be span. 
	
	var secondpart = targetNode.splitText(offset); 
	
	//now split the node into two parts
	// now create a span node 
	var spanNode = document.createElement("SPAN");  
    spanNode.setAttribute("class", "MATH_EQUATION");  
    spanNode.setAttribute("ondblclick", "TE_OnMathEdit(event)"); 
    var initText = "`sqrt x`";
    spanNode.setAttribute('data-value', initText);
    var spantext = document.createTextNode(initText);
    spanNode.appendChild(spantext); 
	//insert it before the second node
    targetNode.parentNode.insertBefore(spanNode, secondpart); 
    //alert("Math Inserted successfully");
    //now update mathjax 
    gCurrMathNode = spanNode;
    //copy the text of the target to the textarea
    
    var inputText = gCurrMathNode.getAttribute('data-value');
    if(!inputText)
    	return ; 
   // inputText = inputText.substring(1, inputText.length - 1);
    inputText =inputText.substring(1, inputText.length-1);   
    
    var textareaNode = document.getElementById('MathInput');
    textareaNode.value = inputText;
    WAL_showWindow('keypaddlg', true, 'matheqn_icon');
    //$('#mathgroup').show();
    Preview.Init();
    Preview.Update();
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,gCurrentObjectNode.id]);
    
}


function TE_OnMathEdit(event) {
	   
	if(gObjectEditMode != 'TEXT_EDIT_MODE')
		return ; 
	
	//WAL_showWindow('fileipdlg', true, 'none');
    var editNode = event.currentTarget;
    //var JQSel = '#' + editNode.id;
    var editclass = editNode.getAttribute('class');
    if (editclass != 'MATH_EQUATION')
        return; 
    
    
    gCurrMathNode = editNode;
    //copy the text of the target to the textarea
    
    var inputText = gCurrMathNode.getAttribute('data-value');
    if(!inputText)
    	return ; 
    
    gCurrMathNode.style.display = 'none'; 
   // inputText = inputText.substring(1, inputText.length - 1);
    inputText =inputText.substring(1, inputText.length-1);   
    
    var textareaNode = document.getElementById('MathInput');
    textareaNode.value = inputText;
    WAL_showWindow('keypaddlg', true, 'matheqn_icon');
    $('.PROPERTY_INTERFACE').hide();    
    WAL_hideWidget('math_symbol_group', false);	
    
    Preview.Init();
    Preview.Update();
    //show the pop-up editor 
    //call the preview update
}

function TE_MathWdgtOKHandler() {
    //first get the text from the text area
    var mathtext = document.getElementById('MathInput').value;
    mathtext = '`' + mathtext + '`';   
    //copy it into the currentMath node that's it
    gCurrMathNode.setAttribute('data-value', mathtext ); 
    gCurrMathNode.innerHTML = mathtext;
    Preview.Update();
    
    WAL_hideWidget('math_symbol_group', true);	    
    WAL_hideWidget('texteditinterface', false);	
    var JQSel = ".KEY_GROUP";
    $(JQSel).hide();
    
}


function TE_MathWdgtCloseHandler() {
	WAL_hideWidget('math_symbol_group', true);	 
    WAL_hideWidget('texteditinterface', false);	
    gCurrMathNode.style.display = 'block'; 
    var JQSel = ".KEY_GROUP";
    $(JQSel).hide();
}

function TE_MathKeyHandler(node) {
    var btnnode = node;
    var TANode = document.getElementById('MathInput');
    var symbol = btnnode.getAttribute('data-value');
    var oldstr = TANode.value;
    var pos = TANode.selectionStart;
    if(pos ==0)
    	newstr = symbol + oldstr; 
    else
    {
    	var str1 = oldstr.slice(0, pos - 1);
        var str2 = oldstr.slice(pos, oldstr.length);
        var newstr = str1 + symbol + str2;
    }
    
    TANode.value = newstr;
    Preview.Update();
}

function OnTE_KeyMouseMove(event) {
    var JQSel = ".KEY_GROUP";
    $(JQSel).hide();
    var winSel;

    var ID = event.currentTarget.getAttribute('data-keygroupID');
    if (!ID)
        return;
    winSel = '#' + ID;
    $(winSel).show();    
}