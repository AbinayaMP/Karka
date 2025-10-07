import { useContext } from "react";
import Context1 from "./Context1";
import { useNavigate } from "react-router-dom";

function Inputt2() {
  const { formData, setFormData } = useContext(Context1);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    navigate("/output1");
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Enter Details :</h2>
        <input
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <div style={{ padding: "20px" }}></div>
        <input
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px" }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
export default Inputt2;
