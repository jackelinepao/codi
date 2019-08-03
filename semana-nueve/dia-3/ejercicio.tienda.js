window.onload = function(){
    var main = document.getElementById("contenedor");
    var titulo_modal = document.getElementById("modalTitulo");
    var imagen_modal = document.getElementById("modalImagen")
    var descripcion_modal = document.getElementById("modalDescrpcion")
    var button = document.getElementsByClassName("btn");
    //simular una base de datos
    var productos = [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 200,
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quibusdam ipsa sed, officia officiis harum labore provident ipsam aliquid, quis saepe libero numquam nam quam perferendis delectus beatae voluptatibus ut?",
            imagen: 'https://picsum.photos/700/400/?blur'
        },
        {
            id: 2,
            nombre: 'Producto 2',
            precio: 200,
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quibusdam ipsa sed, officia officiis harum labore provident ipsam aliquid, quis saepe libero numquam nam quam perferendis delectus beatae voluptatibus ut?",
            imagen: 'https://picsum.photos/700/400/?blur'
        },
        {
            id: 3,
            nombre: 'Producto 3',
            precio: 200,
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quibusdam ipsa sed, officia officiis harum labore provident ipsam aliquid, quis saepe libero numquam nam quam perferendis delectus beatae voluptatibus ut?",
            imagen: 'https://picsum.photos/700/400/?blur'
        },
        {
            id: 4,
            nombre: 'Producto 4',
            precio: 200,
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quibusdam ipsa sed, officia officiis harum labore provident ipsam aliquid, quis saepe libero numquam nam quam perferendis delectus beatae voluptatibus ut?",
            imagen: 'https://picsum.photos/700/400/?blur'
        }
    ]
    var container = document.createElement("div");
    container.classList = "container";
    main.appendChild(container);
    var row = document.createElement("div")
    row.classList = "row"
    container.appendChild(row)
    var divProducto = ""
    productos.forEach(function(element) {
        divProducto = divProducto + `<div class="col-md-4 mb-3">
                                        <div class="card">
                                            <img src="${element.imagen}" class="card-img-top" alt="">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.nombre}</h5>
                                                <p class="card-text">
                                                    ${element.precio}
                                                </p>
                                                <button class="btn btn-primary" id="${element.id}">Ver más</button>
                                            </div>
                                        </div>
                                    </div>`
    });
    row.innerHTML = divProducto;
    $(".btn").click(function(){
        console.log($(this).id)
    })
}