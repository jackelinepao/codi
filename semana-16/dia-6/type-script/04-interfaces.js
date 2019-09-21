;
var persona2 = {
    nombre: "ssss",
    apellido: "aaaa",
    dni: 70973736
};
var mostrarDatos = function (persona) {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla) {
        console.log(persona.talla);
    }
};
var objPersona = {
    nombre: "Patrick",
    apellido: "Rodriguez",
    dni: 39872721,
    talla: 1.60
};
mostrarDatos(objPersona);
