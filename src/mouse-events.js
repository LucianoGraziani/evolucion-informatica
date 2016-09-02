var stopYoutube = window.utils.stopYoutube;
var fullScreenVideo = window.utils.fullScreenVideo;
var advanceSlice = window.advanceSlice;
var returnSlice = window.returnSlice;

function mouseEvents($) {
	$('div.tl-slidenav-next').first().wrap('<div class="slide-next"></div>');
	$('div.slide-next').click(function onNext(e) {
		// FIXME recupero el slide anterior al actual porque cuando se activa este evento, TimelineJS ya pasó de slide.
		stopYoutube(timeline.getSlide(timeline._getSlideIndex(timeline.getCurrentSlide().data.unique_id) - 1));
		// advanceSlice();
		fullScreenVideo();
	});
	$('div.tl-slidenav-previous').first().wrap('<div class="slide-prev"></div>');
	$('div.slide-prev').click(function onNext(e) {
		// FIXME recupero el slide anterior al actual porque cuando se activa este evento, TimelineJS ya pasó de slide.
		stopYoutube(timeline.getSlide(timeline._getSlideIndex(timeline.getCurrentSlide().data.unique_id) - 1));
		// returnSlice();
		fullScreenVideo();
	});
	window.mouseEvents = undefined;
}

window.mouseEvents = mouseEvents;
