//bracket pair colorizer
let consulta = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let arreglo = [];
            for (let i = 0; i < 30; i++) {
                arreglo.push(i);
            }
            if(arreglo.length > 0){
                resolve(arreglo);   
            }else{
                reject("Ha ocurrido un error no se ha encontrado datos")
            }
            
        }, 3000);
    })
}
consulta().then(respuesta=>{
    console.log("exito" , respuesta);
}).catch(error=>{
    console.log("error", error)
})