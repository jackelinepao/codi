function locorrecto(target){
    return class extends target{
        nombre = "Sr. James";
        apellido = "Bond";

        saludo(){
            return `Buen día yo soy el ${this.nombre} ${this.apellido}`
        }
    }
}

@locorrecto
class Persona{
    nombre:string
    apellido:string

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludo(){
        return `Holi me llamo ${this.nombre} ${this.apellido} XD que tal`
    }
}

let Personita:Persona = new Persona("Patrick", "Rodriguez");
console.log(Personita.saludo());
