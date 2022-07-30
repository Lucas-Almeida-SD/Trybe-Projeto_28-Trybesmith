import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/users.interface';
import throwMyObjectError from '../helpers/throwMyObjectError';

export const checkCredentials = (userLogin: ILogin) => {
  const { username, password } = userLogin;

  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate({ username, password });

  if (!error) return;

  throwMyObjectError(StatusCodes.BAD_REQUEST, error.message);
};

export const checkAuthorization = (user: IUser | undefined) => {
  if (!user) {
    throwMyObjectError(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
  }
};
