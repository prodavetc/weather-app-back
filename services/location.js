const {getCity} = require( '../lib/location')
const { getWeather } = require('../lib/weather')


const getLocation = async (req, res) => {

    const city = await getCity()
    const reqLocation = `${city.city},${city.country}`
    const weather = await getWeather(reqLocation,false)
    const arrData = {"location": city, "clima": weather}
    return arrData


}

module.exports = {getLocation}
