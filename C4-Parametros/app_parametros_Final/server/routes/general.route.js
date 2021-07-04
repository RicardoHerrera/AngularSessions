module.exports = app => {
    app.get('/api/project/GetProject', (req, res) => {
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/GetApartments', (req, res) => {
        var data = require('../json/apartments.json');
        res.json(data);
    })
}