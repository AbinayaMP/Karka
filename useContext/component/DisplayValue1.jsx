import React, { useContext } from "react";
import InputContext from "./InputContext";

function DisplayValue() {
  const { inputValue1 } = useContext(InputContext);

  return (
    <>
      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          marginLeft: "170px",
          marginTop: "-40px",
        }}
      >
        You typed: <strong>{inputValue1}</strong>
      </p>
    </>
  );
}

export default DisplayValue;
