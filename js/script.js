$(document).ready(function(){

	var $buttons = $('.quiz-btn-yes, .quiz-btn-no');
	$buttons.click(function(e){
		e.preventDefault();
		var $next = $(this).closest('.quiz-section').next('.quiz-section');
		$('body').removeClass().addClass($(this).attr('data-bodyclass'));
		$('html, body').stop().animate({scrollTop: $parent.offset().top}, 200);
	});


});