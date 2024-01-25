import express from 'express';
import { TaskController } from './controllers/TaskController';
import { TaskService } from '../application/TaskService';
import { TaskRepositoryMongoose } from './TaskRepositoryMongoose';

const router = express.Router();
const taskRepository = new TaskRepositoryMongoose();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post('/add', taskController.addTask.bind(taskController));
router.put('/update/:taskId', taskController.updateTask.bind(taskController));
router.get('/get/:taskId', taskController.getTaskById.bind(taskController));
router.get('/all', taskController.getAllTasks.bind(taskController));
router.delete('/delete/:taskId', taskController.deleteTask.bind(taskController));

export default router;