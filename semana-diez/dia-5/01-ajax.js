//ajax:
//get->por la url
//post->cuando lo hace por interno
window.onload = function(){
    var btnTraerDatos = document.getElementById('btn_upload');
    var tabla = document.getElementById('tabla');

    function ponerDatos(personas){
        tabla.innerHTML = `<thead>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Foto</th>
                            </thead>`   
        var tbody = document.createElement("tbody")
        tabla.appendChild(tbody);
        console.log("elements", personas)
        personas.forEach(element => {
           var tr = document.createElement("tr");
           var tdId = document.createElement("td");
           var tdNombre = document.createElement("td");
           var tdApellido = document.createElement("td");
           var tdEmail = document.createElement("td");
           var tdImagen = document.createElement("td");
           var avatarimg = document.createElement("img");
           tdId.innerHTML = element.id;
           tr.appendChild(tdId);
           tdNombre.innerHTML = element.first_name;
           tr.appendChild(tdNombre);
           tdApellido.innerHTML = element.last_name;
           tr.appendChild(tdApellido);
           tdEmail.innerHTML = element.email;
           tr.appendChild(tdEmail);
           avatarimg.setAttribute("src", element.avatar);
           tdImagen.appendChild(avatarimg);
           tr.appendChild(tdImagen);
           tbody.appendChild(tr);
        });
    }
    //xhr => XMLHttpRequest, SolicitudHTTPXML
    btnTraerDatos.onclick = function(){
        //creando mi objeto xhr
        var xhr = new XMLHttpRequest();
        console.log(xhr)
        console.log(xhr.readyState)
        xhr.onreadystatechange = function(){
            switch (xhr.readyState) {
                case 1:
                    console.log("se ha ejecutado la funcion open()")
                    break;
                case 2:
                    console.log("se ha disparado la peticion http")
                    break
                case 3:
                    console.log("ya se estan descargndo los datos")
                    break
                case 4:
                    console.log("ya tenemos los datos, la operacion termino")
                    console.log(`El codigo de estado es: ${xhr.status}`)
                    var json = JSON.parse(xhr.responseText);
                    console.log(json.data);
                    ponerDatos(json.data)
                    console.log(`El contenido de la solicitud es: ${xhr.responseText}`)
                    
                    break
            }
        }
        //recibe la direccion url que devuelve datos
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send(null);
    }
}