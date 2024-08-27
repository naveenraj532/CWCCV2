export const MHE = ({ video, servicename, desc }) => {
    return (
      <div className="relative w-64 sm:w-96 h-64 drop-shadow-2xl overflow-hidden group perspective-1000 transition-transform duration-300 hover:scale-105 rounded-lg mt-6">
        {/* 3D container for rotation */}
        <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-x-360">
          
          {/* Initial state: Video */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <video 
              src={video} 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop 
            />
            
            <div className="absolute bottom-0 left-0 right-0  text-white text-center transition-opacity duration-700 group-hover:opacity-0">
              <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-t-sm">
                <h1 className="font-montserrat text-2xl sm:text-2xl font-bold" style={{ textShadow: "10px 10px 70px rgba(0, 0, 0, 1)" }}>
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
    );
  };
  
  export default MHE;
  