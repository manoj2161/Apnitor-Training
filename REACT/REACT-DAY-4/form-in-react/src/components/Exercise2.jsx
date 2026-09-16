import { useState } from "react";

function Exercise2() {
const [form,setForm]=useState({textarea:"",select:"1",checkbox:false})
function handleChnage(e){
   const { name, value } = e.target;
   setForm((prev) => ({ ...prev, [name]: value }));
}
  function handleSubmit(e){
    e.preventDefault();
    console.log(form);
    setForm((prev)=>({...prev,textarea:"",select:"1",checkbox:false}))
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="textarea">Comment</label>
          <textarea
            value={form.textarea}
            name="textarea"
            onChange={handleChnage}
          ></textarea>
          <br />
          <label htmlFor="rating">Rating</label>
          <select value={form.select} name="select" onChange={handleChnage}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="checkbox">Callback</label>
          <input
            type="checkbox"
            name="checkbox"
            checked={form.checkbox}
            onChange={handleChnage}
          />
<br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Exercise2;