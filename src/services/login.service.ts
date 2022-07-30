import LoginModel from '../models/login.model';
import ILogin from '../interfaces/login.interface';
import EErrors from '../enumerates/errors.enumerate';
import loginValidate from '../validations/login.validate';
import generateToken from '../helpers/generateToken';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  public async login(userLogin: ILogin): Promise<string> {
    loginValidate(userLogin);

    const user = await this.model.login(userLogin);

    if (!user) throw new Error(EErrors.invalidUsernameOrPassword);

    const token = generateToken(user);

    return token;
  }
}