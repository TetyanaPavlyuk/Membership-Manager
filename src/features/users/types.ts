export interface User {
  id: number;
  email: string;
  hashed_password: string;
  is_active: boolean;
  is_superuser: boolean;
  full_name: string | null;
}

export interface UserState {
  list: User[];
  loading: boolean;
  error: string | null;
}
