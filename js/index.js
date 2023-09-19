

  $(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({         
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      anchors: ['sec0','sec1', 'sec2', 'sec3', 'sec4'],
      menu: '#menu',
      scrollingSpeed: 1000,
      // scrollBar: true,
      onLeave: function(origin, destination, direction) {
        $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
          event.preventDefault();
          event.stopPropagation();
          return false;
        });

      },
      afterLoad: function(anchorLink, index) {                                   
        $('#fullpage').off('scroll mousewheel');      
        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove');

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
      allowTouchMove : false,
      navigation: {
        nextEl: '.button-next01',
        prevEl: '.button-prev01',
      },

      // on: {
      //   slideChange: function(){        
      //     var idx = this.activeIndex;
      //     if(this.activeIndex != 0 && idx != length1) $.fn.fullpage.setAllowScrolling(false);
      //     if(length1 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) 
      //   },  
      //   slideChangeTransitionEnd: function(){
      //     var idx = this.activeIndex;
      //     if(idx == 0 || idx >= length1-1) $.fn.fullpage.setAllowScrolling(true);
      //   },
      //   touchMove: function(e) {        
      //     var startY = e.touches.startY;
      //     setTimeout(function(){
      //       if(startY > e.touches.currentY) swiper1.slideNext();  
      //       else swiper1.slidePrev();
      //     },100);        
      //   },
      // }, 
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
      allowTouchMove : false,
      navigation: {
        nextEl: '.button-next02',
        prevEl: '.button-prev02',
      },
      // on: {
      //   slideChange: function(){        
      //     var idx = this.activeIndex;
      //     if(this.activeIndex != 0 && idx != length2) $.fn.fullpage.setAllowScrolling(false);
      //     if(length2 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) 
      //   },  
      //   slideChangeTransitionEnd: function(){
      //     var idx = this.activeIndex;
      //     if(idx == 0 || idx >= length2-1) $.fn.fullpage.setAllowScrolling(true);  
      //   },
      //   touchMove: function(e) {        
      //     var startY = e.touches.startY;
      //     setTimeout(function(){
      //       if(startY > e.touches.currentY) swiper2.slideNext();  
      //       else swiper2.slidePrev();
      //     },100);        
      //   },
      // }, 
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
      allowTouchMove : false,
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



  $(".noticeclick").click(function () {
    $(".curtain__panel--left").css({"transform":"translateX(-100%)"})
    $(".curtain__panel--right").css({"transform":"translateX(100%)"})
    $(".notice").css({"display" : "none"})
    window.instance = new TypeIt("#typing1", {
      speed: 140
    })
      .type("")
      .delete(4)
      .type("ring.")
      .delete()
      .options({
        speed: 300
      })
      .type("")
      .go();

      // $('.section.active [data-aos]').each(function(){
      //   $(this).addClass("aos-animate")
      // });





  })












  // 브라우저 resize 처리
  $(window).scroll(function() {
    window.addEventListener("resize", function() {
      $(window).scrollTop(0);

    })
  })


