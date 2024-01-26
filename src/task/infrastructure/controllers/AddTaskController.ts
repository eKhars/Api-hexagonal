import { Request, Response } from 'express';
import { Task } from '../../domain/Task';
import { AddTaskUseCase } from '../../application/AddTaskUseCase';

export class AddTaskController {
  constructor(private addTaskUseCase: AddTaskUseCase) {}

  async addTask(req: Request, res: Response): Promise<void> {
    try {
      const taskData: Task = req.body;
      const task = await this.addTaskUseCase.execute(taskData);
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
