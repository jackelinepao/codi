window.onload = () => {
    let btncreate = $('#crearRestaurant');
    let btnget = $('#obtenerRestaurant');
    function inicializaFirebase() {
        let firebaseConfig = {
            apiKey: "AIzaSyCr3NGbh0oDV7Vp8mG4-uqJeE5CoZ4n2zw",
            authDomain: "proyecto-1f83a.firebaseapp.com",
            databaseURL: "https://proyecto-1f83a.firebaseio.com",
            projectId: "proyecto-1f83a",
            storageBucket: "",
            messagingSenderId: "1073254878988",
            appId: "1:1073254878988:web:b45c9f5a123d6aa2dd0329"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    inicializaFirebase();
    function getRestaurantes() {
        var referencia = firebase.database().ref("Restaurante");
        referencia.on("value", data => {//once
            //console.log(data);
            data.forEach(fila =>{
                console.log(fila.key);
                console.log(fila.val().Nombre);
                console.log(fila.val().Direccion)
            })
        })
    }
    //getRestaurantes();

    let crearRestaurant  = () =>{
        let nombre = "Cevichelas 2";
        let direccion = "Av. EEUU N° 201";

        let referecia = firebase.database().ref("Restaurante");

        const NUEVOKEY = referecia.push().key;

        referecia.child(NUEVOKEY).set(
            {
                Nombre: nombre,
                Direccion: direccion
            },
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    }
    btncreate.click(crearRestaurant);
    getRestaurantes();
}
