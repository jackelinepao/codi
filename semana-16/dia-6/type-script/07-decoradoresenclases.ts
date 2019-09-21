function deco(texto:string){//target=>clase
    return function(target){
        target.prototype.saludar = function(){
            console.log("Holi " + texto);
        }
        target.prototype.anio = new Date().getFullYear();
    }
}
@deco("como estan :D")
class Promocion {
    integrantes:Array<string>;
    nombre:string;

    constructor(integrantes:Array<string>, nombre:string){
        this.integrantes = integrantes;
        this.nombre = nombre;
    }

    imprimirIntegrantes(){
        this.integrantes.forEach((integrante:String)=>{
            console.log(this.integrantes)
        });
    }
}


let codigo6:Promocion = new Promocion(["alumno 1","alumno 2","alumno 3","alumno 4", "alumno 5"], "los cevichelas");

codigo6.saludar();
console.log(codigo6.anio);
