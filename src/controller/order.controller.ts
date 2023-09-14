import { RequestHandler } from 'express';
import orderService from '../service/order.service';
import mapStatusCode from '../utils/mapStatusCode';

const getAllOrders: RequestHandler = async (req, res) => {
  const serviceResponse = await orderService.getAllOrders();

  return res.status(mapStatusCode(serviceResponse.status))
    .json(serviceResponse.data);
};

export default {
  getAllOrders,
};