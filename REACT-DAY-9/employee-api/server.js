import express from "express"; // importing express to use its features
import cors from "cors";
const app = express(); // initializing the server with the name of app
app.use(cors());
const port = 3000; // assigning the api server a port , in this case it is 3000
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
]; // data of employees in array object format
app.get("/", (req, res) => {
  res.send("Employee api is running"); // send the request to the user when the path or url is https://localhost:3000/
});
app.get("/employees", (req, res) => {
  res.json(employees); //sends the request to the user when the path or url is https://localhost:3000/employees
});
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id); // if we need to send a particular data then we use :id parameter:id  , the req is given in string format we need to convert it into number first
  const employee = employees.find((employee) => employee.id === id); // then we find the desired response
  if (employee) {
    return res.json(employee); //if responce found then we send the response
  } else {
    res.status(404).send("Employee not found"); // if response failed then we send error message with status 404
  }
});
app.listen(port, () => {
  //it starts the server to its initial url like https://localhost:3000
  console.log(`server is running at port ${port}`);
});

//staus code i need to rember
// code         meaning                 simple meaning
// 200          ok                      everything worked
// 201          Created                 something was successfully created
// 400          Bad request             You sent something wrong
// 401          Unauthorized            You are not authenticated/authorized
// 404          Not found               The requested thihng does not exist
// 500          internal server error   something went wrong on the server
