<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-signin-client_id" content="258000566940-thqh5n9qqq5dfp5ge7najjtbhaa145hg.apps.googleusercontent.com">
        <title>Free SVG Design App</title>
        <link rel="stylesheet" href="../CommonJS/Bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="WNX_Home.css" />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    </head>
    <body>
        <nav class="navbar navbar-theme navbar-fixed-top">
            <div class="container">
                <div class="navbar-header" style='position:relative; left:-60px'>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                     <a class="pull-left brand-logo">
                       <img src="../CommonCSS/icons/Version1/SiteIcons/SVGLogo.svg" width='70px' height='70px' style='margin-left:-15px;position:relative; top:-10px'>
                      
                     </a>
                     
                    
                    <!-- <p class="navbar-brand logotext"  >Webionix</p>-->
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-center" style='font-variant:small-caps;'>
                        <li><a href="#aboutsection">About Webionix</a></li>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li id="userMsg" style="display:none;">
                            <div class="navbar-text">
                                <span id='welcomeMsg'></span>
                            </p>
                        </li>                        
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
				     	<button id='launchAppBtn' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-info" data-toggle="modal" style='margin-right:55px'><span class="glyphicon glyphicon-edit" aria-hidden="true" style='padding-right:5px'></span>Start Now</button>
				      	<button id='signinBtn' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-warning" data-toggle="modal"><span class="glyphicon glyphicon-log-in" aria-hidden="true" style='padding-right:5px'></span>Sign-in</button>
				      	<button id='signoutBtn' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-success" style='display:none'><span class="glyphicon glyphicon-log-out" aria-hidden="true" style='padding-right:5px;'></span>Sign-Out</button>
				     </ul> 
                </div>
            </div>
        </nav>
        <div class="container-fluid top-section">
           <!-- <div class="hero-container text-center container">
                <h1>Build amazing animations, faster.</h1>
                <h4 class="width-sm text-grey padding-md-all">
                    <strong>Webionix</strong> is a web based application, to allow designers create graphics and animations assets for usage on Web.
                </h4>
                <button class="btn btn-info btn-lg btn-flat" id='launchAppBtn' onclick='OnBtnclick(event)' >Start Building Now !</button>
            </div>
            -->

      <div id="myCarousel" class="carousel slide" data-interval='10000'>
	    <!-- Indicators -->
	    <ol class="carousel-indicators">
	      <li class="item1 active"></li>
	      <li class="item2"></li>
	      <li class="item3"></li>      
	    </ol>

	    <!-- Wrapper for slides -->
	    <div class="carousel-inner text-center" role="listbox">
	      <div class="item active">
	        <object id='item_0' type="image/svg+xml" data="" height="400px" width="auto"></object>
	      </div>
	
	      <div class="item">
	        <object id='item_1' type="image/svg+xml" data="" height="400px" width="auto"></object>
	      </div>
	    
	      <div class="item">
	        <object id='item_2' type="image/svg+xml" data="" height="400px" width="auto"></object>
	      </div>     
    </div>

   <!-- 
    <a class="left carousel-control" href="#myCarousel" role="button">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  -->
  </div>
       
        </div>
        <!-- 
        
         <div class="container-fluid features-section">
            <div class="hero-container text-center">
                <h1>A Free drawing app for Web 2.0, gets you going in few minutes</h1>
                <h4 class="width-md text-grey padding-md-all">
                    <ul style='text-align: left'>
                    	<li>No need to understand HTML/SVG</li>
                    	<li>Context Sensitive Help guides you at every step</li>
                    	<li>Works on popular browsers like Chrome, Firefox etc.</li>
                    </ul>
                </h4>
                
            </div>
        </div>
  -->
  		<div class="container-fluid features-section">
            <div class="text-center" style='text-align:center'>
                <h1>A Free drawing app for Web 2.0, gets you going in few minutes</h1>
                <h4 class="width-md text-grey padding-md-all">
                    <ul style='text-align:left'>
                    	<li>No need to understand HTML/SVG</li>
                    	<li>Context Sensitive Help guides you at every step</li>
                    	<li>Works on popular browsers like Chrome, Firefox etc.</li>
                    </ul>
                </h4>
                <div class='appscreen' >
                	<img src= '../CommonCSS/icons/Version1/SiteIcons/bg-hero-small.png' width='auto' height='auto'  />;
                </div>
                
            </div>
        </div>
        
        
        <div id='Features' class="bg-grey container-fluid text-center features-highlight">
            <h1 >Features</h1>
            <div class="row">
            	<div class="col-xs-4">
                    <div class="feature-item">
	                      <div class='feature-content'>
	                        <div class="glyph-container">
	                            <span class="glyphicon glyphicon-picture"></span>
	                        </div>
	                        <h3>Supports Shapes,Text and Images</h3>
	                    </div>
                    </div>
                </div>
                
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class='feature-content'>
	                        <div class="glyph-container">
	                            <span class="glyphicon glyphicon-pencil"></span>
	                        </div>
	                        <h3>Allows Freehand drawing</h3>
	                   </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                    <div class='feature-content'>
	                        <div class="glyph-container">
	                            <span class="glyphicon glyphicon-film"></span>
	                        </div>
	                        <h3>Supports Animation</h3>
                    	</div>
                    </div>
                </div>
                
                <div class="col-xs-4">
                    <div class="feature-item">
                    <div class='feature-content'>
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-cloud-upload"></span>
                        </div>
                    <h3>Work from Anywhere, Anytime.</h3>
                    </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                      <div class='feature-content'>
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-share-alt"></span>
                        </div>
                        <h3>Allows Sharing & Downloading</h3>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-xs-4">
                    <div class="feature-item">
                       <div class='feature-content'>
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-question-sign"></span>
                        </div>
                        <h3>Context Sensitive Help</h3>
                        </div>
                </div>
                </div>
            </div>
        </div>
     
        
         <div id='aboutsection' class="container about-section text-center">
         	<h1>About Webionix</h1>
         	<div class='rows'>
         	   <div class='about-text' style='text-align:justify'>
         		<p> Webionix brings to you a unique, versatile and powerful new generation Graphics Authoring tool
         		 that lets you create interactive graphics assets for the Web. These could be interactive and 
         		 animated logos, icons, banner advertisements, presentations, or content for education and 
         		 training. <br>
         		 Its Drawing, Editing and Animation features are very intuitive and simple to use. You could be a
         		 professional designer or a layman. Creating interactive and animated graphics is now child's 
         		 play. <br>
         		 The underlying multidimensional tool of Webionix uses scalar vector graphics (SVG) specification of HTML-5. This means 
         		 the graphics assets you create with Webionix are SVG assets which are superior to conventional raster graphics. 
         		</p>
         		<ul>        		
         			<li>They scale without distortion and hence can be used in multiple devices of different dimensions </li>
         			<li>Your file sizes will be a small fraction of those that use conventional raster graphics</li>
         			<li>Your graphics content can be interactive, and hence more engaging </li>
         			<li>Your graphics can come alive when you add animation to it </li>         			
         		</ul> 
         		<p>
         			Very often, in conventional graphics, the originator of an idea who conceives a graphic 
         			output, especially one that is interactive, and the designer who creates the graphics are 
         			not the same people. Creating interactive and animated graphics using SVG requires technical 
         			expertise.
         			<br>
         			Not any longer. You don't need any special expertise to use Webionix. All you need to know is what you want.
         		</p>           		
         		</div>
         		<div style='text-align:center; font-size:1.6em'>
         			<strong>What's more, it's free. So </strong><button id='launchAppBtnStart' type="button" onclick='OnBtnclick(event)' class="btn btn-default navbar-btn btn-info" data-toggle="modal" style='margin-right:55px'><span class="glyphicon glyphicon-new-window" aria-hidden="true" style='padding-right:5px'></span>Get Started</button>
         		</div>
         		      		
         	</div>         	
         </div>
         
        <footer class="container text-center padding-md-all">
            <p>Copyright &copy; Webionix Pvt. Ltd. 2016</p>
        </footer>
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
                                    <img id="captcha" src="./../secureimage/securimage_show.php" alt="CAPTCHA Image" />
                                </div>
                                <div class="col-xs-12">
                                    <input type="text" name="captcha_code" size="10" maxlength="6" id="captcha_code" placeholder='Enter Captcha'/>
                                    <a href="#" onclick="RefreshCaptch();">
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
                            <div id='result_error' class="alert alert-danger sso_message" style='display:none; margin-top:10px'>
                                <strong>Sign-Up Error!</strong><span id='SU_Err_Msg'>Problem with the EMail Id you entered! Try again.</span>
                            </div>
                            <div id='result_success' class="alert alert-success sso_message" style='display:none; margin-top:10px'>
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
        
        <script src="../CommonJS/jquery-1.10.2.min.js"></script>
        <script src="../CommonJS/Bootstrap/js/bootstrap.min.js"></script>
        <script src="../CommonJS/jquery.blockUI_2.70.js"></script>
        <script type="text/javascript" src="../CommonJS/Utilities.js"></script>
        <script src="../CommonPHP/SSO/js/sso.js"></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script type="application/javascript" src="WNX_Home.js"></script>
        <script type='text/javascript' >
        $(document).ready(function(){
        	// Activate Carousel
            var currIndex = 0; 
            //var srcArr = ['http://localhost/Images/mountain.jpg', 'http://localhost/Images/river.jpg', 'http://localhost/Images/flowers.jpg' ];
            var srcArr = ['../CommonCSS/icons/Version1/SiteIcons/DemoSVG/DemoAnim.svg',
                          '../CommonCSS/icons/Version1/SiteIcons/DemoSVG/Demonanim2.svg',
                          '../CommonCSS/icons/Version1/SiteIcons/DemoSVG/Demonanim3.svg']
            $('#item_' +currIndex ).attr('data', srcArr[currIndex] ); 
            $("#myCarousel").carousel({
                pause:false
                
                });
            
            /*
            // Enable Carousel Indicators
            $(".item1").click(function(){
                $("#myCarousel").carousel(0);
            });
            $(".item2").click(function(){
                $("#myCarousel").carousel(1);
            });
            $(".item3").click(function(){
                $("#myCarousel").carousel(2);
            });
            $(".item4").click(function(){
                $("#myCarousel").carousel(3);
            });
            */
            // Enable Carousel Controls
            $(".left").click(function(){
                $("#myCarousel").carousel("prev");
            });
            $(".right").click(function(){
                $("#myCarousel").carousel("next");
            });
           
            $("#myCarousel").on('slide.bs.carousel', function () {
            	//$('#item_' +currIndex ).attr('data', '' ); 
            		currIndex++; 
            		if(currIndex >= 3)
            			currIndex = 0; 
            		$('#item_' +currIndex ).attr('data', srcArr[currIndex] ); 
                  // alert('A new slide is about to be shown!');
            });
            
        }); 
		
        </script>
    </body>
</html>