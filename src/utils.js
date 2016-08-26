var utils = {};

utils.stopYoutube = function stopYoutube(slide) {
	var slide = slide ? slide : timeline.getCurrentSlide();
	var media = slide._media;

	if (media !== null && media._state.loaded && media.data.mediatype.type === 'youtube') {
		media.player.stopVideo();
	}
};

utils.fullScreenVideo = function fullScreenVideo() {
	var slide = slide ? slide : timeline.getCurrentSlide();
	var media = slide._media;

	if (media === null || media.data.mediatype.type !== 'youtube') {
		return;
	}
	var iframe = media.player.getIframe();
	var url = iframe.src.split('&');

	url.forEach(function (elem, i, arr) {
		if (/^fs/.test(elem)) {
			arr.splice(i, 1);
		}
	});
	iframe.src = url.join('&');
}

window.utils = utils;
