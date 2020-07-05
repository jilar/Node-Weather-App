const request= require('request')
const geocode= require('./utils/geocode')
const weather= require('./utils/weather')

const urlWeather='http://api.weatherstack.com/current?access_key=a1ee764471b6c24c72b341893fa734c6&query=37,-122&units=f'

const command =process.argv[2]

if(!command){
 console.log("Please Provide Location")
 return
}

geocode(command,(error,response)=>{
    const {place_name,latitude,longitude}= response
    if (error){
        return console.log(error)
    }
    weather(latitude,longitude,(error,forecast)=>{
        if (error){
            return console.log(error)
        }
        console.log(place_name)
        console.log(forecast);
    })
})


