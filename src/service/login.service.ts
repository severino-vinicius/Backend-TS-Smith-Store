import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { ServiceResponse, ServiceResponseFailure } from '../types/ServiceResponse';

const secret = process.env.JWT_SECRET as string;

const unauthorizedMensage: ServiceResponseFailure = {
  status: 'UNAUTHORIZED',
  data: {
    message: 'Username or password invalid',
  },
};

const userLogin = async (username: 'string', password: 'string'): 
Promise<ServiceResponse<{ token: string }>> => {
  const responseModel = await UserModel.findOne({ where: { username } });

  if (!responseModel) {
    return unauthorizedMensage;
  }

  const isValidPassword = await bcrypt.compare(password, responseModel.dataValues.password);

  if (!isValidPassword) {
    return unauthorizedMensage;
  }

  const token = jwt.sign({
    id: responseModel.dataValues.id,
    username: responseModel.dataValues.username,
  }, secret);

  return { status: 'SUCCESS', data: { token } };
};

export default {
  userLogin,
};