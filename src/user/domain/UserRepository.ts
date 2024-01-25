import { User } from './User';

export interface UserRepository {
  addUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
}