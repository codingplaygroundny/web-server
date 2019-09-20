
const request=require('request');
const forecast=require('./forecast');

const search_text='Los Angeles'
//forecastWeather();
const token='pk.eyJ1IjoieHpndWFuIiwiYSI6ImNrMG9iOXh0NTA4dngzbm95eW0yc2JsMHoifQ.oB9CA7a20ICBh4JUDnTtuw'
const json=true;




const specificRegion='Log Angeles';
const longitude=-118.2439;
const latitude=34.0544;
const reverseUrl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${specificRegion}.json?proximity=${longitude},${latitude}&access_token=${token}`



const geocode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`;
    request.get({url,json}, (error,response)=>{
        const features= response.body.features;
        if(error){
            callback(`unable to connect to the location of the service ${error}`,undefined);
        }else if(features.length===0){
            callback('unable to find the location, try another query',undefined)
        }
        const placename=features[0].place_name;
        const longitude=features[0].center[0];
        const latitude=features[0].center[1];
        forecast(latitude,longitude,(error,response)=>{
            callback(undefined,{...response,placename});
        })
    })
}

// geocode('los angeles',(error,response)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(response);
// })

module.exports=geocode;
