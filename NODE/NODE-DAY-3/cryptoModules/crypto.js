import crypto from "crypto";
const id1 = crypto.randomUUID();
const id2 = crypto.randomUUID();
const id3 = crypto.randomUUID();

console.log(id1);

console.log(id2);

console.log(id3);

const id4 = crypto.randomBytes(16).toString("hex");
const id5 = crypto.randomBytes(16).toString("hex");
const id6 = crypto.randomBytes(16).toString("hex");

console.log(id4);
console.log(id5);

console.log(id6);
