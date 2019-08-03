function Hola() {
    console.log('aaaa')
}
Hola();
//'use stict';
function potencia(num1, num2) {
    var resultado = num1 ** num2;
    console.log(`El resultado será: ${resultado}`)
}
potencia(2, 22)

function arreglo(array) {
    console.log(array)
}
var otroArreglo = [1, 2, 3, 4]
arreglo(otroArreglo)
var mifuncion = function() {
    console.log("Texto alternativo")
}
mifuncion();

function vuelto(mp, cr) {
    vuelto = cr - mp
    console.log(`El recibido es por S/. ${cr} el cliente pago por S/. ${mp} y su vuelto es S/. ${vuelto}`)
}
var pagar = parseFloat(prompt('Ingrese el monto a pagar'))
var recibido = parseFloat(prompt('Ingrese el monto que recibio del cliente'))
vuelto(pagar, recibido)

function vuelto2(arr, cr2) {
    suma = 0
    for (var i = 0; i < arr.length; i++) {
        suma = suma + arr[i]

    }
    vuelto2 = cr2 - suma
    console.log(`El recibido es por S/. ${cr2} el cliente pago por S/. ${suma} y su vuelto es S/. ${vuelto2}`)
}
var arre = [23, 2, 5]
var recibido2 = parseFloat(prompt('Ingrese el monto que recibio del cliente'))
vuelto2(arre, recibido)



aplicacion de consola.net core