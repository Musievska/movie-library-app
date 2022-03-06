const validate = require('../helper/validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    const { error } =  validate.newUserValidation(req.body);

    if (error) {
        console.log(error.details[0].message);
        return res.json({
            status: 404,
            message: error.details[0].message
        });
    }
}

const { name, email, password, confirmedPassword } = req.body;

if (password != confirmedPassword) {
    return res.json({
        status: 404,
        message: 'Passwords do not match'
    });
}

User.findOne({ email: email }),
async (err, res) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    if (User) {
        return res.json({
            status: 404,
            message: `Email is already registered`
        });
    } else {
        try {
            const salt = await bcrypt.genSalt(10);
            hashPass = await bcrypt.hash(password, salt);
            console.log(hashPass);
            const user = await User.create({
                username: username,
                email: email,
                password: hashPass
            });

            const token = jwt.sign({
                id: user_id
            })
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }
    }

module.exports = {
    userRegister,

}