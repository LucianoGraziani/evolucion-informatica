export default function utils(timeline) {
  return {
    stopYoutube: function stopYoutube(slide = timeline.getCurrentSlide()) {
      const media = slide._media;

      if (media !== null && media._state.loaded && media.data.mediatype.type === 'youtube') {
        media.player.stopVideo();
      }
    },
    allowYoutubeVideosGoFullScreen: function fullScreenVideo(slide = timeline.getCurrentSlide()) {
      const media = slide._media;

      if (media === null || media.data.mediatype.type !== 'youtube' || !media.player.getIframe) {
        return;
      }

      const iframe = media.player.getIframe();
      const url = iframe.src.split('&');

      url.forEach((elem, i, arr) => {
        if (/^fs/.test(elem)) {
          arr.splice(i, 1);
        }
      });
      iframe.src = url.join('&');
    },
  };
}
