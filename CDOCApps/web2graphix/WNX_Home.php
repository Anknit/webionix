<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="google-signin-client_id" content="258000566940-thqh5n9qqq5dfp5ge7najjtbhaa145hg.apps.googleusercontent.com">
<title>Webionix</title>
<link rel="stylesheet" href="../CommonJS/Bootstrap/css/bootstrap.min.css">
<script src="../CommonJS/jquery-1.10.2.min.js"></script>
<script src="../CommonJS/Bootstrap/js/bootstrap.min.js"></script>
<script src="../CommonJS/jquery.blockUI_2.70.js"></script>
<script   type="text/javascript" src="../CommonJS/Utilities.js"></script>
<script src="../CommonPHP/SSO/js/sso.js" ></script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<!-- SSO Related logic here  -->
<script>
sso.u="../web2graphix/GX_sso.php";
var bSignedIn = false;
var gAppURL = '../web2graphix/GX_Editor.html'; 
$(document).ready(function(){
	
	var gcallbackFn =''; 
	sso.u="../web2graphix/GX_sso.php";
$("#signup").on("click",function(){
	email	=	$("#sign-up-email").val();
	sso.signup(email, 'MySSOCallback');
});

$("#signin").on("click",function(){
	email	=	$("#s_email").val();
	pass	=	$("#s_pass").val();
	var retval = sso.signin(email,pass, gcallbackFn);	
});

$("#reset").on("click",function(){
	email	=	$("#s_email").val();	
	var retval = sso.reset(email, 'Mycallback');	
});
});

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
		var retval = sso.signin(email,pass, gcallbackFn);
		break; 
	case 'resetBtn':
		email	=	$("#sign-in-email").val();	
		var retval = sso.reset(email, 'MySSOCallback');	
		break; 
	default:	
		break; 
	}
	BlockUIinAjax(true);
}
function MySSOCallback(optype, status){
	var obj = JSON.parse(status); 	
	BlockUIinAjax(false);
	switch(optype){
	
	case 'signup':
		if(obj['success'] == 'true'){
			$('#result_error').hide();
			$('#result_success').show(); 
		}
		else{
			$('#result_success').hide(); 
			var node =  $('#SU_Err_Msg')[0].innerHTML = obj['reason']; 
			$('#result_error').show(); 
		}
		break;
	case 'signin':
		if(obj['success'] == 'true'){			
			name = obj['firstname']; 
			$('#loginModal').modal("hide");
			$('#signinBtn').hide(); 
			$('#signoutBtn').show();	
			$('#welcomeMsg')[0].innerHTML = 'Hi ' + name; 
			JQSel = '#userMsg'; 
			$(JQSel).show(); 
			bSignedIn = true; 
		}
		else{
			$('#signinErrorMessage').show(); 			
		}
		break;
		
		
	case 'getuserinfo':
		if(obj['success'] == 'true'){
			
			alert('Welcome ' +  obj['firstname']); 
		}
		break; 
	case 'googleverify':
		if(obj['success'] == 'true'){
			name = obj['firstname']; 
			$('#loginModal').modal("hide");
			$('#signinBtn').hide(); 
			$('#signoutBtn').show();	
			$('#welcomeMsg')[0].innerHTML = 'Hi ' + name; 
			JQSel = '#userMsg'; 
			$(JQSel).show(); 
			bSignedIn = true; 	
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


 function MySSOAndAppLaunch(optype, status){
	 var obj = JSON.parse(status); 	
		switch(optype){				
		case 'signin':
			if(obj['success'] == 'true'){			
				name = obj['firstname']; 
				$('#loginModal').modal("hide");
				$('#signinBtn').hide(); 
				$('#signoutBtn').show();	
				$('#welcomeMsg')[0].innerHTML = 'Hi ' + name; 
				JQSel = '#userMsg'; 
				$(JQSel).show(); 				
				bSignedIn = true;				
				var mywindow = window.open(gAppURL, '_self'); 
			}
			else{
				$('#signinErrorMessage').show(); 			
			}
			break;		
		case 'googleverify':
			if(obj['success'] == 'true'){
				name = obj['firstname']; 
				$('#loginModal').modal("hide");
				$('#signinBtn').hide(); 
				$('#signoutBtn').show();	
				$('#welcomeMsg')[0].innerHTML = 'Hi ' + name; 
				JQSel = '#userMsg'; 
				$(JQSel).show(); 
				bSignedIn = true; 	
				var mywindow = window.open(gAppURL, '_self'); 
			}
			else{
				$('#signinErrorMessage').show(); 			
			}
			
			break; 		
		default:
			break; 
		}
 }
 
function GetUserInfo(ott){
	sso.getuserinfo(ott, 'MyOTTCallback'); 
}

function OnBtnclick(event){
	var BtnID =  event.target.id; 
	if(BtnID == 'signinBtn'){		
		var JQSel = '.sso_message'; 
		$(JQSel).hide(); 
		gcallbackFn = 'MySSOCallback'; 
		JQSel = '#loginModal'; 
		$(JQSel).modal(); 
	}
	else if(BtnID == 'signoutBtn'){
		var JQSel = '#signoutBtn';
		$(JQSel).hide(); 
		JQSel = '#signinBtn';
		$(JQSel).show(); 	
		JQSel = '#userMsg'; 
		$(JQSel).hide(); 
	}
	else if(BtnID == 'launchAppBtn'){
		//first chec if the user is signed in 
		if(bSignedIn == true){
			
			var mywindow = window.open(gAppURL, '_self'); 
		}else{
			var JQSel = '.sso_message'; 
			$(JQSel).hide(); 
			gcallbackFn = 'MySSOAndAppLaunch'; 
			JQSel = '#loginModal'; 
			$(JQSel).modal(); 
		}
			
		//if yes then launch the editor 
		//if no then pop up login modal
	}
	
}
</script>

<style>
  /* latin */
@font-face {
		  font-family: 'Montserrat';
		  font-style: normal;
		  font-weight: 400;
		  src: local('Montserrat-Regular'), url(http://fonts.gstatic.com/s/montserrat/v6/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2) format('woff2');
		  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
		}
		/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(http://fonts.gstatic.com/s/lato/v11/UyBMtLsHKBKXelqf4x7VRQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(http://fonts.gstatic.com/s/lato/v11/1YwB1sO8YE1Lyjf12WNiUA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
  body {
      font: 400 15px Lato, sans-serif;
      line-height: 1.8;
      color: #818181;
      text-align: justify;
      text-justify: inter-word;
  }
  h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: #303030;
      font-weight: 600;
      margin-bottom: 30px;
  }
  h4 {
      font-size: 19px;
      line-height: 1.375em;
      color: #303030;
      font-weight: 400;
      margin-bottom: 30px;
  }  
  .container-fluid {
      padding: 60px 50px;
  }
	.jumbotron { 
	    background-color: #BFD1F1 ;/*#000;*/ 
	    color: #000;
	    padding: 100px 5px;
	    font-family: Montserrat, sans-serif;
	    height:350px; 
	    
	}
   .bg-grey {
      background-color: #f6f6f6;
  }
	.nav{
		background-color:ddd;
		color: #fff;
	}.navbar {
    margin-bottom: 0;
    background-color: #f4511e;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
}
/*SSO Widget related */
.modal-header{background-color:#555}

.sso_widget{
	/*position:relative;
	top:0px; */
	padding-top:45px; 
}
.navbar li a, .navbar {
    color: #fff !important;    
}
.navbar li a{
	font-variant:small-caps; 
	font-size: 14px;
}
.logotext{
	color:green; 
	margin-top:0px; 
	font-weight:bold;
	font-size: 30px;
	font-family:'Impact,sans-serif';
	/*text-shadow: 0 0 1px #0000ff;*/
}
.navbar-brand{	
	
}
.navbar-nav li a:hover, .navbar-nav li.active a {
    color: #f4511e !important;
   /* background-color: #fff !important;*/
    text-decoration:underline; 
}


.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
}
.navbar-text{
	color:#F9F9FB !important; 
	font-weight:bold; 	
}

#welcomeMsg span:hover{
	 color: #f4511e !important;
   /* background-color: #fff !important;*/
    text-decoration:underline; 
}

.dropdown-menu {
	color:#ff0000; 
	background-color:#555
}
.carousel-control.right, .carousel-control.left {
      background-image: none;
      color: #f4511e;
  }
  .carousel-indicators li {
      border-color: #f4511e;
      bottom:2px; 
      position:relative;
      top:60px;
  }
  .carousel-indicators li.active {
      background-color: #f4511e;
  }
   .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
     /* width: 30%;*/
      margin: auto;
  }
  
  .carousel-caption {
  	padding-right: 0px; 
  	position:relative;
  	top:10px;
  	left:30px; 
  	color:#565052; 
  }
</style>

</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top" style='background-color:black'>
  <div class="container" style='margin-top:5px'>
    <div class="navbar-header" style='margin-left:-60px'>
      <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>-->
      <a class="navbar-brand" href="#myPage" style='margin-top:-15px'><img class="img-responsive" src="../CommonCSS/icons/Version1/SiteIcons/wnxnotextlogo.png" width='50px' height='50px'></a>
      <p class="navbar-brand logotext" style='color:#f4511e;'>Noxta</p>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-left" style='padding-left:45px'>
        <li><a href="#home">Home</a></li>
        <li><a href="#application">Application</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li class='dropdown'><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Help<span class="caret"></span></a>
          <ul id='helpmenu' class="dropdown-menu dropdown-menu-center" >
    		<li><a href="#">FAQs</a></li>
    		<li><a href="#">Tutorials</a></li>    			
  		  </ul>
        </li>
        
        <li><a href="#forums">Forums</a></li>
      </ul>
      <ul id='userMsg' class='nav navbar-nav navbar-right' style='display:none'>        	    	
      	<p  id="userInfoMenu" class="navbar-text dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      	<span id='welcomeMsg'>Hi Guest kumar</span>
    	<span class="caret"></span>
    	</p>
    	<ul id='accountinfomenu' class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenu1" >
    		<li><a href="#">My Account</a></li>
    		<li><a href="#">My Workspace</a></li>
    		<li><a href="#">Log-Out</a></li>    		
  		</ul>
      </ul>
      <ul class='nav navbar-nav navbar-right' style='padding-left:50px'>
      	<button id='signinBtn' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-warning" data-toggle="modal"><span class="glyphicon glyphicon-log-in" aria-hidden="true" style='padding-right:5px'></span>Sign-in</button>
      	<button id='signoutBtn' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-success" style='display:none'><span class="glyphicon glyphicon-log-out" aria-hidden="true" style='padding-right:5px;'></span>Sign-Out</button>
      </ul> 
    </div>
  </div>
</nav>

<div class="jumbotron text-center">
<div id="bannerCarousel" class="carousel slide" data-ride="carousel" data-interval='3000'>
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#bannerCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#bannerCarousel" data-slide-to="1"></li>
      <li data-target="#bannerCarousel" data-slide-to="2"></li>      
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner text-center" role="listbox">
      <div class="item active center" >
        <img src="../CommonCSS/icons/Version1/SiteIcons/designer1.png"  width="auto" height="100" >    
        <div class="carousel-caption">
          <h3>Discover the Artiste inside you </h3>           
        </div>
      </div>

      <div class="item center">
        <img src="../CommonCSS/icons/Version1/SiteIcons/cloud1.jpg" width="auto" height="100">
        <div class="carousel-caption">
          <h3>Work on the Cloud from anywhere anytime, No Installation required</h3>           
        </div>
      </div>
    
      <div class="item center">
        <img src="../CommonCSS/icons/Version1/SiteIcons/Editor1.png"  width="auto" height="100">
        <div class="carousel-caption">
          <h3>No need to understand HTML,SVG , Just get going!</h3>           
        </div>
      </div>     
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#bannerCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#bannerCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
 </div>
 <button id='launchAppBtn'  onclick='OnBtnclick(event)' class='btn btn-mg btn-default' style='margin-top:60px; border-radius: 25px; color:#E2DDDD; background-color:#790808'>Launch Application</button>
</div>

<!-- Home section -->
<div id='home' class='container-fluid'>
	
	<div class='rows'>
		<div class='col-sm-8' style='border-right:2px inset #eee; padding-right:20px'>
			 <p>
			   <strong>Noxta</strong> is a web based application, to allow designers create graphics and animations assets for usage on Web. Allows one to create Web 2.0 based assets in the form of SVG(Scalar Vector Graphics) which takes only a fraction of disk space compared to equivalent assets in form of JPG/PNG and .swf files.  SVG is now supported in almost all the popular browsers as well as mobile phones.  The Noxta UI allows any new user to ramp up the application in few minutes.  All your work is stored on the cloud and you can access them from anywhere, anytime.             
			 </p>
			 <div class="panel panel-default">
				  <div class="panel-heading text-center"><strong>Features</strong></div>
				  <div class="panel-body">
				  <ul type='square'>
				  	<li>Requires no Installation. Just Sign-up and Start.</li>
				  	<li>Storing all your work on the Cloud means work from anywhere, anytime. </li>
				  	<li>Support all Basic shapes of SVG specification</li>
				  	<li>Supports Text and Images</li>
				  	<li>Allows Freehand drawing</li>
				  	<li>Import additional shapes and other SVG objects</li>
				  	<li>Download or  Share in One click</li>
				  	<li>Create Powerful Animations in few clicks</li>
				  </ul>
				  </div>
			 </div>
		</div>
		<div class='col-sm-4'>
		Testimonials
		</div>
	</div> 
</div>

<!-- SSO Related Widgets -->
<!-- Modal -->
<div id="loginModal" class="modal fade sso_widget" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header text-center" >
        <button  type="button" class="close" data-dismiss='modal' >&times;</button>
        <h4 class="modal-title">Log-In</h4>
      </div>
      <div class="modal-body">
      	<div class='form-group'>	
      		   <div class='contaner'>
	      		<div class='row'>
	      			<div class='col-sm-4'></div>
	      			<div class='col-sm-4'>
	      				<div id='googleBtn' class="g-signin2" data-onsuccess="onSignIn" '></div>     
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
       </div>        
      </div>
    </div>
  </div>
</div>

</body>
</html>