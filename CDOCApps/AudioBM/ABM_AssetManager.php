<?php
//Include_once "ABM_DBInit.php";
//require_once '../CommonPHP/DBManager/DbMgrInterface.php';
require_once __DIR__.'./../CommonPHP/DBManager/DbMgrInterface.php';
/* local DB settings 
$config	=	array();
$config['dbType']		=	'mysql';
$config['host']			=	'localhost';
$config['port']			=	'3306';
$config['username']		=	'cdocuser';
$config['password']		=	'';
$config['database']		=	'cdocapptestdb';
*/ 

 
$config	=	array();
$config['dbType']		=	'mysql';
$config['host']			=	'172.31.61.104';
$config['port']			=	'3306';
$config['username']		=	'cdocuser';
$config['password']		=	'#cdoc123';
$config['database']		=	'cdocapptestdb';
 


$mysqlObj = new DBMgr();
$retval = $mysqlObj->Initialize($config);
if(!$retval){
	echo $mysqlObj->getLastError();
	return ;
}

/*
$config['dbType']		=	strtolower($type);
$config['servername']	=	$config['host'];
$config['Port']			=	$config['port'];
$config['userName']		=	$config['username'];
$config['passWord']		=	$config['passWord'];
$config['DatabaseName']	=	$config['DatabaseName'];
*/
function GX_ExportMetaData($filename, $title, $category){
	$dbhandle = GX_DBInitialize();
	//$query = "INSERT INTO exportedassetinfo (id, filename, title, category) VALUES(NULL, $filename, $title, $category)";
	
	//$query = 'INSERT INTO exportedassetinfo (id, filename, title, category) VALUES(NULL, "NeoDirect.svg", "Pure Title", 
	//"GreatEllipse")';
	$query = 'INSERT INTO exportedassetinfo (id, filename, title, category) VALUES(NULL,"' . $filename . '", "' . 
	 $title . '", "' . $category . '")';
	$result = mysqli_query($dbhandle, $query);
	if(!$result)
		return False;
	else{		
		return True;
	}		
}
/*
function GX_ImportMetaData(){
	$dbhandle = GX_DBInitialize();	
	$ReadArray	=	array(
			'Fields'=> 'ID, URL, title, summary,author, ImageURL',
			'Table'=> 'audiometainfo',			
			'order'	=> 'title DESC'
	);	
	$Result = Read($dbhandle, $ReadArray, 'aSsOc', 'AS_JSON'); 
	if(!$Result)
		return 0;
	else{
		return $Result;
	}
}
*/

function GX_ImportMetaData(){	
	$ReadArray	=	array(
			'Fields'=> 'ID, URL, title, summary,author, ImageURL',
			'Table'=> 'audiometainfo',			
			'order'	=> 'title DESC'
	);	
	global $mysqlObj; 
	$Result	=	$mysqlObj->Read($ReadArray, 'aSsOc', 'AS_JSON');
	if(!$Result)
		return 0; 
	else 
		return $Result; 
}
/*
$UpdateArray	=	array(
		'Table'=> 'exportedassetinfo',
		'Fields'=> array('title'=> 'New fhsfhs Hexagon'
		),
		'clause'=> 'filename="myhexagon.svg"'
);
$Result	=	DB_Update($UpdateArray);
*/

function GX_UpdateBookmarkData($respData){
	parse_str($respData);
	$audioID = $AUDIOID; 
	$bmText = $BMTEXT; 
	$UpdateArray	=	array(
			'Table'=> 'audiometainfo',
			'Fields'=> array('bookmark'=> $bmText
			),
			'clause'=> 'ID='. $audioID
	);
	global $mysqlObj; 
	$Result	=	$mysqlObj->Update($UpdateArray);

}
function GX_GetAudioMetadata($respData){
	parse_str($respData);
	
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$audID = strtoupper($ID);	
	$ReadArray	=	array(
			'Fields'=> 'chapter,bookmark',
			'Table'=> 'audiometainfo',
			'order'	=> 'chapter DESC',
			'clause'=> 'ID=' . $audID
	);
	global $mysqlObj; 
	$Result	=	$mysqlObj->Read($ReadArray, 'aSsOc', 'AS_JSON');
	if(!$Result)
		return 0;
	else
		return $Result;	
	
}
?>
