console.log('running js code in public/js')

const key='6c8dd76d81d1d7583a01bd714895982f'



const forecast= (address,callback)=>{
    const url=`http://localhost:3000/weather?address=${address}`
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            if(data.error){
                callback(data.error,undefined)
            }
            else{
                callback(undefined,data)
            }
        })
        
    
}


const weatherForm=document.querySelector('form');
const input=document.querySelector('input');
const message_1=document.querySelector('#message_1');
const message_2=document.querySelector("#message_2");

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    forecast(input.value,(error,response)=>{
        if(error){
            console.log(error)
            message_1.innerHTML=error;
            message_2.textContent='';
        }
        else{
            console.log(response);
            message_1.textContent=response.placename;
            message_2.textContent=`${response.summary}, the temperature is ${response.temperature} Precip Probability is ${response.precipProbability}`
        }
    })
    console.log(input.value);
})