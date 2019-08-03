window.onload = function(){
    var input = document.getElementById('email');
    var captchat =  document.getElementById('captcha');
    var imagen = document.getElementById('imagen');
    input.onkeyup = function (e) {
        console.log("una tecla ha sido pulsado")
        console.log("tecla: " + e.key);
        console.log("codigo de tecla" + e.keyCode);
        console.log("keycode transformado: " + String.fromCharCode(e.keyCode));
        console.log(this.value);
        
        
    }
    input.onkeypress = function(e) {
        console.log("onkeypress:" + this.value);
        
    }
    captchat.ondblclick = function(){
        imagen.style.filter = "grayscale(100%)";
        imagen.style.border = "2px solid red"
    }
   var comidaCasera = ['Lentejitas', 'Seco de cordero', 'Saltado', 'Aji de Gallina'];
   var comidaRapida = ['Salchipapa', 'Empanada', 'Papa rellena', 'Hamburguesa'];
   var piqueos = ['Papitas', 'Chocolates', 'Galletas'];
   var selectComida = document.getElementById("comida");
   var selectTipo = document.getElementById('tipoComida');
   selectComida.onchange = function(){
       selectTipo.removeAttribute("disabled")
       selectTipo.innerHTML ="";
        if(this.value != 0){
            switch(this.value){
                case '1':
                    for (let i = 0; i < comidaRapida.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaRapida[i]}`;
                        opcion.setAttribute("value", comidaRapida[i].charAt(0));
                        selectTipo.appendChild(opcion);
                        
                    }
                    break;
                case '2':
                    for (let i = 0; i < comidaCasera.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaCasera[i]}`;
                        opcion.setAttribute("value", comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion);
                        
                    }
                    break;
                case '3':
                    for (let i = 0; i < piqueos.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${piqueos[i]}`;
                        opcion.setAttribute("value", piqueos[i].charAt(0));
                        selectTipo.appendChild(opcion);
                        
                    }
                    break;
            }
            
        }
   };
}