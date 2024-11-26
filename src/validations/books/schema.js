const Joi = require("joi");

exports.create = Joi.object().keys({
  name: Joi.string().max(10).trim().required(),
  sinopsis: Joi.string().required(),
  year: Joi.number().required()
})