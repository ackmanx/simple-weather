module.exports = function (app) {
    app.get('/weather', function (req, res)  {
        res.json(require('./mock-forecast')).end()
    })
}
