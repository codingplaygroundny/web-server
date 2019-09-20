const path=require('path');
const express=require('express');
const hbs=require('hbs');
const geocode=require('../src/utils/geocode');

const app=express();

const publicDirectoryPath=path.join(__dirname,'../public');
console.log(publicDirectoryPath);
const viewPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/views/partials');

app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath));



app.get('/' ,(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Eric Guan'
    });
})
app.get('/index' ,(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Eric Guan'
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Eric Guan'
    });
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Weather App',
        name:'Eric Guan'
    });
})
app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'a address must be provided'
        })
    }
    const address=req.query.address
    geocode(address,(error,Response)=>{
        if(error){
            res.send({
                error
            })
        }
        res.send({
            ...Response
        })
    })

})
app.get('*',(req,res)=>{
    res.render('notfound',{})
})



app.listen(3000,()=>{
    console.log('the server is listening port 3000')
})

//console.log(geoInfo.latitude)
//const weatherInfo= forecastWeather(geoInfo.latitude,geoInfo.longitude)
//console.log(weatherInfo);

// const path = require('path')
// const express = require('express')

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')

// app.use(express.static(publicDirectoryPath))

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Philadelphia'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })