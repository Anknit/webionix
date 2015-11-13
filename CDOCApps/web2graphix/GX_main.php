<?php
Include_once "GX_SessionMgr.php"; 
Include_once "GX_WKSMgrModule.php"; 
Include_once "GX_DBInit.php";
//finding the webserver configuration 

/*
$fp = fopen("Config.txt", "r");
if($fp == False)return False;
$buffsize = 2000;
$configstr = fread($fp, $buffsize)	;
fclose($fp);
if($configstr ==False)
	return False ;
//parse the string in query format and populate the variables
parse_str($configstr);
$serverloc = $SERVER_LOCATION; 

if($serverloc == "LOCAL")
{
	$author = 'rajarshi';
	$user = 'cdocuser'; //'cdocadmin';
	$pwd = NULL;
	$dbname = 'cdocapptestdb';
	$hostaddr = 'localhost:3306';
}
else if($serverloc == "REMOTE")
{
	$author = 'rajarshi';
	$user = '1181608_cdoc';
	$pwd = 'cdoc';
	$dbname = '1181608_cdoc';
	$hostaddr = 'fdb4.runhosting.com';
}
else
	return False; 
$dbhandle = mysqli_connect($hostaddr, $user, $pwd, $dbname);
if(!$dbhandle)
{
	//echo "Database Server could not be connected </br>";
	LogString("Database could not be connected");
	return ; 
}

*/
$dbhandle = GX_DBInitialize(); 

//now get the input username:
$usrname = "'".$_POST['txtUsername']."'";
$_POST['hidStatus'] = 'FAIL';
// get the username corresponding record from db
$query = "SELECT id, username, password, fname, lname, workspacename FROM userinfo WHERE username = $usrname " ;
//$resultSet = mysql_query($query);
$resultSet = mysqli_query($dbhandle, $query);

if(!$resultSet)
{
	//echo "Error in User Authentication </br>";
	LogString("Error in User Authentication Query");
	return ; 
}

$nrow =  mysqli_num_rows($resultSet);
$row = 0;
$ipusrname = $_POST['txtUsername'];
$ipusrpwd = $_POST['txtpassword'];

if($nrow > 0)
{
	$row = mysqli_fetch_object($resultSet);
	$dbusrId   = $row->id;
	$dbusrname = $row->username;
	$dbusrpwd  = $row->password;

		//now check for valid user name first 
	if($ipusrname == $dbusrname)
	{
			//now check for valid password
		if($dbusrpwd == md5($ipusrpwd))
		{
					
			//now set the cookie here
			$expirytime = time()+45; 
			/*setcookie('CDOC[username]', $dbusrname,$expirytime ,'/');
			setcookie('CDOC[sessionID]', $dbusrpwd ,$expirytime ,'/');
			setcookie('CDOC[userid]', $dbusrId ,$expirytime ,'/');
			*/ 
		   // $retval = setcookie('MYPHPSESSIDMAIN', '999' ,$expirytime ,'/');
			$_POST['hidStatus'] = 'SUCCESS';
			//echo "Welcome ".$row->fname." ".$row->lname;
			//now start the PHP Session here
		  
		
			//start a new session 
			$name = $dbusrname;
			$id = $dbusrId; 
			//$name = "CDOCAPP"; 
			//ensuring the usename is passed
			//$name = "GXAPP";
			$retval  = CDOC_Session_Init($name, $id, $row->workspacename);
			if($retval == False)
			{
				LogString("CDOC_Session_Init: Failed"); 
				//return ; 
				
			}
			else
			{
				$retval = 	GX_WKS_Initialize($_SESSION['workspacename']);
				if($retval == False)
				{
					LogString("GX_WKS_Initialize: Failed");
					return $retval;
				}
					
				
				
				//$retval = setcookie($_SESSION['session_name'], time()-45); 
				
				//header("Location:Application.htm");
				header("Location:GX_Editor.html");
			}     		    
		   
					
		}
		else
		{
			
			$errstr = "Invalid User Credentials for " . $dbusrname ;
			LogString($errstr);
			echo $errstr;
			//echo "Password Not Valid </br>";
			//echo "Try Logging In Again with Valid Password";
		}
	}//($ipusrname == $dbusrname)
			
}
else
{
	//echo $ipusrname." --Does not seem to be Valid User name</br>";
	//echo "Try Logging In Again with Valid User Name"; 
	//echo "User does not exist";
}

return;
?> 


