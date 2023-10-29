import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({addColor}) {
  const [form, updateForm] = useState({ name: "", hex: "#ffffff" });
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    updateForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e){
    e.preventDefault();
    addColor({[form.name]: form.hex});
    history.push("/colors")
  }

  const { hex, name } = form;

  return (
    <form>
      <label htmlFor="name">Color Name</label>
      <input
        name="name"
        id="name"
        placeholder="Enter Color Name"
        onChange={handleChange}
        value={name}
      />

      <label htmlFor="hex">Color Value</label>
      <input
        type="color"
        name="hex"
        id="hex"
        onChange={handleChange}
        value={hex}
      />
      <input type="Submit" value="Add this color" readOnly />
    </form>
  );
}

export default NewColorForm;