import { useState } from "react";

function InputForm1() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    setName1(Name);
    setEmail1(email);

  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Enter Your Name</h2>
        <input
          type="text"
          value={Name}
          onChange={handleChange}
          placeholder="Type here..."
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
        />

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
          Your Name: <strong>{name1}</strong>
          <br></br>
          Your Email: <strong>{email1}</strong>
        </p>
      </div>
    </>
  );
}

export default InputForm1;
