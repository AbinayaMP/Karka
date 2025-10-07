import React, { useState } from "react";

function InputForm2() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddItem = () => {
    setItems((prevItems) => [...prevItems, input]);
    setInput("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Items</h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type and click Add"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />

      <button
        onClick={handleAddItem}
        style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Add
      </button>

      {items.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Items List:</h3>
          <table style={{ marginLeft: "45%" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                    Sl.No
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                      {" "}
                      {index + 1}.
                    </td>
                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                      {" "}
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </ul>
          </table>
        </div>
      )}
    </div>
  );
}

export default InputForm2;
