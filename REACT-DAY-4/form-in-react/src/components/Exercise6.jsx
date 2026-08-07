import { useState } from "react";

function Exercise6() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password : "",
    cpassword:""
  });
  const [errors, setErrors] = useState({});
  function validate(){
    const newErrors ={}
    if (!form.name.trim()) newErrors.name = "name is required" 
    if (!form.email.trim()) newErrors.email = "email is required"   
    if(form.password!==form.cpassword) newErrors.cpassword = "password is not matched"
    else if(form.cpassword.length<6) newErrors.cpassword = "password should be atleast 6 characters"
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "email is not in valid format"
    console.log("length", form.cpassword.length)
    setErrors(newErrors) 
    return Object.keys(newErrors).length===0
 }
  function handleChnage(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if(errors[name]){
        setErrors((prev)=>({...prev,[name]:""}))
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(validate()){
        console.log(form);
        setForm((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
        }));
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            id="name"
            onChange={handleChnage}
          />
          {errors.name && <p>{errors.name}</p>}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={form.email}
            name="email"
            id="email"
            onChange={handleChnage}
          />
          {errors.email && <p>{errors.email}</p>}
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            value={form.phone}
            name="phone"
            id="phone"
            onChange={handleChnage}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChnage}
          />
          <br />
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={form.cpassword}
            onChange={handleChnage}
          />{" "}
          {errors.cpassword && <p>{errors.cpassword}</p>}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Exercise6;
