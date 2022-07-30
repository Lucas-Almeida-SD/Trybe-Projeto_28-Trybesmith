import UserModel from '../models/users.model';
import IUser from '../interfaces/users.interface';
import generateToken from '../helpers/generateToken';
import usersValidate from '../validations/users.validate';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: IUser): Promise<string> {
    usersValidate(user);
    
    const userCreated = await this.model.create(user);

    const token = generateToken(userCreated);

    return token;
  }
}