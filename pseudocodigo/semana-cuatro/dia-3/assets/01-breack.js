// for (var i = 0; i < 10; i++) {
//     console.log('primero: ' + i);
//     if (i == 5) {
//         console.log('segundo: ' + i);
//         break;
//     }
//     console.log('tercero: ' + i);
// }
// cont = 0;
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//         cont++;
//         if (cont == 5) {
//             break
//         }
//     }
// }
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 == 0 && cont < 5) {
//         console.log(i);
//         cont++;
//     }
// }
// contine
i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3) {
        continue;
    }
    n += i;
    console.log('i' + i);
    console.log(n)
}

var total = 0;
for (var i; i < 11; i++) {
    if (i % 5 == 00) {
        continue
    }
    console.log(i)
    total = total + i;
}
console.log(total)