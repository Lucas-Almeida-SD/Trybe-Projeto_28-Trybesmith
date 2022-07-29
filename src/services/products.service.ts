import IProduct from '../interfaces/products.inteface';
import ProductModel from '../models/products.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async create(product: IProduct): Promise<IProduct> {
    const productCreated = await this.model.create(product);

    return productCreated;
  }
}