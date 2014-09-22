<?php
include_once "SessionMgr.php" ; 
$retval = CDOC_Session_Validate(); 
if($retval == False)
{
	//echo "Session could not be validated";
	return ; 
} 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Content Editing Page</title>
<script type="text/javascript" src="init.js">
</script>

</head>
<body>
<div>
<p>This is the C-DOC Edit Page  </p>
</div>
<button id="Req_Data" onclick="OnReq_Data()">Req_Data</button>
	<p id="mypara">Hello World </p>
	
	<button id="Send_Data" onclick="OnSend_Data()">Send_Data</button>
	<p id="mypara1">Para 2 </p>
	
</body>
<form action="sessionclose.php?sname=<?php echo session_name();?>&sid=<?php echo session_id();?>"frm1" method="post" name="frmLogin">
<input type="hidden" name="hidRequest" value="closerequest"/>
<input type="button" name="closebtn" value = "close" onclick="CloseSession()"/>
</form>
</html>
