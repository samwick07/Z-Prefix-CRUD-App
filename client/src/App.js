import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from "./Context";
import Navbar from './Navbar';
import Footer from './Footer';
import Inventory from './Inventory';
import Login from './Login';
import NewItem from './NewItem';
import UpdateItem from './UpdateItem';
import NewUser from './NewUser';
import DeleteItem from './DeleteItem';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/NewItem" element={<NewItem/>} />
          <Route path="/UpdateItem/:id" element={<UpdateItem/>} />
          <Route path="/DeleteItem/:id" element={<DeleteItem/>} />
          <Route path="/NewUser" element={<NewUser/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  )
}
export default App;
