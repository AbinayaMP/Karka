import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;