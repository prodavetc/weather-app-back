const ipapi = require('ipapi.co')

const getCity = () => {
    return new Promise((resolve,reject) => {
        return ipapi.location((cityLocation,e) => {
            if(e){
                return reject(e)
            }
            return resolve(cityLocation)
        })
    })
}

module.exports = {getCity}

