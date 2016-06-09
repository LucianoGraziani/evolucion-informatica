var options = {
    hash_bookmark: true,
    initial_zoom: 5,
    language: 'es',
};
$(document).ready(function() {
    var embed = document.getElementById('timeline-embed');
    embed.style.height = getComputedStyle(document.body).height;
    window.timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1rwkC4c4TKmhKht15tUd1gLOEthZG0hfQlwEEA8sjZOE/pubhtml', options);

    ///////////////////
    // Resize Event
    ///////////////////
    window.addEventListener('resize', function() {
        var embed = document.getElementById('timeline-embed');
        embed.style.height = getComputedStyle(document.body).height;
        timeline.updateDisplay();
    });
});
