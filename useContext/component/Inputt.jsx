// Input.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContext from './Context';

function Inputt() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Navigate to Output page
    navigate('/output');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Details</h2>
      <input
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Inputt;