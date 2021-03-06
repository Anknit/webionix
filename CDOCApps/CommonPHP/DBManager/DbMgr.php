<?php
class DBMgr{
	private $mysql_Host, $Port, $userName, $passWord, $DatabaseName, $connection, $dbType;
	
	//Constructor function to connect and select database.
	/*
	 *  The argument is a assoc array with possible following structure
	 *  array(
	 *  	'source'	=> 'value is a string. Possible values are Func/Coded', Default value is Func. For Func, the application must have already defined a functiobn name get_DbConfig, which will return assoc array with following structure,
	 *  		 array(
	 *  			'host'		=>	'',
	 *  			'port'		=>	'',
	 *  			'username'	=>	'',
	 *  			'password'	=>	'',
	 *  			'database'	=>	'',
	 *  			'type'		=>	'optional. The default value is mysql'
	 *  		);
	 *  	'type'	=>	'mandatory/Required only for Coded Source'	Default value is mysql. Other possible values are nssql,postgresql.
	 *  	'host'	=>	'mandatory/Required only for Coded Source'
	 *  	'port'	=>	'mandatory/Required only for Coded Source'
	 *  	'username'	=>	'mandatory/Required only for Coded Source'
	 *  	'password'	=>	'mandatory/Required only for Coded Source'
	 *  	'database'	=>	'mandatory/Required only for Coded Source. This is the database name.'
	 *  );
	 * 
	 */
	/*
	function __construct($config)
	{
		$this->dbType		=	$config['dbType'];
		$this->mysql_Host	=	$config['host'];
		$this->Port			=	$config['port'];
		$this->userName		=	$config['username'];
		$this->passWord		=	$config['password'];
		$this->DatabaseName	=	$config['database'];

		$this->connect_SpecificDatabase();			
	}*/
	
	function __construct(){
		
	}
	public  function Initialize($config){
		$this->dbType		=	$config['dbType'];
		$this->mysql_Host	=	$config['host'];
		$this->Port			=	$config['port'];
		$this->userName		=	$config['username'];
		$this->passWord		=	$config['password'];
		$this->DatabaseName	=	$config['database'];
		$this->LastError = ''; 		
		return  $this->connect_SpecificDatabase();
	}
	/*
	function __destruct() {
		$this->connection = null;
	}*/ 	
	private function connect_SpecificDatabase(){
		$db = 0; 
		if(!isset($this->connection)) {
			switch ($this->dbType) {
				case 'mysql':
					//$db	= new mysqli('p:'.$this->mysql_Host, $this->userName, $this->passWord, $this->DatabaseName, $this->Port); // Make a connection my MySQL					
					$db = mysqli_connect('p:'.$this->mysql_Host, $this->userName, $this->passWord, $this->DatabaseName, $this->Port);
					if($db == false){						
						if (mysqli_connect_error()) {
							$DBError = '';	
							$this->LastError = mysqli_connect_error(); 
							$this->set_dbError('ConnectionFailure',$DBError);							
							return NULL; 
						}
					}										
					$this->connection = $db;						
					break;
				case 'postgresql':
					// Make a connection to PostgreSQL
					$connectionString = "host = '".$this->mysql_Host."' port = '".$this->Port."' dbname = '".$this->DatabaseName."' user='".$this->userName."' password = '".$this->passWord."'";
					$db = pg_connect($connection_string);
					$this->connection = $db;
					break;
			}
		} 
		else {
			 $db = $this->connection;
		}		
		return $db;  
			//"Error: Connection failed '".$this->set_dbError()."'";
		
			//return "Error: Connection failed '".$this->set_dbError()."'";
		
	}
	
	private function set_dbError($Query, &$DB_OperationError = '')
	{
		include_once __DIR__.'./../ErrorHandling.php';
		
		$DB_OperationError	=	"";
		global $error_code;
		switch ($this->dbType) {
			case 'mysql':
				if($Query == 'ConnectionFailure'){					
					ErrorLogging('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());					
				}else{
					$DB_OperationError	=	mysqli_error($this->connection);
					$error_code = mysqli_errno($this->connection);
				}
				
				break;
			case 'mssql':
				$DB_OperationError	=	mssql_get_last_message();
				break;
			case 'postgresql':
				$DB_OperationError	=	 pg_last_error($this->connection);
				break;		
		}
		ErrorLogging('query:'.$Query.' -- '.'Error:'.$DB_OperationError);
	}
	
	
	private function FieldValuePair_ToString($FieldValueArray,$onlyValueString=false)
	{
		$FieldsAsString	=	"";
		foreach ($FieldValueArray as $FieldName => $value) {
			if($FieldsAsString != "")
				$FieldsAsString	.=	', ';
			
/*			if(strpos($value, '+') > 0 || strpos($value, '-') > 0)	
				$FieldsAsString	.=	 $FieldName." = ".$value;
*/
			if(strpos($value,'\'') !== false || strpos($value,'\"') !== false) {
				$value	=	addslashes($value);
			}
			if($onlyValueString){
				if($value	!= 'now()')
					$FieldsAsString	.=	 "'".$value."'";
				else
					$FieldsAsString	.=	 $value;
				
			}
			else{
				if($value	!= 'now()')
					$FieldsAsString	.=	 $FieldName." = '".$value."'";
				else
					$FieldsAsString	.=	 $FieldName." = ".$value;
				}
		}
		return $FieldsAsString;
	}
	
	public function Prepare_Output($output, $output_Format, $keyField_Output = '')
	{
		$output_Format = strtolower($output_Format); // Convert output_Format to lowercase
		
		if(!is_object($output))
			return $output;
		elseif($output->num_rows == 0){
			return 0;
		}			
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
	
	private function Prepare_Query($input_array, $prepare_For)
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
			case 'INSERT':
				if($input_array['Fields'] == "" || $input_array['Fields'] == NULL || $input_array['Table']	==	"" || $input_array['Table']	==	NULL)
					return false;

					$Query	.=	"INSERT INTO ";
					$Query	.=	$input_array['Table'];
					$Query	.=	" SET ";
					$Query	.=	$this->FieldValuePair_ToString($input_array['Fields']);
			break;
			case 'UPDATE':
				if($input_array['Fields'] == "" || $input_array['Fields'] == NULL || $input_array['Table']	==	"" || $input_array['Table']	==	NULL)
					return false;

					$Query	.=	"UPDATE ";
					$Query	.=	$input_array['Table'];
					$Query	.=	" SET ";
					$Query	.=	$this->FieldValuePair_ToString($input_array['Fields']);
					
				if(isset($input_array['clause']) && $input_array['clause'] != "" && $input_array['clause'] !== NULL)
				{
					$Query	.=	" WHERE ";
					$Query	.=	$input_array['clause'];
				}
			break;
			case 'DELETE':
				if($input_array['Table']	==	"" || $input_array['Table']	==	NULL)
					return false;

					$Query	.=	"DELETE FROM ";
					$Query	.=	$input_array['Table']."";
					
				if($input_array['clause'] != "" && $input_array['clause'] !== NULL)
				{
					$Query	.=	" WHERE ";
					$Query	.=	$input_array['clause'];
				}
			break;
			
			case 'INSERT_MR':
				$vstring = ""; // Field String
				
				if(is_array($input_array)) {
					$tableName = $input_array['TABLE_NAME'];
					$input_array = $input_array['FIELD_ARRAY'];
					for($i = 0 ;$i < count($input_array); $i++) {
						$vstring	.=	"(" . $this->FieldValuePair_ToString($input_array[$i],true) . ")";
						if(! ($i == (count($input_array) - 1))) $vstring .= ",";
					}
				
						
					// Column String
					$column_string = implode("," , array_keys($input_array[0])); // Get the column names
					$Query = "INSERT INTO ".$tableName." (" . $column_string . ") VALUES ".$vstring.";"; // Form Query String
				}
			break;
			
			case 'IMPORT_DB':
				if(is_array($input_array)) {
					$completePathOfSQLFile = "\"" . $input_array['COMPLETE_PATH'];
					$Query = "mysql --user" . $this->userName . " --password " . $this->DatabaseName . " < " . $completePathOfSQLFile;
				}
			break;
			
			case 'EXPORT_DB':
				if(is_array($input_array)) {
					$TableArray = $input_array['TABLE_LIST'];
					$dumpFileName = $input_array['DUMP_FILE_NAME'];
					$dQuery = "mysqldump -h ".$this->mysql_Host." --port=".$this->Port." --user=".$this->userName." --password=".$this->passWord;
					$dumpFilePath = __DIR__;
					$dumpFileName	=	$dumpFileName == "" ? time().'mysqlDump.sql': $dumpFileName;
					
					if(($TableArray == null) || count($TableArray) == 0 ) {
						// Export all tables
						$Query = $dQuery . " --databases ".$this->DatabaseName." > ".$dumpFilePath."\\".$dumpFileName;
					} else {
						$tableNames = "";
						// Export selective tables
						foreach($TableArray as $k => $k_value) {
							$tableNames .= " " . $$TableArray[$k];
						}
						$Query = $dQuery . " " .  $this->DatabaseNames." " . $tableNames . " > \"" .  $dumpFilePath."\\".$dumpFileName."\"";
					}	
				}				
			break;
	}
	return $Query;
}
	
	public function Read($input_array, $outputFormat="ASSOC", $DataType = "", $keyField_Output = '')
	{
		$Query	=	$this->Prepare_Query($input_array, 'READ');
		$output	=	"";
		if(!$Query)
			$output=	'INVALID';
		else
		{	
			$result 	= $this->connection->query($Query);
			if (!$result)
			{  
				$this->set_dbError($Query);
				$output	=	 false;	
			}
			else
			{
				$output	=	$this->Prepare_Output($result, $outputFormat, $keyField_Output);	
				if( ($DataType != "") && (strcasecmp(strtolower($DataType) , 'as_json') == 0) )
					$output	=	json_encode($output);
			}
		}
		return $output;
	}
	
	public function Insert($input_array)
	{
		$Query	=	$this->Prepare_Query($input_array, 'INSERT');
		$output	=	"";
		if(!$Query)
			$output=	'INVALID';
		else
		{	
			$result 	= $this->connection->query($Query);
			if (!$result)
			{
				$this->set_dbError($Query);
				$output	=	 false;	
			}
			else
			{
				$output	=	mysqli_insert_id($this->connection);	
				if(!$output)
					return true;
			}
		}
		return $output;
	}
	
	public function Update($input_array)
	{
		$Query	=	$this->Prepare_Query($input_array, 'UPDATE');
		$output	=	"";
		if(!$Query)
			$output=	'INVALID';
		else
		{
			$result 	= $this->connection->query($Query);			
			if (!$result)
			{
				$this->set_dbError($Query);
				$output	=	 false;	
			}
			else
			{
				$nrows = $this->connection->affected_rows;
				if($nrows == -1){
					$this->set_dbError($Query);
					$output = false;
				}
				else 
					$output	=	true;	
			}
		}
		return $output;
	}
	
	public function Delete($input_array)
	{
		$Query	=	$this->Prepare_Query($input_array, 'DELETE');
		$output	=	"";
		if(!$Query)
			$output=	'INVALID';
		else
		{	
			$result 	= $this->connection->query($Query);
			if (!$result)
			{
				$this->set_dbError($Query);
				$output	=	 false;	
			}	
			else
			{
				$nrows = $this->connection->affected_rows;
				if($nrows == -1){
					$this->set_dbError($Query);
					$output = false;
				}else
					$output	=	true;	
			}
		}
		return $output;
	}
	
	public function Query($Query, $outputFormat = 'ASSOC', $DataType = "", $keyField_Output = '')
	{
		$result 	= $this->connection->query($Query);
		if (!$result)
		{
			$this->set_dbError($Query);
			$output	=	 false;	
		}	
		else
		{
			$output	=	$this->Prepare_Output($result, $outputFormat, $keyField_Output);	
			if($DataType != "")
				$output	=	json_encode($output);	
		}
		return $output;
	}
	
	public function Export($ExportDBArray) {
		$Query = $this->Prepare_Query($input_array, 'EXPORT_DB');

		$op	=	'';
		$REtVal	=	'';
		$query	=	'dir';
		$resultQuery = exec($query,$op,$REtVal);
		if($resultQuery) return true;
		else return false;
	}
	
	public function Import($ImportDBArray) {
		$Query = $this->Prepare_Query($ImportDBArray, 'IMPORT_DB');
		$resultQuery  = exec($Query);
	}
	
	
	public function InsertMR($multipleFieldsArray) {
		
			$tableName = $multipleFieldsArray['TABLE_NAME'];
			$listOfID = $multipleFieldsArray['ID_LIST'];
			$FieldsArray = $multipleFieldsArray['FIELD_DETAILS'];
			
			$input_array = array('FIELD_ARRAY' => $FieldsArray, 'TABLE_NAME' => $tableName);
			$Query = $this->Prepare_Query($input_array, 'INSERT_MR');
		
			$result 	= $this->connection->query($Query); // Run Query
			$output = array();
			
			if (!$result) {
				$this->set_dbError($Query);
			} else {
				$insert_id = mysqli_insert_id($this->connection);
				if($listOfID) {
					for($i=0; $i<count($FieldsArray); $i++) {
						$output[$i] = $insert_id;
						$insert_id++;
					}
				} else {
					$output[0] = $insert_id;
				}
			  }
			  
			  return $output;
	   } 
	   
	   public function closeConnection() {
	   	
	   		if(isset($this->connection)) {
	   			mysqli_close($this->connection);
	   		}	   		
	   }
	   public function getLastError(){
	   	return $this->LastError; 
	   }
   
};
?>