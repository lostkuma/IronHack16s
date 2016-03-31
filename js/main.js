// get current date and time
function startTime() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	minute = checkTime(minute);
	second = checkTime(second);
	var current_time = hour + ":" + minute + ":" + second;
	document.getElementById("current-date").innerHTML = getCurrentDate() +  current_time;
	var t = setTimeout(startTime, 500);


	function getCurrentDate() {
		var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		var day = currentDate.getDate();
		month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		var day_of_week = days[currentDate.getDay()];

		var current_date = month + "/" + day + "/" + year;
		var display_date = "Today is: " + current_date + " " + day_of_week + ", ";
		return display_date;
	}
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}
return i;
}

// get list of seasonal veggies for this month
function seasonalVeggies() {
	var seasonal_veggies = []
	var veggies = VEGGIES;
	for (var key in veggies) {
		var seasons_of_veggie;
		seasons_of_veggie = veggies[key];
		for (var number in seasons_of_veggie) {
			if (number == month) {
				seasonal_veggies.push(key.replace(/_/, " "));
			}
		}
	}
	document.getElementById("seasonal-veggies").innerHTML = seasonal_veggies.join("<br>");
}

startTime();
seasonalVeggies();

