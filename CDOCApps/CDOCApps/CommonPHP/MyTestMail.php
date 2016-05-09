
<?php
require_once 'MailMgr.php';
$config['smtpHostName']	=	'mail.veneratech.com';
$config['smtpPort']		=	'25';
$config['smtpUsername']	=	'rajarshi@veneratech.com';
$config['smtpPassword']	=	'#Roger';
$config['sender']		=	'rajarshi@veneratech.com';
$retval ='OK';
$recipients = array();
$recipients[0] = 'rajarshi@veneratech.com';
$recipients[1] = 'rajarshi_m@yahoo.com';
$retval = send_Email( $recipients, $mailSubject = "Test Mail from Roger", $MailBody = "hi This is Test mail", $additionalEmails	=	'',	$attachment	=	'',$config);

echo $retval;
?>


