import { useEffect, useState } from "react";

function Exercise3() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState(null);
  const [input, setInput] = useState("");
  function handleInput(e){
    setInput(e.target.value)
    setTodos(input)
  }
  useEffect(() => {
    async function getTodos() {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: 201,
          id: 201,
          title: input,
          completed: false,
        }),
      });
      const data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, [input]);
  return (
    <>
      <input
        type="text"
        placeholder="enter todo"
        value={input}
        onChange={handleInput}
      />
      <ul>{todos && <li>Title: {todos.title}</li>}</ul>
    </>
  );
}

export default Exercise3;
