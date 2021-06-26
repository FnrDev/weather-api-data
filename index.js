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

module.exports.loction = loction;