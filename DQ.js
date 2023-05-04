//版心
 $(window).resize(function () {

    var win = $(this).width();
    
    if (win < 1493) { //宽度小于1493时，按1493和窗口实际宽度计算等比
    
    $("body").css("zoom", win / 1493);
    
    }else{
    
    $("body").css("zoom", "normal");
    
    }
    
    }).trigger('resize');





// 轮播图1
$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            autoplay: true,
            delay: 5000,
        }
    })
});

$(document).ready(function () {
    $('div').hover(function () {


        $(this).fadeIn(1000, 0.1)

        $('.k1').animate({
            position: 'relative',
            left: '-100px'
        }, 1000).show()

        $('.k2').animate({
            position: "relative",
            left: '-100px'

        }, 1000).show()


        $('.k3').animate({
            position: 'relative',
            left: '-100px'
        }, 1000).show()


        $('.ss1').animate({
            position: 'relative',
            left: '460px'
        }, 1000).show()
        $('.ss2').animate({
            position: 'relative',
            left: '370px'
        }, 1000).show()
        $('.ss3').animate({
            position: 'relative',
            left: '270px'
        }, 1000).show()






    })
})
// 齿轮
$('.box2,.jiadian').hover(function () {

    $('.jdd1,.jdd2,.jd1,.jdd10,.jd2,.jd3').animate({
        position: 'relative',
        left: '600px'
    }, 1000).show()
})

$('.box2,.jiadian').hover(function () {

    $('.jddd2').animate({
        position: 'relative',
        left: '650px'
    }, 1000).show()
})
$('.box2,.jiadian').hover(function () {

    $('.jddd3').animate({
        position: 'relative',
        left: '620px'
    }, 1000).show()
})
// 体验店
$('.lb2,.jiadian').hover(function () {
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

// 家电预售
$('.box6,.bty2,.box5').hover(function () {


    $('.qxjd,.qxjd3,.qxjd4').animate({
        position: 'relative',
        left: '-15px'
    }, 1000).show()

    $('.qxj3,.qxj4').animate({
        position: 'relative',
        left: '20px'

    },1000).show()

    $('.qxj2').animate({
        position: 'relative',
        left: '-260px'
    },1000).show()

    $('.qxjd1,.qxjd4,').animate({
        position: 'relative',
        left: '-200px'
    }, 1000).show()
})


$('.box6,.qxjd').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.cq2,.cqq1').animate({
        position: 'relative',
        left: '200px'
    }, 1000).show()

    $('.cq3').animate({
        position: 'relative',
        left: '-300px'
    }, 1000).show()



})
$('.jdhq,.cq1').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.jdhq2,.jdhq5,.jdhq4').animate({
        position: 'relative',
        left: '20px'
    }, 500).show()
})

$('.jdhq').hover(function () {
    $(this).fadeIn(1000, 0.1)
    $('.fw2').animate({
        position: 'relative',
        top: '40px'
    }, 1000).show()

    $('.fw8,.fww').animate({
        position: 'relative',
        top: '-10px'

    }, 1000).show()
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
  
  $('.rTop').hover(function(){
      $(this).fadeOut(1000)
  })