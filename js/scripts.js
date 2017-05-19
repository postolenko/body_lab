$(document).ready(function() {


    var navTriangle;
    var borderWidth;

    // --------------------------

    var indexActiveSlide;
    var indexActiveSlide = 0;

    // --------------------------

    // getPaddingTopPromoSection();

    getActiveSlideBgPosition(indexActiveSlide);


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------

        // getPaddingTopPromoSection();

        getNavTriangleSize();

        getActiveSlideBgPosition(indexActiveSlide);

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".main-nav li a").each(function() {

            $(this).append("<span class='tr'></span>");

            getNavTriangleSize();

        });

    });

    // ----------------------------

    $(function() {

        $(".slick-arrow").bind({

            mouseenter: function() {

                if( $(this).hasClass("slick-prev") ) {

                    $(this).animate({"left" : 0}, 300);

                } else if($(this).hasClass("slick-next")) {

                    $(this).animate({"right" : 0}, 300);

                }

            }, mouseleave: function() {

                if( $(this).hasClass("slick-prev") ) {

                    $(this).animate({"left" : -20 + "px"}, 300);

                } else if($(this).hasClass("slick-next")) {

                    $(this).animate({"right" : -20 + "px"}, 300);

                }

            }

        });

    });

    // --------------------------------

    $(function() {

        $(".center-block .play-btn").bind({

            mouseenter: function() {

                $(this).children("img").animate({
                    "width" : 50 + "px",
                    "height" : 50 + "px"
                }, 500);

            }, mouseleave: function() {

                $(this).children("img").animate({
                    "width" : 40 + "px",
                    "height" : 40 + "px"
                }, 500);

            }

        });

    });

    // ----------------------------

    $(function() {

        $(".promo_slider_nav").append("<span class='active_bg'></span>");

        $(".slider-nav-block .active_bg").css({
            "width" : $(".slider-nav li a:eq("+ 0 +")").outerWidth() + "px",
            "height" : $(".slider-nav li a:eq("+ 0 +")").outerHeight() + "px",
            "top" : $(".slider-nav li a:eq("+ 0 +")").offset().top - $(".slider-nav-block").offset().top + "px",
            "left" : $(".slider-nav li a:eq("+ 0 +")").offset().left - $(".slider-nav-block").offset().left + "px"
        });

    });

    $(function() {

        $(".slider-nav li a").click(function(promoSliderEvent) {

            promoSliderEvent.preventDefault();

            indexActiveSlide = $(".slider-nav li a").index(this);

            $(".promo-slider-box .slick-dots li:eq("+ indexActiveSlide +")").click();

        });

    });

    function getActiveSlideBgPosition(indexActiveSlide) {

        $(".slider-nav-block .active_bg").css({
            "width" : $(".slider-nav li a:eq("+ indexActiveSlide +")").outerWidth() + "px",
            "height" : $(".slider-nav li a:eq("+ indexActiveSlide +")").outerHeight() + "px",
            "top" : $(".slider-nav li a:eq("+ indexActiveSlide +")").offset().top - $(".slider-nav-block").offset().top + "px",
            "left" : $(".slider-nav li a:eq("+ indexActiveSlide +")").offset().left - $(".slider-nav-block").offset().left + "px"
        });

    }

    // ----------------------------

    function getNavTriangleSize() {

        $(".main-nav li a").each(function() {

            navTriangle = $(this).children(".tr");

            borderWidth = $(this).outerWidth() / 2;

            navTriangle.css({
                "border-left-width" : borderWidth + "px",
                "border-right-width" : borderWidth + "px"
            });

        });

    }

    // ------------------------------

    function getPaddingTopPromoSection() {
        // $(".promo-section").css({
        //     "padding-top" : $(".header").height() + "px"
        // });


        // console.log($(".header").height());
    }


});
