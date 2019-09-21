let sumar = (a:number, b:number):number => {
    return a + b;
}
let sum:number = sumar(2, 2);
console.log(sum)

let mostrarData = (persona:any) =>{
    console.log(persona.nombre);
    console.log(persona.apellido)
}
mostrarData({nombre: "Patrick", apellido: "Rodriguez"});