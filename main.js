var c = 299792.458 

function onInput(event) {
	if(event.which == 13 || event.keyCode == 13) {
		newRate = getPlayback();
		playback = checkBound(newRate);
		if (playback != newRate) setPlayback(playback);
		updateAudio(playback);
	}
}

function onDec(e) {
	playback = getPlayback() - 1;
	playback = checkBound(playback);
	setPlayback(playback);
	updateAudio(playback);
}

function onInc(e) {
	playback = getPlayback() + 1;
	playback = checkBound(playback);
	setPlayback(playback);
	updateAudio(playback);
}

function getPlayback() {
	return parseInt(document.getElementById("playback").value);
}

function setPlayback(playback) {
	document.getElementById("playback").value = playback;
}

function checkBound(playback) {
	if (playback < 50) {
		return 50;
	} else if (playback > 400) {
		return 400;
	}
	return playback;
}


function updateAudio(playback) {
	audio = document.getElementById("audio");
	console.log("new playback rate: " + playback/100);
	audio.playbackRate = playback/100;
	audio.play();
}

function init() {
	console.log("eyyy");
	$('input[type="range"]').rangeslider({
		polyfill: false,

	    // Callback function
	    onInit: function() {
	    	console.log("I did it!")
	    },

	    // Callback function
	    onSlide: function(position, value) {
	    	console.log("slide called: " + position + ", " + value);
	    },

	    // Callback function
	    onSlideEnd: function(position, value) {
	    	console.log("slideEnd called: " + position + ", " + value);
	    	updateAudio(value);
	    }
	});
}

function slideEnd(position, value) {
	updateAudio(value);
}

$(document).ready(init);

