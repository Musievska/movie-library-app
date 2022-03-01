const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        require: true,
        trim: true
    },

    userFavorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]


});

const User = mongoose.model('User', UserSchema);
module.exports = User;