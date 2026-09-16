import { userManager } from "./userManager.js";

const operation = process.argv[2];

if (!operation) {
  console.log("Please provide an operation");
  console.log("Available operations: add, list, search, update, delete");
  process.exit(1);
}

if (operation === "list") {
  await userManager("list", 0);
} else if (operation === "search") {
  const id = Number(process.argv[3]);

  if (!process.argv[3] || Number.isNaN(id)) {
    console.log("Please provide a valid id");
    process.exit(1);
  }

  await userManager("search", id);
} else if (operation === "delete") {
  const id = Number(process.argv[3]);

  if (!process.argv[3] || Number.isNaN(id)) {
    console.log("Please provide a valid id");
    process.exit(1);
  }

  await userManager("delete", id);
} else if (operation === "add") {
  const id = Number(process.argv[3]);
  const name = process.argv[4];
  const email = process.argv[5];

  if (!process.argv[3] || Number.isNaN(id) || !name || !email) {
    console.log("Please provide id, name and email");
    process.exit(1);
  }

  await userManager("add", id, name, email);
} else if (operation === "update") {
  const id = Number(process.argv[3]);
  const name = process.argv[4];
  const email = process.argv[5];

  if (!process.argv[3] || Number.isNaN(id) || !name || !email) {
    console.log("Please provide id, name and email");
    process.exit(1);
  }

  await userManager("update", id, name, email);
} else {
  console.log("Wrong operation");
  console.log("Available operations: add, list, search, update, delete");
  process.exit(1);
}
