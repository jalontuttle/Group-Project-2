const router = require('express').Router();
const { Movie } = require('../models');

router.get('/', async (req, res) => {
    try{
        const movieData = await Movie.findAll();
        const movieInfo = movieData.map(movie => movie.get({ plain: true }));

        res.render('home', {movieInfo})
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;