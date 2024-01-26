import { Request, Response } from 'express';
import { GetAllTasksUseCase } from '../../application/GetAllTasksUseCase';

export class GetAllTasksController {
  constructor(private getAllTasksUseCase: GetAllTasksUseCase) {}

  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.getAllTasksUseCase.execute();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
