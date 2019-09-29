const path=require('path');
const express=require('express');
const hbs=require('hbs');
const geocode=require('../src/utils/geocode');

const app=express();

const port =process.env.PORT || 3000

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



app.listen(port,()=>{
    console.log('the server is listening port ' + port )
})