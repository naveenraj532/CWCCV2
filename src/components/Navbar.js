import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import logo from '../assets/images/newlogo.png';
import hamburger from '../assets/icons/hamburger.svg';
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
      {/* Navbar */}
      <nav className='py-4 px-16'>
        <div className='container mx-auto flex justify-between items-center px-4'>
          {/* Logo */}
          <a href='/'>
            <img src={logo} alt='logo' className="w-20 h-auto" />
          </a>
          <div>
            <div className='flex justify-center space-x-6'>
              <div className='flex items-center'>
                <FaPhoneAlt className="text-lightgray text-sm mr-2" />
                <span className="text-lightgray text-sm">9962009881</span>
              </div>
              <div className='flex items-center'>
                <FaEnvelopeOpenText className="text-lightgray text-sm mr-2" />
                <span className="text-lightgray text-sm">info@cwcchennai.com</span>
              </div>
            </div>
          </div>
          {/* Desktop Menu */}
          <ul className='hidden lg:flex space-x-8'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="flex items-center text-white hover:text-blue hover:underline">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <img
              className='cursor-pointer'
              src={hamburger}
              alt='hamburger'
              width={25}
              height={25}
              onClick={toggleMenu}
            />
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className='absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-4 lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block text-lg text-slate-gray hover:text-blue flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      <div className={`bg-lightblack h-[0.6px] ${isScrolled ? 'mr-0 ml-0 bg-lightgray' : 'mr-16 ml-16 bg-lightblack'}`}></div>
    </header>
  );
};

export default Navbar;
