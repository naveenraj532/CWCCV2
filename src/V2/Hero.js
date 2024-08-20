import logo from "../assets/images/newlogonb.png";
import bgvideo from "../assets/videos/bgvideo-1.mp4";

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
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col space-y-5 justify-center items-center text-center">
        <img src={logo} width={200} alt="CWC Import Logo" className="animate-bounce" />
        <h1 className="font-Azonix animate-tracking-in-contract-bck text-4xl text-lightgray sm:text-5xl md:text-3xl">
          CWC IMPORT PVT. LTD.
        </h1>
        <p className="animate-tracking-in-contract-bck font-Azonix text-blue text-2xl sm:text-xl md:text-2xl">
          A Custom Notified Public Bonded Warehouse
        </p>
        <button
            className="mt-4 px-4 py-2 bg-transparent border-2 border-blue border-solid text-white rounded hover:bg-blue transition duration-300"
            onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Quote
        </button>

      </div>
    </main>
  );
};
