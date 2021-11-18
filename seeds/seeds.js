const sequelize = require('../config/connection');
const { Movie, Review, User } = require('../models');

const movieData = require('./movieData.json');
const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Movie.bulkCreate(movieData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
