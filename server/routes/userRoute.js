const express = require('express');
const User = require('../models/User');
const { newUserValidation, userLoginValidation } = require('../helper/validator');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../helper/generateToken');
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

        res.json({
            _id: user._id,
            firstName: user.firstName,
            toke: generateToken(user._id),
            message: `New user created`
        });
    })
);

router.post(
    '/login',
    asyncHandler(async (req, res, next) => {
        const { error } = userLoginValidation(req.body, next);

        if (error) {
            const err = new Error(error.details[0].message);
            err.status = 400;
            next(err);
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))){
        res.json({
            firstName: user.firstName,
            token: generateToken(user._id),
        })
    } else {
        const err = new Error(`Invalid email or password`);
        err.status = 401;
        next(err);
    }})
);

module.exports = router;