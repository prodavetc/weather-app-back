const {getCity} = require( '../lib/location')
const { getWeather } = require('../lib/weather')


const getCurrent = async (cityId) => {
    if(cityId){
        const reqLocation = cityId
        const weather = await getWeather(reqLocation,false)
        const arrData = {"location": { "city": cityId}, "clima": weather}
        return arrData

    }else{
        const city = await getCity()
        let reqLocation = `${city.city},${city.country}`
        const weather = await getWeather(reqLocation,false)
        const arrData = {"location": city, "clima": weather}
        return arrData
    }



}

module.exports = {getCurrent}