    //добавление ui
    $("#file_field").button();
    $("#send").button();
       
    //преобразование box
    $("#file_container").on('dragover',function(event) {
    $("#file_container").addClass('hover');
    return false;});
    $("#file_container").on('dragleave',function(event) {
    $("#file_container").removeClass('hover');
    return false;});
    
    //загрузка
    function upload(files,lenght){
    var send_files = new FormData();
        
    //отладочная информация об файлах
    console.log("количество отправленых файлов: "+lenght);
    $.each(files,function(key,value){
    console.log(key+" "+value.name);    
    });
        
    for (i = 0;i < lenght;i++){
    console.log(files[i]);
    send_files.append("files[]",files[i]);
    }
    
    $.ajax ({
      type : 'POST',
      url: 'file_upload.php',
      cache: false,
      contentType: false,
      processData: false,
      data : send_files,
      success: function(data){alert(data);}
    });
        
    }
       
    //drag and drop
    $("#file_container").on('drop',function(event){
    event.preventDefault();
    event.stopPropagation();
    upload(event.originalEvent.dataTransfer.files,event.originalEvent.dataTransfer.files.length);
    $("#file_container").removeClass('hover');
    });
       
    //default upload
    $("#file_field").on("click",function(){
    $("#file").trigger("click");
    });
    
    $("#send").click(function(){
     upload($("#file").prop('files'),$("#file").prop('files').length);
    });
       
    //обработка ошибок
    function error (data) {
        
    }