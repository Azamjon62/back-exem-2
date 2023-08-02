import Joi from 'joi'

export const GROUP_SCHEMA = Joi.object({
    groupname: Joi.string().max(20).required(),
    course: Joi.string().max(20).required(),
    teacher: Joi.string().max(20).required(),
}).required();
