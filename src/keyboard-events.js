document.onkeydown = checkKey;

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
        timeline.goToPrev();
    } else if (e.keyCode == '39') {
        // right arrow
        timeline.goToNext();
    }
}
