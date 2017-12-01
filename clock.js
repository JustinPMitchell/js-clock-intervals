var secondDegrees = 6;
var minDegrees = 6;
var hourDegrees = 30;

var currentHour = 0;
var currentMin = 0;
var currentSec = 0;


var hourTick = function() {
	console.log('tick hour');
	currentHour += hourDegrees;
	var el = document.getElementById("hour");
	el.style.transform = "rotate(" + currentHour + "deg)";
}

var minTick = function() {
	console.log('tick min');
	currentMin += minDegrees;
	var el = document.getElementById("minute");
	el.style.transform = "rotate(" + currentMin + "deg)";
}

var secTick = function() {
	console.log('tick sec');
	currentSec += secondDegrees;
	var el = document.getElementById("second");
	el.style.transform = "rotate(" + currentSec + "deg)";
}

setInterval(hourTick, 360000);
setInterval(minTick, 60000);
setInterval(secTick, 1000);