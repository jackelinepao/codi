// function Auto(marca, modelo, annio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.annio = annio;
// }
// var miAuto = new Auto("Eagle", "Talon TSi", 1993);
// console.log(miAuto)

// function persona(nombre, edad, dni, genero, sueldo = 700) {
//     this.nombre = nombre,
//         this.edad = edad,
//         this.dni = dni,
//         this.genero = genero,
//         this.sueldo = sueldo
// }
// var persona1 = new persona("Maria", 23, "44555554", "femenino");
// console.log(persona1)

// function persona3(nombre1, edad1, dni1, genero1, sueldo1 = 900) {
//     var sueldo = sueldo1;
//     var objPersona = {
//         nombre: nombre1,
//         edad: edad1,
//         dni: dni1,
//         genero: genero1,
//         verPersona: function() {
//             console.log(`nombre: ${this.nombre},\nedad: ${this.edad}\ndni: ${this.dni}\ngenero: ${this.genero},\nsueldo: ${sueldo}`)
//         },
//         cambiarGnero: function(nuevoGenero) {
//             this.genero = nuevoGenero;
//         },
//         cambiarNombre: function(nuevoNombre) {
//             this.nombre = nuevoNombre;
//         },
//         cambiarSueldo: function(nuevoSuledo) {
//             sueldo = nuevoSuledo;
//         }
//     }
//     return objPersona;
// }
// var maria = persona3("Maria", 23, "44555554", "femenino");
// maria.sueldo = 800;
// console.log(maria);
// maria.cambiarGnero("mujer");
// maria.cambiarNombre("Mario");
// maria.cambiarGnero("masculino")
// maria.verPersona();
// maria.cambiarSueldo(400);

// var arreglo = [1, 3, 4, 5, 6, 6, 6];
// arreglo.splice(3)
// console.log(arreglo)

// //encapsulamiento


function pabellon(id, nombre, nro_filas, nro_col) {
    var objpabellon = {
        id: id,
        nombre: nombre,
        capacidad: nro_filas * nro_col,
        nro_filas: nro_filas,
        nro_col: nro_col,
        nichos: [{
            idn: 1,
            nro: 2,
            precio: 3000,
            estado: "libre"
        }, {
            idn: 3,
            nro: 4,
            precio: 3550,
            estado: "ocupado"
        }],
        venderNicho: function(idnicho) {
            for (var h = 0; h < this.nichos.length; h++) {
                if (idnicho == this.nichos[h].idn && this.nichos[h].estado == "libre") {
                    console.log("nichoVendido");
                    this.nichos[h].estado = "ocupado";
                    break
                } else {
                    console.log("error");
                }
            }
        },
        consultarNichosLibres: function() {
            var cont = 0;
            for (var i = 0; i < this.nichos.length; i++) {
                if (this.nichos[i].estado == "libre") {
                    cont++;
                }
            }
            console.log(cont);
        },
        liberarPabellon: function() {
            this.nichos = [];
        },

        replobarPabellon: function() {
            this.liberarPabellon;
            for (var j = 1; j <= this.capacidad; j++) {
                // var objNicho = {
                //     idn: j,
                //     nro: j,
                //     precio: 0,
                //     estado: "libre"
                // }
                // this.nichos.push(objNicho)
                this.nichos[j] = {
                    idn: j,
                    nro: j,
                    precio: 0,
                    estado: "libre"
                }

                console.log(`${this.nichos[j].idn}, ${this.nichos[j].nro}, ${this.nichos[j].precio}, ${this.nichos[j].estado}`)
            }
            //console.log(this.nichos)
        },

    }
    return objpabellon;
}
var jorge = pabellon(1, "San Jorge", 4, 5);
console.log(jorge);
jorge.consultarNichosLibres();
jorge.venderNicho(1);
jorge.venderNicho(3);
jorge.liberarPabellon();
jorge.replobarPabellon();