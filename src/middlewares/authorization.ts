import { Request, Response, NextFunction } from 'express';
import tokenValidate from '../validations/token.validate';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;

  tokenValidate(token);

  next();
};