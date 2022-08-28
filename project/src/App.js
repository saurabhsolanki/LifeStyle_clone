
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Car, { ControlledCarousel } from './components/Car';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import MenPage from './components/MenPage';

import Navbar from './components/Navbar';
import NavbarList from './components/NavbarList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
