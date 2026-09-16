import { useState } from "react";

function Exercise7() {
  const existingUser = { username: "rahul_dev", email: "rahul@mail.com" };
  const [form, setForm] = useState(existingUser);
  function handleForm(e) {
    e.preventDefault();
    console.log(form);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      {" "}
      <form action="">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="name"
          value={form.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleForm}>
          Submit
        </button>
        <button onClick={handleForm}>Update Profile</button>
        <p>Username : {form.username}</p>
        <p>Email : {form.email}</p>
      </form>
    </>
  );
}

export default Exercise7;
