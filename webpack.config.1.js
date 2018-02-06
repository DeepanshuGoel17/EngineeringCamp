module.exports={
context:__dirname,
entry:[
    
    './WeatherApi/weather.js'
],
output:{
path :__dirname,
publicPath:'/',
filename:'./WeatherApi/index.js'

},
watch:true

}