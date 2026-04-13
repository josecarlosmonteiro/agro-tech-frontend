export enum UserRole {
  ADMIN = 'ADMIN',
}

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: string;
}
