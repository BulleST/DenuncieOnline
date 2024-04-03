<?php
// Check for empty fields
if($_SERVER['REQUEST_METHOD'] == 'POST'){
   
  /* if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
   echo var_dump($_POST);
	return $_POST;
   }*/
   // Takes raw data from the request
/*$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);*/
   // echo var_dump(file_get_contents('php://input'));
   // echo var_dump($_POST);
   // echo $_POST;
   // return true;

$json = json_decode(file_get_contents('php://input'));   
$name = $json->name;
$email_address = $json->email;
$phone = $json->phone;
$message = $json->message;

echo var_dump($json);
echo 'name: '.$name;
echo 'email_address: '.$email_address;
echo 'phone: '.$phone;
echo 'message: '.$message;

if(empty($name)  		||
   empty($email_address) 		||
   empty($phone) 		||
   empty($message)	||
   !filter_var($email_address,FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
   return;
   }
return;
return
// Create the email and send the message
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "From: noreply@bullest.com.br\r\n"; // remetente
$headers .= "Return-Path: noreply@bullest.com.br\r\n"; // return-path
$envio = mail("felipebulle@gmail.com,andcastrocar1@gmail.com", "Contato Denúncia Online", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
return true;
}
	
/*require './../PHPMailer/src/PHPMailer.php';
switch($_SERVER['REQUEST_METHOD']){
   case("OPTIONS"): //Allow preflighting to take place.
       header("Access-Control-Allow-Origin: *");
       header("Access-Control-Allow-Methods: POST");
       header("Access-Control-Allow-Headers: content-type");
       exit;
   case("POST"): //Send the email;
     
     $body = json_decode($HTTP_RAW_POST_DATA, true);
     
     // Check for empty fields
     if(empty($body['name'])) {  // Ele entra no if como se o nome fosse vazio, mas não está vazio essa droga
        echo "Nome deve ser informado!";
        echo "Nome: " + $body['name'];
        return false;
     } else if(empty($body['email'])) {
        echo "Email deve ser informado!";
        echo $body['email'];
        return false;
     } else if(empty($body['message'])) {
        echo "Mensagem deve ser informado!";
        echo $body['message'];
        return false;
     } else if(empty($body['phone'])) {
      echo "Telefone deve ser informado!";
      echo $body['phone'];
      return false;
   }
        
     $name = $body['name'];
     $email_address = $body['email'];
     $message = $body['message'];
     $assunto = ''; 
     $telefone = $body['phone']; 

     // Create the email and send the message
     
   $headers = "MIME-Version: 1.1\r\n";
   $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
   $headers .= "From: noreply@bullest.com.br\r\n"; // remetente
   $headers .= "Return-Path: noreply@bullest.com.br\r\n"; // return-path
   $envio = mail("felipebulle@gmail.com,andcastrocar1@gmail.com", "Contato Denúncia Online", "Nome: $name\n\nE-mail: $email_address\n\nTelefone: $phone\n\nMensagem:\n$message", $headers);
     return true;	
       break;
   default: //Reject any non POST or OPTIONS requests.
       header("Allow: POST", true, 405);
       exit;
}*/
?>