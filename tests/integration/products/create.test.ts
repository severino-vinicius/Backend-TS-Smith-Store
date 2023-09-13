import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna 201 e o produto criado', async function () {
    const body = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4
    }

    sinon.stub(ProductModel, 'create').resolves(ProductModel.build({
      id: 7,
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }))
    const response = await chai.request(app).post('/products').send(body)
    expect(response.status).to.be.equal(201)
    expect(response.body).to.be.deep.equal({
      id: 7,
      name: 'Martelo de Thor',
      price: '30 peças de ouro'
    })
  });
});
