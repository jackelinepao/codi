window.onload = function(){
    var fecha = document.getElementById('fecha');
    var nombre = document.getElementById('nombre');
    var dni = document.getElementById('dni');
    var tbody = document.getElementById('contFactura');
    var detalle = document.getElementById('detalle');
    var direccion = document.getElementById('dire');
    var cantidad = document.getElementById('cant');
    var producto = document.getElementById('producto');
    var precio = document.getElementById('precio');
    var btn = document.getElementById('agregar');
    var totalGeneral = document.getElementById('totalGeneral');
    var btngrabar = document.getElementById('grabar')
    var objfactura = {
        fecha: '',
        nombre: '',
        dni:'',
        direccion: '',
        listadoProductos: [],
        total: '',
    }
    var objProducto = {
        cantidad: '',
        producto: '',
        precio: '',
        total: '',
    }
    var totalPagar = 0;

    // detalle.addEventListener("submit", function(e){
    //     e.preventDefault();
    // //     alert("entro")

    // // })
    function obtenerFactura(){
        var facturaTexto = localStorage.getItem("objFactura")
        var facturaObjeto = JSON.parse(facturaTexto);
        var arregloProductos = facturaObjeto.listadoProductos;
        
        arregloProductos.forEach(function(producto){
            console.log(producto.precio);
            var tr = document.createElement("tr");
            var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
            td1.innerHTML= producto.cantidad;
            td2.innerHTML= producto.producto;
            td3.innerHTML= producto.precio;
            td4.innerHTML=precio.totalGeneral;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        })
        fecha.value = facturaObjeto.fecha
        nombre.value = facturaObjeto.nombre
        dni.value = facturaObjeto.dni
        direccion.value = facturaObjeto.direccion
        
    
    }
    //obtenerFactura(); 
    btn.addEventListener("click", function(e){
        e.preventDefault();
        alert("dd");
        var total =  Math.round((parseInt(cantidad.value) * parseFloat(precio.value)),2);
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        td1.innerHTML = cantidad.value;
        td2.innerHTML = producto.value;
        td3.innerHTML = precio.value;
        td4.innerHTML = total;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
        objProducto.cantidad = cantidad.value;
        objProducto.producto = producto.value;
        objProducto.precio = precio.value;
        objProducto.total = total
        objfactura.listadoProductos.push(objProducto);
        totalPagar += total
        totalGeneral.innerHTML = totalPagar;
        objfactura.total = totalPagar;
        
        cantidad.value = "";
        producto.value = "";
        precio.value = "";
        
    });
    // btngrabar.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     alert("ddd");
    //     console.log(objfactura);
    //     var facturaCompartida = JSON.stringify(objfactura)
    //     localStorage.setItem("objFactura", facturaCompartida)
    //     objfactura.fecha = fecha.value;
    //     objfactura.nombre = nombre.value;
    //     objfactura.dni = dni.value;
    //     objfactura.direccion = direccion.value;
    //     var tr = document.createElement('tr');
    //     var td1 = document.createElement('td');
    //     var td2 = document.createElement('td');
    //     var td3 = document.createElement('td');
    //     var td4 = document.createElement('td');
    //     td1.innerHTML = cantidad.value;
    //     td2.innerHTML = producto.value;
    //     td3.innerHTML = precio.value;
        
    //     td4.innerHTML = total;
    //     tr.appendChild(td1);
    //     tr.appendChild(td2);
    //     tr.appendChild(td3);
    //     tr.appendChild(td4);
    //     tbody.appendChild(tr);
    //     objfactura.listadoProductos.push(objProducto);
    //     totalPagar += total
    //     totalGeneral.innerHTML = totalPagar;
    //     objfactura.total = totalPagar;
    //     console.log(objfactura);
    //     var facturaCompartida = JSON.stringify(objfactura)
    //     localStorage.setItem("objFactura", facturaCompartida)
    //     cantidad.value = "";
    //     producto.value = "";
    //     precio.value = "";
    // })
       
}