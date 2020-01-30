'use strict';
$(function() {
	var btnStart = $('[data-start-btn]');
	var startScreen = $('[data-start-screen]');
	var sliderScreen = $('[data-slider-screen]');
	var windowWidth = $(window).width();
	btnStart.on('click', function() {
		startScreen.fadeOut(0);
		sliderScreen.fadeIn(500);
	});
	if(windowWidth < 768){
		$('.carousel-indicators li:nth-child(4)').remove();
		$('.carousel-item:nth-child(4)').remove();
	}
});