$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // --------------------------

    var navTriangle;
    var borderWidth;

    // --------------------------

    var indexTabs;
    var indexActiveTab = 0;
    var attrForActiveTabNav;
    var parentEl;

    // --------------------------

    var videoId;
    var activeSlideIndex;
    var videoPopupId;

    // --------------------------

    var heightArr = [];
    var switchLangHeight;

    // --------------------------


    getScrollToTopBtn();

    getContactsBlockPosition();

    getClessesControlsPosition();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({
            "padding-bottom" :  $(".footer").outerHeight(true) + "px"
        });

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        if( bodyWidth <= 900 ) {

            $(".main-nav-sect").css({"height" : $(window).height() + "px"});

        }

        // -----------------------

        getNavTriangleSize();

        getActiveTabBgPositionInResize();

        getContactsBlockPosition();

        getClessesControlsPosition();

    });

    $(document).scroll(function() {

        getScrollToTopBtn();

    });
    
    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({
            "padding-bottom" :  $(".footer").outerHeight(true) + "px"
        });

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


    $(function() {

        for(indexTabs = 0; indexTabs < $(".tabs").length; indexTabs++ ) {

            if( $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").length > 0 ) {

                $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").css({"display" : "none"});

                $(".tabs:eq("+ indexTabs +") .tab-nav").append("<span class='active_bg'></span>");

                $(".tabs:eq("+ indexTabs +") .tab-link").each(function() {

                    if($(this).hasClass("active")) {

                        indexActiveTab = $(this).attr("data-tab-link-index");

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab[data-tab-link = '"+ indexActiveTab +"']").fadeIn(300)

                    }

                });

                getActiveTabBgPosition(indexTabs, indexActiveTab);

            }

        }     

    });

    $(function() {

        $(".tabs .tab-nav li .tab-link").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("tabs")) {

                    indexTabs = $(".tabs").index(parentEl);

                    break;

                }

            }

            attrForActiveTabNav = $(this).attr("data-tab-link-index");

            if($(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").is(":hidden")) {

                $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link").removeClass("active");

                $(this).addClass("active");

                $(".tabs:eq("+ indexTabs +") .tab").each(function() {

                    if($(this).is(":visible") && $(this).attr("data-tab-link") != attrForActiveTabNav) {

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box").height($(this).height());

                    }

                });

                $(".tabs:eq("+ indexTabs +") .tab").fadeOut(300);

                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").fadeIn(300);

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").animate({"height" : $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").height() + "px"}, 300);

                }, 400);
 
                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").css({"height" : "auto"});

                }, 800);

            }            

            getActiveTabBgPosition(indexTabs, attrForActiveTabNav);


        });



    });

    // --------------------------------------------

    $(function() {

        if( $(".about-us-slider").length > 0 ) {

            $(".about-us-slider").slick("slickPause");

            videoId =  window[$(".about-us-slider .slide.slick-current.slick-active video").attr("id")];
            videoId.play();

        }

    });

    $(function() {

        $(".play-btn").click(function() {

            activeSlideIndex = $(".promo-slider .slide.slick-current.slick-active").index();

            videoId =  window[$(".promo-slider .slide.slick-current.slick-active video").attr("id")];
            videoId.pause();

            $(".popups-section, .popup-bg").fadeIn(500);

            $(".popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeIn(600);

            videoPopupId =  window[$(".popup-block[data-index-actie-slide = '"+ activeSlideIndex +"'] video").attr("id")];
            videoPopupId.play();

        });

        $(".popup-bg, .close-slide-popup").click( function(){

            $(".popups-section, .popup-bg").fadeOut(500);
            videoPopupId.pause();
            $(".popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

            if($(".promo-slider .slide.slick-current.slick-active").index() == activeSlideIndex) {

                videoId =  window[$(".promo-slider .slide.slick-current.slick-active video").attr("id")];
                videoId.play();

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".popups-section").is(":visible")) {

                $(".popups-section, .popup-bg").fadeOut(500);
                videoPopupId.pause();
                $(".popup-block[data-index-actie-slide = '"+ activeSlideIndex +"']").fadeOut(600);

                if($(".promo-slider .slide.slick-current.slick-active").index() == activeSlideIndex) {

                    videoId =  window[$(".promo-slider .slide.slick-current.slick-active video").attr("id")];
                    videoId.play();

                }

            }

        });

    });

    // --------------------------------------------

    $(function() {

        if( $(".promo-slider").length > 0 ) {

            $(".promo-slider").slick("slickPause");

            videoId =  window[$(".promo-slider .slide.slick-current.slick-active video").attr("id")];
            videoId.play();

        }

    });

    // --------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-sect").is(":hidden") ) {

                $(".main-nav-sect").fadeIn(500);
                $(".main-nav-sect").css({"height" : $(window).height() + "px"});
                $(this).addClass("active");

            } else {

                $(".main-nav-sect").fadeOut(500);
                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".main-nav-sect").is(":visible")) {

                $(".main-nav-sect").fadeOut(500);
                $(".respmenubtn").removeClass("active");

            }

        });

    });

    // ------------------------------

    $(function() {

        $(".select-box").click(function() {

            $(this).toggleClass("active");

        });

    });

    // -------------------------------

    $(function() {

        $(".table .cell").each(function() {

            if( !$(this).children($(".inner")).length ) {

                $(this).addClass("noborder");

            }

        });

    });

    // --------------------------------------------------------------------------

    $(function() {

        $(".cards-thumbnails .card-img-block").click(function() {

                parentEl = $(this).parent();

                for(;;) {

                    parentEl = parentEl.parent();

                    if(parentEl.hasClass("thumbnail")) {

                        indexTabs = $(".cards-thumbnails .thumbnail").index(parentEl);

                        break;

                    }

                }

                $(".popups-cards-sect").fadeIn(400);

                $(".cards-slider").slick({
                  dots: false,
                  speed: 700,
                  slidesToShow: 1,
                  initialSlide: indexTabs
                });

                $(".close-card-popup, .popup-card-bg").click(function() {

                    $(".popups-cards-sect").fadeOut(400);

                    setTimeout(function() {

                        $(".cards-slider").slick("unslick");

                    }, 500);                    

                });

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".popups-cards-sect").is(":visible")) {

                $(".popups-cards-sect").fadeOut(400);

                setTimeout(function() {

                    $(".cards-slider").slick("unslick");

                }, 500);

            }

        });

        // ---------------------------------

        $(function() {

            $(".scroll-to-top").click(function () {

                $("body,html").animate({

                    scrollTop: 0

                }, 1000);

                return false;

            });

        });

    });

    // ------------------------------------------------------------------------------

    function getActiveTabBgPosition(indexTabs, indexActiveTab) {

        if( $(".tabs-content-box .tab").length > 0 ) {

            $(".tabs:eq("+ indexTabs +") .tab-nav .active_bg").animate({
                "width" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").outerWidth() + "px",
                "height" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").outerHeight() + "px",
                "top" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").offset().top - $(".tabs:eq("+ indexTabs +") .tab-nav").offset().top + "px",
                "left" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").offset().left - $(".tabs:eq("+ indexTabs +") .tab-nav").offset().left + "px"
            },700);

        }

    }

    function getActiveTabBgPositionInResize() {

        for( indexTabs = 0; indexTabs < $(".tabs").length; indexTabs++ ) {

            $(".tabs:eq("+ indexTabs +") .tab-link").each(function() {

                if($(this).hasClass("active")) {

                    indexActiveTab = $(this).attr("data-tab-link-index");

                    $(".tabs:eq("+ indexTabs +") .tab-nav .active_bg").css({
                        "width" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").outerWidth() + "px",
                        "height" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").outerHeight() + "px",
                        "top" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").offset().top - $(".tabs:eq("+ indexTabs +") .tab-nav").offset().top + "px",
                        "left" : $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link:eq("+ indexActiveTab +")").offset().left - $(".tabs:eq("+ indexTabs +") .tab-nav").offset().left + "px"
                    });

                }

            });

        }
    }

    // ----------------------------

    function getClessesControlsPosition() {

        if( $(".classes_slider").length > 0 ) {

            $(".classes_slider .slick-dots").css({

                "top" : ( $(".classes_slider .controls-size").offset().top - $(".classes_slider").offset().top ) + "px"

            });

            $(".class-promo + .section").css({
                "padding-top" : $(".classes_slider").offset().top + $(".classes_slider").height() - $(".class-promo + .section").offset().top + "px"
            });

        }

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

    // -----------------------------

    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }

    // -------------------------------

    function getContactsBlockPosition() {

        if($(".contacts-content").length > 0) {

            $(".contacts-content").css({"left" : $(".coor-left").offset().left + "px"});

        }

    }

});
