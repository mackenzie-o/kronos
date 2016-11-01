var c = 299792.458 

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

