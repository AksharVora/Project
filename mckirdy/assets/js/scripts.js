AOS.init();

$(document).ready(function(){
    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    
    function sliderInit() {
      var $slider = $('.slider-counter');
      $slider.each(function() {
        var $sliderParent = $(this).parent();
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                adaptiveHeight: true
              }
            }
          ]
        });
    
        if ($(this).find('.slick-slide').length > 1) {
          $(this).siblings('.slides-numbers').show();
        }
    
        $(this).on('afterChange', function(event, slick, currentSlide){
          $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });
    
        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
        
      });
      
    //   $('.slick-next').on('click', function () {
    //     console.log('test');
    //     $('.slider-holder').slick('slickGoTo', 5);
    // });
    };
    
    sliderInit();
    setTimeout(function () {
        $("body").on("click" , ".prev-icon" , function(){
            
            $(this).parents(".slider-outer").find(".slick-prev").trigger("click");
        });
        $("body").on("click" , ".next-icon" , function(){
            $(this).parents(".slider-outer").find(".slick-next").trigger("click");
        });
    }, 500);
});