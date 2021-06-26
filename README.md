# weather-api-data

<center>
	<a href="https://www.npmjs.com/package/weather-api-data">
		<img alt="weather-api-data" src="https://nodei.co/npm/weather-api-data.png">
	</a>
</center>

* NPM package that gets information about weather

# Installation from [NPM](https://www.npmjs.com/package/weather-api-data)

```
npm install weather-api-data
```
- `loction(country_name)` - Get a weather in country

# Examples
### Using await
```js
const weather = require('weather-api-data');

async function getWeather() {
    const data = await weather.loction('manama');
    console.log(data);
}

getWeather();
``` 

### Using .then function

```js
const weather = require('weather-api-data')

weather.loction('manama').then(weather => console.log(weather));
```
