$(document).ready(function () {
    $( ".cuadrado" ).draggable();
    $('.cuadrado').resizable();
    $( "#datepicker" ).datepicker();
    $('.bandas').sortable({
        update:function(){
            console.log("Se ha ordenado la tabla")
        }
    });
    $('.small-box').draggable();
    $('.big-box').droppable({
        drop:function(evento){
            console.log("entro algo");
            console.log(evento)
            $(this).css('background', 'red').css('border-radius', '50%')
        }
    })
    $('.btn1').click(function () { 
        //$('.efecto1').effect("explode");
        $('.efecto1').toggle("shake", 100);
    });
    $('#img').tooltip();
});
