import { RoleModel } from './role.model';

export interface UserModel {
  id?: string;
  username: string;
  email: string;
  role: RoleModel;
  password: string;
}
