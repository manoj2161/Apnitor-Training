import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const employees = [
  { id: 1, name: "Manoj", role: "frontend" },
  { id: 2, name: "Aman", role: "PHP" },
  { id: 3, name: "Karan", role: "Content Creator" },
];
app.get("/employees", (req, res) => {
  res.json(employees);
});
app.listen(port, () => {
  console.log("server is running at port", port);
});
app.post("/employees", (req, res) => {
  const id = employees.length + 1;
  const newEmployee = {
    id: id,
    name: req.body.name,
    role: req.body.role,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});
