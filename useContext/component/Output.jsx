// Output.jsx
import React, { useContext } from 'react';
import FormContext from './Context';

function Output() {
  const { formData } = useContext(FormContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Output Page</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
    </div>
  );  
};

export default Output;