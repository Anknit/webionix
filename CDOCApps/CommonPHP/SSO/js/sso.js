var sso	=	sso||{};

sso.reset	=	function(e)
{
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'reset','email':e},
		async:true,
		
		success:function(data)
		{
			return data;
		}
	});
}
		
sso.signin	=	function(e,p, callbackfn)
{
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'signin_verify','email':e,'password':p},
		async:true,		
		success:function(data)
		{
			var fnstr = callbackfn + '(data)'; 
			eval(fnstr);			
		}
	});
	 
}
	
sso.signup	=	function(e)
{
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'signup','email':e},
		async:true,
		
		success:function(data)
		{
			return data;
		}
	});
}

sso.signup_verify	=	function(f,l,m,p)
{
	$.ajax({url:this.u+location.search,
		type: 'POST',
		data:{'first_name':f,'last_name':l,'user_info':JSON.stringify(m),'password':p},
		async:true,
		success:function(data)
		{
			return data;
		}
	});
}

sso.reset_verify	=	function(p)
{
	$.ajax({url:this.u+location.search,
		type: 'POST',
		data:{'password':p},
		async:true,
		success:function(data)
		{
			return data;
		}
	});
}

function onSignIn(googleUser)
{
	var id_token	=	googleUser.getAuthResponse().id_token;
	var user_image	=	googleUser.getBasicProfile().getImageUrl();
	$.post(sso.u,{'type':'google_signin','idtoken':id_token,'user_image':user_image})
		.done(function(data)
			{
				return data;
			});
}