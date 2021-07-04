module.exports = app => {
    app.get('/api/project/GetProjects', (req, res) => {
        var data = require('../json/project.json');
        res.json(data);
    })

    app.get('/api/apartment/GetApartments', (req, res) => {
        var data = require('../json/apartment.json');
        res.json(data);
    })
}