import { Request, Response } from 'express';
import { UserService } from '../../application/userService';

export class UserController {
  constructor(private userService: UserService) {}

  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.addUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}