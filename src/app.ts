import express from 'express';
import productsController from './controller/products.service';

const app = express();

app.use(express.json());

app.post('/products', productsController.createProdCont);

export default app;
