import React, { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(""); // New state for submitted name
  const [email, setEmail] = useState("");
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // Update state as user types
  };

  const handleSubmit = () => {
    setSubmit(name); // Set submitted name when button is clicked
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    setClick(email); // Set submitted name when button is clicked
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type here..."
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Click
      </button>

      <p style={{ marginTop: "20px" }}>
        You typed: <strong>{submit}</strong>
      </p>

      <h2>Enter your Email</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Type here..."
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />

      <button
        onClick={handleClick}
        style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Click
      </button>

      <p style={{ marginTop: "20px" }}>
        You typed: <strong>{click}</strong>
      </p>
    </div>
  );
}

export default InputForm;
