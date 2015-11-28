<?php

/*
 * 1. $setup_root contains the path where error logging is done. $setup_root/temp/Errors.txt (OR) 
 * 2. $setup_root is the path where all the work is done
 * 3. Mandatory
 * 4. Exmple: http://localhost/workinweb/widget_factory (without ending backslach /)
 */
$sso_setup_root	=	__DIR__."./../user_files";
$urlScheme	=	"http".(!empty($_SERVER['HTTPS'])?"s":"")."://".$_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'];
$sso_http_root	=	$urlScheme.'/'.str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("\\", "/", $sso_setup_root));	
$sso_session_name	=	"MAS";

/*
 * 1.  $signup_form_link contains the link for sign up form.
 * 2. Path should be with respect to sso_setup_root  
 */
$sso_signup_form_link	=	"/signupform.php";

/*
 * $sso_signup_mail_subject contains the mail subject for verificaiton link
 */
$sso_signup_mail_subject	=	"Verification link from Webionix Labs !!!";

$sso_signup_body_path	=	"/sign-up-mail.php";

/*
 * 1. $redirectlink_on_success_signup contains the redirect link where client will be redirected after successful signup
 */
$sso_redirectlink_on_success_signup	=	"/home.php";

/*
 * 1. $redirectlink_on_fail_signup contains the redirect link where client will be redirected after signup fails
 */
$sso_redirectlink_on_fail_signup	=	"";

/*
 * 1. It contains the link for reset form
 */
$sso_reset_form_link	=	"/resetform.php";

/*
 * 1. $redirectlink_on_success_reest contains the redirect link where client will be redirected after successful reset password
 */
$sso_redirectlink_on_success_reset	=	"/home.php";

/*
 * $sso_mail_reset_subject contains the mail subject for reseting the password
 */
$sso_mail_reset_subject	=	"Reset password link from Webionix Labs!!!";


/*
 * 1. $redirectlink_on_fail_reset contains the redirect link where client will be redirected after rset password fails
 */
$sso_redirectlink_on_fail_reset	=	"";

/*
 * Browser keys (google+) for corona client
 */

$sso_gc_browser_key	=	"42338840257-9ll1lip2eqc6dg2p00ntl94njnb39d1r.apps.googleusercontent.com"; //g=google, c=corona

/*
 * Server keys (google+) for corona server side corresponding to the $sso_gc_browser_key
 */

$sso_gc_server_key	=	"AIzaSyAD2JZzGFW3-umHb_USE0pUdkl88OxUQO0";

/*
 * Encryption key for encrypting reset, signup verification links
 */

$sso_c_encryption_key	=	"09334c83bf0d34e2029f7a477cb767f4ed437c175f165e9a752a392744bf30d3";

/*
 * $sso_mail_verify_setting contains the smtp settings through which verification and reset password links will be sent
 */
$sso_mail_verify_setting	=	array(
					'smtpHostName'	=>	'mail.veneratech.com',
					'smtpPort'		=>	'25',
					'smtpUsername'	=>	'vaibhav.singhal@veneratech.com',
					'smtpPassword'	=>	'vasi12*',
					'sender'		=>	'',
			);

if(!function_exists('get_DbConfig')){
	function get_DbConfig(){
		$config = array (
				'source'	=> '',
				'host'	=>	'localhost',
				'port'	=>	'3306',
				'username'	=>	'root',
				'password'	=>	'',
				'database'	=>	'corona'
		);
		return $config;
	}	
}