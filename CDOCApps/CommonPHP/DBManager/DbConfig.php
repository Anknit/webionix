<?php
$URL = $_SERVER['REQUEST_URI'];
$Directory = explode('/',$URL);
for($i	=	0; 	$i < count($Directory); 	$i++){
	$folderMatched	=	false;
	switch($Directory[$i]){
		case 'PulsarPPU':	$folderMatched	=	true;
		break;	
		case 'NOVA':	$folderMatched	=	true;
		break;	
		case 'Venera_ONLINE_TOOLS':	$folderMatched	=	true;
		break;	
	}
	
	if(	$folderMatched )
		break;
}
$Folder = $Directory[$i];

if($Folder == "PulsarPPU"){
	$host		=	'localhost';
	$port		=	'3306';
	$username	=	'root';
	$password	=	'';
	$database	=	'ppudatabase';
}
elseif ($Folder == "NOVA"){
	$host		=	'192.168.0.166';
	$port		=	'3306';
	$username	=	'root';
	$password	=	'';
	$database	=	'novadatabase';
	
}
elseif ($Folder == "Venera_ONLINE_TOOLS"){
	$host		=	'192.168.0.112';
	$port		=	'3306';
	$username	=	'root';
	$password	=	'';
	$database	=	'pmsDB';
	
}
?>
