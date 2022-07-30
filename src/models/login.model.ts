import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/users.interface';
import connectionDB from './connection';

export default class LoginModel {
  public connection: Pool;

  constructor() {
    this.connection = connectionDB;
  }

  public async login(userLogin: ILogin): Promise<IUser | undefined> {
    const { username, password } = userLogin;

    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';

    const [rows] = await this.connection.execute(query, [username, password]);

    const [user] = rows as IUser[];

    return user;
  }
}