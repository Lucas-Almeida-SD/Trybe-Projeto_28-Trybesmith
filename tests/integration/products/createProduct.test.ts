import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';

import {
  nonExistentNameCreateProductRequest,
  nonStringTypeNameCreateProductRequest,
  nameLengthNotAllowedCreateProductRequest,
  nonExistentAmountCreateProductRequest,
  nonStringTypeAmountCreateProductRequest,
  amountLengthNotAllowedCreateProductRequest,
  createProductRequest,
  createProductResponse,
} from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "POST /products"', () => {
  let response: any;

  before(async () => {
    await createDB();
  });

  describe('Será validado que o campo "name" é obrigatório', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(nonExistentNameCreateProductRequest);
    });

    it('Deve responder com código de status "400"', function() {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""name" is required"', () => {
      const errorMessage = { message: '"name" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "name" tem o tipo string', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(nonStringTypeNameCreateProductRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""name" is required"', () => {
      const errorMessage = { message: '"name" must be a string' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "name" é uma string com mais de 2 caracteres', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(nameLengthNotAllowedCreateProductRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""name" is required"', () => {
      const errorMessage = { message: '"name" length must be at least 3 characters long' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "amount" é obrigatório', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(nonExistentAmountCreateProductRequest);
    });

    it('Deve responder com código de status "400"', function() {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""amount" is required"', () => {
      const errorMessage = { message: '"amount" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "amount" tem o tipo string', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(nonStringTypeAmountCreateProductRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""amount" is required"', () => {
      const errorMessage = { message: '"amount" must be a string' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "amount" é uma string com mais de 2 caracteres', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(amountLengthNotAllowedCreateProductRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""amount" is required"', () => {
      const errorMessage = { message: '"amount" length must be at least 3 characters long' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que é possível cadastrar um produto com sucesso', () => {
    
    before(async () => {
      response = await chai
        .request(server)
        .post('/products')
        .send(createProductRequest);
    });

    it('Deve responder com código de status "201"', () => {
      expect(response).to.have.status(201);
    });

    it('Deve responder com o objeto do produto criado', () => {
      expect(response.body).to.be.eqls(createProductResponse);
    });
  });
});
