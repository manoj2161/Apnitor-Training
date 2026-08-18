import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editRole, setEditRole] = useState("");
  const [editName, setEditName] = useState("");
  const url = "http://localhost:3000/employees";
  async function getEmployees() {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        return setError("API request failed");
      }
      const employees = await response.json();
      setData(employees);
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
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
        await getEmployees();
        setName("");
        setRole("");
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
    addEmployee();
  }
  async function deleteEmployee(id) {
    const deleteUrl = `${url}/${id}`;
    try {
      setLoading(true);
      const response = await fetch(deleteUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        return setError("Cannot able to delete the employee");
      }
      await getEmployees();
    } catch (error) {
      return setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function putEmployee(id, name, role) {
    const editUrl = `${url}/${id}`;
    try {
      const response = await fetch(editUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, role }),
      });
      if (!response.ok) {
        return setError("Failed to edit the employee");
      }
      await getEmployees();
      setEditId(null);
      setEditRole("");
      setEditName("");
    } catch (error) {
      return setError(error.message);
    }
  }
  async function patchEmployee(id, role) {
    const editUrl = `${url}/${id}`;
    try {
      const response = await fetch(editUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      });
      if (!response.ok) {
        return setError("Failed to edit the employee");
      }
      await getEmployees();
      setEditId(null);
      setEditRole("");
    } catch (error) {
      return setError(error.message);
    }
  }

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data.length === 0 && !loading && !error && <p>No Employee found.</p>}
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
          <div key={employee.id}>
            <span>
              Name : {employee.name} | Role : {employee.role}
            </span>
            <br />
            <button
              onClick={() => {
                deleteEmployee(employee.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setEditId(employee.id);
                setEditRole(employee.role);
              }}
            >
              Edit Role
            </button>
            <button
              onClick={() => {
                setEditId(employee.id);
                setEditRole(employee.role);
                setEditName(employee.name);
              }}
            >
              Edit Name + Role
            </button>
            {editId === employee.id && (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                />
                <button
                  onClick={() => {
                    patchEmployee(employee.id, editRole);
                  }}
                >
                  Save Role
                </button>
                <button
                  onClick={() => {
                    putEmployee(employee.id, editName, editRole);
                  }}
                >
                  Save Role + Name
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
