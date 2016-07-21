<?php
require_once __DIR__.'./../../DBManager/DbMgr.php';
require_once __DIR__.'./../../MailMgr.php';
//require_once __DIR__.'./session_manager.php';
require_once __DIR__.'./../../ErrorHandling.php';
require_once 'sso_config.php';
require_once 'encryption.php';
require_once 'validations.php';

/*
 * 1. For verifying the verification link sent to the mail
 */
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

function sso_signup_verify($user_cipher)//if(isset($_GET['signup']))
{
	$cipher    =   rawurldecode($user_cipher);
	global $mysqlObj; 
	if(!check_cipher($cipher))	//see validations.php
	{
		return json_encode(array("success"=>"false","reason"=>"Invalid request"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_signup']);
	//	ErrorLogging("SIGNUP cipher matching failed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher);
		exit();
	}
	else
	{
		//ErrorLogging("WARNING SIGNUP matching allowed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher);
	}
	$text    =    outer_decrypt($cipher);
	
	$query    =    array('Fields'=>'emailid,verify_key','Table'=>'verify_link','clause'=>'id = '.$text[1]);
	$d_data    =    $mysqlObj->Read($query);	
	if(is_array($d_data))
	{
		$inner_key    =    $d_data[0]['verify_key'];
	}
	else
	{
		return json_encode(array("success"=>"false","reason"=>"Link has expired"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_signup']);
		//ErrorLogging("WARNING "."Either fake or link Expired in signup "."at line no. ".__LINE__." at file ".__FILE__);
		//exit();
	}
	$text    =    inner_decrypt($text[0],$inner_key);
	$redirect_url	=	$GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_success_signup'];
	$query    =    array('Fields'=>'userid,username,status','Table'=>'userinfo','clause'=>"emailid='". "$text"."'");
	$d_data    =    $mysqlObj->Read($query);
	if(!is_array($d_data))
	{
		return json_encode(array("success"=>"false","reason"=>"An error has occured"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_signup']);
		//ErrorLogging("Error in finding email id using inner key "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher." inner_key:".$inner_key." Decrypted text:".$text);
		//exit();
	}
	 else if(is_array($d_data) && $d_data[0]['status']	==	"unverified")
	{
		$first_name	=	$_POST['first_name'];
		if(isset($_POST['last_name']))
		{
			$last_name	=	$_POST['last_name'];
		}
		else 
		{
			$last_name	=	"";
		}
		$username	=	$first_name." ".$last_name;
		$password	=	$_POST['password'];
		
		if(isset($_POST['user_info'])	&&	$_POST['user_info']	!=	"")
		{
			$user_meta_info	=	json_decode($_POST['user_info']);
			$user_info	=	true;
		}
		else
		{
			$user_info	=	false;
		}
				
		if($first_name	==	"" ||	$password	==	""	||	strlen($password) < 6)
		{
			return json_encode(array("success"=>"false","reason"=>"First name or password is either empty or < 6"));
			//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_signup']);
			//ErrorLogging("first name or password received is null or length of passsword is < 6 "."at line no. ".__LINE__." at file ".__FILE__." Content: first_name".$first_name."password".$password);
			//die();
		}
		$password	=	md5($password);
		
		//$wksname = 'Folder_' . getTimeBasedString(); 
		$wksname = $first_name . '_' . getTimeBasedString(); 
		if($user_info	==	""	||	$user_info	==	false)
		{
			$d_data    =    array('Table'=>'userinfo','Fields'=>array('regAuthorityId'=>0,'username'=>$username, 'firstname'=>$first_name, 'lastname'=>$last_name, 'workspacename'=>$wksname, 'status'=>"verified",'password'=>$password),'clause'=>"emailid='"."$text"."'");
		}
		else
		{
			$d_data    =    array('Table'=>'userinfo','Fields'=>array('regAuthorityId'=>0,'username'=>$username,'firstname'=>$first_name, 'lastname'=>$last_name,'workspacename'=>$wksname, 'status'=>"verified",'password'=>$password),'clause'=>"emailid='"."$text"."'");
			foreach($user_meta_info	as $key	=>	$value)
			{
				$d_data['Fields'][$key]	=	$value;
			}		
		}
		if(!$mysqlObj->Update($d_data))
		{
			//error log update error
			exit();
		}
		
		$ott	=	sha1(uniqid("",true));
		$ott_data    =    array('Table'=>'userinfo','Fields'=>array('sso_ott'=>$ott),'clause'=>"emailid='".$text."'");
		
		if(!$mysqlObj->Update($ott_data))
		{
			//update failed
			return  json_encode(array("success"=>"false","reason"=>"Data Update Failed"));
			//exit();
		}
		
		$d_data	=	"delete from verify_link where emailid='".$text."'";
		$d_id     =     $mysqlObj->Query($d_data,"result","");
		return json_encode(array("success"=>"true","ott"=>$ott));
		//header("Location:".$redirect_url);
		//exit();
	}
	
	else if(is_array($d_data) && $d_data['status']  == "verified")
	{
		return json_encode(array("success"=>"false","reason"=>"Already a verified user"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_signup']);
		//exit();
	}
}

/*
 * 1.For verifying the Reset password link sent to the mail
 */
function sso_reset_verify($user_cipher)//if(isset($_GET['reset']))
{
	$cipher    =    $user_cipher;
	global $mysqlObj;
	if(!check_cipher($cipher))	//see validations.php
	{
		return json_encode(array("success"=>"false","reason"=>"Invalid request"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_reset']);
		//ErrorLogging("reset cipher matching failed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher);
		//exit();
	}
	else
	{
		//ErrorLogging("WARNING RESET matching allowed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher);
	}
	$text    =    outer_decrypt($cipher);
	$query    =    array('Fields'=>'emailid,reset_key','Table'=>'reset_link','clause'=>"id=". "$text[1]");
	$d_data    =    $mysqlObj->Read($query);
	if(is_array($d_data))
	{
		$inner_key    =    $d_data[0]['reset_key'];
	}
	else
	{
		return json_encode(array("success"=>"false","reason"=>"Link has expired"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_reset']);
		//ErrorLogging("WARNING "."Either fake or link Expired for reset "."at line no. ".__LINE__." at file ".__FILE__);
		//exit();
	}
	$text    =    inner_decrypt($text[0],$inner_key);
	
	$redirect_url	=	$GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_success_reset'];
	$query    =    array('Fields'=>'userid,username,status','Table'=>'userinfo','clause'=>"emailid='". "$text"."'");
	$d_data	=	$mysqlObj->Read($query);
	if(!is_array($d_data))
	{
		return json_encode(array("success"=>"false","reason"=>"An error has occured"));
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_reset']);
		//ErrorLogging("Error in finding email id using inner key in reset "."at line no. ".__LINE__." at file ".__FILE__." content: cipher=".$cipher." inner_key:".$inner_key." Decrypted text:".$text);
		//exit();
	}
	else if(is_array($d_data) && $d_data[0]['status']	==	"unverified")
	{
		return json_encode(array("success"=>"false","reason"=>"Unverified user"));	
		//header("Location:". $GLOBALS['sso_http_root'].$GLOBALS['sso_redirectlink_on_fail_reset']);
		//exit();
	}
	 else if(is_array($d_data) && $d_data[0]['status']	==	"verified")
	{
		$ott	=	sha1(uniqid("",true));
		$_POST['password']	=	md5($_POST['password']);
		$d_data    =    array('Table'=>'userinfo','Fields'=>array('sso_ott'=>$ott,'password'=>$_POST['password']),'clause'=>"emailid='"."$text"."'");
		if(!$mysqlObj->Update($d_data))
		{
			//update errorr
			exit();
		}
		$d_data	=	"delete from reset_link where emailid='".$text."'";
		$d_id     =     $mysqlObj->Query($d_data,"result","");
		return json_encode(array("success"=>"true"));
		//header("Location:".$redirect_url);
		exit();
	} 
	
	
}

/*
 * 1. For verifying gmail login through app
 */
function sso_google($token)//if(isset($_POST['idtoken']))
{
	$g_request    =    "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=".$token;
	global $mysqlObj;
	$ch     =     curl_init();
	curl_setopt($ch, CURLOPT_URL, $g_request);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	$response     =     curl_exec($ch);
	curl_close($ch);
	
	$response    =    json_decode($response);
	
	if($response	==	NULL || $response	==	"")
	{
		//ErrorLogging("curl failed may be due to network "."at line no. ".__LINE__." at file ".__FILE__." content: idtoken=".$_POST['idtoken']);	//error logging curl failed
		return json_encode(array("success"=>"false","reason"=>"An error has occured"));
		exit();
	}
	if(isset($response->{'error_description'}))
	{
		//ErrorLogging("Login credentials is not obtained from gmail"."at line no. ".__LINE__." at file ".__FILE__." content: id_token:".$_POST['id_token']." response:".$response->{'error_description'});
		return json_encode(array("success"=>"false","reason"=>"An error has occured"));
		exit();
	}
	else
	{
		$email    =    $response->{'email'};
		$name    =    $response->{'name'};
		$firstname = $response->{'given_name'};
		$lastname = $response->{'family_name'};
	}
	$query    =    array('Fields'=>'*','Table'=>'userinfo','clause'=>"emailid='". "$email"."'");
	$d_data	=	$mysqlObj->Read($query);
	if(!is_array($d_data))
	{
		$ott	=	sha1(uniqid("",true));
		//$wksname = 'Folder_' . getTimeBasedString();
		$wksname = $firstname . '_' . getTimeBasedString();
		$d_data    =    array('Table'=>'userinfo','Fields'=>array('sso_ott'=>$ott,'regAuthorityId'=>0,'usertype'=>'normal','username'=>$name,'firstname'=>$firstname, 'lastname'=>$lastname, 'emailid'=>$email,'status'=>"verified", 'workspacename'=>$wksname));
		if(!$mysqlObj->Insert($d_data))
		{
			//insert failed error
			exit();
		}
		//$d_data    =    $mysqlObj->Read($query);
		
	}	
	else
	{
		$ott	=	sha1(uniqid("",true));
		$query	  =	   array('Table'=>'userinfo','Fields'=>array('sso_ott'=>$ott),'clause'=>"emailid='". "$email"."'");
		
		//$mysqlObj->Update($query);
		if(!$mysqlObj->Update($query))
		{
			//update failed
			return json_encode(array("success"=>"false","reason"=>"Data Update Failed"));
			//exit();
		}		
	}	
	return json_encode(array("success"=>"true","ott"=>$ott));
}
/*
 * 1. Initial check for session 
 * 2. Always run before any sign in and sign up
 */
/**/
/*
 * 1.For sign in 
 */
function sso_signin_verify($user_email,$user_password)//else if(isset($_POST['sign']) && $_POST['sign'] == 0)
{
	global $mysqlObj;
 	$email    =    $user_email;
	$password    =    $user_password;
	if(check_email($email) && $password != NULL && $password!="" && check_password($password))
	{
		ErrorLogging("WARNING SIGNIN matching allowed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email." password:".$password);
		$password	=	md5($password);
		$query    =    array('Fields'=>'userid,username,usertype,workspacename','Table'=>'userinfo','clause'=>"emailid='". "$email"."' && password='"."$password"."' && status='verified'");
		$d_data    =    $mysqlObj->Read($query);		
	}
	else
	{
		//ErrorLogging("signin email matching or password matching failed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email." password:".$password);
		return json_encode(array("success"=>"false","reason"=>"invalid email or password"));
		exit();	
	}
	if(!is_array($d_data))
	{
		return json_encode(array("success"=>"false","reason"=>"invalid email or password"));
		exit();
	}
	else
	{
		//$s_data    =    array('uid'=>$d_data[0]['userid'],'usertype'=>$d_data[0]['usertype'],'is_login'=>1,'anonymous'=>0,'username'=>$d_data[0]['username'],'emailid'=>$email);
		//set_session_data($s_data);
		//$foldername = $d_data[0]['workspacename']; 
		//$length = strlen($foldername); 		
		$ott	=	sha1(uniqid("",true));		
		$ott_data    =    array('Table'=>'userinfo','Fields'=>array('sso_ott'=>$ott),'clause'=>"emailid='".$email."'");
		
		
		if(!$mysqlObj->Update($ott_data))
		{
			//update failed
			return json_encode(array("success"=>"false","reason"=>"Data Update Failed"));
			exit();
		}
		//echo json_encode(array("success"=>"true","ott"=>$ott));
		//exit();
		return json_encode(array("success"=>"true","ott"=>$ott));
	}		
}

/*
 * 1. For sign up
 */
function sso_signup($e)//else if(isset($_POST['sign']) && $_POST['sign']==1)
{
	global $mysqlObj;
	$email    =    $e;
	if(check_email($email))
	{
		ErrorLogging("WARNING SIGNUP matching allowed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email=".$email);
		$query    =    array('Fields'=>'userid,username,status','Table'=>'userinfo','clause'=>"emailid='". "$email"."'");
		$d_data	=	 $mysqlObj->Read($query, 'assoc');
	}
		
	else
	{
		//ErrorLogging("signup email matching failed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email);
		return json_encode(array("success"=>"false","reason"=>"invalid email"));
		exit();	
	}
	
	if(is_array($d_data)&&$d_data[0]['status']=="verified")
	{
		return json_encode(array("success"=>"false","reason"=>"This email ID is already registered on our site"));
		exit ();
				
	}
	else if(is_array($d_data)&&$d_data[0]['status']=="unverified")
	{
		$config	=	$GLOBALS['sso_mail_verify_setting'];
		$query    =    array('Fields'=>'id','Table'=>'verify_link','clause'=>"emailid='". "$email"."'");
		$d_data    =    $mysqlObj->Read($query);
		$cipher	=	inner_encrypt($email,$d_data[0]['id']);
		$d_data    =    array('Table'=>'verify_link','Fields'=>array('verify_key'=>$cipher[1]),'clause'=>"emailid='". "$email"."'");
	}
	else 
	{
		
		$d_data    =    array('Table'=>'userinfo','Fields'=>array('emailid'=>$email,'status'=>"unverified",'usertype'=>'normal'));
		$retval = $mysqlObj->Insert($d_data); 
		if($retval == false)
		{
			//insert failed
			return json_encode(array("success"=>"false","reason"=>"Data Insert Failed"));
			exit();
		}
		/*$foldername = 'folder_';// . $retval; 
		$d_data	  =	   array('Table'=>'userinfo','Fields'=>array('workspacename'=>$foldername),'clause'=>"id='". "$retval"."'");
		if(!$mysqlObj->Update($d_data))
		{
			//update failed
			echo json_encode(array("success"=>"false","reason"=>"Data Update Failed"));
			exit();
		}*/		
		$d_data    =    array('Table'=>'verify_link','Fields'=>array('emailid'=>$email));
		$d_id     =     $mysqlObj->Insert($d_data);
		$cipher    =    inner_encrypt($email,$d_id);		
		$d_data	  =	   array('Table'=>'verify_link','Fields'=>array('verify_key'=>$cipher[1]),'clause'=>"id='". "$d_id"."'");
		
		
	}
	if(!$mysqlObj->Update($d_data))
	{
		//update failed
		return json_encode(array("success"=>"false","reason"=>"Data Update Failed"));
		exit();
	}
	$cipher    =    outer_encrypt($cipher[0]);
	$config		=	$GLOBALS['sso_mail_verify_setting'];
	$mailSubject	=	$GLOBALS['sso_signup_mail_subject'];
	$MailBody    =    $GLOBALS['sso_http_root'].$GLOBALS['sso_signup_form_link']."?sign_up_pass=".rawurlencode($cipher);
	
	require_once __DIR__.'./../user_files/sign-up-mail.php';
    if(!send_Email($email, $mailSubject, $mailString, '','', $config))
	{
		ErrorLogging("mail sending failed during signup "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email);//mail sending failed
		exit();
	}
	return json_encode(array("success"=>"true"));
	exit();
}

/*
 * 1.For reseting the password 
 */
function sso_reset($user_email) //if(isset($_POST['sign']) && $_POST['sign']==2)
{
	global $mysqlObj;
	$email    =   $user_email;
	if(check_email($email))
	{
		ErrorLogging("WARNING RESET matching allowed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email=".$email);
		$query    =    array('Fields'=>'userid,username,status','Table'=>'userinfo','clause'=>"emailid='". "$email"."'");
		$d_data	=	$mysqlObj->Read($query);
	}
	
	else
	{
		//ErrorLogging("reset email matching failed with regular expression "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email);
		return json_encode(array("success"=>"false","reason"=>"invalid email"));
		exit();
	}
	
	if(!is_array($d_data))
	{
		return json_encode(array("success"=>"false","reason"=>"email doesnot exists"));
		exit ();
	}
	else
	{
		if($d_data[0]['status']	==	"unverified")
		{
			return json_encode(array("success"=>"false","reason"=>"unverified email"));
			die();	//first verify yourself;
		}
		$query    =    array('Fields'=>'id','Table'=>'reset_link','clause'=>"emailid='". "$email"."'");
		$d_data    =    $mysqlObj->Read($query);
		
		if(is_array($d_data))
		{
			$cipher    =    inner_encrypt($email,$d_data[0]['id']);//update
			$d_data    =    array('Table'=>'reset_link','Fields'=>array('reset_key'=>$cipher[1]),'clause'=>"emailid='". "$email"."'");
			if(!$mysqlObj->Update($d_data))
			{
				//update failed
				exit();
			}
			$cipher    =    outer_encrypt($cipher[0]);
		}
		else
		{
			$d_data    =    array('Table'=>'reset_link','Fields'=>array('emailid'=>$email));
			$d_id     =     $mysqlObj->Insert($d_data);
			$cipher    =    inner_encrypt($email,$d_id);
			$d_data    =    array('Table'=>'reset_link','Fields'=>array('reset_key'=>$cipher[1]),'clause'=>"id='". "$d_id"."'");
			if(!$mysqlObj->Update($d_data))
			{
				//update failed
				exit();
			}
			$cipher	  =    outer_encrypt($cipher[0]);			//insert
		}
		
		$mailSubject    =    $GLOBALS['sso_mail_reset_subject'];
		$reset    =    rawurlencode($cipher);
		$MailBody    =	$GLOBALS['sso_http_root'].$GLOBALS['sso_reset_form_link']."?reset_pass=".$reset;		
		require_once __DIR__.'./../user_files/reset-mail.php'; 
		$config		=	$GLOBALS['sso_mail_verify_setting'];
		if(!send_Email($email, $mailSubject, $mailString,'','', $config))
		{
			ErrorLogging("mail sending failed during signup "."at line no. ".__LINE__." at file ".__FILE__." content: email:".$email);//mail sending failed
			exit();			
		}
		return json_encode(array("success"=>"true"));
		exit();
	}
}
//3c246269be6201c0740d6e4ce14b6fe125169b2f
function sso_getuserinfo($ott){
	global $mysqlObj;
	//look up the database for the ott and get the user mail id, user name etc.
	$query    =    array('Fields'=>'userid,firstname,workspacename','Table'=>'userinfo','clause'=>'sso_ott="'. $ott . '"');
	//array('Fields'=>'userid,username,status','Table'=>'userinfo','clause'=>"emailid='". "$email"."'");
	$d_data    =    $mysqlObj->Read($query,'assoc');		
	if(!$d_data){
		//update failed
		return json_encode(array("success"=>"false")); 		
	}	
	//exit();
	//$d_data = json_decode($d_data); 
	return json_encode(array("success"=>"true","userid"=>$d_data[0]['userid'], 'firstname'=>$d_data[0]['firstname'], 'workspacename'=>$d_data[0]['workspacename']));
	//return $d_data; 
}

function getTimeBasedString(){
	$retTime = localtime(time(), true);
	$year = $retTime['tm_year'] + 1900;	
	$timestr = $year . $retTime['tm_yday'] . $retTime['tm_hour'] . $retTime['tm_min'] . $retTime['tm_sec'] ;
	return $timestr; 
}