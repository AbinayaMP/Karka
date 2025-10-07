// DisplayValue.js
import React, { useContext } from "react";
import InputContext from "./InputContext";

function DisplayValue() {
  const { inputValue } = useContext(InputContext);

  return (
    <p style={{ marginTop: "20px", fontSize: "18px" }}>
      You typed: <strong>{inputValue}</strong>
    </p>
  );
}

export default DisplayValue;
