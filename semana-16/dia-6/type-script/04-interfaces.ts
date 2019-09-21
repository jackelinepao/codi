// class Persona {
//     nombre = "";
//     apellido = "";
// }
interface iPersona{
    nombre:string,
    apellido:string,
    dni:number,
    talla?:number //? propiedad opcional
};

let persona2:iPersona = {
    nombre: "ssss",
    apellido: "aaaa",
    dni: 70973736
}

let mostrarDatos = (persona:iPersona) => {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if(persona.talla){
        console.log(persona.talla);
        
    }
    
}
let objPersona:iPersona = {
    nombre: "Patrick",
    apellido: "Rodriguez",
    dni: 39872721,
    talla: 1.60
}

mostrarDatos(objPersona);
