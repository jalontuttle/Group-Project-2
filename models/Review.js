const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        review_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;