<?php
/*
 * Author: Suhail
 * date: 21-Aug-2015
 * Description: CSDBMS : Connection to a specific database
 */
class CSDBMS {
	
	private  $mysql_Host	=	'', $Port	=	'', $userName	=	'', $passWord	=	'', $DatabaseName	=	'',
	 $connection, $dbType = '' ;
	
	public function CSDBMS($dbType) {
		$this->$dbType = strtolower($dbType);
		$config = $this->get_DBConfig($dbType);
		$this->connect_SpecificDatabase($db_Type, $this->$mysql_Host, $this->$userName, $this->$passWord, $this->$DatabaseName, 
										$this->$Port);		
		
	}
	
	/**
	 * This function is DBMS specific. Configuration details may or may not differ.
	 */
	private function get_DBConfig($dbType) {
		
		switch($dbType) {
			case 'mysql':
				$config = array(
						'host'	=>	'localhost',
						'port'	=>	'3306',
						'username'	=>	'root',
						'password'	=>	'',
						'database'	=>	'demodatabase'
				);
				break;
			
			case 'mssql':
				$config = array(
						'host'	=>	'localhost',
						'port'	=>	'3306',
						'username'	=>	'root',
						'password'	=>	'',
						'database'	=>	'demodatabase'
				);
				break;
				
			case 'postgresql':
				$config = array(
						'host'	=>	'localhost',
						'port'	=>	'3306',
						'username'	=>	'root',
						'password'	=>	'',
						'database'	=>	'demodatabase'
				);
				break;			
		}
				
		$this->mysql_Host	=	$config['host'];
		$this->Port			=	$config['port'];
		$this->userName		=	$config['username'];
		$this->passWord		=	$config['password'];
		$this->DatabaseName	=	$config['database'];
		
		return $config;
	}
	
	private function connect_SpecificDatabase($db_Type, $mysql_Host, $userName, $passWord, $DatabaseName, $Port){
	
		if(!isset($this->connection)) {
			switch ($this->dbType) {
				case 'mysql':
					$db	= new mysqli($mysql_Host, $userName, $passWord, $DatabaseName, $Port); // Make a connection my MySQL
					$this->connection = $db;
					break;
				case 'mssql':
					$db = mssql_connect($mysql_Host, $userName, $passWord); // Make a connection to MSSQL
					$this->connection = $db;
					break;
				case 'postgresql':
					// Make a connection to PostgreSQL
					$connectionString = "host = '$mysql_Host' port = '$Port' dbname = '$DatabaseName' user='$userName' password = '$passWord'";
					$db = pg_connect($connection_string);
					$this->connection = $db;
					break;
			}
		} else $db = $this->connection;
		
		if (!$db)
			return "Error: Connection failed '".$this->set_mysqlError()."'";
	
		return $db;
	}
	
};

?>