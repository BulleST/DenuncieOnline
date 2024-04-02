<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "From: noreply@bullest.com.br\r\n"; // remetente
$headers .= "Return-Path: noreply@bullest.com.br\r\n"; // return-path
$envio = mail("felipebulle@gmail.com,andcastrocar1@gmail.com", "Contato Denúncia Online", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
return true;			
?>