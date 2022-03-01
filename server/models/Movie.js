const mongoose = require('mongoose');

const MovieModel = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true,
        index: {
            unique: true
        }
    },

    title: {
        type: String,
        required: true,
    },

    poster: {
        type: String
    },

    genres: {
        type: String
    },

    description: {
        type: String
    },

    review: [{
        type: String
    }],

    rating: {
        type: Number
    }
});

module.exports = mongoose.model('Movie', MovieModel);
