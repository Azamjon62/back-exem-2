import Joi from 'joi'

export const STUDENT_SCHEMA = Joi.object({
    username: Joi.string().max(20).required(),
    password: Joi.string().max(20).required(),
    phonenumber: Joi.required(),
    groups: Joi.required()
}).required();