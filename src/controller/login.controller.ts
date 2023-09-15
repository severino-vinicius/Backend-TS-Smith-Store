import { RequestHandler } from 'express';
import mapStatusCode from '../utils/mapStatusCode';
import loginService from '../service/login.service';

const userLogin: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const serviceResponse = await loginService.userLogin(username, password);

  return res.status(mapStatusCode(serviceResponse.status))
    .json(serviceResponse.data);
};

export default {
  userLogin,
};