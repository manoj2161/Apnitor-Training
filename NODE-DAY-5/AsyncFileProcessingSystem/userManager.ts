import fs from "fs/promises";

type User = {
  id: number;
  name: string;
  email: string;
};

export async function userManager(
  operation: string,
  id: number,
  name: string = "",
  email: string = "",
): Promise<void> {
  try {
    const data: string = await fs.readFile("users.json", "utf-8");
    const users: User[] = JSON.parse(data);

    if (operation === "add") {
      const existingUser = users.find((user) => user.id === id);

      if (existingUser !== undefined) {
        console.log("User already exists");
      } else {
        const newUser: User = {
          id,
          name,
          email,
        };

        const updatedUsers: User[] = [...users, newUser];

        await fs.writeFile("users.json", JSON.stringify(updatedUsers, null, 2));

        console.log("User added successfully");
      }
    } else if (operation === "list") {
      if (users.length > 0) {
        console.log(users);
      } else {
        console.log("No user found...");
      }
    } else if (operation === "search") {
      const existingUser = users.find((user) => user.id === id);

      if (existingUser !== undefined) {
        console.log(existingUser);
      } else {
        console.log("No user found...");
      }
    } else if (operation === "update") {
      const existingUser = users.find((user) => user.id === id);

      if (existingUser !== undefined) {
        const updatedUser: User = {
          id,
          name,
          email,
        };

        const updatedUsers: User[] = users.map((user) => {
          if (user.id === id) {
            return updatedUser;
          }

          return user;
        });

        await fs.writeFile("users.json", JSON.stringify(updatedUsers, null, 2));

        console.log("User updated successfully");
      } else {
        console.log("User not found");
      }
    } else if (operation === "delete") {
      const existingUser = users.find((user) => user.id === id);

      if (existingUser !== undefined) {
        const updatedUsers: User[] = users.filter((user) => user.id !== id);

        await fs.writeFile("users.json", JSON.stringify(updatedUsers, null, 2));

        console.log("User deleted successfully");
      } else {
        console.log("User not found");
      }
    } else {
      console.log("Wrong operation");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
