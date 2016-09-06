<?php
require_once 'GX_Config.php'; 
require_once __DIR__.'./../CommonPHP/DBManager/DbMgr.php';





/*
 * returns success or failure only 
 */

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

function GX_AddContentInfo($infoArr){
	$gDBObj = GX_InitializeContentInfoDB(); 
	date_default_timezone_set("Asia/Kolkata"); 
	$timeCurr = date('Y-m-d H:i:s');
	//$query = "INSERT INTO time (now) VALUES('$t')";
	$d_data = array('Table'=>'contentinfo','Fields'=>array('userID'=>$infoArr['userID'],
			'filename'=>$infoArr['name'],
			'title'=>$infoArr['title'],
			'descr'=>$infoArr['descr'], 
			'modifydate'=>$timeCurr
			));
	$retval = $gDBObj->Insert($d_data);
	
	return $retval; 
}

/*
 * Update teh content info 
 * pass an associative array 
 */
/*
function GX_UpdateContentInfo($contentID, $infoArr){
	$gDBObj = GX_InitializeContentInfoDB(); 
	date_default_timezone_set("Asia/Kolkata"); 
	$timeCurr = date('Y-m-d H:i:s');
	$d_data = array('Table'=>'contentinfo','Fields'=>array('userID'=>$infoArr['userID'],
			'filename'=>$infoArr['name'],
			'title'=>$infoArr['title'],
			'descr'=>$infoArr['descr'], 
			'modifydate'=>$timeCurr,
			'publishedURL'=>$infoArr['pubURL'], 
			'pubdate'=>$timeCurr),			
			'clause'=>"id='". "$contentID"."'");
	if(!$gDBObj->Update($d_data)){
		return FALSE; 
	}
	return TRUE; 
}
*/

function GX_UpdateMetadata($contentID, $infoArr){
	$gDBObj = GX_InitializeContentInfoDB();
	date_default_timezone_set("Asia/Kolkata");
	$timeCurr = date('Y-m-d H:i:s');
	$d_data = array('Table'=>'contentinfo','Fields'=>array(			
			'title'=>$infoArr['title'],
			'descr'=>$infoArr['descr'],
			'modifydate'=>$timeCurr), 
						
			'clause'=>"id='". "$contentID"."'");
	if(!$gDBObj->Update($d_data)){
		return FALSE;
	}
	return TRUE;
}

function GX_UpdateModficationTime($contentID){
	$gDBObj = GX_InitializeContentInfoDB();
	date_default_timezone_set("Asia/Kolkata");
	$timeCurr = date('Y-m-d H:i:s');
	$d_data = array('Table'=>'contentinfo','Fields'=>array(
						'modifydate'=>$timeCurr),
			'clause'=>"id='". "$contentID"."'");
	if(!$gDBObj->Update($d_data)){
		return FALSE;
	}
	return TRUE;
}

function GX_UpdatePublicationInfo($contentID, $infoArr){
	$gDBObj = GX_InitializeContentInfoDB();
	date_default_timezone_set("Asia/Kolkata");
	$timeCurr = date('Y-m-d H:i:s');
	$d_data = array('Table'=>'contentinfo','Fields'=>array(
			'publishedURL'=>$infoArr['publishedURL'],
			'pubdate'=>$timeCurr),			
			'clause'=>"id='". "$contentID"."'");
	if(!$gDBObj->Update($d_data)){
		return FALSE;
	}
	return TRUE;
}

/*
 * return  an associaive array od info for a content name  and an USer ID
 * @param unknown_type $name
 */
function GX_GetContentInfo($name, $userID){
	$gDBObj = GX_InitializeContentInfoDB(); 
	$query    =    array('Fields'=>'ID,userID,filename,title,descr,modifydate,publishedURL,pubdate',			
			'Table'=>'contentinfo',
			'clause'=>"filename='". "$name"."'" . " AND " . "userID='". "$userID"."'");
	$d_data	=	$gDBObj->Read($query);
	if($d_data)
		return $d_data[0]; 
	else 
		return NULL;   
}

/**
 * function : GX_DeleteContentInfo
 * @param unknown_type $contentID
 * description: Deletes the content info for a specific ID 
 */

function GX_DeleteContentInfo($contentID){
	$gDBObj = GX_InitializeContentInfoDB(); 
	
	$ReadTestArray	=	array(
			'Table'=> 'contentinfo',
			'clause'=>"id='". "$contentID"."'");
	$Result	=	$gDBObj->Delete($ReadTestArray);
}
/*
 * provides list of content for an user account 
 */
function GX_ListofContent($userID){
	$gDBObj = GX_InitializeContentInfoDB(); 
	$query    =    array('Fields'=>'ID,filename,title,descr,modifydate,publishedURL,pubdate',
			'Table'=>'contentinfo',
			'clause'=>"userID='". "$userID"."'");
	$d_data	=	$gDBObj->Read($query);	
	if($d_data)
		return $d_data;
	else
		return 0;
}

function GX_ListofPublishedURL($userID){
	$gDBObj = GX_InitializeContentInfoDB();
	$query    =    array('Fields'=>'ID,filename,title,descr,publishedURL,pubdate',
			'Table'=>'contentinfo',
			'clause'=>"userID='". "$userID"."'" . ' AND ' . "publishedURL !='" . "NULL" . "'");
	$d_data	=	$gDBObj->Read($query,"ASSOC", "AS_JSON");
	if($d_data)
		return $d_data;	
}
?>