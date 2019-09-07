let alumnos = [
    {
        id: 1,
        nombre: "Maria Perez",
        edas: 17
    },
    {
        id: 2,
        nombre: "Mario Lopez",
        edas: 18
    },
    {
        id: 3,
        nombre: "Carlos Dueñas",
        edas: 21
    },
    {
        id: 4,
        nombre: "Maridel Quispe",
        edas: 19
    },
    {
        id: 5,
        nombre: "Jorge Flores",
        edas: 22
    },
    {
        id: 6,
        nombre: "Juan Pino",
        edas: 20
    },
    {
        id: 7,
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
//async await =>para convertir mi funcion a asincrona
let getAlumnoById = async(id) => {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
            return alumnos[i];
        }
    }
    throw "No se pudo encontrar a el alumno";
}

let getCursosByAlumnoId = async(id) =>{
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].idAlumno == id) {
            return cursos[i];
        }        
    }
    throw "El alumno no esta matriculado en ningun curso"
}
//indicara que mi variable no tome el valor hasta que la funcion retorne algo
let getDatos = async() => {
    let alumno = await getAlumnoById(1);
    let curso = await getCursosByAlumnoId(1);
    return [alumno, curso]
}

getDatos().then(([alumno, curso])=>{
    console.log(alumno);
    console.log(curso);
}).catch((error)=>{
    console.log(error);
})