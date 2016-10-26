<?php
require_once __DIR__.'./verify-sign-up.php';
require_once __DIR__.'./../../../web2graphix/GX_SessionMgr.php';
require_once __DIR__.'./../../../web2graphix/GX_WKSMgrModule.php';
require_once __DIR__.'./../../../securimage/securimage.php'; 

//require_once __DIR__.'./../../DBManager/DbMgrInterface.php';
/*
 * 1.it checks the signin of user 
 * 2. @param email (through POST)
 * 3. @param password (through POST)
 * 4. 
 */

function InitializeSession($ott){
	
	//get the username, user id, workspace name 
	$retval = sso_getuserinfo($ott); 	
	
	//NOW create a JSON and send it back and also apply a validation logic here
		
	//start the session here 
	$retarray = json_decode($retval, true );	
	$retval = CDOC_Session_Init($retarray[0]['username'], $retarray[0]['userid'], $retarray[0]['workspacename']);
	if($retval == False)
	{
		LogString("GX_Session Init: Failed");
		return $retval;
	}
	$retval = 	GX_WKS_Initialize($_SESSION['workspacename']);
	if($retval == False)
	{
		LogString("GX_WKS_Initialize: Failed");
		return $retval;
	} 
}
if(isset($_POST['type'])	&&	$_POST['type']	==	'redirect_url'	){
	header("Location:GX_Editor.html");
	exit;
}
if(isset($_POST['type'])	&&	$_POST['type']	==	'signin_verify'	)
{
	$securimage = new Securimage();
    if ($securimage->check($_POST['captcha_code']) == false) {
		echo json_encode(array("success"=>"false","reason"=>"Captcha mismatch: Please enter the correct text"));
        exit();
    }
	$retval = sso_signin_verify($_POST['email'],$_POST['password']);	
	//now the code for 
	$retarray = json_decode($retval, true ); 
	//echo $retval;
	if($retarray['success'] == 'true'){
		InitializeSession($retarray['ott']);
		echo $retval;
	}
	//
}

/*
 * 1. It check and sends the verification mail  to the email id for signup
 * 2. @param email (through POST)
 */
else if(isset($_POST['type'])	&&	$_POST['type']	==	'signup'	)
{
	sso_signup($_POST['email']);
}
else if(isset($_POST['type']) &&	$_POST['type']	==	'userinfo'	)
{
	sso_getuserinfo($_POST['ott']);
}
/*
 * 1. It verifies the link for signup
 * 2. @param sign_up_pass (through GET)
 */
else if(isset($_GET['sign_up_pass'])	&&	$_GET['sign_up_pass']	!=	""	)
{
	sso_signup_verify($_GET['sign_up_pass']);
}

/*
 * 1. It check and sends the reset mail  to the email id for reset
 * 2. @param email (through POST)
 */
else if(isset($_POST['type'])	&&	$_POST['type']	==	'reset'	)
{
	sso_reset($_POST['email']);
}

/*
 * 1. It verifies the link for reseting passwprd
 * 2. @param reset_pass (through GET)
 */
else if(isset($_GET['reset_pass'])	&&	$_GET['reset_pass']	!=	""	)
{
	sso_reset_verify($_GET['reset_pass']);
}

else if(isset($_POST['type'])	&&	$_POST['type']	==	'google_signin')
{
	sso_google($_POST['idtoken']);
}

exit; 