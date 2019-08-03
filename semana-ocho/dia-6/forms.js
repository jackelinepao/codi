window.onload = function(){
    var name = document.getElementById('name');
    var help = document.getElementById('help');
    var password =document.getElementById('password');
    var help2 = document.getElementById('help2'); 
    var mensaje = document.getElementById('mensaje');
    var help3 = document.getElementById('help3'); 
    var formulario = document.getElementById('form');
    // formulario.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     console.log(name.value);
    //     if(name.value <=10){
    //         $('#name').addClass("input-valid")
    //     }
    // })
    name.onkeyup = function(){
        if(name.value.length < 10){
            name.classList.add("is-invalid");
            name.classList.remove("is-valid")
            help.classList.add("text-danger")
            help.classList.remove("text-success")
            help.innerHTML = "Texto Incorrecto"

        }else{
            name.classList.add("is-valid");
            name.classList.remove("is-invalid")
            help.classList.remove("text-danger")
            help.classList.add("text-success")
            help.innerHTML = "Texto Correcto"
        }
    }
    password.onkeyup = function(){
        if(password.value.length < 6){
            password.classList.add("is-invalid");
            password.classList.remove("is-valid")
            help2.classList.add("text-danger")
            help2.classList.remove("text-success")
            help2.innerHTML = "Texto Incorrecto"

        }else{
            password.classList.add("is-valid");
            password.classList.remove("is-invalid")
            help2.classList.remove("text-danger")
            help2.classList.add("text-success")
            help2.innerHTML = "Texto Correcto"
        }
    }
    mensaje.onkeyup = function(){
        var cont = 50 - mensaje.value.length;
        help3.innerHTML = `Quedan ${cont} caracteres`
        
    }
}