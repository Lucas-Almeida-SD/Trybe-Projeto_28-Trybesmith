import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IToken from '../interfaces/token.interface';
import OrderService from '../services/orders.service';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.service.getAll();

    res.status(StatusCodes.OK).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.user as IToken;
    const { productsIds } = req.body;

    await this.service.create(user.id, productsIds);

    res.status(StatusCodes.CREATED).json({ userId: user.id, productsIds });
  };
}