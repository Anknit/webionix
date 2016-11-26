<?php
session_start();
session_name('web_admin');
require_once __DIR__.'/GX_Config.php'; 
require_once __DIR__.'./../CommonPHP/DBManager/DbMgr.php';
function GX_InitializeContentInfoDB(){
	$config = array('database' =>$GLOBALS['DBNAME'],
			'host'=>$GLOBALS['DBHOSTADDR'],
			'port' => $GLOBALS['DBPORT'],
			'username' => $GLOBALS['DBUSER'],
			'password' => $GLOBALS['DBPWD'],
			'dbType'=>	'mysql'
	);
	$gDBObj = new DBMgr();
	$retval = $gDBObj->Initialize($config);
	if(!$retval){
		return $gDBObj->getLastError();
		return ;
	}
	return $gDBObj; 
}
if(isset($_POST['submit'])) {
    if(isset($_POST['email']) && isset($_POST['password'])) {
        $DbObj = GX_InitializeContentInfoDB();
        $readUser = $DbObj->Read(array(
            'Table'=>'userinfo',
            'Fields'=>'emailid, password,usertype',
            'clause'=>'emailid="'.$_POST['email'].'"'
        ));
        if(is_array($readUser)) {
            if(($_POST['email'] == $readUser[0]['emailid']) && (md5($_POST['password']) == $readUser[0]['password'] )&& ('admin' == $readUser[0]['usertype'] )) {
                $_SESSION['usertype'] = 'admin';
                unset($_POST['submit']);
                header('location: admin.php');
            } else {
                echo 'failed';
            }
        }
    }
}
if(isset($_GET['adminreq'])) {
    if($_GET['adminreq'] == 'logout') {
        session_unset();
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000);
        }
        session_destroy();
        echo 'ok';
        exit();
    }
}
?>
<html>
    <head>
        <base href="/webionix/CDOCApps/web2graphix">
        <link type="text/css" rel="stylesheet" href="./CommonJS/Bootstrap/css/bootstrap.min.css"/>
    </head>
    <body>
        <div class="container-fluid">
<?php
if(isset($_SESSION['usertype']) && $_SESSION['usertype'] == 'admin') {
?>
            <link rel="stylesheet" href="./CommonCSS/ui.jqgrid.css" />
            <link rel="stylesheet" href="./CommonCSS/jqueryUI/themes/jquery-ui.css" />
            <header>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="pull-right">
                            <button class="btn btn-default" onclick="logout();">Logout</button>
                        </div>
                    </div>
                </div>
            </header>
            <h5 class="text-center">
                Admin Panel
            </h5>
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#users" aria-controls="users" role="tab" data-toggle="tab">Users</a></li>
                <li role="presentation"><a href="#feedbacks" aria-controls="feedbacks" role="tab" data-toggle="tab">Feedbacks</a></li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="users">
                    <div>
                        <table class="convertTojqGrid ui-grid-Font clgrid" id="UserTable" url='./web2graphix/admingriddata.php?data=user'
                            colNames="Username, First Name, Last Name, Workspace Name, Email, Status, User Type" colModel='userscolmodel'
                            sortBy ='username' gridComplete='usersFormatterFunction' gridWidth="0.975" gridHeight="0.75"> 
                        </table>
                        <div id="gridpager_UserTable"></div>		
                    </div>	
                </div>
                <div role="tabpanel" class="tab-pane" id="feedbacks">
                    <div>
                        <table class="convertTojqGrid ui-grid-Font clgrid" id="FeedbackTable" url='./web2graphix/admingriddata.php?data=feedback'
                            colNames="Title, Description, User" colModel='feedbackscolmodel'
                            sortBy ='title' gridComplete='feedbacksFormatterFunction' gridWidth="0.975" gridHeight="0.75"> 
                        </table>
                        <div id="gridpager_FeedbackTable"></div>		
                    </div>	
                </div>
            </div>
        </div>
        <script>
            function logout () {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if(this.status == 200 && this.readyState == 4) {
                        window.location.reload();
                    }
                };
                xhr.open('GET', 'web2graphix/admin.php?adminreq=logout', true);
                xhr.send();
            }
        </script>            
        <script type="text/javascript" src="./CommonJS/jquery-1.10.2.min.js"></script>
        <script type="application/javascript" src="./CommonJS/Bootstrap/js/bootstrap.min.js"></script>
        <script type="application/javascript" src="./web2graphix/usertablegrid.js"></script>
        <script type="application/javascript" src="./web2graphix/feedbacktablegrid.js"></script>
        <script type="application/javascript" src="./CommonJS/createjqgrid.js"></script>
        <script type="application/javascript" src="./CommonJS/jquery-ui.custom.js"></script>
        <script type="application/javascript" src="./CommonJS/jquery.jqGrid.min.js"></script>
        <script type="application/javascript" src="./CommonJS/grid.locale-en.js"></script>
        <script type="application/javascript" src="./CommonJS/GridRelated.js"></script>
        <script type="application/javascript" src="./CommonJS/commonFunctions.js"></script>
        <script type="application/javascript" src="./CommonJS/renderGrid.js"></script>
<?php
} else {
?>
        <div style="margin-top: 200px; ">
            <h3 class="text-center">Admin Login</h3>
            <div class="col-md-6 col-md-offset-3 col-xs-12 col-xs-offset-0" style="border: 1px solid #ccc; padding: 15px;">
                <form class="form-horizontal" method="post">
                    <div class="form-group">
                        <label class="col-md-3 control-label">
                            Email
                        </label>
                        <div class="col-md-9">
                            <input type="email" name="email" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">
                            Password
                        </label>
                        <div class="col-md-9">
                            <input type="password" name="password" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="text-center">
                            <input class="btn btn-default" type="submit" name="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
<?php
}
?>
    </body>
</html>
<?php

?>