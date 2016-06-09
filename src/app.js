// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the URL to your JSON data file or Google spreadsheet.
// the id must refer to an element "above" this code,
// and the element must have CSS styling to give it width and height
// optionally, a third argument with configuration options can be passed.
// See below for more about options.
document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;
var options = {
    hash_bookmark: true,
    initial_zoom: 5,
    language: 'es',
    timenav_height_percentage: 25,
};
//debugger;
var timeline = new TL.Timeline('timeline-embed',
    'https://docs.google.com/spreadsheets/d/1rwkC4c4TKmhKht15tUd1gLOEthZG0hfQlwEEA8sjZOE/pubhtml', options);


document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '70') {
        if(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen) {
          document.cancelFullScreen();
          return;
        }
        document.getElementById('timeline-embed').webkitRequestFullScreen();
    } else if (e.keyCode == '37') {
        // left arrow
        timeline.goToPrev();
    } else if (e.keyCode == '39') {
        // right arrow
        timeline.goToNext();
    }
}
