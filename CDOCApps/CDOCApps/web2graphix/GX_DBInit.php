<?php
require_once 'GX_Config.php';

function GX_DBInitialize(){
	/*$fp = fopen("Config.txt", "r");
	if($fp == False)return 0;
	$buffsize = 2000;
	$configstr = fread($fp, $buffsize)	;
	fclose($fp);
	if($configstr ==False)
		return 0 ;
	//parse the string in query format and populate the variables
	parse_str($configstr);
	*/
	
	$serverloc = $GLOBALS['SERVER_LOCATION'];
	$author = $GLOBALS['DBAUTHOR'];
	$user = $GLOBALS['DBUSER']; //'cdocadmin';
	$pwd = $GLOBALS['DBPWD'];
	$dbname = $GLOBALS['DBNAME'];
	$hostaddr = $GLOBALS['DBHOSTADDR']; //p for persistence
	
	/*
	if($serverloc == "LOCAL")
	{
		
	else if($serverloc == "REMOTE")
	{
		$author = 'rajarshi';
		$user = '1181608_cdoc';
		$pwd = 'cdoc';
		$dbname = '1181608_cdoc';
		$hostaddr = 'p:fdb4.runhosting.com';
	}
	else
		return 0;	
		*/
	$dbhandle = mysqli_connect($hostaddr, $user, $pwd, $dbname);
	if(!$dbhandle)
	{
		//echo "Database Server could not be connected </br>";
		LogString("Database could not be connected");
		return 0;
	}
	return $dbhandle; 
}


function Read($dbHandle, $input_array, $outputFormat, $DataType = "", $keyField_Output = '')
{
	$Query	=	Prepare_Query($input_array, 'READ');
	$output	=	"";
	if(!$Query)
		$output=	'INVALID';
	else
	{
		$result 	= mysqli_query($dbHandle, $Query);
		if (!$result)
		{			
			$output	=	 false;
		}
		else
		{
			$output	=	Prepare_Output($result, $outputFormat, $keyField_Output);
			if( ($DataType != "") && (strcasecmp(strtolower($DataType) , 'as_json') == 0) )
				$output	=	json_encode($output);
		}
	}
	return $output;
}

function Prepare_Output($output, $output_Format, $keyField_Output = '')
{
	$output_Format = strtolower($output_Format); // Convert output_Format to lowercase
	if($output->num_rows == 0)
		return 0;

	switch($output_Format)
	{
		case 'result':
			return $output;
			break;
		case 'num_rows':
			return $output->num_rows;
			break;
		case 'num_arr':
			while ($row = $output->fetch_array(MYSQLI_NUM)) {
				$output_arr[]	=	$row;
			}
			return $output_arr;
			break;
		case 'assoc':
		default:
			while ($row = $output->fetch_assoc()) {
				if($keyField_Output != '' && isset($row[$keyField_Output])){
					$output_arr[strval($row[$keyField_Output])]	=	$row;
				}
				else
					$output_arr[]	=	$row;
			}
			return $output_arr;
			break;
	}
}

function Prepare_Query($input_array, $prepare_For)
{
	$Query	=	"";
	switch($prepare_For)
	{
		case 'READ':
			if($input_array['Fields'] == "" || $input_array['Fields'] == NULL || $input_array['Table']	==	"" || $input_array['Table']	==	NULL)
				return false;

			$Query	.=	"SELECT ";
			$Query	.=	$input_array['Fields'];
			$Query	.=	" FROM ";
			$Query	.=	$input_array['Table'];
			if(isset($input_array['clause']) && $input_array['clause'] != "" && $input_array['clause'] !== NULL)
			{
				$Query	.=	" WHERE ";
				$Query	.=	$input_array['clause'];
			}
			if(isset($input_array['order']) && $input_array['order'] != "" && $input_array['order'] !== NULL)
			{
				$Query	.=	" ORDER BY ";
				$Query	.=	$input_array['order'];
			}
			break;
		default:
			break; 	
	}
	return $Query;
}


?>