import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Webmaster from './Webmaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Webmaster" element={<Webmaster/>} />
      </Routes>
    </Router>
  )
}
export default App;
