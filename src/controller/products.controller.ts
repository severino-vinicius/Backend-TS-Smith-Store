import { RequestHandler } from 'express';
import productsService from '../service/products.service';
import mapStatusCode from '../utils/mapStatusCode';

const createProdCont: RequestHandler = async (req, res) => {
  const product = req.body;

  const serviceResponse = await productsService.createProd(product);

  return res.status(mapStatusCode(serviceResponse.status))
    .json(serviceResponse.data);
};

const getAllProducts: RequestHandler = async (req, res) => {
  const serviceResponse = await productsService.getAllProducts();

  return res.status(mapStatusCode(serviceResponse.status))
    .json(serviceResponse.data);
};

export default {
  createProdCont,
  getAllProducts,
};