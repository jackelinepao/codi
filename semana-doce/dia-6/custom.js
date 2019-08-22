$(document).ready(function () {
    
});
console.log($('h1').html());
$('h1').html('otro titulo')
console.log($('#parrafo').html())
$('#parrafo').css("color", "red").css("font-weight", "bold").css("background-color", "yellow")

$("#change").click(function (e) { 
    e.preventDefault();
    $('p:first').css("text-align", "justify");
    $('p:eq(1)').css("color", "blue");
});
$("#addClass").dblclick(function (e) { 
    e.preventDefault();
    $(this).removeClass("btn-primary");
    //$(this).attr('class','btn btn-success btn-block btn-large')
    $(this).addClass('btn-danger').addClass('btn-block').addClass('btn-lg');
});

$('#addElements').click(function(){
    $('.row').prepend("<small>Este es una descripcion de titulo");
    $('.row').append("<p>dsafcsdgerrrrrrrrrhtjtyj reagfewr</p>")
});

$('p:eq(1)').click(function(){
    $(this).toggleClass('text-danger');
})