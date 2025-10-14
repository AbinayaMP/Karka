import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data
    console.log({ name, email, message });

    // Show success message
    setSuccess(true);

    // Optionally, reset the form
    setName("");
    setEmail("");
    setMessage("");
    
    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div >
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
           
          />
        </div>
        <div >
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
        </div>
        <div >
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>

      {success && <p>Message sent successfully!</p>}
    </div>
  );
}

export default ContactForm;