import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IToken from '../interfaces/token.interface';
import OrderService from '../services/orders.service';
import tokenValidate from '../validations/token.validate';

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
    const token = req.headers.authorization as string;
    const { productsIds } = req.body;

    const decoded = tokenValidate(token) as IToken;

    await this.service.create(decoded.id, productsIds);

    res.status(StatusCodes.CREATED).json({ userId: decoded.id, productsIds });
  };
}