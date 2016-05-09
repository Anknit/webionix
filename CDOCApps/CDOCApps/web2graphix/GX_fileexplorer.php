<?php
/*
echo "Hello World PHP after a long time </br>";

$directory = 'USER_DATA\roger_dir\demoproject1\Data'; 
$myfilenamelist =  getassetfilelist($directory);
echo $myfilenamelist ; 

$filename = 'TNPeople.jpg'; 
echo "</br> now deleting file" . $filename; 
$filepath = $directory . "\\" . $filename; 
deleteassetfile($filepath);
*/
 
function getassetfilelist($directoryPath, $type)
{
	$filelist = scandir($directoryPath);
	if(!$filelist)
		return 0; 
	 
	$listlen = count($filelist);
	if($listlen < 1)
		return 0; 
	$newlist = "";
	$statarr; 
	$fileproparr = array(); 
	$propstr; 
	$filePath ; 
	for($k=0 ; $k < $listlen; $k++)
	{		
		if( ($filelist[$k] != '.') && ($filelist[$k] != '..') )
		{
			$propstr = ""; 
			$filePath = $directoryPath .$_SESSION['pathSeparator']. $filelist[$k]; 
			$fextn = pathinfo($filePath, PATHINFO_EXTENSION); 
			$fextn = strtoupper($fextn); 
			if($type == 'IMAGE')
			{
				if( ( $fextn=='JPG') || ( $fextn=='PNG') || ( $fextn=='BMP')|| ( $fextn=='GIF')|| ( $fextn=='SVG'))
				{
					$statarr = stat($filePath);
					$propstr = $filelist[$k] . '(' . $statarr['size']. ' Bytes)#';
					$newlist .= $propstr;  //need to remove later
				}	
			}
			else if($type == 'VIDEO')
			{
				if( ($fextn=='MP4') || ( $fextn=='OGG'))
				{
					$statarr = stat($filePath);
					$propstr = $filelist[$k] . '(' . $statarr['size']. ' Bytes)#';
					$newlist .= $propstr;  //need to remove later
				}
			}
			else if($type == 'AUDIO')
			{
				if( ($fextn=='MP4') || ( $fextn=='OGG'))
				{
					$statarr = stat($filePath);
					$propstr = $filelist[$k] . '(' . $statarr['size']. ' Bytes)#';
					$newlist .= $propstr;  //need to remove later
				}
			}
			else
				$newlist = ""; 
			
			
				
		}		
	}

	 
	return $newlist; 
}


function deleteassetfile($filepath)
{
 $retval  = file_exists($filepath);
 if($retval  == TRUE)
 {
 	unlink($filepath); 
 }
}
	


?>