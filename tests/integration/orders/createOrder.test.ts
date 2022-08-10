import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';
import { 
  createOrderRequest,
  invalidToken,
  loginRequest,
  nonArrayTypeProductsIdsCreateOrderRequest,
  productsIdsLengthNotAllowedCreateOrderRequest,
  oneProductCreateOrderResponse,
  manyProductsCreateOrderResponse,
} from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe.only('Testes da rota "POST /orders', () => {
  let response: any;
  let loginResponse: any;

  before(async () => {
    await createDB();
  });

  describe('Será validado que não é possível cadastrar pedidos sem token', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/orders')
        .send(createOrderRequest);
    });

    it('Deve responder com código de status "401"', () => {
      expect(response).to.have.status(401)
    });

    it('Deve responder com a mensagen de erro "Token not found"', () => {
      const errorMessage = { message: 'Token not found' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que não é possível cadastrar um pedido com token inválido', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: invalidToken })
        .send(createOrderRequest);
    });

    it('Deve responder com código de status "401"', () => {
      expect(response).to.have.status(401)
    });

    it('Deve responder com a mensagen de erro "Invalid token"', () => {
      const errorMessage = { message: 'Invalid token' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "productsIds" é obrigatório"', () => {

    before(async () => {
      loginResponse = await chai
      .request(server)
      .post('/login')
      .send(loginRequest);

      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: loginResponse.body.token })
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400)
    });

    it('Deve responder com a mensagen de erro ""productsIds" is required"', () => {
      const errorMessage = { message: '"productsIds" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que não é possível criar um pedido com o campo "productsIds" não sendo um array', () => {

    before(async () => {
      loginResponse = await chai
      .request(server)
      .post('/login')
      .send(loginRequest);

      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: loginResponse.body.token })
        .send(nonArrayTypeProductsIdsCreateOrderRequest)
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422)
    });

    it('Deve responder com a mensagen de erro ""productsIds" must be an array"', () => {
      const errorMessage = { message: '"productsIds" must be an array' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que não é possível criar um pedido com o campo "productsIds" vazio', () => {

    before(async () => {
      loginResponse = await chai
      .request(server)
      .post('/login')
      .send(loginRequest);

      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: loginResponse.body.token })
        .send(productsIdsLengthNotAllowedCreateOrderRequest)
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422)
    });

    it('Deve responder com a mensagen de erro ""productsIds"must include only numbers"', () => {
      const errorMessage = { message: '"productsIds" must include only numbers' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que é possível criar um pedido com sucesso com 1', () => {

    before(async () => {
      loginResponse = await chai
      .request(server)
      .post('/login')
      .send(loginRequest);

      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: loginResponse.body.token })
        .send({ productsIds: [createOrderRequest.productsIds[0]] })
    });

    it('Deve responder com código de status "201"', () => {
      expect(response).to.have.status(201)
    });

    it('Deve responder com o "productsId" e "userId" no body da response', () => {
      expect(response.body).to.be.eqls(oneProductCreateOrderResponse);
    });
  });

  describe('Será validado que é possível criar um pedido com sucesso com vários itens', () => {

    before(async () => {
      loginResponse = await chai
      .request(server)
      .post('/login')
      .send(loginRequest);

      response = await chai
        .request(server)
        .post('/orders')
        .set({ authorization: loginResponse.body.token })
        .send(createOrderRequest);
    });

    it('Deve responder com código de status "201"', () => {
      expect(response).to.have.status(201)
    });

    it('Deve responder com o "productsId" e "userId" no body da response', () => {
      expect(response.body).to.be.eqls(manyProductsCreateOrderResponse);
    });
  });
});