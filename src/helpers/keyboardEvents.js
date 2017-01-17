import Utils from './utils';

export default function keyboardEvents(timeline, timelineElement) {
  const utils = Utils(timeline);

  // The returned function must me used as event
  return function keyCheckEvent(e) {
    if (e.keyCode === 70) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        return;
      }
      timelineElement.requestFullscreen();
    } else if (e.keyCode === 37) {
      // left arrow
      utils.stopYoutube();
      timeline.goToPrev();
      utils.allowYoutubeVideosGoFullScreen();
    } else if (e.keyCode === 39) {
      // right arrow
      utils.stopYoutube();
      timeline.goToNext();
      utils.allowYoutubeVideosGoFullScreen();
    }
  };
}
