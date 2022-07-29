import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productRoutes);
app.use('/users', routes.userRoutes);

export default app;