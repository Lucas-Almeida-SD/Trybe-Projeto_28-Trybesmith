import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import 'express-async-errors';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/', productController.getAll);
productRoutes.post('/', productController.create);

export default productRoutes;