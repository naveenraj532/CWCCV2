import '../index.css';
import AboutUs from '../V2/AboutUs.js';
import  Home  from '../pages/Home.js';
import { Footer } from '../V2/Footer.js';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/our-services' element={<Home />} />
              <Route path='/contact-us' element={<Home />} />
          </Routes>
          <section className="xl:padding-0 wide:padding-r">
             <Footer />
          </section>
    </BrowserRouter>

  );
}

export default App;
