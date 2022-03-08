<?php
  $name=$_REQUEST["name"];
  $email=$_REQUEST["email"];
  $phone=$_REQUEST["phone"];
  $msg=$_REQUEST["msg"];
  $file=$_REQUEST["file"];
  $archivo = "../data/db.json";
  if (file_exists($archivo)) unlink($archivo); 
  $puntero = @fopen($archivo, 'a+');   
                                      
  if(!$puntero)
  {	  
	 echo 'NOK';
  }
  else
  {
	fwrite($puntero, name, strlen(name));
	fwrite($puntero, email, strlen(email));
	fwrite($puntero, phone, strlen(phone));
	fwrite($puntero, msg, strlen(msg));
	fwrite($puntero, file, strlen(file));
	echo "OK";
  }
?>