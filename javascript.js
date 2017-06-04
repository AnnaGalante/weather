function getWeather(){
	//get Location   ////////////////
	var locationOutput = document.getElementById("locationTest");

	function getLocation(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			locationOutput.textContent = "Please allow geolocation."
		}
	};
	function showPosition(position){
		locationOutput.textContent = "Lat: "+ position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
	};

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