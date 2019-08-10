window.onload = function(){
    var cont = document.getElementById('cont-cards');
    function eliminarProducto(id){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            switch(xhr.readyState){
                case 4:
                    console.log("se elimino el producto")
            }
        }
        xhr.open("DELETE", "http://5d4b6ada00dbb10014879b0f.mockapi.io/productos/" + id)
        xhr.send(null);
    }
    function ponerDatos(productos){
        
        var row = document.createElement('div');
        row.classList.add("row")
        cont.appendChild(row);

        console.log(productos)
        productos.forEach(element => {
            var div = document.createElement('div')
            div.classList.add('col-md-4', 'mb-4')
            var card = document.createElement('a')
            card.classList.add('card')
            card.id = element.id_prod;
            var img = document.createElement('img')
            img.classList.add('card-img-top');
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body')
            var title = document.createElement('h5');
            var desc = document.createElement('p')
            var precio = document.createElement('div')
            var button = document.createElement('button');
                img.setAttribute('src', `${element.img_prod}`)
                title.innerHTML = element.name_prod
                desc.innerHTML = element.desc_prod
                precio.innerHTML = `<p><strong>PRECIO:</strong> S/. ${element.price_prod}</p>`
                button.innerHTML = 'Detalle'
                button.id = element.id_prod
            
                row.appendChild(div)
                div.appendChild(card)
                card.appendChild(img)
                card.appendChild(cardBody)
                cardBody.appendChild(title)
            if(!element.stock_prod){
                card.style.borderColor = 'red';
            }
           card.onclick = function(){
               var id = this.id;
               mostrar = document.getElementById('mostrar');
               mostrar.innerHTML = "";
               productos.forEach(producto => {
                   if(id == producto.id_prod){
                        var card = document.createElement('div')
                        card.classList.add('card')
                        var img = document.createElement('img')
                        img.classList.add('card-img-top');
                        var cardBody = document.createElement('div');
                        cardBody.classList.add('card-body')
                        var title = document.createElement('h5');
                        var desc = document.createElement('p')
                        var precio = document.createElement('div')
                        var stock = document.createElement('p')
                        var button = document.createElement('button');
                        stock.innerHTML = producto.stock_prod ? 'Disponible'  : 'No Disponible';
                        stock.classList.add('text-white', 'p-2', 'text-center')
                        stock.classList.add(producto.stock_prod ? 'bg-success'  : 'bg-danger')
                        var button = document.createElement('button');
                        button.classList.add('btn', 'btn-danger')
                        button.id = "eliminar";
                        button.innerHTML = "ELIMINAR"
                        img.setAttribute('src', `${producto.img_prod}`)
                        title.innerHTML = producto.name_prod
                        desc.innerHTML = producto.desc_prod
                        precio.innerHTML = `<p><strong>PRECIO:</strong> S/. ${producto.price_prod}</p>`
                        
                        mostrar.appendChild(card);
                        card.appendChild(img)
                        card.appendChild(cardBody)
                        cardBody.append(title)
                        cardBody.appendChild(desc)
                        cardBody.appendChild(precio)
                        cardBody.appendChild(stock)
                        cardBody.appendChild(button)
                        button.onclick = function(){
                            alert("kkk")
                            eliminarProducto(id)
                        }
                        
                   }
               });
           }
        });
    }
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        switch (xhr.readyState){
            case 1:
                console.log("se ha ejecutado la función open()");
                break;
            case 2:
                console.log("se ha disparado una petición http");
                break;
            case 3:
                console.log("ya estamos descargando los datos");
                break;
            case 4:
                console.log("ya tenemos los datos, la operacion termino")
                console.log(xhr.responseText)
                    console.log(`El codigo de estado es: ${xhr.status}`)
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    ponerDatos(json)
                    console.log(`El contenido de la solicitud es: ${xhr.responseText}`)
                
                break;
            default:
                console.log("Ha ocurrido un error inesperado");
        }
    }

    xhr.open("GET","http://5d4b6ada00dbb10014879b0f.mockapi.io/productos");
    
    xhr.send(null);
}