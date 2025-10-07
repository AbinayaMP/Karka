
// // App.js
// import React, { useState } from 'react';
// import ThemeContext from "./component/ThemeContext";
// import Child from "./component/Child";

// function App() {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Child />
//     </ThemeContext.Provider>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import InputContext from './component/InputContext';
// import InputBox from './component/InputBox';
// import DisplayValue from './component/DisplayValue';
// import DisplayValue1 from './component/DisplayValue1'

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const[inputValue1,setInputValue1]=useState('');
  

//   return (
//     <>
//     <InputContext.Provider value={{ inputValue, setInputValue,inputValue1,setInputValue1 }}> 
//       <InputBox /> 
//       <DisplayValue />
   
//       <DisplayValue1 />
// </InputContext.Provider>
    
//     </>
//   );
// }

// export default App;



// App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FormContext from './component/Context';
// import Inputt from './component/Inputt';
// import Output from './component/Output';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   return (
//     <FormContext.Provider value={{ formData, setFormData }}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Inputt />} />
//           <Route path="/output" element={<Output />} />
//         </Routes>
//       </Router>
//     </FormContext.Provider>
//   );
// }

// export default App;

import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Context1 from "./component/Context1";
import Inputt2 from "./component/Inputt2";
import Output1 from "./component/Output1";

function App(){
  const[formData,setFormData]=useState({
    name:"",
    email:"",
  });
  return(
    <>
    <Context1.Provider value={{formData,setFormData}}>
 
    <Router>
      <Routes>
        <Route path="/" element={<Inputt2 />}/>
        <Route path="/output1" element={<Output1/>}/>
      </Routes>
    </Router>
    </Context1.Provider>
  
    </>
  )
}
export default App;