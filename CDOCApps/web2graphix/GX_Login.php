<?php 

/*check if the session is already set which means it is validated 
 * in this case don't show the log=j page just take him to the CDOCMainPage.php
 * 
 * */ 
Include_once "GX_SessionMgr.php";
include_once "Debuglog.php" ; 

	$retval = CDOC_Session_Validate(); 
	$name = session_name();
	$id = session_id(); 
	if($retval == true)
	{
		LogString("Calling Appl.htm"); 
		//header("Location:Application.htm");
		header("Location:GX_Editor.html");
		
	}
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Web Graphics Application Log-In </title>
<style type="text/css">
.style1 {
	width: 262px;
}

#Text1 {
	width: 154px;
}

#Password1 {
	width: 105px;
}

#Submit1 {
	width: 78px;
}
</style>
<script type="text/javascript">
function HandleLogin()
{
	document.getElementById("frm1").submit();
			
}
</script>
</head>
<body>
	<!--<form action="validation.php" method="post" name="frmLogin" onsubmit="return HandleLogin()"> -->
	<form action="GX_main.php" id="frm1" method="post" name="frmLogin">

		<table bgcolor="ActiveBorder" style="width: 100%;">
			<tr>
				<td class="style1">Member Login</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td class="style1">User Name</td>
				<td>
					<!--
        <input type="text" name="txtPubName" size="15" maxlength="15" tabindex="1" onfocus="this.select()" align="left" 
        value="
       <?php 
        if (!isset($_POST['txtPubName']))
        {
          $_POST['txtPubName'] = "Hello";
        }
        echo $_POST["txtPubName"];
        ?>
        "/>  
        --> <input type="text" name="txtUsername" size="15"
					maxlength="15" tabindex="1" onfocus="this.select()"
					value="
            <?php
            if (!isset($_POST['txtUsername']))
            {
                $_POST['txtUsername'] = ""; 
            }
            echo $_POST["txtUsername"];             
            ?>
            " />

				</td>
			</tr>
			<tr>
				<td class="style1">Password</td>
				<td><input id="Password1" type="password" name="txtpassword"
					size="15" maxlength="15" tabindex="2" onfocus="this.select()"
					value="
            <?php
            if (!isset($_POST['txtpassword']))
            {
                $_POST['txtpassword'] = ""; 
            }
            echo $_POST["txtpassword"];             
            ?>
            " />
				</td>

			</tr>
			<tr>
				<td class="style1">&nbsp;</td>
				<td>
					<!--  <input id="Submit1" type="submit" name="submit" value="Sign-In" /></td> -->
					<input id="mySubmit1" type="button" name="mybutton"
					onclick="HandleLogin()" value="Sign-In" />
				</td>
			</tr>
		</table>
 <!--  to store the status of log in  -->
	<input id="hidevar1" name="hidStatus" type="hidden" value="unknown"/>

	</form>

	

</body>
</html>
