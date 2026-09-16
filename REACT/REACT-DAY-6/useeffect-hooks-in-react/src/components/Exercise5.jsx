import { useEffect, useState,  } from "react";

function Exercise5() {
    const [width,setWidth]=useState(window.innerWidth)
    function handleResize(){
    setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[])
  return (
    <>
<h1>Size : {width}</h1>
    </>
  );
}

export default Exercise5;