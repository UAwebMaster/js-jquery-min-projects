 function onTime() {
		var x = setInterval(getTime, 1000);
		}
		
		function getTime () {
		var date = new Date();
		var hour = date.getHours();
		if(hour<10) {
		hour = "0"+hour ;
		}
		var minute = date.getMinutes();
		if(minute<10) {
		minute = "0"+minute;
		}
		var second = date.getSeconds();
		if(second<10) {
		second = "0"+second;
		}
		
		var idHour = document.getElementById('hour');
		idHour.innerHTML = hour+"\:";
		var idMin = document.getElementById('min');
		idMin.innerHTML = minute+"\:";
		var idSec = document.getElementById('sec');	
		idSec.innerHTML = second;
		}