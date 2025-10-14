import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <>
          <div style={styles.overlay}>
            <div style={styles.modal}>
              <h2>Modal Title</h2>
              <p>This is a simple Modal window.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
};
export default Modal;
