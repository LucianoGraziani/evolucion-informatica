/**
 * TODO requestFullScreen for all explorers.
 */

document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '70') {
        if (document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen) {
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
