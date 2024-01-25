import express from 'express';
import { UserController } from './controllers/userController';
import { UserService } from '../application/userService';
import { UserRepositoryMongoose } from './UserRepositoryMongoose';

const router = express.Router();
const userRepository = new UserRepositoryMongoose();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/add', userController.addUser.bind(userController));
router.get('/all', userController.getAllUsers.bind(userController));

export default router;