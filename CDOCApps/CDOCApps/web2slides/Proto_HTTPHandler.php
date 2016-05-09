<?php
//include "dummy.php";  //including this file (any php) results into loss of 2 bytes and strange white space in the begining
include "SessionMgr.php";
$QryObj = new HttpQueryString();

	$modid 		= 	$QryObj->get('modid');
	$reqid 		= 	$QryObj->get('reqid'); 
	$dataType   =   $QryObj->get('type');

  $responsetext = http_get_request_body();
  //MyFn(); 
//send back only status 
$retval = http_send_status('200'); 

//$responsetext = http_get_request_body(); 
if(!$responsetext)
	$responsetext = "no message body received"; 

http_send_content_type("application/text"); 
$responsetext = $responsetext." Protohandler says: SessionMGR removed with header reponse included  now  here going to get you man!1234";
http_send_data($responsetext);





 
?> 