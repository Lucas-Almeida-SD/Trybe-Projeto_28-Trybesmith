import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';
import IOrder from '../interfaces/orders.interface';
import organizeProductIds from '../helpers/organizeProductIds';
import ordersValidate from '../validations/orders.validate';

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

  public async create(userId: number, productsIds: number[]): Promise<void> {
    ordersValidate(productsIds);
    const orderId = await this.model.create(userId);

    const productModel = new ProductModel();
    await Promise.all(productsIds.map((id) => {
      const product = { orderId };
      return productModel.update(id, product);
    }));
  }
}