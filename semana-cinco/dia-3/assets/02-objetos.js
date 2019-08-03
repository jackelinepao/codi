// var objvehiculo = {
//     marca: "Toyota",
//     modelo: "Corola",
//     color: "rojo",
//     anio: 2018,
//     mantenimientos: [{
//             fecha: "01-04-2019",
//             observaciones: "sin observaciones",
//             kilometraje: 9000
//         },
//         {
//             fecha: "02-05-2019",
//             observaciones: "se observo un raspon",
//             kilometraje: 10000
//         }
//     ],
//     mostrarMantenimientos: function() {
//         console.log(this);
//         for (var i = 0; i < this.mantenimientos.length; i++) {
//             console.log(`Mantenimiento ${[i]}
//                         se llevo a cabo el ${this.mantenimientos[i].fecha},
//                         con la siguiente obsercaion ${this.mantenimientos[i].observaciones}, tiene de kilometraje ${this.mantenimientos[i].kilometraje}`);

//         }
//     }
// }


// var mantenimientoAdicional = {
//     fecha: "02-05-2014",
//     observaciones: "estaba sucio",
//     kilometraje: 12000
// }
// objvehiculo.mantenimientos.push(mantenimientoAdicional)
// objvehiculo.mostrarMantenimientos();

// function Auto(marca, modelo, annio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.annio = annio;
// }
// var miAuto = new Auto("Eagle", "Talon TSi", 1993);
var objpersona = {
    nombre: "Maria",
    dni: "23545677"
}

var objCarritoCompras = {
    nombreDeUsuario: objpersona,
    productos: [{
            nombreProducto: "play2",
            cantidad: 1,
            precio: 900,
        },
        {
            nombreProducto: "tv",
            cantidad: 2,
            precio: 3000,
        }
    ],
    mostraProductos: function() {
        var total = 0;
        for (var i = 0; i < this.productos.length; i++) {
            console.log(`1.- producto: ${this.productos[i].nombreProducto}\n2.- cantidad: ${this.productos[i].cantidad}\n3.- precio: ${this.productos[i].precio}\n\n`);
            total = (this.productos[i].precio * this.productos[i].cantidad) + total

        }
        console.log(`su compra es por: ${total}`);

    }
}
console.log(objCarritoCompras);
objCarritoCompras.mostraProductos();


var cafe = "Latte";
var jugo = {
    ingrediente1: 'papaya',
    ingrediente2: 'papay2',
    ingrediente3: 'papaya3',
    ingrediente4: 'papaya4',

}

delete cafe;
delete jugo.ingrediente3;
console.log(jugo);
//no borra de la memoria