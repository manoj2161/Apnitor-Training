import http from "node:http";

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

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/employees") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(employees));
  } else if (req.method === "GET" && req.url?.startsWith("/employees?role=")) {
    const url = new URL(req.url, "http://localhost:3000");
    const role = url.searchParams.get("role");
    const filteredEmployees = employees.filter(
      (employee) => employee.role === role,
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(filteredEmployees));
  } else if (req.method === "GET" && req.url?.startsWith("/employees/")) {
    const parts = req.url.split("/");
    const id = Number(parts[parts.length - 1]);
    const existemployee = employees.find((employee) => employee.id === id);
    if (existemployee) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(existemployee));
    } else {
      res.statusCode = 404;
      res.end("Employee not found");
    }
  } else if (req.method === "POST" && req.url === "/employees") {
    let highestId = 0;
    for (const employee of employees) {
      if (employee.id > highestId) {
        highestId = employee.id;
      }
    }
    const nextId = highestId + 1;
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const bodyData = JSON.parse(body);
      const newEmployee = {
        id: nextId,
        ...bodyData,
      };
      employees.push(newEmployee);
      res.statusCode = 201;
      res.end("Employee added successfully");
    });
  } else if (req.method === "PUT" && req.url?.startsWith("/employees/")) {
    const parts = req.url.split("/");
    const id = Number(parts[parts.length - 1]);
    const existemployee = employees.find((employee) => employee.id === id);
    if (existemployee) {
      res.setHeader("Content-Type", "application/json");
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const bodyData = JSON.parse(body);
        employees = employees.map((employee) => {
          if (employee.id === id) {
            return {
              ...bodyData,
              id: employee.id,
            };
          }
          return employee;
        });
        res.statusCode = 200;
        res.end(JSON.stringify(employees));
      });
    } else {
      res.statusCode = 404;
      res.end("Employee not found");
    }
  } else if (req.method === "DELETE" && req.url?.startsWith("/employees/")) {
    const parts = req.url.split("/");
    const id = Number(parts[parts.length - 1]);
    const existemployee = employees.find((user) => user.id === id);
    if (existemployee) {
      employees = employees.filter((employee) => employee.id !== id);
      res.statusCode = 200;
      res.end(JSON.stringify(employees));
    } else {
      res.statusCode = 404;
      res.end("Employee not found");
    }
  } else {
    res.statusCode = 404;
    res.end("Failed to send data");
  }
});

server.listen(3000, () => {
  console.log("server is running at port 3000");
});
