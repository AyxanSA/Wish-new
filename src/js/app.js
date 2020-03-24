'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel';


import 'bootstrap/dist/js/bootstrap';

$(function () {
	$('#alert').on('click', e => alert('clicked'))
});

$('.mobile-nav-toggle').on('click', function () {
	var $nav = $('.mobile-nav ul');
	$nav.stop(true, true).slideToggle();
});

$(document).ready(function(){
	$('.myslider').owlCarousel({
		  items:1,
		  nav: true,
		  dots: false,
		  dotsData: true,
	  });
  });