import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/employees";
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);
  return (
    <>
      {data.map((employee) => (
        <div key={employee.id}>
          <p>{employee.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
