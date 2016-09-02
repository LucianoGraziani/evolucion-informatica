var stopYoutube = window.utils.stopYoutube;
var fullScreenVideo = window.utils.fullScreenVideo;
var advanceSlice = window.advanceSlice;
var returnSlice = window.returnSlice;

function checkKey(e) {
	e = e || window.event;

	if (e.keyCode == '70') {
		if (document.fullscreenElement) {
			document.exitFullscreen();
			return;
		}
		document.getElementById('timeline-embed').requestFullscreen();
	} else if (e.keyCode == '37') {
		// left arrow
		stopYoutube();
		// returnSlice();
		timeline.goToPrev();
		fullScreenVideo();
	} else if (e.keyCode == '39') {
		// right arrow
		stopYoutube();
		// advanceSlice();
		timeline.goToNext();
		fullScreenVideo();
	}
}

document.onkeydown = checkKey;
