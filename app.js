const express = require('express')
const config = require('config')
const PORT = config.get('port') || 5000

const app = express()
app.use(express.json({ extended: true}))
app.use('/', require('./routes/base.route'))

 async function start(){
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    }catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()