//copiar objetos v8 emac

var gato = {
    nombre: 'Salem',
    color: 'negro'
};
var gato2 = {...gato };
gato2.color = "blanco";
console.log(gato);
console.log(gato2);
var auto = {
    motor: '6 cilindros',
    cambios: 'manual',
    suspencion: 'hidaulica',
    asientos: 'tela'
}

function returnAuto(auto) {
    return {...auto, asientos: 'cuero' }
}
var autoNuevo = returnAuto(auto);
console.log(autoNuevo)

console.log(Object.keys(auto));