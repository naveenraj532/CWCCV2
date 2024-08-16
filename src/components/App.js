import '../index.css';
import  Home  from '../pages/Home.js';
import { Footer } from '../sections/Footer';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<Home />} />
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
