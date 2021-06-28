// using await
const weather = require('./index');

async function getWeather() {
    const data = await weather.loction('manama');
    console.log(data);
}
getWeather();
// using .then
weather.loction('manama').then(weather => console.log(weather));