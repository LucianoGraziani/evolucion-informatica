import $ from 'jquery';

import Utils from './utils';

export default function mouseEvents(timeline) {
  const utils = Utils(timeline);

  $('div.tl-slidenav-next').first().wrap('<div class="slide-next"></div>');
  $('div.slide-next').click(() => {
    // Recupero el slide anterior al actual porque cuando se activa este evento,
    // TimelineJS ya pasó de slide.
    utils.stopYoutube(
      timeline.getSlide(
        timeline._getSlideIndex(
          timeline.getCurrentSlide().data.unique_id) - 1));
    utils.allowYoutubeVideosGoFullScreen();
  });
  $('div.tl-slidenav-previous').first().wrap('<div class="slide-prev"></div>');
  $('div.slide-prev').click(() => {
    // Recupero el slide anterior al actual porque cuando se activa este evento,
    // TimelineJS ya pasó de slide.
    utils.stopYoutube(
      timeline.getSlide(
        timeline._getSlideIndex(
          timeline.getCurrentSlide().data.unique_id) - 1));
    utils.allowYoutubeVideosGoFullScreen();
  });
}
