import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import authorization from '../middlewares/authorization';
import 'express-async-errors';

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.get('/', orderController.getAll);
orderRoutes.post('/', authorization, orderController.create);

export default orderRoutes;
