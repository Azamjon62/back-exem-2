import Joi from 'joi'

export const HOMEWORK_SCHEMA = Joi.object({
    group: Joi.string().max(20).required(),
    text: Joi.string().max(200).required(),
}).required();
