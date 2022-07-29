import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.service.create(product);

    res.status(StatusCodes.CREATED).json(productCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    res.status(StatusCodes.OK).json(products);
  };
}