window.onload = () => {
    let divMapa = document.getElementById("mapa");
    let centro = {lat:-14, lng:-71}
    let Mapa = new gogle.maps.Map(divMapa, {
        center: centro,
        zoom: 8
    });

}