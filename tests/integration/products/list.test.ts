import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna 200 e todos os produtos do banco', async function () {
    const mockAllProducts = [
      {
        id: 1,
        name: 'Excalibur',
        price: '10 peças de ouro',
        orderId: 1
      },
      {
        id: 2,
        name: 'Espada Justiceira',
        price: '20 peças de ouro',
        orderId: 1
      }
    ]

    sinon.stub(ProductModel, 'findAll').resolves(
      ProductModel.bulkBuild([
        {
          id: 1,
          name: 'Excalibur',
          price: '10 peças de ouro',
          orderId: 1
        },
        {
          id: 2,
          name: 'Espada Justiceira',
          price: '20 peças de ouro',
          orderId: 1
        }
      ])
      // ProductModel.build({
      //   id: 1,
      //   name: 'Excalibur',
      //   price: '10 peças de ouro',
      //   orderId: 1
      // }),
      // ProductModel.build({
      //   id: 2,
      //   name: 'Espada Justiceira',
      //   price: '20 peças de ouro',
      //   orderId: 1
      // }),
    )
    const response = await chai.request(app).get('/products')
    expect(response.status).to.be.equal(200)
    expect(response.body).to.be.deep.equal(mockAllProducts)
  });
});
