import { useState } from "react";

function Exercise4() {
  const [todos,setTodos]=useState([]);
  const [text,setText]=useState("");
  const [status,setStatus]=useState(false);
  function handleTodo(){
    if(text.trim()==="")return
    setTodos((prev)=>[...prev,{id:crypto.randomUUID(),text}])
    setText("")
  }
  function handleRemove(idToRemove){
    setTodos((prev)=>prev.filter((todo)=>todo.id!=idToRemove))
  }
  function handleStatus(){
    setStatus(status)
  }
  return (
    <>
      <h1>Todo</h1>
      <input type="text" value={text} onChange={(e)=>{
        setText(e.target.value)
      }} id="" />
      <button onClick={handleTodo}>+ Add</button>
      <ol>
        {
          todos.map((todo)=>(
            <li key={todo.id}><
              span>{todo.text}</span>
              <span>
                <input type="checkbox" value={status} onChange={(e)=>setStatus(e.target.checked)} onClick={handleStatus}/>|
                </span>
                <span>Status : {status?<p>Done</p>:<p>Not Completed Yet</p>}</span> 
                <button onClick={()=>handleRemove(todo.id)}>x Remove</button></li>
          ))
        }
      </ol>
    </>
  );
}

export default Exercise4;
