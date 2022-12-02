
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home'
import CryptoTracker from './components/Pages/CryptoTracker';
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path = '/' element={<Home/>}/>
      <Route  path = '/CryptoTracker' element={<CryptoTracker/>}/>
      <Route  path = '/Products' element={<Products/>}/>
      <Route exact  path = '/SignUp' element={<SignUp/>}/>
    </Routes>
    <Footer />
    </Router>
    </> 
  );
}

export default App;
