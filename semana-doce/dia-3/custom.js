$(document).ready(function() {
    console.log("hi")
    $("#btn").click(function (e) { 
        e.preventDefault();
        console.log($(this).html());
        $('p').css('color', 'red').css('font-weight', 'bold');
    });
    $('#btn2').click(function(){
        $('p:first').html('Este es mi primer parrafo').css('font-weight', 'bold');
        $('p:eq(2)').css('background', 'pink')
    })
    $('#btn3').click(function(){
        //$(this).attr("class", "fff kk")
        $(this).addClass('btn').addClass('btn-danger').addClass('btn-block');
    })
});
$("p:eq(1)").dblclick(function(){
    $(this).toggleClass('text-danger');
})