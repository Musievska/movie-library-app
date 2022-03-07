const User = require('../models/User');
const { newUserValidation } = require('../helper/validator');
const asyncHandler = require('express-async-handler');
const express = require('express');

const router = express.Router();

router.post(
    '/register',
    asyncHandler(async (req, res, next) => {
        const { error } = newUserValidation(req.body);

        if (error) {
            const err = new Error(error.details[0].message);
            err.status = 400;
            next(err);
        }

        const { firstName, lastName, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            const err = new Error(`User already exist`);
            err.status = 400;
            next(err);
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        });

        res.json({ message: `New user created` });
    })
);

module.exports = router;