import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <h1>About Page</h1>
      <button onClick={goToContact}>Go to Contact Page</button>
    </>
  );
}
export default About;
