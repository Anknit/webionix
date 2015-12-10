var sso	=	sso||{};

sso.reset	=	function(e, callbackfn)
{
	var optype = 'reset'; 
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'reset','email':e},
		async:true,
		
		success:function(data)
		{
			var fnstr = callbackfn + '(optype,data)'; 
			eval(fnstr);			
		}
	});
}
		
sso.signin	=	function(e,p, callbackfn)
{
	var optype = 'signin'; 
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'signin_verify','email':e,'password':p},
		async:true,		
		success:function(data)
		{			
			var fnstr = callbackfn + '(optype,data)'; 
			eval(fnstr);			
		}
	});	 
}
	
sso.signup	=	function(e,callbackfn)
{
	var optype ='signup'; 
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'signup','email':e},
		async:true,
		
		success:function(data)
		{
			var fnstr = callbackfn + '(optype,data)'; 
			eval(fnstr);
		}
	});
}

sso.signup_verify	=	function(f,l,m,p, callbackfn)
{
	var optype = 'signupverify'; 
	$.ajax({url:this.u+location.search,
		type: 'POST',
		data:{'first_name':f,'last_name':l,'user_info':JSON.stringify(m),'password':p},
		async:true,
		success:function(data)
		{
			var fnstr = callbackfn + '(optype,data)'; 
			eval(fnstr);
		}
	});
}

sso.reset_verify	=	function(p, callbackfn)
{
	var optype = 'resetverify'; 
	$.ajax({url:this.u+location.search,
		type: 'POST',
		data:{'password':p},
		async:true,
		success:function(data)
		{
			var fnstr = callbackfn + '(optype,data)'; 
			eval(fnstr);
		}
	});
}

function onSignIn(googleUser)
{
	var optype = 'googleverify'; 
	var id_token	=	googleUser.getAuthResponse().id_token;
	var user_image	=	googleUser.getBasicProfile().getImageUrl();
	$.post(sso.u,{'type':'google_signin','idtoken':id_token,'user_image':user_image})
		.done(function(data)
			{
				//var fnstr = callbackfn + '(optype,data)'; 
				//eval(fnstr);
				MySSOCallback(optype, data); 
			});	
}

sso.getuserinfo	=	function(ott,callbackfn)
{
	var optype ='getuserinfo'; 
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'userinfo','ott':ott},
		async:true,		
		success:function(data)
		{
			var fnstr = callbackfn + '(data)'; 
			eval(fnstr);
		}
	});
}

sso.redirect = function(){
	var optype ='redirect_url'; 
	$.ajax({url:this.u,
		type: 'POST',
		data:{'type':'redirect_url'},
		async:true,		
		success:function(data)
		{
			//var fnstr = callbackfn + '(data)'; 
			//eval(fnstr);
		}
	});
}