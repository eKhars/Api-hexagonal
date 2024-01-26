// tarea/application/useCases/GetAllTasksUseCase.ts
import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class GetAllTasksUseCase {
  constructor(private taskRepository: TaskRepository) {}

  execute(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }
}
