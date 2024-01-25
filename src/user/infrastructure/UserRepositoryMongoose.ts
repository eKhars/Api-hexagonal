import { Model, Document, Schema, model } from 'mongoose';
import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserDocument>({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const UserModel: Model<UserDocument> = model('User', UserSchema);

export class UserRepositoryMongoose implements UserRepository {
  async addUser(user: User): Promise<User> {
    const newUser = await UserModel.create(user);
    return newUser.toObject();
  }

  async getAllUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((user) => user.toObject());
  }
}
