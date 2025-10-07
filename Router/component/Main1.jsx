import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home1 from "./Home1";
import About1 from "./About1";
import Contact1 from "./Contact1";
import Appbar from "./Appbar";
// import AppBar from "@mui/material/AppBar";
const Main1=()=>{
    return(
        <>
        <Router>
              <Appbar />
            <Routes>
                <Route path="/" element={<Home1 />}/>
                <Route path="About" element={<About1 />}/>
                <Route path="Contact" element={<Contact1 />}/>
            </Routes>
        </Router>
        </>
    )
}
export default Main1;