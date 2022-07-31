import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import throwMyObjectError from '../helpers/throwMyObjectError';

const getStatusCode = (message: string) => {
  switch (true) {
    case (message.includes('is required')):
      return StatusCodes.BAD_REQUEST;
    case (message.includes('must')):
      return StatusCodes.UNPROCESSABLE_ENTITY;
    default:
      return StatusCodes.INTERNAL_SERVER_ERROR;
  }
};

export default (productsIds: number[]) => {
  const message = '"productsIds" must include only numbers';
  const { error } = Joi.object({
    productsIds: Joi.array().items(Joi.number()).min(1).required()
      .messages({ 'array.min': message }),
  }).validate({ productsIds });

  if (!error) return;

  const code = getStatusCode(error.message);

  throwMyObjectError(code, error.message);
};