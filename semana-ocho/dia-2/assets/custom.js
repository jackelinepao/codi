$( document ).ready(function() {
    $(".btn").click(function(){
        
            $( "#tabla" ).toggleClass( "table-dark" );
    });
    $("button").click(function(){
        
        var htmlTags = '<tr>'+
        '<td>' + $("#input1").val() + '</td>'+
        '<td>' + $("#input2").val() + '</td>'+
        '<td>' + $("#input3").val() + '</td>'+
        '<td>' + $("#input4").val() + '</td>'+
      '</tr>';
      
   $('#tablaGuardar tbody').append(htmlTags);
})
});