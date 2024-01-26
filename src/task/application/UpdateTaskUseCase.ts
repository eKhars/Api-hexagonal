import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  execute(taskId: string, task: Task): Promise<Task | null> {
    return this.taskRepository.updateTask(taskId, task);
  }
}