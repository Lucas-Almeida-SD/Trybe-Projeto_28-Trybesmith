import Joi from 'joi';
import ILogin from '../interfaces/login.interface';

export default (userLogin: ILogin) => {
  const { username, password } = userLogin;

  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate({ username, password });

  if (error) throw new Error(error.message);
};
