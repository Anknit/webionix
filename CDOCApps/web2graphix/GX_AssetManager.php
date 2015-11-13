<?php
Include_once "GX_DBInit.php";



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

function GX_ImportMetaData(){
	$dbhandle = GX_DBInitialize();	
	$ReadArray	=	array(
			'Fields'=> 'filename, title, category',
			'Table'=> 'exportedassetinfo',			
			'order'	=> 'category DESC'
	);	
	$Result = Read($dbhandle, $ReadArray, 'aSsOc', 'AS_JSON'); 
	if(!$Result)
		return 0;
	else{
		return $Result;
	}
}
?>
