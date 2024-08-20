import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import hamburger from "../assets/icons/hamburger.svg";
import logo from '../assets/images/newlogo.png';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${isScrolled ? 'bg-lightblack' : 'bg-transparent'}`}>
      <nav className='py-2 sm:py-4 px-2 sm:px-4 lg:px-16'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <a href='/'>
            <img src={logo} alt='logo' className="w-12 h-auto sm:w-16 lg:w-20" />
          </a>

          {/* Contact Info */}
          <div className='flex flex-col sm:flex-row sm:space-x-6 mt-2 sm:mt-0 text-sm sm:text-base'>
            <div className='flex flex-col sm:flex-row'>
              <div className='flex items-center mb-1 sm:mb-0'>
                <FaPhoneAlt className="text-lightgray text-sm sm:text-base mr-2" />
                <span className="text-lightgray">9962009881</span>
              </div>
              <div className='flex items-center'>
                <FaEnvelopeOpenText className="text-lightgray text-sm sm:text-base mr-2" />
                <span className="text-lightgray">info@cwcchennai.com</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <img 
              src={hamburger}
              width={30}
              height={30}
              onClick={toggleMenu}
              className="cursor-pointer"
              alt="Menu"
            />
          </div>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex space-x-4 xl:space-x-8 mt-4 md:mt-0 text-sm xl:text-base'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="flex items-center text-white hover:text-blue hover:underline">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className='absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-4 space-y-4 lg:hidden text-sm'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-slate-gray hover:text-blue flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className={`bg-lightblack h-[0.6px] ${isScrolled ? 'mr-0 ml-0 bg-lightgray' : 'mr-2 sm:mr-4 ml-2 sm:ml-4 lg:mr-16 lg:ml-16 bg-lightblack'}`}></div>
    </header>
  );
};

export default Navbar;
