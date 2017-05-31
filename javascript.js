function getWeather(){
	//get Location   ////////////////
	navigator.geolocation.getCurrentPosition();

	//Load API ////////////////
	import DarkSkyApi from 'dark-sky-api';

	//Get weather for location  ///////////////// 

	//Define values   //////////////
	var youAreHere = "City success!";
	var yourState = "State Success";
	var currentTemp = "60"
	//Plug in values  //////////////
	document.getElementById("currentCity").textContent = youAreHere;
	document.getElementById("currentState").textContent = yourState;
	document.getElementById("currentTempDisplay").textContent = currentTemp;
}