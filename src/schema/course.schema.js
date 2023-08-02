import Joi from 'joi'

export const COURSE_SCHEMA = Joi.object({
    name: Joi.string().max(20).required(),
    description: Joi.string().max(100).required(),
    price: Joi.number().required(),
}).required();