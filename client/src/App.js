import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from "./Context";
import Navbar from './Navbar';
import Footer from './Footer';
import Inventory from './Inventory';
import Login from './Login';
import NewItem from './NewItem';
import NewUser from './NewUser';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/NewItem" element={<NewItem/>} />
          <Route path="/NewUser" element={<NewUser/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/ItemDetails/:id" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  )
}
export default App;
