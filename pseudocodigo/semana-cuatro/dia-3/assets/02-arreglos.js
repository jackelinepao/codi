// var marcas = ['Hyundai', 'Toyota', 'Kia', 'Audi', 'Nissan']
// var vocales = [];
// vocales.push('a', 'e');
// vocales.pop(0);
// console.log(marcas[2]);
// console.log(marcas);
// marcas[3] = "Daewon";
// console.log(marcas);
// console.log(vocales);

// var elementos = marcas.length;

// for (var i = 0; i < marcas.length; i++) {
//     console.log(marcas[i])
// }

var numeros = [1, 3, 4, 5, 6, 7, 8, 2, 3];
console.log(numeros);
for (var i = 0; i < numeros.length; i++) {
    //numeros[i] = numeros[i] * numeros[i]
    numeros[i] = Math.pow(numeros[i], 2)
}
console.log(numeros);