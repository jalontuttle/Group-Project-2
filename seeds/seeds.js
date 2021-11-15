const sequelize = require('../config/connection');
const { User } = require('../models');

const movieData = require('./movieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(movieData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
