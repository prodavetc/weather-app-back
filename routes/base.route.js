const {Router} = require('express')
const {getCity} = require( '../lib/location')
const { getWeather } = require('../lib/weather')
const { getLocation } = require('../services/location')
const { getForecast } = require('../services/forecast')
const { getCurrent } = require('../services/current')
const router = Router()

router.get('/v1', async (req, res) => {
    try{
        const city = await getCity()
        const reqLocation = `${city.city},${city.country}`
        const weather = await getWeather(reqLocation,false)
        const arrData = {"location": city, "clima": weather}
        res.json([arrData]);
    }catch (e) {
        res.status(500).json({message: 'Algo salio mal'})
    }

})

router.get('/', function(req, res) {
    res.send('go to v1')
})

router.get('/location', async (req, res) => {
    try{
        const loc = await getLocation()
        res.json([loc])
    }catch (e) {
        res.status(500).json({message: 'Algo salio mal'})
    }
})

router.get('/current/:id?', async (req, res) => {
    try{
        if(req.params.id){
            (req.params.id)
        }
        cityId = req.params.id || null
        const current = await getCurrent(cityId)
        res.json([current])


    }catch (e) {
        res.status(500).json({message: `Algo salio mal en Forecast ${req.params.id}`})
    }

})

router.get('/forecast/:id?', async (req, res) => {
    try{
        if(req.params.id){
            (req.params.id)
        }
        cityId = req.params.id || null
        const forecast = await getForecast(cityId)
        res.json([forecast])


    }catch (e) {
        res.status(500).json({message: `Algo salio mal en Forecast ${req.params.id}`})
    }



})


module.exports = router