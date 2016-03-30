// insert current date
function getCurrentDate() {
	var currentDate = new Date();
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
	var day = currentDate.getDate();
	month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var day_of_week = days[currentDate.getDay()];

	var element = document.getElementById("current-date");
	var current_date = String(month) + "/" + String(day) + "/" + String(year);
	var display_date = "Today is: " + current_date + ", " + String(day_of_week);
	element.innerHTML = display_date;
}

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
	console.log(seasonal_veggies);
	document.getElementById("seasonal-veggies").innerHTML = seasonal_veggies.join("<br>");
}

getCurrentDate();
seasonalVeggies();





// seasonal veggies chart
// http://www.cuesa.org/eat-seasonally/charts/vegetables