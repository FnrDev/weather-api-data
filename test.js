const weather = require('./index.js')

weather.loction('manama').then(weather => console.log(weather));