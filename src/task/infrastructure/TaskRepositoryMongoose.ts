import { Model, Document, Schema, model } from 'mongoose';
import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

interface TaskDocument extends Document {
    name: string;
    content: string;
}

const TaskSchema = new Schema<TaskDocument>({
  name: String,
  content: String,
});

const TaskModel: Model<TaskDocument> = model('Task', TaskSchema);

export class TaskRepositoryMongoose implements TaskRepository {
  async addTask(task: Task): Promise<Task> {
    const newTask = await TaskModel.create(task);
    return newTask.toObject();
  }

  async updateTask(taskId: string, task: Task): Promise<Task | null> {
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, task, { new: true });
    return updatedTask ? updatedTask.toObject() : null;
  }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await TaskModel.find();
    return tasks.map((task) => task.toObject());
  }
}