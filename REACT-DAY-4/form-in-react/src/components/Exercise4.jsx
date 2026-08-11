import { useState } from "react";

function Exercise4() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  function handleChnage(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    setForm((prev) => ({
      ...prev,
      name: "",
      email: "",
      phone: "",
    }));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChnage} />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChnage} />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={handleChnage}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
          <p>
            Name : {form.name} Email : {form.email} Phone : {form.phone}
          </p>
    
      </div>
    </>
  );
}

export default Exercise4;