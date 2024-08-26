import { FaGoogle, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../assets/images/newlogo.png";

export const Footer = () => {
  return (
    <div className="bg-lightblack text-white p-8">
      <div className={`bg-gray-700 h-[0.6px] mb-10`}></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-64 items-center md:items-start justify-center text-center md:text-left">

          <div className="mb-8 md:mb-0">
            <img src={logo} alt="CWC Logo" className="mx-auto md:mx-0 mb-6" width={100} />
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p><FaPhone className="inline mr-2" /> Phone : 9962009881</p>
            <p><FaClock className="inline mr-2" /> Opening Hours : 10:00 AM - 06:00 PM</p>
            <p><FaEnvelope className="inline mr-2" /> Email : <a href="mailto:info@cwcchennai.com" className="text-lightgray hover:text-white">info@cwcchennai.com</a></p>

            <button
              className="mt-4 px-4 py-2 bg-transparent border-2 border-blue text-white rounded hover:bg-blue transition duration-300"
              onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Quote
            </button>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 text-lg hover:text-white">Home</a></li>
              <li><a href="#about-us" className="text-gray-400 text-lg hover:text-white">About Us</a></li>
              <li>
                <a href="#services" className="text-gray-400 text-lg hover:text-white">Services</a>
                <ul className="ml-4 space-y-2">
                  <li><a href="#services" className="text-gray-400 hover:text-white">Warehousing</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">Storage</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">3 PL SERVICES</a></li>
                </ul>
              </li>
              <li><a href="#clients" className="text-gray-400 text-lg hover:text-white">Our Clients</a></li>
              <li><a href="#contact-us" className="text-gray-400 text-lg hover:text-white">Contact Us</a></li>
            </ul>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 text-lg hover:text-white"><FaGoogle /></a>
              <a href="#" className="text-gray-400 text-lg hover:text-white"><FaFacebook /></a>
              <a href="#" className="text-gray-400 text-lg hover:text-white"><FaTwitter /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Locations</h3>
            <div className="space-y-4">
              {[
                { title: "Air Warehouse", address: "99/5, MGR Salai, Nagalkeni, Chromepet, Chennai - 600 044." },
                { title: "Sea Warehouse Unit 1", address: "Door No. 90, G.N.T Road, Ponniamman Medu, Madhavaram, Chennai - 600060." },
                { title: "Sea Warehouse Unit 2", address: "SY. No 2/1A & 3/3A, Kathirvedu Village, Puzhal, Ambattur Taluk, Chennai - 600 066" },
                { title: "General warehouse - 3PL", address: "185/1, Inflow Technologies Pvt. Ltd. C/O CWC Imports Pvt. Ltd., Adam Nagar Main Road, Nagalkeni, Chennai - 600044." }
              ].map((location, index) => (
                <div key={index} className='flex items-center justify-center md:justify-start'>
                  <FaMapMarkerAlt className="inline mr-2 text-gray-400" size={24} />
                  <div>
                    <p className="font-semibold">{location.title}</p>
                    <p className="text-sm w-56 text-lightgray">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-lightgray">Copyright © 2024 CWC IMPORT PVT.LTD. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
