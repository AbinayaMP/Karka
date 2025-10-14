import { useState } from "react";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState("home");
  const renderContent = () => {
    if (activeTab === "home") {
      return <p style={{ textAlign: "center" }}>Welcome to home Page!</p>;
    } else if (activeTab === "about") {
      return <p style={{ textAlign: "center" }}>This is About Page</p>;
    } else if (activeTab === "contact") {
      return (
        <p style={{ textAlign: "center" }}>Contact us at: support@gmail.com</p>
      );
    }
  };
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Tabbed Navigation Example</h2>
      <div className="tab-bar" style={{ textAlign: "center" }}>
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}
export default TabNavigation;
