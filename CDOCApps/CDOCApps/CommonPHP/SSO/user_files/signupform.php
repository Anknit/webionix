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
		a={"age":"23"};
		sso.u="http://localhost/CDOCApps/CommonPHP/SSO/php/sso.php";
		sso.signup_verify(	$("#name").val(),	$("#l_name").val(),	a,	$("#pass").val())
		
		//$.ajax({url:"./../../Common/php/sso.php?sign_up_pass=<?php echo rawurlencode($_GET['sign_up_pass']);?>",
		//	type: 'POST',
		//	data:{'first_name':$("#name").val(),'password':$("#pass").val(),'user_info':JSON.stringify(a)},
		//	async:true,
		//	
		//	success:function(data)
		//	{
		//		return data;
		//	}
		//});
	});
});
</script>
</head>
<body>
<form action="./../../Common/php/sso.php?sign_up_pass=<?php echo rawurlencode($_GET['sign_up_pass']);?>" method="POST">
name:<input type="text" name="first_name" id="name">
last name:<input type="text" name="last_name" id="l_name">
age:<input type="text" name="age" id="age">
password:<input type="password" name="password" id="pass">
<input type="submit" value="Submit">
</form>
</body>
</html>