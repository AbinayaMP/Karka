import React, { useEffect, useState } from "react";

const Method2 = () => {
//   const [num1, setNum1] = useState(500);
//   const [num2, setNum2] = useState(1000);
//   useEffect(() => {
//     setNum1(600);
//     console.log("useEffect");
//     setNum2(1100);
//     console.log("useEffect");
//   }, []);
//   console.log(num1);
//   console.log(num2);
//   return (
//     <>
//       <div>
//         <li>{num1}</li>
//         <button onClick={() => setNum1((curr) => curr + 1)}>click</button>
//         {/* curr=current value */}

//         <li>{num2}</li>
//         <button onClick={() => setNum2((curr) => curr + 1)}>click</button>
//       </div>
//     </>
//   );



const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    setNum1(200);
    console.log("from useEffect");
    
  }, [num1, num2]);
  console.log(num1,num2)

  return (
    <div>
      <li>{num1}</li>
      <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>

      <li>{num2}</li>
      <button onClick={() => setNum2((curr) => curr + 1)}>Add</button>
    </div>
  );
};

export default Method2;
