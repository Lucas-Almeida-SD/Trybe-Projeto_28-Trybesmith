import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import IUser from '../interfaces/users.interface';
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

export default (user: IUser) => {
  const { username, classe, level, password } = user;

  const { error } = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  }).validate({ username, classe, level, password });

  if (!error) return;

  const code = getStatusCode(error.message);

  throwMyObjectError(code, error.message);
};