<!DOCTYPE html>
<html lang="en">
    <head>
	<base href="/webionix/CDOCApps/web2graphix/">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-signin-client_id" content="258000566940-thqh5n9qqq5dfp5ge7najjtbhaa145hg.apps.googleusercontent.com">
        <title>Webionix</title>
        <link rel="stylesheet" href="../CommonJS/Bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="homepage.css" />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
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
                    <a class="pull-left brand-logo"><img src="../CommonCSS/icons/Version1/SiteIcons/wnxnotextlogo.png" width='50px' height='50px'></a>
                    <p class="navbar-brand logotext">Noxta</p>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Support</a></li>
                        <li id="userMsg" style="display:none;">
                            <div class="navbar-text">
                                <span id='welcomeMsg'></span>
                            </p>
                        </li>
                        <li><a class="btn-link" href="#" id='signinBtn' onclick='OnBtnclick(event)' data-toggle="modal">Login</a></li>
                        <li><a class="btn-link" href="#" id='signupBtn' onclick='OnBtnclick(event)' data-toggle="modal" data-target="#signupModal">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid top-section">
            <div class="hero-container text-center container">
                <h1>Build amazing animations, faster.</h1>
                <h4 class="width-sm text-grey padding-md-all">
                    <strong>Webionix</strong> is a web based application, to allow designers create graphics and animations assets for usage on Web.
                </h4>
                <button class="btn btn-info btn-lg btn-flat" id='launchAppBtn' onclick='OnBtnclick(event)' >Start Building Now !</button>
            </div>
            <div id="bannerCarousel" class="carousel slide" data-ride="carousel" data-interval='7500'>
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#bannerCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#bannerCarousel" data-slide-to="1"></li>
                    <li data-target="#bannerCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner text-center" role="listbox">
                    <div class="item active text-center">
                        <object type="image/svg+xml" data="../SharedDocs/DemoSVG/DemoAnim.svg" height="300px" width="auto"></object>
<!--
                        <img src="../SharedDocs/DemoSVG/DemoAnim.svg" width="auto" height="auto">
-->
                        <div class="carousel-caption hide">
                            <h3>Discover the Artiste inside you </h3>
                        </div>
                    </div>

                    <div class="item text-center">
                        <object type="image/svg+xml" data="../SharedDocs/DemoSVG/Demonanim2.svg" height="300px" width="auto"></object>
<!--
                        <img src="../SharedDocs/DemoSVG/Demonanim2.svg" width="auto" height="auto">
-->
                        <div class="carousel-caption hide">
                            <h3>Work on the Cloud from anywhere anytime, No Installation required</h3>
                        </div>
                    </div>

                    <div class="item text-center">
                        <object type="image/svg+xml" data="../SharedDocs/DemoSVG/Demonanim3.svg" height="300px" width="auto"></object>
<!--
                        <img src="../SharedDocs/DemoSVG/Demonanim3.svg" width="auto" height="auto">
-->
                        <div class="carousel-caption hide">
                            <h3>No need to understand HTML,SVG , Just get going!</h3>
                        </div>
                    </div>
                </div>

                <!-- Left and right controls -->
<!--
                <a class="left carousel-control" href="#bannerCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#bannerCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
-->
            </div>
        </div>
        <div class="container-fluid features-section">
            <div class="hero-container text-center">
                <h1>No need to understand HTML,SVG. Just get going!</h1>
                <h4 class="width-md text-grey padding-md-all">
                    SVG is now supported in almost all the popular browsers as well as mobile phones. <strong>Noxta</strong> allows any new user to ramp up the application in few minutes. All your work is stored on the cloud and you can access them from anywhere, anytime.
                </h4>
                <button class="btn btn-info btn-lg btn-flat" id='launchAppBtn' onclick='OnBtnclick(event)'>Start Building Now !</button>
            </div>
        </div>
        <div class="container-fluid bg-info how-it-works text-white text-center">
            <div>
                <h1 class="padding-md-all">
                    Here's how Noxta works 
                </h1>
                <h4 class="padding-md-all width-md text-white-light">
                    <strong>Noxta</strong> allows one to create Web 2.0 based assets in the form of SVG(Scalar Vector Graphics) which takes only a fraction of disk space compared to equivalent assets in form of JPG/PNG and .swf files
                </h4>
            </div>
            <div class="row">
                <div class="col-xs-4">
                    <img class="works-img" src="works-dnd.png" />
                    <h3>
                        Design Animation
                    </h3>
                    <h4 class="padding-md-all width-xs text-white-light">
                        Visually build your animation by dragging in the editor.
                    </h4>
                </div>
                <div class="col-xs-4">
                    <img class="works-img" src="works-preview.png" />
                    <h3>
                        Preview
                    </h3>
                    <h4 class="padding-md-all width-xs text-white-light">
                        Preview and interact with your projects live on your devices.
                    </h4>
                </div>
                <div class="col-xs-4">
                    <img class="works-img" src="works-export.png" />
                    <h3>
                        Export
                    </h3>
                    <h4 class="padding-md-all width-xs text-white-light">
                        Export a fully functional svg and show your animation.
                    </h4>
                </div>
            </div>
        </div>
        <div class="bg-grey container-fluid text-center features-highlight">
            <h1>What Noxta offers</h1>
            <div class="row">
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-wrench"></span>
                        </div>
                        <h3>Requires no Installation. Just Sign-up and Start.</h3>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-cloud-upload"></span>
                        </div>
                    <h3>Storing all your work on the Cloud means work from anywhere, anytime.</h3>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-check"></span>
                        </div>
                    <h3>Support all Basic shapes of SVG specification</h3>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-picture"></span>
                        </div>
                    <h3>Supports Text and Images</h3>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-edit"></span>
                        </div>
                    <h3>Allows Freehand drawing</h3>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="feature-item">
                        <div class="glyph-container">
                            <span class="glyphicon glyphicon-import"></span>
                        </div>
                    <h3>Import additional shapes and other SVG objects.</h3>
                </div>
                </div>
            </div>
        </div>
        <div class="container-fluid contact-section text-center">
            <h1>Start building now! Noxta is <strong>100% free to try.</strong></h1>
            <h4 class="padding-md-all">
                See why people around the world use Noxta to prototype amazing animations.
            </h4>
            <div class="form form-inline">
                <div class="form-group">
                    <input type="email" placeholder="Email address" class="form-control"/>
                    <button type="button" class="btn btn-info">Get Started!</button>
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
        <script src="../CommonJS/jquery-1.10.2.min.js"></script>
        <script src="../CommonJS/Bootstrap/js/bootstrap.min.js"></script>
        <script src="../CommonJS/jquery.blockUI_2.70.js"></script>
        <script type="text/javascript" src="../CommonJS/Utilities.js"></script>
        <script src="../CommonPHP/SSO/js/sso.js"></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script type="application/javascript" src="homepage.js"></script>
    </body>
</html>
