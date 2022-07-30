import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import EErrors from '../enumerates/errors.enumerate';

const getErrorCodeAndMessage = (errorMessage: string) => {
  const generateError = (code: number, message: string) => ({ code, message });

  switch (errorMessage) {
    case (EErrors.usernameRequired):
      return generateError(StatusCodes.BAD_REQUEST, errorMessage);
    case (EErrors.passwordRequired):
      return generateError(StatusCodes.BAD_REQUEST, errorMessage);
    case (EErrors.invalidUsernameOrPassword):
      return generateError(StatusCodes.UNAUTHORIZED, errorMessage);
    default:
      return generateError(StatusCodes.INTERNAL_SERVER_ERROR, '');
  }
};

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { message: errorMessage } = err;

  const { code, message } = getErrorCodeAndMessage(errorMessage);

  res.status(code).json({ message });
};
