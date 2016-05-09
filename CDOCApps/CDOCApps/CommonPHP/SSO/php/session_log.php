<?php 

require_once __DIR__.'./../../DBManager/DbMgrInterface.php';

function log_the_session()
{
	//id=autoincrement
	if(isset($_SESSION['uid']))
	{
		$userid	=	$_SESSION['uid'];
	}

	$sessionid	=	session_id();

	if(isset($_SESSION['is_login']) && $_SESSION['is_login']	==	1)
	{
		$type	=	1; //login user
	}
	else
	{
		$type	=	0; //anonymous user
	}

	$ip	=	$_SERVER['HTTP_HOST'];

	$browser	=	$_SERVER['HTTP_USER_AGENT'];

	if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'windows')>0)
	{
		$platform	=	'windows';
	}
	else
	{
		$platform	=	'mobile';
	}

	//$session_status

	/* 		$a=array('Fields'=>'id','Table'=>'verify_link','clause'=>"emailid='". "$email"."'");
	 $b=DB_Read($a);
	 */
	//include_once __DIR__."/session_manager.php";
	//echo date('d-m-y H:i:s',$_SERVER['REQUEST_TIME']);


	if( !isset($_SESSION['start_time']) )
	{
		$start_time	=	$_SESSION['start_time']		=	  time();
		$readable_start_time	=	date('d/m/y H:i:s',$start_time);
		$end_time	=	$_SESSION['end_time']	=	time();
		$readable_end_time		=	 date('d/m/y H:i:s',$end_time);
		$duration	=	($end_time-$start_time)/60;
		if($type==1)
		{
			$d_data    =    array('Table'=>'session_log','Fields'=>array('userid'=>$userid,'session_status'=>1,'sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));
			$d_id     =     DB_Insert($d_data);
		}
		else
		{
			$d_data    =    array('Table'=>'session_log','Fields'=>array('sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));
			$d_id     =     DB_Insert($d_data);
		}

	}
	else
	{	
		$start_time	=	$_SESSION['start_time'];
		$readable_start_time	=	date('d/m/y H:i:s',$start_time);
		$end_time	=	$_SESSION['end_time'];
		$readable_end_time		=	 date('d/m/y H:i:s',$end_time);
		
		$duration	=	(time()-$end_time)/60;
		$a    =    array('Fields'=>'type,ip,duration','Table'=>'session_log','clause'=>"sessionid='". $sessionid."' order by id desc limit 1");
		$b	=	DB_Read($a);
		if(	$type	!=	$b[0]['type'] || $ip	!=	$b[0]['ip'])
		{
			if($b[0]['type']	==	1)
			{
				$d_data    =    array('Table'=>'session_log','Fields'=>array('userid'=>$userid,'session_status'=>1,'sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));
			}
			else
			{
				$d_data    =    array('Table'=>'session_log','Fields'=>array('session_status'=>1,'sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));				
			}
			$d_id     =     DB_Insert($d_data);
		}
		else
		{
			if(	$duration	>	180)
			{
				$start_time	=	$_SESSION['start_time']		=	  time();
				$readable_start_time	=	date('d/m/y H:i:s',$start_time);
				$end_time	=	$_SESSION['end_time']	=	time();
				$readable_end_time		=	 date('d/m/y H:i:s',$end_time);
				$duration	=	($start_time-$end_time)/60;
				//insert
				if($type==1)
				{
					$d_data    =    array('Table'=>'session_log','Fields'=>array('userid'=>$userid,'session_status'=>1,'sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));
					$d_id     =     DB_Insert($d_data);
				}
				else
				{
					$d_data    =    array('Table'=>'session_log','Fields'=>array('sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration));
					$d_id     =     DB_Insert($d_data);
				}
			}
			else
			{
				$duration	=	$b[0]['duration']+((time()-$end_time)/60);
				$end_time	=	$_SESSION['end_time']=time();
				$readable_end_time		=	 date('d/m/y H:i:s',$end_time);
				$readable_start_time		=	 date('d/m/y H:i:s',$_SESSION['start_time']);
				
				if($type==1)
				{
					//$d_data    =    array('Table'=>'session_log','Fields'=>array('userid'=>$userid,'sessionid'=>$sessionid,'type'=>$type,'ip'=>$ip,'browser'=>$browser,'platform'=>$platform,'start_time'=>$readable_start_time,'end_time'=>$readable_end_time,'duration'=>$duration),'clause'=>"sessionid='".$sessionid."'&& start_time='".$start_time."'");
					$d_data	=	"update session_log original inner join (select * from session_log where sessionid='".$sessionid."' order by id desc limit 1)as temp on original.id=temp.id set original.userid='".$userid."', original.sessionid='".$sessionid."', original.type='".$type."', original.ip='".$ip."',original.browser='".$browser."',original.platform='".$platform."',original.start_time='".$readable_start_time."',original.end_time='".$readable_end_time."',original.duration='".$duration."'";
					$d_id     =     DB_Query($d_data,"result","");
				}
				else
				{
					//$d_data    =    array('Table'=>'session_log','Fields'=>array('duration'=>$duration,'end_time'=>$readable_end_time),'clause'=>"sessionid='".$sessionid."'&& start_time='".$readable_start_time."'");
					$d_data	=	"update session_log original inner join (select * from session_log where sessionid='".$sessionid."' order by id desc limit 1)as temp on original.id=temp.id set original.end_time='".$readable_end_time."',original.duration='".$duration."'";
					DB_Query($d_data,"result","");
				}
			}
		}
			
	}
		                                                                                                                                                                                                                                                    		
}
