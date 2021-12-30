$(document).ready(function(){

  
  mainSliderfunction();
	testimonialSlider();
	cultureSlider();
	testimonialSliderv2()

});
$(window).on("load" , function(){

	$('body').on("click" , ".next-step" , function(){
	$('.nav-wrap .nav-tabs  .active').parents('li').next('li').find('a').trigger('click');
	
	});

	$('body').on("click" , ".prev-step" , function(){
	$('.nav-wrap .nav-tabs  .active').parents('li').prev('li').find('a').trigger('click');
	});
})


function mainSliderfunction(){


	var navs = ['01', '02', '03']
	var mySwiper = new Swiper ('.hero-slider', 
		
	{
			
	    pagination: {
	      el: '.hero-slider .swiper-pagination',
				clickable: true,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + (navs[index]) + '</span>';
	        },
	    },

	    navigation: {nextEl: '.hero-slider  .swiper-button-next',prevEl: '.hero-slider  .swiper-button-prev',
	    },
	     
	     
  })
}

function testimonialSlider(){
	var mySwiper2 = new Swiper('.clients-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".clients-testimonial .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}

function cultureSlider(){
	var mySwiper3 = new Swiper('.culture-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 4,
			spaceBetween: 30,
			navigation: {
        nextEl: '.our-culture .swiper-button-next',
        prevEl: '.our-culture .swiper-button-prev',
      },
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}

function testimonialSliderv2(){
	var testimonialSliderv2 = new Swiper('.testimonial-v2-slider', {
			effect: '',
			loop: true,
			speed: 100,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".testimonial-v2-slider .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
	 });
}