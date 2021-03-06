const Joi = require('joi');

const newUserValidation = (user) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .alphanum()
            .min(2)
            .max(20)
            .required(),
        lastName: Joi.string()
            .alphanum()
            .required()
            .min(3)
            .max(20),

        password: JoiPassword.string()
            .required()
            .min(8)
            .max(20)
            .minOfSpecialCharacters(1)
            .minOfUppercase(1)
            .messages({
                'password.min': `Password should be at least 6 characters`,
                'password.max': `Password should be at most 20 characters`,
                'password.minOfSpecialCharacters': `Password should contain at least one special character`,
                'password.minOfUppercase': `Password should contain at least one upper case letter`
            }),

        repeated_password: Joi.string().required().valid(Joi.ref('password')),

        email: Joi.string().email()
    });

    return schema.validate(user, { abortEarly: false });
}

const userLoginValidation = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    return schema.validate(user);
}

module.exports = { newUserValidation, userLoginValidation };