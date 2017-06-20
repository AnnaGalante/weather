
window.onload = function getWeather(){
	//useful variables
	var locationOutput = document.getElementById("locationTest");
	var city = document.getElementById("currentCity");
	var state = document.getElementById("currentState");
	var currentTempDisplay = document.getElementById("currentTempDisplay");
	var serverInfo = document.getElementById("serverInfo");

	//get Location   ////////////////////////////////////////////////////////////////////////////
	var options = {
		//enableHighAccuracy: true, //increases load time
		timeout: 8000,
		maximumAge: 0
	};
	function success(pos) {
		var crd = pos.coords;
		locationOutput.textContent = "Lat: " + crd.latitude + ", Long: " + crd.longitude;
	};
	function error (err) {
		locationOutput.textContent = "Error. Please Enable ";
	};

	navigator.geolocation.getCurrentPosition(success, error, options); 

	//get Dark Sky API   ////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////// 
	// Will use this block of code once fetch is working with the test url  ////////
	//var latlon = crd.latitude + "," + crd.longitude;
	//var darkSkyKey = "0a8032c051266de6bab2af3789f66756"; //obscure this later
	//var darkSkyAPI = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latlon;
	////////////////////////////////////////////////////////////////////////////

	var url = "https://api.darksky.net/forecast/0a8032c051266de6bab2af3789f66756/37.8267,-122.4233";
	var fetchData = {
			method: 'GET',
			mode: 'no-cors'
		};
  
  	var response = new Response();
  
	fetch(url, fetchData)
    	//.then(checkStatus)
    .then(function(response){ 
    	return response.json(); 
    	}) //transform the data into json
    .then(function(data){
    	//code for handeling API data
    	let darkSkyData = data.results; //get the results
    	currentTempDisplay.textContent = darkSkyData.currently.temperature; //current temperature
    })
   	.catch(function(error) {
    	console.log(error);
  	}); 
	
	
};//end getWeather



