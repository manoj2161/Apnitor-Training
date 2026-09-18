import express from "express";
const app = express();
app.use(express.json());
let employees = [
  {
    id: 1,
    name: "Manoj",
    age: 23,
    email: "manu@gmail.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Karan",
    age: 24,
    email: "karan@gmail.com",
    role: "Developer",
    status: "Active",
  },
  {
    id: 3,
    name: "Aman",
    age: 22,
    email: "aman@gmail.com",
    role: "Designer",
    status: "Inactive",
  },
];

app.get("/employees", (req, res) => {
  const role = req.query.role;
  if (role) {
    const exitsEmployees = [...employees].filter(
      (employee) => employee.role === role,
    );
    res.status(200).json(exitsEmployees);
  } else {
    res.status(200).json(employees);
  }
});
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const existsEmployee = employees.find((employee) => employee.id === id);
  if (existsEmployee) {
    res.status(200).json(existsEmployee);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.post("/employees", (req, res) => {
  const data = req.body;
  let highestId = 0;
  for (const employee of employees) {
    if (employee.id > highestId) {
      highestId = employee.id;
    }
  }
  const nextId = highestId + 1;
  const newEmployee = {
    ...data,
    id: nextId,
  };
  employees.push(newEmployee);
  res.status(201).send(newEmployee);
});
app.patch("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const exitsEmployee = employees.find((employee) => employee.id === id);
  if (exitsEmployee) {
    const updatedEmployee = {
      ...exitsEmployee,
      ...data,
      id: id,
    };
    employees = employees.map((employee) => {
      if (employee.id === id) {
        return updatedEmployee;
      } else {
        return employee;
      }
    });
    res.status(200).send(updatedEmployee);
  } else {
    res.status(404).send("Employee not found");
  }
});
app.delete("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const existsEmployee = employees.find((employee) => employee.id === id);
  if (existsEmployee) {
    employees = employees.filter((employee) => employee.id !== id);
    res.status(200).send(employees);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
