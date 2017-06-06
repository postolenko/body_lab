// $(document).ready(function() {

$(document).on('ready', function () {

     $(".promo-slider").not('.slick-initialized').slick({
      dots: false,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      zIndex: 1
    });

    $(".promo-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $(".promo-slider .slide").each(function() {

            if( $(".promo-slider .slide:eq("+ currentSlide +") video").length > 0) {

                videoId =  window[$(".promo-slider .slide:eq("+ currentSlide +") video").attr("id")];

                videoId.pause();

            }

        });

        if( $(".promo-slider .slide:eq("+ nextSlide +") video").length > 0 ) {

            videoId =  window[$(".promo-slider .slide:eq("+ nextSlide +") video").attr("id")];

            videoId.play();

        }               

    });

    $(".about-us-slider").not('.slick-initialized').slick({
      dots: false,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      zIndex: 1
    });

    $(".about-us-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $(".about-us-slider .slide").each(function() {

            if( $(".about-us-slider .slide:eq("+ currentSlide +") video").length > 0) {

                videoId =  window[$(".about-us-slider .slide:eq("+ currentSlide +") video").attr("id")];

                videoId.pause();

            }

        });

        if( $(".about-us-slider .slide:eq("+ nextSlide +") video").length > 0 ) {

            videoId =  window[$(".about-us-slider .slide:eq("+ nextSlide +") video").attr("id")];

            videoId.play();

        }               

    });

    // ----------------


     $(".class_bg_slider").not('.slick-initialized').slick({
      dots: false,
      arrows: false,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      zIndex: 1
    });

    $(".class_bg_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $(".class_bg_slider .slide").each(function() {

            if( $(".class_bg_slider .slide:eq("+ currentSlide +") video").length > 0) {

                videoId =  window[$(".class_bg_slider .slide:eq("+ currentSlide +") video").attr("id")];

                videoId.pause();

            }

        });

        if( $(".class_bg_slider .slide:eq("+ nextSlide +") video").length > 0 ) {

            videoId =  window[$(".class_bg_slider .slide:eq("+ nextSlide +") video").attr("id")];

            videoId.play();

        }               

    });


    // ----------------

    $(".teachers-slider").not('.slick-initialized').slick({
      dots: false,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 16000,
        responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(function() {

        var indexSlide;
        var sliderName;

        if( $("[data-slider-name]").length > 0 ) {

            $("[data-slider-name]").each(function() {

                sliderName = $(this).attr("data-slider-name");

                $(this).not('.slick-initialized').slick("slickPause");

                for( var indexSlide = 0; indexSlide <= $("[data-slider-name = '"+ sliderName  +"'] .slide").length - 1; indexSlide++ ) {

                    if( $("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +") video").length > 0) {

                        videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +") video").attr("id")];

                        videoId.pause();

                    }

                    if( $("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +").slick-current.slick-active video").length > 0 )  {

                        videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +").slick-current.slick-active video").attr("id")];
                        videoId.play();

                        $("[data-slider-name = '"+ sliderName  +"']").not('.slick-initialized').slick("slickPlay");

                        break;

                    }

                }

            });

        }

    });

    $(function() {

        // var sliderName;

        $(".play-btn").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.attr("data-slider-name")) {

                    sliderName = parentEl.attr("data-slider-name");

                    $("[data-slider-name = '"+ sliderName  +"']").not('.slick-initialized').slick("slickPause");

                    break;

                }

            }

            activeSlideIndex = $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index();

            if( $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").length > 0 ) {

                videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                videoId.pause();

            }

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popup-bg").fadeIn(500);

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeIn(600);

            if( $(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"'] video").length > 0 ) {

                videoPopupId =  window[$(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"'] video").attr("id")];
                videoPopupId.play();

            }

        });

        $(".popup-bg, .close-slide-popup").click( function(){

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-bg").fadeOut(500);

            videoPopupId.pause();

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

            if($("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index() == activeSlideIndex) {

                if( $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").length > 0 ) {

                    videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                    videoId.play();

                }

                $("[data-slider-name = '"+ sliderName  +"']").not('.slick-initialized').slick("slickPlay");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".popups-section").is(":visible")) {

                $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-bg").fadeOut(500);

                videoPopupId.pause();

                $(".popups-section[data-popup-slider-name = '"+ sliderName +"'].popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

                if($("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index() == activeSlideIndex) {

                    if( $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").length > 0 ) {

                        videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                        videoId.play();

                    }

                    $("[data-slider-name = '"+ sliderName  +"']").not('.slick-initialized').slick("slickPlay");

                }

                // if( $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index() == activeSlideIndex ) {

                //     videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                //     videoId.play();

                // }

            }

        });

    });

});