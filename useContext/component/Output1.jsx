import { useContext } from "react";
import Context1 from "./Context1";

function Output1() {
  const { formData } = useContext(Context1);
  return (
    <>
      <div style={{ padding: "20px" }}></div>
      <h2>Output Page</h2>
      <p>
        <strong>Name :{formData.name}</strong>
      </p>
      <p>
        <strong>Email :{formData.email}</strong>
      </p>
    </>
  );
}
export default Output1;
