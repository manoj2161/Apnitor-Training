import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [editId, setEditId] = useState(null);
  const [editRole, setEditRole] = useState("");
  const [editName, setEditName] = useState("");

  const url = "http://localhost:3000/employees";

  async function getEmployees() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    try {
      setLoading(true);

      const response = await fetch(url, {
        signal: controller.signal,
      });

      if (!response.ok) {
        return setError("API request failed");
      }

      const employees = await response.json();

      setData(employees);
      setError("");
    } catch (error) {
      setError(
        error.name === "AbortError" ? "Request timed out" : error.message,
      );
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadInitialData() {
      // Keep loader visible for 4 seconds
      await new Promise((resolve) => {
        setTimeout(resolve, 4000);
      });

      // After 4 seconds, get the data
      await getEmployees();
    }

    loadInitialData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newEmployee = {
      name,
      role,
    };

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
      setError(error.message);
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
        body: JSON.stringify({
          name,
          role,
        }),
      });

      if (!response.ok) {
        return setError("Failed to edit the employee");
      }

      await getEmployees();

      setEditId(null);
      setEditRole("");
      setEditName("");
    } catch (error) {
      setError(error.message);
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
        body: JSON.stringify({
          role,
        }),
      });

      if (!response.ok) {
        return setError("Failed to edit the employee");
      }

      await getEmployees();

      setEditId(null);
      setEditRole("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {loading ? (
        // LOADING SCREEN
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
      ) : (
        // MAIN CONTENT
        <>
          {error && <p>{error}</p>}

          {data.length === 0 && !error && <p>No Employee found.</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
      )}
    </>
  );
}

export default App;
