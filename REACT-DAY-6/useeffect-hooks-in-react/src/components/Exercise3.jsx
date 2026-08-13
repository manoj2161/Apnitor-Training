import { useEffect, useState } from "react";

function Exercise3() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Count : ${count}`     
    },[count])
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>count</button>
    </>
  );
}

export default Exercise3;