import express from 'express';
import {
  addTaskController,
  updateTaskController,
  getAllTasksController,
} from './dependencies';

const router = express.Router();

router.post('/add', addTaskController.addTask.bind(addTaskController));
router.put('/update/:taskId', updateTaskController.updateTask.bind(updateTaskController));
router.get('/all', getAllTasksController.getAllTasks.bind(getAllTasksController));

export default router;
