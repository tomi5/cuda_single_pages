// show menu on mobile


function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.logo__container').toggleClass('active');
	$('.burger__bar').removeClass('dark');
}

$('.burger').on('click', toggleActive);

$('.nav__list__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})


//scroll to section

$('.nav__list__link').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)

})

//change burger color

$(document).on('scroll', function () {
	const $scrollValue = $(this).scrollTop();
	const $team = $('.section--team');
	const $testimonials = $('.section--testimonials');
	const $teamFromTop = $team.offset().top;
	const $testimonialsFromTop = $testimonials.offset().top;
	const $burgerFromTop = $('.burger').css('top').replace('px', '')


	if ($scrollValue > $teamFromTop - $burgerFromTop && $scrollValue < $testimonialsFromTop - $burgerFromTop) {
		$('.burger__bar').addClass('dark');

	} else {
		$('.burger__bar').removeClass('dark');
	}
})


// portfolio works filter

const $filters = $('.btn__container [data-filter]');
const $works = $('.section__main--works [data-category]');

$filters.on('click', function () {

	$filters.removeClass('active');
	$(this).toggleClass('active');

	const $filterWorks = $(this).attr('data-filter');
	const $works = $('.section__main--works [data-category]');

	if ($filterWorks == 'all') {
		$works.fadeOut(300, 'linear').promise().done(function () {
			$works.fadeIn(300, 'linear');
		});
	} else {
		$works.fadeOut(300, 'linear').promise().done(function () {
			$works.filter('[data-category = "' + $filterWorks + '"]')
				.fadeIn(300, 'linear');
		});
	}
});

// load more projects


$('.btn--more').on('click', function () {
	$('.hidden').fadeIn(500);
	$('.btn--more').fadeOut(500);
})