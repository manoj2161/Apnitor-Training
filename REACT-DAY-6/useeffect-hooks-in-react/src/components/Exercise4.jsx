import { useEffect, useState } from "react";

function Exercise4() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
       const intervalId = setInterval(() => {
            setCount(count+1)
        }, 1000);
        return ()=>{ clearInterval(intervalId)};
    },[count])
  return (
    <>
    <div style={{textAlign:"center", padding:"100px"}}>

    <h3>Stopwatch</h3>
      <h1>{count}</h1>
    </div>
    </>
  );
}

export default Exercise4;