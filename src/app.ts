import express from 'express';
import productsController from './controller/products.controller';
import orderController from './controller/order.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProdCont);

app.get('/products', productsController.getAllProducts);

app.get('/orders', orderController.getAllOrders);

export default app;
