# Weather
[Displays the local weather](https://annagalante.github.io/weather/)


## User Stories:
* I can see the weather in my current location
* I can see a different icon or background image depending on the weather
* I can push a button to toggle between Fahrenheit and Celsius

## notes
Note: Many internet browsers now require an HTTP Secure (https://) connection to obtain a user's locale via HTML5 Geolocation. For this reason, you will need to choose one of two paths to complete this project:

Use HTML5 Geolocation to get user location and then use the Dark Sky API which uses an HTTP Secure connection for the weather. Also, be sure to connect to CodePen.io via https://.

Or:

Use an Internet Protocol API to get user location (ex. IP-API) and then use the OpenWeatherMap API for the weather. Be sure to connect to CodePen.io via http://.


Either weather API service will require creating a free API key. Normally you want to avoid exposing API keys on CodePen, but we haven't been able to find a keyless API for weather.
