var stationaryTimer = 0;
var variableTimer = 0;
var interval = 1000;

var sEvents = 0;
var vEvents = 0;

var c = 299792.458 

function playSound(url) {
    var a = new Audio(url);
    a.play();
}

function playStationary() {
	console.log(new Date().getTime() + ": Playing sationary.")
	sEvents++;
	document.getElementById("sEvents").innerText = sEvents;
	playSound("pop.mp3")
}

function playVariable() {
	console.log(new Date().getTime() + ": Playing vaiable.")
	vEvents++;
	document.getElementById("vEvents").innerText = vEvents;
	playSound("blop.mp3")
}

function getVelocity() {
	var formInput = document.getElementById("velocity").value;
	var velocity = 0;
	if (!isNaN(formInput) && formInput.length > 0){
		velocity = parseInt(formInput);
	}
	// console.log("Original delay: " + formInput);
	// console.log("Modified delay: " + delay);
	return velocity;
}

function calculateDelay() {
	var velocity = getVelocity();
	console.log("Velocity: " + velocity);
	result = 1 / Math.sqrt(1 - (velocity*velocity)/(c*c));
	console.log("Result: " + result);
	document.getElementById("offset").innerText = (1/result);
	return result;
}

function startAudio() {
	stopAudio();
	sEvents = 0;
	vEvents = 0;
	document.getElementById("sEvents").innerText = sEvents;
	document.getElementById("vEvents").innerText = vEvents;
	var formInput = document.getElementById("velocity").value;
	var delay = calculateDelay() * 1000;
	stationaryTimer = window.setInterval(playStationary, delay);
	variableTimer = window.setInterval(playVariable, interval);
}

function stopAudio() {
	window.clearInterval(stationaryTimer);
	window.clearInterval(variableTimer);
}