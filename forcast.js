const request = require('request')


const forecast = (longitude,latitude,callback) => 
{

     const url = "http://api.weatherstack.com/current?access_key=b7adb3d0ed39b0b4a409b5893c1b784e&query="+latitude+","+longitude

      request({url, json:true},(error,{  body }) => 
      {
         

         if(error)
         {
         	callback("Unable to connect to the server",undefined)
         }

         else if(body.error)
         {
         	callback("Unable to find the location")
         }
         else
         {
         	callback(undefined,
              
              {

         	 Weather_Description: body.current.weather_descriptions[0],
         	 Current_Temperature: body.current.temperature
         		}
          )
         }




      })
}



module.exports = forecast