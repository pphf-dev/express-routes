const express = require('express');
const bodyParser = require('body-parser');

const locationRouter = express.Router();
locationRouter.use(bodyParser.json());

let locations = ['Tacoma', 'Marysville', 'Seattle', 'Spokane', 'Bellingham'];


locationRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
})
.get((req, res) => {
    res.send(locations)
})
.post((req, res) => {
    locations.push(req.body.location);
    res.send(locations)
});

module.exports = locationRouter;