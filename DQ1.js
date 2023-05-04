
//版心
$(window).resize(function () {

    var win = $(this).width();

    if (win < 1493) { //宽度小于1493时，按1493和窗口实际宽度计算等比

        $("body").css("zoom", win / 1493);

    } else {

        $("body").css("zoom", "normal");

    }

}).trigger('resize');






$('.box2,.jiadian').hover(function () {

    $('.jdd1,.jd2,.jdd2,.jd3,.jd1,.jdd10').animate({
        position: 'relative',
        left: '380px'
    }, 1000).show()
})



// 家电预售

$(document).ready(function () {
    $('div').hover(function () {
        $(this).fadeIn(1000, 0.1)

        $('.qxjd,.qxjd3,.qxjd4').animate({
            position: 'relative',
            left: '-10px'
        }, 1000).show()

        $('.qxj3,.qxj4').animate({
            position: 'relative',
            left: '10px'

        }, 1000).show()

        $('.qxj2').animate({
            position: 'relative',
            left: '-260px'
        }, 1000).show()


    })
})

$('.box6').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.nx2').animate({

        position: 'relative',
        top: '120px'
    }, 1000).show()
})
$('.box6').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.nx3').animate({

        position: 'relative',
        top: '150px'
    }, 1000)
})
$('.box6').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.nx1').animate({

        position: 'relative',
        top: '-160px'
    }, 1000)
})


$('.box6').hover(function () {

    $('.nx10').animate({
        position: 'relative',
        top: '-200px'
    }, 1000)
})
// 静and爱

$('.box3').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.kt2,.kt1').animate({
        position: 'relative',
        left: '10px'
    }, 1000)
    $(this).fadeIn(1000, 0.1)
    $('.j2,.j1').animate({
        position: 'relative',
        left: '-260px',
    }, 1000)
    $(this).fadeIn(1000, 0.1)
    $('.j3').animate({
        position: 'relative',
        left: '-200px'
    }, 1000)

    $(this).fadeIn(1000, 0.1)
    $('.kt3').animate({
        position: 'relative',
        left: '20px'
    }, 1000)
    $(this).fadeIn(1000, 0.1)
    $('.j4,.j6,.j7,.j8').animate({
        position: 'relative',
        left: '15px'
    }, 1000)
    $(this).fadeIn(1000, 0.1)

    $('.j9,.j10').animate({
        position: 'relative',
        left: '200px'
    }, 1000)


})






// 体验店
$('.box4').hover(function () {
    $('.tyy1,.tyy2,.tyy3').animate({
        position: 'relative',
        left: '-60px'
    }, 1000).show()

    $('.ty1,.ty2,.ty3,.ty4,.tyyy1').animate({
        position: 'relative',
        left: '100px'
    }, 1000).show()
    $('.tyy').animate({
        position:'relative',
        left:'10px'
    },1000)
})


window.onscroll = function () {
    if (document.body.scrollTop || document.documentElement.scrollTop) {
        $('#rTop').slideDown(500)
    } else {
        $('#rTop').slideUp(500)
    }

}
// 点击返回顶部按钮
function toTop() {
    window.scrollTo('0', '0');
    button1style = document.getElementById('rTop').style;
    button1style.display = "none"
    document.getElementById('rTop').style.display = "none"
}

$('.rTop').hover(function () {
    $(this).fadeOut(1000)
})
// 体验店
$('.box4,.jiadian,div').hover(function () {
    $('.tyy1,.tyy2,.tyy3').animate({
        position: 'relative',
        left: '-60px'
    }, 1000).show()

    $('.ty1,.ty2,.ty3,.ty4,.tyyy1').animate({
        position: 'relative',
        left: '100px'
    }, 1000).show()
    $('.tyy').animate({
        position: 'relative',
        left: '10px'
    }, 1000)
})