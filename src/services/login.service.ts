import LoginModel from '../models/login.model';
import ILogin from '../interfaces/login.interface';
import * as loginValidate from '../validations/login.validate';
import generateToken from '../helpers/generateToken';
import IUser from '../interfaces/users.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  public async login(userLogin: ILogin): Promise<string> {
    loginValidate.checkCredentials(userLogin);

    const user = await this.model.login(userLogin);

    loginValidate.checkAuthorization(user);

    const token = generateToken(user as IUser);

    return token;
  }
}