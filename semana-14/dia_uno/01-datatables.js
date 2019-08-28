$(document).ready(function () {
    $('#listProducts').DataTable({
        "ajax":{
            type: "GET",
            url: "https://5d4b6ada00dbb10014879b0f.mockapi.io/productos",
            timeout: 1500,
            dataSrc:""
        },
        "columns": [
            { "data" : "id_prod"},
            { "data" : "name_prod"},
            { "data" : "desc_prod" },
            { "data" : "price_prod" },
            {
                "render": function (data, type, JsonResultRow, meta) {
                    return '<img width="100px" src="'+JsonResultRow.img_prod+'">';
                }
            }
        ],
        "language":{
                "decimal":        "",
                "emptyTable":     "No se ha encontrado resultado",
                "info":           "Mostrando _START_ desde _END_ hasta _TOTAL_ registros",
                "infoEmpty":      "Mostrando 0 deste 0 hasta 0 registros",
                "infoFiltered":   "(filtrado de _MAX_ total registros)",
                "infoPostFix":    "",
                "thousands":      ",",
                "lengthMenu":     "Mostrar _MENU_ registros",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar:",
                "zeroRecords":    "No se encontro ninguna concidencia",
                "paginate": {
                    "first":      "Primero",
                    "last":       "Ultimo",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
        },
        "order": [[0, "desc"]]
    } );
} );