export interface User {
  id: number;
  email: string;
  hashedPassword: string;
  isActive: boolean;
  isSuperuser: boolean;
  fullName: string | null;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
