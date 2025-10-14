import { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleDropdown}>
        {open ? "Hide Menu" : "Show Menu"}
      </button>
      {open && (
        <>
          <div style={styles.dropdown}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={styles.item}>
                <a href="#home" style={styles.link}>
                  Home
                </a>
              </li>
              <li style={styles.item}>
                <a href="#about" style={styles.link}>
                  About
                </a>
              </li>
              <li style={styles.item}>
                <a href="#services" style={styles.link}>
                  Services
                </a>
              </li>
              <li style={styles.item}>
                <a href="#contact" style={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
const styles = {
  dropdown: {
    marginTop: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "150px",
    margin: "10px auto",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  item: {
    padding: "8px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    display: "block",
  },
};
export default Dropdown;
