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

    active: {
        type: Boolean,
        default: false
    },

    password: {
        type: String,
        require: true,
        trim: true
    },

    ressetPasswordToken: {
        type: String,
        default: null
    },

    reserPasswordExp: {
        type: Date,
        default: null
    },

    userFavorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],


     timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },


});

const User = mongoose.model('User', UserSchema);
module.exports = User;