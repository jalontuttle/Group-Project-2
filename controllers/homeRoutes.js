const router = require('express').Router();
const { Movie } = require('../models');

// get route for homepage
app.get('/', function(req, res){
    res.render('home');
});

// get route to display list of movies

// get route to display review