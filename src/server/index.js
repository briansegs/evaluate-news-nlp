var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const app = express()

// Cors for cross origin allowance
app.use(cors())
const { Router, response } = require('express');

// to use json
app.use(express.json())

// to use url encoded values
app.use(express.urlencoded({
  extended: true
}))

// Initialize the main project folder
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')

})

// designates what port the app will listen to for incoming requests
const port = 8081;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
