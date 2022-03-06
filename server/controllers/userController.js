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



module.exports = {
    userRegister,

}