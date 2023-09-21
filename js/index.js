



  $(document).ready(function() {

    var width = $( window ).width();

 

    // 스크롤 풀기
    $('body').off('scroll touchmove mousewheel'); 

    // 전체 fullpage
    $('#fullpage').fullpage({         
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      anchors: ['sec0','sec1', 'sec2', 'sec3', 'sec4'],
      menu: '#menu',
      scrollingSpeed: 1000,
      responsiveWidth: 768,
      // scrollBar: true,
      onLeave: function(origin, destination, direction) {
        if(width > 1024) {
          $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
        }
      },
      afterLoad: function(anchorLink, index) {                                   
        $('#fullpage').off('scroll mousewheel');      
        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove');

        if(width > 769) {
          if(index == 1) {
            $("header.indHeader nav").css({"display" : "none"})
          } else {
            $("header.indHeader nav").css({"display" : "block"})
          }
        } else {
          if(index == 1) {
            $("header.indHeader").css({"position" : "fixed"})
          }
        }


        if(!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
        if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
        if(!$(".sec4").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
      },
    });           
  

    // swiper - react project
    var length1 = $(".sec2 .swiper-slide").length;
    var swiper1 = new Swiper('.sec2Swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          allowTouchMove : true,  
        },
        1200: {
          allowTouchMove : false, 
        },
      },
      navigation: {
        nextEl: '.button-next01',
        prevEl: '.button-prev01',
      },
    }); 
    

    // swiper - works
    var length2 = $(".sec3 .swiper-slide").length;
    var swiper2 = new Swiper('.sec3Swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          allowTouchMove : true,  
        },
        1200: {
          allowTouchMove : false, 
        },
      },
      navigation: {
        nextEl: '.button-next02',
        prevEl: '.button-prev02',
      },
    }); 

      

    // swiper - renewal
    var length3 = $(".sec4 .swiper-slide").length;
    var swiper3 = new Swiper('.sec4Swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          allowTouchMove : true,  //브라우저가 768보다 클 때
        },
        1200: {
          allowTouchMove : false, 
        },
      },
      navigation: {
        nextEl: '.button-next03',
        prevEl: '.button-prev03',
      },
      // mousewheel: true,
      // on: {
      //   slideChange: function(){        
      //     var idx = this.activeIndex;
      //     if(this.activeIndex != 0 && idx != length3) $.fn.fullpage.setAllowScrolling(false);
      //     if(length3 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false)
      //   },  
      //   slideChangeTransitionEnd: function(){
      //     var idx = this.activeIndex;
      //     if(idx == 0 || idx >= length3-1) $.fn.fullpage.setAllowScrolling(true);   
      //   },
      //   touchMove: function(e) {        
      //     var startY = e.touches.startY;
      //     setTimeout(function(){
      //       if(startY > e.touches.currentY) swiper3.slideNext();  
      //       else swiper3.slidePrev();
      //     },100);        
      //   },
      // }, 
    }); 



  });


  


    // 인트로 - 메인 효과
    $(function() {

      // 스크롤 막기
      $('body').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation(); 
        return false;
      })

     




      var perNum = 100;
      $('.second.circle').circleProgress({
        value: perNum/100,
        startAngle:300,
        size:200,
        fill:{
          gradient:["#37FF8B","#37FF8B"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
          easing:"swing"
        },
        lineCap : "butt",
        reverse:true
              
        }).on('circle-animation-progress', function(event, progress) {
              $(".second.circle>canvas").css({"box-shadow" : "20px 20px 60px #166638, -20px -20px 60px #58ffde," })
              $(this).find('.perc').html(Math.round(perNum * progress) + '<span>%</span>');
              setTimeout("startAni()", 2300);  
              setTimeout("showMain()", 3700);
      })
    });

    // 문구 애니메이션
    function startAni() {
      $(".hover-text").addClass('active')
    };

    // 메인페이지 등장
    function showMain() {
      $(".notice").css({"opacity" : "0"})
      $(".curtain__panel--left").css({"transform":"translateX(-100%)"});
      $(".curtain__panel--right").css({"transform":"translateX(100%)"});

      // 스크롤 풀기
      $('body').off('scroll touchmove mousewheel'); 
    };
      









    // slick slider
    $('.slickslider01').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 300,
      dots: true,
      autoplay: true,     
      autoplaySpeed: 3000
    });
    $('.slickslider02').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 300,
      dots: true,
      autoplay: true,     
      autoplaySpeed: 2000
    });
    

  













  // 브라우저 resize 처리
  $(window).scroll(function() {
    window.addEventListener("resize", function() {
      $(window).scrollTop(0);
    })
  })


