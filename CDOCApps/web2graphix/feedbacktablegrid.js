ResizeFeedbackGrid = 0;
GRID_UNIQUE_ID	=	'FeedbackTable';

var worksOnAllGridComplete	=	function(Table)
{
	var	RowDataArrays	=	Table.jqGrid('getRowData');
	return ;
//If no record is found the show no record found at the centre		
	if(RowDataArrays.length	==	0)	//If no records are found then maintain some height of table
	{
		Table.find('.jqgfirstrow').html('<td width="100%" height="200px" valign="middle" style="vertical-align:middle; border:none"><div style="text-align:center; width:100%">No records found</div></td>');
	}
};

var CommonGridCompleteFunctions = function(Table)
{
	//Get row datas in array
	var	RowDataArrays	=	Table.jqGrid('getRowData');
	ResizeTable(Table);
	ModifyGridHeaderProperties(Table);

	//createDropDownList();
	$('#t_'+GRID_UNIQUE_ID).css('border','none');
	$('#t_'+GRID_UNIQUE_ID).css('height','30px');
	$('#t_'+GRID_UNIQUE_ID).attr('align','left');
	$('#gridpager_'+GRID_UNIQUE_ID+' input.ui-pg-input').keyup(function(){
        var TotalPages = gridTable.jqGrid().getGridParam('lastpage');
		if($(this).val() > TotalPages){
			$(this).val(TotalPages);
			return false;
		}
		else
			return true;
	});
};

var feedbackscolmodel = function() {
	var colModel = [
	                	{name:'title',        index:'title'       ,   width:100},
	                	{name:'description',        index:'description'       ,   width:100},
	                	{name:'emailid',        index:'userinfo.emailid'       ,   width:100},
    ];
	return colModel;
};

var feedbacksFormatterFunction = new Object();

function defineFeedbacksFormatterFunction() {
	feedbacksFormatterFunction.gridComplete	=	function(){
		var Table			=	$(this);
		if(ResizeFeedbackGrid	==	0){
			CommonGridCompleteFunctions(Table);
			ResizeFeedbackGrid++;
		}	
		worksOnAllGridComplete(Table);
    };
}
defineFeedbacksFormatterFunction();