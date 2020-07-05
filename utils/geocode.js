const request= require('request')

const geocode =(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiamlsYXIiLCJhIjoiY2thdnVhd290MHBmYzMzcXJ4OTdqM2M2OSJ9.YIz8EmUNjU0wyBe69Mu5tA&limit=1"
    request({url,json:true},(error,response)=>{
        const {body}=response
        if(error){
            callback("Unable to connect to location service",undefined)
        }else if(body.features.length == 0){
            callback("Invalid Query")
        }else{
            callback(undefined,{latitude:body.features[0].center[1],
                                longitude: body.features[0].center[0],
                                place_name:body.features[0].place_name});
        }
    })
}

module.exports=geocode