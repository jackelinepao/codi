//http://placehold.it/400x500
var productos= [
    {
        codigo: "001",
        descripcion: "Laptop Toshiba",
        precio: "4500.00",
        imagen: "http://placehold.it/100x100",
        existencias: 30,
        estado: "activo"
    },
    {
        codigo: "002",
        descripcion: "Cargador",
        precio: "500.00",
        imagen: "http://placehold.it/100x100",
        existencias: 30,
        estado: "activo"
    },
    {
        codigo: "003",
        descripcion: "usb",
        precio: "10.00",
        imagen: "http://placehold.it/100x100",
        existencias: 30,
        estado: "inactivo"
    },
    {
        codigo: "004",
        descripcion: "cable hdmi",
        precio: "4500.00",
        imagen: "http://placehold.it/100x100",
        existencias: 30,
        estado: "inactivo"
    }
]
var contenedor = document.getElementById("contenedor")
var tabla = document.createElement("table");
tabla.setAttribute("border", "1")
tabla.innerHTML = `<tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Existencia</th>
                        <th>Estado</th>
                    </tr>`;
contenedor.appendChild(tabla)


for (var i = 0; i < productos.length; i++) {
    var tr = document.createElement("tr");
    var tdCodigo = document.createElement("td");
    var tdDescripcion = document.createElement("td");
    var tdPrecio = document.createElement("td");
    var tdImgen = document.createElement("td");
    var tdExistencias = document.createElement("td");
    var tdEstado = document.createElement("td");
    tdEstado.style.color  = productos[i].estado == "inactivo" ? "red" : "green";
    tdCodigo.innerHTML = productos[i].codigo;
    tdDescripcion.innerHTML = productos[i].descripcion;
    tdPrecio.innerHTML = productos[i].precio;
    var img = document.createElement("img");
    img.setAttribute("src", productos[i].imagen);
    tdImgen.appendChild(img);
    //tdImgen = `<img src={productos[i].imagen}/>`;
    tdExistencias.innerHTML = productos[i].existencias;
    tdEstado.innerHTML = productos[i].estado;
    tr.appendChild(tdCodigo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdImgen);
    tr.appendChild(tdExistencias);
    tr.appendChild(tdEstado);
    tabla.appendChild(tr);
    
}



