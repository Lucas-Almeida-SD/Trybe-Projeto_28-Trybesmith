import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import throwMyObjectError from '../helpers/throwMyObjectError';

const secret = 'mysupersecret';

export default (token: string) => {
  if (!token) throwMyObjectError(StatusCodes.UNAUTHORIZED, 'Token not found');

  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throwMyObjectError(StatusCodes.UNAUTHORIZED, 'Invalid token');
  }
};
