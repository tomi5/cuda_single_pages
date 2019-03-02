// show menu on mobile


function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.logo__container').toggleClass('active');
	$('.burger__bar').removeClass('dark');
}

$('.burger').on('click', toggleActive);

$('.nav__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})


//scroll to section

$('.nav__link').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)

})

$('.btn__scrollToTop').on('click', function () {
	$('body, html').animate({
		scrollTop: $('body, html').offset().top
	}, 500)
})

$(document).on('scroll', function () {
	const $scrollValue = $(this).scrollTop();
	const $services = $('.section--services');
	const $team = $('.section--team');
	const $testimonials = $('.section--testimonials');

	const $servicesFromTop = $services.offset().top;
	const $teamFromTop = $team.offset().top;
	const $testimonialsFromTop = $testimonials.offset().top;
	const $burgerFromTop = $('.burger').css('top').replace('px', '')
	//change burger color
	if ($scrollValue > $teamFromTop - $burgerFromTop && $scrollValue < $testimonialsFromTop - $burgerFromTop) {
		$('.burger__bar').addClass('dark');

	} else {
		$('.burger__bar').removeClass('dark');
	}

	// show btn ScrollToTop
	const $docWidth = $(document).width();

	if ($scrollValue > $servicesFromTop / 2 && $docWidth > 1023) {
		$('.btn__scrollToTop').fadeIn(300, 'linear');
	} else {
		$('.btn__scrollToTop').fadeOut(300, 'linear');
	}

})



// portfolio works filter

const $filters = $('.btn__container [data-filter]');
const $filterALL = $('.btn__container [data-filter = "all"]');
const $works = $('.section__main--works [data-category]');


$filters.on('click', function () {

	$filters.removeClass('active');
	$(this).toggleClass('active');

	const $filterWorks = $(this).attr('data-filter');

	if ($filterWorks == 'all') {
		$works.fadeOut().promise().done(function () {
			$works.fadeIn(300, 'linear');
		});
	} else {
		$works.fadeOut().promise().done(function () {
			$works.filter('[data-category = "' + $filterWorks + '"]')
				.fadeIn(300, 'linear');
		});
	}
});

// load more projects

$('.btn--more').on('click', function () {
	$('.btn--more').fadeOut(500);
	$('.hidden').removeClass('hidden');
	$filters.removeClass('active');
	$filterALL.addClass('active');
})