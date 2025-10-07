import React, { useState, useRef } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");  
  const passwordRef = useRef("");                

  const handleSubmit = () => {
    console.log("Password:", passwordRef.current.value); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "8px", margin: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        ref={passwordRef}
        style={{ padding: "8px", margin: "10px" }}
      />

      <div>
        <button
          onClick={handleSubmit}
          style={{ padding: "8px 16px", marginTop: "15px", cursor: "pointer" }}
        >
          Submit
        </button>
      </div>

      {username && (
        <p style={{ marginTop: "20px" }}>
          Welcome, <strong>{username}</strong> 👋
        </p>
      )}
    </div>
  );
}

export default LoginForm;