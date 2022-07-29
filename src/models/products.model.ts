import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/products.inteface';
import connectionDB from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connectionDB;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [rows] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = rows;

    return { id: insertId, ...product };
  }
}