sso.u = "../web2graphix/GX_sso.php";
var bSignedIn = false;
var gAppURL = '../web2graphix/GX_Editor.html';
$(document).ready(function () {

    var gcallbackFn = '';
    sso.u = "../web2graphix/GX_sso.php";
    $("#signup").on("click", function () {
        email = $("#sign-up-email").val();
        sso.signup(email, 'MySSOCallback');
    });

    $("#signin").on("click", function () {
        email = $("#s_email").val();
        pass = $("#s_pass").val();
        var retval = sso.signin(email, pass, gcallbackFn);
    });

    $("#reset").on("click", function () {
        email = $("#s_email").val();
        var retval = sso.reset(email, 'Mycallback');
    });
});

function OnClickSSOButtons(event) {
    $('#login-message,#signup-message').html('');
    var btnID = event.target.id;
    switch (btnID) {
    case 'signupBtn':
        email = $("#sign-up-email").val();
        if(email.trim() == "") {
            $('#signup-message').html('Email cannot be blank');
            return false;
        }
        sso.signup(email, 'MySSOCallback');
        break;
    case 'signinBtn':
        email = $("#sign-in-email").val();
        pass = $("#sign-in-password").val();
        var captcha = $('#captcha_code').val();
        if(email.trim() == "") {
            $('#login-message').html('Email cannot be blank');
            return false;
        }
        if(pass.trim() == "") {
            $('#login-message').html('Password cannot be blank');
            return false;
        }
        if(captcha.trim() == ''){
            $('#login-message').html('Enter valid captcha');
            return false;
        }
        var retval = sso.signin(email, pass, gcallbackFn, captcha);
        break;
    case 'resetBtn':
        email = $("#sign-in-email").val();
        if(email.trim() == "") {
            $('#login-message').html('Email cannot be blank');
            return false;
        }
        var retval = sso.reset(email, 'MySSOCallback');
        break;
    default:
        break;
    }
    BlockUIinAjax(true);
}

function MySSOCallback(optype, status) {
    var obj = JSON.parse(status);
    BlockUIinAjax(false);
    switch (optype) {

    case 'signup':
        if (obj['success'] == 'true') {
            $('#result_error').hide();
            $('#result_success').show();
        } else {
            $('#result_success').hide();
            var node = $('#SU_Err_Msg')[0].innerHTML = obj['reason'];
            $('#result_error').show();
        }
        break;
    case 'signin':
        if (obj['success'] == 'true') {
            name = obj['firstname'];
            $('#loginModal').modal("hide");
            $('#signinBtn').hide();
            $('#signupBtn').hide();
//            $('#signoutBtn').show();
            $('#welcomeMsg')[0].innerHTML = 'Hi ' + name;
            JQSel = '#userMsg';
            $(JQSel).show();
            bSignedIn = true;
        } else {
            if(obj['reason'] == 'captcha mismatch') {
                $('#login-message').html('Wrong captcha code');
            } else {
                $('#signinErrorMessage').show();
            }
        }
        break;


    case 'getuserinfo':
        if (obj['success'] == 'true') {

            alert('Welcome ' + obj['firstname']);
        }
        break;
    case 'googleverify':
        if (obj['success'] == 'true') {
            name = obj['firstname'];
            $('#loginModal').modal("hide");
            $('#signinBtn').hide();
            $('#signoutBtn').show();
            $('#welcomeMsg')[0].innerHTML = 'Hi ' + name;
            JQSel = '#userMsg';
            $(JQSel).show();
            bSignedIn = true;
        } else {
            $('#signinErrorMessage').show();
        }

        break;
    case 'reset':
        if (obj['success'] == 'true') {
            $('#reset_success_message').show();
        } else {
            $('#signinErrorMessage').show();
        }
        break;
    default:
        break;
    }

}


function MySSOAndAppLaunch(optype, status) {
    var obj = JSON.parse(status);
    BlockUIinAjax(false);
    switch (optype) {
    case 'signin':
        if (obj['success'] == 'true') {
            name = obj['firstname'];
            $('#loginModal').modal("hide");
            $('#signinBtn').hide();
            $('#signoutBtn').show();
            $('#welcomeMsg')[0].innerHTML = 'Hi ' + name;
            JQSel = '#userMsg';
            $(JQSel).show();
            bSignedIn = true;
            var mywindow = window.open(gAppURL, '_self');
        } else {
            //$('#signinErrorMessage').show();
        	$('#signinErrorMessage')[0].innerHTML = obj['reason'];
        	$('#signinErrorMessage').show(); 
        	RefreshCaptch(); 
        }
        break;
    case 'googleverify':
        if (obj['success'] == 'true') {
            name = obj['firstname'];
            $('#loginModal').modal("hide");
            $('#signinBtn').hide();
            $('#signoutBtn').show();
            $('#welcomeMsg')[0].innerHTML = 'Hi ' + name;
            JQSel = '#userMsg';
            $(JQSel).show();
            bSignedIn = true;
            var mywindow = window.open(gAppURL, '_self');
        } else {
            $('#signinErrorMessage').show();
        }

        break;
    default:
        break;
    }
}

function GetUserInfo(ott) {
    sso.getuserinfo(ott, 'MyOTTCallback');
}

function OnBtnclick(event) {
    var BtnID = event.target.id;
    if (BtnID == 'signinBtn') {
        var JQSel = '.sso_message';
        $(JQSel).hide();
        gcallbackFn = 'MySSOCallback';
        JQSel = '#loginModal';
        $(JQSel).modal();
    } else if (BtnID == 'signoutBtn') {
        var JQSel = '#signoutBtn';
        $(JQSel).hide();
        JQSel = '#signinBtn';
        $(JQSel).show();
        JQSel = '#userMsg';
        $(JQSel).hide();
    } else if( (BtnID == 'launchAppBtn') || ('launchAppBtnStart' == BtnID)) {
        //first chec if the user is signed in 
        if (bSignedIn == true) {

            var mywindow = window.open(gAppURL, '_self');
        } else {
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


function RefreshCaptch(){
	document.getElementById('captcha').src = './../secureimage/securimage_show.php?' + Math.random(); 
	$('#captcha_code').val(''); 
	return false;
}
