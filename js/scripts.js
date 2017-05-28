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

    // var indexActiveSlide = 0;

    // var indexActiveTab;
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

    // getActiveSlideBgPosition(indexActiveSlide);

    // getSwitchLangHright();

    getScrollToTopBtn();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});
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

        // getSwitchLangHright();

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

    // --------------------------------

    // $(function() {

    //     $(".center-block .play-btn").bind({

    //         mouseenter: function() {

    //             $(this).children("img").animate({
    //                 "width" : 50 + "px",
    //                 "height" : 50 + "px"
    //             }, 500);

    //         }, mouseleave: function() {

    //             $(this).children("img").animate({
    //                 "width" : 40 + "px",
    //                 "height" : 40 + "px"
    //             }, 500);

    //         }

    //     });

    // });

    // ----------------------------

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

        if( $(".promo-slider").length > 0 ) {

            $(".promo-slider").slick("slickPause");

            videoId =  window[$(".promo-slider .slide.slick-current.slick-active video").attr("id")];
            videoId.play();

            // document.getElementById('myVideo').addEventListener('ended',myHandler,false);
            // function myHandler(e) {
            //     $('.promo-slider').slick('slickPlay');
            // }

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

    // --------------------------------------------------------------------------

    // $(function() {

    //     var imgCard;
    //     var angelCount;
    //     var originWidth;
    //     var originTop;
    //     var originLeft;
    //     var angel = -20;

    //     $(".cards-thumbnails .img-box").click(function() {

    //         imgCard = $(this).children($(".card"));

    //         $(".popups-cards-sect").css({"display" : "block"});

    //         originWidth = imgCard.width();

    //         originTop = imgCard.offset().top - $(document).scrollTop();

    //         originLeft = imgCard.offset().left;

    //         angelCount = setInterval(function() {

    //             angel+=3;

    //             imgCard.css({
    //                 "-webkit-transform" : "rotate("+ (angel) +"deg)",
    //                 "-moz-transform" : "rotate("+ (angel) +"deg)",
    //                 "-ms-transform" : "rotate("+ (angel) +"deg)",
    //                 "-o-transform" : "rotate("+ (angel) +"deg)",
    //                 "transform" : "rotate("+ (angel) +"deg)"
    //             });

    //             if(angel >= 0) {

    //                 clearInterval(angelCount);

    //                 angel = 0;

    //                 imgCard.css({
                        
    //                     "-webkit-transform" : "rotate("+ (0) +"deg)",
    //                     "-moz-transform" : "rotate("+ (0) +"deg)",
    //                     "-ms-transform" : "rotate("+ (0) +"deg)",
    //                     "-o-transform" : "rotate("+ (0) +"deg)",
    //                     "transform" : "rotate("+ (0) +"deg)"
    //                 });

    //                 imgCard.css({
    //                     "position" : "fixed",
    //                     "z-index" : "12",
    //                     "top" : originTop + "px",
    //                     "left" : originLeft + "px"
    //                 });

    //             }

    //         }, 35);

    //         imgCard.animate({
    //             "width" : $(".card-content").width() + "px"
    //         }, 300);

    //         imgCard.animate({
    //             "top" : ( $(window).height() - $(".card-content").height() ) / 2 + "px",
    //             "left" : ( $(window).width() - $(".card-content").width() ) / 2  + "px",            
    //         }, 500);

    //         setTimeout(function() {

    //             angel = 0;

    //             angelCount = setInterval(function() {

    //                 imgCard.css({
    //                     "-webkit-transform" : "rotateY("+ (angel++) +"deg)",
    //                     "-moz-transform" : "rotateY("+ (angel++) +"deg)",
    //                     "-ms-transform" : "rotateY("+ (angel++) +"deg)",
    //                     "-o-transform" : "rotateY("+ (angel++) +"deg)",
    //                     "transform" : "rotateY("+ (angel++) +"deg)"
    //                 });

    //                 if(angel >= 90) {

    //                     clearInterval(angelCount);

    //                     angel = 0;

    //                     imgCard.css({
    //                         "-webkit-transform" : "rotateY("+ (90) +"deg)",
    //                         "-moz-transform" : "rotateY("+ (90) +"deg)",
    //                         "-ms-transform" : "rotateY("+ (90) +"deg)",
    //                         "-o-transform" : "rotateY("+ (90) +"deg)",
    //                         "transform" : "rotateY("+ (90) +"deg)"
    //                     });

    //                 }

    //             }, 35);

    //         }, 800);

    //         setTimeout(function() {

    //             $(".popup-card-bg").fadeIn(300);

    //             angel = 90;

    //             angelCount = setInterval(function() {

    //                 $(".card-content").css({

    //                     "-webkit-transform" : "rotateY("+ ( angel-- ) +"deg)",
    //                     "-moz-transform" : "rotateY("+ ( angel-- ) +"deg)",
    //                     "-ms-transform" : "rotateY("+ ( angel-- ) +"deg)",
    //                     "-o-transform" : "rotateY("+ ( angel-- ) +"deg)",
    //                     "transform" : "rotateY("+ ( angel-- ) +"deg)"

    //                 });

    //                 if(angel <= 0) {

    //                     clearInterval(angelCount);

    //                     $(".card-popup-header").animate({
    //                         "opacity" : 1
    //                     }, 300);

    //                 }

    //             }, 35);


    //         }, 1500);

            

    //     });

    //     $(".close-card-popup").click(function() {

    //         $(".card-popup-header").animate({
    //             "opacity" : 0
    //         }, 300);

    //         angel = 0;

    //         angelCount = setInterval(function() {

    //             angel+=3;

    //             $(".card-content").css({

    //                 "-webkit-transform" : "rotateY("+ ( angel ) +"deg)",
    //                 "-moz-transform" : "rotateY("+ ( angel ) +"deg)",
    //                 "-ms-transform" : "rotateY("+ ( angel ) +"deg)",
    //                 "-o-transform" : "rotateY("+ ( angel ) +"deg)",
    //                 "transform" : "rotateY("+ ( angel ) +"deg)"

    //             });

    //             if(angel >= 90) {

    //                 angel = 90;

    //                 clearInterval(angelCount);

    //                 $(".card-content").css({

    //                     "-webkit-transform" : "rotateY("+ ( angel ) +"deg)",
    //                     "-moz-transform" : "rotateY("+ ( angel ) +"deg)",
    //                     "-ms-transform" : "rotateY("+ ( angel ) +"deg)",
    //                     "-o-transform" : "rotateY("+ ( angel ) +"deg)",
    //                     "transform" : "rotateY("+ ( angel ) +"deg)"

    //                 });                    

    //                 $(".popup-card-bg").fadeOut(500);

    //             }

    //         }, 35);

    //         setTimeout(function() {

    //             angel = 90;

    //             angelCount = setInterval(function() {

    //                 angel-=3;

    //                 imgCard.css({
    //                     "-webkit-transform" : "rotateY("+ (angel) +"deg)",
    //                     "-moz-transform" : "rotateY("+ (angel) +"deg)",
    //                     "-ms-transform" : "rotateY("+ (angel) +"deg)",
    //                     "-o-transform" : "rotateY("+ (angel) +"deg)",
    //                     "transform" : "rotateY("+ (angel) +"deg)"
    //                 });

    //                 if(angel <= 0) {

    //                     clearInterval(angelCount);

    //                     angel = 90;

    //                     imgCard.css({
    //                         "-webkit-transform" : "rotateY("+ (0) +"deg)",
    //                         "-moz-transform" : "rotateY("+ (0) +"deg)",
    //                         "-ms-transform" : "rotateY("+ (0) +"deg)",
    //                         "-o-transform" : "rotateY("+ (0) +"deg)",
    //                         "transform" : "rotateY("+ (0) +"deg)"
    //                     });

    //                     imgCard.animate({
    //                         "width" : originWidth + "px"
    //                     }, 300);

    //                     angel = 0;

    //                     setTimeout(function() {

    //                         angelCount = setInterval(function() {

    //                             angel-=3;

    //                             imgCard.css({
    //                                 "-webkit-transform" : "rotate("+ (angel) +"deg)",
    //                                 "-moz-transform" : "rotate("+ (angel) +"deg)",
    //                                 "-ms-transform" : "rotate("+ (angel) +"deg)",
    //                                 "-o-transform" : "rotate("+ (angel) +"deg)",
    //                                 "transform" : "rotate("+ (angel) +"deg)"
    //                             });

    //                             if(angel <= -20) {

    //                                 clearInterval(angelCount);

    //                                 angel = -20;

    //                                 imgCard.css({
                                        
    //                                     "-webkit-transform" : "rotate("+ (-20) +"deg)",
    //                                     "-moz-transform" : "rotate("+ (-20) +"deg)",
    //                                     "-ms-transform" : "rotate("+ (-20) +"deg)",
    //                                     "-o-transform" : "rotate("+ (-20) +"deg)",
    //                                     "transform" : "rotate("+ (-20) +"deg)"
    //                                 });

    //                                 imgCard.css({
    //                                     "position" : "relative"
    //                                 });

    //                             }

    //                         }, 35);

    //                     }, 400);

    //                     imgCard.animate({
    //                         "top" : originTop + "px",
    //                         "left" : originLeft  + "px",            
    //                     }, 500);                     

    //                 }

    //             }, 35);

    //         }, 1500);


    //     });

    // });

    // ---------------------------------

    $(function() {

        $(".scroll-to-top").click(function () {

            $("body,html").animate({

                scrollTop: 0

            }, 1000);

            return false;

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

    // function getSwitchLangHright() {

    //     $(".header .col").each(function() {

    //         if( $(this).hasClass("col-4") != false) {

    //             heightArr.push( parseInt( $(this).height() ) );

    //         }
    //         //  else {

    //         //     console.log( $(this).hasClass("col-4") );

                

    //         // }

    //     });

    //     console.log( heightArr );

    //     // $(".switch-lang").css({ "top" : -1 * ( $(".switch-lang-block").offset().top - $(".header").offset().top ) + "px"});

    //     switchLangHeight = Math.max.apply(Math,heightArr);

    //     $(".switch-lang-block").css({"height" : switchLangHeight + "px"});

    // }

    // -------------------------------

    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }



});
