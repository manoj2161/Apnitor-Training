import express from "express";
const app = express();
const logger = (req, res, next) => {
  console.log("Logger middleware executed");
  next();
};
const checkAccess = (req, res, next) => {
  setTimeout(() => {
    console.log("Access Granted");
    next();
  }, 3000);
};
app.use(logger);
app.use(checkAccess);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/login", (req, res) => {
  res.send("Login page");
});
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
