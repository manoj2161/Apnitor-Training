import express from "express";
const app = express();

let users = [
  {
    id: 1,
    name: "Manoj",
    age: 23,
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/users", (req, res) => {
  res.send("Users Page");
});
app.post("/users", (req, res) => {
  const data = req.body;

  res.status(201).json(data);
});

app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const existUser = users.find((user) => user.id === id);
  if (existUser) {
    const updatedUser = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...data,
          id: id,
        };
      } else {
        return user;
      }
    });
    res.status(200).json(updatedUser);
  } else {
    res.status(404).send("User does not exists");
  }
});
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const existUser = users.find((user) => user.id === id);
  if (existUser) {
    users = users.filter((user) => user.id !== id);
    res.status(200).json(users);
  } else {
    res.status(404).send("user not found");
  }
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User id : ${id}`);
});
app.get("/products", (req, res) => {
  const category = req.query.category;
  res.send(`Category is ${category}`);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
