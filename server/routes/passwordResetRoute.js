const express = require('express');
const dotenv = require('dotenv');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler')
const User = require('../models/User');
const sendGridMail = require('@sendgrid/mail');
const router = express.Router();
dotenv.config();
sendGridMail.setApiKey(process.env.SG_APIKEY);

router.post('/forgot',
    asyncHandler(async (req, res, next) => {
        const user = await User.findOne({ email: req.bodyemai });

        if (user) {
            user.passwordResetToken = crypto.randomBytes(20).toString('hex');
            user.passwordResetExpires = Date.now() + 3600000;
            await user.save();

            res.json({
                message: `You already received an email.Please check your inbox and follow the instructions :)`
            });
        

        const passwordResetURL = `https://${req.headers.host}/password/reset/${user.passwordResetToken}`;
            const message = {
                to: user.email,
                from: 'dilyana.musievska@gmail.com',
                subject: 'Reset your password',
                html: `<h1>Password reset instructions</h1>
                    <p>Click on the link below to reset your password</p>
                    <a>href=${passwordResetURL}</a>
                    <p>The link will expire in one hour</p>`
            }
                (async () => {
                    try {
                        await sendGridMail.send(message)
                    } catch (err) {
                        console.error(err);
                        if (err.response) {
                            console.error(err.response.body);
                        }
                    }
                })();

    } else {
        const err = new Error(`The email is not registred`);
        err.status = 404;
        next(err);
    }
    }));

router.post(
    './reset/token:',
    asyncHandler(async (req, res, next) => {
        const user = await User.findOne({
            passwordResetToken: req.params.token,
            passwordResetExpires: { $gt: Date.now() }
        });

        if (user) {
            user.password = req.body.password;
            user.passwordResetToken = undefined;
            user.passwordResetExpires = undefined;
            const updateUser = await user.save();
            res.json(updateUser);
        } else {
            const err = new Error(`The token is invalid ot has expired`);
            err.status = 404;
            next(err);
        }
    })
    )

module.exports = router;