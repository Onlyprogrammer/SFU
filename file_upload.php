<?php
 //директория загрузки файла
 $uploaddir = "/var/www/work.site/vk_bot/download/";
 
 

//загрузка файлов
foreach($_FILES['files']["name"] as $key => $value){
  $tmp_name = $_FILES['files']['tmp_name'][$key];
  $uploaded_file = $uploaddir.$_FILES['files']['name'][$key];
  move_uploaded_file($tmp_name, $uploaded_file);
}

 

?>