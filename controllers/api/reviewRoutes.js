const router = require('express').Router();
const { Review } = require('../../models');

// post route to create a review
router.post('/:id', async (req, res) => {
    try {
      const newReview = await Review.create({
        review_title: req.body.review_title,
        review_body: req.body.review_body,
        user_id: req.session.user_id,
        movie_id: req.params.id
      });
      console.log(newReview)
  
      res.status(200).json(newReview);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;