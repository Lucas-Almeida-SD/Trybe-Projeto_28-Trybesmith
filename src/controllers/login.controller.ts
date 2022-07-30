import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const userLogin = req.body;

    const token = await this.service.login(userLogin);

    res.status(StatusCodes.OK).json({ token });
  };
}