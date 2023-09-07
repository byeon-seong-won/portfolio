$(document).ready(function () {


  // 스크롤 시 헤더 밑줄
  $(window).scroll(function() {
      var scheight = $(document).scrollTop();
      var scwidth = $( window ).width();

      if(scwidth >= 1281) {
        if(scheight > 100){
          $("header, .sub").css({"backgroundColor":"#fff"})
          $(".gnb .main>a, .sub li a").css({"color":"#333"})
          console.log(scheight)
        } else {
          $("header, .sub").css({"backgroundColor":"transparent"})
          $(".gnb .main>a, .sub li a").css({"color":"#fff"})
        }

      } else if(scwidth >= 1024 && scwidth < 1281) {
        if(scheight > 80){
          $("header").css({"border-bottom":"1px solid #ddd"})
        } else {
          $("header").css({"border":"none"})
        }

      } else if(scwidth >= 320 && scwidth < 1024) {
        if(scheight > 60){
          $("header").css({"border-bottom":"1px solid #ddd"})
        } else {
          $("header").css({"border":"none"})
        }
      }
  });








  $(".main").hover(function() {
    $(this).find(".sub").stop().slideDown();
  }, function() {
    $(this).find(".sub").stop().slideUp();
  });


  let aboutPATH1=0;
  $(".aboutBottomImg01-01 div img").click(function(){
    let aboutPATH1=$(this).attr("src");
  
    $(".aboutImg01").css({"background":`url(${aboutPATH1})`}).hide().fadeIn();
    
  });

  let aboutPATH2=0;
  $(".aboutBottomImg01-02 div img").click(function(){
    let aboutPATH2=$(this).attr("src");
  
    $(".aboutImg02").css({"background":`url(${aboutPATH2})`}).hide().fadeIn();
    
  });
  let aboutPATH3=0;
  $(".aboutBottomImg01-03 div img").click(function(){
    let aboutPATH3=$(this).attr("src");
  
    $(".aboutImg03").css({"background":`url(${aboutPATH3})`}).hide().fadeIn();
    
  });
  let aboutPATH4=0;
  $(".aboutBottomImg01-04 div img").click(function(){
    let aboutPATH4=$(this).attr("src");
  
    $(".aboutImg04").css({"background":`url(${aboutPATH4})`}).hide().fadeIn();
    
  });
  let aboutPATH5=0;
  $(".aboutBottomImg01-05 div img").click(function(){
    let aboutPATH5=$(this).attr("src");
  
    $(".aboutImg05").css({"background":`url(${aboutPATH5})`}).hide().fadeIn();
    
  });
  let aboutPATH6=0;
  $(".aboutBottomImg01-06 div img").click(function(){
    let aboutPATH6=$(this).attr("src");
  
    $(".aboutImg06").css({"background":`url(${aboutPATH6})`}).hide().fadeIn();
    
  });
  let aboutPATH7=0;
  $(".aboutBottomImg01-07 div img").click(function(){

    let aboutPATH7=$(this).attr("src");
  
    $(".aboutImg07").css({"background":`url(${aboutPATH7})`}).hide().fadeIn();
    
  });
  let aboutPATH8=0;
  $(".aboutBottomImg01-08 div img").click(function(){
    let aboutPATH8=$(this).attr("src");
  
    $(".aboutImg08").css({"background":`url(${aboutPATH8})`}).hide().fadeIn();
    
  });
  let aboutPATH9=0;
  $(".aboutBottomImg01-09 div img").click(function(){
    let aboutPATH9=$(this).attr("src");
  
    $(".aboutImg09").css({"background":`url(${aboutPATH9})`}).hide().fadeIn();
    
  });
  let aboutPATH10=0;
  $(".aboutBottomImg01-10 div img").click(function(){
    let aboutPATH10=$(this).attr("src");
  
    $(".aboutImg10").css({"background":`url(${aboutPATH10})`}).hide().fadeIn();
    
  });
  let aboutPATH11=0;
  $(".aboutBottomImg01-11 div img").click(function(){
    let aboutPATH11=$(this).attr("src");
  
    $(".aboutImg11").css({"background":`url(${aboutPATH11})`}).hide().fadeIn();
    
  });





  // let CAFEpath1=0;
  // $(".store01 .cafeImg img").click(function(){
  //   let CAFEpath1=$(this).attr("src");

  //   $(".store01 .storeImgFLex img").css({"background":`url(${CAFEpath1})`}).hide().fadeIn();
  // });

  // let CAFEpath2=0;
  // $(".store02 .firstcafeImg img").click(function(){
  //   let CAFEpath2=$(this).attr("src");
  //   $(".store02 .storeImgFLex img").attr({"src":CAFEpath2}).hide().fadeIn();

  // });

 


   


  /* 메인 비주얼    */

  let $img = $(".changeimg ul li");
  let $btn = $(".index ul li");
  let oldidx=0;
  let idx=0;
  let img_n = $img.length; 

  function changeImg(idx) {
    if(oldidx!=idx) {
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut(300);
      $img.eq(idx).stop().fadeIn(300);
    }
    oldidx = idx;

  }

  function changeAuto() {
    idx++;

  if(idx>img_n-1) {
    idx=0;
  }
  changeImg(idx);
}

  timer=setInterval(changeAuto,6000);

  $btn.click(function() {
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer=setInterval(changeAuto,6000);
  })

  $btn.click(function() {
    idx=$(this).index();
    changeImg(idx);
  })



  $(".ABOUT").click(function() {

    let result = $(this).attr("data-alt");
    $(".aboutBottomImg01").removeClass("active");
    $("#" + result).addClass("active");

  });

  









  /* about 비주얼 */
  let $aboutImg = $(".aboutFlex .ABOUT");
  let $aboutSlick = $(".aboutBottomImg01");
  let $lbtn = $(".aboutFontIcon .lbtn");
  let $rbtn = $(".aboutFontIcon .rbtn");
  let aboutOldidx=0;
  let aboutNewidx=0;
  let aboutImg_n = $aboutImg.length;


  function changeAboutimg(aboutNewidx) {
    
    if(aboutOldidx!=aboutNewidx) {
      $aboutImg.eq(aboutOldidx).stop().fadeOut(300);
      $aboutImg.eq(aboutNewidx).stop().fadeIn(300);
    }
    aboutOldidx = aboutNewidx;
  }




  $rbtn.click(function() {

    aboutNewidx++;
    if(aboutNewidx>aboutImg_n-1) {
      aboutNewidx=0;
    }
    changeAboutimg(aboutNewidx);

  });

  $lbtn.click(function() {

    aboutNewidx--;
    if(aboutNewidx<0) {
      aboutNewidx=aboutImg_n-1;
    }
    changeAboutimg(aboutNewidx);

  });


  $('.first_imgTotal').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: true
  });

$('.menu_con_total').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: true
})

$('.instagram_img1').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 300,
  dots: true,
  autoplay: true,     
  autoplaySpeed: 3000
});


$('.instagram_img2').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 400,
  dots: true,
  autoplay: true,    
  autoplaySpeed: 2000
});



  $('.aboutBottomImg01-01').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
  });

 

});