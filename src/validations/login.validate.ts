import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import ILogin from '../interfaces/login.interface';
import generateError from '../helpers/generateError';
import IUser from '../interfaces/users.interface';

export const checkCredentials = (userLogin: ILogin) => {
  const { username, password } = userLogin;

  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate({ username, password });

  if (!error) return;

  const errorObject = generateError(StatusCodes.BAD_REQUEST, error.message);

  const myError = new Error(JSON.stringify(errorObject));
  myError.name = 'error object';

  throw myError;
};

export const checkAuthorization = (user: IUser | undefined) => {
  if (!user) {
    const errorObject = generateError(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
    const myError = new Error(JSON.stringify(errorObject));
    myError.name = 'error object';
    throw myError;
  }
};
