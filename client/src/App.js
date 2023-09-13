import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Inventory from './Inventory';
import Login from './Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
