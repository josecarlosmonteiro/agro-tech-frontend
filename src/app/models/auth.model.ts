export enum UserRole {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERADOR',
}

export interface AuthRegistrationBody {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface AuthLoginBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  userId: string;
  name: string;
  email: string;
  role: UserRole;
}
