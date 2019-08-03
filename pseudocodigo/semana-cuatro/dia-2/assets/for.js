// var array = [1, 2, 3]
// for (var i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }
// i = i + 1
// i + = 1
// i++
//debugger;

var suma = 0;
for (var i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        //console.log(i);
        suma = suma + i
    }
}
console.log('suma de impares es: ' + suma)
    // numi = +prompt('Ingrese un número')
    // numf = +prompt('Ingrese un número')
    // var contpares = 0
    // var contimpares = 0
    // for (var i = numi; i <= numf; i++) {
    //     if (i % 2 != 0) {
    //         //console.log(i);
    //         contimpares++;
    //     } else {
    //         contpares++;
    //     }
    // }
    // console.log('Total de números impares: ' + contimpares)
    // console.log('Total de números pares: ' + contpares)

numi = +prompt('Ingrese un número')
numf = +prompt('Ingrese un número')
var contpares = 0
var contimpares = 0
for (var i = numf; i >= numi; i--) {
    if (i % 5 == 0) {
        //console.log(i);
        console.log(i);
    }
}