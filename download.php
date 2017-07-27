<?php
 //параметры загрузки файла
 $uploaddir = "/var/www/work.site/vk_bot/";
 $fileName = basename($_FILES["files"]["name"][0]);
 $uploadfile = $uploaddir . $fileName;
 
 //загрузка файла
 //move_uploaded_file($_FILES["files"]["tmp_name"][0], $uploadfile);

 //отчёт
 print_r($_FILES);
 echo $uploadfile; 

?>