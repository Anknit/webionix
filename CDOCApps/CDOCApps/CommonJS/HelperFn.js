var gAJXObj = 0; 
var ErrorString = "Error";
var gXMLDoc = 0;

var gAppURI = "AppModule.php"; //"http://localhost/ECLIPSE_WORKSPACE/PROTO/Login/AppModule.php"; //
var gAJAXResponse = "";
var gAJAXResult = 0; 

function AJX_Initialize() {
    $.ajaxSetup({ url:gAppURI,
        async:false,
        cache:false,
        processData:true,
        timeout:gTimeOut,
        /*type:"POST",*/ 
        contentType:"text",
        dataType:"text",
        error:function(gAJAXResult) {
            alert("An error occured: " + gAJAXResult.status + " " + gAJAXResult.statusText);
            gAJAXResult = gAJAXResult.statusText;
            gAJAXResponse = "error";
        },
        success:function(gAJAXResult) {
            gAJAXResponse = gAJAXResult;
        }
    }); 
}
function AJX_RequestWithPureXMLReponse( RespDataType, ModID, RequestId, RequestBody)
{
	if(!gAJXObj)
		gAJXObj =  new XMLHttpRequest(); 
	
	
	//gAJXObj.open("GET","http://localhost/USER_DATA/mala_dir/wksdata_HTM.xml", false ); 
	//http://localhost/ECLIPSE_WORKSPACE/PROTO/Login/AppModule.php?modid=WKSM&reqid=100&type=XML";
    var newURI = gAppURI + "modid=" + ModID + "&reqid=" + RequestId + "&type=" + RespDataType; 
	gAJXObj.open("POST",newURI, false );
	gAJXObj.send(RequestBody); 		
	return gAJXObj.responseXML;
}

function BlockUIinAjax(bFlag) {

    if (bFlag == true) {

        /*   $.blockUI({ css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: .5,
        color: '#fff'
        }
        });
        */

        $.blockUI();
         setTimeout($.unblockUI, 2000);

    }
    else {
        $.unblockUI(); 
    }

}
function AJX_RequestWithPureTextReponse(RespDataType, ModID, RequestId, RequestBody) {
   if (!gAJXObj)
        gAJXObj = new XMLHttpRequest();


    var newURI = gAppURI + "?modid=" + ModID + "&reqid=" + RequestId + "&type=" + RespDataType;
    gAJXObj.open("POST", newURI, false);
    //document.body.style.cursor = "wait";
  //  BlockUIinAjax(true);
    gAJXObj.send(RequestBody);
 //   BlockUIinAjax(false);
   // document.body.style.cursor = "default";
   // document.body.style.cursor = "default";
    
    var respstr = gAJXObj.responseText; 
    var patt1=/\r\n/g;
    var respstr = respstr.replace(patt1, ""); 
    return respstr; 
    //   return gAJXObj.responseText;  
    
    /* abondaoned using jquery AJAX function because of overhead */ 

}

function LoadXMLDOMFromString(stringXML)
{
	if (window.DOMParser) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(stringXML, "text/xml");
    }
    else // Internet Explorer
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(stringXML);
    }
	return xmlDoc; 
}


function GetNode(startNode, targetnodeId) {

	var myNode = document.getElementById(targetnodeId); 
	return myNode; 
	
    var currentNode = startNode;
    
    //check if currentNode ID is equal to targetnodeId
    var currnodeID = currentNode.getAttribute("id");
    if (targetnodeId == currnodeID) {
        return currentNode;
    }

  
    //check if there are children
    var bChild = currentNode.hasChildNodes();
    if (bChild == true) {

        var childlistlen = currentNode.childNodes.length;
        currentNode = currentNode.firstChild;
        for (var i = 0; i < childlistlen; i++) {
            if (currentNode.nodeType == "1") {
                retNode = GetNode(currentNode, targetnodeId);
                if (retNode != null)
                    return retNode;
            }
            currentNode = currentNode.nextSibling; 
        }//for
    }

    return null; 
}