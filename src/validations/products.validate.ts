import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import generateError from '../helpers/generateError';
import IProduct from '../interfaces/products.inteface';

const getStatusCode = (message: string) => {
  switch (true) {
    case (message.includes('is required')):
      return StatusCodes.BAD_REQUEST;
    case (message.includes('must be a string')):
      return StatusCodes.UNPROCESSABLE_ENTITY;
    case (message.includes('length must be at least 3 characters long')):
      return StatusCodes.UNPROCESSABLE_ENTITY;
    default:
      return StatusCodes.INTERNAL_SERVER_ERROR;
  }
};

export default (product: IProduct) => {
  const { name, amount } = product;

  const { error } = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  }).validate({ name, amount });

  if (!error) return;

  const code = getStatusCode(error.message);

  const myError = new Error(JSON.stringify(generateError(code, error.message)));
  myError.name = 'error object';

  throw myError;
};
