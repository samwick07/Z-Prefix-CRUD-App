import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar2 from './Navbar2';
import Inventory from './Inventory';
import Login from './Login';

function App() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  )
}
export default App;
