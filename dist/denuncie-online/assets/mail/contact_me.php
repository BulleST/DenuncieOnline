<?php 

   header("Access-Control-Allow-Headers: Content-Type");
   header("Content-Type: application/json; charset=UTF-8");
   header("Accept: application/json;");

// Check for empty fields
if($_SERVER['REQUEST_METHOD'] == 'POST'){

$json = json_decode(file_get_contents('php://input'));   
$name = $json->name;
$email_address = $json->email;
$phone = $json->phone;
$message = $json->message;



if(empty($name)  		||
   empty($email_address) 		||
   empty($phone) 		||
   empty($message)	||
   !filter_var($email_address,FILTER_VALIDATE_EMAIL))
   {
	echo json_encode("error") ;
   return;
   }

// Create the email and send the message
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "From: noreply@bullest.com.br\r\n"; // remetente
$headers .= "Return-Path: noreply@bullest.com.br\r\n"; // return-path
$envio = mail("felipebulle@gmail.com,andcastrocar1@gmail.com", "Contato Denúncia Online", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
echo json_encode('success') ;
return true;
}
	

?>