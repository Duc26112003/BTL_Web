// swiper 

$('.filtering').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
    
  });

// slick 
$(document).ready(function(){
    $('.slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Tự động chuyển slide
      autoplaySpeed: 3000 // Thời gian chuyển đổi giữa các slide (ms)
    });
    
    $('.slider').find('.slide').each(function() {
      var prevButton = $(this).find('.button-prev');
      var nextButton = $(this).find('.button-next');
      
      prevButton.on('click', function() {
        $('.slider').slick('slickPrev');
      });
      
      nextButton.on('click', function() {
        $('.slider').slick('slickNext');
      });
    });
  })






