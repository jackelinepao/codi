window.onload = function(){
    var body = document.getElementById('body');
    var nombre = document.getElementById('name');
    var apellido = document.getElementById('lastname');
    var color = document.getElementById('color');
    var guardar = document.getElementById('enviar');
    var borrar = document.getElementById('delete');
    function obtener(){
        var nombreGuardado = localStorage.getItem("nombre");
        var apellidoGuardado = localStorage.getItem("apellido");
        var colorGuardado = localStorage.getItem("color");
        if(nombreGuardado && apellidoGuardado && colorGuardado){
            body.style.background = colorGuardado
            nombre.value = nombreGuardado;
            apellido.value = apellidoGuardado;
            color.value = colorGuardado;
        }
        console.log("se borro los datos");
        
    }
    //obtener();
   
    guardar.addEventListener("click", function(e){
        e.preventDefault();
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("apellido",apellido.value);
        localStorage.setItem("color",color.value);
        var objPreferencias = {
            nombre: nombre.value,
            apellido: apellido.value,
            color: color.value
        }
        //json
        //session storage borra de otra ventana
        texto = JSON.stringify(objPreferencias);
        console.log(objPreferencias);
        localStorage.setItem("objPreferencias", texto);
        console.log("texto" + texto);
    });
    function obtenerObjeto(){
        var objPreferenciasString = localStorage.getItem('texto')
        var objPreferenciasJSON = JSON.parse(objPreferenciasString);
        console.log("objeto convertido" + objPreferenciasJSON);
        if(objPreferenciasJSON){
            body.style.background = objPreferenciasJSON.color;
            color.value = objPreferenciasJSON.color;
            nombre.value = objPreferenciasJSON.nombre;
            apellido.value = objPreferenciasJSON.apellido;
        }
        
    }
    obtenerObjeto();
    borrar.addEventListener("click", function(e){
        e.preventDefault();
        // nombre.value = "";
        // apellido.value = "";
        // color.value = "";
        // localStorage.setItem("nombre",nombre.value);
        // localStorage.setItem("apellido",apellido.value);
        // localStorage.setItem("color",color.value);
        // localStorage.removeItem("nombre");
        // localStorage.removeItem("apellidos");
        // localStorage.removeItem("color");
        // localStorage.removeItem("texto");
        localStorage.clear();
    });
}