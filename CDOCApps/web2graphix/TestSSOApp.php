<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="google-signin-client_id" content="258000566940-thqh5n9qqq5dfp5ge7najjtbhaa145hg.apps.googleusercontent.com">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://localhost/CDOCApps/CommonJS/Bootstrap/css/bootstrap.min.css">
<style type="text/css">
	.modal-header{background-color:#147F7B}
</style>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="http://localhost/CDOCApps/CommonJS/jquery-1.10.2.min.js"></script>
<script src="http://localhost/CDOCApps/CommonJS/Bootstrap/js/bootstrap.min.js"></script>
<script src="http://localhost/CDOCApps/CommonPHP/SSO/js/sso.js" ></script>

<script>
$(document).ready(function(){
sso.u="http://localhost/CDOCApps/CommonPHP/SSO/php/sso.php";
$("#signup").on("click",function(){
	email	=	$("#sign-up-email").val();
	sso.signup(email, 'MySSOCallback');
});

$("#signin").on("click",function(){
	email	=	$("#s_email").val();
	pass	=	$("#s_pass").val();
	var retval = sso.signin(email,pass, 'MySignInCallback');
	
});

$("#reset").on("click",function(){
	email	=	$("#s_email").val();	
	var retval = sso.reset(email, 'Mycallback');	
});


});
sso.u="http://localhost/CDOCApps/CommonPHP/SSO/php/sso.php";
function OnClickSSOButtons(event){
	var btnID = event.target.id; 	
	switch(btnID){	
	case 'signupBtn':
		email	=	$("#sign-up-email").val();
		sso.signup(email, 'MySSOCallback');
		break;
	case 'signinBtn':
		email	=	$("#sign-in-email").val();
		pass	=	$("#sign-in-password").val();
		var retval = sso.signin(email,pass, 'MySSOCallback');		
		break; 
	case 'resetBtn':
		email	=	$("#sign-in-email").val();	
		var retval = sso.reset(email, 'MySSOCallback');	
		break; 
	default:	
		break; 
	}
}
function MySSOCallback(optype, status){
	var obj = JSON.parse(status); 
	
	switch(optype){
	
	case 'signup':
		if(obj['success'] == 'true'){
			$('#result_error').hide();
			$('#result_success').show(); 
		}
		else{
			$('#result_success').hide(); 
			$('#result_error').show(); 
		}
		break;
	case 'signin':
		if(obj['success'] == 'true'){
			$('#loginModal').modal("hide");
			var URLstr = 'http://localhost/CDOCApps/web2graphix/GX_Editor.html';
			if(!URLstr)
					return;			
				    //open a new window with page title
				  var myWindow = window.open(URLstr, '_self', '');
				  myWindow.resizeTo(screen.width, screen.height);
				  myWindow.moveTo(50, 50);
				  myWindow.focus(); 	
		}
		else{
			$('#signinErrorMessage').show(); 			
		}
		
		break; 
	case 'reset':
		if(obj['success'] == 'true'){
			$('#reset_success_message').show();
		}
		else{
			$('#signinErrorMessage').show(); 			
		}
		break; 
	default:
		break; 
	}
	
}

function MySignInCallback(optype, status){
	var obj = JSON.parse(status);
	if(obj['success'] == 'true'){
		//sso.getuserinfo(obj['ott'], ''MyOTTCallback ); 
		GetUserInfo(obj['ott']); 
	}
	
}
function Mycallback(optype, status){
	var obj = JSON.parse(status);
	alert('OpType=' + optype + 'Status=' + status); 
}

function MyOTTCallback(data){
	alert(data); 
}
function GetUserInfo(ott){
	sso.getuserinfo(ott, 'MyOTTCallback'); 
}
</script>
<title>Test My SSO Widget</title>
</head>
<body>


<div class="row" style='margin-top:25px'>
    <div class="col-sm-6"></div>
    <div class="col-sm-4"></div>
    <div class="col-sm-2">
    	<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#loginModal">Login</button>
    </div>
  </div>
<!-- Modal -->
<div id="loginModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center" >
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Log-In</h4>
      </div>
      <div class="modal-body">
      	<div class='form-group'>	
      		   <div class='contaner'>
	      		<div class='row'>
	      			<div class='col-sm-4'></div>
	      			<div class='col-sm-4'>
	      				<div id='googleBtn' class="g-signin2" data-onsuccess="onSignIn"></div>     
	      			</div>
	      			<div class='col-sm-4'></div>
	      		</div>	      		
	      	</div>    		
	       	        		
      	</div> 	 
      	 
      	<div class='form-group'>
	      	<div class='text-center' style=' border-top:2px dash grey'>
	      		<span class='help-block'>OR</span>
	      	</div>   
	      	<div class='contaner'>
	      		<div class='row'>
	      			<div class='col-sm-2'></div>
	      			<div class='col-sm-8'>
	      				<input id="sign-in-email" class="form-control" type="email" name="email" placeholder="Use your registered EMail ID to Sign-In" required="">
	      			</div>
	      			<div class='col-sm-2'></div>
	      		</div>	      		
	      	</div>  		
      		
      		
      	</div>
         <div class='form-group'>
         <div class='contaner'>
	      		<div class='row'>
	      			<div class='col-sm-2'></div>
	      			<div class='col-sm-8'>
	      				<input id="sign-in-password" class="form-control" type="password" name="" placeholder="Type in password" required="">
	      			</div>
	      			<div class='col-sm-2'></div>
	      		</div>	      		
	      	</div>  
         	
         </div>
         <div class='text-center'>
         	<div>
         		<button id='signinBtn' type="button" class="btn btn-success" onclick='OnClickSSOButtons(event)'>Sign-In</button>
         	</div>         
         	<div>
         		<button id='resetBtn' type="button" class="btn btn-link" onclick='OnClickSSOButtons(event)' >Forgot Password</button>
         	</div>
         	
         	 <div id='signinErrorMessage' class="alert alert-danger" style='display:none'>
    			<strong>Sign-In Error!</strong>Problem with the EMail Id or the password you entered! Try again. 
  			</div>
  			<div id='reset_success_message' class="alert alert-success" style='display:none'>
    			<strong>Reset Password!</strong>An EMail has been sent to your Email Id for verification.  
  			</div>  			
         </div>
      </div>
      <div class="modal-footer">       
      <div class='text-center'>
       		<label class='control-label'>Don't Have a Registered Account</label>       	   		
       		<button type="button" class="btn btn-link" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Sign-Up</button>
      </div>           
      </div>
    </div>

  </div>
</div>

<div id="signupModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Sign-Up</h4>
      </div>
      <div class="modal-body">
      	<div class='form-group'>	     		
	       	    <div id='googleBtn1' class="g-signin2" data-onsuccess="onSignIn"></div>         		
      	</div> 	 
      	 
      	<div class='form-group'>
	      	<div class='text-center' style='position:relative:50px'>
	      		<span class='help-block'>OR</span>
	      	</div>     		
      		<input id="sign-up-email" class="form-control" type="email" name="email" placeholder="Enter a Valid EMail ID to Register" required="">
      		
      	</div>
         
         <div class='text-center'>
         	<button id='signupBtn' type="button" class="btn btn-success" onclick='OnClickSSOButtons(event)'>Sign-Up</button>
         	 <div id='result_error' class="alert alert-danger" style='display:none'>
    			<strong>Sign-Up Error!</strong>Problem with the EMail Id you entered! Try again. 
  			</div>
  			 <div id='result_success' class="alert alert-success" style='display:none'>
    			<strong>Sign-Up Success!</strong>An EMail has been sent to your Email Id for verification.  
  			</div>
         </div>
      </div>
      <div class="modal-footer">
       <div class='text-center'>
       		<span class='help-block' style='display:inline-block'>Already Registered ?</span>       		
       	<!-- <button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal">Sign-In</button>-->
       		<button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">Sign-In</button>
       </div>        
      </div>
    </div>

  </div>
</div>
</body>
</html>