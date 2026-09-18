import express from "express";
const app = express();
app.use("/users",(req, res, next) => {
  console.log("Users Middleware");
  next();
});
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
