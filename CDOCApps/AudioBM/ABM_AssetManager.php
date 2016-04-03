<?php
Include_once "ABM_DBInit.php";
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
			'Fields'=> 'ID, URL, title, summary',
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

function GX_GetAudioMetadata($respData){
	parse_str($respData);
	
	//DEPENDING ON OBJECT TYPE CALL THE APPROPRIATE FUNCTION
	$audID = strtoupper($ID);
	$dbhandle = GX_DBInitialize();
	$ReadArray	=	array(
			'Fields'=> 'chapter,bookmark',
			'Table'=> 'audiometainfo',
			'order'	=> 'chapter DESC',
			'clause'=> 'ID=' . $audID
	);
	$Result = Read($dbhandle, $ReadArray, 'aSsOc', 'AS_JSON');
	if(!$Result)
		return 0;
	else{
		return $Result;
	}
}
?>
