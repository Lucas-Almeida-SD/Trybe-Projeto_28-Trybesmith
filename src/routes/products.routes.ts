import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.get('/', productController.getAll);
productRoutes.post('/', productController.create);

export default productRoutes;