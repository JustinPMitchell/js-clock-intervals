var secondDegrees = 6;
var minDegrees = 6;
var hourDegrees = 30;

var today = new Date();
var currentHour = today.getHours()*30;
var currentMin = today.getMinutes()*6;
var currentSec = today.getSeconds()*6;

var startClock = function() {
	var el = document.getElementById("hour");
	el.style.transform = "rotate(" + currentHour + "deg)";
	el = document.getElementById("minute");
	el.style.transform = "rotate(" + currentMin + "deg)";
	el = document.getElementById("second");
	el.style.transform = "rotate(" + currentSec + "deg)";
}

setTimeout(startClock, 1);

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
	console.log(el);
	el.style.transform = "rotate(" + currentSec + "deg)";
}

setInterval(hourTick, 360000);
setInterval(minTick, 60000);
setInterval(secTick, 1000);