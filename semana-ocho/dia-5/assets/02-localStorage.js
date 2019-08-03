window.onload = function(){
    var form = document.getElementById("form");
    var input = document.getElementById("tarea");
    var lista  = document.getElementById("lista");
    function obtener(){
        var tareasObtenidas = localStorage.getItem("misTareas");
        lista.innerHTML = tareasObtenidas;
    }
    obtener();
    function guardar(){
        //localStorage.setItem("misTareas", lista.innerHTML)
        localStorage.misTareas = lista.innerHTML;
        console.log(lista.innerHTML)
    }
    form.addEventListener("submit", function(e){
        e.preventDefault();
        var tarea = input.value;
        console.log(tarea);
        var li = document.createElement("li");
        li.innerHTML = tarea;
        lista.appendChild(li);
        input.value = "";
        guardar();
    });
    lista.addEventListener("dblclick", function(e){
        var tarea = e.target;
        tarea.parentNode.removeChild(tarea);
        console.log(tarea);
        guardar();
    });
}