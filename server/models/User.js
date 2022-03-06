const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },

    lastName: {
        type: String,
        require: true,
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
    }],


     timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },


});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', UserSchema);
module.exports = User;