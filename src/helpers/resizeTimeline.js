export default function resizeTimeline(timeline, timelineElement) {
  function resizer() {
    // eslint-disable-next-line no-param-reassign
    timelineElement.style.height = getComputedStyle(document.body).height;

    timeline.updateDisplay();
  }

  return {
    startResizing: () => window.addEventListener('resize', resizer),
    stopResizing: () => window.removeEventListener('resize', resizer),
  };
}
