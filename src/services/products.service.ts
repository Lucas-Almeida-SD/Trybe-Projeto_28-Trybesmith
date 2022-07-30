import IProduct from '../interfaces/products.inteface';
import ProductModel from '../models/products.model';
import productsValidate from '../validations/products.validate';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async create(product: IProduct): Promise<IProduct> {
    productsValidate(product);
    
    const productCreated = await this.model.create(product);

    return productCreated;
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();

    return products;
  }
}