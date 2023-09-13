import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const createProd = async (product: ProductInputtableTypes): 
Promise<ServiceResponse<Omit<Product, 'orderId'>>> => {
  const productCreated = await ProductModel.create(product);
  const { id, name, price } = productCreated.dataValues;
  const productCreatedWithoutId: Omit<Product, 'orderId'> = { 
    id,
    name,
    price,
  };

  return { status: 'CREATED', data: productCreatedWithoutId };
};

const getAllProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const responseModel = await ProductModel.findAll();
  const allProducts = responseModel.map((product) => product.toJSON());
  return { status: 'SUCCESS', data: allProducts };
};

export default {
  createProd,
  getAllProducts,
};