import { Request, Response } from 'express';
import { TaskService } from '../../application/TaskService';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async addTask(req: Request, res: Response): Promise<void> {
    try {
      const task = await this.taskService.addTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    try {
      const task = await this.taskService.updateTask(taskId, req.body);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    try {
      const task = await this.taskService.getTaskById(taskId);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;
    try {
      const result = await this.taskService.deleteTask(taskId);
      if (result) {
        res.status(200).json({ message: 'Task deleted successfully' });
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}