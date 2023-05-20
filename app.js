 const request = require('request')

 const geoCode = require('./geoCode')

 const forecast = require('./forcast') 


// const url = "http://api.weatherstack.com/current?access_key=b7adb3d0ed39b0b4a409b5893c1b784e&query=37.8267,-122.4233&units=f"


// request({url:url, json:true}, (error,response) => 
// {
   

//     if(error)
//     {
//     	console.log("Unable to connect to the server")
//     }
//     else if(response.body.error)
//     {
//     	console.log("Unable to find the location")
//     }

//     else
//     {
//     	 console.log(response.body.current.weather_descriptions[0]+ ". It is currently "+ response.body.current.temperature+ " degree. it feels like "+ response.body.current.feelslike+ " degree but there is "+data.current.precipProbability+ " of raining")



//     }
     
    
// })


// // const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRuYW5zaHV2byIsImEiOiJjbGhtdTFhdWcxZmczM29tdDRxZ2k1ejdnIn0.O3w-YDCcHmUhvLHhW8E8Bw&limit=1"


// // request({url:mapboxUrl, json:true}, (error,response) => 
// // {

// // 	if(error)
// // 	{
// // 		console.log("Unable to connect to the server")
// // 	}
// // 	else
// // 	{
// // 	const location = response.body.features[0].place_name

// // 	console.log("the name of the location is "+location+ ". the longitude is "+ response.body.features[0].center[0]+ " and the latitude is "+ response.body.features[0].center[1])
// // }
// // })




const address = process.argv[2]


if(!address)
{
	console.log("Please provide Address")

}
else
{
geoCode(address, (error, { longitude,latitude, body}) => 
{
	

	 if(error)
	 {
	 	console.log(error)
	 }

	

	 

	 forecast(longitude,latitude, (error,response) => 
{
	console.log("Error ", error)
	console.log("Data ", response)

})
})	
}








