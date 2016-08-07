<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="google-signin-client_id" content="42338840257-9ll1lip2eqc6dg2p00ntl94njnb39d1r.apps.googleusercontent.com">
<title>Webionix</title>
<link rel="stylesheet" href="../../../CommonJS/Bootstrap/css/bootstrap.min.css">
<script src="../../../CommonJS/jquery-1.10.2.min.js"></script>
<script src="../../../CommonJS/Bootstrap/js/bootstrap.min.js"></script>
<script src="../js/sso.js" ></script>
<link rel="stylesheet" type="text/css" href="./../../../web2graphix/homepage.css" />
    <script type="application/javascipt" src="./../../../web2graphix/homepage.js"></script>
<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<!-- SSO Related logic here  -->
<script>
$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
		a={"age":"23"};
		sso.u="../../../web2graphix/GX_sso.php";		
		sso.signup_verify(	$("#firstName").val(),	$("#lastName").val(),	a,	$("#password").val(), 'MySSOCallback');
		
	});
});

function MySSOCallback(optype, status){
			var obj = JSON.parse(status);
			var URLstr = '../../../web2graphix/WNX_Home.php';
			if(!URLstr)
					return;	
			$('#signupSuccessMessage').show(); 		
}
</script>
</head>
<body>
        <nav class="navbar navbar-theme">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="pull-left brand-logo" href="./../../../../">
                        <img src="../../../CommonCSS/icons/Version1/SiteIcons/wnxnotextlogo.png" width='50px' height='50px' style="float:left;margin-right:5px">
                        <p class="navbar-brand logotext">Noxta</p>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="btn-link" href="#" id='signinBtn' onclick='OnBtnclick(event)' data-toggle="modal" data-target="#signupModal">Login</a></li>
                        <li><a class="btn-link" href="#" id='signupBtn' onclick='OnBtnclick(event)' data-toggle="modal" data-target="#signupModal">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>

<!-- Home section -->
<div id='home' class='container'>
	<div class='rows'>	
		<div class='col-sm-3'>
		</div>	  
		<div class='col-sm-6' style='border:1px solid #eee; padding-right:20px; padding-top:5px; margin-top:100px'>
			<div class='text-center' style='padding-top:6px'>
				 <h3>Complete registration </h3>  
			</div>
			  <form role="form" action="./../../Common/php/sso.php?sign_up_pass=<?php echo rawurlencode($_GET['sign_up_pass']);?>" method="POST">			  		  
				  <div class="form-group">				   
				    <label for="firstName">First Name</label>
				    <input type="text" class="form-control" id="firstName" placeholder='Enter your First name here'>
				  </div>
				  <div class="form-group">
				    <label for="lastName">Last Name</label>
				    <input type="text" class="form-control" id="lastName" placeholder='Enter your Last name here'>
				  </div>
				  <div class="form-group">
				    <label for="password">Password</label>
				    <input type="password" class="form-control" id="password" placeholder='Enter your Password'>
				  </div>
				  <div class="form-group">
				    <label for="password_conf">Confirm Password</label>
				    <input type="password" class="form-control" id="password_conf" placeholder='Confirm your Password'>
				  </div>
				   <div class="form-group text-center">
				  		<button type="submit" class="btn btn-default btn-success">Submit</button>
				  </div>
				  <div id='signupSuccessMessage' class="alert alert-success sso_message text-center" style='display:none'>
    					<strong>Congratulations! </strong><span>You have been successfully Registered.</span> 
    					<a href="../../../web2graphix/WNX_Home.php" class="btn btn-info btn-success" role="button">Click Here</a>
    					<!-- <button id='linkBtn' class='btn btn-default btn-link' onclick='' >Take me to Main site</button>-->
  				  </div>
  				  <div id='signupErrorMessage' class="alert alert-danger sso_message text-center" style='display:none'>
    					<strong>Sorry ! </strong><span>Some Error Occurred while submitting. Try again</span> 
    					
  				  </div>
				</form>
		</div>	
		<div class='col-sm-3'>
		</div>
	</div> 
</div>
        <div id="loginModal" class="modal fade sso_widget" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <button type="button" class="close" data-dismiss='modal'>&times;</button>
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
                        <div class="form-group">
                            <div class="row text-center">
                                <div class="col-xs-12">
                                    <img id="captcha" src="./../securimage/securimage_show.php" alt="CAPTCHA Image" />
                                </div>
                                <div class="col-xs-12">
                                    <input type="text" name="captcha_code" size="10" maxlength="6" id="captcha_code" />
                                    <a href="#" onclick="document.getElementById('captcha').src = './../securimage/securimage_show.php?' + Math.random(); return false">
                                        <span class="glyphicon glyphicon-refresh"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='text-center'>
                            <div>
                                <button id='signinBtn' type="button" class="btn btn-success" onclick='OnClickSSOButtons(event)'>Sign-In</button>
                            </div>
                            <div>
                                <button id='resetBtn' type="button" class="btn btn-link" onclick='OnClickSSOButtons(event)'>Forgot Password</button>
                            </div>

                            <div id='signinErrorMessage' class="alert alert-danger sso_message" style='display:none'>
                                <strong>Sign-In Error!</strong>Problem with the EMail Id or the password you entered! Try again.
                            </div>
                            <div id='reset_success_message' class="alert alert-success sso_message" style='display:none'>
                                <strong>Reset Password!</strong>An EMail has been sent to your Email Id for verification.
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class='text-center'>
                            <label class='control-label'>Don't Have a Registered Account</label>
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Sign-Up</button>
                            <p id="login-message" class="text-danger"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="signupModal" class="modal fade sso_widget" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Sign-Up</h4>
                    </div>
                    <div class="modal-body">

                        <div class='form-group'>
                            <div class='text-center' style='position:relative:50px'>
                                <span class='help-block'>OR</span>
                            </div>
                            <input id="sign-up-email" class="form-control" type="email" name="email" placeholder="Enter a Valid EMail ID to Register" required="">

                        </div>

                        <div class='text-center'>
                            <button id='signupBtn' type="button" class="btn btn-success" onclick='OnClickSSOButtons(event)'>Sign-Up</button>
                            <div id='result_error' class="alert alert-danger sso_message" style='display:none'>
                                <strong>Sign-Up Error!</strong><span id='SU_Err_Msg'>Problem with the EMail Id you entered! Try again.</span>
                            </div>
                            <div id='result_success' class="alert alert-success sso_message" style='display:none'>
                                <strong>Sign-Up Success!</strong>An EMail has been sent to your Email Id for verification.
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class='text-center'>
                            <span class='help-block' style='display:inline-block'>Already Registered ?</span>
                            <!-- <button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal">Sign-In</button>-->
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#loginModal" data-dismiss="modal">Sign-In</button>
                            <p id="signup-message" class="text-danger"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</body>
</html>

<!-- 
<form action="./../../Common/php/sso.php?sign_up_pass=<?php echo rawurlencode($_GET['sign_up_pass']);?>" method="POST">
name:<input type="text" name="first_name" id="name">
last name:<input type="text" name="last_name" id="l_name">
age:<input type="text" name="age" id="age">
password:<input type="password" name="password" id="pass">
<input type="submit" value="Submit">
</form>

-->