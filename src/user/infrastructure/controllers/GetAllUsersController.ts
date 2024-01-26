import { Request, Response } from 'express';
import { GetAllUsersUseCase } from '../../application/getAllUsersUseCase';

export class GetAllUsersController {
  private getAllUsersUseCase: GetAllUsersUseCase;

  constructor(getAllUsersUseCase: GetAllUsersUseCase) {
    this.getAllUsersUseCase = getAllUsersUseCase;
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.getAllUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}