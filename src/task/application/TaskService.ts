import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  addTask(task: Task): Promise<Task> {
    return this.taskRepository.addTask(task);
  }

  updateTask(taskId: string, task: Task): Promise<Task | null> {
    return this.taskRepository.updateTask(taskId, task);
  }

  getTaskById(taskId: string): Promise<Task | null> {
    return this.taskRepository.getTaskById(taskId);
  }

  getAllTasks(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }

  deleteTask(taskId: string): Promise<boolean> {
    return this.taskRepository.deleteTask(taskId);
  }
}
