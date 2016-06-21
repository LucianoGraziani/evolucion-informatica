var utils = {};

utils.stopYoutube = function stopYoutube() {
	var slide = timeline.getCurrentSlide(),
		media = slide._media;

	if(media !== null && media._state.loaded && media.data.mediatype.type === 'youtube') {
		if(media.player.getPlayerState() !== 5) {
			media.player.stopVideo();
		}
	}
};

window.utils = utils;
