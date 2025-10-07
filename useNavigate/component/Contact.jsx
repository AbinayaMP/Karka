import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={goToHome}>Go to Home Page</button>
    </>
  );
}
export default Contact;
