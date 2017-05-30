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