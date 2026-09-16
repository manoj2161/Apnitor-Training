import { useState } from "react";

function Exercise7() {
  const [user, setUser] = useState({ name: "", email: "", age: 25 });
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  function handleObject(){
    if(!name.trim() || !email.trim()) return
    setUser((prev)=>({...prev,name,email}))
  }
  return (
    <>
    <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e)=>{
        setName(e.target.value)
      }} /> <br /><br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }}/> <br /><br />
<button onClick={handleObject}>Add Detail</button>
<p>Name : {user.name}, Email : {user.email}, Age : {user.age}</p>
    </>
  );
}

export default Exercise7;