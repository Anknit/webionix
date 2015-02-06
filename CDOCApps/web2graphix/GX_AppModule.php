<?php
/*AppModule.php
 *author:Rajarshi
 *Date: 26-jul-12 
 *Description: The AppModule processes all incoming requests from the clients.  It will first validate the session, then look for a parameter called “Mod_Request_id”  with value set to “ModuleID_Request_ID”. 
*Upon identifying the Module , it will call ProcessRequest of appropriate Module with (QueryObject and Request ID) as input parameter. 
*The ProcessRequest function is to be implemented by every Module . the ProcessRequest function in turn identifies the Request Id and calls appropriate function along with QueryObject as the input parameter. 
*The request specific function in turn processes Query Object if required and takes appropriate function as desired and gives back the response data, which is then returned back by the ProcessRequest function to the AppModule. 
*The AppModule then sends out the response data. 
 * */
include_once "GX_SessionMgr.php" ;
include_once "GX_WKSMgrModule.php";
include_once "GX_ObjectManager.php";
include_once "Debuglog.php"; 


//include "dummy.php"; 

	$retval = CDOC_Session_Validate();
	if($retval == False)
	{
		//echo "Session could not be validated";
		return ;
	}

	$modid = $_REQUEST['modid'];
	$reqid = $_REQUEST['reqid'];
	$dataType = $_REQUEST['type']; 
	//$respdata = http_get_request_body();
	$respdata = $HTTP_RAW_POST_DATA ; //$GLOBALS[$HTTP_RAW_POST_DATA]; 
//send back only status 
    
	$reqstr = "Req Info: ". " modid=".$modid ." reqid= ".$reqid. " datatype=".$dataType. " requestbody=".$respdata;	
	
    
    $retval = True;  
 
   	if($modid == 'WKSM')
   	{
   	
   		$retval = GX_WKS_ProcessRequest($reqid, $respdata );		
   			
   	}
   	elseif($modid == 'PRJM')
   	{
   		$retval = CDOC_PRJ_ProcessRequest($reqid, $respdata );
   	}
   	
   	else if($modid == 'OBJM')
   	{
   		GX_OBJ_ProcessRequest($reqid, $respdata );
   	}
   
   //now send the status code
   if($retval == true)
   {
    // $retval = http_send_status('200');
   	http_myresponse_code('200');
   }     
   else
   {
   	 //http_send_status('400');
   	http_myresponse_code('400');
   } 
   
   
   //send the content type
    if($retval == true)
    {
    	 /*
    	 if($dataType == "text")
    	 {
    	 	header('Content-type: application/text');
    	 	//http_send_content_type("application/text");
    	 }
    	 else if($dataType == "XML")
    	 {
    	 	header('Content-type: application/XML');
    	     //	 	http_send_content_type("text/xml");
    	 }
    	 */
    	    
    } 
    
    
    //now send the response body 
   if($retval == true){
   	//$retval = http_send_data($respdata);
   	if($respdata == 'OK')
   		$respcode = $respdata; // $reqid . '='.$respdata;
   	else
   		$respcode = $respdata;
   	print($respcode); 
   }     
   else{
   	$respcode = 'FAIL';
   	print($respcode);
   }
   	
   
   
   
   	function http_myresponse_code($code = NULL) {
   
   		if ($code !== NULL) {
   
   			switch ($code) {
   				case 100: $text = 'Continue'; break;
   				case 101: $text = 'Switching Protocols'; break;
   				case 200: $text = 'OK'; break;
   				case 201: $text = 'Created'; break;
   				case 202: $text = 'Accepted'; break;
   				case 203: $text = 'Non-Authoritative Information'; break;
   				case 204: $text = 'No Content'; break;
   				case 205: $text = 'Reset Content'; break;
   				case 206: $text = 'Partial Content'; break;
   				case 300: $text = 'Multiple Choices'; break;
   				case 301: $text = 'Moved Permanently'; break;
   				case 302: $text = 'Moved Temporarily'; break;
   				case 303: $text = 'See Other'; break;
   				case 304: $text = 'Not Modified'; break;
   				case 305: $text = 'Use Proxy'; break;
   				case 400: $text = 'Bad Request'; break;
   				case 401: $text = 'Unauthorized'; break;
   				case 402: $text = 'Payment Required'; break;
   				case 403: $text = 'Forbidden'; break;
   				case 404: $text = 'Not Found'; break;
   				case 405: $text = 'Method Not Allowed'; break;
   				case 406: $text = 'Not Acceptable'; break;
   				case 407: $text = 'Proxy Authentication Required'; break;
   				case 408: $text = 'Request Time-out'; break;
   				case 409: $text = 'Conflict'; break;
   				case 410: $text = 'Gone'; break;
   				case 411: $text = 'Length Required'; break;
   				case 412: $text = 'Precondition Failed'; break;
   				case 413: $text = 'Request Entity Too Large'; break;
   				case 414: $text = 'Request-URI Too Large'; break;
   				case 415: $text = 'Unsupported Media Type'; break;
   				case 500: $text = 'Internal Server Error'; break;
   				case 501: $text = 'Not Implemented'; break;
   				case 502: $text = 'Bad Gateway'; break;
   				case 503: $text = 'Service Unavailable'; break;
   				case 504: $text = 'Gateway Time-out'; break;
   				case 505: $text = 'HTTP Version not supported'; break;
   				default:
   					exit('Unknown http status code "' . htmlentities($code) . '"');
   				break;
   			}
   
   			$protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0');
   
   			header($protocol . ' ' . $code . ' ' . $text);
   
   			$GLOBALS['http_response_code'] = $code;
   
   		} else {
   
   			$code = (isset($GLOBALS['http_response_code']) ? $GLOBALS['http_response_code'] : 200);
   
   		}
   
   		return $code;
   
   	}
   
   
   	
   	
   
?>



