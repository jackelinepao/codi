// // // let numerito = [9, 6, 4, ["x", "y", "z"], 100, 90, 60]
// // // let segundo = numerito[1]
// // // let primero = numerito[0]

// // // console.log(primero);
// // // console.log(segundo);
// // // let [uno, dos, tres, [xx, yy, zz], ...elresto] = numerito;
// // // console.log(uno);
// // // console.log(dos);
// // // console.log(tres);
// // // console.log(tres-uno);
// // // console.log(xx);
// // // console.log(yy);
// // // console.log(zz);
// // // console.log(elresto);

// // // console.log("------------OBJETOS DESTRUCTURADOS-----------");

// // // let cevichelas = {
// // //     id: 1,
// // //     precio: 30,
// // //     descripcion: "lorem ipsum",
// // //     componentes: ["item1", "item2"],
// // //     oferta: {
// // //         descuento: 5,
// // //         condicion: "sábado y domingo"
// // //     }
// // // }

// // // // let precio = cevichelas.precio;
// // // // let descripcion = cevichelas.descripcion;
// // // // console.log(precio);
// // // // console.log(descripcion);

// // // let{id, descripcion, precio:cuantoEsta} = cevichelas;
// // // console.log(id);
// // // console.log(descripcion);
// // // console.log(cuantoEsta);

// // // let {componentes:[pri, seg]} = cevichelas;
// // // console.log(pri);
// // // console.log(seg);
// // // let {oferta:{descuento:desc, condicion}} = cevichelas;
// // // console.log(desc);

// // // console.log(condicion);

// // // console.log("_____________________________________");

// // // //console.log(suma(10,20));

// // // let sumaFlecha = (a, b) => {
// // //     return a + b;
// // // }
// // // console.log((sumaFlecha(10,20)));

// // // let hola = (nombre)=>{
// // //     return `Hola ${nombre}`;
// // // }
// // // console.log(hola("Patrick"));
// // // let hola2 = (nombre)=>console.log(`Hola ${nombre}`)
// // // hola2("Maria");

// // // let cuadrado = numero => Math.pow(numero, 2)
// // // console.log(cuadrado(3));

// // // console.log("Hola");
// // // setTimeout(function(){
// // //     console.log("Chicos");
// // // }, 0)
// // // console.log("como estan");
// //  //callbacks
// //  let cuadrado = (numero, funcion)=>{
// //      funcion(numero*numero)
// //  }
// //  cuadrado(6,(respuesta)=>{
// //      console.log(respuesta);
     
// //  });


// // let BDalumnos = [
// //     {
// //         id: 1,
// //         nombre: "Roberto",
// //         edad: 30
// //     },
// //     {
// //         id: 2,
// //         nombre: "Pedro",
// //         edad: 25
// //     },
// //     {
// //         id: 3,
// //         nombre: "Maria",
// //         edad: 27
// //     }
// // ]

// // let getAlumnoById = (id, callback) => {
// //     for (let i = 0; i < BDalumnos.length; i++) {
// //         if(BDalumnos[i].id === id){
// //             callback(null, BDalumnos[i]);
// //             return;
// //         }
// //     }
// //     callback("No se encontro el alumno",null)
// // }
// // getAlumnoById(2,(error,objAlumno)=>{
// //     if(error){
// //         console.log(error);
        
// //     }else{
// //         console.log(objAlumno);
// //     }
// // })

let BDalumnosCod = [
    {
        id: 1,
        nombre: "Roberto",
        edad: 30
    },
    {
        id: 2,
        nombre: "Pedro",
        edad: 25
    },
    {
        id: 3,
        nombre: "Maria",
        edad: 27
    },
    {
        id: 4,
        nombre: "Juan",
        edad: 20,
    }
]
let cursos = [
    {
        alumnoId: 1,
        cursos: ["Python", "Diseño"]
    },
    {
        alumnoId: 2,
        cursos: ["Machine Learning", "Estructura de datos"]
    }
];

let getAlumnoCodById = (id, resul)=>{
    for (let i = 0; i < BDalumnosCod.length; i++) {
        if(BDalumnosCod[i].id === id){
            resul(null,BDalumnosCod[i]);
            return
        }
        
    }
    resul("no se encontros resultado")
}

let getCursosByAlumnoId = (id, result)=>{
    for (let i = 0; i < cursos.length; i++) {
        if(cursos[i].alumnoId === id){
            result(null, cursos[i])
            return;
        }
    }
    result("No existe cursos para el alumno")
}
id = 1;
getAlumnoCodById(id, (error, objAlumno) =>{
    if (error) {
        console.log(error);
    }else{
        getCursosByAlumnoId(id, (error, objCursos) =>{
            if(error){
                console.log(error);
            }
            else{
                console.log(`${objAlumno.nombre} tiene los siguientes cursos:`)
                objCursos.cursos.forEach(element => {
                    console.log(element)
                });
            }
            
        })
    }
})
