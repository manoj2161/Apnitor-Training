import express from "express";
const app = express();
const makeError = (req, res, next) => {
  next(new Error("Something went wrong"));
};
const errorHandle = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Something went wrong");
};
app.get("/", makeError, (req, res) => {
  res.send("Home Page");
});
app.use(errorHandle);
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
