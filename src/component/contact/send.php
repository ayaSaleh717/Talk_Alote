<?php 

if(!empty($_POST['send'])){
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $userNumber = $_POST['number'];
    $userSubject = $_POST['subject'];
    $userMessage = $_POST['message'];

    $toEmail = $_POST['salehaya717@gmail.com'];

    $mailHeaders = "Name:" .$userName . 
    "\r\n Email:" .$usrEmail .
     "\r\n Phone:" .$usrPhone .
     "\r\n Subject:" .$userSubject.
     "\r\n Message:" .$userMessage. "\r\n";
     if(mail($toEmail,$userName,$mailHeaders)){
        $message = "Your Message was sent";
        
     }

     

}?>