$(document).ready(function () {
   alert("dd");
   
});

$('#buscar').click(function (e) { 
    e.preventDefault();
    var val = $('#input').val();
    console.log(val)
    $.ajax({
        url: 'https://localhost:44384/api/books/'+val,
        success: function(respuesta) {
            console.log(respuesta);
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
});