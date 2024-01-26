import { Task } from "./Task";

export interface TaskRepository {
    addTask(task: Task): Promise<Task>;
    updateTask(taskId: string, task: Task): Promise<Task | null>;
    getAllTasks(): Promise<Task[]>;
  }