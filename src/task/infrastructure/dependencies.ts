import { TaskRepositoryMongoose } from './TaskRepositoryMongoose';
import { AddTaskUseCase } from '../application/AddTaskUseCase';
import { UpdateTaskUseCase } from '../application/UpdateTaskUseCase';
import { GetAllTasksUseCase } from '../application/GetAllTasksUseCase';
import { AddTaskController } from './controllers/AddTaskController';
import { UpdateTaskController } from './controllers/UpdateTaskController';
import { GetAllTasksController } from './controllers/GetAllTasksController';

const taskRepository = new TaskRepositoryMongoose();
const addTaskUseCase = new AddTaskUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);

const addTaskController = new AddTaskController(addTaskUseCase);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);
const getAllTasksController = new GetAllTasksController(getAllTasksUseCase);

export {
  taskRepository,
  addTaskUseCase,
  updateTaskUseCase,
  getAllTasksUseCase,
  addTaskController,
  updateTaskController,
  getAllTasksController,
};
