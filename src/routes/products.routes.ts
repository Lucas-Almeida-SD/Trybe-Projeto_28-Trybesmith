import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productRoutes = Router();

const productController = new ProductController();

productRoutes.post('/', productController.create);

export default productRoutes;