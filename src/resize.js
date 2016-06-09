$(document).ready(function() {
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    var vph = $(window).height();
    var $timeLineEmbeded = $('#timeline-embed');
    var $timeNav = $('#timeline-embed > .tl-timenav');
    var $storySlider = $('#timeline-embed > .tl-storyslider');
    var $menuBar = $('#timeline-embed > .tl-menubar');
    $timeLineEmbeded.css({
        height: vph + 'px',
    });
    $storySlider.css({
      height: (vph - $timeNav.height()) + 'px',
    });
    $menuBar.css({
      top: ($storySlider.height() + 27) + 'px',
    });
}
