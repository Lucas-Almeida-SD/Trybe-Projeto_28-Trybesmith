import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';
import { getAllOrdersResponse } from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "GET /orders"', () => {
  let response: any;

  before(async () => {
    await createDB();
  });

  describe('Será validado que é possível listar todos os pedidos com sucesso', () => {
    before(async () => {
      response = await chai.request(server).get('/orders');
    });

    it('Deve responder com código de status "200"', () => {
      expect(response).to.have.status(200);
    });

    it('Deve responder com uma lista de pedidos no body da response', () => {
      expect(response.body).to.eqls(getAllOrdersResponse);
    });
  });
});