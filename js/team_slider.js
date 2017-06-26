$(document).ready(function() {

	var idexSlide;
	var wrapper;
	var initialized = false;

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    $(window).resize(function() {

    	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    	console.log(bodyWidth);

    });

	if( $(".teachers-miniature-slider").length && bodyWidth > 768) {

		$(".team-slider .slide").css({"display" : "none"});

		$(".teachers-miniature-slider .slide .thumb").each(function() {

			if($(this).hasClass("active")) {

				idexSlide = $(".teachers-miniature-slider .slide .thumb.active").index();

				$(this).addClass("active");

				$(".team-slider .slide").each(function() {

					if($(this).is(":visible")) {

						$(this).fadeOut(300);

					}

				});

			}

		});

		$(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

		$(".teachers-miniature-slider .slide .thumb").click(function(slideClick) {

			slideClick.preventDefault();

			$(".team-slider .slide").each(function() {

				if($(this).is(":visible")) {

					$(".team-slider").css({"height" : $(this).height() + "px" });

				}

			});

			idexSlide = $(".teachers-miniature-slider .slide .thumb").index(this);

			$(".teachers-miniature-slider .slide .thumb").each(function() {

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

		});

	}


		// var wrapper;
		// var initialized = false;

	slick_slider();
	$(window).resize(slick_slider);		

	function slick_slider() {

		wrapper = $(".teachers-miniature-slider");

		if ($(".teachers-miniature-slider.slick-initialized").length > 0
			&& $(".team-slider.slick-initialized").length > 0
			&& bodyWidth > 768 ) {

			setTimeout(function() {

				wrapper.slick("unslick");

				$(".team-slider").slick("unslick");

				$(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

			}, 400);

			initialized = false;

		} else if( bodyWidth <= 768) {

			if( initialized == false ) {

				$(".team-slider").slick({
				  dots: false,
				  arrows: false,
				  speed: 700,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  autoplay: true,
				  autoplaySpeed: 16000,
				  asNavFor: $(".teachers-miniature-slider")
				});

				wrapper.slick({
					arrows: true,
			   		slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
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
						breakpoint: 480,
						settings: {
						   		slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
						breakpoint: 350,
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


