import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import WOW from "wowjs";
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



$(function () {
	//init 
	init();
	//init wow effects
	//new WOW.WOW().init();
    var wow = new WOW.WOW({
        live: false
    });
    wow.init();
    require("jquery-ui/ui/effects/effect-slide");
	//scroll menu
	$(window).scroll(function () {
		init();
	});

	//page scroll
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 50
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	//init function
	function init() {
		var secondFeature = $('#features').offset().top;
		var scroll = $(window).scrollTop();
		if (scroll >= 250) {
			$('.sticky-navigation').css({"background-color": '#1976D2'});
		} else {
			$('.sticky-navigation').css({"background-color": 'transparent'});
		}
		if (scroll >= secondFeature - 200) {
			$(".mobileScreen").css({'background-position': 'center top'});
		}
		return false;
	}
});