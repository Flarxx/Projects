<?php
   if(!empty($_POST['name']) and !empty($_POST['mail']) and !empty($_POST['message'])){
      $name = trim(strip_tags($_POST['name']));
	  $mail = trim(strip_tags($_POST['mail']));
      $message = trim(strip_tags($_POST['message']));
 
      mail('teamsame8@gmail.com', 'Письмо с адрес_вашего_сайта', 
      'Вам написал: '.$name.'<br />Его почта: '.$mail.'<br />
      Его сообщение: '.$message,"Content-type:text/html;charset=windows-1251");
 
      echo "Ваше сообщение успешно отправлено!<Br> Вы получите ответ в 
      ближайшее время";
 
      exit;
   } 
   else {
      echo "Для отправки сообщения заполните все поля!";
      exit;
   }
?>