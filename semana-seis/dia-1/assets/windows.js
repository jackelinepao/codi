// console.log(window.location.href);
// console.log("alto con scroll " + window.outerHeight);
// console.log("ancho con scroll " + window.outerWidth);
// console.log("alto sin scroll " + window.innerHeight);
// console.log("ancho con scroll " + window.innerWidth);

// console.log("Posicion scrollbar eje x " + window.pageXOffset);
// console.log("Posicion scrollbar eje y " + window.pageYOffset);

// var mensaje = window.prompt("hola")
// console.log("mensaje", mensaje);
// window.alert("desea eliminar");
// var ganamos = window.confirm("dewfaev")
// console.log(ganamos);
// var ventanita;

// function abrirventana() {
//     //target _self
//     ventanita = window.open("https://www.youtube.com", "_blank", "width=600", "height=400")
// }
// //abrirventana();

// function cerrarVentana() {
//     ventanita.close();
// }

// function incrementarTam() {
//     ventanita.resizeBy(20, 20);
// }

// function openWin() {
//     myWindow = window.open("", "", "width=100, height=100");
// }

// function resizeWin() {
//     myWindow.resizeBy(250, 250);
//     myWindow.focus();
// }

// function imprimir() {
//     window.print();
// }

// function detener() {
//     window.stop();
// }

var urld = prompt('Ingrese la url')
var target = prompt('Si desea que se abra en la misma paagina escriba "_self" de lo contario "_blank"')
var ancho = +prompt('Ingrese un ancho');
//alert(ancho)
var alto = +prompt('Ingrese un alto');
//alert(alto)

function crearVentana() {
    newVentana = window.open(urld, target, `width=${ancho},height=${alto}`)
        //alert("ddd")
}