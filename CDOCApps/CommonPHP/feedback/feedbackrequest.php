<?php
require_once __DIR__.'./../DBManager/DbMgr.php';
require_once __DIR__.'./../MailMgr.php';
//require_once __DIR__.'./../session_manager.php';
require_once __DIR__.'./../ErrorHandling.php';
require_once __DIR__.'/feedbackConfig.php';
require_once __DIR__.'/../SSO/php/sso_config.php';


$mysqlObj = new DBMgr(); 
$config = array('database' =>$GLOBALS['sso_db_database'],
				'host'=>$GLOBALS['sso_db_host'],
				'port' => $GLOBALS['sso_db_port'], 
				'username' => $GLOBALS['sso_db_username'],  
				'password' => $GLOBALS['sso_db_password'], 
				'dbType'=>	$GLOBALS['sso_db_dbType']
		); 
$retval = $mysqlObj->Initialize($config);
if(!$retval){
	return $mysqlObj->getLastError();
	return ;
}


$fb_title   = $_REQUEST['title'];
$fb_desc    = $_REQUEST['desc'];
$userId     = 12 /*$_SESSION['userid']*/;
$username   = 'ankit' /*$_SESSION['username']*/;
$status     = FEEDBACK_NEW;

$insertFb = $mysqlObj->Insert(array(
    'Table' => 'feedbackinfo',
    'Fields'=> array(
        'userId'        => $userId,
        'title'         => $fb_title,
        'description'   => $fb_desc,
        'status'        => $status,
    )
));
if($insertFb) {
    $config		    =	$GLOBALS['feedback_mail_setting'];
    $mailSubject	=	$GLOBALS['feedback_mail_subject'];
    $email          =   $GLOBALS['feedback_mail_recipient'];
    require_once __DIR__.'/feedback-mail.php';
    if(!send_Email($email, $mailSubject, $mailString, '','', $config))
    {
        ErrorLogging("mail sending failed during signup "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email);//mail sending failed
        echo json_encode(array('status'=>'false', 'data'=>array('error' => 'mail not sent')));
        exit();
    }
    echo json_encode(array('status'=>'true', 'data'=>array()));
} else {
    echo json_encode(array('status'=>'false', 'data'=>array('Feedback not inserted in DB')));
}
?>