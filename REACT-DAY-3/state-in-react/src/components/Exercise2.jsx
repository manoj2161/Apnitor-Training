import { useState } from "react";

function Exercise2() {
  const [name,setName]=useState("")
    return (
    <>
    <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <p>{name}</p>
    </>
  );
}

export default Exercise2;