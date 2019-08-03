// // var cont = 0
// // do {
// //     console.log("saludo " + cont);
// //     cont++;
// // } while (cont < 5);


// // var contador = 0;
// // var dia = '';
// // var num = 0;
// // do {
// //     num = +prompt('Ingrese un número:');
// //     if (num == 0) {
// //         dia = 'Lunes';
// //         console.log(dia);
// //     } else if (num == 1) {
// //         dia = 'Martes';
// //         console.log(dia);
// //     } else if (num == 2) {
// //         dia = 'Miercoles';
// //         console.log(dia);
// //     } else if (num == 3) {
// //         dia = 'Jueves';
// //         console.log(dia);
// //     } else if (num == 4) {
// //         dia = 'Viernes';
// //         console.log(dia);
// //     } else if (num == 5) {
// //         dia = 'Sabado';
// //         console.log(dia);
// //     } else if (num == 6) {
// //         dia = 'Domingo';
// //         console.log(dia);
// //     } else if (num == 10) {
// //         dia = 'Domingo';
// //         console.log('Fin del programa');
// //     } else {
// //         console.log('Error')
// //     }
// // } while (num != 10);

// //4.2 4.3 4.9 4.5
// var s = +prompt('Ingrese la cantidad de hamburguesas simples');
// var d = +prompt('Ingrese la cantidad de hamburguesas dobles');
// var t = +prompt('Ingrese la cantidad de hamburguesas triples');
// var ps = 20
// var pd = 25
// var pt = 28


// if (s >= 0) {
//     ts = s * ps
// }
// if (d >= 0) {
//     td = d * pd
// }
// if (t >= 0) {
//     tt = t * pt
// } else {
//     console.log('No existe el pedido')
// }
// totalpagar = ts + td + tt
// totalpagarct = totalpagar + (totalpagar * 0.05)
// console.log('Total a pagar: S/.' + totalpagar)
// console.log('Total a pagar con tarjeta de credito: S/.' + totalpagarct)

// //4.3
// var menorcero = 0;
// var mayorcero = 0;
// var igualcero = 0;
// for (var i = 0; i < 10; i++) {
//     num = parseFloat(prompt('Ingrese un número'));
//     console.log(num)
//     if (num < 0) {
//         menorcero++
//     } else if (num > 0) {
//         mayorcero++
//     } else if (num == 0) {
//         igualcero++
//     }
// }
// console.log('menor que 0: ' + menorcero);
// console.log('mayor que 0: ' + mayorcero);
// console.log('igual a 0: ' + igualcero);
//4.9
ahorro = 0
for (var i = 0; i <= 365; i++) {

    console.log(ahorro)
}