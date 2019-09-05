// var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     switch (xhr.readyState){
//         case 4:
//             productos = JSON.parse(xhr.responseText)
//             productos.forEach(element => {
//                 console.log(element)
//             });
//             console.log("____________________________\n\n\n")
//             let mayor500 = productos.filter((producto) =>{
//                 return producto.price_prod > 500
//             })
//             mayor500.forEach(item => {
//                 console.log(item)
//             });
//             console.log("____________________________\n\n\n")
//             let encontradoprod = productos.find((producto) =>{
//                 return producto.price_prod == 555.00
//             })

//             console.log(encontradoprod);

//             let promesa = () => {
//                 return new Promise((resolve, reject)=>{
//                     setTimeout(()=>{
//                         reject("algo ha pasado")
//                     },5000)
//                 })
//             }
//             promesa().then(respuesta=>{
//                 console.log("exito");z
                
//             }).catch(error=>{
//                 console.log("error" + error);
                
//             })
            
//     }
//   };
//   xhr.open("GET", "http://5d4b6ada00dbb10014879b0f.mockapi.io/productos", true);
//   xhr.send();


//   let alumnos = [
//       {id:1, nombre:"Juan", edad: 20},
//       {id:2, nombre:"Felipe", edad: 25},
//       {id:3, nombre:"Pedro", edad: 22},
//       {id:4, nombre:"Maria", edad: 30}
//   ]
//   let mayors20 = alumnos.filter(alumno =>{
//       return alumno.edad >25
//   })
//   mayors20.forEach(element => {
//       console.log(element)
//   });

//   let encontrado = alumnos.find((alumno)=>{
//     return alumno.edad === 25
//   })
//   console.log(encontrado);
  
//   let numeros = [2,4,4,2,43,21,33]
//   let mitades = numeros.map((numero) => {
//       return numero / 2
//   })
//   let raiz = numeros.map((elemento)=>{
//       return Math.sqrt(elemento)
//   })
//   console.log(mitades);
//   console.log(raiz);
  

window.onload = () =>{
    let traerDatos = () => {
        return new Promise((resolve, reject)=>{
            $.ajax({
                type: "GET",
                url: "https://5d4b6ada00dbb10014879b0f.mockapi.io/empleados",
                timeout: 1000,
                data: null,
                dataType: "JSON",
                success: function (response) {
                    resolve(response)
                },
                error: function(error){
                    reject(error)
                },
                beforeSend:function(){
                    console.log("buscandoooo...");
                    
                }
            });
        })
    }
    let promesa = traerDatos();
    console.log(promesa + '\n\n\n');
    
    promesa.then(respuesta=>{
        console.log("exito", respuesta)
    }).catch(error => {
        console.log("error", error);
        
    })
}