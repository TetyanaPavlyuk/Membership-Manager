export interface User {
  id: number;
  email: string;
  isActive: boolean;
  isSuperuser: boolean;
  fullName: string | null;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
