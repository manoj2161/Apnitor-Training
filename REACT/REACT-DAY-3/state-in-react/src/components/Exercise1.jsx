import { useState } from "react";

function Exercise1() {
    const [visible,setVisible]=useState("show")
  return (
    <>
    {
        visible==="hide"?<input type="text" name="name" id="name" />:<input type="password" name="pass" id="pass" />
    }
      <button onClick={()=>{
        visible==="show"?setVisible("hide"):setVisible("show")
      }}>{visible}</button>
    </>
  );
}

export default Exercise1;