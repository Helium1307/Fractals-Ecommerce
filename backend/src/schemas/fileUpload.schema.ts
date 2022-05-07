import Joi from 'joi';

export const fileUploadSchema = Joi.object({
  name: Joi.string().required(),
  content: Joi.any().required(),
  resource: Joi.string().allow(null),
  resourceId: Joi.string().allow(null),
});
