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

		// if( bodyWidth < 768 ) {

		// 	// slick_slider();

		// 	if( initialized == false ) {

		// 		$(".team-slider").slick({
		// 		  dots: false,
		// 		  arrows: false,
		// 		  speed: 700,
		// 		  fade: true,
		// 		  slidesToShow: 1,
		// 		  slidesToScroll: 1,
		// 		  autoplay: true,
		// 		  autoplaySpeed: 16000,
		// 		  asNavFor: $(".teachers-miniature-slider")
		// 		});

		// 		$(".teachers-miniature-slider").slick({
		// 			arrows: true,
		// 			centerMode: true,
		// 	   		slidesToShow: 3,
		// 			slidesToScroll: 2,
		// 			centerMode: true,
		// 			dots: false,
		// 			asNavFor: $(".team-slider"),
		// 			responsive: [
		// 				{
		// 				breakpoint: 768,
		// 				settings: {
		// 				   		slidesToShow: 3,
		// 						slidesToScroll: 2
		// 					}
		// 				},
		// 				{
		// 				breakpoint: 600,
		// 				settings: {
		// 				   		slidesToShow: 1,
		// 						slidesToScroll: 1
		// 					}
		// 				}
		// 			]
		// 		});

		// 		initialized = true;

		// 	}

		// } else {

		// 	// setTimeout(function() {

		// 		if( initialized == true) {

		// 			$(".team-slider").slick("unslick");
					
		// 			$(".team-slider .slide").removeAttr("tabindex");
		// 			$(".team-slider .slide").removeAttr("role");
		// 			$(".team-slider .slide").removeAttr("aria-describedby");

		// 			initialTeamSlider();

		// 			// $(".teachers-miniature-slider").slick({
		// 			// 	responsive: false
		// 			// });

		// 			$(".teachers-miniature-slider").slick("unslick");

		// 			initialized = false;

		// 		}

		// 	// }, 1000);

		// }

    });

    if( bodyWidth < 768 ) {

    	// $(".desctop-team-slider").wrap("<div class='team_page_slider'></div>");

  //   	if( !$(".teachers-slider.slick-initialized").length &&
	 //    	 !$(".teachers-miniature-slider.slick-initialized").length
	 //    	 ) {

		//     // initialRespTeamSlider();

		// }

    } else {

    	// $(".ajax-block").html("");

    	// $(".desctop-team-slider").unwrap("<div class='team_page_slider'></div>");

   //  	if( $(".teachers-slider.slick-initialized").length > 0 &&
	  //   	 $(".teachers-miniature-slider.slick-initialized").length > 0
	  //   	 ) {

	  //   	$(".team-slider, .teachers-miniature-slider").slick("unslick");
			// // $(".teachers-miniature-slider").slick("unslick");

	  //   }

		// }

	    initialTeamSlider();

    }

 //    if( bodyWidth < 768 ) {

	// 	// slick_slider();

	// 	if( initialized == false ) {

	// 		$(".team-slider").slick({
	// 		  dots: false,
	// 		  arrows: false,
	// 		  speed: 700,
	// 		  fade: true,
	// 		  slidesToShow: 1,
	// 		  slidesToScroll: 1,
	// 		  autoplay: true,
	// 		  autoplaySpeed: 16000,
	// 		  asNavFor: $(".teachers-miniature-slider")
	// 		});

	// 		$(".teachers-miniature-slider").slick({
	// 			arrows: true,
	// 			centerMode: true,
	// 	   		slidesToShow: 3,
	// 			slidesToScroll: 2,
	// 			centerMode: true,
	// 			dots: false,
	// 			asNavFor: $(".team-slider"),
	// 			responsive: [
	// 				{
	// 				breakpoint: 768,
	// 				settings: {
	// 				   		slidesToShow: 3,
	// 						slidesToScroll: 2
	// 					}
	// 				},
	// 				{
	// 				breakpoint: 600,
	// 				settings: {
	// 				   		slidesToShow: 1,
	// 						slidesToScroll: 1
	// 					}
	// 				}
	// 			]
	// 		});

	// 		initialized = true;

	// 	}

	// } else {

	// 	if( $(".teachers-miniature-slider.slick-initialized").length > 0 ) {

	// 		$(".team-slider").slick("unslick");
	// 		$(".teachers-miniature-slider").slick("unslick");

	// 		initialized = false;

	// 	}

		// initialTeamSlider();

	// }

    



	// if( $(".teachers-miniature-slider.slick-initialized").length == 0 && bodyWidth > 768) {

		// $(".team-slider .slide").css({"display" : "none"});

		// $(".teachers-miniature-slider .slide").each(function() {

		// 	if($(this).hasClass("active")) {

		// 		idexSlide = $(".teachers-miniature-slider .slide.active").index();

		// 		$(this).addClass("active");

		// 		$(".team-slider .slide").each(function() {

		// 			if($(this).is(":visible")) {

		// 				$(this).fadeOut(300);

		// 			}

		// 		});

		// 	}

		// });

		// $(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

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

	// }


	// var wrapper;
	// var initialized = false;

	// slick_slider();
	// $(window).resize(slick_slider);

	function initialTeamSlider() {

		// if($(".team_page_slider")) {

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

	    // }

    }

	// function slick_slider() {

	// 	// wrapper = $(".teachers-miniature-slider");

	// 	// if ($(".teachers-miniature-slider.slick-initialized").length > 0
	// 	// 	&& $(".team-slider.slick-initialized").length > 0
	// 	// 	&& bodyWidth > 768 ) {

	// 	// 	// setTimeout(function() {

	// 	// 		wrapper.slick("unslick");

	// 	// 		$(".team-slider").slick("unslick");

	// 			// $(".team-slider .slide").each(function() {

	// 			// 	if( $(this).hasClass("slick-current") ) {

	// 			// 		idexSlide = $(".team-slider .slide").index(this);

	// 			// 	}

	// 			// 	$(this).css({"display" : "none"});

	// 			// });

	// 		// }, 400);

	// 		// setTimeout(function() {

	// 		// 	$(".team-slider .slide:eq("+ idexSlide +")").fadeIn(300);

	// 		// 	initialized = false;

	// 		// }, 1300);

	// 	// } else if( bodyWidth <= 768) {

	// 	// 	$(".team-slider .slide").css({"display" : "block"});

	// 		// if( initialized == false ) {

	// 			// $(".team-slider").slick({
	// 			//   dots: false,
	// 			//   arrows: false,
	// 			//   speed: 700,
	// 			//   fade: true,
	// 			//   slidesToShow: 1,
	// 			//   slidesToScroll: 1,
	// 			//   autoplay: true,
	// 			//   autoplaySpeed: 16000,
	// 			//   asNavFor: $(".teachers-miniature-slider")
	// 			// });

	// 			// $(".teachers-miniature-slider").slick({
	// 			// 	arrows: true,
	// 			// 	centerMode: true,
	// 		 //   		slidesToShow: 3,
	// 			// 	slidesToScroll: 2,
	// 			// 	centerMode: true,
	// 			// 	dots: false,
	// 			// 	asNavFor: $(".team-slider"),
	// 			// 	responsive: [
	// 			// 		{
	// 			// 		breakpoint: 768,
	// 			// 		settings: {
	// 			// 		   		slidesToShow: 3,
	// 			// 				slidesToScroll: 2
	// 			// 			}
	// 			// 		},
	// 			// 		{
	// 			// 		breakpoint: 600,
	// 			// 		settings: {
	// 			// 		   		slidesToShow: 1,
	// 			// 				slidesToScroll: 1
	// 			// 			}
	// 			// 		}
	// 			// 	]
	// 			// });

	// 		// }

	// 		// initialized = true;

	// 	// }
	// }

	// function initialRespTeamSlider() {

	// 	// $(".ajax-block .team-slider").slick({
	// 	//   dots: false,
	// 	//   arrows: false,
	// 	//   speed: 700,
	// 	//   fade: true,
	// 	//   slidesToShow: 1,
	// 	//   slidesToScroll: 1,
	// 	//   autoplay: true,
	// 	//   autoplaySpeed: 16000,
	// 	//   asNavFor: $(".teachers-miniature-slider")
	// 	// });

	// 	// $(".ajax-block .teachers-miniature-slider").slick({
	// 	// 	arrows: true,
	// 	// 	centerMode: true,
	//  //   		slidesToShow: 3,
	// 	// 	slidesToScroll: 2,
	// 	// 	centerMode: true,
	// 	// 	dots: false,
	// 	// 	asNavFor: $(".team-slider"),
	// 	// 	responsive: [
	// 	// 		{
	// 	// 		breakpoint: 768,
	// 	// 		settings: {
	// 	// 		   		slidesToShow: 3,
	// 	// 				slidesToScroll: 2
	// 	// 			}
	// 	// 		},
	// 	// 		{
	// 	// 		breakpoint: 600,
	// 	// 		settings: {
	// 	// 		   		slidesToShow: 1,
	// 	// 				slidesToScroll: 1
	// 	// 			}
	// 	// 		}
	// 	// 	]
	// 	// });
	// 	$(".team-slider").slick({
	// 		  dots: false,
	// 		  arrows: false,
	// 		  speed: 700,
	// 		  fade: true,
	// 		  slidesToShow: 1,
	// 		  slidesToScroll: 1,
	// 		  autoplay: true,
	// 		  autoplaySpeed: 16000,
	// 		  asNavFor: $(".teachers-miniature-slider")
	// 		});

	// 		 $(".teachers-miniature-slider").slick({
	// 			arrows: true,
	// 			centerMode: true,
	// 	   		slidesToShow: 3,
	// 			slidesToScroll: 2,
	// 			centerMode: true,
	// 			dots: false,
	// 			asNavFor: $(".team-slider"),
	// 			responsive: [
	// 				{
	// 				breakpoint: 768,
	// 				settings: {
	// 				   		slidesToShow: 3,
	// 						slidesToScroll: 2
	// 					}
	// 				},
	// 				{
	// 				breakpoint: 600,
	// 				settings: {
	// 				   		slidesToShow: 1,
	// 						slidesToScroll: 1
	// 					}
	// 				}
	// 			]
	// 		});

	// }

	slick_slider();
	$(window).resize(slick_slider);		

	function slick_slider() {

		wrapperTeamSlider = $(".team-slider");
		wrapperMiniatureSlider = $(".teachers-miniature-slider");

		if ($(".teachers-miniature-slider.slick-initialized").length > 0
			&& $(".team-slider.slick-initialized").length > 0
			&& bodyWidth > 768 ) {

			setTimeout(function() {

				wrapperTeamSlider.slick("unslick");
				wrapperMiniatureSlider.slick("unslick");
				wrapperTeamSlider.removeClass("slick-initialized");
				wrapperMiniatureSlider.removeClass("slick-initialized");
				$(".teachers-miniature-slider .slide").css({"display" : "inline-block"});

				// $(".team-slider .slide:eq("+ idexSlide +")").delay(400).fadeIn(300);

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


