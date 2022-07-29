import UserModel from '../models/users.model';
import IUser from '../interfaces/users.interface';
import generateToken from '../helpers/generateToken';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: IUser): Promise<string> {
    const userCreated = await this.model.create(user);

    const token = generateToken(userCreated);

    return token;
  }
}