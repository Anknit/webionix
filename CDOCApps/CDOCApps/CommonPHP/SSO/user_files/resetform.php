<?php ?><!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="./../js/sso.js" ></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("form").submit(function(e){
		e.preventDefault();
		sso.u="http://localhost/CDOCApps/CommonPHP/SSO/php/sso.php";
		sso.reset_verify($("#pass").val());
	});
});
</script>
</head>
<body>
<form action="http://localhost/CDOCApps/CommonPHP/SSO/php/sso.php?reset_pass=<?php echo rawurlencode($_GET['reset_pass']);?>" method="POST">
password:<input type="password" name="password" id="pass">
<input type="submit" value="Submit">
</form>
</body>
</html>