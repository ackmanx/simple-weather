module.exports = function (app) {
    app.get('/weather', function (req, res)  {
        res.json(require('./api/mock-forecast')).end()
    })
}
