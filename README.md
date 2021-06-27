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
const weather = require('weather-api-data');
weather.loction('manama').then(weather => console.log(weather));
```

### Output

```js
{
  location: {
    name: 'Manama',
    region: 'Al Manamah',
    country: 'Bahrain',
    lat: 26.24,
    lon: 50.58,
    tz_id: 'Asia/Bahrain',
    localtime_epoch: 1624817976,
    localtime: '2021-06-27 21:19'
  },
  current: {
    last_updated_epoch: 1624817700,
    last_updated: '2021-06-27 21:15',
    temp_c: 32,
    temp_f: 89.6,
    is_day: 0,
    condition: {
      text: 'Clear',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
      code: 1000
    },
    wind_mph: 8.1,
    wind_kph: 13,
    wind_degree: 100,
    wind_dir: 'E',
    pressure_mb: 1002,
    pressure_in: 30.1,
    precip_mm: 0,
    precip_in: 0,
    humidity: 71,
    cloud: 0,
    feelslike_c: 38.9,
    feelslike_f: 102,
    vis_km: 10,
    vis_miles: 6,
    uv: 8,
    gust_mph: 22.6,
    gust_kph: 36.4
  }
}
```
