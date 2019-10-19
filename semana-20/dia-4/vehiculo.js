// class Vehiculo {
//     constructor(tipo, marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }
//     ImprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
        
//     }
// }
// class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }
// module.exports = {
//     Vehiculo: Vehiculo,
//     Avion: Avion
// }
// Ya utilizando ECMAscript 6
//3.
// export class Vehiculo {
//     constructor(tipo, marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }
//     ImprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
        
//     }
// }
// export class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }
// export class Barco extends Vehiculo{
//     constructor(){
//         super('Barco 747', 'Bsddfdsf');
//     }
// }
//4.Exportando algo por default
// export default class Vehiculo {
//     constructor(tipo, marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }
//     ImprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
        
//     }
// }
// export class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }
// export class Barco extends Vehiculo{
//     constructor(){
//         super('Barco 747', 'Bsddfdsf');
//     }
// }
//5. utilizando *
export class Vehiculo {
    constructor(tipo, marca){
        this.tipo = tipo;
        this.marca = marca
    }
    ImprimirVehiculo(){
        console.log(`Es un ${this.tipo} de marca ${this.marca}`);
        
    }
}
export class Avion extends Vehiculo{
    constructor(){
        super('Boeing 747', 'Boeing');
    }
}
export class Barco extends Vehiculo{
    constructor(){
        super('Barco 747', 'Bsddfdsf');
    }
}