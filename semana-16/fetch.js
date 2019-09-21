window.onload = function () {
    let getDates = document.getElementById("get_dates");
    let postDates = document.getElementById("post_dates");
    let name = document.getElementById("name");
    let direccion = document.getElementById("direc");
    getDates.onclick = function () {
        //con una peticion de tipo get
        fetch("https://goldcar-1552746238236.firebaseio.com/restaurantes.json")
        .then((respuesta)=>{
            return respuesta.json();
        }).then((respuestaJson)=>{
            console.log(respuestaJson);
        }).catch((error)=>{
            console.log(error);
        })
    }
    postDates.onclick = () => {
        let nomb = name.value;
        let direcc = direccion.value;
        let objRestaurante = {
            nombre : nomb,
            direccion : direcc,
        }
        let configuration = {
            method: 'POST',
            body: JSON.stringify(objRestaurante),
            headers: {'Content-Type':'application/json'}
        }
        fetch("https://goldcar-1552746238236.firebaseio.com/restaurantes.json", configuration)
        .then((respuesta)=>{
            return respuesta.json();
        }).then((respuestaJson)=>{
            console.log(respuestaJson);
        }).catch((error)=>{
            console.log(error);
            
        })
    }
}