import express from 'express';
import { addUserController, getAllUsersController } from './dependencies';

const router = express.Router();

router.post('/add', addUserController.addUser.bind(addUserController));
router.get('/all', getAllUsersController.getAllUsers.bind(getAllUsersController));

export default router;