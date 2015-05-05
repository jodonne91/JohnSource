
$(function(){
	$('.menu').on('click', function(){
		console.log('click');
		$('.sidebar').slideToggle('medium');
	});
	window.onresize = function(e){
		if($(window).width() > 820) {
			$('.sidebar').show();
		}
	}
})