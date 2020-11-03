function nextPic() {

    var imgActive = $('img.active')
    var dotActive = $('i.active')
    imgActive.removeClass('active')
    dotActive.removeClass('active')

    if ((imgActive.hasClass('last')) && (dotActive.hasClass('last'))) {
        $('img.first').addClass('active')
        $('i.first').addClass('active')

    } else {
        imgActive.next().addClass('active')
        dotActive.next().addClass('active')
    }
}
function prevPic() {

    var imgActive = $('img.active')
    var dotActive = $('i.active')
    imgActive.removeClass('active')
    dotActive.removeClass('active')

    if ((imgActive.hasClass('first')) && (dotActive.hasClass('first'))) {
        $('img.last').addClass('active')
        $('i.last').addClass('active')

    } else {
        imgActive.prev().addClass('active')
        dotActive.prev().addClass('active')

    }
}
function leftKey(e) {
    if (e == 37) {
        prevPic()
    }
}
function rightKey(e){
    if(e == 39){
        nextPic()
    }
}

$(document).keydown(function(e){
    if(e.which == 39){
        nextPic()
    }
})
$(document).keydown(function (e) {
    if (e.which == 37) {
        prevPic()
    }
})


$('.next').click(nextPic)
$('.prev').click(prevPic)


$('#btn_1').click(function(){
    $('#img_1').addClass('active')
    $('#img_2, #img_3, #img_4').removeClass('active')
    $('#btn_1').addClass('active')
    $('#btn_2, #btn_3, #btn_4').removeClass('active')
})
$('#btn_2').click(function () {
    $('#img_2').addClass('active')
    $('#img_1, #img_3, #img_4').removeClass('active')
    $('#btn_2').addClass('active')
    $('#btn_1, #btn_3, #btn_4').removeClass('active')
})
$('#btn_3').click(function () {
    $('#img_3').addClass('active')
    $('#img_2, #img_1, #img_4').removeClass('active')
    $('#btn_3').addClass('active')
    $('#btn_2, #btn_1, #btn_4').removeClass('active')
})
$('#btn_4').click(function () {
    $('#img_4').addClass('active')
    $('#img_2, #img_3, #img_1').removeClass('active')
    $('#btn_4').addClass('active')
    $('#btn_2, #btn_3, #btn_1').removeClass('active')
})


