import OrderModel from '../models/orders.model';
import IOrder from '../interfaces/orders.interface';
import organizeProductIds from '../helpers/organizeProductIds';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();

    const newOrders = organizeProductIds(orders);

    return newOrders;
  }
}