/*console.log('jjjjjjj')
console.table(["apples", "oranges", "bananas"]);
var frutas = ["apples", "oranges", "bananas"];
console.log(frutas);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName", "lastName"]);

var dni = 76763626,
    ec, genero = "m";
console.log(dni, ec, genero)

//tipos de datos / numericos
var numero = 20;
var decimal = 3.5;
var exponencial = 10e5;

console.log('Número entero: ' + numero, 'Número decimal: ' + decimal, 'Número exponencial: ' + exponencial)

//strings
var miTexto = "lwsesdwqefokdjd";
var char = 'e';
console.log('"string:" ' + miTexto + "\n", 'caracter: ' + char);

var vtrue = true;
var vfalse = false;
console.log(vtrue)

var n1 = 5;
var n2 = 6;
console.log(n2 + n1)

for (i = 0; i < 9; i++) {
    console.log(i)
}
for (i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}
var num = 65
if (num % 2 == 0) {
    console.log('es par')
} else {
    console.log('no es par')
}
console.log(`"mi residuo es" ${num}`)
var operacion = 1.2 * 10 * 3 / 10
var operacions = 1.2 * 3
console.log(operacions)
console.log(`redondear ${Math.round(operacions * 10)/10}`)
console.log(operacion)



var goles = 1;
goles += 1;
var temperatura = 10;
temperatura -= 1;
console.log('goles: ' + goles, 'temperatura: ' + temperatura);
var numeros = 8;
var texto = "dddddddddddd";
var f = true;
console.log(typeof(numeros));
console.log(typeof(texto));
console.log(typeof(f));
console.log(8 * null);
console.log('5' - 2);
console.log('5' + 2);
console.log(false == 0);*/

//primer ejercicio
var fn = prompt("Ingrese su año de nacimiento");
var fecha = new Date();
var year = fecha.getFullYear();
var edad = year - fn
console.log('La edad del trabajador es: ' + edad);



var costo = prompt("Ingre el costo");
var cant = prompt("Ingrese el uso");
var a = prompt("Ingrese A");
var l = prompt("ingrese L");
var h = prompt("Ingrse H");
volumenp = a * l * h;
var total = volumenp * costo * cant;

console.log("el pago por " + volumenp + " metros cubicos y " + cant + " veces de llenado es: " + total);


var radio = prompt("Ingrese el radio");
var altura = prompt("ingrese la atura");

var volumen = Math.PI * radio ^ 2 * altura;
console.log('El área del cilindro es: ' + volumen);

//3

var gcelcius = prompt("Ingreses los grados celsius:");
var gfarenheit = (gcelcius * 1.8 * 10 / 10) + 32;
console.log('Celsius equivalen a ' + gfarenheit + ' farenheit');

//4
var leche = 'leche'

//tiny url
console.log(`"mi residuo es" ${num}`)