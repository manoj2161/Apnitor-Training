import { useState,useEffect } from "react";
function Exercise2() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("")

    useEffect(()=>{
console.log("count changed to : " ,count)
    },[count])
  return (
    <>
    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
<button onClick={()=>{setCount(count+1)}}>Inc</button>      
    </>
  );
}

export default Exercise2;