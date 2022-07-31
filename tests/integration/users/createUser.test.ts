import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';
import connection from '../../../src/models/connection';

import { createUserRequest, createdUser } from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "POST /users"', () => {
  let response: any;
  let users: object;

  before(async () => {
    await createDB();
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