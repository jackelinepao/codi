// function multiplicar(...numeros) {
//     var resultado = 1;
//     for (var i = 0; i < numeros.length; i++) {
//         resultado = resultado * numeros[i];

//     }
//     return resultado
//         //console.log(`El resultado de la multiplicación será: ${resultado}`)
// }
// var multiplicacion = multiplicar(2, 3, 6, 10, 20, 2);

// console.log(multiplicacion * 100);
// console.log(multiplicar(9, 9))


// function menu() {
//     alert(`//Opciones 
//                 1.- Suma
//                 2.- Resta
//                 3.-Salir`)

// }

// function calculadora(operacion) {
//     var n1 = +prompt("Ingrese el primer número");
//     var n2 = +prompt("Ingrese el segundo número");
//     if (operacion == "sumar") {
//         alert(`La suma de los valores será ${ n1 + n2 }`);
//     } else {
//         alert(`La resta de los valores será ${ n1 - n2 }`);
//     }
// }
// do {
//     menu();
//     var opcion = +prompt("Elija una opción indicada anteriormente");
//     if (opcion == 1) {
//         calculadora("sumar");
//     }
//     if (opcion == 2) {
//         calculadora("restar")
//     }
// } while (opcion != 3)
function menu() {
    alert(`Opciones:
                    1.- rojo
                    2.- amarillo
                    3.- violeta`);
}

function resistencia(color1, color2, color3) {
    var br = 2;
    var ba = 4;
    var bv = 7;
    if (color1 == 1 && color2 == 0 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${br}`)
    } else if (color1 == 2 && color2 == 0 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${ba}`)
    } else if (color1 == 3 && color2 == 0 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${bv}`)
    } else if (color1 == 1 && color2 == 2 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${br}${ba}`)
    } else if (color1 == 1 && color2 == 3 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${br}${bv}`)
    } else if (color1 == 2 && color2 == 1 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${ba}${br}`)
    } else if (color1 == 2 && color2 == 3 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${ba}${bv}`)
    } else if (color1 == 3 && color2 == 1 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${bv}${br}`)
    } else if (color1 == 3 && color2 == 2 && color3 == 0) {
        console.log(`Su resistencia tiene el valor de ${bv}${ba}`)
    } else if (color1 == 1 && color2 == 2 && color3 == 3) {
        console.log(`Su resistencia tiene el valor de ${br}${ba}${bv}`)
    } else if (color1 == 1 && color2 == 3 && color3 == 2) {
        console.log(`Su resistencia tiene el valor de ${br}${bv}${ba}`)
    } else if (color1 == 2 && color2 == 1 && color3 == 3) {
        console.log(`Su resistencia tiene el valor de ${ba}${br}${bv}`)
    } else if (color1 == 2 && color2 == 3 && color3 == 1) {
        console.log(`Su resistencia tiene el valor de ${ba}${bv}${br}`)
    } else if (color1 == 3 && color2 == 1 && color3 == 2) {
        console.log(`Su resistencia tiene el valor de ${bv}${br}${bq}`)
    } else if (color1 == 3 && color2 == 2 && color3 == 1) {
        console.log(`Su resistencia tiene el valor de ${bv}${ba}${br}`)
    } else if (color1 > 3 || color2 > 3 || color3 > 3) {
        console.log('error')
    }
};

menu();
var opcion1 = +prompt("Elija un color");
var opcion2 = +prompt("Elija un color");
var opcion3 = +prompt("Elija un color");
resistencia(opcion1, opcion2, opcion3)

function menu() {
    alert(`Elija tres color`)

}

var resistencia = [];
for (i = 0; i < 3; i++) {
    menu();
    var color = prompt('Ingrese el color');
    resistencia[i] = colores(color)
}
alert(`La resistencia sera de ${resistencia}`);