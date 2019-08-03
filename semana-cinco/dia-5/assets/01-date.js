var num = new Number();
var fecha = new Date();
console.log(fecha)
console.log(fecha.getFullYear());
//Imprimir el mes de la fecha en un numero entero [0-11]
console.log(fecha.getMonth());
//dia en el mes
console.log(fecha.getDate())
    //dia en la semana
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

// console.log(`Modificar el año`);
// fecha.setFullYear(2030);
// fecha.setMonth(2);
// fecha.setDate(5);
// fecha.setHours(0);
// fecha.setMinutes(39);
// fecha.setSeconds(50);
// fecha.setMilliseconds(400);
// console.log(fecha)

//Formas de instanciar un objeto de tipo fecha
//devueleve la fecha actual del hordenador (front end)
var mifecha = new Date();
//devuelve la fecha indicada
var mifecha2 = new Date(2018, 09, 08);
//devuelve la fecha comppleta
var mifecha3 = new Date(1992, 09, 08, 02, 10, 45);
//milisegundos
var ayer = new Date(2019, 05, 27);
var navidad = new Date(2019, 11, 24)
console.log(mifecha - ayer)
var milisegundos = navidad - mifecha;
var segundos = milisegundos / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
var semanas = dias / 7;
console.log(semanas)
console.log((navidad - mifecha) / 604800016.56);