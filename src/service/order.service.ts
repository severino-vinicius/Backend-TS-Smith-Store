import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getAllOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const responseModel = await OrderModel.findAll({ include: [
    {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  ],
  });
  const allOrders = responseModel.map((order) => {
    const orderData = order.toJSON();
    const orderProductId = orderData.productIds?.map((productId) => productId.id);
    return {
      id: orderData.id,
      userId: orderData.userId,
      productIds: orderProductId,
    };
  });
  return { status: 'SUCCESS', data: allOrders as Order[] };
};

export default {
  getAllOrders,
};

// return {
//   id: orderData.id,
//   userId: orderData.userId,
//   productIds: orderProductId,
// };