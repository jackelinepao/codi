window.onload = function(){
    var form = document.getElementById('form');
    var nombre = document.getElementById('nombre');
    var job = document.getElementById('job');
    var btn = document.getElementById('btnEnviar');
    var alerta = document.getElementById('alerta');
    var text_alert = document.getElementById('text-alert');
    btn.onclick = function(e){
        e.preventDefault();
        var trabajador = {
            name: nombre.value.trim(),
            job: job.value.trim()
        }
        console.log(trabajador);
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        //tiempo de respuesta en milisegundo
        xhr.timeout = 1500;
        xhr.ontimeout = function(){
            console.log("Tiempo de espera superado");
        }
        xhr.onreadystatechange = function(){
            switch (xhr.readyState) {
                case 1:
                    console.log("configurando");
                    break;
                case 2:
                    console.log("enviando los datos ...")
                    break;
                case 3:
                    console.log("ree cargando");
                    break
                case 4:
                    if(xhr.status == 201){
                        var json = JSON.parse(xhr.responseText);
                        console.log("hecho");
                        alerta.classList.add("alert", "show", "alert-success")
                        text_alert.innerHTML = `El usario ${json.name} y su profesion "${json.job}" ha sido registrado exitosamente`
                    }else{
                        console.log("respesta obtenida, pero status error")
                        alerta.classList.add("alert", "show", "alert-danger")
                        alerta.innerHTML = "Error"
                    }
                    console.log("echo");
                    console.log(xhr);
                    console.log(xhr.responseText);
                    break
                    
                    
            }
        }
        xhr.open('POST', 'https://reqres.in/api/users', true);
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(JSON.stringify(trabajador));
    }
}