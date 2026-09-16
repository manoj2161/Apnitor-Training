import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Exercise6() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "name is required";
    else if (form.name.length > 20)
      newErrors.name = "name should be less than 20 characters";
    if (!form.email.trim()) newErrors.email = "email is required";
    if (form.password !== form.cpassword)
      newErrors.cpassword = "password is not matched";
    else if (form.cpassword.length < 6)
      newErrors.cpassword = "password should be atleast 6 characters";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "email is not in valid format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleChnage(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        password:"",
        cpassword:""
      }));
    }
  }
  const [visible, setVisible] = useState("Show");
  const [cvisible, setCvisible] = useState("Show");
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
          {visible === "Show" ? (
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChnage}
            />
          ) : (
            <input
              type="text"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChnage}
            />
          )}
          <button
            onClick={() => {
              visible === "Show" ? setVisible("Hide") : setVisible("Show");
            }}
          >
            {visible === "Show" ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.cpassword && <p>{errors.cpassword}</p>}
          <br />
          <label htmlFor="cpassword">Confirm Password</label>
          {cvisible === "Show" ? (
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              value={form.cpassword}
              onChange={handleChnage}
            />
          ) : (
            <input
              type="text"
              name="password"
              id="password"
              value={form.cpassword}
              onChange={handleChnage}
            />
          )}
          <button
            onClick={() => {
              cvisible === "Show" ? setCvisible("Hide") : setCvisible("Show");
            }}
          >
            {cvisible === "Show" ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.cpassword && <p>{errors.cpassword}</p>}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Exercise6;
