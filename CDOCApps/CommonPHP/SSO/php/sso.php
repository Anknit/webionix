<?php
require_once __DIR__.'./verify-sign-up.php';

/*
 * 1.it checks the signin of user 
 * 2. @param email (through POST)
 * 3. @param password (through POST)
 * 4. 
 */
if(isset($_POST['type'])	&&	$_POST['type']	==	'signin_verify'	)
{
	sso_signin_verify($_POST['email'],$_POST['password']);
}

/*
 * 1. It check and sends the verification mail  to the email id for signup
 * 2. @param email (through POST)
 */
else if(isset($_POST['type'])	&&	$_POST['type']	==	'signup'	)
{
	sso_signup($_POST['email']);
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