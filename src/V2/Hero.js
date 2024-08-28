import logo from "../assets/images/newlogonb.png";
import bgvideo from "../assets/videos/bgvideo-1.mp4";
import { FaWarehouse, FaUsers, FaTools } from "react-icons/fa";

export const Hero = () => {
  return (
    <main className="relative h-[800px] flex justify-center items-center bg-lightblack">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgvideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay to darken the video background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <img
          src={logo}
          alt="CWC Import Logo"
          className="animate-bounce w-32 max-sm:w-24 mx-auto mb-4"
        />
        <h1 className="font-Azonix animate-tracking-in-contract-bck text-4xl max-sm:text-xl max-md:text-3xl mb-4">
          CWC IMPORT PVT. LTD.
        </h1>
        <p className="animate-tracking-in-contract-bck font-Azonix text-blue text-2xl max-sm:text-sm max-md:text-lg mb-6">
          A Custom Notified Public Bonded Warehouse
        </p>
        
        {/* Data Highlights */}
        <div className="flex flex-wrap gap-4 justify-center items-center p-4 max-sm:flex-col">
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow">
            <span className="text-white text-4xl max-sm:text-xl"><FaWarehouse /></span>
            <p className="font-Azonix text-white text-sm max-sm:text-sm max-md:text-base">
              2 Lakhs Sq.ft. Bonded & <br /> General Warehouse
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow">
            <span className="text-white text-4xl max-sm:text-xl"><FaUsers /></span>
            <p className="font-Azonix text-white text-lg max-sm:text-sm max-md:text-base">
              40+ Clients
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg shadow">
            <span className="text-white text-4xl max-sm:text-xl"><FaTools /></span>
            <p className="font-Azonix text-white text-lg max-sm:text-sm max-md:text-base">
              6 Services
            </p>
          </div>
        </div>
        
        {/* Button */}
        <button
          className="mt-6 px-6 py-2 border-2 border-blue text-white rounded hover:bg-blue hover:text-black transition duration-300"
          onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
        >
          Request a Quote
        </button>
      </div>
    </main>
  );
};
