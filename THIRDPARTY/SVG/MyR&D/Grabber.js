sDimension.prototype.x = new Number(0);
        sDimension.prototype.y = new Number(0);
        sDimension.prototype.width = new Number(0);
        sDimension.prototype.height = new Number(0);

        function sDimension() {
            sDimension.prototype.x = new Number(0);
            sDimension.prototype.y = new Number(0);
            sDimension.prototype.width = new Number(0);
            sDimension.prototype.height = new Number(0);
        }
        
        var pathdata = "";
        var pathnode;
        var bDraw = "false";
        var lastuniqueID = 0;
        var gCurrentObjectSelected = 0;
        var gCurrSelectedObjectDim = new sDimension();
        var gGrabberDim = new sDimension(); 
        
      //  var gCurrSelObjOriginX, gCurrSelObjOriginY, gGrabberOriginX, gGrabberOriginY;
      //  var gCurrSelObjOrigWidth, gCurrSelObjOrigHeight;
      //  var gGrabberOrigWidth, gGrabberOrigHeight; 
        var gOrigMousePosX, gOrigMousePosY;
        var gsvgRootNode = 0;
        var bMove = false;
        var gCurrGrabber = 0;
        var bResize = false;
        var resizeDirection = ['NONE', 'E-RESIZE', 'NE-RESIZE', 'NW-RESIZE', 'N-RESIZE', 'SE-RESIZE', 'SW-RESIZE', 'S-RESIZE', 'W-RESIZE'];
        var gCurrDirection = 'NONE';
        var gMaxLeft, gMaxTop, gMaxRight, gMaxBottom;
        var bMouseDown = false; 
                //defining point structure
       
        
        function OnDomBtnClick() {
            var svgNode = document.getElementById("SVG1");
            var text = svgNode.outerHTML;
            alert(text);
        }

        function OnToggleGrid(event) {
            var node= event.target;
            var state = node.getAttribute("data-gridshow");
            var svgbkgrnd = document.getElementById("background");

            if (state == "true") {
                node.setAttribute("data-gridshow", "false");
                svgbkgrnd.setAttribute( "visibility", "hidden");
            }
            else {
                node.setAttribute("data-gridshow", "true");
                svgbkgrnd.setAttribute("visibility", "visible");
            }
        }

        function OnMouseTestMode(evt) {
            var node = evt.target;
            var X = new Number(evt.clientX);
            var Y = new Number(evt.clientY);
            X = X - 8;
            Y = Y - 8;
            var str = "(" + X + "," + Y + ")";
            var node = document.getElementById("mouselocation");
            node.innerHTML = str;
        }
        
        function GetUniqueID() {
            lastuniqueID++;
            var ID = "SVG_" + lastuniqueID;
            var ret = document.getElementById(ID);
            if (!ret)
                return ID;
            else
                return GetUniqueID();
        }

        function OnSelection(evt) {            
           var node = evt.target;
           if(bMove == true)
        	   return ;
        if ((!gCurrentObjectSelected) || (gCurrentObjectSelected != node)) {
                if(gCurrentObjectSelected)
                    SetSelection(gCurrentObjectSelected, false);
                SetSelection(node, true);
                return;
            }                     
        }

        function OnObjectMouseDown(evt) {
        	
        	  
        	if(!gCurrentObjectSelected)
        	    return;
        	if (bMouseDown == false)
        	    bMouseDown = true; 
            //if it is not resize mode then check for 
            if(bResize == false)
            {
            	if (bMove == false) {
                    gsvgRootNode.setAttribute("cursor", "move");
                    //store the current coordinates
                    //gOrigMousePosX = evt.clientX;
                    //gOrigMousePosY = evt.clientY;
                    gOrigMousePosX = -1;
                    gOrigMousePosY = -1;                
                    bMove = true;
                   // alert("Mouse down Move True");
                }
                else {
                    gsvgRootNode.setAttribute("cursor", "auto");
                    bMove = false;
                    gCurrSelectedObjectDim = getObjectDim(gCurrentObjectSelected);
                    gGrabberDim = getObjectDim(gCurrGrabber);
                  //  alert("MouseDown Move false");   
                }            
            }
            else
            {
            	gsvgRootNode.setAttribute("cursor", "auto");
                evt.target.setAttribute("pointer-events", "all");
                bResize = false;
                gCurrDirection = 'none';
                SetSelection(gCurrentObjectSelected, true);
                gCurrGrabber.setAttribute("stroke-opacity", "1.0");
                var pt = getObjectDim(gCurrentObjectSelected);
                gCurrSelectedObjectDim.x = pt.x;
                gCurrSelectedObjectDim.y = pt.y;
                gCurrSelectedObjectDim.width = pt.width;
                gCurrSelectedObjectDim.height = pt.height;

                pt = getObjectDim(gCurrGrabber);
                gGrabberDim.x = pt.x;
                gGrabberDim.y = pt.y;
                gGrabberDim.width = pt.width;
                gGrabberDim.height = pt.height;
            }
            
        }
        function OnObjectMove(evt) {

            //trap new coordiantes and store the relative mouse coordinaes
            var relX, relY;
            var retVal;
            var ClientX, ClientY; 
            ClientX = new Number(evt.clientX); 
            ClientY = new Number(evt.clientY);
            var newObjDim = new sDimension();

            if (evt.buttons == 0)
                return; 
           // if (bMouseDown != true)
             //   return; 
            if (bMove == true){
            	if (!gCurrentObjectSelected)
                    return;
                if ((gOrigMousePosX == -1) || (gOrigMousePosY == -1)) {
                    gOrigMousePosX = evt.clientX;
                    gOrigMousePosY = evt.clientY;                
                }
                relX = new Number(evt.clientX);
                relY = new Number(evt.clientY);
                relX = relX - gOrigMousePosX;
                relY = relY - gOrigMousePosY;
                newObjDim.x = gGrabberDim.x + relX;
                newObjDim.y = gGrabberDim.y + relY;   
                newObjDim.width = gGrabberDim.width; 
                newObjDim.height = gGrabberDim.height;                  
                retVal = setObjectDim(gCurrGrabber,newObjDim); 
                if(retVal == false)
                	return ; 
               
                UpdateMarkers(newObjDim, true); 

               /* newObjDim.x = gCurrSelectedObjectDim.x + relX;
                newObjDim.y = gCurrSelectedObjectDim.y + relY;
                newObjDim.width = gCurrSelectedObjectDim.width; 
                newObjDim.height = gCurrSelectedObjectDim.height;
                */
                
                newObjDim.x = newObjDim.x+5; 
                newObjDim.y = newObjDim.y+5 
                newObjDim.width = newObjDim.width-5 ;
                newObjDim.height = newObjDim.height-5;                 
                retVal = setObjectDim(gCurrentObjectSelected,newObjDim);
                if(retVal == false)
                	return ; 
                            	
            }
            else
            {
            	 var newDim; 
            	if (bResize == true) {
                    //node.setAttribute("pointer-events", "all");
                    gsvgRootNode.setAttribute("cursor", gCurrDirection);
                    var relX, relY;
                    relX = new Number(ClientX - gOrigMousePosX);
                    relY = new Number(ClientY - gOrigMousePosY);
					
					var newGrabberDim =  new sDimension(); 
					var newObjDim = new sDimension(); 
					
                    if (gCurrDirection == 'e-resize') {
                        //resize the grabber first
                        newGrabberDim.x = gGrabberDim.x; 
                        newGrabberDim.y = gGrabberDim.y; 
                        newGrabberDim.width = gGrabberDim.width + relX;
                        newGrabberDim.height = gGrabberDim.height; 
                    }
                    else if (gCurrDirection == 'w-resize') {
	                        //resize the grabber first
	                        newGrabberDim.x = gGrabberDim.x+relX; 
	                        newGrabberDim.y = gGrabberDim.y; 
	                        newGrabberDim.width = gGrabberDim.width - relX;
	                        newGrabberDim.height = gGrabberDim.height; 
	                }
                    else if (gCurrDirection == 'n-resize') {
                    	newGrabberDim.x = gGrabberDim.x; 
                        newGrabberDim.y = gGrabberDim.y+relY; 
                        newGrabberDim.width = gGrabberDim.width ;      
                        newGrabberDim.height = gGrabberDim.height - relY;       
                    }
                    else if (gCurrDirection == 's-resize') {
                    	newGrabberDim.x = gGrabberDim.x; 
                        newGrabberDim.y = gGrabberDim.y; 
                        newGrabberDim.width = gGrabberDim.width ;      
                        newGrabberDim.height = gGrabberDim.height + relY;       
                    }
                    else if (gCurrDirection == 'se-resize') {
                    	newGrabberDim.x = gGrabberDim.x; 
                        newGrabberDim.y = gGrabberDim.y; 
                        newGrabberDim.width = gGrabberDim.width + relX;      
                        newGrabberDim.height = gGrabberDim.height +  relY;  
                    }
                    else if (gCurrDirection == 'sw-resize') {
                    	newGrabberDim.x = gGrabberDim.x +relX; 
                        newGrabberDim.y = gGrabberDim.y; 
                        newGrabberDim.width = gGrabberDim.width - relX;      
                        newGrabberDim.height = gGrabberDim.height +  relY;  
                    }
                    else if (gCurrDirection == 'ne-resize') {
                    	newGrabberDim.x = gGrabberDim.x ; 
                        newGrabberDim.y = gGrabberDim.y +relY; 
                        newGrabberDim.width = gGrabberDim.width + relX;      
                        newGrabberDim.height = gGrabberDim.height -  relY;  
                    }
                    else if (gCurrDirection == 'nw-resize') {
                    	newGrabberDim.x = gGrabberDim.x +relX; 
                        newGrabberDim.y = gGrabberDim.y +relY; 
                        newGrabberDim.width = gGrabberDim.width - relX;      
                        newGrabberDim.height = gGrabberDim.height -  relY;  
                    }
						if(gCurrDirection != 'none')
						{
							newObjDim.x = newGrabberDim.x+5; 
	                        newObjDim.y = newGrabberDim.y+5 
	                        newObjDim.width = newGrabberDim.width-5 ;
	                        newObjDim.height = newGrabberDim.height-5; 
	                        
							retVal = setObjectDim(gCurrGrabber,newGrabberDim);   
							if(retVal == false)
			                	return ; 
		                    UpdateMarkers(newGrabberDim, true);           
		                    retVal =setObjectDim(gCurrentObjectSelected,newObjDim);
		                    if(retVal == false)
		                    	return ; 
						}
                    
                }
            }
            
        }
        
        function OnObjectMouseUp(evt) {
            //change the cursor back to normal
            gsvgRootNode.setAttribute("cursor", "auto");
            bMove = false;
            gCurrSelectedObjectDim = getObjectDim(gCurrentObjectSelected);
            gGrabberDim = getObjectDim(gCurrGrabber);
            //bMouseDown = false;
          //  gCurrentObjectSelected.setAttribute('pointer-events', 'visible');
           SetSelection(gCurrentObjectSelected, false);
           SetSelection(gCurrentObjectSelected, true); 
            alert("Mouse Up");    
        }
        function OnObjectMouseOut(evt)
        {
        	if(bResize == true)
        		gsvgRootNode.setAttribute("cursor", "auto");
        }
        
        function SetSelection(objNode, bFlag) {
            var node = objNode; 
            gCurrGrabber = document.getElementById("grabber");
            var x, y, w, h;
            var num;
            var initPoint; 
            if (!gsvgRootNode)
            {
            	 gsvgRootNode = document.getElementById('rootsvg1');
            	 num = gsvgRootNode.getAttribute('x'); 
            	 num = num.substring(0, num.length-2); 
            	 gMaxLeft = new Number(num); 
            	 
            	 num = gsvgRootNode.getAttribute('y'); 
            	 num = num.substring(0, num.length-2); 
            	 gMaxTop = new Number(num);             	 
            	 
            	 num = gsvgRootNode.getAttribute('width'); 
            	 num = num.substring(0, num.length-2); 
            	 gMaxRight = new Number(num);
            	 gMaxRight = gMaxLeft + gMaxRight;             	 
            	 
            	 num = gsvgRootNode.getAttribute('height'); 
            	 num = num.substring(0, num.length-2); 
            	 gMaxBottom = new Number(num);
            	 gMaxBottom = gMaxBottom + gMaxTop;
            	 //gMaxLeft, gMaxTop, gMaxRight, gMaxBottom; 
            }
               
            
            if(bFlag == false)
            {
            	gCurrGrabber.setAttribute("visibility", "hidden");
            	gCurrGrabber.setAttribute("pointer-events", "none");
            	node.setAttribute('pointer-events', 'visible'); 
            	gCurrentObjectSelected = 0; 
            	UpdateMarkers(0, false); 
            	bMove = false;
            	bResize = false; 
            	return ; 
            }
            gCurrGrabber.setAttribute("visibility", "visible");
            gCurrGrabber.setAttribute("pointer-events", "visible"); 
            if (node.nodeName == "rect") {
                gCurrSelectedObjectDim = getObjectDim(node);
                num = gCurrSelectedObjectDim.x;                
                num -= 5;
                x = num;

                y = gCurrSelectedObjectDim.y;
                num = gCurrSelectedObjectDim.y;                
                num -= 5;
                y = num;

                w = gCurrSelectedObjectDim.width; 
                num = new Number(w);
                num += 10;
                w = num;

                h = gCurrSelectedObjectDim.height;
                num = new Number(h);
                num += 10;
                h = num;
            }
           else if (node.nodeName == "ellipse") {
            //need to do the same for ellipse as well
                gCurrSelectedObjectDim = getObjectDim(node);
                x = gCurrSelectedObjectDim.x;
                num = new Number(x);
                x = num;


                y = gCurrSelectedObjectDim.y;
                num = new Number(y);
                y = num;


                w = gCurrSelectedObjectDim.width;
                num = new Number(w);
                w = num;

                h = gCurrSelectedObjectDim.height;
                num = new Number(h);
                h = num;

                x = x - w - 5;
                y = y - h - 5;
                w = 2 * w + 10;
                h = 2 * h + 10;
                          
            }
            
                gCurrentObjectSelected = node;
                gCurrGrabber.setAttribute("x", x);
                gCurrGrabber.setAttribute("y", y);
                gCurrGrabber.setAttribute("width", w);
                gCurrGrabber.setAttribute("height", h);
                gGrabberDim = getObjectDim(gCurrGrabber);

                UpdateMarkers(gGrabberDim, true);

                gCurrentObjectSelected.setAttribute('pointer-events', 'none'); 
                return;
            
        }
     function getObjectDim(ObjNode) {

         var mypoint = new sDimension();
         var x, y, width, height; 
         if (ObjNode.nodeName == 'rect') {
             x = ObjNode.getAttribute('x');
             y = ObjNode.getAttribute('y');
             width = ObjNode.getAttribute('width');
             height = ObjNode.getAttribute('height'); 
             
         }
         else if(ObjNode.nodeName == 'ellipse') {
             x = ObjNode.getAttribute('cx');
             y = ObjNode.getAttribute('cy');
             width = ObjNode.getAttribute('rx');
             height = ObjNode.getAttribute('ry');
         }         
          mypoint.x = new Number(x);
          mypoint.y = new Number(y);
          mypoint.width = new Number(width);
          mypoint.height = new Number(height); 
          return mypoint;
      }
     
     function setObjectDim(ObjNode, newDim) {

         var myheight = newDim.height + 0; 
         var rightLimit, bottomLimit; 
         var x, y, width, height; 
         //check the limits 
         rightLimit = newDim.x + newDim.width; 
         bottomLimit = newDim.y + newDim.height;
         if(newDim.x <= gMaxLeft )
         {
        	 //alert("Left Boundary"); 
        	 return false;
         }
         if(newDim.y <= gMaxTop )
         {
        	 //alert("Top Boundary"); 
        	 return false ;
         }
         
         if(rightLimit >= gMaxRight)
         {
        	 //alert("Right Boundary"); 
        	 return false;
         }
         if(bottomLimit >= gMaxBottom)
         {
        	// alert("Bottom Boundary"); 
        	 return false ;
         }
         if (ObjNode.nodeName == 'rect') {
              ObjNode.setAttribute('x', newDim.x);
              ObjNode.setAttribute('y', newDim.y);
              ObjNode.setAttribute('width', newDim.width);
              ObjNode.setAttribute('height', myheight);              
         }       
         else if(ObjNode.nodeName == 'ellipse') {
        	 var cx = newDim.x; 
        	 var cy = newDim.y; 
        	 var rx = newDim.width/2;
        	 var ry = newDim.height/2; 
        	 cx += rx; 
        	 cy += ry
             ObjNode.setAttribute('cx', cx);
             ObjNode.setAttribute('cy',cy);
             ObjNode.setAttribute('rx', rx);
             ObjNode.setAttribute('ry', ry);
         }
          return true; 
      }
     
      function OnSVGParentClick(evt)
      {
      	var node = evt.target;
      	var ID = node.id; 
      	if(ID != 'gridrect')
      		return; 
      	
      	if(gCurrentObjectSelected)
      	{
      		SetSelection(gCurrentObjectSelected, false); 
      		 
      	}
      }
      
      function UpdateMarkers(GrabberDim, bShow)
      {
    	  var markX, markY; 
    	  var JQSel = ".CUSTOM_MARKER"; 
    	  if(bShow == false)
    	  {
    		  $(JQSel).attr("visibility", "hidden");
    		  return ; 
    	  }    		  
    	//  $(JQSel).attr("visibility", "visible"); 
    	  
    	 //get the top left coordinate of grabber
    	 markX = GrabberDim.x; 
    	 markY = GrabberDim.y; 
    	 JQSel = "#markerTL";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY); 
    	 
    	 markX = GrabberDim.x+(GrabberDim.width/2); 
    	 markY = GrabberDim.y; 
    	 JQSel = "#markerTM";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY); 
    	 
    	 markX = GrabberDim.x+(GrabberDim.width); 
    	 markY = GrabberDim.y; 
    	 JQSel = "#markerTR";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY); 
    	 
    	 markX = GrabberDim.x+(GrabberDim.width); 
    	 markY = GrabberDim.y + (GrabberDim.height/2); 
    	 JQSel = "#markerMR";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY);
    	 
    	 markX = GrabberDim.x+(GrabberDim.width); 
    	 markY = GrabberDim.y + (GrabberDim.height); 
    	 JQSel = "#markerBR";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY);
    	 
    	 markX = GrabberDim.x+(GrabberDim.width/2); 
    	 markY = GrabberDim.y + (GrabberDim.height); 
    	 JQSel = "#markerBM";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY);
    	 
    	 markX = GrabberDim.x; 
    	 markY = GrabberDim.y + (GrabberDim.height); 
    	 JQSel = "#markerBL";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY);
    	 
    	 markX = GrabberDim.x; 
    	 markY = GrabberDim.y + (GrabberDim.height/2); 
    	 JQSel = "#markerML";
    	 $(JQSel).attr("cx", markX); 
    	 $(JQSel).attr("cy", markY);
    	 
    	 $(JQSel).attr("visibility", "visible");
      }
      
      function OnMarkerMouseMove(evt)
      {
    	  var markerNode = evt.target; 
    	  var ClientX, ClientY; 
    	  ClientX =  new Number(evt.clientX);
    	  ClientY =  new Number(evt.clientY);
    	  
    	  gCurrDirection = markerNode.getAttribute('data-direction'); 
    	  if(!gCurrDirection)
    		  return ; 
    	  gsvgRootNode.setAttribute("cursor", gCurrDirection);     
    	  var dim;
      }
      
      function OnMarkerMouseDown(evt)
      {
    	  var markerNode = evt.target; 
    	  var ClientX = new Number(evt.clientX); 
    	  var ClientY =  new Number(evt.clientY); 
    	  gCurrDirection = markerNode.getAttribute('data-direction'); 
    	  if(!gCurrDirection)
    		  return ; 
    	  gsvgRootNode.setAttribute("cursor", gCurrDirection);    
    	
          if(bResize == false) {
              bResize = true;
              gOrigMousePosX = ClientX;
              gOrigMousePosY = ClientY;
              //trap the init dimension of grabber and object
              var dim = getObjectDim(gCurrentObjectSelected);
              gCurrSelObjOrigWidth = dim.width;
              gCurrSelObjOrigHeight = dim.height;

              dim = getObjectDim(gCurrGrabber);
              if (gCurrDirection == "e-resize") {
                  gGrabberDim.width = dim.width+20;
                  gGrabberDim.height = dim.height;
              }
              else if (gCurrDirection == "w-resize") {
            	  gGrabberDim.x =gGrabberDim.x - 20; 
                  gGrabberDim.width = dim.width + 20;
                  gGrabberDim.height = dim.height ;
              }
              else if (gCurrDirection == "n-resize") {
            	  gGrabberDim.y =gGrabberDim.y - 20;  
                  gGrabberDim.width = dim.width;                 
                  gGrabberDim.height = dim.height + 20;                                 
              }
              else if (gCurrDirection == "s-resize") {
                  gGrabberDim.width = dim.width;
                  gGrabberDim.height = dim.height + 20;
              }
              else if (gCurrDirection == "se-resize") {
                  gGrabberDim.width = dim.width+20;
                  gGrabberDim.height = dim.height + 20;
              }
              else if (gCurrDirection == "sw-resize") {
            	  gGrabberDim.x -= 20;            	  
                  gGrabberDim.width = dim.width+20;
                  gGrabberDim.height = dim.height + 20;
              }
              else if (gCurrDirection == "ne-resize") {
            	  gGrabberDim.y -= 20;
                  gGrabberDim.width = dim.width+20;
                  gGrabberDim.height = dim.height + 20;
              }
              else if (gCurrDirection == "nw-resize") {
            	  gGrabberDim.x -= 20;
            	  gGrabberDim.y -= 20;
                  gGrabberDim.width = dim.width + 20;
                  gGrabberDim.height = dim.height + 20;
              }
              
              gCurrGrabber.setAttribute("stroke-opacity", "0.4");
              setObjectDim(gCurrGrabber, gGrabberDim); 
              
            /*  gCurrGrabber.setAttribute("width", gGrabberDim.width);
              gCurrGrabber.setAttribute("height", gGrabberDim.height);
              gCurrGrabber.setAttribute("x", gGrabberDim.x);
              gCurrGrabber.setAttribute("y", gGrabberDim.y);
              */
              
              gCurrGrabber.setAttribute("pointer-events", "all");   
              
          }       
      }
      
      function OnMarkerMouseOut(evt)
      {
    	 if(bResize == false)
    	 {
    		  gCurrDirection = 'none'; 
        	  gsvgRootNode.setAttribute("cursor", 'auto');  
    	 }
    	  
      }
      
      