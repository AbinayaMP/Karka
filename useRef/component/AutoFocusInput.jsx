 import { useEffect, useRef } from "react";


function AutoFocusInput() {
  const inputRef = useRef(null);     //const variablename=useRef()

  useEffect(() => {
    inputRef.current.focus(); //variable name,current.focus()=>function
  }, []);

  return (
    <div>
       <h2>Auto-Focus Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="This input will auto-focus"
      />
    </div>
  );
}

export default AutoFocusInput;

