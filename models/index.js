const User = require('./User');
const Review = require('./Posts');
const Movie = require('./Movie');

Review.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

Movie.hasMany(Review, {
    foreignKey: 'movie_id',
    onDelete: 'CASCADE',
}),

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { Movie, User, Review };