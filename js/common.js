$(document).ready(function () {
  new WOW().init();
  $(".header-text__btn").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.qwiz-slider__inner').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  swipe: false,
	  prevArrow: $('.qwiz-arrows__back'),
	  nextArrow: $('.qwiz-arrows__next'),
    adaptiveHeight: true,
    asNavFor: '.qwiz-text__slider'
   });	
  $('.qwiz-text__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: false,
    asNavFor: '.qwiz-slider__inner'
   });  
  $(".qwiz-slider__inner").on("afterChange", function (){
     if ($('.qwiz-arrows__next').hasClass('slick-disabled')) {
      $('.qwiz-arrows__back').addClass('slick-disabled');
     }
  })
   $('.qwiz-block').on('click', function() {
   	let parent = $(this).parent('.qwiz-row');
   	let childrens = $(parent).children('.qwiz-block');
   	$(childrens).removeClass('qwiz-block-active');
   	$(this).addClass('qwiz-block-active');

   	$('.qwiz-arrows__next').click();
   })

   $('.btn-phn').on('click', function() {
   	$('.dark-window').addClass('dark-window-active');
   	$('.modal-window').addClass('modal-window-active');
   	return false;
   })
   $('.dark-window').on('click', function() {
   	$('.dark-window').removeClass('dark-window-active');
   	$('.modal-window').removeClass('modal-window-active');
   	return false;
   })
   $('.qwiz-range_result').text($('.rng-1').val());
   $('.rng-1').rangeslider({
       polyfill : false,
       onSlide : function( position, value ) {
          $('.qwiz-range_result').text(value);
       },
   });
   $('.rng-2').text($('.rst-2').val());
   $('.rng-2').rangeslider({
       polyfill : false,
       onSlide : function( position, value ) {
          $('.rst-2').text(value);
       },
   });
})