import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.fullName.trim()) {
      return;
    }
    if (!formData.email.trim()) {
      return;
    }
    if (!formData.password.trim()) {
      return;
    }
    const user = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    try {
      if (user) {
        await axios.post("http://localhost:3000/users", user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
