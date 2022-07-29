import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/users.interface';
import connectionDB from './connection';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connectionDB;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;

    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `;
    const values = [username, classe, level, password];

    const [data] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId } = data;

    return { id: insertId, ...user };
  }
}