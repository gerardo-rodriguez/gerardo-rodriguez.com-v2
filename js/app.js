$(document).ready(function() {

	// setup a class to hook into to style for an 'interactive' environment.
	$('#projects').addClass('interactive');
    
    // grab all of the project info panels
	var $projectInfoPanels = $('#projects dd').hide();
	var $projectHeaders = $('#projects dt');

	$('#projects dt').on('click', function() {
		var $this = $(this);
		var $target =  $this.next();

		if(!$target.hasClass('active')){
			$projectHeaders.removeClass('active');
			$projectInfoPanels.removeClass('active').slideUp('fast');

			$this.addClass('active');
			$target.addClass('active').slideDown('fast', function(){
				var yPos = $this.offset()['top'];
				TweenMax.to(window, .75, {scrollTo:{y:yPos}, ease:Expo.easeOut});
			});
		}

		return false;
	});
});