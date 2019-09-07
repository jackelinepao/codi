let alumnos = [
    {
        id: 1,
        nombre: "Maria Perez",
        edas: 17
    },
    {
        id: 1,
        nombre: "Mario Lopez",
        edas: 18
    },
    {
        id: 1,
        nombre: "Carlos Dueñas",
        edas: 21
    },
    {
        id: 1,
        nombre: "Maridel Quispe",
        edas: 19
    },
    {
        id: 1,
        nombre: "Jorge Flores",
        edas: 22
    },
    {
        id: 1,
        nombre: "Juan Pino",
        edas: 20
    },
    {
        id: 1,
        nombre: "Julio Pinto",
        edas: 27
    }
]

let cursos = [
    {
        idAlumno: 1,
        cursos: ['HTML', 'JS', 'Ionic']
    },
    {
        idAlumno: 2,
        cursos: ['WebPack', 'MongoDB', 'Firebase']
    }
]

let getAlumnoById = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for (let i = 0; i < alumnos.length; i++) {
                if(alumnos[i].id === id){
                    resolve(alumnos[i]);
                    return;
                }
            }
            reject("No se encontro ningun alumno con id" + id);
        },2500)
    })
}

let getCursoByAlumnoId = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for (let i = 0; i < cursos.length; i++) {
                if (cursos[i].idAlumno === id) {
                    resolve(cursos[i]);
                    return;
                }
            }
            reject("Se encontro alumno pero no tiene cursos")
        },2000)
    })
}

// getAlumnoById(1).then((objAlumno)=>{
//     console.log(objAlumno);
//     getCursoByAlumnoId(objAlumno.id).then(({cursos})=>{
//         //cursos.forEach(element => {
//             cursos={cursos}.cursos
//             cursos.forEach(element => {
//                 console.log(element);    
//             });
//         //});
//     }).catch((error)=>{
//         console.log(error);
//     })
// }).catch((error)=>{
//     console.log(error);
// })

getAlumnoById(1).then((objAlumno)=>{
    console.log(objAlumno);
    return getCursoByAlumnoId(1);
}).then(({cursos})=>{
    cursos={cursos}.cursos
    cursos.forEach(element => {
        console.log(element);    
    });
}).catch((error)=>{
    console.log(error)
})