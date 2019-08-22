function mostrar(data) {
    $('#content').html(`<table id="tableServicios" class="table">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>DESCRIPCION</th>
                                <th>PRECIO</th>
                                <th>IMAGEN</th>
                            </tr>
                        </thead>
                    </table>`)
}
function obtenerServicios(){
    $.ajax({
        type: "GET",
        url: "https://5d4b6ada00dbb10014879b0f.mockapi.io/servicios",
        timeout: 1000,
        data: "null",
        dataType: "json",
        complete: function(xhr, textStatus) {
            console.log(xhr.status);
        } 
    }).done(function (data, jqXHR) {
        console.log("eee", jqXHR.status)
        mostrar(data);
        $('#tableServicios').append('<tbody></tbody>')
        
        data.forEach(element => {
            var fila = (`<td>${element.serv_nom}</td>
                        <td>${element.serv_desc}</td>
                        <td>${element.serv_price}</td>
                        <td><img src="${element.serv_img}" id="img"/></td>`);
            $('tbody').append(`<tr>${fila}</tr>`);

        });
    }).fail(function (jqXHR, textStatus,error) {
        console.log("error",error)
    }).always(function (jqXHR) {
        console.log(jqXHR.status);
    });
}
$(document).ready(function () {
    obtenerServicios()
});
function mostrarImagenCargando(){
    console.log('sssssssssss')
}
// xhr = XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){

//     }
// }
// xhr.open("GET", "URL");
// xhr.send()