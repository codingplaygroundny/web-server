const request=require('request');
const key='6c8dd76d81d1d7583a01bd714895982f'



const forecast= (latitude='42.3601',longitude=-71.0589,callback)=>{
    const url=`https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
    request.get({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to reach the location of the service',undefined);
        }
        else if(response.body.error){
            callback(response.body.error,undefined);
        }
        else{
            const currently=response.body.currently;
            const result={
                latitude:response.body.latitude,
                longitude:response.body.longitude,
                summary:currently.summary,
                temperature:currently.temperature,
                precipProbability:currently.precipProbability
            }
            callback(undefined,result);
        }
    })
}
//forecastWeather();


module.exports=forecast;