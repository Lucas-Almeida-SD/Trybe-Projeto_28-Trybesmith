import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';

import { getAllProductsResponse } from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe.only('Testes da rota "GET /products"', () => {
  let response: any;

  before(async () => {
    await createDB();
  })

  describe('Será validado que é possível listar todos os produtos com sucesso', () => {
    before(async () => {
      response = await chai
        .request(server)
        .get('/products');
    });

    it('Deve responder com código de status "200"', function() {
      expect(response).to.have.status(200);
    });

    it('Deve responder com o objeto do produto criado', function() {
      expect(response.body).to.be.eqls(getAllProductsResponse);
    });
  });
});