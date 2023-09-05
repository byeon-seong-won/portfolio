

  $(document).ready(function() {
    // fullpage
    $('#fullpage').fullpage({         
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      anchors: ['sec0','sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
      menu: '#menu',
      scrollingSpeed: 1000,
      // scrollBar: true,
      onLeave: function(origin, destination, direction) {
        // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
        $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
          event.preventDefault();
          event.stopPropagation();
          return false;
        });

      },
      afterLoad: function(anchorLink, index) {      
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');      
        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기

        if(!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
        if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); 
        if(!$(".sec4").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);// 슬라이드 섹션을 벗어나면 휠풀어주기
      }
    });           
  
    // swiper - react project
    var length1 = $(".sec2 .swiper-slide").length;
    var swiper1 = new Swiper('.sec2Swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // mousewheel: true,
      on: {
        slideChange: function(){        
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
          if(this.activeIndex != 0 && idx != length1) $.fn.fullpage.setAllowScrolling(false);
          if(length1 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
          // console.log('즉시 : ' + idx);
        },  
        slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length1-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
        },
        touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper1.slideNext();  
            else swiper1.slidePrev();
          },100);        
        },
      }, 
    }); 
    

    // swiper - works
    var length2 = $(".sec3 .swiper-slide").length;
    var swiper2 = new Swiper('.sec3Swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // mousewheel: true,
      on: {
        slideChange: function(){        
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
          if(this.activeIndex != 0 && idx != length2) $.fn.fullpage.setAllowScrolling(false);
          if(length2 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
          // console.log('즉시 : ' + idx);
        },  
        slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length2-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
        },
        touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper2.slideNext();  
            else swiper2.slidePrev();
          },100);        
        },
      }, 
    }); 

      

    // swiper - renewal
    var length3 = $(".sec4 .swiper-slide").length;
    var swiper3 = new Swiper('.sec4Swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // mousewheel: true,
      on: {
        slideChange: function(){        
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
          if(this.activeIndex != 0 && idx != length3) $.fn.fullpage.setAllowScrolling(false);
          if(length3 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
          // console.log('즉시 : ' + idx);
        },  
        slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length3-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
        },
        touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper3.slideNext();  
            else swiper3.slidePrev();
          },100);        
        },
      }, 
    }); 


  });










    $(window).scroll(function() {
      


     // 브라우저 resize 처리
    window.addEventListener("resize", function() {
      $(window).scrollTop(0);

    })
  })


