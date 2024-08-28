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
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-lightblack' : 'bg-transparent'}`}>
      <nav className='py-4 max-sm:py-4 px-4 sm:px-4 lg:px-16'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <a href='/'>
            <img src={logo} alt='logo' className="w-20 h-auto max-sm:w-12 max-md:w-14 " />
          </a>

          {/* Contact Info */}
          <div className='hidden sm:flex flex-col sm:flex-row sm:space-x-6 text-sm sm:text-base'>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='flex items-center'>
                <FaPhoneAlt className="text-lightgray mr-2" />
                <span className="text-lightgray">9962009881</span>
              </div>
              <div className='flex items-center'>
                <FaEnvelopeOpenText className="text-lightgray mr-2" />
                <a href='mailto:info@cwcchennai.com' className="text-lightgray">info@cwcchennai.com</a>
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
          <ul className='hidden lg:flex space-x-4 xl:space-x-8 text-sm xl:text-base'>
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
          <ul className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-4 space-y-4'>
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
      <div className={`h-[1px] transition-all duration-300 ${isScrolled ? 'bg-lightgray' : 'bg-lightblack mx-4 lg:mx-16'}`}></div>
    </header>
  );
};

export default Navbar;
