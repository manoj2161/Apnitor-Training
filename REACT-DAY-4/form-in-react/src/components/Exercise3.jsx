import { useState } from "react";

function Exercise3() {
    const [contact,setContact]=useState("")
  return (
    <>
      <div>
        <label htmlFor="contact">Contact</label>
        <input type="radio" name="contact" value="whatsapp" checked={contact==="whatsapp"} onChange={(e)=>setContact(e.target.value)}/>Whatsapp
        <input type="radio" name="contact" value="email" checked={contact==="email"} onChange={(e)=>setContact(e.target.value)}/>Email
        <input type="radio" name="contact" value="phone" checked={contact==="phone"} onChange={(e)=>setContact(e.target.value)}/>Phone
      </div>
      <div>{contact}</div>
    </>
  );
}

export default Exercise3;