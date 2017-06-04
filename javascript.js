function getWeather(){
	//get Location   ////////////////
	var locationOutput = document.getElementById("locationTest");

	var options = {
		//enableHighAccuracy: true,// enabling increases load time
		timeout: 8000,
		maximumAge: 0
	};
	function success(pos) {
		var crd = pos.coords;
		locationOutput.textContent = "Lat: " + crd.latitude + ", Long: " + crd.longitude;
	};
	function error (err) {
		locationOutput.textContent = "This isn't working";
	};

	navigator.geolocation.getCurrentPosition(success, error, options);

	//Load API ////////////////
 

	//Get weather for location  ///////////////// 

	//Define values   //////////////
	var youAreHere = "City success!";
	var yourState = "State Success";
	var currentTemp = "60"
	//Plug in values  //////////////
	document.getElementById("currentCity").textContent = youAreHere;
	document.getElementById("currentState").textContent = yourState;
	document.getElementById("currentTempDisplay").textContent = currentTemp;
};