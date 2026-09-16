import { EventEmitter } from "events";

const emiter = new EventEmitter();

emiter.on("login", () => {
  console.log("User logged In...");
});

emiter.on("userRegistered", () => {
  console.log("User register sucessfuly...");
});

emiter.on("logout", () => {
  console.log("User logout...");
});

emiter.emit("login");
emiter.emit("userRegistered");
emiter.emit("logout");
