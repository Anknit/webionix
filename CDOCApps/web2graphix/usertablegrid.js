ResizeUserGrid = 0;
GRID_UNIQUE_ID	=	'UserTable';

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

var userscolmodel = function() {
	var colModel = [
	                	{name:'username',        index:'username'       ,   width:100},
	                	{name:'firstname',        index:'firstname'       ,   width:100},
	                	{name:'lastname',        index:'lastname'       ,   width:100},
	                	{name:'workspacename',        index:'workspacename'       ,   width:100},
	                	{name:'emailid',        index:'emailid'       ,   width:100},
	                	{name:'status',        index:'status'       ,   width:100},
	                	{name:'usertype',        index:'usertype'       ,   width:100}
    ];
	return colModel;
};

var usersFormatterFunction = new Object();

function defineUsersFormatterFunction() {
	usersFormatterFunction.gridComplete	=	function(){
		var Table			=	$(this);
		if(ResizeUserGrid	==	0){
			CommonGridCompleteFunctions(Table);
			ResizeUserGrid++;
		}	
		worksOnAllGridComplete(Table);
    };
}
defineUsersFormatterFunction();