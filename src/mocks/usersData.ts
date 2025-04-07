import { User } from "../features";

export const usersData: User[] = [
  {
    id: 1,
    email: "test1@mail.com",
    isActive: true,
    isSuperuser: false,
    fullName: "Some Name",
  },
  {
    id: 2,
    email: "test2@mail.com",
    isActive: true,
    isSuperuser: false,
    fullName: null,
  },
];
