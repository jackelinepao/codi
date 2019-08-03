// var grupoA = ['Bolivia', 'Brasil', 'Perú', 'Venezuela'];
// var goles = [1, 3, 2, 0];
// var estrellas = ['a', 'b', 'c', 'd']
// for (i = 0; i < grupoA.length; i++) {
//     console.log(grupoA[i] + goles[i] + estrellas[i])
// }
// var articulo = ['El', 'El', 'La']
// var person = ['Sr. Garnica', 'Sr. Rodriguez', 'Srta. Azucena'];
// var profesion = ['ingeniero', 'ingeniero', 'psicologa'];
// var edad = [27, 26, 40];
// for (i = 0; i < person.length; i++) {
//     //console.log(articulo[i] + ' ' + person[i] + ' tal tiene ' + edad[i] + ' años y es ' + profesion[i]);
//     console.log(`${articulo[i]} ${person[i]} tal tiene ${edad[i]} años y es ${profesion[i]}`)
// }

// var numeros = [9, 8, 2, 15, 8, 7, 6, 7, 8, 2, 1];
// // for (var i = numeros.length - 1; i >= 0; i--) {
// //     console.log(numeros[i])
// // }
// for (var i = numeros.length - 1; i >= numeros.length - 5; i--) {
//     console.log(numeros[i])
// }
// var pal = 'pizza';
// var n = '';
// for (var i = pal.length - 1; i >= 0; i--) {
//     //console.log(pal[i]);
//     n += pal[i];
// }
// console.log(n);



// //matrices
// var matriz1 = [
//     [1, 8, 4],
//     [3, 2, 5],
//     [8, 1, 9]
// ];
// var matriz2 = [
//     [3, 1, 2],
//     [4, 3, 1],
//     [0, 2, 1]
// ];
// var matrizr = [];
// for (var i = 0; i < matriz1.length; i++) {
//     matrizr[i] = []
//     for (var j = 0; j < matriz1[i].length; j++) {
//         matrizr[i][j] = []
//         matrizr[i][j] = matriz1[i][j] + matriz2[i][j]
//     }
// };
// var matriz11 = [
//     [1, 8, 4],
//     [3, 2, 5],
//     [8, 1, 9]
// ];
// var matriz12 = [
//     [3, 1],
//     [4, 3],
//     [2, 1],
// ];
// matrizr2 = [];
// for (var i = 0; i < matriz1.length; i++) {
//     matrizr[i] = []
//     for (var j = 0; j < matriz11[i].length; j++) {
//         matrizr2[i][j] = []
//         matrizr2[i][j] += matriz1[i][j] * matriz2[i][j]
//     }
// };
// console.log(matrizr)
var matriz = [
    [5, 6, 3],
    [1, 2, 4]
];
mt = [];
for (var i = 0; i < matriz.length; i++) {
    mt[i] = []
    for (var j = 0; j < 2; j++) {
        for (var h = 0; h < 3; h++)
            mt[h][j] = matriz[j][h];
    }
    for (var j = 0; j < 3; j++) {
        for (var h = 0; h < 2; h++)
            console.log(matriz[j][h]);
    }
}
//resultado []