import crypto from "crypto";
const hash1 = crypto.createHash("sha256").update("hello").digest("hex");

const hash2 = crypto.createHash("sha256").update("Hello").digest("hex");
const hash3 = crypto.createHash("sha256").update("Hello").digest("hex");

console.log(hash1 === hash2);
console.log(hash1 !== hash2);

console.log(hash2 === hash3);