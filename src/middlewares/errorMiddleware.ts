import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.name === 'error object') {
    const { code, message } = JSON.parse(err.message);
    return res.status(code).json({ message });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};
