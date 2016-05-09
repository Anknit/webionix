var gWidgetTooltipID = 'widgettooltip' ;


function GX_InitializeToolbar()
{
		//intializing the main toolbar 
	WAL_createCustomButton('object_icon', 'GX_ToolbarHandler',gWidgetTooltipID);
	WAL_createCustomButton('text_icon', 'GX_ToolbarHandler',gWidgetTooltipID);   
    WAL_createCustomButton('image_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('import_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('marker_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('grid_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('snap2grid_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('multiselect_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('align_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('zoom_icon', 'GX_ToolbarHandler', gWidgetTooltipID);   
    
    WAL_createCustomButton('group_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('circle_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('ellipse_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('square_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('polygon_icon', 'GX_ToolbarHandler', gWidgetTooltipID);
    WAL_createCustomButton('freehand_icon', 'GX_ToolbarHandler', gWidgetTooltipID);  
    
    //this code t go into the intialization code later 
    //This sets the canvas related properties 
    var topheight = $('#topcontainer').height(); 	 
	var height = window.innerHeight - topheight -15; //480; //window.outerHeight; 
	var width = window.outerWidth ;
	WAL_createTab('rightTabs',  height, ''); 
	WAL_createTab('editorTabs',  height, ''); 
	GX_SetCanvasSize(600,400);     
}
function GX_SetCanvasSize(width, height){
	  
	  //setting the new dimension
	  $('#canvas').width(width); 
	  $('#canvas').height(height); 
	  var editorWidth = $('#editor_div').width(); 
	  var editorHeight = $('#editor_div').height();
	  var canvasWidth = $('#canvas').width(); 
	  var canvasHeight = $('#canvas').height(); 
	  var canvLeft = (editorWidth - canvasWidth)/2; 
	  if(canvLeft < 0)
		  canvLeft = 0; 
	  
	  var canvTop = (editorHeight - canvasHeight)/2;
	  if(canvTop < 0)
		  canvTop = 0; 
	  $('#canvas')[0].style.left = canvLeft +'px'; 
	  $('#canvas')[0].style.top = canvTop + 'px'; 
}