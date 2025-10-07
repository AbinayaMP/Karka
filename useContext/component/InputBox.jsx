import React, { useContext } from "react";
import InputContext from "./InputContext";

function InputBox() {
  const { inputValue, setInputValue } = useContext(InputContext); // ✅ Make sure this matches
  const { inputValue1, setInputValue1 } = useContext(InputContext);
  //   const handlechange=(e)=>{
  //     setInputValue(e.target.value)
  //   }

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} //inline using (e.target.value)
        // onChange={handlechange}
        placeholder="Type something..."
      />

      <input
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
        placeholder="Type something..."
      />
    </>
  );
}

export default InputBox;
