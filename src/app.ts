import express from 'express';
import productsController from './controller/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProdCont);

app.get('/products', productsController.getAllProducts);

export default app;
