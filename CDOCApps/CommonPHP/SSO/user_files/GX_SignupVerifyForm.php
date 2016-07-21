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
				    //open a new window with page title
			/*var myWindow = window.open(URLstr, '_self', '');			
			myWindow.focus();
			*/ 
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
	color:#98AAE0 !important; 
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
      <ul class='nav navbar-nav navbar-right'>        	    	
      	<p  id="dropdownMenu1" class="navbar-text dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      	Hi Guest kumar 
    	<span class="caret"></span>
    	</p>
    	<ul id='accountinfomenu' class="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenu1" >
    		<li><a href="#">My Account</a></li>
    		<li><a href="#">My Workspace</a></li>
    		<li><a href="#">Log-Out</a></li>    		
  		</ul>
      </ul>
      <ul class='nav navbar-nav navbar-right' style='padding-left:50px'>
      	<button type="button" class="btn btn-default navbar-btn btn-info" data-toggle="modal" data-target="#loginModal"><span class="glyphicon glyphicon-log-in" aria-hidden="true" style='padding-right:5px'></span>Sign in</button>
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
				 <h3>Registration Form </h3>  
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