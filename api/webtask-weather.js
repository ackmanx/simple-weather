/**
 * This file is hosted on Webtask
 * To update, run npm script webtask-deploy
 *
 * https://wt-b799f0ade639c484ac317ecb184a02ad-0.sandbox.auth0-extend.com/weather
 */
const express = require('express')
const Webtask = require('webtask-tools')
const bodyParser = require('body-parser')
const app = express()
const fetch = require('node-fetch')

app.use(bodyParser.json())

app.get('/', function (wtReq, wtRes) {
    fetch('https://api.darksky.net/forecast/81e1a44067bc1754016d218491f6c854/44.864181,-93.3081277?exclude=minutely,hourly,alerts,flags')
        .then(res => res.json())
        .then(json => wtRes.json(json))
})

module.exports = Webtask.fromExpress(app)
