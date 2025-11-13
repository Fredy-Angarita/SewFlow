import { UserModel } from 'domain/models/user.model';

export interface IUserPersistencePort {
  saveUser(user: UserModel): Promise<UserModel>;
  getUserByEmail(email: string): Promise<UserModel | null>;
  getUserByUsername(username: string): Promise<UserModel | null>;
  getUserById(id: string): Promise<UserModel | null>;
  updateUser(user: Partial<UserModel>): Promise<UserModel>;
}
