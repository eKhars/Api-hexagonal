import { Request, Response } from 'express';
import { AddUserUseCase } from '../../application/AddUserUseCase';
import { User } from '../../domain/User';

export class AddUserController {
  private addUserUseCase: AddUserUseCase;

  constructor(addUserUseCase: AddUserUseCase) {
    this.addUserUseCase = addUserUseCase;
  }

  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: User = req.body;
      const user = await this.addUserUseCase.execute(userData);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}