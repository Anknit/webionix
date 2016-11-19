<?php
session_start();
session_name('web_admin');
require_once __DIR__.'/GX_Config.php'; 
require_once __DIR__.'./../CommonPHP/DBManager/DbMgr.php';
function GX_InitializeContentInfoDB(){
	$config = array('database' =>$GLOBALS['DBNAME'],
			'host'=>$GLOBALS['DBHOSTADDR'],
			'port' => $GLOBALS['DBPORT'],
			'username' => $GLOBALS['DBUSER'],
			'password' => $GLOBALS['DBPWD'],
			'dbType'=>	'mysql'
	);
	$gDBObj = new DBMgr();
	$retval = $gDBObj->Initialize($config);
	if(!$retval){
		return $gDBObj->getLastError();
		return ;
	}
	return $gDBObj; 
}
if(isset($_SESSION['usertype']) &&  $_SESSION['usertype'] == 'admin') {
    returnTableData($_REQUEST['data']);
}
function getTotalRecords($clause, $table){
	$query	=	"Select Count(*) AS TotalRecordsAvailable FROM ".$table;
	if($clause != '')
		$query	.=	" WHERE ".$clause;
    $DbObj = GX_InitializeContentInfoDB();
	$TotalRecordsResult	=	$DbObj->Query($query,'ASSOC', '');
	$recordCount = $TotalRecordsResult[0]['TotalRecordsAvailable'];
	return $recordCount;
}
function returnUsersData($clause, $orderClause) {
	$queryStr = "Select * from userinfo";
	if($clause != ''){
		$queryStr .=	" where ".$clause;
	}
	
	if($orderClause != ''){
		$queryStr .=	" order by ".$orderClause;
	}
    
    $DbObj = GX_InitializeContentInfoDB();
	$data	=	$DbObj->Query($queryStr);
	return $data;
}

function returnTableData($datatable) {
    if($datatable == 'user') {
        $tableName = 'userinfo';
    }
	$limit	=	$_GET['rows'];
    $clause =   '';
	if($limit != -1)
	{
		$page	=	$_GET['page'];
		$start = $limit*$page - $limit;
		$recordCount	=	getTotalRecords($clause, $tableName);
		$orderClause	=	$_GET['sidx']." ".$_GET['sord']." LIMIT $start , $limit";
		$total_pages = ceil($recordCount/$limit);
	}
	else
	{
		$page	=	1;
		$total_pages = 1;
	}
	if($datatable == 'user') {
        $data	=	returnUsersData($clause, $orderClause);
    }
	$jTableResult = array();
	$jTableResult['total'] 		= $total_pages;
	$jTableResult['page'] 		= $page;
	$jTableResult['records']	= $recordCount;
	$jTableResult['rows'] 	 	= $data;
	echo json_encode($jTableResult);
}
?>