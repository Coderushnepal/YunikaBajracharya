import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  quantity: Joi.number().min(10).required(),

  rate: Joi.number().required(),
});

export default schema;
