$(document).ready(function() {

	// setup a class to hook into to style for an 'interactive' environment.
	$('#projects').addClass('interactive');
    
    // grab all of the project info panels
	var $projectInfoPanels = $('#projects dd').hide();
	var $projectHeaders = $('#projects dt');

	// Inject an anchor tag to use within our headers
	$projectHeaders.wrapInner('<a href="#" />');

	// Setup the accordian navigation for the projects
	$('#projects dt a').on('click', function(e) {
		e.preventDefault();

		var $this = $(this);
		var $target =  $this.parent().next();

		if(!$target.hasClass('active')){
			$projectHeaders.removeClass('active');
			$projectInfoPanels.removeClass('active').slideUp('fast');

			$projectInfoPanels.children().css('position','relative');

			$target.children().each(function(index, item){
				TweenMax.from(item, 1, {delay:.35*index, css:{/*top:"200px",*/opacity:0}, ease:Expo.easeOut});
			});


			$this.parent().addClass('active');
			$target.addClass('active').slideDown('fast', function(){
				var yPos = $this.offset()['top'];
				TweenMax.to(window, .6, {scrollTo:{y:yPos}, ease:Expo.easeOut});
			});
		}
	});


	// Setup the main nav to scrollTo sections
	$('a','#site-nav').on('click', function(e){
		e.preventDefault();

		var yPos = $( $(e.currentTarget).attr('href') ).offset()['top'];
		TweenMax.to(window, .6, {scrollTo:{y:yPos}, ease:Expo.easeOut});
	});

	// Setup the back to top links
	$('.back-to-top').on('click', function(e){
		e.preventDefault();

		TweenMax.to(window, .6, {scrollTo:{y:0}, ease:Expo.easeOut});
	});
});