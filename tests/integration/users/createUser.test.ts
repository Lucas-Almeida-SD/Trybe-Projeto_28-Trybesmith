import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';
import connection from '../../../src/models/connection';

import { 
  nonExistentUsernameCreateUserRequest,
  nonStringTypeUsenameCreateUserRequest,
  usernameLengthNotAllowedCreateUserRequest,
  nonExistentClasseCreateUserRequest,
  nonStringTypeClasseCreateUserRequest,
  classeLengthNotAllowedCreateUserRequest,
  nonExistentLevelCreateUserRequest,
  nonNumberTypeLevelCreateUserRequest,
  levelEqualToZeroCreateUserRequest,
  nonExistentPasswordCreateUserRequest,
  nonStringTypePasswordCreateUserRequest,
  passwordLengthNotAllowedCreateUserRequest,
  createUserRequest,
  createdUser
} from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "POST /users"', () => {
  let response: any;
  let users: object;

  before(async () => {
    await createDB();
  });

  describe('Será validado que o campo "username" é obrigatório', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonExistentUsernameCreateUserRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""username" is required"', () => {
      const errorMessage = { message: '"username" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "username" tem o tipo string', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonStringTypeUsenameCreateUserRequest);
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""username" must be a string"', () => {
      const errorMessage = { message: '"username" must be a string' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "username" é uma string com mais de 2 caracteres', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/users')
        .send(usernameLengthNotAllowedCreateUserRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""username" length must be at least 3 characters long"', () => {
      const errorMessage = { message: '"username" length must be at least 3 characters long' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "classe" é obrigatório', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonExistentClasseCreateUserRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""classe" is required"', () => {
      const errorMessage = { message: '"classe" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "classe" tem o tipo string', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonStringTypeClasseCreateUserRequest);
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""classe" must be a string"', () => {
      const errorMessage = { message: '"classe" must be a string' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "classe" é uma string com mais de 2 caracteres', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/users')
        .send(classeLengthNotAllowedCreateUserRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""classe" length must be at least 3 characters long"', () => {
      const errorMessage = { message: '"classe" length must be at least 3 characters long' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "level" é obrigatório', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonExistentLevelCreateUserRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""level" is required"', () => {
      const errorMessage = { message: '"level" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "level" tem o tipo number', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonNumberTypeLevelCreateUserRequest);
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""level" must be a number"', () => {
      const errorMessage = { message: '"level" must be a number' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "level" deve ser um número maior que 0', () => {

    before(async () => {
      response = await chai
        .request(server)
        .post('/users')
        .send(levelEqualToZeroCreateUserRequest);
    });

    it('Deve responder com código de status "422"', function() {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""level" must be greater than or equal to 1"', () => {
      const errorMessage = { message: '"level" must be greater than or equal to 1' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "password" é obrigatório', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonExistentPasswordCreateUserRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""password" is required"', () => {
      const errorMessage = { message: '"password" is required' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "password" tem o tipo string', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(nonStringTypePasswordCreateUserRequest);
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""password" must be a string"', () => {
      const errorMessage = { message: '"password" must be a string' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "password" é uma string com 8 ou mais caracteres', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(passwordLengthNotAllowedCreateUserRequest);
    });

    it('Deve responder com código de status "422"', () => {
      expect(response).to.have.status(422);
    });

    it('Deve responder com a mensagen de erro ""password" length must be at least 8 characters long"', () => {
      const errorMessage = { message: '"password" length must be at least 8 characters long' };

      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que é possível cadastrar a pessoa usuária com sucesso', () => {

    before(async () => {
      response = await chai
      .request(server)
      .post('/users')
      .send(createUserRequest);

      [users] = await connection.execute('SELECT * FROM Trybesmith.Users');
    });

    it('Deve responder com código de status "201"', () => {
      expect(response).to.have.status(201);
    });

    it('Deve responder com um token no body da response', () => {
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string');
    });

    it('A pessoa usuária cadastrada deve estar no banco de dados', () => {
      expect(users).to.deep.include(createdUser);
    });
  });
});