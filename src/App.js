import './App.css';
import Home from './components/Home';
import Lung from './components/Lung';
import Breast from './components/Breast';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
import DarkNavbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
    <DarkNavbar/>
    <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/lung" element={<Lung/>} />
            <Route exact path="/breast" element={<Breast/>} />
          </Routes>
    </Router>
    </>
  )
}

export default App;
