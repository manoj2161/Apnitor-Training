import { useEffect, useState } from "react";

function Exercise3() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    async function postTodo() {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: input,
          completed: false,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Created", response.status);
      }
      setTodos((prev) => {
        return [data, ...prev];
      });
      console.log(data);
      setInput("");
    }

    if (input.trim() !== "") {
      postTodo();
    }
  }
  useEffect(() => {
    async function getTodo() {
      const response = await fetch(url);
      const data = await response.json();
      setTodos(data);
      console.log("Fetched", data.length, "todos");
    }

    getTodo();
  }, []);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos
          .filter((todo) => {
            return todo.id > 200;
          })
          .map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
      </ul>
    </>
  );
}

export default Exercise3;
