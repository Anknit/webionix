<?php
/*
 * g=google
 * c=corona
 */

/*
 * checks the validity of email
 * valid characters in username: a-zA-Z0-9_+/
 * domain name can be: gmail.com,gmail.co.uk etc 
 * @return true or false
 */
function check_email($email)
{
	if(preg_match("/^([\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)*\w[\w-]{0,66}\.[a-z]{2,6}(?:\.[a-z]{2})?$)/",$email))
	{
		return true;
	}
	else 
	{
		return false;	
	}
}

function check_password($pass)
{
	if(preg_match("/....../",$pass))
	{
		return true;
	}
	else
	{
		return false;	
	}
}
/*
 * checks the validity of links sent by or received by corona (ciphers)
 * encrypted link should contain only base 64 encoding characters:a-zA-Z0-9_+=-/
 * although _ is not a base 64 character  
 */
function check_cipher($link)
{
	if(preg_match("/^([\w+\/=-]*$)/",$link))
	{
		return true; 
	}
	else
	{
		return false;	
	}
	
}

/*
 * checks the validity of youtube videoids
 * videoids must contain only: a-zA-Z0-9_-
 * and length is 11
 * there is no official documentation and may be change in future
 */
function check_y_videoid($videoid)
{
	if(preg_match("/^([\w-]*$)/",videoid))
	{
		return true;
	}
	else
	{
		return false;
	}

}