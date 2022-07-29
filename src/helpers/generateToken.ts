import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/users.interface';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default (user: IUser) => {
  const { id, username, classe, level } = user;
  const data = { id, username, classe, level };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  } as object;

  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
};