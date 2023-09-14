import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna 200 e todas as Orders do banco', async function () {
    const mockAllOrders = [
      {
        "id": 1,
        "userId": 1,
        "productIds": [
          2,
          1
        ]
      },
      {
        "id": 2,
        "userId": 3,
        "productIds": [
          4,
          3
        ]
      },
    ]

    sinon.stub(OrderModel, 'findAll').resolves(
      OrderModel.bulkBuild([
        {
          id: 1,
          userId: 1,
          productIds: [
            {
              id: 2,
            },
            {
              id: 1,
            }
          ]
        },
        {
          id: 2,
          userId: 3,
          productIds: [
            {
              id: 4,
            },
            {
              id: 3,
            }
          ]
        },
      ], { include: [
        {
          model: ProductModel,
          as: 'productIds',
          attributes: ['id'],
        },
      ],
      }
      )
    )
    const response = await chai.request(app).get('/orders')
    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(mockAllOrders)
  });

});
