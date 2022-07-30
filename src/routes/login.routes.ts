import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import 'express-async-errors';

const loginRoutes = Router();

const loginController = new LoginController();

loginRoutes.post('/', loginController.login);

export default loginRoutes;