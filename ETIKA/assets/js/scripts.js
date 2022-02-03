$(()=>{
  var createSlick = ()=>{
    let slider = $(".hero-slider");

    slider.not('.slick-initialized').slick({
      autoplay: false,
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });	
  }

  createSlick();

 $(window).on( 'resize orientationchange', createSlick );
})


$(document).ready(function(){
	$(".hero-item").hover(function(){
		var bgVal = $(this).find(".cover-image img").attr("src");
		$(this).parents(".hero-section").css({"background-image": "url(" + bgVal + ")"});

	})
	$('.services-slider').slick({
	  
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  centerMode: true,
	  arrows: false,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	      	centerMode: false,
	      	infinite: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	centerMode: false,
	      	infinite: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.gallery-slider').slick({
	  
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  centerMode: true,
	  arrows: false,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	      	centerMode: false,
	      	infinite: true,
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	centerMode: false,
	      	infinite: true,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	$('.testimonial-slider').slick({
	  
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  centerMode: true,
	  arrows: false,
	  dots: true,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
})




