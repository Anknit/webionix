
var gPlayerList = [];
var gPlayerObject = 0; 
var gTimerObj = 0; 
var gEventTypes = {	  ON_END:0, 
	                  ON_PLAY:1, 
	                  ON_PAUSE:2,
	                  ON_BUFFERING:3,
	                  ON_ERROR:4
                  }; 

/*
 * This variable should be used to form the list of segments
 */
sVideoSegment.prototype.startTime = 0; 
sVideoSegment.prototype.endTime = 0; 
sVideoSegment.prototype.topicText = ''; //I dont need this 
function sVideoSegment(){
	sVideoSegment.prototype.startTime = 0; 
	sVideoSegment.prototype.endTime = 0; 
	sVideoSegment.prototype.topicText = ''; 
}

/*
 * CreatePlayerWidget : Needs to be called in the document once and then use the returned playerobject 
 * for accessing all APIs. 
 */
/*
function CreatePlayerWidget(playerType, divID, width, height, bShow,bControls){
	if(gPlayerObject)
		return gPlayerObject; 
	gPlayerObject =  new CVideoPlayer(playerType, divID, width, height, bShow,bControls); 
	
	//now download the youtube code here 
	if(playerType == 'YT'){
		var tag = document.createElement('script');
	    tag.src = "https://www.youtube.com/iframe_api";
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 
	}else
		return 0; 
	
	 return gPlayerObject; 
}
*/
function CreatePlayerWidget(playerType, divID, width, height, bShow,bControls){
	if(gPlayerObject)
		return gPlayerObject; 
	gPlayerObject =  new CVideoPlayer(playerType, divID, width, height, bShow,bControls); 
	
	//now download the youtube code here 
/*	if(playerType == 'YT'){
		var tag = document.createElement('script');
	    tag.src = "https://www.youtube.com/iframe_api";
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 
	}else
		return 0; 
*/
	
	 return gPlayerObject; 
}


function onYouTubeIframeAPIReady(){  	
	
	gPlayerObject.playerHandle = new YT.Player(gPlayerObject.iFrameID,
    {
	        width: gPlayerObject.Width,
	        height: gPlayerObject.Height,  
	        playerVars: {
	            'autoplay': 0,
	            'controls': 1,
	            'frameborder':0,
	            'modestbranding': 1,
	            'rel': 0,
	            'showinfo': 0
	        },
	        events: {
	          'onReady': OnYTPlayerReady,
	          'onStateChange': gPlayerObject.onPlayerStateChange, 
	          'onError':gPlayerObject.onPlayerError
	        	}
   });
    var iframeNode = document.getElementById(gPlayerObject.iFrameID); 
    if(gPlayerObject.bShow == false){
    	gPlayerObject.ShowVideoPlayer(gPlayerObject.bShow); 
    }
  	  
    gPlayerObject.bInitialized = true; 
    gPlayerObject.playerState = 'STOPPED';       
 }

function CVideoPlayer(playerType, divID, width, height, bShow,bControls){
	this.playerType = playerType; //only 'YT' allowed 
	this.iFrameID = divID; //validate if this divId exists
	this.Width = width; 
	this.Height = height; 
	this.bShow = bShow; 
	if(bControls == true)
	  this.Controls = 1; 
	else
		this.Controls = 0; 
	this.CurrentDisplay = 'VISIBLE' ; //'HIDDEN'
	this.playerHandle = 0; 
	this.playerState = 'VOID'; //PLAYING, PAUSED,STOPPED,VOID
	this.currentPTS = 0; 
	this.startPTS = 0; 
	this.endPTS = 0;
	this.bInitialized = false; 
	this.playSegmentFlag =  false; 
	this.segmentHandlerfn = 0; 
	this.currentSegIndex = 0; 
	this.SegmentList = 0 ; 
	this.currentVideoID = 0; 
	this.OnErrorHandlerFn = 0; 
	this.OnPlayHandlerFn = 0; 
	this.OnPauseHandlerfn = 0; 
	this.OnEndHandlderFn = 0; 
	this.OnBufferingHandlerFn=0; 
	
	
	//first check if a player of this ID already exists, if yes then return an error string 'ERR_ALREADY_EXISTS'
	  
}


CVideoPlayer.prototype.LoadNewVideoByID = function(videoID, startTime){		
	  if( this.playerHandle != 'undefined'){
		  this.ShowVideoPlayer(true)  ;  
		  if(this.playerState == 'PLAYING'){
			  this.playerHandle.stopVideo(); 
			  this.playerHandle.clearVideo(); 
		  }		  
		  this.playerHandle.loadVideoById({videoId:videoID, startSeconds:startTime}); 
		 // this.playerHandle.playVideo(); 
		  this.playerState = 'PLAYING';
		  playSegmentFlag = false; 
	  }	 
}
/*
CVideoPlayer.prototype.LoadNewVideoByURL = function(videoURL, startTime){		
	  if( this.playerHandle != 'undefined'){
		  this.ShowVideoPlayer(true) ;  
		  this.playerHandle.loadVideoByUrl({mediaContentUrl:videoURL, startSeconds:startTime}); 
		  this.playerHandle.playVideo(); 
		  this.playerState = 'PLAYING';
	  }	 
} 
*/


CVideoPlayer.prototype.UnloadVideo = function(){
	 this.playerHandle.stopVideo(); 
}

CVideoPlayer.prototype.ShowVideoPlayer = function(bFlag){
	var iframeNode = document.getElementById(this.iFrameID);     
	if(bFlag == false){
		iframeNode.setAttribute('hidden', true);
		this.CurrentDisplay = 'HIDDEN'; 
	}else{
		iframeNode.removeAttribute('hidden');
		this.CurrentDisplay = 'VISIBLE'; 
	}		
};


function CheckIfPlayerExists(ID){
	
}
 CVideoPlayer.prototype.onPlayerReady = function(event){
	 event.target.setVolume(70); 	
	 event.target.playVideo();
	 //alert('onPlayerReady'); 
}
 
 
 

 /*
  * 
    YT.PlayerState.ENDED
    YT.PlayerState.PLAYING
    YT.PlayerState.PAUSED
    YT.PlayerState.BUFFERING
    YT.PlayerState.CUED

  */
 
 CVideoPlayer.prototype.Play = function(){
	 this.playerHandle.playVideo(); 
 }
 
 CVideoPlayer.prototype.Pause= function(){
	 this.playerHandle.pauseVideo(); 
 }
 
 CVideoPlayer.prototype.SeekTo =  function(timeinSec){
	 this.playerHandle.seekTo(timeinSec); 
 }
 
 CVideoPlayer.prototype.GetCurrentPTS =  function(timeinSec){
	 return this.playerHandle.getCurrentTime(); 
 }
 
 /* return values 
  * 0 – ended
1 – playing
2 – paused
3 – buffering
5 – video cued
  */
 CVideoPlayer.prototype.GetPlayerState =  function(timeinSec){
	 return this.playerHandle.getPlayerState(); 
 }
 
 CVideoPlayer.prototype.onPlayerStateChange = function(event){	
	 var state = event.data; 
	 var fnStr=''; 
	 var dur = 0; 
	
	 switch(state){	 
	 case gEventTypes.ON_PLAY:	
		 var startTime = new Number (gPlayerObject.GetCurrentPTS()); 
		 dur =  new Number(gPlayerObject.endPTS - startTime); 
		 dur = dur * 1000; 
		 if(gPlayerObject.playSegmentFlag == true){			 
			 if(dur < 0)
				 return ; 
			 gTimerObj = setTimeout(function(){
					// gPlayerObject.Pause();
					 var fnstr = gPlayerObject.segmentHandlerfn + '()'; 
					 eval(fnstr);		 
				 }, 
				 dur);
			 
		 }
		 else{
			 if(gPlayerObject.OnPlayHandlerFn){
				 fnStr = gPlayerObject.OnPlayHandlerFn + '()'; 
				 eval(fnStr); 
			 }	
		 }
		 //alert('Timeout for : duration=' + dur + 'starttime= ' + startTime);
		 		 
		 break; 
	 case gEventTypes.ON_PAUSE:
		 if(gPlayerObject.playSegmentFlag == true){
			 if(gTimerObj){
				 clearTimeout(gTimerObj); 
				 gTimerObj = 0; 
				 //alert('Buffering Now starttime= ' + startTime); 
			 }
		 }
		 else if(gPlayerObject.OnPauseHandlerfn){
			 fnStr = gPlayerObject.OnPauseHandlerfn + '()'; 
			 eval(fnStr); 
		 }		
		 break;	 
	 case gEventTypes.ON_BUFFERING:		 
		 if(gPlayerObject.playSegmentFlag == true){
			 if(gTimerObj){
				 clearTimeout(gTimerObj); 
				 gTimerObj = 0; 
				 //alert('Buffering Now starttime= ' + startTime); 
			 }
		 }
		 else{
			 if(gPlayerObject.OnBufferingHandlerFn){
				 fnStr = gPlayerObject.OnBufferingHandlerFn + '()'; 
				 eval(fnStr); 
			 } 
		 }
		 	
		 break; 
	 case gEventTypes.ON_END:
		 if(gPlayerObject.OnEndHandlderFn){
			 fnStr = gPlayerObject.OnEndHandlderFn + '()'; 
			 eval(fnStr); 
		 }	
		 if(gPlayerObject.playSegmentFlag == true){
			 if(gTimerObj){
				 clearTimeout(gTimerObj); 
				 gTimerObj = 0; 
			 } 
		 }
		
		 break; 	
	 default:
		 break; 
	 } 
}
 
 /*
  *onPlayerError : this function will call the error handler function with an error code.
  *declare the Handler function as 
  *	function MyHandler(errCode)
  * Meanings of various error codes 
2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
101 – The owner of the requested video does not allow it to be played in embedded players.
150 – This error is the same as 101. It's just a 101 error in disguise!
*/
 
  CVideoPlayer.prototype.onPlayerError = function(event){	
	 var errorcode = event.data;	
	 var fnStr='';	
	 if(gPlayerObject.OnErrorHandlerFn){
			 fnStr = gPlayerObject.OnErrorHandlerFn + '(errorcode)'; 
			 eval(fnStr); 
	}	
 }

 
 //load the new videoID but doesn't play it.  
 CVideoPlayer.prototype.LoadNewVideoSegment= function(videoID, handlerFn){
	 this.currentVideoID = videoID; 
	 this.segmentHandlerfn = handlerFn;
	 this.playerHandle.loadVideoById({videoId:this.currentVideoID});
	 this.playSegmentFlag = true; 
	 this.Pause(); 
 }
 
 CVideoPlayer.prototype.PlaySegmentwise=function(startTime, endTime){
	 this.startPTS = startTime; 
	 this.endPTS = endTime; 
	 var duration =  new Number(1000* (endTime - startTime)); 
	 if(duration < 0)
		 return 0; 
	 //first seek to the startTime	 
	 this.SeekTo(new Number(startTime)); 	 
	 //play from there
	 this.Play(); 	
	 
}
 
 CVideoPlayer.prototype.PlayWithinInterval= function(startTime, endTime){
	 
	 var duration =  new Number(1000* (endTime - startTime)); 
	 if(duration < 0)
		 return ; 
	 //first seek to the startTime
	 this.SeekTo(new Number(startTime)); 	 
	 //play from there
	 this.Play(); 
	
	 setTimeout(function(){
		 gPlayerObject.Pause();			 
	 }, 
	 duration);
	 //set a timeout of the duration
	 //ontime out pause the video 
 } 
 /*
  * SetEventHandler:
  * Use this function to set an event hanlder on a specific events like ON_PLAY, ON_PAUSE, ON_ERROR, ON_BUFFERING, ON_END
  */
 
 CVideoPlayer.prototype.SetEventHandler = function(eventType, HandlerFn){
	 
	 switch(eventType){
	 case gEventTypes.ON_PLAY:
		 this.OnPlayHandlerFn = HandlerFn; 
		 break; 
	 case gEventTypes.ON_PAUSE:
		 this.OnPauseHandlerfn = HandlerFn; 
		 break; 
	 case gEventTypes.ON_ERROR:
		 this.OnErrorHandlerFn = HandlerFn; 
		 break; 
	 case gEventTypes.ON_BUFFERING:
		 this.OnBufferingHandlerFn = HandlerFn; 
		 break;
	 case gEventTypes.ON_END:
		 this.OnEndHandlderFn = HandlerFn; 
		 break; 
	default:
		break; 		 
	 
	 }
 } 
 
 CVideoPlayer.prototype.RemovetEventHandler= function(eventType){
	 
	 switch(eventType){	 
	 
	 case gEventTypes.ON_PLAY:
		 this.OnPlayHandlerFn = 0; 
		 break; 
	 case gEventTypes.ON_PAUSE:
		 this.OnPauseHandlerfn = 0; 
		 break; 
	 case gEventTypes.ON_ERROR:
		 this.OnErrorHandlerFn = 0; 
		 break; 
	 case gEventTypes.ON_BUFFERING:
		 this.OnBufferingHandlerFn = 0; 
		 break;
	 case gEventTypes.ON_END:
		 this.OnEndHandlderFn = 0; 
		 break; 
	default:
		break; 		 	 
	 }
 } 
 
 