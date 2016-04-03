

function ABM_ImportAudioInfo(callbackFn)
{	
	AJX_RequestWithReponseCallback("text", "ABM", "100", '' , callbackFn);	
}

function ABM_GetChapterBookmarkInfo(ID, callbackFn)
{	
	var reqBody = '&ID=' + ID; 		
	AJX_RequestWithReponseCallback("text", "ABM", "101", reqBody , callbackFn);	
}