import { Pool } from 'mysql2/promise';
import connectionDB from './connection';
import IOrder from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connectionDB;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `
      SELECT orders.id, orders.userId, products.id AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON orders.id = products.orderId
      ORDER BY orders.userId ASC
    `;

    const [orders] = await this.connection.execute(query);

    return orders as IOrder[];
  }
}