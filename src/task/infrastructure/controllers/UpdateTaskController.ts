import { Request, Response } from 'express';
import { UpdateTaskUseCase } from '../../application/UpdateTaskUseCase';

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    try {
      const updatedTask = await this.updateTaskUseCase.execute(taskId, req.body);
      if (updatedTask) {
        res.status(200).json(updatedTask);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
