import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import IProduct from '../interfaces/products.inteface';
import throwMyObjectError from '../helpers/throwMyObjectError';

const getStatusCode = (message: string) => {
  switch (true) {
    case (message.includes('is required')):
      return StatusCodes.BAD_REQUEST;
    case (message.includes('must be')):
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

  throwMyObjectError(code, error.message);
};
