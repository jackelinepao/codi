window.onload = function(){
    btnDownload = document.getElementById("btn-download");
    progressBar = document.getElementById("progress-bar");
    btnDownload.onclick = function() {
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        
        xhr.open("GET", "https://i.imgur.com/DxgthpI.jpg")
        //imgur.com corns
        xhr.responseType = 'text';
        xhr.onprogress = function(e){
            console.log(e);
            
        }
    }
}