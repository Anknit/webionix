<?php
/*
 * @return session id  
 * 2. 
 */
require_once __DIR__.'./../../DBManager/DbMgrInterface.php';
require_once __DIR__.'./session_log.php';
require_once __DIR__.'./sso_config.php';

//require_once __DIR__.'./../../Corona/definitions.php';

function start_new_session()
{
	$user_session_name	=	$GLOBALS['sso_session_name'];
	session_name($user_session_name);
	//session_set_cookie_params(31104000,"/");
	session_start();
}

function close_session()
{
	if(isset($_SESSION['is_login']))
	{
		$_SESSION['is_login']=0;
	}
	if(isset($_SESSION['anonymous']))
	{
		$_SESSION['anonymous']=0;
	}
	
	$d_data    =    array('Table'=>'session_log','Fields'=>array('session_status'=>0),'clause'=>"sessionid='".session_id()."'");
	DB_Update($d_data);
	
	session_unset();
	session_destroy();
	return true;
}

function set_session_data($data)
{
	$keys=array_keys($data);
	$count=count($keys);
	for($i=0;$i<$count;$i++)
	{
		$_SESSION[$keys[$i]]=$data[$keys[$i]];
	}
}

start_new_session();
log_the_session();
if(!isset($_SESSION['anonymous']))
{
	$_SESSION['anonymous']=1;
}
//if session setup_root is not set, then set its value
if(!isset($_SESSION['SETUP_ROOT'])){	
	$_SESSION['SETUP_ROOT'] = $GLOBALS['sso_setup_root']; 
}
//if session HTTP_ROOT is not set, then set its value
if(!isset($_SESSION['HTTP_ROOT'])){	
	$_SESSION['HTTP_ROOT'] = $GLOBALS['sso_http_root'];
}
//if session HTTP_ROOT is not set, then set its value
//if(!isset($_SESSION['SERVER_ROOT'])){	
//	$_SESSION['SERVER_ROOT'] = "http".(!empty($_SERVER['HTTPS'])?"s":"")."://".$_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'];
//}