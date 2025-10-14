import { useState } from "react";

const Task1 = () => {
  const [count, setCount] = useState(0);
  const handle_click = () => {
    setCount(count + 1);
  };
  const handle_Click = () => {
    setCount(count - 1);
  };
  const handle_ClicK = () => {
    setCount(0);
  };

  return (
    <>
      <div style={{ textAlign: "center", fontSize: "50px" }}>
        <p>{count}</p>
        <button onClick={handle_click} style={{ fontSize: "30px" }}>
          Increment
        </button>
        <button onClick={handle_Click} style={{ fontSize: "30px" }}>
          Decrement
        </button>
        <button onClick={handle_ClicK} style={{ fontSize: "30px" }}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Task1;
