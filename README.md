**Find My Veggies** v1.0.0 - 2016-04-01  
* **Problem:** Due to the Google free api plan problem, only maximum to 1000 quote can be requested in 24hr, so when querying date for store details, only about 9 store details can be requested.

This is a Web App to help people find fresh and cheap vegetables for Lafayette area.  

The App uses Google Map API combined with open datasets to display features for local food markets regarding to vegetables.
Those features will include but not limited to: freshness, price, open hours, distance, predicted transportation time, parking lot accessibility, customer ratings, service, etc. for a single store. As well as the comparison function over these features for multiple stores.  

**Description**  
* Datasets  
Dataets that will be used are listed. However, at this phase not all details of how they will be used are specified.  
	* Climate Data Online (http://catalog.data.gov/dataset/climate-data-online-cdo)  
	  Daily summaeries for Purdue Airport station and West Lafayette station from 2011/1/1 to 2015/12/31  
	  Columns used: Precipitation, Winds, Snow, Maximum temperature, Minimum temperature  
	* Farmer's market data (https://www.ams.usda.gov/local-food-directories/farmersmarkets)  
	  Columns used: Farmer's market open seasons for Lafayette and West Lafayette, IN  
	* Surface water data for the nation (http://catalog.data.gov/dataset/usgs-surface-water-data-for-the-nation-national-water-information-system-nwis)
	  Columns used: surface water for wabash river at lafayette: average daily discharge from 1923/10/1 to 2015/9/30  
	* Severe weather data (http://catalog.data.gov/dataset/severe-weather-data-inventory)  
	  Columns used: great lafayette area storm and hail reports from 2011/1/1 to 2015/12/31  
	---------------- the above datasets are from data.gov ----------------
	* Seasonal vegetable chart (http://www.cuesa.org/eat-seasonally/charts/vegetables)  
	  Vegetable names and in season months
	* Google Store Details data gotten from query (https://maps.googleapis.com/maps/)  
	  geometry location, place_id, place name, place address, place phone number, place website, place rating, place price level, place open hours  
	
	
* Map View
	* The initialized Map is located at West lafayette and Lafayette area
	* Major locations sell vegetables are marked with markers on the map
	* Click on marker
		* info window with store names, locations, and view in google map links displayed
		* side menu displays detailed information for the store
		* display the driving route for the store
		* estimated driving time will be added in the next update, and possibily traveling method selections too
		* geolocation features for automatically detect browser location will be added in the next update
	* Current weather data will be retrived use OpenWeatherMap API (http://openweathermap.org/api), and be displayed in the side menu
	
* Data Visualization
	* Radar chart for single store's features
	* side menu tab 1 - basic info
		* store name, phone, website, ratings, open hour for today is displayed
		* radar chart for detailed features (data needs to be calculated and linked later)
	* side menu tab 2 - compare stores
		* compare three stores information with radar chart or bar graph will be added in the next update
		* features of the stores are displayed for choices
	* side menu tab 3 - seasonal vegetable chart
		* seasonal vegetables for this month are displayed
		* click on names and display pictures function will be added in the next update

* Interation Form:
	* Information output: store links and link to google maps, google map place details output for each store
	* Operation option: switch between tabs, turn on/off features, current date and time displayed on top right and will disappear if browser window gets small. App starts with a cover which can scroll down with animation when clicking on buttons and navigation bar on top.
	* Information input: turn on/off features for comparison of stores
	* Interaction with map: click on markers, info window displays and side menu changes for specific store, geolocation will be added later 
	* Interaction with data visualization: Checkboxes that enable/disable features for comparison which will change the data displayed

**Content**  
* README.txt  --This file.  
* index.html  --Web page for the App  
* image  --A directory contains all images used in the website  
* css  --A directory contains all css files  
	* style.css --Customized css  
	* scrolling-nav.css --Scrolling page css  
* js  --A directory contains all the javescript files  
	* data_sheet.js --Processed data. Everything is scaled to a 1 to 10 scale  
	* drawChartBI.js --Radar chart for basic info tab  
	* drawChartCS.js --Radar chart for compare stores tab  
	* jquery.easing.min.js --Multiple easing option for scrolling effect  
	* main.js --File for functions other than map  
	* map.js --File for Google map and related functions  
	* radarChart.js --Radar chart initializing  
	* scrolling-nav.js --Scrolling effect of the page  
	* veggies.js --Constants for monthly vegetables
* data_processing --A directory with all data and data processing scripts used  
	* decisiontree.py --Python file for process decisiontree using weather data  
	* processdata.py --Python file for processing and scaling raw data  
	* weather_data_for_training.csv --Training set used for decision tree (2011/1/1 - 2015/12/31 daily summary)  
	* weather_data_raw.csv --Organized raw weather data (2011/1/1 - 2015/12/31 daily summary for purdue station)  
	* surface_water_data.csv --Surface water data (1923/10/1 - 2015/9/30 daily average discharge at wabash river station)
	* hail --A directory for hail data .txt (2011/1/1 - 2015/12/31 hailing report list)  
	* storm --A directory for storm data .txt (2011/1/1 - 2015/12/31 storming report list)
  
**Build up information**  
The project only uses HTML/CSS/Javascript. Python was used for data training and transforming, however, the results are printed out and pasted to a javascrpt file to be able to access easier for javascript further calculation.

**Test**  
The App is test in Chrome, Firefox and Safari. The Geolocation function which request the browser's location has to be ran on a local/real server on Chrome to be able to functioning since Chrome seems to block some thing.

**Additional information**  
My interests of study for my Master's program greatly related to Natural Language Processing. So if time allows, I would like to add some NLP stuff to the App as well. For example, information retrival from natural language text that users entered, and other things like text to speech feature using Google or IBM speech to text API. I've made an web app using text to speech API from IBM's Bluemix platform before (http://jsx.mybluemix.net/), but speech to text was a challenge, which remains a difficulty for me who did not have a solid programming background.  

I will thank my boyfriend Jason Macnak, a former Purdue graduate and a software engineer at Google, for all the supports and additional help I got and will be getting on the project.  

**Contact**  
For questions about this project please feel free to contact Xiaonan Jing (jing@purdue.edu)
