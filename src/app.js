var options = {
	hash_bookmark: true,
	initial_zoom: 5,
	language: 'es',
};
/**
 * ¡¡Atención!!
 * Si van a probar con sus diapositivas a través del link de google, tienen que deshabilitar lo siguiente:
 * 1. En este archivo: window.startSlideContent()
 * 2. En keyboard-events: returnSlice(); y advanceSlice();
 * 3. En mouse-events: returnSlice(); y advanceSlice();
 */
$(document).ready(function() {
	var embed = document.getElementById('timeline-embed');
	embed.style.height = getComputedStyle(document.body).height;
	window.timeline = new TL.Timeline('timeline-embed', /*'https://docs.google.com/spreadsheets/d/1qMes6fK0yVojJtiGmYLTgF1EE-wMWR35PaZjeFRUW0A/pubhtml'*/window.startSlideContent(), options);

	///////////////////
	// Resize Event
	///////////////////
	window.addEventListener('resize', function() {
		var embed = document.getElementById('timeline-embed');
		embed.style.height = getComputedStyle(document.body).height;
		timeline.updateDisplay();
	});

	window.mouseEvents(jQuery);
});
