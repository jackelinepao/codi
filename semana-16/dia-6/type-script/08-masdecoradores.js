var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function locorrecto(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.nombre = "Sr. James";
            this.apellido = "Bond";
        }
        saludo() {
            return `Buen día yo soy el ${this.nombre} ${this.apellido}`;
        }
    };
}
let Persona = class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludo() {
        return `Holi me llamo ${this.nombre} ${this.apellido} XD que tal`;
    }
};
Persona = __decorate([
    locorrecto
], Persona);
let Personita = new Persona("Patrick", "Rodriguez");
console.log(Personita.saludo());
