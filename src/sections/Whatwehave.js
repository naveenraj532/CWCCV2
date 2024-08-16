const Whatwehave = ({ image, name, desc }) => {
  return (
    <div className="relative w-56 h-72 drop-shadow-2xl overflow-hidden group perspective-1000  transition-transform duration-300 hover:scale-125 hover: rounded-lg">
      {/* 3D container to enable rotation */}
      <div className="relative w-full h-full transform transition-transform duration-700 group-hover:rotate-x-360">
        {/* Initial Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg transition-opacity duration-700 group-hover:opacity-0"></div>

        {/* Image */}
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />

        {/* Text overlay at the bottom initially */}
        <div className="absolute bottom-0 left-0 right-0 py-10 text-white text-center transition-opacity duration-700 group-hover:opacity-0">
          <div className="py-3 drop-shadow-2xl bg-gray-700  bg-opacity-100 px rounded-sm">
            <h1 className="font-montserrat text-sm font-bold" style={{"text-shadow": "6px 6px 40px rgba(0, 0, 0, 1);"}}>
              {name}
            </h1>
          </div>
        </div>


        {/* Hover state overlay and centered text */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center rounded-lg text-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <h1 className="font-montserrat text-md px-5 font-bold text-white">{name}</h1>
          <div className="bg-blue w-32 h-0.5 mt-1 drop-shadow-xl rounded-full"></div>
          <p className="font-montserrat text-sm w-40 text-white mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Whatwehave;
