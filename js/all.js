$(document).ready(function() {
	// 下拉式選單
	$('.dropdown').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});

	// TOP功能
	$('.top a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 300);
	});

	// Lightbox效果
	lightbox.option({
      'resizeDuration': 10,
      'wrapAround': true
    })
});