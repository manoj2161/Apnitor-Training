// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST",
// }
// console.log(Role.Admin);

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function checkRole(role: Role) {
  console.log(role);
}

checkRole(Role.Admin);