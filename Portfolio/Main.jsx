// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Abinaya from "./Abinaya";
// import Bio from "./Bio";
// import Projects from "./Projects";
// import Skills from "./Skills";
// import Education from "./Education";
// import Contact from "./Contact";
// import Appbar from "./Appbar";
// const Main=()=>{
//     return(
//         <>
//         <Router>
//              <Appbar />
//             <Routes >
//                 <Route path="/" element={<Abinaya />} />
//                 <Route path="/Bio" element={<Bio />}/>
//                 <Route path="/Projects" element={<Projects />}/>
//                 <Route path="/Skills" element={<Skills />}/>
//                 <Route path="/Education" element={<Education />}/>
//                 <Route path="/Contact" element={<Contact />}/>
              
//             </Routes>
//         </Router>
//         </>
//     )

// }
// export default Main;


import React from "react";
import Abinaya from "./Abinaya";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Appbar from "./Appbar";

const Main = () => {
  return (
    <>
      <Appbar />
      <div id="home"><Abinaya /></div>
      <div id="bio"><Bio /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default Main;
