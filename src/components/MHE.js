import { useRef } from 'react';

export const MHE = ({ video, servicename, desc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  return (
    <div
      className="relative w-64 sm:w-96 h-64 overflow-hidden drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group perspective-1000 transition-transform duration-300 hover:scale-105 rounded-lg mt-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="relative w-full h-full transition-shadow duration-300 shadow-lg  group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
        

        <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-x-360">
          

          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <video 
              ref={videoRef}
              src={video} 
              className="w-full h-full object-cover" 
              muted 
              loop
            />
            
            <div className="absolute bottom-0 left-0 right-0 text-white text-center transition-opacity duration-700 group-hover:opacity-0">
              <div className="w-full h-full bg-gradient-to-t from-gray-950 via-gray-800 to-transparent p-4 rounded-t-sm">
                <h1 className="font-montserrat text-xl sm:text-xl font-bold" style={{ textShadow: "10px 10px 70px rgba(0, 0, 0, 1)" }}>
                  {servicename}
                </h1>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center rounded-lg text-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <h1 className="font-montserrat text-lg sm:text-xl px-4 font-bold text-white">{servicename}</h1>
            <div className="bg-blue w-24 sm:w-32 h-0.5 mt-1 drop-shadow-xl rounded-full"></div>
            <p className="font-montserrat text-sm sm:text-base w-64 sm:w-72 text-white mt-4 text-center px-4">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MHE;
