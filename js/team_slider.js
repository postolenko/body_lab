$(document).ready(function() {

	var idexSlide;
	var wrapperTeamSlider;
	var wrapperMiniatureSlider;
	var initialSlideSlick = 0;
	var initialized = false;

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    $(window).resize(function() {

    	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    	slick_slider();

    });

    slick_slider();

    if( bodyWidth > 768 ) {

		initialTeamSlider();

    }

	$(".team-big-slider-box").css({
		"height" : 0,
		"overflow" : "hidden"
	});

	$(".teachers-miniature-slider .slide").click(function(slideClick) {

		slideClick.preventDefault();

		if( $(".teachers-miniature-slider.slick-initialized").length == 0 && bodyWidth > 768) {

			idexSlide = $(".teachers-miniature-slider .slide").index(this);

			$(".teachers-miniature-slider .slide").each(function() {

				if($(this).hasClass("active")) {

					$(this).removeClass("active");

					$(".team-slider .slide").each(function() {

						if($(this).is(":visible")) {

							$(this).fadeOut(300);

						}

					});

				}

			});

			setTimeout(function() {

				$(".team-slider .slide:eq("+ idexSlide +")").fadeIn(400);

			}, 500);

			$(this).addClass("active");			

		}

		if( $(".team-big-slider-box").height() <= 0 ) {

			if( $(".teachers-miniature-slider.slick-initialized").length == 0 && bodyWidth > 768) {

				initialTeamSlider();

			}

			$(".team-big-slider-box").delay(300).animate({
				"height": $(".team-slider").height() + "px"
			}, 700);

			setTimeout(function() {

				$(".team-big-slider-box").css({
					"height": "auto !important",
					"overflow" : "none"
				});

			}, 2000);

		}

	});

	function initialTeamSlider() {

		if( $(".teachers-miniature-slider").length > 0 && $(".team-slider").length > 0 ) {

	    	$(".teachers-miniature-slider .slide").each(function() {

				if($(this).hasClass("active")) {

					$(".team-slider .slide").css({"display" : "none"});

					idexSlide = $(".teachers-miniature-slider .slide.active").index();

					$(this).addClass("active");

					$(".team-slider .slide").each(function() {

						if($(this).is(":visible")) {

							$(this).fadeOut(300);

						}

					});

					$(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

				}

			});

	    }

    }

	function slick_slider() {

		if( $(".teachers-miniature-slider").length > 0 && $(".team-slider").length > 0 ) {

			wrapperTeamSlider = $(".team-slider");
			wrapperMiniatureSlider = $(".teachers-miniature-slider");

			if ($(".teachers-miniature-slider.slick-initialized").length > 0
				&& $(".team-slider.slick-initialized").length > 0
				&& bodyWidth > 768 ) {

				setTimeout(function() {

					wrapperTeamSlider.slick("unslick");
					wrapperMiniatureSlider.slick("unslick");
					$(".teachers-miniature-slider .slide").css({"display" : "inline-block"});
					initialTeamSlider();

				}, 400);

				if( $(".team-big-slider-box").height() > 0 && initialized == true ) {

					$(".team-big-slider-box").delay(300).animate({
						"height": $(".team-slider").height() + "px"
					}, 700);

					setTimeout(function() {

						$(".team-big-slider-box").css({
							"height": "auto !important",
							"overflow" : "none"
						});

					}, 1100);

				}

				initialized = false;

			} else if( bodyWidth <= 768) {

				if( initialized == false ) {

					$(".team-slider .slide").css({"display" : "block"});
					$(".teachers-miniature-slider .slide").css({"display" : "block"});
					// $(".team-big-slider-box").css({"height": "auto"});

					wrapperTeamSlider.not('.slick-initialized').slick({
					  dots: false,
					  arrows: false,
					  speed: 700,
					  fade: true,
					  slidesToShow: 1,
					  slidesToScroll: 1,
					  autoplay: true,
					  autoplaySpeed: 16000,
					  adaptiveHeight: true,
					  initialSlide: idexSlide,
					  asNavFor: $(".teachers-miniature-slider")
					});

					wrapperMiniatureSlider.not('.slick-initialized').slick({
						arrows: true,
				   		slidesToShow: 3,
						slidesToScroll: 1,
						dots: false,
						centerMode: true,
						initialSlide: idexSlide,
						asNavFor: $(".team-slider"),
						responsive: [
							{
							breakpoint: 768,
							settings: {
							   		slidesToShow: 3,
									slidesToScroll: 1
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
						]
					});

					$(".teams-sliders-box").css({"height" : "auto"});

				}

				initialized = true;

			}

		}

	}


});


