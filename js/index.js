$(document).ready(function() {

    var width = $( window ).width();

    // 스크롤 풀기
    $('body').off('scroll touchmove mousewheel'); 

    // 전체 fullpage
    $('#fullpage').fullpage({         
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      anchors: ['sec0','sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'],
      menu: '#menu',
      scrollingSpeed: 1000,
      responsiveWidth: 1024,
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
          if(index !== 1) {
            $("header.indHeader nav").css({"display" : "block"})
          } else {
            $("header.indHeader nav").css({"display" : "none"})
          }
        } else {
          if(index == 1) {
            $("header.indHeader").css({"position" : "fixed"})
          }
        }
        if(!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
        if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
        if(!$(".sec4").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
        if(!$(".sec5").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
      },
    });           
  

    // swiper - work
    var length1 = $(".sec2 .swiper-slide").length;
    var swiper1 = new Swiper('.sec2Swiper', {
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
    

    // swiper - React / vue project
    var length2 = $(".sec3 .swiper-slide").length;
    var swiper2 = new Swiper('.sec3Swiper', {
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

      

    // swiper - 2d graphic
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

    }); 






    

    // mobile detail - swiper
    var swiper4 = new Swiper('.mo01swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      navigation: {
        nextEl: '.button-next04',
        prevEl: '.button-prev04',
      },
    }); 

    var swiper5 = new Swiper('.mo02swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      navigation: {
        nextEl: '.button-next05',
        prevEl: '.button-prev05',
      },
    }); 

    var swiper6 = new Swiper('.mo03swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      navigation: {
        nextEl: '.button-next06',
        prevEl: '.button-prev06',
      },
    }); 

    var swiper7 = new Swiper('.mo04swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      navigation: {
        nextEl: '.button-next07',
        prevEl: '.button-prev07',
      },
    }); 

  

    // work detail - swiper
    var swiper8 = new Swiper('.wo01swiper', {
      loop : true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      speed: 1000,
      navigation: {
        nextEl: '.button-next08',
        prevEl: '.button-prev08',
      },
    }); 





    

    // swiper - ui/ux
    var length9 = $(".sec5 .swiper-slide").length;
    var swiper9 = new Swiper('.sec5Swiper', {
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
        nextEl: '.button-next04',
        prevEl: '.button-prev04',
      },

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
          gradient:["#fe4e01","#fe4e01"],
          // gradient:["#14bab8","#37FF8B","#32d2b5","#14bab8","#37FF8B","#32d2b5"],
          gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
          easing:"swing"
        },
        lineCap : "round",
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
      autoplaySpeed: 2000
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
  // $(window).scroll(function() {
  //   window.addEventListener("resize", function() {
  //     $(window).scrollTop(0);
  //   })
  // })

// 커서
  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 10; // document의 x좌표값
    let mouseY = e.pageY + 10; // document의 y좌표값
  
    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  })
  




















  // 메인 효과
  const animationOptions = {
    ease: "expo.inOut"
  };
  
  const introAnimation = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: animationOptions.ease,
        duration: 1
      }
    });
  
    tl.to(".intro__title", {
      duration: 1.5,
      y: 0,
      autoAlpha: 1,
      delay: 0.5
    })
      .to(".intro__background--left, .intro__background--right", {
        scaleX: 1
      })
      .to(".intro__background--left, .intro__background--right", {
        scaleY: 0,
        transformOrigin: "top center"
      })
      .to(
        ".intro__title",
        {
          duration: 1.5,
          y: -60,
          autoAlpha: 0
        },
        "-=0.6"
      )
      .to(
        ".intro",
        {
          y: "-100%"
        },
        "-=0.5"
      );
  
    return tl;
  };
  
  const skewInElements = (elements) => {
    const tl = gsap.timeline();
  
    tl.from(elements, {
      duration: 1,
      ease: animationOptions.ease,
      skewY: -5,
      autoAlpha: 0,
      y: 40
    });
  
    return tl;
  };
  
  const fadeInElements = (elements) => {
    const tl = gsap.timeline();
  
    tl.from(elements, {
      duration: 1,
      ease: animationOptions.ease,
      y: "20px",
      autoAlpha: 0,
      stagger: 0.1
    });
  
    return tl;
  };
  
  const master = gsap.timeline({
    paused: false,
    delay: 0.2
  });
  
  master
    .add(introAnimation())
    .add(fadeInElements(".header__logo, .header__nav a"))
    .add(skewInElements("h1, .hero__col--2 img"), "-=1");
  