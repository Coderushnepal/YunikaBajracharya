import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string(),
    quantity: Joi.number(),
    rate: Joi.number(),

});

export default schema;