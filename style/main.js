$(document).ready(function () {
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	
	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100 
			}, 2000);
	});
	
	$('#up').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 2000); 
	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
	
	$(window).on('load', function(){
		  $.instagramFeed({
		    'username': "esabhinav",
		    'container': "#instagram-feed-demo1",
		    'items_per_row': 4,
		    'display_profile': false,
		    'display_biography': false,
		    'display_igtv': false,
		    'items': 4
		  });
	});
		  
	$(window).on('load', function(){
		  $.instagramFeed({
		    'username': "flabbergasting_pixel",
		    'container': "#instagram-feed-demo2",
		    'items_per_row': 4,
		    'display_profile': true,
		    'display_biography': false,
		    'display_igtv': false,
		    'items': 12
		  });
	});
	
	particlesJS.load('particles-js', 'particlesjs-config.json', function () {
		});
});
