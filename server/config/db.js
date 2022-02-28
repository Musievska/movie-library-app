require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('db connected');
    });
}