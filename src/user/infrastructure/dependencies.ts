import { UserRepositoryMongoose } from './UserRepositoryMongoose';
import { AddUserUseCase } from '../application/AddUserUseCase';
import { GetAllUsersUseCase } from '../application/getAllUsersUseCase';
import { AddUserController } from './controllers/AddUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';

const userRepository = new UserRepositoryMongoose();
const addUserUseCase = new AddUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);

const addUserController = new AddUserController(addUserUseCase);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export { addUserController, getAllUsersController };