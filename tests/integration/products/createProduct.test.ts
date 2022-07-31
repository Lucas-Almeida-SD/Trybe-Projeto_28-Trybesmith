import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';

import {
  createProductRequest,
  createProductResponse 
} from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "POST /products"', () => {
  let response: any;

  before(async () => {
    await createDB();
  })

  describe('Será validado que é possível cadastrar um produto com sucesso', () => {
    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(createProductRequest);
    });

    it('Deve responder com código de status "201"', function() {
      expect(response).to.have.status(201);
    });

    it('Deve responder com o objeto do produto criado', function() {
      expect(response.body).to.be.eqls(createProductResponse);
    });
  });
});