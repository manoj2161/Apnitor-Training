import express from "express";
const app = express();
const port = 3000;
const employees = [
  {
    id: 1,
    name: "Manoj",
    role: "Developer",
  },
  {
    id: 2,
    name: "Rahul",
    role: "Designer",
  },
  {
    id: 3,
    name: "Priya",
    role: "Tester",
  },
];
app.get("/", (req, res) => {
  res.send("Employee api is running");
});
app.get("/employees", (req, res) => {
  res.json(employees);
});
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (employee) {
    return res.json(employee);
  } else {
   res.status(404).send("Employee not found");
  }
});
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
