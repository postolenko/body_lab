$(document).ready(function() {

	var idexSlide;
	var wrapperTeamSlider;
	var wrapperMiniatureSlider;
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

	$(".teachers-miniature-slider .slide").click(function(slideClick) {

		slideClick.preventDefault();

		if( $(".teachers-miniature-slider.slick-initialized").length == 0 && bodyWidth > 768) {

			$(".team-slider .slide").each(function() {

				if($(this).is(":visible")) {

					$(".team-slider").css({"height" : $(this).height() + "px" });

				}

			});

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

			$(this).addClass("active");

			setTimeout(function() {

				$(".team-slider .slide:eq("+ idexSlide +")").fadeIn(300);

				$(".team-slider").animate({"height" : $(".team-slider .slide:eq("+ idexSlide +")").height() + "px"}, 300);

			}, 500);

			setTimeout(function() {

				$(".team-slider").css({"height" : "auto" });

			}, 600);

		}

	});

	function initialTeamSlider() {

    	$(".teachers-miniature-slider .slide").each(function() {

    		$(".team-slider .slide").css({"display" : "none"});

			if($(this).hasClass("active")) {

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

	function slick_slider() {

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

			initialized = false;

		} else if( bodyWidth <= 768) {

			if( initialized == false ) {

				$(".team-slider .slide").css({"display" : "block"});
				$(".teachers-miniature-slider .slide").css({"display" : "block"});

				wrapperTeamSlider.slick({
				  dots: false,
				  arrows: false,
				  speed: 700,
				  fade: true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  autoplay: true,
				  autoplaySpeed: 16000,
				  adaptiveHeight: true,
				  asNavFor: $(".teachers-miniature-slider")
				});

				wrapperMiniatureSlider.slick({
					arrows: true,
			   		slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
					centerMode: true,
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

			}

			initialized = true;

		}
	}


});


