$(document).ready(function(){
	serviceSlider();
  serviceSlider2()
  videoSlider()
});
$(function() {
           const tabLinks = $('.yellow .process-tab-links li a');
            
                tabLinks.click(function(event) {
                var $this = $(this);
                
                event.preventDefault();
                
                $('.yellow .process-tab-links a.active, .yellow .tabi-item-block.active').removeClass('active');
                
                $this.addClass('active');
                $($this.attr('href')).addClass('active');
            });
            const tabLinks2 = $('.green .process-tab-links li a');
            
                tabLinks2.click(function(event) {
                var $this = $(this);
                
                event.preventDefault();
                
                $('.green .process-tab-links a.active, .green .tabi-item-block.active').removeClass('active');
                
                $this.addClass('active');
                $($this.attr('href')).addClass('active');
            });
        });
$(document).ready(function() {

  $(".set > a").on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});

$(window).on("load" , function(){
  
  $(window).resize(function(){
    videoSlider();
  });
})

function serviceSlider2(){
  var swiper = new Swiper(".services-slider2", {
        slidesPerView: 2.5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay:true
          },
          // when window width is >= 640px
          980: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
      });
}

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
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            autoplay:true
          },
          // when window width is >= 640px
          980: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
      });
}

function videoSlider(){
  var swiper = new Swiper('.case-study-slider', {
  loop: true,
   autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.case-study-slider .swiper-button-next',
    prevEl: '.case-study-slider .swiper-button-prev',
  },

  /* ON INIT AUTOPLAY THE FIRST VIDEO */
  on: {
    init: function () {
      console.log('swiper initialized');
      var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
      currentVideo.trigger('play');
    },
  },
});

/* GET ALL VIDEOS */
var sliderVideos = $(".swiper-slide video");

/* SWIPER API - Event will be fired after animation to other slide (next or previous) */
swiper.on('slideChange', function () {
  console.log('slide changed');
  /* stop all videos (currentTime buggy without this loop idea - no "real" previousIndex) */
  sliderVideos.each(function( index ) {
    this.currentTime = 0;
  });

  /* SWIPER GET CURRENT AND PREV SLIDE (AND VIDEO INSIDE) */
  var prevVideo =  $("[data-swiper-slide-index=" + this.previousIndex + "]").find("video");
  var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
  prevVideo.trigger('stop');
  currentVideo.trigger('play');
});
}