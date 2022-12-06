process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { checkConnection, syncModels } = require('./database/index.js')
const addRelationsModels = require('./database/relations.js')

const checkAndSync = async () => {
    await checkConnection()
    addRelationsModels ()
    await syncModels()
}

const listeningExpress =  () => {
    const app = express()
        .use(cors())
        .use(express.json())
        .use('/api', require('./api/routes/index.js'))
        .listen(process.env.PORT, () => {
        console.log(`Listening on port: ${process.env.PORT}`)
    })
}

(async function startAPI() {
    await checkAndSync()
    listeningExpress()
})()