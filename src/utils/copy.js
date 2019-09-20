// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode

// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const address = process.argv[2]

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log(error)
//         }

//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }

//             console.log(data.location)
//             console.log(forecastData)
//         })
//     })
// }

// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast