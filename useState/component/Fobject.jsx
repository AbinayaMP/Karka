import React, { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmittedData(formData); // Store form data on submit
    setFormData({ name: "", email: "", age: "" }); // Clear inputs (optional)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Information</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        style={{ padding: "8px", fontSize: "16px", margin: "10px" }}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        style={{ padding: "8px", fontSize: "16px", margin: "10px" }}
      />

      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        style={{ padding: "8px", fontSize: "16px", margin: "10px" }}
      />

      <div>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </div>

      {submittedData && (
        <div style={{ marginTop: "30px" }}>
          <h3>Submitted Data</h3>
          <table
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "50%",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                  Field
                </th>
                <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(submittedData).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    {key}
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InputForm;
