import { useRef } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");
  const controllerRef = useRef(null);
  const url = import.meta.env.VITE_API_URL
  async function getEmployees() {
    controllerRef.current = new AbortController();
    try {
      const response = await fetch(url, {
        signal: controllerRef.current.signal,
      });
      if (!response.ok) {
        return setErrors("Failed to fetch the data");
      }
      const employees = await response.json();
      setData(employees);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      } else {
        return setErrors(error.message);
      }
    }
  }
  function cancelRequest() {
    if (controllerRef.current) {
      console.log("request cancelled");
      return controllerRef.current.abort();
    }
  }
  return (
    <>
      {errors && <p>{errors}</p>}
      <button onClick={getEmployees}>Fetch employees</button>
      <br />
      {data.map((employee) => (
        <div key={employee.id}>
          <span>
            Name : {employee.name} | Role : {employee.role}
          </span>
        </div>
      ))}
      <button onClick={cancelRequest}>Cancel Request</button>
    </>
  );
}
export default App;
