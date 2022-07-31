import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct, { IProductUpdate } from '../interfaces/products.inteface';
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

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [products] = await this.connection.execute(query);

    return products as IProduct[];
  }

  public async update(productId: number, product: IProductUpdate): Promise<void> {
    const { name, amount, orderId } = product;
    const entries = Object.entries({ name, amount, orderId });
    const filterEntries = entries.filter((e) => e[1]);
    const keys = filterEntries.map((e) => e[0]);
    const values = filterEntries.map((e) => e[1]);

    const queryProperties = keys.map((key) => `${key} = ?`).join(',');
    const query = `
      UPDATE Trybesmith.Products
      SET ${queryProperties}
      WHERE id = ?
    `;
    
    await this.connection.execute(query, [...values, productId]);
  }
}