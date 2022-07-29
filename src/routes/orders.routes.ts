import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;
