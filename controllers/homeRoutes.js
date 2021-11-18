const router = require('express').Router();
const { Movie } = require('../models');

router.get('/', async (req, res) => {
    try{
        const movieData = await Movie.findAll();
        const movieInfo = movieData.map(movie => movie.get({ plain: true }));

        res.render('home', {movieInfo, logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});


router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
    res.render('signup');
});

module.exports = router;