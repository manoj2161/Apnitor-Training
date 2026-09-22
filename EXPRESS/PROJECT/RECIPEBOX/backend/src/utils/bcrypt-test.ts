import bcrypt from "bcrypt";
const password = "Manu@2621";
const hash = await bcrypt.hash(password, 10);
console.log(hash);
const isMatch = await bcrypt.compare(password, hash);
console.log(isMatch);
