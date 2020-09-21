const fetch = require('node-fetch')
const config = require('config')
const APIKEY = config.get('apiKey')


const getWeather = async (cityId, forecast = false) =>{
    if(forecast) {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityId}&units=metric&appid=${APIKEY}`
        let weather = await fetch(url)
            .then(res => { return res.json()})
        return weather
    }else {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityId}&units=metric&appid=${APIKEY}`
        let weather = await fetch(url)
            .then(res => { return res.json()})
        return weather
    }


}


module.exports = {getWeather}