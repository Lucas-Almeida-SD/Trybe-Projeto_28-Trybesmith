import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../src/app';
import createDB from '../../helpers/createDB';
import { 
  nonExistentUsernameloginRequest,
  nonExistentPasswordloginRequest,
  invalidUsernameloginRequest,
  invalidPasswordloginRequest,
  loginRequest
} from '../../mocks/dataMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota "POST /login"', () => {
  let response: any;

  before(async () => {
    await createDB();
  });

  describe('Será validado que o campo "username" é enviado', () => {
    const errorMessage = { message: '"username" is required' };

    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(nonExistentUsernameloginRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""username" is required"', () => {
      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que o campo "password" é enviado', () => {
    const errorMessage = { message: '"password" is required' };

    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(nonExistentPasswordloginRequest);
    });

    it('Deve responder com código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('Deve responder com a mensagen de erro ""password" is required"', () => {
      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que não é possível fazer login com um username inválido', () => {
    const errorMessage = { message: 'Username or password invalid' };

    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(invalidUsernameloginRequest);
    });

    it('Deve responder com código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('Deve responder com a mensagen de erro ""Username or password invalid', () => {
      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que não é possível fazer login com uma senha inválida', () => {
    const errorMessage = { message: 'Username or password invalid' };

    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(invalidPasswordloginRequest);
    });

    it('Deve responder com código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('Deve responder com a mensagen de erro ""Username or password invalid', () => {
      expect(response.body).to.be.eqls(errorMessage);
    });
  });

  describe('Será validado que é possível fazer login com sucesso', () => {
    before(async () => {
      response = await chai
        .request(server)
        .post('/login')
        .send(loginRequest);
    });

    it('Deve responder com código de status "401"', () => {
      expect(response).to.have.status(200);
    });

    it('Deve responder com um token no body da response', () => {
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string');
    });
  });
});