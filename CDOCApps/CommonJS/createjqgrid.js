var USER_GRID_UNIQUE_ID ;
var ciRow,ciCol;

var ResizeTable = function(Table){
	var TableHeight		=	Table.height();
    
	var MaxDivHeight	=	$('body').height();
	var MaxDivWidth		=	$('body').width();
	var SetHeight		=	MaxDivHeight*$(Table).attr('gridHeight');
	var SetWidth		=	MaxDivWidth*$(Table).attr('gridWidth');
	Table.jqGrid('setGridHeight', SetHeight);
	Table.jqGrid('setGridWidth', SetWidth);
};

var fetchjqGridObject = function(gridObject){
	return {
			datatype: 	function(postdata){
				var ts = gridObject; 
				var p = gridObject.p;
				jQuery.ajax({
					url:$(gridObject).attr('url'),
					data:postdata,
					contentType: "application/json",
					dataType:"json",
					complete: function(jsondata,stat){
					  if(stat=="success") {
							TotalPages		=	jsondata.responseJSON.total;
							ResponseData	=	jsondata.responseJSON.rows;
							var thegrid 	= jQuery('#'+$(gridObject).attr('id'))[0];
							thegrid.addJSONData(jsondata.responseJSON);
							if($.isFunction(p.loadComplete)) {
								p.loadComplete.call(ts,jsondata.responseJSON);
							}
					  }
				   }
				});
			},
			colNames:$(gridObject).attr('colNames').split(','),
			colModel:window[$(gridObject).attr('colModel')](),
			jsonReader : {
				 root: "rows",
				 userdata: "rows",
				 records: "records",
				 viewrecords: true,
				 repeatitems: true,
				 cell: "",
                 page: function (obj) { return obj.rows.length > 0 ? obj.page : 0; },
				 id: "0"
			},
			idPrefix: $(gridObject).attr('id') + "_",
			rowNum:30,
			rowList:[10,15,30,50],
			gridview: true,
			ignoreCase: true,
			autoencode: true,
			toolbarfilter: true,
   			emptyrecords: "No records found",
   			autowidth: true,
  			shrinktoFit: true,
  			forceFit: true,
 			pager : '#gridpager_'+$(gridObject).attr('id'),
 			pagerpos:'center',
			recordpos: 'right',
			multiselect:true,
			viewrecords: true,
			pginput : true,
  			sortname: $(gridObject).attr('sortBy'),
			sortorder: 'asc',
			toolbar: getToolbarProp(gridObject),
			cellsubmit: 'remote',
			multiselect:$(gridObject).attr('multiselect') ? $(gridObject).attr('multiselect') : false,
			editurl:$(gridObject).attr('userEditUrl') ? $(gridObject).attr('userEditUrl') : "",
			cellEdit: $(gridObject).attr('cellSelector') != null,
			grouping: $(gridObject).attr('grouping') != null,
		   	groupingView : {
		   		groupField : getGroupFields(gridObject) ,
		   		groupDataSorted : true,
		   		groupColumnShow : getGroupColumnShow(gridObject),
		   		groupCollapse : false
		   	},
		   	onClickGroup: function(hid) {
		   	},
			onSelectRow : function(id) {
				on_review_checkbox_change();
			},
			formatCell : function(rowid, cellname, value, iRow, iCol) {
				return value.replace('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'," ")
			},
			beforeEditCell : function(rowid, cellname, value, iRow, iCol) { 
				var attr = $(gridObject).attr('editable');
				if(typeof attr != typeof undefined && attr !== false) {
					clearGridRefreshTimer(refreshTimerID);
				}
			},
			afterSubmit	:	function(response,postdata){
				console.log(response);
			},afterShowForm: function(formid) {
				alert(formid);
			},
			afterEditCell : function(rowid, cellname, value, iRow, iCol) {
				ciRow = iRow;
				ciCol = iCol;
			},
			beforeSaveCell : function(rowid, cellname, value, iRow, iCol) {
			},
			beforeSubmitCell : function(rowid,cellname,value,iRow,iCol) {
			var rdata = $(gridObject).getRowData(rowid);
				var i = $(rdata.JobID).val();
				return {jid: i,param: cellname}; // Modify the POST Request 
			},
			afterSaveCell : function(rowid, cellname, value, iRow, iCol) {
				var attr = $(gridObject).attr('editable');
				if(typeof attr != typeof undefined && attr !== false) {
					refreshTimerID = setGridRefreshTimer($(gridObject).attr('id'));
				}				
			},
			gridComplete: window[$(gridObject).attr('gridComplete')].gridComplete,
			loadComplete: function() {
				var gridParams = $(gridObject).jqGrid('getGridParam');
				if(gridParams.scrollTopPosition != undefined) {
					$(gridObject).closest(".ui-jqgrid-bdiv").scrollTop(gridParams.scrollTopPosition);
				}
			}		
			
		};
};

var getToolbarProp	=	function(gridObject){
	var defaultProp	=	[false,'top'];
	if(gridObject.hasAttribute('gridToolbar_Visible'))
		defaultProp	=	[true,gridObject.getAttribute('gridToolbar_Visible')];
	return defaultProp;
};

var customJqgrid = function(gridObject){
	var GridUniqueid	=	$(gridObject).attr('id');
	var ResponseData	=	"";
	var TotalPages;
	var jqgridOBJECT = fetchjqGridObject(gridObject);
	jQuery('#'+GridUniqueid).jqGrid(jqgridOBJECT);
};

var getGroupFields = function(gridObject) {
	if($(gridObject).attr('grouping'))
		return $(gridObject).attr('grouping').split(',');
};

var getGroupColumnShow = function(gridObject) {
	var groupColShowProperties = new Object;
	groupColShowProperties.Name = false;
	groupColShowProperties.PartNumber = false;
	
	var showProp = [];
	if($(gridObject).attr('grouping')) {
		if($(gridObject).attr('grouping').indexOf(',') != -1) {
			for(key in groupColShowProperties) {
				showProp.push(groupColShowProperties[key]);
			}
		}else {
			showProp.push(groupColShowProperties[$(gridObject).attr('grouping')]);
		}
	}else {
		showProp.push(groupColShowProperties.Name);
	}
	return showProp;
};


$(window).on('resize.jqGrid',function(event) {
	var gridList = $('.convertTojqGrid');
	gridList.each(function(){
		$('#'+$(this).attr('id')).jqGrid('setGridWidth', $('body').width() - 50);
	});
});

var RenderJQGrids = function(){ 	
	$('.convertTojqGrid').each(function(){
		customJqgrid($(this)[0]);
	});
};

$(function(){
	RenderJQGrids();
});

var createExcelFromGrid = function(gridObject,filename) {
    var colName = '';
    var row, html;
    var htmlRegex=/(<([^>]+)>)/ig;
    var outputArr = [];
    var rowDataList = gridObject.jqGrid('getGridParam', 'userData');
    grid = gridObject;
    var rowIDList = grid.getDataIDs();
    var row = grid.getRowData(rowIDList[0]);
    var colList = [];
    var i = 0;
    for(var cName in row) {
    	colList[i++] = cName;
    }
    
    var rowArray = [];
    for(var j=0;j<rowIDList.length;j++) {
        row = grid.getRowData(rowIDList[j]);
        var delimitedRow = '';
        for(var i = 0 ; i<colList.length ; i++ ) {
        	row[colList[i]]=row[colList[i]].replace(htmlRegex,"");
        	delimitedRow += row[colList[i]] + ';'; 
        }
        rowArray.push(delimitedRow);
    }    
	var colString = colList.join(';');
    exportTableToExcel(colString, rowArray, filename);
};
