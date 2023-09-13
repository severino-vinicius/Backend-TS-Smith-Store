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

  return { status: 'SUCCESS', data: productCreatedWithoutId };
};

export default {
  createProd,
};