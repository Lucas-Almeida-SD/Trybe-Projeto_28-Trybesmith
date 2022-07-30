import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productRoutes);
app.use('/users', routes.userRoutes);
app.use('/orders', routes.orderRoutes);
app.use('/login', routes.loginRoutes);

app.use(errorMiddleware);

export default app;