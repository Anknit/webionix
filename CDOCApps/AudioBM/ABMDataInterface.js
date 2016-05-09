sBookMetaInfo.prototype.filepath = ""; 
	sBookMetaInfo.prototype.startTime = 0;
	sBookMetaInfo.prototype.text = 0;
	function  sBookMetaInfo(){
		sBookMetaInfo.prototype.filepath = ""; 
		sBookMetaInfo.prototype.startTime = 0; //in seconds 
		sBookMetaInfo.prototype.text = 0;
	}
   gAppURI = 'ABM_AppMgr.php'; 
   var gImageWidth = '180px'; 
   var gImageHeight = '180px'; 
   var gMetaInfo = 0; 
   var gAudioNode = 0; 
   var gObjList =0; 
   var gchapterArr=0; 
	var gbookmarkArr=0; 
   var gChapNodeList=0; 
   var gChapterIndex =0 ; 
   var gBookIndex = -1; 
   var gChapInfo = 0; 
   var gBookmarkInfo = []; 
   $(document).ready(function (){
		//initializing the bookmark list here 	
	   gAppURI = 'ABM_AppMgr.php'; 
	   $('[data-toggle="tooltip"]').tooltip(); 
	   
	   // Add smooth scrolling to all links in navbar + footer link
	   $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

	     // Prevent default anchor click behavior
	     event.preventDefault();

	     // Store hash
	     var hash = this.hash;

	     // Using jQuery's animate() method to add smooth page scroll
	     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	     $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 900, function(){
	    
	       // Add hash (#) to URL when done scrolling (default click behavior)
	       window.location.hash = hash;
	     });
	   });
	    
		gAudioNode = document.getElementById('myaudioPlayer'); 
		GetMetadata(); 
		alert("Document Ready"); 		
	}); 
 
   function OnItemClickHandler(event){
		
		alert('Item clicked = '); 
	}
   
	function GetMetadata(){
		var retval = ABM_ImportAudioInfo('dataFetchcallbackFn'); 
		dataFetchcallbackFn = function(respData){
			gObjList = jQuery.parseJSON(respData);		
			//create the anchor list here 				
			var parentNode = document.getElementById('itemlistcontainer'); 
			var nodelist = parentNode.childNodes; 
			//var nodelist = CreateElementList(parentNode, gObjList.length, 'audiolist', 'OnItemClickHandler(event)') ;
			ABM_UpdateAudioList(nodelist); 
			//now add audio specific data here 
			/*
			for(var k=0;  k < nodelist.length; k++){
				var node = nodelist[k]; 
				var obj = gObjList[k]; 
				node.setAttribute('id', obj.ID);
				node.setAttribute('data-url', obj.URL ); 
				node.innerHTML = obj.title; 
			}
			*/
		}			
	}
	
	
	function OnBtnHandler(event){
		
		switch(event.target.id){
		
		case 'metainfoBtn':
			var retval = ABM_ImportAudioInfo('dataFetchcallbackFn'); 
			dataFetchcallbackFn = function(respData){
				var gObjList = jQuery.parseJSON(respData);		
				//create the anchor list here 				
				var parentNode = document.getElementById('audioList'); 
				var nodelist = CreateElementList(parentNode, gObjList.length, 'li', 'OnAudioListHandler(event)') ; 
				//now add audio specific data here 				
				for(var k=0;  k < nodelist.length; k++){
					var node = nodelist[k]; 
					var obj = gObjList[k]; 
					node.setAttribute('id', obj.ID);
					node.setAttribute('data-url', obj.URL ); 
					node.innerHTML = obj.title; 
				}
			}						
			break;
		case 'timeBtn':
			var time = 3712; 
			var str = GX_GetTimeFormat(time);
			alert("Time= " + str); 
			break; 
			
		default:
			break; 
		}
	}
	
	function CreateElementList(parentNode, numItems, elemType, HandlerFn){
		parentNode.innerHTML =""; 
		if(elemType == 'li'){
			for(var j= 0; j < numItems; j++){
				var anchorNode = document.createElement(elemType); 
				anchorNode.setAttribute('id', j); 
				anchorNode.setAttribute('class', 'my_link'); 
				//anchorNode.setAttribute('onclick', "OnAudioListHandler(event)"); 
				anchorNode.setAttribute('onclick', HandlerFn); 
				anchorNode.innerHTML = "a_" + j; 
				parentNode.appendChild(anchorNode); 
			}
		}
		else if(elemType == 'audiolist'){
			for(var j= 0; j < numItems; j++){
				var anchorNode = document.createElement('div');
				//anchorNode.setAttribute('id', j); 
				anchorNode.setAttribute('class', 'item'); 
				anchorNode.setAttribute('style', 'text-align:center'); 
				
				var imgNode = document.createElement('img');
				imgNode.setAttribute('id','img_' + j); 
				imgNode.setAttribute('class', 'BMThumbnail'); 
				imgNode.setAttribute('width', gImageWidth); 
				imgNode.setAttribute('height', gImageHeight); 
				imgNode.setAttribute('onclick', HandlerFn); 
				anchorNode.appendChild(imgNode); 
				
				var divNode = document.createElement('div');
				var titleNode = document.createElement('div');
				titleNode.setAttribute('class', 'Title'); 
				divNode.appendChild(titleNode);
				
				var authorNode = document.createElement('div');
				authorNode.setAttribute('class', 'Author'); 
				divNode.appendChild(authorNode);
				
				var summaryNode = document.createElement('div');
				summaryNode.setAttribute('class', 'Summary');
				divNode.appendChild(summaryNode);
				
				anchorNode.appendChild(divNode);
				parentNode.appendChild(anchorNode);
			}			
		}
		else if(elemType == 'bookmarktable'){
			for(var j= 0; j < numItems; j++){
				var trNode = document.createElement('tr');
				trNode.setAttribute('class', 'my_link'); 
				trNode.setAttribute('onclick', HandlerFn); 
				var tdBMNode = document.createElement('td');
				tdBMNode.innerHTML = "Default"; 
				trNode.appendChild(tdBMNode); 
				
				var tdTimeNode = document.createElement('td');
				tdTimeNode.innerHTML = "0"; 
				trNode.appendChild(tdTimeNode); 				
				parentNode.appendChild(trNode);
				
			}//for		
		}
		return parentNode.childNodes; 
	}	
	
	/*
	 * <tbody>
	      <tr class='bookmark' id='TR0' onclick= 'OnTableRowHandler(event)'>
	        <td>My bookmark -1</td>
	        <td>00:02:04</td>        
	      </tr>
	      <tr class='bookmark' id='TR1' onclick= 'OnTableRowHandler(event)'>
	        <td>My bookmark -2</td>
	        <td>00:12:04</td>        
	      </tr>
	      <tr class='bookmark' id='TR2' onclick= 'OnTableRowHandler(event)'>
	        <td>My bookmark -3</td>
	        <td>00:22:04</td>        
	      </tr>
	    </tbody>
	 */
	function ABM_UpdateAudioList(nodeList){
		for(var k = 0;  k < nodeList.length; k++){
			var itemNode = nodeList[k]; 
			if(itemNode.nodeName.toUpperCase() != 'DIV')
				continue; 
			var childList = itemNode.childNodes; 
			var obj = gObjList[k]; 	
			var imageNode = itemNode.firstElementChild; 
			if(imageNode.nodeName.toUpperCase() != 'IMG')
				return ; 			
			imageNode.setAttribute('id', obj.ID);			
			//var imgNode = itemNode.childNode
			imageNode.setAttribute('data-url', obj.URL ); 
			imageNode.src = obj.ImageURL; 
			imageNode.setAttribute('onclick', 'OnAudioListHandler(event)'); 
			imageNode.setAttribute('data-title', obj.title);
			
			var nextChild = imageNode.nextElementSibling; 
			var titleNode = nextChild.firstElementChild; 
			titleNode.innerHTML = obj.title; 
			
			var authorNode = titleNode.nextElementSibling; 
			authorNode.innerHTML = obj.author;
			
			var summaryNode = authorNode.nextElementSibling; 
			summaryNode.innerHTML = obj.summary;
			
		}
	}
	
	/*
	<div id='item0' class="item active" style='text-align:center'>
    <img class='BMThumbnail' src="adventures_holmes.jpg" alt="New York" width="180px" height="180px" onclick='OnItemClickHandler(event)'>
     <div>
       <div class='Title'>Adventures of Sherlock Holmes</div>
       <div class='Author'>By:<span>Sir Arthur Conanl Doyle</span></div>
       <div class='Summary'>Collections of fascinating story of exploits of Sherlock Holmes</br>
       Here Holmes lives by his promise of delivering the ultimate challenge....</div>
     </div>      
   </div>
	*/
	var gCurrentAudioID = -1; 
	function OnAudioListHandler(event){
		var aNode = event.target; 
		var filePath = aNode.getAttribute('data-url'); 
		gAudioNode.pause(); 
	    //now get the meta data 
		gCurrentAudioID = aNode.id; 
	    ABM_GetChapterBookmarkInfo(aNode.id, 'audioloadCallbackFn'); 
	    audioloadCallbackFn = function(respData){
	    	$('#itemlistcontainer').carousel('pause');
	    	gMetaInfo = jQuery.parseJSON(respData);
	    	var chapStr = gMetaInfo[0].chapter; 
	    	//now create the list of chapters and populate it 
	    	var audListNode =  document.getElementById('chapterList'); 
	    	var bmStr = gMetaInfo[0].bookmark; 
	    	gChapInfo = GX_GetBookmarkArray(chapStr); 
	    	gChapNodeList = CreateElementList(audListNode, gChapInfo.length, 'li', 'OnChapterHandler(event)');
	    	for(var i=0 ; i < gChapNodeList.length; i++){
	    		var node = gChapNodeList[i]; 				
				node.setAttribute('data-time', gChapInfo[i].startTime);				
				node.innerHTML = gChapInfo[i].text + ':' + GX_GetTimeFormat(gChapInfo[i].startTime); 
				node.setAttribute('data-index', i);	
	    	}
	    	gChapterIndex = 0; 
	    	//bookmark 
	    	gBookmarkInfo = GX_GetBookmarkArray(bmStr);
	    	//if(gBookmarkInfo.length > 0)
	    	ABM_RefreshBMListData(gBookmarkInfo);
	    	/*
	    	var bmNode = document.getElementById('bookmarklist'); 	    	
	    	var nodeList = CreateElementList(bmNode, gBookmarkInfo.length, 'bookmarktable', 'OnBookmarkHandler(event)');
	    	for(var i=0 ; i < nodeList.length; i++){
	    		var trnode = nodeList[i]; 
	    		trnode.setAttribute('data-time', gBookmarkInfo[i].startTime);	
	    		var tdnode = trnode.firstElementChild; 
	    		tdnode.innerHTML = gBookmarkInfo[i].text; 
	    		
	    		tdnode = tdnode.nextElementSibling; 
	    		tdnode.innerHTML = GX_GetTimeFormat(gBookmarkInfo[i].startTime);   		 
	    	}
	    	*/
	    	
	    	var title = aNode.getAttribute('data-title');
	    	$('#TitleHeading')[0].innerHTML = title; 
	    	gAudioNode.src = filePath;
	    	gAudioNode.load(); 
	    	ABM_UpdateUI(0); 	    	
	    }	    
	}
	
	var gBMText;
	function ABM_RefreshBMListData(bookmarkInfo){
		var bmNode = document.getElementById('bookmarklist'); 
    	var nodeList = CreateElementList(bmNode, bookmarkInfo.length, 'bookmarktable', 'OnBookmarkHandler(event)');
    	gBMText = ''; 
    	for(var i=0 ; i < nodeList.length; i++){
    		var trnode = nodeList[i]; 
    		trnode.setAttribute('data-time', bookmarkInfo[i].startTime);	
    		var tdnode = trnode.firstElementChild; 
    		tdnode.innerHTML = bookmarkInfo[i].text;     		
    		tdnode = tdnode.nextElementSibling; 
    		tdnode.innerHTML = GX_GetTimeFormat(bookmarkInfo[i].startTime);
    		gBMText += bookmarkInfo[i].text + '#' + bookmarkInfo[i].startTime;
    		if(i < nodeList.length-1 )
    			gBMText +=  ';'; 
    	}
    	
	}
	/*
	 * <tbody>
	      <tr class='bookmark' id='TR0' onclick= 'OnTableRowHandler(event)'>
	        <td>My bookmark -1</td>
	        <td>00:02:04</td>        
	      </tr>
	 */
	function OnABMTimeUpdate(event){
		time =  Math.round(event.timeStamp/1000);
	}

	function ABM_UpdateUI(itemIndex){
		var prevNode = gChapNodeList[gChapterIndex]; 
		prevNode.style.textDecoration = 'none'; 
		prevNode.style.color = 'black';
		prevNode.style.fontWeight = 'normal'; 
		var node = gChapNodeList[itemIndex]; 
		node.style.textDecoration = 'underline'; 
		node.style.color = 'blue';
		node.style.fontWeight = 'bold'; 
		gChapterIndex = itemIndex; 
		
	}
	function GX_GetTimeFormat(inputSec){
		var h;
		var m; 
		var s;
		with (Math){			
			h = floor(inputSec / 3600);
			var temp = round(inputSec % 3600); 
			m = floor(temp/60);
			s = (temp%60); 
		}
		if(h < 10)
			h = '0' + h; 
		if(m < 10)
			m = '0' +  m; 
		if(s < 10)
			s = '0' + s; 
		return h + ':' + m + ':' +  s ; 
	}
	function OnChapterHandler(event){
		var node =  event.target; 
		var PTS = node.getAttribute('data-time'); 
		var index = node.getAttribute('data-index'); 
		gAudioNode.currentTime = PTS; 
		ABM_UpdateUI(index); 
	}
	function OnBookmarkHandler(event){
		var node =  event.currentTarget; 
		var PTS = node.getAttribute('data-time'); 
		gAudioNode.currentTime = PTS; 
	}
	
	function GX_GetBookmarkArray(metaString){
		if(metaString.length < 1){
			var BookMetaInfoList = [];
			return BookMetaInfoList; 			
		}
			
		var arr = metaString.split(';'); 
		var numEntries = arr.length; 
		var BookMetaInfoList =  new Array(numEntries); 
		for(var j=0;  j < numEntries; j++){
			BookMetaInfoList[j] = new sBookMetaInfo(); 
			var entrystr = arr[j]; 
			var nArr = entrystr.split('#'); 
			BookMetaInfoList[j].text = nArr[0]; 
			BookMetaInfoList[j].startTime = nArr[1]; 
		}
		return BookMetaInfoList; 		
	}
	
	function GetbookMarkData(Index){
		var BookMetaInfoList =  new Array(gItemNumbers); 
		for(var  k=0; k < gItemNumbers; k++){
			BookMetaInfoList[k] = new sBookMetaInfo(); 
		}
		BookMetaInfoList[0].filepath = ""; 
		BookMetaInfoList[0].startTime = 10000; 
		BookMetaInfoList[0].text = Index + " - Topic-1"; 	
		BookMetaInfoList[1].filepath = ""; 
		BookMetaInfoList[1].startTime = 80000; 
		BookMetaInfoList[1].text = Index + " - Topic-2"; 	
		BookMetaInfoList[2].filepath = ""; 
		BookMetaInfoList[2].startTime = 200000; 
		BookMetaInfoList[2].text = Index + " - Topic-3"; 		
		return BookMetaInfoList; 
	}


function ABM_ImportAudioInfo(callbackFn)
{	
	AJX_RequestWithReponseCallback("text", "ABM", "100", '' , callbackFn);	
}

function ABM_UpdateBookmarkInfo(audioID, bmText){
	var reqBody = '&AUDIOID=' + audioID + '&BMTEXT=' + bmText; 
	AJX_RequestWithNoReponseData("text", "ABM", "102", reqBody);	
}

function ABM_GetChapterBookmarkInfo(ID, callbackFn)
{	
	var reqBody = '&ID=' + ID; 		
	AJX_RequestWithReponseCallback("text", "ABM", "101", reqBody , callbackFn);	
}
 function OnBtnClickHandler(event){
	  var addbtnNode = document.getElementById('addBtn');
	  var savebtnNode = document.getElementById('saveBtn');
	  switch(event.currentTarget.id){
	  case 'addBtn':	
		 $('#bmText').val('');	
		 $('#bmInput').show(); 
		 $('#saveBtn').show(); 
		 $('#addBtn').hide(); 
		 saveBtn
		  break; 
	  case 'saveBtn':	
		  var bmtext = $('#bmText').val();		  
		  $('#bmInput').hide(); 
		  $('#saveBtn').hide(); 
		  $('#addBtn').show();
		  
		  var startTime = gAudioNode.currentTime;  
		  var BMInfo =  new sBookMetaInfo(); 
		  BMInfo.text = bmtext; 
		  BMInfo.startTime = Math.round(startTime); 
		  gBookmarkInfo.push(BMInfo); 
		  ABM_RefreshBMListData(gBookmarkInfo); 
		  ABM_UpdateBookmarkInfo(gCurrentAudioID, gBMText);
		  //lert("Text= " + bmtext);
		  break; 
	   default:
		  break; 
	  }
  }