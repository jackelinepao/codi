window.onload = function(){
    var input = document.getElementById('inputSearch');
    var btn = document.getElementById('inputSearch');
    var form = document.getElementById('formSearch');
    var load = document.getElementById('load');
    var sresul = document.getElementById('sin-resultado');
    var cont = document.getElementById('cont');
    var map;

    form.onsubmit = function(e){
        e.preventDefault();
        sresul.setAttribute("hidden", "true");
        cont.innerHTML = "";
        var city = input.value;
        search(city);
    }

    //function buscar en la api
    function search(city){
        xhr = new XMLHttpRequest();
        load.removeAttribute("hidden");
        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 2){
                console.log("Cargando...")

            }
            if(xhr.readyState == 4){
                load.setAttribute("hidden", true)
                var ciudad = JSON.parse(xhr.responseText).Results;
                console.log(ciudad)
                dibujarTabla(ciudad);
            }
        }
        
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "fce27e4c4cmshcb197edeff4dcb9p147950jsn5a0ddad2232c");
        xhr.send()
    }
    function dibujarTabla(ciudad){
        if(ciudad.length === 0){
            sresul.removeAttribute("hidden")
        }else{
            var table = document.createElement("table");
            table.classList.add("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");
            var trTitulo = document.createElement("tr");
            var thNumero = document.createElement("th")
            var thNombre = document.createElement("th");
            var thTipo = document.createElement("th")
            var thPais = document.createElement("th")
            var thLongitud = document.createElement("th")
            var thLatitud = document.createElement("th")
            var thVer = document.createElement("th")
            thNumero.innerHTML = "Numero"
            thNombre.innerHTML = "Nombre";
            thTipo.innerHTML = "Tipo"
            thPais.innerHTML = "Pais"
            thLongitud.innerHTML = "Longitud"
            thLatitud.innerHTML = "Latitud"
            table.appendChild(thead);
            thead.appendChild(trTitulo);
            trTitulo.appendChild(thNumero);
            trTitulo.appendChild(thNombre);
            trTitulo.appendChild(thTipo);
            trTitulo.appendChild(thPais);
            trTitulo.appendChild(thLongitud);
            trTitulo.appendChild(thVer);
            table.appendChild(tbody);
            
            ciudad.forEach((element, index) => {
                tr = document.createElement("tr");
                td1 = document.createElement("td");
                td2 = document.createElement("td");
                td3 = document.createElement("td");
                td4 = document.createElement("td");
                td5 = document.createElement("td");
                td6 = document.createElement("td");
                td7 = document.createElement("td");
                btn = document.createElement("button");

                td1.innerHTML = index;
                td2.innerHTML = element.name;
                td3.innerHTML = element.type;
                td4.innerHTML = element.c;
                td5.innerHTML = element.lon;
                td6.innerHTML = element.lat;
                btn.innerHTML = "<i class='fas fa-eye'></i>";
                btn.classList.add("btn-primary");
                btn.onclick = function(){
                    
                }
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                td7.appendChild(btn)
                tr.appendChild(td7);
                tbody.appendChild(tr)
            });
            
            cont.appendChild(table)
        }
    }
    function initMap() {
        // inicializar el mapa
        // la variable map es la referencia al mapa de google
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    initMap();
}