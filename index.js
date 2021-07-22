const axios = require('axios');
require('colors');

async function loction(country) {
    if (!country) {
        return new Error('Missing country name')
    }
    try {
        const req = await axios.get(`https://fnrr.dev/weather/${country}`);
        const data = req.data;
        return data;
    } catch (e) {
        return new Error('i can\'t find this country'.red)
    }
}

/**
 * NPM package that gets information about weather
 * @example
 * ```js
 * const weather = require('weather-api-data');
 *  async function getWeather() {
    const data = await weather.loction('manama');
    console.log(data);
}
getWeather();
 * 
 * ```
 * @link {@link https://npmjs.com/package/weather-api-data | NPM Link}
 * 
 */

module.exports.loction = loction;