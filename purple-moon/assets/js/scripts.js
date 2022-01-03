$(document).ready(function(){
	serviceSlider();
});

function serviceSlider(){
	var swiper = new Swiper(".services-slider", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".services-slider .swiper-button-next",
          prevEl: ".services-slider .swiper-button-prev",
        },
      });
}