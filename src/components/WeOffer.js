const WeOffer = ({ servicename, paragraph }) => {
    return (
      <div className="relative mt-4 group overflow-hidden">
        <div className="relative z-10 bg-gray-700 h-24 rounded-lg transition-all duration-300 py-2 group-hover:h-36">
          <h1 className="text-lightgray px-10 py-6 text-xl font-inter font-medium">{servicename}</h1>
        </div>
        <p className="text-lightgray px-10 py-6 text-lg font-inter font-medium absolute bottom-0 left-0 right-0 transform translate-y-full opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {paragraph}
        </p>
      </div>
    );
  }
  
  export default WeOffer;
  