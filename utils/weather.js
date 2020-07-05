const request= require('request')

const weather=(lat,long,callback)=>{
    const uri='http://api.weatherstack.com/current?access_key=a1ee764471b6c24c72b341893fa734c6&query='+lat+','+long+'&units=f'
    request({uri,json:true},(error,response)=>{
        const {body}=response
        if(error){
            callback("Unable to connect to service","hmm");
        }else if(body.error){
            callback("Invalid Query");
        }else{
            callback(undefined, body.current.weather_descriptions[0]+". It is currently " + body.current.temperature+" degrees out. It feels like "+ response.body.current.feelslike);
        }
    })
}


module.exports=weather