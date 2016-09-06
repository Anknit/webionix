<?php
require_once __DIR__.'./../CommonPHP/SSO/php/verify-sign-up.php';
require_once __DIR__.'./../secureimage/securimage.php'; 
require_once 'GX_SessionMgr.php';
require_once 'GX_WKSMgrModule.php';

//require_once __DIR__.'./../../DBManager/DbMgrInterface.php';
/*
 * 1.it checks the signin of user 
 * 2. @param email (through POST)
 * 3. @param password (through POST)
 * 4. 
 */
if(isset($_REQUEST['type'])){
	$requestType = $_REQUEST['type'];
	switch($requestType){
	
		case 'redirect_url':
			break;
		case 'signin_verify':
            $securimage = new Securimage();
            if ((isset($_POST['captcha_code'])) && $securimage->check($_POST['captcha_code']) == false) {
                echo json_encode(array("success"=>"false","reason"=>"captcha mismatch"));
                exit();
            }
			$retval = sso_signin_verify($_POST['email'],$_POST['password']);
			//now the code for			
			$retarray = json_decode($retval, true );
			//echo $retval;
			if($retarray['success'] == 'true'){
				$retval = sso_getuserinfo($retarray['ott']);
				InitializeSession($retarray['ott'], $retval);
			}
			echo $retval;
			break;
		case 'signup':
			$retval = sso_signup($_POST['email']);
			echo $retval;
			break;
		case 'userinfo':
			$retval = sso_getuserinfo($_POST['ott']);
			echo $retval;
			break;
		case 'reset':
			$retval = sso_reset($_POST['email']);
			echo $retval;
			break;
		case 'google_signin':
			$retval = sso_google($_POST['idtoken']);
			$retarray = json_decode($retval, true );
			if($retarray['success'] == 'true'){
				$retval = sso_getuserinfo($retarray['ott']);
				InitializeSession($retarray['ott'], $retval);
			}
			echo $retval;
			break;
		default:
			break;
	}
	exit; 
}

if(isset($_GET['sign_up_pass'])	&&	$_GET['sign_up_pass']	!=	""	)
{
	$retval = sso_signup_verify($_GET['sign_up_pass']);
	echo $retval;
	exit; 
}
else if(isset($_GET['reset_pass'])	&&	$_GET['reset_pass']	!=	""	)
{
	$retval = sso_reset_verify($_GET['reset_pass']);
	echo $retval;
	exit; 
}


function InitializeSession($ott, $userinfo){

	//get the username, user id, workspace name
	
	$retarray = json_decode($userinfo, true );
	$retval = CDOC_Session_Init($retarray['firstname'], $retarray['userid'], $retarray['workspacename']);
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
	return $retval; 
}
