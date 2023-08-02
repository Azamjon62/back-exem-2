import Joi from 'joi'

export const TEACHER_SCHEMA = Joi.object({
    username: Joi.string().max(20).required(),
    password: Joi.string().max(20).required(),
    course: Joi.string().max(20).required(),
    groups: Joi.string().required()
}).required();
