var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorador(target, key) {
    console.log("Ya pero después me llevas a comer " + key);
}
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y me voy a consumir unas cevichelas`);
    }
}
__decorate([
    decorador
], Persona.prototype, "saludar", null);
let alumnoCodigo = new Persona("Jorge", "Garnica");
alumnoCodigo.saludar();
