var getNextSlide = window.getNextSlide;
var getPrevSlide = window.getPrevSlide;
var timeline = window.timeline;
var getSizeOfTopics = window.getSizeOfTopics;

var counter = 0;

function advanceSlice() {
	if (counter === getSizeOfTopics()) {
		return;
	}
	counter++;
	var currentSliceIndex = timeline._getSlideIndex(timeline.getCurrentSlide().data.unique_id);
	var slice = getNextSlide(counter);

	setTimeout(function () {
		if (!(currentSliceIndex + 1 < 5)) {
			timeline.remove(currentSliceIndex - 3);
		}
	}, 100);
	if (slice) {
		timeline.add(slice);
	}
}

function returnSlice() {
	if (counter <= 1) {
		counter = 0;
		return;
	}
	if (counter <= 2) {
		counter = 1;
		return;
	}
	if (counter <= 5) {
		timeline.remove(counter + 2);
		counter--;
		return;
	}

	counter--;
	var currentSliceIndex = timeline._getSlideIndex(timeline.getCurrentSlide().data.unique_id);
	var slice = getPrevSlide(counter - 2);

	setTimeout(function () {
		timeline.remove(currentSliceIndex + 3);
	}, 100);
	if (slice) {
		timeline.add(slice);
	}
}

window.advanceSlice = window.advanceSlice ? window.advanceSlice : advanceSlice;
window.returnSlice = window.returnSlice ? window.returnSlice : returnSlice;
