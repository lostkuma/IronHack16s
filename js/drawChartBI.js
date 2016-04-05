var price_value, 
	rating_value,
	service_value,
	openhour_value;

function drawChart(store_info) {
	if (store_info["price"] == "?") {
		price_value = 0.5;
	} else {
		price_value = store_info["price"] * 2 / 10;
	}
	var service_value_price = price_value;

	if (store_info["rating"] == "?") {
		rating_value = 0.5;
	} else {
		rating_value = store_info["rating"] * 2 / 10;
	}
	var service_value_rating = rating_value;

	if (store_info["open_hour_detail"] == "?") {
		openhour_value = 0.5;
	} else {
		if (store_info["open_hour_detail"].length == 1) {
			openhour_value = 1;
		} else {
			var total_hour = 0;
		   	for (i = 0; i < store_info["open_hour_detail"].length; i++) {
		   		var close_hour = store_info["open_hour_detail"][i]["close"]["hours"];
		   		if (close_hour == 0) {
		   			close_hour = 24;
		   		}
		   		var open_hour = store_info["open_hour_detail"][i]["open"]["hours"];
		   		var open_period = close_hour - open_hour;
		   		total_hour += open_period;
		   	openhour_value = total_hour / 168;
		   	}
		}
	}
	service_value = 0.2 * service_value_price + 0.8 * service_value_rating;


	var colorscale = d3.scale.category10();
	var LegendOptions = [store_info["name"]];
	var d = [
		[
		{axis:"price", value:price_value},
		{axis:"rating", value:rating_value},
		{axis:"freshness", value:0.5},
		{axis:"open hour", value:openhour_value},
		{axis:"distance", value:0.5},
		{axis:"service", value:service_value}
		]
	];

	//Options for the Radar chart, other than default
	var mycfg = {
	  w: 270,
	  h: 270,
	  maxValue: 1.0,
	  levels: 5,
	  ExtraWidthX: 120
	}

	//Call function to draw the Radar chart
	//Will expect that data is in %'s
	RadarChart.draw("#radar-chart-bi", d, mycfg);

	//Initiate legend
	var svg = d3.select('#body')
		.selectAll('svg')
		.append('svg')
		.attr("width", w)
		.attr("height", h)

	//Create the title for the legend
	var text = svg.append("text")
		.attr("class", "title")
		.attr('transform', 'translate(90,0)') 
		.attr("x", w - 70)
		.attr("y", 10)
		.attr("font-size", "12px")
		.attr("fill", "#404040")
		.text("Store Info");
			
	//Initiate Legend	
	var legend = svg.append("g")
		.attr("class", "legend")
		.attr("height", 100)
		.attr("width", 200)
		.attr('transform', 'translate(90,20)') 
		;
		//Create colour squares
		legend.selectAll('rect')
		  .data(LegendOptions)
		  .enter()
		  .append("rect")
		  .attr("x", w - 65)
		  .attr("y", function(d, i){ return i * 20;})
		  .attr("width", 10)
		  .attr("height", 10)
		  .style("fill", function(d, i){ return colorscale(i);})
		  ;
		//Create text next to squares
		legend.selectAll('text')
		  .data(LegendOptions)
		  .enter()
		  .append("text")
		  .attr("x", w - 52)
		  .attr("y", function(d, i){ return i * 20 + 9;})
		  .attr("font-size", "11px")
		  .attr("fill", "#737373")
		  .text(function(d) { return d; })
		  ;

}