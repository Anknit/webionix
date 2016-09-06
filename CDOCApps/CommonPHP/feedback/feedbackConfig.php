<?php
define('FEEDBACK_NEW',1);

$feedback_mail_setting = array(	
		'smtpAuth'      =>  'true',
		'smtpHostName'	=>	'ssl://smtp.gmail.com',		
		'smtpPort'		=>	'465',
		'smtpUsername'	=>	'administrator@webionix.com',
		'smtpPassword'	=>	'#Mouni123',
		'sender'		=>	'Administrator'
);

$feedback_mail_subject = 'New feedback at Webionix';
$feedback_mail_recipient = 'rajarshi@webionix.com';
?>