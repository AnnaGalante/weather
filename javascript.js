//useful variables
	var xhr = new XMLHttpRequest();
	var locationOutput = document.getElementById("locationTest");
	var city = document.getElementById("currentCity");
	var state = document.getElementById("currentState");
	var currentTempDisplay = document.getElementById("currentTempDisplay");
function getLocation(){
	//get Location   ////////////////
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

	navigator.geolocation.getCurrentPosition(success, error, options) //get location
};

function getWeather(){
	//Set up API (variables, lat/lon, key, and api URL its self) ////////////////
	var latlon = crd.latitude + "," + crd.longitude;
	var darkSkyKey = "0a8032c051266de6bab2af3789f66756"; //obscure this later
	var darkSkyAPI = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latlon;

 	//Parse through JSON File///////////////////////
 	var darkSkyResponse = xhr.response;

 	//var fetchedTemp = xhr[currently[temperature]]darkSkyResponse;
 	//this is breaking shit for some reason so its commented out
 	
 	//Pop into page ////////////////////////

 	//currentTempDisplay.textContent = fetchedTemp;
 	//Call the API ///////////////////////////////////////////
 	xhr.open('GET', 'darkSkyAPI'); //gets the response
 	xhr.withCredentials = true; //tells server that creditials are needed?
 	xhr.send(null); //not POST, just GET, so send is empty
	
};