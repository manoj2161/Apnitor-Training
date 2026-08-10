import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./form.css";
function Form() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    guestCount: "",
    mealPreference: "",
    newsLetterOptIn: false,
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});
  function validate() {
    const newErrors = {};
    if (!form.fullname.trim()) {
      newErrors.fullname = "Fullname is required";
    } else if (form.fullname.length > 50) {
      newErrors.fullname = "Name should be less than 20 characters";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "email is not in valid format";
    } else if (form.email.length > 50) {
      newErrors.fullname = "email should be less than 50 characters";
    }
    if (!form.mealPreference) {
      newErrors.mealPreference = "Please select one meal";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleForm(e) {
      e.preventDefault();
      if (validate()) {
      console.log(form);
      toast.success(`RSVP Confirmed for ${form.fullname}`);
      setForm({
        fullname: "",
        email: "",
        guestCount: "",
        mealPreference: "",
        newsLetterOptIn: false,
        specialRequest: "",
      });
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="formOuterBox">
        <div className="formBox">
          <h1 className="formHeading">RSVP FORM</h1>
          <form action="" onSubmit={handleForm}>
            <label htmlFor="fullname">FullName</label>
            <span className="astrick"> *</span>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="eg: Jhon Dee"
            />
            {errors.fullname && <p>{errors.fullname}</p>}
            <label htmlFor="email">Email</label>
            <span className="astrick"> *</span>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="eg: user@email.com"
            />{" "}
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="guestCount">Guest Count</label>
            <select name="guestCount" id="guestCount" onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label htmlFor="mealPreference">Meal Preference</label>
            <span className="astrick"> *</span>
            <div className="radioBtns">
              <input
                type="radio"
                name="mealPreference"
                id="veg"
                value="veg"
                checked={form.mealPreference === "veg"}
                onChange={handleChange}
              />
              <label htmlFor="veg">Veg</label>
              <input
                type="radio"
                name="mealPreference"
                id="nonVeg"
                value="nonVeg"
                checked={form.mealPreference === "nonVeg"}
                onChange={handleChange}
              />
              <label htmlFor="nonVeg">NonVeg</label>
              <input
                type="radio"
                name="mealPreference"
                id="vegan"
                value="vegan"
                checked={form.mealPreference === "vegan"}
                onChange={handleChange}
              />
              <label htmlFor="vegan">Vegan</label>
            </div>
            <div>{errors.mealPreference && <p>{errors.mealPreference}</p>}</div>
            <span id="newsLetterOptIn">
              <label htmlFor="newsLetterOptIn">NewsLetterOptIn</label>
              <input
                type="checkbox"
                name="newsLetterOptIn"
                value={form.newsLetterOptIn}
                checked={form.newsLetterOptIn}
                onChange={handleChange}
              />
            </span>
            <div className="textArea">
              <label htmlFor="specialRequest">Special Request</label>
              <textarea
                name="specialRequest"
                id="specialRequest"
                onChange={handleChange}
                placeholder="Enter your special request item"
              ></textarea>
            </div>
            <button className="submitBtn" type="submit">
              Submit
            </button>
            <button
              className="resetBtn"
              type="reset"
            >
              Start Over
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
