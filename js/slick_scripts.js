$(document).ready(function() {

    $(function() {

        var indexSlide;
        var sliderName;

        if( $("[data-slider-name]").length > 0 ) {


            $("[data-slider-name]").each(function() {

                sliderName = $(this).attr("data-slider-name");

                $("[data-slider-name = '"+ sliderName  +"']").slick("slickPause");

                for( var indexSlide = 0; indexSlide <= $("[data-slider-name = '"+ sliderName  +"'] .slide").length - 1; indexSlide++ ) {

                    if( $("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +") video").length > 0) {

                        videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +") video").attr("id")];

                        videoId.pause();

                    }

                    if( $("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +").slick-current.slick-active video").length > 0 )  {

                        videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide:eq("+ indexSlide +").slick-current.slick-active video").attr("id")];
                        videoId.play();

                        $("[data-slider-name = '"+ sliderName  +"']").slick("slickPlay");

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

                    $("[data-slider-name = '"+ sliderName  +"']").slick("slickPause");

                    break;

                }

            }

            activeSlideIndex = $("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index();

            videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
            videoId.pause();

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popup-bg").fadeIn(500);

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeIn(600);

            videoPopupId =  window[$(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"'] video").attr("id")];
            videoPopupId.play();

        });

        $(".popup-bg, .close-slide-popup").click( function(){

            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-bg").fadeOut(500);
            videoPopupId.pause();
            $(".popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

            if($("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index() == activeSlideIndex) {

                videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                videoId.play();

                $("[data-slider-name = '"+ sliderName  +"']").slick("slickPlay");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".popups-section").is(":visible")) {

                $(".popups-section[data-popup-slider-name = '"+ sliderName +"'], .popups-section[data-popup-slider-name = '"+ sliderName +"'] .popup-bg").fadeOut(500);
                videoPopupId.pause();
                $(".popups-section[data-popup-slider-name = '"+ sliderName +"'].popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

                if($("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active").index() == activeSlideIndex) {

                    videoId =  window[$("[data-slider-name = '"+ sliderName  +"'] .slide.slick-current.slick-active video").attr("id")];
                    videoId.play();

                }

            }

        });

    });

});