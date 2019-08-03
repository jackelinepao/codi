var principal = document.getElementById("principal");
var footer = document.getElementById("footer");
//crear un elemento
var nuevoDiv = document.createElement("div");
nuevoDiv.style.background = "red";
//colocar contenido dentro de un html
nuevoDiv.innerHTML = "Este un texto de prueba";
nuevoDiv.setAttribute("id", "nuevoDiv");
nuevoDiv.setAttribute("nombre", "unaSeccion")
nuevoDiv.classList.add("btn-rojo")
//remplaza todas las clases
//nuevoDiv.setAttribute("class", "btn-rojo");
principal.appendChild(nuevoDiv);




//agregar un elemento
var mih1 = document.createElement("h1");
mih1.innerHTML = "Titulo de pagina"

var mih2 = document.createElement("h2");
mih2.innerHTML = "Titulo de pagina"

var mih3 = document.createElement("h3");
mih3.innerHTML = "Titulo de pagina"

footer.appendChild(mih1)
footer.appendChild(mih2)
footer.prepend(mih3)

//agregar un elemento como texto y modifica todo el texro
//footer.innerHTML = "<h1>Titulo del footer</h1>"