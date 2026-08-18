import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import {
  deleteEmployee,
  getEmployees,
  patchEmployee,
  postEmployee,
  putEmployee,
} from "../api";
function App() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");
  const controllerRef = useRef(null);
  async function loadEmployees() {
    controllerRef.current = new AbortController();
    try {
      const employees = await getEmployees(controllerRef.current.signal);
      setData(employees);
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }
      handleApiError(error);
    }
  }
  async function addEmployee() {
    try {
      const response = await postEmployee("Anshika", "Nurse");
      console.log(response);
      await loadEmployees();
    } catch (error) {
      handleApiError(error);
    }
  }
  async function patchedEmployee() {
    try {
      const employee = await patchEmployee(1, "backend");
      await loadEmployees();
      console.log(employee);
    } catch (error) {
      handleApiError(error);
    }
  }
  async function putedEmployee() {
    try {
      const employee = await putEmployee(1, "Akshay", "Chef");
      await loadEmployees();
      console.log(employee);
    } catch (error) {
      handleApiError(error);
    }
  }
  async function deletedEmployee(id) {
    try {
      const employee = await deleteEmployee(id);
      await loadEmployees();
      console.log(employee);
    } catch (error) {
      handleApiError(error);
    }
  }
  function cancelRequest() {
    if (controllerRef.current) {
      console.log("request cancelled");
      return controllerRef.current.abort();
    }
  }
  function handleApiError(error) {
    if (error.response?.status === 404) {
      return setErrors("Employees endpoint not found");
    } else if (error.response?.status === 500) {
      return setErrors("Server Error");
    } else {
      return setErrors(error.message);
    }
  }

  return (
    <>
      {errors && <p>{errors}</p>}
      <button onClick={loadEmployees}>Fetch employees</button>
      <br />
      {data.map((employee) => (
        <div key={employee.id}>
          <span>
            Name : {employee.name} | Role : {employee.role}
          </span>
          <button onClick={() => deletedEmployee(employee.id)}>Delete</button>
        </div>
      ))}
      <button onClick={cancelRequest}>Cancel Request</button>
      <button onClick={addEmployee}>Add Employee</button>
      <button onClick={patchedEmployee}>Change E1 role</button>
      <button onClick={putedEmployee}>Change E1 data</button>
    </>
  );
}
export default App;
