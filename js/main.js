new WOW().init();
$(document).ready(function(){
  $('.slider').bxSlider({
    pager: false,
    autoplay: true,
    speed: 1000, 
    auto: true,
    pause:3500
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 280) {
      $("header").addClass("fix");
    } else {
      $("header").removeClass("fix");
    }
  });
  $(".menuToggle").on('click', function(){
      $(".menu_mobile").slideToggle(500, function(){
        if( $(this).css('display') === "none"){
          $(this).removeAttr('style');
      }
      })
  });
});

$(document).ready(function(){
  $('.search').click(function(){
    $('.search_block').addClass('active');
    $('.search').addClass("wow zoomOut").hide(800);
  })
  $(".remove").click(function(){
    $(".search_block").removeClass("active");
    $('.search').show();
  })
});


$(function() {
  $(window).on("scroll resize", function() {
      var o = $(window).scrollTop() / ($(document).height() - $(window).height());
      $(".progress-bar").css({
          "width": (100 * o | 0) + "%"
      });
      $('progress')[0].value = o;
  })
});
