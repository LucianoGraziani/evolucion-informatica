import React from 'react';

import keyboardEvents from '../helpers/keyboardEvents';
import mouseEvents from '../helpers/mouseEvents';
import resizeTimeline from '../helpers/resizeTimeline';

const options = {
  hash_bookmark: false,
  initial_zoom: 5,
  language: 'es',
};

export default class RoboticaIA extends React.Component {
  componentDidMount() {
    this.timelineContainer.style.height = getComputedStyle(document.body).height;
    this.timeline = new TL.Timeline(this.timelineContainer, 'https://docs.google.com/spreadsheets/d/1qMes6fK0yVojJtiGmYLTgF1EE-wMWR35PaZjeFRUW0A/pubhtml', options);

    this.keyboardEvents = keyboardEvents(this.timeline, this.timelineContainer);
    this.resizer = resizeTimeline(this.timeline, this.timelineContainer);

    mouseEvents(this.timeline);
    this.resizer.startResizing();
    document.onkeydown = this.keyboardEvents;
  }
  componentWillUnmount() {
    document.onkeydown = undefined;
    this.resizer.stopResizing();
  }

  render() {
    return <div ref={(timelineContainer) => { this.timelineContainer = timelineContainer; }} />;
  }
}
