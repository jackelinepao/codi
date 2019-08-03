window.onload = function(){
    btnDownload = document.getElementById("btn-download");
    progressBar = document.getElementById("progress-bar");
    btnDownload.onclick = function() {
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        
        xhr.open("GET", "https://i.imgur.com/DxgthpI.jpg")
        //imgur.com corns
        //lengthComputable: true el archivo se puede contar la descarga
        xhr.responseType = 'text';
        console.log(xhr.responseText);
        xhr.onprogress = function(e){
            console.log(e);   
            if(e.lengthComputable){
                var porcentaje = (e.onload / e.total) * 100;
                progressBar.style.width = `${porcentaje}%`;
            }         
        }
        xhr.onloadstart = function() {
            "esta iniciando la carga del archivo"
        }
        xhr.onload = function(){
            console.log("esta caragando ele archivo");
            
        }
        xhr.onloadend = function(){
            console.log("la carga a finalizado");
        }
        xhr.send(null);
    }
}
