import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class AddTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  execute(task: Task): Promise<Task> {
    return this.taskRepository.addTask(task);
  }
}
