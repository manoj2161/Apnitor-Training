import type { User } from "../models/user.model.js";
import { generateId } from "../utils/generateId.js";
let users: User[] = [
  {
    id: 1,
    name: "Manu",
  },
  {
    id: 2,
    name: "Karan",
  },
];
export const getAllUsers = () => {
  return users;
};
export const createNewUser = (data: Omit<User, "id">) => {
  const newUser: User = {
    id: generateId(users),
    ...data,
  };

  users.push(newUser);

  return users;
};
export const deleteUserById = (id: number) => {
  const existUser = users.find((user) => user.id === id);
  if (existUser) {
    users = users.filter((user) => user.id !== id);
    return users;
  } else {
    return null;
  }
};
