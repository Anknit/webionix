<?php 
include_once 'GX_Config.php';

function CDOC_Session_Init(&$name, &$id, $workspacename)
{
	//generate a unique sesion name consisitng of username+userID
	//$session_name  = $name;	
	//call the session_start function
	//session_name($session_name);
	//open the configuration file and read the string
	//__DIR__.'./verify-sign-up.php'
	/*$path = __DIR__ .'/Config.txt' ; 
	$fp = fopen($path, "r");
	if($fp == False)return False; 	
	$buffsize = 2000; 
	$configstr = fread($fp, $buffsize)	;	
	fclose($fp); 
	if($configstr ==False)
		return False ;		
	//parse the string in query format and populate the variables
	parse_str($configstr);
	*/
	
	$session_name = $GLOBALS['SESSION_NAME']; 
	
	
	session_name($session_name);
	//get the session id
	session_cache_limiter("private_no_expire ");
	$retval = session_start();
	if($retval == False)
		return $retval;
	
		
	//now set the global variables right here though the global variables may change at later point
	// but this place is like a central place where all session global variables needs to be registered
	//incase one requires any new session variable, register it here before using it _rm 
	 
	$_SESSION['username']=$name; 
	$_SESSION['userid'] = $id;
	$_SESSION['workspacename'] = $workspacename;
	$_SESSION['session_name'] = $session_name; 
	$_SESSION['currentProjectName'] =0;
	$_SESSION['wksfilename'] = 0; 
	$_SESSION['wksXMLdata'] = 0; 
	$_SESSION['wksdir'] = 0; 
	$_SESSION['wksXMLfilename']= 0; 
	$_SESSION['wksXMLDOM'] = 0; 
	$_SESSION['ProjectName']=0; 
	$_SESSION['projXMLDOM'] = 0;
	$_SESSION['projXMLfilename']=0; 
	$_SESSION['baseWKSURI']=$GLOBALS['BASE_WKSURI'] ; 
	$_SESSION['projectServerPath'] = rtrim($_SESSION['baseWKSURI'], 'USER_DATA'); //rtrim($_SESSION['baseWKSURI'], 'USER_DATA'); 
	$_SESSION['projDataPath'] = 0; 
	$_SESSION['projHTMLDOM'] = 0;
	$_SESSION['projHTMLFilename']=0;
	$_SESSION['userProjectDataPath']=0; 
	$_SESSION['sceneCompXMLFilePath'] = 0;
	$_SESSION['sceneCompXMLDOM'] = 0;
	$_SESSION['pathSeparator']=$GLOBALS['PATH_SEPARATOR']; 
	$_SESSION['pathHTMLFile'] = 0; 
	$_SESSION['currEditableObjID'] = 0;
	$_SESSION['currPageID'] = 0;
	$_SESSION['currProjID'] = 0; 
	$_SESSION['$serverloc'] = $GLOBALS['SERVER_LOCATION'];
	$_SESSION['script_path'] = $GLOBALS['SCRIPT_PATH']; 
	$_SESSION['image_path'] = $GLOBALS['IMAGE_PATH'];
	$_SESSION['user_data_path'] = $GLOBALS['USER_DATA_PATH'];
	$_SESSION['svg_xml_dom'] = 0;
	$_SESSION['svg_xml_FileName'] = 0;
	$_SESSION['current_svg_FileName'] = 0;
	$_SESSION['shareddir'] = 0; 
	
	  
	
	//update the arguments with session name and SessionID 
	$id = session_id();
	$name = session_name();
	return $retval; 
	
}

/* This function validates a session at every page It assumes all php pages are being called with 
 * session name and ID , incase it does not get some throws an error. It also checks
 * */

function CDOC_Session_Validate()
{
		
	$session_name = 'GXAPP'; 
	
	if(!isset($_COOKIE[$session_name]))
		return False;
	
	//construct the session name
	session_name($session_name);
	session_cache_limiter("private_no_expire ");
	$retval = session_start();
	if($retval == False)
		return False; 
	
	/*$sessionid = session_id();
	//means no approriate session
	if($sessionid != $inpsessionid)
	{
		return False;
	} 
	*/
	
	
	//check if the varibles are all set in case any variables are not set then throw an error
	if(!isset($_SESSION['username']))
			return False; 
	
	if(!isset($_SESSION['userid']))
		return False;
	
	if(!isset($_SESSION['workspacename']))
		return False;
	 
	
	 return True; 
	
	
	
	
}

function CDOC_Session_Close()
{
	session_name('GXAPP'); 
	session_cache_limiter("private_no_expire ");
	session_start();

	// Unset all of the session variables.
	$_SESSION = array();

// If it's desired to kill the session, also delete the session cookie.
// Note: This will destroy the session, and not just the session data!
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finally, destroy the session.
	$retval = session_destroy();
	//header("Location:GX_Home.htm");
	
	return $retval; 	
}
function CDOC_Session_GetUsername(&$respstr)
{
	if(!$_SESSION['username'])
	{
		$respstr = 'FAIL';
		return false; 
	}	
	$respstr = $_SESSION['username'];
	return true; 	
}
