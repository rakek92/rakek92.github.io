function clock() {
	var seconds = 0,
		minutes = 0,
		hours = 0;
	var tikSec = document.getElementsByClassName('second'),
		tikMin = document.getElementsByClassName('minute'),
		tikHour = document.getElementsByClassName('hour'),
		numeric = document.getElementsByClassName('numeric');
	var degreeS = -90,
		degreeM = -90,
		degreeH = -90,
		numer;

	function tik() {
		degreeS += 6;
		seconds++;
		var txt = 'transform:rotate(' + degreeS + 'deg);';
		tikSec[0].style.cssText = txt;
		if (seconds == 60) {
			minutes++;
			degreeM += 6;
			var txt = 'transform:rotate(' + degreeM + 'deg);';
			tikMin[0].style.cssText = txt;
			degreeH += 0.5;
			var txt = 'transform:rotate(' + degreeH + 'deg);';
			tikHour[0].style.cssText = txt;
			seconds = 0;
		}
		if (minutes == 60) {
			hours++
			minutes = 0;
		}
		console.clear();
		if (hours < 10 && minutes < 10 && seconds < 10) {
			numer='0'+hours+':'+0+minutes+':'+0+seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours < 10 && minutes < 10 && seconds >= 10) {
			numer='0'+hours+':'+0+minutes+':'+seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours < 10 && minutes >= 10 && seconds < 10) {
			numer='0'+hours+':'+minutes+':'+0, seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours >= 10 && minutes < 10 && seconds < 10) {
			numer=hours+':'+0+minutes+':'+0+seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours < 10 && minutes >= 10 && seconds >= 10) {
			numer='0'+hours+':'+minutes+':'+seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours >= 10 && minutes >= 10 && seconds < 10) {
			numer=hours+':'+minutes+':'+0+seconds;
			numeric[0].innerHTML=numer;
		}
		if (hours >= 10 && minutes < 10 && seconds >= 10) {
			numer=hours+':'+minutes+':'+0+seconds;
			numeric[0].innerHTML=numer;
		}
	}
	return tik;
}
var watch = clock();
var int1=setInterval(watch, 1000);
function incr(){
	clearInterval(int1);
	var int1=setInterval(watch, 100);

}
