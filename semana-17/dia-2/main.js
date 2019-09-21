//https://zeit.co/
window.onload = () => {
  var mapGoogle;
  let divMapa = document.getElementById("mapa");

  function inicializandoFirebase() {
    var firebaseConfig = {
      apiKey: "AIzaSyCUD4CfETbEZZlRBkNQ5Q7sJQqVL9xpr0I",
      authDomain: "parking-76d68.firebaseapp.com",
      databaseURL: "https://parking-76d68.firebaseio.com",
      projectId: "parking-76d68",
      storageBucket: "",
      messagingSenderId: "963417247424",
      appId: "1:963417247424:web:2768744b06014fb49da725"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  inicializandoFirebase();

  function configurarMaps() {
    mapGoogle = new google.maps.Map(divMapa, {
      center: { lat: -16, lng: -71 },
      zoom: 9
    });
    listenerMaps();
  }

  let crearNuevoParqueo = (lat, lng) => {
    $("#modal").modal("show");

    let create = $("#create");

    create.click(() => {
      let nombre = $("#name").val();
      let direccion = $("#direction").val();
      let descripcion = $("#description").val();
      let referencia = firebase.database().ref("parking");
      const NUEVO_ID = referencia.push().key;
      referencia.child(NUEVO_ID).set(
        {
          nombre: nombre,
          descripcion: descripcion,
          direccion: direccion,
          lat: lat,
          lng: lng
        },
        error => {
          if (error) {
            console.log(error);
          }
        }
      );
    });
  };
  let listenerMaps = () => {
    mapGoogle.addListener("click", coords => {
      let lat = coords.latLng.lat();
      let lng = coords.latLng.lng();
      console.log(lat, lng);
      crearNuevoParqueo(lat, lng);
    });
  };

  function imprimirMarcadores(arregloMarcadores) {
    arregloMarcadores.forEach(
      ({ nombre, direccion, descripcion, lat, lng }) => {
        let miLatLng = {
          lat: lat,
          lng: lng
        };
        console.log(nombre, direccion);
        let marcador = new google.maps.Marker({
          position: miLatLng,
          icon: {
            url: "./parking.png",
            scaledSize: new google.maps.Size(50, 50)
          },
          title: nombre
        });

        let info = new google.maps.InfoWindow({
          content: `<h4>${nombre}</h4>
                            </br>
                            <strong>Dirección:</strong>${direccion}
                            </br>
                            <strong>Descripción:</strong>${descripcion}`
        });

        marcador.addListener("click", () => {
          info.open(mapGoogle, marcador);
        });

        marcador.setMap(mapGoogle);
      }
    );
  }
  function obtenerParking() {
    let referencia = firebase.database().ref("parking");
    referencia.on("value", data => {
      let arregloData = [];
      data.forEach(espacio => {
        // console.log(espacio);
        // console.log(espacio.val().nombre)
        // console.log(espacio.val().direccion)
        // console.log(espacio.val().descripcion)
        // console.log(espacio.val().lat)
        // console.log(espacio.val().lng)
        let objTemporal = {
          nombre: espacio.val().nombre,
          descripcion: espacio.val().descripcion,
          direccion: espacio.val().direccion,
          lat: espacio.val().lat,
          lng: espacio.val().lng
        };
        arregloData.push(objTemporal);
        imprimirMarcadores(arregloData);
      });
    });
  }
  obtenerParking();
  configurarMaps();
};
