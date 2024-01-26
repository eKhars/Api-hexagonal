import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}