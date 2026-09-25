import express from "express";

const app = express();

const port = 3000;
app.get("/", (req, res) => {
  console.log(req.url);
  res.send("welcome to the home page");
});
app.listen(port, () => {
  console.log("server is running at port", port);
});
