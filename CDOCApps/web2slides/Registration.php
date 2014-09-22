
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Registration Page</title>
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


</head>
<body>
	<form action="regentry.php" method="post" name="frmLogin">



		<table bgcolor="ActiveBorder" style="width: 100%;">
			<tr>
				<td class="style1">Member Login</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td class="style1">User Name</td>
				<td><input type="text" name="txtUsername" size="15" maxlength="15"
					tabindex="1" onfocus="this.select()"
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

			<!--  Password input  -->
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

			<!--  First name input  -->
			<tr>
				<td class="style1">First Name</td>
				<td><input id="fname" type="text" name="txtfname" size="30"
					maxlength="40" tabindex="3" onfocus="this.select()"
					value="
<?php
if (!isset($_POST['txtfname']))
{
$_POST['txtfname'] = "";
}
echo $_POST["txtfname"];
?>
" />
				</td>
			</tr>


			<!--  Second name input  -->
			<tr>
				<td class="style1">First Name</td>
				<td><input id="lname" type="text" name="txtlname" size="30"
					maxlength="40" tabindex="4" onfocus="this.select()"
					value="
<?php
if (!isset($_POST['txtlname']))
{
$_POST['txtlname'] = "";
}
echo $_POST["txtlname"];
?>
" />
				</td>
			</tr>


			<tr>
				<td class="style1">&nbsp;</td>
				<td><input id="Submit1" type="submit" name="submit" value="Sign-In" />
				</td>
			</tr>
		</table>



	</form>

</body>
</html>

