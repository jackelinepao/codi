window.onload = function(){
    var input = document.getElementById('inputSearch')
    var btn = document.getElementById('inputSearch')
    var form = document.getElementById('formSearch')
    form.onsubmit = function(e){
        e.preventDefault();
        var city = input.value;
        search(city);
    }

    //function buscar en la api
    function search(city){
        xhr = new XMLHttpRequest();
        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 2){
                console.log("Cargando...")
            }
            if(xhr.readyState == 4){
                console.log("4444444")
            }
        }
        
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "fce27e4c4cmshcb197edeff4dcb9p147950jsn5a0ddad2232c");
        xhr.send()
    }
}