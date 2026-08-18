import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const url = "http://localhost:3000/employees";
  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return setError("API request failed");
        }
        const employees = await response.json();
        setData(employees);
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
    getEmployees();
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const newEmployee = { name, role };
    async function addEmployee() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEmployee),
        });
        if (!response.ok) {
          return setError("Failed to send data");
        }
        const addedEmployee = await response.json();
        setData([...data, addedEmployee]);
        setName("");
        setRole("");
        setError("")
      } catch (error) {
        setError(error.message);
      }
    }
    addEmployee();
  }
  return (
    <>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id=""
        />{" "}
        <input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          id=""
        />
        <button type="submit">Add Employee</button>
      </form>
      <div>
        {data.map((employee) => (
          <p key={employee.id}>{employee.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
