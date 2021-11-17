const router = require('express').Router();
const { Movie, Review } = require('../models');

// get route to display reviews for selected movie 
router.get('/:id', async (req, res) => {
    try {
        const movieData = await Movie.findOne({where: { id: req.params.id}});
        const movieInfo = movieData.get({ plain: true });

        const reviewData = await Review.findAll({where: {movie_id: req.params.id}}) || null;
        const reviewInfo = reviewData.map((review) => review.get({ plain: true })) || null;

        
        res.render('review', {reviewInfo, movieInfo});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;