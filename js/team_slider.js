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
		"height": "0px",
		"overflow" : "hidden"
	});

	$(".teachers-miniature-slider .slide").click(function(slideClick) {

		slideClick.preventDefault();

		if( !$(".teachers-miniature-slider.slick-initialized").length &&
			!$(".team-slider.slick-initialized").length &&
		 	bodyWidth > 768) {

			idexSlide = $(".teachers-miniature-slider .slide").index(this);

			if($(this).hasClass("active")) {

				return true;

			} else {

				$(".teachers-miniature-slider .slide").removeClass("active");

				$(".team-slider .slide").removeClass("active");

				$(".team-slider .slide").each(function() {

					if($(this).is(":visible")) {

						$(".team-slider").css({
							"height": $(this).height() + "px"
						});

						$(this).fadeOut(300);

					}

				});

			}

			setTimeout(function() {

				$(".team-slider .slide:eq("+ idexSlide +")").fadeIn(500);

				$(".team-big-slider-box").animate({
					"height": $(".team-slider .slide:eq("+ idexSlide +")").height() + "px"
				}, 700);

			}, 500);

			setTimeout(function() {

				$(".team-big-slider-box").css({
					"height": "auto",
					"overflow" : "none"
				});

				$(".team-slider").css({
					"height": "auto"
				});

			}, 1500);

			$(this).addClass("active");

		} else {

			if( $(this).hasClass("active") ) {

				return true;

			} else {

				$(".teachers-miniature-slider .slide").removeClass("active");

				$(".team-slider .slide").removeClass("active");

				$(this).addClass("active");

			}

			$(".team-big-slider-box").animate({
				"height": $(".team-slider").height() + "px"
			}, 700);

			setTimeout(function() {

				$(".team-big-slider-box").css({
					"height": "auto"
				});

			}, 1500);

		}

	});

	function initialTeamSlider() {

		if( $(".teachers-miniature-slider").length > 0 && $(".team-slider").length > 0 && bodyWidth > 768 ) {

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

					if( !$(".team-slider.slick-initialized").length && !$(".teachers-miniature-slider.slick-initialized").length ) {

						$(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

						$(".team-big-slider-box").delay(200).animate({
							"height": $(".team-slider .slide:eq("+ idexSlide +")").height() + "px"
						}, 700);

						setTimeout(function() {

							$(".team-big-slider-box").css({
								"height": "auto",
								"overflow" : "none"
							});

						}, 1700);

					}

				}

			});

	    }

    }


    var intervalInitialized = setInterval(function() {

		if( $(".team-slider.slick-initialized").length > 0 && $(".teachers-miniature-slider.slick-initialized").length > 0 && bodyWidth <= 768 ) {

			clearTimeout( intervalInitialized );

			for( var initialSlide = 0; initialSlide <= $(".teachers-miniature-slider .slide").length - 1; initialSlide++ ) {

				if( $(".teachers-miniature-slider .slide:eq("+ initialSlide +")").hasClass("active") ) {

					$(".team-big-slider-box").css({
						"height": "auto",
						"overflow" : "none"
					});

				}

			}

		}

	}, 100);

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
					$(".teachers-miniature-slider .slide").css({
						"display" : "inline-block",
						"visibility" : "visible"
						});
					initialTeamSlider();

				}, 400);

				initialized = false;

			} else if( bodyWidth <= 768) {

					$(".team-slider .slide").css({"display" : "block"});
					$(".teachers-miniature-slider .slide").css({"display" : "block"});

					$(".teachers-miniature-slider .slide").each(function() {

						if($(this).hasClass("active")) {

							idexSlide = $(".teachers-miniature-slider .slide.active").index();

						}

					});

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

					initialized = true;

					setTimeout(function() {

						if( $(".team-big-slider-box").height() > 0 ) {

							$(".team-big-slider-box").css({"height" : "auto"});

						}

					}, 500);

			}

		}

	}


});


