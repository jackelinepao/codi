// var arreglo = [0, 5, 10, 1000];

// var num = +prompt("Ingrese un número")

// for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= i; j++) {
//         console.log(j)
//     }
//     console.log('\n');
// }

var objPerro = {
    raza: 'Poodle',
    tamanio: 'Chiquito',
    color: 'Blanquito',
    caracter: 'Bullicioso',
    edad: 11,
    hobbies: ['masticar zapatos', 'perseguir gatos', 'dormir']
};
var objPerro2 = {
    raza: 'Pastor Aleman',
    tamanio: 'Grande',
    color: 'Negro con cafe',
    genero: 'Hembra'
}
console.log(objPerro.hobbies[1]);
console.log(objPerro2.raza);
var jauria = [objPerro, objPerro2];
console.log(jauria)

var objPersona1 = {
    nombre: 'Marta',
    apellidos: 'Rojas',
    edad: 29,
    dni: 767687987,
    domicilio: 'Cerro Colorado',
    profesion: 'Medico',
    telefono: '252553'
}
var objPersona2 = {
    nombre: 'Feddy',
    apellidos: 'Polarr',
    edad: 10,
    dni: 767643987,
    domicilio: 'Cayma',
    profesion: 'Chef',
    telefono: '2525549'
}
var personas = [];
personas.push(objPersona1);
personas.push(objPersona2);

for (i = 0; i < personas.length; i++) {
    alert(`${personas[i].nombre} tiene el siguiente DNI: ${personas[i].dni}`)
    var nuevoDni = prompt('Ingrese su nuevo DNI');
    personas[i].dni = nuevoDni
    var Genero = prompt('El genero de la persona es:')
    personas[i].genero = Genero;
}
console.log(personas);