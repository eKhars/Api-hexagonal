import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class AddUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(user: User): Promise<User> {
    return this.userRepository.addUser(user);
  }
}
