import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
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
}