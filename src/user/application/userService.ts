import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  addUser(user: User): Promise<User> {
    return this.userRepository.addUser(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}