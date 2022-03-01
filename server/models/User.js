const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        min: 10,
        max: 50
    },

    password: {
        type: String,
        require: true,
        min: 8,
        max: 20
    },

    userFavorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]


});

module.exports = mongoose.model('User', UserSchema);
