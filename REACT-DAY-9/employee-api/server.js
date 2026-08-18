import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

let employees = [
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

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.delete("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (employee) {
    employees = employees.filter((employee) => employee.id !== id);
    res.json(employees);
  } else {
    res.status(404).send("Employee not found");
  }
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

app.patch("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (employee) {
    employee.name = req.body.name;
    employee.role = req.body.role;
    res.status(200).json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});
