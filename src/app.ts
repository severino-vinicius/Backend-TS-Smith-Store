import express from 'express';
import productsController from './controller/products.controller';
import orderController from './controller/order.controller';
import loginController from './controller/login.controller';
import loginMiddleware from './middleware/login.middleware';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProdCont);

app.get('/products', productsController.getAllProducts);

app.get('/orders', orderController.getAllOrders);

app.post('/login', loginMiddleware, loginController.userLogin);

export default app;
