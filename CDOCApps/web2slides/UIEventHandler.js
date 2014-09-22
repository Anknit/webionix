/*********************************
Application Handler Functions written here 
for example. Th ehandler should not be part of HTML
because then CDOCWAL APIs will fail
* UIHandler functions _rm 
 * THIS SECTION OF THE CODE SHOULD BE ALL HANDLER FUNCTIONS RELATED TO UI EVENTS WHICH IN TURN WILL 
 * CALL THE BACKEND FUNCTIONS FOR DATA OPERATIONS 
 * THE FUNCTION NAMING CONVENTION IS UIH_UIItemID()

*********************************/

var gAppVersion = "Version-1.10.89"; 
// ALL GLOBAL VARIABLES DECLARED HERE 
var myAjaxObj = 0; 
var wksNode=0;
var gCurrentTreeNode = 0;
var gPreviousTreeNode = 0; 
var gCurrentTreeItemSel = 0; 
var gPrevTreeItemSel = 0; 



var gWKSInfoString = "";
var gProjInfoString = "";


var gTreeWidgetID = 'node_panel'; 
var gTreeNodeID = 'node_container'; 
//STYLE_SUB_ATTRIBUTE OR ATTRIBUTE as op_type 

var gEditList = [["OBJECTID","OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
//var gObjectContainerProperty = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
//var gObjectPropertyEditList = [["OBJECTID", "OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
//var bObjectPropertyEdit = false;
var bObjectContainerEdit = false; 

var gCurrentObjContainerNode = 0;
var gCurrentObjectNode = 0; //introduced to avoid potential bug due to DIV_data_conatinne 
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
var gObjectEditMode = 0; //'LAYOUT_MODE, TEXT_EDIT_MODE, BORDER_MODE, BACKGROUND_MODE
//var gSpanList = [["id", "start", "end"]];
//var gTextSelectionObject = 0;
//var gCurrSpanNode = 0;
//var gCurrentTextBorderType = 0;
var gHTMLObjectType = "none"; 

//var gStyleAttribute = 0; 
//var gWorkspaceMessage = "<div id='msg_container'><div class='MESSAGE'  style='border:dashed thin grey; position: relative; top: 60px; left: 10px; height: 40px'><b><u>To Open a Project:</u></b> Select a Project from Left Tree Window and choose the option<i><b> Home->Open Project</b></i> from the Menu</div>" +
	//	                  "<div  class='MESSAGE' style='border:dashed thin grey; position: relative; top: 70px; left: 10px; height: 40px'><b><u>To Create a Project:</u></b>Choose the option<i><b> Home->New Project</b></i> from the Menu</div></div>";

var gWorkspaceMessage = "<div id='msg_container'><div id='DIV_HTMLOBJECT863' class='OBJECT_CONTAINER' data-type='HEADING1' data-layerid='LAYER1188' data-modify='false' style='position: relative; display: block; top: 26px; left: 55px; width: 624px; height: 65px;'><h1 id='HTMLOBJECT863'>Welcome to Content Design Services<br></h1></div><div id='DIV_HTMLOBJECT560' class='OBJECT_CONTAINER' data-type='PARAGRAPH' data-layerid='LAYER1188' data-modify='false' style='position: relative; display: block; top: 0px; left: 55px; width: 698px; height: 151px;'><p id='HTMLOBJECT560'><span id='span_HTMLOBJECT560' class='rootcontainer'><span style='font-weight: bold; border: medium none; font-style: italic; text-decoration: underline;' class='textproperty' id='span1372'>Please Read the following instructions carefully:</span><br><br><span style='font-family: Comic Sans MS; font-size: medium; font-weight: normal; border: medium none;' class='textproperty' id='span581'>The Top most item on the left panel shows the virtual folder where all your work is stored. </span><br><br><span style='font-size: medium; border: medium none;' class='textproperty' id='span825'>You need to create a Project which contains all the pages that you create hereafter. </span><br><span style='border: medium none; font-size: medium;' class='textproperty' id='span1840'>Click on New <img src='style/icons/Version1/projectnew.png' style='display:inline-block; width:16px; height:16px'/> button above to</span> <span style='border: medium none; font-weight: bold; text-decoration: underline; font-size: medium;' class='textproperty' id='span1298'>Create</span> <span style='font-size: medium; border: medium none;' class='textproperty' id='span1887'>a project. </span><br><span style='font-size: medium; border: medium none;' class='textproperty' id='span170'>Click on Open <img src='style/icons/Version1/projectopen.png' style='display:inline-block; width:16px; height:16px'/> button to </span><span style='border: medium none; text-transform: capitalize; font-weight: bold; font-style: italic; text-decoration: underline; font-size: medium;' class='textproperty' id='span94'>open </span><span style='font-size: medium;' class='textproperty' id='span1376'>an existing project. </span><br></span></p></div></div>";


//var gProjectInfoMessage = "<div style='border:dashed thin grey; position: relative; top: 60px; left: 10px; height: 40px'><b><u>To Modify a Page:</u></b> Select a Page from Left Tree Window and choose the option<i><b> Edit->Modify</b></i> from the Menu</div>" +
//"<div style='border:dashed thin grey; position: relative; top: 70px; left: 10px; height: 40px'><b><u>To Insert a Page:</u></b>Choose the option<i><b> Insert->Page</b></i> from the Menu</div>";

var gProjectInfoMessage = "<div><div id='DIV_HTMLOBJECT1249' class='OBJECT_CONTAINER' data-type='HEADING1' data-layerid='LAYER46' data-modify='false' style='position: relative; display: block; top: 52px; left: 165px; width: 550px; height: 76px;'><h1 id='HTMLOBJECT1249'>Project Information <br></h1></div><div id='DIV_HTMLOBJECT25' class='OBJECT_CONTAINER' data-type='PARAGRAPH' data-layerid='LAYER46' data-modify='false' style='position: relative; display: block; top: 5px; left: 165px; width: 724px; height: 93px;'><p id='HTMLOBJECT25'><span id='span_HTMLOBJECT25' class='rootcontainer'><span style='border: medium none; font-weight: bold;' class='textproperty' id='span1616'>To Create a Page:</span> Click on New <img src='style/icons/Version1/projectnew.png' style='display:inline-block; width:16px; height:16px'/> button above.<br><br><span style='border: medium none; font-weight: bold;' class='textproperty' id='span1062'>To Open a Page:</span> Click on Open <img src='style/icons/Version1/projectopen.png' style='display:inline-block; width:16px; height:16px'/> button above after selecting the desired page item on the left panel. <br></span></p></div></div>";
var gPageInfoMessage = "<div><div id='DIV_HTMLOBJECT1560' class='OBJECT_CONTAINER' data-type='HEADING1' data-layerid='LAYER1240' data-modify='false' style='position: relative; display: block; top: 0px; left: 287px; width: 439px; height: 67px; overflow: hidden;'><h1 id='HTMLOBJECT1560'>Page Editing Notes<br></h1></div><div id='DIV_HTMLOBJECT1696' class='OBJECT_CONTAINER' data-type='PARAGRAPH' data-layerid='LAYER1240' data-modify='false' style='position: relative; display: block; top: 10px; left: 57px; width: 859px; height: 361px;'><p id='HTMLOBJECT1696'><span id='span_HTMLOBJECT1696' class='rootcontainer'>A <span style='border: medium none; text-transform: capitalize; font-weight: bold;' class='textproperty' id='span749'>page </span>contains multiple <span style='border: medium none; text-transform: capitalize; font-weight: bold;' class='textproperty' id='span612'>slides </span>which are composed of multiple <span style='border: medium none; font-weight: bold; text-transform: capitalize;' class='textproperty' id='span91'>groups </span>, which in turn contains <span style='border: medium none; font-weight: bold;' class='textproperty' id='span40'>Objects</span>. The following lines explains each of these. <br><br>a. <span style='border: medium none; font-weight: bold; text-decoration: underline;' class='textproperty' id='span1891'>Slides</span>: Slides are logical display unit which contains one or more <span style='border: medium none; text-transform: capitalize; font-weight: bold;' class='textproperty' id='span583'>groups </span>of <span style='border: medium none; font-weight: bold; text-transform: capitalize;' class='textproperty' id='span476'>objects</span>. At any time only <span style='border: medium none; font-weight: bold; text-decoration: underline;' class='textproperty' id='span339'>ONE </span>slide will be visible. Any transition from one slide to the next can happen either on User click or time expiry event.&nbsp; Slides are contained within a Page. <br>&nbsp;<br>&nbsp;&nbsp;&nbsp;<span style='text-decoration: underline; font-size: medium; font-style: italic; border: medium none;' class='textproperty' id='span1879'> To create a </span><span style='font-weight: bold; text-decoration: underline; font-size: medium; border: medium none; font-style: italic;' class='textproperty' id='span2000'>Slide </span><span style='text-decoration: underline; font-size: medium; font-style: italic; border: medium none;' class='textproperty' id='span994'>select the Page Node on left panel and click on the New Slide <img src='style/icons/Version1/scene.png' style='display:inline-block; width:16px; height:16px'/> &nbsp; above. </span><br><br>b. <span style='border: medium none; font-weight: bold; text-decoration: underline;' class='textproperty' id='span871'>Groups</span>: Groups are logical unit containing one or more <span style='border: medium none; font-weight: bold;' class='textproperty' id='span506'>Objects</span>(HTML, Graphics, Math expressions , A/V etc.). Groups are always contained within a slide. When a Group is displayed , all the <span style='border: medium none; text-transform: capitalize;' class='textproperty' id='span1220'>objects </span>defined within the <span style='border: medium none; text-transform: capitalize;' class='textproperty' id='span734'>group </span>are visible together.&nbsp; However, One <span style='border: medium none; text-transform: capitalize;' class='textproperty' id='span1270'>group </span>can be referred by multiple <span style='border: medium none; text-transform: capitalize;' class='textproperty' id='span153'>slides </span>( <span style='text-decoration: blink; border: medium none; font-style: italic;' class='textproperty' id='span1868'>Upcoming Feature</span>).<br><br>&nbsp;&nbsp;&nbsp;<span style='font-size: medium; font-style: italic; border: medium none;' class='textproperty' id='span1151'> To create a <span style='border: medium none; font-weight: bold; text-decoration: underline;' class='textproperty' id='span1360'>Group</span> select </span><span style='font-size: medium; border: medium none; font-style: italic;' class='textproperty' id='span1106'>the Slide Node on left panel and click on the New Group <img src='style/icons/Version1/layer.png' style='display:inline-block; width:16px; height:16px'/> </span><span style='font-size: medium; border: medium none; font-style: italic;' class='textproperty' id='span622'> above</span>. <br><br>c. <span style='border: medium none; font-weight: bold; text-decoration: underline;' class='textproperty' id='span1652'>Objects</span>: Objects are the atomic units which are actual visible objects like Text, Graphics etc.&nbsp; Objects are always defined&nbsp; within a <span style='text-transform: capitalize; border: medium none;' class='textproperty' id='span1302'>group</span>.&nbsp; <br></br>&nbsp;&nbsp;&nbsp;&nbsp; <span style='font-style: italic; font-size: medium; border: medium none;' class='textproperty' id='span1783'>To create a new <span style='font-weight: bold; text-decoration: underline;' class='textproperty' id='span233'>Object</span> select the desired Group&nbsp; Node on left panel and click on the appropriate icons like HTML text <img src='style/icons/Version1/text.png' style='display:inline-block; width:16px; height:16px'/>, Graphics <img src='style/icons/Version1/graphics.png' style='display:inline-block; width:16px; height:16px'/>, Mathematical expressions <img src='style/icons/Version1/mathml.png' style='display:inline-block; width:16px; height:16px'/>.</span><br><br>&nbsp;<br></span></p></div></div>";
var gCurrentTreeInfoType = 0;  //will keep track of what info type is being shown currently
var gPreviousTreeInfoType = 0; 
// ALL FUNCTIONS DEFINED HERE 
var gCurrentProjectID = 0; 
var gCurrentWKSID = 0; 
var gCurrentPageID = 0;
var gbMultiSelection = false; 
var gMultiSelNodeList = []; 
/* these denote different possible views depnding on which the handler function 
 * can handle data. So one may avoid writing multiple handlders*/
var gbDocumentView = 0 ; //WORKSPACE, PROJECT, PAGE, TEXT_EDITOR
var gLayerRefIDToCopy = 0; 
var gHTMLObjectIDToCopy = 0; 
var gLayerIDToCopy = 0; 
var gSlideIDToCopy = 0; 
var gProjectDataPath=0; 
var gBackMenu = false; 
var gTextUIMenuInitialized =  false; 
/***
 
 */

var gSaveDlgID = 'txtpromptSaveDlg'; 
var gDeleteDlgID = 'promptDeleteDlg';
var gProjNameDlgID = 'newProjnameDlg'; 
var gPageNameDlgID = 'newPagenameDlg'; 
var gAlignMsgDlgID = 'alignMsgDlgID'; 
var gImageDlg 	= 'imageLoadDlg';
var gVideoDlg = 'videoLoadDlg'; 
var gAssetlistDlg = 'assetlistdlg';

var gButtonWidth = '24'; 
var gButtonHeight='24'; 
var gDDLHeight = '24' ; //'26px'
var gEditWidth = "35"
var gGroupShowStateArr = [	 ['backgroup', false],
                             ['wksgroup', false],
                             ['newobjectgroup', false],
                             ['newtextgroup', false],
                             ['objectviewgroup', false] ,
                             ['objectpropertygroup', false],
                             ['editorgroup', false],
                             ['helpgroup', false]                            
							];  

var gIconDisableStateArr = [ 
                            //['back_icon', 'Button', true, btngrpid],  
                            //['back_icon', 'DropDownList', true, btngrpid],  
                            //['back_icon', 'ButtonGroup', true, btngrpid],  
                             
                             ];

var gBSvalue = ['none','Solid', 'Dashed' , 'Dotted', 'Double','Groove', 'Ridge','Inset', 'Outset']; 


var gObjSelBorderValue = "dashed 3px blue"; 
var gObjMultiSelFirstItem = "dashed 2px red"; 
var gObjMultiSelNextItem = "dashed 2px green";

var gObjSelBkgrndCol = "grey"; 
var gHTMLEditBorder = 'ridge 5px grey'; 

var gInitLeftPos, gInitTopPos;
var gInitWidth,gInitHeight;
var gbkgrndRepeatArr = [];

gbkgrndRepeatArr['None'] = 'no-repeat'; 
gbkgrndRepeatArr['All-Directions'] = 'repeat'; 
gbkgrndRepeatArr['Only-Horizontally'] = 'repeat-x'; 
gbkgrndRepeatArr['Only-Vertically'] = 'repeat-y'; 

var gObjCurrentStyleProperties =[];
gObjCurrentStyleProperties['border-style'] = 0; 
gObjCurrentStyleProperties['border-width'] = 0; 
gObjCurrentStyleProperties['border-radius'] = 0; 
gObjCurrentStyleProperties['border-color'] = 0; 
gObjCurrentStyleProperties['background-image'] = 0; 
gObjCurrentStyleProperties['background-repeat'] = 0;
gObjCurrentStyleProperties['background-origin'] = 0;
gObjCurrentStyleProperties['background-color'] = 0; 
gObjCurrentStyleProperties['background-position'] = 0;
gObjCurrentStyleProperties['background-size'] = 100; 
gObjCurrentStyleProperties['opacity'] = 100; 



gObjCurrentStyleProperties['shadow-H'] = 0; 
gObjCurrentStyleProperties['shadow-V'] = 0;
gObjCurrentStyleProperties['shadow-blur'] = 0;
gObjCurrentStyleProperties['shadow-spread'] = 0;
gObjCurrentStyleProperties['shadow-color'] = 0;

var gApplySelectProperty =  false; 
var gSelectedObjectProperty = []; 
gSelectedObjectProperty['boxShadow'] = ""; 
gSelectedObjectProperty['borderStyle'] = "";
gSelectedObjectProperty['borderWidth'] = "";
gSelectedObjectProperty['borderHeight'] = "";
gSelectedObjectProperty['borderRadius'] = "";
gSelectedObjectProperty['borderColor'] = "";

gSelectedObjectProperty['backgroundColor']    = "";
gSelectedObjectProperty['backgroundImage']    = "";
gSelectedObjectProperty['backgroundOrigin']   = "";
gSelectedObjectProperty['backgroundPosition'] = ""; 
gSelectedObjectProperty['backgroundSize'] = ""; 
gSelectedObjectProperty['backgroundPosition'] = ""; 
gSelectedObjectProperty['data-backgroundgradcolor'] = "";
gSelectedObjectProperty['opacity'] = "";

var gInitColorProp = []; 
gInitColorProp['border-color']=0; 
gInitColorProp['background-color']=0; 
gInitColorProp['shadow-color']=0; 
var gInitDataBackgroundGradColorArr;// = [];
var gCurrentDataBackgroundColorArr = new Array(8);//=[]; 
var gTreeIcons = []; 
gTreeIcons['SCENE'] = 'style/icons/Version1/scene.png';
gTreeIcons['LAYER'] = 'style/icons/Version1/layer.png';
gTreeIcons['HTMLOBJECT'] = 'style/icons/Version1/text.png';

var gBkgrndPosParam =['left top','left bottom','left center', 'right top', 'right bottom', 'right center',
                      'center top', 'center bottom', 'center center']; 

var gCurrentObjectNodeTitle = ""; 
/*
 * 'style='border-style: solid; border-width: 2px; border-radius: 6px 6px 6px 6px; 
 * background-image: url("http://localhost/ECLIPSE_WORKSPACE/APPLICATION/CDOC_App/USER_DATA/roger_dir/anewproject/Data/italic.png"); 
 * background-repeat: repeat-x; background-origin: border-box; 
 * box-shadow: 5px 6px 7px 5px rgb(232, 181, 0);
 * border-color: rgb(209, 160, 0); background-color: rgb(197, 229, 94); background-position: left center; 
 * background-size: 8% auto;'
 */

var gInitBorderColorValue, gInitShadowColorValue;
var gEditedObjectList = []; //contains ObjectIDs which have been edited 
var gTextSummaryLength = 24; 
var gTreeItemHighlighter = 'border-bottom:solid thin blue'; 
var gDropDownListEventInternal =false; 

var gBrowserPrefix = '';//-webkit-';//'-moz-';
var gTreeItemExpanded  = true; 
var gObjectTypeValues = ['Insert HTML Element','Heading1' , 'Heading2', 'Heading3', 'Footer','Image', 'Navigation Buttons','Next Slide Button','Previous Slide Button', 
                         'Next Page Button', 'Previous Page Button', 'Paragraph',  'Slide Number', 'Slide Title', 'Video', 'Audio']; 
var gMaxNumGradCol = 4; 


var DEFAULT_COLOR_ARRAY = [];
DEFAULT_COLOR_ARRAY[0] = '#FF0000'; 
DEFAULT_COLOR_ARRAY[1] = '#D8D8D8'; 
var gbkgrndparamseparator = ";"; 
//var gCurrentBackgrndColorGradient =  new ColorGradient(); 
//var gTempBackgroundColorGrad =  new ColorGradient(); 
var gbShowGradWindow =  false;

var gRGOriginValue = ['center','left','top','right','bottom', 'left top', 'left bottom', 'right top', 'right bottom'];
var gRGShapeValue = ['circle','ellipse'];
var gRGSizeValue = ['closest-side','closest-corner', 'farthest-side','farthest-corner', 'contain' ,'cover' ];
var gTotalNumSlides = 0; 

var gFileIPLocation = 0; //LOCAL, REMOTE
var gImageLoadingType = 0; //IMAGE_OBJECT, BACKGROUND_IMAGE_ATTRIBUTE

sSlideInfo.prototype.id = 0;
sSlideInfo.prototype.AVObjectID = 0;
sSlideInfo.prototype.duration = 0; 
sSlideInfo.prototype.startTime = -1;
sSlideInfo.prototype.endTime = -1;


function sSlideInfo() {
	sSlideInfo.prototype.id = 0;
	sSlideInfo.prototype.AVObjectID = 0;
	sSlideInfo.prototype.duration = new Number(0.0); 
	sSlideInfo.prototype.startTime = new Number(-1); 
	sSlideInfo.prototype.endTime =  new Number(-1); 
}
var gCurrSlideStartTime = 0;
var gCurrSlideEndTime = 0; 
var gSlideInfoList = 0; 
var gCurrentSlideIndex = -1; 
var gSlideDuration = 0; 
var gAutoSlideTimer = 0; 
var gbStartSlide = false; 
var gTimeOut = 100; 
var gAVPlayerObject =0;
var gVideoDuration = 0; 
var gAVPlayerInitOffsetTime = 0; 

var gRefLayerIDAdded = 0; 
var gPreviewStartIndex = 0; 
var gPreviewEndIndex = 0; 
var gbPreviewPlay =  false ; 
var gLastSlideVideoStopTime=0; 
var gLastSlideVideoDuration=0; 

//effect related variables 
var gEffectTypes=['None','Blind','Bounce','Clip','Drop','Explode','Fade','Highlight','Puff','Pulsate','Scale','Shake','Size','Slide'/*,'Flip'*/];
var gblindDirTypes=['Up', 'Down', 'Left', 'Right', 'Vertical', 'Horizontal'];
var gClipDirType = ['vertical', 'horizontal'];
var gDropDirType = ['up', 'down', 'left', 'right'];
var gScaleDirType=['vertical','horizontal', 'both'];
var gScaleOrigType=['"middle", "center"','"left", "center"', '"right", "center"'];
var gShakeDirTypes=['left', 'right','up', 'down' ]; 
var gSlideDirTypes=['left', 'right','up', 'down' ]; 
var gFlipDirTypes=['LeftToRight', 'RightToLeft', 'TopToBottom', 'BottomToTop']; 
var gFlipDirParamTypes=['lr', 'rl', 'tb', 'bt']; 
var gEffectParamSep = '@'; 
sElementDOInfo.prototype.id = 0;
sElementDOInfo.prototype.delay = 0;
sElementDOInfo.prototype.animTime = 0;

function sElementDOInfo() {
    sElementDOInfo.prototype.id = 0;
    sElementDOInfo.prototype.delay = new Number(0);
    sElementDOInfo.prototype.animTime = new Number(0);
}
var gElementDOList=[]; 

function UIH_Initialize()
{
	 // BlockUIinAjax(true); 
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
      var panel2 = [{ size: '25%', collapsible: false}];
      WAL_createSplitter('dataContainerSplitter', '100%', '100%', "vertical", panel2);
      var panel3 = [{ size: '80%'}];
      WAL_createSplitter('metadataContainerSplitter', '100%', '100%', "horizontal", panel3);
      
      $('#splitterContainer').jqxSplitter('hideCollapseButtonAt', 0);
      $('#dataContainerSplitter').jqxSplitter('hideCollapseButtonAt', 0);
      $('#metadataContainerSplitter').jqxSplitter('hideCollapseButtonAt', 0);
      
      
      var JQSel = "#layout_interface";
     // $(JQSel).hide(); 
      
      UIH_InitializeToolbar(); 
      //trial code _rm testing resizing functionality 
     
      var sessionparam = DH_getCurrentSessionState(); 
      var ProjID, PageID, ObjID; 
      if(sessionparam.length > 1)    	  
      {
    	  gCurrentProjectID 	= sessionparam[0]; 
    	  gCurrentPageID 		= sessionparam[1];
    	  gCurrentObjectID  	= sessionparam[2];     	  
      }
      
      if(gCurrentProjectID == 0)     
    	  UIH_ShowWorkspaceInfo();
      else
      {    	       	  
    	  var ObjID = "TM_" + gCurrentObjectID; 
    	  UIH_ShowPageInfo(gCurrentPageID);
    	  
    	 // gTreeItemExpanded = false; 
    	 // UIH_ToggleTreeItemExpand(); 
    	 // UIH_setTreeItemSelection(ObjID);     	 
    	 
    	 // WAL_expandTreeItem(gTreeNodeID,ObjID, true);   
    	  DH_setCurrentSessionState(0, 0, 0); 
      }
     
     //create the modal dialogs here 
      WAL_createModalWindow(gSaveDlgID, '250', '150', 'saveyesbtn', 'savenobtn');
      WAL_createModalWindow(gDeleteDlgID, '250', '150', 'deleteyesbtn', 'deletenobtn');
      WAL_createModalWindow(gProjNameDlgID, '250', '150', 'projOK', 'projCancel');
      WAL_createModalWindow(gPageNameDlgID, '250', '150', 'pageOK', 'pageCancel');
      WAL_createModalWindow(gImageDlg, '250', '150', 'imageOK', 'imageCancel');      
      WAL_createModalInfoDialog(gAlignMsgDlgID, '480','150');
      WAL_createModalWindow(gVideoDlg, '250', '150', 'videoOK', 'videoCancel');     
      
      
      if(gCurrentTreeInfoType == 'PAGE')
		{
			//$.blockUI();	
			bTopLevelDisplay = true;
			setTimeout(function(){				
					if(bTopLevelDisplay == true)
						WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
					
					WAL_expandTreeItem(gTreeNodeID, ObjID, true);
					UIH_setTreeItemSelection(ObjID);    
					BlockUIinAjax(false); 
				}, 750); 
		}
		else
		{
			//$.unblockUI(); 
			BlockUIinAjax(false); 
		}
      
}


function UIH_InitializeToolbar()
{
	
	WAL_createDropdownList("newobjectTypeDDL", '146', gDDLHeight, false, gObjectTypeValues, "", '150');
	WAL_createCustomButton('newobjecttype_icon', 'UIH_ToolbarHandler');

	//objectgroup
	WAL_createCustomButton('scene_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('layer_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('save_editor_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('delete_editor_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('reload_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('level_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('slideorder_icon', 'UIH_ToolbarHandler');
	
	
	WAL_createCustomButton('border_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('layout_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('bkgrnd_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('text_edit_icon', 'UIH_ToolbarHandler');
	
	//editorgroup 
	WAL_createCustomButton('undo_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('redo_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('styleapply_icon', 'UIH_ToolbarHandler');	
	WAL_createCustomButton('clear_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('copy_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('apply_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('reference_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('add_reference_icon', 'UIH_ToolbarHandler');
	
	//helpgroup
	WAL_createCustomButton('preview_icon', 'UIH_ToolbarHandler');
	WAL_createCustomButton('help_icon', 'UIH_ToolbarHandler');
	
	//second row item layout_interface
	WAL_createNumberInput("widthIP", '58px', gDDLHeight, "UIH_ValueChange",true, 1280, 0,1);
    WAL_createNumberInput("heightIP", '58px', gDDLHeight, "UIH_ValueChange", true, 1000, 0,1);     
    WAL_createCustomButton('alignwidth_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignheight_icon', 'UIH_ToolbarHandler');
    
    
    //position group 
    WAL_createNumberInput("lposIP", '58px', gDDLHeight,  "UIH_ValueChange", true, 1280, 0,1);
    WAL_createNumberInput("tposIP", '58px', gDDLHeight, "UIH_ValueChange", true, 1000, 0,1); 
    WAL_createCustomButton('alignleft_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('aligntop_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignright_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignbottom_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignhorizontal_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignvertical_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignhorcenter_icon', 'UIH_ToolbarHandler');
    WAL_createCustomButton('alignvertcenter_icon', 'UIH_ToolbarHandler');   
    
    //border interface 
     WAL_createDropdownList("borderStyleDDL", '110', gDDLHeight, true, gBSvalue, "UIH_DDLHandler", '110');
	 WAL_createNumberInput("borderThickIP", '58px', gDDLHeight, "UIH_ValueChange", true, 8, 0,1);
	 WAL_createNumberInput("borderRoundnessIP", '58px', gDDLHeight, "UIH_ValueChange", true, 25, 0,1);
	 	 
	 WAL_createColorPickerWindow("colorpickwidget", "colorpicker", '350', '250', "okbtn", "cancelbtn");
	 WAL_createCustomButton('bordercolor_icon', 'UIH_ToolbarHandler');
	 //shadow properties
	 
	 WAL_createCustomButton('shadow_icon', 'UIH_ToolbarHandler');
	 WAL_createNumberInput("HOffsetIP", '58px', gDDLHeight, "UIH_ValueChange", true, 50, -50,1);
	 WAL_createNumberInput("VOffsetIP", '58px', gDDLHeight, "UIH_ValueChange", true, 50, 0,1);
	 WAL_createNumberInput("blurIP", '58px', gDDLHeight, "UIH_ValueChange", true, 100, 0,1);
	 WAL_createNumberInput("spreadIP", '58px', gDDLHeight, "UIH_ValueChange", true, 100, 0,1);
	 WAL_createCustomButton('shadowcolor_icon', 'UIH_ToolbarHandler');
	 
	 
	 //background interface 
	 WAL_createCustomButton('bkgrnd_image_icon', 'UIH_ToolbarHandler');
	 WAL_createCustomButton('bkgrnd_color_icon', 'UIH_ToolbarHandler');
	 WAL_createCustomButton('bkgrnd_deleteimage_icon', 'UIH_ToolbarHandler');     
     WAL_createDropdownList("HbkgrndPosIP", '130', '26', true, gBkgrndPosParam, "UIH_DDLHandler", '130');
     
     var repeatParam =['None','All-Directions','Only-Horizontally','Only-Vertically']; 
     WAL_createDropdownList("imageRepeatDDL", '130', '26', true, repeatParam, "UIH_DDLHandler", '130');
     WAL_createNumberInput("bkgrndImageSize", '58px', '25px', "UIH_ValueChange", true, 101, 0,1);
     WAL_setNumberInputValue("bkgrndImageSize", 100);
     WAL_createNumberInput("bkgrndOpacity", '58px', '25px', "UIH_ValueChange", true, 101, 0,1);
     WAL_setNumberInputValue("bkgrndOpacity", 100);
     
     WAL_createCustomButton('newimage_icon', 'UIH_ToolbarHandler');
     WAL_createNumberInput("imageOpacity", '58px', '25px', "UIH_ValueChange", true, 101, 0,1);
     WAL_setNumberInputValue("imageOpacity", 100);
     
     WAL_createCustomButton('newvideo_icon', 'UIH_ToolbarHandler');
     WAL_createCustomButton('newaudio_icon', 'UIH_ToolbarHandler');     
     WAL_createCustomButton('autoshow_icon', 'UIH_ToolbarHandler'); 
     
     //create the interface controls 
       
     WAL_createCustomButton('slideplay_icon', 'UIH_ToolbarHandler');     
     WAL_createCustomButton('ass_reset_icon', 'UIH_ToolbarHandler');
     WAL_createCustomButton('applytime_icon', 'UIH_ToolbarHandler');
     
     WAL_createSlider('AVRangeSlider', '250px', '15px', true, 0, 100,1, 5, true , false, 'UIH_HandleforAVSyncSlider', true, "UIH_HandlerForAVSlideEnd");
     //WAL_createSlider(ID, Width, Height, bDiscrete, MinValue, MaxValue, Step,tickFreq, bShowTicks, bButtonShow ,HandlerSliderChange, bRangeSlider)
     /*WAL_createCheckBox('startTime', 'UIH_MarkInOutValueChange', '50', '20' , '13', false, false);
     WAL_createCheckBox('endTime', 'UIH_MarkInOutValueChange', '50', '20' , '13', false, false);
     WAL_disableWidget('startTime', 'data-customButton', false, false);
     WAL_disableWidget('endTime', 'data-customButton', false, false);
     */
     WAL_createNumberInput('startTime', '58px', gDDLHeight, "UIH_ValueChange",true, 1800, 1,1);
     WAL_createNumberInput('endTime', '58px', gDDLHeight, "UIH_ValueChange",true,1800, 1,1);
     
    // WAL_createCustomButton('slidestop_icon', 'UIH_ToolbarHandler');
     WAL_createCustomButton('previewautoshow_icon', 'UIH_ToolbarHandler'); 
     WAL_createNumberInput('startASSIndex', '58px', gDDLHeight, "UIH_ValueChange",true, 50, 1,1);
     WAL_createNumberInput('endASSIndex', '58px', gDDLHeight, "UIH_ValueChange",true, 50, 1,1);
     
     //effect interface creation 
     WAL_createCustomButton('slideeffect_icon', 'UIH_ToolbarHandler');
     WAL_createCustomButton('slide_preview_icon', 'UIH_ToolbarHandler');      
     WAL_createCustomButton('elem_DO_icon', 'UIH_ToolbarHandler'); 
     WAL_createCustomButton('elemDOUpBtn', 'UIH_ToolbarHandler');
     WAL_createCustomButton('elemDODownBtn', 'UIH_ToolbarHandler');     
     //now create the dialog box for DO      
     WAL_createModalWindow('elemDOListDlg', '280', '350', 'LBOK', 'LBCancel');
     WAL_createListBox('elemDOlistbox', '200', '200', "UIH_OnLBItemSelectHandling");
        
     WAL_createDropdownList("TransEffectDDL", '110', gDDLHeight, false, gEffectTypes, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('TransEffectDDL', 0);
     
     WAL_createCustomButton('apply_effect_icon', 'UIH_ToolbarHandler');
     WAL_createNumberInput("effectDurationIP", '58px', gDDLHeight, "UIH_ValueChange", true, 3000, 0,100);
     WAL_setNumberInputValue("effectDurationIP", 1000);
     
     WAL_createDropdownList("blindDirectionDDL", '110', gDDLHeight, true, gblindDirTypes, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('blindDirectionDDL', 0);
     
     WAL_createNumberInput("bounceDistanceIP", '58px', gDDLHeight, "UIH_ValueChange", true, 30, 0,1);
     WAL_setNumberInputValue("bounceDistanceIP", 20);
     
     WAL_createNumberInput("bounceNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 10, 0,1);
     WAL_setNumberInputValue("bounceNumIP", 5);
          
     WAL_createDropdownList("clipDirectionDDL", '110', gDDLHeight, true, gClipDirType, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('clipDirectionDDL', 0);
     
     WAL_createDropdownList("dropDirectionDDL", '110', gDDLHeight, true, gDropDirType, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('dropDirectionDDL', 0);
     
     WAL_createNumberInput("explodeNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 24, 0,1);
     WAL_setNumberInputValue("explodeNumIP", 9);
     
     WAL_createNumberInput("fadesizeNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 24, 0,1);
     WAL_setNumberInputValue("fadesizeNumIP", 15);
     
     WAL_createNumberInput("puffpercentNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 200, 0,1);
     WAL_setNumberInputValue("puffpercentNumIP", 150);
     
     WAL_createNumberInput("pulsateNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 12, 0,1);
     WAL_setNumberInputValue("pulsateNumIP", 5);
     
     WAL_createDropdownList("scaleDirectionDDL", '110', gDDLHeight, true, gScaleDirType, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('scaleDirectionDDL', 0);	
     WAL_createDropdownList("scaleoriginDDL", '110', gDDLHeight, true, gScaleOrigType, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('scaleoriginDDL', 0);	
     WAL_createNumberInput("scalepercentNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 100, 0,1);
     WAL_setNumberInputValue("scalepercentNumIP", 25);
     
     //shake 
     WAL_createDropdownList("shakeDirectionDDL", '110', gDDLHeight, true, gShakeDirTypes, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('shakeDirectionDDL', 0);     
     
     WAL_createNumberInput("shakedistanceNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 30, 0, 1);
     WAL_setNumberInputValue('shakedistanceNumIP', 20);
        
     WAL_createNumberInput("shaketimesNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 10, 0,1);
     WAL_setNumberInputValue('shaketimesNumIP', 5);    
     
     //slide
     WAL_createDropdownList("slideDirectionDDL", '110', gDDLHeight, true, gSlideDirTypes, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('slideDirectionDDL', 0);         
     WAL_createNumberInput("slidedistanceNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 30, 0,1);
     WAL_setNumberInputValue('slidedistanceNumIP', 20);
     
     //flip 
     WAL_createDropdownList("flipDirectionDDL", '110', gDDLHeight, true, gFlipDirTypes, "UIH_DDLHandler", '110');
     WAL_SetItemInDropDownList('flipDirectionDDL', 0);         
     WAL_createNumberInput("flipspeedNumIP", '58px', gDDLHeight, "UIH_ValueChange", true, 2000, 0,100);
     WAL_setNumberInputValue('flipspeedNumIP', 700);
     
     
     TE_InitializeToolbar(); 
     $('.PROPERTY_INTERFACE').hide(); 
   //group 0
 	WAL_createCustomButton('back_icon', 'UIH_ToolbarHandler');
 	
 	//group 1
 	WAL_createCustomButton('new_icon', 'UIH_ToolbarHandler');
 	WAL_createCustomButton('open_icon', 'UIH_ToolbarHandler');
 	WAL_createCustomButton('delete_icon', 'UIH_ToolbarHandler');
 	WAL_createCustomButton('save_icon', 'UIH_ToolbarHandler');
    // WAL_hideWidget('texteditinterface', false);	
 	WAL_createWaitPromptWindow('waitwindow', '0', '0');
 	//now create the gradient interface 
 	UIH_CreateGradientInterface(); 
     
 	
 	//List Box data UI controls
 	WAL_createListBox('assetlistbox', '270', '250', "UIH_LBItemsSelectHandler");
 	WAL_createButton('LB_deletebtn', '', '60', '24', true); 	
 	WAL_createWindow(gAssetlistDlg,"Asset List", true, '282', '350', false,
 			true, false, false, false, "", 'LB_okbtn', 'LB_cancelbtn');
 	
 	//File IP Location window 
 	WAL_createRadioButton('localfilebtn', 'UIH_FileIPRadioValueChange', '150', '20', false, false);  
 	WAL_createRadioButton('remotefilebtn', 'UIH_FileIPRadioValueChange', '150', '20', false, false);
 	WAL_createWindow('fileipdlg',"File Location", true, '230', '180', false,
 			true, false, false, false, "", 'FileIP_okbtn', 'FileIP_cancelbtn');
 	
 	
 	
}



function UIH_MenuItemClick(itemID)
{
	var URI = gAppURI; //?modid=WKSM&reqid=100&type=XML";
	//alert("You clicked" + itemID); 
	//BlockUIinAjax(true); 
	var bTopLevelDisplay = false; 
	
	var newObjectType; 
	switch(itemID)
	{
	case 'new_icon':
		UIH_setTopItemSelInTree(); 
		UIH_menu_new(); 
		
		break;
	case 'open_icon':
		BlockUIinAjax(true); 	
		UIH_menu_open();
		//$.unblockUI();
		if(gCurrentTreeInfoType == 'PAGE')
		{
			//$.blockUI();				
			setTimeout(function(){				
					
						//UIH_UpdateSlideIndexInfo(); 
						gTreeItemExpanded =  true; 
						UIH_ToggleTreeItemExpand(); 
						//WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
						
					BlockUIinAjax(false); 
					
				}, 750); 
		}
		else
		{
			//$.unblockUI(); 
			BlockUIinAjax(false); 
		}
			
		break; 	
	case 'edit_icon':
		UIH_menu_modify(); 
		break; 
	case 'delete_icon':		
		WAL_showModalWindow(gDeleteDlgID,"UIH_menu_delete", "" );		//UIH_menu_delete();		
		break;	
	case 'delete_editor_icon':
		if(gObjectEditMode != 'LAYOUT_MODE')
			UIH_showLayoutInterface(); 
		WAL_showModalWindow(gDeleteDlgID,"UIH_menu_delete", "" );
		break; 
	
	case 'back_icon':		
		UIH_menu_back(); 
		break; 
	case 'scene_icon':
		//Debug_Message("Adding New Slide"); 
		if(gObjectEditMode != 'LAYOUT_MODE')
			UIH_showLayoutInterface();			
		UIH_setTopItemSelInTree(); 
		newObjectType = 'SCENE';
		BlockUIinAjax(true);
		UIH_AddObject(newObjectType); 
		
		// first find if BAse layer is already added if not then only add otherwise just add reference
		var sceneID = gCurrentTreeNode.getAttribute('id'); 
		UIH_addBaseLayer(sceneID); 
		UIH_setTreeItemSelection(sceneID); 
		
		newObjectType = 'LAYER';  
		UIH_AddObject(newObjectType);
		UIH_AddNewHTMLObject('SLIDE TITLE');
		UIH_AddNewHTMLObject('SLIDE NUMBER');
		DH_UpdateSlideEffectInfo(gCurrentPageID); 
		//DH_updateSlideShowInfo(gCurrentPageID); 
		//UIH_UpdateSlideIndexInfo(); 
		
		setTimeout(function(){							
				//gTreeItemExpanded =  true; 
				//UIH_ToggleTreeItemExpand();				
				UIH_setTreeItemSelection(sceneID);
				DH_updateSlideShowInfo(gCurrentPageID); 
				//UIH_UpdateSlideIndexInfo(); 
				//UIH_menu_save(); 
				BlockUIinAjax(false); 
		}, 300); //need to be modified 		
		//Debug_Message("Modied Version: 1"); 
		break; 
	case 'layer_icon':
		newObjectType = 'LAYER';  
		BlockUIinAjax(true);
		UIH_AddObject(newObjectType);
		BlockUIinAjax(false);
		break; 
	case 'newobjecttype_icon':
		//BlockUIinAjax(true);
		var itemsel = WAL_getDropdownListSelection('newobjectTypeDDL');	
		if( (!itemsel) || (itemsel == 'Insert HTML Element') )
		{
			Debug_Message("Pl. choose an Element from the List");
			return;
		}
		UIH_AddNewHTMLObject(itemsel);
		//BlockUIinAjax(false);
		break;	
	case 'save_icon':	
		UIH_menu_save(); 
		
		break; 
	case 'preview_icon':
		
		UIH_menu_preview();
		break; 
	case 'undo_icon':
		UIH_menu_undo(); 
		break; 
	case 'redo_icon':
		UIH_menu_redo(); 
		break;
	case 'clear_icon':
		UIH_menu_clear();
		break; 
	case 'alignleft_icon':
		UIH_AlignMargin('LEFT'); 
		break; 
	case 'aligntop_icon':
		UIH_AlignMargin('TOP'); 
		break;
	case 'alignright_icon':
		UIH_AlignMargin('RIGHT'); 
		break;
	case 'alignbottom_icon':
		UIH_AlignMargin('BOTTOM'); 
		break;
	case 'alignwidth_icon':
		UIH_AlignSize('WIDTH'); 
		break; 
	case 'alignheight_icon':
		UIH_AlignSize('HEIGHT'); 
		break; 
	case 'alignhorizontal_icon':
		UIH_AlignSpace('HORIZONTAL'); 
		break; 
	case 'alignvertical_icon':
		UIH_AlignSpace('VERTICAL'); 
		break; 	
	case 'alignhorcenter_icon':
		if(gCurrentObjContainerNode)
		{
			var ID = gCurrentObjContainerNode.getAttribute('id'); 
			UIH_AlignWithContainer(ID, 'HOR_CENTER');
		}
		break;
	case 'alignvertcenter_icon':
		if(gCurrentObjContainerNode)
		{
			var ID = gCurrentObjContainerNode.getAttribute('id'); 
			UIH_AlignWithContainer(ID, 'VERT_CENTER');
		}
		break; 
	case 'reload_icon':
		BlockUIinAjax(true);
		UIH_refreshPage();		
		bTopLevelDisplay = true;
		setTimeout(function(){				
				if(bTopLevelDisplay == true)
				{
					UIH_UpdateSlideIndexInfo(); 
					gTreeItemExpanded =  true; 
					UIH_ToggleTreeItemExpand(); 
				}
					
					//WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
				
				BlockUIinAjax(false); 
			}, 750); 
		//DH_updateSlideShowInfo(gCurrentPageID);  
		break; 
	case 'reference_icon':
		UIH_menu_reference_icon(); 
		break;
	case 'add_reference_icon':
		BlockUIinAjax(true);
		UIH_menu_add_reference_icon(); 
		bTopLevelDisplay =  true; 
		setTimeout(function(){				
			if(bTopLevelDisplay == true)
			{
				gTreeItemExpanded =  true; 
				UIH_ToggleTreeItemExpand(); 
				var sceneID = gCurrentTreeNode.id; 
			    UIH_setTreeItemSelection(sceneID);
			}			
			BlockUIinAjax(false); 
			bTopLevelDisplay = false; 
		}, 750); 
		
		//BlockUIinAjax(false);
		break;
	case 'copy_icon':
		UIH_menu_copy();
		break; 
	case 'apply_icon':
		BlockUIinAjax(true);
		UIH_menu_apply(); 
		BlockUIinAjax(false);
		break; 
	
	case 'border_icon':
		UIH_showBorderInterface ();
		break;
	case 'bordercolor_icon':
		var attrName = 'ALL_BORDER_COLOR';		
		
		WAL_hideWidget('colorpickwidget', true); 
		WAL_showColorPickerWidget('colorpickwidget', 'UIH_BorderColorHandler', 'bordercolor_icon',attrName);
		
		break; 
	case 'layout_icon':
		UIH_showLayoutInterface();
		break; 
	case 'shadow_icon':
		if(gCurrentObjContainerNode)
		{
			var contentNode = gCurrentObjContainerNode.firstElementChild; 
			var attrVal = contentNode.style.boxShadow;  
			if( (!attrVal) || (attrVal.length == 0 ) )
			{
				gObjCurrentStyleProperties['shadow-H'] = 3; 
				gObjCurrentStyleProperties['shadow-V'] = 3;
				gObjCurrentStyleProperties['shadow-blur'] = 6;
				gObjCurrentStyleProperties['shadow-spread'] = 5;
				gObjCurrentStyleProperties['shadow-color'] = 'grey';
			}
				
			else
			{
				gObjCurrentStyleProperties['shadow-H'] = 0; 
				gObjCurrentStyleProperties['shadow-V'] = 0;
				gObjCurrentStyleProperties['shadow-blur'] = 0;
				gObjCurrentStyleProperties['shadow-spread'] = 0;
				gObjCurrentStyleProperties['shadow-color'] = 0;				
			}
					
			UIH_ApplyStyleProperty(gCurrentObjContainerNode, 'BORDER_SHADOW', "", true);
			
			
		}
		
		break;
	case 'shadowcolor_icon':		
		WAL_hideWidget('colorpickwidget', true); 
		
		WAL_showColorPickerWidget('colorpickwidget', 'UIH_BorderShadowColorHandler', 'shadowcolor_icon','SHADOW_COLOR');	
		break;
	case 'bkgrnd_icon':
		//UIH_menu_load_background_image(); 
		UIH_showbackgroundInterface(); 
		break; 
	case 'bkgrnd_image_icon':
		//UIH_menu_load_background_image();
		if(gCurrentObjectNode)
		{
			gImageLoadingType = 'BACKGROUND_IMAGE_ATTRIBUTE';
			WAL_showWindow('fileipdlg', true, 'bkgrnd_image_icon');
		}
		break; 
	case 'bkgrnd_color_icon':
		//WAL_hideWidget('colorpickwidget', true); 		
		//WAL_showColorPickerWidget('colorpickwidget', 'UIH_BackgroundColorHandler', 'bkgrnd_color_icon','BACKGROUND_COLOR');
		//WAL_showModalWindow('gradientwindow', 'UIH_GradientOKHandler', 'UIH_GradientCANCELHandler');
		var objID ; 
		if(gCurrentObjContainerNode.id != 'DIV_DATA_CONTAINER')
		{
			objID = gCurrentObjContainerNode.firstElementChild.id; 
		}
		else
			objID = 'DIV_DATA_CONTAINER'; 
		
		//UIH_PopulateBkgrndInfoFromObjectToStructure(objID, gCurrentBackgrndColorGradient);		
		UIH_ShowGradientUI(); 
		break; 
	case 'bkgrnd_deleteimage_icon':
		UIH_RemoveBackgroundImage(); 
		break; 
	case 'level_icon':
		UIH_ToggleTreeItemExpand(); 
		break; 
	case 'text_edit_icon':		
		UIH_showHTMLEditInterface(true); 
		break; 
	case 'slideorder_icon':
		UIH_UpdateSlideIndexInfo(); 
		WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
		break; 
	case 'newimage_icon':	
		if(gCurrentEditableObjectID)
		{
			//UIH_menu_load_image();
			gImageLoadingType = 'IMAGE_OBJECT';
			WAL_showWindow('fileipdlg', true, 'newimage_icon');
		}		
		break;		
	case 'styleapply_icon':
		UIH_menu_copystyle();
		break;
	case 'newvideo_icon':	
		if(gCurrentEditableObjectID)
		{
			//UIH_menu_load_image();
			gImageLoadingType = 'VIDEO_OBJECT';
			WAL_showWindow('fileipdlg', true, 'newimage_icon');
		}		
		break;	
	case 'newaudio_icon':	
		if(gCurrentEditableObjectID)
		{
			//UIH_menu_load_image();
			gImageLoadingType = 'AUDIO_OBJECT';
			WAL_showWindow('fileipdlg', true, 'newimage_icon');
		}		
		break;	
	case 'autoshow_icon':		
		UIH_showAutoSlideInterface(); 		
		break; 
	
	
	case 'slideplay_icon':	
		var node = document.getElementById('slideplay_icon');
		if(gbStartSlide == false)
		{
			node.setAttribute('src', 'style/icons/Version1/player_pause.png');
			UIH_playSlides(); 		
		}
		else
		{
			node.setAttribute('src', 'style/icons/Version1/player_play.png');
			UIH_stopSlidePlay(); 
		}			
		break;			
	case'previewautoshow_icon':
		UIH_EnableAutoShowWidget(false); 
		UIH_previewAutoShow();
		break; 
	case 'ass_reset_icon':
		if(gCurrentSlideIndex > 0)
			UIH_ResetAutoSyncInfo(gCurrentSlideIndex); 
		break; 	
	case'slideeffect_icon':
		UIH_showEffectsInterface();
		break;
	case'elem_DO_icon':		
		UIH_ShowElemDOListDialog();
		break;
	case'elemDOUpBtn':		
		break;
	case'elemDODownBtn':		
		break;	
	case 'apply_effect_icon':
		if(gCurrentObjContainerNode)
			UIH_ApplyEffectParameters(gCurrentObjContainerNode); 
		break; 
	case 'slide_preview_icon':
		UIH_PreviewSlideEffects(); 
		break; 
	case 'applytime_icon':
		UIH_ApplyTimingInfo(); 
		break; 		
	default:
		break; 
		
	}
	
	//BlockUIinAjax(false); 
	if(bTopLevelDisplay == true)
	{
			//WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
			
	}
	
}

function UIH_TreeItemClick(selectedItem)
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
	//resetting the ObjectID every time there is a tree sel change 
	gCurrentObjectID = 0; 
	UIH_menu_clear(); 
	
	//if(gObjectEditMode == 'AUTOSHOW_MODE')
	//	return ; 
	
	if( (prevNodeType == 'SOURCE') && (nodeType != 'SOURCE'))
	{
		UIH_HandleSourceChange(gPreviousTreeNode, 0); 
	}
	switch(nodeType)
	{
	case 'SCENE':
		UIH_ShowSceneInterface(); 
		break; 
	case 'LAYER':
		UIH_ShowLayerInterface(); 
		break;
	case 'HTMLOBJECT':
		UIH_ShowHTMLObjectInterface();
		break; 
	case 'PAGE':
		if(gbPageLoaded ==  true)
		{
			UIH_ShowPageInfo(gCurrentPageID); 		
		}				
		break;
	case 'WORKSPACE':		
		break;
	case 'PROJECT':		
		break;	
	case "SOURCE":
		if(prevNodeType == 'SOURCE')
			UIH_HandleSourceChange(gCurrentTreeNode, gPreviousTreeNode);
		else
			UIH_HandleSourceChange(gCurrentTreeNode, gCurrentTreeNode); 
		break; 
	default:
		break; 	
	}
	
	 
	
	UIH_updateToolbarState(gCurrentTreeInfoType, nodeType);
}
/* 
 * The function naming convention is On_ItemID_Handler()
 * this way it will be easier to track which handler corresponds to 
 * which UI item
 */
function UIH_menu_new()
{
	//get the Project title
	var nodeType = 0; 
	if(gCurrentTreeNode)
		nodeType = gCurrentTreeNode.getAttribute('type');
	
		
	if( (nodeType == 'WORKSPACE') || (nodeType == 0) )
	{
		var JQSel = "#" + "projectNameIP";
	    $(JQSel).val("");
		WAL_showModalWindow(gProjNameDlgID,"UIH_projNameOK", "" );		
		
	}
	else if ( (nodeType == 'PROJECT') && (gCurrentTreeInfoType == 'PROJECT') )
	{		
		var JQSel = "#" + "pageNameIP";
	    $(JQSel).val("");
		WAL_showModalWindow(gPageNameDlgID,"UIH_pageNameOK", "" );	
	}
	UIH_setTopItemSelInTree();	
}

function UIH_new_Project(name)
{
	BlockUIinAjax(true);
	var respstring = DH_getNewProject(name); 
	UIH_updateTreeWidget(respstring);
	UIH_setTopItemSelInTree();
	
	BlockUIinAjax(false);
}

function UIH_new_Page(name)
{
	BlockUIinAjax(true);
	var respstring = DH_getnewPage(name); 
	if(!respstring)
	{
		Debug_Message("Error: getting the Project Data"); 
	}
	UIH_updateTreeWidget(respstring);
	UIH_setTopItemSelInTree();	
	BlockUIinAjax(false);
}

function UIH_updateTreeWidget(string)
{
	var newresptr = "<div id='node_container' style='overflow:auto; width:inherit; height:inherit; border:none; font-style:italic'>"+string+"</div>";
	WAL_updateTree(gTreeWidgetID,  'auto', 'auto', newresptr, "UIH_TreeItemClick", true, "UIH_TreeHandlerDragStart", "UIH_TreeHandlerDragEnd");
	//WAL_updateDragDropTree(gTreeWidgetID,  'auto', 'auto', newresptr, "UIH_TreeItemClick", "","");
	UIH_InsertImagesInTreeWidget(); 
	
	//var treeNode = document.getElementById(gTreeWidgetID); 
   // treeNode.style.backgroundColor = 'pink'; 
	var JQSel;	
	JQSel = "#"+gTreeNodeID; 
	//$(JQSel).css('background-image', ' -moz-linear-gradient(top, #fcd95f, #fef2cb)');
	$(JQSel).css('background-image', 'linear-gradient(0deg, #fcd95f , #fef2cb )');
	//$(JQSel).css('font-size','small'); 
	
	JQSel = "#"+gTreeNodeID + " .jqx-widget-content"; 
     $(JQSel).css('background-color', 'transparent');	
     gPreviousTreeInfoType = gCurrentTreeInfoType; 
     
     //disabling the referenced layer items 
     WAL_disableTreeItemForAttributes(gTreeNodeID,  'data-origin', "reference", true);
    
     
    
     
}

function UIH_InsertImagesInTreeWidget()
{

	if(gCurrentTreeInfoType != 'PAGE')
		return ; 
	var imageNode = document.createElement('img',''); 
	imageNode.setAttribute('style', 'float: left; margin-right: 5px; width:16px; height:16px');
	var dupImgNode; 
	
	//<img style='float: left; margin-right: 5px;' src='Project.png' />
	var tgtNode; 
	var NodeList = document.getElementsByTagName('li'); 
	for(var i = 0 ; i < NodeList.length; i++)
	{
	
		tgtNode = NodeList.item(i);
		var spanNode; 
		var type = tgtNode.getAttribute('type'); 
		if(type == 'SCENE')
		{
			dupImgNode = imageNode.cloneNode(true); 
			dupImgNode.setAttribute('src', 'style/icons/Version1/scene.png');
			spanNode = tgtNode.firstElementChild; 
			var nodename = spanNode.nodeName.toUpperCase(); 
			if(nodename == 'SPAN')
			{
				tgtNode.insertBefore(dupImgNode, spanNode); 
			}
			dupImgNode = 0; 
		}
		else if(type == 'LAYER')
		{
			dupImgNode = imageNode.cloneNode(true); 
			dupImgNode.setAttribute('src', 'style/icons/Version1/layer.png');
			spanNode = tgtNode.firstElementChild; 
			var nodename = spanNode.nodeName.toUpperCase(); 
			if(nodename == 'SPAN')
			{
				tgtNode.insertBefore(dupImgNode, spanNode); 
			}
			dupImgNode = 0; 
		}
		else if(type == 'HTMLOBJECT')
		{
			dupImgNode = imageNode.cloneNode(true); 
			dupImgNode.setAttribute('src', 'style/icons/Version1/text.png');
			spanNode = tgtNode.firstElementChild; 
			var nodename = spanNode.nodeName.toUpperCase(); 
			/*if(gbPageLoaded == true)
			{
				var textstr = tgtNode.textContent; 
				var mynodelist = tgtNode.childNodes;
				var mynode = mynodelist[1];			
				var objnodeID = tgtNode.getAttribute('dataid'); 
				//var htmlNode  = document.getElementById(objnodeID); 
				//if(htmlNode)
				{
					//var textstr = htmlNode.textContent; 
					//textstr = textstr.substring(0, gTextSummaryLength); 
					if(mynode)
					{
						mynode = mynode.firstElementChild;	
						var itemstr;						
						//mynode.innerHTML = mynode.innerHTML + "(" + tgtNode.getAttribute('data-type') + "):<i><b>" + textstr + "...<b></i>";
						//now changing this to shorter summary text 
						mynode.innerHTML = ""; 
						mynode.innerHTML = spanNode.textContent ;//mynode.innerHTML + tgtNode.getAttribute('data-type') + ":(<i><b>" + textstr + "...<b></i>)";
					}	
				}		
							
			}*/
			
			//tgtNode.textContent = textstr + tgtNode.getAttribute('data-type'); 
			if(nodename == 'SPAN')
			{
				tgtNode.insertBefore(dupImgNode, spanNode); 
			}			
			dupImgNode = 0; 
		}		
	}
	
}


function UIH_ShowHTMLObject()
{
	var currnodeType = 0; 
	if(gCurrentTreeNode)
		currnodeType = gCurrentTreeNode.getAttribute('type');	
	var currNodeID = gCurrentTreeNode.getAttribute('id'); 
	
	if ( (currnodeType == 'HTMLOBJECT') || (gCurrentObjectID) )
	{
		var ObjID;
		if(!gCurrentObjectID)
			ObjID = gCurrentTreeNode.getAttribute('dataid'); 
		else
			ObjID = gCurrentObjectID; 
		var retval = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,ObjID); 
		myWindow = window.open('HTMLTextEditor.html', '_self', '');
        myWindow.resizeTo(screen.width, screen.height);
        myWindow.moveTo(50, 50);
        myWindow.focus();
	}	
}
function UIH_menu_open()
{
	var currnodeType = 0; 
	if(gCurrentTreeNode)
		currnodeType = gCurrentTreeNode.getAttribute('type');	

	var nodeID = gCurrentTreeNode.getAttribute('id'); 
	if ( (gCurrentTreeInfoType == 'WORKSPACE' ) && (currnodeType == 'PROJECT') )
	{
		UIH_ShowProjectInfo(nodeID); 
		
	}
	else if( (gCurrentTreeInfoType == 'PROJECT' ) && (currnodeType == 'PAGE') )
	{
		UIH_ShowPageInfo(nodeID);		
	}
	
	
	
}

function UIH_ShowWorkspaceInfo()
{
	var respstring = DH_getWorkspaceData();
	
	gCurrentTreeInfoType = 'WORKSPACE'; 
	UIH_updateTreeWidget(respstring);
	UIH_UpdateDataPanel(gWorkspaceMessage); 	
	
	gCurrentWKSID = UIH_setTopItemSelInTree(); 
	
	gCurrentProjectID = 0;	 
	UIH_showWKSInterface(); 
	
}

function UIH_showWKSInterface()
{
	UIH_restoreDefaultShowState();	
	var nItems = UIH_getNumberofChildren();	
	gGroupShowStateArr[1][1] = true; 
	gGroupShowStateArr[7][1] = true; 	
	UIH_updateGroupShowState(gGroupShowStateArr);
	//update the tooltip text here 
	var JQSel ;
	JQSel = "#new_icon"; 
	$(JQSel).attr('title', 'Create a New Project'); 
	
	JQSel = "#open_icon"; 
	$(JQSel).attr('title', 'Edit the Selected Project'); 
	
	JQSel = "#delete_icon"; 
	$(JQSel).attr('title', 'Remove the Selected Project and its Content from the Workspace'); 
	
	if(nItems < 2)
	{
		WAL_hideWidget('open_icon', true); 
		WAL_hideWidget('delete_icon', true); 
		WAL_hideWidget('preview_icon', true); 		
	}
	else
	{
		WAL_hideWidget('open_icon', false); 
		WAL_hideWidget('delete_icon', false); 
	}
     
}

function UIH_setTopItemSelInTree()
{	
	var JQSel = "#"+gTreeNodeID;	 
	var itemarr = $(JQSel).jqxTree('getItems');	
	var itemID = itemarr[0].id;	
	UIH_setTreeItemSelection(itemID); 
	WAL_expandTreeItem(gTreeNodeID,itemID, true); 
}


function UIH_menu_delete(){
	
	if(!gCurrentTreeNode)
		return ; 
	BlockUIinAjax(true); 
	var bTopLevelDisplay = false;
	
	var nodeID = gCurrentTreeNode.getAttribute('id'); 
	var nodeType = gCurrentTreeNode.getAttribute('type');	
	
	if(nodeType == 'PROJECT')
	{
		var respstring = DH_deleteProject(nodeID);
		gCurrentTreeNode = 0;
		if(respstring)
		{
			UIH_updateTreeWidget(respstring); 
		}
					
	}		
	else if( (nodeType == 'PAGE') && (gCurrentTreeInfoType == 'PROJECT' ) )
	{
		var respstring = DH_deletePage(nodeID);
		gCurrentTreeNode = 0;
		if(respstring)
		{
			UIH_updateTreeWidget(respstring); 
		}		
	}
	else if (nodeType == "LAYER")
	{
		var avID  =  gCurrentTreeNode.getAttribute('data-AVObjID');
		if(avID)
		{
			var currItem = WAL_getTreeItem(gTreeNodeID, gCurrentTreeNode.id); 
		    var sceneID  = currItem.parentId; 
		    DH_setTreeItemAttribute(sceneID, 'data-AVObjID', avID); 
		}
		 DH_deleteLayerNode(gCurrentTreeNode);		
		 respstr = DH_getSCXMLData(gCurrentPageID);
		 UIH_updateTreeWidget(respstr); 		
	}		       
    else if (nodeType == "SCENE")
    {
    	 DH_deleteSceneNode(gCurrentTreeNode);		 
		// var respstr = DH_getPageHTMLData(gCurrentPageID); 
		// UIH_UpdateDataPanel(respstr);		
		 
		 respstr = DH_getSCXMLData(gCurrentPageID);
		 UIH_updateTreeWidget(respstr); 
		 UIH_UpdateSlideIndexInfo(); 
		 UIH_menu_save(); 
    }
    else if(nodeType == "HTMLOBJECT")
    {
    	var currItem = WAL_getTreeItem(gTreeNodeID, gCurrentTreeNode.id); 
    	var layerID  = currItem.parentId; 
    	currItem = WAL_getTreeItem(gTreeNodeID, layerID);
    	var sceneID = currItem.parentId; 
    	var objType = gCurrentTreeNode.getAttribute('data-type'); 
    	if( (objType == 'VIDEO') ||(objType == 'AUDIO'))
		{
			DH_setTreeItemAttribute(layerID, 'data-AVObjID', ''); 
			DH_setTreeItemAttribute(sceneID, 'data-AVObjID', ''); 
		}
    	
    	DH_deleteObjectNode(gCurrentTreeNode);     	
    	//var respstr = DH_getPageHTMLData(gCurrentPageID); 
    	//UIH_UpdateDataPanel(respstr);		
    	 
		 respstr = DH_getSCXMLData(gCurrentPageID);
		 UIH_updateTreeWidget(respstr); 
    }
    else if(nodeType == "SOURCE")
    {
    	var vidNode = gCurrentTreeItemSel.parentElement;  
    	if(!vidNode)
    		return;
    	var nodeID = vidNode.getAttribute('dataid'); 
    	vidNode = document.getElementById(nodeID);    	
    	vidNode.pause(); 
    	//vidNode.setAttribute('src', ""); 
    	vidNode.removeAttribute('src'); 
    	vidNode.load(); 
    	DH_deleteObjectNode(gCurrentTreeNode);    	 
		respstr = DH_getSCXMLData(gCurrentPageID);
		UIH_updateTreeWidget(respstr); 
    }
	BlockUIinAjax(false); 
	/*if(gCurrentTreeInfoType == 'PAGE')
	{
		gbPageLoaded =  false; 
		UIH_ShowPageInfo(gCurrentPageID); 
	}
	*/	
		
	if(gCurrentTreeInfoType == 'PAGE')
	{
		setTimeout(function(){				
			UIH_UpdateSlideIndexInfo(); 
			gTreeItemExpanded =  true; 
			UIH_ToggleTreeItemExpand(); 
			//WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);		
		BlockUIinAjax(false);
		return ; 		
			}, 700); 
	}
	else
	{
		setTimeout(function(){			
			gTreeItemExpanded =  true; 
			UIH_ToggleTreeItemExpand();				
		BlockUIinAjax(false);
		return ; 		
			}, 700); 
		
	}
	
	//UIH_setTopItemSelInTree();
}


//need to be customized as per JQXWidhet theme 
function UIH_Prompt(string)
{
	alert(string); 
}


function UIH_menu_up()
{
	var currnodeType = 0; 
	if(!gCurrentTreeNode)
	{
		UIH_Prompt("Please Select an Item from the Left Tree Window");
		return; 
	}			
	currnodeType = gCurrentTreeNode.getAttribute('type');
	var nodeID = gCurrentTreeNode.getAttribute('id');
		
	if(currnodeType == 'PAGE')
	{
		
		var respstring = DH_moveUpPage(nodeID); 
		if(!respstring)
		{
			Debug_Message("Error: getting the Project Data"); 
			return; 
		}
		UIH_updateTreeWidget(respstring);
		UIH_setTreeItemSelection(nodeID); 
	}	
	else if( (currnodeType == 'SCENE') || (currnodeType == 'LAYER') )
	{
		var respstring  = DH_MoveNode(gCurrentTreeNode, 'UP'); 
		if(!respstring)
		{
			Debug_Message("Error: getting the Project Data"); 
			return ; 
		}
		UIH_updateTreeWidget(respstring);
		UIH_setTreeItemSelection(nodeID);
		
	}
}

function UIH_menu_down()
{
	var currnodeType = 0; 
	if(!gCurrentTreeNode)
	{
		UIH_Prompt("Please Select an Item from the Left Tree Window");
		return; 
	}			
	currnodeType = gCurrentTreeNode.getAttribute('type');
	var nodeID = gCurrentTreeNode.getAttribute('id');
		
	if(currnodeType == 'PAGE')
	{
		
		var respstring = DH_moveDownPage(nodeID); 
		if(!respstring)
		{
			Debug_Message("Error: getting the Project Data"); 
		}
		UIH_updateTreeWidget(respstring);
		UIH_setTreeItemSelection(nodeID); 
		
	}	
	else if( (currnodeType == 'SCENE') || (currnodeType == 'LAYER') )
	{
		var respstring  = DH_MoveNode(gCurrentTreeNode, 'DOWN'); 
		if(!respstring)
		{
			Debug_Message("Error: getting the Project Data"); 
			return ; 
		}
		UIH_updateTreeWidget(respstring);
		UIH_setTreeItemSelection(nodeID);
		
	}
}

function UIH_setTreeItemSelection(itemID)
{
	var node = document.getElementById(gTreeWidgetID); 
	node = node.firstElementChild; 
	var childnodeID = node.getAttribute('id'); 
	WAL_setTreeItemSelection(childnodeID, itemID); 	
}

function UIH_getNumberofChildren()
{
	var node = document.getElementById(gTreeWidgetID); 
	node = node.firstElementChild; 
	var treeID = node.getAttribute('id');
	var itemarr  = WAL_getTreeNodeList(treeID);
	//if(itemarr[0].type == type)
	return itemarr.length;
	//else
	//	return 0; 
}
function UIH_InitializePageData() 
{  
    gbPageLoaded =  true;    
  
    gProjectDataPath = DH_getProjectDataPath(); 
   
    gObjectEditMode = 'LAYOUT_MODE'; 
    WAL_createResizable('OBJECT_CONTAINER', 'UIH_resizeStartHandler', 'UIH_resizeStopHandler','UIH_OnObjectContainerMouseClick',true, 'UIH_resizingHandler'); 
    WAL_createDraggable('OBJECT_CONTAINER', 'UIH_dragStartHandler', 'UIH_dragStopHandler', true, 'UIH_draggingHandler');
   
    var JQSel = '.HTMLOBJECT';      
    $(JQSel).attr('ondblclick', 'UIH_HTMLObjDblClick(event)');   
    UIH_resetAutoshowParam(); 
    //WAL_SetItemInDropDownList('newobjectTypeDDL', 1); 
 
}

function UIH_InitializeObjectData(ObjectID)
{
	var divObjID = 'DIV_' + ObjectID; 	
	WAL_createResizable(divObjID, 'UIH_resizeStartHandler', 'UIH_resizeStopHandler','UIH_OnObjectContainerMouseClick',false, 'UIH_resizingHandler'); 
	WAL_createDraggable(divObjID, 'UIH_dragStartHandler', 'UIH_dragStopHandler', false);
	var JQSel = '#' + ObjectID;      
    $(JQSel).attr('ondblclick', 'UIH_HTMLObjDblClick(event)');  
}

function UIH_DeInitializeObjectData(ObjectID)
{
	var divObjID = 'DIV_' + ObjectID; 	
	WAL_destroyJQryWidget(divObjID,'draggable', false) ; 
	WAL_destroyJQryWidget(divObjID,'resizable', false) ;	
	
	var JQSel = '#' + ObjectID;      
    $(JQSel).removeAttr('ondblclick');  
}

function UIH_DeInitializePage()
{
	gbPageLoaded = false; 	
	WAL_destroyJQryWidget('OBJECT_CONTAINER','draggable', true) ; 
	WAL_destroyJQryWidget('OBJECT_CONTAINER','resizable', true) ;
	
	 var JQSel = '.HTMLOBJECT';      
	 $(JQSel).removeAttr('ondblclick'); 
}

function UIH_resizeStartHandler(origSize, currSize, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	gInitWidth = currSize.width + 'px'; 
	gInitHeight = currSize.height + 'px'; 
	
	WAL_setNumberInputValue("widthIP", currSize.width); 
	WAL_setNumberInputValue("heightIP", currSize.height); 
	//ebug_Message("List Len = " + gEditList.length + "Width = " + currSize.width + "Height="+ currSize.height);
	

}

function UIH_resizeStopHandler(origSize, currSize, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	
	UIH_UpdateContainerProperty(nodeID, true, 'width', currSize.width + 'px', gInitWidth,true);
	UIH_UpdateContainerProperty(nodeID, true, 'height', currSize.height + 'px',gInitHeight,true);	
	WAL_setNumberInputValue("widthIP", currSize.width); 
	WAL_setNumberInputValue("heightIP", currSize.height); 	
	
}

function UIH_resizingHandler(currSize, currNode)
{
	var nodeID = currNode.getAttribute('id');		
	WAL_setNumberInputValue("widthIP", currSize.width); 
	WAL_setNumberInputValue("heightIP", currSize.height); 	
}

function UIH_dragStartHandler(left, top, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	gInitLeftPos = left + 'px'  ; 	
	gInitTopPos = top + 'px'; 
	
	
	
	WAL_setNumberInputValue("lposIP", left); 
	WAL_setNumberInputValue("tposIP", top); 
	//Debug_Message("Drag start :List Len = " + gEditList.length + "LEft = " + left + "Top="+ top); 
}

function UIH_dragStopHandler(left, top, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	var curLeft, curTop; 
	curLeft = left + "px"; 
	curTop = top + "px"; 
	if(nodeID == 'ALL_DATA_CONTAINER')
	{
		UIH_UpdateContainerProperty(nodeID, true, 'position', 'relative', "",  true);
	}
	UIH_UpdateContainerProperty(nodeID, true, 'left', curLeft, gInitLeftPos,  true);
	UIH_UpdateContainerProperty(nodeID, true, 'top', curTop,   gInitTopPos,  true);	
	WAL_setNumberInputValue("lposIP", left); 
	WAL_setNumberInputValue("tposIP", top); 
	 
}

function UIH_draggingHandler(left, top, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	var curLeft, curTop;	
	WAL_setNumberInputValue("lposIP", left); 
	WAL_setNumberInputValue("tposIP", top); 
}

function UIH_ShowPageInfo(PageID) {
	   
	if(gbPageLoaded == true)
	{
		//optimization 
		 $("div.OBJECT_CONTAINER").show();	 
		 return; 
	}
	var respstring; 
	gCurrentPageID = PageID;   	    

	
	
    
    gCurrentTreeInfoType = 'PAGE'; 
    //UIH_updateTreeWidget(respstring);   
    //now get the HTML Page    
    respstring = DH_getPageHTMLData(PageID);   
    UIH_UpdateDataPanel(respstring);   
    UIH_InitializePageData(); 
    
    respstring = DH_getPageData(PageID); 
    if(!respstring)
    {
    	Debug_Message("Error getting Page Data"); 
    	BlockUIinAjax(false);
    	return; 
    }   
    UIH_updateTreeWidget(respstring);    
    UIH_showPageInterface(); 
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  
}

function UIH_showPageInterface()
{
	UIH_restoreDefaultShowState();	
	//var nItems = UIH_getNumberofChildren();
	var nItems = UIH_GetNumberofSlides(gCurrentPageID); 
	gTotalNumSlides = nItems; 
	
	gGroupShowStateArr[0][1] = true; 
	gGroupShowStateArr[2][1] = true; 
	if(nItems < 1)
	{
		gGroupShowStateArr[3][1]=false; 
		gGroupShowStateArr[4][1]=false; 
		gGroupShowStateArr[5][1]=false; 
		gGroupShowStateArr[6][1]=false; 
		gGroupShowStateArr[7][1]=true; 
		
		WAL_hideWidget('layer_icon', true);
	}
	else
	{
		gGroupShowStateArr[3][1]=true; 
		gGroupShowStateArr[4][1]=true; 
		gGroupShowStateArr[5][1]=true; 
		gGroupShowStateArr[6][1]=true; 
		gGroupShowStateArr[7][1]=true; 
		
		WAL_hideWidget('layer_icon', false);
		UIH_showLayoutInterface(); 
	}
	UIH_updateGroupShowState(gGroupShowStateArr);
}
function UIH_ShowProjectInfo(ProjectID)
{
	var respstring = DH_getProjectData(ProjectID); 
	if(!respstring)
	{
		Debug_Message("Error: getting the Project Data"); 
	}
	gCurrentTreeInfoType = 'PROJECT'; 
	UIH_updateTreeWidget(respstring);
	UIH_UpdateDataPanel(gProjectInfoMessage); 
	
	gCurrentProjectID = ProjectID; 	
	UIH_setTreeItemSelection(ProjectID);
	
	UIH_showProjectInterface(); 
	
	
}

function UIH_showProjectInterface()
{
	UIH_restoreDefaultShowState();	
	var nItems = UIH_getNumberofChildren();	
	gGroupShowStateArr[0][1] = true; 
	gGroupShowStateArr[1][1] = true; 
	gGroupShowStateArr[7][1] = true; 	
	UIH_updateGroupShowState(gGroupShowStateArr);
	var JQSel ;
	JQSel = "#new_icon"; 
	$(JQSel).attr('title', 'Create a New Page'); 
	
	JQSel = "#open_icon"; 
	$(JQSel).attr('title', 'Edit the Selected Page'); 
	
	JQSel = "#delete_icon"; 
	$(JQSel).attr('title', 'Remove the Selected Page from the Project'); 
	
	if(nItems < 2)
	{
		WAL_hideWidget('open_icon', true); 
		WAL_hideWidget('delete_icon', true); 
		WAL_hideWidget('preview_icon', true); 		
	}
	else
	{
		WAL_hideWidget('open_icon', false); 
		WAL_hideWidget('delete_icon', false); 
		WAL_hideWidget('preview_icon', false); 	
	}
     
}

function UIH_UpdateDataPanel(string)
{
	var dataNode = document.getElementById("objectdata_panel"); 
	dataNode.innerHTML = string; 
	
	//Debug_Message("Updating Data Panel"); 
	//$("#objectdata_panel").append(string); 
}

function UIH_menu_back()
{
	//get the current info type being shown on the tree based on which take the decision 
	
	if(gCurrentTreeInfoType == 'PROJECT')
	{
		BlockUIinAjax(true); 
		UIH_ShowWorkspaceInfo();
		BlockUIinAjax(false); 
	}
	else if(gCurrentTreeInfoType == 'PAGE')
	{
		//{ALWAYS ASK NO MATTER WHAT 
			gBackMenu =  true; 
			WAL_showModalWindow(gSaveDlgID,"UIH_menu_save", "UIH_SaveCancel" );
		
	}	
}

function UIH_SaveCancel()
{
	if(gCurrentTreeInfoType == 'PAGE')
	{
		if(gBackMenu == true)
	    {
	    	UIH_DeInitializePage(); 
	    	if(gCurrentProjectID)
	    		  UIH_ShowProjectInfo(gCurrentProjectID); 
	    	gBackMenu = false; 
	    }
	}
	
}

function UIH_AddObject(newNodeType) {

	var currentSelNode = WAL_getTreeItemSelection(gTreeNodeID, false); 	
	
    if (!currentSelNode)
        return;
    var currNodeID = currentSelNode.getAttribute("dataid");    
    var currNodeType = currentSelNode.getAttribute("data-type");
    currNodeType = currNodeType.toUpperCase();
    newNodeType = newNodeType.toUpperCase();
    var NodeTitle = "";
    var dataType = ""; 
    var nItems = 0;
   //IF THE NODE TYPE TO BE ADDED IS A NEW ONE THEN DO FOLLOWING
    var NewObjID = "";

        switch (newNodeType) {
            case "SCENE":
                if (currNodeType != "PAGE") {
                    Debug_Message("Item cannot be added");
                    return;
                }
                dataType = "SCENE"; 
                NodeTitle = "SLIDE"; 
                break;
            case "LAYER":
                if (currNodeType != "SCENE") {
                    Debug_Message("Item cannot be added");
                    return;
                }
                dataType = "LAYER"; 
                NodeTitle = "Object Group"
                break;
            case "HTMLOBJECT":
                if (currNodeType != "LAYER") {
                    Debug_Message("Item cannot be added");
                    return;
                }
                dataType = "HTMLOBJECT"; 
                newNodeType = "HTMLOBJECT";                   
                break;
                
            case 'BASELAYER':
            	dataType = 'LAYER';                 	 
            	break;      
            	
            case "PARAGRAPH":
            case "HEADING1":
            case "HEADING2":
            case "HEADING3":
            case "SLIDE TITLE":            
            case "FOOTER":
            case "IMAGE":
            case "VIDEO":
            case "AUDIO": 
                if (currNodeType != "LAYER") {
                    Debug_Message("Item cannot be added");
                    return;
                }
                //_RM henceforth all HTML elements are referred as HTML Objects and specifics are referred by dataType
                NodeTitle = newNodeType; 
                dataType = newNodeType; 
                newNodeType = "HTMLOBJECT";               
                break;
            case "SOURCE":
            	if ( (currNodeType != "VIDEO")&& (currNodeType != "AUDIO")) {
                    Debug_Message("Item cannot be added");
                    return;
                }
            	var childlist = currentSelNode.childNodes;            	
            	dataType = "SOURCE"; 
            	newNodeType = "SOURCE"; 
            	break; 
            case "SLIDE NUMBER":
                if (currNodeType != "LAYER") {
                    Debug_Message("Item cannot be added");
                    return;
                }
                //_RM henceforth all HTML elements are referred as HTML Objects and specifics are referred by dataType
                numslides = UIH_GetNumberofSlides(gCurrentPageID); 
                NodeTitle = numslides; //since the slide would have been already added by now 
                dataType = newNodeType; 
                newNodeType = "HTMLOBJECT";
               
                break;
           
            case "NEXT SLIDE BUTTON":
            case "PREVIOUS SLIDE BUTTON":
            case "NEXT PAGE BUTTON":
            case "PREVIOUS PAGE BUTTON":
            	 /*if (currNodeType != "LAYER") {
                     Debug_Message("Item cannot be added");
                     return;
                 }*/
            	
                 //_RM henceforth all HTML elements are referred as HTML Objects and specifics are referred by dataType 
                 dataType = newNodeType; 
                 NodeTitle = "Button:" + newNodeType; 
                 newNodeType = "HTMLOBJECT";  
                 currNodeID = "BASELAYER";
                 UIH_setTreeItemSelection(currNodeID);
            	break;     
            
            default: //for any other case simply return 
            	Debug_Message(dataType + " : Not Supported !"); 
                return; 
                break;
        }              
        var DataObjID;
        if(newNodeType != "BASELAYER")
        {        	
        	 DataObjID = DH_GetUniqueID(newNodeType);  
        }   
        else if(newNodeType == 'BASELAYER')
        {         	
        	DataObjID = "BASELAYER"; 
        }
        
        if(dataType == "NEXT SLIDE BUTTON")
        {
        	DataObjID = "NEXTSLIDEBTN";
        } 
        else if(dataType == "PREVIOUS SLIDE BUTTON")
        {
        	DataObjID = "PREVSLIDEBTN";
        }
        else if(dataType == "NEXT PAGE BUTTON")
        {
        	DataObjID = "NEXTPAGEBTN";
        }
        else if(dataType == "PREVIOUS PAGE BUTTON")
        {
        	DataObjID = "PREVPAGEBTN";
        }
        
       //rm check if any of these already exists
        var node = document.getElementById(DataObjID); 
        if(node)
        {
        	Debug_Message(dataType +": Button Already Exists");
        	return ;
        }
        	
        	            
        
        /*    ObjParam = "OBJECTTYPE=" + TypeValue + "&OBJECTID=" + ObjID forms basic query param. any 
        *  request should have this as basic param. in addition to these one can have additional parameters
        *  as per required.  preferred mode is to send params as upper case 
        Send only ObjectID, the Treemenu ID => TM_XXXX and DIV container ID => DIV_XXXX will be generated at server end
        always send data object id even for parent ID 
        */
        if(newNodeType == 'LAYER')
        {
        	NodeTitle += "(" + DataObjID+ ")"; 
        }
        if(newNodeType == "BASELAYER")
        {
        	NodeTitle = "Shared Object Group";
        	newNodeType = "LAYER" ; 
        }
        if(newNodeType == "SOURCE")
        	NodeTitle = "Source:(" + DataObjID + ")"; 
        
        
        var respstrArr = DH_AddNewObject(newNodeType, DataObjID, currNodeID, NodeTitle, dataType); 
       //var ObjParam = "OBJECTTYPE=" + newNodeType + "&OBJECTID=" + DataObjID + "&REFID=" + currNodeID + "&TITLE=" + 
        //NodeTitle + "&DATATYPE=" + dataType;
        if(newNodeType == "SOURCE")
        {
        	var vidNode = document.getElementById(currNodeID); 
        	var srcNode = document.createElement("source", '');
        	if(!srcNode)
        		return ;
        	srcNode.setAttribute('id', DataObjID);
        	vidNode.appendChild(srcNode);         	
        }
        
        if(!respstrArr)
        {
        	Debug_Message("Object could not be Added"); 
        	return ; 
        }
        	       // UpdateObjectsWithHandler();      
    //  respstr = DH_getSCXMLData(gCurrentPageID); 
    //  UIH_updateTreeWidget(respstr);
       var parentID; 
       
       var nodeType = currNodeType; 
       
       var bExpand = false ;// false; just trying out if new slide works  
      if(dataType != 'SCENE')
    	  bExpand =  true;        
      WAL_AddTreeItem(gTreeWidgetID, respstrArr[0], currentSelNode, gTreeIcons[dataType], bExpand);  
        
        if(newNodeType == 'HTMLOBJECT')        
        	currNodeID = 'TM_'+DataObjID; 
        else
        	currNodeID = "TM_"+DataObjID; 
        
        UIH_setTreeItemSelection(currNodeID); 
        if( (newNodeType == 'HTMLOBJECT') && (respstrArr.length > 1) )
        {      
        	var dataNode = document.getElementById("DIV_DATA_CONTAINER");        	
        	dataNode.innerHTML += respstrArr[1];        	
        }
        
}


function UIH_GetUniqueTitle(inObjectType, ObjectID) {
    var bUnique = false;
    var title = "";
    var nItems = 1; //$("[type = ObjectType]").size() + 1;           
   // var elemArr = WAL_getTreeNodeList(gTreeNodeID); 
    var ObjectType = inObjectType; 
    if(ObjectType == 'SCENE')
    {
    	ObjectType = 'Slide'; 
    }    	
    else if(ObjectType == 'LAYER')
    {
    	ObjectType = 'Layer'; 
    }    
    else if(ObjectType == 'HTMLOBJECT')
    {
    	ObjectType= 'Object'; 
    	//return title;
    }	
    
    var dataTypeLen = inObjectType.length; 
    var NumericID = ObjectID.substring(dataTypeLen, ObjectID.length);
    
    title = ObjectType + "(ID=" + NumericID + ")";
    return title; 
   /* 
    var i = 0; 
    for (i = 0; i < elemArr.length; i++) {
        var str = elemArr[i].getAttribute('name');
        if (str == title) {
            nItems++;
            title = ObjectType + "-" + nItems;
            i = 0; 
        }
    }
    
   return title;
   */
    
}


function UIH_ShowSceneInterface() {

	var currItem  = WAL_getTreeItemSelection(gTreeNodeID, true); 
	gCurrentTreeNode = currItem.element; 
    var ID = gCurrentTreeNode.getAttribute("id");  
    var Value=0; 
    var slideID = gCurrentTreeNode.getAttribute('dataid'); 
    //hide all
    if(currItem.subtreeElement)
    	childList = currItem.subtreeElement.childNodes;
    else
    	 return ;     	
    
    $("div.OBJECT_CONTAINER").hide();  
    $("#ALL_DATA_CONTAINER").show();     
    UIH_showLayerList(childList); 
    
    
    if(gObjectEditMode == 'AUTOSHOW_MODE')
	{
    	var InfoNode = document.getElementById('nonavinfocontainer'); 
		InfoNode.style.display = 'none'; 
		
		InfoNode = document.getElementById('avinfocontainer'); 
		InfoNode.style.display = 'inline-block';
		
    	gCurrentSlideIndex = UIH_getSlideIndex(slideID); 
    	if(gCurrentSlideIndex < -1)
    		return ; 
		WAL_setNumberInputValue('startASSIndex', gCurrentSlideIndex+1); 
		WAL_setNumberInputValue('endASSIndex', gCurrentSlideIndex+1);  
		
		if(gSlideInfoList[gCurrentSlideIndex].AVObjectID)
		{
			if(gAVPlayerObject.id != gSlideInfoList[gCurrentSlideIndex].AVObjectID)
				gAVPlayerObject = 0; 
			if (!gAVPlayerObject)
				gAVPlayerObject = document.getElementById(gSlideInfoList[gCurrentSlideIndex].AVObjectID);	
			if( (gAVPlayerObject.paused == true) && (gSlideInfoList[gCurrentSlideIndex].startTime >= 0 ) )
			{
				gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime; 
				UIH_updateMediaCurrentTime(); 				
			}
			//set the min max range here 
			Value = gAVPlayerObject.duration.toFixed(0); 
			WAL_setSliderMaxMinValues('AVRangeSlider', 0, Value); 	
			var node = document.getElementById('minValue'); 
			node.innerHTML = 0 + '(s)';			
			node = document.getElementById('maxValue'); 
			node.innerHTML = Value + '(s)';
			
				
			if( (gCurrentSlideIndex > 0 ) && (gSlideInfoList[gCurrentSlideIndex].endTime == -1) )
			{
				if(gCurrSlideEndTime > 0 )
				{	
					gCurrSlideStartTime = 0; 
					gCurrSlideStartTime =  new Number(gCurrSlideEndTime);					
					gCurrSlideEndTime = 0;		
					gCurrSlideEndTime = new Number(gAVPlayerObject.duration);
				}
				else
				{
					gCurrSlideStartTime =  new Number(0); 
					gCurrSlideEndTime = new Number(gAVPlayerObject.duration);
				}					
			}
			else
			{
				gCurrSlideStartTime = new Number(gSlideInfoList[gCurrentSlideIndex].startTime);				
				gCurrSlideEndTime = new Number(gSlideInfoList[gCurrentSlideIndex].endTime);
			}
			
			var value = gCurrSlideStartTime.toFixed(0);
			WAL_setNumberInputValue('startTime', value);		
			value = gCurrSlideEndTime.toFixed(0); 
			WAL_setNumberInputValue('endTime', value);	
			WAL_setSliderRangeValues('AVRangeSlider', gCurrSlideStartTime, gCurrSlideEndTime);
		}
		else
		{
			gAVPlayerObject = 0;
			gCurrSlideStartTime = 0; 
			gCurrSlideEndTime = 0; 
			gCurrSlideStartTime = new Number(0); 
			gCurrSlideEndTime =  new Number(gSlideInfoList[gCurrentSlideIndex].duration);		
			var maxValue =  30; 
			WAL_setSliderMaxMinValues('AVRangeSlider', 0, maxValue); 
			node = document.getElementById('minValue'); 
			node.innerHTML = 0 + '(s)';			
			node = document.getElementById('maxValue'); 
			node.innerHTML = maxValue + '(s)';
			
			var value = gCurrSlideStartTime.toFixed(0);
			WAL_setNumberInputValue('startTime', value);		
			value = gCurrSlideEndTime.toFixed(0); 
			WAL_setNumberInputValue('endTime', value);	
			
			WAL_setSliderRangeValues('AVRangeSlider', gCurrSlideStartTime, gCurrSlideEndTime);
			var InfoNode = document.getElementById('avinfocontainer'); 
			InfoNode.style.display = 'none'; 
			
			InfoNode = document.getElementById('nonavinfocontainer'); 
			InfoNode.style.display = 'inline-block';				
			UIH_updateSlideDuration(gSlideInfoList[gCurrentSlideIndex].duration);			
		}		
	}
    else if(gObjectEditMode == 'EFFECTS_MODE')
    {
    	UIH_getElementDispOrderList(); 
    }
}
function UIH_showLayerList(layerList)
{
	var node;
	var childList ; 
	 for (var i = 0; i < layerList.length; i++) {
	        node = layerList.item(i); 
	        //get the nodename if it is ul then 
	        var mynodename = node.nodeName.toUpperCase(); 
	        if(mynodename == 'LI')
	        {
	        	var type = node.getAttribute("type");
	            if (type == "LAYER") {
	                var ID = node.getAttribute("dataid");
	                var JQSel = "[data-layerid=" + ID + "]";
	                $(JQSel).show();           
	            }
	        }
	        else if(mynodename == 'DIV')
	        {
	        	childList = node.childNodes; 
	        	UIH_showLayerList(childList); 
	        }
	        
	    }   
	
}

function UIH_ShowLayerInterface() {

	var ID = gCurrentTreeNode.getAttribute("dataid"); //.substring(3);
    var type = gCurrentTreeNode.getAttribute("type");
    if (type != "LAYER")
    return;

    //HIDE ALL THE LAYERS FIRST 
    $("div.OBJECT_CONTAINER").hide(); 
    $("#ALL_DATA_CONTAINER").show(); 
    
    var JQSel = "[data-layerID="+ID+"]"; 
    $(JQSel).show();
   
   // InitializeParaObjects(); 
}
function UIH_ShowHTMLObjectInterface() {

	var ID = gCurrentTreeNode.getAttribute("dataid"); //.substring(3);
    var type = gCurrentTreeNode.getAttribute("type");
    if (type != "HTMLOBJECT")
    return;

    //HIDE ALL THE LAYERS FIRST 
    $("div.OBJECT_CONTAINER").hide(); 
    $("#ALL_DATA_CONTAINER").show(); 
    
    var JQSel = "#DIV_"+ ID; 
    $(JQSel).show();
    gCurrentObjectID = ID; 
    
   
   
   // InitializeParaObjects(); 
}
/*
function UIH_UpdateContainerProperty(Node, attrName, bEventEnd) {

    var divNode = Node;
    if (bEventEnd == true) {
        gCurrentObjAttrList = DH_getObjectContainerAttributes(divNode, attrName);
        var retval = DH_AddToEditList(gEditList, gCurrentObjAttrList, gPreviousObjAttrList);
        if(retval)
        	gEditList = retval;
        WAL_DisableItemInButtonGroup('editgroup', 'undo_icon', false);
       // WAL_DisableMenuItem('mainMenu', 'menu_undo', false);
       
        //_rm to be added later to show the values getting upated while user modifying it 
      //  UpdateObjectInfo(divNode);  
    }
    else {
        gPreviousObjAttrList = DH_getObjectContainerAttributes(divNode, attrName);
    }
  //  event.stopPropagation(); 
}
*/

function UIH_UpdateContainerProperty(ElementId, bsubAttribute, AttrName, AttrVal, inPrevValue, bStoreInEditList) {

    var prevValue = inPrevValue; 
    var elemNode = document.getElementById(ElementId);
    var EditPropertyflag; 
    if(bsubAttribute == true)
	{
    	var expr = "elemNode.style." + AttrName;
    	if(!prevValue)
    		  prevValue = eval(expr);
    	if(AttrName != 'backgroundImage')
    		expr = "elemNode.style." + AttrName + "='" + AttrVal + "'";
    	else 
    		expr = "elemNode.style." + AttrName + "=" + '"' + AttrVal + '"';
    		//expr = "elemNode.style." + AttrName + "=" +'"' + "url('layout.png')" + '"' ;
    		//expr = "elemNode.style." + AttrName + "=" + AttrVal + "";
    		//expr = "elemNode.style." + AttrName + "=url(" + "'" + "layout.png" + "'" + ")";
    	//elemNode.style.backgroundImage = "url('layout.png')";
	    eval(expr);
	     
	    EditPropertyflag = "STYLE_SUB_ATTRIBUTE";
	}
    else
	{
    	if(!prevValue)
    		prevValue = elemNode.getAttribute(AttrName);
    	
    	elemNode.setAttribute(AttrName,AttrVal ); 
    	EditPropertyflag = "ATTRIBUTE";
	}   
    if(bStoreInEditList ==  true)
    	DH_AddObjectPropertyToEditList(gEditList, ElementId, EditPropertyflag, AttrName, AttrVal, prevValue); 
}



function UIH_UpdateObjectContainerOnGUI(Node)
{
	//updating the object type 
	var index=0;
	var itemValue; 
	var objType = Node.getAttribute('data-type');
	if(objType)
	{
		for(var i = 0; gObjectTypeValues.length; i++)
		{
			itemValue = gObjectTypeValues[i].toUpperCase(); 
			if(objType == itemValue) 
			{
					index = i; 
					break; 
			}	
		}		
	}	
	WAL_SetItemInDropDownList('newobjectTypeDDL', index); 	
	
	if(gObjectEditMode == 'LAYOUT_MODE')	
	{
		UIH_updateLayoutValueonGUI(Node); 
		return ; 
	}
	
	else if(gObjectEditMode == 'BORDER_MODE')	
	{
		//update the border property
		
		UIH_updateBorderValueonGUI(); 
		return ;
	}
	else if(gObjectEditMode == 'BACKGROUND_MODE')
	{
		//update the border property
		
		UIH_updateBackgroundValueonGUI(); 
		return ; 
	}
	else if(gObjectEditMode == 'IMAGE_MODE')
	{
		UIH_updateImageProperties(); 
	}
	else if(gObjectEditMode == 'AV_MODE')
	{
		UIH_updateVideoProperties(); 
	}
	else if(gObjectEditMode == 'EFFECTS_MODE')
	{
		UIH_UpdateEffectParamsOnUI()
	}
	
}

function UIH_updateLayoutValueonGUI(Node)
{
	var val = Node.style.left; 
	val = val.substring(0, val.length-2); 
	WAL_setNumberInputValue("lposIP", val);
	
	val = Node.style.top; 
	val = val.substring(0, val.length-2); 
	WAL_setNumberInputValue("tposIP", val);
	
	val = Node.style.width; 
	val = val.substring(0, val.length-2); 
	WAL_setNumberInputValue("widthIP", val);
	
	val = Node.style.height; 
	val = val.substring(0, val.length-2); 
	WAL_setNumberInputValue("heightIP", val);
	return ; 
}

function UIH_UpdateObjectInfo(ObjectNode) {
	//left x-pos 
	    var value = ObjectNode.style.left;
	    var strlen = value.length;
	    $("#od_xpos").val(value.substring(0, strlen - 2));


	    value = ObjectNode.style.top;
	    strlen = value.length;
	    $("#od_ypos").val(value.substring(0, strlen - 2));


	    value = ObjectNode.style.width;
	    strlen = value.length;
	    $("#od_width").val(value.substring(0, strlen - 2));


	    value = ObjectNode.style.height;
	    strlen = value.length;
	    $("#od_height").val(value.substring(0, strlen - 2));
}


function UIH_menu_save()
{	
	//assuming gEditList has been prepared before calling this funciton
	//WAL_showWaitPromptWindow('waitwindow', true); 
	//BlockUIinAjax(true);
	try{		
			gEditList = UIH_getFinalEditList(gEditList, 0); 
			UIH_menu_clear(); 
			
		    DH_SaveEditList(gEditList); 
		    UIH_SaveObjectData(true); 
		    DH_updateSlideShowInfo(gCurrentPageID); 
		   // AJX_AsyncSendReqPoolData(); 
		      //  DH_updateSlideShowInfo(gCurrentPageID); 
		    if(gBackMenu == true)
		    {
		    	UIH_DeInitializePage(); 
		    	if(gCurrentProjectID)
		    		  UIH_ShowProjectInfo(gCurrentProjectID); 
		    	gBackMenu = false; 
		    }
		    if(gObjectEditMode == 'AUTOSHOW_MODE')
		    	 DH_UpdateAutoSlideShowInfo(gCurrentPageID); 
		
	}
	catch(err)
	{
		 Debug_Message("UIH_menu_save: Error encountered"); 
		// BlockUIinAjax(false);
		 return ; 
	}
	
    BlockUIinAjax(false);
}


function UIH_menu_preview()
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

function UIH_menu_undo() {

	if(gObjectEditMode == 'TEXT_EDIT_MODE')
	{
		TE_menu_undo(); 
		return ; 
	}
    var type = gCurrentTreeNode.getAttribute("type");
    var currObjID = 0;
    if ((type == "PROJECT") || (type == "PAGE") || (type == "SCENE") || (type == "LAYER"))
        currObjID = 0;
    else {
        currObjID = gCurrentTreeNode.getAttribute("dataid");
        //currObjID = currObjID.substring(3);
        currObjID = "DIV_" + currObjID; 
    }
    //Undo(currObjID);    
    
  
    var retval = DH_Undo(gEditList, 0);
    if(retval)
    	gEditList = retval; 
    
    if (retval == null) {        	
    	WAL_DisableItemInButtonGroup('editgroup', 'undo_icon', true);
    	//WAL_DisableMenuItem('mainMenu', 'menu_undo', true);    	 
    }
    else { 
    	WAL_DisableItemInButtonGroup('editgroup', 'redo_icon', false);
    	//WAL_DisableMenuItem('mainMenu', 'menu_redo', false);
    }

}
function UIH_menu_redo() {

	if(gObjectEditMode == 'TEXT_EDIT_MODE')
	{
		TE_menu_redo(); 
		return ; 
	}
	
    var type = gCurrentTreeNode.getAttribute("type");
    var currObjID = 0;
    if ((type == "PROJECT") || (type == "PAGE") || (type == "SCENE") || (type == "LAYER"))
        currObjID = 0;
    else {
        currObjID = gCurrentTreeNode.getAttribute("dataid");
        //currObjID = currObjID.substring(3);
        currObjID = "DIV_" + currObjID; 
    }
    //Undo(currObjID);
    var retval = DH_Redo(gEditList, 0);   
    if(retval)
    	gEditList = retval; 
    if (retval == false) {   
    	WAL_DisableItemInButtonGroup('editgroup', 'redo_icon', true);
    	//WAL_DisableMenuItem('mainMenu', 'menu_redo', true);
    	
    }
    else {    	 
    	WAL_DisableItemInButtonGroup('editgroup', 'undo_icon', false);
    	//WAL_DisableMenuItem('mainMenu', 'menu_undo', false);
    }

}

function UIH_ValueChange(value, node){
	//get the currentObjNode	
		
	
	var type = node.getAttribute('type');
	var nodeID =  node.getAttribute('id');
	var JQSel = "#" + nodeID; 
	var bFlag = $(JQSel).hasClass('BORDER_PROPERTY');
	if(gDropDownListEventInternal == true )
		return ; 	
	if(nodeID == 'startTime')
	{
		//update the gSlide Start time 
		gCurrSlideStartTime = new Number(value); 
		WAL_setSliderRangeValues('AVRangeSlider', gCurrSlideStartTime, gCurrSlideEndTime);
		return ; 
		
	}
	else if(nodeID == 'endTime')
	{
		//update the gSlide Start time 
		gCurrSlideEndTime = new Number(value); 
		WAL_setSliderRangeValues('AVRangeSlider', gCurrSlideStartTime, gCurrSlideEndTime); 
		return; 
	}
	if(!gCurrentObjContainerNode)
		return ; 
	
	if(nodeID == 'imageOpacity')
	{
		if(!gCurrentEditableObjectID)
		{
			return ; 
		}			
	}	
	if(true == $(JQSel).hasClass('BORDER_PROPERTY'))
	{		
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, type, value, true); 
	}
	else if(true == $(JQSel).hasClass('BKGRND_PROPERTY'))
	{		
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, type, value, true); 
	}
	
	else
	{
		UIH_ApplySpatialValues(gCurrentObjContainerNode, value, type); 
	}
	
}

function UIH_OnObjectContainerMouseClick(event)
{
	var node = event.target;
	var objid = node.getAttribute('id'); 
	if(!node)
		return;	
	var JQSelector = "#" + objid; 
	var bObjClass = $(JQSelector).hasClass("OBJECT_CONTAINER");
	var bFound = false; 
	var mynodename; 
	
	//how about returning from here  to ensure that the container object is selected  
	var rootNode = document.getElementById('ALL_DATA_CONTAINER'); 
	rootNode.style.border = "";
	
	//no object click if ggrad window is being shown 
	if( gbShowGradWindow == true)
		return ; 
		
	if((!gCurrentObjContainerNode) || (gCurrentObjContainerNode.id == 'ALL_DATA_CONTAINER') )
	{
		arr = ['delete_editor_icon', 'customButton', true, "wksgroup"];	
		gIconDisableStateArr.push(arr);			
		arr = ['border_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);			
		arr = ['layout_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);			
		arr = ['bkgrnd_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);			
		arr = ['text_edit_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);			
		arr = ['undo_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);				
		arr = ['redo_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);				
		arr = ['styleapply_icon', 'customButton', false, "wksgroup"];	
		gIconDisableStateArr.push(arr);	
		UIH_updateIconDisableState(gIconDisableStateArr);		
	}
	
	
	
	if(bObjClass  != true)
	{
		do{
			 //get the parent node 
			node = node.parentNode; 
			//check if parent nodeName is div if yes then check if it has class object_container
			mynodename = node.nodeName.toUpperCase(); 
			if(mynodename == 'DIV')
			{
				objid = node.getAttribute('id'); 
			    JQSelector = "#" + objid; 
				bObjClass = $(JQSelector).hasClass("OBJECT_CONTAINER");
				if(bObjClass ==  true)
					bFound = true; 
			}
			if(mynodename == 'BODY')
			{
				//Debug_Message("Error in getting the parent Node");
				return ;
			}
			
			//else keep getting parent till node name is a body in which case just return 
		}while(bFound ==  false)
	}
	
	if ( (gCurrentObjContainerNode) && (gCurrentObjContainerNode != node ) )
	{
		//also save the previous object node property on server 
		var objlistarr = []; 
		var divobjproplist = UIH_getFinalEditList(gEditList, gCurrentObjContainerNode.id); 
		var objproplist = UIH_getFinalEditList(gEditList, gCurrentObjectNode.id); 
		
		if(divobjproplist.length > 0)
			DH_SaveEditList(divobjproplist);
		if(objproplist.length > 0)
			DH_SaveEditList(objproplist);	
		
		var nodeID = gCurrentObjContainerNode.getAttribute('id');
		if ( (gObjectEditMode == 'TEXT_EDIT_MODE') || (gObjectEditMode == 'IMAGE_MODE')||(gObjectEditMode == 'AV_MODE'))
		{
			//UIH_showTextEditInterface(false); 
			UIH_showHTMLEditInterface(false); 
		}	
		
		
		
		//gApplySelectProperty = false;
		//Debug_Message("Exiting Style Application"); 
	}
	else if(gCurrentObjContainerNode == node)
	{
		if(gObjectEditMode == 'TEXT_EDIT_MODE')
			return; 
	}
	
	var ObjectParam = []; 
	//setting the border var bObjClass = $(JqSelector).hasClass("OBJECT_CONTAINER");	
	if(event.ctrlKey)
	{
		//first check if multiselection was off in which case treat this as first selection 
		//border this with a different color than others 
		var ID = node.getAttribute('id'); 
		if(ID == 'ALL_DATA_CONTAINER')
			return ; 
		var nodePos = $(JQSelector).position(); 
		var nodeWidth, nodeHeight;
		nodeWidth = $(JQSelector).width();
		nodeHeight = $(JQSelector).height();		
		ObjectParam.push(ID);
		ObjectParam.push(nodePos.left)
		ObjectParam.push(nodePos.top); 
		ObjectParam.push(nodeWidth); 
		ObjectParam.push(nodeHeight); 
		if(gbMultiSelection == false)
		{
			node.style.border = gObjMultiSelFirstItem;
			//node.style.opacity = '1.0';	
			gbMultiSelection = true;						
			gCurrentObjContainerNode = 0; 
			
		}
		else
		{
			node.style.border = gObjMultiSelNextItem;
			//node.style.opacity = '1.0';	
			
		}	
		gMultiSelNodeList.push(ObjectParam);
		event.stopImmediatePropagation(); 
		return ; 
	}
		
	if(bObjClass == true)
	{
		UIH_ClearMultiSelection();	
		//clear the highlight if any 
		if(gCurrentObjContainerNode)
		{
			var prevObjID =  gCurrentObjContainerNode.getAttribute('id'); 
			if(prevObjID != 'ALL_DATA_CONTAINER')	
			{
				prevObjID = prevObjID.substring(4); 
				var mystyleValue = '';				
				WAL_setTreeItemStyle(gTreeNodeID, "TM_"+prevObjID, mystyleValue);
			}
				
		}
			
		gCurrentObjContainerNode = node; 
		//gCurrentObjContainerNode.style.border = gObjSelBorderValue; 
		if(gCurrentObjContainerNode.id == 'ALL_DATA_CONTAINER')
		{
			gApplySelectProperty = false; 
			document.body.style.cursor = "default"; 
			//Debug_Message("Exiting Style Apply"); 
		}
		
		if(gCurrentObjContainerNode.id != 'DIV_DATA_CONTAINER')
		{
			gCurrentObjectID = gCurrentObjContainerNode.firstElementChild.getAttribute('id');
			gCurrentObjectNode = gCurrentObjContainerNode.firstElementChild;			
		}
		else
		{
			gCurrentObjectID = gCurrentObjContainerNode.id;
			gCurrentObjectNode = gCurrentObjContainerNode; 
			
		}
		
		if(gCurrentObjectID)
		{	
			gIconDisableStateArr.splice(0,gIconDisableStateArr.length);
			var arr = ['open_icon', 'ButtonGroup', false, "projectgroup"];			
			gIconDisableStateArr.push(arr);
			UIH_updateIconDisableState(gIconDisableStateArr);
		}
		
		var JQsel = ".OBJECT_CONTAINER"; 
		//$(JQsel).css('opacity', '0.4');
		$(JQsel).css('border', "");		
		gCurrentObjContainerNode.style.border = gObjSelBorderValue; 
		var currObjID = gCurrentObjContainerNode.getAttribute('id'); 
		if(currObjID != 'ALL_DATA_CONTAINER')	
		{
			currObjID = currObjID.substring(4); 
			var styleValue = gTreeItemHighlighter;			
			WAL_expandTreeItem(gTreeNodeID,"TM_"+currObjID, true);
			WAL_setTreeItemStyle(gTreeNodeID, "TM_"+currObjID, styleValue);	
			
		}
		
			
		//gCurrentObjContainerNode.style.opacity = '1.0';		
		
		
		var attrval  = gCurrentObjectNode.style.width;
		if(!attrval)
		{
			gCurrentObjectNode.style.width = 'inherit';
			gCurrentObjectNode.style.height = 'inherit'; 
		}		
		UIH_getCurrentStyleProperties(gCurrentObjectNode); 
		gInitColorProp['border-color']= gObjCurrentStyleProperties['border-color']; 
		gInitColorProp['background-color']=gObjCurrentStyleProperties['background-color'];
		gInitColorProp['shadow-color']= gObjCurrentStyleProperties['shadow-color'];
		
		var JQSel = '#' + gCurrentObjectNode.id;    
		var attrval = $(JQSel).attr('ondblclick');
		if(!attrval)
		{
			if(gCurrentObjectNode.id != 'DIV_DATA_CONTAINER')
				$(JQSel).attr('ondblclick', 'UIH_HTMLObjDblClick(event)');	
		}
	}	
	if(gApplySelectProperty ==  true)
		UIH_FormatStyleProperty(gCurrentObjectNode);
	
	UIH_UpdateObjectContainerOnGUI(gCurrentObjContainerNode); 
	event.stopImmediatePropagation(); 
}

function UIH_ClearMultiSelection()
{
	if(gbMultiSelection == false)
		return ; 
	
	gbMultiSelection = false; 
	var node; 
	var listlen = gMultiSelNodeList.length; 
	for(var k = 0 ; k < listlen; k++)
	{
		node = document.getElementById(gMultiSelNodeList[k][0]);
		node.style.border = ""; 
	}	
	gMultiSelNodeList.splice(0, listlen); 
	listlen = gMultiSelNodeList.length; 
	
	WAL_disableWidget('OBJECT_CONTAINER', 'data-resizable', true, false);
	WAL_disableWidget('OBJECT_CONTAINER', 'data-draggable', true, false);	
	var divobjproplist = UIH_getFinalEditList(gEditList, 0);	 
	if(divobjproplist.length > 0)
		DH_SaveEditList(divobjproplist);
}

function UIH_menu_clear()
{
	if(gCurrentObjContainerNode)
	{
		gCurrentObjContainerNode.style.border = "";
		gCurrentObjContainerNode = 0; 
	}		
	UIH_ClearMultiSelection(); 
	//$("DIV.OBJECT_CONTAINER").css('opacity', '1.0'); 
}

function UIH_SpatialDDLHandler(event, value)
{
	var type;
	var node = event.target; 
	type = node.getAttribute('type'); 
	if(type =='MARGIN' )
		UIH_AlignMargin(value.toUpperCase()); 
	else if(type == 'SIZE')
		UIH_AlignSize(value.toUpperCase()); 
	else if(type == 'SPACE')
		UIH_AlignSpace(value.toUpperCase()); 
	
}

function UIH_AlignMargin(type)
{
	//get the first node from the nodearray 
	if(gbMultiSelection != true)
	{
		var nodeID = gCurrentObjContainerNode.getAttribute('id'); 
		UIH_AlignWithContainer(nodeID, type);
		return ; 
	}
	var nodearrlen = gMultiSelNodeList.length; 
	if(nodearrlen < 2)
		 return; 
	var refNodeID = gMultiSelNodeList[0][0]; 
	var JQSel = "#" + refNodeID; 
	var refPos = $(JQSel).position();
	var refWidth = $(JQSel).width(); 
	var refHeight = $(JQSel).height(); 
	var left, top; 
	var tgtNode; 
	//based on type get the target position 
	if(type == 'LEFT')
	{
		
		for(var i =1 ; i <nodearrlen; i++ )
		{
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]);  			
			UIH_ApplySpatialValues(tgtNode, refPos.left, 'LEFT');
			
		}
	}
	else if(type == 'TOP')
	{		
		for(var i =1 ; i <nodearrlen; i++ )
		{
			
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]); 			
			UIH_ApplySpatialValues(tgtNode, refPos.top, 'TOP');
		
		}
	}
	else if(type == 'RIGHT')
	{
		
		var refRpos = refPos.left + refWidth; 
		var currWidth = 0 ; 
		for(var i =1 ; i <nodearrlen; i++ )
		{
			JQSel = "#"+gMultiSelNodeList[i][0]; 
			
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]);  			
			currWidth = $(JQSel).width();  			
			UIH_ApplySpatialValues(tgtNode, refRpos - currWidth , 'LEFT');
			
		}
	}
	else if(type == 'BOTTOM')
	{
		var refBpos = refPos.top + refHeight; 
		var currHeight= 0 ; 
		for(var i =1 ; i <nodearrlen; i++ )
		{
			JQSel = "#"+gMultiSelNodeList[i][0]; 
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]);			
			currHeight = $(JQSel).height(); 			
			UIH_ApplySpatialValues(tgtNode, refBpos - currHeight , 'TOP');
			
		}
	}
	
}

function UIH_AlignSize(type)
{
	//get the first node from the nodearray 
	var nodearrlen = gMultiSelNodeList.length; 
	if(nodearrlen < 2)
	{		
		WAL_showWindow(gAlignMsgDlgID, true, 'none');
		return ; 
	}
		 
	var refNodeID = gMultiSelNodeList[0][0]; 
	var JQSel = "#" + refNodeID; 
	var refPos = $(JQSel).position();
	var refWidth = $(JQSel).width(); 
	var refHeight = $(JQSel).height(); 
	var left, top; 
	var tgtNode; 
	//based on type get the target position 
	if(type == 'WIDTH')
	{		
		for(var i =1 ; i <nodearrlen; i++ )
		{
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]);  			
			UIH_ApplySpatialValues(tgtNode, refWidth, 'WIDTH');
			
		}
	}
	else if(type == 'HEIGHT')
	{		
		for(var i =1 ; i <nodearrlen; i++ )
		{
			
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]); 			
			UIH_ApplySpatialValues(tgtNode, refHeight, 'HEIGHT');
			
		}
	}
	else if(type == 'BOTH')
	{
		for(var i =1 ; i <nodearrlen; i++ )
		{
			
			tgtNode = document.getElementById(gMultiSelNodeList[i][0]); 			
			UIH_ApplySpatialValues(tgtNode, refHeight, 'HEIGHT');
			UIH_ApplySpatialValues(tgtNode, refWidth, 'WIDTH');
			
		}
	}
	
	
	//now get the remaining nodes and set them to this position 
	
	
}

function UIH_AlignSpace(type)
{
	var minTop, maxTop, totalSpace, gap; 
	var arrLen = gMultiSelNodeList.length; 
	var posIndex;
	var dimIndex; 
	var currTopPos, prevTopPos, prevHeight;
	var currLeftPos, prevLeftPos, prevWidth;
	var currNode; 
	currTopPos  = prevTopPos = prevHeight = 0; 
	currLeftPos = prevLeftPos = prevWidth = 0;
	
	if(type == 'VERTICAL')
	{
		posIndex = 2; 
		dimIndex = 4; 
		//sort the array 
		gMultiSelNodeList =  SortMultiDimArray(gMultiSelNodeList, posIndex);
		
		//calcualte the total space between top-min and top-max
		totalSpace = gMultiSelNodeList[arrLen-1][posIndex] - gMultiSelNodeList[0][posIndex]; 
		
		//now subtract the intermdiate heights starting from first to last-1 
		for(var k = 0; k < arrLen-1; k++)
		{
			totalSpace -= gMultiSelNodeList[k][dimIndex]; 			
		}
		
		//divide the final distance by n-1 
		gap  = Math.round(totalSpace / (arrLen -1)); 
		
		//now leave the first and last object
		prevTopPos = gMultiSelNodeList[0][posIndex]; 
		prevHeight = gMultiSelNodeList[0][dimIndex]; 
		for(k = 1; k < arrLen-1; k++)
		{
			// the next one Top positon  =  prevTop + prevHeight + gap 
			currTopPos = prevTopPos +  prevHeight +  gap;
			currTopPos  = currTopPos ; 
			currNode = document.getElementById(gMultiSelNodeList[k][0]); 
			UIH_ApplySpatialValues(currNode, currTopPos, 'TOP');	
			
			prevTopPos = currTopPos;
			prevHeight = gMultiSelNodeList[k][dimIndex]; 
		}
	}
	else if(type == 'HORIZONTAL')
	{
		posIndex = 1; 
		dimIndex = 3; 
		//sort the array 
		gMultiSelNodeList =  SortMultiDimArray(gMultiSelNodeList, posIndex);
		
		//calcualte the total space between left-min and left-max
		totalSpace = gMultiSelNodeList[arrLen-1][posIndex] - gMultiSelNodeList[0][posIndex]; 
		
		//now subtract the intermdiate width starting from first to last-1 
		for(var k = 0; k < arrLen-1; k++)
		{
			totalSpace -= gMultiSelNodeList[k][dimIndex]; 			
		}
		
		//divide the final distance by n-1 
		gap  = Math.round(totalSpace / (arrLen -1)); 
		
		//now leave the first and last object
		prevLeftPos = gMultiSelNodeList[0][posIndex]; 
		prevWidth   = gMultiSelNodeList[0][dimIndex]; 
		for(k = 1; k < arrLen-1; k++)
		{
			// the next one Top positon  =  prevTop + prevHeight + gap 
			currLeftPos = prevLeftPos +  prevWidth +  gap;
			//currTopPos  = currTopPos ; 
			currNode = document.getElementById(gMultiSelNodeList[k][0]); 
			UIH_ApplySpatialValues(currNode, currLeftPos, 'LEFT');	
			
			prevLeftPos = currLeftPos;
			prevWidth = gMultiSelNodeList[k][dimIndex]; 
		}
		
	}
				
	//for type ==  vertical 
	
}

function UIH_ApplySpatialValues(targetNode, value, attributeType)
{
	var divObj = targetNode; 
	var nodeID = targetNode.getAttribute('id'); 
	
    switch (attributeType)
    {
        case "LEFT":        
         UIH_UpdateContainerProperty(nodeID, true, 'left', value+'px', "",  true);
         break;
     case "TOP":         
         UIH_UpdateContainerProperty(nodeID, true, 'top', value+'px', "",  true);
         break;
     case "WIDTH":
    	 if(value == 0)    		 
    		 UIH_UpdateContainerProperty(nodeID, true, 'width', 'auto', "",  true);
    	 else    		  
    		 UIH_UpdateContainerProperty(nodeID, true, 'width', value+'px', "",  true);
         break;
     case "HEIGHT":
    	 if(value == 0)
    		 UIH_UpdateContainerProperty(nodeID, true, 'height', 'auto', "",  true);
    	 else
    		 UIH_UpdateContainerProperty(nodeID, true, 'height', value+'px', "",  true);
         break;
        default:
          break; 
    }
    
}



function UIH_ToolbarHandler(Node)
{
	var NodeID = Node.getAttribute('id'); 
	
	//Debug_Message("Button Node ID = "+ Node.getAttribute('id') ); 
	UIH_MenuItemClick(NodeID); 
	
}

function UIH_ToolbarUnselectHandler(Node)
{
	alert("Unselected me");
}

function UIH_updateGroupShowState(groupArray)
{
	var grplength = groupArray.length;
	
	for(var i = 0 ; i < grplength; i++)
	{
		//get the group id 
		var grpID = groupArray[i][0];
		var state = groupArray[i][1];
		//form the class selector 
		var JQSel = "#"+ grpID;
		if(state == true)
		{
			$(JQSel).show();
			JQSel = "."+grpID; 
			$(JQSel).removeAttr('disabled'); 
		}
			
		else
			$(JQSel).hide();
		//then call the enable or disable of each state
		//$(JQSel).jqxButton('disabled', state); 
		//$(JQSel).jqxButtonGroup('disabled', state); 
		
	}
}
function UIH_updateIconDisableState(iconArray)
{
	var arrlength = iconArray.length;
	
	for(var i = 0 ; i < arrlength; i++)
	{
		//get the group id 
		var iconID = iconArray[i][0];
		var state = iconArray[i][2];
		var widgetType = iconArray[i][1];
		if(widgetType == 'ButtonGroup')
		{
			 WAL_DisableItemInButtonGroup(iconArray[i][3], iconID, state);
		}
		else
		{
			if(widgetType != 'customButton')
				widgetType = 'data-jqx' +widgetType;
			else
				widgetType = 'data-'+ widgetType;
			//form the class selector				
			WAL_disableWidget(iconID, widgetType, false, state); 
		}
		
		
	}
}

function UIH_restoreDefaultShowState()
{
	$('.PROPERTY_INTERFACE').hide(); 
	gGroupShowStateArr[0][1] = false; 
	gGroupShowStateArr[1][1] = false; 
	gGroupShowStateArr[2][1] = false; 	
	gGroupShowStateArr[3][1] = false; 	
	gGroupShowStateArr[4][1] = false; 
	gGroupShowStateArr[5][1] = false; 
	gGroupShowStateArr[6][1] = false; 
	gGroupShowStateArr[7][1] = false; 
	
	UIH_updateGroupShowState(gGroupShowStateArr);
}

function UIH_updateToolbarState(infoType, nodeType)
{
	//var myitemarr = [];
	var arr = []; 

	if(infoType == 'WORKSPACE')
	{
		gIconDisableStateArr.splice(0,gIconDisableStateArr.length);
		if(nodeType == 'WORKSPACE')
		{			
			arr = ['open_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['preview_icon', 'customButton', true, "helpgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['delete_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
		}
		else if(nodeType == 'PROJECT')
		{
			
			arr = ['open_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['preview_icon', 'customButton', true, "helpgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['delete_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
		}
		
	}	
	else if(infoType == 'PROJECT')
	{		
		gIconDisableStateArr.splice(0,gIconDisableStateArr.length);		
		if(nodeType == 'PROJECT')
		{			
			arr = ['open_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['preview_icon', 'customButton', true, "helpgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['delete_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);
		}
		
		else if(nodeType == 'PAGE')
		{			
			arr = ['open_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['preview_icon', 'customButton', false, "helpgroup"];	
			gIconDisableStateArr.push(arr);
			
			arr = ['delete_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
		}
			
		 
	   }
		else if(infoType == 'PAGE')
		{
			gIconDisableStateArr.splice(0,gIconDisableStateArr.length);		
			arr = ['layer_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			WAL_disableWidget('newobjectTypeDDL', 'data-jqxDropDownList', false, false); 				
			arr = ['newobjecttype_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
					
			arr = ['copy_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			arr = ['apply_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			arr = ['reference_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);
			arr = ['add_reference_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);	
			
			arr = ['delete_editor_icon', 'customButton', false, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['border_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['layout_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['bkgrnd_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['text_edit_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['undo_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['redo_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			arr = ['styleapply_icon', 'customButton', true, "wksgroup"];	
			gIconDisableStateArr.push(arr);				
			UIH_updateIconDisableState(gIconDisableStateArr);
			//$('.PROPERTY_INTERFACE').hide(); 
			
			gIconDisableStateArr.splice(0,gIconDisableStateArr.length);	
			
			if(nodeType == 'PAGE')
			{
				arr = ['layer_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);				
				WAL_disableWidget('newobjectTypeDDL', 'data-jqxDropDownList', false, true); 				
				arr = ['newobjecttype_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);				
				arr = ['delete_editor_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);				
				arr = ['copy_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['apply_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['reference_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['add_reference_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);				
			}
			else if(nodeType == 'SCENE')
			{
				arr = ['copy_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['apply_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['reference_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);	
					
			}
			else if(nodeType == 'LAYER')
			{
				arr = ['layer_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);	
				
			}
			else if(nodeType == 'HTMLOBJECT')
			{
				arr = ['layer_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);				
				WAL_disableWidget('newobjectTypeDDL', 'data-jqxDropDownList', false, true); 				
				arr = ['newobjecttype_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);	
				arr = ['reference_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);
				arr = ['add_reference_icon', 'customButton', true, "wksgroup"];	
				gIconDisableStateArr.push(arr);	
				
			}
		}
UIH_updateIconDisableState(gIconDisableStateArr);
}

function UIH_projNameOK()
{
	var JQSel = "#" + "projectNameIP";
    var str = $(JQSel).val();
    if(!str)
    {
    	Debug_Message("Please Enter a Valid Name ");
    	WAL_showModalWindow(gProjNameDlgID,"UIH_projNameOK", "" );
    	return; 
    }    
    var bUnique = UIH_IsUnique(str);
    if(bUnique != true)
    {
    	WAL_showModalWindow(gProjNameDlgID,"UIH_projNameOK", "" );
    	return ; 
    }
     UIH_new_Project(str);
     UIH_showWKSInterface(); 
    
    
   
}

function UIH_pageNameOK()
{
	var JQSel = "#" + "pageNameIP";
    var str = $(JQSel).val();
    if(!str)
    {
    	Debug_Message("Please Enter a Valid Name ");
    	WAL_showModalWindow(gPageNameDlgID,"UIH_pageNameOK", "" );
    	return; 
    }
    var bUnique = UIH_IsUnique(str);
    if(bUnique != true)
    {
    	WAL_showModalWindow(gPageNameDlgID,"UIH_pageNameOK", "" );
    	return ; 
    }
    UIH_new_Page(str); 
    UIH_showProjectInterface(); 
}

function UIH_Navigation()
{
	//first call DH_add new object 
	//adding the nextslide button 
	UIH_AddObject("NEXT SLIDE BUTTON"); 
	UIH_AddObject("PREVIOUS SLIDE BUTTON"); 
	UIH_AddObject("NEXT PAGE BUTTON"); 
	UIH_AddObject("PREVIOUS PAGE BUTTON"); 	
}


function UIH_refreshPage()
{
	
	gbPageLoaded = false; 
	var PageID = gCurrentPageID; 
	UIH_ShowPageInfo(PageID); 
}

//remember the layerId should be 'TM_XXX' 
function UIH_AddLayerReference(layerID) {

    //get the current selected node
 //   var parentnodeType = gCurrentTreeNode.getAttribute("type");

    //get the source node to be copied
	var currNodeType = gCurrentTreeNode.getAttribute('type');
	if(currNodeType != 'SCENE')
	{
		return ; 
	}
	var parentID = gCurrentTreeNode.getAttribute('id'); 
	
	var retval  = DH_addLayerReference(layerID, parentID);
    //get an updated XML
	var mynode = document.getElementById(layerID);
	var AVID = mynode.getAttribute('data-AVObjID'); 
	
    if((gRefLayerIDAdded) && (AVID) ) 
    {
    	DH_setTreeItemAttribute(gRefLayerIDAdded, 'data-AVObjID', AVID);
    	DH_setTreeItemAttribute(parentID, 'data-AVObjID', AVID);        	
    }
	var respstr = DH_getSCXMLData(gCurrentPageID); 
    UIH_updateTreeWidget(respstr); 
    
    

}

function UIH_addBaseLayer(sceneID)
{
	
	var elemArr = WAL_getTreeNodeList(gTreeNodeID); 
	var nodeID;
	var bBaseLayerAdded = false; 
	for(var i = 0 ; i < elemArr.length; i++)
	{
		nodeID = elemArr[i].getAttribute('id'); 
		if(nodeID == 'TM_BASELAYER')
		{
			bBaseLayerAdded = true;
			break; 
		}
	}
	
	if(bBaseLayerAdded == false )
	{
		UIH_AddObject('BASELAYER'); 
		UIH_Navigation(); 
		UIH_refreshPage();
		
		
	}
	else
	{
		var type = gCurrentTreeNode.getAttribute('type');
		if(type != 'SCENE')
		{
			return ; 
		}
		var sceneID = gCurrentTreeNode.getAttribute('id');
		var retval  = DH_addLayerReference('TM_BASELAYER', sceneID); 
		if(retval)
		{
			WAL_AddTreeItem(gTreeWidgetID, retval, gCurrentTreeNode, gTreeIcons['LAYER'], true);
			WAL_disableTreeItemForAttributes(gTreeNodeID,  'data-origin', "reference", true);
		}
			
	}		
}

function UIH_treeItemRightclick(event)
{
	
}
function UIH_TreeHandlerDragStart(item)
{
	  
	//return false;   
}

function UIH_TreeHandlerDragEnd(item, dropItem, args, dropPosition, tree)
{
	 var srcNode = item.element; 
	 var nodeID = item.id; 
	 var dropNode = dropItem.element;
	 var objectID, destParentID, objectType;
	 objectID = srcNode.getAttribute('dataid'); 
	 destID = dropNode.getAttribute('dataid'); 
	 objectType = srcNode.getAttribute('type'); 
	 var objPosition  = dropPosition; 	 

	 
	 if(dropPosition == 'after')
	 {
		return ;	
	 }
	
	 var retval  = DH_moveObject(objectID, destID, objectType, objPosition);
	 if(retval != 'OK')
		 return ; 	
	 
	 
	 
	 WAL_expandTreeItem(gTreeNodeID,dropItem.id, true); 
	 retval  = UIH_setTreeItemSelection(nodeID); 
	 if(objectType == 'HTMLOBJECT')
		 UIH_RefreshObject(objectID); 
	//Debug_Message("Cleared and then created"); 
	 
	 return true; 
}

function UIH_menu_reference_icon()
{
	var currnodeType = 0; 
	if(!gCurrentTreeNode)
	{
		UIH_Prompt("Please Select an Item from the Left Tree Window");
		return; 
	}			
	currnodeType = gCurrentTreeNode.getAttribute('type');
	if(currnodeType == 'LAYER')
	{
		gLayerRefIDToCopy = gCurrentTreeNode.getAttribute('dataid');
	}
}

function UIH_menu_add_reference_icon()
{
	if(!gLayerRefIDToCopy)
		return; 
	
	var LayerRefID = "TM_" +gLayerRefIDToCopy; 
	UIH_AddLayerReference(LayerRefID); 	
	
	//UIH_setTopItemSelInTree(); 
	
}

function UIH_menu_copy()
{
	var currnodeType = 0; 
	if(!gCurrentTreeNode)
	{
		UIH_Prompt("Please Select an Item from the Left Tree Window");
		return; 
	}			
	currnodeType = gCurrentTreeNode.getAttribute('type');
	if(currnodeType == 'LAYER')
	{
		gLayerIDToCopy = gCurrentTreeNode.getAttribute('dataid');
	}
	else if(currnodeType == 'HTMLOBJECT')
	{
		gHTMLObjectIDToCopy = gCurrentTreeNode.getAttribute('dataid');
	}
		
}

function UIH_menu_apply()
{
	var currnodeType = gCurrentTreeNode.getAttribute('type');
	var destParentID =  gCurrentTreeNode.getAttribute('dataid');
	if(currnodeType == 'SCENE')
	{
		if(gLayerIDToCopy)
			var retVal = DH_copyObject(gLayerIDToCopy, destParentID, 'LAYER');
		  if(retVal == 'OK')
		  {
			  gbPageLoaded = false; 
			  UIH_ShowPageInfo(gCurrentPageID); 
		  }
	}
	else if(currnodeType == 'LAYER')
	{
		if(gHTMLObjectIDToCopy)
			var retVal = DH_copyObject(gHTMLObjectIDToCopy, destParentID, 'HTMLOBJECT');
		  if(retVal == 'OK')
		  {
			  gbPageLoaded = false; 
			  UIH_ShowPageInfo(gCurrentPageID); 
		  }
	}
	
	
}

function UIH_IsUnique(name)
{
	var retval  = true; 
	//get the tree item array 
	var elemArr = WAL_getTreeNodeList(gTreeNodeID); 
	var itemlen = elemArr.length; 
	var itemname; 
	var inputName = name.toUpperCase(); 
	// iterate over each item and compare 
	for(var i=0; i < itemlen; i++)
	{
		itemname = elemArr[i].getAttribute('name');
		itemname = itemname.toUpperCase(); 
		if(inputName == itemname)
		{
			Debug_Message("This name already Exists, please use a different name"); 		    
			return false; 
		}		
	}
	return retval; 
}


function UIH_menu_load_image()
{
	if(!gCurrentEditableObjectID)
		return; 	
	WAL_showModalWindow(gImageDlg,"UIH_imageLoadOK", "" );	
}

function UIH_imageLoadOK()
{
	if(!gCurrentObjectNode)
		return; 
	
	BlockUIinAjax(true);
	//var currNodeID = gCurrentTreeNode.getAttribute('dataid');
	
	var node = gCurrentObjectNode ; //document.getElementById(currNodeID); 
	var nodetype = node.getAttribute('type'); 
	var nodename = node.nodeName.toUpperCase(); 
	var objectID = node.id; 
	var currNodeID = 0; 
	if(nodetype == 'BUTTON')
	{
		node = node.firstElementChild;
		currNodeID = node.getAttribute('id'); 
		node = document.getElementById("resID");
		node.setAttribute('value',currNodeID ); 
		node = document.getElementById("resType");
		node.setAttribute('value','IMAGE');	
		//now first remove the data-background and then save it before doing anything else 
		
		
		var retval = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,objectID);
		
		node = document.getElementById("imgFile");
		var filename = node.getAttribute('value');		
		document.getElementById("imgForm").submit();	
		BlockUIinAjax(false);
		return ; 
	}	
	if(nodename == 'IMG')
	{
		currNodeID = node.id; 
		node = document.getElementById("resID");
		node.setAttribute('value',currNodeID ); 
		node = document.getElementById("resType");
		node.setAttribute('value','IMAGE');	
		//now first remove the data-background and then save it before doing anything else 
		node = document.getElementById("imgFname");
		var fname = node.getAttribute('value'); 	
		var itemname = "Image:(" + fname + ")"; 
		DH_UpdateTreeNodeText("TM_"+currNodeID, itemname, false ); 
		WAL_setTreeItemText(gTreeNodeID, "TM_"+currNodeID, itemname);
		
		UIH_UpdateContainerProperty(gCurrentObjectNode.id, false, "data-backgroundgradcolor", "", "", true);
		UIH_menu_save(); 		
		var retval = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,objectID);
		
		node = document.getElementById("imgFile");
		var filename = node.getAttribute('value');		
		document.getElementById("imgForm").submit();	
		BlockUIinAjax(false);
		return ; 
	}
	
	
	
	BlockUIinAjax(false);
}


function UIH_updateImageFilename(filename)
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


function UIH_updateVideoFilename(filename)
{
	node = document.getElementById("vidFname");
	var fakepathlen = 12; 
	var str = filename.substring(0,12 ); 
	var fakestr = "C:\\fakepath\\"; //typically Chrome/IE specific issue
	
	if(str == fakestr )
	{		
		str = filename.substring(fakestr.length, filename.length);		
		node.setAttribute("value", str); 
	}
	else
		node.setAttribute("value", filename); 
	
	return ; 
	
}


function UIH_slidecontainerClickHandler(event)
{
	//var node = event.target;
	var currNode = event.target; 
	var nodeID = currNode.getAttribute('id'); 
	if(nodeID != "DIV_DATA_CONTAINER")
		return ; 
	currNode = currNode.parentNode; 
	gCurrentObjContainerNode = currNode;	
	
	var JQsel = ".OBJECT_CONTAINER"; 
	
	$(JQsel).css('border', "");	
	currNode.style.border = gObjSelBorderValue; 
	var contentNode = currNode.firstElementChild; 
	
	gCurrentObjContainerNode = currNode; 
	
	UIH_UpdateObjectContainerOnGUI(gCurrentObjContainerNode); 	 
	
}

function UIH_ApplyStyleProperty(divNode, propertyType, attrval, bFinal)
{
	//var nodeID = divNode.getAttribute('id'); 
	var Node = divNode.firstElementChild; 
	var nodeID = Node.getAttribute('id'); 
	if(propertyType == 'BORDERSTYLE')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'borderStyle', attrval,"",  bFinal);		
	}
	else if(propertyType == 'BACKGROUND_COLOR')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundColor', attrval,"",  bFinal);
	}
	else if(propertyType == 'BACKGROUND_GRADIENT')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundImage', attrval,"",  bFinal);
	}
	else if(propertyType == 'THICKNESS')	{
		
		UIH_UpdateContainerProperty(nodeID, true, 'borderWidth', attrval+'px' ,"",  bFinal);
		
	}
	else if(propertyType == 'ROUNDNESS')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'borderRadius', attrval+'px' ,"",  bFinal);		
	}
	else if(propertyType == 'ALL_BORDER_COLOR')
	{
		UIH_UpdateContainerProperty(nodeID, true, 'borderColor', attrval,"",  bFinal);
		
	}
	else if(propertyType == 'BORDER_SHADOW')
	{		
		UIH_applyShadow(Node, bFinal);		
	}
	else if(propertyType == 'HOR_SHADOW_OFFSET')
	{		
		gObjCurrentStyleProperties['shadow-H']= attrval; 		
		UIH_applyShadow(Node, bFinal);		
	}
	else if(propertyType == 'VER_SHADOW_OFFSET')
	{	
		gObjCurrentStyleProperties['shadow-V']= attrval;  
		UIH_applyShadow(Node, bFinal);	
	}
	else if(propertyType == 'BLUR')
	{		
		gObjCurrentStyleProperties['shadow-blur']= attrval;  
		UIH_applyShadow(Node, bFinal);			
	}
	else if(propertyType == 'SPREAD')
	{		
		gObjCurrentStyleProperties['shadow-spread']= attrval;  
		UIH_applyShadow(Node, bFinal);			
	}
	else if(propertyType == 'SHADOW_COLOR')
	{		
		gObjCurrentStyleProperties['shadow-color']= attrval;  
		UIH_applyShadow(Node, bFinal);			
	}
	else if(propertyType == 'BKGRND_POS')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundPosition', attrval,"",  bFinal);		
	}
	else if(propertyType == 'IMAGE_REPEAT')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundRepeat', attrval,"",  bFinal);
	}
	else if(propertyType == 'BKGRND_IMAGE_SIZE')
	{		
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundSize', attrval+'%',"",  bFinal);
	}
	else if(propertyType == 'BKGRND_OPACITY')
	{		
		attrval = parseFloat(attrval / 100);
		attrval = attrval.toFixed(2); 	
		//Debug_Message("Opacity=" + attrval); 
		UIH_UpdateContainerProperty(nodeID, true, 'opacity', attrval,"",  bFinal);
	}
}

function UIH_DDLHandler(Node, value)
{
	if(gDropDownListEventInternal == true )
		return ; 
	var type = Node.getAttribute('type');
	if(type == 'BORDERSTYLE') 
	{
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, type, value, true); 
	}		
	else if(type == 'BKGRND_POS')
	{
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, type, value, true); 
	}
	else if(type == 'IMAGE_REPEAT')
	{
		var attrval  = gbkgrndRepeatArr[value]; 
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, type, attrval, true); 
	} 
	else if(type == 'STEFFECT')
	{
		$('.EFFECT_PARAM').hide();
		var itemvalue = value.toUpperCase(); 
		switch(itemvalue)
		{
		case 'BLIND':
			WAL_hideWidget('blindparam', false);	
			break;
		case 'BOUNCE':
			WAL_hideWidget('bounceparam', false);				
			break;
		case 'CLIP':
			WAL_hideWidget('clipparam', false);				
			break;
		case 'DROP':
			WAL_hideWidget('dropparam', false);				
			break;	
		case 'EXPLODE':
			WAL_hideWidget('explodeparam', false);				
			break;	
		case 'FADE':
			WAL_hideWidget('fadeparam', false);				
			break;
		case 'PUFF':
			WAL_hideWidget('puffparam', false);				
			break;
		case 'PULSATE':
			WAL_hideWidget('pulsateparam', false);				
			break;
		case 'SCALE':
			WAL_hideWidget('scaleparam', false);				
			break;
		case 'SHAKE':
			WAL_hideWidget('shakeparam', false);				
			break;
		case 'SLIDE':
			WAL_hideWidget('slideparam', false);				
			break;
		case 'FLIP':
			WAL_hideWidget('flipparam', false);				
			break;

		default:		
			break; 
		
		}
			 
	} 
	
}

function UIH_showBorderInterface()
{	
	if(!gCurrentObjContainerNode)
		return ;
	$('.PROPERTY_INTERFACE').hide(); 
	WAL_hideWidget('borderinterface', false); 
	gObjectEditMode = 'BORDER_MODE';
	UIH_updateBorderValueonGUI(); 
	
}

function UIH_showbackgroundInterface()
{
	if(!gCurrentObjContainerNode)
		return ;
	$('.PROPERTY_INTERFACE').hide(); 
	WAL_hideWidget('backgroundinterface', false);
	gObjectEditMode = 'BACKGROUND_MODE'; 
	UIH_updateBackgroundValueonGUI(); 
	
	
}

function UIH_updateBorderValueonGUI(){
	//update border style 
	
	var JQSel = "#borderStyleDDL";		
	 var style = gObjCurrentStyleProperties['border-style'].toUpperCase(); 
	 var i =0;
	 for(i =0 ; i< gBSvalue.length; i++)
	 {
		 var itemlabel = gBSvalue[i].toUpperCase(); 
		 if(itemlabel == style)
			 break; 
	 }	 
	 gDropDownListEventInternal = true; 
	 //$(JQSel).jqxDropDownList({selectedIndex: i });
	 WAL_SetItemInDropDownList('borderStyleDDL', i); 
	 gDropDownListEventInternal = false ; 

	//update border width  
	 var width = gObjCurrentStyleProperties['border-width'];	
	 WAL_setNumberInputValue("borderThickIP", width); 
	 
	//update border roundness 
	 var radius = gObjCurrentStyleProperties['border-radius'];	
	 WAL_setNumberInputValue("borderRoundnessIP", radius); 	
	 
	 WAL_setNumberInputValue("HOffsetIP", gObjCurrentStyleProperties['shadow-H']);
	 WAL_setNumberInputValue("VOffsetIP", gObjCurrentStyleProperties['shadow-V']);
	 WAL_setNumberInputValue("blurIP", gObjCurrentStyleProperties['shadow-blur']);
	 WAL_setNumberInputValue("spreadIP", gObjCurrentStyleProperties['shadow-spread']);	 
	 
}

function  UIH_updateBackgroundValueonGUI()
{
	var JQSel = "#HbkgrndPosIP";		
	var style = gObjCurrentStyleProperties['background-position'].toUpperCase(); 
	var i =0;
	for(i =0 ; i< gBkgrndPosParam.length; i++)
	 {
		 var itemlabel = gBkgrndPosParam[i].toUpperCase(); 
		 if(itemlabel == style)
			 break; 
	 }	 
	 gDropDownListEventInternal = true; 
	 //$(JQSel).jqxDropDownList({selectedIndex: i });
	 WAL_SetItemInDropDownList('HbkgrndPosIP', i); 
	 gDropDownListEventInternal = false; 
	 
	 JQSel = "#imageRepeatDDL";		
	 style = gObjCurrentStyleProperties['background-repeat'].toUpperCase(); 
	
	 if(style == 'REPEAT-X')
	 { 
		i = 2;		
	 }
	 else if(style == 'REPEAT-Y')
	 { 
			i = 3;		
	 }
	 else if(style == 'REPEAT')
	 { 
			i = 1;		
	 }
	 else
		 i = 0;	
	gDropDownListEventInternal = true; 
	//$(JQSel).jqxDropDownList({selectedIndex: i });	
	WAL_SetItemInDropDownList('imageRepeatDDL', i); 
	gDropDownListEventInternal = false; 
	
	WAL_setNumberInputValue("bkgrndImageSize", gObjCurrentStyleProperties['background-size']);
	WAL_setNumberInputValue("bkgrndOpacity", gObjCurrentStyleProperties['opacity']);
}
	



function UIH_BorderColorHandler(attrName, value)
{
	if(!gCurrentObjContainerNode)
		return ;			
	UIH_ApplyStyleProperty(gCurrentObjContainerNode, "ALL_BORDER_COLOR", value, false);
	//gCurrentObjContainerNode.style.borderColor =  value; 
}

function UIH_BorderShadowColorHandler(attrName, value)
{
	if(!gCurrentObjContainerNode)
		return ;
	var shadowProp = []; 
	UIH_ApplyStyleProperty(gCurrentObjContainerNode, "SHADOW_COLOR", value, false);	
	/*shadowProp = UIH_getArrayFromAttrValue(gCurrentObjContainerNode, "data-shadow"); 
	sadowProp[4] = value; 
	var attrStr = UIH_getAttrValueFromArray(shadowProp, " ");	
	gCurrentObjContainerNode.style.boxShadow = attrStr;
	*/
	
}

function UIH_BackgroundColorHandler(attrName, value)
{
	if(value == "#undefined")
	{
		return ; 
		//Debug_Message("Undefined Value"); 
	}
		
	if(!gCurrentObjContainerNode)
		return ;		
	if(gCurrentDataBackgroundColorArr[0] == 'SOLID')
	{
		gCurrentDataBackgroundColorArr[1] = value; 
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'linear-gradient')
	{
		if(attrName == 'BACKGROUND_GRADIENT_COL1')
			gCurrentDataBackgroundColorArr[2] = value;
		else if(attrName == 'BACKGROUND_GRADIENT_COL2')
			gCurrentDataBackgroundColorArr[4] = value;
		
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'radial-gradient')
	{
		if(attrName == 'BACKGROUND_GRADIENT_COL1')
			gCurrentDataBackgroundColorArr[2] = value;
		else if(attrName == 'BACKGROUND_GRADIENT_COL2')
			gCurrentDataBackgroundColorArr[4] = value;
		
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
	
	
	//UIH_ApplyStyleProperty(gCurrentObjContainerNode, "BACKGROUND_COLOR", value, false);	
	
}

function UIH_showLayoutInterface()
{
	$('.PROPERTY_INTERFACE').hide(); 
	WAL_hideWidget('layout_interface', false); 
	gObjectEditMode = 'LAYOUT_MODE';	
}
//rm please manipulate the ggShadowPropArr before callijg this function 
function UIH_applyShadow(Node, bStoreInList)
{
	// if data-shaowd is none then apply default values else load values from exisitng value 
	if(!Node)
		return ; 
	var nodeID = Node.getAttribute('id'); 
	var JQSel = "#"+nodeID;
	
	gObjCurrentStyleProperties['shadow-color']
	bFlag = Node.getAttribute('data-shadow');	
	if( gObjCurrentStyleProperties['shadow-color'] == 0 )
	{
		UIH_UpdateContainerProperty(nodeID, true, 'boxShadow', '',"", bStoreInList);
		return; 
	}
	//var attrval  = UIH_getArrayToAttrValue(Node, 'data-shadow', gShadowPropArr); 
	//UIH_UpdateContainerProperty(nodeID, false, 'data-shadow', attrval,"",bStoreInList);	
	
	
	var attrval = gObjCurrentStyleProperties['shadow-H'] + 'px ' + 
	gObjCurrentStyleProperties['shadow-V'] + 'px ' + 
	gObjCurrentStyleProperties['shadow-blur'] + 'px ' + 
	gObjCurrentStyleProperties['shadow-spread']+ 'px ' + 
	gObjCurrentStyleProperties['shadow-color']; 
	
	UIH_UpdateContainerProperty(nodeID, true, 'boxShadow', attrval,"",bStoreInList);
	
}
//this function will convert an aarray into a string and set it to the target attribute 
function UIH_getArrayToAttrValue(Node, attrName, arr)
{
	var attrval = ""; 
	attrval = UIH_getStringFromArray(arr, ", ");
	return attrval; 
	   
}
//this function generates string suitable for attribute value
function UIH_getAttrValueFromArray(arr, delimiter)
{
	var arrstr = ""; 
	var mydelimiter = delimiter; 
	for(i = 0 ;  i <  arr.length; i++)
	{
		if(i == arr.length-1)
			mydelimiter = ""; 
		
		arrstr += arr[i] + mydelimiter;		
	}
	return arrstr; 
}
function UIH_getStringFromArray(arr, delimiter)
{
	var arrstr = ""; 
	var mydelimiter = delimiter; 
	for(i = 0 ;  i <  arr.length; i++)
	{
		if(i == arr.length-1)
			mydelimiter = " "; 
		
		arrstr += '"' + arr[i] + '"' + mydelimiter + ' ';
		
	}
	return arrstr; 
	
}

function UIH_getArrayFromAttrValue(Node, attrName)
{
	var attrVal = Node.getAttribute(attrName); 
	var arrVal; 
	var str = 'arrVal = new Array(' + attrVal + ')';
    eval(str);
    return arrVal; 
}

function UIH_ColorWidgetOK(event)
{
	//get the color values and then call the update property for border 
	var colorval = WAL_getColorPickerValue('colorpickwidget'); 
	var attrType = WAL_getColorPickerAttributeName('colorpickwidget'); 	
	//UIH_ApplyStyleProperty(gCurrentObjContainerNode, attrType, colorval, true);
	var nodeID = WAL_getColorPickerRefID('colorpickwidget'); 
	var refBtnNode = document.getElementById(nodeID); 
	var nodeType = refBtnNode.getAttribute('type'); 
	
		
	if(gCurrentDataBackgroundColorArr[0] == 'SOLID')
	{
		gCurrentDataBackgroundColorArr[1] = colorval;		
		refBtnNode.style.backgroundColor = colorval;
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
		//UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, true);
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'linear-gradient')
	{
		if(attrType == 'BACKGROUND_GRADIENT_COL1')
			gCurrentDataBackgroundColorArr[2] = colorval;
		else if(attrType == 'BACKGROUND_GRADIENT_COL2')
			gCurrentDataBackgroundColorArr[4] = colorval;		
		refBtnNode.style.backgroundColor  = colorval		
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
		//UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, true);
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'radial-gradient')
	{
		if(attrType == 'BACKGROUND_GRADIENT_COL1')
			gCurrentDataBackgroundColorArr[2] = colorval;
		else if(attrType == 'BACKGROUND_GRADIENT_COL2')
			gCurrentDataBackgroundColorArr[4] = colorval;		
		refBtnNode.style.backgroundColor  = colorval		
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
		//UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, true);
	}
	
	
}

function UIH_ColorWidgetCANCEL(event)
{
	//get the color values and then call the update property for border 
	var colorval = WAL_getColorPickerValue('colorpickwidget');
	var attrType = WAL_getColorPickerAttributeName('colorpickwidget'); 	
	var nodeID = WAL_getColorPickerRefID('colorpickwidget'); 
	var refBtnNode = document.getElementById(nodeID); 
	
	if ( (attrType == 'ALL_BORDER_COLOR') && (gObjCurrentStyleProperties['border-color']) )
	{
		gCurrentObjContainerNode.firstElementChild.style.borderColor = gInitColorProp['border-color']; 
		
	}
	else if( (attrType == 'SHADOW_COLOR') && (gObjCurrentStyleProperties['shadow-color']) )
	{
		gObjCurrentStyleProperties['shadow-color'] = gInitColorProp['shadow-color']; 
		UIH_applyShadow(gCurrentObjContainerNode.firstElementChild);	
		
	}	
	else if (attrType == 'BACKGROUND_COLOR')
	{
		if(gCurrentDataBackgroundColorArr.length > 1)
		{
			if (gCurrentDataBackgroundColorArr[0] == 'SOLID')
			{		
				gCurrentDataBackgroundColorArr[1] = refBtnNode.style.backgroundColor; 
				UIH_UpdateObjectWithGradInfo(gCurrentObjectNode,gCurrentDataBackgroundColorArr , false);
			}					
		}	
	}
	else if (attrType == 'BACKGROUND_GRADIENT_COL1')
	{
		if(gCurrentDataBackgroundColorArr.length > 1)
		{
			
			if (gCurrentDataBackgroundColorArr[0] == 'linear-gradient')
			{			
				//get the color of the gradcolor1 button 
				gCurrentDataBackgroundColorArr[2] = refBtnNode.style.backgroundColor; 
				UIH_UpdateObjectWithGradInfo(gCurrentObjectNode,gCurrentDataBackgroundColorArr , false);
			}	
			if (gCurrentDataBackgroundColorArr[0] == 'radial-gradient')
			{			
				//get the color of the gradcolor1 button 
				gCurrentDataBackgroundColorArr[4] = refBtnNode.style.backgroundColor; 
				UIH_UpdateObjectWithGradInfo(gCurrentObjectNode,gCurrentDataBackgroundColorArr , false);
			}	
		}	
	}
	else if (attrType == 'BACKGROUND_GRADIENT_COL2')
	{
		if(gCurrentDataBackgroundColorArr.length > 1)
		{
			
			if (gCurrentDataBackgroundColorArr[0] == 'linear-gradient')
			{			
				//get the color of the gradcolor1 button 
				gCurrentDataBackgroundColorArr[2] = refBtnNode.style.backgroundColor; 
				UIH_UpdateObjectWithGradInfo(gCurrentObjectNode,gCurrentDataBackgroundColorArr , false);
			}	
			if (gCurrentDataBackgroundColorArr[0] == 'radial-gradient')
			{			
				//get the color of the gradcolor1 button 
				gCurrentDataBackgroundColorArr[4] = refBtnNode.style.backgroundColor; 
				UIH_UpdateObjectWithGradInfo(gCurrentObjectNode,gCurrentDataBackgroundColorArr , false);
			}	
		}	
	}
	
	
	//UIH_ApplyStyleProperty(gCurrentObjContainerNode, "ALL_BORDER_COLOR", colorval);	
}

function UIH_SlidedragStartHandler(left, top, currNode)
{
	
}
function UIH_SlidedragStopHandler(left, top, currNode)
{
	var nodeID = currNode.getAttribute('id'); 
	var curLeft, curTop; 
	curLeft = left + "px"; 
	curTop = top + "px"; 
	UIH_UpdateContainerProperty(nodeID, true, 'left', curLeft, gInitLeftPos,  true);
	UIH_UpdateContainerProperty(nodeID, true, 'top', curTop,   gInitTopPos,  true);	
	WAL_setNumberInputValue("lposIP", left); 
	WAL_setNumberInputValue("tposIP", top); 
}
function UIH_getFinalEditList(EditList, ObjID)
{
	var IDList = []; 
	var prevID = 0;
	var myEditList = []; 
	var listlength = EditList.length; 
	var IDval = 0; 
	var bFlag;
	var k = 0; 
	//iterate through the list and store the IDs into another array
	for(k = 1 ; k < listlength; k++)
	{
		IDval = EditList[k][0]; 
		if(IDval == prevID)
		{
			continue; 
		}			
		else
		{
			bFlag = UIH_IsEntryExistInList(IDval, IDList);
			if(bFlag == false)
			{
				IDList.push(IDval); 				
			}
		}
	}
		
	listlength = IDList.length; 
	var attrName, attrVal; 
	var Node; 
	// then for each ID get the corresponding attributes into another 
	for(k = 0 ; k <listlength; k++)
	{
		//List and then return 
		if(ObjID != 0)
		{
			if(ObjID != IDList[k] )
				continue; 
			Node = document.getElementById(IDList[k]);
		}			
		else
			Node = document.getElementById(IDList[k]);
		
		var JQSel = "#"+IDList[k]; 
		if( (true == $(JQSel).hasClass('OBJECT_CONTAINER')) || (true == $(JQSel).hasClass('SLIDE_CONTAINER')) )
		{
			Node.style.border = ''; 
		}
		else
		{
			attrName = 'data-shadow'; 
			attrVal = Node.getAttribute(attrName);
			myEditList.push([IDList[k], 'ATTRIBUTE', attrName, attrVal,"", 'APPLIED']); 
			
			attrName = 'data-backgroundgradcolor'; 
			attrVal = Node.getAttribute(attrName);
			myEditList.push([IDList[k], 'ATTRIBUTE', attrName, attrVal,"", 'APPLIED']); 			 
		}		
		
		attrName = 'style';		
		attrVal = Node.style.cssText; 
		myEditList.push([IDList[k], 'ATTRIBUTE', attrName, attrVal,"", 'APPLIED']); 
		
		attrName = 'data-effect'; 
		attrVal = Node.getAttribute(attrName);
		//if(attrVal)
		//{
			myEditList.push([IDList[k], 'ATTRIBUTE', attrName, attrVal,"", 'APPLIED']);
			//Debug_Message("ID="+IDList[k] + "data effect value ="+attrVal); 
		//}
			
	}	
	
	return myEditList; 
	
	
}
//gEditList = [["OBJECTID","OP_TYPE", "ATTRIBUTE", "CURRENT_VALUE", "PREVIOUS_VALUE", "STATUS"]];
function UIH_IsEntryExistInList(Entry, List)
{

	var length  = List.length;
	var bExist = false; 
	for(var i = 0 ; i < length; i++)
	{
		if(List[i] == Entry)
		{
			bExist  =  true; 
			break; 
		}
	}
	return bExist; 
}

function UIH_menu_load_background_image()
{
	WAL_showModalWindow(gImageDlg,"UIH_backgroundImageLoadOK", "" );	
}

function UIH_backgroundImageLoadOK()
{	
	if(!gCurrentObjContainerNode)
		return; 
	var contentNode; 
	var bFlag =  false;	
	var divNodeID = gCurrentObjContainerNode.getAttribute('id'); 
	var JQSel = "#" + divNodeID;	
	
	if( (true == $(JQSel).hasClass('OBJECT_CONTAINER')) || (true == $(JQSel).hasClass('SLIDE_CONTAINER')) )
	{
		bFlag =  true; 
		contentNode = gCurrentObjContainerNode.firstElementChild;	
	}
	
	if(bFlag != true)
		return ; 
	
	//now get the content node
	//always save the Object data before imaging process starts 
	UIH_SaveObjectData(false);
	var currNodeID = contentNode.getAttribute('id');
	var node ;			
	if (bFlag == true )
	{
		node = document.getElementById("resID");
		node.setAttribute('value',currNodeID ); 		
		node = document.getElementById("resType");
		node.setAttribute('value','BKGRND_IMAGE');		
			
		node = document.getElementById("imgFname");
		var imgfname = node.getAttribute('value');
		imgfname = gProjectDataPath + "/" + imgfname; 
		var attrval = "url(\'" + imgfname + "\')";
		//       '\"Lucida Console\", Monaco, monospace'
		//var attrval = 'url("' + imgfname +  '")';
		UIH_UpdateContainerProperty(currNodeID, false, "data-backgroundgradcolor", "", "", true);		
		UIH_UpdateContainerProperty(currNodeID, true, 'backgroundImage', attrval, "", true);
		UIH_UpdateContainerProperty(currNodeID, true, 'backgroundRepeat', 'no-repeat', "", true);
		UIH_UpdateContainerProperty(currNodeID, true, 'backgroundOrigin', 'border-box', "", true);
		//Debug_Message("Inside UIH_backgroundImageLoadOK= "+ attrval);
		gEditList = UIH_getFinalEditList(gEditList, 0); 
		DH_SaveEditList(gEditList);	
		
		var retval = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,currNodeID); 
		document.getElementById("imgForm").submit();		
	}
}

function UIH_RemoveBackgroundImage()
{
	if(!gCurrentObjContainerNode)
		return ; 
	var currNodeID = gCurrentObjContainerNode.firstElementChild.getAttribute('id'); 
	UIH_UpdateContainerProperty(currNodeID, true, 'backgroundImage', "", "", true);
}


function UIH_getCurrentStyleProperties(Node)
{
	var Param; 
	if(Node.style.borderStyle)
		gObjCurrentStyleProperties['border-style'] 	= Node.style.borderStyle;
	else
		gObjCurrentStyleProperties['border-style'] = 'none';
	gObjCurrentStyleProperties['border-width'] 	= Node.style.borderWidth; 
	gObjCurrentStyleProperties['border-width'] = gObjCurrentStyleProperties['border-width'].substring(0,gObjCurrentStyleProperties['border-width'].length - 2);	
	gObjCurrentStyleProperties['border-color'] 	= Node.style.borderColor; 
	
	if(Node.style.backgroundImage)
	{
		gObjCurrentStyleProperties['background-image'] 		= Node.style.backgroundImage;	
	}
	else
		gObjCurrentStyleProperties['background-image'] = 0 ; 
	
	if(Node.style.backgroundRepeat)
	{
		gObjCurrentStyleProperties['background-repeat'] = Node.style.backgroundRepeat;	
	}
	else
		gObjCurrentStyleProperties['background-repeat'] = 'none' ; 
	
	if(Node.style.backgroundPosition)
		gObjCurrentStyleProperties['background-position'] = Node.style.backgroundPosition; 
	else
		gObjCurrentStyleProperties['background-position'] = 'left top'; 
	
	Param = Node.style.backgroundSize; 
	if((Param) && (Param.length > 1) )
	{
		ParamArr = Param.split("%"); 	
		gObjCurrentStyleProperties['background-size'] = ParamArr[0]; 
	}
	else
	{
		gObjCurrentStyleProperties['background-size'] = 100; 
	}
	
	if(Node.style.backgroundOrigin)
		gObjCurrentStyleProperties['background-origin'] = Node.style.backgroundOrigin;
	else
		gObjCurrentStyleProperties['background-origin'] = 0;
	
	if(Node.style.backgroundColor)		
	{
		gObjCurrentStyleProperties['background-color'] = Node.style.backgroundColor; 
	}
	else
	{
		gObjCurrentStyleProperties['background-color'] = 0; 
	}

	var Param = Node.style.boxShadow; 
	if( (Param) && (Param.length > 1) )
	{
		var ParamArr = Param.split(" "); 
		var length = ParamArr.length; 
		
		gObjCurrentStyleProperties['shadow-H'] 		= ParamArr[0]; 
		gObjCurrentStyleProperties['shadow-H']      = gObjCurrentStyleProperties['shadow-H'].substring(0,gObjCurrentStyleProperties['shadow-H'].length - 2);
		gObjCurrentStyleProperties['shadow-V'] 		= ParamArr[1];
		gObjCurrentStyleProperties['shadow-V']      = gObjCurrentStyleProperties['shadow-V'].substring(0,gObjCurrentStyleProperties['shadow-V'].length - 2);
		gObjCurrentStyleProperties['shadow-blur'] 	= ParamArr[2];
		gObjCurrentStyleProperties['shadow-blur']   = gObjCurrentStyleProperties['shadow-blur'].substring(0,gObjCurrentStyleProperties['shadow-blur'].length - 2);
		gObjCurrentStyleProperties['shadow-spread'] = ParamArr[3];
		gObjCurrentStyleProperties['shadow-spread'] = gObjCurrentStyleProperties['shadow-spread'].substring(0,gObjCurrentStyleProperties['shadow-spread'].length - 2);
		var remaining = length -  4; 
		ParamArr = ParamArr.slice(4,length ); 
		gObjCurrentStyleProperties['shadow-color'] = ParamArr.join(""); 
	}
	else
	{
		gObjCurrentStyleProperties['shadow-H'] = 0 ; 
		gObjCurrentStyleProperties['shadow-V'] = 0; 
		gObjCurrentStyleProperties['shadow-blur'] = 0; 
		gObjCurrentStyleProperties['shadow-spread'] = 0; 
		gObjCurrentStyleProperties['shadow-color'] = 0; 		
	}
	
	Param = Node.style.borderRadius; 
	if((Param) && (Param.length > 1) )
	{
		ParamArr = Param.split(" "); 	
		gObjCurrentStyleProperties['border-radius'] 	= ParamArr[0]; 
		gObjCurrentStyleProperties['border-radius'] = gObjCurrentStyleProperties['border-radius'].substring(0,gObjCurrentStyleProperties['border-radius'].length - 2);
	}
	else
		gObjCurrentStyleProperties['border-radius'] = 0; 
	
	Param = Node.style.opacity; 
	if((Param) && (Param.length > 1) )
	{
		ParamArr = Param.split("%"); 	
		ParamArr[0] = parseFloat(ParamArr[0]); 
		ParamArr[0] = 100.0 * ParamArr[0]; 
		gObjCurrentStyleProperties['opacity'] = Math.round(ParamArr[0]);
		//Debug_Message("Opacity = " + gObjCurrentStyleProperties['opacity']); 
	}
	else
	{
		gObjCurrentStyleProperties['opacity'] = 100; 
	}
	
	//gObjCurrentStyleProperties['background-size'] = gObjCurrentStyleProperties['background-size'].substring(0,gObjCurrentStyleProperties['background-size'].length - 1);
	
	//gObjCurrentStyleProperties['background-size'] = 0; 
	
}

function UIH_RefreshObject(ObjectID)
{
	//will fetch the DIV Object data from head end	
	var retval  = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,ObjectID);
	if(retval != 'OK')		
		return 
		
	//will be able to update in the local DOM 
	var respstr = DH_getCurrentEditableObjectData(); 
	if(!respstr)
		return ; 
	
	var divNode = document.getElementById("DIV_" + ObjectID); 
	if(!divNode)
		return ; 
	//UIH_DeInitializeObjectData(ObjectID);
	UIH_DeInitializePage();
	var dataNode = document.getElementById("DIV_DATA_CONTAINER"); 
	dataNode.removeChild(divNode); 
	dataNode.innerHTML += respstr; 
	
	//UIH_InitializeObjectData(ObjectID);
	UIH_InitializePageData(); 
/*	var JQSel = "#DIV_DATA_CONTAINER";
	var htmlStr = $(JQSel).html();
	htmlStr += respstr; 
	$(JQSel).html(htmlStr);
	*/
	
	return ; 
	//dataNode.innerHTML += respstr; 
}

function UIH_HTMLObjDblClick(event)
{
	var node = event.currentTarget;
	var nodeID = node.getAttribute('id'); 	
	if(nodeID == 'DIV_DATA_CONTAINER')
		return ; 
		
	UIH_showHTMLEditInterface(true); 
	//if(gObjectEditMode != 'TEXT_EDIT_MODE')
	//	UIH_showTextEditInterface(true); 
	
	event.stopImmediatePropagation(); 
}

function UIH_showTextEditInterface(bShow)
{
	if(!gCurrentObjContainerNode)
		return ;
	var htmlNode = gCurrentObjContainerNode.firstElementChild;
	var objID = htmlNode.getAttribute('id');
	var JQSel = '#'+objID; 
	if( false == $(JQSel).hasClass('HTMLOBJECT') )
	{
		Debug_Message("Select an HTML Object to Edit"); 
		return; 
	}
	
	if(bShow ==  true)
	{		 
		WAL_hideWidget('texteditinterface', false);	
		gObjectEditMode = 'TEXT_EDIT_MODE'; 
		TE_InitializeTextObjectForEdit(); 
		
	}
	else
	{ 
		//WAL_hideWidget('texteditinterface', true); 
		var currObjID = gCurrentEditableDIVObjectID.substring(4); 
		TE_CleanupTextObject(currObjID); 
		UIH_UpdateHTMLTextInTree(currObjID);
		
	}
	
}

function UIH_UpdateHTMLObject(divContainerNode, objType, textValue)
{
		var divID 	= divContainerNode.getAttribute('id');  
		var ObjID  	= divID.substring(4); 	
		TE_AddHTMLObject(divID, ObjID, objType, textValue);	
	
	
}

function UIH_AddNewHTMLObject(objectType)
{	
	var textvalue = ""; 
	var inputObjType = objectType.toUpperCase();	
	if ( (gCurrentEditableDIVObjectID) && (gCurrentEditableObjectID ) )
	{
		//only update the HTML Object with new type and old text 
		var objNode = gCurrentObjContainerNode.firstElementChild; 
		textvalue = objNode.textContent; 
		
		UIH_UpdateHTMLObject(gCurrentObjContainerNode, inputObjType, textvalue);
		return ; 
	}
	//first set appropriate tree item selection here 
	var currTreeItem = WAL_getTreeItemSelection(gTreeNodeID, true);
	var nodeType = currTreeItem.element.getAttribute('type'); 
	var slideID, layerID; 
	if( (nodeType != 'SCENE') && (nodeType != 'LAYER') )
	{
		Debug_Message('HTML cannot be inserted for this node');
		return ; 
	}
	if( (inputObjType == 'VIDEO') || (inputObjType == 'AUDIO') )
	{
		if(nodeType == 'SCENE')
		{
			slideID = currTreeItem.element.id; 
			UIH_AddObject('LAYER'); 
			currTreeItem = WAL_getTreeItemSelection(gTreeNodeID, true);
			layerID = currTreeItem.element.id; 
		}
	}
	
	var bLayerSelection =false; 
	var itemLevel = currTreeItem.level;
	var currItemNode =currTreeItem.element ;
	var attrVal; 
	
	if(itemLevel == 1)
	{
		while(bLayerSelection == false)
		{
			currTreeItem = currTreeItem.nextItem; 
			itemLevel = currTreeItem.level; 
			if(itemLevel ==  2)
			{
				currItemNode = currTreeItem.element; 
				attrVal = currItemNode.getAttribute('data-origin'); //="reference"
				if( (inputObjType == 'VIDEO') || (inputObjType == 'AUDIO'))
				{
					if ( (attrVal == 'original') && (currTreeItem.id == 'TM_BASELAYER') )
						bLayerSelection =  true; 					
					
				}
				else
				{
					if ( (attrVal == 'original') && (currTreeItem.id != 'TM_BASELAYER') )
						bLayerSelection =  true; 
					
				}
				
			}
		}		
	}
	var parentID = currItemNode.id; 
	WAL_setTreeItemSelection(gTreeNodeID, parentID);
	currTreeItem = WAL_getTreeItem(gTreeNodeID, parentID ); 
	var mytype = currTreeItem.element.getAttribute('type');
	if(mytype == 'LAYER')
	{
		layerID = currTreeItem.id; 
		slideID = currTreeItem.parentId;		
	}	
	UIH_DeInitializePage(); 
	UIH_AddObject(inputObjType); 		
    var ObjID = gCurrentTreeNode.getAttribute('dataid');
    var divID = 'DIV_'+ObjID; 	
	var divNode = document.getElementById(divID);	
	if( (inputObjType == 'VIDEO') ||(inputObjType == 'AUDIO') )
	{
		DH_setTreeItemAttribute(layerID, 'data-AVObjID', ObjID); 
		DH_setTreeItemAttribute(slideID, 'data-AVObjID', ObjID); 
	}
	if(inputObjType == 'SLIDE TITLE')
	{
		UIH_AlignWithContainer(divID, 'TOP');
		UIH_AlignWithContainer(divID, 'HOR_CENTER');
	}
	else if(inputObjType == 'SLIDE NUMBER')
	{
		UIH_AlignWithContainer(divID, 'BOTTOM');
		UIH_AlignWithContainer(divID, 'HOR_CENTER');
		
	}
	else if(inputObjType == 'FOOTER') 
	{
		UIH_AlignWithContainer(divID, 'BOTTOM');
		UIH_AlignWithContainer(divID, 'LEFT');
	}
	gEditList = UIH_getFinalEditList(gEditList, 0);	
    DH_SaveEditList(gEditList); 
	//TE_AddHTMLObject(divID, ObjID, inputObjType, textvalue);
	//updating tree item text
	//var itemText = WAL_getTreeItemText(gTreeNodeID, "TM_"+ObjID);
	//itemText = itemText + '(' + divNode.getAttribute('data-type') + ')';    
	//itemText = divNode.getAttribute('data-type') + ':';
	//WAL_setTreeItemText(gTreeNodeID, "TM_"+ObjID, itemText); 
	
	//now change the selection to the slide Layer 
	var treeItem = WAL_getTreeItemSelection(gTreeNodeID, true);
	var currSel = treeItem.element;
	var type = currSel.getAttribute('type'); 
	while(type != 'SCENE')
	{
		treeItem = treeItem.prevItem; 
		if(treeItem.level == 1)
		{
			currSel = treeItem.element; 
			type =  currSel.getAttribute('type'); 
			if(type != 'SCENE')
			{
				Debug_Message("Slide Element not found")
				return ; 
			}
		}
	}	
	var itemID = currSel.getAttribute('id'); 
	WAL_setTreeItemSelection(gTreeNodeID, itemID);
		
	
	//UIH_AddtoEditedObjectList(ObjID);
	UIH_InitializePageData(); 	
	
	
	
	
}

function UIH_AddtoEditedObjectList(ObjectID)
{
	//first find if the ID already exist in which case don't add 
	var objeditlistlength = gEditedObjectList.length; 
	for(var k = 0 ; k < objeditlistlength; k++){
		var itemID = gEditedObjectList[k]; 
		if(itemID == ObjectID)
			return ; 
	}
	gEditedObjectList.push(ObjectID); 
}
function UIH_DeleteEditedObjectList()
{
	DH_DeleteFromEditList(gEditedObjectList, 0);
}

function UIH_SaveObjectData(bAsync)
{
	for(var i=0; i < gEditedObjectList.length; i++)
	{
		TE_SaveObjectData(gEditedObjectList[i], bAsync); 
	}
	UIH_DeleteEditedObjectList(); 
}

function UIH_UpdateHTMLTextInTree(objectID)
{
	//trial code	
	//get the object text summary 
	var objNode = document.getElementById(objectID); 
	var divNode = objNode.parentNode; 
	var objtype = divNode.getAttribute('data-type'); 	
	
	var objtext = objNode.textContent; 
	objtext =  objtext.substring(0, gTextSummaryLength); 	
	//get the Item as well as the itemNode 
	var itemText = WAL_getTreeItemText(gTreeNodeID, "TM_"+objectID); 
	var objType = objNode.parentNode.getAttribute('data-type');
	//get the span node from item node 
	var strArr = itemText.split(':'); 
	strArr[0] = objType; 
	//itemText = strArr[0] + ':(<b><i>' + objtext + '</i></b>)'; 	
	itemText = strArr[0] + ':' + objtext; 	
	//trial code 	
	DH_UpdateTreeNodeText("TM_"+objectID, itemText, true); 
	WAL_setTreeItemText(gTreeNodeID, "TM_"+objectID, itemText);
	
	if(objtype == 'SLIDE TITLE')
	{
		var objElem = WAL_getTreeItem(gTreeNodeID, 'TM_'+objNode.id);
		var slideElem = WAL_getTreeItem(gTreeNodeID, objElem.parentId);
		slideElem = WAL_getTreeItem(gTreeNodeID, slideElem.parentId);
		var slideNode = document.getElementById(slideElem.parentId); 
		itemText = "Slide:- " + objtext; 
		var slidedur = slideNode.getAttribute('data-duration');
		var durationStr = ""; 
		if(slidedur)
			durationStr = ":(Duration=" + slideNode.getAttribute('data-duration') + ")";
		itemText += durationStr; 
		WAL_setTreeItemText(gTreeNodeID, slideElem.id, itemText);
		DH_UpdateTreeNodeText(slideElem.id, itemText, true); 
		//return ; 
	}
	//manipulate the string and rest in peace 
}

function UIH_ToggleTreeItemExpand()
{
	if(gTreeItemExpanded == true)
	{
		WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, true);
		gTreeItemExpanded = false; 
	}		
	else
	{
		//WAL_expandAllTreeItems(gTreeNodeID, true);
		WAL_expandTreeItem(gTreeNodeID,gCurrentPageID, false);
		gTreeItemExpanded = true; 
	}
		
}

function UIH_AlignWithContainer(NodeID, alignType)
{

	//get the container co-ordintes and dimension and populate the list
	var contSel = "#ALL_DATA_CONTAINER"; 
	var contWidth =$(contSel).width(); 
	var contHeight = $(contSel).height(); 
	
	//then get the target node co-ordinates and dimension
	var tgtSel = "#"+NodeID; 
	var Pos = $(tgtSel).position();
	var leftpos = Pos.left; 
	var toppos = Pos.top; 
	var width = $(tgtSel).width(); 
	var height = $(tgtSel).height(); 
	var tgtNode = document.getElementById(NodeID); 
	
	switch(alignType)
	{
		case 'LEFT':
			UIH_ApplySpatialValues(tgtNode, 0, 'LEFT'); 
			break;
		case 'TOP':
			UIH_ApplySpatialValues(tgtNode, 0, 'TOP');
			break;
		case 'RIGHT':
			var rightPos = contWidth - width;  
			UIH_ApplySpatialValues(tgtNode,rightPos, 'LEFT');
			break;
		case 'BOTTOM':
			var bottomPos = contHeight - height;  
			UIH_ApplySpatialValues(tgtNode,bottomPos, 'TOP');
			break;
		case 'HOR_CENTER':
			var leftcenter = contWidth/2;
			leftcenter = leftcenter - width/2; 
			UIH_ApplySpatialValues(tgtNode,leftcenter, 'LEFT');
			break; 
		case 'VERT_CENTER':
			var topcenter = contHeight/2;
			topcenter = topcenter - height/2; 
			UIH_ApplySpatialValues(tgtNode,topcenter, 'TOP');
			break;
		
		default:
			break; 
	}
	
}

function UIH_UpdateSlideIndexInfo()
{
	
	UIH_setTopItemSelInTree();	
	var numSlides = UIH_GetNumberofSlides(gCurrentPageID); 
	
	var rootItem = WAL_getTreeItemSelection(gTreeNodeID, true);
	if(!rootItem)
		return ;
	var slideItem = rootItem.nextItem;
	
	if( (!slideItem) || (slideItem.level != 1) )
		return ; 
	
	var slideNode;// = slideItem.element;
	
	var slideIndex = 0;
	var bEnd =  false; 
	var nodeID; 
	var type; 
	var itemText; 
	var nodename;
	var siblingNode = slideItem.element; 
	slideNode = siblingNode; 
	do{
		 
		//slideNode = siblingNode; 
		type = slideNode.getAttribute('type');
		if(type != 'SCENE')
			return; 
		slideIndex++; 
		slideNode.setAttribute('data-slideorder', slideIndex); 
		nodeID = slideNode.getAttribute('id'); 
		//itemText = WAL_getTreeItemText(gTreeNodeID, nodeID);
		//itemText = "Slide:" + slideIndex;
		UIH_UpdateSlideTitleText(nodeID); 
		//WAL_setTreeItemText(gTreeNodeID, nodeID, itemText); 
		UIH_UpdateSlideFooter(nodeID); 
		
		siblingNode = siblingNode.nextSibling; 
		if(!siblingNode)
			break; 
		nodename = siblingNode.nodeName.toUpperCase(); 
		if(nodename != 'LI')
		{
			
			var childList = siblingNode.childNodes; 
			for(var k =0; k < childList.length; k++)
			{
				slideNode = childList.item(k); 
				nodename = slideNode.nodeName.toUpperCase(); 
				if(nodename == 'LI')
				{
					break; 
				}					
				else
				{
					slideNode = 0; 
				}
					
			}
		}
		else
			slideNode =  siblingNode; 
			
		if(!slideNode)
			bEnd = true;		
	}while(bEnd == false); 
	
	UIH_menu_save(); 
}

function UIH_UpdateSlideFooter(sceneID)
{

	var JQSel = ('#'+sceneID);
	var slidenumber = $(JQSel).attr('data-slideorder');
	if(!slidenumber)
		return ; 
	
	//WAL_setTreeItemSelection(gTreeNodeID, sceneID); 
	//WAL_expandTreeItem(gTreeNodeID, sceneID, true);
	var currTreeItem = WAL_getTreeItem(gTreeNodeID, sceneID); //WAL_getTreeItemSelection(gTreeNodeID, true);
	if(!currTreeItem)
		return ; 	
	var itemLevel = currTreeItem.level; 	
	var bLayerSelection = false; 
	var bSlideFooterSel = false; 
	var ObjNode; 
	var ObjID; 
	if(itemLevel == 1)
	{
		while(bLayerSelection == false)
		{
			currTreeItem = currTreeItem.nextItem; 
			itemLevel = currTreeItem.level; 
			if(itemLevel ==  2)
			{
				currItemNode = currTreeItem.element; 
				attrVal = currItemNode.getAttribute('data-origin'); //="reference"
				if ( (attrVal == 'original') && (currTreeItem.id != 'TM_BASELAYER') )
					bLayerSelection =  true; 		
			}
		}
		
		while(bSlideFooterSel == false)
		{
			currTreeItem = currTreeItem.nextItem; 
			if(!currTreeItem)
				break; 
			itemLevel = currTreeItem.level; 
			if(itemLevel == 3)
			{
				currItemNode = currTreeItem.element; 
				ObjID = currItemNode.getAttribute('dataid');
				var ObjContNode = document.getElementById('DIV_'+ObjID); 
				var type = ObjContNode.getAttribute('data-type'); 
				
				if(type == 'SLIDE NUMBER')
				{
					ObjNode = document.getElementById(ObjID); 	
					ObjNode = ObjNode.firstElementChild; 
					ObjNode.innerHTML = slidenumber; 
					bSlideFooterSel =  true; 
					UIH_AddtoEditedObjectList(ObjID); 
					UIH_AlignWithContainer("DIV_"+ObjID, 'BOTTOM');
					UIH_AlignWithContainer("DIV_"+ObjID, 'HOR_CENTER');
					//Debug_Message("Updating Slide footer");
				}
			}
		}
	}
}

function UIH_CreateGradientInterface()
{
	
	WAL_createRadioButton('nocolorbtn', 'OnRadioValueChange', '120', '20', false, true);
	WAL_createRadioButton('solidcolorbtn', 'OnRadioValueChange', '120', '20', false, false);
	
    WAL_createRadioButton('lingradcolorbtn', 'OnRadioValueChange', '120', '20', false, false);
    WAL_createRadioButton('radgradcolorbtn', 'OnRadioValueChange', '120', '20', false, false);

    WAL_createCheckBox('lgrepeat', 'OnCheckValueChange', '50', '20' , '13', false, false);
    WAL_createCheckBox('rgrepeat', 'OnCheckValueChange', '50', '20' , '13', false, false);           
    
    WAL_createSlider('angleslider', '220px', '15px', false, 0,360,1, 90, true, true, 'OnAngleSliderChange', false, "");
   // WAL_createSlider(ID, Width, Height, bDiscrete, MinValue, MaxValue, Step,tickFreq, bShowTicks, bButtonShow ,HandlerSliderChange) {
               
    WAL_createDropdownList("rgOriginDDL", '100', '20', false, gRGOriginValue, "OnGradDDLHandler", '110');              
    WAL_createDropdownList("rgShapeDDL", '100', '20', false, gRGShapeValue, "OnGradDDLHandler", '50');               
    WAL_createDropdownList("rgSizeDDL", '140', '20', false, gRGSizeValue, "OnGradDDLHandler", '110');
    
    //color buttons
    var colbtnnode; 
   
    WAL_createSlider('colstopslider1', '130px', '15px', false, 0,100,1, 25, true, false, 'OnColor1StopSliderChange', false, "");
    colbtnnode = document.getElementById('gradcolor1'); 
    colbtnnode.style.opacity = '0.5';
    
    
    WAL_createSlider('colstopslider2', '130px', '15px', false, 0,100,1, 25, true, false, 'OnColor2StopSliderChange', false,"");
    colbtnnode = document.getElementById('gradcolor2'); 
    colbtnnode.style.opacity = '0.5';  
    
    //set the right state 
    WAL_disableWidget('angleslider', 'data-jqxSlider', false, true);
    WAL_disableWidget('lgrepeat', 'data-jqxCheckBox', false, true);
    WAL_disableWidget('rgrepeat', 'data-jqxCheckBox', false, true);
	WAL_disableWidget('rgOriginDDL', 'data-jqxDropDownList', false, true);
	WAL_disableWidget('rgShapeDDL', 'data-jqxDropDownList', false, true);
	WAL_disableWidget('rgSizeDDL', 'data-jqxDropDownList', false, true);
	   
	   var JQSel; 
	    JQSel = "#"+'gradcolor1';
		$(JQSel).attr('disabled', 'disabled'); 
		WAL_disableWidget('colstopslider1', 'data-jqxSlider', false, true);  
		
		JQSel = "#"+'gradcolor2';
		$(JQSel).attr('disabled', 'disabled'); 
		WAL_disableWidget('colstopslider2', 'data-jqxSlider', false, true);		
		
		WAL_createWindow('gradientwindow',"Gradient Properties", true, '282', '450', false, true, false, false, false, "", 'okbtn', 'cancelbtn');
		
}

function UIH_GradientOKHandler()
{
	gbShowGradWindow =  false; 
	var attrval; 
	
	//now wrtie into the attribute value of the object
	if(gCurrentDataBackgroundColorArr.length > 1)
	{   
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, true); 
		/*if(gCurrentDataBackgroundColorArr[0]== 'SOLID')
		{
			UIH_UpdateContainerProperty(gCurrentObjectNode.id, true, 'backgroundImage', "", "", true);
		}			
		else if(gCurrentDataBackgroundColorArr[0] == 'NO_COLOR')
		{
			UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, true);
			return ; 
		}
		*/
		
		
		    
	}
	
}


function UIH_GradientCANCELHandler()
{
	gbShowGradWindow =  false; 
	var objID = gCurrentObjContainerNode.firstElementChild.id; 
	if(gInitDataBackgroundGradColorArr.length > 1)
	{
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, "BACKGROUND_COLOR", "", false); 
		UIH_ApplyStyleProperty(gCurrentObjContainerNode, "BACKGROUND_GRADIENT", "", false); 
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gInitDataBackgroundGradColorArr, false); 
	}
	else
	{
		if(gCurrentDataBackgroundColorArr.length > 1)
		{
			if(gCurrentDataBackgroundColorArr[0]!= 'SOLID')
			{
				gCurrentObjectNode.style.backgroundImage = 0; 
			}
			else
				gCurrentObjectNode.style.backgroundColor = 0; 
		}
		gCurrentObjectNode.removeAttribute('data-backgroundgradcolor');
	}
	
	
}


function OnRadioValueChange(event)
{
	var state = event.args.checked; 
	var radionode = event.target; 
	var radioID = event.target.id;
	var JQSel;
	var node; 
	var UINode; 
	
	
	if(radioID == 'lingradcolorbtn')
	{	
		if(state == true)
		{			
			WAL_disableWidget('angleslider', 'data-jqxSlider', false, false);
			WAL_disableWidget('lgrepeat', 'data-jqxCheckBox', false, false);			
			UIH_EnableColors(true); 
			if(gCurrentDataBackgroundColorArr[0] != 'linear-gradient')
			{
				//gCurrentDataBackgroundColorArr = 0; 
				//gCurrentDataBackgroundColorArr =  new Array(6);
				if(gCurrentDataBackgroundColorArr[0] == 'SOLID')
					gCurrentDataBackgroundColorArr[2] = gCurrentDataBackgroundColorArr[1];
				else if(gCurrentDataBackgroundColorArr[0] == 'NO_COLOR')
					gCurrentDataBackgroundColorArr[2] = DEFAULT_COLOR_ARRAY[0]; 
				
				gCurrentDataBackgroundColorArr[0] = 'linear-gradient'; 
				gCurrentDataBackgroundColorArr[1] = 0; 					
				gCurrentDataBackgroundColorArr[3] = 5 ; 
				//gCurrentDataBackgroundColorArr[4] = DEFAULT_COLOR_ARRAY[1];
				gCurrentDataBackgroundColorArr[5] = 90 ;			
			}
			//now updating the UI State		
			WAL_setSliderValue('angleslider', gCurrentDataBackgroundColorArr[1]); 
			UINode = document.getElementById('gradcolor1'); 		
			UINode.style.backgroundColor = gCurrentDataBackgroundColorArr[2];
			WAL_setSliderValue('colstopslider1', gCurrentDataBackgroundColorArr[3]); 
			
			UINode = document.getElementById('gradcolor2'); 
			UINode.style.backgroundColor = gCurrentDataBackgroundColorArr[4]; 
			WAL_setSliderValue('colstopslider2', gCurrentDataBackgroundColorArr[5]);
			
			
		}
		else
		{			
			WAL_disableWidget('angleslider', 'data-jqxSlider', false, true);
			WAL_disableWidget('lgrepeat', 'data-jqxCheckBox', false, true);
			UIH_EnableColors(false);
		}
	}
	else if(radioID == 'radgradcolorbtn')
	{				
		if(state == true)
		{
			WAL_disableWidget('rgrepeat', 'data-jqxCheckBox', false, false);
			WAL_disableWidget('rgOriginDDL', 'data-jqxDropDownList', false, false);
			WAL_disableWidget('rgShapeDDL', 'data-jqxDropDownList', false, false);
			WAL_disableWidget('rgSizeDDL', 'data-jqxDropDownList', false, false);
			UIH_EnableColors(true); 
			if(gCurrentDataBackgroundColorArr[0] != 'radial-gradient')
			{
				if(gCurrentDataBackgroundColorArr[0] == 'SOLID')
					gCurrentDataBackgroundColorArr[2] = gCurrentDataBackgroundColorArr[1];
				else if(gCurrentDataBackgroundColorArr[0] == 'NO_COLOR')
					gCurrentDataBackgroundColorArr[2] = DEFAULT_COLOR_ARRAY[0]; 
				
				gCurrentDataBackgroundColorArr[0] = 'radial-gradient'; 				
				gCurrentDataBackgroundColorArr[1] = 'center'; 
				//gCurrentDataBackgroundColorArr[2] = DEFAULT_COLOR_ARRAY[0];
				gCurrentDataBackgroundColorArr[3] = 10 ; 
				//gCurrentDataBackgroundColorArr[4] = DEFAULT_COLOR_ARRAY[1];
				gCurrentDataBackgroundColorArr[5] = 90 ;
				gCurrentDataBackgroundColorArr[6] = 'circle' ;
				gCurrentDataBackgroundColorArr[7] = 'farthest-corner'; 
				
			}
			//now updating the UI State	
			var itemindex;
			itemindex = UIH_GetDDLSourceItemIndex(gRGOriginValue, gCurrentDataBackgroundColorArr[1]);
			WAL_SetItemInDropDownList('rgOriginDDL', itemindex); 
			itemindex = UIH_GetDDLSourceItemIndex(gRGShapeValue, gCurrentDataBackgroundColorArr[6]);
			WAL_SetItemInDropDownList('rgShapeDDL', itemindex); 
			itemindex = UIH_GetDDLSourceItemIndex(gRGSizeValue, gCurrentDataBackgroundColorArr[7]);
			WAL_SetItemInDropDownList('rgSizeDDL', itemindex); 			
			
			
			UINode = document.getElementById('gradcolor1'); 
			 
			UINode.style.backgroundColor = gCurrentDataBackgroundColorArr[2];
			var slideval  = gCurrentDataBackgroundColorArr[3];
			//Debug_Message("PRev Arr[3]=" + gCurrentDataBackgroundColorArr[3]);
			WAL_setSliderValue('colstopslider1', slideval); 
			//Debug_Message("Current Arr[3]=" + gCurrentDataBackgroundColorArr[3]);
			
			UINode = document.getElementById('gradcolor2'); 
			UINode.style.backgroundColor = gCurrentDataBackgroundColorArr[4]; 
			WAL_setSliderValue('colstopslider2', gCurrentDataBackgroundColorArr[5]);
			//Debug_Message("Current Arr[3]=" + gCurrentDataBackgroundColorArr[3]);
			//Debug_Message("Current Arr[5]=" + gCurrentDataBackgroundColorArr[5]);
		}
		else
		{
			WAL_disableWidget('rgrepeat', 'data-jqxCheckBox', false, true);
			WAL_disableWidget('rgOriginDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgShapeDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgSizeDDL', 'data-jqxDropDownList', false, true);
			UIH_EnableColors(false); 
		}
	}
	else if(radioID == 'solidcolorbtn')
	{
		node = document.getElementById('fillcolorbtn');
		
		if(state == true)
		{
			JQSel = "#"+'fillcolorbtn';
			$(JQSel).removeAttr('disabled');
			node.style.opacity = '1.0'; 
			if(gCurrentDataBackgroundColorArr[0] != 'SOLID')
			{
				if ( (gCurrentDataBackgroundColorArr[0]== 'linear-gradient') || (gCurrentDataBackgroundColorArr[0]== 'radial-gradient') )
					
				{
					gCurrentDataBackgroundColorArr[1] = gCurrentDataBackgroundColorArr[2];
					
				}
					
				else if(gCurrentDataBackgroundColorArr[0] == 'NO_COLOR')
				{
					gCurrentDataBackgroundColorArr[1] = DEFAULT_COLOR_ARRAY[0];
				}				
				gCurrentDataBackgroundColorArr[0] = 'SOLID'; 
					
			}			
			node.style.backgroundColor = gCurrentDataBackgroundColorArr[1];
			if ( (gInitDataBackgroundGradColorArr.length > 1) && (gInitDataBackgroundGradColorArr[0] !='SOLID') )
			
				if(gInitDataBackgroundGradColorArr[0] != 'NO_COLOR')
					gCurrentObjectNode.style.backgroundImage = 0; 
		}
		else
		{
			JQSel = "#"+'fillcolorbtn';
			$(JQSel).attr('disabled', 'disabled');
			
			node.style.opacity = '0.5'; 	
			
			//gCurrentDataBackgroundColorArr[2] = gCurrentDataBackgroundColorArr[1]; 
			WAL_disableWidget('rgrepeat', 'data-jqxCheckBox', false, true);
			WAL_disableWidget('rgOriginDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgShapeDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgSizeDDL', 'data-jqxDropDownList', false, true);
			UIH_EnableColors(false); 			
		}			
		
	}
	else if(radioID == 'nocolorbtn')
	{
		if(state ==  true)
		{
			node = document.getElementById('fillcolorbtn');
			JQSel = "#"+'fillcolorbtn';
			$(JQSel).attr('disabled', 'disabled');
			node.style.opacity = '0.5'; 
			
			WAL_disableWidget('rgrepeat', 'data-jqxCheckBox', false, true);
			WAL_disableWidget('rgOriginDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgShapeDDL', 'data-jqxDropDownList', false, true);
			WAL_disableWidget('rgSizeDDL', 'data-jqxDropDownList', false, true);
			
			WAL_disableWidget('angleslider', 'data-jqxSlider', false, true);
			WAL_disableWidget('lgrepeat', 'data-jqxCheckBox', false, true);			
			UIH_EnableColors(false); 	
			
			gCurrentDataBackgroundColorArr[0] = 'NO_COLOR'; 
			UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
			
		}
	}
}
function OnCheckValueChange(event)
{
	var CBID = event.target.id;
	var state = event.args.checked; 
	var JQSel; 
	var node; 		
	
}

function UIH_EnableColors(bFlag)
{
	var node; 
	if(bFlag ==  true)
	{
		node = document.getElementById('gradcolor1'); 
		JQSel = "#"+'gradcolor1';
		$(JQSel).removeAttr('disabled');			
		node.style.opacity = '1.0'; 	
		WAL_disableWidget('colstopslider1', 'data-jqxSlider', false, false);
		
		node = document.getElementById('gradcolor2'); 
		JQSel = "#"+'gradcolor2';
		$(JQSel).removeAttr('disabled');			
		node.style.opacity = '1.0'; 	
		WAL_disableWidget('colstopslider2', 'data-jqxSlider', false, false);
	}
	else
	{
		node = document.getElementById('gradcolor1'); 
		JQSel = "#"+'gradcolor1';
		$(JQSel).attr('disabled', 'disabled'); 
		node.style.opacity = '0.5';
		WAL_disableWidget('colstopslider1', 'data-jqxSlider', false, true);  
		
		node = document.getElementById('gradcolor2'); 
		JQSel = "#"+'gradcolor2';
		$(JQSel).attr('disabled', 'disabled'); 
		node.style.opacity = '0.5';
		WAL_disableWidget('colstopslider2', 'data-jqxSlider', false, true);
	}
}

function OnAngleSliderChange(value)
{
	var spanNode = document.getElementById('angletext'); 
	spanNode.innerHTML = value; 
	gCurrentDataBackgroundColorArr[1] = value;
	UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
}

function OnGradDDLHandler(Node, value)
{
	if(Node.id == 'rgOriginDDL')
	{
		gCurrentDataBackgroundColorArr[1] = value;
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
	else if (Node.id == 'rgShapeDDL')
	{
		gCurrentDataBackgroundColorArr[6] = value;
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
	else if (Node.id == 'rgSizeDDL')
	{
		gCurrentDataBackgroundColorArr[7] = value;
		UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
	}
		
	
}

function OnColorButtonHandler(event)
{
	var btnID = event.target.id;
	var btnnode = event.target; 	
	WAL_hideWidget('colorpickwidget', true);
	var colorval;
	var colstr; 
	colorval = btnnode.style.backgroundColor; 		
	WAL_setColorPickerValue('colorpickwidget', colorval); 
	
	switch(btnID)
	{
	case 'fillcolorbtn':	
		var datagradval = gCurrentObjectNode.getAttribute( "data-backgroundgradcolor"); 
		if(datagradval)
			UIH_UpdateContainerProperty(gCurrentObjectNode.id, true, 'backgroundImage', "", "", true);
		WAL_showColorPickerWidget('colorpickwidget', 'UIH_BackgroundColorHandler', 'fillcolorbtn','BACKGROUND_COLOR');
		break; 
	case 'gradcolor1':
		WAL_showColorPickerWidget('colorpickwidget', 'UIH_BackgroundColorHandler', btnID,'BACKGROUND_GRADIENT_COL1');
		break; 
	case 'gradcolor2':
		WAL_showColorPickerWidget('colorpickwidget', 'UIH_BackgroundColorHandler', btnID,'BACKGROUND_GRADIENT_COL2');
		break; 
	default:
		break; 
	}
	
}
    
function OnColor1StopSliderChange(value)
{
	var spanNode = document.getElementById('colstopspan1'); 
	spanNode.innerHTML = value;	
	gCurrentDataBackgroundColorArr[3] = value;
	UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
}
function OnColor2StopSliderChange(value)
{
	var spanNode = document.getElementById('colstopspan2'); 
	spanNode.innerHTML = value; 
	gCurrentDataBackgroundColorArr[5] = value;
	UIH_UpdateObjectWithGradInfo(gCurrentObjectNode, gCurrentDataBackgroundColorArr, false);
}

	
function UIH_ShowGradientUI()
{
	var bkgrndProp = gCurrentObjectNode.getAttribute('data-backgroundgradcolor'); 	
	
	gInitDataBackgroundGradColorArr = 0;
	if ( (!bkgrndProp) || (bkgrndProp == 'null') )
	{
		var bkcolor = gCurrentObjectNode.style.backgroundColor; 
		if(bkcolor)
			bkgrndProp = 'SOLID'+  gbkgrndparamseparator + bkcolor; 
	}
	if(bkgrndProp)
	{
		gInitDataBackgroundGradColorArr = bkgrndProp.split(gbkgrndparamseparator);
		//gCurrentDataBackgroundColorArr =  new Array(gInitDataBackgroundGradColorArr.length); 
		for(var i=0; i < gInitDataBackgroundGradColorArr.length; i++ )
		{
			gCurrentDataBackgroundColorArr[i] = gInitDataBackgroundGradColorArr[i]; 	
		}
	}
	else 
	{			
		gCurrentDataBackgroundColorArr[0] = 'NO_COLOR'; 		
		gCurrentDataBackgroundColorArr[1] = 0; 
		gCurrentDataBackgroundColorArr[2] = DEFAULT_COLOR_ARRAY[0];
		gCurrentDataBackgroundColorArr[3] = 5 ; 
		gCurrentDataBackgroundColorArr[4] = DEFAULT_COLOR_ARRAY[1];
		gCurrentDataBackgroundColorArr[5] = 90 ;
		gCurrentDataBackgroundColorArr[6] = 'circle' ;
		gCurrentDataBackgroundColorArr[7] = 'farthest-corner'; 
	}	
	WAL_showWindow('gradientwindow', true, 'bkgrnd_color_icon');
	gbShowGradWindow = true; 
	var btnNode; 
	if(gCurrentDataBackgroundColorArr[0]== 'SOLID')
	{
		WAL_setradioButtonCheck('solidcolorbtn', true); 
		//btnNode = document.getElementById('fillcolorbtn'); 
		//btnNode.style.backgroundColor = gCurrentDataBackgroundColorArr[1];		
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'linear-gradient')
	{		
		WAL_setradioButtonCheck('lingradcolorbtn', true); 
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'radial-gradient')
	{
		WAL_setradioButtonCheck('radgradcolorbtn', true); 
	}
	else if(gCurrentDataBackgroundColorArr[0] == 'NO_COLOR')
	{
		WAL_setradioButtonCheck('nocolorbtn', true); 
	}
	
}


function UIH_UpdateObjectWithGradInfo(objectNode, GradPropArr, bUpdate)
{
	var datagradval; 
	if(GradPropArr[0] == 'SOLID')
	{
		UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_COLOR", GradPropArr[1], bUpdate);	
		if(bUpdate ==  true)
		{
			datagradval = objectNode.getAttribute( "data-backgroundgradcolor"); 
			if(datagradval)
			{
				UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", "", true);
				objectNode.removeAttribute("data-backgroundgradcolor"); 				
			}			
			objectNode.removeAttribute("name"); 
		}
	}	
	else if(GradPropArr[0] == 'radial-gradient')
	{
		//var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, gBrowserPrefix); 
		var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, ""); 
		UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", attrVal, bUpdate);
		if(bUpdate ==  true)
		{				
			var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, ""); 
			UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", attrVal, bUpdate);			
			UIH_UpdateContainerProperty(objectNode.id, false, "backgroundColor", "", "", true);
			attrVal = GradPropArr.join(gbkgrndparamseparator); 
			UIH_UpdateContainerProperty(objectNode.id, false, "data-backgroundgradcolor", attrVal, "", true);
			UIH_UpdateContainerProperty(objectNode.id, false, "name", 'BROWSER_SPECIFIC', "", true);			
		}		
	}	
	else if(GradPropArr[0] == 'linear-gradient')
	{
		var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, ""); 
		//var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, ""); 
		UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", attrVal, bUpdate);
		if(bUpdate ==  true)
		{				
			var attrVal = UIH_ConvertGradientAttrValueToString(GradPropArr, ""); 
			UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", attrVal, bUpdate);			
			UIH_UpdateContainerProperty(objectNode.id, false, "backgroundColor", "", "", true);
			attrVal = GradPropArr.join(gbkgrndparamseparator); 
			UIH_UpdateContainerProperty(objectNode.id, false, "data-backgroundgradcolor", attrVal, "", true);
			UIH_UpdateContainerProperty(objectNode.id, false, "name", 'BROWSER_SPECIFIC', "", true);			
		}		
	}
	else if(GradPropArr[0] == 'NO_COLOR')
	{
		var attrVal = ""; 
		//datagradval = objectNode.getAttribute( "data-backgroundgradcolor"); 
		//if(datagradval)
		//{
			UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_GRADIENT", attrVal, bUpdate);
			UIH_ApplyStyleProperty(objectNode.parentNode, "BACKGROUND_COLOR", attrVal, bUpdate);
		//}		
		if(bUpdate ==  true)
		{	
			UIH_UpdateContainerProperty(objectNode.id, false, "data-backgroundgradcolor", "", "", true);
			//objectNode.removeAttribute("data-backgroundgradcolor"); 
			objectNode.removeAttribute("name");							
		}		
	}
}

function UIH_ConvertGradientAttrValueToString(GradArray, prefix)
{
	
	var attrStr = ""; 
	var separator = ","; 
	 if (GradArray.length > 1) {
         if (GradArray[0] == 'linear-gradient') {
             attrStr = ""; 
             attrStr += prefix + GradArray[0] + "(";
             attrStr += GradArray[1]+'deg' ;
             for (var k = 2; k < 6; k++) {
                 attrStr += separator; 
                 attrStr += GradArray[k] + " ";
                 k++;
                 attrStr += GradArray[k]+"%";
             }
             attrStr += ")";      

         }
         else if(GradArray[0] == 'radial-gradient') {
             attrStr = ""; 
             attrStr += prefix + GradArray[0] + "(";
            /* attrStr += GradArray[1] ; //pos
             attrStr += separator; 
             attrStr += GradArray[6]; //shape
             attrStr += " " + GradArray[7]; //size
             */
             attrStr += GradArray[6] + " ";
             attrStr += GradArray[7]; 
             attrStr += ' at ' + GradArray[1] ;           
            
             for (var k = 2; k < 6; k++) {
                 attrStr += separator; 
                 attrStr += GradArray[k] + " ";
                 k++;
                 attrStr += GradArray[k]+"%";
             }
             attrStr += ")";                     
            
             
         }
        else if(GradArray[0] == 'solid')
        {
        	
        	attrStr = GradArray[1]; 
        }
     } 
	 
	 return attrStr; 
	
}


function UIH_GetDDLSourceItemIndex(src, itemtext)
{
		var length = src.length;
		var index = -1;
		if(length < 1)
			return -1; 
		for(var k = 0; k < length; k++)
		{
			if(src[k] == itemtext)
			{
				index = k;
				break;				 
			}				
		}		
		return index; 
}
function UIH_showImageInterface(bShow)
{
	if(!gCurrentObjContainerNode)
		return ;
	if(bShow == true)
	{		
		WAL_hideWidget('imageinterface', false);
		gObjectEditMode = 'IMAGE_MODE'; 
		UIH_updateImageProperties(); 
	}
	else
	{
		//$('.OBJECT_CONTAINER').show(); 
		//WAL_hideWidget('imageinterface', true);
		gObjectEditMode = 0; 
		
	}
	
	//UIH_updateBackgroundValueonGUI(); 
}

function UIH_showHTMLEditInterface(bShow)
{
	if(!gCurrentObjectNode)
		return; 
	 var nodename = gCurrentObjectNode.nodeName.toUpperCase();
	
	 
	if(bShow == true)
	 {
		if( (gObjectEditMode == 'TEXT_EDIT_MODE') || (gObjectEditMode == 'IMAGE_MODE') || (gObjectEditMode == 'AV_MODE'))
			return ; 
		
		 $('.PROPERTY_INTERFACE').hide(); 				
			gCurrentEditableDIVObjectID = gCurrentObjContainerNode.getAttribute('id');		
			$('.OBJECT_CONTAINER').hide();			
			
			WAL_disableWidget('save_icon', 'data-customButton', false, true); 
			//$(JQSel).show(); 
			var ObjID = gCurrentEditableDIVObjectID.substring(4); 
			gCurrentEditableObjectID = ObjID; 
			JQSel = '#TM_' + ObjID; 
			var type = $(JQSel).attr('type'); 
			if(type != 'HTMLOBJECT')
			{
				//Debug_Message("Returning as Type=" +  type); 
				return ; 
				
			}
			WAL_disableWidget('ALL_DATA_CONTAINER', 'data-resizable', false, true);
			WAL_disableWidget('ALL_DATA_CONTAINER', 'data-draggable', false, true);
			WAL_disableWidget(gCurrentEditableDIVObjectID, 'data-resizable', false, true);
			WAL_disableWidget(gCurrentEditableDIVObjectID, 'data-draggable', false, true);	
			
			JQSel = '#ALL_DATA_CONTAINER'; 	
			$(JQSel).show(); 
			JQSel = '#'+gCurrentEditableDIVObjectID;
			
			var divNode = document.getElementById(gCurrentEditableDIVObjectID);
			divNode.style.border = gHTMLEditBorder; 
			$(JQSel).show(); 		
			
			var ObjID =  gCurrentEditableDIVObjectID.substring(4); 
			UIH_AddtoEditedObjectList(ObjID); 
			
			if(nodename == 'IMG')
				 UIH_showImageInterface(bShow);
			else if( (nodename == 'VIDEO') || (nodename == 'AUDIO') )
				UIH_showAVInterface(bShow); 
			else
			 {
				 if(gObjectEditMode != 'TEXT_EDIT_MODE')
						UIH_showTextEditInterface(bShow); 
			 }
	 }
	 else if(bShow == false)
	 {
		 if(gObjectEditMode == 'IMAGE_MODE')
			 UIH_showImageInterface(bShow);
		 else if(gObjectEditMode == 'TEXT_EDIT_MODE')
			 UIH_showTextEditInterface(bShow); 
		 else if(gObjectEditMode == 'AV_MODE')
			 UIH_showAVInterface(bShow);
		 
		
		 	gObjectEditMode = 0;
			var currObjID = gCurrentEditableDIVObjectID.substring(4); 
			TE_CleanupTextObject(currObjID); 
			
			//UIH_showLayoutInterface(); 
			//UIH_menu_save(); 
			//BlockUIinAjax(true);
			UIH_SaveObjectData(true);
			//AJX_AsyncSendReqPoolData();
			
			WAL_disableWidget('ALL_DATA_CONTAINER', 'data-resizable', false, false);
			WAL_disableWidget('ALL_DATA_CONTAINER', 'data-draggable', false, false);
			WAL_disableWidget(gCurrentEditableDIVObjectID, 'data-resizable', false, false);
			WAL_disableWidget(gCurrentEditableDIVObjectID, 'data-draggable', false, false);		 
			
			var divNode = document.getElementById(gCurrentEditableDIVObjectID);
			divNode.style.border = 'none'; 
			
			var currID = gCurrentTreeNode.getAttribute('id'); 
			var nodeItem = WAL_getTreeItemSelection(gTreeNodeID, true);
			//UIH_UpdateHTMLTextInTree(currObjID); 
			UIH_setTreeItemSelection(currID);
			UIH_TreeItemClick(nodeItem); 
			
			gCurrentEditableDIVObjectID = 0 ; 
			gCurrentEditableObjectID = 0;	
			gCurrentObjectNode = 0;
			gCurrentObjContainerNode = 0; 
			gObjectEditMode = 0;
			WAL_disableWidget('save_icon', 'data-customButton', false, false);
			
			UIH_showLayoutInterface(); 
			//BlockUIinAjax(false);
	 }	 
}

function UIH_HTMLEditorTerminate()
{
	gCurrentEditableDIVObjectID = 0 ; 
	gCurrentEditableObjectID = 0;	
	gCurrentObjectNode = 0;
	gCurrentObjContainerNode = 0; 
	gObjectEditMode = 0;
	WAL_disableWidget('save_icon', 'data-customButton', false, false);	
	Debug_Message("Saved Finally"); 
}

function UIH_updateImageProperties()
{
	WAL_setNumberInputValue("imageOpacity", gObjCurrentStyleProperties['opacity']);
}

function UIH_menu_copystyle()
{
	if( !gCurrentObjectNode)
	{
		Debug_Message("Select an Object to copy its Style");
		return ; 
	}	
	gSelectedObjectProperty['boxShadow'] 		= gCurrentObjectNode.style.boxShadow; 
	gSelectedObjectProperty['borderStyle'] 		= gCurrentObjectNode.style.borderStyle;
	gSelectedObjectProperty['borderWidth'] 		= gCurrentObjectNode.style.borderWidth;
	gSelectedObjectProperty['borderHeight']		= gCurrentObjectNode.style.borderHeight;
	gSelectedObjectProperty['borderRadius'] 	= gCurrentObjectNode.style.borderRadius;
	gSelectedObjectProperty['borderColor'] 		= gCurrentObjectNode.style.borderColor;

	gSelectedObjectProperty['backgroundColor']    = gCurrentObjectNode.style.backgroundColor;
	gSelectedObjectProperty['backgroundImage']    = gCurrentObjectNode.style.backgroundImage;
	gSelectedObjectProperty['backgroundOrigin']   = gCurrentObjectNode.style.backgroundOrigin;
	gSelectedObjectProperty['backgroundPosition'] = gCurrentObjectNode.style.backgroundPosition; 
	gSelectedObjectProperty['backgroundSize'] 		= gCurrentObjectNode.style.backgroundSize; 
	gSelectedObjectProperty['backgroundPosition'] 	= gCurrentObjectNode.style.backgroundPosition; 
	gSelectedObjectProperty['data-backgroundgradcolor'] = gCurrentObjectNode.getAttribute('data-backgroundgradcolor');
	gSelectedObjectProperty['opacity'] 					= gCurrentObjectNode.style.opacity;
	
	gApplySelectProperty  = true; 
	document.body.style.cursor ="pointer";//url('styleapply.cur') ; //  //url('styleapply.cur') ;///"pointer";//url('style/icons/Version1/styleapplier.png');
}

function UIH_FormatStyleProperty(ObjNode)
{
	var nodeID = ObjNode.id; 
	var bFinal = true; 
	//if(gSelectedObjectProperty['boxShadow'])
		UIH_UpdateContainerProperty(nodeID, true, 'boxShadow', gSelectedObjectProperty['boxShadow'],"",  bFinal);
	
	//if(gSelectedObjectProperty['borderStyle'])
		UIH_UpdateContainerProperty(nodeID, true, 'borderStyle', gSelectedObjectProperty['borderStyle'],"",  bFinal); 
	
	//if(gSelectedObjectProperty['borderWidth'])
		UIH_UpdateContainerProperty(nodeID, true, 'borderWidth', gSelectedObjectProperty['borderWidth'],"",  bFinal); 
	
	//if(gSelectedObjectProperty['borderHeight'])
		UIH_UpdateContainerProperty(nodeID, true, 'borderHeight', gSelectedObjectProperty['borderHeight'],"",  bFinal); 
	
	//if(gSelectedObjectProperty['borderRadius'])
		UIH_UpdateContainerProperty(nodeID, true, 'borderRadius', gSelectedObjectProperty['borderRadius'],"",  bFinal);
	//if(gSelectedObjectProperty['borderColor'])
		UIH_UpdateContainerProperty(nodeID, true, 'borderColor', gSelectedObjectProperty['borderColor'],"",  bFinal);
	//if(gSelectedObjectProperty['backgroundColor'])
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundColor', gSelectedObjectProperty['backgroundColor'],"",  bFinal);
	//if(gSelectedObjectProperty['backgroundImage'])
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundImage', gSelectedObjectProperty['backgroundImage'],"",  bFinal);
	//if(gSelectedObjectProperty['backgroundOrigin'])
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundOrigin', gSelectedObjectProperty['backgroundOrigin'],"",  bFinal);
	//if(gSelectedObjectProperty['backgroundPosition'])
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundPosition', gSelectedObjectProperty['backgroundPosition'],"",  bFinal);
	
	//if(gSelectedObjectProperty['backgroundSize'])
		UIH_UpdateContainerProperty(nodeID, true, 'backgroundSize', gSelectedObjectProperty['backgroundSize'],"",  bFinal);
	//if(gSelectedObjectProperty['data-backgroundgradcolor'])
		UIH_UpdateContainerProperty(nodeID, false, 'data-backgroundgradcolor', gSelectedObjectProperty['data-backgroundgradcolor'],"",  bFinal);
	
	//if(gSelectedObjectProperty['opacity'])
		UIH_UpdateContainerProperty(nodeID, true, 'opacity', gSelectedObjectProperty['opacity'],"",  bFinal);
		
}

function UIH_UpdateSlideTitleText(slideID)
{
	var slideNode = document.getElementById(slideID); 
	if(!slideNode)
		return ; 
	var nodeItem = WAL_getItemFromTree(gTreeNodeID, slideNode); 
	if(!nodeItem)
		return ; 
	
	var AVObj = slideNode.getAttribute('data-AVObjID'); 
	var durationStr = ""; 
	if(AVObj)
	{
		var starttime = slideNode.getAttribute('data-startTime');
		
		if(starttime)
			durationStr = ":(Start(s):" + slideNode.getAttribute('data-startTime') ; 
		
		var endtime = slideNode.getAttribute('data-endTime');
		if(endtime)
			durationStr += " End(s):" + slideNode.getAttribute('data-endTime') + ")" ; 
		
	}
	else
	{
		var slidedur = slideNode.getAttribute('data-duration');	
		if(slidedur)
			durationStr += " Duration(s):" + slideNode.getAttribute('data-duration') + ")";
	}
	
	var layerchildnodes = nodeItem.subtreeElement.childNodes;
	for(var i = 0; i <layerchildnodes.length; i++ )
	{
		var layernode = layerchildnodes[i];		
		var name = layernode.nodeName.toUpperCase(); 
		if(name == 'DIV')
			layernode = layernode.firstElementChild; 
		name = layernode.nodeName.toUpperCase(); 
		if(name != 'LI')
			return ; 		
		var orig = layernode.getAttribute('data-origin')
		if( (layernode.id != 'TM_BASELAYER') && (orig == 'original') )
		{
			nodeItem = WAL_getItemFromTree(gTreeNodeID, layernode);
			childnodes = nodeItem.subtreeElement.childNodes; 
			for(var k =0 ; k < childnodes.length; k++)
			{
				var objnode = childnodes[k]; 
				var nodename = objnode.nodeName.toUpperCase();
				if(nodename == 'DIV') //happens in case of new node addition 
					objnode = objnode.firstElementChild;
				nodename = objnode.nodeName.toUpperCase();
				if(nodename != 'LI')
					return ; 
				var objtype = objnode.getAttribute('data-type'); 
				if(objtype == 'SLIDE TITLE')
				{
					var objid = objnode.getAttribute('dataid'); 
					objnode = document.getElementById(objid);
					objtext =  objnode.textContent.substring(0, 40);
					objtext += durationStr; 
					WAL_setTreeItemText(gTreeNodeID, slideID, objtext);
					DH_UpdateTreeNodeText(slideID, objtext, true); 
					return ; 
				}
			}
			
		}
	}
	
	WAL_setTreeItemText(gTreeNodeID, slideID, "");
}	


function UIH_GetNumberofSlides(PageID)
{
	gTotalNumSlides = 0; 
	var rootItem = WAL_getTreeItem(gTreeNodeID, PageID); 
	if(!rootItem)
		return 0; 
	if(!rootItem.subtreeElement)
		return 0; 
	
	var SlideNodes = rootItem.subtreeElement.childNodes;
	
	if(SlideNodes.length < 1)
		return gTotalNumSlides; 
	
	for(var j=0; j < SlideNodes.length; j++)
	{
		var node = SlideNodes[j]; 
		if('DIV' == node.nodeName.toUpperCase())
			node = node.firstElementChild; 
		if('LI' != node.nodeName.toUpperCase())
			return gTotalNumSlides; 
		var type = node.getAttribute('data-type')
		if(type == 'SCENE')
			gTotalNumSlides++; 
	}
	return gTotalNumSlides; 
}

function UIH_LBItemsSelectHandler(Index)
{
	//Debug_Message("Index=" + Index); 
}

function UIH_menu_load_imagefrom_remote()
{
	var newsource = DH_getAssetListFromServer('IMAGE');  
	WAL_ListBoxUpdateData('assetlistbox', newsource);
	WAL_showWindow(gAssetlistDlg, true, 'newimage_icon');	
}

function UIH_LBDeleteItem()
{    
     var myitem = WAL_ListBoxGetSelectedItem('assetlistbox'); 
     if(!myitem)
    	 return ; 
     var fname = myitem.label; 
     var fnamearr = fname.split('('); 
     fname = fnamearr[0];    
     //Debug_Message("Fname=" +  fname);    
     DH_deleteAssetFile(fname);
     WAL_ListBoxDeleteItem('assetlistbox', myitem.index);
}

function UIH_LBOKHandler()
{
	var myitem = WAL_ListBoxGetSelectedItem('assetlistbox'); 
    if(!myitem)
   	 return ; 
    var fname = myitem.label; 
    var fnamearr = fname.split('('); 
    fname = fnamearr[0];    
    var fpath = gProjectDataPath  + "/" + fname;     
    
    if(gImageLoadingType == 'IMAGE_OBJECT')
    	gCurrentObjectNode.setAttribute('src', fpath);
    else if(gImageLoadingType == 'BACKGROUND_IMAGE_ATTRIBUTE')
    {
    	imgfname = fpath;
    	var attrval = "url(\'" + imgfname + "\')";    		
    	UIH_UpdateContainerProperty(gCurrentObjectNode.id, false, "data-backgroundgradcolor", "", "", true);		
    	UIH_UpdateContainerProperty(gCurrentObjectNode.id, true, 'backgroundImage', attrval, "", true);
    	UIH_UpdateContainerProperty(gCurrentObjectNode.id, true, 'backgroundRepeat', 'no-repeat', "", true);
    	UIH_UpdateContainerProperty(gCurrentObjectNode.id, true, 'backgroundOrigin', 'border-box', "", true);
    }
    else if(gImageLoadingType == 'VIDEO_OBJECT')
    {
    	  	//var currNodeID = gCurrentTreeNode.getAttribute('dataid');
    	
    	var node = gCurrentObjectNode ; //document.getElementById(currNodeID); 
    	var nodetype = node.getAttribute('type'); 
    	var nodename = node.nodeName.toUpperCase(); 
    	var objectID = node.id; 
    	var currNodeID = 0; 
    	
    	if( (nodename == 'VIDEO') || (nodename == 'AUDIO'))
    	{
    		//now first remove the data-background and then save it before doing anything else
    		UIH_setTreeItemSelection("TM_"+gCurrentObjectNode.id); 
    		UIH_AddObject("SOURCE");    
    		currObjID = gCurrentTreeNode.getAttribute('dataid');
    		var itemname = "Source:(" + fname + ")"; 
    		DH_UpdateTreeNodeText("TM_"+currObjID, itemname, false ); 
    		WAL_setTreeItemText(gTreeNodeID, "TM_"+currObjID, itemname);
    		var srcObjNode = document.getElementById(currObjID); 
    		srcObjNode.setAttribute('src', fpath);
    		UIH_UpdateContainerProperty(gCurrentObjectNode.id, false, "data-backgroundgradcolor", "", "", true);
    		UIH_SaveObjectData(false);     		
    	}
    	
    }
    else if(gImageLoadingType == 'AUDIO_OBJECT')
    {
    	  	//var currNodeID = gCurrentTreeNode.getAttribute('dataid');
    	
    	var node = gCurrentObjectNode ; //document.getElementById(currNodeID); 
    	var nodetype = node.getAttribute('type'); 
    	var nodename = node.nodeName.toUpperCase(); 
    	var objectID = node.id; 
    	var currNodeID = 0; 
    	
    	if(nodename == 'AUDIO')
    	{
    		//now first remove the data-background and then save it before doing anything else
    		UIH_setTreeItemSelection("TM_"+gCurrentObjectNode.id); 
    		UIH_AddObject("SOURCE");    
    		currObjID = gCurrentTreeNode.getAttribute('dataid');
    		var itemname = "Source:(" + fname + ")"; 
    		DH_UpdateTreeNodeText("TM_"+currObjID, itemname, false ); 
    		WAL_setTreeItemText(gTreeNodeID, "TM_"+currObjID, itemname);
    		var srcObjNode = document.getElementById(currObjID); 
    		srcObjNode.setAttribute('src', fpath);
    		UIH_UpdateContainerProperty(gCurrentObjectNode.id, false, "data-backgroundgradcolor", "", "", true);
    		UIH_SaveObjectData(false);     		
    	}
    	
    }
    	
    
   
   // Debug_Message(fpath); 
}

function UIH_FileIPRadioValueChange(event)
{
	var state = event.args.checked; 
	var radionode = event.target; 
	var radioID = event.target.id;	
	
	if(radioID == 'localfilebtn')
		gFileIPLocation = 'LOCAL';
	else if(radioID == 'remotefilebtn')
		gFileIPLocation = 'REMOTE';
	else 
		gFileIPLocation = 0; 
	
	
}
function UIH_FileIPOKHandler()
{
	if(gFileIPLocation == 'LOCAL')
	{
		if(gImageLoadingType == 'IMAGE_OBJECT')
			UIH_menu_load_image();
		else if(gImageLoadingType == 'BACKGROUND_IMAGE_ATTRIBUTE')
			UIH_menu_load_background_image(); 
		else if(gImageLoadingType == 'VIDEO_OBJECT')
			UIH_menu_load_video();
		else if(gImageLoadingType == 'AUDIO_OBJECT')
			UIH_menu_load_video();
		
	}		
	else if(gFileIPLocation == 'REMOTE')
	{
		if(gImageLoadingType == 'IMAGE_OBJECT')
			UIH_menu_load_imagefrom_remote();
		else if(gImageLoadingType == 'VIDEO_OBJECT')
			UIH_menu_load_videofrom_remote(); 
		else if(gImageLoadingType == 'AUDIO_OBJECT')
			UIH_menu_load_audiofrom_remote(); 
		
	}
		
}

function UIH_showAVInterface(bShow)
{
	if(!gCurrentObjContainerNode)
		return ;
	var nodeType = gCurrentObjectNode.nodeName.toUpperCase();
	WAL_hideWidget('newaudio_icon', false); 
	WAL_hideWidget('newvideo_icon', false); 
	if(bShow == true)
	{		
		if(nodeType ==  'VIDEO')
		{
			WAL_hideWidget('newaudio_icon', true); 
		}	
		else if(nodeType ==  'AUDIO')
		{
			WAL_hideWidget('newvideo_icon', true); 
		}
		WAL_hideWidget('videointerface', false);
		gObjectEditMode = 'AV_MODE'; 
		UIH_updateVideoProperties(); 
	}
	else
	{		
		gObjectEditMode = 0; 
		gCurrentObjectNode.removeAttribute('src'); 		
		WAL_hideWidget('videointerface', true);
		//gObjectEditMode = 0; 
	}
}

function UIH_updateVideoProperties()
{
	
}


function UIH_showAutoSlideInterface()
{
	$('.PROPERTY_INTERFACE').hide(); 
	
	UIH_getSlideInfoList(gCurrentPageID); 
	
	WAL_hideWidget('autoshowinterface', false); 
	gObjectEditMode = 'AUTOSHOW_MODE';	
	//gCurrentSlideIndex++;
	gCurrentSlideIndex = 0; 
	
	UIH_showSlideData(gCurrentSlideIndex); 
}

function UIH_menu_load_video()
{
	if(!gCurrentEditableObjectID)
		return; 	
	WAL_showModalWindow('videoLoadDlg',"UIH_videoLoadOK", "" );	
}

function UIH_videoLoadOK()
{
	if(!gCurrentObjectNode)
		return; 
	
	BlockUIinAjax(true);
	//var currNodeID = gCurrentTreeNode.getAttribute('dataid');
	
	var node = gCurrentObjectNode ; //document.getElementById(currNodeID); 
	var nodetype = node.getAttribute('type'); 
	var nodename = node.nodeName.toUpperCase(); 
	var objectID = node.id; 
	var currNodeID = 0; 
	
	if( (nodename == 'VIDEO') || (nodename == 'AUDIO'))
	{
		//now first remove the data-background and then save it before doing anything else
		UIH_setTreeItemSelection("TM_"+gCurrentObjectNode.id); 
		UIH_AddObject("SOURCE");
		
		var debugstr = ""; 
		currNodeID = gCurrentTreeNode.getAttribute('dataid'); 
		node = document.getElementById("vidresID");
		node.setAttribute('value',currNodeID ); 
		debugstr += "vidresID= " + node.getAttribute("value"); 
		
		node = document.getElementById("vidresType");
		node.setAttribute('value',nodename);	
		debugstr += "vidresType=" + node.getAttribute("value"); 
		
		node = document.getElementById("vidFname");
		var fname = node.getAttribute('value'); 	
		var itemname = "Source:(" + fname + ")"; 
		DH_UpdateTreeNodeText("TM_"+currNodeID, itemname, false ); 
		WAL_setTreeItemText(gTreeNodeID, "TM_"+currNodeID, itemname);
		
		UIH_UpdateContainerProperty(gCurrentObjectNode.id, false, "data-backgroundgradcolor", "", "", true);
		UIH_SaveObjectData(false); 
		//UIH_menu_save(); 		
		var retval = DH_setCurrentSessionState(gCurrentProjectID,gCurrentPageID,objectID);
		
		
		document.getElementById("vidForm").submit();	
		BlockUIinAjax(false);
		
	}
	BlockUIinAjax(false);
}


function UIH_HandleSourceChange(oldSrcNode, newSrcNode)
{
	//get the video node
	
	var oldTreeItem = WAL_getTreeItem(gTreeNodeID, oldSrcNode.id); 
	var vidNode = oldTreeItem.parentElement;  
	if(!vidNode)
		return;
	var nodeID = vidNode.getAttribute('dataid'); 
	vidNode = document.getElementById(nodeID);
	
	//stop playing if it is already playing 
	if (vidNode.paused != true)
		vidNode.pause(); 
	
	//get the source node and the src attribute
	if(newSrcNode)
	{
		nodeID = newSrcNode.getAttribute('dataid'); 
		var srcnode  = document.getElementById(nodeID) ; 
		var targetsrc = srcnode.getAttribute('src'); 
		vidNode.setAttribute('src',targetsrc ); 
		vidNode.play(); 		
	}
	else
		vidNode.removeAttribute('src'); 
	
	//set the video node src attribute to this 
	
}

function UIH_menu_load_videofrom_remote()
{
	var newsource = DH_getAssetListFromServer('VIDEO');  
	WAL_ListBoxUpdateData('assetlistbox', newsource);
	WAL_showWindow(gAssetlistDlg, true, 'newimage_icon');	
}

function UIH_menu_load_audiofrom_remote()
{
	var newsource = DH_getAssetListFromServer('AUDIO');  
	WAL_ListBoxUpdateData('assetlistbox', newsource);
	WAL_showWindow(gAssetlistDlg, true, 'newimage_icon');	
}
function UIH_getSlideInfoList(PageID)
{
	//first get the number of slides 
	
	//resetting the list 	
	var rootItem = WAL_getTreeItem(gTreeNodeID, PageID); 
	if(!rootItem)
		return 0; 
	if(!rootItem.subtreeElement)
		return 0; 
	if(gSlideInfoList)
		gSlideInfoList.splice(0, gSlideInfoList.length); 
	
	var SlideNodes = rootItem.subtreeElement.childNodes;
	
	if(SlideNodes.length < 1)
		return gTotalNumSlides; 
	
	
	gSlideInfoList =  new Array(SlideNodes.length);  
	for(var j=0; j < SlideNodes.length; j++)
	{
		var node = SlideNodes[j]; 
		if('DIV' == node.nodeName.toUpperCase())
			node = node.firstElementChild; 
		if('LI' != node.nodeName.toUpperCase())
			return gTotalNumSlides; 
		var type = node.getAttribute('data-type')
		if(type == 'SCENE')
		{
			gSlideInfoList[j] =  new sSlideInfo(); 
			gSlideInfoList[j].id = node.getAttribute('dataid'); 
			gSlideInfoList[j].AVObjectID = node.getAttribute('data-AVObjID'); 
			
			var temp =  node.getAttribute('data-startTime');
			if( (!temp) || (temp == '?') )
				temp = new Number(-1); 
			else 
				temp  = new Number(temp);			
			gSlideInfoList[j].startTime = temp;
			
			var temp =  node.getAttribute('data-duration');	
			if( (!temp) || (temp == '?') )
				temp = new Number(0);
			else
				temp  = new Number(temp);			
			gSlideInfoList[j].duration = temp;
			
			var temp =  node.getAttribute('data-endTime');
			if( (!temp) || (temp == '?') )
				temp = new Number(-1); 
			else 
				temp  = new Number(temp);			
			gSlideInfoList[j].endTime = temp;	
			
		}			
	}	
}

/*
function UIH_setSlideInfoList(PageID)
{
	if(!gSlideInfoList)
		return ; 
	
	var rootItem = WAL_getTreeItem(gTreeNodeID, PageID); 
	if(!rootItem)
		return 0; 
	if(!rootItem.subtreeElement)
		return 0; 
	
	var SlideNodes = rootItem.subtreeElement.childNodes;
	
	if(SlideNodes.length < 1)
		return gTotalNumSlides; 
	
	
	for(var j=0; j < SlideNodes.length; j++)
	{
		var node = SlideNodes[j]; 
		if('DIV' == node.nodeName.toUpperCase())
			node = node.firstElementChild; 
		if('LI' != node.nodeName.toUpperCase())
			return gTotalNumSlides; 
		var type = node.getAttribute('data-type')
		if(type == 'SCENE')
		{			
			node.setAttribute('data-startTime', gSlideInfoList[j].startTime);	
			node.setAttribute('data-duration', gSlideInfoList[j].duration);
		}			
	}	
}
*/

function UIH_resetSlideInfoList()
{
	gSlideInfoList.splice(0, gSlideInfoList.length); 
}

function UIH_showSlideData(Index)
{
	var len = gSlideInfoList.length;
	if(Index > len)
		return ; 
	var slideID = gSlideInfoList[Index].id; 	
	UIH_setTreeItemSelection("TM_"+ slideID); 
	
}

function UIH_getSlideIndex(nodeID)
{
	for(var k=0; k <gSlideInfoList.length; k++)
	{
		if(nodeID == gSlideInfoList[k].id)
			return k; 
	}
	return -1; 	
}

function UIH_startTimer()
{
	//if( (gCurrentSlideIndex > 0 )  && (gCurrentSlideIndex < gSlideInfoList.length-1) )
	//	gCurrentSlideIndex++; 
	//
	var avobjID = gCurrentTreeNode.getAttribute('data-AVObjID');
	if(avobjID)
	{
		if(!gAVPlayerObject)
		{
			gAVPlayerObject = document.getElementById(avobjID);			
			gAVPlayerInitOffsetTime = 0; 
			//gAVPlayerObject.load();
			gAVPlayerObject.pause();
			if(gCurrentSlideIndex == 0)
				gAVPlayerObject.currentTime = 0; 
		}
		gAVPlayerInitOffsetTime = gAVPlayerObject.currentTime;		
		if(gCurrentSlideIndex > 0)
			gSlideInfoList[gCurrentSlideIndex].startTime = gLastSlideVideoStopTime; //gSlideInfoList[gCurrentSlideIndex-1].startTime + gSlideInfoList[gCurrentSlideIndex-1].duration;
		else
			gSlideInfoList[gCurrentSlideIndex].startTime = gLastSlideVideoStopTime; //gAVPlayerObject.currentTime;
		gAVPlayerInitOffsetTime = (gSlideInfoList[gCurrentSlideIndex].startTime);	
		gSlideInfoList[gCurrentSlideIndex].AVObjectID = avobjID; 
	}
	else
	{
		gSlideInfoList[gCurrentSlideIndex].AVObjectID = 0; 
		gAVPlayerObject = 0; 
		if(gCurrentSlideIndex > 0)
			gSlideInfoList[gCurrentSlideIndex].startTime = gSlideInfoList[gCurrentSlideIndex-1].startTime + gSlideInfoList[gCurrentSlideIndex-1].duration;
		else
			gSlideInfoList[gCurrentSlideIndex].startTime = 0;
	}
		
	
	if(!gAutoSlideTimer)
	{
		gAutoSlideTimer = setInterval(function() {
			UIH_AutotimerHandle(); 
        }, gTimeOut); 
		
		gbStartSlide = true; 
		gSlideDuration = 0; 
		gVideoDuration = 0;		
	}
	if(gAVPlayerObject)
		gAVPlayerObject.play();	
}

function UIH_playSlideHandler()
{
	if(gSlideInfoList[gCurrentSlideIndex].AVObjectID)
	{
		var endTime = gCurrSlideEndTime ;//gSlideInfoList[gCurrentSlideIndex].endTime; 
		var tempstr = endTime.toFixed(0);
		if(endTime != -1)
		{
			if(gAVPlayerObject.currentTime >= endTime)
			{				
				UIH_stopSlidePlay(); 
							
			}
		}
		UIH_updateMediaCurrentTime(); 
	}
	else
	{
		gSlideDuration += (gTimeOut/1000);
		var tempPlayDur = gCurrSlideEndTime - gCurrSlideStartTime; 
		if(gSlideDuration >= tempPlayDur)
			UIH_stopSlidePlay(); 
		UIH_updateSlideDuration(gSlideDuration); 
	}
	
}
function UIH_playSlides()
{
	var avobjID = gCurrentTreeNode.getAttribute('data-AVObjID');
	if(avobjID)
	{
		if(!gAVPlayerObject)
		{
			gAVPlayerObject = document.getElementById(avobjID);					
		}
		gAVPlayerObject.pause();
		/*if(gSlideInfoList[gCurrentSlideIndex].startTime >= 0)
			gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime;
			*/
		if(gCurrSlideStartTime >= 0)
			gAVPlayerObject.currentTime = gCurrSlideStartTime;
		gAVPlayerObject.play();			
	}
	else
	{
		
		gSlideInfoList[gCurrentSlideIndex].AVObjectID = 0; 
		gAVPlayerObject = 0; 
		if(gCurrentSlideIndex > 0)
			gSlideInfoList[gCurrentSlideIndex].startTime = gSlideInfoList[gCurrentSlideIndex-1].startTime + gSlideInfoList[gCurrentSlideIndex-1].duration;
		else
			gSlideInfoList[gCurrentSlideIndex].startTime = 0;
		
	}
	gbStartSlide = true; 
	gSlideDuration = 0; 
	gVideoDuration = 0;	
	
	if(gAutoSlideTimer)
	{
		clearInterval(gAutoSlideTimer);
		gAutoSlideTimer = 0; 
	}
	if(!gAutoSlideTimer)
	{
		gAutoSlideTimer = setInterval(function() {
			UIH_playSlideHandler(); 
        }, gTimeOut);
	}
		
	UIH_EnableAutoShowWidget(false); 
}


function UIH_AutotimerHandle()
{
	if(gAVPlayerObject)
	{
		if(gAVPlayerObject.currentTime < gAVPlayerInitOffsetTime)
		{
			Debug_Message("gAVPlayerObject.currentTime="+ gAVPlayerObject.currentTime+ " gAVPlayerInitOffsetTime=" +gAVPlayerInitOffsetTime);
		}
		gSlideDuration = (gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime); 
	}
	else
	{
		gSlideDuration += (gTimeOut/1000);		
	}
	//gSlideDuration = parseFloat(gSlideDuration);
	var dispstr = gSlideDuration;
	dispstr = dispstr.toFixed(0); 
	
	var divNode =  document.getElementById('durationvalue'); 
	divNode.innerHTML = (dispstr);   
}
function UIH_stopTimer()
{
	gbStartSlide = false;
	if(gAVPlayerObject)
	{
		gAVPlayerObject.pause(); 
		gLastSlideVideoStopTime = gAVPlayerObject.currentTime; 
		gLastSlideVideoDuration = gSlideDuration; 
	}	
	clearInterval(gAutoSlideTimer); 
	gAutoSlideTimer = 0; 	
	gSlideInfoList[gCurrentSlideIndex].duration = gSlideDuration;
	gSlideDuration = 0; 	
	
	var sceneID =  gCurrentTreeNode.id; 
	var temp = gSlideInfoList[gCurrentSlideIndex].duration.toFixed(2); 	
	DH_setTreeItemAttribute(sceneID, 'data-duration', temp);
	
	temp = gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2); 	
	DH_setTreeItemAttribute(sceneID, 'data-startTime', temp);
	//++gCurrentSlideIndex;
	UIH_showSlideData(gCurrentSlideIndex); 
	UIH_UpdateSlideTitleText("TM_"+gSlideInfoList[gCurrentSlideIndex].id); 
	WAL_setNumberInputValue('startASSIndex', gCurrentSlideIndex+1); 
	WAL_setNumberInputValue('endASSIndex', gCurrentSlideIndex+1); 
}



function UIH_stopSlidePlay()
{
	gbStartSlide = false;
	if(gAVPlayerObject)
	{
		gAVPlayerObject.pause(); 
		gLastSlideVideoStopTime = gAVPlayerObject.currentTime; 
		gLastSlideVideoDuration = gSlideDuration; 
		
		//return ; 
	}	
	else
	{
		gSlideInfoList[gCurrentSlideIndex].duration = gSlideDuration; 
		gSlideInfoList[gCurrentSlideIndex].endTime = gSlideInfoList[gCurrentSlideIndex].startTime + gSlideDuration;
		
		divNode =  document.getElementById('durationvalue'); 
		Value = gSlideInfoList[gCurrentSlideIndex].duration.toFixed(0); 
		divNode.innerHTML = Value;			
		//DH_setTreeItemAttribute("TM_"+gSlideInfoList[gCurrentSlideIndex].id, 'data-duration', Value);
		//UIH_UpdateSlideTitleText("TM_"+gSlideInfoList[gCurrentSlideIndex].id);
	}
	var node = document.getElementById('slideplay_icon');			
	node.setAttribute('src', 'style/icons/Version1/player_play.png');
	UIH_EnableAutoShowWidget(true); 
	if(gAutoSlideTimer)
	{
		clearInterval(gAutoSlideTimer); 
		gAutoSlideTimer = 0; 
	}		
	
}

function UIH_previewAutoShow()
{
	if(gbPreviewPlay == true)
	{
		clearInterval(gAutoSlideTimer); 
		gAutoSlideTimer = 0; 
		if(gAVPlayerObject)
			gAVPlayerObject.pause(); 
		gbPreviewPlay = false; 
		return; 
	}
	gPreviewStartIndex = WAL_getMaskedInputValue('startASSIndex'); 
	gPreviewStartIndex--; 
	gPreviewEndIndex   = WAL_getMaskedInputValue('endASSIndex'); //gPreviewStartIndex; //change it to user defined later on _rm
	gPreviewEndIndex--; 	
	gCurrentSlideIndex = gPreviewStartIndex; 
	if((gSlideInfoList) && (gSlideInfoList.length > 1) )
	{
		
		var avobjID = gCurrentTreeNode.getAttribute('data-AVObjID');
		if(avobjID)
		{
			gAVPlayerObject = document.getElementById(avobjID); 
			gAVPlayerObject.pause();
			//if(gCurrentSlideIndex > 0)
			gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime;
			//else
			//	gAVPlayerObject.currentTime = 0; 						 	
			gAVPlayerInitOffsetTime = gAVPlayerObject.currentTime;
		}		
		if(gAutoSlideTimer)
		{
			clearInterval(gAutoSlideTimer); 
			gAutoSlideTimer = 0; 
		}
		if(!gAutoSlideTimer)
		{
			gAutoSlideTimer = setInterval(function() {
				UIH_AutoPreviewtimerHandle(); 
	        }, gTimeOut);
			gSlideDuration = 0; 
			if(gAVPlayerObject)
				gAVPlayerObject.play(); 
			UIH_showSlideData(gCurrentSlideIndex); 
		}
		gbPreviewPlay = true; 
	}
	
}

function UIH_AutoPreviewtimerHandle()
{
	if(gAVPlayerObject)
	{
		gSlideDuration = (gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime);
		UIH_updateMediaCurrentTime(); 
	}
		
	else			
		gSlideDuration += (gTimeOut/1000); 
	
	var dispstr = gSlideDuration;
	dispstr = dispstr.toFixed(0); 	
	if(gSlideDuration < 0)
	{
		//Debug_Message("gAVPlayerInitOffsetTime=" + gAVPlayerInitOffsetTime + "currentTime="+gAVPlayerObject.currentTime); 
	}
	var divNode =  document.getElementById('durationvalue'); 
	divNode.innerHTML = (dispstr); 
	
	if( (gSlideDuration >= gSlideInfoList[gCurrentSlideIndex].duration) && (gCurrentSlideIndex < gSlideInfoList.length-1) )
	{
		//gCurrentSlideIndex++; 
		if(gCurrentSlideIndex == gPreviewEndIndex)
		{
			clearInterval(gAutoSlideTimer); 
			gAutoSlideTimer = 0; 
			if(gAVPlayerObject)
				gAVPlayerObject.pause(); 
			gbPreviewPlay = false; 
			UIH_EnableAutoShowWidget(true); 
			//return ; 
		}
		else
		{
			gCurrentSlideIndex++; 
			if(!gSlideInfoList[gCurrentSlideIndex].AVObjectID)
			{
				if( (gAVPlayerObject) && (gAVPlayerObject.paused != true))
				{
					gAVPlayerObject.pause(); 
					gAVPlayerObject = 0;
				}										
			}
			else
			{
				if((gAVPlayerObject) && (gAVPlayerObject.id != gSlideInfoList[gCurrentSlideIndex].AVObjectID)) {
			        gAVPlayerObject.pause();
			        gAVPlayerObject = 0;
			    } 
				if(!gAVPlayerObject)
				{
					gAVPlayerObject =  document.getElementById(gSlideInfoList[gCurrentSlideIndex].AVObjectID);
					gAVPlayerObject.pause(); 
				}
				if( (gAVPlayerObject) && (gAVPlayerObject.paused == true))
				{
					gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime; 
					gAVPlayerObject.play(); 
				}
				if(gAVPlayerObject)
				{
					gAVPlayerInitOffsetTime = gSlideInfoList[gCurrentSlideIndex].startTime;
					var diff =  Number(gAVPlayerObject.currentTime - gAVPlayerInitOffsetTime); 
					diff = Math.abs(diff); 
					if(diff > 0.5 )
					{
						gAVPlayerObject.currentTime = gAVPlayerInitOffsetTime;
					}
						 
				}	
			}								
			gSlideDuration = 0;
		}	
		UIH_showSlideData(gCurrentSlideIndex); 	
	}
	else if(gCurrentSlideIndex >= gSlideInfoList.length-1)
	{
		var endTime = gSlideInfoList[gCurrentSlideIndex].startTime + gSlideInfoList[gCurrentSlideIndex].duration; 
		
		if(gAVPlayerObject.currentTime >= endTime)
		{
			clearInterval(gAutoSlideTimer); 
			gAutoSlideTimer = 0; 
			if(gAVPlayerObject)
				gAVPlayerObject.pause(); 
			gbPreviewPlay = false; 
			UIH_EnableAutoShowWidget(true); 
		}
		
	}	
}

function UIH_EnableAutoShowWidget(bEnableFlag)
{
	//var bFlag = WAL_IsWidgetDisabled('slidestart_icon', 'data-customButton');
	if(bEnableFlag == true)
	{
		WAL_disableWidget('startTime', 'data-customButton', false, false);
		WAL_disableWidget('endTime', 'data-customButton', false, false);	
	}
	else
	{
		WAL_disableWidget('startTime', 'data-customButton', false, true);
		WAL_disableWidget('endTime','data-customButton', false, true);	
	}
}

function UIH_resetAutoshowParam()
{	
	gAVPlayerObject =0 ;
	gCurrentSlideIndex = -1; 
	UIH_EnableAutoShowWidget(true); 
}

function UIH_seekVideo(bFwd)
{
	var seekInterval = new Number(0.1); 
	if(!gAVPlayerObject)
		return ; 
	if(gAVPlayerObject.paused != true)
		gAVPlayerObject.pause(); 	
	if(bFwd ==  true)
	{
		 if(gAVPlayerObject.currentTime >= gAVPlayerObject.duration)
		 {
			 Debug_Message("End of Clip Reached"); 
			 return ;
		 }		
		 gAVPlayerObject.currentTime += seekInterval; 				 
	}
	else
	{
		if(gAVPlayerObject.currentTime <= 0)
		 {
			 Debug_Message("End of Clip Reached"); 
			 return ;
		 }		 
		 gAVPlayerObject.currentTime -= seekInterval;	 
	}
	UIH_updateMediaCurrentTime(); 
}

function UIH_BeginEndMedia(bEnd)
{
	//get the current sldie index
	if(!gSlideInfoList[gCurrentSlideIndex].AVObjectID)
		return ; 
	if(!gAVPlayerObject)
		gAVPlayerObject = document.getElmentById(gSlideInfoList[gCurrentSlideIndex].AVObjectID); 
	
	if(bEnd == true)
	{
	//check if end time defined 
		if(gSlideInfoList[gCurrentSlideIndex].endTime >= 0)
		{
			gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].endTime; 
			UIH_updateMediaCurrentTime(); 
		}	
	//if yes then seek to that time else return 
	}
	else 
	{
		if(gSlideInfoList[gCurrentSlideIndex].startTime >= 0)
		{
			gAVPlayerObject.currentTime = gSlideInfoList[gCurrentSlideIndex].startTime; 
			UIH_updateMediaCurrentTime(); 
		}	
	}
	
}
function UIH_ResetAutoSyncInfo(Index)
{
	if(Index == -1)
	{
		var numslides = gSlideInfoList.length; 
		for(var j=0; j < numslides; j++)
		{
			//UIH_showSlideData(j);		
			DH_setTreeItemAttribute("TM_"+gSlideInfoList[j].id, 'data-duration', 0);
			DH_setTreeItemAttribute("TM_"+gSlideInfoList[j].id, 'data-startTime', -1);
			DH_setTreeItemAttribute("TM_"+gSlideInfoList[j].id, 'data-endTime', -1);
			UIH_UpdateSlideTitleText("TM_"+ gSlideInfoList[j].id); 
			gSlideInfoList[j].duration = 0.0; 
			gSlideInfoList[j].startTime = 0;//-1; 
			gSlideInfoList[j].endTime = -1; 
		}
	}
	else
	{
		DH_setTreeItemAttribute("TM_"+gSlideInfoList[Index].id, 'data-duration', 0);
		DH_setTreeItemAttribute("TM_"+gSlideInfoList[Index].id, 'data-startTime', -1);
		DH_setTreeItemAttribute("TM_"+gSlideInfoList[Index].id, 'data-endTime', -1);
		UIH_UpdateSlideTitleText("TM_"+ gSlideInfoList[Index].id); 
		gSlideInfoList[Index].duration = 0.0; 
		gSlideInfoList[Index].startTime =0;// -1; 
		gSlideInfoList[Index].endTime = -1; 
	}
	
}
/*
function UIH_MarkInOutValueChange(event)
{
	var CBID = event.target.id;
	var state = event.args.checked;
	var AVID = gSlideInfoList[gCurrentSlideIndex].AVObjectID; 
	var currentVidTime; 
	var nextAVSlideIndex=-1; 
	var prevAVSlideIndex=-1;
	
	if(AVID)
	{
		if(!gAVPlayerObject)
			return ;		
		if(gAVPlayerObject.paused != true)
		{
			Debug_Message("Stop playback to Insert Start or End Time"); 
			return ; 
		}
		if(gAVPlayerObject.id != gSlideInfoList[gCurrentSlideIndex].AVObjectID)
			gAVPlayerObject = document.getElementById(gSlideInfoList[gCurrentSlideIndex].AVObjectID); 
		
		if( (gCurrentSlideIndex > 0 ) && (gCurrentSlideIndex < gSlideInfoList.length-1))
		 {
			 for(var k = gCurrentSlideIndex-1; k >= 0; k--)
			 {
				 if( (gSlideInfoList[k].AVObjectID) && (gSlideInfoList[k].AVObjectID == gSlideInfoList[gCurrentSlideIndex].AVObjectID))
				 {
					 prevAVSlideIndex = k;
					 break; 
				 }
			 }
		 }		 
		 //get the next valid slide 
		 if(gCurrentSlideIndex < gSlideInfoList.length)
		 {
			 for(var j = gCurrentSlideIndex+1; j <gSlideInfoList.length; j++)
			 {
				 if( (gSlideInfoList[j].AVObjectID) && (gSlideInfoList[j].AVObjectID == gSlideInfoList[gCurrentSlideIndex].AVObjectID))
				 {
					 nextAVSlideIndex = j; 
					 break; 
				 }
			 }			 
		 }		 		
		currentVidTime = gAVPlayerObject.currentTime; 
		var currTimestr = currentVidTime.toFixed(2); 
		if(CBID == 'startTime')
		{
			if(state == true)
			{
				if( (prevAVSlideIndex != -1) && (gSlideInfoList[prevAVSlideIndex].endTime >= 0) )
				{
					if(currentVidTime < gSlideInfoList[prevAVSlideIndex].endTime)
					{
						WAL_setCheckBoxValue('startTime', false);
						Debug_Message("The Start time = " + currTimestr + "should be greater than End time of Previous Slide="+ gSlideInfoList[prevAVSlideIndex].endTime.toFixed(2));
						
						return ; 
					}
				}
				else if( (nextAVSlideIndex > 0) && (gSlideInfoList[nextAVSlideIndex].startTime > 0) )
				{
					if(currentVidTime > gSlideInfoList[nextAVSlideIndex].startTime)
					{
						WAL_setCheckBoxValue('startTime', false);
						Debug_Message("The Start = " + currTimestr + "time should be less than Start time = " + gSlideInfoList[nextAVSlideIndex].startTime.toFixed(2)+ " of next Slide"); 
						return ; 
					}
				}
				else if((gSlideInfoList[gCurrentSlideIndex].endTime > 0) && (currentVidTime > gSlideInfoList[gCurrentSlideIndex].endTime) )
				{
					WAL_setCheckBoxValue('startTime', false);
					Debug_Message("Start time=" + currTimestr + "cannot exceed End time=" + gSlideInfoList[gCurrentSlideIndex].endTime.toFixed(2)+ "of Current Slide");
					return ; 
				}
				gSlideInfoList[gCurrentSlideIndex].startTime =  currentVidTime;//toFixed(2); 
				var divNode =  document.getElementById('startTimevalue'); 
				var Value = gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2);  
				divNode.innerHTML = Value; 
			}			
		}//startTime
		else if(CBID == 'endTime')
		{
			if(state == true)
			{
				if((gSlideInfoList[gCurrentSlideIndex].startTime >= 0 ) && (currentVidTime < gSlideInfoList[gCurrentSlideIndex].startTime ) )
				{
					WAL_setCheckBoxValue('endTime', false);
					Debug_Message("Start time= " + gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2) + "cannot exceed End time = "+currTimestr);
					return ; 
				}			
				else if( (nextAVSlideIndex > 0) && (gSlideInfoList[nextAVSlideIndex].startTime > 0) )
				{
					if(currentVidTime > gSlideInfoList[nextAVSlideIndex].startTime)
					{
						WAL_setCheckBoxValue('endTime', false);
						Debug_Message("The End time="+currTimestr + "should be less than Start time="+gSlideInfoList[nextAVSlideIndex].startTime.toFixed(2) + "of next Slide"); 
						return ; 
					}
				}				
				gSlideInfoList[gCurrentSlideIndex].endTime = currentVidTime;//.toFixed(2); 
			}
		}//endTime	
	
		//gSlideInfoList[gCurrentSlideIndex].endTime = currentVidTime.toFixed(2); 
		if ( (gSlideInfoList[gCurrentSlideIndex].endTime > 0 ) && (gSlideInfoList[gCurrentSlideIndex].startTime >= 0 ) )
			gSlideInfoList[gCurrentSlideIndex].duration = gSlideInfoList[gCurrentSlideIndex].endTime - gSlideInfoList[gCurrentSlideIndex].startTime;
		else
			gSlideInfoList[gCurrentSlideIndex].duration = 0; 
		//gSlideInfoList[gCurrentSlideIndex].duration = gSlideInfoList[gCurrentSlideIndex].duration.toFixed(2);
		var sceneID =  gCurrentTreeNode.id; 
		var Value; 
		
		var divNode =  document.getElementById('endTimevalue'); 
		if(gSlideInfoList[gCurrentSlideIndex].endTime == -1)
			Value = '?'; 
		else
			Value = gSlideInfoList[gCurrentSlideIndex].endTime.toFixed(2);		
		divNode.innerHTML = Value; 
		DH_setTreeItemAttribute(sceneID, 'data-endTime', gSlideInfoList[gCurrentSlideIndex].endTime.toFixed(2));
		
		divNode =  document.getElementById('durationvalue'); 
		Value = gSlideInfoList[gCurrentSlideIndex].duration.toFixed(2); 
		divNode.innerHTML = Value;			
		DH_setTreeItemAttribute(sceneID, 'data-duration', Value);
		
		var divNode =  document.getElementById('startTimevalue'); 
		if(gSlideInfoList[gCurrentSlideIndex].startTime == -1)
			Value = '?'; 
		else
			Value = gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2);		
		divNode.innerHTML = Value; 
		DH_setTreeItemAttribute(sceneID, 'data-startTime', gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2));		
		
		UIH_UpdateSlideTitleText("TM_"+gSlideInfoList[gCurrentSlideIndex].id); 
	}	
	else
	{
			
	}
	//Debug_Message("state= " +  state); 
	
}
*/

function UIH_updateMediaCurrentTime()
{
	if(!gAVPlayerObject)
		return ; 
	var currTime = gAVPlayerObject.currentTime; 
	var dispstr = currTime.toFixed(0);		
	var divNode =  document.getElementById('currentTimevalue'); 
	divNode.innerHTML = (dispstr); 
}

function UIH_updateSlideDuration(value)
{
	var divNode =  document.getElementById('durationvalue'); 
	var Value = value.toFixed(0); 
	divNode.innerHTML = Value; 
}

function UIH_showEffectsInterface()
{
	$('.PROPERTY_INTERFACE').hide(); 	
	UIH_getSlideInfoList(gCurrentPageID);	
	WAL_hideWidget('effectinterface', false); 
	gObjectEditMode = 'EFFECTS_MODE';
	
	if(gCurrentTreeNode)
		var type = gCurrentTreeNode.getAttribute('data-type');
	if(type == 'SCENE')
		UIH_getElementDispOrderList();   
}

function UIH_ApplyEffectParameters(selNode)
{
	//check the node type first 
	var Node = selNode; 
	var type = 0; 
	if(Node.id != 'ALL_DATA_CONTAINER')
	{
		var JQSel = '#'+ Node.id; 
		var classType = $(JQSel).hasClass('OBJECT_CONTAINER'); 
		if(classType != true)
			return ; 
	}
	else
	{
		Node = gCurrentTreeNode;
		var type =  gCurrentTreeNode.getAttribute('data-type'); 
		if(type != 'SCENE')
			return ; 		
	}	
	var effectParamStr='';
	//get the effect type
	var effectType = WAL_getDropdownListSelection('TransEffectDDL'); 
	effectType = effectType.toLowerCase(); 
	
	//get the corresponding effect parameters 
	var effectDur = WAL_getMaskedInputValue('effectDurationIP');
	
	UIH_UpdateEntryToList(Node.id, effectDur, gElementDOList); 
	UIH_UpdateDelayValuesInList(gElementDOList);	
	var Index = UIH_getItemIndexInList(Node.id,gElementDOList ); 
	var initDelay = gElementDOList[Index].delay;
	effectParamStr += effectType + gEffectParamSep + initDelay + gEffectParamSep + effectDur + gEffectParamSep; 
	switch(effectType)
	{
	case 'blind':
		var direction = WAL_getDropdownListSelection('blindDirectionDDL'); 
		direction = direction.toLowerCase(); 
		effectParamStr += 'direction:' + '"' + direction + '"'; 	
		break; 
	case 'bounce':
		var distance = WAL_getMaskedInputValue('bounceDistanceIP');
		var numbounce = WAL_getMaskedInputValue('bounceNumIP');			
		effectParamStr += 'distance:' + distance + gEffectParamSep + 'times:'+numbounce; 
		break;
	case 'none':
		effectParamStr=""; 
		if(type != 'SCENE')
			UIH_DeleteEntryFromList(Node.id, gElementDOList); 
		break;
	case 'clip':
		var direction = WAL_getDropdownListSelection('clipDirectionDDL'); 
		direction = direction.toLowerCase(); 
		effectParamStr += 'direction:' + '"' + direction + '"'; 
		break;
	case 'drop':
		var direction = WAL_getDropdownListSelection('dropDirectionDDL'); 
		direction = direction.toLowerCase(); 
		effectParamStr += 'direction:' + '"' + direction + '"'; 
		break;
	case 'explode':		
		var numpieces = WAL_getMaskedInputValue('explodeNumIP');			
		effectParamStr += 'pieces :' + numpieces ; 
		break;
	case 'fade':		
		var nsize = WAL_getMaskedInputValue('fadesizeNumIP');			
		effectParamStr += 'size :' + nsize ; 
		break;
	case 'puff':
		var npercent = WAL_getMaskedInputValue('puffpercentNumIP');			
		effectParamStr += 'percent :' + nsize ;	
		break;
	case 'pulsate':
		var ntimes = WAL_getMaskedInputValue('pulsateNumIP');			
		effectParamStr += 'times:' + ntimes ;	
		break;
	case 'scale':
		direction = WAL_getDropdownListSelection('scaleDirectionDDL');
		var orig = WAL_getDropdownListSelection('scaleoriginDDL');
		npercent = WAL_getMaskedInputValue('scalepercentNumIP');
		effectParamStr += 'direction:' + '"' + direction + '"'+ gEffectParamSep  ;	
		effectParamStr += 'origin:(' + orig + ')' + gEffectParamSep;
		effectParamStr += 'percent:' + npercent+ gEffectParamSep; 
		effectParamStr += 'scale:' +'"both"'; 
		break;
	case 'shake':
		direction = WAL_getDropdownListSelection('shakeDirectionDDL');
		distance = WAL_getMaskedInputValue('shakedistanceNumIP');
		ntimes = WAL_getMaskedInputValue('shaketimesNumIP');
		
		effectParamStr += 'direction:' + '"' + direction + '"'+ gEffectParamSep  ;	
		effectParamStr += 'distance:' + distance+ gEffectParamSep; 
		effectParamStr += 'times:' + ntimes; 
		break;
	case 'slide':
		direction = WAL_getDropdownListSelection('slideDirectionDDL');
		distance = WAL_getMaskedInputValue('slidedistanceNumIP');
		
		effectParamStr += 'direction:' + '"' + direction + '"'+ gEffectParamSep  ;	
		effectParamStr += 'distance:' + distance+ gEffectParamSep;		
		break;
	case 'flip':
		direction = WAL_getDropdownListSelection('flipDirectionDDL');
		var myindex = UtilGetItemIndexFromArray(gFlipDirTypes, direction);
		if(myindex== -1)
		{
			Debug_Message("Error in Getting Index of Flip direction"); 
			return ;			
		}
		direction  = gFlipDirParamTypes[myindex]; 
		var speed = WAL_getMaskedInputValue('flipspeedNumIP');		
		effectParamStr += 'direction:' + '"' + direction + '"'+gEffectParamSep  ;		
		effectParamStr += 'speed:' + speed + gEffectParamSep;		
		effectParamStr += 'color:' + '"transparent"' + gEffectParamSep  ;
		effectParamStr += 'onEnd:function(){var node = document.getElementById("' + Node.id + '"); node.style.visibility=""; node.style.backgroundColor=""; }'
		break;
	default:
		return;
		break;
	}
	
	
	if(type == 'SCENE')
	{
		//if its a slide then return from here only 
		DH_setTreeItemAttribute(Node.id, 'data-slideEffect', effectParamStr);
		DH_UpdateSlideEffectInfo(gCurrentPageID); 
		//return; 		
	}	
	else
	{
		//Node.setAttribute('data-effect', effectParamStr); 
		UIH_UpdateContainerProperty(Node.id, false, 'data-effect', effectParamStr, "",  true);
	}	
	UIH_UpdateEffectValuesInNode(gElementDOList); 
	var nodeID;
	if(type == 'SCENE')
		nodeID= 'ALL_DATA_CONTAINER';
	else
		nodeID= Node.id;
			
	UIH_previewElementEffect(nodeID);
	//UIH_UpdateEntryToList(Node.id, effectDur, gElementDOList); 
	//UIH_UpdateDelayValuesInList(gElementDOList);
	
	//now construct the appropriate string 
}



function UIH_getElementDispOrderList()
{
	var elemDOInfo = 0; 
	//clean up the existing list if exists
	if(gElementDOList.length > 0)
		gElementDOList.splice(0,gElementDOList.length ); 	
	//now list out all elements which are visible 
	var visibleObjects = $(".OBJECT_CONTAINER").filter(":visible");  
	var animTime, delayTime; 
	var effectParam; 
	var effectParamArr; 
	// iterateover each element and get data-effect value 
	//alwasy have DIV_data_conatiner entry on top 
	var slidenode =  gCurrentTreeNode; //document.getElementById('DIV_DATA_CONTAINER');
	elemDOInfo = new sElementDOInfo(); 
	elemDOInfo.id = slidenode.id;
	elemDOInfo.delay = 0;	
	effectParam = slidenode.getAttribute('data-slideEffect');	
	if( (effectParam) && (effectParam != 'null') )
	{
		//if defined then get delay and animation value 
		effectParamArr = effectParam.split(gEffectParamSep);
		animTime = new Number(effectParamArr[2]);	
		elemDOInfo.animTime = animTime; 
	}
	gElementDOList.push(elemDOInfo); 	
	
	for(var i=0; i < visibleObjects.length; i++)
	{
		
		effectParam = visibleObjects[i].getAttribute('data-effect'); 
		if( (effectParam) && (effectParam != "null"))
		{
			//if defined then get delay and animation value 
			effectParamArr = effectParam.split(gEffectParamSep);
			animTime = new Number(effectParamArr[2]); 
			delayTime =  new Number(effectParamArr[1]);
			elemDOInfo = 0; 
			elemDOInfo = new sElementDOInfo(); 
			elemDOInfo.id = visibleObjects[i].id;
			elemDOInfo.animTime = animTime; 
			elemDOInfo.delay = delayTime;
			//feed it into the list 
			gElementDOList.push(elemDOInfo); 			
		}		
	}	
	//once list complete then sort the list based on delay value 
	if(gElementDOList.length >  0)
		gElementDOList.sort(CompareFn);
	
	//now return the list 
}

function CompareFn(elem1, elem2) {
    if (elem1.delay < elem2.delay)
        return -1;
    else if (elem1.delay == elem2.delay)
        return 0; 
    else if(elem1.delay > elem2.delay)
        return 1;
}

function UIH_UpdateEntryToList(itemID, animTime, myList)
{
	var findIndex=-1; 
	var elemDOInfo =0; 
	//first check if entry already exists. 
	if(myList.length > 0)
	{
		for(var j=0; j < myList.length; j++)
		{
			if(myList[j].id == itemID)
			{
				findIndex = j;
				break; 
			}
		}
	}
	if(findIndex != -1)
	{
		myList[findIndex].animTime = new Number(animTime);		
	}
	else
	{
		elemDOInfo = new sElementDOInfo(); 
		elemDOInfo.id = itemID; 
		elemDOInfo.animTime = new Number(animTime); 
		elemDOInfo.delay =  new Number(0); 
		myList.push(elemDOInfo);
	}
	return ;
	//if not then just add to the list 
	//if yes then modify the corresponding entry
}

function UIH_UpdateEffectValuesInNode(myList)
{
	//assuming that the list is already sorted update the intial delay time based on previous entries
	var str=""; 
	var node; 
	var listlen = myList.length; 
	if(listlen < 2)
		return ;
	str += "[ID=" + myList[0].id + ", delay=" + myList[0].delay + ']';
	for(var k=1; k< listlen; k++)
	{
		str += "[ID=" + myList[k].id + ", delay=" + myList[k].delay + ']';
		node = document.getElementById(myList[k].id); 		
		var effectParam = node.getAttribute('data-effect'); 
		if(effectParam)
		{
			//if defined then get delay and animation value 
			var effectParamArr = effectParam.split(gEffectParamSep);
			effectParamArr[1] = myList[k].delay;	
			effectParam = ""; 
			for(var p=0; p < effectParamArr.length; p++)
			{
				effectParam += effectParamArr[p]; 
				effectParam += gEffectParamSep;
			}			
			UIH_UpdateContainerProperty(node.id, false, 'data-effect', effectParam, "",  true);
		}
	}
	//Debug_Message(str);
	//return the list  
}
function UIH_UpdateDelayValuesInList(myList)
{
	var str=""; 
	var node; 
	var listlen = myList.length; 
	if(listlen < 2)
		return ;
	var value ="";
	var anim, delay;
	for(var k=1; k < listlen; k++)
	{
		myList[k].delay = myList[k-1].delay + myList[k-1].animTime;	
		anim = myList[k-1].animTime.toFixed(0); 
		delay = myList[k-1].delay.toFixed(0);
		value = myList[k].delay.toFixed(0); 
	}	
}
function UIH_DeleteEntryFromList(itemID, myList)
{
	if(myList.length > 0)
	{
		for(var j=0; j < myList.length; j++)
		{
			if(myList[j].id == itemID)
			{				
				myList.splice(j, 1); 
				return ;  
			}
		}
	}
}

function UIH_getItemIndexInList(itemID, myList)
{
	if(myList.length > 0)
	{
		for(var j=0; j < myList.length; j++)
		{
			if(myList[j].id == itemID)
			{				
				
				return j ;  
			}
		}
	}
	return -1; 	
}

function UIH_UpdateEffectParamsOnUI()
{
	var type=0; 
	var effectArr;
	var effectvalue;	
	var Node = gCurrentObjContainerNode; 
	var JQSel = '#'+ Node.id; 
	var classType = $(JQSel).hasClass('OBJECT_CONTAINER'); 
	if(classType != true)
		return ; 
	
	if(Node.id == 'ALL_DATA_CONTAINER')
	{
		Node = gCurrentTreeNode;
		type =  gCurrentTreeNode.getAttribute('data-type'); 
		if(type != 'SCENE')
			return ; 
		effectvalue = Node.getAttribute('data-slideEffect');
	}	
	else
		effectvalue = Node.getAttribute('data-effect');	
		
	//now first get the data-effect attribute values
	
	//split it into array 
	$('.EFFECT_PARAM').hide();
	//var gEffectTypes=['None','Blind','Bounce','Clip','Drop','Explode','Fade','Highlight','Puff','Pulsate','Scale','Shake','Size','Slide','Flip'];
	if((!effectvalue) || (effectvalue == 'null'))
	{	
		
		WAL_SetItemInDropDownList('TransEffectDDL', 0);
		return ; 
	}	
	effectArr = effectvalue.split(gEffectParamSep); 
	//now swicth based on the effect type used 
	var Index = UtilGetItemIndexFromArray(gEffectTypes, effectArr[0]); 
	WAL_SetItemInDropDownList('TransEffectDDL', Index);
	WAL_setNumberInputValue('effectDurationIP', effectArr[2]);	
	
	var paramValue; 
	switch(effectArr[0])
	{
	case "none":
		break; 
	case "blind":
		WAL_hideWidget('blindparam', false);
		paramValue = effectArr[3].split(':'); 
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gblindDirTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('blindDirectionDDL', Index);			
		break; 
	case "bounce":
		WAL_hideWidget('bounceparam', false);
		paramValue = effectArr[3].split(':'); 		
		WAL_setNumberInputValue('bounceDistanceIP', paramValue);
		paramValue = effectArr[4].split(':'); 	
		WAL_setNumberInputValue('bounceNumIP', paramValue);		
		break; 
	case "clip":
		WAL_hideWidget('clipparam', false);
		paramValue = effectArr[3].split(':'); 
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gblindDirTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('clipDirectionDDL', Index);			
		break; 
	case "drop":
		WAL_hideWidget('dropparam', false);
		paramValue = effectArr[3].split(':'); 
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gblindDirTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('dropDirectionDDL', Index);			
		break; 
	case "explode":
		WAL_hideWidget('explodeparam', false);
		paramValue = effectArr[3].split(':');		
		WAL_setNumberInputValue('explodeNumIP', paramValue);		
		break; 
	case "fade":
		WAL_hideWidget('fadeparam', false);
		paramValue = effectArr[3].split(':');		
		WAL_setNumberInputValue('fadeNumIP', paramValue);		
		break; 
	case "puff":
		WAL_hideWidget('puffparam', false);
		paramValue = effectArr[3].split(':');		
		WAL_setNumberInputValue('puffpercentNumIP', paramValue);		
		break; 
	case "pulsate":
		WAL_hideWidget('pulsateparam', false);
		paramValue = effectArr[3].split(':');		
		WAL_setNumberInputValue('pulsateNumIP', paramValue);		
		break; 
	case "scale":
		WAL_hideWidget('scaleparam', false);
		paramValue = effectArr[3].split(':');	
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gScaleDirType, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('scaleDirectionDDL', Index);
		
		
		paramValue = effectArr[4].split(':');	
		//paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
	/*	Index = UtilGetItemIndexFromArray(gScaleOrigType, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('scaleoriginDDL', Index);	
		*/
		
		paramValue = effectArr[5].split(':');
		WAL_setNumberInputValue('scalepercentNumIP', paramValue[1]);		
		break; 
	case "shake":
		WAL_hideWidget('shakeparam', false);
		paramValue = effectArr[3].split(':');	
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gShakeDirTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('shakeDirectionDDL', Index);
			
		paramValue = effectArr[4].split(':');
		WAL_setNumberInputValue('shakedistanceNumIP', paramValue[1]);
		
		paramValue = effectArr[5].split(':');
		WAL_setNumberInputValue('shaketimesNumIP', paramValue[1]);
		
		break; 
	case "slide":
		WAL_hideWidget('slideparam', false);
		paramValue = effectArr[3].split(':');	
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gSlideDirTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value");
			return ;
		}
		WAL_SetItemInDropDownList('slideDirectionDDL', Index);
			
		paramValue = effectArr[4].split(':');
		WAL_setNumberInputValue('slidedistanceNumIP', paramValue[1]);		
		break; 
	case "flip":
		WAL_hideWidget('flipparam', false);
		paramValue = effectArr[3].split(':');	
		paramValue[1] = paramValue[1].substring(1,paramValue[1].length-1); 
		Index = UtilGetItemIndexFromArray(gFlipDirParamTypes, paramValue[1]); 
		if(Index == -1)
		{
			Debug_Message("Wrong Index Value of Flip Index");
			return ;
		}
		WAL_SetItemInDropDownList('flipDirectionDDL', Index);			
		paramValue = effectArr[4].split(':');
		WAL_setNumberInputValue('flipspeedNumIP', paramValue[1]);		
		break; 
	
	default:
		break; 
	}
}

function UIH_previewElementEffect(elemID)
{
	var type;	
	var JQSel = '#'+ elemID; 
	
	var Node ; 
	if(elemID == 'ALL_DATA_CONTAINER')
	{		
		type =  gCurrentTreeNode.getAttribute('data-type'); 
		if(type != 'SCENE')
			return ; 
		effectvalue = gCurrentTreeNode.getAttribute('data-slideEffect');
	}	
	else
	{
		var classType = $(JQSel).hasClass('OBJECT_CONTAINER'); 
		if(classType != true)
			return ; 
		
		Node =  document.getElementById(elemID);
		effectvalue = Node.getAttribute('data-effect');	
	}
		
	if( (!effectvalue) || (effectvalue== 'null') )
		return ; 
	
	
	var effectPropArr = effectvalue.split(gEffectParamSep);
	effectParam = "{";
	for(var a=3; a <effectPropArr.length; a++)
	{
		if(effectPropArr[a])
			effectParam += effectPropArr[a]+',';		
	}					
	effectParam += "}";				
	var str = "effectParam="+ effectParam; 
	eval(str);	
	var animTime ; 
	var initdelay ;
	str = 'animTime='+effectPropArr[2]; 
	eval(str); 	
	$(JQSel).hide();
	//$(JQSel).show(effectPropArr[0],effectParam, effectPropArr[2], "");
	if(effectPropArr[0]== 'flip')
	{
		$(JQSel).hide();
		$(JQSel).show().flip(effectParam); 
		//$(JQSel).flip(effectParam);
	}
	else
		$(JQSel).show(effectPropArr[0],effectParam, animTime, "");	
	
}

function UIH_ShowElemDOListDialog()
{
	WAL_showModalWindow('elemDOListDlg', "UIH_OnLBOK", "");
    var mysource = [];
    if(gElementDOList.length > 1)
    {
    	for(var j=1; j < gElementDOList.length; j++)
        {
        	mysource.push(gElementDOList[j].id); 
        }
    	
    }
    WAL_ListBoxUpdateData('elemDOlistbox', mysource);
}

function UIH_OnLBOK()
{
	// get the final list
	var elemDOInfo = 0; 
	var items = WAL_ListBoxItemArray('elemDOlistbox'); 	
	//create a temp list 
	var templist = []; 
	var tgtIndex; 
	//now get entry from the listbox and corresponding from gElementDOlist
	for(var i=0; i < items.length; i++)
	{
		tgtIndex = UIH_getItemIndexInList(items[i], gElementDOList);
		/*elemDOInfo =  0; 
		elemDOInfo =  new sElementDOInfo(); 
		elemDOInfo.id= gElementDOList[i].id; 
		elemDOInfo.animTime = gElementDOList[i].animTime; 
		*/
		//now update temp list 
		templist.push(gElementDOList[tgtIndex]); 
	}		
		
	//once done with temp list , then clean up gElementDOlist. 
	if(gElementDOList.length > 0)
		gElementDOList.splice(1, gElementDOList.length-1);
	
	//now update the gElementDOlist with the temp list entries 
	for(var j=0; j < templist.length; j++)
	{
		gElementDOList.push(templist[j]); 
	}
	//now update the delay values 
	UIH_UpdateDelayValuesInList(gElementDOList); 
	UIH_UpdateEffectValuesInNode(gElementDOList);
	//now calculate the delays of all elements again and we are done 
	
}

function UIH_LBMoveUpItem(){
	var index = WAL_ListBoxGetSelectedItemIndex('elemDOlistbox');
	if(index == 0 )
		return ; 
	
	WAL_ListBoxMoveItem('elemDOlistbox', true); 
}

function UIH_LBMoveDownItem(){	
	var index = WAL_ListBoxGetSelectedItemIndex('elemDOlistbox');	
	WAL_ListBoxMoveItem('elemDOlistbox', false); 
}

function UIH_OnLBItemSelectHandling(Index)
{
	
	var LBItem = WAL_ListBoxGetSelectedItem('elemDOlistbox'); 
	//Debug_Message("Item ID=" + LBItem.label); 
	var JQsel = ".OBJECT_CONTAINER"; 	
	$(JQsel).css('border', "");		
	var node = document.getElementById(LBItem.label);
	if(!node)
		return ; 
	node.style.border = gObjSelBorderValue; 
}

function UIH_PreviewSlideEffects()
{
	var JQSel; 
	//first hide all object_contained in the gElementDOlist 
	if(gElementDOList.length < 1)
		return ; 

	JQSel = '#'+'ALL_DATA_CONTAINER';
	$(JQSel).hide(); 
	
	for(var j=1; j < gElementDOList.length; j++)
	{
		JQSel = '#'+gElementDOList[j].id; 
		$(JQSel).hide(); 
	}
		//first show the Slide i.e. ALL_DATA_CONTAINER	
	var node = document.getElementById(gElementDOList[0].id);
	var effectValueStr = node.getAttribute('data-slideEffect');
	UIH_ShowElementWithEffects('ALL_DATA_CONTAINER',effectValueStr ); 
	
	for(var k=1; k < gElementDOList.length; k++)
	{
		node = document.getElementById(gElementDOList[k].id);
		effectValueStr = node.getAttribute('data-effect');
		UIH_ShowElementWithEffects(node.id,effectValueStr ); 
	}
	//then show elements based on the gElementDOlist and corresponding effects.	
}

function UIH_ShowElementWithEffects(id,effectvaluestr)
{
	var JQSel = '#'+id; 
	if(!effectvaluestr)
	{
		$(JQSel).show();
		return ;
	}
		
	var effectPropArr = effectvaluestr.split(gEffectParamSep);
	var effectParam = "{";
	for(var a=3; a <effectPropArr.length; a++)
	{
		if(effectPropArr[a])
			effectParam += effectPropArr[a]+',';		
	}					
	effectParam += "}";				
	var str = "effectParam="+ effectParam; 
	eval(str);	
	var animTime ; 
	var initdelay ;
	str = 'animTime='+effectPropArr[2]; 
	eval(str);	
	str = 'initdelay='+effectPropArr[1]; 
	eval(str);	
	if(effectPropArr[0]== 'flip')
	{
		$(JQSel).hide();
		$(JQSel).delay(initdelay).show().flip(effectParam); 
		//$(JQSel).flip(effectParam);
	}
	else
		$(JQSel).delay(initdelay).show(effectPropArr[0],effectParam, animTime, "");	
	
}

function UIH_HandleforAVSyncSlider(value)
{
	//var valueRange = WAL_getSliderRangeValues('AVRangeSlider');
	WAL_setNumberInputValue('startTime', value.rangeStart);
	WAL_setNumberInputValue('endTime', value.rangeEnd);
	gCurrSlideStartTime = new Number(value.rangeStart); 
	gCurrSlideEndTime = new Number(value.rangeEnd); 	
}

function UIH_HandlerForAVSlideEnd(value)
{
	gCurrSlideStartTime = new Number(value.rangeStart); 
	gCurrSlideEndTime = new Number(value.rangeEnd); 	
	gAVPlayerObject.currentTime = gCurrSlideStartTime;
}


function UIH_ApplyTimingInfo()
{
	var AVID = gSlideInfoList[gCurrentSlideIndex].AVObjectID; 
	var currentVidTime; 
	var nextAVSlideIndex=-1; 
	var prevAVSlideIndex=-1;
	
	if(AVID)
	{
		if(!gAVPlayerObject)
			return ;		
		if(gAVPlayerObject.paused != true)
		{
			Debug_Message("Stop playback to Insert Start or End Time"); 
			return ; 
		}
		if(gAVPlayerObject.id != gSlideInfoList[gCurrentSlideIndex].AVObjectID)
			gAVPlayerObject = document.getElementById(gSlideInfoList[gCurrentSlideIndex].AVObjectID); 
		
		if( (gCurrentSlideIndex > 0 ) && (gCurrentSlideIndex < gSlideInfoList.length-1))
		 {
			 for(var k = gCurrentSlideIndex-1; k >= 0; k--)
			 {
				 if( (gSlideInfoList[k].AVObjectID) && (gSlideInfoList[k].AVObjectID == gSlideInfoList[gCurrentSlideIndex].AVObjectID))
				 {
					 prevAVSlideIndex = k;
					 break; 
				 }
			 }
		 }		 
		 //get the next valid slide 
		 if(gCurrentSlideIndex < gSlideInfoList.length)
		 {
			 for(var j = gCurrentSlideIndex+1; j <gSlideInfoList.length; j++)
			 {
				 if( (gSlideInfoList[j].AVObjectID) && (gSlideInfoList[j].AVObjectID == gSlideInfoList[gCurrentSlideIndex].AVObjectID))
				 {
					 nextAVSlideIndex = j; 
					 break; 
				 }
			 }			 
		 }		 		
		currentVidTime = gCurrSlideStartTime; 
		var currTimestr = currentVidTime.toFixed(0); 			
		if( (prevAVSlideIndex != -1) && (gSlideInfoList[prevAVSlideIndex].endTime >= 0) )
		{
			if(currentVidTime < gSlideInfoList[prevAVSlideIndex].endTime)
			{
				Debug_Message("The Start time = " + currTimestr + "should be greater than End time of Previous Slide="+ gSlideInfoList[prevAVSlideIndex].endTime.toFixed(2));
				return ; 
			}
		}
		else if( (nextAVSlideIndex > 0) && (gSlideInfoList[nextAVSlideIndex].startTime > 0) )
		{
			if(currentVidTime > gSlideInfoList[nextAVSlideIndex].startTime)
			{
				Debug_Message("The Start = " + currTimestr + "time should be less than Start time = " + gSlideInfoList[nextAVSlideIndex].startTime.toFixed(2)+ " of next Slide"); 
				return ; 
			}
		}
		else if((gSlideInfoList[gCurrentSlideIndex].endTime > 0) && (currentVidTime > gSlideInfoList[gCurrentSlideIndex].endTime) )
		{
			Debug_Message("Start time=" + currTimestr + "cannot exceed End time=" + gSlideInfoList[gCurrentSlideIndex].endTime.toFixed(2)+ "of Current Slide");
			return ; 
		}
		gSlideInfoList[gCurrentSlideIndex].startTime =  currentVidTime;//toFixed(2); 	
		
		currentVidTime = gCurrSlideEndTime;
		currTimestr = currentVidTime.toFixed(0); 	
		if((gSlideInfoList[gCurrentSlideIndex].startTime >= 0 ) && (currentVidTime < gSlideInfoList[gCurrentSlideIndex].startTime ) )
		{			
			Debug_Message("Start time= " + gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(2) + "cannot exceed End time = "+currTimestr);
			return ; 
		}			
		else if( (nextAVSlideIndex > 0) && (gSlideInfoList[nextAVSlideIndex].startTime > 0) )
		{
			if(currentVidTime > gSlideInfoList[nextAVSlideIndex].startTime)
			{
				Debug_Message("The End time="+currTimestr + "should be less than Start time="+gSlideInfoList[nextAVSlideIndex].startTime.toFixed(2) + "of next Slide"); 
				return ; 
			}
		}				
		gSlideInfoList[gCurrentSlideIndex].endTime = currentVidTime;//.toFixed(2); 		
		
		if ( (gSlideInfoList[gCurrentSlideIndex].endTime > 0 ) && (gSlideInfoList[gCurrentSlideIndex].startTime >= 0 ) )
			gSlideInfoList[gCurrentSlideIndex].duration = gSlideInfoList[gCurrentSlideIndex].endTime - gSlideInfoList[gCurrentSlideIndex].startTime;
		else
			gSlideInfoList[gCurrentSlideIndex].duration = 0; 
		
		var sceneID =  gCurrentTreeNode.id; 		
		
		DH_setTreeItemAttribute(sceneID, 'data-startTime', gSlideInfoList[gCurrentSlideIndex].startTime.toFixed(0));
		DH_setTreeItemAttribute(sceneID, 'data-endTime', gSlideInfoList[gCurrentSlideIndex].endTime.toFixed(0));			
		DH_setTreeItemAttribute(sceneID, 'data-duration', gSlideInfoList[gCurrentSlideIndex].duration.toFixed(0));		
		UIH_UpdateSlideTitleText("TM_"+gSlideInfoList[gCurrentSlideIndex].id); 
	}	
	else
	{
		gSlideInfoList[gCurrentSlideIndex].startTime=0; 
		gSlideInfoList[gCurrentSlideIndex].endTime = gCurrSlideEndTime - gCurrSlideStartTime; 
		DH_setTreeItemAttribute("TM_"+gSlideInfoList[gCurrentSlideIndex].id, 'data-duration', Value);
		UIH_UpdateSlideTitleText("TM_"+gSlideInfoList[gCurrentSlideIndex].id);
	}
}



