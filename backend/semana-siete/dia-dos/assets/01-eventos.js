window.onload = function(){
    //alert("entro")
    var body = document.querySelector('body');
    var lapicero = document.getElementById('lapicero');
    ///body.style.cursor = "pointer"
    body.style.cursor = "url('./assets/pencil.svg') 5 32, auto"
    body.onmousemove = function(e){
        console.log(`posicion en x es: ${e.offsetX}`);
        console.log(`posicion en y es: ${e.offsetY}`);
        // lapicero.style.left = `${e.offsetX}px`
        // lapicero.style.top = `${e.offsetY-32}px`;
        var punto = document.createElement("div")
        punto.style.width = "2px";
        punto.style.height = "2px";
        punto.style.borderRadius = "50%"
        punto.style.background = "black";
        punto.style.position = "absolute";
        punto.style.left = `${e.offsetX}px`
        punto.style.top = `${e.offsetY}px`
        punto.style.boxShadow = "0 0 10px red"
        body.appendChild(punto)
    }
    
}